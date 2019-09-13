<template>
    <div>

        <div style="position:relative;">

            <div :style="[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]">
                {{title}}
            </div>

        </div>

        <div
            :class="{'group':true,'shadow':borderShadow}"
            :style="[useBackgroundColor,useBorder,usePadding,{'border-radius':borderRadius+'px'},{'opacity':editable?1:0.6}]"
            @mouseenter="focused=true"
            @mouseleave="focused=false"
        >

            <div style="margin-left:5px; cursor:pointer;" @click="clickIcon('left')" v-if="leftIcon">

                <v-tooltip bottom transition="slide-y-transition" :disabled="leftIconTooltip===''">

                    <template v-slot:activator="{ on: ttShellEllipseLeft }">
                        <div ShellEllipse="leftIcon" v-on="{...ttShellEllipseLeft}">
                            <w-icon
                                :icon="leftIcon"
                                :color="focused?leftIconColorHover:leftIconColor"
                            ></w-icon>
                        </div>
                    </template>

                    <span>{{leftIconTooltip}}</span>

                </v-tooltip>

            </div>

            <div :style="[{'width':'100%'},usePaddingSlot]">

                <slot></slot>

            </div>

            <div style="margin-right:5px; cursor:pointer;" @click="clickIcon('right')" v-if="rightIcon">

                <v-tooltip bottom transition="slide-y-transition" :disabled="rightIconTooltip===''">

                    <template v-slot:activator="{ on: ttShellEllipseRight }">
                        <div ShellEllipse="rightIcon" v-on="{...ttShellEllipseRight}">
                            <w-icon
                                :icon="rightIcon"
                                :color="focused?rightIconColorHover:rightIconColor"
                            ></w-icon>
                        </div>
                    </template>

                    <span>{{rightIconTooltip}}</span>

                </v-tooltip>

            </div>

        </div>

    </div>
</template>

<script>
import { color2hex } from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'

/**
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度，單位為px，預設30
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='white'] 輸入背景Hover顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入邊框Hover顏色字串，預設'white'
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [leftIconColorHover='deep-orange lighten-1'] 輸入左側圖標Hover時顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [rightIconColorHover='deep-orange lighten-1'] 輸入右側圖標Hover時顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        titleColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorHover: {
            type: String,
            default: 'white',
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderColor: {
            type: String,
            default: 'white',
        },
        borderColorHover: {
            type: String,
            default: 'white',
        },
        borderShadow: {
            type: Boolean,
            default: true,
        },
        leftIcon: {
            type: String,
            default: '',
        },
        leftIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        leftIconColorHover: {
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
        rightIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        rightIconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        rightIconTooltip: {
            type: String,
            default: '',
        },
        small: {
            type: Boolean,
            default: true,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            focused: false,
        }
    },
    mounted: function() {
    },
    computed: {

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            let s = {}
            if (vo.focused) {
                s['background-color'] = color2hex(vo.backgroundColorHover)
            }
            else {
                s['background-color'] = color2hex(vo.backgroundColor)
            }
            return s
        },

        useBorder: function() {
            //console.log('computed useBorder')

            let vo = this

            let s = {}
            if (vo.focused) {
                s['border'] = '1px solid ' + color2hex(vo.borderColorHover)
            }
            else {
                s['border'] = '1px solid ' + color2hex(vo.borderColor)
            }
            return s
        },

        useTitleColor: function() {
            //console.log('computed useTitleColor')

            let vo = this

            let s = {}
            s['color'] = color2hex(vo.titleColor)
            return s
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            let s = {}
            if (vo.small) {
                s['padding'] = '0px'
            }
            else {
                s['padding'] = '3px 6px'
            }
            return s
        },

        usePaddingSlot: function() {
            //console.log('computed usePaddingSlot')

            let vo = this

            let s = {}
            s['padding-top'] = '0px'
            s['padding-bottom'] = '0px'
            s['padding-left'] = '15px'
            s['padding-right'] = '15px'
            if (vo.leftIcon !== '') {
                s['padding-left'] = '10px'
            }
            if (vo.rightIcon !== '') {
                s['padding-right'] = '10px'
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

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('click-' + mode)

            }, 1)

        },

    },
}
</script>

<style scoped>
.group {
    transition: all 0.7s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.shadow {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
.shadow:hover {
    box-shadow: 0 3px 9px -2px rgba(0,0,0,.2), 0 2px 7px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
