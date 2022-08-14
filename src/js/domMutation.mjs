import genID from 'wsemi/src/genID.mjs'


function domMutation() {
    let kpOb = {}

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
        el.setAttribute('ev-mutation', id)

        //MutationObserver
        let ob = new MutationObserver(function(mutations) {
            //console.log('mutations', mutations)

            //msg
            let msg = {
                ele: el,
                mutations,
            }

            //emit
            emit(vnode, 'dommutation', msg)

        })

        //config
        let config = {
            attributes: true,
            childList: true, //節點清單有變更
            subtree: true, //所屬子節點變更
            // characterData: true,
        }

        //observe
        ob.observe(el, config)

        //save ob
        kpOb[id] = ob
        console.log('observe kpOb', kpOb)

    }

    function unbind(el) {
        //console.log('unbind', 'el', el)

        //id
        let id = el.getAttribute('ev-mutation')

        //remove attr
        el.setAttribute('ev-mutation', null)

        //clear
        if (kpOb[id]) {
            kpOb[id].disconnect()
            console.log('disconnect kpOb', kpOb)
            delete kpOb[id]
        }

    }

    return {
        bind,
        unbind,
    }
}


export default domMutation
