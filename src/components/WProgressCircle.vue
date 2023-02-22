<template>
    <div style="display:inline-block;">

        <WTooltip
            :displayType="'line'"
            :isolated="true"
            :borderRadius="tooltipBorderRadius"
            :paddingStyle="tooltipPaddingStyle"
            :textFontSize="tooltipTextFontSize"
            :textColor="tooltipTextColor"
            :backgroundColor="tooltipBackgroundColor"
            :editable="hasTooltop"
        >

            <template v-slot:trigger>

                <div :style="`position:relative; width:${size}px; height:${size}px;`">

                    <svg
                        :style="`transform-origin:radius; transform:rotate(-90deg);`"
                        :width="size"
                        :height="size"
                        :viewPort="`0 0 ${size} ${size}`"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >

                        <circle
                            :r="radius"
                            :cx="sizeHalf"
                            :cy="sizeHalf"
                            fill="transparent"
                            :stroke-dasharray="progSdAll"
                            :stroke-dashoffset="0"
                            :stroke="useTrackColor"
                            :stroke-width="widthOuter"
                        ></circle>

                        <circle
                            style="transition:all 0.6s ease-in-out;"
                            :r="radius"
                            :cx="sizeHalf"
                            :cy="sizeHalf"
                            fill="transparent"
                            :stroke-dasharray="progSdAll"
                            :stroke-dashoffset="progSdNow"
                            :stroke="useColor"
                            :stroke-width="widthInner"
                        ></circle>

                    </svg>

                    <div :style="`position:absolute; top:50%; left:50%; width:${size}px; height:${size}px;`">

                        <div style="text-align:center; transform:translate(-50%,-50%);">
                            <div :style="[valueStyle]">{{value}}%</div>
                            <div :style="[textStyle]">{{text}}</div>
                        </div>

                    </div>

                </div>

            </template>

            <template v-slot:content>
                {{tooltip}}
            </template>

        </WTooltip>

    </div>
</template>

<script>
import isestr from 'wsemi/src/isestr.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WTooltip from './WTooltip.vue'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {Number} [value=0] 輸入數值，介於0~100之間，預設0
 * @vue-prop {String} [color='#FF9100'] 輸入環狀圓條顏色字串，預設'#FF9100'
 * @vue-prop {String} [trackColor='rgba(150,150,150,0.4)'] 輸入環狀軌道顏色字串，預設'rgba(150,150,150,0.4)'
 * @vue-prop {Number} [size=120] 輸入進度條外徑寬度，單位為px，預設120
 * @vue-prop {Number} [width=6] 輸入環狀圓條寬度，單位為px，預設6
 * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''
 * @vue-prop {Number} [tooltipBorderRadius=4] 輸入提示文字框圓角度數字，單位為px，預設4
 * @vue-prop {Object} [tooltipPaddingStyle={v:5,h:8}] 輸入提示文字內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:5,h:8}
 * @vue-prop {String} [tooltipTextFontSize='0.85rem'] 輸入提示文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [tooltipTextColor='black'] 輸入提示文字顏色字串，預設'white'
 * @vue-prop {String} [tooltipBackgroundColor='rgba(60,60,60,0.75)'] 輸入背景顏色字串，預設'rgba(60,60,60,0.75)'
 */
export default {
    components: {
        WTooltip,
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        value: {
            type: Number,
            default: 0,
        },
        color: {
            type: String,
            default: '#FF9100',
        },
        trackColor: {
            type: String,
            default: 'rgba(150,150,150,0.4)',
        },
        size: {
            type: Number,
            default: 120,
        },
        width: {
            type: Number,
            default: 6,
        },
        tooltip: {
            type: String,
            default: '',
        },
        tooltipBorderRadius: {
            type: Number,
            default: 4,
        },
        tooltipPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 5,
                    h: 8,
                }
            },
        },
        tooltipTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        tooltipTextColor: {
            type: String,
            default: 'white',
        },
        tooltipBackgroundColor: {
            type: String,
            default: 'rgba(60,60,60,0.75)',
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {

        radius: function() {
            let vo = this
            return vo.size / 2 - vo.width / 2
        },

        sizeHalf: function() {
            let vo = this
            return vo.size / 2
        },

        widthOuter: function() {
            let vo = this
            return vo.width * 1 //0.99
        },

        widthInner: function() {
            let vo = this
            return vo.width
        },

        progSdAll: function() {
            //console.log('computed progSdAll')

            let vo = this

            //all
            let all = 2 * Math.PI * vo.radius

            return all
        },

        progSdNow: function() {
            //console.log('computed progSdNow')

            let vo = this

            //val
            let val = vo.value
            if (val < 0) {
                val = 0
            }
            if (val > 100) {
                val = 100
            }

            //p
            let p = ((100 - val) / 100) * vo.progSdAll

            return p
        },

        valueStyle: function() {
            //console.log('computed valueStyle')

            let vo = this

            //size
            let fs = vo.size / 5.4
            let ts = (vo.size - 26) / (94) * (0.25) + 0.75
            let s = {
                'color': vo.useColor,
                'font-size': fs + 'pt',
                'transform': `scale(${ts})`
            }

            return s
        },

        textStyle: function() {
            //console.log('computed textStyle')

            let vo = this

            //size
            let fs = vo.size / 12
            let ts = 1.2
            let s = {
                'color': '#666',
                'font-size': fs + 'pt',
                'transform': `scale(${ts})`
            }

            return s
        },

        useColor: function() {
            let vo = this
            return color2hex(vo.color)
        },

        useTrackColor: function() {
            let vo = this
            return color2hex(vo.trackColor)
        },

        hasTooltop: function() {
            let vo = this
            return isestr(vo.tooltip)
        },

    },
    methods: {

        clickBtn: function () {
            //console.log('methods clickBtn')

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click')

            })

        },

    },
}
</script>

<style scoped>
</style>
