<template>
    <div
        style="display:inline-block; vertical-align:middle; outline:none; user-select:none;"
        :role="editable?role:''"
        :changeActive="changeActive"
        :changeProg="changeProg"
        :changeLoading="changeLoading"
    >

        <div style="position:relative;">

            <WTooltip
                :displayType="'line'"
                :isolated="true"
                :borderRadius="tooltipBorderRadius"
                :paddingStyle="tooltipPaddingStyle"
                :textFontSize="tooltipTextFontSize"
                :textColor="tooltipTextColor"
                :backgroundColor="tooltipBackgroundColor"
                :editable="hasTooltop"
            >

                <template v-slot:trigger>

                    <!-- 使用overflow:hidden預先測試, 因ripple會自行添加, 先行測試添加後狀態 -->
                    <div
                        :style="`transition:all 0.3s; ${useBorderRadiusStyle} background:${useBackgroundColor}; ${editable&&cursorPointer?'cursor:pointer;':''} box-shadow:${useShadow}; outline:none; user-select:none; overflow:hidden;`"
                        tabindex="0"
                        v-domripple="useRipple"
                        @mouseenter="hoverTrans=true;$emit('mouseenter',$event)"
                        @mouseleave="hoverTrans=false;$emit('mouseleave',$event)"
                        @keyup.enter="clickBtn($event)"
                        @click="clickBtn($event)"
                    >

                        <!-- 為了讓transition-group能抓到可拖曳對象, 本層多設定tabindex, 本層設定為1 -->
                        <div
                            :style="`transition:all 0.3s; ${usePadding} ${useBorderRadiusStyle} ${useBorderWidth} ${useBorderColor} border-style:solid; outline:none; user-select:none;`"
                            tabindex="1"
                        >

                            <div style="display:flex; align-items:center;">

                                <div>
                                    <slot>
                                        <div style="display:flex; align-items:center; white-space:nowrap;">

                                            <WIcon
                                                :style="`margin-left:-6px; margin-right:${hasText?5:-6}px;`"
                                                :icon="icon"
                                                :color="useIconColor"
                                                :colorHover="useIconColor"
                                                :size="iconSize"
                                                v-if="hasIcon"
                                            ></WIcon>

                                            <div
                                                :style="`transition:all 0.3s; text-transform:none; color:${useTextColor}; ${useTextFontSize} ${hasIcon?'min-height:'+iconSize+'px':''}; display:flex; align-items:center;`"
                                                v-if="hasText"
                                            >
                                                {{text}}
                                            </div>

                                        </div>
                                    </slot>
                                </div>

                                <!-- 為了讓transition-group能抓到可拖曳對象, 且組件內tabindex不能重複, 故本層設定為2 -->
                                <div
                                    :style="`margin:0px -9px 0px 5px; display:inline-block; outline:none; user-select:none;`"
                                    tabindex="2"
                                    @keyup.enter="clickClose($event)"
                                    @click="clickClose($event)"
                                    v-if="close"
                                >
                                    <WIcon
                                        :icon="mdiCloseCircle"
                                        :color="useIconColor"
                                        :colorHover="useIconColor"
                                        :size="iconSize"
                                    ></WIcon>
                                </div>

                            </div>

                        </div>

                    </div>

                </template>

                <template v-slot:content>
                    {{tooltip}}
                </template>

            </WTooltip>

            <div
                style="position:absolute; left:0; right:0; top:0; bottom:0;"
                v-if="isProging"
            >
                <div :style="`${useBorderRadiusStyle} overflow:hidden; width:100%; height:100%;`">
                    <div :style="`background:${effProgBackgroundColor}; height:100%;`">
                        <div :style="`background:${effProgColor}; width:${useProg}%; height:100%;`"></div>
                    </div>
                </div>
            </div>

            <div
                style="position:absolute; left:0; right:0; top:0; bottom:0;"
                v-if="!editable || loadingTrans"
            >
                <div :style="`${useBorderRadiusStyle} overflow:hidden; width:100%; height:100%;`">
                    <div :style="`background:${effDisabledColor}; height:100%;`">
                    </div>
                </div>
            </div>

            <div
                style="position:absolute; left:0; right:0; top:0; bottom:0;"
                v-if="!isProging && loadingTrans"
            >
                <div style="display:flex; align-items:center; justify-content:center; height:100%;">
                    <WIconLoading
                        :name="'cir-rotate'"
                        :color="effLoadingColor"
                        :size="iconSize"
                    ></WIconLoading>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mdiCloseCircle } from '@mdi/js'
import map from 'lodash-es/map'
import join from 'lodash-es/join'
import get from 'lodash-es/get'
import split from 'lodash-es/split'
import isnum from 'wsemi/src/isnum.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import replace from 'wsemi/src/replace.mjs'
import sep from 'wsemi/src/sep.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import oc from 'wsemi/src/color.mjs'
import domCancelEvent from 'wsemi/src/domCancelEvent.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import domRipple from '../js/domRipple.mjs'
import WIcon from './WIcon.vue'
import WIconLoading from './WIconLoading.vue'
import WTooltip from './WTooltip.vue'


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
 * @vue-prop {Object} [borderUsed={top:true,bottom:true,left:true,right:true}] 輸入是否繪製框設定物件，可用鍵值為left、right、top、bottom，各鍵值為是否繪製框線布林值，單位為px，預設{top:true,bottom:true,left:true,right:true}
 * @vue-prop {Object} [borderWidth={top:1,bottom:1,left:1,right:1}] 輸入框寬度設定物件，可用鍵值為left、right、top、bottom，各鍵值為寬度數字，單位為px，預設{top:1,bottom:1,left:1,right:1}
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {Object} [borderRadiusStyle={left:true,right:true}] 輸入框圓角設定物件，可用鍵值為left、right、top、bottom、top-left、bottom-left、top-right、bottom-right，left代表設定top-left與bottom-left，right代表設定top-right與bottom-right，top代表設定top-left與top-right，bottom代表設定bottom-left與bottom-right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為布林值，預設{left:true,right:true}
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='rgb(241,241,241)'] 輸入背景顏色字串，預設'rgb(241,241,241)'
 * @vue-prop {String} [backgroundColorHover='rgb(236,236,236)'] 輸入滑鼠移入時背景顏色字串，預設'rgb(236,236,236)'
 * @vue-prop {String} [backgroundColorActive='orange'] 輸入主動模式時背景顏色字串，預設'orange'
 * @vue-prop {Number} [tooltipBorderRadius=4] 輸入提示文字框圓角度數字，單位為px，預設4
 * @vue-prop {Object} [tooltipPaddingStyle={v:5,h:8}] 輸入提示文字內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:5,h:8}
 * @vue-prop {String} [tooltipTextFontSize='0.85rem'] 輸入提示文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [tooltipTextColor='black'] 輸入提示文字顏色字串，預設'white'
 * @vue-prop {String} [tooltipBackgroundColor='rgba(60,60,60,0.75)'] 輸入背景顏色字串，預設'rgba(60,60,60,0.75)'
 * @vue-prop {Boolean} [shadow=false] 輸入是否顯示陰影布林值，預設false
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [shadowActive=true] 輸入主動模式時是否顯示陰影布林值，預設true
 * @vue-prop {String} [shadowActiveStyle=''] 輸入主動模式時陰影顏色字串，預設值詳見props
 * @vue-prop {String} [rippleColor='rgba(255,255,255,0.4)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
 * @vue-prop {Object} [paddingStyle={v:3,h:15}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:3,h:15}
 * @vue-prop {Number} [shiftLeft=0] 輸入左側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如圖標與左側邊框距離，單位px，預設0
 * @vue-prop {Number} [shiftRight=0] 輸入右側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如關閉圖標與右側邊框距離，單位px，預設0
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式布林值，預設false
 * @vue-prop {Boolean} [close=false] 輸入是否具有關閉按鈕模式布林值，預設false
 * @vue-prop {Boolean} [cursorPointer=true] 輸入是否滑鼠移入顯示pointer樣式布林值，預設true
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式布林值，預設false
 * @vue-prop {String} [loadingColor='grey darken-2'] 輸入載入圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [role='button'] 輸入角色字串，預設'button'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {String} [disabledColor='rgba(255,255,255,0.5)'] 輸入非編輯模式時遮罩顏色字串，預設'rgba(255,255,255,0.5)'
 */
export default {
    directives: {
        domripple: domRipple(),
    },
    components: {
        WIcon,
        WIconLoading,
        WTooltip,
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
        borderUsed: {
            type: Object,
            default: () => {
                return {
                    top: true,
                    bottom: true,
                    left: true,
                    right: true,
                }
            },
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
            default: 'rgb(241,241,241)',
        },
        backgroundColorHover: {
            type: String,
            default: 'rgb(236,236,236)',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange',
        },
        tooltipBorderRadius: {
            type: Number,
            default: 4,
        },
        tooltipPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 5,
                    h: 8,
                }
            },
        },
        tooltipTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        tooltipTextColor: {
            type: String,
            default: 'white',
        },
        tooltipBackgroundColor: {
            type: String,
            default: 'rgba(60,60,60,0.75)',
        },
        shadow: {
            type: Boolean,
            //default: false,
            default: true,
        },
        shadowStyle: {
            type: String,
            // default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
            //使用黑色短陰影比較符合button形象
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
        rippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
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
        cursorPointer: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        loadingColor: {
            type: String,
            default: 'grey darken-2',
        },
        promiseUnlock: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            default: 'button',
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
            //console.log('computed usePadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle, { ext: { left: vo.shiftLeft, right: vo.shiftRight } })

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        effIconColor: function() {
            let vo = this
            return color2hex(vo.iconColor)
        },

        effIconColorHover: function() {
            let vo = this
            return color2hex(vo.iconColorHover)
        },

        effIconColorActive: function() {
            let vo = this
            return color2hex(vo.iconColorActive)
        },

        hasIcon: function() {
            let vo = this
            return vo.icon !== ''
        },

        hasText: function() {
            let vo = this
            return vo.text !== ''
        },

        useIconColor: function() {
            let vo = this
            let r
            if (vo.loadingTrans || vo.isProging) {
                return vo.effIconColor
            }
            r = vo.activeTrans ? vo.effIconColorActive : vo.hoverTrans ? vo.effIconColorHover : vo.effIconColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.effIconColorActive : vo.effIconColor
            }
            return r
        },

        effDisabledColor: function() {
            let vo = this
            return color2hex(vo.disabledColor)
        },

        effProgColor: function() {
            let vo = this
            return color2hex(vo.progColor)
        },

        effProgBackgroundColor: function() {
            let vo = this
            return color2hex(vo.progBackgroundColor)
        },

        effTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

        effTextColorHover: function() {
            let vo = this
            return color2hex(vo.textColorHover)
        },

        effTextColorActive: function() {
            let vo = this
            return color2hex(vo.textColorActive)
        },

        useTextColor: function() {
            let vo = this
            let r
            if (vo.loadingTrans || vo.isProging) {
                return vo.effTextColor
            }
            r = vo.activeTrans ? vo.effTextColorActive : vo.hoverTrans ? vo.effTextColorHover : vo.effTextColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.effTextColorActive : vo.effTextColor
            }
            return r
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        effBorderColor: function() {
            let vo = this
            return color2hex(vo.borderColor)
        },

        effBorderColorHover: function() {
            let vo = this
            return color2hex(vo.borderColorHover)
        },

        effBorderColorActive: function() {
            let vo = this
            return color2hex(vo.borderColorActive)
        },

        useBorderColor: function() {
            let vo = this

            //r
            let r
            if (vo.loadingTrans || vo.isProging) {
                r = vo.effBorderColor //不能直接return, 得由後面join產生border樣式字串
            }
            r = vo.activeTrans ? vo.effBorderColorActive : vo.hoverTrans ? vo.effBorderColorHover : vo.effBorderColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.effBorderColorActive : vo.effBorderColor
            }

            //useBorderUsed
            let bcs = map(vo.useBorderUsed, (v, k) => {
                let c = v ? r : 'transparent'
                return `border-${k}-color:${c};`
            })

            //bc
            let bc = join(bcs, ' ')

            return bc
        },

        useBorderUsed: function() {
            //console.log('useBorderUsed')

            let vo = this

            //四方向style
            let left = true
            let right = true
            let top = true
            let bottom = true
            if (isbol(get(vo, 'borderUsed.left'))) {
                left = get(vo, 'borderUsed.left')
            }
            if (isbol(get(vo, 'borderUsed.right'))) {
                right = get(vo, 'borderUsed.right')
            }
            if (isbol(get(vo, 'borderUsed.top'))) {
                top = get(vo, 'borderUsed.top')
            }
            if (isbol(get(vo, 'borderUsed.bottom'))) {
                bottom = get(vo, 'borderUsed.bottom')
            }

            return {
                left,
                right,
                top,
                bottom,
            }
        },

        useBorderWidth: function() {
            //console.log('useBorderWidth')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.borderWidth)

            //borderWidth
            let borderWidth = `border-width:${cs};`

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

        effBackgroundColor: function() {
            let vo = this
            return color2hex(vo.backgroundColor)
        },

        effBackgroundColorHover: function() {
            let vo = this
            return color2hex(vo.backgroundColorHover)
        },

        effBackgroundColorActive: function() {
            let vo = this
            return color2hex(vo.backgroundColorActive)
        },

        useBackgroundColor: function() {
            let vo = this
            let r
            if (vo.loadingTrans || vo.isProging) {
                return vo.effBackgroundColor
            }
            r = vo.activeTrans ? vo.effBackgroundColorActive : vo.hoverTrans ? vo.effBackgroundColorHover : vo.effBackgroundColor
            if (!vo.editable) {
                r = vo.activeTrans ? vo.effBackgroundColorActive : vo.effBackgroundColor
            }
            return r
        },

        useShadow: function() {
            let vo = this

            function genShadow(c, alpha) {
                let r = color2hex(c)
                let rgba = oc.toRgba(r)
                rgba.a = alpha
                let s = oc.toRgbaString(rgba)
                return s
            }

            function repColor(tmp, tar, color) {
                tmp = replace(tmp, '}', '{')
                let s = split(tmp, '{') //需用slit, 用sep會把前後字串的雙側空白trim掉, 導致組裝回去樣式失效
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

        effLoadingColor: function() {
            let vo = this
            return color2hex(vo.loadingColor)
        },

        useRipple: function() {
            let vo = this

            //check
            if (!vo.editable) {
                return
            }
            if (vo.loadingTrans) {
                return
            }
            if (vo.isProging) {
                return
            }

            return { color: vo.rippleColor, timeDuration: 700 }
        },

        hasTooltop: function() {
            let vo = this
            return isestr(vo.tooltip)
        },

    },
    methods: {

        clickBtn: function (ev) {
            //console.log('methods clickBtn', ev)

            let vo = this

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

            //promiseUnlock
            if (vo.promiseUnlock) {

                //loadingTrans
                vo.loadingTrans = true

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('update:loading', vo.loadingTrans)

                })

                //pm
                let pm = genPm()

                //add msg
                msg.pm = pm

                //pm finally
                pm
                    .catch()
                    .finally(() => {

                        //loadingTrans
                        vo.loadingTrans = false

                        //$nextTick
                        vo.$nextTick(() => {

                            //emit
                            vo.$emit('update:loading', vo.loadingTrans)

                        })

                    })

            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click', msg)

            })

        },

        clickClose: function (ev) {
            //console.log('methods clickClose', ev)

            let vo = this

            //domCancelEvent
            domCancelEvent(ev)

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
