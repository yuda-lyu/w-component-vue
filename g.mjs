import map from 'lodash/map'
import filter from 'lodash/filter'
import toUpper from 'lodash/toUpper'


/**
 * 將字串破壞性壓縮，縮短用
 *
 * @param {String} v 輸入原始字串
 * @returns {String} 回傳破壞性字串
 */
function seEncode(v) {

    //ks, 1~27
    let ks = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    //toUpper, 轉大寫
    v = toUpper(v)

    //filter, 只保留英文字
    v = filter(v, function(v) {
        return v.match(/[A-Z]/)
    })

    //fks, 計算各字元編號
    let fks = map(v, function(v) {
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


function cvCasename(casename) {
    return seEncode(casename)
}


let c = 'w-text_leftIcon x leftIconColor x leftIconColorHover xetc_border_pure'
console.log(cvCasename(c))

