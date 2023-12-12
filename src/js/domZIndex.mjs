import get from 'lodash-es/get'
import isNumber from 'lodash-es/isNumber'
import values from 'lodash-es/values'
import size from 'lodash-es/size'
import max from 'lodash-es/max'
import haskey from 'wsemi/src/haskey.mjs'


let kpAll = {}


function getLevel(type, key) {

    //check
    if (!haskey(kpAll, type)) {
        kpAll[type] = {}
    }

    //kp
    let kp = get(kpAll, type, {})

    //l
    let l = get(kp, key, null)

    //check
    if (isNumber(l)) {
        return l
    }

    //vs
    let vs = values(kpAll[type])
    // console.log('getLevel kpAll[type]', kpAll[type])
    // console.log('getLevel vs', vs)

    //check
    if (size(vs) === 0) {

        //default
        l = 1

        //save
        kpAll[type][key] = l

        return l
    }

    //max+1
    l = max(vs) + 1

    //save
    kpAll[type][key] = l

    return l
}


function destroyLevel(type, key) {

    //check
    if (!haskey(kpAll, type)) {
        return
    }

    //delete
    delete kpAll[type][key]

}


let domZIndex = {
    getLevel,
    destroyLevel,
}


export default domZIndex
