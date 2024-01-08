<template>
    <div
        :style="`display:inline-block; ${editable?'cursor:pointer;':''}`"
        :changeParam="changeParam"
        @click="toogleValue"
        @mouseenter="hoverTrans=true;$emit('mouseenter',$event)"
        @mouseleave="hoverTrans=false;$emit('mouseleave',$event)"
    >

        <div style="display:flex; align-items:center;">

            <div :style="`width:${widthBar}px; height:${heightToogle}px;`">
                <div :style="`position:relative;`">

                    <!-- 文字會稍微偏下故top+1 -->
                    <div class="ts" :style="`position:absolute; top:${1+(heightToogle-heightBar)/2}px; left:0px; width:${widthBar}px; height:${heightBar}px; border-radius:8px; background:${useSwitchBarColor};`">
                    </div>

                    <!-- 文字會稍微偏下故top+1 -->
                    <div class="ts bs" :style="`position:absolute; top:${1+(heightToogle-heightCir)/2}px; left:${ b ? widthBar-widthCir : 0 }px; width:${widthCir}px; height:${heightCir}px; border-radius:50%; background:${useSwitchCircleColor};`">
                    </div>

                </div>
            </div>

            <div class="ts" :style="`text-transform:none; padding-left:5px; color:${useTextColor}; ${useTextFontSize}`" v-if="text!==''">
                <slot
                    name="text"
                    :text="text"
                >
                    {{text}}
                </slot>
            </div>

        </div>

    </div>
</template>

<script>
import isbol from 'wsemi/src/isbol.mjs'
import replace from 'wsemi/src/replace.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {Boolean|String} [value=false] 輸入是否狀態的布林值或字串，可接受true或false，或是'y'或'n'，預設false
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [switchSize=24] 輸入切換器大小，單位為px，預設24
 * @vue-prop {String} [checkedSwitchCircleColor='blue darken-3'] 輸入可編輯時，有效(true|'y')切換器鈕扣區顏色字串，預設'blue darken-3'
 * @vue-prop {String} [checkedSwitchCircleColorHover='blue darken-2'] 輸入滑鼠移入時可編輯時，有效(true|'y')切換器鈕扣區顏色字串，預設'blue darken-2'
 * @vue-prop {String} [checkedSwitchCircleColorDisabled='grey'] 輸入不可編輯時，有效(true|'y')切換器鈕扣區顏色字串，預設'grey'
 * @vue-prop {String} [uncheckedSwitchCircleColor='#8ad'] 輸入可編輯時，無效(false|'n')切換器鈕扣區顏色字串，預設'#8ad'
 * @vue-prop {String} [uncheckedSwitchCircleColorHover='#9bd'] 輸入滑鼠移入時可編輯時，無效(false|'n')切換器鈕扣區顏色字串，預設'#9bd'
 * @vue-prop {String} [uncheckedSwitchCircleColorDisabled='#bbb'] 輸入不可編輯時，無效(false|'n')切換器鈕扣區顏色字串，預設'#bbb'
 * @vue-prop {String} [checkedSwitchBarColor='#74a4d9'] 輸入可編輯時，有效(true|'y')切換器滑動區顏色字串，預設'#74a4d9'
 * @vue-prop {String} [checkedSwitchBarColorHover='#8bb3df'] 輸入滑鼠移入時可編輯時，有效(true|'y')切換器滑動區顏色字串，預設'#8bb3df'
 * @@vue-prop {String} [checkedSwitchBarColorDisabled='grey'] 輸入不可編輯時，有效(true|'y')切換器滑動區顏色字串，預設'grey'
 * @vue-prop {String} [uncheckedSwitchBarColor='#8ad'] 輸入可編輯時，無效(false|'n')切換器滑動區顏色字串，預設'#8ad'
 * @vue-prop {String} [uncheckedSwitchBarColorHover='#9bd'] 輸入滑鼠移入時可編輯時，無效(false|'n')切換器滑動區顏色字串，預設'#9bd'
 * @vue-prop {String} [uncheckedSwitchBarColorDisabled='#bbb'] 輸入不可編輯時，無效(false|'n')切換器滑動區顏色字串，預設'#bbb'
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
        checkedSwitchCircleColor: {
            type: String,
            default: 'blue darken-3',
        },
        checkedSwitchCircleColorHover: {
            type: String,
            default: 'blue darken-2',
        },
        checkedSwitchCircleColorDisabled: {
            type: String,
            default: 'grey',
        },
        uncheckedSwitchCircleColor: {
            type: String,
            default: '#fafafa',
        },
        uncheckedSwitchCircleColorHover: {
            type: String,
            default: '#fff',
        },
        uncheckedSwitchCircleColorDisabled: {
            type: String,
            default: '#bbb',
        },
        checkedSwitchBarColor: {
            type: String,
            default: '#74a4d9',
        },
        checkedSwitchBarColorHover: {
            type: String,
            default: '#8bb3df',
        },
        checkedSwitchBarColorDisabled: {
            type: String,
            default: '#ececec',
        },
        uncheckedSwitchBarColor: {
            type: String,
            default: '#c5c5c5',
        },
        uncheckedSwitchBarColorHover: {
            type: String,
            default: '#ccc',
        },
        uncheckedSwitchBarColorDisabled: {
            type: String,
            default: '#ececec',
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

        heightToogle: function() {
            let vo = this
            return Math.max(vo.heightCir, vo.heightBar)
        },

        effTextColor: function() {
            let vo = this
            return convertColor(vo.textColor)
        },

        effTextColorHover: function() {
            let vo = this
            return convertColor(vo.textColorHover)
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

        effCheckedSwitchCircleColor: function() {
            let vo = this
            return convertColor(vo.checkedSwitchCircleColor)
        },

        effCheckedSwitchCircleColorHover: function() {
            let vo = this
            return convertColor(vo.checkedSwitchCircleColorHover)
        },

        effCheckedSwitchCircleColorDisabled: function() {
            let vo = this
            return convertColor(vo.checkedSwitchCircleColorDisabled)
        },

        useCheckedSwitchCircleColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effCheckedSwitchCircleColorDisabled
            }
            return vo.hoverTrans ? vo.effCheckedSwitchCircleColorHover : vo.effCheckedSwitchCircleColor
        },

        effUncheckedSwitchCircleColor: function() {
            let vo = this
            return convertColor(vo.uncheckedSwitchCircleColor)
        },

        effUncheckedSwitchCircleColorHover: function() {
            let vo = this
            return convertColor(vo.uncheckedSwitchCircleColorHover)
        },

        effUncheckedSwitchCircleColorDisabled: function() {
            let vo = this
            return convertColor(vo.uncheckedSwitchCircleColorDisabled)
        },

        useUncheckedSwitchCircleColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effUncheckedSwitchCircleColorDisabled
            }
            return vo.hoverTrans ? vo.effUncheckedSwitchCircleColorHover : vo.effUncheckedSwitchCircleColor
        },

        useSwitchCircleColor: function() {
            let vo = this
            return vo.b ? vo.useCheckedSwitchCircleColor : vo.useUncheckedSwitchCircleColor
        },

        effCheckedSwitchBarColor: function() {
            let vo = this
            return convertColor(vo.checkedSwitchBarColor)
        },

        effCheckedSwitchBarColorHover: function() {
            let vo = this
            return convertColor(vo.checkedSwitchBarColorHover)
        },

        effCheckedSwitchBarColorDisabled: function() {
            let vo = this
            return convertColor(vo.checkedSwitchBarColorDisabled)
        },

        useCheckedSwitchBarColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effCheckedSwitchBarColorDisabled
            }
            return vo.hoverTrans ? vo.effCheckedSwitchBarColorHover : vo.effCheckedSwitchBarColor
        },

        effUncheckedSwitchBarColor: function() {
            let vo = this
            return convertColor(vo.uncheckedSwitchBarColor)
        },

        effUncheckedSwitchBarColorHover: function() {
            let vo = this
            return convertColor(vo.uncheckedSwitchBarColorHover)
        },

        effUncheckedSwitchBarColorDisabled: function() {
            let vo = this
            return convertColor(vo.uncheckedSwitchBarColorDisabled)
        },

        useUncheckedSwitchBarColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effUncheckedSwitchBarColorDisabled
            }
            return vo.hoverTrans ? vo.effUncheckedSwitchBarColorHover : vo.effUncheckedSwitchBarColor
        },

        useSwitchBarColor: function() {
            let vo = this
            return vo.b ? vo.useCheckedSwitchBarColor : vo.useUncheckedSwitchBarColor
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
