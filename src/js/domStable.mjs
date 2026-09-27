import domIsStable from 'wsemi/src/domIsStable.mjs'
import createDetectDirective from './createDetectDirective.mjs'


//keys, 可用設定鍵: 轉給domIsStable(mode固定為event), 其值之檢查與預設依domIsStable
let keys = ['tolerance', 'timeDiff', 'timeDetect']


//create
function create(el, cfg, emit) {

    //ev, event模式一律回傳偵測器, 元素無效等無法偵測時永不觸發(ev.error為原因)
    let ev = domIsStable(el, {
        ...cfg,
        mode: 'event',
    })
    ev.on('stable', (b) => {
        // console.log('domstable', b)

        //emit
        emit(b)

    })
    ev.create()

    return {
        clear: () => {
            ev.dispose()
        },
    }
}


/**
 * 自訂指令v-domstable, 元素(及其子元素)位置、尺寸與動畫之穩定狀態轉變時觸發@domstable
 *
 * 指令值: 未給或true為啟用並使用預設設定; false或null為停用(不建立偵測器、不觸發); 其他型別視同未給並警告
 * 指令值為物件時為設定, 可用鍵tolerance、timeDiff、timeDetect轉給wsemi domIsStable(mode固定為event), 其值之檢查與預設依domIsStable(無效者用預設), 其他鍵不採用並警告
 * 宿主重繪後設定改變則重建偵測器, 重建後重新自不穩定起算
 * 元素未被繪製(未插入或display:none)時位置恆為0而判為穩定, 此為domIsStable之已知限制
 *
 * 事件內容為布林值, 初始視為不穩定, 故第一次穩定時觸發true
 * 處理函式經Vue之監聽器(invoker)呼叫: 多個處理函式依序執行, 同步錯誤與Promise拒絕交Vue之錯誤處理(自處理函式所屬元件之$parent起經errorCaptured, 再Vue.config.errorHandler), 與原生v-on相同
 * 監聽之新增、移除或改名於宿主重繪後跟隨; 元件標籤上同時有@domstable與@domstable.native時只呼叫前者, 無前者時呼叫後者; 解除綁定後不再觸發
 * 不支援.once、.capture、.passive, 事件名須小寫(@domstable), 元素上之.native無效, 以上於綁定時警告; .ctrl、.shift、.alt、.meta使處理函式不被呼叫, .stop、.prevent、.left、.right、.middle與按鍵修飾字使處理函式拋錯, 皆無法於執行期警告
 * 綁定時於元素設ev-stable屬性, 解除時改為'null'
 *
 * @returns {Object} 回傳Vue 2自訂指令定義物件, 以Vue.directive('domstable', domStable())或元件directives註冊
 */
function domStable() {
    return createDetectDirective({
        name: 'domstable',
        attr: 'ev-stable',
        keys,
        create,
    })
}


export default domStable
