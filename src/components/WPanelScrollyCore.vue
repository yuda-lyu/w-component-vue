<template>
    <div
        :style="`overflow:hidden; height:${Math.min(contentHeight,viewHeightMax)}px; box-sizing:content-box;`"
    >
        <div
            :style="`position:relative; overflow:hidden; height:${viewHeightMax}px; box-sizing:border-box;`"
            :changeRatio="changeRatio"
            @mouseenter="barOpacity=1"
            @mouseleave="barOpacity=0.8"
        >

            <div :style="`height:${viewHeightMax+1}px;`"></div>

            <div style="position:absolute; top:0; right:0px; height:100%; z-index:1;" v-show="contentHeightEff>0">
                <div :style="`position:relative; width:${barWidth}px; height:100%; background:${useBarBackgroundColor}; padding:2px 1px; box-sizing:border-box;`">
                    <div
                        ref="divBar"
                        :style="`width:100%; height:${barSize}px; background:${useBarColor}; border-radius:15px; user-select:none; transform:translateY(${barLoc}px); cursor:pointer; opacity:${barOpacity}; transition:opacity 0.5s;`"
                    ></div>
                </div>
            </div>

            <div
                ref="divPanel"
                :style="`position:absolute; top:0px; width:calc(100% + 18px); overflow-y:scroll; overflow-x:hidden; height:${viewHeightMax}px;`"
            >

                <slot></slot>

            </div>

        </div>
    </div>
</template>

<script>
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import domDetect from 'wsemi/src/domDetect.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [contentHeight=10000] 輸入內容最大高度，單位為px，預設10000
 * @vue-prop {Number} [scrollDelta=100] 輸入一次捲動高度，單位為px，預設100
 * @vue-prop {String} [barColor='rgba(0,0,0,0.2)'] 輸入捲軸內區塊顏色字串，預設'rgba(0,0,0,0.2)'
 * @vue-prop {String} [barBackgroundColor='transparent'] 輸入捲軸背景顏色字串，預設'transparent'
 * @vue-prop {Number} [barWidth=8] 輸入捲軸區寬度，單位為px，預設8
 * @vue-prop {Number} [barHeightMin=50] 輸入捲軸內區塊最小高度，單位為px，預設50
 * @vue-prop {Number} [ratio=0] 輸入目前捲動比例數字，預設0
 */
export default {
    props: {
        viewHeightMax: {
            type: Number,
            default: 400,
        },
        contentHeight: {
            type: Number,
            default: 10000,
        },
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
            de: null,
            das: null,

            ratioTrans: 0, //捲動比例
            barPressY: null, //bar按下準備拖曳前y座標
            barOpacity: 0.5,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //de, 不能用vuetify的v-resize, 其偵測雖是元素的尺寸變化, 但slot內容於外層組件初始化時, 這時指定元素的尺寸變更卻不會觸發v-resize, 故得要用基於timer的domDetect偵測尺寸變化
        let de = domDetect(() => {
            return vo.$el
        })
        de.on('resize', (s) => {
            //console.log('resize', s)

            //triggerEvent
            vo.triggerEvent('resize')

        })
        vo.de = de

        //das
        let das = domDragBarAndScroll(vo.$refs.divPanel, vo.$refs.divBar, { getHeighRatio: () => vo.heighRatio, stopScrollPropagationForPanel: true })
        das.on('scrollPanel', vo.scrollPanel)
        das.on('pressBar', vo.pressBar)
        das.on('dragBar', vo.dragBar)
        das.on('freeBar', vo.freeBar)

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

        useBarColor: function() {
            //console.log('computed useBarColor')

            let vo = this

            return color2hex(vo.barColor)
        },

        useBarBackgroundColor: function() {
            //console.log('computed useBarBackgroundColor')

            let vo = this

            return color2hex(vo.barBackgroundColor)
        },

        changeRatio: function () {
            //console.log('computed changeRatio')

            let vo = this

            //ratioTrans
            let ratioTrans = vo.ratio

            //limit
            ratioTrans = Math.max(ratioTrans, 0)
            ratioTrans = Math.min(ratioTrans, 1)

            //save
            vo.ratioTrans = ratioTrans

            return ''
        },

        heighRatio: function() {
            //console.log('computed heighRatio')

            let vo = this

            //r, 此處只有domDragBarAndScroll會調用, 也就是使用者拖曳捲軸才觸發
            let ch = vo.contentHeight
            let r = vo.viewHeightMax / Math.max(ch, 1)

            return r
        },

        barSize: function() {
            //console.log('computed barSize')

            let vo = this

            //r size ratio
            let r = vo.viewHeightMax / vo.contentHeight

            //barSize
            let barSize = Math.max(r * vo.viewHeightMax, vo.barHeightMin)

            return barSize
        },

        barLoc: function() {
            //console.log('computed barLoc')

            let vo = this

            return vo.ratioTrans * vo.viewHeightEff
        },

        contentHeightEff: function() {
            //console.log('computed contentHeightEff')

            let vo = this

            //v
            let v = vo.contentHeight - vo.viewHeightMax
            v = Math.max(v, 0)

            //triggerEvent, 若內容高度變更則需要triggerEvent
            vo.triggerEvent('changeContentHeight')

            return v
        },

        viewHeightEff: function() {
            //console.log('computed viewHeightEff')

            let vo = this

            //v
            let v = vo.viewHeightMax - vo.barSize - 4 //4px為padding 2px*2
            v = Math.max(v, 0)

            return v
        },

        viewTop: function() {
            //console.log('computed viewTop')

            let vo = this

            return vo.ratioTrans * vo.contentHeightEff
        },

        viewBottom: function() {
            //console.log('computed viewBottom')

            let vo = this

            return vo.viewTop + vo.viewHeightMax
        },

    },
    methods: {

        updateRatioTrans: function(ratioTrans) {
            //console.log('methods updateRatioTrans', ratioTrans)

            let vo = this

            //limit
            ratioTrans = Math.max(ratioTrans, 0)
            ratioTrans = Math.min(ratioTrans, 1)

            //check
            if (vo.contentHeightEff === 0) {
                ratioTrans = 0
            }

            //changed
            let changed = vo.ratioTrans !== ratioTrans
            if (changed) {

                //ratioTrans
                vo.ratioTrans = ratioTrans

            }

            return changed
        },

        pressBar: function({ clientY }) {
            //console.log('methods pressBar', clientY)

            let vo = this

            //save clientY
            if (clientY) {

                //barPressY
                vo.barPressY = clientY //e.clientY

            }

        },

        dragBar: function({ clientY }) {
            //console.log('methods dragBar', clientY)

            let vo = this

            //d
            let d = clientY - vo.barPressY //e.clientY

            //deltaRatio
            let deltaRatio = d / vo.viewHeightEff

            //scrollByDeltaRatio
            vo.scrollByDeltaRatio(deltaRatio)

            //update
            vo.barPressY = clientY //e.clientY

        },

        freeBar: function() {
            //console.log('methods freeBar')

            let vo = this

            //triggerEvent, 拖曳時有些外部組件處理過慢, 導致節點位置未更新完畢, 故於放掉滑鼠按鍵時triggerEvent, 使外部組件再次接收事件進行更新節點
            vo.triggerEvent('freeBar')

        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //nextTick, 因為外部可以因變更而呼叫triggerEvent, throttle第1次觸發是直接呼叫執行, 導致還沒收到外部傳入數據就由當前資訊emit出去
            vo.$nextTick(() => {

                //o
                let o = {
                    from,
                    r: vo.ratioTrans,
                    t: vo.viewTop,
                    b: vo.viewBottom,
                    ch: vo.contentHeight,
                }
                //console.log('emit', o)

                //emit ratio
                vo.$emit('update:ratio', vo.ratioTrans)

                //emit change
                vo.$emit('change', o)

                //emit from
                if (from) {
                    vo.$emit(from, o)
                }

            })

        },

        scrollByDeltaRatio: function(deltaRatio) {
            //console.log('methods scrollByDeltaRatio', deltaRatio)

            let vo = this

            //ratioTrans
            let ratioTrans = vo.ratioTrans

            //change
            if (ratioTrans >= 0 && ratioTrans <= 1) {
                ratioTrans += deltaRatio
            }

            //updateRatioTrans
            let changed = vo.updateRatioTrans(ratioTrans)

            //changed
            if (changed) {

                //triggerEvent
                vo.triggerEvent('scroll')

            }

        },

        scrollByDelta: function(delta) {
            //console.log('methods scrollByDelta', delta)

            let vo = this

            //deltaRatio
            let deltaRatio = delta / vo.contentHeight

            //scrollByDeltaRatio
            vo.scrollByDeltaRatio(deltaRatio)

        },

        scrollPanel: function({ ratioY }) {
            //console.log('methods scrollPanel', ratioY)

            let vo = this

            //delta
            let delta = ratioY * vo.scrollDelta

            //scrollByDelta
            vo.scrollByDelta(delta)

        },

        // refresh: function(from, trigger) {
        //     //console.log('methods refresh', from, trigger)

        //     let vo = this

        //     //check
        //     if (trigger) {

        //         //triggerEvent
        //         vo.triggerEvent(from)

        //     }

        // },

    },
}
</script>

<style scoped>
</style>

