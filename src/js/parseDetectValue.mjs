import cloneDeep from 'lodash-es/cloneDeep.js'
import isobj from 'wsemi/src/isobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isestr from 'wsemi/src/isestr.mjs'


/**
 * 解析偵測類指令(v-domresize、v-dommutation、v-domstable、v-domvisible)之指令值
 *
 * 未給或true為啟用並使用預設設定, false或null為停用, 純物件為啟用並以其鍵作為設定, 其他型別(字串、數字、陣列、函數)視同未給並給警告
 * 物件只採用該指令之可用鍵, 其他鍵不採用並給警告: 模板物件字面值每次重繪皆為新物件, 未知鍵之值若為物件或函數而列入比較, 每次重繪皆判為改變而重建
 * snap為判斷是否須重建偵測器之快照: 非函數設定之值(深拷貝, 故原地修改之陣列等亦可比出差異)與函數設定之鍵名(函數本身於呼叫時取最新指令值, 其更換不需重建)
 * 重新比較鍵(spec.refreshKey)之值不列入快照、不作為設定, 另以rkey回傳, 其改變只請偵測器重新比較
 *
 * @param {*} value 輸入指令值
 * @param {Object} [spec={}] 輸入指令規格物件
 * @param {Array} [spec.keys=[]] 輸入可用設定鍵之字串陣列
 * @param {String} [spec.refreshKey=''] 輸入重新比較鍵之名稱字串, 須同時列於keys, 預設''表示無
 * @param {Function} [spec.normalize=null] 輸入設定正規化函數, 傳入只含可用鍵之設定物件與{given}(指令值是否為物件), 回傳{cfg,warns}, 例如v-domresize補event預設值並檢查其值, 預設null
 * @returns {Object} 回傳物件, enabled為是否啟用, cfg為設定物件, funs為函數設定之鍵名陣列, snap為快照(停用時為null), rkey為重新比較鍵之值(深拷貝, 未給為undefined), warns為警告訊息字串陣列
 */
function parseDetectValue(value, spec = {}) {
    let keys = spec.keys || []
    let refreshKey = isestr(spec.refreshKey) ? spec.refreshKey : ''
    let normalize = spec.normalize || null

    //enabled, cfg, rkey, warns
    let enabled = true
    let cfg = {}
    let rkey
    let warns = []
    if (value === false || value === null) {
        enabled = false
    }
    else if (value === undefined || value === true) {
        cfg = {}
    }
    else if (isobj(value)) {
        let unknown = []
        for (let k of Object.keys(value)) {
            if (keys.indexOf(k) < 0) {
                unknown.push(k)
            }
            else if (k === refreshKey) {
                rkey = cloneDeep(value[k])
            }
            else {
                cfg[k] = value[k]
            }
        }
        if (unknown.length > 0) {
            warns.push(`設定鍵${unknown.join('、')}不適用而不採用, 可用之鍵為${keys.length > 0 ? keys.join('、') : '無'}`)
        }
    }
    else {
        let t = Array.isArray(value) ? 'array' : typeof value
        warns.push(`指令值須為true、false、null或物件, 目前為${t}, 視同未給(啟用並使用預設設定)`)
    }

    //停用
    if (!enabled) {
        return {
            enabled,
            cfg,
            funs: [],
            snap: null,
            rkey,
            warns,
        }
    }

    //normalize, given為指令值是否為物件(未給或true時cfg亦為空物件, 由此區分)
    if (isfun(normalize)) {
        let r = normalize(cfg, { given: isobj(value) })
        cfg = r.cfg
        warns = [...warns, ...(r.warns || [])]
    }

    //funs, vals
    let funs = []
    let vals = {}
    for (let k of Object.keys(cfg).sort()) {
        if (isfun(cfg[k])) {
            funs.push(k)
        }
        else {
            vals[k] = cfg[k]
        }
    }

    //snap
    let snap = {
        vals: cloneDeep(vals),
        funs,
    }

    return {
        enabled,
        cfg,
        funs,
        snap,
        rkey,
        warns,
    }
}


export default parseDetectValue
