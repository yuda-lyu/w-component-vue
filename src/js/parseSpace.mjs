import isNumber from 'lodash/isNumber'
import get from 'lodash/get'
import isbol from 'wsemi/src/isbol.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'


function parseSpace(obj, opt = {}) {

    //parse
    let parse = get(opt, 'parse')
    if (!isbol(parse)) {
        parse = true
    }

    //ext
    let ext = get(opt, 'ext')
    if (!iseobj(ext)) {
        ext = {}
    }

    //semicolon
    let semicolon = get(opt, 'semicolon')
    if (!isbol(semicolon)) {
        semicolon = true
    }

    //returnObj
    let returnObj = get(opt, 'returnObj')
    if (!isbol(returnObj)) {
        returnObj = false
    }

    //四方向
    let left = 0
    let right = 0
    let top = 0
    let bottom = 0
    if (parse) {
        if (isNumber(get(obj, 'h'))) {
            left = get(obj, 'h')
            right = left
        }
        if (isNumber(get(obj, 'v'))) {
            top = get(obj, 'v')
            bottom = top
        }
        if (isNumber(get(obj, 'left'))) {
            left = get(obj, 'left')
        }
        if (isNumber(get(obj, 'right'))) {
            right = get(obj, 'right')
        }
        if (isNumber(get(obj, 'top'))) {
            top = get(obj, 'top')
        }
        if (isNumber(get(obj, 'bottom'))) {
            bottom = get(obj, 'bottom')
        }
    }

    //add ext
    left += get(ext, 'left', 0)
    right += get(ext, 'right', 0)
    top += get(ext, 'top', 0)
    bottom += get(ext, 'bottom', 0)

    //space
    let space = null
    if (returnObj) {
        space = { left, right, top, bottom }
    }
    else {
        space = `${top}px ${right}px ${bottom}px ${left}px`
        if (semicolon) {
            space = `${space};`
        }
    }

    return space
}


export default parseSpace
