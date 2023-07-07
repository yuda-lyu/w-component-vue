<template>
    <div
        :style="`${useDisplayType}`"
        :changeValue="changeValue"
    >

        <div
            ref="divTrigger"
            style="outline:none;"
            tabindex="0"
            @click="evShow('click','click')"
            @mouseenter="evShow('hover','mouseenter')"
            @mouseleave="evHide('hover','mouseleave')"
        >

            <slot name="trigger"></slot>

        </div>

        <!-- 不能給予position因會被popupjs洗掉, 但可給z-index, 且popupjs會改用transform:translate定位 -->
        <!-- 若使用minWidth, 會使popupjs重算給予minWidth用以自動撐開彈窗寬度失效, 若於其內slot外添加div給予minWidth, 亦會使popupjs給予minWidth機制失效, 待研究 -->
        <div
            ref="divContent"
            class="WPopup-Content"
            :style="`z-index:${cmpZIndex};`"
            v-show="valueTrans"
            v-domresize
            @domresize="updatePopper"
        >
            <div
                :style="`${contentStyle} ${usePadding} ${useTextFontSize} color:${useTextColor}; background:${useBackgroundColor}; ${useMinWidth} ${useMaxWidth} ${useBorderRadius} ${useShadow}`"
                v-if="valueTrans"
            >
                <slot
                    name="content"
                    :funHide="()=>{updateValue(false,'slot')}"
                ></slot>
            </div>
        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import last from 'lodash/last'
import pull from 'lodash/pull'
import isNumber from 'lodash/isNumber'
import genID from 'wsemi/src/genID.mjs'
import replace from 'wsemi/src/replace.mjs'
import domIsClientXYIn from 'wsemi/src/domIsClientXYIn.mjs'
// import domCancelEvent from 'wsemi/src/domCancelEvent.mjs' //同樣都監聽window(非dom階層)故無法cancel
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import domResize from '../js/domResize.mjs'
import { createPopper } from '@popperjs/core/lib/popper-lite.js' //不用安裝@popperjs/core, 因wsemi安裝tippy.js內有依賴@popperjs/core
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import hide from '@popperjs/core/lib/modifiers/hide.js'
//import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
//import computeStyles from '@popperjs/core/lib/modifiers/computeStyles'


//tootip與popup不共用已出現項目清單, 避免互相影響
let kpRespList = {
    tooltip: [],
    popup: [],
}
function addTriggerMode(mode, mmkey) {
    kpRespList[mode].push(mmkey)
}
function checkTriggerEffMode(mode, mmkey) {
    return last(kpRespList[mode]) === mmkey
}
function removeTriggerMode(mode, mmkey) {
    pull(kpRespList[mode], mmkey)
}


/**
 * @vue-prop {String} [mode='tooltip'] 輸入組件模式字串，可選'tooltip'與'popup'，預設'tooltip'
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {String} [displayType='block'] 輸入display設定字串，可選'block'與'line'，預設'block'
 * @vue-prop {Number} [cmpZIndex=3000] 輸入彈窗使用z-index數字，預設3000
 * @vue-prop {Boolean} [isolated=false] 輸入當mode為'popup'時是否為獨立顯引狀態布林值，也就是可不接收外部傳入value值，預設false
 * @vue-prop {String} [placement='bottom'] 輸入內容區出現位置字串，可選'top-start'、'top'、'top-end'、'bottom-start'、'bottom'、'bottom-end'、'left-start'、'left'、'left-end'、'right-start'、'right'、'right-end'、，預設'bottom'
 * @vue-prop {Number} [minWidth=null] 輸入最小寬度數字，單位為px，預設null
 * @vue-prop {Number} [maxWidth=null] 輸入最大寬度數字，單位為px，預設null
 * @vue-prop {Boolean} [autoFitMinWidth=false] 輸入是否使用驅動區寬度作為內容區之最小寬度布林值，預設false
 * @vue-prop {Boolean} [autoFitMaxWidth=false] 輸入是否使用驅動區寬度作為內容區之最大寬度布林值，預設false
 * @vue-prop {Number} [placementDist=5] 輸入彈窗距離觸發元素距離數字，單位為px，預設5
 * @vue-prop {Number} [borderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入入內容區塊文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='white'] 輸入內容區塊文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='rgba(60,60,60,0.75)'] 輸入內容區塊背景顏色字串，預設'rgba(60,60,60,0.75)'
 * @vue-prop {Object} [paddingStyle={v:2,h:10}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:2,h:10}
 * @vue-prop {Boolean} [shadow=true] 輸入是否顯示陰影布林值，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Number} [transitionTime=200] 輸入淡入出現時間數字，單位為ms，預設200
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        mode: {
            type: String,
            default: 'tooltip', //tooltip, popup
        },
        value: {
            type: Boolean,
            default: false,
        },
        displayType: {
            type: String,
            default: 'block', //line, block
        },
        cmpZIndex: {
            type: Number,
            default: 3000,
        },
        isolated: {
            type: Boolean,
            default: false,
        },
        placement: {
            type: String,
            default: 'bottom',
        },
        minWidth: {
            type: Number,
            default: null,
        },
        maxWidth: {
            type: Number,
            default: null,
        },
        autoFitMinWidth: {
            type: Boolean,
            default: false,
        },
        autoFitMaxWidth: {
            type: Boolean,
            default: false,
        },
        placementDist: {
            type: Number,
            default: 5,
        },
        borderRadius: {
            type: Number,
            default: 4,
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        textColor: {
            type: String,
            default: 'white',
        },
        backgroundColor: {
            type: String,
            default: 'rgba(60,60,60,0.75)',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 2,
                    h: 10,
                }
            },
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        shadowStyle: {
            type: String,
            default: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
        },
        transitionTime: {
            type: Number,
            default: 200,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            // mmkey: null,
            mmkey: genID(), //beforeMount內無法變更data, mounted內會晚於computed, 故優先放於data生成
            // mmkey: (() => {
            //     let id = genID()
            //     console.log('data gen mmkey', id)
            //     return id
            // })(),

            valueTrans: false,

            triggerWidth: null,
            cursorTriggerInner: false,
            clickContentInner: false,
            windowMousedown: null,
            windowMouseup: null,
            windowScroll: null,

            popperInstance: null,
            popperShow: false,

            contentStyle: '',

            mouseClientX: 0,
            mouseClientY: 0,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        // //mmkey
        // vo.mmkey = genID()

        //windowMousemove
        vo.windowMousemove = (e) => {
            // console.log(vo.mmkey, 'windowMousemove', e)

            //save
            vo.mouseClientX = e.clientX
            vo.mouseClientY = e.clientY

        }
        window.addEventListener('mousemove', vo.windowMousemove, false)

        //windowMousedown
        vo.windowMousedown = (e) => {
            // console.log(vo.mmkey, 'windowMousedown', e)

            //divTrigger
            let divTrigger = get(vo, '$refs.divTrigger', null)

            //cursorTriggerInner, 滑鼠游標是否點擊於觸發區內
            if (divTrigger) {
                vo.cursorTriggerInner = domIsClientXYIn(e.clientX, e.clientY, divTrigger)
            }
            else {
                vo.cursorTriggerInner = false
            }

            //divContent
            let divContent = get(vo, '$refs.divContent', null)

            //clickContentInner, 是否當前為顯示且擊於內容區內
            if (vo.valueTrans && divContent) {
                vo.clickContentInner = domIsClientXYIn(e.clientX, e.clientY, divContent)
            }
            else {
                vo.clickContentInner = false
            }

        }
        window.addEventListener('mousedown', vo.windowMousedown, false)

        //windowMouseup
        vo.windowMouseup = (e) => {
            // console.log(vo.mmkey, 'windowMouseup', e, vo.checkTriggerEff(vo.mmkey))

            //check
            if (!vo.checkTriggerEff(vo.mmkey)) {
                return
            }

            //當前為顯示時, 非點擊於觸發區與內容區, 才觸發隱藏事件
            if (vo.valueTrans && !vo.cursorTriggerInner && !vo.clickContentInner) {
                //console.log(vo.mmkey, 'click隱藏')

                //evHide
                vo.evHide('click', 'windowMouseup')

            }
            else {
                //console.log(vo.mmkey, 'click不隱藏')
                vo.cursorTriggerInner = false
                vo.clickContentInner = false
            }

        }
        window.addEventListener('mouseup', vo.windowMouseup, false)

        //windowScroll
        vo.windowScroll = (e) => {
            // console.log(vo.mmkey, 'windowScroll', e, vo.checkTriggerEff(vo.mmkey))

            // //check, 不能偵測checkTriggerEff, 因須支援由隱藏但通過捲動而滑鼠進入組件而顯示機制
            // if (!vo.checkTriggerEff(vo.mmkey)) {
            //     return
            // }

            //check, 只針對hover做處理
            if (vo.kind !== 'hover') {
                return
            }

            //divTrigger
            let divTrigger = get(vo, '$refs.divTrigger', null)

            //check
            if (!divTrigger) {
                return
            }

            //cursorTriggerInner, 滑鼠游標是否點擊於觸發區內
            if (divTrigger) {
                vo.cursorTriggerInner = domIsClientXYIn(vo.mouseClientX, vo.mouseClientY, divTrigger)
                // console.log('domIsClientXYIn vo.cursorTriggerInner', vo.cursorTriggerInner)
            }
            else {
                vo.cursorTriggerInner = false
                // console.log('force vo.cursorTriggerInner', vo.cursorTriggerInner)
            }

            if (vo.cursorTriggerInner) {
                //滑鼠位於於觸發區

                if (vo.valueTrans) {
                    //當前為顯示

                    //不處理

                }
                else {
                    //當前為隱藏
                    // console.log(vo.mmkey, 'scroll顯示')

                    //evShow
                    vo.evShow('hover', 'windowScroll')

                }

            }
            else {
                //滑鼠非位於於觸發區

                if (vo.valueTrans) {
                    //當前為顯示
                    // console.log(vo.mmkey, 'scroll隱藏')

                    //evHide
                    vo.evHide('hover', 'windowScroll')

                }
                else {
                    //當前為隱藏

                    //不處理

                }

            }

        }
        window.addEventListener('scroll', vo.windowScroll, false)

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this
        //window remove mousemove, mousedown, mouseup, scroll
        window.removeEventListener('mousemove', vo.windowMousemove, false)
        window.removeEventListener('mousedown', vo.windowMousedown, false)
        window.removeEventListener('mouseup', vo.windowMouseup, false)
        window.removeEventListener('scroll', vo.windowMouseup, false)

        // //hidePopper, 不論click或hover一律隱藏
        // vo.hidePopper('beforeDestroy')

        //triggerEvent for hide
        vo.triggerEvent(false)

        //bbb
        clearInterval(vo.trt)

    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //trigger
            let value = vo.value
            let isolated = vo.isolated

            //updateValue
            if (!isolated) {
                vo.updateValue(value, 'changeValue')
            }

            return ''
        },

        useDisplayType: function() {
            let vo = this
            if (vo.displayType === 'line') {
                return 'display:block;'
            }
            return 'display:inline-block;'
        },

        useMinWidth: function() {
            //console.log('computed useMinWidth')

            let vo = this

            if (isNumber(vo.minWidth)) {
                return `min-width:${vo.minWidth}px;`
            }
            else if (vo.autoFitMinWidth) {
                return `min-width:${vo.triggerWidth}px;`
            }
            return ''
        },

        useMaxWidth: function() {
            //console.log('computed useMaxWidth')

            let vo = this

            if (isNumber(vo.maxWidth)) {
                return `max-width:${vo.maxWidth}px;`
            }
            else if (vo.autoFitMaxWidth) {
                return `max-width:${vo.triggerWidth}px;`
            }
            return ''
        },

        useBorderRadius: function() {
            //console.log('computed useBorderRadius')

            let vo = this

            if (isNumber(vo.borderRadius)) {
                return `border-radius:${vo.borderRadius}px;`
            }
            return ''
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return color2hex(vo.textColor)
        },

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            return color2hex(vo.backgroundColor)
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        useShadow: function() {
            //console.log('computed useShadow')

            let vo = this

            //check
            if (!vo.shadow) {
                return ''
            }

            //shadowStyle
            let s = replace(vo.shadowStyle, ';', '')
            if (s !== '') {
                return `box-shadow:${s};`
            }

            return ''
        },

        kind: function() {
            let vo = this
            if (vo.mode === 'popup') {
                return 'click'
            }
            return 'hover'
        },

    },
    methods: {

        addTrigger: function(mmkey) {
            let vo = this
            return addTriggerMode(vo.mode, mmkey)
        },

        checkTriggerEff: function(mmkey) {
            let vo = this
            return checkTriggerEffMode(vo.mode, mmkey)
        },

        removeTrigger: function(mmkey) {
            let vo = this
            return removeTriggerMode(vo.mode, mmkey)
        },

        showPopper: function(from) {
            // console.log('methods showPopper', this.mmkey, from)

            let vo = this

            //divTrigger
            let divTrigger = get(vo, '$refs.divTrigger', null)
            if (divTrigger === null) {
                return //console.log('無法找到點擊區元素')
            }

            //$nextTick, 因顯示後popperjs會用divContent撐開導致divTrigger寬度等同於divContent, 需延遲取得offsetWidth才是正確寬度
            vo.$nextTick(() => {

                //update triggerWidth
                vo.triggerWidth = divTrigger.offsetWidth

            })

            //divContent
            let divContent = get(vo, '$refs.divContent', null)

            //check
            if (divContent === null) {
                return //console.log('無法找到顯示元素')
            }

            //addTrigger, 採同步方式添加, popup顯示前就會mmkey就會進清單
            vo.addTrigger(vo.mmkey)

            //@popperjs/core 2.x
            let opt = {
                strategy: 'fixed', //盡量使用'fixed'而不用'absolute', 否則位於多層dialog或多層drawer內popup顯示會異常
                placement: vo.placement,
                modifiers: [
                    // preventOverflow,
                    // computeStyles,
                    // {
                    //     name: 'computeStyles',
                    //     options: {
                    //         gpuAcceleration: false, //預設true, 可關閉GPU加速
                    //     },
                    // },
                    flip,
                    hide,
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: ['bottom-start', 'bottom-end', 'top', 'top-start', 'top-end'],
                        },
                    },
                    offset,
                    {
                        name: 'offset',
                        options: {
                            //offset: [0, 5], //因popperjs會自動調位置, 故得通過callback函數處理指定位置時的偏移量
                            offset: ({ placement, reference, popper }) => {
                                // console.log('offset', placement, reference, popper, vo.placementDist)
                                // if (placement === 'bottom-start' || placement === 'bottom' || placement === 'bottom-end') {
                                //     return [0, vo.placementDist]
                                // }
                                // else if (placement === 'top-start' || placement === 'top' || placement === 'top-end') {
                                //     return [0, vo.placementDist]
                                // }
                                // else if (placement === 'left-start' || placement === 'left' || placement === 'left-end') {
                                //     return [0, vo.placementDist]
                                // }
                                // else if (placement === 'right-start' || placement === 'right' || placement === 'right-end') {
                                //     return [0, vo.placementDist]
                                // }
                                // else {
                                //     return []
                                // }
                                return [0, vo.placementDist] //[Skidding, Distance]
                            },
                        },
                    },
                ],
            }
            vo.popperInstance = createPopper(divTrigger, divContent, opt)
            // console.log('popperInstance', vo.popperInstance)

        },

        hidePopper: function(from) {
            // console.log('methods hidePopper', from, this.mmkey)

            let vo = this

            //check
            if (vo.popperInstance) {

                //destroy
                vo.popperInstance.destroy()
                vo.popperInstance = null

            }

            //非同步移除用nextTick會太快, 得使用setTimeout
            //不管有沒有popperInstance都進行移除, 於開發階段避免熱更新問題
            setTimeout(() => {

                //removeTrigger, 需採非同步移除, 避免window事件結束後, 此時會繼續觸發前面popup內的window事件, 若採同步移除就無法讓前面popup判斷是否需屏蔽
                vo.removeTrigger(vo.mmkey)

            }, 20)

        },

        updatePopper: function(msg) {
            //console.log('methods updatePopper', msg)

            let vo = this

            //update
            if (vo.popperInstance) {
                vo.popperInstance.update()
            }

            //emit
            vo.$emit('resize', msg)

        },

        displayPopper: function() {
            //console.log('methods displayPopper')

            let vo = this

            //showPopper or hidePopper
            vo.$nextTick(() => {

                //b
                let b = vo.editable && vo.valueTrans //顯示時valueTrans=true與可編輯時才顯示, 否則一律隱藏

                if (b && !vo.popperShow) {
                    // console.log('call showPopper', vo.mmkey)

                    //shift, 暫時無法取得popper自動變更的placement, shift無法即時連動, 待研究
                    let shift = -15
                    // if (vo.placement.indexOf('top') >= 0) {
                    //     shift = 15
                    // }
                    // console.log('vo.placement', vo.placement, vo.placement.indexOf('top'))
                    // console.log('shift', shift)

                    //contentStyle,, 初始化使用pointer-events:none避免彈出區遮蔽驅動區導致觸發隱藏
                    vo.contentStyle = `opacity:0; pointer-events:none; transform:translateY(${shift}px);`

                    vo.showPopper('displayPopper')
                    vo.popperShow = true
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
                else if (!b && vo.popperShow) {
                    // console.log('call hidePopper', vo.mmkey)

                    vo.hidePopper('displayPopper')
                    vo.popperShow = false
                    vo.$emit('hide')
                    // console.log('emit hide')

                }

            })

        },

        updateValue: function (value, from) {
            // console.log('methods updateValue', value, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //save
            vo.valueTrans = value
            // console.log('updateValue', vo.valueTrans, from, vo.mmkey)

            //displayPopper
            vo.displayPopper()

        },

        triggerEvent: function(value) {
            // console.log('methods triggerEvent', value)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //check
            if (vo.isolated) {

                //updateValue
                vo.updateValue(value, 'triggerEvent')

            }

            //$nextTick, 不論是否isolated都須emit
            vo.$nextTick(() => {

                //emit
                vo.$emit('input', value)

            })

        },

        evShow: function(kind, from) {
            // console.log('methods evShow', kind, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //check, 已經顯示就不再顯示
            if (vo.valueTrans) {
                return
            }

            //check, 只允許限制模式
            if (vo.kind !== kind) {
                return
            }

            //triggerEvent for show
            vo.triggerEvent(true)

        },

        evHide: function(kind, from) {
            // console.log('methods evHide', kind, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //check, 已經隱藏就不再隱藏
            if (!vo.valueTrans) {
                return
            }

            //check, 只允許限制模式
            if (vo.kind !== kind) {
                return
            }

            //triggerEvent for hide
            vo.triggerEvent(false)

        },

    },
}
</script>

<style scoped>
.WPopup-Content[data-popper-reference-hidden] {
    visibility: hidden;
    pointer-events: none;
}
</style>

