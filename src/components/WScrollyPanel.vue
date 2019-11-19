<template>
    <div ref="sp">
        <WScrollyPanelCore
            ref="wsp"
            :viewHeightMax="viewHeight"
            :contentHeight="contentHeight"
            :scrollDelta="scrollDelta"
            :barColor="barColor"
            :barBackgroundColor="barBackgroundColor"
            :barWidth="barWidth"
            :barHeightMin="barHeightMin"
            :ratio="ratio"
            @change="scrollItems"
        >
            <div ref="cp" :style="`position:absolute; top:${top}px; width:100%; box-sizing:border-box;`">
                <slot></slot>
            </div>
        </WScrollyPanelCore>
    </div>
</template>

<script>
import get from 'lodash/get'
import WScrollyPanelCore from './WScrollyPanelCore.vue'

/**
 * @vue-prop {Number} [scrollDelta=100] 輸入一次捲動高度，單位為px，預設100
 * @vue-prop {String} [barColor='rgba(0,0,0,0.2)'] 輸入捲軸內區塊顏色字串，預設'rgba(0,0,0,0.2)'
 * @vue-prop {String} [barBackgroundColor='transparent'] 輸入捲軸背景顏色字串，預設'transparent'
 * @vue-prop {Number} [barWidth=10] 輸入捲軸區寬度，單位為px，預設10
 * @vue-prop {Number} [barHeightMin=50] 輸入捲軸內區塊最小高度，單位為px，預設50
 * @vue-prop {Number} [ratio=0] 輸入目前捲動比例數字，預設0
 */
export default {
    components: {
        WScrollyPanelCore,
    },
    props: {
        scrollDelta: {
            type: Number,
            default: 100,
        },
        barColor: {
            type: String,
            default: 'rgba(0,0,0,0.2)',
        },
        barBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        barWidth: {
            type: Number,
            default: 10,
        },
        barHeightMin: {
            type: Number,
            default: 50,
        },
        ratio: {
            type: Number,
            default: 0,
        },
    },
    data: function() {
        return {
            timer: null,
            top: 0, //內容區top px
            viewHeight: 0, //外框區高度px
            viewHeightTemp: 0, //外框區上次偵測高度px
            contentHeight: 0, //內容區高度px
            contentHeightTemp: 0, //內容區上次偵測高度px
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //detect size
        vo.timer = setInterval(() => {

            vo.viewHeightTemp = get(vo, '$refs.sp.clientHeight', 0)
            if (vo.viewHeight !== vo.viewHeightTemp) {
                vo.viewHeight = vo.viewHeightTemp
                vo.triggerEvent('changeViewHeight')
            }

            vo.contentHeightTemp = get(vo, '$refs.cp.clientHeight', 0)
            if (vo.contentHeight !== vo.contentHeightTemp) {
                vo.contentHeight = vo.contentHeightTemp
                vo.triggerEvent('changeContentHeight')
            }

        }, 100)

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //clearInterval
        clearInterval(vo.timer)

    },
    computed: {
    },
    methods: {

        scrollItems: async function(e) {
            //console.log('methods scrollItems', e)

            let vo = this

            //save
            vo.top = -e.t

        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //t
            let t = get(vo, '$refs.wsp.triggerEvent', null)
            if (t) {
                t(from)
            }

        },

    },
}
</script>

<style scoped>
</style>

