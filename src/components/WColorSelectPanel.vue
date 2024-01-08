<template>
    <div
        :style="`display:inline-block; background:${useBackgroundColor};`"
        :changeValue="changeValue"
        :changeType="changeType"
    >

        <div :style="`padding:${space}px;`">

            <div
                style="display:flex;"
                v-show="typeTrans==='LUMP'"
            >
                <WColorSelectPanelBlock
                    :size="size"
                    :spaceGray="5"
                    :spaceAlpha="8"
                    :value="valueTrans"
                    @input="(v)=>{updateColor(v,'block')}"

                ></WColorSelectPanelBlock>
            </div>

            <div
                style="display:flex;"
                v-show="typeTrans==='HSVA'"
            >
                <WColorSelectPanelHsva
                    _size="size*0.8875"
                    :size="size"
                    :space="10"
                    :value="valueTrans"
                    @input="(v)=>{updateColor(v,'hsva')}"
                ></WColorSelectPanelHsva>
            </div>

        </div>

    </div>
</template>

<script>
import convertColor from '../js/convertColor.mjs'
import WColorSelectPanelBlock from './WColorSelectPanelBlock.vue'
import WColorSelectPanelHsva from './WColorSelectPanelHsva.vue'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {String} [type='LUMP'] 輸入選擇顏色方式字串，可選'LUMP'、'HSVA'，預設'LUMP'
 * @vue-prop {Number} [size=200] 輸入尺寸數字，代表組件基礎寬度與將自動計算高度，單位px，預設200
 * @vue-prop {Number} [space=10] 輸入子組件間距數字，單位px，預設10
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 *
 */
export default {
    components: {
        WColorSelectPanelBlock,
        WColorSelectPanelHsva,
    },
    props: {
        value: {
            type: String,
            default: '#FFFFFF',
        },
        type: {
            type: String,
            default: 'LUMP',
        },
        size: {
            type: Number,
            default: 200,
        },
        space: {
            type: Number,
            default: 10,
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
    },
    data: function() {
        return {
            valueTrans: '#fff',
            typeTrans: 'LUMP',
        }
    },
    computed: {

        changeValue: function() {
            let vo = this
            vo.valueTrans = convertColor(vo.value)
            return ''
        },

        changeType: function() {
            let vo = this
            vo.typeTrans = vo.type
            return ''
        },

        useBackgroundColor: function() {
            let vo = this
            return convertColor(vo.backgroundColor)
        },

    },
    methods: {

        updateColor: function(c, from) {
            // console.log('updateColor', c, from)
            let vo = this
            vo.valueTrans = c
            vo.$emit('input', c)
        },

    },
}
</script>

<style scoped>
</style>
