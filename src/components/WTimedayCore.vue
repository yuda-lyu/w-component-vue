<template>
    <div
        style=""
        :changeParam="changeParam"
    >

        <v-menu
            offset-y
            :nudge-bottom="placementDistY"
            :close-on-content-click="false"
            :disabled="!editable"
            v-model="show"
        >

            <template v-slot:activator="{ on }">
                <div
                    TimedayCore="day"
                    :style="`color:${useTextColor}; ${useTextFontSize}`"
                    v-on="on"
                >
                    <template v-if="!emptyDay">
                        {{valueDay}}
                    </template>
                    <template v-else>
                        {{textEmpty}}
                    </template>
                </div>
            </template>

            <v-date-picker
                :style="`min-width:83px;`"
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
import isday from 'wsemi/src/isday.mjs'
import cint from 'wsemi/src/cint.mjs'
import replace from 'wsemi/src/replace.mjs'
import now2str from 'wsemi/src/now2str.mjs'
import strleft from 'wsemi/src/strleft.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [placementDistX=0] 輸入日期彈窗之水平向右平移數字，單位為px，預設0
 * @vue-prop {Number} [placementDistY=7] 輸入日期彈窗之垂直向下平移數字，單位為px，預設7
 * @vue-prop {String} [textEmpty='Select a date'] 輸入尚未輸入日期之顯示文字字串，預設'Select a date'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    props: {
        value: {
            type: String,
            default: '',
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
            mdiChevronLeft,
            mdiChevronRight,

            show: false,
            emptyDay: false,
            valueDay: '',
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
                vo.emptyDay = false
                vo.valueDay = value
            }
            else {
                vo.emptyDay = true
                vo.valueDay = strleft(now2str(), 10) //預設給今日避免vuetify組件消失無法點擊
            }

            return ''
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

            return convertColor(vo.textColor)
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

        modifyDay: function (d) {
            //console.log('methods modifyDay', d)

            let vo = this

            //valueDay
            let valueDay = d

            //check
            let value = ''
            if (isday(valueDay)) {
                value = valueDay
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
