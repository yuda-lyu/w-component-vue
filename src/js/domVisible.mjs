
import domIsVisible from 'wsemi/src/domIsVisible.mjs'
import genID from 'wsemi/src/genID.mjs'


function domVisible() {
    let kpDv = {}

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
        el.setAttribute('ev-visible', id)

        //visible
        let visible = false

        //timer
        let timer = setInterval(() => {

            //domIsVisible
            domIsVisible(el)
                .then((v) => {

                    //check
                    if (visible === v) {
                        return
                    }

                    //update
                    visible = v

                    //emit
                    emit(vnode, 'domvisible', v)

                })
                .catch(() => {})

        }, 50)

        //save timer
        kpDv[id] = timer

    }

    function unbind(el) {
        //console.log('unbind', 'el', el)

        //id
        let id = el.getAttribute('ev-visible')

        //remove attr
        el.setAttribute('ev-visible', null)

        //clear
        if (kpDv[id]) {

            //clear
            clearInterval(kpDv[id])

            //set null
            kpDv[id] = null

            //delete
            delete kpDv[id]

        }

    }

    return {
        bind,
        unbind,
    }
}


export default domVisible
