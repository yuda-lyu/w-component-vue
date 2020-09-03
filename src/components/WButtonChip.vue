<template>
    <div
        style="display:inline-block; vertical-align:middle;"
        :changeActive="changeActive"
        :changeProg="changeProg"
        :changeLoading="changeLoading"
        role="button"
    >

        <div style="position:relative;">

            <v-tooltip
                bottom
                transition="slide-y-transition"
                :disabled="!tooltip"
            >

                <template v-slot:activator="{ on }">

                    <div
                        v-on="on"
                        :style="`transition:all 0.3s; border-radius:${borderRadius}px; background:${activeTrans?useBackgroundColorActive:hoverTrans?useBackgroundColorHover:useBackgroundColor}; cursor:pointer; box-shadow:${useShadow};`"
                        v-ripple="editable?{ class: 'white--text' }:false"
                        @mouseenter="hoverTrans=true"
                        @mouseleave="hoverTrans=false"
                        @click="clickBtn($event)"
                    >

                        <div
                            :style="`transition:all 0.3s; opacity:${loadingTrans?0:1}; padding:${usePadding}; border-radius:${borderRadius}px; border:1px solid ${activeTrans?useBorderColorActive:hoverTrans?useBorderColorHover:useBorderColor}; `"
                        >

                            <div style="display:flex; align-items:center; white-space:nowrap;">

                                <div style="margin:0px 10px 0px -10px;">
                                    <slot></slot>
                                </div>

                                <w-icon
                                    :style="`margin:0px 5px 0px ${useIconShiftLeft}px;`"
                                    :icon="icon"
                                    :color="activeTrans?useIconColorActive:hoverTrans?useIconColorHover:useIconColor"
                                    :size="iconSize"
                                    v-if="icon"
                                ></w-icon>

                                <div
                                    :style="`margin-right:${text?0:-10}px; transition:all 0.3s; text-transform:none; color:${activeTrans?useTextColorActive:hoverTrans?useTextColorHover:useTextColor}; user-select:none;`"
                                >
                                    <div :style="`font-size:${textFontSize};`">{{text}}</div>
                                </div>

                                <w-icon
                                    :style="`margin:0px ${useIconShiftRight}px 0px 5px;`"
                                    :icon="mdiCloseCircle"
                                    :color="activeTrans?useIconColorActive:hoverTrans?useIconColorHover:useIconColor"
                                    :size="iconSize"
                                    @click="clickClose($event)"
                                    v-if="close"
                                ></w-icon>

                            </div>

                        </div>

                    </div>

                </template>

                <span>{{tooltip}}</span>

            </v-tooltip>

            <div
                style="position:absolute; left:0; right:0; top:0; bottom:0;"
                v-if="isProging"
            >
                <div :style="`border-radius:${borderRadius}px; overflow:hidden; width:100%; height:100%;`">
                    <div :style="`background:${useProgBackgroundColor}; height:100%;`">
                        <div :style="`width:${useProg}%; background:${useProgColor}; height:100%;`"></div>
                    </div>
                </div>
            </div>

            <div
                style="position:absolute; left:0; right:0; top:0; bottom:0;"
                v-if="!isProging && loadingTrans"
            >
                <div style="display:flex; align-items:center; justify-content:center; height:100%;">
                    <v-progress-circular
                        indeterminate
                        width="2"
                        :size="iconSize"
                        :color="useTextColor"
                    ></v-progress-circular>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mdiCloseCircle } from '@mdi/js'
import map from 'lodash/map'
import join from 'lodash/join'
import isnum from 'wsemi/src/isnum.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import replace from 'wsemi/src/replace.mjs'
import sep from 'wsemi/src/sep.mjs'
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
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {Number} [iconShiftLeft=0] 輸入左側圖標之左側距離數字，單位px，預設0
 * @vue-prop {Number} [iconShiftRight=0] 輸入右側關閉圖標之右側距離數字，單位px，預設0
 * @vue-prop {Number} [prog=null] 輸入進度條進度數字，單位%，預設null
 * @vue-prop {String} [progColor='rgba(150,150,150,0.4)'] 輸入進度條背景顏色字串，預設'rgba(150,150,150,0.4)'
 * @vue-prop {String} [progBackgroundColor='rgba(150,150,150,0.075)'] 輸入進度條顏色字串，預設'rgba(150,150,150,0.075)'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角寬度，單位為px，預設30
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='rgba(200,200,200,0.25)'] 輸入背景顏色字串，預設'rgba(200,200,200,0.25)'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.35)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.35)'
 * @vue-prop {String} [backgroundColorActive='orange'] 輸入主動模式時背景顏色字串，預設'orange'
 * @vue-prop {Boolean} [shadow=false] 輸入是否顯示陰影，預設false
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [shadowActive=true] 輸入主動模式時是否顯示陰影，預設true
 * @vue-prop {String} [shadowActiveStyle=''] 輸入主動模式時陰影顏色字串，預設值詳見props
 * @vue-prop {String} [sizePadding='3px 15px'] 輸入內寬設定字串，預設'3px 15px'
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式，預設false
 * @vue-prop {Boolean} [close=false] 輸入是否具有關閉按鈕模式，預設false
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
        iconSize: {
            type: Number,
            default: 22,
        },
        iconShiftLeft: {
            type: Number,
            default: 0,
        },
        iconShiftRight: {
            type: Number,
            default: 0,
        },
        prog: {
            type: Number,
            default: null,
        },
        progColor: {
            type: String,
            default: 'rgba(150,150,150,0.4)',
        },
        progBackgroundColor: {
            type: String,
            default: 'rgba(150,150,150,0.075)',
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
        textFontSize: {
            type: String,
            default: '0.85rem',
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
            default: 'rgba(200,200,200,0.25)',
        },
        backgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.35)',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange',
        },
        shadow: {
            type: Boolean,
            //default: false,
            default: true,
        },
        shadowStyle: {
            type: String,
            //default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
            default: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        },
        shadowActive: {
            type: Boolean,
            default: true,
        },
        shadowActiveStyle: {
            type: String,
            default: '0 12px 20px -10px {backgroundColorActiveAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorActiveAlpha=0.2}',
        },
        sizePadding: {
            type: String,
            default: '3px 15px',
        },
        active: {
            type: Boolean,
            default: false,
        },
        close: {
            type: Boolean,
            default: false,
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
            mdiCloseCircle,

            activeTrans: false,
            hoverTrans: false,
            loadingTrans: false,
            progTrans: null,

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

        changeProg: function() {
            //console.log('computed changeProg')

            let vo = this

            //save
            vo.progTrans = vo.prog

            return ''
        },

        changeLoading: function() {
            //console.log('computed changeLoading')

            let vo = this

            //save
            vo.loadingTrans = vo.loading

            return ''
        },

        usePadding: function() {
            let vo = this
            return replace(vo.sizePadding, ';', '')
        },

        useIconColor: function() {
            let vo = this
            return color2hex(vo.iconColor)
        },

        useIconColorHover: function() {
            let vo = this
            return color2hex(vo.iconColorHover)
        },

        useIconColorActive: function() {
            let vo = this
            return color2hex(vo.iconColorActive)
        },

        useIconShiftLeft: function() {
            let vo = this
            return vo.iconShiftLeft - 6
        },

        useIconShiftRight: function() {
            let vo = this
            return vo.iconShiftRight - 9
        },

        useProgColor: function() {
            let vo = this
            return color2hex(vo.progColor)
        },

        useProgBackgroundColor: function() {
            let vo = this
            return color2hex(vo.progBackgroundColor)
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

            function repColor(tmp, tar, color) {
                tmp = replace(tmp, '}', '{')
                let s = sep(tmp, '{')
                s = map(s, (v) => {
                    if (v.indexOf(tar) >= 0) {
                        let ss = sep(v, '=')
                        let alpha = ss[1]
                        if (isnum(alpha)) {
                            alpha = cdbl(alpha)
                        }
                        else {
                            alpha = 0.2
                        }
                        return genShadow(color, alpha)
                    }
                    return v
                })
                return join(s, '')
            }

            //shadowActive
            if (vo.active && vo.shadowActive) {
                if (isestr(vo.shadowActiveStyle)) {
                    return repColor(vo.shadowActiveStyle, 'backgroundColorActiveAlpha', vo.backgroundColorActive)
                }
                return ''
            }

            //shadow
            if (vo.shadow) {
                if (isestr(vo.shadowStyle)) {
                    return repColor(vo.shadowStyle, 'backgroundColorAlpha', vo.backgroundColor)
                }
                return ''
            }

            return ''
        },

        isProging: function() {
            let vo = this
            return isnum(vo.useProg)
        },

        useProg: function() {
            let vo = this
            let p = vo.progTrans
            if (isnum(p)) {
                p = cdbl(p)
                if (p < 0 || p > 100) {
                    return null
                }
                return p
            }
            return null
        },

    },
    methods: {

        clickBtn: function (ev) {
            //console.log('methods clickBtn', ev)

            let vo = this

            //stopPropagation, 避免按鈕中使用slot加入按鈕, 會因冒泡被觸發
            ev.stopPropagation()

            //check
            if (!vo.editable) {
                return
            }

            //msg
            let msg = {
                setProg: (prog) => {

                    //check
                    if (!(prog === null || isnum(prog))) {
                        console.log('prog is not number')
                        return
                    }

                    //cdbl, 不轉null
                    if (isnum(prog)) {
                        prog = cdbl(prog)
                    }

                    //$nextTick
                    vo.$nextTick(() => {

                        //update progTrans
                        vo.progTrans = prog

                        //emit
                        vo.$emit('update:prog', vo.progTrans)

                    })

                    if (prog >= 100) {

                        //$nextTick
                        vo.$nextTick(() => {

                            //update progTrans, 因可能外部為多組件同步prog, 於timer之前修改有可能又會被外部覆寫, 故得於timer內直接修改與觸發事件
                            vo.progTrans = null

                            //emit
                            vo.$emit('update:prog', vo.progTrans)

                        })

                    }
                },
                setLoading: (loading) => {

                    //check
                    if (!isbol(loading)) {
                        console.log('loading is not boolean')
                        return
                    }

                    //$nextTick
                    vo.$nextTick(() => {

                        //update
                        vo.loadingTrans = loading

                        //emit
                        vo.$emit('update:loading', vo.loadingTrans)

                    })

                },
            }

            //emit
            vo.$emit('click', msg)

        },

        clickClose: function (ev) {
            //console.log('methods clickClose', ev)

            let vo = this

            //stopPropagation, 避免按鈕中使用slot加入按鈕, 會因冒泡被觸發
            ev.stopPropagation()

            //check
            if (!vo.editable) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click-close')

            })

        },

    },
}
</script>

<style scoped>
</style>
