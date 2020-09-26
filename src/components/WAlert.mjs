import isNumber from 'lodash/isNumber'
import each from 'lodash/each'
import get from 'lodash/get'
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import replace from 'wsemi/src/replace.mjs'
import domFadeIn from 'wsemi/src/domFadeIn.mjs'
import domFadeOut from 'wsemi/src/domFadeOut.mjs'


//kpIcon
let iconSuccess = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 426.667 426.667" style="width:24px; height:24px; enable-background:new 0 0 426.667 426.667" xml:space="preserve"><path style="fill:#6ac259" d="M213.333,0C95.518,0,0,95.514,0,213.333s95.518,213.333,213.333,213.333  c117.828,0,213.333-95.514,213.333-213.333S331.157,0,213.333,0z M174.199,322.918l-93.935-93.931l31.309-31.309l62.626,62.622 l140.894-140.898l31.309,31.309L174.199,322.918z"/></svg>`
let iconError = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 496.158 496.158" style="width:24px; height:24px; enable-background:new 0 0 496.158 496.158" xml:space="preserve"><path style="fill:#e04f5f" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.003,0,111.063,0,248.085  c0,137.002,111.07,248.07,248.082,248.07C385.088,496.155,496.158,385.087,496.158,248.085z"/><path style="fill:#fff" d="M277.042,248.082l72.528-84.196c7.91-9.182,6.876-23.041-2.31-30.951  c-9.172-7.904-23.032-6.876-30.947,2.306l-68.236,79.212l-68.229-79.212c-7.91-9.188-21.771-10.216-30.954-2.306  c-9.186,7.91-10.214,21.77-2.304,30.951l72.522,84.196l-72.522,84.192c-7.91,9.182-6.882,23.041,2.304,30.951  c4.143,3.569,9.241,5.318,14.316,5.318c6.161,0,12.294-2.586,16.638-7.624l68.229-79.212l68.236,79.212  c4.338,5.041,10.47,7.624,16.637,7.624c5.069,0,10.168-1.749,14.311-5.318c9.186-7.91,10.22-21.77,2.31-30.951L277.042,248.082z"/></svg>`
let iconWarning = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 497.472 497.472" style="width:24px; height:24px; enable-background:new 0 0 497.472 497.472" xml:space="preserve"><g transform="matrix(1.25 0 0 -1.25 0 45)"><path style="fill:#ffcc4d" d="M24.374-357.857c-20.958,0-30.197,15.223-20.548,33.826L181.421,17.928     c9.648,18.603,25.463,18.603,35.123,0L394.14-324.031c9.671-18.603,0.421-33.826-20.548-33.826H24.374z"/><path style="fill:#231f20" d="M173.605-80.922c0,14.814,10.934,23.984,25.395,23.984c14.12,0,25.407-9.512,25.407-23.984 V-216.75c0-14.461-11.287-23.984-25.407-23.984c-14.461,0-25.395,9.182-25.395,23.984V-80.922z M171.489-289.056 c0,15.167,12.345,27.511,27.511,27.511c15.167,0,27.523-12.345,27.523-27.511c0-15.178-12.356-27.523-27.523-27.523 C183.834-316.579,171.489-304.234,171.489-289.056"/></g></svg>`
let iconCancel = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="width:12px; height:12px; enable-background:new 0 0 512.001 512.001;" xml:space="preserve"><g><g><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285L284.286,256.002z"/></g></g></svg>`
let kpIcon = {
    success: iconSuccess,
    error: iconError,
    warning: iconWarning,
    cancel: iconCancel,
}


let q = {} //queue
let timer = null


window.ttWAlertCancel = function(id) {
    removeItemByID(id)
}
window.ttWAlertFadeIn = function(id) {
    domFadeIn(document.querySelector(`#${id}`))
}
window.ttWAlertFadeOut = function(id) {
    domFadeOut(document.querySelector(`#${id}`))
}


function calcItemLocationCore(position) {

    //找同樣postion
    let r = filter(q, { position })

    //依照開始時間排序
    r = sortBy(r, 'timeStart')

    //calc
    let dx = 16
    let dy = 16
    let top = dy
    each(r, (v) => {
        if (!q[v.id].ele) {
            q[v.id].ele = document.querySelector(`#${v.id}`)
        }
        q[v.id].loc.top = top
        q[v.id].loc.height = q[v.id].ele.offsetHeight
        top += q[v.id].loc.height + dy
    })

    //update
    each(r, (v) => {

        //top, bottom
        if (position.indexOf('bottom-') >= 0) {
            q[v.id].ele.style.bottom = `${q[v.id].loc.top}px`
            q[v.id].loc.bottom = q[v.id].loc.top
        }
        else {
            q[v.id].ele.style.top = `${q[v.id].loc.top}px`
            //q[v.id].loc.top = q[v.id].loc.top //不需要儲存至自己
        }

        //left, right
        if (position.indexOf('-left') >= 0) {
            q[v.id].ele.style.left = `${dx}px`
            q[v.id].loc.left = dx
        }
        else {
            q[v.id].ele.style.right = `${dx}px`
            q[v.id].loc.right = dx
        }

        //show
        q[v.id].ele.style.zIndex = 200000
        q[v.id].ele.style.opacity = 1

    })

}


function calcItemLocation() {
    let ps = ['top-right', 'top-left', 'bottom-right', 'bottom-left']
    each(ps, (position) => {
        calcItemLocationCore(position)
    })
}


function removeItemByID(id) {

    //刪除元素
    if (q[id].ele) {
        q[id].ele.parentNode.removeChild(q[id].ele)
    }

    //刪除佇列內key紀錄
    if (q[id]) {
        delete q[id]
    }

    //calcItemLocation
    calcItemLocation()

}


function addItem({ id, position, time, pm }) {
    //console.log('addItem', id, position, time)

    //push
    q[id] = {
        id,
        position,
        ele: null,
        loc: {
            height: null,
            top: null,
            bottom: null,
            left: null,
            right: null,
        },
        timeShow: time,
        timeStart: Date.now(),
        pm,
    }

    //calcItemLocation
    calcItemLocation()

    //check
    if (timer !== null) {
        return
    }

    //setInterval
    timer = setInterval(() => {
        //console.log('q', q)

        //detect
        each(q, (v) => {

            //t
            let t = Date.now() - v.timeStart

            //check, 超過指定延時則視為離開
            if (t > v.timeShow) {

                //close
                v.pm.resolve()

                //removeItemByID
                removeItemByID(v.id)

            }

        })

        //clear, 當無任何訊息存在
        if (!iseobj(q)) {
            clearInterval(timer)
            timer = null
        }

    }, 50) //50ms偵測, 啟動後跑timer, 無佇列則會停止減耗

}


/**
 * 彈出訊息視窗
 *
 * @param {String} msg 輸入彈窗訊息字串，可為html
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {String} [opt.type='success'] 輸入訊息種類字串，可使用'success'、'warning'、'error'，預設'success'
 * @param {String} [opt.position='top-right'] 輸入位置字串，可使用'top-right'、'top-left'、'bottom-right'、'bottom-left'，預設'top-right'
 * @param {Number} [opt.time=4000] 輸入顯示時間長度數字，單位ms，預設4000
 * @param {String} [opt.textColor='#000'] 輸入文字顏色字串，預設'#000'
 * @param {String} [opt.backgroundColor='#fff'] 輸入背景顏色字串，預設'#fff'
 * @param {Number} [opt.borderWidth=1] 輸入邊框寬度數字，單位px，預設1
 * @param {String} [opt.borderColor='#ebeef5'] 輸入邊框顏色字串，預設'#ebeef5'
 * @param {Number} [opt.borderRadius=8] 輸入邊框圓角數字，單位px，預設8
 * @param {String} [opt.shadowStyle='0 2px 12px 0 rgba(0,0,0,.1)'] 輸入陰影樣式字串，預設'0 2px 12px 0 rgba(0,0,0,.1)'
 */
function WAlert(msg, opt = {}) {

    //check
    if (!isestr(msg)) {
        return
    }

    //type
    let type = get(opt, 'type')
    if (type !== 'warning' && type !== 'error') {
        type = 'success'
    }

    //icon
    let icon = kpIcon[type]

    //position
    let position = 'top-right'
    if (opt.position === 'top-left' || opt.position === 'bottom-right' || opt.position === 'bottom-left') {
        position = opt.position
    }

    //time
    let time = get(opt, 'time')
    if (!isNumber(time)) {
        time = 4000
    }
    if (time < 0) {
        time = 4000
    }

    //textColor
    let textColor = get(opt, 'textColor', '#000')
    textColor = replace(textColor, ';', '')

    //backgroundColor
    let backgroundColor = get(opt, 'backgroundColor', '#fff')
    backgroundColor = replace(backgroundColor, ';', '')

    //borderWidth
    let borderWidth = get(opt, 'borderWidth', 1)

    //borderColor
    let borderColor = get(opt, 'borderColor', '#ebeef5')
    borderColor = replace(borderColor, ';', '')

    //borderRadius
    let borderRadius = get(opt, 'borderRadius', 8)

    //shadowStyle
    let shadowStyle = get(opt, 'shadowStyle', '0 2px 12px 0 rgba(0,0,0,.1)')
    shadowStyle = replace(shadowStyle, ';', '')

    //id
    let id = `alt-${genID()}`
    let idCancel = `alt-${genID()}`

    //message
    let message = `
    <div 
        style="display:inline-block; color:${textColor}; background:${backgroundColor}; border:${borderWidth}px solid ${borderColor}; border-radius:${borderRadius}px; box-shadow:${shadowStyle};"
        onmouseenter="ttWAlertFadeIn('${idCancel}')"
        onmouseleave="ttWAlertFadeOut('${idCancel}')"
    >
        <div style="position:relative; padding:14px 26px 14px 14px;">

            <div style="display:flex; align-items:center;">
                <div style="margin-right:10px;">
                    <div style="display:flex;">${icon}</div>
                </div>
                <div>${msg}</div>
            </div>

            <div style="position:absolute; top:5px; right:5px;">
                <div 
                id="${idCancel}" 
                    style="display:flex; cursor:pointer; opacity:0;" 
                    onclick="ttWAlertCancel('${id}')"
                >
                    ${iconCancel}
                </div>
            </div>

        </div>
    </div>
    `

    //panel
    let div = document.createElement('div')
    div.id = id
    div.style.position = 'fixed'
    div.style.transition = 'all 0.5s'
    div.style.zIndex = -1 //200000
    div.style.opacity = 0.001
    div.innerHTML = message

    //塞入至body
    let body = document.querySelector('body')
    body.appendChild(div)

    //pm
    let pm = genPm()

    //addItem
    addItem({
        id,
        position,
        time,
        pm,
    })

    return pm
}


export default WAlert
