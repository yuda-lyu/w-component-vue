<template>
    <div
        :style="`display:inline-block; ${editable?'cursor:pointer;':''}`"
        tabindex="0"
        :changeParam="changeParam"
        @click="toogleValue"
        @mouseenter="hoverTrans=true;$emit('mouseenter',$event)"
        @mouseleave="hoverTrans=false;$emit('mouseleave',$event)"
    >

        <div style="display:flex; align-items:center;">

            <WIcon
                :icon="checkedIcon"
                :color="useCheckedIconColor"
                :size="iconSize"
                v-if="b"
            ></WIcon>
            <WIcon
                :icon="uncheckedIcon"
                :color="useUncheckedIconColor"
                :size="iconSize"
                v-else
            ></WIcon>

            <div :style="`transition:all 0.3s; text-transform:none; padding-left:5px; color:${useTextColor}; ${useTextFontSize}`" v-if="text!==''">
                {{text}}
            </div>

        </div>

    </div>
</template>

<script>
import { mdiCheckboxMarked, mdiCheckboxBlankOutline } from '@mdi/js/mdi.js'
import isbol from 'wsemi/src/isbol.mjs'
import replace from 'wsemi/src/replace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Boolean|String} [value=false] 輸入是否狀態的布林值或字串，可接受true或false，或是'y'或'n'，預設false
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [iconSize=24] 輸入圖標大小，單位為px，預設24
 * @vue-prop {String} [checkedIcon=mdiCheckboxMarked] 輸入有效(true|'y')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxMarked
 * @vue-prop {String} [checkedIconColor='blue darken-3'] 輸入可編輯時，有效(true|'y')圖標顏色字串，預設'blue darken-3'
 * @vue-prop {String} [checkedIconColorHover='blue darken-2'] 輸入滑鼠移入時可編輯時，有效(true|'y')圖標顏色字串，預設'blue darken-2'
 * @@vue-prop {String} [checkedIconColorDisabled='grey'] 輸入不可編輯時，有效(true|'y')圖標顏色字串，預設'grey'
 * @vue-prop {String} [uncheckedIcon=mdiCheckboxBlankOutline] 輸入無效(false|'n')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxBlankOutline
 * @vue-prop {String} [uncheckedIconColor='blue darken-3'] 輸入可編輯時，無效(false|'n')圖標顏色字串，預設'blue darken-3'
 * @vue-prop {String} [uncheckedIconColorHover='blue darken-2'] 輸入滑鼠移入時可編輯時，無效(false|'n')圖標顏色字串，預設'blue darken-2'
 * @@vue-prop {String} [uncheckedIconColorDisabled='grey'] 輸入不可編輯時，無效(false|'n')圖標顏色字串，預設'grey'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon,
    },
    props: {
        value: {
            type: [Boolean, String],
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        textColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        iconSize: {
            type: Number,
            default: 24,
        },
        checkedIcon: {
            type: String,
            default: mdiCheckboxMarked,
        },
        checkedIconColor: {
            type: String,
            default: 'blue darken-3',
        },
        checkedIconColorHover: {
            type: String,
            default: 'blue darken-2',
        },
        checkedIconColorDisabled: {
            type: String,
            default: 'grey',
        },
        uncheckedIcon: {
            type: String,
            default: mdiCheckboxBlankOutline,
        },
        uncheckedIconColor: {
            type: String,
            default: 'blue darken-3',
        },
        uncheckedIconColorHover: {
            type: String,
            default: 'blue darken-2',
        },
        uncheckedIconColorDisabled: {
            type: String,
            default: 'grey',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {

            hoverTrans: false,

            b: false,

        }
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //value for trigger
            let value = vo.value

            //b
            if (isbol(value)) {
                vo.b = value
            }
            else {
                vo.b = (value === 'y')
            }

            return ''
        },

        effTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

        effTextColorHover: function() {
            let vo = this
            return color2hex(vo.textColorHover)
        },

        useTextColor: function() {
            let vo = this
            let r
            if (!vo.editable) {
                return vo.effTextColor
            }
            r = vo.hoverTrans ? vo.effTextColorHover : vo.effTextColor
            return r
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        effCheckedIconColor: function() {
            let vo = this
            return color2hex(vo.checkedIconColor)
        },

        effCheckedIconColorHover: function() {
            let vo = this
            return color2hex(vo.checkedIconColorHover)
        },

        effCheckedIconColorDisabled: function() {
            let vo = this
            return color2hex(vo.checkedIconColorDisabled)
        },

        useCheckedIconColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effCheckedIconColorDisabled
            }
            return vo.hoverTrans ? vo.effCheckedIconColorHover : vo.effCheckedIconColor
        },

        effUncheckedIconColor: function() {
            let vo = this
            return color2hex(vo.uncheckedIconColor)
        },

        effUncheckedIconColorHover: function() {
            let vo = this
            return color2hex(vo.uncheckedIconColorHover)
        },

        effUncheckedIconColorDisabled: function() {
            let vo = this
            return color2hex(vo.uncheckedIconColorDisabled)
        },

        useUncheckedIconColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effUncheckedIconColorDisabled
            }
            return vo.hoverTrans ? vo.effUncheckedIconColorHover : vo.effUncheckedIconColor
        },

    },
    methods: {

        toogleValue: function () {
            //console.log('methods toogleValue')

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //toogle
            let b = vo.b
            b = !b

            //value
            let value = null
            if (isbol(vo.value)) {
                value = false
                if (b) {
                    value = true
                }
            }
            else {
                value = 'n'
                if (b) {
                    value = 'y'
                }
            }

            //nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('input', value)

            })

        },

    }
}
</script>

<style scoped>
</style>
