import _ from 'lodash'
import getPks from './getPks.mjs'
import setPks from './setPks.mjs'


async function main() {
    //自動添加版本補丁號

    //pks
    let pks = getPks()

    //v
    let v = pks.version
    let s = _.split(v, '.')
    s[2] = _.toString(_.toNumber(s[2]) + 1)
    pks.version = _.join(s, '.')

    //save
    setPks(pks)

    console.log('now version: ' + pks.version)

}
main()
