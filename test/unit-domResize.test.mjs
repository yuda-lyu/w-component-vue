import assert from 'assert'
import domResize from '../src/js/domResize.mjs'


//v-domresize指令之契約測試: 以真的指令與真的wsemi domDetect(ResizeObserver模式)驅動, 只把瀏覽器替換為假環境
//  假ResizeObserver只記錄觀察對象, 由測試呼叫fireRO觸發回呼; 假元素之尺寸由測試直接設定
//  瀏覽器本身之語義(開始觀察必回報、行內元素不回報等)非本檔所能驗證, 已另以真瀏覽器實測


let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


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


//mkBinding, 以Vue 2之vnode形狀建立綁定, 記錄指令轉發之domresize事件
function mkBinding(env, ele) {
    let d = domResize()
    let rec = []
    let vnode = { data: { on: { domresize: { fns: (msg) => rec.push(msg) } } } }
    d.bind(ele, {}, vnode)
    return { d, rec, vnode }
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
        await sleep(10)
        el.size(200, 40)
        env.fireRO(el)
        await sleep(10)
        assert.strict.deepStrictEqual(b.rec.map((m) => [m.from, m.snew.offsetWidth, m.smode.width]), [['dom', 300, 'larger'], ['dom', 200, 'smaller']])
        b.d.unbind(el)
    })

    it(`should carry no direction on window events, even after a change within the tolerance`, async function() {
        //元素變化未超過容許誤差(如拖曳分隔條之最後1px)時不發dom事件; 其後之視窗事件不代表元素尺寸變化, 不得帶出該方向,
        //  否則依smode判斷變寬或變窄之使用端(WDrawer之autoSwitchTo*)會於不改尺寸之視窗resize時誤切換(wsemi 1.9.4有此問題, 1.9.5修正)
        let env = mkEnv()
        let el = new Ele(720, 400)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await sleep(10)
        el.size(721, 400)
        env.fireRO(el)
        await sleep(10)
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
        await sleep(10)
        el.size(481, 400)
        env.fireRO(el)
        await sleep(10)
        env.resizeWindow()
        let w = b.rec.filter((m) => m.from === 'window')
        assert.strict.deepStrictEqual(w.map((m) => m.smode), [{ width: '', height: '' }])
        b.d.unbind(el)
    })

    it(`should carry no direction for an axis within the tolerance when the other axis triggers a dom event`, async function() {
        //寬先+1px(未超過容許誤差, 不發dom事件), 之後高+40px觸發dom事件: 該事件之寬方向須為空,
        //  否則全高之抽屜遇視窗高度變化時, WDrawer之autoSwitchTo*會依殘餘之寬方向誤切換(wsemi 1.9.4有此問題, 1.9.5修正)
        let env = mkEnv()
        let el = new Ele(720, 400)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await sleep(10)
        el.size(721, 400)
        env.fireRO(el)
        await sleep(10)
        el.size(721, 440)
        env.fireRO(el)
        await sleep(10)
        assert.strict.deepStrictEqual(b.rec.map((m) => [m.from, m.snew.offsetWidth, m.snew.offsetHeight, m.smode.width, m.smode.height]), [['dom', 720, 400, 'larger', 'larger'], ['dom', 721, 440, '', 'larger']])
        b.d.unbind(el)
    })

    it(`should carry the current window size on window events`, async function() {
        //WColorSelect以視窗事件之snew.windowWidth決定彈窗橫排或直排, 須為事件當下之視窗寬
        let env = mkEnv()
        let el = new Ele(300, 40)
        let b = mkBinding(env, el)
        env.fireRO(el)
        await sleep(10)
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
        await sleep(10)
        let n = b.rec.length
        b.d.unbind(el)
        el.size(400, 40)
        env.fireRO(el)
        env.resizeWindow()
        await sleep(10)
        assert.strict.deepStrictEqual([n, b.rec.length, env.listeners.length], [1, 1, 0])
    })

    it(`should do nothing when the element has no domresize listener`, async function() {
        //使用端漏寫@而成靜態屬性domresize="domresize"(WPanelScale曾如此)時, 指令收不到處理器, 不得拋錯
        let env = mkEnv()
        let el = new Ele(300, 40)
        let d = domResize()
        d.bind(el, {}, { data: { attrs: { domresize: 'domresize' } } })
        assert.doesNotThrow(() => {
            env.fireRO(el)
            env.resizeWindow()
        })
        await sleep(10)
        d.unbind(el)
    })

})
