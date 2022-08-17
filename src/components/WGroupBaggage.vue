<template>
    <div
        :style="``"
    >

        <div
            :style="`position:relative; _background:#dab78b;`"
            :key="'kt-'+kt"
            v-for="(t,kt) in items"
        >

            <div
                :style="`display:flex; align-items:stretch;`"
            >

                <table :style="`border-collapse:collapse;`">
                    <tbody>
                        <tr :style="`height:${connLineZoneHeightMin/2}px;`">
                            <td :style="`${getStyleWidth(connLineZoneWidth/2)} border-right:${connLineWidth}px solid ${effConnLineColor};`"></td>
                            <td :style="`${getStyleWidth(connLineZoneWidth/2)} border-bottom:${connLineWidth}px solid ${effConnLineColor};`"></td>
                        </tr>
                        <tr :style="`_height:calc( 100% - ${connLineZoneHeightMin/2}px );`">
                            <td :style="`${getStyleWidth(connLineZoneWidth/2)} border-right:${connLineWidth}px solid ${kt===(items.length-1)?'transparent':effConnLineColor};`"></td>
                            <td :style="`${getStyleWidth(connLineZoneWidth/2)}`"></td>
                        </tr>
                    </tbody>
                </table>

                <WPanelSlotHover :style="`padding-top:${connLineZoneHeightMin/4}px;`">
                    <template v-slot="{isHover}">
                        <div :style="`transition:all 0.3s; ${useContentPaddingStyle} ${usetContentTextFontSize} color:${isHover?effContentTextColorHover:effContentTextColor}; border-radius:${contentBorderRadius}px; background:${isHover?effContentBackgroundColorHover:effContentBackgroundColor}; border:${contentBorderWidth}px solid ${isHover?effContentBorderColorHover:effContentBorderColor};`">

                            <slot
                                name="text"
                                :items="t"
                                :isHover="isHover"
                            >
                                {{getText(t)}}
                            </slot>

                        </div>
                    </template>
                </WPanelSlotHover>

            </div>

            <div :style="`position:absolute; left:${connLineZoneWidth/2}px; top:${connLineZoneHeightMin/2}px;`">
                <WPanelSlotHover :style="`transform:translate(-50%, -50%);`">
                    <template v-slot="{isHover}">
                        <div :style="`transition:all 0.3s; ${useTagPaddingStyle} ${usetTagTextFontSize} color:${isHover?effTagTextColorHover:effTagTextColor}; border-radius:${tagBorderRadius}px; background:${isHover?effTagBackgroundColorHover:effTagBackgroundColor}; border:${tagBorderWidth}px solid ${isHover?effTagBorderColorHover:effTagBorderColor};`">

                            <slot
                                name="text"
                                :items="t"
                                :isHover="isHover"
                            >
                                {{getBag(t)}}
                            </slot>

                        </div>
                    </template>
                </WPanelSlotHover>
            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import each from 'lodash/each'
import cloneDeep from 'lodash/cloneDeep'
import trim from 'lodash/trim'
import isNumber from 'lodash/isNumber'
import pullAt from 'lodash/pullAt'
import filter from 'lodash/filter'
import isEqual from 'lodash/isEqual'
import size from 'lodash/size'
import genID from 'wsemi/src/genID.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import replace from 'wsemi/src/replace.mjs'
import WButtonChip from './WButtonChip.vue'
import WTextSuggest from './WTextSuggest.vue'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WPanelSlotHover from './WPanelSlotHover.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的字串陣列或物件陣列，預設[]
 *
 */
export default {
    components: {
        // WButtonChip,
        // WTextSuggest,
        WPanelSlotHover,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        keyBag: {
            type: String,
            default: 'tag',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        connLineZoneWidth: {
            type: Number,
            default: 100,
        },
        connLineZoneHeightMin: {
            type: Number,
            default: 48,
        },
        connLineWidth: {
            type: Number,
            default: 1,
        },
        connLineColor: {
            type: String,
            default: '#ccc',
        },
        tagTextFontSize: {
            type: String,
            default: '0.7rem',
        },
        tagTextColor: {
            type: String,
            default: '#444',
        },
        tagTextColorHover: {
            type: String,
            default: '#222',
        },
        tagBorderRadius: {
            type: Number,
            default: 4,
        },
        tagBorderWidth: {
            type: Number,
            default: 1,
        },
        tagBorderColor: {
            type: String,
            default: '#ccc',
        },
        tagBorderColorHover: {
            type: String,
            default: '#dab78b',
        },
        tagBackgroundColor: {
            type: String,
            default: '#f3e7d8',
        },
        tagBackgroundColorHover: {
            type: String,
            default: '#f0e2d0',
        },
        tagPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 1,
                    h: 5,
                }
            },
        },
        contentTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        contentTextColor: {
            type: String,
            default: '#444',
        },
        contentTextColorHover: {
            type: String,
            default: '#222',
        },
        contentBorderRadius: {
            type: Number,
            default: 4,
        },
        contentBorderWidth: {
            type: Number,
            default: 1,
        },
        contentBorderColor: {
            type: String,
            default: '#ddd',
        },
        contentBorderColorHover: {
            type: String,
            default: '#cccccc',
        },
        contentBackgroundColor: {
            type: String,
            default: '#fff',
        },
        contentBackgroundColorHover: {
            type: String,
            default: '#f2f2f2',
        },
        contentPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 1,
                    h: 5,
                }
            },
        },
    },
    data: function() {
        return {

        }
    },
    computed: {

        effConnLineColor: function() {
            let vo = this
            return color2hex(vo.connLineColor)
        },

        effTagTextColor: function() {
            let vo = this
            return color2hex(vo.tagTextColor)
        },

        effTagTextColorHover: function() {
            let vo = this
            return color2hex(vo.tagTextColorHover)
        },

        effTagBorderColor: function() {
            let vo = this
            return color2hex(vo.tagBorderColor)
        },

        effTagBorderColorHover: function() {
            let vo = this
            return color2hex(vo.tagBorderColorHover)
        },

        effTagBackgroundColor: function() {
            let vo = this
            return color2hex(vo.tagBackgroundColor)
        },

        effTagBackgroundColorHover: function() {
            let vo = this
            return color2hex(vo.tagBackgroundColorHover)
        },

        useTagPaddingStyle: function() {
            //console.log('computed useTagPaddingStyle')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.tagPaddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        usetTagTextFontSize: function() {
            let vo = this
            let s = vo.tagTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        effContentTextColor: function() {
            let vo = this
            return color2hex(vo.contentTextColor)
        },

        effContentTextColorHover: function() {
            let vo = this
            return color2hex(vo.contentTextColorHover)
        },

        effContentBorderColor: function() {
            let vo = this
            return color2hex(vo.contentBorderColor)
        },

        effContentBorderColorHover: function() {
            let vo = this
            return color2hex(vo.contentBorderColorHover)
        },

        effContentBackgroundColor: function() {
            let vo = this
            return color2hex(vo.contentBackgroundColor)
        },

        effContentBackgroundColorHover: function() {
            let vo = this
            return color2hex(vo.contentBackgroundColorHover)
        },

        useContentPaddingStyle: function() {
            //console.log('computed useContentPaddingStyle')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.contentPaddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        usetContentTextFontSize: function() {
            let vo = this
            let s = vo.contentTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

    },
    methods: {

        getStyleWidth: function(w) {
            if (!isNumber(w)) {
                return ''
            }
            return `width:${w}px; min-width:${w}px; max-width:${w}px;`
        },

        getBag: function(item) {
            let vo = this
            let r = get(item, vo.keyBag, '')
            return r
        },

        getText: function(item) {
            let vo = this
            let r = get(item, vo.keyText, '')
            return r
        },

    },
}
</script>

<style scoped>
</style>
