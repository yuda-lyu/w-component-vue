import assert from 'assert'
import createDetectDirective from '../src/js/createDetectDirective.mjs'


//createDetectDirective之契約測試: 以可觀察之假偵測器驗證偵測類指令之共同生命週期
//  指令值(啟用、停用、設定)、宿主重繪後之重建或重新比較、監聽跟隨、解除後不送、綁定識別(元件標籤與其根元素為同一元素)、警告


let tick = () => new Promise((resolve) => setTimeout(resolve, 0))


class Ele {
    constructor() {
        this.nodeType = 1
        this.attrs = {}
    }

    setAttribute(k, v) {
        this.attrs[k] = String(v)
    }

    getAttribute(k) {
        return (k in this.attrs) ? this.attrs[k] : null
    }
}


//mkDir, 建立指令與假偵測器紀錄: dets為歷次建立之偵測器, 各有cfg、emit、cleared、refreshed
function mkDir(opt = {}) {
    let dets = []
    let dir = createDetectDirective({
        name: 'domtest',
        attr: 'ev-test',
        keys: opt.keys || ['sync', 'tolerancePixel', 'attributeFilter', 'getSize', 'getBase', 'event', 'refreshKey'],
        refreshKey: 'refreshKey',
        normalize: opt.normalize,
        create: (el, cfg, emit) => {
            let d = { el, cfg, emit, cleared: 0, refreshed: 0 }
            dets.push(d)
            if (opt.noDetector) {
                return null
            }
            return {
                clear: () => {
                    d.cleared++
                },
                refresh: () => {
                    d.refreshed++
                },
            }
        },
    })
    return { dir, dets }
}


//mkVnode, 元素vnode, 記錄處理函式收到之資料
function mkVnode(rec, tag = 'h') {
    let invoker = (data) => {
        rec.push(`${tag}:${data}`)
    }
    return { data: { on: { domtest: invoker } } }
}


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


describe(`createDetectDirective`, function() {

    it(`should set the attribute and create a detector with the default settings when no value is given`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let rec = []
        dir.bind(el, {}, mkVnode(rec))
        dets[0].emit(1)
        assert.ok(/^r/.test(el.getAttribute('ev-test')))
        assert.strict.deepStrictEqual([dets.length, dets[0].cfg, rec], [1, {}, ['h:1']])
    })

    it(`should not create a detector for false or null, and create one when enabled later`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let rec = []
        let vn = mkVnode(rec)
        dir.bind(el, { value: false }, vn)
        dir.componentUpdated(el, { value: null }, vn)
        let n0 = dets.length
        dir.componentUpdated(el, { value: true }, vn)
        dets[0].emit(2)
        assert.ok(/^r/.test(el.getAttribute('ev-test')))
        assert.strict.deepStrictEqual([n0, dets.length, rec], [0, 1, ['h:2']])
    })

    it(`should clear the detector and stop forwarding when disabled after binding`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let rec = []
        let vn = mkVnode(rec)
        dir.bind(el, {}, vn)
        dir.componentUpdated(el, { value: false }, vn)
        dets[0].emit(3)
        assert.strict.deepStrictEqual([dets[0].cleared, rec], [1, []])
    })

    it(`should not rebuild when an equal setting object is given again (template object literal)`, async function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        dir.bind(el, { value: { sync: true, tolerancePixel: 2, attributeFilter: ['class'] } }, vn)
        for (let i = 0; i < 5; i++) {
            dir.componentUpdated(el, { value: { sync: true, tolerancePixel: 2, attributeFilter: ['class'] } }, vn)
        }
        await tick()
        assert.strict.deepStrictEqual([dets.length, dets[0].cleared, dets[0].refreshed], [1, 0, 0])
    })

    it(`should not rebuild for unknown keys holding new objects or functions on every render, and warn about them once`, async function() {
        //未知鍵之值若為物件或函數且列入比較, 每次重繪皆判為改變而重建, 重建之首次量測必觸發, 處理函式再寫入狀態即成無限迴圈
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        let ws = captureWarn(() => {
            dir.bind(el, { value: { sync: true, extra: {}, cb: () => {} } }, vn)
            for (let i = 0; i < 5; i++) {
                dir.componentUpdated(el, { value: { sync: true, extra: {}, cb: () => {} } }, vn)
            }
        })
        await tick()
        assert.strict.deepStrictEqual([dets.length, dets[0].cfg, dets[0].refreshed], [1, { sync: true }, 0])
        assert.strict.deepStrictEqual(ws.length, 1)
        assert.ok(ws[0].startsWith('[v-domtest] 設定鍵extra、cb不適用而不採用'), ws[0])
    })

    it(`should rebuild with the new setting when a setting value changes, and close the old detector`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let rec = []
        let vn = mkVnode(rec)
        dir.bind(el, { value: { tolerancePixel: 2 } }, vn)
        dir.componentUpdated(el, { value: { tolerancePixel: 5 } }, vn)
        dets[0].emit('old')
        dets[1].emit('new')
        assert.strict.deepStrictEqual([dets.length, dets[0].cleared, dets[1].cfg, rec], [2, 1, { tolerancePixel: 5 }, ['h:new']])
    })

    it(`should detect an in-place change of a nested setting value`, function() {
        //原地修改之設定物件(例如陣列內容)伴隨宿主重繪時亦須重建, 快照以深拷貝保存
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        let value = { attributeFilter: ['class'] }
        dir.bind(el, { value }, vn)
        value.attributeFilter.push('style')
        dir.componentUpdated(el, { value }, vn)
        assert.strict.deepStrictEqual([dets.length, dets[1].cfg.attributeFilter], [2, ['class', 'style']])
    })

    it(`should neither rebuild nor refresh when only function settings are replaced, and call the latest function`, async function() {
        //宿主重繪不自動重新比較: 重新比較會呼叫使用端函數, 其讀取之反應式狀態於hook內成為宿主依賴, 多實例共用基準時互相觸發
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        dir.bind(el, { value: { getBase: () => 'f1' } }, vn)
        dir.componentUpdated(el, { value: { getBase: () => 'f2' } }, vn)
        dir.componentUpdated(el, { value: { getBase: () => 'f3' } }, vn)
        await tick()
        let r = dets[0].cfg.getBase()
        assert.strict.deepStrictEqual([dets.length, dets[0].refreshed, r], [1, 0, 'f3'])
    })

    it(`should refresh once after the current batch without rebuilding when refreshKey changes`, async function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        dir.bind(el, { value: { refreshKey: 1, getBase: () => 1 } }, vn)
        dir.componentUpdated(el, { value: { refreshKey: 1, getBase: () => 1 } }, vn)
        await tick()
        let n0 = dets[0].refreshed
        dir.componentUpdated(el, { value: { refreshKey: 2, getBase: () => 1 } }, vn)
        dir.componentUpdated(el, { value: { refreshKey: 3, getBase: () => 1 } }, vn)
        let n1 = dets[0].refreshed
        await tick()
        assert.strict.deepStrictEqual([dets.length, n0, n1, dets[0].refreshed, dets[0].cfg.refreshKey], [1, 0, 0, 1, undefined])
    })

    it(`should not refresh a detector that has been rebuilt or cleared before the scheduled refresh runs`, async function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        dir.bind(el, { value: { refreshKey: 1 } }, vn)
        dir.componentUpdated(el, { value: { refreshKey: 2 } }, vn)
        dir.componentUpdated(el, { value: { refreshKey: 2, sync: true } }, vn)
        let el2 = new Ele()
        let vn2 = mkVnode([])
        dir.bind(el2, { value: { refreshKey: 1 } }, vn2)
        dir.componentUpdated(el2, { value: { refreshKey: 2 } }, vn2)
        dir.unbind(el2, {}, vn2)
        await tick()
        assert.strict.deepStrictEqual([dets.length, dets[0].refreshed, dets[1].refreshed, dets[2].refreshed], [3, 0, 0, 0])
    })

    it(`should report an error thrown by a function setting once per key and pass it on`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        let getBase = () => {
            throw new Error('gb')
        }
        dir.bind(el, { value: { getBase } }, vn)
        let es = []
        let oe = console.error
        console.error = (...args) => {
            es.push(args[0])
        }
        let thrown = 0
        try {
            for (let i = 0; i < 3; i++) {
                try {
                    dets[0].cfg.getBase()
                }
                catch (err) {
                    thrown++
                }
            }
        }
        finally {
            console.error = oe
        }
        assert.strict.deepStrictEqual([thrown, es], [3, ['[v-domtest] 設定函數getBase拋錯']])
    })

    it(`should rebuild when a function setting is added or removed`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        dir.bind(el, { value: {} }, vn)
        dir.componentUpdated(el, { value: { getSize: () => ({ width: 1, height: 1 }) } }, vn)
        dir.componentUpdated(el, { value: {} }, vn)
        assert.strict.deepStrictEqual([dets.length, dets[0].cleared, dets[1].cleared], [3, 1, 1])
    })

    it(`should do nothing on re-render without function settings`, async function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        dir.bind(el, {}, vn)
        dir.componentUpdated(el, {}, vn)
        dir.componentUpdated(el, { value: true }, vn)
        await tick()
        assert.strict.deepStrictEqual([dets.length, dets[0].cleared, dets[0].refreshed], [1, 0, 0])
    })

    it(`should follow listeners added or removed after binding`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let rec = []
        dir.bind(el, {}, { data: { on: {} } })
        dets[0].emit(1)
        dir.componentUpdated(el, {}, mkVnode(rec, 'added'))
        dets[0].emit(2)
        dir.componentUpdated(el, {}, { data: { on: {} } })
        dets[0].emit(3)
        assert.strict.deepStrictEqual(rec, ['added:2'])
    })

    it(`should clear, stop forwarding and reset the attribute after unbind`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let rec = []
        let vn = mkVnode(rec)
        dir.bind(el, {}, vn)
        dir.unbind(el, {}, vn)
        dets[0].emit(4)
        dir.componentUpdated(el, {}, vn)
        assert.strict.deepStrictEqual([dets.length, dets[0].cleared, rec, el.getAttribute('ev-test')], [1, 1, [], 'null'])
    })

    it(`should keep the bindings of a component tag and of its root element apart`, function() {
        //元件標籤上之指令與其根元素上之指令為同一DOM元素, 以元素或其屬性識別會互相覆蓋: 事件送錯處理函式、解除其一時清掉另一個
        let { dir, dets } = mkDir()
        let el = new Ele()
        let rec = []
        let vm = {}
        let vnComp = { componentInstance: vm, componentOptions: { listeners: { domtest: (d) => rec.push(`comp:${d}`) } }, data: {} }
        let vnRoot = mkVnode(rec, 'root')
        dir.bind(el, {}, vnRoot)
        dir.bind(el, {}, vnComp)
        dir.componentUpdated(el, {}, vnRoot)
        dir.componentUpdated(el, {}, vnComp)
        dets[0].emit(1)
        dets[1].emit(2)
        dir.unbind(el, {}, vnComp)
        dets[0].emit(3)
        dets[1].emit(4)
        assert.strict.deepStrictEqual([rec, dets[0].cleared, dets[1].cleared], [['root:1', 'comp:2', 'root:3'], 0, 1])
    })

    it(`should treat other value types as the default and warn once per message, including values that become invalid later`, function() {
        let { dir, dets } = mkDir()
        let el = new Ele()
        let vn = mkVnode([])
        let ws = captureWarn(() => {
            dir.bind(el, { value: {} }, vn)
            dir.componentUpdated(el, { value: 'yes' }, vn)
            dir.componentUpdated(el, { value: 'no' }, vn)
            dir.componentUpdated(el, { value: [1] }, vn)
            dir.componentUpdated(el, { value: [2] }, vn)
        })
        assert.strict.deepStrictEqual(ws, [
            '[v-domtest] 指令值須為true、false、null或物件, 目前為string, 視同未給(啟用並使用預設設定)',
            '[v-domtest] 指令值須為true、false、null或物件, 目前為array, 視同未給(啟用並使用預設設定)',
        ])
        assert.strict.deepStrictEqual([dets.length, dets[0].cleared], [1, 0])
    })

    it(`should apply normalize and warn its messages once`, function() {
        let { dir, dets } = mkDir({
            normalize: (cfg) => {
                let warns = cfg.event === 'bad' ? ['bad event'] : []
                return { cfg: { ...cfg, event: cfg.event === 'resize' ? 'resize' : 'resizeWithWindow' }, warns }
            },
        })
        let el = new Ele()
        let vn = mkVnode([])
        let ws = captureWarn(() => {
            dir.bind(el, { value: { event: 'bad' } }, vn)
            dir.componentUpdated(el, { value: { event: 'bad' } }, vn)
        })
        assert.strict.deepStrictEqual([ws, dets.length, dets[0].cfg], [['[v-domtest] bad event'], 1, { event: 'resizeWithWindow' }])
    })

    it(`should tolerate a create that returns no detector`, async function() {
        let { dir, dets } = mkDir({ noDetector: true })
        let el = new Ele()
        let vn = mkVnode([])
        dir.bind(el, { value: { getBase: () => 1, refreshKey: 1 } }, vn)
        dir.componentUpdated(el, { value: { getBase: () => 2, refreshKey: 2 } }, vn)
        await tick()
        dir.componentUpdated(el, { value: false }, vn)
        dir.unbind(el, {}, vn)
        assert.strict.deepStrictEqual(dets.length, 1)
    })

})
