<template>
    <div style="">
        <!-- 盡量不要讓display:flex暴露至外層 -->
        <div style="display:flex; align-items:center;">

            <WTimedayCore
                TimedayRangeCore="dayFrom"
                :textFontSize="textFontSize"
                :textColor="textColor"
                :pickColor="pickColor"
                :placementDistX="placementDistX"
                :placementDistY="placementDistY"
                :textEmpty="textEmpty"
                :editable="editable"
                :value="dayStart"
                @update:focused="(v)=>{focused_start=v;changeFocused()}"
                @input="(v)=>{$emit('update:dayStart', v)}"
            ></WTimedayCore>

            <div :style="`padding-left:5px; padding-right:8px; color:${useTextColor}; ${useTextFontSize}`">
                {{between}}
            </div>

            <WTimedayCore
                TimedayRangeCore="dayTo"
                :textFontSize="textFontSize"
                :textColor="textColor"
                :pickColor="pickColor"
                :placementDistX="placementDistX"
                :placementDistY="placementDistY"
                :textEmpty="textEmpty"
                :editable="editable"
                :value="dayEnd"
                @update:focused="(v)=>{focused_end=v;changeFocused()}"
                @input="(v)=>{$emit('update:dayEnd', v)}"
            ></WTimedayCore>

        </div>
    </div>
</template>

<script>
import replace from 'wsemi/src/replace.mjs'
import convertColor from '../js/convertColor.mjs'
import WTimedayCore from './WTimedayCore.vue'


/**
 * @vue-prop {String} [dayStart=''] 輸入起始日期字串，預設''
 * @vue-prop {String} [dayEnd=''] 輸入結束日期字串，預設''
 * @vue-prop {String} [between='to'] 輸入兩日期連接文字字串，預設'to'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [placementDistX=0] 輸入日期彈窗之水平向右平移數字，單位為px，預設0
 * @vue-prop {Number} [placementDistY=7] 輸入日期彈窗之垂直向下平移數字，單位為px，預設7
 * @vue-prop {String} [textEmpty='Select a date'] 輸入尚未輸入日期之顯示文字字串，預設'Select a date'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    components: {
        WTimedayCore,
    },
    props: {
        dayStart: {
            type: String,
            default: '',
        },
        dayEnd: {
            type: String,
            default: '',
        },
        between: {
            type: String,
            default: 'to'
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
