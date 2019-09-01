import fs from 'fs'
import _ from 'lodash'
import getPks from './getPks.mjs'


let fn = './README.md'


function getReadme() {
    let c = fs.readFileSync(fn, 'utf8')
    return {
        content: c,
        lines: _.split(c, '\r\n')
    }
}


async function main() {
    //由package.json取得版本, 再更換readme內cdn版本

    //pks
    let pks = getPks()

    //rdme
    let rdme = getReadme()

    //replace
    let sf = `(${pks.name}@)+(\\d+.\\d+.\\d+)`
    let sr = `${pks.name}@${pks.version}`
    let reg = new RegExp(sf, 'g')
    let c = rdme.content.replace(reg, sr)

    //write
    //console.log(c)
    fs.writeFileSync(fn, c, 'utf8')

}
main()
