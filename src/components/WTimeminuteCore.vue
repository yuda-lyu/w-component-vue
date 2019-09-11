<template>
    <div style="display:flex; align-items:center;" :changeParam="changeParam">

        <w-timeday-core
            style="margin-right:5px;"
            :pickColor="pickColor"
            :editable="editable"
            :value="value_day"
            @input="ch_day"
        ></w-timeday-core>

        <div style="display:inline-block; margin-right:-3px;">
            <w-text-selects-core
                style="width:63px;"
                :editable="editable"
                :items="getUseMinutes"
                :value="value_time"
                @input="ch_time"
            ></w-text-selects-core>
        </div>

    </div>
</template>

<script>
import split from 'lodash/split'
import get from 'lodash/get'
import map from 'lodash/map'
import range from 'lodash/range'
import flattenDeep from 'lodash/flattenDeep'
import filter from 'lodash/filter'
import strleft from 'wsemi/src/strleft.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import istime from 'wsemi/src/istime.mjs'
import ispint from 'wsemi/src/ispint.mjs'
import WTimedayCore from './WTimedayCore.vue'
import WTextSelectsCore from './WTextSelectsCore.vue'

/**
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {Number} [hourMin=8] 輸入可選最小小時，單位為小時，預設8
 * @vue-prop {Number} [hourMax=8] 輸入可選最大小時，單位為小時，預設8
 * @vue-prop {Number} [minuteInter=15] 輸入每小時的切分區間，單位為分鐘，預設15
 * @vue-prop {Array} [minutesCustom=null] 輸入自訂可選的時分點字串陣列，單位為時分(00:00)，若給予，則上述hourMin,hourMax,minuteInter自動失效，預設null
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WTimedayCore,
        WTextSelectsCore
    },
    props: {
        value: {
            type: String,
            default: '',
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
            value_day: '',
            value_time: '',
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //value for trigger
            let value = vo.value

            //s
            let s = split(value, 'T')

            //day
            vo.value_day = get(s, 0)

            //time
            vo.value_time = strleft(get(s, 1), 5)

            return ''
        },

        getUseMinutes: function () {
            //console.log('computed getUseMinutes')

            let vo = this

            if (isarr(vo.minutesCustom)) {
                return vo.minutesCustom
            }

            let b1 = ispint(vo.hourMin) && ispint(vo.hourMax) && vo.hourMin <= vo.hourMax
            let b2 = ispint(vo.minuteInter)
            if (!b1 || !b2) {
                return
            }

            //rs, 各時分
            let rs = map(range(vo.hourMin, vo.hourMax + 1), function(hour) {

                //產生時
                let h = String(hour)
                if (hour < 10) {
                    h = '0' + h
                }

                //產生分
                return map(range(0, 60, vo.minuteInter), function(min) {
                    let m = String(min)
                    if (min < 10) {
                        m = '0' + m
                    }
                    return h + ':' + m
                })
            })
            rs = flattenDeep(rs)

            //hMax
            let hMax = String(vo.hourMax)
            if (vo.hourMax < 10) {
                hMax = '0' + hMax
            }
            hMax = hMax + ':00'
            rs = filter(rs, function(r) {
                return r <= hMax
            })

            return rs
        },

    },
    methods: {

        ch_day: function(v) {
            //console.log('methods ch_day',v)

            let vo = this

            //save
            vo.value_day = v

            //changeContent
            vo.changeContent()

        },

        ch_time: function(v) {
            //console.log('methods ch_time',v)

            let vo = this

            //save
            vo.value_time = v

            //changeContent
            vo.changeContent()

        },

        changeContent: function () {
            //console.log('methods changeContent')

            let vo = this

            //value
            let value = vo.value_day + 'T' + vo.value_time + ':00'

            //check
            if (!istime(value)) {
                return
            }

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
::v-deep div.v-input__icon {
    transform: translateX(-5px);
}
</style>
