import each from 'lodash/each'
import size from 'lodash/size'
import get from 'lodash/get'
import genID from 'wsemi/src/genID.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isEle from 'wsemi/src/isEle.mjs'
import cint from 'wsemi/src/cint.mjs'
import evem from 'wsemi/src/evem.mjs'
import domRemove from 'wsemi/src/domRemove.mjs'


function getEles(ele, selectors) {
    let eles = null
    try {
        eles = ele.querySelectorAll(selectors)
    }
    catch (err) { }
    return eles
}


function getAttr(ele, attr) {
    let r = null
    try {
        r = ele.getAttribute(attr)
    }
    catch (err) {}
    return r
}


function domFindParent(ele, f) {
    let r = null

    //check
    if (!isEle(ele)) {
        console.log('ele is not HTMLElement')
        return r
    }
    if (!isfun(f)) {
        console.log('invalid f')
        return r
    }

    //while
    let parent = ele
    try {
        while (parent) {

            //check
            if (f(parent)) {
                r = parent
                break
            }

            //parentNode
            parent = parent.parentNode

        }
    }
    catch (err) {
        console.log('can not find parent in while', err)
    }
    return r
}


function findParentFromPath(elePath, f) {
    let r = null
    for (let i = 0; i < elePath.length; i++) {
        let ele = elePath[i]
        if (f(ele)) {
            r = ele
            break
        }
    }
    return r
}


function getParentFromPath(elePath, attGroup, gid) {
    let r = findParentFromPath(elePath, (ele) => {
        return getAttr(ele, attGroup) === gid
    })
    return r
}


function getIndFromPath(elePath, attIndex, attGroup, gid) {
    let ele = getParentFromPath(elePath, attGroup, gid)
    if (!ele) {
        return null
    }
    let kitem = getAttr(ele, attIndex)
    kitem = cint(kitem)
    return kitem
}


function getBoudRect(ele) {
    try {
        return ele.getBoundingClientRect()
    }
    catch (err) {}
    return null
}


function getPointRefLoc(p, ele) {
    let rt = getBoudRect(ele)
    if (!rt) {
        return null
    }
    let x = p.clientX - rt.left //事件的clientX,Y是基於瀏覽器可視區域左上角的座標
    let y = p.clientY - rt.top
    let w = ele.offsetWidth
    let h = ele.offsetHeight
    return {
        x, y, w, h
    }
}


function isInner(p, ele) {
    let rl = getPointRefLoc(p, ele)
    if (!rl) {
        return false
    }
    return rl.x >= 0 && rl.x <= rl.w && rl.y >= 0 && rl.y <= rl.h
}


function getPointFromEvent(e) {

    //check
    let x = get(e, 'clientX', null)
    let y = get(e, 'clientY', null)
    if (x !== null && y !== null) {
        return {
            clientX: x,
            clientY: y,
        }
    }

    //check
    let touches = get(e, 'touches', [])
    if (size(touches) !== 1) {
        return null
    }

    //p
    let p = touches[0]

    return {
        clientX: p.clientX,
        clientY: p.clientY,
    }
}


function dragPreview() {
    let _prevName = '_prevName'
    let _node = null
    let _container = null

    function cloneNode(ele, x, y) {
        //console.log('cloneNode')

        //getBoudRect
        let rt = getBoudRect(ele)
        if (!rt) {
            return
        }

        //深複製
        let nd = ele.cloneNode(true)

        //清空margin, 因getBoundingClientRect取得的left與top會因margin自動合併, 導致不含自己的margin, 故放到container時又會出現margin的影響導致偏移, 故需先清空margin
        nd.style.margin = 0

        //儲存資訊
        nd.tShiftX = x - rt.left
        nd.tShiftY = y - rt.top
        nd.tWidth = ele.offsetWidth
        nd.tHeight = ele.offsetHeight
        nd.tParent = ele.parentNode
        // console.log('cloneNode tShiftY', nd.tShiftY, 'y', y, 'rt.y', rt.y)

        return nd
    }

    function createPreview(ele, x, y) {
        //console.log('createPreview')

        //複製ele
        let node = cloneNode(ele, x, y)

        //創建container
        let container = document.createElement('div')
        container.setAttribute('name', _prevName)
        //container.style.display = 'none'//先隱藏

        //將複製的ele塞入container
        container.appendChild(node)

        //將container塞入原本ele的父層內
        node.tParent.appendChild(container)

        //儲存至全域
        _node = node
        _container = container

        //updateDragPreview
        updateDragPreview(x, y, 'createPreview')

    }

    function updateDragPreview(x, y, from) {
        //console.log('updateDragPreview', x, y, from)

        //check
        if (!_node || !_container) {
            return
        }

        //update
        //_container.style.display = 'display:block' //顯示
        _container.style.position = 'fixed'
        _container.style.pointerEvents = 'none'
        _container.style.top = `${y - _node.tShiftY}px`
        _container.style.left = `${x - _node.tShiftX}px`
        _container.style.width = `${_node.tWidth}px`
        _container.style.height = `${_node.tHeight}px`
        // console.log('updateDragPreview', y, 'from', from)
        // console.log('updateDragPreview y', y, ' y -_node.tShiftY=top', y - _node.tShiftY)

    }

    function removeDragPreview() {
        //console.log('removeDragPreview')

        //domRemove
        domRemove(`[name=${_prevName}]`)

        //clear
        _node = null
        _container = null

    }

    let evMM = function(e) {
        //console.log('window mousemove', e)
        updateDragPreview(e.clientX, e.clientY, 'window mousemove')
    }
    window.addEventListener('mousemove', evMM, false)

    let evTM = function(e) {
        //console.log('window touchmove', e)
        let p = getPointFromEvent(e)
        if (p) {
            updateDragPreview(p.clientX, p.clientY, 'window touchmove')
        }
    }
    window.addEventListener('touchmove', evTM, false)

    let evDg = function(e) {
        //console.log('window drag', e)
        updateDragPreview(e.clientX, e.clientY, 'window drag')
    }
    window.addEventListener('drag', evDg, false)

    let evDge = function(e) {
        //console.log('window dragend', e)
        removeDragPreview()
    }
    window.addEventListener('dragend', evDge, false)

    function clear() {
        removeEventListener('mousemove', evMM)
        removeEventListener('touchmove', evTM)
        removeEventListener('drag', evDg)
        removeEventListener('dragend', evDge)
    }

    return {
        createPreview,
        updateDragPreview,
        removeDragPreview,
        clear,
    }
}


function domDrag(ele, opt = {}) {
    // let _disEvent = false
    let _startInd = null
    let _startEle = null
    let _endInd = null
    let _endEle = null
    let _events = []

    //check
    if (!isEle(ele)) {
        console.log('ele is not HTMLElement', ele)
        return
    }
    let attIndex = get(opt, 'attIndex', 'dragindex')
    if (!isestr(attIndex)) {
        console.log('invalid attIndex in opt', attIndex)
        return
    }
    let attGroup = get(opt, 'attGroup', 'draggroup')
    if (!isestr(attGroup)) {
        console.log('invalid attGroup in opt', attGroup)
        return
    }
    let selectors = get(opt, 'selectors', '[dragtag]')
    if (!isestr(selectors)) {
        console.log('invalid selectors in opt', selectors)
        return
    }

    //dragPreview
    let pv = dragPreview()

    //eles
    let eles = getEles(ele, selectors)
    if (!eles) {
        console.log('初始化時無法取得拖曳元素')
        return
    }

    //gid
    let gid = 'dg' + genID(8)

    //setAttrs
    function setAttrs() {
        each(eles, (ele, k) => {

            //setAttribute
            ele.setAttribute('draggable', true)
            ele.setAttribute(attGroup, gid)

        })
    }

    //bindEvents
    function bindEvents() {
        let f
        let name

        // name = 'mousemove'
        // f = function(e) {
        //     mouseMove(e)
        // }
        // window.addEventListener('mousemove', f, false)
        // _events.push({ window, name, f })

        // name = 'dragmove'
        // f = function(e) {
        //     winDragMove(e)
        // }
        // window.addEventListener('dragmove', f, false)
        // _events.push({ window, name, f })

        each(eles, (ele, k) => { //eles綁定成為元素需自動更新, 例如用vue自動由數據順序產生元素, 而拖曳完的eles將不會是原始元素順序, 故k不可信

            name = 'dragstart' //ele.addEventListener('dragstart', dragStart, false)
            f = function(e) {
                dragStart(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'dragenter' //ele.addEventListener('dragenter', dragEnter, false)
            f = function(e) {
                dragEnter(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'dragover' //ele.addEventListener('dragover', dragOver, false)
            f = function(e) {
                dragOver(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'dragleave' //ele.addEventListener('dragleave', dragLeave, false)
            f = function(e) {
                dragLeave(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'drop' //ele.addEventListener('drop', dragDrop, false)
            f = function(e) {
                dragDrop(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'touchstart' //ele.addEventListener('touchstart', touchStart, false)
            f = function(e) {
                touchStart(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'touchmove' //ele.addEventListener('touchmove', touchEnter, false)
            f = function(e) {
                touchEnter(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'touchend' //ele.addEventListener('touchend', touchDrop, false)
            f = function(e) {
                touchDrop(e, ele)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

            name = 'touchcancel' //ele.addEventListener('touchcancel', cancelEvent, false)
            f = function(e) {
                cancelEvent(e)
            }
            ele.addEventListener(name, f, false)
            _events.push({ ele, name, f })

        })
    }

    //unbindEvents
    function unbindEvents() {
        each(_events, ({ ele, name, f }) => {
            ele.removeEventListener(name, f)
        })
    }

    function dragStart(e, el, bTouch = false) {
        //console.log('dragStart', e, el, bTouch)

        //getIndFromPath
        let kitem = getIndFromPath(e.path, attIndex, attGroup, gid)

        //check
        if (kitem === null) { //不能用!kitem判斷, 因kitem可能為0
            //console.log('dragStart: 無法取得kitem')
            return
        }

        _startInd = kitem
        _startEle = el

        //emit
        let msg = {
            event: e,
            startInd: _startInd,
            startEle: _startEle,
        }
        ev.emit('change', { mode: 'start', ...msg })
        ev.emit('start', msg)

        //check
        if (bTouch) {

            //p
            let p = getPointFromEvent(e)
            if (!p) {
                return
            }

            //createPreview
            pv.createPreview(el, p.clientX, p.clientY)

        }

    }

    function dragEnter(e, el) {
        //console.log('dragEnter', e, el)

        // //check
        // if (_disEvent) {
        //     console.log('dragEnter: 滑鼠位於拖曳元素內禁止觸發事件')
        //     return
        // }

        //setTimeout, 因enter可能比leave早觸發, 故用setTimeout脫勾
        setTimeout(() => {

            //getIndFromPath
            let kitem = getIndFromPath(e.path, attIndex, attGroup, gid)

            //check
            if (kitem === null) { //不能用!kitem判斷, 因kitem可能為0
                //console.log('dragEnter: 無法取得kitem')
                return
            }
            // console.log('dragEnter startInd', _startInd)
            // console.log('dragEnter endInd', _endInd)
            // console.log('dragEnter kitem', kitem)
            // console.log('dragEnter e.path', e.path)
            // console.log('dragEnter e', e)

            //p
            let p = getPointFromEvent(e)
            if (!p) {
                //console.log('dragEnter: 無法取得滑鼠座標')
                return
            }
            // console.log('p', p)
            // console.log('isInner(p, el)', isInner(p, el))
            // console.log('e', e)

            //check
            if (!isInner(p, el)) {
                //console.log('dragEnter: 滑鼠不在目標元素內，代表dragEnter觸發有誤')
                return
            }

            //check
            if (_startInd === null) {
                //console.log('dragEnter: 未有目前拖曳元素(_startInd)，代表尚未觸發dragStart')
                return
            }

            //check
            if (_startInd === kitem) {
                //console.log('dragEnter: 進入元素(kitem)為目前拖曳元素(_startInd)，代表為目前拖曳元素內重複觸發enter')
                return
            }

            //check
            if (_endInd === kitem) {
                //console.log('dragEnter: 進入元素(kitem)為目前目標元素(_startInd)，代表為已觸發enter')
                return
            }

            _endInd = kitem
            _endEle = el

            //emit
            let msg = {
                event: e,
                startInd: _startInd,
                startEle: _startEle,
                endInd: _endInd,
                endEle: _endEle,
            }
            ev.emit('change', { mode: 'enter', ...msg })
            ev.emit('enter', msg)

        }, 1)

    }

    function dragLeave(e, el) {
        //console.log('dragLeave', e, el)

        //getIndFromPath
        let kitem = getIndFromPath(e.path, attIndex, attGroup, gid)

        //check
        if (kitem === null) { //不能用!kitem判斷, 因kitem可能為0
            //console.log('dragLeave: 無法取得kitem')
            return
        }

        //check
        if (_startInd === null || _endInd === null) {
            return
        }

        //toKitem, get kitem from relatedTarget
        let tp = domFindParent(e.relatedTarget, (ele) => {
            return getAttr(ele, attGroup) === gid
        })
        let toKitem = cint(getAttr(tp, attIndex))
        // console.log('dragLeave el', el)
        // console.log('dragLeave e.relatedTarget(enter)', e.relatedTarget)
        // console.log('dragLeave kitem', kitem)
        // console.log('dragLeave toKitem', toKitem)

        //check
        if (_endInd === toKitem) {
            //console.log('dragLeave: 目前進入元素(_endInd)已為進入元素(toKitem)，代表為已由enter觸發過leave事件')
            return
        }

        //check
        if (kitem === toKitem) {
            //console.log('dragLeave: 離開元素(kitem)為進入元素(toKitem)，代表為元素內部進出')
            return
        }
        // console.log('dragLeave startInd', _startInd)
        // console.log('dragLeave endInd', _endInd)
        // console.log('dragLeave e.path', e.path)
        // console.log('dragLeave e', e)

        //check
        if (_startInd === kitem) { //需用kitem而不能用_endInd, 因_endInd已是儲存到新目標元素指標, leave是由剛離開元素所觸發, 故kitem是為剛離開元素的指標, 得用kitem判斷才行
            //console.log('dragLeave: 離開目標元素為拖曳元素')
            return
        }

        // //p
        // let p = getPointFromEvent(e)
        // if (!p) {
        //     return
        // }

        // //check 有問題 很慢是離開元素時 滑鼠會在el內
        // if (_endInd === kitem && isInner(p, el)) {
        //     console.log('p', p)
        //     console.log('el', el)
        //     console.log('isInner(p, el)', isInner(p, el))
        //     console.log('離開目標元素但滑鼠還在元素內')
        //     return
        // }

        //emit
        let msg = {
            event: e,
            startInd: _startInd,
            startEle: _startEle,
            endInd: _endInd,
            endEle: _endEle,
        }
        ev.emit('change', { mode: 'leave', ...msg })
        ev.emit('leave', msg)

        //clear, 要放在emit之後才能清除
        _endInd = null
        _endEle = null

    }

    function dragOver(e, el) {
        //console.log('dragOver', e, el)

        //cancelEvent
        cancelEvent(e)

        //check
        if (_startInd === null) {
            // _disEvent = true
            return
        }

        // //getIndFromPath
        // let kitem = getIndFromPath(e.path, attIndex, attGroup, gid)

        // //_disEvent, 判斷滑鼠是否位於拖曳元素內
        // _disEvent = _startInd === kitem

        //check
        if (_endInd === null) {
            return
        }

        //check
        if (_startInd === _endInd) {
            //console.log('離開目標元素為拖曳元素')
            return
        }

        //rl
        let rl = getPointRefLoc(e, el)

        //rx, ry
        let rx = 0
        if (rl.w > 0) {
            rx = rl.x / rl.w
        }
        let ry = 0
        if (rl.h > 0) {
            ry = rl.y / rl.h
        }

        if (rx >= 0 && rx <= 1 && ry >= 0 && ry <= 1) {

            //emit
            let msg = {
                event: e,
                startInd: _startInd,
                startEle: _startEle,
                endInd: _endInd,
                endEle: _endEle,
                ...rl,
                rx,
                ry,
            }
            ev.emit('change', { mode: 'move', ...msg })
            ev.emit('move', msg)

        }

    }

    function dragDrop(e, el, bTouch = false) {
        //console.log('dragDrop', e, el, bTouch)

        //cancelEvent
        cancelEvent(e)

        //removeDragPreview
        if (bTouch) {
            pv.removeDragPreview()
        }

        //check
        if (_startInd === null || _endInd === null) {
            _startInd = null
            _startEle = null
            _endInd = null
            _endEle = null
            return
        }
        // console.log('_startInd', _startInd)
        // console.log('_endInd', _endInd)

        //emit
        let msg = {
            event: e,
            startInd: _startInd,
            startEle: _startEle,
            endInd: _endInd,
            endEle: _endEle,
        }
        ev.emit('change', { mode: 'drop', ...msg })
        ev.emit('drop', msg)

        //clear
        _startInd = null
        _startEle = null
        _endInd = null
        _endEle = null

    }

    function touchStart(e, el) {
        //console.log('touchStart', e, el)

        //cancelEvent, touchstart需取消之後拖曳事件, 否則會變成捲動螢幕
        cancelEvent(e)

        //dragStart
        dragStart(e, el, true)

    }

    function touchEnter(e, el) {
        //console.log('touchEnter', e, el)

        //p
        let p = getPointFromEvent(e)
        if (!p) {
            return
        }

        //kitem, touch內為拖曳來源而非目標, 故得要遍歷尋找
        let kitem = null
        for (let i = 0; i < eles.length; i++) {
            let ele = eles[i]
            if (isInner(p, ele)) {
                kitem = cint(getAttr(ele, attIndex))
            }
        }
        if (_startInd !== null && _startInd !== kitem && _endInd !== kitem) {
            _endInd = kitem
            _endEle = el

            //emit
            let msg = {
                event: e,
                startInd: _startInd,
                startEle: _startEle,
                endInd: _endInd,
                endEle: _endEle,
            }
            ev.emit('change', { mode: 'enter', ...msg })
            ev.emit('enter', msg)

        }

    }

    function touchDrop(e, el) {
        //console.log('touchDrop', e, el)

        //dragDrop
        dragDrop(e, el, true)

    }

    function cancelEvent(e) {
        //console.log('cancelEvent', e)

        //check, 拖曳事件因拖曳自己會捲動螢幕, 會觸發不可取消事件, 故需偵測直接跳出
        if (!e.cancelable) {
            return
        }

        e.preventDefault()
        e.stopPropagation()
        return false
    }

    //ev
    let ev = evem()

    //bindEvents, setAttrs
    bindEvents()
    setAttrs()

    //save
    ev.gid = gid
    ev.clear = function() {
        unbindEvents()
        pv.clear()
    }

    return ev
}


export default domDrag
