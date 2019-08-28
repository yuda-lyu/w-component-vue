import _ from 'lodash'
import fs from 'fs'


let fd_src = 'src/components/'
let fd_tar = 'dist/'
let fn_rollup_src = '.rollup.mjs'
let fn_rollup_tar = '.rollupComps'
let fn_type = 'vue'


async function getFiles(fd) {
    let fsp = fs.promises
    let ltfs = await fsp.readdir(fd)
    return ltfs
}


async function main() {
    //讀取components內vue組件與rollup範本(.rollup.mjs), 再自動生成rollup設定檔, 供rollup打包個別組件與整體組件

    //r
    let r = fs.readFileSync(fn_rollup_src, 'utf8')

    //getFiles
    let ltfs = await getFiles(fd_src)
    _.pull(ltfs, 'WAlert.mjs') //rollup設定檔目前是給vue組件打包用, 暫時不獨立打包成js組件, 將WAlert嵌入WComponentVue元件中呼叫使用
    _.pull(ltfs, 'demolink.vue') //不打包github網頁輔助顯示組件

    //get name
    ltfs = _.map(ltfs, function(v) {
        return v.replace('.vue', '')
    })

    //cps
    let cps = JSON.stringify(ltfs)

    //c
    let c = r
    c = c.replace('{fd_src}', fd_src)
    c = c.replace('{fd_tar}', fd_tar)
    c = c.replace('{cps}', cps)
    c = c.replace('{fn_type}', fn_type)

    //write
    //console.log(c)
    fs.writeFileSync(fn_rollup_tar, c, 'utf8')

}
main()
