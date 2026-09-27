import domIsVisible from 'wsemi/src/domIsVisible.mjs'
import createDetectDirective from './createDetectDirective.mjs'


//create, 以domIsVisible之event模式持續偵測(單一IntersectionObserver), 顯隱狀態改變才觸發
function create(el, cfg, emit) {

    //ev, event模式一律回傳偵測器, 無IntersectionObserver等無法偵測時永不觸發(ev.error為原因)
    let ev = domIsVisible(el, { mode: 'event' })

    //visible, 初始視為不可見, 故初始即可見者觸發true, 初始不可見者不觸發
    let visible = false
    ev.on('visible', (v) => {

        //check
        if (visible === v) {
            return
        }

        //update
        visible = v

        //emit
        emit(v)

    })
    ev.create()

    return {
        clear: () => {
            ev.dispose()
        },
    }
}


/**
 * 自訂指令v-domvisible, 元素與視窗可視區相交與否之狀態改變時觸發@domvisible
 *
 * 指令值: 未給、true或物件為啟用(目前無可用設定鍵, 物件之鍵不採用並警告); false或null為停用(不建立偵測器、不觸發); 其他型別視同未給並警告
 * 以wsemi domIsVisible之event模式偵測(單一IntersectionObserver), 初始視為不可見, 故初始即可見者觸發一次true;
 * 捲出視窗、自身或祖先display:none、移出頁面(含keep-alive停用)時觸發false, 再次相交時觸發true; 判定為與視窗相交, 故visibility:hidden、opacity:0仍為true; 無IntersectionObserver之環境不觸發
 *
 * 事件內容為布林值
 * 處理函式經Vue之監聽器(invoker)呼叫: 多個處理函式依序執行, 同步錯誤與Promise拒絕交Vue之錯誤處理(自處理函式所屬元件之$parent起經errorCaptured, 再Vue.config.errorHandler), 與原生v-on相同
 * 監聽之新增、移除或改名於宿主重繪後跟隨; 元件標籤上同時有@domvisible與@domvisible.native時只呼叫前者, 無前者時呼叫後者; 解除綁定後不再觸發
 * 不支援.once、.capture、.passive, 事件名須小寫(@domvisible), 元素上之.native無效, 以上於綁定時警告; .ctrl、.shift、.alt、.meta使處理函式不被呼叫, .stop、.prevent、.left、.right、.middle與按鍵修飾字使處理函式拋錯, 皆無法於執行期警告
 * 綁定時於元素設ev-visible屬性, 解除時改為'null'
 *
 * @returns {Object} 回傳Vue 2自訂指令定義物件, 以Vue.directive('domvisible', domVisible())或元件directives註冊
 */
function domVisible() {
    return createDetectDirective({
        name: 'domvisible',
        attr: 'ev-visible',
        keys: [],
        create,
    })
}


export default domVisible
