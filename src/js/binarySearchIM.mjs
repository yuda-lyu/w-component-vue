

function core(n, fGetValue) {
    let iStart = 0
    let vStart = fGetValue(iStart)
    let iEnd = n - 1
    let vEnd = fGetValue(iEnd)

    let run = true
    let index = null
    while (run) {
        let iMiddle = Math.floor((iEnd + iStart) / 2)
        let vMiddle = fGetValue(iMiddle)
        //console.log(`iStart=${iStart},  vStart=${vStart},  iMiddle=${iMiddle},  vMiddle=${vMiddle},  iEnd=${iEnd},  vEnd=${vEnd}`)

        //check
        if (vStart < 0 && vMiddle < 0 && vEnd < 0) {
            index = null
            run = false
            break
        }
        else if (vStart > 0 && vMiddle > 0 && vEnd > 0) {
            index = null
            run = false
            break
        }
        else if (iMiddle === iStart) {
            index = iStart
            run = false
            break
        }
        else if (iMiddle === iEnd) {
            index = iEnd
            run = false
            break
        }
        else if (vStart === 0) {
            index = iStart
            run = false
            break
        }
        else if (vMiddle === 0) {
            index = iMiddle
            run = false
            break
        }
        else if (vEnd === 0) {
            index = iEnd
            run = false
            break
        }

        //update
        if (vStart * vMiddle > 0) {
            iStart = iMiddle
            vStart = vMiddle
        }
        else {
            iEnd = iMiddle
            vEnd = vMiddle
        }

    }

    return index
}


/**
 * 二元搜索法(Binary Search)，通過fGetValue(index)取值，求最靠近0但小於0的值，並回傳值與所在的index與所查得的數據items[index]
 *
 * @param {Array} items 輸入欲搜尋陣列
 * @param {Function} fGetValue 輸入取值函數，傳入index
 * @returns {Object} index 回傳物件，最靠近0但小於0的值、所在的index與所查得的數據items[index]
 */
function binarySearchIM(items, fGetValue) {
    return core(items.size, fGetValue)
}


export default binarySearchIM
