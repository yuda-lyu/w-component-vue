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
function WfAlert(msg, opt = {}) {

    //check
    if (!isestr(msg)) {
        return
    }

    //icon
    let iconSuccess = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNkFDMjU5OyIgZD0iTTIxMy4zMzMsMEM5NS41MTgsMCwwLDk1LjUxNCwwLDIxMy4zMzNzOTUuNTE4LDIxMy4zMzMsMjEzLjMzMywyMTMuMzMzICBjMTE3LjgyOCwwLDIxMy4zMzMtOTUuNTE0LDIxMy4zMzMtMjEzLjMzM1MzMzEuMTU3LDAsMjEzLjMzMywweiBNMTc0LjE5OSwzMjIuOTE4bC05My45MzUtOTMuOTMxbDMxLjMwOS0zMS4zMDlsNjIuNjI2LDYyLjYyMiAgbDE0MC44OTQtMTQwLjg5OGwzMS4zMDksMzEuMzA5TDE3NC4xOTksMzIyLjkxOHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />`
    let iconError = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0OTYuMTU4IDQ5Ni4xNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5Ni4xNTggNDk2LjE1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojRTA0RjVGOyIgZD0iTTQ5Ni4xNTgsMjQ4LjA4NWMwLTEzNy4wMjEtMTExLjA3LTI0OC4wODItMjQ4LjA3Ni0yNDguMDgyQzExMS4wNywwLjAwMywwLDExMS4wNjMsMCwyNDguMDg1ICBjMCwxMzcuMDAyLDExMS4wNywyNDguMDcsMjQ4LjA4MiwyNDguMDdDMzg1LjA4OCw0OTYuMTU1LDQ5Ni4xNTgsMzg1LjA4Nyw0OTYuMTU4LDI0OC4wODV6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjc3LjA0MiwyNDguMDgybDcyLjUyOC04NC4xOTZjNy45MS05LjE4Miw2Ljg3Ni0yMy4wNDEtMi4zMS0zMC45NTEgIGMtOS4xNzItNy45MDQtMjMuMDMyLTYuODc2LTMwLjk0NywyLjMwNmwtNjguMjM2LDc5LjIxMmwtNjguMjI5LTc5LjIxMmMtNy45MS05LjE4OC0yMS43NzEtMTAuMjE2LTMwLjk1NC0yLjMwNiAgYy05LjE4Niw3LjkxLTEwLjIxNCwyMS43Ny0yLjMwNCwzMC45NTFsNzIuNTIyLDg0LjE5NmwtNzIuNTIyLDg0LjE5MmMtNy45MSw5LjE4Mi02Ljg4MiwyMy4wNDEsMi4zMDQsMzAuOTUxICBjNC4xNDMsMy41NjksOS4yNDEsNS4zMTgsMTQuMzE2LDUuMzE4YzYuMTYxLDAsMTIuMjk0LTIuNTg2LDE2LjYzOC03LjYyNGw2OC4yMjktNzkuMjEybDY4LjIzNiw3OS4yMTIgIGM0LjMzOCw1LjA0MSwxMC40Nyw3LjYyNCwxNi42MzcsNy42MjRjNS4wNjksMCwxMC4xNjgtMS43NDksMTQuMzExLTUuMzE4YzkuMTg2LTcuOTEsMTAuMjItMjEuNzcsMi4zMS0zMC45NTFMMjc3LjA0MiwyNDguMDgyeiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />`
    let iconWarning = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5Ny40NzIgNDk3LjQ3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk3LjQ3MiA0OTcuNDcyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMjUgMCAwIC0xLjI1IDAgNDUpIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQzREOyIgZD0iTTI0LjM3NC0zNTcuODU3Yy0yMC45NTgsMC0zMC4xOTcsMTUuMjIzLTIwLjU0OCwzMy44MjZMMTgxLjQyMSwxNy45MjggICAgIGM5LjY0OCwxOC42MDMsMjUuNDYzLDE4LjYwMywzNS4xMjMsMEwzOTQuMTQtMzI0LjAzMWM5LjY3MS0xOC42MDMsMC40MjEtMzMuODI2LTIwLjU0OC0zMy44MjZIMjQuMzc0eiIvPgoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTE3My42MDUtODAuOTIyYzAsMTQuODE0LDEwLjkzNCwyMy45ODQsMjUuMzk1LDIzLjk4NGMxNC4xMiwwLDI1LjQwNy05LjUxMiwyNS40MDctMjMuOTg0ICAgICBWLTIxNi43NWMwLTE0LjQ2MS0xMS4yODctMjMuOTg0LTI1LjQwNy0yMy45ODRjLTE0LjQ2MSwwLTI1LjM5NSw5LjE4Mi0yNS4zOTUsMjMuOTg0Vi04MC45MjJ6IE0xNzEuNDg5LTI4OS4wNTYgICAgIGMwLDE1LjE2NywxMi4zNDUsMjcuNTExLDI3LjUxMSwyNy41MTFjMTUuMTY3LDAsMjcuNTIzLTEyLjM0NSwyNy41MjMtMjcuNTExYzAtMTUuMTc4LTEyLjM1Ni0yNy41MjMtMjcuNTIzLTI3LjUyMyAgICAgQzE4My44MzQtMzE2LjU3OSwxNzEuNDg5LTMwNC4yMzQsMTcxLjQ4OS0yODkuMDU2Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`
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


export default WfAlert
