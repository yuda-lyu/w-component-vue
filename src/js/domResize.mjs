import domDetect from 'wsemi/src/domDetect.mjs'
import createDetectDirective from './createDetectDirective.mjs'


//keys, 可用設定鍵: event為轉發之事件, refreshKey為重新比較鍵, 其餘原樣作為domDetect之opt
let keys = ['event', 'refreshKey', 'mode', 'timeInterval', 'tolerancePixel', 'sync', 'watchIdentity', 'getSize', 'getBase', 'throttle']


//normalize, event未給為'resizeWithWindow'(元素或視窗尺寸改變皆觸發), 只需元素尺寸者給'resize', 其他值視同未給並警告
function normalize(cfg) {
    let event = cfg.event
    let warns = []
    if (event === undefined) {
        event = 'resizeWithWindow'
    }
    else if (event !== 'resize' && event !== 'resizeWithWindow') {
        warns.push(`event須為'resize'或'resizeWithWindow', 目前為${String(event)}, 視同未給(resizeWithWindow)`)
        event = 'resizeWithWindow'
    }
    return {
        cfg: {
            ...cfg,
            event,
        },
        warns,
    }
}


//create
function create(el, cfg, emit) {
    let { event, ...opt } = cfg

    //de
    let de = domDetect(() => {
        return el
    }, opt)
    de.on(event, (msg) => {
        // console.log(event, msg)

        //emit
        emit(msg)

    })

    return {
        clear: () => {
            de.clear()
        },
        refresh: () => {
            de.refresh()
        },
    }
}


/**
 * 自訂指令v-domresize, 元素尺寸或視窗尺寸改變時觸發@domresize
 *
 * 指令值: 未給或true為啟用並使用預設設定; false或null為停用(不建立偵測器、不觸發); 其他型別視同未給並警告
 * 指令值為物件時為設定: event給'resize'時只轉發元素尺寸之事件(不含視窗事件), 未給為'resizeWithWindow'; refreshKey見下;
 * mode、timeInterval、tolerancePixel、sync、watchIdentity、getSize、getBase、throttle原樣作為wsemi domDetect之opt, 意義與預設見domDetect; 其他鍵不採用並警告
 * 宿主重繪後: 設定改變(啟停、event、設定之值、getSize或getBase之有無)則重建偵測器, 重建後之首次量測必觸發(sold為0、該軸smode為'larger'); 物件字面值每次重繪產生新物件, 內容相同者不重建
 * getSize、getBase一律呼叫最新指令值中之同名函數; getBase須回傳該實例自身目前套用之尺寸, 並於處理函式內更新, 不可跨實例共用
 * 比較基準因尺寸以外之原因改變時(例如getBase之固定寬度被取消), 改變refreshKey之值(任意值, 以內容比較), 即於本批更新之後重新量測比較(不重建); 宿主重繪不會自動重新比較
 * 設定物件原地修改時, Vue 2會因指令讀過該鍵而重繪宿主並生效, 惟建議以新物件取代(Vue 3不追蹤指令內之讀取)
 *
 * 事件內容為domDetect之事件物件: sold、snew、smode、ele(視窗事件無), from為'dom'或'window'(僅resizeWithWindow)
 * 處理函式經Vue之監聽器(invoker)呼叫: 多個處理函式依序執行, 同步錯誤與Promise拒絕交Vue之錯誤處理(自處理函式所屬元件之$parent起經errorCaptured, 再Vue.config.errorHandler), 與原生v-on相同
 * 監聽之新增、移除或改名於宿主重繪後跟隨; 元件標籤上同時有@domresize與@domresize.native時只呼叫前者, 無前者時呼叫後者; 解除綁定後不再觸發; keep-alive停用期間元素移出頁面, 不觸發
 * 不支援.once、.capture、.passive, 事件名須小寫(@domresize), 元素上之.native無效, 以上於綁定時警告; .ctrl、.shift、.alt、.meta使處理函式不被呼叫, .stop、.prevent、.left、.right與按鍵修飾字使處理函式拋錯, 皆無法於執行期警告
 * 綁定時於元素設ev-resize屬性, 解除時改為'null'
 *
 * @returns {Object} 回傳Vue 2自訂指令定義物件, 以Vue.directive('domresize', domResize())或元件directives註冊
 */
function domResize() {
    return createDetectDirective({
        name: 'domresize',
        attr: 'ev-resize',
        keys,
        refreshKey: 'refreshKey',
        normalize,
        create,
    })
}


export default domResize
