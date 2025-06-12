<template>
    <div
        :style="`position:relative; transition:all 0.3s; border-top-left-radius:${borderRadius}px; border-top-right-radius:${borderRadius}px; ${usePadding} background:${useBackgroundColor}; ${editable&&cursorPointer?'cursor:pointer;':'cursor:context-menu;'}`"
        v-domripple="{color:rippleColor}"
        @mouseenter="mouseEnter=true"
        @mouseleave="mouseEnter=false"
        @click="clickItem"
    >
        <!-- 文字顏色與字型大小放在slot外, 使組件設定能於slot內收到預設影響 -->
        <div :style="`transition:all 0.3s; color:${useTextColor}; ${useTextFontSize}`">

            <slot
                name="item"
                :isHover="mouseEnter"
                :isActive="active"
            >

                <div style="display:flex; align-items:center;">

                    <slot
                        name="item-left"
                        :isHover="mouseEnter"
                        :isActive="active"
                    >
                    </slot>

                    <slot
                        name="item-content"
                        :isHover="mouseEnter"
                        :isActive="active"
                    >

                        <WIcon
                            style="margin-right:8px;"
                            :icon="icon"
                            :color="useIconColor"
                            :colorHover="useIconColor"
                            :size="iconSize"
                            v-if="hasIcon"
                        ></WIcon>

                        <div>
                            {{text}}
                        </div>

                    </slot>

                    <!-- 尚未使用 -->
                    <slot
                        name="item-right"
                        :isHover="mouseEnter"
                        :isActive="active"
                    >
                    </slot>

                </div>

            </slot>

            <div
                style="position:absolute; left:0; right:0; top:0; bottom:0;"
                v-if="!editable"
            >
                <div :style="`overflow:hidden; width:100%; height:100%;`">
                    <div :style="`background:${effDisabledColor}; height:100%;`">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import replace from 'wsemi/src/replace.mjs'
import domRipple from '../js/domRipple.mjs'
import convertColor from '../js/convertColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字字型大小字串，預設'1rem'
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式布林值，預設false
 * @vue-prop {Object} [paddingStyle={v:10,h:12}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {Number} [borderRadius=0] 輸入框圓角度數字，單位為px，預設0
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [backgroundColorActive='orange lighten-1'] 輸入主動模式時背景顏色字串，預設'orange lighten-1'
 * @vue-prop {String} [backgroundColorDisabled='white'] 輸入非啟用模式時背景顏色字串，預設'white'
 * @vue-prop {String} [textColor='#444'] 輸入文字顏色字串，預設'#444'
 * @vue-prop {String} [textColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [textColorDisabled='#444'] 輸入非啟用模式時文字顏色字串，預設'#444'
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [iconColor='#444'] 輸入圖標顏色字串，預設'#444'
 * @vue-prop {String} [iconColorHover='#222'] 輸入滑鼠移入時圖標顏色字串，預設'#222'
 * @vue-prop {String} [iconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {String} [iconColorDisabled='#444'] 輸入非啟用模式時圖標顏色字串，預設'#444'
 * @vue-prop {String} [rippleColor='rgba(255,255,255,0.4)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
 * @vue-prop {Boolean} [cursorPointer=true] 輸入是否滑鼠移入顯示pointer樣式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為可點擊模式布林值，預設true
 * @vue-prop {String} [disabledColor='rgba(255,255,255,0.5)'] 輸入非編輯模式時遮罩顏色字串，預設'rgba(255,255,255,0.5)'
 */
export default {
    directives: {
        domripple: domRipple(),
    },
    components: {
        WIcon,
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        textFontSize: {
            type: String,
            default: '1rem',
        },
        active: {
            type: Boolean,
            default: false,
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 10,
                    h: 12,
                }
            },
        },
        borderRadius: {
            type: Number,
            default: 0,
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.2)',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange lighten-1',
        },
        backgroundColorDisabled: {
            type: String,
            default: 'white',
        },
        textColor: {
            type: String,
            default: '#444',
        },
        textColorHover: {
            type: String,
            default: '#222',
        },
        textColorActive: {
            type: String,
            default: 'white',
        },
        textColorDisabled: {
            type: String,
            default: '#444',
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
            default: '#444',
        },
        iconColorHover: {
            type: String,
            default: '#222',
        },
        iconColorActive: {
            type: String,
            default: 'white',
        },
        iconColorDisabled: {
            type: String,
            default: '#444',
        },
        rippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        disabledColor: {
            type: String,
            default: 'rgba(255,255,255,0.5)',
        },
        cursorPointer: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mouseEnter: false,

        }
    },
    computed: {

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        hasIcon: function() {
            let vo = this
            return vo.icon !== ''
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

        effBackgroundColor: function() {
            let vo = this
            return convertColor(vo.backgroundColor)
        },

        effBackgroundColorHover: function() {
            let vo = this
            return convertColor(vo.backgroundColorHover)
        },

        effBackgroundActive: function() {
            let vo = this
            return convertColor(vo.backgroundColorActive)
        },

        effBackgroundColorDisabled: function() {
            let vo = this
            return convertColor(vo.backgroundColorDisabled)
        },

        useBackgroundColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effBackgroundColorDisabled
            }
            if (vo.active) {
                return vo.effBackgroundActive
            }
            return vo.mouseEnter ? vo.effBackgroundColorHover : vo.effBackgroundColor
        },

        effTextColor: function() {
            let vo = this
            return convertColor(vo.textColor)
        },

        effTextColorHover: function() {
            let vo = this
            return convertColor(vo.textColorHover)
        },

        effTextActive: function() {
            let vo = this
            return convertColor(vo.textColorActive)
        },

        effTextColorDisabled: function() {
            let vo = this
            return convertColor(vo.textColorDisabled)
        },

        useTextColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effTextColorDisabled
            }
            if (vo.active) {
                return vo.effTextActive
            }
            return vo.mouseEnter ? vo.effTextColorHover : vo.effTextColor
        },

        effIconColor: function() {
            let vo = this
            return convertColor(vo.iconColor)
        },

        effIconColorHover: function() {
            let vo = this
            return convertColor(vo.iconColorHover)
        },

        effIconActive: function() {
            let vo = this
            return convertColor(vo.iconColorActive)
        },

        effIconColorDisabled: function() {
            let vo = this
            return convertColor(vo.iconColorDisabled)
        },

        useIconColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effIconColorDisabled
            }
            if (vo.active) {
                return vo.effIconActive
            }
            return vo.mouseEnter ? vo.effIconColorHover : vo.effIconColor
        },

        effDisabledColor: function() {
            let vo = this
            return convertColor(vo.disabledColor)
        },

    },
    methods: {

        clickItem: function() {
            // console.log('clickItem')

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //emit
            vo.$emit('click', { icon: vo.icon, text: vo.text })

        },

    }
}
</script>

<style scoped>
</style>
