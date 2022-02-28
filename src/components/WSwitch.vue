<template>
    <div
        :style="`display:inline-block; ${editable?'cursor:pointer;':''}`"
        :changeParam="changeParam"
        @click="toogleValue"
        @mouseenter="hoverTrans=true;$emit('mouseenter',$event)"
        @mouseleave="hoverTrans=false;$emit('mouseleave',$event)"
    >

        <div style="display:flex; align-items:center;">

            <!-- 用padding:2px 0px與height+4撐開至預設高度24px -->
            <div :style="`padding:2px 0px; height:${4+Math.max(heightCir,heightBar)}px;`">
                <div :style="`position:relative; padding-top:${(heightCir-heightBar)/2}px;`">

                    <div class="ts" :style="`width:${widthBar}px; height:${heightBar}px; border-radius:8px; opacity:0.6; background:${useSwitchColor};`">
                    </div>

                    <div class="ts bs" :style="`position:absolute; top:0px; left:${ b ? widthBar-widthCir : 0 }px; width:${widthCir}px; height:${heightCir}px; border-radius:50%; background:${useSwitchColor};`">
                    </div>

                </div>
            </div>

            <div class="ts" :style="`text-transform:none; padding-left:5px; color:${useTextColor}; ${useTextFontSize}`" v-if="text!==''">
                {{text}}
            </div>

        </div>

    </div>
</template>

<script>
import isbol from 'wsemi/src/isbol.mjs'
import replace from 'wsemi/src/replace.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Boolean|String} [value=false] 輸入是否狀態的布林值或字串，可接受true或false，或是'y'或'n'，預設false
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [switchSize=24] 輸入切換器大小，單位為px，預設24
 * @vue-prop {String} [checkedSwitchColor='blue darken-3'] 輸入可編輯時，有效(true|'y')切換器顏色字串，預設'blue darken-3'
 * @vue-prop {String} [checkedSwitchColorHover='blue darken-2'] 輸入滑鼠移入時可編輯時，有效(true|'y')切換器顏色字串，預設'blue darken-2'
 * @@vue-prop {String} [checkedSwitchColorDisabled='grey'] 輸入不可編輯時，有效(true|'y')切換器顏色字串，預設'grey'
 * @vue-prop {String} [uncheckedSwitchColor='#8ad'] 輸入可編輯時，無效(false|'n')切換器顏色字串，預設'#8ad'
 * @vue-prop {String} [uncheckedSwitchColorHover='#9bd'] 輸入滑鼠移入時可編輯時，無效(false|'n')切換器顏色字串，預設'#9bd'
 * @@vue-prop {String} [uncheckedSwitchColorDisabled='#bbb'] 輸入不可編輯時，無效(false|'n')切換器顏色字串，預設'#bbb'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
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
        switchSize: {
            type: Number,
            default: 24,
        },
        checkedSwitchColor: {
            type: String,
            default: 'blue darken-3',
        },
        checkedSwitchColorHover: {
            type: String,
            default: 'blue darken-2',
        },
        checkedSwitchColorDisabled: {
            type: String,
            default: 'grey',
        },
        uncheckedSwitchColor: {
            type: String,
            default: '#8ad',
        },
        uncheckedSwitchColorHover: {
            type: String,
            default: '#9bd',
        },
        uncheckedSwitchColorDisabled: {
            type: String,
            default: '#bbb',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {

            hoverTrans: false,

            dh: 4,

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

        heightCir: function() { // heightCir: 20,
            let vo = this
            return vo.switchSize - vo.dh
        },

        widthCir: function() { // widthCir: 20,
            let vo = this
            return vo.heightCir
        },

        heightBar: function() { // heightBar: 14,
            let vo = this
            return vo.switchSize / 24 * 14
        },

        widthBar: function() { // widthBar: 36,
            let vo = this
            return vo.switchSize / 24 * 36
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

        effCheckedSwitchColor: function() {
            let vo = this
            return color2hex(vo.checkedSwitchColor)
        },

        effCheckedSwitchColorHover: function() {
            let vo = this
            return color2hex(vo.checkedSwitchColorHover)
        },

        effCheckedSwitchColorDisabled: function() {
            let vo = this
            return color2hex(vo.checkedSwitchColorDisabled)
        },

        useCheckedSwitchColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effCheckedSwitchColorDisabled
            }
            return vo.hoverTrans ? vo.effCheckedSwitchColorHover : vo.effCheckedSwitchColor
        },

        effUncheckedSwitchColor: function() {
            let vo = this
            return color2hex(vo.uncheckedSwitchColor)
        },

        effUncheckedSwitchColorHover: function() {
            let vo = this
            return color2hex(vo.uncheckedSwitchColorHover)
        },

        effUncheckedSwitchColorDisabled: function() {
            let vo = this
            return color2hex(vo.uncheckedSwitchColorDisabled)
        },

        useUncheckedSwitchColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effUncheckedSwitchColorDisabled
            }
            return vo.hoverTrans ? vo.effUncheckedSwitchColorHover : vo.effUncheckedSwitchColor
        },

        useSwitchColor: function() {
            let vo = this
            return vo.b ? vo.useCheckedSwitchColor : vo.useUncheckedSwitchColor
        },

    },
    methods: {

        toogleValue: function () {
            // console.log('methods toogleValue')

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

    },
}
</script>

<style scoped>
.ts {
    transition:all 0.3s;
}
.bs {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}
</style>
