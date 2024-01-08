<template>
    <div :changeParam="changeParam">

        <!-- 避免class group所使用display:flex直接暴露至外部 -->
        <div
            :style="[
                {
                    'transition':'all 0.3s',
                    'display':'flex',
                    'justify-content':'flex-start',
                    'border-radius':borderRadius+'px',
                    'opacity':editable?1:0.6,
                },
                usePadding,
                useBackgroundColor,
                useBorder,
                useShadow,
                useVerticalAlign,
            ]"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
        >

            <div
                :style="`margin-left:${iconShiftOuter}px; margin-right:${iconShiftInner}px; user-select:none; cursor:pointer; outline:none;`"
                tabindex="0"
                @keyup.enter="clickIcon('left')"
                @click="clickIcon('left')"
                v-if="leftIcon"
            >

                <WTooltip
                    :displayType="'line'"
                    :isolated="true"
                    :borderRadius="tooltipBorderRadius"
                    :paddingStyle="tooltipPaddingStyle"
                    :textFontSize="tooltipTextFontSize"
                    :textColor="tooltipTextColor"
                    :backgroundColor="tooltipBackgroundColor"
                    :editable="hasLeftIconTooltop"
                >

                    <template v-slot:trigger>

                        <div ShellEllipse="leftIcon">
                            <WIcon
                                :icon="leftIcon"
                                :size="leftIconSize"
                                :color="useLeftIconColor"
                                :colorHover="useLeftIconColor"
                            ></WIcon>
                        </div>

                    </template>

                    <template v-slot:content>
                        {{leftIconTooltip}}
                    </template>

                </WTooltip>

            </div>

            <div :style="[{'width':'100%'}]">

                <slot></slot>

            </div>

            <div
                :style="`margin-right:${iconShiftOuter}px; margin-left:${iconShiftInner}px; user-select:none; cursor:pointer; outline:none;`"
                tabindex="0"
                @keyup.enter="clickIcon('right')"
                @click="clickIcon('right')"
                v-if="rightIcon"
            >

                <WTooltip
                    :displayType="'line'"
                    :isolated="true"
                    :borderRadius="tooltipBorderRadius"
                    :paddingStyle="tooltipPaddingStyle"
                    :textFontSize="tooltipTextFontSize"
                    :textColor="tooltipTextColor"
                    :backgroundColor="tooltipBackgroundColor"
                    :editable="hasRightIconTooltop"
                >

                    <template v-slot:trigger>

                        <div ShellEllipse="rightIcon">
                            <WIcon
                                :icon="rightIcon"
                                :size="rightIconSize"
                                :color="useRightIconColor"
                                :colorHover="useRightIconColor"
                            ></WIcon>
                        </div>

                    </template>

                    <template v-slot:content>
                        {{rightIconTooltip}}
                    </template>

                </WTooltip>

            </div>

        </div>

    </div>
</template>

<script>
import isestr from 'wsemi/src/isestr.mjs'
import convertColor from '../js/convertColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WIcon from './WIcon.vue'
import WTooltip from './WTooltip.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:0,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:15}
 * @vue-prop {Number} [borderWidth=1] 輸入邊框寬度數字，單位為px，預設1
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorHover='transparent'] 輸入滑鼠移入時背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorFocus='transparent'] 輸入取得焦點時背景顏色字串，預設'transparent'
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorFocus='transparent'] 輸入取得焦點時邊框顏色字串，預設'transparent'
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [leftIconSize=24] 輸入左側圖標大小，單位為px，預設24
 * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [leftIconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入取得焦點時左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [rightIconSize=24] 輸入右側圖標大小，單位為px，預設24
 * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [rightIconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時右側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入取得焦點時右側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=-10] 輸入左右側圖標與外框距離數字，單位為px，預設-10
 * @vue-prop {Number} [iconShiftInner=5] 輸入左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {Number} [tooltipBorderRadius=4] 輸入提示文字框圓角度數字，單位為px，預設4
 * @vue-prop {Object} [tooltipPaddingStyle={v:5,h:8}] 輸入提示文字內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:5,h:8}
 * @vue-prop {String} [tooltipTextFontSize='0.85rem'] 輸入提示文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [tooltipTextColor='white'] 輸入提示文字顏色字串，預設'white'
 * @vue-prop {String} [tooltipBackgroundColor='rgba(60,60,60,0.75)'] 輸入背景顏色字串，預設'rgba(60,60,60,0.75)'
 * @vue-prop {String} [verticalAlign='center'] 輸入input與文字之垂直對齊字串，可選'top'、'center'、'bottom'，預設'center'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [hovered=false] 輸入是否為滑鼠移入狀態，預設false
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
        WIcon,
        WTooltip,
    },
    props: {
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 15,
                }
            },
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        backgroundColorHover: {
            type: String,
            default: 'transparent',
        },
        backgroundColorFocus: {
            type: String,
            default: 'transparent',
        },
        borderWidth: {
            type: Number,
            default: 1,
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
        borderColorFocus: {
            type: String,
            default: 'transparent',
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        leftIcon: {
            type: String,
            default: '',
        },
        leftIconSize: {
            type: Number,
            default: 24,
        },
        leftIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        leftIconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        leftIconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        leftIconTooltip: {
            type: String,
            default: '',
        },
        rightIcon: {
            type: String,
            default: '',
        },
        rightIconSize: {
            type: Number,
            default: 24,
        },
        rightIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        rightIconColorHover: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        rightIconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        rightIconTooltip: {
            type: String,
            default: '',
        },
        iconShiftOuter: {
            type: Number,
            default: -10,
        },
        iconShiftInner: {
            type: Number,
            default: 5,
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
        verticalAlign: {
            type: String,
            default: 'center',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        hovered: {
            type: Boolean,
            default: false,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            hoveredTrans: false,
            focusedTrans: false,
        }
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //hoveredTrans
            vo.hoveredTrans = vo.hovered

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            let s = {}
            if (vo.focusedTrans) {
                s['background-color'] = convertColor(vo.backgroundColorFocus)
                return s
            }
            if (vo.hoveredTrans) {
                s['background-color'] = convertColor(vo.backgroundColorHover)
                return s
            }
            s['background-color'] = convertColor(vo.backgroundColor)
            return s
        },

        useBorder: function() {
            //console.log('computed useBorder')

            let vo = this

            let s = {}
            if (vo.focusedTrans) {
                s['border'] = `${vo.borderWidth}px solid ${convertColor(vo.borderColorFocus)}`
                return s
            }
            if (vo.hoveredTrans) {
                s['border'] = `${vo.borderWidth}px solid ${convertColor(vo.borderColorHover)}`
                return s
            }
            s['border'] = `${vo.borderWidth}px solid ${convertColor(vo.borderColor)}`
            return s
        },

        useShadow: function() {
            //console.log('computed useShadow')

            let vo = this

            let s = {}
            if (vo.shadow) {
                s['box-shadow'] = '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)'
            }
            return s
        },

        useLeftIconColor: function() {
            //console.log('computed useLeftIconColor')

            let vo = this

            if (vo.hoveredTrans) {
                return convertColor(vo.leftIconColorHover)
            }
            else if (vo.focusedTrans) {
                return convertColor(vo.leftIconColorFocus)
            }
            return convertColor(vo.leftIconColor)
        },

        useRightIconColor: function() {
            //console.log('computed useRightIconColor')

            let vo = this

            if (vo.hoveredTrans) {
                return convertColor(vo.rightIconColorHover)
            }
            else if (vo.focusedTrans) {
                return convertColor(vo.rightIconColorFocus)
            }
            return convertColor(vo.rightIconColor)
        },

        useTitleColor: function() {
            //console.log('computed useTitleColor')

            let vo = this

            let s = {}
            s['color'] = convertColor(vo.titleColor)
            return s
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle, { semicolon: false })

            //padding
            let padding = {
                padding: cs,
            }

            return padding
        },

        hasLeftIconTooltop: function() {
            let vo = this
            return isestr(vo.leftIconTooltip)
        },

        hasRightIconTooltop: function() {
            let vo = this
            return isestr(vo.rightIconTooltip)
        },

        useVerticalAlign: function() {
            //console.log('computed useVerticalAlign')

            let vo = this

            let s = {}
            if (vo.verticalAlign === 'center') {
                s['align-items'] = 'center'
            }
            else if (vo.verticalAlign === 'top') {
                s['align-items'] = 'flex-start'
            }
            else if (vo.verticalAlign === 'bottom') {
                s['align-items'] = 'flex-end'
            }
            return s
        },

    },
    methods: {

        clickIcon: function (mode) {
            //console.log('methods clickIcon', mode)

            let vo = this

            if (vo.editable === false) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click-' + mode)

            })

        },

        mouseenter: function() {
            //console.log('methods mouseenter')

            let vo = this

            //hoveredTrans
            vo.hoveredTrans = true

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:hovered', true)

            })

        },

        mouseleave: function() {
            //console.log('methods mouseleave')

            let vo = this

            //hoveredTrans
            vo.hoveredTrans = false

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:hovered', false)

            })

        },

    },
}
</script>

<style scoped>
</style>
