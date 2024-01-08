<template>
    <div
        :style="`display:inline-block; width:${width}px; height:${height}px;`"
        :changeValue="changeValue"
    >

        <div style="display:flex;">
            <WColorPickHexagonGray
                :size="size"
                :space="spaceGray"
                :value="colorPure"
                @input="(v)=>{colorPure=v;updateColor(colorPure,colorAlpha,'hexagonGray')}"
            ></WColorPickHexagonGray>
        </div>

        <div :style="`height:${spaceAlpha}px;`"></div>

        <div style="display:flex;">
            <WColorPickAlpha
                :width="alphaWidth"
                :height="alphaHeight"
                :cursorSize="7"
                :value="colorAlpha"
                :color="colorPure"
                @input="(v)=>{colorAlpha=v;updateColor(colorPure,colorAlpha,'alpha')}"
            ></WColorPickAlpha>
        </div>

    </div>
</template>

<script>
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'
import WColorPickHexagonGray from './WColorPickHexagonGray.vue'
import WColorPickAlpha from './WColorPickAlpha.vue'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {Number} [size=200] 輸入尺寸數字，代表組件基礎寬度與將自動計算高度，單位px，預設200
 * @vue-prop {Number} [spaceGray=5] 輸入六角型選色區與灰階選色區之間距數字，單位px，預設5
 * @vue-prop {Number} [spaceAlpha=8] 輸入灰階選色區與選透明度區之間距數字，單位px，預設8
 */
export default {
    components: {
        WColorPickHexagonGray,
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
        spaceGray: {
            type: Number,
            default: 5,
        },
        spaceAlpha: {
            type: Number,
            default: 8,
        },
    },
    data: function() {
        return {

            colorPure: '#fff',
            colorAlpha: 1,

            pick: null,

        }
    },
    computed: {

        changeValue: function() {
            let vo = this

            let color = convertColor(vo.value)

            let t = oc.toRgba(color)
            // console.log('t', t)

            let c = {
                r: t.r,
                g: t.g,
                b: t.b,
            }
            let colorPure = oc.toRgbString(c)
            // console.log('colorPure', colorPure)

            //colorAlpha
            let colorAlpha = t.a
            // console.log('colorAlpha', colorAlpha)

            //save
            vo.colorPure = colorPure
            vo.colorAlpha = colorAlpha

            return ''
        },

        hexagonGrayWidth: function() {
            let vo = this
            return vo.size
        },

        hexagonGrayHeight: function() {
            let vo = this
            return vo.hexagonGrayWidth + vo.spaceGray
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
            return vo.hexagonGrayHeight + vo.spaceAlpha + vo.alphaHeight
        },

    },
    methods: {

        updateColor: function(c, a, from) {
            // console.log('updateColor', c, a, from)
            let vo = this
            let t = oc.toRgba(c)
            t.a = a
            let color = oc.toRgbaString(t)
            // console.log('color', color)
            vo.$emit('input', color)
        },

    },
}
</script>

<style scoped>
</style>
