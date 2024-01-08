<template>
    <div
        :style="[useStyleSize,{'display':'flex','align-items':'center','user-select':'none','border':'0px solid #ddd'}]"
        @keyup.enter="(v)=>{$emit('click',v)}"
        @click="(v)=>{$emit('click',v)}"
        v-if="icon"
    >

        <svg
            :style="`transition:all ${timeTransition}s linear; fill:${useIconColor};`"
            :width="size"
            :height="size"
            :viewBox="`0 0 ${sizeOriginal} ${sizeOriginal}`"
            @mouseenter="mouseEnter=true"
            @mouseleave="mouseEnter=false"
            v-if="isSvg"
        >
            <path
                :d="icon"
                :key="kpath"
                v-for="(path,kpath) in usePaths"
            ></path>
        </svg>

        <div
            :style="`transition:all ${timeTransition}s linear; width:${size}px; height:${size}px; color:${useIconColor}; display:flex; align-items:center; justify-content:center;`"
            @mouseenter="mouseEnter=true"
            @mouseleave="mouseEnter=false"
            v-if="isMdi"
        >

            <span
                :class="`mdi ${icon}`"
                :style="`font-size:${size}px;`"
            ></span>

        </div>

        <div
            :style="`transition:all ${timeTransition}s linear; width:${size}px; height:${size}px; color:${useIconColor}; display:flex; align-items:center; justify-content:center;`"
            @mouseenter="mouseEnter=true"
            @mouseleave="mouseEnter=false"
            v-if="isFa"
        >

            <div :style="`width:${size}px; height:${size}px; _transform-origin:center; transform:translateX(0px) translateY(0px) scale(${r});`">
                <div style="display:flex; align-items:center; justify-content:center;">
                    <i
                        :class="`fas ${icon}`"
                        :style="`font-size:${size}px;`"
                    ></i>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import convertColor from '../js/convertColor.mjs'
import isearr from 'wsemi/src/isearr.mjs'
import isestr from 'wsemi/src/isestr.mjs'


/**
 * @vue-prop {String} [color='grey darken-1'] 輸入圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [colorHover='grey darken-3'] 輸入滑鼠移入圖標顏色字串，預設'grey darken-3'
 * @vue-prop {Number} [sizeOriginal=24] 輸入svg原始尺寸浮點數，單位px，預設24
 * @vue-prop {Number} [size=24] 輸入圖標欲顯示的尺寸浮點數，單位px，預設24
 * @vue-prop {String|Array} [icon=''] 輸入svg icon字串，預設''
 * @vue-prop {Number} [timeTransition=0.15] 輸入style的transition時間數字，單位s，預設0.15
 */
export default {
    components: {
    },
    props: {
        icon: {
            type: [String, Array],
            default: '',
        },
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
        timeTransition: {
            type: Number,
            default: 0.15,
        },
    },
    data: function() {
        return {

            mouseEnter: false,

            r: 0.83, //跟mdi圖標對比fa圖標須縮小一點才一致

            paths: [],

        }
    },
    computed: {

        hasIcon: function() {
            //console.log('computed hasIcon')

            let vo = this

            return isestr(vo.icon)
        },

        isMdi: function() {
            //console.log('computed isMdi')

            let vo = this

            //check
            if (!vo.hasIcon) {
                return false
            }

            return vo.icon.indexOf('mdi-') >= 0
        },

        isFa: function() {
            //console.log('computed isFa')

            let vo = this

            //check
            if (!vo.hasIcon) {
                return false
            }

            return vo.icon.indexOf(' fa-') >= 0
        },

        isSvg: function() {
            //console.log('computed isSvg')

            let vo = this

            //check
            if (vo.isMdi || vo.isFa) {
                return false
            }

            let bPath = isestr(vo.icon)
            let bPaths = isearr(vo.icon)
            let b = bPath || bPaths

            return b
        },

        usePaths: function() {
            //console.log('computed usePaths')

            let vo = this

            //check
            if (!vo.isSvg) {
                return []
            }

            //paths
            let paths = vo.icon
            if (isestr(vo.icon)) {
                paths = [vo.icon]
            }

            return paths
        },

        useIconColor: function() {
            //console.log('computed useIconColor')

            let vo = this

            return vo.mouseEnter ? convertColor(vo.colorHover) : convertColor(vo.color)
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
