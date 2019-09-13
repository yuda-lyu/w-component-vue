import Notification from 'element-ui/lib/notification'
import 'element-ui/lib/theme-chalk/notification.css'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'


/**
 * 彈出訊息視窗
 *
 * @param {String} msg 輸入彈窗訊息字串
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {String} [opt.type='success'] 輸入訊息種類字串，預設'success'
 * @param {String} [opt.position='top-right'] 輸入位置字串，預設'top-right'
 */
function WAlert(msg, opt = {}) {

    //check
    if (!isestr(msg)) {
        return
    }

    //icon
    let iconSuccess = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 426.667 426.667" style="width:24px; height:24px; enable-background:new 0 0 426.667 426.667" xml:space="preserve"><path style="fill:#6ac259" d="M213.333,0C95.518,0,0,95.514,0,213.333s95.518,213.333,213.333,213.333  c117.828,0,213.333-95.514,213.333-213.333S331.157,0,213.333,0z M174.199,322.918l-93.935-93.931l31.309-31.309l62.626,62.622 l140.894-140.898l31.309,31.309L174.199,322.918z"/></svg>`
    let iconError = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 496.158 496.158" style="width:24px; height:24px; enable-background:new 0 0 496.158 496.158" xml:space="preserve"><path style="fill:#e04f5f" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085  c0,137.002,111.07,248.07,248.082,248.07C385.088,496.155,496.158,385.087,496.158,248.085z"/><path style="fill:#fff" d="M277.042,248.082l72.528-84.196c7.91-9.182,6.876-23.041-2.31-30.951  c-9.172-7.904-23.032-6.876-30.947,2.306l-68.236,79.212l-68.229-79.212c-7.91-9.188-21.771-10.216-30.954-2.306  c-9.186,7.91-10.214,21.77-2.304,30.951l72.522,84.196l-72.522,84.192c-7.91,9.182-6.882,23.041,2.304,30.951  c4.143,3.569,9.241,5.318,14.316,5.318c6.161,0,12.294-2.586,16.638-7.624l68.229-79.212l68.236,79.212  c4.338,5.041,10.47,7.624,16.637,7.624c5.069,0,10.168-1.749,14.311-5.318c9.186-7.91,10.22-21.77,2.31-30.951L277.042,248.082z"/></svg>`
    let iconWarning = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 497.472 497.472" style="width:24px; height:24px; enable-background:new 0 0 497.472 497.472" xml:space="preserve"><g transform="matrix(1.25 0 0 -1.25 0 45)"><path style="fill:#ffcc4d" d="M24.374-357.857c-20.958,0-30.197,15.223-20.548,33.826L181.421,17.928     c9.648,18.603,25.463,18.603,35.123,0L394.14-324.031c9.671-18.603,0.421-33.826-20.548-33.826H24.374z"/><path style="fill:#231f20" d="M173.605-80.922c0,14.814,10.934,23.984,25.395,23.984c14.12,0,25.407-9.512,25.407-23.984 V-216.75c0-14.461-11.287-23.984-25.407-23.984c-14.461,0-25.395,9.182-25.395,23.984V-80.922z M171.489-289.056 c0,15.167,12.345,27.511,27.511,27.511c15.167,0,27.523-12.345,27.523-27.511c0-15.178-12.356-27.523-27.523-27.523 C183.834-316.579,171.489-304.234,171.489-289.056"/></g></svg>`
    let icon = iconSuccess
    if (opt.type === 'error') {
        icon = iconError
    }
    else if (opt.type === 'warning') {
        icon = iconWarning
    }


    //position top-right/top-left/bottom-right/bottom-left
    let position = 'top-right'
    if (opt.position === 'top-left' || opt.position === 'bottom-right' || opt.position === 'bottom-left') {
        position = opt.position
    }

    //message
    let message = `
    <div style="display:flex; justify-content:flex-start;">
        <div style="margin:-2px 10px 0px -5px;">${icon}</div>
        <span>${msg}</span>
    </div>
    `


    //noti, 若是封裝於es6模組內, 因webpack打包故需要取default
    let noti = Notification //適用webpack於非es6模組內, 以及瀏覽器端
    if (!isfun(Notification)) {
        noti = Notification.default //適用於webpack於es6模組內
    }


    //noti
    noti({
        position,
        dangerouslyUseHTMLString: true,
        message,
    })

}


export default WAlert
