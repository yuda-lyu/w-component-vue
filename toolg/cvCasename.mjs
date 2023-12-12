import map from 'lodash-es/map'
import trim from 'lodash-es/trim'
import filter from 'lodash-es/filter'
import toUpper from 'lodash-es/toUpper'
import split from 'lodash-es/split'
import size from 'lodash-es/size'
import join from 'lodash-es/join'


function seCut(str) {

    //split
    let s = split(str, '&')

    //trim
    s = map(s, function(v) {
        return trim(v)
    })

    //n
    let n = size(s)
    n = Math.min(4, n)

    //r
    let r = []
    for (let i = 0; i < n; i++) {
        r.push(s[i])
    }

    //join
    let c = join(r, '_')

    return c
}


function cvCasename(casename) {
    //return seEncode(casename)
    return seCut(casename)
}


export default cvCasename
