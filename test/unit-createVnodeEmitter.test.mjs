import assert from 'assert'
import createVnodeEmitter from '../src/js/createVnodeEmitter.mjs'


//createVnodeEmitter之契約測試: 以Vue 2之vnode形狀建立監聽物件, 驗證觸發對象、優先序、更新、作廢與錯誤寫法之警告
//  Vue之監聽器(invoker)為函數, 其fns為使用端之處理函式; 觸發器須呼叫invoker本身(由invoker依序呼叫陣列並交Vue錯誤處理), 不可直接呼叫fns


//mkInvoker, 仿Vue之invoker: 呼叫時記錄'invoker', 其fns被直接呼叫時記錄'fns'
function mkInvoker(rec, tag) {
    let invoker = function(data) {
        rec.push(`${tag}:invoker:${data}`)
    }
    invoker.fns = function(data) {
        rec.push(`${tag}:fns:${data}`)
    }
    return invoker
}


//captureWarn, 收集console.warn
function captureWarn(fn) {
    let ws = []
    let ow = console.warn
    console.warn = (...args) => {
        ws.push(args.join(' '))
    }
    try {
        fn()
    }
    finally {
        console.warn = ow
    }
    return ws
}


describe(`createVnodeEmitter`, function() {

    it(`should call the invoker itself with the data, not its fns`, function() {
        let rec = []
        let vnode = { data: { on: { domresize: mkInvoker(rec, 'el') } } }
        let em = createVnodeEmitter(vnode, 'domresize', 'domresize')
        em.emit(1)
        assert.strict.deepStrictEqual(rec, ['el:invoker:1'])
    })

    it(`should call the custom listener of a component tag, even when it also has an other-name .native listener`, function() {
        //元件vnode之data.on為.native監聽(Vue將nativeOn移入data.on), 自訂事件在componentOptions.listeners; 舊寫法先取data.on致此情形自訂事件永不呼叫
        let rec = []
        let vnode = {
            componentOptions: { listeners: { domresize: mkInvoker(rec, 'custom') } },
            data: { on: { click: mkInvoker(rec, 'click') } },
        }
        let em = createVnodeEmitter(vnode, 'domresize', 'domresize')
        em.emit(2)
        assert.strict.deepStrictEqual(rec, ['custom:invoker:2'])
    })

    it(`should call only the custom listener when a component tag has both the custom and the same-name .native listener`, function() {
        let rec = []
        let vnode = {
            componentOptions: { listeners: { domresize: mkInvoker(rec, 'custom') } },
            data: { on: { domresize: mkInvoker(rec, 'native') } },
        }
        let em = createVnodeEmitter(vnode, 'domresize', 'domresize')
        em.emit(3)
        assert.strict.deepStrictEqual(rec, ['custom:invoker:3'])
    })

    it(`should call the .native listener of a component tag when it has no custom listener`, function() {
        let rec = []
        let vnode = {
            componentOptions: { listeners: {} },
            data: { on: { domresize: mkInvoker(rec, 'native') } },
        }
        let em = createVnodeEmitter(vnode, 'domresize', 'domresize')
        em.emit(4)
        assert.strict.deepStrictEqual(rec, ['native:invoker:4'])
    })

    it(`should not throw when there is no listener or the listener is not a function`, function() {
        let em1 = createVnodeEmitter({ data: {} }, 'domresize', 'domresize', { warn: false })
        let em2 = createVnodeEmitter({ data: { on: { domresize: { fns: () => {} } } } }, 'domresize', 'domresize', { warn: false })
        let em3 = createVnodeEmitter(null, 'domresize', 'domresize', { warn: false })
        assert.doesNotThrow(() => {
            em1.emit(5)
            em2.emit(5)
            em3.emit(5)
        })
    })

    it(`should use the listeners of the new vnode after update, so listeners added, removed or renamed after binding are followed`, function() {
        let rec = []
        let em = createVnodeEmitter({ data: { on: {} } }, 'domresize', 'domresize')
        em.emit('a')
        em.update({ data: { on: { domresize: mkInvoker(rec, 'added') } } })
        em.emit('b')
        em.update({ data: { on: {} } })
        em.emit('c')
        em.update({ componentOptions: { listeners: { domresize: mkInvoker(rec, 'custom') } }, data: {} })
        em.emit('d')
        assert.strict.deepStrictEqual(rec, ['added:invoker:b', 'custom:invoker:d'])
    })

    it(`should not call after dispose, and ignore update after dispose`, function() {
        let rec = []
        let em = createVnodeEmitter({ data: { on: { domresize: mkInvoker(rec, 'el') } } }, 'domresize', 'domresize')
        em.dispose()
        em.emit(6)
        em.update({ data: { on: { domresize: mkInvoker(rec, 'new') } } })
        em.emit(7)
        assert.strict.deepStrictEqual(rec, [])
    })

    it(`should warn once for each misbinding at binding`, function() {
        let cases = [
            [{ data: { on: { '~domresize': () => {} } } }, '不支援.once、.capture、.passive修飾字'],
            [{ data: { on: { '!domresize': () => {} } } }, '不支援.once、.capture、.passive修飾字'],
            [{ data: { on: { '&domresize': () => {} } } }, '不支援.once、.capture、.passive修飾字'],
            [{ componentOptions: { listeners: { '~domresize': () => {} } }, data: {} }, '不支援.once、.capture、.passive修飾字'],
            [{ data: { on: { domResize: () => {} } } }, '事件名須為@domresize, 目前為@domResize'],
            [{ data: { on: { 'dom-resize': () => {} } } }, '事件名須為@domresize, 目前為@dom-resize'],
            [{ data: { attrs: { domresize: 'h' } } }, 'domresize="h"為靜態屬性, 應為@domresize'],
            [{ data: { nativeOn: { domresize: () => {} } } }, '元素上之@domresize.native無效, 應為@domresize'],
        ]
        for (let [vnode, msg] of cases) {
            let ws = captureWarn(() => {
                createVnodeEmitter(vnode, 'domresize', 'domresize')
            })
            assert.strict.deepStrictEqual(ws.length, 1, JSON.stringify(Object.keys(vnode.data)))
            assert.ok(ws[0].startsWith('[v-domresize] '), ws[0])
            assert.ok(ws[0].includes(msg), ws[0])
        }
    })

    it(`should not warn for correct bindings, for .native on a component tag, or when opt.warn is false`, function() {
        let ws = captureWarn(() => {
            createVnodeEmitter({ data: { on: { domresize: () => {}, click: () => {} } } }, 'domresize', 'domresize')
            createVnodeEmitter({ componentOptions: { listeners: { domresize: () => {} } }, data: { on: { domresize: () => {} }, nativeOn: { domresize: () => {} } } }, 'domresize', 'domresize')
            createVnodeEmitter({ data: { on: { '~domresize': () => {} } } }, 'domresize', 'domresize', { warn: false })
        })
        assert.strict.deepStrictEqual(ws, [])
    })

})
