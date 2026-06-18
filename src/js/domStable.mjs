import genID from 'wsemi/src/genID.mjs'
import domIsStable from 'wsemi/src/domIsStable.mjs'


function domStable() {
    let kpEv = {}

    function emit(vnode, name, data) {
        let handlers = (vnode.data && vnode.data.on) || (vnode.componentOptions && vnode.componentOptions.listeners)
        if (handlers && handlers[name]) {
            handlers[name].fns(data)
        }
    }

    function bind(el, binding, vnode) {
        //console.log('bind', 'el', el, 'binding', binding, 'vnode', vnode)

        //id
        let id = `r${genID()}`
        el.setAttribute('ev-stable', id)

        //domIsStable, event模式持續偵測, 穩定狀態轉變時emit('domstable', bool)
        let ev = domIsStable(el, { mode: 'event' })
        ev.on('stable', (b) => {
            // console.log('domstable', b)

            //emit
            emit(vnode, 'domstable', b)

        })
        ev.create()

        //save ev
        kpEv[id] = ev

    }

    function unbind(el) {
        //console.log('unbind', 'el', el)

        //id
        let id = el.getAttribute('ev-stable')

        //remove attr
        el.setAttribute('ev-stable', null)

        //clear
        if (kpEv[id]) {

            //dispose
            kpEv[id].dispose()

            //set null
            kpEv[id] = null

            //delete
            delete kpEv[id]

        }

    }

    return {
        bind,
        unbind,
    }
}


export default domStable
