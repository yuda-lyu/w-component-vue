<template >
    <v-menu
        offset-y
        :min-width="minWidth"
        :max-width="maxWidth"
        :nudge-top="-distY"
        :close-on-click="false"
        :close-on-content-click="false"
        :value="value"
        :disabled="!editable"
        @input="changeValue"
    >

        <template v-slot:activator="{ on }">
            <div
                style="display:inline-block;"
                v-on="on"
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
import waitFun from 'wsemi/src/waitFun.mjs'
import domCancelEvent from 'wsemi/src/domCancelEvent.mjs'
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
            clickInner: false,
            eleMousedown: null,
            windowMousedown: null,
            windowMouseup: null,
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
            if (!vo.clickInner && vo.value) {
                vo.changeValue(false)
                //domCancelEvent(e)
            }
        }
        window.addEventListener('mouseup', vo.windowMouseup)

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

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            return color2hex(vo.backgroundColor)
        },

    },
    methods: {

        changeValue: function(value) {
            //console.log('methods changeValue', value)

            let vo = this

            //覆蓋parentNode background
            //因slot內可能使用margin導致會使用到parentNode的background, 通過使用者點擊而組件顯示或隱藏時馬上覆蓋parentNode的background, 可避免突然換色問題
            //value因clickTrigger中強制v-menu要為顯示不隱藏, 故value會得到false但仍為顯示狀態, 所以此處不能用if判斷value作為執行依據
            try {
                vo.$refs.divContent.parentNode.style.background = vo.useBackgroundColor
            }
            catch (err) {}

            //setTimeout, 延遲更改, 要避免比window click快觸發
            setTimeout(() => {

                //emit
                vo.$emit('input', value)

            }, 1)

        },

        clickTrigger: function(e) {
            //console.log('methods clickTrigger', e)

            let vo = this

            //check
            if (!vo.editable) {

                //setTimeout, 因無法簡單阻止使用者點擊slot內容. 只好延遲emit強制恢復隱藏
                setTimeout(() => {

                    //emit
                    vo.$emit('input', false)

                }, 10)

                return
            }

            if (vo.value) {

                //setTimeout, 因無法簡單阻止重複點擊trigger隱藏v-menu, 只好延遲emit強制恢復顯示
                setTimeout(() => {

                    //emit
                    vo.$emit('input', true)

                }, 10)

            }

        },

    },
}
</script>

<style scoped>
::v-deep .v-menu__content {
    background: #62f;
}
</style>

