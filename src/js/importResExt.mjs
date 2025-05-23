
import get from 'lodash-es/get.js'
import haskey from 'wsemi/src/haskey.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import pmSeries from 'wsemi/src/pmSeries.mjs'
import replace from 'wsemi/src/replace.mjs'
import sep from 'wsemi/src/sep.mjs'
import strdelleft from 'wsemi/src/strdelleft.mjs'
import importResources from 'wsemi/src/importResources.mjs'


let kbUrl = {}
let fetchUrl = async(url) => {

    //check
    if (haskey(kbUrl, url)) {
        let pkg = await kbUrl[url]
        return pkg
    }

    //預先save pm
    let pm = genPm()
    kbUrl[url] = pm

    //res
    let res = await fetch(url)

    //check
    if (!res.ok) {
        throw new Error(`can not get res from url[${url}]`)
    }

    //version
    let pkg = await res.json()

    //resolve
    pm.resolve(pkg)

    return pkg
}

let kpLib = {}
let fetchLib = async (name, file = '') => {

    //key
    let key = `${name}|${file}`

    //check
    if (haskey(kpLib, key)) {
        let url = await kpLib[key]
        return url
    }

    //預先save pm
    let pm = genPm()
    kpLib[key] = pm

    //urlPkg, urlTmp
    let urlPkg = `https://raw.githubusercontent.com/yuda-lyu/${name}/refs/heads/master/package.json`
    let urlTmp = `https://cdn.jsdelivr.net/npm/${name}@{version}/dist/{fn}`

    //pkg
    let pkg = await fetchUrl(urlPkg)

    //version
    let version = get(pkg, 'version')

    //check
    if (!isestr(version)) {
        throw new Error('找不到 version')
    }

    //fn
    let fn = `${name}.umd.js`
    if (isestr(file)) {
        fn = file
    }

    //url
    let url = urlTmp
    url = replace(url, '{version}', version)
    url = replace(url, '{fn}', fn)

    //resolve
    pm.resolve(url)

    return url
}

let importResExt = async(pathItems) => {
    // console.log('pathItems', pathItems)

    //rs
    let rs = await pmSeries(pathItems, async (inp) => {

        //name, file
        let name = ''
        let file = ''
        let hasName = inp.indexOf('base:') >= 0
        let hasFile = inp.indexOf('file:') >= 0
        let ss = sep(inp, '|')
        let s0 = get(ss, 0, '')
        let s1 = get(ss, 1, '')
        if (hasName && hasFile) {
            name = strdelleft(s0, 5)
            file = strdelleft(s1, 5)
        }
        if (hasName && !hasFile) {
            name = strdelleft(inp, 5)
        }
        // console.log('inp', inp)
        // console.log('name', name)
        // console.log('file', file)

        //check, 若都不是則inp為一般url
        if (!hasName && !hasFile) {
            return inp
        }

        //url
        let url = inp
        if (isestr(name) && !isestr(file)) {
            url = await fetchLib(name)
        }
        else if (isestr(name) && isestr(file)) {
            url = await fetchLib(name, file)
        }
        else {
            console.log('url', url)
            throw new Error(`invalid url`)
        }
        // console.log('url', url)

        return url
    })
    // console.log('rs', rs)

    //res
    let res = await importResources(rs)

    return res
}


export default importResExt
