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

                <div>

                    <div :style="`height:${tagDistBetweenTopAndBaseline}px; display:flex; align-items:stretch;`">
                        <div :style="`${getStyleWidth(connLineZoneWidth/2)} height:${tagDistBetweenTopAndBaseline}px; border-right:${connLineWidth}px solid ${effConnLineColor};`">
                        </div>
                        <div :style="`${getStyleWidth(connLineZoneWidth/2)} height:${tagDistBetweenTopAndBaseline}px; border-bottom:${connLineWidth}px solid ${effConnLineColor};`">
                        </div>
                    </div>

                    <div :style="`height:calc( 100% - ${tagDistBetweenTopAndBaseline}px ); display:flex; align-items:stretch;`">
                        <div :style="`${getStyleWidth(connLineZoneWidth/2)} border-right:${connLineWidth}px solid ${kt===(items.length-1)?'transparent':effConnLineColor};`">
                        </div>
                        <div :style="`${getStyleWidth(connLineZoneWidth/2)}`">
                        </div>
                    </div>

                </div>

                <div style="width:100%;">

                    <WPanelSlotHover
                        :style="`padding-top:${tagDistBetweenTopAndBaseline-contentShiftTopFromBaseline}px; ${contentClickable?'cursor:pointer;':''}`"
                        @click.native="(ev)=>{ckContent(ev,t)}"
                    >
                        <template v-slot="{isHover}">
                            <div :style="`transition:all 0.3s; ${useContentPaddingStyle} ${usetContentTextFontSize} color:${isHover?effContentTextColorHover:effContentTextColor}; border-radius:${contentBorderRadius}px; background:${isHover?effContentBackgroundColorHover:effContentBackgroundColor}; border:${contentBorderWidth}px solid ${isHover?effContentBorderColorHover:effContentBorderColor};`">

                                <slot
                                    name="text"
                                    :item="t"
                                    :isHover="isHover"
                                >
                                    {{getText(t)}}
                                </slot>

                            </div>

                        </template>
                    </WPanelSlotHover>

                    <slot
                        name="text-sub"
                        :item="t"
                    >
                    </slot>

                </div>

            </div>

            <div :style="`position:absolute; left:${connLineZoneWidth/2}px; top:${tagDistBetweenTopAndBaseline}px;`">
                <WPanelSlotHover
                    :style="`transform:translate(-50%, -50%); ${tagClickable?'cursor:pointer;':''}`"
                    @click.native="(ev)=>{ckTag(ev,t)}"
                >
                    <template v-slot="{isHover}">
                        <div :style="`transition:all 0.3s; ${useTagPaddingStyle} ${usetTagTextFontSize} color:${isHover?effTagTextColorHover:effTagTextColor}; border-radius:${tagBorderRadius}px; background:${isHover?effTagBackgroundColorHover:effTagBackgroundColor}; border:${tagBorderWidth}px solid ${isHover?effTagBorderColorHover:effTagBorderColor};`">

                            <slot
                                name="tag"
                                :item="t"
                                :isHover="isHover"
                            >
                                {{getTag(t)}}
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
import isNumber from 'lodash/isNumber'
import replace from 'wsemi/src/replace.mjs'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WPanelSlotHover from './WPanelSlotHover.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的物件陣列，預設[]
 * @vue-prop {String} [keyTag='tag'] 輸入存放標記欄位字串，預設'tag'
 * @vue-prop {String} [keyText='text'] 輸入存放文字欄位字串，預設'text'
 * @vue-prop {Number} [connLineZoneWidth=120] 輸入連接線與標記區域寬度數字，單位px，預設120
 * @vue-prop {Number} [connLineWidth=1] 輸入連接線寬度數字，單位px，預設1
 * @vue-prop {String} [connLineColor='#ccc'] 輸入連接線顏色字串，預設'#ccc'
 * @vue-prop {Number} [tagDistBetweenTopAndBaseline=24] 輸入各項目頂部與標記基線距離數字，單位px，預設24
 * @vue-prop {String} [tagTextFontSize='0.7rem'] 輸入標記區文字字型大小字串，預設'0.7rem'
 * @vue-prop {String} [tagTextColor='#444'] 輸入標記區文字顏色字串，預設'#444'
 * @vue-prop {String} [tagTextColorHover='#222'] 輸入滑鼠移入時標記區文字顏色字串，預設'#222'
 * @vue-prop {Number} [tagBorderRadius=4] 輸入標記區框線圓角度數字，單位為px，預設4
 * @vue-prop {Number} [tagBorderWidth=1] 輸入標記區框線寬度數字，單位px，預設1
 * @vue-prop {String} [tagBorderColor='#fff'] 輸入標記區框線顏色字串，預設'#fff'
 * @vue-prop {String} [tagBorderColor='#ccc'] 輸入滑鼠移入時標記區框線顏色字串，預設'#ccc'
 * @vue-prop {String} [tagBackgroundColor='#e5e5e5'] 輸入標記區背景顏色字串，預設'#e5e5e5'
 * @vue-prop {String} [tagBackgroundColorHover='#d8d8d8'] 輸入滑鼠移入時標記區背景顏色字串，預設'#d8d8d8'
 * @vue-prop {Object} [tagPaddingStyle={v:1,h:5}] 輸入標記區內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:1,h:5}
 * @vue-prop {Boolean} [tagClickable=false] 輸入標記區是否可點擊布林值，預設false
 * @vue-prop {Number} [contentShiftTopFromBaseline=11] 輸入內容區由標記基線平移距離數字，單位px，預設11
 * @vue-prop {String} [contentTextFontSize='0.85rem'] 輸入內容區文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [contentTextColor='#444'] 輸入內容區文字顏色字串，預設'#444'
 * @vue-prop {String} [contentTextColorHover='#222'] 輸入滑鼠移入時內容區文字顏色字串，預設'#222'
 * @vue-prop {Number} [contentBorderRadius=4] 輸入內容區框線圓角度數字，單位為px，預設4
 * @vue-prop {Number} [contentBorderWidth=1] 輸入內容區框線寬度數字，單位px，預設1
 * @vue-prop {String} [contentBorderColor='#ddd'] 輸入內容區框線顏色字串，預設'#ddd'
 * @vue-prop {String} [contentBorderColor='#cccccc'] 輸入滑鼠移入時內容區框線顏色字串，預設'#cccccc'
 * @vue-prop {String} [contentBackgroundColor='#fff'] 輸入內容區背景顏色字串，預設'#fff'
 * @vue-prop {String} [contentBackgroundColorHover='#f2f2f2'] 輸入滑鼠移入時內容區背景顏色字串，預設'#f2f2f2'
 * @vue-prop {Object} [contentPaddingStyle={v:1,h:5}] 輸入內容區內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:1,h:5}
 * @vue-prop {Boolean} [contentClickable=false] 輸入內容區是否可點擊布林值，預設false
 */
export default {
    components: {
        WPanelSlotHover,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        keyTag: {
            type: String,
            default: 'tag',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        connLineZoneWidth: {
            type: Number,
            default: 120,
        },
        connLineWidth: {
            type: Number,
            default: 1,
        },
        connLineColor: {
            type: String,
            default: '#ccc',
        },
        tagDistBetweenTopAndBaseline: {
            type: Number,
            default: 24,
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
            default: '#fff',
        },
        tagBorderColorHover: {
            type: String,
            default: '#ccc',
        },
        tagBackgroundColor: {
            type: String,
            default: '#e5e5e5',
        },
        tagBackgroundColorHover: {
            type: String,
            default: '#d8d8d8',
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
        tagClickable: {
            type: Boolean,
            default: false,
        },
        contentShiftTopFromBaseline: {
            type: Number,
            default: 11,
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
        contentClickable: {
            type: Boolean,
            default: false,
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

        getTag: function(item) {
            let vo = this
            let r = get(item, vo.keyTag, '')
            return r
        },

        getText: function(item) {
            let vo = this
            let r = get(item, vo.keyText, '')
            return r
        },

        ckTag: function(ev, item) {
            let vo = this
            if (!vo.tagClickable) {
                return
            }
            vo.$emit('click-tag', { ev, item })
            vo.$emit('click', { from: 'tag', ev, item })
        },

        ckContent: function(ev, item) {
            let vo = this
            if (!vo.contentClickable) {
                return
            }
            vo.$emit('click-content', { ev, item })
            vo.$emit('click', { from: 'contnet', ev, item })
        },

    },
}
</script>

<style scoped>
</style>
