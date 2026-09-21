<template>
    <div
        :state="state"
        :changeValue="changeValue"
        :changeDrawerWidth="changeDrawerWidth"
        :changeAfloat="changeAfloat"
        v-domresize
        @domresize="resizePanel"
    >

        <!-- 因拖曳寬度bar現放置於divPanel下並且浮動定位, 左右側之拖曳區會超出divPanel, 故須使用overflow:hidden -->
        <div
            ref="divPanel"
            style="position:relative; width:100%; height:100%; overflow:hidden;"
        >

            <!-- 因右側抽屜會無法被內容區裁切遮蔽, 故須使用overflow:hidden -->
            <div style="width:100%; height:100%; display:flex; overflow:hidden;">

                <!-- 撐開區, 需使用min-width避免被壓縮 -->
                <div
                    class="ts"
                    :style="`${useNoTransStyle} width:${virtualZoneWidth}px; min-width:${virtualZoneWidth}px;`"
                    v-if="isAtLeft"
                ></div>

                <!-- 因內容區具有無法崩塌元素, 故也須使用overflow:hidden進行裁切 -->
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
                    :style="`${useNoTransStyle} width:${virtualZoneWidth}px; min-width:${virtualZoneWidth}px;`"
                    v-if="!isAtLeft"
                ></div>

            </div>

            <!-- overlay半透明灰色層 -->
            <div
                class="ts"
                :style="`position:${useAniPosition}; ${useDrawerDetectLoction} top:0px; bottom:0px; z-index:${useDrawerZIndex+1}; width:${useDrawerDetectWidth}; height:100%; opacity:${useAniOpacity}; background:${useAniColor};`"
                v-if="showAni1Basic"
            >
            </div>

            <!-- overlay關閉事件監聽層, 與隱藏內層之向外陰影 -->
            <div
                :style="`position:${useAniPosition}; ${useDrawerDetectLoction} top:0px; bottom:0px; z-index:${useDrawerZIndex+2}; width:${useDrawerDetectWidth}; height:100%;`"
                @click="(ev)=>{ckToggle(ev,false)}"
                v-show="showAni2Detect"
            >

                <!-- drawer平移層 -->
                <div
                    :style="`width:100%; height:100%; display:flex; justify-content:${ isAtLeft ? 'start' : 'end' };`"
                >

                    <div
                        ref="divDrawer"
                        :class="`ts ${useDrawerClassShadow}`"
                        :style="`${useNoTransStyle} width:${useDrawerWidthTrans}px; height:100%; transform:translateX(${useDrawerTranslateX}%);`"
                        v-domstable
                        @domstable="getStableDrawer"
                    >

                        <div
                            class="ts"
                            :style="`${useNoTransStyle} position:relative; width:${useDrawerWidthTrans}px; height:100%; display:flex;`"
                        >

                            <div :style="`padding-left:${useDrawerBarSize/2}px;`" v-if="dragDrawerWidth && !isAtLeft"></div>

                            <div
                                class="ts"
                                :style="`${useNoTransStyle} width:${useEffDrawerWidthTrans}px;`"
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
                            <!-- 寬度內要含border, 故須box-sizing:border-box -->
                            <div
                                ref="divBar"
                                :style="`position:${useAniPosition}; top:0px; ${isAtLeft?'left':'right'}:${useDrawerWidthTrans-useDrawerBarWidth/2}px; width:${useDrawerBarWidth}px; height:100%; border-left:${drawerBarBorderSize}px solid ${useDrawerBarBorderColor}; border-right:${drawerBarBorderSize}px solid ${useDrawerBarBorderColor}; box-sizing:border-box; opacity:${showAni5DragDrawerBar?1:0}; cursor:col-resize; user-select:none;`"
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
import get from 'lodash-es/get.js'
import isNumber from 'lodash-es/isNumber.js'
import genID from 'wsemi/src/genID.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import domIsClientXYIn from 'wsemi/src/domIsClientXYIn.mjs'
import domGetWindowSize from 'wsemi/src/domGetWindowSize.mjs'
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import domResize from '../js/domResize.mjs'
import domStable from '../js/domStable.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {String} [mode='from-left'] 輸入抽屜顯示位置字串，可使用'from-left'與'from-right'，預設'from-left'
 * @vue-prop {Number} [drawerWidth=200] 輸入抽屜寬度數字，單位為px，預設200
 * @vue-prop {Number} [drawerWidthMin=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最小值數字，預設null
 * @vue-prop {Number} [drawerWidthMax=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最大值數字，預設null
 * @vue-prop {Boolean} [afloat=false] 輸入是否為浮動顯示布林值，設為true時浮在內容區上故不壓縮內容區寬度，搭配autoSwitchToFloat或autoSwitchToFix時會由組件改寫，建議使用.sync綁定，預設false
 * @vue-prop {Boolean} [afloatByFix=false] 輸入浮動顯示時是否使用fixed布林值，若為true使用'fixed'反之使用'absolute'，預設false
 * @vue-prop {Number} [overlayOpacity=0.45] 輸入浮動顯示時抽屜外側陰影層之透明度數字，預設0.45
 * @vue-prop {String} [overlayColor='grey darken-2'] 輸入浮動顯示時抽屜外側陰影層背景顏色字串，預設'grey darken-2'
 * @vue-prop {Number} [drawerZIndex=1000] 輸入浮動顯示時抽屜使用z-index數字，預設1000
 * @vue-prop {Boolean} [dragDrawerWidth=false] 輸入是否使用拖曳抽屜寬度分隔條布林值，預設false
 * @vue-prop {String} [drawerBarColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {Number} [drawerBarSize=2] 輸入分隔條尺寸數字，為分隔條寬度，單位為px，預設2
 * @vue-prop {String} [drawerBarBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [drawerBarBorderSize=3] 輸入分隔條框線寬度數字，單位為px，預設3，通常配合barBorderColor='transparent'使可拖曳區加大又不遮蔽可視區
 * @vue-prop {Boolean} [autoSwitchToHide=false] 輸入是否自動切換至隱藏布林值，當抽屜顯示時且組件寬度過小時則隱藏，預設false
 * @vue-prop {Boolean} [autoSwitchToShow=false] 輸入是否自動切換至顯示布林值，當抽屜隱藏時且組件寬度過大時則顯示，預設false
 * @vue-prop {Boolean} [autoSwitchToFloat=false] 輸入是否自動切換至浮動布林值，當抽屜顯示時且組件寬度過小時則浮動，預設false
 * @vue-prop {Boolean} [autoSwitchToFix=false] 輸入是否自動切換至佔版布林值，當抽屜為浮動時且組件寬度過大時則佔版，為autoSwitchToFloat之回程故須搭配其使用，僅回復由autoSwitchToFloat造成之浮動而不覆寫呼叫端以afloat明確指定之浮動，與Float不同之處為不論抽屜顯示與否皆會判斷，切換時發出update:afloat為false故建議afloat使用.sync綁定，另此處之Fix代表佔版(非浮動)，與afloatByFix之fixed定位無關，預設false
 * @vue-prop {Number} [switchWidth=340] 輸入當自動切換顯示、隱藏、浮動、佔版時判斷組件寬度過小之門檻寬度數字，變窄至小於此值時隱藏或浮動，變寬至大於等於此值時顯示或佔版，當afloatByFix為true時比較的是視窗可視寬度，單位為px，預設340
 */
export default {
    directives: {
        domresize: domResize(),
        domstable: domStable(),
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
        autoSwitchToHide: {
            type: Boolean,
            default: false,
        },
        autoSwitchToShow: {
            type: Boolean,
            default: false,
        },
        autoSwitchToFloat: {
            type: Boolean,
            default: false,
        },
        autoSwitchToFix: {
            type: Boolean,
            default: false,
        },
        switchWidth: {
            type: Number,
            default: 340,
        },
    },
    data: function() {
        return {

            panelWidth: 0,
            panelHeight: 0,

            das: null,

            state: 'hidden', //hidden, hiding, opened, opening

            valueTrans: false,

            dragging: false,

            drawerWidthTrans: 200,
            afloatTrans: false,

            drawerStable: true,
            drawerTransitionDone: false, //divDrawer自身transform過場是否已結束(transitionend或transitioncancel), 為落定state之主要訊號
            hdDrawerTransition: null, //divDrawer過場事件監聽之handler, 供移除

            timerAni1Basic: null,
            showAni1Basic: false,
            effAni1Basic: false,

            timerAni2Detect: null,
            showAni2Detect: false,
            // effAni2Detect: false,

            timerAni3Shadow: null,
            showAni3Shadow: false,
            // effAni3Shadow: false,

            timerAni4Translate: null,
            // showAni4Translate: false,
            effAni4Translate: false,

            timerAni5DragDrawerBar: null,
            showAni5DragDrawerBar: false,

            timerAni6State: null,
            tagStateNow: '',

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
            vo.dragging = true
        })
        das.on('freeBar', () => {
            setTimeout(() => { //因拖曳寬度bar現在位於overlay關閉事件監聽層之內, 故會優先觸發點擊事件後才冒泡出去, 導致放掉拖曳時會觸發點擊關閉事件, 故改採通過delay脫勾與上鎖機制避免關閉
                // console.log('freeBar')
                vo.dragging = false
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

        //unwatch
        vo.unwatchDrawerTransition()

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

        changeAfloat: function() {
            let vo = this

            //___afloatFromAuto___, 記錄當前浮動是否由autoSwitchToFloat所造成, 供autoSwitchToFix判斷可否自動恢復佔版
            //刻意不宣告於data使其為非響應式, 否則本computed讀取後會成為依賴, 於autoSwitchToFloat寫入時被標髒而重算, 使afloatTrans被prop值覆寫
            //afloat由外部改變(非自動浮動後經.sync之回寫)時視為呼叫端明確指定, 清除標記後autoSwitchToFix便不覆寫該指定
            if (!(vo.___afloatFromAuto___ === true && vo.afloat === true)) {
                vo.___afloatFromAuto___ = false
            }

            vo.afloatTrans = vo.afloat
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
            if (this.afloatTrans) {
                return 0
            }
            return this.useDrawerWidthTrans
        },

        isAtLeft: function() {
            return this.mode !== 'from-right'
        },

        useDrawerZIndex: function() {
            let i = this.drawerZIndex
            if (this.afloatTrans) {
                i += 1
            }
            if (this.afloatByFix) {
                i += 500 //drawer, dialog, tooltip分配z-index值差為1000, 故內部分配給500
            }
            return i
        },

        useAniColor: function() {
            if (!this.afloatTrans) {
                return 'transparent'
            }
            return convertColor(this.overlayColor)
        },

        useAniPosition: function() {
            return this.afloatByFix ? 'fixed' : 'absolute'
        },

        useAniOpacity: function() {
            if (!this.afloatTrans) {
                return 0
            }
            return this.effAni1Basic ? this.overlayOpacity : 0
        },

        useDrawerTranslateX: function() {
            if (this.effAni4Translate) {
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
            if (this.afloatTrans) {
                return '100%'
            }
            return `${this.useDrawerWidthTrans}px`
        },

        useDrawerClassShadow: function() {
            return this.afloatTrans && this.showAni3Shadow ? 'bs' : ''
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
            return convertColor(this.drawerBarColor)
        },

        useDrawerBarBorderColor: function() {
            return convertColor(this.drawerBarBorderColor)
        },

        useNoTransStyle: function() {
            let vo = this
            //拖曳寬度bar時關閉寬度transition, 避免bar位置瞬間更新而抽屜邊緣慢動畫追趕造成的視覺錯位
            return vo.dragging ? 'transition:none;' : ''
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
            // console.log('vo.panelHeight', vo.panelHeight)

            //wl
            let wl = vo.switchWidth
            // console.log('wl', wl)

            //mw
            let mw = get(msg, 'smode.width', '')

            //autoSwitchToHide
            if (vo.autoSwitchToHide) {
                if (vo.valueTrans && mw === 'smaller' && vo.panelWidth < wl) { //已開啟抽屜且為變窄時才隱藏

                    //toggleValue
                    vo.toggleValue(false)

                    //emit
                    vo.$emit('input', false)

                }
            }

            //autoSwitchToShow
            if (vo.autoSwitchToShow) {
                if (!vo.valueTrans && mw === 'larger' && vo.panelWidth >= wl) { //已隱藏抽屜且為變寬時才顯示

                    //toggleValue
                    vo.toggleValue(true)

                    //emit
                    vo.$emit('input', true)

                }
            }

            //autoSwitchToFloat
            if (vo.autoSwitchToFloat) {
                if (vo.valueTrans && !vo.afloatTrans && mw === 'smaller' && vo.panelWidth < wl) { //已開啟抽屜且為佔版模式且為變窄時才浮動

                    //save afloatTrans, 並標記此浮動為自動切換所造成, 供autoSwitchToFix回復
                    vo.___afloatFromAuto___ = true
                    vo.afloatTrans = true

                    //emit
                    vo.$emit('update:afloat', true)

                }
            }

            //autoSwitchToFix
            if (vo.autoSwitchToFix) {
                //不檢核valueTrans, 因toggleValue不寫入valueTrans(唯一寫入處為changeValue), autoSwitchToShow於同輪發出input後valueTrans仍為舊值, 檢核會使抽屜自動顯示時無法同時恢復佔版
                //僅回復由autoSwitchToFloat造成之浮動, 呼叫端以afloat明確指定之浮動不覆寫
                if (vo.___afloatFromAuto___ === true && vo.afloatTrans && mw === 'larger' && vo.panelWidth >= wl) { //已為自動浮動且為變寬時才佔版

                    //save afloatTrans
                    vo.___afloatFromAuto___ = false
                    vo.afloatTrans = false

                    //emit
                    vo.$emit('update:afloat', false)

                }
            }

            //emit
            vo.$emit('resize', msg)

        },

        ckToggle: function(ev, value) {
            // console.log('methods ckToggle', ev, value)

            let vo = this

            //check, 固定時(非浮動)禁止關閉
            if (!vo.afloatTrans) {
                return
            }

            //check, 上鎖時禁止觸發
            if (vo.dragging) {
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

        toggleValue: async function (value) {
            // console.log('methods toggleValue', value)

            let vo = this

            //wait $el
            await waitFun(() => {
                return vo.$el !== undefined
            }, { attemptNum: 800, timeInterval: 250 })

            //clearTimeout
            clearTimeout(vo.timerAni1Basic)
            clearTimeout(vo.timerAni2Detect)
            clearTimeout(vo.timerAni3Shadow)
            clearTimeout(vo.timerAni4Translate)
            clearTimeout(vo.timerAni5DragDrawerBar)
            clearTimeout(vo.timerAni6State)

            //切換即標記為未穩定, 待divDrawer(及子樹)動畫真正結束(directive偵測)後才翻true; 避免waitFun讀到殘留true而過早落定
            vo.drawerStable = false

            //監聽divDrawer自身transform過場之結束, 作為落定state之主要訊號; directive為邊緣觸發, 高負載下可能整段位移皆未取樣到而不再回呼, 若只依賴它會卡在opening/hiding, 詳settleState
            vo.watchDrawerTransition()

            //此次切換的tag(genID唯一值), 供下方延遲落定的waitFun回呼比對, 避免快速切換時舊的waitFun誤落定
            let tagStateNew = genID()
            vo.tagStateNow = tagStateNew

            let sec

            //check
            if (value) {
                //顯示

                // vo.fsmShowAni.showAni()
                // vo.fsmShowStateAni.showAni()
                sec = 20

                //state
                vo.state = 'opening'

                // showAni1Basic: false,
                // effAni1Basic: false,
                vo.showAni1Basic = true
                vo.timerAni1Basic = setTimeout(() => {
                    vo.effAni1Basic = true
                }, sec)

                // showAni2Detect: false,
                // effAni2Detect: false,
                vo.showAni2Detect = true

                // showAni3Shadow: false,
                // effAni3Shadow: false,
                vo.showAni3Shadow = true

                // showAni4Translate: false,
                // effAni4Translate: false,
                // vo.showAni4Translate = true
                vo.timerAni4Translate = setTimeout(() => {
                    vo.effAni4Translate = true
                }, sec)

                // showAni5DragDrawerBar: false,
                // vo.showAni5DragDrawerBar = true
                vo.timerAni5DragDrawerBar = setTimeout(() => {
                    vo.showAni5DragDrawerBar = true
                }, 300)

                //待動畫時長後落定state, 詳settleState
                vo.timerAni6State = setTimeout(() => {
                    vo.settleState('opened', sec, tagStateNew)
                }, 300)

            }
            else {
                //隱藏

                // vo.fsmShowAni.hideAni()
                // vo.fsmShowStateAni.hideAni()
                sec = 300

                //state
                vo.state = 'hiding'

                // showAni1Basic: false,
                // effAni1Basic: false,
                vo.effAni1Basic = false
                vo.timerAni1Basic = setTimeout(() => {
                    vo.showAni1Basic = false
                }, sec)

                // showAni2Detect: false,
                // effAni2Detect: false,
                vo.timerAni2Detect = setTimeout(() => {
                    vo.showAni2Detect = false
                }, sec)

                // showAni3Shadow: false,
                // effAni3Shadow: false,
                vo.timerAni3Shadow = setTimeout(() => {
                    vo.showAni3Shadow = false
                }, sec / 2) //提前隱藏陰影

                // showAni4Translate: false,
                // effAni4Translate: false,
                vo.effAni4Translate = false
                // vo.timerAni4Translate = setTimeout(() => {
                //     vo.showAni4Translate = false
                // }, sec)

                // showAni5DragDrawerBar: false,
                vo.showAni5DragDrawerBar = false

                //待動畫時長後落定state, 詳settleState
                vo.timerAni6State = setTimeout(() => {
                    vo.settleState('hidden', sec, tagStateNew)
                }, 300)

            }

        },

        watchDrawerTransition: function() {
            // console.log('methods watchDrawerTransition')

            let vo = this

            //unwatch, 快速切換時先移除前次監聽
            vo.unwatchDrawerTransition()

            //el
            let el = get(vo, '$refs.divDrawer', null)
            if (!el) {
                return
            }

            //reset
            vo.drawerTransitionDone = false

            //fn, 過場事件會自子樹冒泡, 須限定為divDrawer自身之transform; 收合時divDrawer會因外層轉為display:none而取消過場, 故transitioncancel亦視為結束
            let fn = (ev) => {
                if (ev.target !== el || ev.propertyName !== 'transform') {
                    return
                }
                vo.drawerTransitionDone = true
            }
            el.addEventListener('transitionend', fn)
            el.addEventListener('transitioncancel', fn)

            //save
            vo.hdDrawerTransition = { el, fn }

        },

        unwatchDrawerTransition: function() {
            // console.log('methods unwatchDrawerTransition')

            let vo = this

            //check
            let hd = vo.hdDrawerTransition
            if (!hd) {
                return
            }

            //removeEventListener
            hd.el.removeEventListener('transitionend', hd.fn)
            hd.el.removeEventListener('transitioncancel', hd.fn)

            //clear
            vo.hdDrawerTransition = null

        },

        settleState: function(stateEnd, sec, tagStateNew) {
            // console.log('methods settleState', stateEnd, sec, tagStateNew)

            let vo = this

            //settle, 比對tag避免快速切換時舊的落定誤寫
            let settle = () => {
                if (vo.tagStateNow !== tagStateNew) {
                    return
                }
                vo.unwatchDrawerTransition()
                vo.state = stateEnd
            }

            //以位準判斷落定: divDrawer自身transform過場已結束(drawerTransitionDone), 或directive回報divDrawer及子樹已穩定(drawerStable), 任一成立即落定; 最長等sec+1000ms
            let timeInterval = 50
            let attemptNum = Math.ceil((sec + 1000) / timeInterval)
            waitFun(() => vo.drawerTransitionDone === true || vo.drawerStable === true, { attemptNum, timeInterval })
                .then(settle)
                .catch(async () => {

                    //兜底: 兩訊號皆未到達(如不位移或無過場時), 若divDrawer此時仍存在transform過場(含尚未開始之pending, 高負載下過場可能延後開始)則等其結束, 上限3000ms, 避免過場中即落定
                    let anims = []
                    try {
                        anims = vo.$refs.divDrawer.getAnimations().filter((a) => a.transitionProperty === 'transform')
                    }
                    catch (err) {}
                    if (anims.length > 0) {
                        await Promise.race([
                            Promise.allSettled(anims.map((a) => a.finished)),
                            new Promise((resolve) => setTimeout(resolve, 3000)),
                        ])
                    }

                    //settle
                    settle()

                })

        },

        getStableDrawer: function(b) {
            // console.log('methods getStableDrawer', b)

            let vo = this

            //更新drawerStable: divDrawer(及子樹)動畫是否已穩定, 由v-domstable(domStable directive)偵測後回呼; 為落定state之輔助訊號, 主要訊號為divDrawer自身之過場事件, 詳settleState
            vo.drawerStable = b

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

