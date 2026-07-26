<template>
    <div
        :changeParam="changeParam"
        v-domresize
        @domresize="resizePanel"
    >

        <div
            ref="divPanel"
            style="position:relative; display:flex;"
        >

            <div ref="left" :style="`width:${(r1)*panelWidth}px; height:${panelHeight}px;`">
                <slot
                    name="left"
                    :ratio="r1"
                    :width="(r1)*panelWidth"
                    :height="panelHeight"
                ></slot>
            </div>

            <div
                ref="divBar1"
                :style="`position:absolute; z-index:1; left:${(r1)*panelWidth-bw/2}px; width:${barSize}px; height:${panelHeight}px; border-left:${barBorderSize}px solid ${useBarBorderColor}; border-right:${barBorderSize}px solid ${useBarBorderColor}; cursor:col-resize; user-select:none;`"
            >
                <div :style="`width:${barSize}px; height:${panelHeight}px; background:${useBarColor};`"></div>
            </div>

            <div ref="center" :style="`width:${(r2-r1)*panelWidth}px; height:${panelHeight}px;`">
                <slot
                    name="center"
                    :ratio="r2-r1"
                    :width="(r2-r1)*panelWidth"
                    :height="panelHeight"
                ></slot>
            </div>

            <div
                ref="divBar2"
                :style="`position:absolute; z-index:1; left:${(r2)*panelWidth-bw/2}px; width:${barSize}px; height:${panelHeight}px; border-left:${barBorderSize}px solid ${useBarBorderColor}; border-right:${barBorderSize}px solid ${useBarBorderColor}; cursor:col-resize; user-select:none;`"
            >
                <div :style="`width:${barSize}px; height:${panelHeight}px; background:${useBarColor};`"></div>
            </div>

            <div ref="right" :style="`width:${(1-r2)*panelWidth}px; height:${panelHeight}px;`">
                <slot
                    name="right"
                    :ratio="1-r2"
                    :width="(1-r2)*panelWidth"
                    :height="panelHeight"
                ></slot>
            </div>

        </div>

    </div>
</template>

<script>
import isNumber from 'lodash-es/isNumber.js'
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import domResize from '../js/domResize.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * 三分水平分割組件，由左、中、右3個分區與2條可拖曳分隔條組成，各分區內容以具名scoped slot(left、center、right)帶出，各slot帶出ratio(分區比例)、width(分區寬px)、height(分區高px)
 *
 * @vue-prop {Number} [ratio1=1/3] 輸入第一分隔條位置比例數字，範圍為0~1，需小於ratio2，預設1/3
 * @vue-prop {Number} [ratio2=2/3] 輸入第二分隔條位置比例數字，範圍為0~1，需大於ratio1，預設2/3
 * @vue-prop {Number} [ratio1Min=0] 輸入第一分隔條位置最小比例數字，範圍為0~1，需小於ratio1Max，若ratio1Min大於ratio1Max則由ratio1Min主導，預設0
 * @vue-prop {Number} [ratio1Max=1] 輸入第一分隔條位置最大比例數字，範圍為0~1，需大於ratio1Min，若ratio1Min大於ratio1Max則由ratio1Min主導，預設1
 * @vue-prop {Number} [ratio2Min=0] 輸入第二分隔條位置最小比例數字，範圍為0~1，需小於ratio2Max，若ratio2Min大於ratio2Max則由ratio2Min主導，預設0
 * @vue-prop {Number} [ratio2Max=1] 輸入第二分隔條位置最大比例數字，範圍為0~1，需大於ratio2Min，若ratio2Min大於ratio2Max則由ratio2Min主導，預設1
 * @vue-prop {Number} [sectionWidthMin=null] 輸入各分區最小寬度數字，為leftWidthMin、centerWidthMin與rightWidthMin之預設值，單位為px，處理優先權大於ratio1Min、ratio1Max、ratio2Min與ratio2Max，預設null
 * @vue-prop {Number} [sectionWidthMax=null] 輸入各分區最大寬度數字，為leftWidthMax、centerWidthMax與rightWidthMax之預設值，單位為px，處理優先權大於ratio1Min、ratio1Max、ratio2Min與ratio2Max，預設null
 * @vue-prop {Number} [leftWidthMin=null] 輸入左側區最小寬度數字，單位為px，處理優先權大於sectionWidthMin，預設null代表沿用sectionWidthMin
 * @vue-prop {Number} [leftWidthMax=null] 輸入左側區最大寬度數字，單位為px，處理優先權大於sectionWidthMax，預設null代表沿用sectionWidthMax
 * @vue-prop {Number} [centerWidthMin=null] 輸入中間區最小寬度數字，單位為px，處理優先權大於sectionWidthMin，預設null代表沿用sectionWidthMin
 * @vue-prop {Number} [centerWidthMax=null] 輸入中間區最大寬度數字，單位為px，處理優先權大於sectionWidthMax，預設null代表沿用sectionWidthMax
 * @vue-prop {Number} [rightWidthMin=null] 輸入右側區最小寬度數字，單位為px，處理優先權大於sectionWidthMin，預設null代表沿用sectionWidthMin
 * @vue-prop {Number} [rightWidthMax=null] 輸入右側區最大寬度數字，單位為px，處理優先權大於sectionWidthMax，預設null代表沿用sectionWidthMax
 * @vue-prop {String} [barColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {Number} [barSize=2] 輸入分隔條尺寸數字，為分隔條寬度，單位為px，預設2
 * @vue-prop {String} [barBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [barBorderSize=3] 輸入分隔條框線寬度數字，單位為px，預設3，通常配合barBorderColor='transparent'使可拖曳區加大又不遮蔽可視區
 * @vue-event update:ratio1 拖曳第一分隔條時發射，帶出新的第一分隔條位置比例數字
 * @vue-event update:ratio2 拖曳第二分隔條時發射，帶出新的第二分隔條位置比例數字
 * @vue-event resize 組件尺寸變更時發射，帶出domresize訊息物件
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        ratio1: {
            type: Number,
            default: 1 / 3, //0~1
        },
        ratio2: {
            type: Number,
            default: 2 / 3, //0~1
        },
        ratio1Min: {
            type: Number,
            default: 0,
        },
        ratio1Max: {
            type: Number,
            default: 1,
        },
        ratio2Min: {
            type: Number,
            default: 0,
        },
        ratio2Max: {
            type: Number,
            default: 1,
        },
        sectionWidthMin: {
            type: Number,
            default: null,
        },
        sectionWidthMax: {
            type: Number,
            default: null,
        },
        leftWidthMin: {
            type: Number,
            default: null,
        },
        leftWidthMax: {
            type: Number,
            default: null,
        },
        centerWidthMin: {
            type: Number,
            default: null,
        },
        centerWidthMax: {
            type: Number,
            default: null,
        },
        rightWidthMin: {
            type: Number,
            default: null,
        },
        rightWidthMax: {
            type: Number,
            default: null,
        },
        barColor: {
            type: String,
            default: '#ddd',
        },
        barSize: {
            type: Number,
            default: 2,
        },
        barBorderColor: {
            type: String,
            default: 'transparent',
        },
        barBorderSize: {
            type: Number,
            default: 3,
        },
    },
    data: function() {
        return {
            r1: null,
            r2: null,
            panelWidth: 0,
            panelHeight: 0,
            das1: null,
            das2: null,
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //das1, das2, 兩條分隔條各自建立拖曳器
        let das1 = domDragBarAndScroll(vo.$refs.divPanel, vo.$refs.divBar1, { useTouchDragForPanel: false })
        das1.on('dragBar', vo.dragBar1)
        let das2 = domDragBarAndScroll(vo.$refs.divPanel, vo.$refs.divBar2, { useTouchDragForPanel: false })
        das2.on('dragBar', vo.dragBar2)

        //save
        vo.das1 = das1
        vo.das2 = das2

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //clear
        if (vo.das1) {
            vo.das1.clear()
        }
        if (vo.das2) {
            vo.das2.clear()
        }

    },
    computed: {

        changeParam: function() {
            // console.log('computed changeParam')

            let vo = this

            //ratio1, ratio2
            let r1 = vo.ratio1
            let r2 = vo.ratio2

            //limitRatio
            r1 = vo.limitRatio1(r1, r2)
            r2 = vo.limitRatio2(r2, r1)

            //save
            vo.r1 = r1
            vo.r2 = r2

            return ''
        },

        bw: function() {
            let vo = this

            return vo.barSize + vo.barBorderSize * 2
        },

        useBarColor: function() {
            return convertColor(this.barColor)
        },

        useBarBorderColor: function() {
            return convertColor(this.barBorderColor)
        },

        useWidthLimits: function() {
            let vo = this

            //各分區寬度限制, 個別分區未給予時沿用sectionWidthMin與sectionWidthMax
            let pick = (v, vd) => {
                if (isNumber(v)) {
                    return v
                }
                return vd
            }
            return {
                leftMin: pick(vo.leftWidthMin, vo.sectionWidthMin),
                leftMax: pick(vo.leftWidthMax, vo.sectionWidthMax),
                centerMin: pick(vo.centerWidthMin, vo.sectionWidthMin),
                centerMax: pick(vo.centerWidthMax, vo.sectionWidthMax),
                rightMin: pick(vo.rightWidthMin, vo.sectionWidthMin),
                rightMax: pick(vo.rightWidthMax, vo.sectionWidthMax),
            }
        },

    },
    methods: {

        resizePanel: function(msg) {
            //console.log('methods resizePanel', msg)

            let vo = this

            //update
            vo.panelWidth = msg.snew.offsetWidth
            vo.panelHeight = msg.snew.offsetHeight

            //emit
            vo.$emit('resize', msg)

        },

        limitRatio1: function(r1, r2) {
            // console.log('methods limitRatio1', r1, r2)

            let vo = this

            //ratio1Min, ratio1Max
            r1 = Math.min(r1, vo.ratio1Max)
            r1 = Math.max(r1, vo.ratio1Min)

            //check
            if (vo.panelWidth > 0) {

                //ls
                let ls = vo.useWidthLimits

                //leftWidth
                let leftWidth = (r1) * vo.panelWidth

                //check leftWidthMin
                if (isNumber(ls.leftMin)) {
                    if (leftWidth < ls.leftMin) {
                        r1 = ls.leftMin / vo.panelWidth
                    }
                }

                //check leftWidthMax
                if (isNumber(ls.leftMax)) {
                    if (leftWidth > ls.leftMax) {
                        r1 = ls.leftMax / vo.panelWidth
                    }
                }

                //centerWidth, 拖曳第一分隔條時中間區由左側變動, 故以r2回推r1
                let centerWidth = (r2 - r1) * vo.panelWidth

                //check centerWidthMin
                if (isNumber(ls.centerMin)) {
                    if (centerWidth < ls.centerMin) {
                        r1 = r2 - ls.centerMin / vo.panelWidth
                    }
                }

                //check centerWidthMax
                if (isNumber(ls.centerMax)) {
                    if (centerWidth > ls.centerMax) {
                        r1 = r2 - ls.centerMax / vo.panelWidth
                    }
                }

            }

            //第一分隔條不可越過第二分隔條, 否則中間區寬度為負
            r1 = Math.min(r1, r2)

            return r1
        },

        limitRatio2: function(r2, r1) {
            // console.log('methods limitRatio2', r2, r1)

            let vo = this

            //ratio2Min, ratio2Max
            r2 = Math.min(r2, vo.ratio2Max)
            r2 = Math.max(r2, vo.ratio2Min)

            //check
            if (vo.panelWidth > 0) {

                //ls
                let ls = vo.useWidthLimits

                //centerWidth, 拖曳第二分隔條時中間區由右側變動, 故以r1推算r2
                let centerWidth = (r2 - r1) * vo.panelWidth

                //check centerWidthMin
                if (isNumber(ls.centerMin)) {
                    if (centerWidth < ls.centerMin) {
                        r2 = r1 + ls.centerMin / vo.panelWidth
                    }
                }

                //check centerWidthMax
                if (isNumber(ls.centerMax)) {
                    if (centerWidth > ls.centerMax) {
                        r2 = r1 + ls.centerMax / vo.panelWidth
                    }
                }

                //rightWidth
                let rightWidth = (1 - r2) * vo.panelWidth

                //check rightWidthMin
                if (isNumber(ls.rightMin)) {
                    if (rightWidth < ls.rightMin) {
                        r2 = 1 - ls.rightMin / vo.panelWidth
                    }
                }

                //check rightWidthMax
                if (isNumber(ls.rightMax)) {
                    if (rightWidth > ls.rightMax) {
                        r2 = 1 - ls.rightMax / vo.panelWidth
                    }
                }

            }

            //第二分隔條不可越過第一分隔條, 否則中間區寬度為負
            r2 = Math.max(r2, r1)

            return r2
        },

        dragBar1: function({ clientX }) {
            //console.log('methods dragBar1', clientX)

            let vo = this

            //r
            let bd = vo.$el.getBoundingClientRect()
            let x = clientX
            let w = vo.$el.offsetWidth
            let r = 0
            if (w > 0) {
                r = (x - bd.left) / w //clientX需扣除元件的left位置
            }

            //limitRatio
            r = vo.limitRatio1(r, vo.r2)

            //save
            vo.r1 = r

            //emit
            vo.$emit('update:ratio1', r)

        },

        dragBar2: function({ clientX }) {
            //console.log('methods dragBar2', clientX)

            let vo = this

            //r
            let bd = vo.$el.getBoundingClientRect()
            let x = clientX
            let w = vo.$el.offsetWidth
            let r = 0
            if (w > 0) {
                r = (x - bd.left) / w //clientX需扣除元件的left位置
            }

            //limitRatio
            r = vo.limitRatio2(r, vo.r1)

            //save
            vo.r2 = r

            //emit
            vo.$emit('update:ratio2', r)

        },

    }
}
</script>

<style scoped>
</style>
