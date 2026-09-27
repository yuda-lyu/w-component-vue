//warnMisbinding, 綁定時檢查常見之錯誤寫法, 否則處理函式靜默不被呼叫
//  修飾字.once、.capture、.passive使監聽鍵名加上前綴~、!、&, 事件名大小寫或連字號不符, 漏寫@而成靜態屬性, 元素上使用.native
//  編譯進處理函式內之修飾字(.stop、.prevent、.self、.ctrl等)於執行期無法低成本偵測, 不在此檢查
function warnMisbinding(vnode, name, dirName, listeners, on) {
    let msgs = []
    let keys = [...Object.keys(listeners || {}), ...Object.keys(on || {})]
    for (let k of keys) {
        if (k === name) {
            continue
        }
        if (k.replace(/^[~!&]+/, '') === name) {
            msgs.push(`@${name}不支援.once、.capture、.passive修飾字, 處理函式不會被呼叫`)
        }
        else if (k.toLowerCase().replace(/-/g, '') === name) {
            msgs.push(`事件名須為@${name}, 目前為@${k}, 處理函式不會被呼叫`)
        }
    }
    let data = (vnode && vnode.data) || {}
    if (data.attrs && Object.prototype.hasOwnProperty.call(data.attrs, name)) {
        msgs.push(`${name}="${data.attrs[name]}"為靜態屬性, 應為@${name}`)
    }
    let isComponent = !!(vnode && vnode.componentOptions)
    if (!isComponent && data.nativeOn && data.nativeOn[name]) {
        msgs.push(`元素上之@${name}.native無效, 應為@${name}`)
    }
    for (let m of msgs) {
        console.warn(`[v-${dirName}] ${m}`)
    }
}


//getListeners, 取vnode之監聽物件: 元件標籤之自訂事件在componentOptions.listeners, 其data.on為.native監聽(Vue建立元件vnode時將nativeOn移入data.on); 元素之監聽在data.on
function getListeners(vnode) {
    return {
        listeners: (vnode && vnode.componentOptions && vnode.componentOptions.listeners) || null,
        on: (vnode && vnode.data && vnode.data.on) || null,
    }
}


/**
 * 自訂指令觸發所在vnode之v-on事件處理函式, 每個綁定建立一個, 解除綁定時dispose
 *
 * 呼叫Vue建立之監聽器(invoker)本身而非其fns: invoker會依序呼叫多個處理函式(陣列), 並經Vue之錯誤處理(祖先errorCaptured、Vue.config.errorHandler)處理同步錯誤與Promise拒絕
 * 只保留監聽物件而不保留整個vnode, 避免持有綁定當下之子樹; 指令於宿主重繪後以update換成新vnode之監聽物件, 故綁定後才新增、移除或改名之監聽亦會跟隨
 * 元件標籤同名兩者皆有時只呼叫自訂事件, 沒有自訂事件時才呼叫.native監聽
 * dispose後不再呼叫, 以處理解除綁定後才完成之非同步偵測
 *
 * @param {Object} vnode 輸入指令所在之vnode
 * @param {String} name 輸入事件名稱字串
 * @param {String} dirName 輸入指令名稱字串, 用於警告訊息
 * @param {Object} [opt={}] 輸入設定物件, opt.warn給false時不檢查錯誤寫法(供重建時避免重複警告), 預設true
 * @returns {Object} 回傳物件, emit(data)觸發事件, update(vnode)改用新vnode之監聽物件, dispose()作廢
 */
function createVnodeEmitter(vnode, name, dirName, opt = {}) {
    let { listeners, on } = getListeners(vnode)
    let alive = true

    //warnMisbinding
    if (opt.warn !== false) {
        warnMisbinding(vnode, name, dirName, listeners, on)
    }

    //emit
    let emit = (data) => {
        if (!alive) {
            return
        }
        let h = (listeners && listeners[name]) || (on && on[name])
        if (typeof h === 'function') {
            h(data)
        }
    }

    //update, 宿主重繪後改用新vnode之監聽物件; 同名監聽跨重繪沿用同一invoker, 故只有新增、移除或改名之監聽需要此步
    let update = (vnodeNew) => {
        if (!alive) {
            return
        }
        let r = getListeners(vnodeNew)
        listeners = r.listeners
        on = r.on
    }

    //dispose
    let dispose = () => {
        alive = false
        listeners = null
        on = null
    }

    return {
        emit,
        update,
        dispose,
    }
}


export default createVnodeEmitter
