import get from 'lodash/get'
import isestr from 'wsemi/src/isestr.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import genID from 'wsemi/src/genID.mjs'
import rp from 'wsemi/src/domRipple.mjs'
import color2hex from './vuetifyColor.mjs'


function domRipple(opt = {}) {
    let kpEv = {}

    function bind(el, binding, vnode) {
        // console.log('bind', 'el', el, 'binding', binding, 'vnode', vnode)

        //id
        let id = `r${genID()}`
        el.setAttribute('ev-ripple', id)

        //init
        init(el, binding)

    }

    // function update(el, binding) { ///若有樣式變更則會更新元素, 例如滑鼠移入會導致ripple重載, 因此導致第一次點擊無法觸發ripple
    //     // console.log('update', 'el', el, 'binding', binding)

    //     //clear
    //     clear(el)

    //     //init
    //     init(el, binding)

    // }

    function unbind(el) {
        // console.log('unbind', 'el', el)

        //clear
        clear(el)

        //remove attr
        el.setAttribute('ev-ripple', null)

    }

    function init(el, binding) {

        //id
        let id = el.getAttribute('ev-ripple')

        //eff
        let eff = get(binding, 'value')
        eff = iseobj(eff)

        //check
        if (!eff) {
            return
        }

        //color
        let color = get(binding, 'value.color')
        if (!isestr(color)) {
            color = 'rgba(255, 255, 255, 0.5)'
        }
        color = color2hex(color)

        //timeDuration
        let timeDuration = get(binding, 'value.timeDuration')
        if (!isnum(timeDuration)) {
            timeDuration = 1000
        }
        timeDuration = cdbl(timeDuration)

        function evClick(e) {
            // console.log('binding.value', binding.value)

            //domRipple
            rp(e.currentTarget, e, { color, timeDuration })

        }

        //addEventListener
        el.addEventListener('click', evClick, false)

        //save de
        kpEv[id] = evClick

    }

    function clear(el) {

        //id
        let id = el.getAttribute('ev-ripple')

        if (kpEv[id]) {

            //evClick
            let evClick = kpEv[id]

            //removeEventListener
            el.removeEventListener('click', evClick, false)

            //delete
            delete kpEv[id]

        }

    }

    return {
        bind,
        // update,
        unbind,
    }
}


export default domRipple
