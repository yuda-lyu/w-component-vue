<template>
    <div
        :changeActive="changeActive"
    >

        <!-- header -->
        <div
            :style="`transition:all 0.3s; ${usePadding} background:${useBackgroundColor}; cursor:pointer;`"
            v-domripple="{color:rippleColor}"
            @mouseenter="mouseEnter=true"
            @mouseleave="mouseEnter=false"
            @click="clickItem(icon,text)"
        >
            <div style="display:flex; align-items:center;">

                <div style="margin-right:4px;">
                    <div :style="`transition:all 0.3s; transform:rotate(${useRotateDeg+90}deg); cursor:pointer;`">
                        <WIcon
                            :icon="expansionIcon"
                            :color="useExpansionIconColor"
                            :colorHover="useExpansionIconColor"
                            :size="expansionIconSize"
                        ></WIcon>
                    </div>
                </div>

                <slot
                    name="header"
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

                    <div :style="`transition:all 0.3s; color:${useTextColor}; ${useTextFontSize}`">
                        {{text}}
                    </div>

                </slot>

            </div>
        </div>

        <!-- content -->
        <div :class="`ct ${active?'ct-show':'ct-hide'}`" :style="`${heightContent}`">
            <div ref="rct">

                <slot
                    name="content"
                    :isHover="mouseEnter"
                    :isActive="active"
                >
                </slot>

            </div>
        </div>

        <div style="position:relative; height:0px; overflow:hidden;">
            <div style="position:absolute; left:0px; top:0px; height:0px;" v-if="obstructMutation">
            </div>
        </div>

    </div>
</template>

<script>
import { mdiPlay } from '@mdi/js'
import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
import replace from 'wsemi/src/replace.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import domRipple from '../js/domRipple.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字字型大小字串，預設'1rem'
 * @vue-prop {Boolean} [active=false] 輸入是否為主動模式布林值，預設false
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
 * @vue-prop {String} [expansionIcon=mdiPlay] 輸入顯隱圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設使用mdi的圖標(mdiPlay)
 * @vue-prop {Number} [expansionIconSize=18] 輸入顯隱圖標尺寸數字，單位為px，預設18
 * @vue-prop {String} [expansionIconColor='#aaa'] 輸入顯隱圖標顏色字串，預設'#aaa'
 * @vue-prop {String} [expansionIconColorHover='#888'] 輸入滑鼠移入時顯隱圖標顏色字串，預設'#888'
 * @vue-prop {String} [expansionIconColorActive='rgba(255,255,255,0.8)'] 輸入主動模式時顯隱圖標顏色字串，預設'rgba(255,255,255,0.8)'
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
        expansionIcon: {
            type: String,
            default: mdiPlay,
        },
        expansionIconSize: {
            type: Number,
            default: 18,
        },
        expansionIconColor: {
            type: String,
            default: '#aaa',
        },
        expansionIconColorHover: {
            type: String,
            default: '#888',
        },
        expansionIconColorActive: {
            type: String,
            default: 'rgba(255,255,255,0.8)',
        },
        rippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
        },
    },
    data: function() {
        return {
            obstructMutation: false,
            mouseEnter: false,
            heightContent: '',
        }
    },
    computed: {

        changeActive: function() {
            let vo = this
            vo.updateHeightContent(vo.active)
            return ''
        },

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

        effExpansionIconColor: function() {
            //console.log('computed effExpansionIconColor')

            let vo = this

            return color2hex(vo.expansionIconColor)
        },

        effExpansionIconColorHover: function() {
            //console.log('computed effExpansionIconColorHover')

            let vo = this

            return color2hex(vo.expansionIconColorHover)
        },

        effExpansionIconColorActive: function() {
            //console.log('computed effExpansionIconColorActive')

            let vo = this

            return color2hex(vo.expansionIconColorActive)
        },

        useExpansionIconColor: function() {
            let vo = this
            if (vo.active) {
                return vo.effExpansionIconColorActive
            }
            return vo.mouseEnter ? vo.effExpansionIconColorHover : vo.effExpansionIconColor
        },

        useRotateDeg: function() {
            //console.log('computed useRotateDeg')

            let vo = this

            return vo.active ? 180 : 0
        },

    },
    methods: {

        updateHeightContent: function() {
            let vo = this

            async function core() {

                //於WPanelScrolly內容區使用顯隱動畫時, 因瀏覽器之內容區高度會先更新完畢, 而transition動畫結束時間較慢, 導致WPanelScrolly內容區無法算得實際高度而導致出現遮蔽情況
                //於指定時間(n*s=500ms需與class ct內設定transition時間長度一致)內反覆變更元素顯隱, 藉此刺激WPanelScrolly內mutation事件, 使能進行重算內容區高度
                let n = 5
                let s = 100
                for (let i = 1; i <= n; i++) {
                    setTimeout(() => {
                        vo.obstructMutation = !vo.obstructMutation
                        // console.log('obstructMutation', vo.obstructMutation)
                    }, i * s)
                }

                if (!vo.active) {
                    //隱藏內容

                    //clear
                    vo.heightContent = ''

                }
                else if (vo.active) {
                    //顯示內容

                    if (!vo.$el) {

                        //wait $el
                        await waitFun(() => {
                            // console.log('waitFun try', vo.text)
                            return vo.$el !== undefined
                        }, { timeInterval: 10 })
                        // console.log('waitFun finish', vo.text)

                    }

                    //h
                    let h = get(vo, '$refs.rct.clientHeight')
                    // console.log(h, vo.text)

                    //update
                    if (isNumber(h)) {

                        //heightContent
                        vo.heightContent = `height:${h}px;`

                    }

                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        getIcon: function(item) {
            return get(item, 'icon', '')
        },

        getText: function(item) {
            let t = get(item, 'text', '')
            if (t === '') {
                return item
            }
        },

        clickItem: function(icon, text) {
            // console.log('methods clickItem', icon, text)

            let vo = this

            //emit
            vo.$emit('update:active', !vo.active)

            //emit
            vo.$emit('click', { icon, text })

            return ''
        },

    }
}
</script>

<style scoped>
.ct {
    transition: height 0.5s, opacity 0.5s ease-out;
}
.ct-hide {
    overflow: hidden;
    height: 0px;
    opacity: 0;
}
.ct-show {
    opacity: 1;
}
</style>
