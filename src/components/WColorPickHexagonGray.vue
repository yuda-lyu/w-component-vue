<template>
    <div
        :style="`display:inline-block; width:${width}px; height:${height}px;`"
        :changeValue="changeValue"
    >

        <div style="display:flex;">
            <WColorPickHexagon
                :size="hexagonSize"
                :value="valueTrans"
                @input="ckColor"
            ></WColorPickHexagon>
        </div>

        <div :style="`height:${space}px;`"></div>

        <div style="display:flex;">
            <WColorPickStripe
                :width="stripeWidth"
                :height="stripeHeight"
                :colorNum="10"
                :value="valueTrans"
                @input="ckColor"
            ></WColorPickStripe>
        </div>

    </div>
</template>

<script>
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'
import WColorPickHexagon from './WColorPickHexagon.vue'
import WColorPickStripe from './WColorPickStripe.vue'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {Number} [size=200] 輸入尺寸數字，代表組件基礎寬度與將自動計算高度，單位px，預設200
 * @vue-prop {Number} [space=5] 輸入六角型選色區與灰階選色區之間距數字，單位px，預設5
 */
export default {
    components: {
        WColorPickHexagon,
        WColorPickStripe,
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
            default: 5,
        },
    },
    data: function() {
        return {

            valueTrans: null,

        }
    },
    computed: {

        changeValue: function() {
            let vo = this
            vo.valueTrans = convertColor(vo.value)
            return ''
        },

        hexagonSize: function() {
            let vo = this
            return vo.size
        },

        hexagonWidth: function() {
            let vo = this
            return vo.size
        },

        hexagonHeight: function() {
            let vo = this
            return vo.hexagonWidth / 10 * 9
        },

        stripeWidth: function() {
            let vo = this
            return vo.size
        },

        stripeHeight: function() {
            let vo = this
            return vo.stripeWidth / 10
        },

        width: function() {
            let vo = this
            return vo.size
        },

        height: function() {
            let vo = this
            return vo.hexagonHeight + vo.space + vo.stripeHeight
        },

    },
    methods: {

        ckColor: function(c) {
            // console.log('ckColor', c)
            let vo = this
            c = oc.toHexString(c) //此組件內顏色無透明色, 故可統一轉hex
            c = c.toUpperCase()
            vo.valueTrans = c
            vo.$emit('input', c)
        },

    },
}
</script>

<style scoped>
</style>
