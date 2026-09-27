import createDetectDirective from './createDetectDirective.mjs'


//keys, 可用設定鍵: MutationObserver之設定
let keys = ['attributes', 'attributeFilter', 'attributeOldValue', 'characterData', 'characterDataOldValue', 'childList', 'subtree']


//normalize, 未給指令值時使用預設設定, 給物件時原樣作為MutationObserver之設定(不與預設合併)
function normalize(cfg, { given }) {
    if (given) {
        return {
            cfg,
            warns: [],
        }
    }
    return {
        cfg: {
            attributes: true,
            childList: true, //節點清單有變更
            subtree: true, //所屬子節點變更
            // characterData: true,
        },
        warns: [],
    }
}


//create
function create(el, cfg, emit) {

    //MutationObserver
    let ob = new MutationObserver(function(mutations) {
        //console.log('mutations', mutations)

        //msg
        let msg = {
            ele: el,
            mutations,
        }

        //emit
        emit(msg)

    })

    //observe, 設定無效時(例如attributes、childList、characterData皆非true)瀏覽器拋錯, 警告後視為停用
    try {
        ob.observe(el, cfg)
    }
    catch (err) {
        ob.disconnect()
        console.warn(`[v-dommutation] MutationObserver設定無效而不偵測: ${err && err.message}`)
        return null
    }

    return {
        clear: () => {
            ob.disconnect()
        },
    }
}


/**
 * 自訂指令v-dommutation, 元素(預設含其子孫)之屬性或子節點變更時觸發@dommutation
 *
 * 指令值: 未給或true為啟用並使用預設設定{attributes:true,childList:true,subtree:true}; false或null為停用(不建立偵測器、不觸發); 其他型別視同未給並警告
 * 指令值為物件時原樣作為MutationObserver之設定(不與預設合併), 可用鍵attributes、attributeFilter、attributeOldValue、characterData、characterDataOldValue、childList、subtree, 設定無效時警告並不偵測, 其他鍵不採用並警告
 * 宿主重繪後設定改變則重建偵測器; 重建時舊偵測器已記錄而尚未送達之異動不送出
 *
 * 事件內容為物件{ele,mutations}, ele為元素, mutations為MutationRecord陣列
 * 處理函式經Vue之監聽器(invoker)呼叫: 多個處理函式依序執行, 同步錯誤與Promise拒絕交Vue之錯誤處理(自處理函式所屬元件之$parent起經errorCaptured, 再Vue.config.errorHandler), 與原生v-on相同
 * 監聽之新增、移除或改名於宿主重繪後跟隨; 元件標籤上同時有@dommutation與@dommutation.native時只呼叫前者, 無前者時呼叫後者; 解除綁定後不再觸發
 * 不支援.once、.capture、.passive, 事件名須小寫(@dommutation), 元素上之.native無效, 以上於綁定時警告; .ctrl、.shift、.alt、.meta使處理函式不被呼叫, .stop、.prevent、.left、.right與按鍵修飾字使處理函式拋錯, 皆無法於執行期警告
 * 綁定時於元素設ev-mutation屬性, 解除時改為'null'
 *
 * @returns {Object} 回傳Vue 2自訂指令定義物件, 以Vue.directive('dommutation', domMutation())或元件directives註冊
 */
function domMutation() {
    return createDetectDirective({
        name: 'dommutation',
        attr: 'ev-mutation',
        keys,
        normalize,
        create,
    })
}


export default domMutation
