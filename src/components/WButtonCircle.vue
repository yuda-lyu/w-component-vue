<template>
    <div
        style="display:inline-block; vertical-align:middle; outline:none; user-select:none;"
        :role="editable?role:''"
        :changeActive="changeActive"
        :changeLoading="changeLoading"
    >

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
                    :style="`position:relative; transition:all 0.3s; ${usePadding} ${useBorderRadius} border:${borderWidth}px solid ${useBorderColor}; background:${useBackgroundColor}; ${editable&&cursorPointer?'cursor:pointer;':''} box-shadow:${useShadow}; outline:none; user-select:none; overflow:hidden;`"
                    tabindex="0"
                    @mouseenter="hoverTrans=true;$emit('mouseenter',$event)"
                    @mouseleave="hoverTrans=false;$emit('mouseleave',$event)"
                    @focus="focusTrans=true"
                    @blur="focusTrans=false"
                    @keyup.enter="clickBtn($event)"
                    @click="ripple($event);clickBtn($event)"
                >

                    <div style="display:flex; align-items:center; justify-content:center;">

                        <WIcon
                            :icon="icon"
                            :color="useIconColor"
                            :colorHover="useIconColor"
                            :size="iconSize"
                            v-if="!loadingTrans"
                        ></WIcon>

                        <WIconLoading
                            :name="'cir-rotate'"
                            :color="effLoadingColor"
                            :size="iconSize"
                            v-if="loadingTrans"
                        ></WIconLoading>

                    </div>

                    <div
                        style="position:absolute; left:0; right:0; top:0; bottom:0;"
                        v-if="!editable"
                    >
                        <div :style="`border-radius:50%; overflow:hidden; width:100%; height:100%;`">
                            <div :style="`background:${effDisabledColor}; height:100%;`">
                            </div>
                        </div>
                    </div>

                </div>

            </template>

            <template v-slot:content>
                {{tooltip}}
            </template>

        </WTooltip>

    </div>
</template>

<script>
import get from 'lodash-es/get'
import map from 'lodash-es/map'
import join from 'lodash-es/join'
import split from 'lodash-es/split'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import replace from 'wsemi/src/replace.mjs'
import sep from 'wsemi/src/sep.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import domRipple from 'wsemi/src/domRipple.mjs'
import oc from 'wsemi/src/color.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WIcon from './WIcon.vue'
import WIconLoading from './WIconLoading.vue'
import WTooltip from './WTooltip.vue'


/**
 * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [iconSize=22] 輸入圖標大小，單位為px，預設22
 * @vue-prop {String} [iconColor='grey darken-1'] 輸入按鈕圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [iconColorHover='grey darken-2'] 輸入滑鼠移入時按鈕圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [iconColorFocus='grey darken-3'] 輸入取得焦點時按鈕圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [iconColorActive='grey darken-3'] 輸入主動模式時按鈕圖標顏色字串，預設'grey darken-3'
 * @vue-prop {Number|String} [borderRadius='50%'] 輸入框圓角度數字或字串，若給予數字時單位為px，預設'50%'
 * @vue-prop {Object} [borderRadiusStyle={left:true,right:true}] 輸入框圓角設定物件，可用鍵值為left、right、top、bottom、top-left、bottom-left、top-right、bottom-right，left代表設定top-left與bottom-left，right代表設定top-right與bottom-right，top代表設定top-left與top-right，bottom代表設定bottom-left與bottom-right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為布林值，預設{left:true,right:true}
 * @vue-prop {Number} [borderWidth=0] 輸入框線寬度數字，單位為px，預設0
 * @vue-prop {String} [borderColor='transparent'] 輸入按鈕框線顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時按鈕框線顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorFocus='transparent'] 輸入取得焦點時按鈕框線顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時按鈕框線顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='rgb(241,241,241)'] 輸入按鈕背景顏色字串，預設'rgb(241,241,241)'
 * @vue-prop {String} [backgroundColorHover='rgb(236,236,236)'] 輸入滑鼠移入時按鈕背景顏色字串，預設'rgb(236,236,236)'
 * @vue-prop {String} [backgroundColorFocus='rgb(230,230,230)'] 輸入取得焦點時按鈕背景顏色字串，預設'rgb(230,230,230)'
 * @vue-prop {String} [backgroundColorActive='rgb(230,230,230)'] 輸入主動模式時按鈕背景顏色字串，預設'rgb(230,230,230)'
 * @vue-prop {Number} [tooltipBorderRadius=4] 輸入提示文字框圓角度數字，單位為px，預設4
 * @vue-prop {Object} [tooltipPaddingStyle={v:5,h:8}] 輸入提示文字內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:5,h:8}
 * @vue-prop {String} [tooltipTextFontSize='0.85rem'] 輸入提示文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [tooltipTextColor='black'] 輸入提示文字顏色字串，預設'white'
 * @vue-prop {String} [tooltipBackgroundColor='rgba(60,60,60,0.75)'] 輸入背景顏色字串，預設'rgba(60,60,60,0.75)'
 * @vue-prop {String} [rippleColor='rgba(255, 255, 255, 0.5)'] 輸入ripple效果顏色字串，預設'rgba(255, 255, 255, 0.5)'
 * @vue-prop {Object} [paddingStyle={v:4,h:4}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:4,h:4}
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式布林值，預設false
 * @vue-prop {Boolean} [cursorPointer=true] 輸入是否滑鼠移入顯示pointer樣式，預設true
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {String} [loadingColor='grey darken-2'] 輸入載入圖標顏色字串，預設'grey darken-2'
 * @vue-prop {Boolean} [promiseUnlock=false] 輸入是否點擊後自動設定為loading為true並需使用promise解鎖布林值，預設false
 * @vue-prop {String} [role='button'] 輸入角色字串，預設'button'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {String} [disabledColor='rgba(255,255,255,0.5)'] 輸入非編輯模式時遮罩顏色字串，預設'rgba(255,255,255,0.5)'
 */
export default {
    components: {
        WIcon,
        WIconLoading,
        WTooltip,
    },
    props: {
        tooltip: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        iconSize: {
            type: Number,
            default: 22,
        },
        iconColor: {
            type: String,
            default: 'grey darken-1',
        },
        iconColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        iconColorFocus: {
            type: String,
            default: 'grey darken-3',
        },
        iconColorActive: {
            type: String,
            default: 'grey darken-3',
        },
        borderRadius: {
            type: [Number, String],
            default: '50%',
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
        borderWidth: {
            type: Number,
            default: 0,
        },
        borderColor: {
            type: String,
            default: 'transparent',
        },
        borderColorHover: {
            type: String,
            default: 'transparent',
        },
        borderColorFocus: {
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
        backgroundColorFocus: {
            type: String,
            default: 'rgb(230,230,230)',
        },
        backgroundColorActive: {
            type: String,
            default: 'rgb(230,230,230)',
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
            default: true,
        },
        shadowStyle: {
            type: String,
            // default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
            //使用黑色短陰影比較符合button形象
            default: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        },
        rippleColor: {
            type: String,
            default: 'rgba(255, 255, 255, 0.5)',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 4,
                    h: 4,
                }
            },
        },
        active: {
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

            activeTrans: false,
            hoverTrans: false,
            focusTrans: false,
            loadingTrans: false,

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

        changeLoading: function() {
            //console.log('computed changeLoading')

            let vo = this

            //save
            vo.loadingTrans = vo.loading

            return ''
        },

        effIconColor: function() {
            let vo = this
            return color2hex(vo.iconColor)
        },

        effIconColorHover: function() {
            let vo = this
            return color2hex(vo.iconColorHover)
        },

        effIconColorFocus: function() {
            let vo = this
            return color2hex(vo.iconColorFocus)
        },

        effIconColorActive: function() {
            let vo = this
            return color2hex(vo.iconColorActive)
        },

        useIconColor: function() {
            let vo = this
            let r
            if (vo.loadingTrans) {
                return vo.effIconColor
            }
            r = vo.activeTrans
                ? vo.effIconColorActive
                : vo.focusTrans
                    ? vo.effIconColorFocus
                    : vo.hoverTrans
                        ? vo.effIconColorHover
                        : vo.effIconColor
            if (!vo.editable) {
                r = vo.activeTrans
                    ? vo.effIconColorActive
                    : vo.effIconColor
            }
            return r
        },

        useBorderRadius: function() {
            //console.log('useBorderRadius')

            let vo = this

            //bdr
            let bdr = '0px'
            if (isnum(vo.borderRadius)) {
                let r = cdbl(vo.borderRadius)
                bdr = `${r}px;`
            }
            else if (isestr(vo.borderRadius)) {
                bdr = vo.borderRadius
            }

            //四方向radius
            let tl = ''
            let tr = ''
            let bl = ''
            let br = ''
            if (get(vo, 'borderRadiusStyle.left') === true) {
                tl = bdr
                bl = bdr
            }
            if (get(vo, 'borderRadiusStyle.right') === true) {
                tr = bdr
                br = bdr
            }
            if (get(vo, 'borderRadiusStyle.top') === true) {
                tl = bdr
                tr = bdr
            }
            if (get(vo, 'borderRadiusStyle.bottom') === true) {
                bl = bdr
                br = bdr
            }
            if (get(vo, 'borderRadiusStyle.topLeft') === true || get(vo, 'borderRadiusStyle.top-left') === true) {
                tl = bdr
            }
            if (get(vo, 'borderRadiusStyle.topRight') === true || get(vo, 'borderRadiusStyle.top-right') === true) {
                tr = bdr
            }
            if (get(vo, 'borderRadiusStyle.bottomLeft') === true || get(vo, 'borderRadiusStyle.bottom-left') === true) {
                bl = bdr
            }
            if (get(vo, 'borderRadiusStyle.bottomRight') === true || get(vo, 'borderRadiusStyle.bottom-right') === true) {
                br = bdr
            }

            //borderRadius
            let borderRadius = `border-top-left-radius:${tl}; border-top-right-radius:${tr}; border-bottom-left-radius:${bl}; border-bottom-right-radius:${br};`

            return borderRadius
        },

        effBorderColor: function() {
            let vo = this
            return color2hex(vo.borderColor)
        },

        effBorderColorHover: function() {
            let vo = this
            return color2hex(vo.borderColorHover)
        },

        effBorderColorFocus: function() {
            let vo = this
            return color2hex(vo.borderColorFocus)
        },

        effBorderColorActive: function() {
            let vo = this
            return color2hex(vo.borderColorActive)
        },

        useBorderColor: function() {
            let vo = this
            let r
            if (vo.loadingTrans) {
                return vo.effBorderColor
            }
            r = vo.activeTrans
                ? vo.effBorderColorActive
                : vo.focusTrans
                    ? vo.effBorderColorFocus
                    : vo.hoverTrans
                        ? vo.effBorderColorHover
                        : vo.effBorderColor
            if (!vo.editable) {
                r = vo.activeTrans
                    ? vo.effBorderColorActive
                    : vo.effBorderColor
            }
            return r
        },

        effBackgroundColor: function() {
            let vo = this
            return color2hex(vo.backgroundColor)
        },

        effBackgroundColorHover: function() {
            let vo = this
            return color2hex(vo.backgroundColorHover)
        },

        effBackgroundColorFocus: function() {
            let vo = this
            return color2hex(vo.backgroundColorFocus)
        },

        effBackgroundColorActive: function() {
            let vo = this
            return color2hex(vo.backgroundColorActive)
        },

        useBackgroundColor: function() {
            let vo = this
            let r
            if (vo.loadingTrans) {
                return vo.effBackgroundColor
            }
            r = vo.activeTrans
                ? vo.effBackgroundColorActive
                : vo.focusTrans
                    ? vo.effBackgroundColorFocus
                    : vo.hoverTrans
                        ? vo.effBackgroundColorHover
                        : vo.effBackgroundColor
            if (!vo.editable) {
                r = vo.activeTrans
                    ? vo.effBackgroundColorActive
                    : vo.effBackgroundColor
            }
            return r
        },

        effRippleColor: function() {
            let vo = this
            return color2hex(vo.rippleColor)
        },

        effLoadingColor: function() {
            let vo = this
            return color2hex(vo.loadingColor)
        },

        effDisabledColor: function() {
            let vo = this
            return color2hex(vo.disabledColor)
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

            // //shadowActive
            // if (vo.active && vo.shadowActive) {
            //     if (isestr(vo.shadowActiveStyle)) {
            //         return repColor(vo.shadowActiveStyle, 'backgroundColorActiveAlpha', vo.backgroundColorActive)
            //     }
            //     return ''
            // }

            //shadow
            if (vo.shadow) {
                if (isestr(vo.shadowStyle)) {
                    return repColor(vo.shadowStyle, 'backgroundColorAlpha', vo.backgroundColor)
                }
                return ''
            }

            return ''
        },

        hasTooltop: function() {
            let vo = this
            return isestr(vo.tooltip)
        },

    },
    methods: {

        ripple: function(e) {
            // console.log('methods ripple', e)

            let vo = this

            //check
            if (!vo.editable) {
                return
            }
            if (vo.loadingTrans) {
                return
            }

            //nextTick
            vo.$nextTick(() => {

                //domRipple
                domRipple(e.currentTarget, e, {
                    color: vo.effRippleColor,
                    timeDuration: 500,
                })

            })

        },

        clickBtn: function (ev) {
            //console.log('methods clickBtn', ev)

            let vo = this

            //check
            if (!vo.editable) {
                return
            }
            if (vo.loadingTrans) {
                return
            }

            //promiseUnlock
            if (!vo.promiseUnlock) {

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('click')

                })

            }
            else {

                //loadingTrans
                vo.loadingTrans = true

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('update:loading', vo.loadingTrans)

                })

                //pm
                let pm = genPm()

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('click', { pm })

                })

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

        },

    },
}
</script>

<style scoped>
</style>
