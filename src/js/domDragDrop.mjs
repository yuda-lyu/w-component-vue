import get from 'lodash/get'
import isestr from 'wsemi/src/isestr.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import genID from 'wsemi/src/genID.mjs'
import domDrag from 'wsemi/src/domDrag.mjs'


function domDragDrop() {
    let kbEv = {}

    function emit(vnode, name, data) {
        let handlers = (vnode.data && vnode.data.on) || (vnode.componentOptions && vnode.componentOptions.listeners)
        if (handlers && handlers[name]) {
            handlers[name].fns(data)
        }
    }

    function bind(el, binding, vnode) {
        // console.log('bind', 'el', el, 'binding', binding, 'vnode', vnode)

        //id
        let id = `r${genID()}`
        el.setAttribute('ev-dragdrop', id)

        //init
        init(el, binding, vnode)

    }

    function update(el, binding, vnode) {
        // console.log('update', 'el', el, 'binding', binding)

        //clear
        clear(el)

        //init
        init(el, binding, vnode)

    }

    function unbind(el) {
        // console.log('unbind', 'el', el)

        //clear
        clear(el)

        //remove attr
        el.setAttribute('ev-dragdrop', null)

    }

    function init(el, binding, vnode) {

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

        //domDrag
        let ev = domDrag(el, { group, attIdentify, attGroup, attIndex, previewOpacity, previewDisabledOpacity, previewBackground, previewBorderWidth, previewBorderColor, timeDragStartDelay })
        // ev.on('change', (msg) => {
        //     console.log('change', msg)
        // })
        ev.on('start', (msg) => {
            // console.log('start', msg)
            emit(vnode, 'domdragdrop', {
                evName: 'start',
                ...msg,
            })
        })
        ev.on('move', (msg) => {
            // console.log('move', msg)
            emit(vnode, 'domdragdrop', {
                evName: 'move',
                ...msg,
            })
        })
        ev.on('enter', (msg) => {
            // console.log('enter', msg)
            emit(vnode, 'domdragdrop', {
                evName: 'enter',
                ...msg,
            })
        })
        ev.on('leave', (msg) => {
            // console.log('leave', msg)
            emit(vnode, 'domdragdrop', {
                evName: 'leave',
                ...msg,
            })
        })
        ev.on('drop', (msg) => {
            // console.log('drop', msg)
            emit(vnode, 'domdragdrop', {
                evName: 'drop',
                ...msg,
            })
        })

        //save ev
        kbEv[id] = ev

    }

    function clear(el) {

        //id
        let id = el.getAttribute('ev-dragdrop')

        //remove attr
        el.setAttribute('ev-dragdrop', null)

        if (kbEv[id]) {

            //unbind
            kbEv[id].unbind()

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
