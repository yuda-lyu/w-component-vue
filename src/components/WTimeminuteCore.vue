<template>
    <div
        style=""
        :changeParam="changeParam"
    >
        <!-- 盡量不要讓display:flex暴露至外層 -->
        <div style="display:flex; align-items:center;">

            <WTimedayCore
                TimeminuteCore="day"
                style="margin-right:5px;"
                :textFontSize="textFontSize"
                :textColor="textColor"
                :pickColor="pickColor"
                :placementDist="placementDist"
                :editable="editable"
                :value="value_day"
                @update:focused="(v)=>{focused_day=v;changeFocused()}"
                @input="ch_day"
            ></WTimedayCore>

            <div style="margin-right:-3px;">
                <WTextSuggestCore
                    TimeminuteCore="minute"
                    :mode="'select'"
                    :textFontSize="textFontSize"
                    :textColor="textColor"
                    :placementDist="placementDist"
                    :minWidth="70"
                    :expansionIcon="expansionIcon"
                    :expansionIconSize="expansionIconSize"
                    :expansionIconColor="expansionIconColor"
                    :editable="editable"
                    :items="getUseMinutes"
                    :value="value_time"
                    @update:focused="(v)=>{focused_time=v;changeFocused()}"
                    @input="ch_time"
                ></WTextSuggestCore>
            </div>

        </div>
    </div>
</template>

<script>
import { mdiPlay } from '@mdi/js'
import split from 'lodash-es/split.js'
import get from 'lodash-es/get.js'
import map from 'lodash-es/map.js'
import range from 'lodash-es/range.js'
import flattenDeep from 'lodash-es/flattenDeep.js'
import filter from 'lodash-es/filter.js'
import strleft from 'wsemi/src/strleft.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import istime from 'wsemi/src/istime.mjs'
import ispint from 'wsemi/src/ispint.mjs'
import WTimedayCore from './WTimedayCore.vue'
import WTextSuggestCore from './WTextSuggestCore.vue'


/**
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
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
 * @vue-prop {Number} [placementDist=7] 輸入日期彈窗y向下平移數字，預設7
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WTimedayCore,
        WTextSuggestCore
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
        placementDist: {
            type: Number,
            default: 7,
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
            focused_day: false,
            focused_time: false,
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

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('input', value)

            })

        },

        changeFocused: function() {
            //console.log('methods changeFocused')

            let vo = this

            //focused
            let focused = vo.focused_day || vo.focused_time

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
::v-deep div.v-input__icon {
    transform: translateX(-5px);
}
</style>
