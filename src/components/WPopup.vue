<template>
    <div style="display:inline-block;" :changeValue="changeValue">

        <div
            ref="divTrigger"
            style="outline:none;"
            tabindex="0"
            @keyup.enter="clickTrigger"
            @click.stop="clickTrigger"
        >

            <slot name="trigger"></slot>

        </div>

        <!-- 需外層使用position包覆隔離, 因popper會對外層產生影響(添加class) -->
        <div style="position:fixed; left:0; top:0; z-index:99999;">
            <!-- 不用v-if因註冊監聽divContent僅mounted一次, 若用v-if顯隱則需每次都重新監聽較為複雜 -->
            <!-- style不需使用position, 因會被popper洗掉 -->
            <div
                divContent
                ref="divContent"
                class="WPopup-Content"
                :style="`z-index:100000; background:${useBackgroundColor}; ${useMinWidth} ${useMaxWidth} ${useBorderRadius} ${useShadow}`"
                v-show="valueTrans"
                v-domresize
                @domresize="updatePopper"
            >

                <slot
                    name="content"
                    :funHide="()=>{updateValue(false)}"
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
import domResize from '../js/domResize.mjs'
import { createPopper } from '@popperjs/core/lib/popper-lite.js' //不用安裝@popperjs/core, 因wsemi安裝tippy.js內有依賴@popperjs/core
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import hide from '@popperjs/core/lib/modifiers/hide.js'
//import computeStyles from '@popperjs/core/lib/modifiers/computeStyles'


let respList = []
function addTrigger(mmkey) {
    respList.push(mmkey)
}
function checkTriggerEff(mmkey) {
    return last(respList) === mmkey
}
function removeTrigger(mmkey) {
    // console.log('removeTrigger 1', mmkey, last(respList))
    // respList.pop()
    pull(respList, mmkey)
    // console.log('removeTrigger 2', respList)
}


/**
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {Boolean} [isolated=false] 輸入是否為獨立顯引狀態布林值，也就是可不接收外部傳入value值，預設false
 * @vue-prop {Number} [minWidth=null] 輸入最小寬度，單位為px，預設null
 * @vue-prop {Number} [maxWidth=null] 輸入最大寬度，單位為px，預設null
 * @vue-prop {Number} [distY=5] 輸入彈窗距離觸發元素底部的距離，單位為px，預設5
 * @vue-prop {Number} [borderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {String} [backgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {Boolean} [shadow=true] 輸入是否顯示陰影布林值，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        isolated: {
            type: Boolean,
            default: false,
        },
        minWidth: {
            type: Number,
            default: null,
        },
        maxWidth: {
            type: Number,
            default: null,
        },
        distY: {
            type: Number,
            default: 5,
        },
        borderRadius: {
            type: Number,
            default: 4,
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        shadowStyle: {
            type: String,
            default: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mmkey: null,

            valueTrans: false,

            triggerWidth: null,
            clickTriggerInner: false,
            clickContentInner: false,
            windowMousedown: null,
            windowMouseup: null,

            popperInstance: null,
            popperShow: false,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //mmkey
        vo.mmkey = genID(4)

        //windowMousedown
        vo.windowMousedown = (e) => {
            // console.log(vo.mmkey, 'windowMousedown', e)

            //divTrigger
            let divTrigger = get(vo, '$refs.divTrigger', null)

            //是否點擊於觸發區內
            if (divTrigger) {
                vo.clickTriggerInner = domIsClientXYIn(e.clientX, e.clientY, divTrigger)
            }
            else {
                vo.clickTriggerInner = false
            }

            //divContent
            let divContent = get(vo, '$refs.divContent', null)

            //是否當前為顯示且擊於內容區內
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
            // console.log(vo.mmkey, 'windowMouseup', e, checkTriggerEff(vo.mmkey))

            //check
            if (!checkTriggerEff(vo.mmkey)) {
                return
            }

            //console.log(vo.mmkey, 'windowMouseup', `clickOuter`, !vo.clickContentInner)
            //console.log(vo.mmkey, 'windowMouseup', `valueTrans`, vo.valueTrans)
            //當前為顯示時, 非點擊於觸發區與內容區, 才觸發隱藏事件
            if (vo.valueTrans && !vo.clickTriggerInner && !vo.clickContentInner) {
                // console.log(vo.mmkey, 'vo.valueTrans', vo.valueTrans)
                // console.log(vo.mmkey, 'vo.clickTriggerInner', vo.clickTriggerInner)
                // console.log(vo.mmkey, 'vo.clickContentInner', vo.clickContentInner)

                //triggerEvent for hide
                vo.triggerEvent(false)

                //console.log(vo.mmkey, '隱藏')
            }
            else {
                vo.clickTriggerInner = false
                vo.clickContentInner = false
                //console.log(vo.mmkey, '不隱藏')
            }

        }
        window.addEventListener('mouseup', vo.windowMouseup, false)

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //window remove mousedown mouseup
        window.removeEventListener('mousedown', vo.windowMousedown, false)
        window.removeEventListener('mouseup', vo.windowMouseup, false)

        //hidePopper
        vo.hidePopper()

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
                vo.updateValue(value)
            }

            return ''
        },

        useMinWidth: function() {
            //console.log('computed useMinWidth')

            let vo = this

            //minWidth
            let minWidth = vo.triggerWidth
            if (isNumber(vo.minWidth)) {
                minWidth = vo.minWidth
            }
            return `min-width:${minWidth}px;`
        },

        useMaxWidth: function() {
            //console.log('computed useMaxWidth')

            let vo = this

            if (isNumber(vo.maxWidth)) {
                return `max-width:${vo.maxWidth}px;`
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

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            return color2hex(vo.backgroundColor)
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

    },
    methods: {

        updateValue: function (value) {
            //console.log('methods updateValue', value)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //save
            vo.valueTrans = value

            //display
            vo.display()

        },

        display: function() {
            //console.log('methods display')

            let vo = this

            //showPopper or hidePopper
            vo.$nextTick(() => {

                //b
                let b = vo.editable && vo.valueTrans //顯示時valueTrans=true與可編輯時才顯示, 否則一律隱藏

                if (b && !vo.popperShow) {
                    vo.showPopper()
                    vo.popperShow = true
                    vo.$emit('show')
                }
                else if (!b && vo.popperShow) {
                    vo.hidePopper()
                    vo.popperShow = false
                    vo.$emit('hide')
                }

            })

        },

        triggerEvent: function(value) {
            // console.log('methods triggerEvent', value)

            let vo = this

            if (vo.isolated) {

                //updateValue
                vo.updateValue(value)

            }
            else {

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('input', value)

                })

            }

        },

        showPopper: function() {
            // console.log(this.mmkey, 'methods showPopper')

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
            addTrigger(vo.mmkey)

            //@popperjs/core 2.x
            let opt = {
                strategy: 'fixed', //需使用fixed, 否則popup彈窗會盡量基於trigger寬度而盡量窄化
                placement: 'bottom-start',
                modifiers: [
                    flip,
                    hide,
                    // computeStyles,
                    // {
                    //     name: 'computeStyles',
                    //     options: {
                    //         gpuAcceleration: false, //預設true, 可關閉GPU加速
                    //     },
                    // },
                    offset,
                    {
                        name: 'offset',
                        options: {
                            //offset: [0, 5], //因popperjs會自動調位置, 故得通過callback函數處理指定位置時的偏移量
                            offset: ({ placement, reference, popper }) => {
                                //console.log('offset', placement, reference, popper)
                                if (placement === 'bottom-start' || placement === 'bottom-end') {
                                    return [0, vo.distY]
                                }
                                else if (placement === 'top-start' || placement === 'top-end') {
                                    return [0, vo.distY]
                                }
                                else {
                                    return []
                                }
                            },
                        },
                    },
                ],
            }
            vo.popperInstance = createPopper(divTrigger, divContent, opt)
            // console.log('popperInstance', vo.popperInstance)

        },

        hidePopper: function() {
            // console.log(this.mmkey, 'methods hidePopper')

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
                removeTrigger(vo.mmkey)

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

        clickTrigger: function() {
            //console.log('methods clickTrigger')

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //check, 已經顯示就不再顯示
            if (vo.valueTrans) {
                return
            }

            //triggerEvent for show
            vo.triggerEvent(true)

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

