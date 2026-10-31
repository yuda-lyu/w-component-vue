import createTransitionState from '@src/js/createTransitionState.mjs'


//e2e-entry-createTransitionState: unit-createTransitionState.test.mjs之測試頁(@src為待測之src資料夾, 預設工作區之src)
//  window.mk(opt)建立一組元素(容器root含受追蹤元素target, target內含子元素child)與追蹤器, 狀態寫入與事件皆記入window.log(含performance.now時刻)
//    opt.dur: target自身width過場時長(ms), opt.childDur: child自身width過場時長(ms, 0為無), opt.suppress: 是否於window捕獲階段攔下transitionend與transitioncancel(模擬事件未觸發)
//    opt.margin: 追蹤器之marginMs, opt.cap: capMs
//  window.go()觸發target與child之width改變(過場開始)


window.createTransitionState = createTransitionState
window.log = []
window.mk = function(opt = {}) {
    let root = document.createElement('div')
    let target = document.createElement('div')
    let child = document.createElement('div')
    target.style.cssText = `width:10px; height:10px; transition:width ${opt.dur || 300}ms linear;`
    child.style.cssText = `width:10px; height:10px; transition:width ${opt.childDur || 0}ms linear;`
    target.appendChild(child)
    root.appendChild(target)
    document.body.appendChild(root)
    //先強制計算樣式: 元素須有改變前的計算樣式, 其後改變width才會建立過場(否則是否建立過場取決於兩次呼叫間有無繪製)
    target.getBoundingClientRect()
    window.els = { root, target, child }
    window.log = []
    if (opt.suppress) {
        for (let type of ['transitionend', 'transitioncancel']) {
            window.addEventListener(type, (ev) => {
                ev.stopImmediatePropagation()
            }, true)
        }
    }
    else {
        //記錄過場結束之時刻(捕獲階段, 早於追蹤器之處理)
        window.addEventListener('transitionend', (ev) => {
            window.log.push({ type: ev.target === target ? 'end-target' : 'end-child', t: performance.now() })
        }, true)
    }
    window.ts = createTransitionState({
        getRoot: () => root,
        getTargets: () => [target],
        setState: (state) => {
            window.log.push({ type: 'state', state, t: performance.now() })
        },
        marginMs: opt.margin,
        capMs: opt.cap,
    })
    return true
}
window.go = function() {
    let { target, child } = window.els
    target.style.width = '110px'
    child.style.width = '110px'
    //getBoundingClientRect會強制更新樣式使過場立即建立
    target.getBoundingClientRect()
    return performance.now()
}
//goChild, 只觸發child自身之width過場(target不觸發)
window.goChild = function() {
    let { target, child } = window.els
    child.style.width = '110px'
    target.getBoundingClientRect()
    return performance.now()
}
window.states = function() {
    return window.log.filter((e) => e.type === 'state').map((e) => e.state)
}
