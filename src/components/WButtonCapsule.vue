<template>
    <div
        style="display:inline-block;"
        :changeActive="changeActive"
        role="button"
    >

        <div style="position:relative;">

            <v-tooltip
                bottom
                transition="slide-y-transition"
                :disabled="tooltip===''"
            >

                <template v-slot:activator="{ on }">

                    <div
                        v-on="on"
                        :style="`transition:all 0.3s; opacity:${loading?0:1}; border-radius:${borderRadius}px; background:${activeTrans?useBackgroundColorActive:hoverTrans?useBackgroundColorHover:useBackgroundColor}; cursor:pointer; box-shadow:${useShadow};`"
                        v-ripple="{ class: editable?`white--text`:'' }"
                        @mouseenter="hoverTrans=true"
                        @mouseleave="hoverTrans=false"
                        @click="clickBtn"
                    >

                        <div
                            :style="`transition:all 0.3s; padding:${usePadding}; border-radius:${borderRadius}px; border:1px solid ${activeTrans?useBorderColorActive:hoverTrans?useBorderColorHover:useBorderColor}; `"
                        >

                            <slot>

                                <div style="display:flex; align-items:center;">

                                    <w-icon
                                        :style="`margin:0px 5px 0px ${useIconShiftLeft}px;`"
                                        :icon="icon"
                                        :color="activeTrans?iconColorActive:hoverTrans?iconColorHover:iconColor"
                                        :size="22"
                                    ></w-icon>

                                    <span
                                        :style="`transition:all 0.3s; font-size:0.875rem; text-transform:none; color:${activeTrans?useTextColorActive:hoverTrans?useTextColorHover:useTextColor}; user-select:none;`"
                                    >
                                        {{text}}
                                    </span>

                                </div>

                            </slot>

                        </div>

                    </div>

                </template>

                <span>{{tooltip}}</span>

            </v-tooltip>

            <div :style="`position:absolute; left:0; right:0; top:0; bottom:0;`" v-if="loading">
                <div style="display:flex; align-items:center; justify-content:center; height:100%;">
                    <v-progress-circular
                        indeterminate
                        width="2"
                        :size="small?24:28"
                        :color="textColor"
                    ></v-progress-circular>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import tinycolor from 'wsemi/src/tinycolor.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor='black'] 輸入圖標顏色字串，預設'black'
 * @vue-prop {String} [iconColorHover='grey darken-3'] 輸入滑鼠移入時圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [iconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {Number} [iconShiftLeft=0] 輸入圖標左側平移距離數字，單位px，預設0
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角寬度，單位為px，預設30
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.25)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.25)'
 * @vue-prop {String} [backgroundColorActive='orange'] 輸入主動模式時背景顏色字串，預設'orange'
 * @vue-prop {Boolean} [shadow=false] 輸入是否顯示陰影，預設false
 * @vue-prop {Boolean} [shadowActive=false] 輸入主動模式時是否顯示陰影，預設true
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式，預設false
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {String} [sizePadding=''] 輸入內寬設定字串，會覆寫small所算得的padding，預設''，也就是由small決定預設padding值
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        tooltip: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        iconColor: {
            type: String,
            default: 'black',
        },
        iconColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        iconColorActive: {
            type: String,
            default: 'white',
        },
        iconShiftLeft: {
            type: Number,
            default: 0,
        },
        textColor: {
            type: String,
            default: 'black',
        },
        textColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        textColorActive: {
            type: String,
            default: 'white',
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderColor: {
            type: String,
            default: 'transparent',
        },
        borderColorHover: {
            type: String,
            default: 'transparent',
        },
        borderColorActive: {
            type: String,
            default: 'transparent',
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        backgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.25)',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange',
        },
        shadow: {
            type: Boolean,
            default: false,
        },
        shadowActive: {
            type: Boolean,
            default: true,
        },
        active: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: true,
        },
        sizePadding: {
            type: String,
            default: '',
        },
        loading: {
            type: Boolean,
            default: false,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            activeTrans: false,
            hoverTrans: false,
        }
    },
    mounted: function() {
    },
    computed: {

        changeActive: function() {
            //console.log('computed changeActive')

            let vo = this

            //save
            vo.activeTrans = vo.active

            return ''
        },

        usePadding: function() {
            let vo = this
            return vo.sizePadding ? vo.sizePadding : vo.small ? '3px 15px' : '7px 15px'
        },

        useIconShiftLeft: function() {
            let vo = this
            return vo.iconShiftLeft - (vo.small ? 6 : 3)
        },

        useTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

        useTextColorHover: function() {
            let vo = this
            return color2hex(vo.textColorHover)
        },

        useTextColorActive: function() {
            let vo = this
            return color2hex(vo.textColorActive)
        },

        useBorderColor: function() {
            let vo = this
            return color2hex(vo.borderColor)
        },

        useBorderColorHover: function() {
            let vo = this
            return color2hex(vo.borderColorHover)
        },

        useBorderColorActive: function() {
            let vo = this
            return color2hex(vo.borderColorActive)
        },

        useBackgroundColor: function() {
            let vo = this
            return color2hex(vo.backgroundColor)
        },

        useBackgroundColorHover: function() {
            let vo = this
            return color2hex(vo.backgroundColorHover)
        },

        useBackgroundColorActive: function() {
            let vo = this
            return color2hex(vo.backgroundColorActive)
        },

        useShadow: function() {
            let vo = this

            function genShadow(c, alpha) {
                let r = color2hex(c)
                let t = tinycolor(r)
                let s = t.setAlpha(alpha).toRgbString()
                return s
            }

            //check
            if (vo.shadow) {
                return `0 12px 20px -10px ${genShadow(vo.backgroundColor, 0.28)}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px ${genShadow(vo.backgroundColor, 0.2)};`
            }

            //check
            if (vo.active && vo.shadowActive) {
                return `0 12px 20px -10px ${genShadow(vo.backgroundColorActive, 0.28)}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px ${genShadow(vo.backgroundColorActive, 0.2)};`
            }

            return ''
        },

    },
    methods: {

        clickBtn: function () {
            //console.log('methods clickBtn')

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('click')

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
