<template>
    <div :class="{'shadow':shadow}" :style="[usePanelStyle]">

        <div :style="[useHeaderStyle]" v-if="hasHeader">
            <slot name="icon"></slot>
            <div>
                <slot name="title"></slot>
                <slot name="description"></slot>
            </div>
        </div>

        <div :style="[useContentStyle]">
            <slot name="content"></slot>
        </div>

        <div :style="[useFooterStyle]" v-if="hasFooter">
            <slot name="footer"></slot>
        </div>

    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Boolean} [hasHeader=true] 輸入是否有上部標題區，預設true
 * @vue-prop {Boolean} [hasFooter=true] 輸入是否有下部基底區，預設true
 * @vue-prop {Number} [padding=20] 輸入內間距，單位為px，預設20
 * @vue-prop {Number} [borderRadius=5] 輸入圓角寬度數字，單位為px，預設5
 * @vue-prop {String} [headerBackgroundColor='grey lighten-5'] 輸入上方區塊背景顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {String} [footerBackgroundColor='grey lighten-5'] 輸入下方區塊背景顏色字串，預設'grey lighten-5'
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 */
export default {
    props: {
        hasHeader: {
            type: Boolean,
            default: true,
        },
        hasFooter: {
            type: Boolean,
            default: true,
        },
        padding: {
            type: Number,
            default: 20,
        },
        borderRadius: {
            type: Number,
            default: 5,
        },
        headerBackgroundColor: {
            type: String,
            default: 'grey lighten-5',
        },
        contentBackgroundColor: {
            type: String,
            default: 'white',
        },
        footerBackgroundColor: {
            type: String,
            default: 'grey lighten-5',
        },
        shadow: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {

        usePanelStyle: function() {
            //console.log('computed usePanelStyle')

            let vo = this

            let s = {}
            s['background-color'] = color2hex(vo.contentBackgroundColor)
            s['border-radius'] = `${vo.borderRadius}px`

            return s
        },

        useHeaderStyle: function() {
            //console.log('computed useHeaderStyle')

            let vo = this

            let s = {}
            s['padding'] = `${vo.padding}px`
            s['border-bottom'] = '1px solid #ddd'
            s['background-color'] = color2hex(vo.headerBackgroundColor)
            s['border-radius'] = `${vo.borderRadius}px ${vo.borderRadius}px 0 0`
            s['display'] = 'flex'
            s['justify-content'] = 'flex-start'
            s['align-items'] = 'center'

            return s
        },

        useContentStyle: function() {
            //console.log('computed useContentStyle')

            let vo = this

            let s = {}
            let ch = '0 0'
            let cf = '0 0'
            if (!vo.hasHeader) {
                ch = `${vo.borderRadius}px ${vo.borderRadius}px`
            }
            if (!vo.hasFooter) {
                cf = `${vo.borderRadius}px ${vo.borderRadius}px`
            }
            s['border-radius'] = `${ch} ${cf}`

            return s
        },

        useFooterStyle: function() {
            //console.log('computed useFooterStyle')

            let vo = this

            let s = {}
            s['padding'] = `${vo.padding}px`
            s['border-top'] = '1px solid #ddd'
            s['background-color'] = color2hex(vo.footerBackgroundColor)
            s['border-radius'] = `0 0 ${vo.borderRadius}px ${vo.borderRadius}px`

            return s
        },

    },
    methods: {
    },
}
</script>

<style scoped>
.shadow {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
