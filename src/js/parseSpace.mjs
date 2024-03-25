import get from 'lodash-es/get.js'
import isbol from 'wsemi/src/isbol.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import parseDirection from './parseDirection.mjs'


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
        let dir = parseDirection(obj)
        left = dir.left
        right = dir.right
        top = dir.top
        bottom = dir.bottom
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
