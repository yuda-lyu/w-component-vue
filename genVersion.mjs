import _ from 'lodash'
import fs from 'fs'


function getPks() {
    let c = fs.readFileSync('package.json', 'utf8')
    return JSON.parse(c)
}


function setPks(c) {
    fs.writeFileSync('package.json', c, 'utf8')
}


async function main() {
    //自動添加版本補丁號

    //read
    let pks = getPks()
    //console.log(pks)

    //v
    let v = pks.version
    let s = _.split(v, '.')
    s[2] = _.toString(_.toNumber(s[2]) + 1)
    pks.version = _.join(s, '.')

    //save
    console.log('now version: ' + pks.version)
    setPks(JSON.stringify(pks, null, 2))

}
main()
