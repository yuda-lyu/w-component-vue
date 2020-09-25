
import domDetect from 'wsemi/src/domDetect.mjs'
import genID from 'wsemi/src/genID.mjs'


//emit
let emit = (vnode, name, data) => {
    let handlers = (vnode.data && vnode.data.on) ||
      (vnode.componentOptions && vnode.componentOptions.listeners)

    if (handlers && handlers[name]) {
        handlers[name].fns(data)
    }
}


//kpDe
let kpDe = {}


function bind(el, binding, vnode) {
    //console.log('bind', 'el', el, 'binding', binding, 'vnode', vnode)

    //id
    let id = `r${genID()}`
    el.setAttribute('ev-resize', id)

    //de, 不能用vuetify的v-resize, 因是基於window resize無法偵測單純的元素尺寸變化
    let de = domDetect(() => {
        return el
    })
    de.on('resizeWithWindow', (s) => {
        // console.log('resizeWithWindow', s)

        //msg
        let winHeight = window.innerHeight
        let msg = {
            ...s,
            winHeight,
        }
        //emit
        emit(vnode, 'domresize', msg)

    })

    //save de
    kpDe[id] = de

}


function unbind(el) {
    //console.log('unbind', 'el', el)

    //id
    let id = el.getAttribute('ev-resize')
    el.setAttribute('ev-resize', null)

    //clear
    if (kpDe[id]) {
        kpDe[id].clear()
        delete kpDe[id]
    }

}


export default {
    bind,
    unbind,
}
