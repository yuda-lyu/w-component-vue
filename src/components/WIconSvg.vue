<template>
    <div style="display:inline-block;">
        <svg
            :style="`${iconStyleTransition}; ${iconStyle}; fill:${getIconColor};`"
            :width="size"
            :height="size"
            :viewBox="`0 0 ${sizeOriginal} ${sizeOriginal}`"
            @mouseenter="mouseEnter=true"
            @mouseleave="mouseEnter=false"
        >
            <path
                :d="path"
                :key="kpath"
                v-for="(path,kpath) in getPaths"
            ></path>
        </svg>
    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'
import isarr from 'wsemi/src/isarr.mjs'

/**
 * @vue-prop {String} [color='grey darken-1'] 輸入圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [colorHover='grey darken-3'] 輸入滑鼠移入圖標顏色字串，預設'grey darken-3'
 * @vue-prop {Number} [sizeOriginal=24] 輸入svg原始尺寸浮點數，預設24
 * @vue-prop {Number} [size=24] 輸入圖標欲顯示的尺寸浮點數，預設24
 * @vue-prop {String|Array} [path=''] 輸入svg path字串，預設''
 * @vue-prop {String} [iconStyleTransition='transition:all 0.5s linear'] 輸入圖標style設定transition字串，預設'transition:all 0.5s linear'
 * @vue-prop {String} [iconStyle=''] 輸入圖標style設定字串，預設''
 */
export default {
    components: {
    },
    props: {
        color: {
            type: String,
            default: 'grey darken-1',
        },
        colorHover: {
            type: String,
            default: 'grey darken-3',
        },
        sizeOriginal: {
            type: Number,
            default: 24,
        },
        size: {
            type: Number,
            default: 24,
        },
        path: {
            type: [String, Array],
            default: '',
        },
        iconStyleTransition: {
            type: String,
            default: 'transition:all 0.5s linear',
        },
        iconStyle: {
            type: String,
            default: '',
        },
    },
    data: function() {
        return {
            mouseEnter: false,
            paths: [],
        }
    },
    computed: {

        getPaths: function() {
            //console.log('computed getPaths')

            let vo = this

            let paths = vo.path
            if (!isarr(vo.path)) {
                paths = [vo.path]
            }

            return paths
        },

        getIconColor: function() {
            //console.log('computed getIconColor')

            let vo = this

            return vo.mouseEnter ? color2hex(vo.colorHover) : color2hex(vo.color)
        },

    },
    methods: {
    },
}
</script>

<style scoped>
</style>
