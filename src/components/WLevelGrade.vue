<template>
    <div
        :style="``"
    >

        <table style="border-collapse:collapse;">
            <tbody>
                <tr
                    :key="'klevel-'+klevel"
                    v-for="(level,klevel) in levels"
                >

                    <td :style="`width:${arrowSize}px; box-sizing:border-box;`">
                        <div
                            :style="`transform:rotate(-90deg);`"
                            v-if="indValue===klevel"
                        >
                            <WIcon
                                :icon="mdiTriangleDown"
                                :color="arrowColor"
                                :colorHover="arrowColor"
                                :size="arrowSize"
                            ></WIcon>
                        </div>
                    </td>

                    <!-- 各儲存格寬高皆為含瀏覽器預設td padding之總尺寸, 故須box-sizing:border-box -->
                    <td :style="`background:${getColor(get(level,keyColor,'transparent'))}; width:${gradeSize}px; height:${gradeSize}px; box-sizing:border-box;`"></td>

                    <td
                        :style="`padding-left:${spaceForGrade}px; text-align:right; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px; box-sizing:border-box;`"
                    >
                        <slot
                            name="low"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{getTick(get(level,keyLow,''))}}
                        </slot>
                    </td>

                    <td
                        :style="`padding:0px 2px; text-align:center; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px; box-sizing:border-box;`"
                    >
                        <slot
                            name="delimiter"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{get(level,keyDelimiter,'')}}
                        </slot>
                    </td>

                    <td
                        :style="`text-align:left; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px; box-sizing:border-box;`"
                    >
                        <slot
                            name="up"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{getTick(get(level,keyUp,''))}}
                        </slot>
                    </td>

                    <td
                        :style="`padding-left:${spaceForText}px; text-align:left; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px; box-sizing:border-box;`"
                    >
                        <slot
                            name="text"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{get(level,keyText,'')}}
                        </slot>
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { mdiTriangleDown } from '@mdi/js'
import get from 'lodash-es/get.js'
import each from 'lodash-es/each.js'
import replace from 'wsemi/src/replace.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import isp0int from 'wsemi/src/isp0int.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import dig from 'wsemi/src/dig.mjs'
import convertColor from '../js/convertColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Array} [levels=[]] 輸入級距的物件陣列，各級距物件之欄位名由keyColor、keyLow、keyUp、keyDelimiter、keyText指定，預設[]
 * @vue-prop {Number} [value=null] 輸入當前數值，會於所在級距(keyLow<=value<=keyUp)之左側顯示箭頭，預設null
 * @vue-prop {String} [keyColor='color'] 輸入級距物件中代表色塊顏色之欄位字串，預設'color'
 * @vue-prop {String} [keyLow='low'] 輸入級距物件中代表級距下限之欄位字串，預設'low'
 * @vue-prop {String} [keyUp='up'] 輸入級距物件中代表級距上限之欄位字串，預設'up'
 * @vue-prop {String} [keyDelimiter='delimiter'] 輸入級距物件中代表上下限間分隔文字之欄位字串，預設'delimiter'
 * @vue-prop {String} [keyText='text'] 輸入級距物件中代表說明文字之欄位字串，預設'text'
 * @vue-prop {Number} [spaceForGrade=5] 輸入色塊與級距數值之間距數字，單位為px，預設5
 * @vue-prop {Number} [spaceForText=5] 輸入級距數值與說明文字之間距數字，單位為px，預設5
 * @vue-prop {Number} [tickDig=null] 輸入級距上下限數值之顯示有效位數數字，須為正整數，未給予則不處理，預設null
 * @vue-prop {Number} [gradeSize=18] 輸入色塊尺寸數字，亦為各級距列之高度，單位為px，預設18
 * @vue-prop {String} [gradeTextFontSize='0.75rem'] 輸入級距數值與說明文字之字型大小字串，預設'0.75rem'
 * @vue-prop {String} [gradeTextColor='#444'] 輸入級距數值與說明文字之顏色字串，預設'#444'
 * @vue-prop {String} [arrowColor='#666'] 輸入當前數值所在級距之箭頭顏色字串，預設'#666'
 * @vue-prop {Number} [arrowSize=10] 輸入當前數值所在級距之箭頭尺寸數字，單位為px，預設10
 * @vue-slot {Object} low 級距下限之渲染slot，slot props為{ klevel, level }
 * @vue-slot {Object} up 級距上限之渲染slot，slot props為{ klevel, level }
 * @vue-slot {Object} delimiter 上下限間分隔文字之渲染slot，slot props為{ klevel, level }
 * @vue-slot {Object} text 說明文字之渲染slot，slot props為{ klevel, level }
 */
export default {
    components: {
        WIcon,
    },
    props: {
        levels: {
            type: Array,
            default: () => [],
        },
        value: {
            type: Number,
            default: null,
        },
        keyColor: {
            type: String,
            default: 'color',
        },
        keyLow: {
            type: String,
            default: 'low',
        },
        keyUp: {
            type: String,
            default: 'up',
        },
        keyDelimiter: {
            type: String,
            default: 'delimiter',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        spaceForGrade: {
            type: Number,
            default: 5,
        },
        spaceForText: {
            type: Number,
            default: 5,
        },
        tickDig: {
            type: Number,
            default: null,
        },
        gradeSize: {
            type: Number,
            default: 18,
        },
        gradeTextFontSize: {
            type: String,
            default: '0.75rem',
        },
        gradeTextColor: {
            type: String,
            default: '#444',
        },
        arrowColor: {
            type: String,
            default: '#666',
        },
        arrowSize: {
            type: Number,
            default: 10,
        },
    },
    data: function() {
        return {
            get,
            mdiTriangleDown,
        }
    },
    computed: {

        useGradeTextFontSize: function() {
            let vo = this
            let s = vo.gradeTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useGradeTextColor: function() {
            let vo = this
            return convertColor(vo.gradeTextColor)
        },

        indValue: function() {
            let vo = this

            //ind
            let ind = -1
            each(vo.levels, (v, k) => {
                let low = cdbl(get(v, vo.keyLow, 0))
                let up = cdbl(get(v, vo.keyUp, 0))
                if (low <= vo.value && vo.value <= up) {
                    ind = k
                    return false //跳出
                }
            })

            return ind
        },

    },
    methods: {

        getColor: function(c) {
            return convertColor(c)
        },

        getTick: function(v) {
            let vo = this
            if (isnum(v)) {
                v = cdbl(v)
            }
            if (isp0int(vo.tickDig)) {
                v = dig(v, vo.tickDig)
            }
            return v
        },

    },
}
</script>

<style scoped>
</style>
