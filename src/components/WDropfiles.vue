<template>
    <div
        ref="dropPanel"
        :style="`border:${borderWidth}px solid ${useBorderColor}; border-radius:${borderRadius}px; background:${useBackgroundColor}; transition:${styleTransition};`"
        @mouseenter="bMouseIn=true"
        @mouseleave="bMouseIn=false"
    >
        <slot></slot>
    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'
import domDropFiles from 'wsemi/src/domDropFiles.mjs'


/**
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorDropIn='purple lighten-5'] 輸入滑鼠拖曳檔案移入時背景顏色字串，預設'purple lighten-5'
 * @vue-prop {String} [backgroundColorHover='grey lighten-5'] 輸入滑鼠移入時背景顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [styleTransition='all 0.3s linear'] 輸入style的transition設定字串，預設'all 0.3s linear'
 * @vue-prop {Number} [borderRadius=6] 輸入邊框圓角角度數字，單位為px，預設6
 * @vue-prop {Number} [borderWidth=1] 輸入邊框寬度數字，單位為px，預設1
 * @vue-prop {String} [borderColor='grey lighten-2'] 輸入邊框寬度數字，預設'grey lighten-2'
 * @vue-prop {String} [borderColorDropIn='grey lighten-2'] 輸入滑鼠拖曳檔案移入時邊框顏色字串，預設'grey lighten-2'
 * @vue-prop {String} [borderColorHover='grey lighten-2'] 輸入滑鼠移入時邊框顏色字串，預設'grey lighten-2'
 */
export default {
    components: {
    },
    props: {
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        backgroundColorDropIn: {
            type: String,
            default: 'grey lighten-4',
        },
        backgroundColorHover: {
            type: String,
            default: 'grey lighten-5',
        },
        styleTransition: {
            type: String,
            default: 'all 0.3s linear',
        },
        borderRadius: {
            type: Number,
            default: 6,
        },
        borderWidth: {
            type: Number,
            default: 1,
        },
        borderColor: {
            type: String,
            default: 'grey lighten-2',
        },
        borderColorDropIn: {
            type: String,
            default: 'grey lighten-2',
        },
        borderColorHover: {
            type: String,
            default: 'grey lighten-2',
        },
    },
    data: function() {
        return {
            ev: null,
            bMouseIn: false,
            bDropIn: false,
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //domDropFiles
        vo.ev = domDropFiles(vo.$refs.dropPanel)
        vo.ev.on('getFiles', ({ files, cb }) => {
            vo.$emit('get-files', files, vo.$refs.dropPanel)
            cb()
        })
        vo.ev.on('dropIn', () => {
            vo.bDropIn = true
            vo.$emit('drop-in', vo.$refs.dropPanel)
        })
        vo.ev.on('dropOut', () => {
            vo.bDropIn = false
            vo.$emit('drop-out', vo.$refs.dropPanel)
        })

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //off
        vo.ev.off()

    },
    computed: {

        useBorderColor: function() {
            //console.log('computed useBorderColor')

            let vo = this

            if (vo.bDropIn) {
                return color2hex(vo.borderColorDropIn)
            }
            if (vo.bMouseIn) {
                return color2hex(vo.borderColorHover)
            }
            return color2hex(vo.borderColor)
        },

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            if (vo.bDropIn) {
                return color2hex(vo.backgroundColorDropIn)
            }
            if (vo.bMouseIn) {
                return color2hex(vo.backgroundColorHover)
            }
            return color2hex(vo.backgroundColor)
        },

    },
    methods: {
    },
}
</script>

<style scoped>
</style>
