import isNumber from 'lodash-es/isNumber.js'
import get from 'lodash-es/get.js'
import isstr from 'wsemi/src/isstr.mjs'


function parseDirection(obj, opt = {}) {

    //def
    let def = get(opt, 'def', '')

    //type
    let type = get(opt, 'type', '')
    if (type !== 'num' && type !== 'text') {
        type = 'num'
    }

    //ck
    let ck
    if (type === 'num') {
        ck = isNumber
    }
    else if (type === 'text') {
        ck = isstr
    }

    //四方向
    let left = def
    let right = def
    let top = def
    let bottom = def
    if (ck(get(obj, 'h'))) {
        left = get(obj, 'h')
        right = left
    }
    if (ck(get(obj, 'v'))) {
        top = get(obj, 'v')
        bottom = top
    }
    if (ck(get(obj, 'left'))) {
        left = get(obj, 'left')
    }
    if (ck(get(obj, 'right'))) {
        right = get(obj, 'right')
    }
    if (ck(get(obj, 'top'))) {
        top = get(obj, 'top')
    }
    if (ck(get(obj, 'bottom'))) {
        bottom = get(obj, 'bottom')
    }

    //r
    let r = { left, right, top, bottom }

    return r
}


export default parseDirection
