<template>
    <div
        :changeParam="changeParam"
        v-domresize
        @domresize="updatePanelSize"
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
                :style="`position:absolute; z-index:1; left:${(r)*panelWidth-bw/2}px; width:${bw}px; height:${panelHeight}px; border-left:${barBorderSize}px solid ${barBorderColor}; border-right:${barBorderSize}px solid ${barBorderColor}; cursor:col-resize; user-select:none;`"
            >
                <div :style="`width:${barSize}px; height:${panelHeight}px; background-color:${barColor};`"></div>
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
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import domResize from '../js/domResize.mjs'


/**
 * @vue-prop {Number} [ratio=0.5] 輸入分隔條位置比例數字，範圍為0~1，預設0.5
 * @vue-prop {Number} [min=0] 輸入分隔條位置最小比例數字，範圍為0~1，需小於max，若min大於max則由min主導，預設0
 * @vue-prop {Number} [max=1] 輸入分隔條位置最大比例數字，範圍為0~1，需大於min，若min大於max則由min主導，預設1
 * @vue-prop {String} [barColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {String} [barBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [barSize=2] 輸入分隔條尺寸數字，為分隔條寬度，單位為px，預設2
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
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 1,
        },
        barColor: {
            type: String,
            default: '#ddd',
        },
        barBorderColor: {
            type: String,
            default: 'transparent',
        },
        barSize: {
            type: Number,
            default: 2,
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
            //console.log('computed changeParam')

            let vo = this

            //ratio
            let r = vo.ratio

            //min, max
            r = Math.min(r, vo.max)
            r = Math.max(r, vo.min)

            //save
            vo.r = r

            return ''
        },

        bw: function() {
            //console.log('computed changeParam')

            let vo = this

            return vo.barSize + vo.barBorderSize * 2
        },

    },
    methods: {

        updatePanelSize: function(msg) {
            //console.log('methods updatePanelSize', msg)

            let vo = this

            //update
            vo.panelWidth = msg.snew.offsetWidth
            vo.panelHeight = msg.snew.offsetHeight

            //emit
            vo.$emit('resize', msg)

        },

        dragBar: function({ clientX }) {
            //console.log('methods dragBar', clientX)

            let vo = this

            let bd = vo.$el.getBoundingClientRect()
            let x = clientX
            let w = vo.$el.offsetWidth
            let r = 0
            if (w > 0) {
                r = (x - bd.left) / w //clientX需扣除元件的left位置
            }

            //min, max
            r = Math.min(r, vo.max)
            r = Math.max(r, vo.min)

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
