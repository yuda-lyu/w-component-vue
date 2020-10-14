<template>
    <div
        style="display:inline-block; vertical-align:middle; user-select:none;"
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
                        :style="`transition:all 0.3s; ${useBorderRadiusStyle} background:${useBC}; cursor:pointer; outline:none; box-shadow:${useShadow};`"
                        v-ripple="editable?{ class: 'white--text' }:false"
                        tabindex="0"
                        @mouseenter="hoverTrans=true"
                        @mouseleave="hoverTrans=false"
                        @keyup.enter="clickBtn($event)"
                        @click="clickBtn($event)"
                    >

                        <div
                            :style="`transition:all 0.3s; ${usePadding} ${useBorderRadiusStyle} ${useBorderWidth} border-color:${useRC}; border-style:solid;`"
                        >

                            <div style="display:flex; align-items:center; white-space:nowrap;">

                                <div style="margin:0px 10px 0px -10px;">
                                    <slot></slot>
                                </div>

                                <div :style="`display:inline-block;`">
                                    <w-icon
                                        :style="`margin:0px 5px 0px -6px;`"
                                        :icon="icon"
                                        :color="useIC"
                                        :size="iconSize"
                                        v-if="icon"
                                    ></w-icon>
                                </div>

                                <div
                                    :style="`margin-right:${text?0:-10}px; transition:all 0.3s; text-transform:none; color:${useTC};`"
                                >
                                    <div :style="`${useTextFontSize}`">{{text}}</div>
                                </div>

                                <div
                                    :style="`display:inline-block; cursor:pointer; outline:none;`"
                                    tabindex="0"
                                    @keyup.enter="clickClose($event)"
                                    @click="clickClose($event)"
                                    v-if="close"
                                >
                                    <w-icon
                                        :style="`margin:0px -9px 0px 5px;`"
                                        :icon="mdiCloseCircle"
                                        :color="useIC"
                                        :size="iconSize"
                                    ></w-icon>
                                </div>

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
                <div :style="`${useBorderRadiusStyle} overflow:hidden; width:100%; height:100%;`">
                    <div :style="`background:${useProgBackgroundColor}; height:100%;`">
                        <div :style="`background:${useProgColor}; width:${useProg}%; height:100%;`"></div>
                    </div>
                </div>
            </div>

            <div
                style="position:absolute; left:0; right:0; top:0; bottom:0;"
                v-if="!editable || loadingTrans"
            >
                <div :style="`${useBorderRadiusStyle} overflow:hidden; width:100%; height:100%;`">
                    <div :style="`background:${useDisabledColor}; height:100%;`">
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
                        :color="useLoadingColor"
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
import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
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
 * @vue-prop {Number} [prog=null] 輸入進度條進度數字，單位%，預設null
 * @vue-prop {String} [progColor='rgba(150,150,150,0.4)'] 輸入進度條顏色字串，預設'rgba(150,150,150,0.4)'
 * @vue-prop {String} [progBackgroundColor='rgba(150,150,150,0.075)'] 輸入進度條背景顏色字串，預設'rgba(150,150,150,0.075)'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Object} [borderWidth={top:1,bottom:1,left:1,right:1}] 輸入框樣式物件，可用鍵值為left、right、top、bottom，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{top:1,bottom:1,left:1,right:1}
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {Object} [borderRadiusStyle={left:true,right:true}] 輸入框圓角樣式物件，可用鍵值為left、right、top、bottom、top-left、bottom-left、top-right、bottom-right，left代表設定top-left與bottom-left，right代表設定top-right與bottom-right，top代表設定top-left與top-right，bottom代表設定bottom-left與bottom-right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為布林值，預設{left:true,right:true}
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
 * @vue-prop {Object} [paddingStyle={v:3,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:3,h:15}
 * @vue-prop {Number} [shiftLeft=0] 輸入左側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如圖標與左側邊框距離，單位px，預設0
 * @vue-prop {Number} [shiftRight=0] 輸入右側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如關閉圖標與右側邊框距離，單位px，預設0
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式，預設false
 * @vue-prop {Boolean} [close=false] 輸入是否具有關閉按鈕模式，預設false
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {String} [loadingColor='black'] 輸入載入圖標顏色字串，預設'black'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {String} [disabledColor='rgba(255,255,255,0.5)'] 輸入非編輯模式時遮罩顏色字串，預設'rgba(255,255,255,0.5)'
 */
export default {
    components: {
        WIcon,
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
        borderWidth: {
            type: Object,
            default: () => {
                return {
                    top: 1,
                    bottom: 1,
                    left: 1,
                    right: 1,
                }
            },
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderRadiusStyle: {
            type: Object,
            default: () => {
                return {
                    left: true,
                    right: true,
                }
            },
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
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 3,
                    h: 15,
                }
            },
        },
        shiftLeft: {
            type: Number,
            default: 0,
        },
        shiftRight: {
            type: Number,
            default: 0,
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
        loadingColor: {
            type: String,
            default: 'black',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        disabledColor: {
            type: String,
            default: 'rgba(255,255,255,0.5)',
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

            //四方向padding
            let left = 0
            let right = 0
            let top = 0
            let bottom = 0
            if (isNumber(get(vo, 'paddingStyle.h'))) {
                left = get(vo, 'paddingStyle.h')
                right = left
            }
            if (isNumber(get(vo, 'paddingStyle.v'))) {
                top = get(vo, 'paddingStyle.v')
                bottom = top
            }
            if (isNumber(get(vo, 'paddingStyle.left'))) {
                left = get(vo, 'paddingStyle.left')
            }
            if (isNumber(get(vo, 'paddingStyle.right'))) {
                right = get(vo, 'paddingStyle.right')
            }
            if (isNumber(get(vo, 'paddingStyle.top'))) {
                top = get(vo, 'paddingStyle.top')
            }
            if (isNumber(get(vo, 'paddingStyle.bottom'))) {
                bottom = get(vo, 'paddingStyle.bottom')
            }

            //shiftLeft, shiftRight
            left += vo.shiftLeft
            right += vo.shiftRight

            //padding
            let padding = `padding:${top}px ${right}px ${bottom}px ${left}px;`

            return padding
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

        useIC: function() {
            let vo = this
            let r = vo.activeTrans ? vo.useIconColorActive : vo.hoverTrans ? vo.useIconColorHover : vo.useIconColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.useIconColorActive : vo.useIconColor
            }
            return r
        },

        useDisabledColor: function() {
            let vo = this
            return color2hex(vo.disabledColor)
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

        useTC: function() {
            let vo = this
            let r = vo.activeTrans ? vo.useTextColorActive : vo.hoverTrans ? vo.useTextColorHover : vo.useTextColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.useTextColorActive : vo.useTextColor
            }
            return r
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
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

        useRC: function() {
            let vo = this
            let r = vo.activeTrans ? vo.useBorderColorActive : vo.hoverTrans ? vo.useBorderColorHover : vo.useBorderColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.useBorderColorActive : vo.useBorderColor
            }
            return r
        },

        useBorderWidth: function() {
            //console.log('useBorderWidth')

            let vo = this

            //四方向width
            let left = 0
            let right = 0
            let top = 0
            let bottom = 0
            if (isNumber(get(vo, 'borderWidth.left'))) {
                left = get(vo, 'borderWidth.left')
            }
            if (isNumber(get(vo, 'borderWidth.right'))) {
                right = get(vo, 'borderWidth.right')
            }
            if (isNumber(get(vo, 'borderWidth.top'))) {
                top = get(vo, 'borderWidth.top')
            }
            if (isNumber(get(vo, 'borderWidth.bottom'))) {
                bottom = get(vo, 'borderWidth.bottom')
            }

            //borderWidth
            let borderWidth = `border-left-width:${left}px; border-right-width:${right}px; border-top-width:${top}px; border-bottom-width:${bottom}px;`

            return borderWidth
        },

        useBorderRadiusStyle: function() {
            //console.log('useBorderRadiusStyle')

            let vo = this

            //四方向radius
            let tl = 0
            let tr = 0
            let bl = 0
            let br = 0
            if (get(vo, 'borderRadiusStyle.left') === true) {
                tl = vo.borderRadius
                bl = vo.borderRadius
            }
            if (get(vo, 'borderRadiusStyle.right') === true) {
                tr = vo.borderRadius
                br = vo.borderRadius
            }
            if (get(vo, 'borderRadiusStyle.top') === true) {
                tl = vo.borderRadius
                tr = vo.borderRadius
            }
            if (get(vo, 'borderRadiusStyle.bottom') === true) {
                bl = vo.borderRadius
                br = vo.borderRadius
            }
            if (get(vo, 'borderRadiusStyle.topLeft') === true || get(vo, 'borderRadiusStyle.top-left') === true) {
                tl = vo.borderRadius
            }
            if (get(vo, 'borderRadiusStyle.topRight') === true || get(vo, 'borderRadiusStyle.top-right') === true) {
                tr = vo.borderRadius
            }
            if (get(vo, 'borderRadiusStyle.bottomLeft') === true || get(vo, 'borderRadiusStyle.bottom-left') === true) {
                bl = vo.borderRadius
            }
            if (get(vo, 'borderRadiusStyle.bottomRight') === true || get(vo, 'borderRadiusStyle.bottom-right') === true) {
                br = vo.borderRadius
            }

            //borderRadius
            let borderRadius = `border-top-left-radius:${tl}px; border-top-right-radius:${tr}px; border-bottom-left-radius:${bl}px; border-bottom-right-radius:${br}px;`

            return borderRadius
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

        useBC: function() {
            let vo = this
            let r = vo.activeTrans ? vo.useBackgroundColorActive : vo.hoverTrans ? vo.useBackgroundColorHover : vo.useBackgroundColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.useBackgroundColorActive : vo.useBackgroundColor
            }
            return r
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

        useLoadingColor: function() {
            let vo = this
            return color2hex(vo.loadingColor)
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
            if (vo.isProging) {
                return
            }
            if (vo.loadingTrans) {
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

                    //update, 得先更新否則會等$nextTick才更新, 會有可能連續觸發無法上鎖
                    vo.progTrans = prog

                    //$nextTick
                    vo.$nextTick(() => {

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

                    //update, 得先更新否則會等$nextTick才更新, 會有可能連續觸發無法上鎖
                    vo.loadingTrans = loading

                    //$nextTick
                    vo.$nextTick(() => {

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
