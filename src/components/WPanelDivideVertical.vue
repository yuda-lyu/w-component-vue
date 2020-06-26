<template>
    <div
        :changeParam="changeParam"
    >

        <div
            ref="divPanel"
            style="position:relative;"
        >

            <div ref="top" :style="`width:${panelWidth}px; height:${(r)*panelHeight}px;`">
                <slot
                    name="top"
                    :ratio="r"
                    :width="panelWidth"
                    :height="(r)*panelHeight"
                ></slot>
            </div>

            <div
                ref="divBar"
                :style="`position:absolute; z-index:1; top:${(r)*panelHeight-bw/2}px; width:${panelWidth}px; height:${barSize}px; border-top:${barBorderSize}px solid ${barBorderColor}; border-bottom:${barBorderSize}px solid ${barBorderColor}; cursor:row-resize; user-select:none;`"
            >
                <div :style="`width:${panelWidth}px; height:${barSize}px; background-color:${barColor};`"></div>
            </div>

            <div ref="bottom" :style="`width:${panelWidth}px; height:${(1-r)*panelHeight}px;`">
                <slot
                    name="bottom"
                    :ratio="1-r"
                    :width="panelWidth"
                    :height="(1-r)*panelHeight"
                ></slot>
            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import domDetect from 'wsemi/src/domDetect.mjs'
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'


/**
 * @vue-prop {Number} [ratio=0.5] 輸入分隔條位置比例數字，範圍為0~1，預設0.5
 * @vue-prop {Number} [min=0] 輸入分隔條位置最小比例數字，範圍為0~1，需小於max，若min大於max則由min主導，預設0
 * @vue-prop {Number} [max=1] 輸入分隔條位置最大比例數字，範圍為0~1，需大於min，若min大於max則由min主導，預設1
 * @vue-prop {String} [barColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {String} [barBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [barSize=2] 輸入分隔條尺寸數字，為分隔條高度，單位為px，預設2
 * @vue-prop {Number} [barBorderSize=3] 輸入分隔條框線寬度數字，單位為px，預設3，通常配合barBorderColor='transparent'使可拖曳區加大又不遮蔽可視區
 */
export default {
    components: {
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
            de: null,
            das: null,
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //de, 不能用vuetify的v-resize, 其偵測雖是元素的尺寸變化, 但slot內容於外層組件初始化時, 這時指定元素的尺寸變更卻不會觸發v-resize, 故得要用基於timer的domDetect偵測尺寸變化
        let de = domDetect(() => {
            return get(vo, '$el')
        })
        de.on('resize', (s) => {
            // console.log('resize', s)
            vo.panelWidth = s.snew.offsetWidth
            vo.panelHeight = s.snew.offsetHeight
        })
        vo.de = de

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
        if (vo.de) {
            vo.de.clear()
        }

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

        dragBar: function({ clientY }) {
            //console.log('methods dragBar', clientY)

            let vo = this

            let bd = vo.$el.getBoundingClientRect()
            let y = clientY
            let h = vo.$el.offsetHeight
            let r = 0
            if (h > 0) {
                r = (y - bd.top) / h //clientX需扣除元件的top位置
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
