<template >
    <v-menu
        offset-y
        :min-width="minWidth"
        :max-width="maxWidth"
        :nudge-top="-distY"
        :close-on-click="false"
        :close-on-content-click="false"
        :disabled="!editable"
        :value="valueTrans"
        @input="(v)=>{changeValueTrans(v,'v-menu')}"
        :changeValue="changeValue"
    >

        <template v-slot:activator="{ on }">
            <div
                ref="divTrigger"
                v-on="on"
                :style="`display:${isBlock?'block':'inline-block'};`"
                @click="clickTrigger"
            >
                <slot name="trigger"></slot>
            </div>
        </template>

        <div
            ref="divContent"
            :style="`background:${useBackgroundColor};`"
        >
            <slot name="content"></slot>
        </div>

    </v-menu>
</template>

<script>
import get from 'lodash/get'
import size from 'lodash/size'
import waitFun from 'wsemi/src/waitFun.mjs'
import domCancelEvent from 'wsemi/src/domCancelEvent.mjs'
import isEle from 'wsemi/src/isEle.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Number} [value=false] 輸入是否顯示，預設false
 * @vue-prop {Number} [minWidth=undefined] 輸入最小寬度，單位為px，預設undefined
 * @vue-prop {Number} [maxWidth=undefined] 輸入最大寬度，單位為px，預設undefined
 * @vue-prop {Number} [distY=5] 輸入彈窗距離觸發元素底部的距離，單位為px，預設5
 * @vue-prop {String} [backgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        minWidth: {
            type: Number,
            default: undefined,
        },
        maxWidth: {
            type: Number,
            default: undefined,
        },
        distY: {
            type: Number,
            default: 5,
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            timeDisabled: null,
            valueTrans: false,
            clickInner: false,
            eleMousedown: null,
            windowMousedown: null,
            windowMouseup: null,
            isBlock: false,
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //eleMousedown
        vo.eleMousedown = (e) => {
            vo.clickInner = true
            domCancelEvent(e)
        }
        waitFun(() => {
            return get(vo, '$refs.divContent.addEventListener', null) !== null //不能保證slot已載入有元素可addEventListener, 故需等待
        })
            .then(() => {

                //ele
                let ele = vo.$refs.divContent

                //check, 因為hotreload會導致重新載入, 而若剛好waitFun剛通過觸發then就會再失去該元素, 故需再次檢核
                if (ele) {
                    ele.addEventListener('mousedown', vo.eleMousedown)
                }

            })

        //windowMousedown
        vo.windowMousedown = (e) => {
            vo.clickInner = false //因為eleMousedown會cancelEvent, 所以點擊ele時不會觸發window mousedown
            //domCancelEvent(e)
        }
        window.addEventListener('mousedown', vo.windowMousedown)

        //windowMouseup
        vo.windowMouseup = (e) => {
            if (!vo.clickInner && vo.valueTrans) {
                vo.triggerEventThreshold(false, 'clickOuter')
                //domCancelEvent(e)
            }
        }
        window.addEventListener('mouseup', vo.windowMouseup)

        //自動調整divTrigger的display
        waitFun(() => {
            return get(vo, '$refs.divTrigger', null) !== null
        })
            .then(() => {

                //divTriggerChilds
                let divTriggerChilds = get(vo, '$refs.divTrigger.children', null)

                //check
                if (size(divTriggerChilds) === 0) {
                    //console.log('無法找到點擊區內元素')
                    return
                }

                //找尋slot內各元素, 看是否有block或flex元素
                let isBlock = false
                for (let i = 0; i < size(divTriggerChilds); i++) {
                    let divTriggerChild = divTriggerChilds[i]
                    let display = getComputedStyle(divTriggerChild).display
                    isBlock = display === 'block' || display === 'flex'
                    if (isBlock) {
                        break
                    }
                }

                //save
                vo.isBlock = isBlock

            })

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //ele
        let ele = get(vo, '$refs.divContent', null)

        //ele remove mousedown
        if (ele) {
            ele.removeEventListener('mousedown', vo.eleMousedown)
        }

        //window remove mousedown, mouseup
        window.removeEventListener('mousedown', vo.windowMousedown)
        window.removeEventListener('mouseup', vo.windowMouseup)

    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //save
            vo.valueTrans = vo.value

            return ''
        },

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            return color2hex(vo.backgroundColor)
        },

    },
    methods: {

        triggerEvent: function(value, from) {
            //console.log('methods triggerEvent', value, from)

            let vo = this

            setTimeout(() => {

                //emit
                vo.$emit('input', value)

            }, 1)

        },

        changeBackground: function() {
            //console.log('methods changeBackground')

            let vo = this

            //ele
            let ele = get(vo, '$refs.divContent.parentNode', null)

            //覆蓋parentNode background
            //因slot內可能使用margin導致會使用到parentNode的background, 通過使用者點擊而組件顯示或隱藏時馬上覆蓋parentNode的background, 可避免突然換色問題
            //value因clickTrigger中強制v-menu要為顯示不隱藏, 故value會得到false但仍為顯示狀態, 所以此處不能用if判斷value作為執行依據
            //找不到元素時不能提前離開, 因需把value emit出去給外部組件知道與變更
            if (isEle(ele)) {
                ele.style.background = vo.useBackgroundColor
            }

        },

        changeValueTrans: function(value, from) {
            //console.log('methods changeValueTrans', value, from)

            let vo = this

            //changeBackground
            vo.changeBackground()

            //valueTrans
            vo.valueTrans = value

            //triggerEventThreshold
            // if (value) { //顯示時才觸發
            //     vo.triggerEventThreshold(true, 'watchValueTrans')
            // }
            vo.triggerEventThreshold(value, from)

        },

        triggerEventThreshold: function(value, from) {
            //console.log('methods triggerEventThreshold', value, from)

            let vo = this

            //timeDisabled
            if (new Date() - vo.timeDisabled < 300) {
                return
            }

            //timeDisabled
            vo.timeDisabled = new Date()

            //triggerEvent
            vo.triggerEvent(value, from)

        },

        clickTrigger: function(e) {
            //console.log('methods clickTrigger', e)

            // let vo = this

        },

    },
}
</script>

<style scoped>
</style>

