import fs from 'fs'
import _ from 'lodash'
import getFiles from 'w-package-tools/src/getFiles.mjs'


let fdSrc = './test-html/'
let fdTar = './docs/examples/'


async function main() {
    //把example裡面cdn更換, 再複製到docs的example內, 作為日後發佈為靜態網站

    //cdn
    let cdn = `<script src="https://cdn.jsdelivr.net/npm/w-component-vue@latest/dist/w-component-vue.umd.js"></script>`

    //mkdirSync
    if (!fs.existsSync(fdTar)) {
        fs.mkdirSync(fdTar)
    }

    //getFiles
    let ltfs = getFiles(fdSrc)

    _.each(ltfs, function(v) {

        //fn
        let fn = fdSrc + v

        //c
        let c = fs.readFileSync(fn, 'utf8')

        //replace
        let r = `<script src="../dist/w-component-vue.umd.js"></script>`
        c = c.replace(r, cdn)

        //write
        //console.log(c)
        fs.writeFileSync(fdTar + v, c, 'utf8')

    })

}
main()
