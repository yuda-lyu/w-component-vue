<template>
    <div
        style=""
        :changeParam="changeParam"
    >

        <!-- 屏蔽層通過overscroll-behavior:contain吃掉捲軸或平板拖曳事件, 避免觸發dialog外部捲軸或拖曳事件 -->
        <!-- 快速點擊陰影會變成文字選擇, 故使用user-select:none屏蔽 -->
        <div
            ref="divShield"
            :style="`
                position:fixed; left:0px; top:0px;
                width:calc( 100vw + ${nativeBarWidth+1}px ); height:100vh; overflow-x:hidden; overflow-y:scroll;
                z-index:${useDialogZIndex};
                overscroll-behavior:contain;
                user-select:none;
            `"
            v-if="showTrans"
        >

            <!-- 屏蔽層內之撐開層, 額外撐開高度使用nativeBarWidth+1 -->
            <div
                :style="`
                    width:100vw; height:calc( 100vh + ${nativeBarWidth+1}px );
                `"
            >

                <!-- overlay通過sticky固定, 避免屏蔽層捲動而位置出現改變 -->
                <div
                    ref="divOverlay"
                    :style="`
                        position:sticky; top:0px;
                        width:100vw; height:100vh;
                        display:flex; align-items:center; justify-content:center;
                        ${overlayStyleShow}
                        background:${useOverlayColor};
                    `"
                    tabindex="0"
                    @click="clickOutside"
                >

                    <!-- 因toolbar陰影要顯示到content上, content給予background會遮蔽陰影, 故改由視窗本體提供content的background -->
                    <!-- 因使用user-select:none屏蔽快速點擊, 故得於divPanel處恢復user-select:text提供選擇文字功能 -->
                    <div
                        ref="divPanel"
                        :style="`
                            transition:all 100ms ease-out;
                            ${panelStyleShow}
                            ${panelStylePlus}
                            ${useWidth} ${useHeight} ${useBorder}
                            background:${useContentBackgroundColor};
                            ${usePanelShadowStyle}
                            user-select:text;
                        `"
                        v-domresize
                        @domresize="resizePanel"
                    >

                        <slot
                            name="panel"
                            :panelWidth="panelWidth"
                            :headerHeight="headerHeight"
                            :contentHeight="contentHeight"
                            :contentHeightMax="contentHeightMax"
                            :footerHeight="footerHeight"
                        >

                            <!-- 標題區 -->
                            <div
                                ref="divHeader"
                                :style="`
                                    background:${useHeaderBackgroundColor};
                                    ${useHeaderShadowStyle}
                                `"
                            >

                                <slot
                                    name="header"
                                    :panelWidth="panelWidth"
                                    :headerHeight="headerHeight"
                                    :contentHeight="contentHeight"
                                    :contentHeightMax="contentHeightMax"
                                    :footerHeight="footerHeight"
                                >

                                    <div
                                        :style="`
                                            display:flex; align-items:center; padding:0px 12px;
                                            height:${headerHeight}px; max-height:${headerHeight}px; overflow:hidden;
                                        `"
                                    >

                                        <div style="padding-right:10px;">

                                            <WIcon
                                                :icon="useHeaderIcon"
                                                :color="headerIconColor"
                                            ></WIcon>

                                        </div>

                                        <div style="padding-right:5px;">
                                            <span :style="`${useTitleFontSize} color:${useTitleColor}; white-space:nowrap;`">
                                                {{title}}
                                            </span>
                                        </div>

                                        <!-- 記得slot name為小寫, 若使用駝峰於瀏覽器端會需要轉小寫, 但於vue-cli無法使用小寫識別得要用駝峰, 故統一都小寫較安全 -->
                                        <slot name="header-left"></slot>

                                        <div style="width:100%;"></div>

                                        <!-- 記得slot name為小寫, 若使用駝峰於瀏覽器端會需要轉小寫, 但於vue-cli無法使用小寫識別得要用駝峰, 故統一都小寫較安全 -->
                                        <slot name="header-right"></slot>

                                        <template v-for="(btn,kbtn) in headerBtns">

                                            <WButtonCircle
                                                style="padding-left:5px;"
                                                :key="kbtn"
                                                :icon="get(btn,'icon')"
                                                :shadow="false"
                                                :paddingStyle="{v:9,h:9}"
                                                :loadingColor="get(btn,'iconColor') || headerIconColor"
                                                :iconColor="get(btn,'iconColor') || headerIconColor"
                                                :iconColorHover="get(btn,'iconColor') || headerIconColor"
                                                :iconColorFocus="get(btn,'iconColor') || headerIconColor"
                                                :backgroundColor="get(btn,'backgroundColor') || 'transparent'"
                                                :backgroundColorHover="'rgba(255, 255, 255, 0.1)'"
                                                :backgroundColorFocus="'rgba(255, 255, 255, 0.3)'"
                                                :rippleColor="'rgba(255, 255, 255, 0.4)'"
                                                :tooltip="get(btn,'tooltip')"
                                                @click="clickBtns(btn)"
                                            ></WButtonCircle>

                                        </template>

                                        <template v-if="hasSaveBtn">
                                            <WButtonCircle
                                                style="padding-left:5px;"
                                                :icon="mdiCheckCircle"
                                                :shadow="false"
                                                :paddingStyle="{v:9,h:9}"
                                                :loadingColor="headerIconColor"
                                                :iconColor="headerIconColor"
                                                :iconColorHover="headerIconColor"
                                                :iconColorFocus="headerIconColor"
                                                :backgroundColor="'transparent'"
                                                :backgroundColorHover="'rgba(255, 255, 255, 0.1)'"
                                                :backgroundColorFocus="'rgba(255, 255, 255, 0.3)'"
                                                :rippleColor="'rgba(255, 255, 255, 0.4)'"
                                                :tooltip="saveBtnTooltip"
                                                :promiseUnlock="true"
                                                @click="clickSave"
                                            ></WButtonCircle>
                                        </template>

                                        <template v-if="hasCloseBtn">
                                            <WButtonCircle
                                                style="padding-left:5px;"
                                                :icon="mdiClose"
                                                :shadow="false"
                                                :paddingStyle="{v:9,h:9}"
                                                :loadingColor="headerIconColor"
                                                :iconColor="headerIconColor"
                                                :iconColorHover="headerIconColor"
                                                :iconColorFocus="headerIconColor"
                                                :backgroundColor="'transparent'"
                                                :backgroundColorHover="'rgba(255, 255, 255, 0.1)'"
                                                :backgroundColorFocus="'rgba(255, 255, 255, 0.3)'"
                                                :rippleColor="'rgba(255, 255, 255, 0.4)'"
                                                :tooltip="closeBtnTooltip"
                                                @click="clickClose(false)"
                                            ></WButtonCircle>
                                        </template>

                                    </div>

                                </slot>

                            </div>

                            <!-- 內容區, 因content給予background會遮蔽toolbar的陰影, 故改由視窗本體提供content的background, 此處background不使用 -->
                            <div
                                ref="divContent"
                                :style="`
                                    color:${useContentTextColor};
                                    ${useContentHeight}
                                    overflow-y:auto;
                                `"
                                v-domresize
                                @domresize="resizeContent"
                            >

                                <slot
                                    name="content"
                                    :panelWidth="panelWidth"
                                    :headerHeight="headerHeight"
                                    :contentHeight="contentHeight"
                                    :contentHeightMax="contentHeightMax"
                                    :footerHeight="footerHeight"
                                ></slot>

                            </div>

                            <!-- 下方區 -->
                            <div
                                ref="divFooter"
                                :style="`
                                `"
                            >

                                <slot
                                    name="footer"
                                    :panelWidth="panelWidth"
                                    :headerHeight="headerHeight"
                                    :contentHeight="contentHeight"
                                    :contentHeightMax="contentHeightMax"
                                    :footerHeight="footerHeight"
                                ></slot>

                            </div>

                        </slot>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { mdiCheckCircle, mdiClose, mdiCheckerboard } from '@mdi/js'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import replace from 'wsemi/src/replace.mjs'
import domIsClientXYIn from 'wsemi/src/domIsClientXYIn.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import domResize from '../js/domResize.mjs'
import domZIndex from '../js/domZIndex.mjs'
import WButtonCircle from './WButtonCircle.vue'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Boolean} [show=false] 輸入是否顯示布林值，預設false
 * @vue-prop {Boolean} [isModal=true] 輸入是否為強制模式布林值，預設true
 * @vue-prop {Number} [dialogZIndex=2000] 輸入彈窗使用z-index數字，預設2000
 * @vue-prop {Boolean} [fullscreen=false] 輸入是否為全螢幕顯示布林值，若為true則忽略minWidth與maxWidth設定，預設false
 * @vue-prop {Number} [minWidth=200] 輸入彈窗最小寬度數值，單位為px，預設200，當裝置寬度小於彈窗最小寬度時則使用裝置寬度
 * @vue-prop {Number} [maxWidth=1000] 輸入彈窗最大寬度數值，單位為px，預設1000
 * @vue-prop {Number} [ratioHeightMax=0.9] 輸入彈窗最大允許高度比例數值，代表彈窗高度相對於顯示區高度比例之最大值，預設0.9
 * @vue-prop {Boolean} [autoFullscreenWhenNarrow=true] 輸入當裝置寬度小於maxWidth時，是否強制改為全螢幕顯示布林值，預設true
 * @vue-prop {String} [overlayColor='rgba(0,0,0,0.3)'] 輸入浮動顯示時抽屜外側陰影層背景顏色字串，預設'rgba(0,0,0,0.3)'
 * @vue-prop {Number} [panelBorderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {Boolean} [panelShadow=true] 輸入彈窗標題區是否顯示陰影布林值，預設true
 * @vue-prop {String} [panelShadowStyle=''] 輸入彈窗標題區陰影顏色字串，預設值詳見props
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [title=''] 輸入彈窗標題字串，預設''
 * @vue-prop {String} [titleColor='white'] 輸入彈窗標題區文字顏色字串，預設'white'
 * @vue-prop {String} [titleFontSize='1.3rem'] 輸入彈窗標題字型大小字串，預設'1.3rem'
 * @vue-prop {Number} [headerHeight=56] 輸入標題區高度，單位為px，預設56
 * @vue-prop {String} [headerIconColor='white'] 輸入彈窗標題區圖標顏色字串，預設'white'
 * @vue-prop {String} [headerBackgroundColor='light-blue darken-3'] 輸入彈窗標題區背景顏色字串，預設'light-blue darken-3'
 * @vue-prop {Boolean} [headerShadow=true] 輸入彈窗標題區是否顯示陰影布林值，預設true
 * @vue-prop {String} [headerShadowStyle=''] 輸入彈窗標題區陰影顏色字串，預設值詳見props
 * @vue-prop {Array} [headerBtns=[]] 輸入彈窗標題區自訂按鈕陣列，預設[]，各元素為物件，需有'icon'欄位值為字串、'tooltip'欄位值為字串、'evName'欄位值為字串，其中按鈕被click時會觸發彈窗的clickBtns事件(監聽@click-btns)，並回傳指定headerBtns內物件資訊供識別之用
 * @vue-prop {Boolean} [hasSaveBtn=true] 輸入是否顯示儲存按鈕，預設true
 * @vue-prop {String} [saveBtnTooltip='Save'] 輸入儲存按鈕的提示文字字串，預設'Save'
 * @vue-prop {Boolean} [hasCloseBtn=true] 輸入是否顯示關閉按鈕，預設true
 * @vue-prop {String} [closeBtnTooltip='Close'] 輸入關閉按鈕的提示文字字串，預設'Close'
 * @vue-prop {Boolean} [closeWithInterceptor=false] 輸入是否通過攔截器來決定是否進行關閉，此處之攔截器係用promise來控制，當使用者點擊關閉時可先行確認或提示。當closeWithInterceptor=true時，於click-close事件所接收物件資訊中的pm，使用pm.resolve()則代表確定關閉，反之pm.reject()則取消關閉事件，預設false
 * @vue-prop {String} [contentTextColor='black'] 輸入內容文字顏色字串，預設'black'
 * @vue-prop {String} [contentBackgroundColor='#fff'] 輸入內容背景顏色字串，預設'#fff'
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WButtonCircle,
        WIcon,
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        isModal: {
            type: Boolean,
            default: true,
        },
        dialogZIndex: {
            type: Number,
            default: 2000,
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
        minWidth: {
            type: Number,
            default: 200,
        },
        maxWidth: {
            type: Number,
            default: 1000,
        },
        ratioHeightMax: {
            type: Number,
            default: 0.9,
        },
        autoFullscreenWhenNarrow: {
            type: Boolean,
            default: true,
        },
        overlayColor: {
            type: String,
            default: 'rgba(0,0,0,0.3)',
        },
        panelBorderRadius: {
            type: Number,
            default: 4,
        },
        panelShadow: {
            type: Boolean,
            default: true,
        },
        panelShadowStyle: {
            type: String,
            default: '0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%)',
        },
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        titleColor: {
            type: String,
            default: 'white',
        },
        titleFontSize: {
            type: String,
            default: '1.3rem',
        },
        headerHeight: {
            type: Number,
            default: 56,
        },
        headerIconColor: {
            type: String,
            default: 'white',
        },
        headerBackgroundColor: {
            type: String,
            default: 'light-blue darken-3',
        },
        headerShadow: {
            type: Boolean,
            default: true,
        },
        headerShadowStyle: {
            type: String,
            default: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
        },
        headerBtns: {
            type: Array,
            default: () => [],
        },
        hasSaveBtn: {
            type: Boolean,
            default: true,
        },
        saveBtnTooltip: {
            type: String,
            default: 'Save',
        },
        hasCloseBtn: {
            type: Boolean,
            default: true,
        },
        closeBtnTooltip: {
            type: String,
            default: 'Close',
        },
        closeWithInterceptor: {
            type: Boolean,
            default: false,
        },
        contentTextColor: {
            type: String,
            default: 'black',
        },
        contentBackgroundColor: {
            type: String,
            default: '#fff',
        },
    },
    data: function() {
        return {
            get,

            // mmkey: null,
            mmkey: genID(), //beforeMount內無法變更data, mounted內會晚於computed, 故優先放於data生成
            // mmkey: (() => {
            //     let id = genID()
            //     console.log('data gen mmkey', id)
            //     return id
            // })(),
            zind: 0,

            mdiCheckCircle,
            mdiClose,
            mdiCheckerboard,

            nativeBarWidth: 16, //預設bar寬度, 先給大值避免初始化時會顯示原本bar條

            showTrans: false,

            fullscreenForce: false,

            overlayStyleShow: '',

            panelWidth: 0,
            panelHeight: 0,
            panelStyleShow: '',
            panelStylePlus: '',

            contentWidth: 0,
            contentHeight: 0,
            contentHeightMax: 0,
            contentScrollHSize: 0,
            useContentHeight: '',

            footerHeight: 0,

            resizeMsgTemp: null,
        }
    },
    computed: {

        changeParam: function () {
            // console.log('computed changeParam')

            let vo = this

            //showTrans
            vo.showTrans = vo.show
            // console.log('changeParam vo.showTrans', vo.showTrans)

            if (vo.showTrans) {
                // console.log('changeParam showTrans', vo.showTrans)

                //getLevel
                vo.zind = domZIndex.getLevel('dialog', vo.mmkey)
                // console.log('changeParam mmkey', vo.mmkey, 'getLevel zind', vo.zind)

                //showPanel
                vo.showPanel()

            }
            else {
                // console.log('changeParam showTrans', vo.showTrans)

                //destroyLevel
                domZIndex.destroyLevel('dialog', vo.mmkey)
                // console.log('changeParam mmkey', vo.mmkey, 'destroyLevel')

            }

            return ''
        },

        useDialogZIndex: function() {
            let vo = this
            let zind = vo.dialogZIndex + vo.zind
            return zind
        },

        useIsModal: function() {
            let vo = this
            // if (!vo.hasSaveBtn && !vo.hasCloseBtn) {
            //     return false
            // }
            return vo.isModal
        },

        useFullscreen: function() {
            let vo = this
            if (vo.fullscreen) {
                return true
            }
            return vo.fullscreenForce
        },

        useBorder: function() {
            let vo = this
            let c = ''
            if (!vo.useFullscreen) {
                c = `border-radius:${vo.panelBorderRadius}px; overflow:hidden;`
            }
            return c
        },

        useHeaderIcon: function() {
            let vo = this
            if (vo.icon) {
                return vo.icon
            }
            return mdiCheckerboard
        },

        useRatioHeight: function() {
            let vo = this
            if (vo.useFullscreen) {
                return 1
            }
            else {
                return vo.ratioHeightMax
            }
        },

        useWidth: function() {
            let vo = this
            if (vo.useFullscreen) {
                return `width:100vw; max-width:100vw;` //得要添加max-width, 否則transition無法偵測對應變更出現resize動畫
            }
            else {
                return `min-width:${vo.minWidth}px; max-width:${vo.maxWidth}px;`
            }
        },

        useHeight: function() {
            let vo = this
            let ch = ''
            if (vo.useFullscreen) {
                ch = 'height'
            }
            else {
                ch = 'max-height'
            }
            ch = `${ch}:${vo.useRatioHeight * 100}vh;`
            return ch
        },

        useOverlayColor: function() {
            let vo = this
            return color2hex(vo.overlayColor)
        },

        usePanelShadowStyle: function() {
            let vo = this
            if (!vo.panelShadow) {
                return ''
            }
            let s = replace(vo.panelShadowStyle, ';', '')
            return `box-shadow:${s};`
        },

        useTitleFontSize: function() {
            let vo = this
            let s = vo.titleFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTitleColor: function () {
            let vo = this
            return color2hex(vo.titleColor)
        },

        useHeaderBackgroundColor: function() {
            let vo = this
            return color2hex(vo.headerBackgroundColor)
        },

        useHeaderShadowStyle: function() {
            let vo = this
            if (!vo.headerShadow) {
                return ''
            }
            let s = replace(vo.headerShadowStyle, ';', '')
            return `box-shadow:${s};`
        },

        useContentTextColor: function () {
            let vo = this
            return color2hex(vo.contentTextColor)
        },

        useContentBackgroundColor: function () {
            let vo = this
            return color2hex(vo.contentBackgroundColor)
        },

    },
    methods: {

        resizePanel: function(msg) {
            // console.log('methods resizePanel', msg)

            let vo = this

            //update
            vo.panelWidth = msg.snew.offsetWidth
            vo.panelHeight = msg.snew.offsetHeight
            // console.log('vo.panelHeight', vo.panelHeight)

            //footerHeight
            let divFooter = get(vo, '$refs.divFooter')
            if (divFooter) {
                vo.footerHeight = divFooter.clientHeight
            }
            else {
                vo.footerHeight = 0
            }

            //fullscreenForce, 會影響useFullscreen與連帶影響useRatioHeight, 故得要放計算contentHeightMax之前
            vo.fullscreenForce = false
            if (vo.autoFullscreenWhenNarrow) {
                vo.fullscreenForce = vo.maxWidth >= window.innerWidth
            }

            //contentHeightMax, 因有使用useRatioHeight得要放在計算fullscreenForce之後
            vo.contentHeightMax = Math.max(window.innerHeight * vo.useRatioHeight - vo.headerHeight - vo.footerHeight, 0)
            // console.log('window.innerHeight',window.innerHeight)
            // console.log('window.innerHeight * vo.useRatioHeight',vo.useRatioHeight, window.innerHeight * vo.useRatioHeight)
            // console.log('vo.headerHeight',vo.headerHeight)
            // console.log('vo.footerHeight',vo.footerHeight)
            // console.log('vo.contentHeightMax',vo.contentHeightMax)
            if (vo.contentHeightMax === 0) { //若為0代表尚未初始化, 須不提供指定height自動撐開, 再重算height
                vo.useContentHeight = ''
            }
            else {
                vo.useContentHeight = `max-height:${vo.contentHeightMax}px;`
            }

            //nativeBarWidth
            let divDetect = get(vo, '$refs.divDetect')
            if (divDetect) {

                //save nativeBarWidth
                let w = divDetect.offsetWidth - divDetect.clientWidth
                if (vo.nativeBarWidth !== w) {
                    // console.log('resizePanel 需更新nativeBarWidth', w, '<-', vo.nativeBarWidth)
                    vo.nativeBarWidth = w
                }

            }

            //triggerResize
            vo.triggerResize('resizePanel')

        },

        resizeContent: function(msg) {
            // console.log('methods resizeContent', msg)

            let vo = this

            //update
            vo.contentWidth = msg.snew.offsetWidth
            vo.contentHeight = msg.snew.offsetHeight
            vo.contentScrollHSize = msg.snew.offsetHeight - msg.snew.clientHeight

        },

        showPanel: function() {
            // console.log('methods showPanel')

            let vo = this

            //延時
            let t = 200

            //顯示動畫
            vo.overlayStyleShow = `transition:all ${t}ms ease-out; opacity:0;`
            setTimeout(() => {
                vo.overlayStyleShow = `transition:all ${t}ms ease-out; opacity:1;`
            }, 1)
            setTimeout(() => {
                vo.overlayStyleShow = ''
            }, t)

            //顯示動畫
            vo.panelStyleShow = `transition:all ${t}ms ease-out; opacity:0; transform:scale(0.2);`
            setTimeout(() => {
                vo.panelStyleShow = `transition:all ${t}ms ease-out; opacity:1; transform:scale(1);`
            }, 1)
            setTimeout(() => {
                vo.panelStyleShow = ''
            }, t)

        },

        triggerResize: function(from) {
            //console.log('methods triggerResize', from)

            let vo = this

            //check
            if (!vo.showTrans) {
                return
            }

            //check
            if (vo.panelWidth === 0 || vo.panelHeight === 0) {
                return
            }

            //msg
            let msg = {
                panelWidth: vo.panelWidth,
                panelHeight: vo.panelHeight,
                // headerWidth: vo.panelWidth,
                headerHeight: vo.headerHeight,
                // contentWidth: vo.contentWidth,
                contentHeight: vo.contentHeight,
                contentHeightMax: vo.contentHeightMax,
                contentScrollHSize: vo.contentScrollHSize,
                // footerWidth: vo.panelWidth,
                footerHeight: vo.footerHeight,
            }

            //check
            if (isEqual(vo.resizeMsgTemp, msg)) {
                return
            }

            //update
            vo.resizeMsgTemp = msg

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('resize', cloneDeep(msg))

            })

        },

        clickOutside: function(ev) {
            // console.log('methods clickOutside', ev)

            let vo = this

            //check
            if (!vo.useIsModal) {
                //非強制模式, 直接隱藏

                //$nextTick
                vo.$nextTick(() => {

                    //hide
                    vo.showTrans = false //一定要放在nextTick內, 避免emit出去會先觸發change

                    //emit
                    vo.$emit('update:show', vo.showTrans)

                })

                return
            }

            //偵測點擊為彈窗區之外
            let b = false
            try {
                b = !vo.$refs.divPanel.contains(ev.target)
                // console.log('vo.$refs.divPanel',vo.$refs.divPanel)
                // console.log('ev.target',ev.target,ev)
                // console.log('contains',vo.$refs.divPanel.contains(ev.target))
            }
            catch (err) {}

            //若為點擊為彈窗區之外, 可能是按鈕表層虛擬層、ripple層或下拉選單彈窗內容區, 此可能用position定位而導致用contains檢測會為false, 故改用事件座標再檢測一次
            if (b) {
                try {
                    b = !domIsClientXYIn(ev.clientX, ev.clientY, vo.$refs.divPanel)
                    // console.log(`domIsClientXYIn(ev.clientX, ev.clientY, vo.$refs.divPanel)`,domIsClientXYIn(ev.clientX, ev.clientY, vo.$refs.divPanel))
                }
                catch (err) {}
            }

            //check, 確定點擊位於抽屜slot區之外
            if (b) {

                //放大比例
                let d = 20 //基本放大須20px
                let r = 1.02 //預設1.02
                if (vo.panelWidth > 0) {
                    r = (vo.panelWidth + d) / vo.panelWidth
                }
                // console.log('r', r)

                //延時
                let t = 100

                //顯示振動動畫
                vo.panelStylePlus = `transition:all ${t}ms; transform:scale(${r});`
                setTimeout(() => {
                    vo.panelStylePlus = `transition:all ${t}ms;`
                }, t)
                setTimeout(() => {
                    vo.panelStylePlus = '' //清除後還要再一次延時展示縮回動畫
                }, t * 2)

            }

        },

        clickBtns: function(msg) {
            //console.log('methods clickBtns', msg)

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click-btns', cloneDeep(msg))

            })

        },

        clickSave: function(msg) {
            //console.log('methods clickSave', msg)

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click-save', msg)

            })

        },

        clickClose: function(outside) {
            // console.log('methods clickClose', outside)

            let vo = this

            //check
            if (vo.hasCloseBtn && outside) {
                return
            }
            // console.log('vo.hasCloseBtn', vo.hasCloseBtn, 'outside', outside, 'vo.closeWithInterceptor', vo.closeWithInterceptor)

            //closeWithInterceptor
            if (vo.closeWithInterceptor) {

                //pm
                let pm = genPm()

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('click-close', { pm })

                })

                //pm
                pm
                    .then(() => { //確認關閉
                        //console.log('pm then')

                        //$nextTick
                        vo.$nextTick(() => {

                            //hide
                            vo.showTrans = false //一定要放在nextTick內, 避免emit出去會先觸發change

                            //emit
                            vo.$emit('update:show', vo.showTrans)

                        })

                    })
                    .catch((msg) => { //取消關閉
                        //console.log('pm catch', msg)
                    })


            }
            else {

                //$nextTick
                vo.$nextTick(() => {

                    //hide
                    vo.showTrans = false //一定要放在nextTick內, 避免emit出去會先觸發change

                    //emit
                    vo.$emit('update:show', vo.showTrans)

                    //emit
                    vo.$emit('click-close')

                })

            }

        },

    },
}
</script>

<style scoped>
</style>

