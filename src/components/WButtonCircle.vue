<template>
    <div
        style="display:inline-block; vertical-align:middle; outline:none; user-select:none;"
        role="button"
    >

        <v-tooltip
            bottom
            transition="slide-y-transition"
            :disabled="!tooltip"
        >

            <template v-slot:activator="{ on }">

                <!-- v-tooltip下第1層dom會無法拖曳, 點擊事件於這層觸發, 且組件內tabindex不能重複, 故本層設定為0 -->
                <div
                    v-on="on"
                    :style="`position:relative; transition:all 0.3s; border-radius:50%; ${usePadding} background:${useBackgroundColor}; cursor:pointer; outline:none; user-select:none; box-shadow:${useShadow};`"
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
                            :size="iconSize"
                            v-if="!loading"
                        ></WIcon>

                        <WIconLoading
                            :name="'cir-rotate'"
                            :color="useIconColor"
                            :size="iconSize"
                            v-if="loading"
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

            <span>{{tooltip}}</span>

        </v-tooltip>

    </div>
</template>

<script>
import map from 'lodash/map'
import join from 'lodash/join'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import replace from 'wsemi/src/replace.mjs'
import sep from 'wsemi/src/sep.mjs'
import domRipple from 'wsemi/src/domRipple.mjs'
import oc from 'wsemi/src/color.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WIcon from './WIcon.vue'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [iconSize=22] 輸入圖標大小，單位為px，預設22
 * @vue-prop {String} [iconColor='grey darken-1'] 輸入按鈕圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [iconColorHover='grey darken-2'] 輸入滑鼠移入時按鈕圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [iconColorFocus='grey darken-3'] 輸入取得焦點時按鈕圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [backgroundColor='rgb(241,241,241)'] 輸入按鈕背景顏色字串，預設'rgb(241,241,241)'
 * @vue-prop {String} [backgroundColorHover='rgb(236,236,236)'] 輸入滑鼠移入時按鈕背景顏色字串，預設'rgb(236,236,236)'
 * @vue-prop {String} [backgroundColorFocus='rgb(230,230,230)'] 輸入取得焦點時按鈕背景顏色字串，預設'rgb(230,230,230)'
 * @vue-prop {String} [rippleColor='rgba(255, 255, 255, 0.5)'] 輸入ripple效果顏色字串，預設'rgba(255, 255, 255, 0.5)'
 * @vue-prop {Object} [paddingStyle={v:4,h:4}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:4,h:4}
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {String} [disabledColor='rgba(255,255,255,0.5)'] 輸入非編輯模式時遮罩顏色字串，預設'rgba(255,255,255,0.5)'
 */
export default {
    components: {
        WIcon,
        WIconLoading,
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
        shadow: {
            type: Boolean,
            default: true,
        },
        shadowStyle: {
            type: String,
            // default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
            //使用黑色短陰影比較符合chip(tag)形象
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
        loading: {
            type: Boolean,
            default: false,
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
            hoverTrans: false,
            focusTrans: false,
        }
    },
    mounted: function() {
    },
    computed: {

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

        useIconColor: function() {
            let vo = this
            let r = vo.focusTrans ? vo.effIconColorFocus : vo.hoverTrans ? vo.effIconColorHover : vo.effIconColor
            if (!vo.editable) {
                // r = vo.focusTrans ? vo.effIconColorFocus : vo.effIconColor
                r = vo.effIconColor
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

        useBackgroundColor: function() {
            let vo = this
            let r = vo.focusTrans ? vo.effBackgroundColorFocus : vo.hoverTrans ? vo.effBackgroundColorHover : vo.effBackgroundColor
            if (!vo.editable) {
                r = vo.focusTrans ? vo.effBackgroundColorFocus : vo.effBackgroundColor
            }
            return r
        },

        effDisabledColor: function() {
            let vo = this
            return color2hex(vo.disabledColor)
        },

        effRippleColor: function() {
            let vo = this
            return color2hex(vo.rippleColor)
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

    },
    methods: {

        ripple: function(e) {
            // console.log('methods ripple', e)

            let vo = this

            //check
            if (!vo.editable) {
                return
            }
            if (vo.loading) {
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

            //stopPropagation, 避免按鈕中使用slot加入按鈕, 會因冒泡被觸發
            ev.stopPropagation()

            //check
            if (!vo.editable) {
                return
            }
            if (vo.loading) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click')

            })

        },

    },
}
</script>

<style scoped>
</style>
