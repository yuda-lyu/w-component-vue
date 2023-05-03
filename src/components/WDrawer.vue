<template>
    <div
        :changeValue="changeValue"
        :changeDrawerWidth="changeDrawerWidth"
        v-domresize
        @domresize="resizePanel"
    >

        <!-- 因拖曳寬度bar現放置於divPanel下並且浮動定位, 左右側之拖曳區會超出divPanel, 故須使用overflow-x:hidden -->
        <div
            ref="divPanel"
            style="position:relative; width:100%; height:100%; overflow-x:hidden;"
        >

            <!-- 因右側抽屜會無法被內容區裁切遮蔽, 故須使用overflow-x:hidden -->
            <div style="width:100%; height:100%; display:flex; overflow-x:hidden;">

                <!-- 撐開區, 需使用min-width避免被壓縮 -->
                <div
                    class="ts"
                    :style="`width:${virtualZoneWidth}px; min-width:${virtualZoneWidth}px;`"
                    v-if="isAtLeft"
                ></div>

                <!-- 因外層使用overflow-x:hidden且內容區具有無法崩塌元素, 故也須使用overflow:hidden進行裁切 -->
                <div :style="`width:100%; height:100%; overflow:hidden;`">

                    <slot
                        name="content"
                        :width="panelWidth-virtualZoneWidth"
                        :height="panelHeight"
                    ></slot>

                </div>

                <!-- 撐開區, 需使用min-width避免被壓縮 -->
                <div
                    class="ts"
                    :style="`width:${virtualZoneWidth}px; min-width:${virtualZoneWidth}px;`"
                    v-if="!isAtLeft"
                ></div>

            </div>

            <!-- overlay半透明灰色層 -->
            <div
                class="ts"
                :style="`position:${useOverlayPosition}; ${useDrawerDetectLoction} top:0px; bottom:0px; z-index:${useDrawerZIndex+1}; width:${useDrawerDetectWidth}; height:100%; opacity:${useOverlayOpacity}; background:${useOverlayColor};`"
                v-if="showOverlay1Basic"
            >
            </div>

            <!-- overlay關閉事件監聽層, 與隱藏內層之向外陰影 -->
            <div
                :style="`position:${useOverlayPosition}; ${useDrawerDetectLoction} top:0px; bottom:0px; z-index:${useDrawerZIndex+2}; width:${useDrawerDetectWidth}; height:100%;`"
                @click="(ev)=>{ckToggle(ev,false)}"
                v-show="showOverlay2Detect"
            >

                <!-- drawer平移層 -->
                <div
                    :style="`width:100%; height:100%; display:flex; justify-content:${ isAtLeft ? 'start' : 'end' };`"
                >

                    <div
                        ref="divDrawer"
                        :class="`ts ${useDrawerClassShadow}`"
                        :style="`width:${useDrawerWidthTrans}px; height:100%; transform:translateX(${useDrawerTranslateX}%);`"
                    >

                        <div
                            class="ts"
                            :style="`position:relative; width:${useDrawerWidthTrans}px; height:100%; display:flex;`"
                        >

                            <div :style="`padding-left:${useDrawerBarSize/2}px;`" v-if="dragDrawerWidth && !isAtLeft"></div>

                            <div
                                class="ts"
                                :style="`width:${useEffDrawerWidthTrans}px;`"
                            >

                                <slot
                                    name="drawer"
                                    :width="useEffDrawerWidthTrans"
                                    :height="panelHeight"
                                ></slot>

                            </div>

                            <div :style="`padding-left:${useDrawerBarSize/2}px;`" v-if="dragDrawerWidth && isAtLeft"></div>

                            <!-- 拖曳寬度bar, 須放置於drawer內, 才能避免drawer內有position顯示之dom(例如tooltip)被拖曳寬度bar遮蔽 -->
                            <!-- 延遲至抽屜出現後才通過opacity=1顯示, 否則於浮動模式時會在外側陰影層馬上看到拖曳寬度bar, 使用者體驗不佳 -->
                            <div
                                ref="divBar"
                                :style="`position:${useOverlayPosition}; top:0px; ${isAtLeft?'left':'right'}:${useDrawerWidthTrans-useDrawerBarWidth/2}px; width:${useDrawerBarWidth}px; height:100%; border-left:${drawerBarBorderSize}px solid ${useDrawerBarBorderColor}; border-right:${drawerBarBorderSize}px solid ${useDrawerBarBorderColor}; opacity:${showOverlay5DragDrawerBar?1:0}; cursor:col-resize; user-select:none;`"
                                v-show="valueTrans && dragDrawerWidth"
                            >
                                <div :style="`width:${useDrawerBarSize}px; height:100%; background:${useDrawerBarColor};`"></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
import isnum from 'wsemi/src/isnum.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import domIsClientXYIn from 'wsemi/src/domIsClientXYIn.mjs'
import domGetWindowSize from 'wsemi/src/domGetWindowSize.mjs'
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import domResize from '../js/domResize.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {String} [mode='from-left'] 輸入抽屜顯示位置字串，可使用'from-left'與'from-right'，預設'from-left'
 * @vue-prop {Number} [drawerWidth=200] 輸入抽屜寬度數字，單位為px，預設200
 * @vue-prop {Number} [drawerWidthMin=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最小值數字，預設null
 * @vue-prop {Number} [drawerWidthMax=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最大值數字，預設null
 * @vue-prop {Boolean} [afloat=false] 輸入是否為浮動顯示布林值，設為true時浮在內容區上故不壓縮內容區寬度，預設false
 * @vue-prop {Boolean} [afloatByFix=false] 輸入浮動顯示時是否使用fixed布林值，若為true使用'fixed'反之使用'absolute'，預設false
 * @vue-prop {Number} [overlayOpacity=0.45] 輸入浮動顯示時抽屜外側陰影層之透明度數字，預設0.45
 * @vue-prop {String} [overlayColor='grey darken-2'] 輸入浮動顯示時抽屜外側陰影層背景顏色字串，預設'grey darken-2'
 * @vue-prop {Number} [drawerZIndex=1000] 輸入浮動顯示時抽屜使用z-index數字，預設1000
 * @vue-prop {Boolean} [dragDrawerWidth=false] 輸入是否使用拖曳抽屜寬度分隔條布林值，預設false
 * @vue-prop {String} [drawerBarColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {Number} [drawerBarSize=2] 輸入分隔條尺寸數字，為分隔條寬度，單位為px，預設2
 * @vue-prop {String} [drawerBarBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [drawerBarBorderSize=3] 輸入分隔條框線寬度數字，單位為px，預設3，通常配合barBorderColor='transparent'使可拖曳區加大又不遮蔽可視區
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: 'from-left', //from-left, from-right
        },
        drawerWidth: {
            type: Number,
            default: 200,
        },
        drawerWidthMin: {
            type: Number,
            default: null,
        },
        drawerWidthMax: {
            type: Number,
            default: null,
        },
        afloat: {
            type: Boolean,
            default: false,
        },
        afloatByFix: {
            type: Boolean,
            default: false,
        },
        overlayOpacity: {
            type: Number,
            default: 0.45,
        },
        overlayColor: {
            type: String,
            default: 'grey darken-2',
        },
        drawerZIndex: {
            type: Number,
            default: 1000,
        },
        dragDrawerWidth: {
            type: Boolean,
            default: false,
        },
        drawerBarColor: {
            type: String,
            default: '#ddd',
        },
        drawerBarSize: {
            type: Number,
            default: 2,
        },
        drawerBarBorderColor: {
            type: String,
            default: 'transparent',
        },
        drawerBarBorderSize: {
            type: Number,
            default: 3,
        },
    },
    data: function() {
        return {

            panelWidth: 0,
            panelHeight: 0,

            das: null,

            valueTrans: false,

            lockToggle: false,

            drawerWidthTrans: 200,

            timerOverlay1Basic: null,
            showOverlay1Basic: false,
            effOverlay1Basic: false,

            timerOverlay2Detect: null,
            showOverlay2Detect: false,
            // effOverlay2Detect: false,

            timerOverlay3Shadow: null,
            showOverlay3Shadow: false,
            // effOverlay3Shadow: false,

            timerOverlay4Translate: null,
            // showOverlay4Translate: false,
            effOverlay4Translate: false,

            timerOverlay5DragDrawerBar: null,
            showOverlay5DragDrawerBar: false,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //das
        let das = domDragBarAndScroll(vo.$refs.divPanel, vo.$refs.divBar, { useTouchDragForPanel: false })
        das.on('dragBar', vo.dragBar)
        das.on('pressBar', () => {
            // console.log('pressBar')
            vo.lockToggle = true
        })
        das.on('freeBar', () => {
            setTimeout(() => { //因拖曳寬度bar現在位於overlay關閉事件監聽層之內, 故會優先觸發點擊事件後才冒泡出去, 導致放掉拖曳時會觸發點擊關閉事件, 故改採通過delay脫勾與上鎖機制避免關閉
                // console.log('freeBar')
                vo.lockToggle = false
            }, 1)
        })

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

        changeValue: function () {
            // console.log('computed changeValue')

            let vo = this

            //check
            if (vo.valueTrans !== vo.value) {

                //toggleValue
                vo.toggleValue(vo.value)

            }
            // console.log('vo.value', vo.value, 'vo.valueTrans', vo.valueTrans)

            //update
            vo.valueTrans = vo.value

            // //trigger
            // let value = vo.value
            // // console.log('computed changeValue')

            return ''
        },

        changeDrawerWidth: function() {
            let vo = this
            vo.drawerWidthTrans = vo.drawerWidth
            return ''
        },

        useDrawerWidthTrans: function() {
            let vo = this

            //監聽drawerWidthTrans與panelWidth有變化則重算

            //trigger
            vo.___drawerWidthTrans___ = vo.drawerWidthTrans
            vo.___panelWidth___ = vo.panelWidth

            //getPanelEffWidth
            let dwMax = vo.getPanelEffWidth()
            // console.log('getPanelEffWidth dwMax', dwMax)

            //check
            let r = null
            if (isNumber(dwMax)) {
                r = Math.min(vo.drawerWidthTrans, dwMax)
            }
            else {
                r = vo.drawerWidthTrans
            }
            // console.log('useDrawerWidthTrans', r)

            return r
        },

        useEffDrawerWidthTrans: function() {
            let vo = this
            let r = Math.max(vo.useDrawerWidthTrans - vo.useDrawerBarSize / 2, 0)
            // console.log('useEffDrawerWidthTrans', r)
            return r
        },

        virtualZoneWidth: function() {
            if (!this.valueTrans) {
                return 0
            }
            if (this.afloat) {
                return 0
            }
            return this.useDrawerWidthTrans
        },

        isAtLeft: function() {
            return this.mode !== 'from-right'
        },

        useDrawerZIndex: function() {
            let i = this.drawerZIndex
            if (this.afloat) {
                i += 1
            }
            if (this.afloatByFix) {
                i += 500 //drawer, dialog, tooltip分配z-index值差為1000, 故內部分配給500
            }
            return i
        },

        useOverlayColor: function() {
            if (!this.afloat) {
                return 'transparent'
            }
            return color2hex(this.overlayColor)
        },

        useOverlayPosition: function() {
            return this.afloatByFix ? 'fixed' : 'absolute'
        },

        useOverlayOpacity: function() {
            if (!this.afloat) {
                return 0
            }
            return this.effOverlay1Basic ? this.overlayOpacity : 0
        },

        useDrawerTranslateX: function() {
            if (this.effOverlay4Translate) {
                return 0
            }
            let s0 = this.isAtLeft ? -100 : 100
            return s0
        },

        useDrawerDetectLoction: function() {
            if (this.isAtLeft) {
                return 'left:0px;'
            }
            return 'right:0px;'
        },

        useDrawerDetectWidth: function() {
            if (this.afloat) {
                return '100%'
            }
            return `${this.useDrawerWidthTrans}px`
        },

        useDrawerClassShadow: function() {
            return this.afloat && this.showOverlay3Shadow ? 'bs' : ''
        },

        useDrawerBarWidth: function() {
            let vo = this
            return vo.drawerBarSize + vo.drawerBarBorderSize * 2
        },

        useDrawerBarSize: function() {
            let vo = this
            return vo.dragDrawerWidth ? vo.drawerBarSize : 0
        },

        useDrawerBarColor: function() {
            return color2hex(this.drawerBarColor)
        },

        useDrawerBarBorderColor: function() {
            return color2hex(this.drawerBarBorderColor)
        },

    },
    methods: {

        resizePanel: function(msg) {
            // console.log('methods resizePanel', msg)

            let vo = this
            if (!vo.afloatByFix) {
                //抽屜浮動於組件panel

                //update
                vo.panelWidth = msg.snew.offsetWidth
                vo.panelHeight = msg.snew.offsetHeight

            }
            else {
                //抽屜浮動於body

                //domGetWindowSize
                let ws = domGetWindowSize()

                //update
                vo.panelWidth = ws.width
                vo.panelHeight = ws.height

            }

            // console.log('vo.panelWidth', vo.panelWidth)

            //emit
            vo.$emit('resize', msg)

        },

        ckToggle: function(ev, value) {
            // console.log('methods ckToggle', ev, value)

            let vo = this

            //check, 固定時(非浮動)禁止關閉
            if (!vo.afloat) {
                return
            }

            //check, 上鎖時禁止觸發
            if (vo.lockToggle) {
                return
            }

            //偵測點擊為抽屜區之外
            let b = false
            try {
                b = !vo.$refs.divDrawer.contains(ev.target)
                // if (b) {
                //     console.log('偵測點擊為抽屜區之外 domContains')
                // }
            }
            catch (err) {}
            // console.log('vo.$refs.divDrawer', vo.$refs.divDrawer)
            // console.log('ev.target', ev.target)
            // console.log(vo.$refs.divDrawer.contains(ev.target))

            //若為點擊為抽屜區之外, 可能是按鈕表層虛擬層、ripple層或下拉選單彈窗內容區, 此可能用position定位而導致用contains檢測會為false, 故改用事件座標再檢測一次
            if (b) {
                try {
                    b = !domIsClientXYIn(ev.clientX, ev.clientY, vo.$refs.divDrawer)
                    // console.log(`domIsClientXYIn(ev.clientX, ev.clientY, vo.$refs.divPanel)`,domIsClientXYIn(ev.clientX, ev.clientY, vo.$refs.divPanel))
                    // if (b) {
                    //     console.log('偵測點擊為抽屜區之外: domIsClientXYIn')
                    // }
                }
                catch (err) {}
            }

            //check
            if (b) {

                //toggleValue
                vo.toggleValue(value)

                //emit
                vo.$emit('input', value)

            }

        },

        toggleValue: function (value) {
            // console.log('methods toggleValue', value)

            let vo = this

            //clearTimeout
            clearTimeout(vo.timerOverlay1Basic)
            clearTimeout(vo.timerOverlay2Detect)
            clearTimeout(vo.timerOverlay3Shadow)
            clearTimeout(vo.timerOverlay4Translate)
            clearTimeout(vo.timerOverlay5DragDrawerBar)

            let sec

            //check
            if (value) {
                //顯示

                // vo.fsmShowOverlay.showOverlay()
                // vo.fsmShowStateOverlay.showOverlay()
                sec = 20

                // showOverlay1Basic: false,
                // effOverlay1Basic: false,
                vo.showOverlay1Basic = true
                vo.timerOverlay1Basic = setTimeout(() => {
                    vo.effOverlay1Basic = true
                }, sec)

                // showOverlay2Detect: false,
                // effOverlay2Detect: false,
                vo.showOverlay2Detect = true

                // showOverlay3Shadow: false,
                // effOverlay3Shadow: false,
                vo.showOverlay3Shadow = true

                // showOverlay4Translate: false,
                // effOverlay4Translate: false,
                // vo.showOverlay4Translate = true
                vo.timerOverlay4Translate = setTimeout(() => {
                    vo.effOverlay4Translate = true
                }, sec)

                vo.timerOverlay5DragDrawerBar = setTimeout(() => {
                    vo.showOverlay5DragDrawerBar = true
                }, 300)

            }
            else {
                //隱藏

                // vo.fsmShowOverlay.hideOverlay()
                // vo.fsmShowStateOverlay.hideOverlay()
                sec = 300

                // showOverlay1Basic: false,
                // effOverlay1Basic: false,
                vo.effOverlay1Basic = false
                vo.timerOverlay1Basic = setTimeout(() => {
                    vo.showOverlay1Basic = false
                }, sec)

                // showOverlay2Detect: false,
                // effOverlay2Detect: false,
                vo.timerOverlay2Detect = setTimeout(() => {
                    vo.showOverlay2Detect = false
                }, sec)

                // showOverlay3Shadow: false,
                // effOverlay3Shadow: false,
                vo.timerOverlay3Shadow = setTimeout(() => {
                    vo.showOverlay3Shadow = false
                }, sec / 2) //提前隱藏陰影

                // showOverlay4Translate: false,
                // effOverlay4Translate: false,
                vo.effOverlay4Translate = false
                // vo.timerOverlay4Translate = setTimeout(() => {
                //     vo.showOverlay4Translate = false
                // }, sec)

                vo.showOverlay5DragDrawerBar = false

            }

        },

        getPanelBounding: function() {
            // console.log('methods getPanelBounding')

            let vo = this

            //bd
            let bd = null
            if (!vo.afloatByFix) {
                //抽屜浮動於組件panel

                //getBoundingClientRect
                let func = get(vo, '$el.getBoundingClientRect')
                if (isfun(func)) {
                    // bd = func() //不能執行func, 會造成非法調用Illegal invocation
                    bd = vo.$el.getBoundingClientRect()
                    // console.log(vo.$el.getBoundingClientRect, isfun(vo.$el.getBoundingClientRect))
                }
                else {
                    // console.log('vo.$el.getBoundingClientRect is not a function')
                    bd = {
                        left: 0,
                        width: 0,
                    }
                }

            }
            else {
                //抽屜浮動於body

                //getWindowWidth
                let windowWidth = get(domGetWindowSize(), 'width')

                bd = {
                    left: 0,
                    width: windowWidth,
                }

            }

            return bd
        },

        getPanelEffWidth: function() {
            // console.log('methods getPanelEffWidth')

            let vo = this

            //effWidth
            let effWidth = null
            if (!vo.afloatByFix) {
                //抽屜浮動於組件panel

                //offsetWidth, 若於mounted之前呼叫因無$el, 故會回傳null
                effWidth = get(vo, '$el.offsetWidth', null)
                // console.log('vo.$el.offsetWidth', vo.$el.offsetWidth, 'effWidth', effWidth)

            }
            else {
                //抽屜浮動於body

                //getWindowWidth
                effWidth = get(domGetWindowSize(), 'width')

            }
            // console.log('effWidth', effWidth)

            return effWidth
        },

        dragBar: function({ clientX }) {
            // console.log('methods dragBar', clientX)

            let vo = this

            //check dragDrawerWidth
            if (!vo.dragDrawerWidth) {
                return
            }

            //check valueTrans
            if (!vo.valueTrans) {
                return
            }

            //bd
            let bd = vo.getPanelBounding()

            //x
            let x = clientX

            //dw
            let dw = null
            if (vo.isAtLeft) {
                //抽屜在左
                dw = x - bd.left
            }
            else {
                //抽屜在右
                dw = bd.width - (x - bd.left)
            }
            // console.log(bd, 'x', x, 'dw', dw)

            //dwMax
            let dwMax = vo.getPanelEffWidth()
            if (isnum(vo.drawerWidthMax)) {
                dwMax = cdbl(vo.drawerWidthMax)
            }
            // console.log('dwMax', dwMax)

            //dwMin
            let dwMin = 0
            if (isnum(vo.drawerWidthMin)) {
                dwMin = cdbl(vo.drawerWidthMin)
            }

            //min, max
            if (isNumber(dwMax)) {
                dw = Math.min(dw, dwMax)
            }
            if (isNumber(dwMin)) {
                dw = Math.max(dw, dwMin)
            }

            //update
            vo.drawerWidthTrans = dw
            // console.log('drawerWidthTrans', dw)

            //emit
            vo.$emit('update:drawerWidth', dw)

        },

    },
}
</script>

<style scoped>
.ts {
    transition:all 0.3s cubic-bezier(.25,.8,.5,1);
}
.bs {
    box-shadow:rgba(0, 0, 0, 0.3) 0px 8px 2px -8px, rgba(0, 0, 0, 0.3) 0px 16px 24px 2px, rgba(0, 0, 0, 0.3) 0px 6px 30px 5px;
}
</style>

