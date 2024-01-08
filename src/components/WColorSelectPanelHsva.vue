<template>
    <div
        :style="`display:inline-block; width:${width}px; height:${height}px;`"
        :changeParams="changeParams"
    >

        <div style="display:flex;">
            <WColorPickHsv
                :width="hsvWidth"
                :height="hsvHeight"
                :cursorSize="14"
                :color="colorHue"
                v-model="colorPure"
                @input="(v)=>{updateColor(v,'hsv')}"
            ></WColorPickHsv>
        </div>

        <div :style="`height:${space}px;`"></div>

        <div style="display:flex;">
            <WColorPickHue
                :width="hueWidth"
                :height="hueHeight"
                :cursorSize="7"
                v-model="colorHue"
                @input="(v)=>{updateColor(v,'hue')}"
            ></WColorPickHue>
        </div>

        <div :style="`height:${space}px;`"></div>

        <div style="display:flex;">
            <WColorPickAlpha
                :width="alphaWidth"
                :height="alphaHeight"
                :colorNum="10"
                :color="colorPure"
                v-model="colorAlpha"
                @input="(v)=>{updateColor(v,'alpha')}"
            ></WColorPickAlpha>
        </div>

    </div>
</template>

<script>
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'
import WColorPickHsv from './WColorPickHsv.vue'
import WColorPickHue from './WColorPickHue.vue'
import WColorPickAlpha from './WColorPickAlpha.vue'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {Number} [size=200] 輸入尺寸數字，代表組件基礎寬度與將自動計算高度，單位px，預設200
 * @vue-prop {Number} [space=10] 輸入HSV選色區、HUE選色區、選透明度區之間距數字，單位px，預設10
 */
export default {
    components: {
        WColorPickHsv,
        WColorPickHue,
        WColorPickAlpha,
    },
    props: {
        value: {
            type: String,
            default: '#FFFFFF',
        },
        size: {
            type: Number,
            default: 200,
        },
        space: {
            type: Number,
            default: 10,
        },
    },
    data: function() {
        return {

            lock: false,

            valueTrans: null,

            colorHue: '#f00',
            colorPure: '#fff',
            colorAlpha: 1,

        }
    },
    computed: {

        changeParams: function() {
            let vo = this

            //check, value一樣就不處理
            if (vo.value === vo.valueTrans) {
                return
            }

            //check
            if (vo.lock) {
                return
            }

            //lock, 因變更colorHue會觸發WColorPickHsv的emit, 此會導致反算value, 又因rgb與hsv有反算誤差, 故會導致變更value時因誤差又馬上須更新value問題, 此處用上鎖機制避免同樣value反算
            vo.lock = true

            // console.log('vo.value', vo.value)
            vo.valueTrans = convertColor(vo.value)
            // console.log('vo.valueTrans', vo.valueTrans)

            let t = oc.toHsva(vo.value)
            // console.log('t', t)

            let colorHue = '#f00'
            if (true) {
                let tt = {
                    h: t.h,
                    s: 1,
                    v: 1,
                }
                colorHue = oc.toHexString(tt)
            }
            // console.log('colorHue', colorHue)

            let colorPure = '#fff'
            if (true) {
                let tt = {
                    h: t.h,
                    s: t.s,
                    v: t.v,
                }
                colorPure = oc.toHexString(tt)
            }
            // console.log('colorPure', colorPure)

            let colorAlpha = 1
            if (true) {
                colorAlpha = t.a
            }
            // console.log('colorAlpha', colorAlpha)

            //save
            vo.colorHue = colorHue
            vo.colorPure = colorPure
            vo.colorAlpha = colorAlpha

            return ''
        },

        hsvWidth: function() {
            let vo = this
            return vo.size
        },

        hsvHeight: function() {
            let vo = this
            return vo.hsvWidth
        },

        hueWidth: function() {
            let vo = this
            return vo.size
        },

        hueHeight: function() {
            let vo = this
            return vo.hueWidth / 10
        },

        alphaWidth: function() {
            let vo = this
            return vo.size
        },

        alphaHeight: function() {
            let vo = this
            return vo.alphaWidth / 10
        },

        width: function() {
            let vo = this
            return vo.size
        },

        height: function() {
            let vo = this
            return vo.hsvHeight + vo.space + vo.hueHeight + vo.space + vo.alphaHeight
        },

    },
    methods: {

        updateColor: function(v, from) {
            // console.log('updateColor', v, from)

            let vo = this

            //unlock
            if (vo.lock && from === 'hsv') {
                vo.lock = false
                return
            }

            let t = oc.toHsva(vo.colorHue)
            // console.log('t', vo.colorHue, t)

            let p = oc.toHsva(vo.colorPure)
            // console.log('p', vo.colorPure, p)

            let c = {
                h: t.h,
                s: p.s,
                v: p.v,
                a: vo.colorAlpha,
            }
            // console.log('c1', c)
            c = oc.toRgbaString(c)
            // console.log('c2', c)

            //save
            vo.valueTrans = c

            //emit
            vo.$emit('input', c)

        },

    },
}
</script>

<style scoped>
</style>
