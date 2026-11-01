import buildPopper from '@src/js/buildPopper.mjs'


//e2e-entry-buildPopper: unit-buildPopper.test.mjs之測試頁(@src為待測之src資料夾, 預設工作區之src)
//  以普通物件模擬Vue組件實例vo(含$emit與$nextTick), 浮層為真DOM與真popper.js, 內層內容之過場由buildPopper寫入vo.contentStyle驅動(同WTooltip之內層div)
//  window.mk(opt)建立vo與buildPopper
//    opt.declare: 'none'(預設, vo不宣告state)、'undefined'(宣告為undefined)、其他字串(宣告為該字串)
//    opt.omit: 建構時從vo移除之鍵(檢查必填鍵用)
//    opt.transitionTime: 過場時間ms, 預設200
//  記錄: window.signals(ev.on('state')收到之值與當下getState)、window.voSignals(vo.$emit('state')收到之值)、window.voWrites(vo.state之寫入序列)、window.emitted(vo.$emit之全部事件名)
//  window.open()與window.close()經ev.updateValue切換顯示, 同步返回


window.signals = []
window.voSignals = []
window.voWrites = []
window.emitted = []

window.tryBuild = function(opt = {}) {
    try {
        window.mk(opt)
        return null
    }
    catch (err) {
        return String(err && err.message)
    }
}

window.mk = function(opt = {}) {
    let declare = opt.declare === undefined ? 'none' : opt.declare
    let keyShow = 'show'

    //DOM, trigger為觸發區, content為.WPopperFix, inner為其第一個子元素(過場追蹤對象)
    let trigger = document.createElement('div')
    trigger.style.cssText = 'display:inline-block; width:80px; height:30px; margin:100px;'
    let content = document.createElement('div')
    content.className = 'WPopperFix'
    content.style.display = 'none' //同v-show
    let inner = document.createElement('div')
    inner.textContent = 'content'
    content.appendChild(inner)
    document.body.appendChild(trigger)
    document.body.appendChild(content)

    window.signals = []
    window.voSignals = []
    window.voWrites = []
    window.emitted = []

    let vo = {
        mode: 'popup',
        mmkey: 'k',
        triggerWidth: 0,
        placement: 'bottom-start',
        placementDistX: 0,
        placementDistY: 0,
        transitionTime: opt.transitionTime || 200,
        isolated: true,
        editable: true,
        $emit: (name, ...args) => {
            window.emitted.push(name)
            if (name === 'state') {
                window.voSignals.push(args[0])
            }
        },
        $nextTick: (f) => {
            Promise.resolve().then(f)
        },
    }

    //show, 同WTooltip之v-show, 切換.WPopperFix之display
    let show = false
    Object.defineProperty(vo, keyShow, {
        enumerable: true,
        configurable: true,
        get: () => show,
        set: (v) => {
            show = v
            content.style.display = v ? '' : 'none'
        },
    })

    //contentStyle, 同WTooltip之內層div:style綁定, 每次寫入後強制更新樣式(同Vue渲染後瀏覽器先算出樣式, 其後才加入transition與終值)
    let contentStyle = ''
    Object.defineProperty(vo, 'contentStyle', {
        enumerable: true,
        configurable: true,
        get: () => contentStyle,
        set: (v) => {
            contentStyle = v
            inner.style.cssText = v
            inner.getBoundingClientRect()
        },
    })

    //state, 宣告時以存取子記錄寫入序列
    if (declare !== 'none') {
        let st = declare === 'undefined' ? undefined : declare
        Object.defineProperty(vo, 'state', {
            enumerable: true,
            configurable: true,
            get: () => st,
            set: (v) => {
                st = v
                window.voWrites.push(v)
            },
        })
    }

    if (opt.omit) {
        delete vo[opt.omit]
    }

    let ev = buildPopper(vo, () => trigger, () => content, keyShow, 'input')
    ev.on('state', (s) => {
        window.signals.push({ s, got: ev.getState() })
        if (opt.throwInListener) {
            throw new Error('listener-boom')
        }
    })
    ev.mounted()
    window.vo = vo
    window.ev = ev
    window.els = { trigger, content, inner }
    return true
}

window.open = function() {
    window.ev.updateValue(true, 'test')
}

window.close = function() {
    window.ev.updateValue(false, 'test')
}

window.info = function() {
    return {
        getState: window.ev.getState(),
        hasState: 'state' in window.vo,
        voState: window.vo.state,
        fnKeys: Object.keys(window.ev).filter((k) => typeof window.ev[k] === 'function'),
    }
}
