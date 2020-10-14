import get from 'lodash/get'
import treeObj from 'wsemi/src/treeObj.mjs'


/**
 * 展平樹狀物件陣列
 *
 * @param {Array} items 輸入樹狀物件陣列
 * @param {String} [bindKey='id'] 輸入節點物件識別用欄位字串，預設'id'
 * @param {String} [bindChildren='children'] 輸入節點物件內存放子節點欄位字串，預設'children'
 * @returns {Array} 回傳節點物件陣列
 */
function flattenTree(items, bindKey = 'id', bindChildren = 'children') {

    function getNk(nk) {
        //將nk內插入bindChildren, 因主節點為array, 各節點內的子節點也為array
        let r = [nk[0]]
        for (let i = 1; i < nk.length; i++) {
            let k = nk[i]
            r.push(bindChildren)
            r.push(k)
        }
        return r
    }

    //nodes
    let nodes = []
    treeObj(items, (value, key, nk) => {

        //pk
        let pk = get(value, bindKey, null)

        //children
        let children = get(value, bindChildren, null)

        //push
        if (pk) {
            nodes.push({
                ...value,
                nk: getNk([...nk, key]),
                key,
            })
            if (children) {
                return children
            }
        }

    })

    return nodes
}


export default flattenTree
