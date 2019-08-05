import map from 'lodash/map'
import trim from 'lodash/trim'
import filter from 'lodash/filter'
import toUpper from 'lodash/toUpper'
import split from 'lodash/split'
import size from 'lodash/size'
import join from 'lodash/join'


/**
 * 將字串破壞性壓縮，縮短用
 *
 * @param {String} v 輸入原始字串
 * @returns {String} 回傳破壞性字串
 */
function seEncode(str) {

    //ks, 1~27
    let ks = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    //toUpper, 轉大寫
    str = toUpper(str)

    //filter, 只保留英文字
    str = filter(str, function(v) {
        return v.match(/[A-Z]/)
    })

    //fks, 計算各字元編號
    let fks = map(str, function(v) {
        return v.charCodeAt(0) - 64 //1~27
    })

    //c, 重新編碼, 2字元index相加後, 再查ks得新字元
    let c = ''
    for (let i = 0; i < fks.length; i += 2) {

        //k1
        let k1 = fks[i]

        //k2
        let k2 = 0
        let j = i + 1
        if (j < fks.length) {
            k2 = fks[j]
        }

        //k
        c += ks[k1 + k2]

    }

    return c
}


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
