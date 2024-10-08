<template>
    <div style="">
        <!-- 盡量不要讓display:flex暴露至外層 -->
        <div style="display:flex; align-items:center;">

            <WTimeminuteCore
                TimeminuteRangeCore="dayminuFrom"
                :hourMin="hourMin"
                :hourMax="hourMax"
                :minuteInter="minuteInter"
                :minutesCustom="minutesCustom"
                :textFontSize="textFontSize"
                :textColor="textColor"
                :pickColor="pickColor"
                :expansionIcon="expansionIcon"
                :expansionIconSize="expansionIconSize"
                :expansionIconColor="expansionIconColor"
                :placementDistX="placementDistX"
                :placementDistY="placementDistY"
                :textEmpty="textEmpty"
                :editable="editable"
                :value="minuteStart"
                @update:focused="(v)=>{focused_start=v;changeFocused()}"
                @input="(v)=>{$emit('update:minuteStart', v)}"
            ></WTimeminuteCore>

            <div :style="`padding-left:9px; padding-right:11px; color:${useTextColor}; ${useTextFontSize}`">
                {{between}}
            </div>

            <WTimeminuteCore
                TimeminuteRangeCore="dayminuTo"
                :hourMin="hourMin"
                :hourMax="hourMax"
                :minuteInter="minuteInter"
                :minutesCustom="minutesCustom"
                :textFontSize="textFontSize"
                :textColor="textColor"
                :pickColor="pickColor"
                :expansionIcon="expansionIcon"
                :expansionIconSize="expansionIconSize"
                :expansionIconColor="expansionIconColor"
                :placementDistX="placementDistX"
                :placementDistY="placementDistY"
                :textEmpty="textEmpty"
                :editable="editable"
                :value="minuteEnd"
                @update:focused="(v)=>{focused_end=v;changeFocused()}"
                @input="(v)=>{$emit('update:minuteEnd', v)}"
            ></WTimeminuteCore>

        </div>
    </div>
</template>

<script>
import { mdiPlay } from '@mdi/js'
import replace from 'wsemi/src/replace.mjs'
import convertColor from '../js/convertColor.mjs'
import WTimeminuteCore from './WTimeminuteCore.vue'


/**
 * @vue-prop {String} [minuteStart=''] 輸入時間字串，預設''
 * @vue-prop {String} [minuteEnd=''] 輸入時間字串，預設''
 * @vue-prop {String} [between='to'] 輸入兩時間連接文字字串，預設'to'
 * @vue-prop {Number} [hourMin=8] 輸入可選最小小時，單位為小時，預設8
 * @vue-prop {Number} [hourMax=8] 輸入可選最大小時，單位為小時，預設8
 * @vue-prop {Number} [minuteInter=15] 輸入每小時的切分區間，單位為分鐘，預設15
 * @vue-prop {Array} [minutesCustom=null] 輸入自訂可選的時分點字串陣列，單位為時分(00:00)，若給予，則上述hourMin,hourMax,minuteInter自動失效，預設null
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {String} [expansionIcon=mdiPlay] 輸入顯隱圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設使用mdi的圖標(mdiPlay)
 * @vue-prop {Number} [expansionIconSize=18] 輸入顯隱圖標尺寸數字，單位為px，預設18
 * @vue-prop {String} [expansionIconColor='grey'] 輸入顯隱圖標顏色字串，預設'grey'
 * @vue-prop {Number} [placementDistX=0] 輸入日期彈窗之水平向右平移數字，單位為px，預設0
 * @vue-prop {Number} [placementDistY=7] 輸入日期彈窗之垂直向下平移數字，單位為px，預設7
 * @vue-prop {String} [textEmpty='Select a date'] 輸入尚未輸入日期之顯示文字字串，預設'Select a date'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    components: {
        WTimeminuteCore,
    },
    props: {
        minuteStart: {
            type: String,
            default: '',
        },
        minuteEnd: {
            type: String,
            default: '',
        },
        between: {
            type: String,
            default: 'to'
        },
        hourMin: {
            type: Number,
            default: 8,
        },
        hourMax: {
            type: Number,
            default: 18,
        },
        minuteInter: {
            type: Number,
            default: 15,
        },
        minutesCustom: {
            type: Array,
            default: null,
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        pickColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        expansionIcon: {
            type: String,
            default: mdiPlay,
        },
        expansionIconSize: {
            type: Number,
            default: 18,
        },
        expansionIconColor: {
            type: String,
            default: 'grey',
        },
        placementDistX: {
            type: Number,
            default: 0,
        },
        placementDistY: {
            type: Number,
            default: 7,
        },
        textEmpty: {
            type: String,
            default: 'Select a date',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            focused_start: false,
            focused_end: false,
        }
    },
    computed: {

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return convertColor(vo.textColor)
        },

    },
    methods: {

        changeFocused: function() {
            //console.log('methods changeFocused')

            let vo = this

            //focused
            let focused = vo.focused_start || vo.focused_end

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', focused)

            })

        },

    },
}
</script>

<style scoped>
</style>
