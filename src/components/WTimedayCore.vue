<template>
    <div style="display:inline-block; height:28px; min-height:28px; line-height:27px;" forceFix="line-height:27px;" :ch_param="ch_param">

        <v-menu
            offset-y
            full-width
            :disabled="!editable"
            v-model="show"
        >

            <template v-slot:activator="{ on }">
                <div
                    TimedayCore="day"
                    style="display:inline-block; width:90px;"
                    v-on="on"
                >
                    {{getShowTime}}
                </div>
            </template>

            <v-date-picker
                no-title
                locale="zh-tw"
                :color="pickColor"
                :day-format="getDay"
                :value="value_day"
                @input="ch_day"
            ></v-date-picker>

        </v-menu>

    </div>
</template>

<script>
//顯示時間的div設定min-height, 是為了當無有效資料時, div因內無文字會高度為0, 故無法點擊
import split from 'lodash/split'
import get from 'lodash/get'
import isday from 'wsemi/src/isday.mjs'
import cint from 'wsemi/src/cint.mjs'

/**
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    props: {
        value: {
            type: String,
            default: '',
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
            show: false,
            value_day: '',
        }
    },
    mounted: function() {
    },
    computed: {

        ch_param: function () {
            //console.log('computed ch_param')

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

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('input', value)

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
