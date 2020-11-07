<template>
    <div
        :style="`height:${Math.min(contentHeight,viewHeightMax)}px; box-sizing:content-box;`"
        v-domresize
        @domresize="resize"
        @mouseenter="mouseEntering=true"
        @mouseleave="mouseEntering=false"
        :changeRatio="changeRatio"
        :changeViewHeightMax="changeViewHeightMax"
    >

        <!-- 不能設定border-width=0, 瀏覽器會額外進行偵測渲染導致抖動 -->
        <div :style="`position:relative; overflow:hidden; height:${viewHeightMax}px;`">

            <!-- bar區 -->
            <div :style="`position:absolute; top:0px; right:0px; z-index:1; height:${viewHeightMax}px;`" v-show="contentHeightEff>0">
                <!-- 外層設定box-sizing=content-box也就是高度不包括border與padding, 內層高度就會是viewHeightMax不需減少, 此時bar的設定box-sizing=border-box才能自動考量padding影響 -->
                <div :style="`box-sizing:border-box; padding:${barPanelPadding}px 1px; position:relative; width:${barWidth}px; height:100%; background:${useBarBackgroundColor}; transition:background 0.5s;`">
                    <div
                        ref="divBar"
                        :style="`transform:translateY(${barLoc}px); width:100%; height:${barSize}px; user-select:none; cursor:pointer; border-radius:15px; background:${useBarColor}; transition:background 0.5s;`"
                    ></div>
                </div>
            </div>

            <!-- 內容區 -->
            <div
                ref="divPanel"
                :style="`position:relative; overflow-x:hidden; overflow-y:auto; width:calc( 100% + ${nativeBarWidth+extWidth}px ); height:${viewHeightMax}px;`"
                @scroll="resetScrollTop"
            >

                <!-- 通過高度設定為viewHeightMax+extHeight使divPanel出現捲軸, 並強制設定scrollTop=extHeight/2可使保持監聽上下捲動與拖曳事件 -->
                <div :style="`position:absolute; top:0px; left:0px; width:calc( 100% + ${extWidth}px ); height:${viewHeightMax+extHeight}px;`"></div>

                <div
                    ref="divSlot"
                    :style="`position:absolute; top:${extHeight/2}px; left:0px; overflow:hidden; width:calc( 100% + ${extWidth}px ); height:${viewHeightMax}px;`"
                    v-dommutation
                    @dommutation="mutation"
                >
                    <slot></slot>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import domResize from '../js/domResize.mjs'
import domMutation from '../js/domMutation.mjs'


/**
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [contentHeight=10000] 輸入內容最大高度，單位為px，預設10000
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
        dommutation: domMutation(),
    },
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
            das: null,

            mouseEntering: false, //滑鼠移入中
            ratioTrans: 0, //捲動比例
            barPressY: null, //bar按下準備拖曳前y座標
            nativeBarWidth: 100, //原生捲軸寬度, 預設給超大值避免初始化時顯示捲軸出來
            extWidth: 0, //額外撐開寬度, 當手機瀏覽時會沒有原生捲軸寬度, 此時需額外撐開使捲軸隱藏
            barPanelPadding: 1, //捲軸內與區塊的y向內間距
            scrollInforLast: null, //上次算得的捲軸資訊
            scrollInforTemp: null, //要恢復上次捲軸位置時用暫存的捲軸資訊

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //das
        let das = domDragBarAndScroll(vo.$refs.divPanel, vo.$refs.divBar, {
            getHeighRatio: () => vo.heighRatio,
            //stopScrollPropagationForPanel: true, //禁止滑鼠捲動事件傳遞至外, 現已強制原生捲軸再攔截相關事件, 故不需要停用傳遞
            //stopTouchDragPropagationForPanel: true, //禁止觸控拖曳事件傳遞至外, 現已強制原生捲軸再攔截相關事件, 故不需要停用傳遞
        })
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
        if (vo.das) {
            vo.das.clear()
        }

    },
    watch: {

        viewHeightMax: function() {
            //console.log('watch viewHeightMax')

            let vo = this

            //由watch處儲存捲軸資訊scrollInfor供後續恢復, 因放在computed會被vue偵測記憶體變動
            vo.scrollInforTemp = cloneDeep(vo.scrollInforLast)

        },

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

        changeViewHeightMax: function() {
            //console.log('computed changeViewHeightMax')

            let vo = this

            //viewHeightMax for trigger
            let viewHeightMax = vo.viewHeightMax

            //keepRatioByChangeViewHeightMax
            vo.keepRatioByChangeViewHeightMax()

            vo.___viewHeightMax___ = viewHeightMax
            return ''
        },

        extHeight: function() {
            //console.log('computed extHeight')

            let vo = this

            //放大比率(依照viewHeightMax)與增量
            let r = 10 //桌機需高放大比率, 於複雜dom中比較有緩衝能平滑拖曳, 不容易觸發拖曳外層document
            let d = 0
            if (vo.nativeBarWidth <= 0) {
                r = 0 //手機需低放大比率, 大值時拖曳會出現回彈效果使用者體驗比較好, 但會常觸發回彈導致無法拖曳
                d = 2
            }

            //額外撐開高度, 最小上下留1px也就是需為viewHeightMax+2
            let h = vo.viewHeightMax * r + d

            return h
        },

        useEntering: function() {
            //console.log('computed useEntering')

            let vo = this

            //滑鼠移入以及對捲軸按下正在拖曳中時, 都視為滑鼠移入狀態
            return vo.mouseEntering || vo.barPressY
        },

        useBarColor: function() {
            //console.log('computed useBarColor')

            let vo = this

            if (vo.useEntering) {
                return color2hex(vo.barColorHover)
            }
            return color2hex(vo.barColor)
        },

        useBarBackgroundColor: function() {
            //console.log('computed useBarBackgroundColor')

            let vo = this

            if (vo.useEntering) {
                return color2hex(vo.barBackgroundColorHover)
            }
            return color2hex(vo.barBackgroundColor)
        },

        heighRatio: function() {
            //console.log('computed heighRatio')

            let vo = this

            //r, 顯示區與實際內容高度比, 此處只有domDragBarAndScroll會調用, 也就是使用者拖曳捲軸才觸發
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

            //triggerEvent, 若內容高度contentHeight或顯示區最大高度viewHeightMax變更則需要triggerEvent
            vo.triggerEvent('changeHeight')

            return v
        },

        viewHeightEff: function() {
            //console.log('computed viewHeightEff')

            let vo = this

            //v
            let v = vo.viewHeightMax - vo.barSize - vo.barPanelPadding * 2
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

        resetScrollTop: function(e) {
            //console.log('resetScrollTop', e)

            let vo = this

            //使內容物捲軸位置置中可持續接收上下捲動與拖曳事件
            let div = get(e, 'target', null)
            if (div !== null) {

                //scrollTop
                div.scrollTop = vo.extHeight / 2

            }

        },

        keepRatioByChangeViewHeightMax: function() {
            //console.log('keepRatioByChangeViewHeightMax')

            let vo = this

            //resetScrollTop, 因變更viewHeightMax會影響extHeight, 故需重設ScrollTop
            vo.resetScrollTop({ target: vo.$refs.divPanel })

            //nextTick
            vo.$nextTick(() => {

                //resumeRatio
                vo.resumeRatio()

            })

        },

        resumeRatio: function(si = null) {
            //console.log('resumeRatio', si)

            let vo = this

            //si
            if (si === null) {
                //若非外部調用直接傳入, 則使用組件自己儲存的scrollInforTemp
                si = vo.scrollInforTemp
            }

            //check, 因vue-cli編譯會重置組件導致scrollInforTemp恢復初始值null
            if (si === null) {
                return
            }

            //重算ratioTrans
            let ratioTrans = 0
            if (vo.contentHeight > 0 && si.ch > 0) { //已有內容資料

                //內容高度變少
                if (vo.contentHeight < si.ch) {

                    //內容高度小於等於當前視窗高度
                    if (vo.contentHeight <= vo.viewHeightMax) {
                        ratioTrans = 0
                        //console.log('內容高度變少, 內容高度小於當前視窗高度故改為置頂, ratioTrans=', ratioTrans)
                    }
                    // else if (si.r === 0) { //置底(si.r === 1)不需維持避免內容撐開過多時無法固定畫面於原本瀏覽處
                    //     ratioTrans = si.r
                    //     //console.log('內容高度變少, 原本為置頂故需維持, ratioTrans=', ratioTrans)
                    // }
                    //內容高度大於當前視窗高度
                    else {
                        ratioTrans = si.t / (vo.contentHeight - vo.viewHeightMax)
                        //console.log('內容高度變少, 內容高度大於當前視窗高度, ratioTrans=', ratioTrans, si.t, vo.contentHeight, vo.viewHeightMax)
                    }

                }
                //內容高度變高或不變
                else {

                    //內容高度小於等於當前視窗高度
                    if (vo.contentHeight <= vo.viewHeightMax) {
                        ratioTrans = 0
                        //console.log('內容高度變高或不變, 內容高度小於當前視窗高度故改為置頂, ratioTrans=', ratioTrans)
                    }
                    // else if (si.r === 0) { //置底(si.r === 1)不需維持避免內容撐開過多時無法固定畫面於原本瀏覽處
                    //     ratioTrans = si.r
                    //     //console.log('內容高度變高或不變, 原本為置頂故需維持, ratioTrans=', ratioTrans)
                    // }
                    //內容高度大於當前視窗高度
                    else {
                        ratioTrans = si.t / (vo.contentHeight - vo.viewHeightMax)
                        //console.log('內容高度變高或不變, 內容高度大於當前視窗高度, ratioTrans=', ratioTrans, si.t, vo.contentHeight, vo.viewHeightMax)
                    }

                }

            }

            //updateRatioTrans
            vo.updateRatioTrans(ratioTrans)

        },

        resize: function(msg) {
            //console.log('methods resize', msg)

            let vo = this

            //nativeBarWidth
            let divPanel = get(vo, '$refs.divPanel')
            if (divPanel) { //未顯示組件會無

                //nativeBarWidth
                let nativeBarWidth = vo.$refs.divPanel.offsetWidth - vo.$refs.divPanel.clientWidth

                //save
                vo.nativeBarWidth = nativeBarWidth

                //extWidth
                if (vo.nativeBarWidth <= 0) {
                    vo.extWidth = 20
                }

            }

            //resetScrollTop, 初始化、顯示、嵌入彈窗出現元素或resize時就需重設ScrollTop
            vo.resetScrollTop({ target: vo.$refs.divPanel })

            //triggerEvent, resize觸發事件
            vo.triggerEvent('resize')

            // //emit, 有triggerEvent故取消emit
            // vo.$emit('resize', msg)

        },

        mutation: function(msg) {
            //console.log('methods mutation', msg)

            let vo = this

            //triggerEvent, 內容slot有dom變更時觸發事件
            vo.triggerEvent('mutation')

        },

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

                //triggerEvent, 捲動觸發事件
                vo.triggerEvent('scroll')

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

            //barPressY
            vo.barPressY = null

            //triggerEvent, 拖曳時有些外部組件處理過慢, 導致節點位置未更新完畢, 故於放掉滑鼠按鍵時triggerEvent, 使外部組件再次接收事件進行更新節點
            vo.triggerEvent('freeBar')

        },

        getScrollInfor: function(from) {
            //console.log('methods getScrollInfor', from)

            let vo = this

            //scrollInfor
            let scrollInfor = {
                from,
                r: vo.ratioTrans,
                t: vo.viewTop,
                b: vo.viewBottom,
                ch: vo.contentHeight,
            }

            return scrollInfor
        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //nextTick, 因為外部可以因變更而呼叫triggerEvent, throttle第1次觸發是直接呼叫執行, 導致還沒收到外部傳入數據就由當前資訊emit出去
            vo.$nextTick(() => {

                //scrollInfor, 計算捲軸資訊
                let scrollInfor = vo.getScrollInfor(from)

                //emit ratio
                vo.$emit('update:ratio', vo.ratioTrans)

                //emit from
                if (from) {
                    vo.$emit(from, scrollInfor)
                }

                //emit change
                vo.$emit('change', scrollInfor)

                //save scrollInforLast, 紀錄捲軸資訊, 供恢復捲軸資訊之用
                vo.scrollInforLast = cloneDeep(scrollInfor)

            })

        },

        scrollByDeltaRatio: function(deltaRatio) {
            //console.log('methods scrollByDeltaRatio', deltaRatio)

            let vo = this

            //ratioTrans
            let ratioTrans = vo.ratioTrans

            //update
            if (ratioTrans >= 0 && ratioTrans <= 1) {
                ratioTrans += deltaRatio
            }

            //updateRatioTrans
            vo.updateRatioTrans(ratioTrans)

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

    },
}
</script>

<style scoped>
</style>

