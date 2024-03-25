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

            <div ref="left" :style="`width:${(r)*panelWidth}px; height:${panelHeight}px;`">
                <slot
                    name="left"
                    :ratio="r"
                    :width="(r)*panelWidth"
                    :height="panelHeight"
                ></slot>
            </div>

            <div
                ref="divBar"
                :style="`position:absolute; z-index:1; left:${(r)*panelWidth-bw/2}px; width:${bw}px; height:${panelHeight}px; border-left:${barBorderSize}px solid ${useBarBorderColor}; border-right:${barBorderSize}px solid ${useBarBorderColor}; cursor:col-resize; user-select:none;`"
            >
                <div :style="`width:${barSize}px; height:${panelHeight}px; background:${useBarColor};`"></div>
            </div>

            <div ref="right" :style="`width:${(1-r)*panelWidth}px; height:${panelHeight}px;`">
                <slot
                    name="right"
                    :ratio="1-r"
                    :width="(1-r)*panelWidth"
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
 * @vue-prop {Number} [ratio=0.5] 輸入分隔條位置比例數字，範圍為0~1，預設0.5
 * @vue-prop {Number} [ratioMin=0] 輸入分隔條位置最小比例數字，範圍為0~1，需小於ratioMax，若ratioMin大於ratioMax則由ratioMin主導，預設0
 * @vue-prop {Number} [ratioMax=1] 輸入分隔條位置最大比例數字，範圍為0~1，需大於ratioMin，若ratioMin大於ratioMax則由ratioMin主導，預設1
 * @vue-prop {Number} [leftWidthMin=null] 輸入左側區最小寬度數字，處理優先權大於ratioMin與ratioMax，預設null
 * @vue-prop {Number} [leftWidthMax=null] 輸入左側區最大寬度數字，處理優先權大於ratioMin與ratioMax，預設null
 * @vue-prop {Number} [rightWidthMin=null] 輸入右側區最小寬度數字，處理優先權大於ratioMin、ratioMax、leftWidthMin與leftWidthMax，預設null
 * @vue-prop {Number} [rightWidthMax=null] 輸入右側區最大寬度數字，處理優先權大於ratioMin、ratioMax、leftWidthMin與leftWidthMax，預設null
 * @vue-prop {String} [barColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {Number} [barSize=2] 輸入分隔條尺寸數字，為分隔條寬度，單位為px，預設2
 * @vue-prop {String} [barBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [barBorderSize=3] 輸入分隔條框線寬度數字，單位為px，預設3，通常配合barBorderColor='transparent'使可拖曳區加大又不遮蔽可視區
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        ratio: {
            type: Number,
            default: 0.5, //0~1
        },
        ratioMin: {
            type: Number,
            default: 0,
        },
        ratioMax: {
            type: Number,
            default: 1,
        },
        leftWidthMin: {
            type: Number,
            default: null,
        },
        leftWidthMax: {
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
            r: null,
            panelWidth: 0,
            panelHeight: 0,
            das: null,
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //das
        let das = domDragBarAndScroll(vo.$refs.divPanel, vo.$refs.divBar, { useTouchDragForPanel: false })
        das.on('dragBar', vo.dragBar)

        //save
        vo.das = das

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //clear
        if (vo.das) {
            vo.das.clear()
        }

    },
    computed: {

        changeParam: function() {
            // console.log('computed changeParam')

            let vo = this

            //ratio
            let r = vo.ratio

            //limitRatio
            r = vo.limitRatio(r)

            //save
            vo.r = r

            return ''
        },

        bw: function() {
            //console.log('computed changeParam')

            let vo = this

            return vo.barSize + vo.barBorderSize * 2
        },

        useBarColor: function() {
            return convertColor(this.barColor)
        },

        useBarBorderColor: function() {
            return convertColor(this.barBorderColor)
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

        limitRatio: function(r) {
            // console.log('methods limitRatio', r)

            let vo = this

            //ratioMin, ratioMax
            r = Math.min(r, vo.ratioMax)
            r = Math.max(r, vo.ratioMin)

            //check
            if (vo.panelWidth > 0) {

                //leftWidth
                let leftWidth = (r) * vo.panelWidth

                //check leftWidthMin
                if (isNumber(vo.leftWidthMin)) {
                    if (leftWidth < vo.leftWidthMin) {
                        r = vo.leftWidthMin / vo.panelWidth
                    }
                }

                //check leftWidthMax
                if (isNumber(vo.leftWidthMax)) {
                    if (leftWidth > vo.leftWidthMax) {
                        r = vo.leftWidthMax / vo.panelWidth
                    }
                }

                //rightWidth
                let rightWidth = (1 - r) * vo.panelWidth

                //check rightWidthMin
                if (isNumber(vo.rightWidthMin)) {
                    if (rightWidth < vo.rightWidthMin) {
                        r = -(vo.rightWidthMin / vo.panelWidth - 1)
                    }
                }

                //check rightWidthMax
                if (isNumber(vo.rightWidthMax)) {
                    if (rightWidth > vo.rightWidthMax) {
                        r = -(vo.rightWidthMax / vo.panelWidth - 1)
                    }
                }

            }

            return r
        },

        dragBar: function({ clientX }) {
            //console.log('methods dragBar', clientX)

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
            r = vo.limitRatio(r)

            //save
            vo.r = r

            //emit
            vo.$emit('update:ratio', r)

        },

    }
}
</script>

<style scoped>
</style>
