<template>
    <div
        style=""
        :changeValue="changeValue"
        :changeDrawerWidth="changeDrawerWidth"
    >

        <div ref="divPanel" style="position:relative; height:100%;">

            <div style="width:100%; height:100%; display:flex; overflow-x:hidden;">

                <!-- 撐開區, 需使用min-width避免被壓縮 -->
                <div
                    class="ts"
                    :style="`width:${virtualZoneWidth}px; min-width:${virtualZoneWidth}px;`"
                    v-if="isAtLeft"
                ></div>

                <div :style="`width:100%; height:100%;`">

                    <slot name="content"></slot>

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
                :style="`position:${effOverlayPosition}; ${effDrawerDetectLoction} top:0px; bottom:0px; z-index:${effDrawerZIndex+1}; width:${effDrawerDetectWidth}; height:100%; opacity:${effOverlayOpacity}; background:${effOverlayColor};`"
                v-if="showOverlay1Basic"
            >
            </div>

            <!-- overlay關閉事件監聽層, 與隱藏內層之向外陰影 -->
            <div
                :style="`position:${effOverlayPosition}; ${effDrawerDetectLoction} top:0px; bottom:0px; z-index:${effDrawerZIndex+2}; width:${effDrawerDetectWidth}; height:100%; overflow:hidden;`"
                @click="(ev)=>{ckToggle(ev,false)}"
                v-show="showOverlay2Detect"
            >

                <!-- drawer平移層 -->
                <div
                    :style="`height:100%; display:flex; justify-content:${ isAtLeft ? 'start' : 'end' };`"
                >

                    <div
                        ref="divDrawer"
                        :class="`ts ${effDrawerClassShadow}`"
                        :style="`width:${drawerWidthTrans}px; height:100%; background:#fff; transform:translateX(${effDrawerTranslateX}%);`"
                    >

                        <div
                            class="ts"
                            :style="`width:${drawerWidthTrans}px; height:100%; display:flex;`"
                        >

                            <div :style="`padding-left:${drawerBarSize/2}px;`" v-if="dragDrawerWidth && !isAtLeft"></div>

                            <div
                                class="ts"
                                :style="`width:${drawerWidthTrans-drawerBarSize/2}px;`"
                            >

                                <slot name="drawer"></slot>

                            </div>

                            <div :style="`padding-left:${drawerBarSize/2}px;`" v-if="dragDrawerWidth && isAtLeft"></div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- 拖曳寬度bar, z-index需大於drawer區, 否則多層drawer開啟拖曳寬度bar時會被遮蔽 -->
            <!-- 延遲至抽屜出現後才通過opacity=1顯示, 否則於浮動模式時會在外側陰影層馬上看到拖曳寬度bar, 使用者體驗不佳 -->
            <div
                ref="divBar"
                :style="`position:${effOverlayPosition}; z-index:${effDrawerZIndex+3}; top:0px; ${isAtLeft?'left':'right'}:${drawerWidthTrans-bw/2}px; width:${bw}px; height:100%; border-left:${drawerBarBorderSize}px solid ${effDrawerBarBorderColor}; border-right:${drawerBarBorderSize}px solid ${effDrawerBarBorderColor}; opacity:${showOverlay5DragDrawerBar?1:0}; cursor:col-resize; user-select:none;`"
                v-show="value && dragDrawerWidth"
            >
                <div :style="`width:${drawerBarSize}px; height:100%; background:${effDrawerBarColor};`"></div>
            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import filter from 'lodash/filter'
import min from 'lodash/min'
import isNumber from 'lodash/isNumber'
import isnum from 'wsemi/src/isnum.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {String} [mode='from-left'] 輸入抽屜顯示位置字串，可使用'from-left'與'from-right'，預設'from-left'
 * @vue-prop {Number} [drawerWidth=200] 輸入抽屜寬度數字，單位為px，預設200
 * @vue-prop {Number} [drawerWidthMin=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最小值數字，預設null
 * @vue-prop {Number} [drawerWidthMax=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最大值數字，預設null
 * @vue-prop {Boolean} [afloat=false] 輸入是否為浮動顯示布林值，設為true時浮在內容區上故不壓縮內容區寬度，預設false
 * @vue-prop {Boolean} [afloatByFix=false] 輸入浮動顯示時是否使用fixed使能具有滿版配置布林值，預設false
 * @vue-prop {Number} [overlayOpacity=0.45] 輸入浮動顯示時抽屜外側陰影層之透明度數字，預設0.45
 * @vue-prop {String} [overlayColor='grey darken-2'] 輸入浮動顯示時抽屜外側陰影層背景顏色字串，預設'grey darken-2'
 * @vue-prop {Number} [drawerZIndex=1] 輸入浮動顯示時抽屜使用z-index數字，預設1
 * @vue-prop {Boolean} [dragDrawerWidth=false] 輸入是否使用拖曳抽屜寬度分隔條布林值，預設false
 * @vue-prop {String} [drawerBarColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {Number} [drawerBarSize=2] 輸入分隔條尺寸數字，為分隔條寬度，單位為px，預設2
 * @vue-prop {String} [drawerBarBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [drawerBarBorderSize=3] 輸入分隔條框線寬度數字，單位為px，預設3，通常配合barBorderColor='transparent'使可拖曳區加大又不遮蔽可視區
 */
export default {
    directives: {
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
            default: 1,
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
            default: 3, //抽屜內捲軸通常是WPanelScrolly的捲軸故寬度是8px, 而拖曳寬度bar邊寬是雙向展開, 故不能超過此8px
        },
    },
    data: function() {
        return {

            das: null,

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

            //trigger
            let value = vo.value

            //toggleValue
            vo.toggleValue(value)

            return ''
        },

        changeDrawerWidth: function() {
            let vo = this
            vo.drawerWidthTrans = vo.drawerWidth
            return ''
        },

        virtualZoneWidth: function() {
            if (!this.value) {
                return 0
            }
            if (this.afloat) {
                return 0
            }
            return this.drawerWidthTrans
        },

        isAtLeft: function() {
            return this.mode !== 'from-right'
        },

        effDrawerZIndex: function() {
            let i = this.drawerZIndex
            if (this.afloat) {
                i += 1000
            }
            if (this.afloatByFix) {
                i += 10000
            }
            return i
        },

        effOverlayColor: function() {
            if (!this.afloat) {
                return 'transparent'
            }
            return color2hex(this.overlayColor)
        },

        effOverlayPosition: function() {
            return this.afloatByFix ? 'fixed' : 'absolute'
        },

        effOverlayOpacity: function() {
            if (!this.afloat) {
                return 0
            }
            return this.effOverlay1Basic ? this.overlayOpacity : 0
        },

        effDrawerTranslateX: function() {
            if (this.effOverlay4Translate) {
                return 0
            }
            let s0 = this.isAtLeft ? -100 : 100
            return s0
        },

        effDrawerDetectLoction: function() {
            if (this.isAtLeft) {
                return 'left:0px;'
            }
            return 'right:0px;'
        },

        effDrawerDetectWidth: function() {
            if (this.afloat) {
                return '100%'
            }
            return `${this.drawerWidthTrans}px`
        },

        effDrawerClassShadow: function() {
            return this.afloat && this.showOverlay3Shadow ? 'bs' : ''
        },

        bw: function() {
            //console.log('computed changeParam')

            let vo = this

            return vo.drawerBarSize + vo.drawerBarBorderSize * 2
        },

        effDrawerBarColor: function() {
            return color2hex(this.drawerBarColor)
        },

        effDrawerBarBorderColor: function() {
            return color2hex(this.drawerBarBorderColor)
        },

    },
    methods: {

        ckToggle: function(ev, value) {
            // console.log('methods ckToggle', ev, value)

            let vo = this

            //check, 固定時(非浮動)禁止關閉
            if (!vo.afloat) {
                return
            }

            //偵測點擊為抽屜slot區之外
            let b = false
            try {
                b = !vo.$refs.divDrawer.contains(ev.target)
            }
            catch (err) {}
            // console.log('vo.$refs.divDrawer', vo.$refs.divDrawer)
            // console.log('ev.target', ev.target)
            // console.log(vo.$refs.divDrawer.contains(ev.target))

            //check
            if (b) {

                //toggleValue
                vo.toggleValue(value)

            }

        },

        toggleValue: function (value) {
            // console.log('methods toggleValue', value)

            let vo = this

            // //check, 不可編輯時跳出
            // if (!vo.editable) {
            //     return
            // }

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

            //emit
            vo.$emit('input', value)

        },

        dragBar: function({ clientX }) {
            // console.log('methods dragBar', clientX)

            let vo = this

            //check dragDrawerWidth
            if (!vo.dragDrawerWidth) {
                return
            }

            //check value
            if (!vo.value) {
                return
            }

            //getWindowWidth
            let getWindowWidth = () => {
                let w1 = get(window, 'innerWidth')
                // console.log('window.innerWidth', window.innerWidth)
                let w2 = get(document, 'documentElement.clientWidth')
                // console.log('document.documentElement.clientWidth', document.documentElement.clientWidth)
                let w3 = get(document, 'body.clientWidth')
                // console.log('document.body.clientWidth', document.body.clientWidth)
                let ws = [w1, w2, w3]
                ws = filter(ws, isNumber)
                let w = min(ws)
                return w
            }

            //getWindowWidth
            let windowWidth = getWindowWidth()

            //bd
            let bd = null
            if (!vo.afloatByFix) {
                //抽屜浮動於組件panel
                bd = vo.$el.getBoundingClientRect()
            }
            else {
                //抽屜浮動於body
                bd = {
                    left: 0,
                    width: windowWidth,
                }
            }

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
            let dwMax = null
            if (!vo.afloatByFix) {
                //抽屜浮動於組件panel
                dwMax = vo.$el.offsetWidth
            }
            else {
                //抽屜浮動於body
                dwMax = windowWidth
            }
            if (isnum(vo.drawerWidthMax)) {
                dwMax = cdbl(vo.drawerWidthMax)
            }
            // console.log('dwMax', dwMax, 'windowWidth', windowWidth)

            //dwMin
            let dwMin = 0
            if (isnum(vo.drawerWidthMin)) {
                dwMin = cdbl(vo.drawerWidthMin)
            }

            //min, max
            dw = Math.min(dw, dwMax)
            dw = Math.max(dw, dwMin)

            //update
            vo.drawerWidthTrans = dw
            // console.log('dw', dw)

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

