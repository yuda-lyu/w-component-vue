<template>
    <div :changeParam="changeParam">

        <div
            :class="{'group':true,'shadow':shadow}"
            :style="[useBackgroundColor,useBorder,usePadding,{'border-radius':borderRadius+'px'},{'opacity':editable?1:0.6}]"
        >

            <div
                :style="`margin-left:${iconShiftOuter}px; margin-right:${iconShiftInner}px; user-select:none; cursor:pointer; outline:none;`"
                tabindex="0"
                @keyup.enter="clickIcon('left')"
                @click="clickIcon('left')"
                v-if="leftIcon"
            >

                <v-tooltip bottom transition="slide-y-transition" :disabled="leftIconTooltip===''">

                    <template v-slot:activator="{ on: ttShellEllipseLeft }">
                        <div ShellEllipse="leftIcon" v-on="{...ttShellEllipseLeft}">
                            <w-icon
                                :icon="leftIcon"
                                :color="focusedTrans?leftIconColorFocus:leftIconColor"
                            ></w-icon>
                        </div>
                    </template>

                    <span>{{leftIconTooltip}}</span>

                </v-tooltip>

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

                <v-tooltip bottom transition="slide-y-transition" :disabled="rightIconTooltip===''">

                    <template v-slot:activator="{ on: ttShellEllipseRight }">
                        <div ShellEllipse="rightIcon" v-on="{...ttShellEllipseRight}">
                            <w-icon
                                :icon="rightIcon"
                                :color="focusedTrans?rightIconColorFocus:rightIconColor"
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
import isNumber from 'lodash/isNumber'
import get from 'lodash/get'
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:0,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:15}
 * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度數字，單位為px，預設30
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=-10] 輸入左右側圖標與外框距離數字，單位為px，預設-10
 * @vue-prop {Number} [iconShiftInner=10] 輸入左右側圖標與內插槽區距離數字，單位為px，預設10
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    components: {
        WIcon,
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
            default: 'white',
        },
        backgroundColorFocus: {
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
        borderColorFocus: {
            type: String,
            default: 'white',
        },
        shadow: {
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
        rightIconColor: {
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
            default: 10,
        },
        editable: {
            type: Boolean,
            default: true,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            focusedTrans: false,
        }
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            let s = {}
            if (vo.focusedTrans) {
                s['background-color'] = color2hex(vo.backgroundColorFocus)
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
            if (vo.focusedTrans) {
                s['border'] = '1px solid ' + color2hex(vo.borderColorFocus)
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

            //s
            let s = {
                padding: `${top}px ${right}px ${bottom}px ${left}px`
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

    },
}
</script>

<style scoped>
.group {
    transition: all 0.3s;
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
