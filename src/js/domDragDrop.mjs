import get from 'lodash-es/get.js'
import isestr from 'wsemi/src/isestr.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import genID from 'wsemi/src/genID.mjs'
import domDrag from 'wsemi/src/domDrag.mjs'
import createVnodeEmitter from './createVnodeEmitter.mjs'


/**
 * 自訂指令v-domdragdrop, 同群組元素間拖放時觸發@domdragdrop
 *
 * 指令值: 非空物件為啟用, 須給group(群組鍵字串, 未給拋錯), 其餘鍵(attIdentify、attGroup、attIndex、previewOpacity、previewDisabledOpacity、previewBackground、previewBorderWidth、previewBorderColor、timeDragStartDelay)轉給wsemi domDrag; 其他值為停用
 * 宿主每次重繪皆解除後依最新指令值重建; 拖曳中重建者拖曳延續, 後續事件送達新實例(wsemi domDrag)
 *
 * 事件內容為物件, evName為'start'、'move'、'enter'、'leave'或'drop', 其餘為domDrag之事件內容
 * 處理函式經Vue之監聽器(invoker)呼叫: 多個處理函式依序執行, 同步錯誤與Promise拒絕交Vue之錯誤處理(自處理函式所屬元件之$parent起經errorCaptured, 再Vue.config.errorHandler), 與原生v-on相同
 * 元件標籤上同時有@domdragdrop與@domdragdrop.native時只呼叫前者, 無前者時呼叫後者; 停用或解除綁定後不再觸發
 * 不支援.once、.capture、.passive, 事件名須小寫(@domdragdrop), 元素上之.native無效, 以上於綁定時警告; .ctrl、.shift、.alt、.meta使處理函式不被呼叫, .stop、.prevent、.left、.right與按鍵修飾字使處理函式拋錯, 皆無法於執行期警告
 * 綁定時於元素設ev-dragdrop屬性, 解除時改為'null'
 *
 * @returns {Object} 回傳Vue 2自訂指令定義物件, 以Vue.directive('domdragdrop', domDragDrop())或元件directives註冊
 */
function domDragDrop() {
    let kbEv = {}

    function bind(el, binding, vnode) {
        // console.log('bind', 'el', el, 'binding', binding, 'vnode', vnode)

        //id
        let id = `r${genID()}`
        el.setAttribute('ev-dragdrop', id)

        //init
        init(el, binding, vnode, true)

    }

    function update(el, binding, vnode) {
        // console.log('update', 'el', el, 'binding', binding)

        //clear
        clear(el)

        //init
        init(el, binding, vnode, false)

    }

    function unbind(el) {
        // console.log('unbind', 'el', el)

        //clear
        clear(el)

        //remove attr
        el.setAttribute('ev-dragdrop', null)

    }

    function init(el, binding, vnode, isBind) {

        //id
        let id = el.getAttribute('ev-dragdrop')

        //eff
        let eff = get(binding, 'value')
        eff = iseobj(eff)

        //check
        if (!eff) {
            return
        }

        //group
        let group = get(binding, 'value.group')
        if (!isestr(group)) {
            throw new Error(`invalid group: v-domdragdrop="{group:'need to input key for group'}"`)
        }

        //params
        let attIdentify = get(binding, 'value.attIdentify')
        let attGroup = get(binding, 'value.attGroup')
        let attIndex = get(binding, 'value.attIndex')
        let previewOpacity = get(binding, 'value.previewOpacity')
        let previewDisabledOpacity = get(binding, 'value.previewDisabledOpacity')
        let previewBackground = get(binding, 'value.previewBackground')
        let previewBorderWidth = get(binding, 'value.previewBorderWidth')
        let previewBorderColor = get(binding, 'value.previewBorderColor')
        let timeDragStartDelay = get(binding, 'value.timeDragStartDelay')

        //em, clear時dispose, 解除或重建後舊實例之事件不再送到處理函式; 錯誤寫法之警告只於bind時發出
        let em = createVnodeEmitter(vnode, 'domdragdrop', 'domdragdrop', { warn: isBind })

        //domDrag
        let ev = domDrag(el, { group, attIdentify, attGroup, attIndex, previewOpacity, previewDisabledOpacity, previewBackground, previewBorderWidth, previewBorderColor, timeDragStartDelay })
        // ev.on('change', (msg) => {
        //     console.log('change', msg)
        // })
        ev.on('start', (msg) => {
            // console.log('start', msg)
            em.emit({
                evName: 'start',
                ...msg,
            })
        })
        ev.on('move', (msg) => {
            // console.log('move', msg)
            em.emit({
                evName: 'move',
                ...msg,
            })
        })
        ev.on('enter', (msg) => {
            // console.log('enter', msg)
            em.emit({
                evName: 'enter',
                ...msg,
            })
        })
        ev.on('leave', (msg) => {
            // console.log('leave', msg)
            em.emit({
                evName: 'leave',
                ...msg,
            })
        })
        ev.on('drop', (msg) => {
            // console.log('drop', msg)
            em.emit({
                evName: 'drop',
                ...msg,
            })
        })

        //save ev
        kbEv[id] = { ev, em }

    }

    function clear(el) {

        //id
        let id = el.getAttribute('ev-dragdrop')

        if (kbEv[id]) {

            //dispose
            kbEv[id].em.dispose()

            //unbind
            kbEv[id].ev.unbind()

            //set null
            kbEv[id] = null

            //delete
            delete kbEv[id]

        }

    }

    return {
        bind,
        update,
        unbind,
    }
}


export default domDragDrop
