<template>
    <div :style="`overflow:hidden; height:${Math.min(contentHeight,viewHeightMax)}px; box-sizing:content-box;`">
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
import color2hex from '../js/vuetifyColor.mjs'
import genID from 'wsemi/src/genID.mjs'
import cancelEvent from '../js/cancelEvent.mjs'


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
            mmkey: null, //window事件驅動序號
            ratioTrans: 0, //捲動比例
            barPressY: null, //bar按下準備拖曳前y座標
            barPressing: false, //bar按下拖曳中
            barOpacity: 0.5,
            eleWheel: null,
            eleTouchstart: null,
            eleTouchmove: null,
            eleTouchend: null,
            barMousedown: null,
            barTouchstart: null,
            barTouchmove: null,
            barTouchend: null,
            windowMousemove: null,
            windowMouseup: null,
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //mmkey
        vo.mmkey = genID()

        //ele
        let ele = vo.$refs.divPanel

        //eleWheel
        vo.eleWheel = (e) => {
            let delta = e.deltaY / Math.abs(e.deltaY)
            vo.scrollPanel(vo.mmkey, delta) //寬版頁面, 用滾輪上下捲動, 實際是傳移動距離給bar
            cancelEvent(e) //要禁止外部元素如body也被捲動
        }
        ele.addEventListener('wheel', vo.eleWheel)

        //eleTouchstart
        vo.eleTouchstart = (e) => {
            vo.pressBar(vo.mmkey, -e.touches[0].clientY * vo.heighRatio) //窄版頁面, 上鎖與紀錄頁面點擊y座標
            // cancelEvent(e)
        }
        ele.addEventListener('touchstart', vo.eleTouchstart)

        //eleTouchmove
        vo.eleTouchmove = (e) => {
            vo.dragBar(vo.mmkey, -e.touches[0].clientY * vo.heighRatio) //窄版頁面, 用滑動距離拖曳頁面, 實際是傳移動距離給bar
            cancelEvent(e) //要禁止回傳否則會連外部body捲軸一起移動畫面
        }
        ele.addEventListener('touchmove', vo.eleTouchmove)

        //eleTouchend
        vo.eleTouchend = (e) => {
            vo.freedBar(vo.mmkey) //窄版頁面, 解鎖
            // cancelEvent(e)
        }
        ele.addEventListener('touchend', vo.eleTouchend)

        //bar
        let bar = vo.$refs.divBar

        //barMousedown
        vo.barMousedown = (e) => {
            vo.pressBar(vo.mmkey, e.clientY) //寬版bar, 上鎖與紀錄點擊y座標
            // cancelEvent(e)
        }
        bar.addEventListener('mousedown', vo.barMousedown)

        //barTouchstart
        vo.barTouchstart = (e) => {
            vo.pressBar(vo.mmkey, e.touches[0].clientY) //窄版bar, 上鎖與紀錄bar點擊y座標
            // cancelEvent(e)
        }
        bar.addEventListener('touchstart', vo.barTouchstart)

        //barTouchmove
        vo.barTouchmove = (e) => {
            vo.dragBar(vo.mmkey, e.touches[0].clientY) //窄版bar, 用滑動距離拖曳bar, 實際是傳移動距離給bar
            cancelEvent(e) //要禁止回傳否則會連外部body捲軸一起移動畫面
        }
        bar.addEventListener('touchmove', vo.barTouchmove)

        //barTouchend
        vo.barTouchend = (e) => {
            vo.freedBar(vo.mmkey) //窄版bar, 解鎖
            // cancelEvent(e)
        }
        bar.addEventListener('touchend', vo.barTouchend)

        //windowMousemove
        vo.windowMousemove = (e) => {
            vo.dragBar(vo.mmkey, e.clientY) //寬版bar, 用鎖與滑動距離拖曳bar
            // cancelEvent(e)
        }
        window.addEventListener('mousemove', vo.windowMousemove)

        //windowMouseup
        vo.windowMouseup = (e) => {
            vo.freedBar(vo.mmkey) //寬版bar, 解鎖
            cancelEvent(e) //要禁止回傳否則會連外部body捲軸一起移動畫面
        }
        window.addEventListener('mouseup', vo.windowMouseup)

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //ele
        let ele = vo.$refs.divPanel

        //ele remove wheel, touchstart, touchmove, touchend
        ele.removeEventListener('wheel', vo.eleWheel)
        ele.removeEventListener('touchstart', vo.eleTouchstart)
        ele.removeEventListener('touchmove', vo.eleTouchmove)
        ele.removeEventListener('touchend', vo.eleTouchend)

        //bar
        let bar = vo.$refs.divBar

        //bar remove mousedown, mousemove, mouseup
        bar.removeEventListener('mousedown', vo.barMousedown)
        bar.removeEventListener('touchstart', vo.barTouchstart)
        bar.removeEventListener('touchmove', vo.barTouchmove)
        bar.removeEventListener('touchend', vo.barTouchend)

        //window remove mousedown, mousemove, mouseup
        window.removeEventListener('mousemove', vo.windowMousemove)
        window.removeEventListener('mouseup', vo.windowMouseup)

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

            return vo.viewHeightMax / Math.max(vo.contentHeight, 1)
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

        // pressWin: function(mmkey, v) {
        //     //console.log('methods pressWin', mmkey, v)

        //     let vo = this

        //     //check
        //     if (vo.mmkey !== mmkey) {
        //         return
        //     }

        //     //barPressY
        //     vo.barPressY = v //e.clientY

        // },

        pressBar: function(mmkey, v) {
            //console.log('methods pressBar', mmkey, v)

            let vo = this

            //check
            if (vo.mmkey !== mmkey) {
                return
            }

            //barPressing
            vo.barPressing = true

            //save clientY
            if (v) {

                //barPressY
                vo.barPressY = v //e.clientY

            }

        },

        dragBar: function(mmkey, v) {
            //console.log('methods dragBar', mmkey, v)

            let vo = this

            //check
            if (vo.mmkey !== mmkey) {
                return
            }

            //check
            if (vo.barPressing) {

                //d
                let d = v - vo.barPressY //e.clientY

                //deltaRatio
                let deltaRatio = d / vo.viewHeightEff

                //scrollByDeltaRatio
                vo.scrollByDeltaRatio(deltaRatio)

                //update
                vo.barPressY = v //e.clientY

            }

        },

        freedBar: function(mmkey) {
            //console.log('methods freedBar', mmkey)

            let vo = this

            //check
            if (vo.mmkey !== mmkey) {
                return
            }

            //check
            if (!vo.barPressing) {
                return
            }

            //barPressing
            vo.barPressing = false

            //triggerEvent, 拖曳時有些外部組件處理過慢, 導致節點位置未更新完畢, 故於放掉滑鼠按鍵時triggerEvent, 使外部組件再次接收事件進行更新節點
            vo.triggerEvent('freedBar')

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
                vo.triggerEvent()

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

        scrollPanel: function(mmkey, normal) {
            //console.log('methods scrollPanel', mmkey, normal)

            let vo = this

            //check
            if (vo.mmkey !== mmkey) {
                return
            }

            //delta
            let delta = normal * vo.scrollDelta

            //scrollByDelta
            vo.scrollByDelta(delta)

        },

        refresh: function(from, trigger) {
            //console.log('methods refresh', from, trigger)

            let vo = this

            //check
            if (trigger) {

                //triggerEvent
                vo.triggerEvent()

            }

        },

    },
}
</script>

<style scoped>
</style>

