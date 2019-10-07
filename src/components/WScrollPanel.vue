<template>
    <div
        :style="`position:relative; overflow:hidden; height:${viewHeight};`"
        :changeRatio="changeRatio"
        @mouseenter="barOpacity=1"
        @mouseleave="barOpacity=0.5"
    >

        <div :style="`height:${viewHeight+1}px;`"></div>

        <div style="position:absolute; top:0; right:0px; height:100%; z-index:1;" v-show="contentHeightEff>0">
            <div :style="`position:relative; width:10px; height:100%; background-color:${barBackgroundColor}; padding:2px;`">
                <div
                    ref="divBar"
                    :style="`width:100%; height:${barSize}px; background-color:${barColor}; border-radius:15px; user-select:none; transform:translateY(${barLoc}px); cursor:pointer; opacity:${barOpacity}; transition:opacity 0.5s;`"
                ></div>
            </div>
        </div>

        <div
            ref="divPanel"
            :style="`position:absolute; top:0px; width:calc(100% + 18px); overflow-y:auto; overflow-x:hidden; height:${viewHeight}px;`"
        >

            <slot></slot>

        </div>

    </div>
</template>

<script>
import genID from 'wsemi/src/genID.mjs'

/**
 * @vue-prop {Number} [viewHeight=400] 輸入顯示區長度，單位為px，預設400
 * @vue-prop {Number} [contentHeight=10000] 輸入內容最大長度，單位為px，預設10000
 * @vue-prop {Number} [scrollDelta=100] 輸入一次捲動長度，單位為px，預設100
 * @vue-prop {Number} [barSizeMin=50] 輸入捲軸內區塊最小長度，單位為px，預設50
 * @vue-prop {String} [barColor='#bbb'] 輸入捲軸內區塊顏色字串，預設'#bbb'
 * @vue-prop {String} [barBackgroundColor='rgba(0,0,0,0)'] 輸入捲軸背景顏色字串，預設'rgba(0,0,0,0)'
 * @vue-prop {Number} [ratio=0] 輸入目前捲動比例，預設0
 */
export default {
    props: {
        viewHeight: {
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
        barSizeMin: {
            type: Number,
            default: 50,
        },
        barColor: {
            type: String,
            default: '#bbb',
        },
        barBackgroundColor: {
            type: String,
            default: 'rgba(0,0,0,0)',
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
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //mmkey
        vo.mmkey = genID()

        //ele
        let ele = vo.$refs.divPanel

        //ele listen wheel, touchstart, touchmove, touchend
        ele.addEventListener('wheel', (e) => {
            let delta = e.deltaY / Math.abs(e.deltaY)
            vo.scrollPanel(vo.mmkey, delta) //寬版頁面, 用滾輪上下捲動, 實際是傳移動距離給bar
            if (window.event) {
                e.cancelBubble = true //IE11
            }
            else {
                e.stopPropagation()
            }
            e.preventDefault()
        })
        ele.addEventListener('touchstart', (e) => {
            vo.pressBar(vo.mmkey, -e.touches[0].clientY * vo.heighRatio) //窄版頁面, 上鎖與紀錄頁面點擊y座標
            // e.stopPropagation()
            // e.preventDefault()
        })
        ele.addEventListener('touchmove', (e) => {
            vo.dragBar(vo.mmkey, -e.touches[0].clientY * vo.heighRatio) //窄版頁面, 用滑動距離拖曳頁面, 實際是傳移動距離給bar
            e.stopPropagation()
            e.preventDefault()
        })
        ele.addEventListener('touchend', (e) => {
            vo.freedBar(vo.mmkey) //窄版頁面, 解鎖
            // e.stopPropagation()
            // e.preventDefault()
        })

        //bar
        let bar = vo.$refs.divBar

        //bar listen mousedown, touchstart, touchmove, touchend
        bar.addEventListener('mousedown', (e) => {
            vo.pressBar(vo.mmkey, e.clientY) //寬版bar, 上鎖與紀錄點擊y座標
        })
        bar.addEventListener('touchstart', (e) => {
            vo.pressBar(vo.mmkey, e.touches[0].clientY) //窄版bar, 上鎖與紀錄bar點擊y座標
            // e.stopPropagation()
            // e.preventDefault()
        })
        bar.addEventListener('touchmove', (e) => {
            vo.dragBar(vo.mmkey, e.touches[0].clientY) //窄版bar, 用滑動距離拖曳bar, 實際是傳移動距離給bar
            e.stopPropagation()
            e.preventDefault()
        })
        bar.addEventListener('touchend', (e) => {
            vo.freedBar(vo.mmkey) //窄版bar, 解鎖
            // e.stopPropagation()
            // e.preventDefault()
        })

        //window listen mousedown, mousemove, mouseup
        // window.addEventListener('mousedown', (e) => {
        //     console.log('寬版bar window mousedown', e.clientY)
        //     vo.pressWin(vo.mmkey, e.clientY) //寬版bar, 紀錄點擊y座標
        // })
        window.addEventListener('mousemove', (e) => {
            vo.dragBar(vo.mmkey, e.clientY) //寬版bar, 用鎖與滑動距離拖曳bar
        })
        window.addEventListener('mouseup', (e) => {
            vo.freedBar(vo.mmkey) //寬版bar, 解鎖
        })

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //ele
        let ele = vo.$refs.divPanel

        //ele remove wheel, touchstart, touchmove, touchend
        ele.removeEventListener('wheel', vo.mouseWheel)
        ele.removeEventListener('touchstart', vo.pressBar)
        ele.removeEventListener('touchmove', vo.dragBar)
        ele.removeEventListener('touchend', vo.freedBar)

        //bar
        let bar = vo.$refs.divBar

        //bar remove mousedown, mousemove, mouseup
        bar.removeEventListener('mousedown', vo.pressBar)
        bar.removeEventListener('touchstart', vo.pressBar)
        bar.removeEventListener('touchmove', vo.dragBar)
        bar.removeEventListener('touchend', vo.freedBar)

        //window remove mousedown, mousemove, mouseup
        //window.removeEventListener('mousedown', vo.pressWin)
        window.removeEventListener('mousemove', vo.dragBar)
        window.removeEventListener('mouseup', vo.freedBar)

    },
    computed: {

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

        // changeContentHight: function() {
        //     //console.log('computed changeContentHight')

        //     let vo = this

        //     //t for trigger contentHeight
        //     let t = vo.contentHeight

        //     //triggerEvent, 很容易導致無限驅動
        //     vo.triggerEvent('changeContentHight')

        //     return t
        // },

        heighRatio: function() {
            //console.log('computed heighRatio')

            let vo = this

            return vo.viewHeight / Math.max(vo.contentHeight, 1)
        },

        barSize: function() {
            //console.log('computed barSize')

            let vo = this

            //r size ratio
            let r = vo.viewHeight / vo.contentHeight

            //barSize
            let barSize = Math.max(r * vo.viewHeight, vo.barSizeMin)

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
            let v = vo.contentHeight - vo.viewHeight
            v = Math.max(v, 0)

            return v
        },

        viewHeightEff: function() {
            //console.log('computed viewHeightEff')

            let vo = this

            //v
            let v = vo.viewHeight - vo.barSize - 4 //4px為padding 2px*2
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

            return vo.viewTop + vo.viewHeight
        },

    },
    methods: {

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

            //setTimeout
            setTimeout(function() {

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

            }, 1)

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

            //limit
            ratioTrans = Math.max(ratioTrans, 0)
            ratioTrans = Math.min(ratioTrans, 1)
            if (vo.contentHeightEff === 0) {
                ratioTrans = 0
            }

            //save
            if (vo.ratioTrans !== ratioTrans) {

                //ratioTrans
                vo.ratioTrans = ratioTrans

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

    },
}
</script>

<style scoped>
</style>

