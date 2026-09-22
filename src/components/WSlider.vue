<template>
    <div
        :style="`user-select:none;`"
        :changeParam="changeParam"
        v-domresize
        @domresize="resizePanel"
    >

        <!-- 按下此列即定值: 監聽掛於本列容器(高度為sliderSize), 不可掛於根層, 因提示窗divContent為根層子節點, 掛根會導致點提示窗也改值 -->
        <!-- touch-action:none為觸控可拖曳之必要條件, 否則瀏覽器於手指移動數px後接手捲動並以pointercancel中斷事件流, 比照WColorPickHue等三支之處置 -->
        <!-- 代價: 本列(高度sliderSize)上起手之垂直捲動手勢會失效 -->
        <div
            ref="divRow"
            :style="`position:relative; width:100%; height:${sliderSize}px; touch-action:none; ${editable?'cursor:pointer;':''}`"
            @pointerdown="pointerdownRow"
            @contextmenu="contextmenuRow"
        >

            <div :style="`position:absolute; top:${sliderSize/2-progHeight/2}px; left:${sliderSize/2}px; width:${progWidth}px;`">

                <div
                    ref="divPanel"
                    :style="`position:relative; width:${progWidth}px;`"
                >

                    <div
                        :style="`${useProgBorderRadius} overflow:hidden; width:${progWidth}px; height:${progHeight}px;`"
                    >
                        <div
                            ref="divBarTrack"
                            :style="`background:${useProgBackgroundColor}; height:${progHeight}px;`"

                        >
                            <div
                                ref="divBarProgress"
                                :style="`background:${useProgColor}; width:${(rt)*progWidth}px; height:${progHeight}px;`"
                            ></div>
                        </div>
                    </div>

                    <div
                        ref="divTriggerOuter"
                        :style="`position:absolute; left:${(rt)*progWidth-widthCir/2}px; top:${progHeight/2-heightCir/2}px; z-index:1; ${editable?'cursor:pointer;':''}`"
                    >

                        <div
                            ref="divTrigger"
                            class="ts bs"
                            :style="`width:${widthCir}px; height:${heightCir}px; border-radius:50%; background:${useSliderBackgroundColor}; outline:none;`"
                        ></div>

                    </div>

                    <div
                        ref="divBar"
                        :style="`position:absolute; left:${(r)*progWidth-widthCir/2}px; top:${progHeight/2-heightCir/2}px; z-index:2; ${editable?'cursor:pointer;':''}`"
                    >

                        <div
                            :style="`width:${widthCir}px; height:${heightCir}px; border-radius:50%; opacity:0; outline:none;`"
                            @mouseenter="hoverTrans=true"
                            @mouseleave="hoverTrans=false"
                        ></div>

                    </div>

                </div>

            </div>

        </div>

        <!-- 不能給予position因會被popupjs洗掉, 但可給z-index, 且popupjs會改用transform:translate定位 -->
        <!-- 若使用minWidth, 會使popupjs重算給予minWidth用以自動撐開彈窗寬度失效, 若於其內slot外添加div給予minWidth, 亦會使popupjs給予minWidth機制失效, 待研究 -->
        <div
            ref="divContent"
            class="WPopperFix"
            :style="`z-index:${cmpZIndex};`"
            v-show="effecting"
            v-domresize
            @domresize="updatePopper"
        >
            <!-- 不使用v-if來重產dom, 因開啟arrow會有顯示後來不及定位問題 -->
            <div
                :style="`padding:2px 5px; font-size:0.8rem; ${useTooltipTextFontSize} color:${useTooltipTextColor}; background:${useTooltipBackgroundColor}; ${useTooltipBorderRadius}`"
            >
                {{valueDig}}
                <div class="arrow" data-popper-arrow></div>
            </div>
        </div>

    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import isNumber from 'lodash-es/isNumber.js'
import dig from 'wsemi/src/dig.mjs'
import round from 'wsemi/src/round.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import replace from 'wsemi/src/replace.mjs'
import domDragBarAndScroll from 'wsemi/src/domDragBarAndScroll.mjs'
import domResize from '../js/domResize.mjs'
import convertColor from '../js/convertColor.mjs'
import { createPopper } from '@popperjs/core/lib/popper-lite.js' //不用安裝@popperjs/core, 因wsemi安裝tippy.js內有依賴@popperjs/core
import flip from '@popperjs/core/lib/modifiers/flip.js'
import offset from '@popperjs/core/lib/modifiers/offset.js'
import arrow from '@popperjs/core/lib/modifiers/arrow.js'
import hide from '@popperjs/core/lib/modifiers/hide.js'
//import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js'
//import computeStyles from '@popperjs/core/lib/modifiers/computeStyles'


/**
 * @vue-prop {Number} [value=0] 輸入值數字，介於valueMin與valueMax之間，預設0
 * @vue-prop {Number} [valueMin=0] 輸入最小值數字，預設0
 * @vue-prop {Number} [valueMax=100] 輸入最大值數字，預設100
 * @vue-prop {Number} [valueStep=1] 輸入間隔數字，預設1
 * @vue-prop {Number} [valueDecimal=0] 輸入值取小數位數字，用於可拖選值具有小數時，預設0
 * @vue-prop {Number} [progBorderRadius=5] 輸入值域條框圓角度數字，單位為px，預設5
 * @vue-prop {Number} [progHeight=4] 輸入值域條高度數字，單位為px，預設4
 * @vue-prop {String} [progColor='#74a4d9'] 輸入值域條顏色字串，預設'#74a4d9'
 * @vue-prop {String} [progColorDisabled='#c5c5c5'] 輸入不可編輯時值域條顏色字串，預設'#c5c5c5'
 * @vue-prop {String} [progBackgroundColor='#eee'] 輸入值域條背景顏色字串，預設'#eee'
 * @vue-prop {String} [progBackgroundColorDisabled='#f2f2f2'] 輸入不可編輯時值域條背景顏色字串，預設'#f2f2f2'
 * @vue-prop {Number} [sliderSize=20] 輸入拖曳球尺寸數字，單位為px，預設20
 * @vue-prop {String} [sliderBackgroundColor='blue darken-3'] 輸入拖曳球背景顏色字串，預設'blue darken-3'
 * @vue-prop {String} [sliderBackgroundColorHover='blue darken-2'] 輸入滑鼠移入時拖曳球背景顏色字串，預設'blue darken-2'
 * @vue-prop {String} [sliderBackgroundColorDisabled='#aaa'] 輸入不可編輯時拖曳球背景顏色字串，預設'#aaa'
 * @vue-prop {Number} [cmpZIndex=3000] 輸入提示窗使用z-index數字，預設3000
 * @vue-prop {Number} [tooltipPlacementDist=5] 輸入提示窗距離觸發元素距離數字，單位為px，預設5
 * @vue-prop {Number} [tooltipBorderRadius=4] 輸入提示窗框圓角度數字，單位為px，預設4
 * @vue-prop {String} [tooltipTextFontSize='0.85rem'] 輸入提示窗框文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [tooltipTextColor='white'] 輸入提示窗框文字顏色字串，預設'white'
 * @vue-prop {String} [tooltipBackgroundColor='#666'] 輸入值域條背景顏色字串，預設'#666'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
    },
    props: {
        value: {
            type: Number,
            default: 0,
        },
        valueMin: {
            type: Number,
            default: 0,
        },
        valueMax: {
            type: Number,
            default: 100,
        },
        valueStep: {
            type: Number,
            default: 1,
        },
        valueDecimal: {
            type: Number,
            default: 0,
        },
        progBorderRadius: {
            type: Number,
            default: 5,
        },
        progHeight: {
            type: Number,
            default: 4,
        },
        progColor: {
            type: String,
            default: '#74a4d9',
        },
        progColorDisabled: {
            type: String,
            default: '#c5c5c5',
        },
        progBackgroundColor: {
            type: String,
            default: '#eee',
        },
        progBackgroundColorDisabled: {
            type: String,
            default: '#f2f2f2',
        },
        sliderSize: {
            type: Number,
            default: 20,
        },
        sliderBackgroundColor: {
            type: String,
            default: 'blue darken-3',
        },
        sliderBackgroundColorHover: {
            type: String,
            default: 'blue darken-2',
        },
        sliderBackgroundColorDisabled: {
            type: String,
            default: '#aaa',
        },
        cmpZIndex: {
            type: Number,
            default: 3000,
        },
        tooltipPlacementDist: {
            type: Number,
            default: 5,
        },
        tooltipBorderRadius: {
            type: Number,
            default: 4,
        },
        tooltipTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        tooltipTextColor: {
            type: String,
            default: 'white',
        },
        tooltipBackgroundColor: {
            type: String,
            default: '#666', //rgba(60,60,60,0.75) //因arrow是通過div與旋轉成菱形來繪製, 因此可支援外部指定背景色, 但若有透明就會出現arrow的菱形問題
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {

            panelWidth: 0,
            panelHeight: 0,

            das: null,

            hoverTrans: false,
            dragTrans: false,

            curTrackDown: false, //軌道通道是否按下中, 與das之內部鎖各自獨立, 不可互讀
            curPointerId: null, //按下當時之pointerId, 多點觸控時只服務這一個指標
            curPointerType: '', //按下當時之pointerType, 用於區分滑鼠與觸控之處置

            popperInstance: null,
            popperShow: false,

            r: null,
            rt: null,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //本元件有兩條互斥的指標通道, 修改前請先讀懂分工:
        //  拖曳鈕(divBar) = das之domDragBarAndScroll, mouse與touch雙軌, 既有且已驗證, 本次完全不動
        //  整列(divRow)   = 以下新增之pointer單軌, 涵蓋滑鼠/觸控/觸控筆, 負責「按下即定值並接續拖曳」
        //兩者以pointerdownRow內之divBar.contains(e.target)互斥, 不可改用狀態互斥:
        //  pointerdown早於mousedown(已實測), 按鈕當下das尚未上鎖、dragTrans仍為false, 狀態守門必然失效
        //另本通道不得讀das之狀態當守門: 該鎖為das之內部狀態且不對外公開, 跨通道耦合會使任一端之殘留狀態連鎖癱瘓另一端

        //das
        let das = domDragBarAndScroll(vo.$refs.divPanel, vo.$refs.divBar, { useTouchDragForPanel: false })
        das.on('dragBar', vo.dragBar)
        das.on('pressBar', vo.pressBar)
        das.on('freeBar', vo.freeBar)

        //save
        vo.das = das

        //windowPointermove, 軌道通道之位移, 掛於window故指標移出元件外仍持續追蹤
        vo.windowPointermove = (e) => {

            //check
            if (!vo.curTrackDown) {
                return
            }

            //check, 多點觸控時第二指不得搶值
            if (vo.curPointerId !== null && e.pointerId !== undefined && e.pointerId !== vo.curPointerId) {
                return
            }

            //check, 滑鼠拖出瀏覽器視窗外放開時收不到pointerup, 以buttons為0自我解鎖(觸控之buttons為1故不受影響)
            if (e.pointerType === 'mouse' && e.buttons === 0) {
                vo.freeTrack()
                return
            }

            vo.dragBar({ clientX: e.clientX, clientY: e.clientY })
        }
        window.addEventListener('pointermove', vo.windowPointermove, false)

        //windowPointerup, 與pointercancel共用, 只解鎖不定值(cancel之座標不可信)
        vo.windowPointerup = (e) => {

            //check
            if (!vo.curTrackDown) {
                return
            }

            //check, 非同一指標放開時不得終止本次拖曳
            if (vo.curPointerId !== null && e.pointerId !== undefined && e.pointerId !== vo.curPointerId) {
                return
            }

            vo.freeTrack()
        }
        window.addEventListener('pointerup', vo.windowPointerup, false)
        window.addEventListener('pointercancel', vo.windowPointerup, false)

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //clear
        if (vo.das) {
            vo.das.clear()
        }

        //freeTrack, 宿主WColorSelectPanel與WPopup皆以v-if切換, 可能於拖曳中被銷毀
        vo.freeTrack()

        //removeEventListener, 事件名須與註冊端一致, 否則監聽永遠移不掉
        window.removeEventListener('pointermove', vo.windowPointermove, false)
        window.removeEventListener('pointerup', vo.windowPointerup, false)
        window.removeEventListener('pointercancel', vo.windowPointerup, false)

    },
    computed: {

        changeParam: function() {
            // console.log('computed changeParam')

            let vo = this

            //ratio
            let r = 0
            try {
                r = (vo.value - vo.valueMin) / (vo.valueMax - vo.valueMin)
            }
            catch (err) {}

            //limitRatio
            r = vo.limitRatio(r)

            //rt
            let rt = vo.tickRatio(r)

            //save
            vo.r = r
            vo.rt = rt

            return ''
        },

        heightCir: function() {
            let vo = this
            return vo.sliderSize
        },

        widthCir: function() {
            let vo = this
            return vo.heightCir
        },

        effecting: function() {
            //console.log('computed effecting')

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //b
            let b = vo.hoverTrans || vo.dragTrans

            if (b) {

                //showPopper
                vo.showPopper()

            }
            else {

                //hidePopper
                vo.hidePopper()

                //同步
                vo.r = vo.rt

            }

            return b
        },

        progWidth: function() {
            let vo = this
            return vo.panelWidth - vo.sliderSize
        },

        useProgBorderRadius: function() {
            let vo = this
            return `border-radius:${vo.progBorderRadius}px;`
        },

        effProgColor: function() {
            let vo = this
            return convertColor(vo.progColor)
        },

        effProgColorDisabled: function() {
            let vo = this
            return convertColor(vo.progColorDisabled)
        },

        useProgColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effProgColorDisabled
            }
            return vo.effProgColor
        },

        effProgBackgroundColor: function() {
            let vo = this
            return convertColor(vo.progBackgroundColor)
        },

        effProgBackgroundColorDisabled: function() {
            let vo = this
            return convertColor(vo.progBackgroundColorDisabled)
        },

        useProgBackgroundColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effProgBackgroundColorDisabled
            }
            return vo.effProgBackgroundColor
        },

        effSliderBackgroundColor: function() {
            let vo = this
            return convertColor(vo.sliderBackgroundColor)
        },

        effSliderBackgroundColorHover: function() {
            let vo = this
            return convertColor(vo.sliderBackgroundColorHover)
        },

        effSliderBackgroundColorDisabled: function() {
            let vo = this
            return convertColor(vo.sliderBackgroundColorDisabled)
        },

        useSliderBackgroundColor: function() {
            let vo = this
            if (!vo.editable) {
                return vo.effSliderBackgroundColorDisabled
            }
            if (vo.effecting) {
                return vo.effSliderBackgroundColorHover
            }
            return vo.effSliderBackgroundColor
        },

        useTooltipBorderRadius: function() {
            //console.log('computed useTooltipBorderRadius')

            let vo = this

            if (isNumber(vo.tooltipBorderRadius)) {
                return `border-radius:${vo.tooltipBorderRadius}px;`
            }
            return ''
        },

        useTooltipTextFontSize: function() {
            let vo = this
            let s = vo.tooltipTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTooltipTextColor: function() {
            //console.log('computed useTooltipTextColor')

            let vo = this

            return convertColor(vo.tooltipTextColor)
        },

        useTooltipBackgroundColor: function() {
            //console.log('computed useTooltipBackgroundColor')

            let vo = this

            return convertColor(vo.tooltipBackgroundColor)
        },

        valueDig: function() {
            // console.log('computed valueDig')

            let vo = this

            //t
            let t = (vo.rt) * (vo.valueMax - vo.valueMin) + vo.valueMin

            //dig
            let c = dig(t, vo.valueDecimal)

            return c
        },

    },
    methods: {

        resizePanel: function(msg) {
            //console.log('methods resizePanel', msg)

            let vo = this

            //update
            vo.panelWidth = msg.snew.offsetWidth
            vo.panelHeight = msg.snew.offsetHeight

            // //emit
            // vo.$emit('resize', msg)

        },

        limitRatio: function(r) {
            // console.log('methods limitRatio', r)

            // let vo = this

            r = Math.min(r, 1)
            r = Math.max(r, 0)

            return r
        },

        tickRatio: function(r) {
            // console.log('methods tickRatio', r)

            let vo = this

            //rt
            let rt = 0
            try {

                //rtk
                let rng = vo.valueMax - vo.valueMin
                let rtk = vo.valueStep / rng

                //round
                let i = round(r / rtk)

                //rt
                rt = i * rtk
                // console.log('r', r, 'rt', rt)

            }
            catch (err) { }


            return rt
        },

        dragBar: function(msg) {
            // console.log('methods dragBar', msg)

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //r
            let bd = vo.$el.getBoundingClientRect()
            let x = msg.clientX - vo.sliderSize / 2
            let w = vo.progWidth //vo.$el.offsetWidth
            let r = 0
            if (w > 0) {
                r = (x - bd.left) / w //clientX需扣除元件的left位置
            }

            //limitRatio
            r = vo.limitRatio(r)
            // console.log(vo.r, 'r', r)

            //rt
            let rt = vo.tickRatio(r)

            //save
            vo.r = r
            vo.rt = rt

            //v
            let v = cdbl(vo.valueDig)

            //updatePopper
            vo.updatePopper()

            //emit
            vo.$emit('input', v)

        },

        pressBar: function() {
            let vo = this
            vo.dragTrans = true
        },

        freeBar: function() {
            let vo = this
            vo.dragTrans = false
        },

        pointerdownRow: function(e) {
            let vo = this

            //check, 唯讀時不得定值
            if (!vo.editable) {
                return
            }

            //check, 僅主鍵生效, 中鍵與右鍵不得定值
            if (e.button !== 0) {
                return
            }

            //check, 拖曳中不接受第二個指標接手
            if (vo.curTrackDown) {
                return
            }

            //check, 按於拖曳鈕上時交由das之鈕通道處理, 本通道不得定值, 否則「按住鈕不動即放開」會跳值
            //須用contains不可用===, 因按於鈕中心時target為divBar內之透明圓子節點, 按於20x20方框四角時target才為divBar自身
            let divBar = vo.$refs.divBar
            if (divBar && divBar.contains(e.target)) {
                return
            }

            //check, 可視圓以rt定位而感應方塊divBar以r定位, 兩者於rt與r不一致時會錯開而露出, 故一併排除
            let divTriggerOuter = vo.$refs.divTriggerOuter
            if (divTriggerOuter && divTriggerOuter.contains(e.target)) {
                return
            }

            //save, 本通道自有狀態
            vo.curTrackDown = true
            vo.curPointerId = (e.pointerId !== undefined) ? e.pointerId : null
            vo.curPointerType = (e.pointerType !== undefined) ? e.pointerType : 'mouse'

            //dragTrans, 與鈕通道之pressBar同語義, 使提示窗於軌道拖曳時亦顯示, 並讓放開時effecting之else分支把r收斂回rt
            vo.dragTrans = true

            //按下即定值, 與原生input[type=range]及各家滑桿一致
            vo.dragBar({ clientX: e.clientX, clientY: e.clientY })

            //此處不得呼叫preventDefault與stopPropagation:
            //  preventDefault會連帶抑制相容mousedown, 使das之鈕通道起手失效
            //  stopPropagation會使buildPopper掛於window之mousedown收不到事件而殘留舊旗標
            //要擋捲動一律靠touch-action

        },

        freeTrack: function() {
            let vo = this

            //解鎖與清pointerId須成對, 因瀏覽器會重用觸控之pointerId
            vo.curTrackDown = false
            vo.curPointerId = null
            vo.curPointerType = ''

            //dragTrans, 與鈕通道之freeBar同語義
            vo.dragTrans = false

        },

        contextmenuRow: function(e) {
            let vo = this

            //check, 僅於觸控或觸控筆拖曳中抑制長按選單, 因長按叫出選單會發出pointercancel而中斷拖曳;
            //滑鼠右鍵選單維持既有行為; contextmenu為獨立事件, 抑制它不會連帶抑制mousedown/mouseup, 故不影響WPopup之點擊外部關閉
            if (vo.curTrackDown && vo.curPointerType !== '' && vo.curPointerType !== 'mouse') {
                e.preventDefault()
            }

        },

        showPopper: function(from) {
            // console.log('methods showPopper', from)

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //divTrigger
            let divTrigger = get(vo, '$refs.divTrigger', null)
            if (divTrigger === null) {
                return //console.log('無法找到點擊區元素')
            }

            //divContent
            let divContent = get(vo, '$refs.divContent', null)

            //check
            if (divContent === null) {
                return //console.log('無法找到顯示元素')
            }

            //@popperjs/core 2.x
            let opt = {
                strategy: 'fixed', //盡量使用'fixed'而不用'absolute', 否則位於多層dialog或多層drawer內popup顯示會異常
                placement: 'top', //預設top, 因arrow不好給故僅提供top
                modifiers: [
                    // preventOverflow,
                    // computeStyles,
                    // {
                    //     name: 'computeStyles',
                    //     options: {
                    //         gpuAcceleration: false, //預設true, 可關閉GPU加速
                    //     },
                    // },
                    arrow,
                    {
                        name: 'arrow',
                        options: {
                            padding: 5,
                        },
                    },
                    flip,
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
                        },
                    },
                    offset,
                    {
                        name: 'offset',
                        options: {
                            // offset: [0, vo.tooltipPlacementDist], //[Skidding, Distance]
                            // offset: [0, 5], //因popperjs會自動調位置, 故得通過callback函數處理指定位置時的偏移量
                            offset: ({ placement, reference, popper }) => {
                                // console.log('offset', placement, reference, popper, vo.tooltipPlacementDist)
                                // if (placement === 'bottom-start' || placement === 'bottom' || placement === 'bottom-end') {
                                //     return [0, vo.tooltipPlacementDist]
                                // }
                                // else if (placement === 'top-start' || placement === 'top' || placement === 'top-end') {
                                //     return [0, vo.tooltipPlacementDist]
                                // }
                                // else if (placement === 'left-start' || placement === 'left' || placement === 'left-end') {
                                //     return [0, vo.tooltipPlacementDist]
                                // }
                                // else if (placement === 'right-start' || placement === 'right' || placement === 'right-end') {
                                //     return [0, vo.tooltipPlacementDist]
                                // }
                                // else {
                                //     return []
                                // }
                                return [0, vo.tooltipPlacementDist] //[Skidding, Distance]
                            },
                        },
                    },
                    hide,
                ],
            }
            vo.popperInstance = createPopper(divTrigger, divContent, opt)
            // console.log('popperInstance', vo.popperInstance)

        },

        updatePopper: function(msg) {
            //console.log('methods updatePopper', msg)

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //update
            if (vo.popperInstance) {
                vo.popperInstance.update()
            }

            // //emit
            // vo.$emit('resize', msg)

        },

        hidePopper: function(from) {
            // console.log('methods hidePopper', from, this.mmkey)

            let vo = this

            //check
            if (vo.popperInstance) {

                //destroy
                vo.popperInstance.destroy()
                vo.popperInstance = null

            }

        },

    },
}
</script>

<style scoped>
.ts {
    transition:all 0.3s;
}
.bs {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}
.WPopperFix[data-popper-reference-hidden] {
    visibility: hidden;
    pointer-events: none;
}
.arrow,
.arrow::before {
    position: absolute;
    width: 5px;
    height: 5px;
    background: inherit;
}
.arrow {
    visibility: hidden;
}
.arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
}
/* .arrow::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
} */
</style>
