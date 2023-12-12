import _ from 'lodash-es'
import fs from 'fs'
import w from 'wsemi'
import getFiles from 'w-package-tools/src/getFiles.mjs'


let fdSrc = './src/components/'
let fn_tar = 'WComponentVue.vue'


function main() {
    //讀取components裡面組件, 自動生成WComponentVue, 供rollup打包整體組件

    //getFiles
    let ltfs = getFiles(fdSrc)
    _.pull(ltfs, fn_tar)
    _.pull(ltfs, 'demolink.vue')

    //c1, c2
    let c1 = []
    let c2 = []
    _.each(ltfs, function(v) {

        //name_all
        let name_all = v

        //s
        let s = _.split(v, '.')

        //name_ori
        let name_ori = s[0]

        //name_ext
        let name_ext = s[1]

        //name_ori, name_kb
        let name_kb = _.kebabCase(name_ori)

        //c1
        c1.push(`import ${name_ori} from './${name_all}'`)

        //c2
        if (name_ext === 'vue') {
            c2.push(`        Vue.component('${name_kb}', ${name_ori})`)
        }
        else if (name_ext === 'mjs') {
            let funName = _.toLower(name_ori)
            funName = '$' + w.strdelleft(funName, 1)
            c2.push(`        Vue.prototype.${funName} = ${name_ori}`)
        }

    })

    //c
    let c =
`<script>
${_.join(c1, '\r\n')}

let WComponentVue = {
    install: function(Vue) {
${_.join(c2, '\r\n')}
    }
}

export default WComponentVue
</script>

`

    //write
    //console.log(c)
    fs.writeFileSync(fdSrc + fn_tar, c, 'utf8')

}
main()
