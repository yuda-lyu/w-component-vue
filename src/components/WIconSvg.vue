<template>
    <div
        :style="[useStyleSize,{'display':'flex','align-items':'center','user-select':'none'}]"
        @keyup.enter="(v)=>{$emit('click',v)}"
        @click="(v)=>{$emit('click',v)}"
        v-if="path"
    >
        <svg
            :style="`fill:${useIconColor}; transition:${styleTransition};`"
            :width="size"
            :height="size"
            :viewBox="`0 0 ${sizeOriginal} ${sizeOriginal}`"
            @mouseenter="mouseEnter=true"
            @mouseleave="mouseEnter=false"
        >
            <path
                :d="path"
                :key="kpath"
                v-for="(path,kpath) in usePaths"
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
 * @vue-prop {Number} [sizeOriginal=24] 輸入svg原始尺寸浮點數，單位px，預設24
 * @vue-prop {Number} [size=24] 輸入圖標欲顯示的尺寸浮點數，單位px，預設24
 * @vue-prop {String|Array} [path=''] 輸入svg path字串，預設''
 * @vue-prop {String} [styleTransition='all 0.15s linear'] 輸入圖標style設定transition字串，預設'all 0.15s linear'
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
        styleTransition: {
            type: String,
            default: 'all 0.15s linear',
        },
    },
    data: function() {
        return {
            mouseEnter: false,
            paths: [],
        }
    },
    computed: {

        usePaths: function() {
            //console.log('computed usePaths')

            let vo = this

            let paths = vo.path
            if (!isarr(vo.path)) {
                paths = [vo.path]
            }

            return paths
        },

        useIconColor: function() {
            //console.log('computed useIconColor')

            let vo = this

            return vo.mouseEnter ? color2hex(vo.colorHover) : color2hex(vo.color)
        },

        useStyleSize: function () {
            //console.log('computed useStyleSize')

            let vo = this

            let s = {
                'width': `${vo.size}px`,
                'height': `${vo.size}px`,
                'line-height': `${vo.size}px`,
                'max-height': `${vo.size}px`,
                'min-height': `${vo.size}px`,
            }
            return s
        },

    },
    methods: {
    },
}
</script>

<style scoped>
</style>
