<template>
    <div
        :style="`transition:all 0.3s; ${usePadding} background:${useBackgroundColor}; cursor:pointer;`"
        v-domripple="{color:rippleColor}"
        @mouseenter="mouseEnter=true"
        @mouseleave="mouseEnter=false"
        @click="$emit('click',{icon,text})"
    >
        <div style="display:flex; align-items:center;">

            <slot
                :mouseEnter="mouseEnter"
                :isActive="active"
            >

                <WIcon
                    style="margin-right:8px;"
                    :icon="icon"
                    :color="useIconColor"
                    :size="iconSize"
                    v-if="hasIcon"
                ></WIcon>

                <div :style="`color:${useTextColor}; ${useTextFontSize}`">
                    {{text}}
                </div>

            </slot>

        </div>
    </div>
</template>

<script>
import get from 'lodash/get'
import replace from 'wsemi/src/replace.mjs'
import domRipple from '../js/domRipple.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字字型大小字串，預設'1rem'
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式，預設false
 * @vue-prop {Object} [paddingStyle={v:10,h:12}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [backgroundColorActive='orange lighten-1'] 輸入主動模式時背景顏色字串，預設'orange lighten-1'
 * @vue-prop {String} [textColor='#444'] 輸入文字顏色字串，預設'#444'
 * @vue-prop {String} [textColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [iconColor='#444'] 輸入圖標顏色字串，預設'#444'
 * @vue-prop {String} [iconColorHover='#222'] 輸入滑鼠移入時圖標顏色字串，預設'#222'
 * @vue-prop {String} [iconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {String} [rippleColor='rgba(255,255,255,0.4)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
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
        rippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
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
            return color2hex(vo.backgroundColor)
        },

        effBackgroundColorHover: function() {
            let vo = this
            return color2hex(vo.backgroundColorHover)
        },

        effBackgroundActive: function() {
            let vo = this
            return color2hex(vo.backgroundColorActive)
        },

        useBackgroundColor: function() {
            let vo = this
            if (vo.active) {
                return vo.effBackgroundActive
            }
            return vo.mouseEnter ? vo.effBackgroundColorHover : vo.effBackgroundColor
        },

        effTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

        effTextColorHover: function() {
            let vo = this
            return color2hex(vo.textColorHover)
        },

        effTextActive: function() {
            let vo = this
            return color2hex(vo.textColorActive)
        },

        useTextColor: function() {
            let vo = this
            if (vo.active) {
                return vo.effTextActive
            }
            return vo.mouseEnter ? vo.effTextColorHover : vo.effTextColor
        },

        effIconColor: function() {
            let vo = this
            return color2hex(vo.iconColor)
        },

        effIconColorHover: function() {
            let vo = this
            return color2hex(vo.iconColorHover)
        },

        effIconActive: function() {
            let vo = this
            return color2hex(vo.iconColorActive)
        },

        useIconColor: function() {
            let vo = this
            if (vo.active) {
                return vo.effIconActive
            }
            return vo.mouseEnter ? vo.effIconColorHover : vo.effIconColor
        },

    },
    methods: {

        getIcon: function(item) {
            return get(item, 'icon', '')
        },

        getText: function(item) {
            let t = get(item, 'text', '')
            if (t === '') {
                return item
            }
        },

    }
}
</script>

<style scoped>
</style>
