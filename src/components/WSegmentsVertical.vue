<template>
    <div :style="`width:${width}px; height:${height}px; box-sizing:border-box;`">

        <div :style="`padding:${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;`">

            <div :style="`position:relative; width:${plotWidth}px; height:${plotHeight}px; border-left:1px solid ${useAxisColor};`">

                <div
                    :style="`position:absolute; top:${l.y}px; left:0px; transform:translate( calc( ${getLabelShift(l.align)} ), -50% );`"
                    :key="'label'+kl"
                    v-for="(l,kl) in useLabelsLocs"
                >
                    <div :style="`color:${useTickLabelColor}; font-size:${tickLabelFontSize};`">
                        {{l.label}}
                    </div>
                </div>

                <div
                    :style="`position:absolute; top:${l.y}px; left:-${tickSize}px;`"
                    :key="'tick'+kl"
                    v-for="(l,kl) in useLabelsLocs"
                >
                    <div :style="`width:${tickSize*2+1}px; border-top:1px solid ${useTickColor};`"></div>
                </div>

                <div
                    :style="`position:absolute; top:${s.y}px; left:-${segmentSize/2}px; width:${segmentSize}px; height:${s.height}px; background:${getSegmentBackgroundColor(ks)}; border:1px solid ${useSegmentBorderColor}; ${useSegmentCursor}`"
                    :key="'sample-block'+ks"
                    v-for="(s,ks) in useSamplesLocs"
                    @click="(ev)=>{clickSegment(ev,s.data)}"
                >
                </div>

                <div
                    :style="`position:absolute; top:${s.yc}px; left:${useTextShift}px;`"
                    :key="'sample-text'+ks"
                    v-for="(s,ks) in useSamplesLocs"
                >

                    <!-- 內容區依照定位點垂直置中 -->
                    <div style="position:relative;">
                        <!-- 內容有傳高度100%才有辦法top:-50%依照定位點再置中 -->
                        <div style="position:absolute; top:-50%; left:0px; height:100%;">
                            <!-- 靠display:flex與align-items:center置中並把高度100%傳出 -->
                            <div style="display:flex; align-items:center; height:100%;">

                                <slot
                                    name="text"
                                    :item="s.data"
                                    :index="ks"
                                >

                                    <template v-if="textWithPopup">

                                        <!-- 使用display:flex去除WPopup內display:inline-block導致間隙 -->
                                        <div :style="`display:flex;`">

                                            <WPopup
                                                :isolated="true"
                                            >

                                                <template v-slot:trigger>
                                                    <div
                                                        :style="`display:flex; ${useTextCursor}`"
                                                        @click="(ev)=>{clickText(ev,s.data)}"
                                                    >
                                                        <div :style="`width:0; height:0; border-top:${useTextTriangularSizeHalf}px solid transparent; border-right:${useTextTriangularSizeHalf*textTriangularRatio}px solid ${useTextBackgroundColor}; border-bottom:${useTextTriangularSizeHalf}px solid transparent;`"></div>
                                                        <div :style="`padding-right:5px; background:${useTextBackgroundColor};`">
                                                            <div :style="`height:100%; display:flex; align-items:center;`">
                                                                <div :style="`color:${useTextColor}; font-size:${textFontSize}; white-space:nowrap;`">
                                                                    {{s.text}}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>

                                                <template v-slot:content>
                                                    <slot
                                                        name="text-popup"
                                                        :item="s.data"
                                                        :index="ks"
                                                    ></slot>
                                                </template>

                                            </WPopup>

                                        </div>

                                    </template>
                                    <template v-else>

                                        <div
                                            :style="`display:flex; ${useTextCursor}`"
                                            @click="(ev)=>{clickText(ev,s.data)}"
                                        >
                                            <div :style="`width:0; height:0; border-top:${useTextTriangularSizeHalf}px solid transparent; border-right:${useTextTriangularSizeHalf*textTriangularRatio}px solid ${useTextBackgroundColor}; border-bottom:${useTextTriangularSizeHalf}px solid transparent;`"></div>
                                            <div :style="`padding-right:5px; background:${useTextBackgroundColor};`">
                                                <div :style="`height:100%; display:flex; align-items:center;`">
                                                    <div :style="`color:${useTextColor}; font-size:${textFontSize}; white-space:nowrap;`">
                                                        {{s.text}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </template>

                                </slot>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import each from 'lodash/each'
import map from 'lodash/map'
import isNumber from 'lodash/isNumber'
import min from 'lodash/min'
import max from 'lodash/max'
import size from 'lodash/size'
import groupBy from 'lodash/groupBy'
import values from 'lodash/values'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import WPopup from './WPopup.vue'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的物件陣列，預設[]
 * @vue-prop {Number} [width=230] 輸入組件寬度數字，單位為px，預設230
 * @vue-prop {Number} [height=600] 輸入組件寬度數字，單位為px，預設600
 * @vue-prop {Object} [paddingStyle={top:10,bottom:10,left:50,right:0}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，但因組件無法自動計算text寬度故right無效。單位為px，預設{top:10,bottom:10,left:50,right:0}
 * @vue-prop {String} [keyValueStart='valueStart'] 輸入項目物件存放起始值之欄位字串，預設'valueStart'
 * @vue-prop {String} [keyValueEnd='valueEnd'] 輸入項目物件存放結束值之欄位字串，預設'valueEnd'
 * @vue-prop {String} [keyText='text'] 輸入項目物件存放顯示文字之欄位字串，預設'text'
 * @vue-prop {Number} [valueMin=null] 輸入項目陣列內全部值之最小值數字，預設null
 * @vue-prop {Number} [valueMax=null] 輸入項目陣列內全部值之最大值數字，預設null
 * @vue-prop {String} [alignStart='left'] 輸入項目起始值刻度文字對齊字串，可選'left'與'right'，預設'left'
 * @vue-prop {String} [alignEnd='right'] 輸入項目結束值刻度文字對齊字串，可選'left'與'right'，預設'right'
 * @vue-prop {Function} [funFormatTickValue=null] 輸入處理項目數據之刻度值用以顯示函數，預設null
 * @vue-prop {String} [axisColor='#666'] 輸入軸顏色字串，預設'#666'
 * @vue-prop {String} [tickColor='#666'] 輸入刻度顏色字串，預設'#666'
 * @vue-prop {Number} [tickSize=5] 輸入刻度尺寸(為單側寬度)數字，單位為px，預設5
 * @vue-prop {String} [tickLabelColor='#666'] 輸入刻度文字顏色字串，預設'#666'
 * @vue-prop {String} [tickLabelFontSize='0.7rem'] 輸入刻度文字字型大小字串，預設'0.7rem'
 * @vue-prop {String} [segmentBackgroundColor='#FFB74D'] 輸入區塊背景顏色字串，預設'#FFB74D'
 * @vue-prop {String} [segmentBorderColor='#FFB74D'] 輸入區塊邊框顏色字串，預設'#FB8C00'
 * @vue-prop {Number} [segmentSize=6] 輸入區塊尺寸(為兩側總寬度)數字，單位為px，預設6
 * @vue-prop {Function} [funSegmentBackgroundColor=null] 輸入處理項目數據之區塊背景函數，預設null
 * @vue-prop {Boolean} [textWithPopup=false] 輸入項目文字是否可點擊顯示popup彈窗布林值，預設false
 * @vue-prop {String} [textFontSize='0.7rem'] 輸入項目文字區之文字字型大小字串，預設'0.7rem'
 * @vue-prop {String} [textColor='#222'] 輸入項目文字區之文字顏色字串，預設'#222'
 * @vue-prop {String} [textBackgroundColor='#ddd'] 輸入項目文字區之背景顏色字串，預設'#ddd'
 * @vue-prop {Number} [textTriangularSize=15] 輸入項目文字區之箭頭長度數字，單位為px，若textTriangularSize/textTriangularRatio*2小於項目文字區高度時則會破圖，預設15
 * @vue-prop {Number} [textTriangularRatio=1.5] 輸入項目文字區之箭頭長寬比值數字，若textTriangularSize/textTriangularRatio*2小於項目文字區高度時則會破圖，預設1.5
 * @vue-prop {Number} [textShift=null] 輸入項目文字區與左側軸距離數字，單位為px，若給null則自動使用paddingStyle.left值，預設null
 * @vue-prop {Boolean} [textCanClick=false] 輸入項目文字是否可點擊布林值，預設false
 * @vue-prop {Boolean} [segmentCanClick=false] 輸入區塊是否可點擊布林值，預設false
 */
export default {
    components: {
        WPopup,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        width: {
            type: Number,
            default: 230,
        },
        height: {
            type: Number,
            default: 600,
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    top: 10,
                    right: 0, //因無法自動計算text寬度, 故right無效
                    bottom: 10,
                    left: 50,
                }
            },
        },
        keyValueStart: {
            type: String,
            default: 'valueStart',
        },
        keyValueEnd: {
            type: String,
            default: 'valueEnd',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        valueMin: {
            type: Number,
            default: null,
        },
        valueMax: {
            type: Number,
            default: null,
        },
        alignStart: {
            type: String,
            default: 'left',
        },
        alignEnd: {
            type: String,
            default: 'right',
        },
        funFormatTickValue: {
            type: Function,
            default: null,
        },
        axisColor: {
            type: String,
            default: '#666',
        },
        tickColor: {
            type: String,
            default: '#666',
        },
        tickSize: {
            type: Number,
            default: 5,
        },
        tickLabelColor: {
            type: String,
            default: '#666',
        },
        tickLabelFontSize: {
            type: String,
            default: '0.7rem',
        },
        segmentBackgroundColor: {
            type: String,
            default: '#FFB74D',
        },
        segmentBorderColor: {
            type: String,
            default: '#FB8C00',
        },
        segmentSize: {
            type: Number,
            default: 6,
        },
        funSegmentBackgroundColor: {
            type: Function,
            default: null,
        },
        textWithPopup: {
            type: Boolean,
            default: false,
        },
        textFontSize: {
            type: String,
            default: '0.7rem',
        },
        textColor: {
            type: String,
            default: '#222',
        },
        textBackgroundColor: {
            type: String,
            default: '#ddd',
        },
        textTriangularSize: {
            type: Number,
            default: 15,
        },
        textTriangularRatio: {
            type: Number,
            default: 1.5,
        },
        textShift: {
            type: Number,
            default: null,
        },
        textCanClick: {
            type: Boolean,
            default: false,
        },
        segmentCanClick: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
        }
    },
    computed: {

        paddingFormat: function() {
            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle, { returnObj: true })
            // console.log('paddingFormat', JSON.stringify(cs))

            return cs
        },

        paddingTop: function() {
            let vo = this

            return get(vo, 'paddingFormat.top', 0)
        },

        paddingRight: function() {
            let vo = this

            return get(vo, 'paddingFormat.right', 0)
        },

        paddingBottom: function() {
            let vo = this

            return get(vo, 'paddingFormat.bottom', 0)
        },

        paddingLeft: function() {
            let vo = this

            return get(vo, 'paddingFormat.left', 0)
        },

        plotWidth: function() {
            let vo = this

            let pw = vo.width - vo.paddingLeft - vo.paddingRight
            // console.log('vo.width', vo.width)
            // console.log('vo.paddingLeft', vo.paddingLeft)
            // console.log('vo.paddingRight', vo.paddingRight)
            // console.log('pw', pw)
            pw = Math.max(pw, 0)
            // console.log('pw2', pw)

            return pw
        },

        plotHeight: function() {
            let vo = this

            let ph = vo.height - vo.paddingTop - vo.paddingBottom
            ph = Math.max(ph, 0)

            return ph
        },

        useTextTriangularSizeHalf: function() {
            let vo = this
            let s = vo.textTriangularSize
            let r = vo.textTriangularRatio
            let t = s / r
            // console.log('useTextTriangularSizeHalf', t)
            return t
        },

        useAlignStart: function() {
            let vo = this

            let c = vo.alignStart
            if (c !== 'left' && c !== 'right') {
                c = 'left'
            }

            return c
        },

        useAlignEnd: function() {
            let vo = this

            let c = vo.alignEnd
            if (c !== 'left' && c !== 'right') {
                c = 'right'
            }

            return c
        },

        useItemsOri: function() {
            let vo = this

            let rs = []
            each(vo.items, (v, k) => {

                //vs
                let vs = get(v, vo.keyValueStart, '')
                if (!isnum(vs)) {
                    console.log(`value[${vs}] at items[${k}].${vo.keyValueStart} is not a number`)
                }
                vs = cdbl(vs)

                //ve
                let ve = get(v, vo.keyValueEnd, '')
                if (!isnum(ve)) {
                    console.log(`value[${ve}] at items[${k}].${vo.keyValueEnd} is not a number`)
                }
                ve = cdbl(ve)

                //t
                let t = get(v, vo.keyText, '')
                if (!isestr(t)) {
                    t = ''
                }

                //push
                rs.push({
                    valueStart: vs,
                    valueEnd: ve,
                    text: t,
                    data: v,
                })

            })
            // console.log('useItemsOri', rs)

            return rs
        },

        vsve: function() {
            let vo = this

            let tvs = map(vo.useItemsOri, 'valueStart')
            let tve = map(vo.useItemsOri, 'valueEnd')

            return [...tvs, ...tve]
        },

        useValueMin: function() {
            let vo = this

            if (isNumber(vo.valueMin)) {
                return vo.valueMin
            }

            let r = min(vo.vsve)
            // console.log('useValueMin', r)

            return r
        },

        useValueMax: function() {
            let vo = this

            if (isNumber(vo.valueMax)) {
                return vo.valueMax
            }

            let r = max(vo.vsve)
            // console.log('useValueMax', r)

            return r
        },

        useItems: function() {
            let vo = this

            //rs
            let rs = []
            each(vo.useItemsOri, (v) => {
                let vs = v.valueStart
                vs = Math.min(Math.max(vs, vo.useValueMin), vo.useValueMax)
                let ve = v.valueEnd
                ve = Math.min(Math.max(ve, vo.useValueMin), vo.useValueMax)
                rs.push({
                    ...v,
                    valueStart: vs,
                    valueEnd: ve,
                })
            })
            // console.log('useItems', rs)

            return rs
        },

        useLabels: function() {
            let vo = this

            let rs = []
            each(vo.useItems, (v) => {
                rs.push({
                    value: v.valueStart,
                    align: vo.useAlignStart,
                })
                rs.push({
                    value: v.valueEnd,
                    align: vo.useAlignEnd,
                })
            })
            // console.log('useLabels rs', rs)

            //merge
            let rmin = {
                value: vo.useValueMin,
                align: vo.useAlignStart,
            }

            let rmax = {
                value: vo.useValueMax,
                align: vo.useAlignEnd,
            }
            rs = [
                rmin,
                ...rs,
                rmax,
            ]

            //若出現重複值, 且align剛好相反, 則取align=left者
            let gs = groupBy(rs, 'value')
            // console.log('gs', gs)
            let rst = []
            each(gs, (vs, value) => {
                // console.log(value, size(vs), vs)
                if (size(vs) === 1) {
                    rst.push(vs[0])
                    // console.log('vs[0]', vs[0])
                }
                else { //vs.length>1
                    let gvs = groupBy(vs, 'align')
                    // console.log('groupBy rs', gvs)
                    gvs = values(gvs)
                    // console.log('values gvs', gvs)
                    if (size(gvs) === 1) {
                        //只有1種align
                        rst.push(gvs[0][0])
                        // console.log('gvs[0][0]', gvs[0][0])
                    }
                    else { //gvs.length>1
                        //2種align, 直接生成align=left項目
                        let r = {
                            value,
                            align: 'left',
                        }
                        rst.push(r)
                        // console.log('r', r)
                    }
                }
            })
            rs = rst
            // console.log('useLabels 剔除重複值', rs)

            return rs
        },

        useLabelsLocs: function() {
            let vo = this

            //range
            let range = vo.useValueMax - vo.useValueMin

            //locs
            let locs = map(vo.useLabels, (v) => {

                //y
                let y = (v.value - vo.useValueMin) / range * vo.plotHeight

                //label
                let label = v.value
                if (isfun(vo.funFormatTickValue)) {
                    label = vo.funFormatTickValue(v.value)
                }

                //r
                let r = {
                    y,
                    align: v.align,
                    label,
                }

                return r
            })
            // console.log('useLabelsLocs', locs)

            return locs
        },

        useSamplesLocs: function() {
            let vo = this

            //range
            let range = vo.useValueMax - vo.useValueMin

            //locs
            let locs = map(vo.useItems, (v) => {

                //top
                let top = (v.valueStart - vo.useValueMin) / range * vo.plotHeight

                //bottom
                let bottom = (v.valueEnd - vo.useValueMin) / range * vo.plotHeight

                //r
                let r = {
                    y: top,
                    yc: (top + bottom) / 2,
                    height: bottom - top,
                    text: v.text,
                    data: v.data,
                }

                return r
            })
            // console.log('useSamplesLocs', locs)

            return locs
        },

        useAxisColor: function() {
            let vo = this
            return color2hex(vo.axisColor)
        },

        useTickColor: function() {
            let vo = this
            return color2hex(vo.tickColor)
        },

        useTickLabelColor: function() {
            let vo = this
            return color2hex(vo.tickLabelColor)
        },

        useSegmentBorderColor: function() {
            let vo = this
            return color2hex(vo.segmentBorderColor)
        },

        useSegmentCursor: function() {
            let vo = this
            let b = vo.segmentCanClick
            return b ? 'cursor:pointer;' : ''
        },

        useTextShift: function() {
            let vo = this

            //textShift
            if (isNumber(vo.textShift)) {
                return vo.textShift
            }

            //給予paddingLeft
            let s = 1 + vo.segmentSize / 2
            if (vo.useAlignStart === 'right' || vo.useAlignEnd === 'right') {
                s += vo.paddingLeft
            }

            return s
        },

        useTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

        useTextBackgroundColor: function() {
            let vo = this
            return color2hex(vo.textBackgroundColor)
        },

        useTextCursor: function() {
            let vo = this
            let b = vo.textWithPopup || vo.textCanClick
            return b ? 'cursor:pointer;' : ''
        },

    },
    methods: {

        getLabelShift: function(align) {
            let vo = this

            let t = ''
            if (align === 'left') {
                t = '-100% - '
            }
            let s = Math.max(vo.tickSize, 0)
            s += 4
            let c = `${t}${s}px`

            return c
        },

        getSegmentBackgroundColor: function(k) {
            let vo = this

            //color2hex
            let c = color2hex(vo.segmentBackgroundColor)

            //check
            if (isfun(vo.funSegmentBackgroundColor)) {

                //item
                let item = get(vo, `useItems.${k}.data`, {})

                //funSegmentBackgroundColor
                c = vo.funSegmentBackgroundColor(item, c)

            }

            return c
        },

        clickText: function(ev, item) {
            let vo = this

            //check
            if (!vo.textCanClick) {
                return
            }

            //msg
            let msg = {
                ev,
                item,
            }

            //emit
            vo.$emit('click-text', msg)

        },

        clickSegment: function(ev, item) {
            let vo = this

            //check
            if (!vo.segmentCanClick) {
                return
            }

            //msg
            let msg = {
                ev,
                item,
            }

            //emit
            vo.$emit('click-segment', msg)

        },

    }
}
</script>

<style scoped>
</style>
