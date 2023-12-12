import _ from 'lodash-es'
import { build, test } from 'w-puppeteer-uitest/src/exp.mjs'
import readJson from 'w-puppeteer-uitest/src/readJson.mjs'


let fd = 'D:\\開源-JS-104-2-w-component-vue\\w-component-vue\\'
let fd_html = fd + 'test-html\\'
let fd_action = fd + 'test-action\\'
let fd_out = fd + 'test-screenshot\\'


function readAction(name) {
    return readJson(fd_action + name + '.action.json')
}


let optExp = {
    headless: true,
    num_web: 10,
    ratio_similar: 0.965,
    // htmlFilter: function(vs) {
    //     //console.log(vs)
    //     return vs.filter(function(v) {
    //         //return v.indexOf('loading') < 0
    //         return v.indexOf(`w-text-suggest` + '_') >= 0 //有問題
    //     })
    // }
}
build(fd_html, readAction, fd_out, optExp)
//test(fd_html, readAction, fd_out, optExp)
