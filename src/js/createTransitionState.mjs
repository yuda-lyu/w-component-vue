import isfun from 'wsemi/src/isfun.mjs'
import isEle from 'wsemi/src/isEle.mjs'


/**
 * 建立過場狀態追蹤器, 供有過場動畫之組件於根節點提供可偵測之state屬性(語彙同WDrawer: 過渡態與終態)
 *
 * 落定以位準判斷, 不依賴單一事件: 受追蹤元素自身之CSS transition(含尚未開始者, 以getAnimations取得)皆結束才落定
 *   主要訊號: 容器收到受追蹤元素自身之transitionend或transitioncancel事件(事件自子樹冒泡, 子孫元素之過場不計), 此時若已無進行中之過場則立即落定
 *   後備訊號: begin後經nominalMs+marginMs仍未落定(如事件未觸發的高負載, 或無任何過場被觸發), 此時若仍有進行中之過場則每50ms重查, 全部結束即落定, 上限capMs後強制落定
 * 重複begin時以token作廢前次之等待, 避免舊的落定誤寫
 *
 * @param {Object} opt 輸入設定物件
 * @param {Function} opt.getRoot 輸入取得事件監聽容器之函數, 回傳Element或null(尚未建立), 受追蹤元素須位於其子樹內
 * @param {Function} opt.getTargets 輸入取得受追蹤過場元素之函數, 回傳Element陣列, 於每次判斷時重新取得
 * @param {Function} opt.setState 輸入寫入state之函數, 傳入state字串
 * @param {Number} [opt.marginMs=300] 輸入後備訊號於預期過場時長之外加算之等待時間數字, 單位為ms, 預設300
 * @param {Number} [opt.capMs=3000] 輸入後備訊號等待進行中過場結束之上限時間數字, 單位為ms, 預設3000
 * @returns {Object} 回傳物件, attach為綁定容器事件監聽, begin(stateBusy,stateFinal,nominalMs)為進入過渡態並待過場結束後落定為終態, stop(state)為作廢等待並立即設為state, hold(el)與release(el)為占位與釋放非CSS transition之進行中過程(如transition-group之進出場, 以其元素為鍵, 已不在DOM內之元素視為已釋放), 占位中不落定, release後會重新判斷是否可落定, check為重新判斷是否可落定, destroy為解除綁定與作廢等待
 */
function createTransitionState(opt = {}) {
    let getRoot = opt.getRoot
    let getTargets = opt.getTargets
    let setState = opt.setState
    let marginMs = Number.isFinite(opt.marginMs) ? opt.marginMs : 300
    let capMs = Number.isFinite(opt.capMs) ? opt.capMs : 3000
    let intervalMs = 50

    //check
    if (!isfun(getRoot)) {
        throw new Error(`opt.getRoot is not a function`)
    }
    if (!isfun(getTargets)) {
        throw new Error(`opt.getTargets is not a function`)
    }
    if (!isfun(setState)) {
        throw new Error(`opt.setState is not a function`)
    }

    let root = null
    let token = 0
    let pending = null //{ stateFinal }
    let timer = null
    let held = new Set()

    let clear = () => {
        clearTimeout(timer)
        timer = null
    }

    //isHeld, 是否仍有占位中之非CSS transition過程, 已不在DOM內之元素不會再有後續回呼, 視為已釋放
    let isHeld = () => {
        for (let el of held) {
            if (el.isConnected === false) {
                held.delete(el)
            }
        }
        return held.size > 0
    }

    let getTargetsEle = () => {
        let ts = getTargets()
        if (!Array.isArray(ts)) {
            return []
        }
        return ts.filter((v) => isEle(v))
    }

    //isRunning, 是否仍有進行中之過場: 占位中, 或受追蹤元素有未結束之CSS transition(getAnimations會先更新樣式, 故高負載下尚未開始之過場也會被取得)
    let isRunning = () => {
        if (isHeld()) {
            return true
        }
        for (let el of getTargetsEle()) {
            if (!isfun(el.getAnimations)) {
                continue
            }
            for (let a of el.getAnimations()) {
                if (typeof a.transitionProperty === 'string' && (a.pending || a.playState === 'running')) {
                    return true
                }
            }
        }
        return false
    }

    let settle = (tk) => {
        if (tk !== token || pending === null) {
            return
        }
        let stateFinal = pending.stateFinal
        pending = null
        clear()
        setState(stateFinal)
    }

    //onEnd, 過場結束或取消事件, 事件自子樹冒泡, 須限定為受追蹤元素自身之過場
    let onEnd = (ev) => {
        if (pending === null) {
            return
        }
        if (getTargetsEle().indexOf(ev.target) < 0) {
            return
        }
        if (!isRunning()) {
            settle(token)
        }
    }

    let detach = () => {
        if (root) {
            root.removeEventListener('transitionend', onEnd)
            root.removeEventListener('transitioncancel', onEnd)
            root = null
        }
    }

    let attach = () => {
        let r = getRoot()
        if (r === root) {
            return
        }
        detach()
        if (isEle(r)) {
            r.addEventListener('transitionend', onEnd)
            r.addEventListener('transitioncancel', onEnd)
            root = r
        }
    }

    let begin = (stateBusy, stateFinal, nominalMs = 0) => {

        //attach
        attach()

        //token
        token++
        let tk = token

        //pending
        pending = { stateFinal }
        clear()
        setState(stateBusy)

        //後備訊號
        let n = Math.ceil(capMs / intervalMs)
        let poll = (i) => {
            timer = null
            if (tk !== token || pending === null) {
                return
            }
            if (!isRunning() || i >= n) {
                settle(tk)
                return
            }
            timer = setTimeout(() => {
                poll(i + 1)
            }, intervalMs)
        }
        timer = setTimeout(() => {
            poll(0)
        }, nominalMs + marginMs)

    }

    let stop = (state) => {
        token++
        pending = null
        clear()
        setState(state)
    }

    let check = () => {
        if (pending !== null && !isRunning()) {
            settle(token)
        }
    }

    let hold = (el) => {
        held.add(el)
    }

    let release = (el) => {
        held.delete(el)
        check()
    }

    let destroy = () => {
        token++
        pending = null
        clear()
        detach()
        held.clear()
    }

    return { attach, begin, stop, check, hold, release, destroy }
}


export default createTransitionState
