<template>
    <div
        v-domresize
        @domresize="resizePanel"
    >
        <WPanelScrollyCore
            ref="wpsc"
            :viewHeightMax="viewHeight"
            :contentHeight="contentHeight"
            :scrollDelta="scrollDelta"
            :barColor="barColor"
            :barColorHover="barColorHover"
            :barBackgroundColor="barBackgroundColor"
            :barBackgroundColorHover="barBackgroundColorHover"
            :barWidth="barWidth"
            :barHeightMin="barHeightMin"
            :ratio="ratio"
            @change="scrollItems"
        >
            <div
                :style="`position:absolute; top:${top}px; left:0px; width:100%;`"
                v-domresize
                @domresize="resizeContent"
            >
                <slot></slot>
            </div>
        </WPanelScrollyCore>
    </div>
</template>

<script>
import get from 'lodash/get'
import WPanelScrollyCore from './WPanelScrollyCore.vue'
import domResize from '../js/domResize.mjs'


/**
 * @vue-prop {Number} [scrollDelta=100] 輸入一次捲動高度，單位為px，預設100
 * @vue-prop {String} [barColor='rgba(0,0,0,0.15)'] 輸入捲軸內區塊顏色字串，預設'rgba(0,0,0,0.15)'
 * @vue-prop {String} [barColorHover='rgba(0,0,0,0.3)'] 輸入滑鼠移入時捲軸內區塊顏色字串，預設'rgba(0,0,0,0.3)'
 * @vue-prop {String} [barBackgroundColor='transparent'] 輸入捲軸背景顏色字串，預設'transparent'
 * @vue-prop {String} [barBackgroundColorHover='transparent'] 輸入滑鼠移入時捲軸背景顏色字串，預設'transparent'
 * @vue-prop {Number} [barWidth=8] 輸入捲軸區寬度，單位為px，預設8
 * @vue-prop {Number} [barHeightMin=50] 輸入捲軸內區塊最小高度，單位為px，預設50
 * @vue-prop {Number} [ratio=0] 輸入目前捲動比例數字，預設0
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WPanelScrollyCore,
    },
    props: {
        scrollDelta: {
            type: Number,
            default: 100,
        },
        barOpacity: {
            type: Number,
            default: 0.6,
        },
        barOpacityHover: {
            type: Number,
            default: 1,
        },
        barColor: {
            type: String,
            default: 'rgba(0,0,0,0.15)',
        },
        barColorHover: {
            type: String,
            default: 'rgba(0,0,0,0.3)',
        },
        barBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        barBackgroundColorHover: {
            type: String,
            default: 'transparent',
        },
        barWidth: {
            type: Number,
            default: 8,
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
            top: 0, //內容區top px
            viewHeight: 0, //外框區高度px
            viewHeightTemp: 0, //外框區上次偵測高度px
            contentHeight: 0, //內容區高度px
            contentHeightTemp: 0, //內容區上次偵測高度px
        }
    },
    computed: {
    },
    methods: {

        resizePanel: function(msg) {
            //console.log('methods resizePanel', msg)

            let vo = this

            //save
            vo.viewHeight = msg.snew.offsetHeight

            //triggerEvent
            vo.triggerEvent('changeViewHeight')

            // //emit, 有triggerEvent故取消emit
            // vo.$emit('resize', { ...msg, from: 'panel' })

        },

        resizeContent: function(msg) {
            //console.log('methods resizeContent', msg)

            let vo = this

            //save
            vo.contentHeight = msg.snew.offsetHeight

            //triggerEvent
            vo.triggerEvent('changeContentHeight')

            // //emit, 有triggerEvent故取消emit
            // vo.$emit('resize', { ...msg, from: 'content' })

        },

        scrollItems: async function(e) {
            //console.log('methods scrollItems', e)

            let vo = this

            //save
            vo.top = -e.t

            //emitEvent
            vo.emitEvent('scroll', e)
            vo.emitEvent('update:ratio', e.r)

        },

        emitEvent: function(name, value) {
            //console.log('methods emitEvent', name, value)

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit(name, value)

            })

        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //t
            let t = get(vo, '$refs.wpsc.triggerEvent', null)
            if (t) {
                t(from)
            }

        },

    },
}
</script>

<style scoped>
</style>

