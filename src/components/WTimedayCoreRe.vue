<template>
    <div
        style=""
        :changeParam="changeParam"
    >

        <div :style="`display:flex; align-items:center;`">

            <!-- 年 -->
            <div :style="``">

            </div>

            <!-- 月 -->
            <div :style="``">
                <WTextSuggestCore
                    :mode="'select'"
                    :textFontSize="textFontSize"
                    :textColor="textColor"
                    :placementDist="placementDist"
                    :minWidth="70"
                    :expansionIcon="expansionIcon"
                    :expansionIconSize="expansionIconSize"
                    :expansionIconColor="expansionIconColor"
                    :editable="editable"
                    :items="itemsMonth"
                    :value="valueMonth"
                    @input="modifyMonth"
                ></WTextSuggestCore>
            </div>

        </div>

        <div :style="``">

        </div>

        <v-menu
            offset-y
            :nudge-bottom="placementDist"
            :close-on-content-click="false"
            :disabled="!editable"
            v-model="show"
        >

            <template v-slot:activator="{ on }">
                <div
                    TimedayCore="day"
                    :style="`_width:83px; color:${useTextColor}; ${useTextFontSize}`"
                    v-on="on"
                >
                    {{valueDisplay}}
                </div>
            </template>

            <v-date-picker
                no-title
                locale="zh-tw"
                :prev-icon="mdiChevronLeft"
                :next-icon="mdiChevronRight"
                :color="pickColor"
                :day-format="getDay"
                :value="valueDay"
                @input="modifyDay"
            ></v-date-picker>

        </v-menu>

    </div>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import split from 'lodash-es/split.js'
import get from 'lodash-es/get.js'
import map from 'lodash-es/map.js'
import range from 'lodash-es/range.js'
import isday from 'wsemi/src/isday.mjs'
import cint from 'wsemi/src/cint.mjs'
import replace from 'wsemi/src/replace.mjs'
import convertColor from '../js/convertColor.mjs'
import WTextSuggestCore from './WTextSuggestCore.vue'


let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


function dayStart(month, year) {
    let tmpDate = new Date(year, month, 1)
    return (tmpDate.getDay())
}


function daysMonth(month, year) {
    let tmp = year % 4
    if (tmp === 0) {
        return (month_olympic[month])
    }
    else {
        return (month_normal[month])
    }
}


/**
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [placementDist=7] 輸入日期彈窗y向下平移數字，預設7
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        itemsYears: {
            type: Array,
            default: () => {
                let d = new Date()
                let year = d.getFullYear()
                let years = map(range(-50, 50), (i) => {
                    return year + i
                })
                console.log('years', years)
                return years
            },
        },
        itemsMonths: {
            type: Array,
            default: () => [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
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
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            // mdiChevronLeft,
            // mdiChevronRight,

            // show: false,

            valueDay: '',

            view_year: '',
            view_month: '',
            view_day: '',

        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            // //value for trigger
            // let value = vo.value

            // //check
            // if (isday(value)) {
            //     vo.valueDay = value
            // }
            // else {
            //     vo.valueDay = ''
            // }

            return ''
        },

        // useTextFontSize: function() {
        //     let vo = this
        //     let s = vo.textFontSize
        //     s = replace(s, ';', '')
        //     return `font-size:${s};`
        // },

        // useTextColor: function() {
        //     //console.log('computed useTextColor')

        //     let vo = this

        //     return convertColor(vo.textColor)
        // },

    },
    methods: {

        // getDay: function (d) {
        //     //console.log('methods getDay', d)

        //     let s = split(d, '-')
        //     s = get(s, '[2]')
        //     s = cint(s)
        //     return s
        // },

        // modifyDay: function (d) {
        //     //console.log('methods modifyDay', d)

        //     let vo = this

        //     //valueDay
        //     let valueDay = d

        //     //check
        //     let value = ''
        //     if (isday(valueDay)) {
        //         value = valueDay
        //     }

        //     //hide
        //     vo.show = false

        //     //$nextTick
        //     vo.$nextTick(() => {

        //         //emit
        //         vo.$emit('input', value)

        //     })

        // },

    },
}
</script>

<style scoped>
</style>
