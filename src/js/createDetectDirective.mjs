import isEqual from 'lodash-es/isEqual.js'
import genID from 'wsemi/src/genID.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import createVnodeEmitter from './createVnodeEmitter.mjs'
import parseDetectValue from './parseDetectValue.mjs'


/**
 * 建立偵測類自訂指令(v-domresize、v-dommutation、v-domstable、v-domvisible)之共同生命週期
 *
 * 各指令只提供可用設定鍵、設定正規化與「以設定建立偵測器」, 屬性、指令值解析、重建或重新比較、事件轉發與清除皆由此處理, 使同一規則只寫一處
 * 綁定以元件實例(元件標籤上之指令)或元素(元素上之指令)識別, 兩者皆跨重繪不變: 元件標籤與其根元素為同一DOM元素, 若以元素或其屬性識別兩者會互相覆蓋(事件送錯處理函式、解除其一時清掉另一個)
 * 宿主重繪後(componentUpdated, 子節點已更新): 觸發器改用新vnode之監聽物件; 設定快照改變(啟停、設定之值、函數設定之有無)則解除舊偵測器後重建;
 * 快照未變而重新比較鍵之值改變者, 延至本批更新之後(microtask)並合併請偵測器重新比較; 其餘不動作
 * 宿主重繪不自動重新比較: 重新比較會呼叫使用端函數(如getBase), 於hook內呼叫會使其讀取之反應式狀態成為宿主之依賴, 且多實例共用比較基準時互相觸發而永不收斂
 * 函數設定一律呼叫最新指令值中之同名函數; 其拋錯時每個綁定之每個鍵以console.error提示一次, 再交回偵測器原本之處理
 * 每次建立之偵測器各自一個閘門, 解除或重建時關閉, 故舊偵測器已排定之事件不會送達
 *
 * @param {Object} def 輸入指令定義物件
 * @param {String} def.name 輸入指令與事件名稱字串, 例如'domresize'
 * @param {String} def.attr 輸入綁定時設於元素之屬性名稱字串, 例如'ev-resize'
 * @param {Array} [def.keys=[]] 輸入可用設定鍵之字串陣列
 * @param {String} [def.refreshKey=''] 輸入重新比較鍵之名稱字串, 須同時列於keys, 偵測器須提供refresh, 預設''表示無
 * @param {Function} [def.normalize=null] 輸入設定正規化函數, 傳入只含可用鍵之設定物件與{given}, 回傳{cfg,warns}, 預設null
 * @param {Function} def.create 輸入建立偵測器函數, 傳入(el, cfg, emit), 回傳{clear,refresh}(refresh可無), 或null表示未建立
 * @returns {Object} 回傳Vue 2自訂指令定義物件, 含bind、componentUpdated、unbind
 */
function createDetectDirective(def) {
    let { name, attr, create } = def
    let spec = {
        keys: def.keys || [],
        refreshKey: def.refreshKey || '',
        normalize: def.normalize || null,
    }
    let recs = new WeakMap()

    //getOwner, 綁定之識別
    let getOwner = (el, vnode) => {
        return (vnode && vnode.componentInstance) || el
    }

    //warn, 同一綁定之同一訊息只發一次(含重繪後才出現者)
    let warn = (rec, msgs) => {
        for (let m of msgs) {
            if (rec.warned.has(m)) {
                continue
            }
            rec.warned.add(m)
            console.warn(`[v-${name}] ${m}`)
        }
    }

    //start, 依rec.p建立偵測器
    let start = (el, rec) => {
        let p = rec.p
        if (!p.enabled) {
            return
        }

        //cfg, 函數設定改為呼叫最新指令值之同名函數
        let cfg = {}
        for (let k of Object.keys(p.cfg)) {
            let v = p.cfg[k]
            if (isfun(v)) {
                cfg[k] = (...args) => {
                    let f = rec.p.cfg[k]
                    if (!isfun(f)) {
                        return null
                    }
                    try {
                        return f(...args)
                    }
                    catch (err) {
                        if (!rec.warned.has(`fun:${k}`)) {
                            rec.warned.add(`fun:${k}`)
                            console.error(`[v-${name}] 設定函數${k}拋錯`, err)
                        }
                        throw err
                    }
                }
            }
            else {
                cfg[k] = v
            }
        }

        //gate, emit
        let gate = { alive: true }
        let emit = (data) => {
            if (gate.alive) {
                rec.em.emit(data)
            }
        }

        //create
        let d = create(el, cfg, emit)
        rec.det = {
            gate,
            clear: d && isfun(d.clear) ? d.clear : null,
            refresh: d && isfun(d.refresh) ? d.refresh : null,
        }

    }

    //stop, 解除偵測器
    let stop = (rec) => {
        let det = rec.det
        if (!det) {
            return
        }
        rec.det = null
        det.gate.alive = false
        if (det.clear) {
            det.clear()
        }
    }

    //refreshLater, 延至microtask並合併; 執行時偵測器已解除或重建者不動作(重建之偵測器自行量測)
    let refreshLater = (rec) => {
        let det = rec.det
        if (!det || !det.refresh || rec.refreshing) {
            return
        }
        rec.refreshing = true
        Promise.resolve().then(() => {
            rec.refreshing = false
            if (rec.det === det) {
                det.refresh()
            }
        })
    }

    //release, 作廢綁定之觸發器與偵測器
    let release = (rec) => {
        rec.em.dispose()
        stop(rec)
    }

    function bind(el, binding, vnode) {
        //console.log('bind', 'el', el, 'binding', binding, 'vnode', vnode)

        //id, 屬性保留供外部以選擇器定位
        let id = `r${genID()}`
        el.setAttribute(attr, id)

        //owner, 同一識別已有綁定(未經unbind)時先作廢, 避免舊偵測器遺留
        let owner = getOwner(el, vnode)
        let old = recs.get(owner)
        if (old) {
            release(old)
        }

        //rec
        let rec = {
            em: createVnodeEmitter(vnode, name, name),
            p: parseDetectValue(binding.value, spec),
            det: null,
            warned: new Set(),
            refreshing: false,
        }
        warn(rec, rec.p.warns)
        recs.set(owner, rec)

        //start
        start(el, rec)

    }

    function componentUpdated(el, binding, vnode) {
        //console.log('componentUpdated', 'el', el, 'binding', binding, 'vnode', vnode)

        //rec
        let rec = recs.get(getOwner(el, vnode))
        if (!rec) {
            return
        }

        //update listeners
        rec.em.update(vnode)

        //p
        let p = parseDetectValue(binding.value, spec)
        warn(rec, p.warns)
        let pOld = rec.p
        rec.p = p

        //重建
        if (p.enabled !== pOld.enabled || !isEqual(p.snap, pOld.snap)) {
            stop(rec)
            start(el, rec)
            return
        }

        //refresh
        if (p.enabled && !isEqual(p.rkey, pOld.rkey)) {
            refreshLater(rec)
        }

    }

    function unbind(el, binding, vnode) {
        //console.log('unbind', 'el', el)

        //remove attr
        el.setAttribute(attr, null)

        //rec
        let owner = getOwner(el, vnode)
        let rec = recs.get(owner)
        if (!rec) {
            return
        }
        recs.delete(owner)

        //release
        release(rec)

    }

    return {
        bind,
        componentUpdated,
        unbind,
    }
}


export default createDetectDirective
