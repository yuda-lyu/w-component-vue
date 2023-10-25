import map from 'lodash/map'
import trim from 'lodash/trim'
import filter from 'lodash/filter'
import toUpper from 'lodash/toUpper'
import split from 'lodash/split'
import size from 'lodash/size'
import join from 'lodash/join'


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
