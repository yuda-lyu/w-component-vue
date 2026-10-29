import assert from 'assert'
import domResize from '../src/js/domResize.mjs'
import { mkTrace, count } from './tools/traceKit.mjs'


//v-domresize指令之契約測試: 以真的指令與真的wsemi domDetect(ResizeObserver模式)驅動, 只把瀏覽器替換為假環境
//  假ResizeObserver只記錄觀察對象, 由測試呼叫fireRO觸發回呼; 假元素之尺寸由測試直接設定
//  瀏覽器本身之語義(開始觀察必回報、行內元素不回報等)非本檔所能驗證, 已另以真瀏覽器實測
//  同步以事件而非等待時間(規格: 計時器相關函數之觀察回調與測試): 指令值帶onTrace(轉交wsemi domDetect之opt.onTrace), 等第N個emit事件後再斷言;
//  量測與是否判定為變化(check事件)為fireRO內同步完成, 故「未發出」直接以check事件(changed為false)斷言, 不需觀察窗


//flush, 讓出一個macrotask: 其前已排定之microtask(如指令之重新比較)皆已執行; 順序由事件迴圈決定, 與負載無關
let flush = () => new Promise((resolve) => setImmediate(resolve))

//emits, 已發出至少n次resize事件(emit事件於派發給指令之前同步通知, 續行時指令已轉發完畢)
let emits = (n) => (es) => count(es, 'emit') >= n


class Ele {
    constructor(w, h) {
        this.nodeType = 1
        this.isConnected = true
        this.attrs = {}
        this.size(w, h)
    }

    size(w, h) {
        this.offsetWidth = w
        this.offsetHeight = h
        this.clientWidth = w
        this.clientHeight = h
    }

    setAttribute(k, v) {
        this.attrs[k] = String(v)
    }

    getAttribute(k) {
        return (k in this.attrs) ? this.attrs[k] : null
    }
}


//mkEnv, 建立假window與document並覆蓋全域; RO與MO皆為可手動觸發之假物件
function mkEnv() {
    let env = { ros: [], mos: [], listeners: [] }

    class RO {
        constructor(cb) {
            this.cb = cb
            this.targets = new Set()
            env.ros.push(this)
        }

        observe(t) {
            this.targets.add(t)
        }

        unobserve(t) {
            this.targets.delete(t)
        }

        disconnect() {
            this.targets.clear()
        }
    }

    class MO {
        constructor(cb) {
            this.cb = cb
            env.mos.push(this)
        }

        observe() {}

        disconnect() {}
    }

    globalThis.window = {
        innerWidth: 1200,
        innerHeight: 800,
        ResizeObserver: RO,
        MutationObserver: MO,
        addEventListener: (type, fn) => {
            env.listeners.push({ type, fn })
        },
        removeEventListener: (type, fn) => {
            env.listeners = env.listeners.filter((l) => !(l.type === type && l.fn === fn))
        },
        getComputedStyle: () => ({ display: 'block' }),
    }
    globalThis.document = { documentElement: {} }

    //fireRO, 瀏覽器回報ele之尺寸變化; 真瀏覽器於同一次變化會回報border-box與content-box兩個觀察器
    env.fireRO = (ele) => {
        for (let ro of env.ros) {
            if (ro.targets.has(ele)) {
                ro.cb([{ target: ele }], ro)
            }
        }
    }

    //resizeWindow, 視窗resize事件(元素尺寸不變)
    env.resizeWindow = () => {
        for (let l of env.listeners.slice()) {
            if (l.type === 'resize') {
                l.fn({ type: 'resize' })
            }
        }
    }

    return env
}


//mkBinding, 以Vue 2之vnode形狀建立綁定(監聽器為Vue建立之invoker, 即函數), 記錄指令轉發之domresize事件
//  tr為onTrace之紀錄器, val(value)為補上onTrace之指令值(每次重繪之指令值皆須帶, 有無onTrace之改變會重建偵測器), 停用(false、null)者原樣;
//  waitRec(n)等指令轉發了n筆domresize事件(不依賴onTrace, 供onTrace本身為受測對象者同步用)
function mkBinding(env, ele, value, opt = {}) {
    let d = domResize()
    let rec = []
    let tr = mkTrace()
    let waits = []
    let vnode = {
        data: {
            on: {
                domresize: (msg) => {
                    rec.push(msg)
                    for (let w of waits.slice()) {
                        if (rec.length >= w.n) {
                            waits.splice(waits.indexOf(w), 1)
                            w.resolve()
                        }
                    }
                },
            },
        },
    }
    let val = (v) => {
        if (v === false || v === null) {
            return v
        }
        let o = (v && typeof v === 'object') ? v : {}
        return opt.noTrace ? o : { ...o, onTrace: tr.fn }
    }
    let waitRec = (n) => {
        if (rec.length >= n) {
            return Promise.resolve()
        }
        return new Promise((resolve) => waits.push({ n, resolve }))
    }
    d.bind(ele, { value: val(value) }, vnode)
    return { d, rec, vnode, tr, val, waitRec }
}


describe(`domResize`, function() {

    after(function() {
        delete globalThis.window
        delete globalThis.document
    })

    it(`should forward dom events with their size and direction`, async function() {
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        el.size(200, 40)
        env.fireRO(el)
        await b.tr.until(emits(2), 'emit#2')
        assert.strict.deepStrictEqual(b.rec.map((m) => [m.from, m.snew.offsetWidth, m.smode.width]), [['dom', 300, 'larger'], ['dom', 200, 'smaller']])
        b.d.unbind(el)
    })

    it(`should carry no direction on window events, even after a change within the tolerance`, async function() {
        //元素容許誤差內之變化(如拖曳分隔條之最後1px; wsemi 1.9.8起同向者自行發出dom事件); 其後之視窗事件不代表元素尺寸變化, 不得帶出方向,
        //  否則依smode判斷變寬或變窄之使用端(WDrawer之autoSwitchTo*)會於不改尺寸之視窗resize時誤切換(wsemi 1.9.4有此問題, 1.9.5修正)
        let env = mkEnv()
        let el = new Ele(720, 400)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        el.size(721, 400)
        env.fireRO(el)
        await b.tr.until(emits(2), 'emit#2(容許誤差內同向之變化自行發出dom事件)')
        env.resizeWindow()
        let w = b.rec.filter((m) => m.from === 'window')
        assert.strict.deepStrictEqual(w.length, 1)
        assert.strict.deepStrictEqual(w[0].smode, { width: '', height: '' })
        assert.strict.deepStrictEqual([w[0].snew.offsetWidth, w[0].snew.offsetHeight], [721, 400])
        b.d.unbind(el)
    })

    it(`should carry no direction on window events after a narrowing within the tolerance`, async function() {
        let env = mkEnv()
        let el = new Ele(482, 400)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        el.size(481, 400)
        env.fireRO(el)
        await b.tr.until(emits(2), 'emit#2(容許誤差內同向之變化自行發出dom事件)')
        env.resizeWindow()
        let w = b.rec.filter((m) => m.from === 'window')
        assert.strict.deepStrictEqual(w.map((m) => m.smode), [{ width: '', height: '' }])
        b.d.unbind(el)
    })

    it(`should carry no direction for an axis within the tolerance when the other axis triggers a dom event`, async function() {
        //寬先+1px(容許誤差內之同向變化, wsemi 1.9.8起自行發出dom事件), 之後高+40px觸發dom事件: 該事件之寬方向須為空,
        //  否則全高之抽屜遇視窗高度變化時, WDrawer之autoSwitchTo*會依殘餘之寬方向誤切換(wsemi 1.9.4有此問題, 1.9.5修正)
        let env = mkEnv()
        let el = new Ele(720, 400)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        el.size(721, 400)
        env.fireRO(el)
        await b.tr.until(emits(2), 'emit#2')
        el.size(721, 440)
        env.fireRO(el)
        await b.tr.until(emits(3), 'emit#3')
        assert.strict.deepStrictEqual(b.rec.map((m) => [m.from, m.snew.offsetWidth, m.snew.offsetHeight, m.smode.width, m.smode.height]), [['dom', 720, 400, 'larger', 'larger'], ['dom', 721, 400, 'larger', ''], ['dom', 721, 440, '', 'larger']])
        b.d.unbind(el)
    })

    it(`should forward toleranceBounce, and keep a change within the tolerance unforwarded when it is 0`, async function() {
        //toleranceBounce原樣作為domDetect之opt: 給0時容許誤差內之變化一律不發出(wsemi 1.9.7以前之行為), 寬+1px不發dom事件, 高+40px觸發之事件寬方向為空
        let env = mkEnv()
        let el = new Ele(720, 400)
        let b = mkBinding(env, el, { toleranceBounce: 0 })
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        el.size(721, 400)
        env.fireRO(el)
        //寬+1px已量測且判定為未變化(check事件於fireRO內同步通知), 不會排定發出, 故不需等待即可斷言未發出
        assert.strict.deepStrictEqual(b.tr.of('check').filter((e) => e.width === 721).map((e) => e.changed), [false, false])
        assert.strict.deepStrictEqual(count(b.tr.events, 'emit'), 1)
        el.size(721, 440)
        env.fireRO(el)
        await b.tr.until(emits(2), 'emit#2')
        assert.strict.deepStrictEqual(b.rec.map((m) => [m.from, m.snew.offsetWidth, m.snew.offsetHeight, m.smode.width, m.smode.height]), [['dom', 720, 400, 'larger', 'larger'], ['dom', 721, 440, '', 'larger']])
        b.d.unbind(el)
    })

    it(`should carry the current window size on window events`, async function() {
        //視窗事件之snew.windowWidth須為事件當下之視窗寬, 否則元素尺寸未變時一直帶著上次量測時之視窗寬, 使用端依視窗寬判斷版面會用到過期值
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1(首次量測後視窗事件才發出)')
        globalThis.window.innerWidth = 420
        env.resizeWindow()
        globalThis.window.innerWidth = 1200
        env.resizeWindow()
        let w = b.rec.filter((m) => m.from === 'window')
        assert.strict.deepStrictEqual(w.map((m) => m.snew.windowWidth), [420, 1200])
        b.d.unbind(el)
    })

    it(`should stop forwarding after unbind`, async function() {
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        let n = b.rec.length
        let nTrace = b.tr.events.length
        b.d.unbind(el)
        el.size(400, 40)
        env.fireRO(el)
        env.resizeWindow()
        //解除後觀察器已斷線、視窗監聽已移除, 量測(check事件)為同步, 解除後無新事件即未量測, 亦不會排定發出, 故不需觀察窗
        assert.strict.deepStrictEqual([n, b.rec.length, env.listeners.length, b.tr.events.length - nTrace], [1, 1, 0, 0])
    })

    it(`should do nothing but warn when the element has no domresize listener`, async function() {
        //使用端漏寫@而成靜態屬性domresize="domresize"(WPanelScale曾如此)時, 指令收不到處理器, 不得拋錯, 並於綁定時警告
        let env = mkEnv()
        let el = new Ele(300, 40)
        let d = domResize()
        let tr = mkTrace()
        let ws = []
        let ow = console.warn
        console.warn = (...args) => {
            ws.push(args.join(' '))
        }
        try {
            d.bind(el, { value: { onTrace: tr.fn } }, { data: { attrs: { domresize: 'domresize' } } })
        }
        finally {
            console.warn = ow
        }
        assert.doesNotThrow(() => {
            env.fireRO(el)
            env.resizeWindow()
        })
        //等延後發出之事件已派發給指令(無處理器)才續行, 其間拋錯會成為未捕捉例外使本案失敗
        await tr.until(emits(1), 'emit#1')
        d.unbind(el)
        assert.strict.deepStrictEqual(ws, ['[v-domresize] domresize="domresize"為靜態屬性, 應為@domresize'])
    })

    it(`should not forward window events when event is resize`, async function() {
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el, { event: 'resize' })
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        env.resizeWindow()
        el.size(200, 40)
        env.fireRO(el)
        await b.tr.until(emits(2), 'emit#2')
        assert.strict.deepStrictEqual(b.rec.map((m) => [m.snew.offsetWidth, m.smode.width]), [[300, 'larger'], [200, 'smaller']])
        b.d.unbind(el, {}, b.vnode)
    })

    it(`should create no observer while disabled, and start detecting when enabled after a re-render`, async function() {
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el, false)
        env.resizeWindow()
        let n0 = [env.ros.length, env.listeners.length, b.rec.length]
        b.d.componentUpdated(el, { value: b.val(true) }, b.vnode)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')
        assert.strict.deepStrictEqual([n0, env.ros.length, b.rec.map((m) => m.snew.offsetWidth)], [[0, 0, 0], 2, [300]])
        b.d.unbind(el, {}, b.vnode)
        assert.strict.deepStrictEqual(env.listeners.length, 0)
    })

    it(`should compare again with getBase after refreshKey changes, but not on a plain re-render`, async function() {
        //getBase回傳使用端目前套用之寬度; 使用端寬度因尺寸以外之原因改變(如固定寬度被取消)時, 以refreshKey要求重新比較
        let env = mkEnv()
        let el = new Ele(300, 40)
        let applied = 300
        let value = (rk) => ({ event: 'resize', getBase: () => ({ width: applied, height: null }), refreshKey: rk })
        let b = mkBinding(env, el, value(0))
        env.fireRO(el)
        //掛載時尺寸與使用端一致: 兩個觀察器之回報皆判定為未變化(check事件同步通知), 不發出
        assert.strict.deepStrictEqual(b.tr.of('check').map((e) => [e.source, e.changed]), [['observer', false], ['observer', false]])
        let n0 = b.rec.length
        applied = 0
        b.d.componentUpdated(el, { value: b.val(value(0)) }, b.vnode)
        //一般重繪不重新比較(重新比較為microtask排定, 排定者必於flush前執行, 其量測(check事件)為同步通知): 之後仍無來源為refresh之量測
        await flush()
        let n1 = b.rec.length
        assert.strict.deepStrictEqual(b.tr.of('check').filter((e) => e.source === 'refresh').length, 0)
        b.d.componentUpdated(el, { value: b.val(value(1)) }, b.vnode)
        await b.tr.until(emits(1), 'refresh後之emit#1')
        assert.strict.deepStrictEqual(b.tr.of('check').filter((e) => e.source === 'refresh').length, 1)
        assert.strict.deepStrictEqual([n0, n1, b.rec.map((m) => m.snew.offsetWidth)], [0, 0, [300]])
        b.d.unbind(el, {}, b.vnode)
    })

})


describe(`domResize onTrace`, function() {

    after(function() {
        delete globalThis.window
        delete globalThis.document
    })

    //run, 跑同一情境(首次量測300、改為200、視窗事件)並回傳指令轉發之結果; onTrace給undefined表示不傳
    //  同步以指令轉發之事件(waitRec), 不依賴onTrace本身(onTrace為受測對象, 其為拋錯、非函數等時亦須能同步)
    async function run(onTrace) {
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el, onTrace === undefined ? {} : { onTrace }, { noTrace: true })
        env.fireRO(el)
        await b.waitRec(1)
        el.size(200, 40)
        env.fireRO(el)
        await b.waitRec(2)
        env.resizeWindow()
        let out = {
            rec: b.rec.map((m) => [m.from, m.snew.offsetWidth, m.smode.width]),
            ros: env.ros.length,
            listeners: env.listeners.length,
        }
        b.d.unbind(el, {}, b.vnode)
        out.listenersAfter = env.listeners.length
        return out
    }

    //runWatch, 執行run並收集console輸出(error、warn、log、info、debug, 記為'方法:首個引數')與unhandledRejection(讓出一個macrotask後確認, 此時未處理之rejection已通知)
    async function runWatch(onTrace) {
        let logs = []
        let rejs = []
        let ms = ['error', 'warn', 'log', 'info', 'debug']
        let old = ms.map((m) => console[m])
        ms.forEach((m) => {
            console[m] = (...args) => {
                logs.push(`${m}:${String(args[0])}`)
            }
        })
        let onRej = (r) => {
            rejs.push(String(r))
        }
        process.on('unhandledRejection', onRej)
        let out = null
        try {
            out = await run(onTrace)
            await new Promise((resolve) => setImmediate(resolve))
        }
        finally {
            ms.forEach((m, i) => {
                console[m] = old[i]
            })
            process.off('unhandledRejection', onRej)
        }
        return { out, logs, rejs }
    }

    let expected = {
        rec: [['dom', 300, 'larger'], ['dom', 200, 'smaller'], ['window', 200, '']],
        ros: 2,
        listeners: 1,
        listenersAfter: 0,
    }

    it(`should forward onTrace to domDetect: events are frozen, called without receiver, and cover the measurement and the emission`, async function() {
        let env = mkEnv()
        let el = new Ele(300, 40)
        let seen = []
        let thisOk = true
        let tr = mkTrace()
        let onTrace = function(e) {
            if (this !== undefined) {
                thisOk = false
            }
            seen.push(Object.isFrozen(e))
            tr.fn(e)
        }
        let d = domResize()
        let vnode = { data: { on: { domresize: () => {} } } }
        d.bind(el, { value: { onTrace } }, vnode)
        env.fireRO(el)
        await tr.until(emits(1), 'emit#1')
        //首次量測(觀察器回報)判定為變化, 其序號即所發出者
        let c = tr.of('check')[0]
        let e = tr.of('emit')[0]
        assert.strict.deepStrictEqual([c.source, c.found, c.width, c.height, c.changed, c.seq], ['observer', true, 300, 40, true, 1])
        assert.strict.deepStrictEqual([e.seq, e.width, e.height], [1, 300, 40])
        assert.ok(seen.length > 0 && seen.every((v) => v === true), 'event not frozen')
        assert.ok(thisOk, 'onTrace called with receiver')
        d.unbind(el, {}, vnode)
    })

    it(`should behave the same without onTrace, with a recorder, with a throwing one, with a rejecting one and with a non-function`, async function() {
        //未傳onTrace時之行為為基準, 其餘四種形態之結果須相同, 且回調拋錯與rejection不產生未處理之rejection、不產生任何console輸出
        let none = await runWatch(undefined)
        assert.strict.deepStrictEqual(none.out, expected)
        assert.strict.deepStrictEqual([none.logs, none.rejs], [[], []])

        let tr = mkTrace()
        let rcd = await runWatch(tr.fn)
        assert.strict.deepStrictEqual(rcd.out, expected)
        assert.strict.deepStrictEqual([rcd.logs, rcd.rejs], [[], []])
        assert.ok(tr.events.length > 0, 'recorder got no event')

        let nThrow = 0
        let thr = await runWatch(() => {
            nThrow++
            throw new Error('trace boom')
        })
        assert.strict.deepStrictEqual(thr.out, expected)
        assert.ok(nThrow > 1, 'throwing onTrace called only once')
        //規格P4: 回調之拋錯一律忽略(wsemi getTrace為單一擁有者), 完全靜默, 不因每個事件都拋錯而有任何console輸出, 偵測結果不受影響
        assert.strict.deepStrictEqual([thr.logs, thr.rejs], [[], []])

        let nRej = 0
        let rej = await runWatch(async () => {
            nRej++
            throw new Error('trace rejected')
        })
        assert.strict.deepStrictEqual(rej.out, expected)
        assert.ok(nRej > 0, 'rejecting onTrace not called')
        assert.strict.deepStrictEqual([rej.logs, rej.rejs], [[], []])

        let non = await runWatch('not a function')
        assert.strict.deepStrictEqual(non.out, expected)
        assert.strict.deepStrictEqual([non.logs, non.rejs], [[], []])
    })

    it(`should call the latest onTrace of the directive value without rebuilding, and rebuild when onTrace is added or removed`, async function() {
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await b.tr.until(emits(1), 'emit#1')

        //重繪換成另一個onTrace: 不重建(觀察器仍為2個), 其後之事件交給新的
        let tr2 = mkTrace()
        let n1 = b.tr.events.length
        b.d.componentUpdated(el, { value: { onTrace: tr2.fn } }, b.vnode)
        assert.strict.deepStrictEqual(env.ros.length, 2)
        el.size(200, 40)
        env.fireRO(el)
        await tr2.until(emits(1), 'tr2 emit#1')
        assert.strict.deepStrictEqual([b.tr.events.length - n1, count(tr2.events, 'emit')], [0, 1])

        //重繪不再給onTrace: 函數設定由有到無, 重建偵測器(舊的斷線、新的建立), 偵測照常
        b.d.componentUpdated(el, { value: {} }, b.vnode)
        assert.strict.deepStrictEqual([env.ros.length, env.listeners.length], [4, 1])
        el.size(100, 40)
        env.fireRO(el)
        await b.waitRec(3)
        assert.strict.deepStrictEqual(b.rec.map((m) => [m.from, m.snew.offsetWidth]), [['dom', 300], ['dom', 200], ['dom', 100]])
        assert.strict.deepStrictEqual(count(tr2.events, 'emit'), 1)
        b.d.unbind(el, {}, b.vnode)
        assert.strict.deepStrictEqual(env.listeners.length, 0)
    })

})
