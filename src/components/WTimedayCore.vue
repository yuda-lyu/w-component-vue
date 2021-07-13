<template>
    <!-- 時間組件因v-date-picker有點擊區域的限制, 故得使用display:inline-block -->
    <div
        style="display:inline-block;"
        :changeParam="changeParam"
    >

        <v-menu
            offset-y
            :close-on-content-click="false"
            :disabled="!editable"
            v-model="show"
        >

            <template v-slot:activator="{ on }">
                <div
                    TimedayCore="day"
                    :style="`display:inline-block; width:83px; color:${useTextColor}; ${useTextFontSize} height:${height}px; line-height:${height}px; vertical-align:middle;`"
                    v-on="on"
                >
                    {{getShowTime}}
                </div>
            </template>

            <v-date-picker
                no-title
                locale="zh-tw"
                :prev-icon="mdiChevronLeft"
                :next-icon="mdiChevronRight"
                :color="pickColor"
                :day-format="getDay"
                :value="value_day"
                @input="ch_day"
            ></v-date-picker>

        </v-menu>

    </div>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import split from 'lodash/split'
import get from 'lodash/get'
import isday from 'wsemi/src/isday.mjs'
import cint from 'wsemi/src/cint.mjs'
import replace from 'wsemi/src/replace.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {String} [textFontSize='0.9rem'] 輸入文字大小字串，預設'0.9rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [height=28] 輸入高度數字，單位為px，預設28
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        textFontSize: {
            type: String,
            default: '0.9rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        pickColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        height: {
            type: Number,
            default: 28,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mdiChevronLeft,
            mdiChevronRight,

            show: false,
            value_day: '',
        }
    },
    mounted: function() {
    },
    watch: {

        show: function(value) {
            //console.log('watch show')

            let vo = this

            //emit
            vo.$emit('update:focused', value)

        },

    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //value for trigger
            let value = vo.value

            //check
            if (isday(value)) {
                vo.value_day = value
            }
            else {
                vo.value_day = ''
            }

            return ''
        },

        getShowTime: function () {
            //console.log('computed getShowTime')

            let vo = this
            return vo.value_day
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return color2hex(vo.textColor)
        },

    },
    methods: {

        getDay: function (d) {
            //console.log('methods getDay', d)

            let s = split(d, '-')
            s = get(s, '[2]')
            s = cint(s)
            return s
        },

        ch_day: function (d) {
            //console.log('methods ch_day', d)

            let vo = this

            //value_day
            let value_day = d

            //check
            let value = ''
            if (isday(value_day)) {
                value = value_day
            }

            //hide
            vo.show = false

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('input', value)

            })

        },

    },
}
</script>

<style scoped>
</style>
