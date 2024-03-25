<template>
    <div
        v-domresize
        @domresize="resizePanel"
    >
        <WPanelScrollyCore
            :viewHeightMax="viewHeight"
            :scrollTop="scrollTop"
            :barOpacity="barOpacity"
            :barOpacityHover="barOpacityHover"
            v-on="$listeners"
        >
            <slot></slot>
        </WPanelScrollyCore>
    </div>
</template>

<script>
// import get from 'lodash-es/get.js'
import WPanelScrollyCore from './WPanelScrollyCore.vue'
import domResize from '../js/domResize.mjs'


/**
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度數字，單位為px，預設400
 * @vue-prop {Number} [scrollTop=0] 輸入目前捲動值數字，預設0
 * @vue-prop {Number} [barOpacity=0.6] 輸入捲軸透明度數字，預設0.6
 * @vue-prop {Number} [barOpacityHover=1] 輸入滑鼠移入時捲軸透明度數字，預設1
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WPanelScrollyCore,
    },
    props: {
        viewHeightMax: {
            type: Number,
            default: 400,
        },
        scrollTop: {
            type: Number,
            default: 0,
        },
        barOpacity: {
            type: Number,
            default: 0.6,
        },
        barOpacityHover: {
            type: Number,
            default: 1,
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

        },

        // resizeContent: function(msg) {
        //     //console.log('methods resizeContent', msg)

        //     let vo = this

        //     //save
        //     vo.contentHeight = msg.snew.offsetHeight

        //     // //triggerEvent
        //     // vo.triggerEvent('changeContentHeight')

        //     // //emit, 有triggerEvent故取消emit
        //     // vo.$emit('resize', { ...msg, from: 'content' })

        // },

        // scrollItems: async function(e) {
        //     //console.log('methods scrollItems', e)

        //     let vo = this

        //     //save
        //     vo.top = -e.t

        //     //emitEvent
        //     vo.emitEvent('scroll', e)
        //     vo.emitEvent('update:ratio', e.r)

        // },

        // emitEvent: function(name, value) {
        //     //console.log('methods emitEvent', name, value)

        //     let vo = this

        //     //$nextTick
        //     vo.$nextTick(() => {

        //         //emit
        //         vo.$emit(name, value)

        //     })

        // },

    },
}
</script>

<style scoped>
</style>

