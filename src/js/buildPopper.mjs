import get from 'lodash-es/get.js'
import each from 'lodash-es/each.js'
import haskey from 'wsemi/src/haskey.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isEle from 'wsemi/src/isEle.mjs'
import domIsClientXYIn from 'wsemi/src/domIsClientXYIn.mjs'
import { createPopper } from '@popperjs/core/lib/popper-lite.js' //不用安裝@popperjs/core, 因wsemi安裝tippy.js內有依賴@popperjs/core
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import hide from '@popperjs/core/lib/modifiers/hide.js'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles'


function buildPopper(vo, funGetDivTrigger, funGetDivContent, keyShow, evNameValue, opt = {}) {

    //check, vo須預先宣告參數
    let _keys = [
        'mode',
        'mmkey',
        'kind',
        keyShow,
        'triggerWidth',
        'placement',
        'placementDistX',
        'placementDistY',
        'transitionTime',
        'isolated',
        'editable',
        'contentStyle',
    ]
    each(_keys, (key) => {
        if (!haskey(vo, key)) {
            throw new Error(`invalid vo.${key}`)
        }
    })

    //check
    if (!isfun(funGetDivTrigger)) {
        throw new Error(`funGetDivTrigger is not a function`)
    }
    if (!isfun(funGetDivContent)) {
        throw new Error(`funGetDivContent is not a function`)
    }

    //組件內巢狀顯示之遞層取消機制用函數
    let addTriggerMode = get(opt, 'addTriggerMode')
    let checkTriggerEffMode = get(opt, 'checkTriggerEffMode')
    let removeTriggerMode = get(opt, 'removeTriggerMode')

    let _vo = {
        mouseClientX: 0,
        mouseClientY: 0,
        cursorTriggerInner: false,
        clickContentInner: false,
        popperShow: false,
        popperInstance: null,
    }

    let mounted = () => {

        //windowMousemove
        _vo.windowMousemove = (e) => {
            // console.log(_vo.mmkey, 'windowMousemove', e)

            //save
            _vo.mouseClientX = e.clientX
            _vo.mouseClientY = e.clientY

        }
        window.addEventListener('mousemove', _vo.windowMousemove, false)

        //windowMousedown
        _vo.windowMousedown = (e) => {
            // console.log(vo.mmkey, 'windowMousedown', e)

            //divTrigger
            let divTrigger = funGetDivTrigger()

            //cursorTriggerInner, 滑鼠游標是否點擊於觸發區內
            if (isEle(divTrigger)) {
                _vo.cursorTriggerInner = domIsClientXYIn(e.clientX, e.clientY, divTrigger)
            }
            else {
                _vo.cursorTriggerInner = false
            }

            //divContent
            let divContent = funGetDivContent()

            //clickContentInner, 是否當前為顯示且擊於內容區內
            if (vo[keyShow] && divContent) {
                _vo.clickContentInner = domIsClientXYIn(e.clientX, e.clientY, divContent)
            }
            else {
                _vo.clickContentInner = false
            }

        }
        window.addEventListener('mousedown', _vo.windowMousedown, false)

        //windowMouseup
        _vo.windowMouseup = (e) => {
            // console.log(vo.mmkey, 'windowMouseup', e, checkTriggerEff())

            //check
            if (!checkTriggerEff()) {
                return
            }

            //當前為顯示時, 非點擊於觸發區與內容區, 才觸發隱藏事件
            if (vo[keyShow] && !_vo.cursorTriggerInner && !_vo.clickContentInner) {
                //console.log(vo.mmkey, 'click隱藏')

                //evHide
                vo.evHide('click', 'windowMouseup')

            }
            else {
                //console.log(vo.mmkey, 'click不隱藏')
                _vo.cursorTriggerInner = false
                _vo.clickContentInner = false
            }

        }
        window.addEventListener('mouseup', _vo.windowMouseup, false)

        //windowScroll
        _vo.windowScroll = (e) => {
            // console.log(vo.mmkey, 'windowScroll', e, checkTriggerEff())

            // //check, 不能偵測checkTriggerEff, 因須支援由隱藏但通過捲動而滑鼠進入組件而顯示機制
            // if (!checkTriggerEff()) {
            //     return
            // }

            //check, 只針對hover做處理
            if (vo.kind !== 'hover') {
                return
            }

            //divTrigger
            let divTrigger = funGetDivTrigger()

            //check
            if (!isEle(divTrigger)) {
                return
            }

            //cursorTriggerInner, 滑鼠游標是否點擊於觸發區內
            if (divTrigger) {
                _vo.cursorTriggerInner = domIsClientXYIn(_vo.mouseClientX, _vo.mouseClientY, divTrigger)
                // console.log('domIsClientXYIn _vo.cursorTriggerInner', _vo.cursorTriggerInner)
            }
            else {
                _vo.cursorTriggerInner = false
                // console.log('force _vo.cursorTriggerInner', _vo.cursorTriggerInner)
            }

            if (_vo.cursorTriggerInner) {
                //滑鼠位於於觸發區

                if (vo[keyShow]) {
                    //當前為顯示

                    //不處理

                }
                else {
                    //當前為隱藏
                    // console.log(vo.mmkey, 'scroll顯示')

                    //evShow
                    evShow('hover', 'windowScroll')

                }

            }
            else {
                //滑鼠非位於於觸發區

                if (vo[keyShow]) {
                    //當前為顯示
                    // console.log(vo.mmkey, 'scroll隱藏')

                    //evHide
                    evHide('hover', 'windowScroll')

                }
                else {
                    //當前為隱藏

                    //不處理

                }

            }

        }
        window.addEventListener('scroll', _vo.windowScroll, false)

    }

    let destroy = () => {

        //window remove mousemove, mousedown, mouseup, scroll
        window.removeEventListener('mousemove', _vo.windowMousemove, false)
        window.removeEventListener('mousedown', _vo.windowMousedown, false)
        window.removeEventListener('mouseup', _vo.windowMouseup, false)
        window.removeEventListener('scroll', _vo.windowMouseup, false)

        // //hidePopper, 不論click或hover一律隱藏
        // hidePopper('beforeDestroy')

        //triggerEvent for hide
        triggerEvent(false)

    }

    let addTrigger = () => {
        if (isfun(addTriggerMode)) {
            return addTriggerMode(vo.mode, vo.mmkey)
        }
        return null
    }

    let checkTriggerEff = () => {
        if (isfun(checkTriggerEffMode)) {
            return checkTriggerEffMode(vo.mode, vo.mmkey)
        }
        return true
    }

    let removeTrigger = () => {
        if (isfun(removeTriggerMode)) {
            return removeTriggerMode(vo.mode, vo.mmkey)
        }
        return null
    }

    let showPopper = (from) => {

        //divTrigger
        let divTrigger = funGetDivTrigger()

        //check
        if (!isEle(divTrigger)) {
            return
        }

        //$nextTick, 因顯示後popperjs會用divContent撐開導致divTrigger寬度等同於divContent, 需延遲取得offsetWidth才是正確寬度
        vo.$nextTick(() => {

            //update triggerWidth
            vo.triggerWidth = divTrigger.offsetWidth

        })

        //divContent
        let divContent = funGetDivContent()

        //check
        if (!isEle(divContent)) {
            return
        }

        //addTrigger, 採同步方式添加, popup顯示前就會mmkey就會進清單
        addTrigger()

        //@popperjs/core 2.x
        let opt = {
            strategy: 'fixed', //盡量使用'fixed'而不用'absolute', 否則位於多層dialog或多層drawer內popup顯示會異常
            placement: vo.placement,
            modifiers: [
                preventOverflow,
                computeStyles,
                {
                    name: 'computeStyles',
                    options: {
                        gpuAcceleration: false, //預設true, 可關閉GPU加速
                    },
                },
                flip,
                {
                    name: 'flip',
                    options: {
                        fallbackPlacements: ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'top', 'right-start', 'right-end', 'right', 'left-start', 'left-end', 'left'],
                    },
                },
                offset,
                {
                    name: 'offset',
                    options: {
                        offset: [vo.placementDistX, vo.placementDistY],
                        //因popperjs會自動調位置, 故得通過callback函數處理指定位置時的偏移量
                        // offset: ({ placement, reference, popper }) => {
                        //     console.log('offset', placement, reference, popper, vo.placementDistY)
                        //     if (placement === 'bottom-start' || placement === 'bottom' || placement === 'bottom-end') {
                        //         return [0, vo.placementDistY]
                        //     }
                        //     else if (placement === 'top-start' || placement === 'top' || placement === 'top-end') {
                        //         return [0, vo.placementDistY]
                        //     }
                        //     else if (placement === 'left-start' || placement === 'left' || placement === 'left-end') {
                        //         return [0, vo.placementDistY]
                        //     }
                        //     else if (placement === 'right-start' || placement === 'right' || placement === 'right-end') {
                        //         return [0, vo.placementDistY]
                        //     }
                        //     else {
                        //         return []
                        //     }
                        //     // return [0, vo.placementDistY] //[Skidding, Distance]
                        // },
                    },
                },
                hide,
            ],
        }
        _vo.popperInstance = createPopper(divTrigger, divContent, opt)
        // console.log('popperInstance', vo.popperInstance)

    }

    let hidePopper = (from) => {

        //check
        if (_vo.popperInstance) {

            //destroy
            _vo.popperInstance.destroy()
            _vo.popperInstance = null

        }

        //非同步移除用nextTick會太快, 得使用setTimeout
        //不管有沒有popperInstance都進行移除, 於開發階段避免熱更新問題
        setTimeout(() => {

            //removeTrigger, 需採非同步移除, 避免window事件結束後, 此時會繼續觸發前面popup內的window事件, 若採同步移除就無法讓前面popup判斷是否需屏蔽
            removeTrigger()

        }, 20)

    }

    let updatePopper = (msg, from) => {

        //update
        if (_vo.popperInstance) {
            _vo.popperInstance.update()
        }

        //emit
        vo.$emit('resize', msg)

    }

    let displayPopper = (from) => {

        //showPopper or hidePopper
        vo.$nextTick(() => {

            //b
            let b = vo.editable && vo[keyShow] //顯示時valueTrans=true與可編輯時才顯示, 否則一律隱藏

            if (b && !_vo.popperShow) {
                // console.log('call showPopper', vo.mmkey)

                //shift, 暫時無法取得popper自動變更的placement, shift無法即時連動, 待研究
                let shift = -15
                // if (vo.placement.indexOf('top') >= 0) {
                //     shift = 15
                // }
                // console.log('vo.placement', vo.placement, vo.placement.indexOf('top'))
                // console.log('shift', shift)

                //contentStyle, 初始化使用pointer-events:none避免彈出區遮蔽驅動區導致觸發隱藏
                vo.contentStyle = `opacity:0; pointer-events:none; transform:translateY(${shift}px);`

                showPopper('displayPopper')
                _vo.popperShow = true
                vo.$emit('show')
                // console.log('emit show')

                //contentStyle, 顯示才給予transition用以驅動動畫, 動畫期間使用pointer-events:none避免彈出區遮蔽驅動區導致觸發隱藏
                setTimeout(() => {
                    vo.contentStyle = `transition:all ${vo.transitionTime}ms ease-out; opacity:1; pointer-events:none;`
                }, 1)

                //contentStyle, 動畫結束清除pointer-events:none, 使內部能接收事件
                setTimeout(() => {
                    vo.contentStyle = ``
                }, vo.transitionTime)

            }
            else if (!b && _vo.popperShow) {
                // console.log('call hidePopper', vo.mmkey)

                hidePopper('displayPopper')
                _vo.popperShow = false
                vo.$emit('hide')
                // console.log('emit hide')

            }

        })

    }

    let updateValue = (value, from) => {

        //check, 不可編輯時跳出
        if (!vo.editable) {
            return
        }

        //save
        vo[keyShow] = value
        // console.log('updateValue', keyShow, vo[keyShow], from, vo.mmkey)

        //displayPopper
        displayPopper('updateValue')

    }

    let triggerEvent = (value, from) => {

        //check, 不可編輯時跳出
        if (!vo.editable) {
            return
        }

        //check
        if (vo.isolated) {

            //updateValue
            updateValue(value, 'triggerEvent')

        }

        //$nextTick, 不論是否isolated都須emit
        vo.$nextTick(() => {

            //emit
            vo.$emit(evNameValue, value)

        })

    }

    let evShow = (kind, from) => {

        //check, 不可編輯時跳出
        if (!vo.editable) {
            return
        }

        //check, 已經顯示就不再顯示
        if (vo[keyShow]) {
            return
        }

        //check, 只允許限制模式
        if (vo.kind !== kind) {
            return
        }

        //triggerEvent for show
        triggerEvent(true)

    }

    let evHide = (kind, from) => {

        //check, 不可編輯時跳出
        if (!vo.editable) {
            return
        }

        //check, 已經隱藏就不再隱藏
        if (!vo[keyShow]) {
            return
        }

        //check, 只允許限制模式
        if (vo.kind !== kind) {
            return
        }

        //triggerEvent for hide
        triggerEvent(false)

    }

    return {
        mounted,
        destroy,
        showPopper,
        hidePopper,
        updatePopper,
        displayPopper,
        updateValue,
        triggerEvent,
        evShow,
        evHide,
    }
}


export default buildPopper
