<template>
    <div style="display:inline-block;" :changeParam="changeParam">

        <div
            :class="{'group':true,'shadow':borderShadow}"
            :style="[{'opacity':editable?1:0.6},useBackgroundColor,useBorder,useRadius]"
            @mouseenter="hovered=true"
            @mouseleave="hovered=false"
        >

            <template v-for="(item,kitem) in value">

                <v-tooltip bottom transition="slide-y-transition" :disabled="!item.tooltip" :key="kitem">

                    <template v-slot:activator="{ on }">
                        <div
                            ButtonGroupChip="item"
                            v-on="on"
                            :style="useItemStyle(kitem)"
                            v-ripple="itemsClickable[kitem] ? { class:  `white--text`  } : null"
                            @mouseenter="mouseEnterLeave(kitem)"
                            @mouseleave="mouseEnterLeave(null)"
                            @click="clickItem(item,kitem)"
                        >

                            {{item.text}}

                        </div>
                    </template>

                    <span>{{item.tooltip}}</span>

                </v-tooltip>

            </template>

            <template v-if="value.length===0">

                <div
                    ButtonGroupChip="item"
                    :style="useItemStyle(null)"
                >

                    <div style="min-width:30px; text-align:center;">
                        {{nodata}}
                    </div>

                </div>

            </template>

        </div>

    </div>
</template>

<script>
import { color2hex } from '../js/vuetifyColor.mjs'
import map from 'lodash/map'
import size from 'lodash/size'
import get from 'lodash/get'
import merge from 'lodash/merge'
import isbol from 'wsemi/src/isbol.mjs'

/**
 * @vue-prop {Array} value 輸入項目陣列，每個項目為物件，需包含text欄位儲存顯示文字，若提供clickable欄位則代表是否可點擊，預設為true
 * @vue-prop {Number} [activeIndex=null] 輸入已點擊項目指標整數，預設null
 * @vue-prop {String} [textColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
 * @vue-prop {Number} [borderRadius=30] 輸入圓角寬度，單位為px，預設30
 * @vue-prop {String} [borderColor='orange lighten-3'] 輸入邊框顏色字串，預設'orange lighten-3'
 * @vue-prop {String} [borderColorHover='orange lighten-1'] 輸入邊框hover顏色字串，預設'orange lighten-1'
 * @vue-prop {Boolean} [borderShadow=false] 輸入是否為陰影模式，預設false
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='orange lighten-4'] 輸入背景hover顏色字串，預設'orange lighten-4'
 * @vue-prop {String} [backgroundColorActive='orange lighten-3'] 輸入已點擊項目背景顏色字串，預設'orange lighten-3'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {String} [nodata='無'] 輸入無任何項目陣列時的預設文字字串，預設'無'
 */
export default {
    components: {
    },
    props: {
        value: {
            type: Array,
        },
        activeIndex: {
            type: Number,
            default: null,
        },
        textColor: {
            type: String,
            default: 'grey darken-2',
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderColor: {
            type: String,
            default: 'orange lighten-3',
        },
        borderColorHover: {
            type: String,
            default: 'orange lighten-1',
        },
        borderShadow: {
            type: Boolean,
            default: false,
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorHover: {
            type: String,
            default: 'orange lighten-4',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange lighten-3',
        },
        small: {
            type: Boolean,
            default: true,
        },
        editable: {
            type: Boolean,
            default: true,
        },
        nodata: {
            type: String,
            default: '無',
        },
    },
    data: function() {
        return {
            clicked: null,
            hovered: false,
            itemsClickable: [],
            itemsBackgroundColor: [],
            itemsCursor: [],
            itemsIndex: {},
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //clicked
            vo.clicked = vo.activeIndex

            //itemsClickable
            let itemsClickable = map(vo.value, function(v) {
                if (isbol(v.clickable)) {
                    return v.clickable
                }
                return true
            })
            vo.itemsClickable = itemsClickable

            //itemsBackgroundColor
            vo.itemsBackgroundColor = map(vo.value, function() {
                return { 'background-color': color2hex(vo.backgroundColor) }
            })

            //itemsCursor
            vo.itemsCursor = map(vo.value, function(v, k) {
                if (itemsClickable[k]) {
                    return { cursor: 'pointer' }
                }
                return { }
            })

            //itemsIndex
            let i = -1
            vo.itemsIndex = map(vo.value, function(v, k) {
                if (itemsClickable[k]) {
                    i += 1
                }
                return i
            })

            return ''
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            let s = {}
            s['color'] = color2hex(vo.textColor)
            return s
        },

        useBorder: function() {
            //console.log('computed useBorder')

            let vo = this

            let s = {}
            if (vo.hovered) {
                s['border'] = '1px solid ' + color2hex(vo.borderColorHover)
            }
            else {
                s['border'] = '1px solid ' + color2hex(vo.borderColor)
            }
            return s
        },

        useRadius: function() {
            //console.log('computed useRadius')

            let vo = this

            let s = {}
            s['border-radius'] = vo.borderRadius + 'px'
            return s
        },

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            let s = {}
            s['background-color'] = color2hex(vo.backgroundColor)
            return s
        },

    },
    methods: {

        mouseEnterLeave: function(kitem) {
            //console.log('methods mouseEnterLeave', kitem)

            let vo = this

            //itemsBackgroundColor
            vo.itemsBackgroundColor = map(vo.value, function(v, k) {
                if (kitem === k && vo.itemsClickable[k]) {
                    return { 'background-color': color2hex(vo.backgroundColorHover) }
                }
                else {
                    return { 'background-color': color2hex(vo.backgroundColor) }
                }
            })

        },

        useItemStyle: function(kitem) {
            //console.log('methods useItemStyle', kitem)

            let vo = this

            let ar = [{ 'transition': 'all 0.7s', 'user-select': 'none' }, vo.useTextColor, vo.useItemBackgroundColor(kitem), vo.useItemRadius(kitem), vo.useItemPadding(kitem), vo.useItemCursor(kitem)]
            let s = merge(ar)
            return s
        },

        useItemBackgroundColor: function(kitem) {
            //console.log('methods useItemBackgroundColor', kitem)

            let vo = this

            //backgroundColor
            let backgroundColor = vo.itemsBackgroundColor[kitem]
            let clicked = vo.clicked
            if (clicked !== null) {
                if (clicked < 0) {
                    clicked = size(vo.value) + clicked
                }
                if (clicked === kitem) {
                    return { 'background-color': color2hex(vo.backgroundColorActive) }
                }
            }

            return backgroundColor
        },

        useItemCursor: function(kitem) {
            //console.log('methods useItemCursor', kitem)

            let vo = this

            return vo.itemsCursor[kitem]
        },

        useItemRadius: function(kitem) {
            //console.log('methods useItemRadius', kitem)

            let vo = this

            let s = {}
            if (kitem === 0) {
                s['border-top-left-radius'] = vo.borderRadius + 'px'
                s['border-bottom-left-radius'] = vo.borderRadius + 'px'
            }
            if (kitem === size(vo.value) - 1) { //kitem有可能都滿足
                s['border-top-right-radius'] = vo.borderRadius + 'px'
                s['border-bottom-right-radius'] = vo.borderRadius + 'px'
            }
            return s
        },

        useItemPadding: function(kitem) {
            //console.log('methods useItemPadding', kitem)

            let vo = this

            //sv, sh, shc, shb
            let sv = 1
            let sh = 6
            let shc = 12
            let shb = 18

            //small
            if (!vo.small) {
                let d = 3
                sv += d
                sh += d * 2
                shc += d * 2
                shb += d * 2
            }

            //selfPaddingV
            let selfPaddingV = sv + 'px'

            //selfPaddingH
            let selfPaddingH = sh + 'px'
            if (vo.itemsClickable[kitem]) {
                selfPaddingH = shc + 'px'
            }

            let s = {}
            s['padding-top'] = selfPaddingV
            s['padding-bottom'] = selfPaddingV
            s['padding-left'] = selfPaddingH
            s['padding-right'] = selfPaddingH
            if (kitem === 0) {
                s['padding-left'] = shb + 'px'
            }
            if (kitem === size(vo.value) - 1) { //kitem有可能都滿足
                s['padding-right'] = shb + 'px'
            }
            if (kitem === null) {
                s['padding-left'] = shb + 'px'
                s['padding-right'] = shb + 'px'
            }
            return s
        },

        clickItem: function(item, kitem) {
            //console.log('methods clickItem', item, kitem)

            let vo = this

            //check
            if (!vo.editable) {
                return
            }
            if (!vo.itemsClickable[kitem]) {
                return
            }

            //setTimeout
            setTimeout(function() {

                //clicked
                vo.clicked = kitem
                //emit
                vo.$emit('update:activeIndex', kitem)

                //emit
                vo.$emit('click', get(item, 'text'), kitem, vo.itemsIndex[kitem])

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
