/**
 * 前端針對指標(滑鼠、觸控、觸控筆)之按下與拖曳追蹤
 *
 * 自WColorPickHue、WColorPickAlpha、WColorPickHsv三支逐字相同之手勢通道抽出，行為與其原碼一致。
 * 按下即回呼一次，其後於window上追蹤移動直至放開或取消，故指標移出元件外仍持續追蹤。
 * 以pointerId鎖定起手指標，多點觸控時第二指不得搶值；滑鼠拖出瀏覽器視窗外放開時收不到pointerup，以buttons為0自我解鎖。
 *
 * 呼叫端須自備樣式：感應元素需`touch-action:none`避免瀏覽器接手捲動，另需`user-select`與`-webkit-touch-callout`避免選字與長按選單。
 *
 * 本模組不判`e.button`與可編輯狀態，該類守門屬呼叫端政策，請於呼叫`down`之前自行判斷。
 *
 * 須於`mounted`內呼叫並於`beforeDestroy`呼叫`clear`：本函式於呼叫當下即掛上window監聽，於setup期呼叫會在SSR環境取不到window。
 *
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {Function} opt.onPick 輸入按下與拖曳時之回呼函數，帶入原始PointerEvent
 * @param {Function} [opt.onFree] 輸入放開或手勢被取消時之回呼函數，不帶參數；呼叫clear釋放監聽時不觸發
 * @returns {Object} 回傳物件，具down、contextmenu、clear函數，down與contextmenu供模板綁定，clear為釋放window監聽
 */
function domPickPointer(opt = {}) {

    //onPick
    let onPick = opt.onPick
    if (typeof onPick !== 'function') {
        onPick = () => {}
    }

    //onFree
    let onFree = opt.onFree
    if (typeof onFree !== 'function') {
        onFree = () => {}
    }

    //state, 按下當時之pointerId與pointerType, 多點觸控時只服務這一個指標
    let curMousedown = false
    let curPointerId = null
    let curPointerType = ''

    //free, 解鎖與清pointerId須成對, 因瀏覽器會重用觸控之pointerId
    //  notify為false時只解鎖不通知, 供clear釋放監聽時使用: 釋放監聽不是使用者放開手, 不應觸發onFree
    function free(notify) {
        let wasDown = curMousedown
        curMousedown = false
        curPointerId = null
        curPointerType = ''
        if (notify !== false && wasDown) {
            onFree()
        }
    }

    //down, 供感應元素綁定pointerdown
    function down(e) {

        //check, 拖曳中不接受第二個指標接手
        if (curMousedown) {
            return
        }

        curMousedown = true
        curPointerId = (e.pointerId !== undefined) ? e.pointerId : null
        curPointerType = (e.pointerType !== undefined) ? e.pointerType : 'mouse'
        onPick(e)
    }

    //contextmenu, 僅於觸控或觸控筆拖曳中抑制長按選單, 因長按叫出選單會發出pointercancel而中斷拖曳;
    //滑鼠右鍵選單維持既有行為; contextmenu為獨立事件, 抑制它不會連帶抑制mousedown/mouseup, 故不影響WPopup之點擊外部關閉
    function contextmenu(e) {
        if (curMousedown && curPointerType !== '' && curPointerType !== 'mouse') {
            e.preventDefault()
        }
    }

    //windowPointermove, 使用pointer事件同時涵蓋滑鼠、觸控與觸控筆
    let windowPointermove = (e) => {
        // console.log('windowPointermove', e)

        //check
        if (!curMousedown) {
            return
        }

        //check, 多點觸控時第二指不得搶值
        if (curPointerId !== null && e.pointerId !== undefined && e.pointerId !== curPointerId) {
            return
        }

        //check, 滑鼠拖出瀏覽器視窗外放開時收不到pointerup, 以buttons為0自我解鎖(觸控之buttons為1故不受影響)
        if (e.pointerType === 'mouse' && e.buttons === 0) {
            free()
            return
        }

        onPick(e)
    }
    window.addEventListener('pointermove', windowPointermove, false)

    //windowPointerup, 與pointercancel共用, 只解鎖不定值(cancel之座標不可信)
    let windowPointerup = (e) => {
        // console.log('windowPointerup')

        //check
        if (!curMousedown) {
            return
        }

        //check, 非同一指標放開時不得終止本次拖曳
        if (curPointerId !== null && e.pointerId !== undefined && e.pointerId !== curPointerId) {
            return
        }

        free()
    }
    window.addEventListener('pointerup', windowPointerup, false)
    window.addEventListener('pointercancel', windowPointerup, false)

    //clear, 釋放監聽; 事件名須與註冊端一致, 否則監聽永遠移不掉
    function clear() {
        free(false)
        window.removeEventListener('pointermove', windowPointermove, false)
        window.removeEventListener('pointerup', windowPointerup, false)
        window.removeEventListener('pointercancel', windowPointerup, false)
    }

    return {
        down,
        contextmenu,
        clear,
    }
}


export default domPickPointer
