<template>
    <v-dialog
        :changeParam="changeParam"
        scrollable
        :persistent="hasCloseBtn"
        :max-width="maxWidth"
        :fullscreen="fullscreen"
        :hide-overlay="fullscreen"
        v-resize="changeSize"
        v-model="showTrans"
        @click:outside="clickClose(true)"
    >
        <v-card v-if="show">

            <v-toolbar
                ref="tb"
                :color="headerBackgroundColor"
                v-domresize
                @domresize="resizeToolbar"
            >

                <!-- v-dialog會自動取第1個元素setFocus, 開啟時會讓icon的tooltip被觸發, 但dialog尺寸又繼續變更時, 會導致tooltip無法跟隨而卡在中央, 故提供隱藏input元素供設定為焦點 -->
                <input type="text" style="width:0px; height:0px">

                <!-- v-toolbar於IE11會因為內容區高度不夠時, 因使用display:flex導致自己撐開, 得通過強制設定max-height處理 -->

                <div style="margin-right:10px;">
                    <v-icon :color="headerIconColor" >
                        <template v-if="!icon">{{mdiCheckerboard}}</template>
                        <template v-else>{{icon}}</template>
                    </v-icon>
                </div>

                <v-toolbar-title>
                    <span :style="`color:${useHeaderTextColor}`">{{title}}</span>
                </v-toolbar-title>

                <!-- 記得slot name為小寫, 若使用駝峰於瀏覽器端會需要轉小寫, 但於vue-cli無法使用小寫識別得要用駝峰, 故統一都小寫較安全 -->
                <slot name="header-left"></slot>

                <v-spacer></v-spacer>

                <!-- 記得slot name為小寫, 若使用駝峰於瀏覽器端會需要轉小寫, 但於vue-cli無法使用小寫識別得要用駝峰, 故統一都小寫較安全 -->
                <slot name="header-right"></slot>

                <template v-for="(btn,kbtn) in headerBtns">

                    <WButtonCircle
                        style="margin-left:5px;"
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
                        style="margin-left:5px;"
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
                        style="margin-left:5px;"
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

            </v-toolbar>

            <v-card-text
                :style="`padding:0px; color:${useContentTextColor}; background:${useContentBackgroundColor};`"
                v-domresize
                @domresize="resizePanel"
            >
                <slot name="content"></slot>
            </v-card-text>

        </v-card>

    </v-dialog>
</template>

<script>
import { mdiCheckCircle, mdiClose, mdiCheckerboard } from '@mdi/js'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import cint from 'wsemi/src/cint.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import domResize from '../js/domResize.mjs'
import WButtonCircle from './WButtonCircle.vue'


/**
 * @vue-prop {Boolean} [show=false] 輸入是否顯示，預設false
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [title=''] 輸入彈窗標題字串，預設''
 * @vue-prop {String} [headerIconColor='white'] 輸入彈窗標題列圖標顏色字串，預設'white'
 * @vue-prop {String} [headerTextColor='white'] 輸入彈窗標題列文字顏色字串，預設'white'
 * @vue-prop {String} [headerBackgroundColor='light-blue darken-3'] 輸入彈窗標題列背景顏色字串，預設'light-blue darken-3'
 * @vue-prop {Array} [headerBtns=[]] 輸入彈窗標題列自訂按鈕陣列，預設[]，各元素為物件，需有'icon'欄位值為字串、'tooltip'欄位值為字串、'evName'欄位值為字串，其中按鈕被click時會觸發彈窗的clickBtns事件(監聽@click-btns)，並回傳指定headerBtns內物件資訊供識別之用
 * @vue-prop {Boolean} [hasSaveBtn=true] 輸入是否顯示儲存按鈕，預設true
 * @vue-prop {String} [saveBtnTooltip='Save'] 輸入儲存按鈕的提示文字字串，預設'Save'
 * @vue-prop {Boolean} [hasCloseBtn=true] 輸入是否顯示關閉按鈕，預設true
 * @vue-prop {String} [closeBtnTooltip='Close'] 輸入關閉按鈕的提示文字字串，預設'Close'
 * @vue-prop {Boolean} [closeWithInterceptor=false] 輸入是否通過攔截器來決定是否進行關閉，此處之攔截器係用promise來控制，當使用者點擊關閉時可先行確認或提示。當closeWithInterceptor=true時，於click-close事件所接收物件資訊中的pm，使用pm.resolve()則代表確定關閉，反之pm.reject()則取消關閉事件，預設false
 * @vue-prop {Number} [maxWidth=1000] 輸入彈窗最大寬度，單位為px，預設1000，當裝置寬度小於彈窗最大寬度，則彈窗改為全螢幕顯示，若給予maxWidth<=0則代表全螢幕
 * @vue-prop {String} [contentTextColor='black'] 輸入內容文字顏色字串，預設'black'
 * @vue-prop {String} [contentBackgroundColor='transparent'] 輸入內容背景顏色字串，預設'transparent'
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WButtonCircle,
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        headerIconColor: {
            type: String,
            default: 'white',
        },
        headerTextColor: {
            type: String,
            default: 'white',
        },
        headerBackgroundColor: {
            type: String,
            default: 'light-blue darken-3',
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
        maxWidth: {
            type: Number,
            default: 1000,
        },
        contentTextColor: {
            type: String,
            default: 'black',
        },
        contentBackgroundColor: {
            type: String,
            default: 'transparent',
        },
    },
    data: function() {
        return {
            get,

            mdiCheckCircle,
            mdiClose,
            mdiCheckerboard,
            showTrans: null,
            fullscreen: false,

            toolbarHeight: 0,
            panelScrollHSize: 0,
            panelWidth: 0,
            panelHeight: 0,
            panelHeightMax: 0,

            resizeMsgTemp: null,

        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //showTrans
            vo.showTrans = vo.show

            return ''
        },

        useHeaderTextColor: function () {
            //console.log('computed useHeaderTextColor')

            let vo = this

            return color2hex(vo.headerTextColor)
        },

        useContentTextColor: function () {
            //console.log('computed useContentTextColor')

            let vo = this

            return color2hex(vo.contentTextColor)
        },

        useContentBackgroundColor: function () {
            //console.log('computed useContentBackgroundColor')

            let vo = this

            return color2hex(vo.contentBackgroundColor)
        },

    },
    methods: {

        resizeToolbar: function(msg) {
            //console.log('methods resizeToolbar', msg)

            let vo = this

            //設定toolbar最高高度, 因v-toolbar會於v-dialog全螢幕時自動撐開, 改flex又於IE11很多問題, 故直接於resize強制設定maxHeight
            let tb = get(vo, '$refs.tb.$el')
            if (tb) {

                //取得vuetify給予toolbar的高度
                let toolbarHeight = tb.style.height

                //取得高度數字
                toolbarHeight = cint(toolbarHeight.replace('px', ''))

                //設定最高高度, 因可能dialog初始化與動畫階段沒辦法設定, 或是開發階段重新熱加載而使樣式重設, 故需放在檢核之前每次都要設定
                tb.style.maxHeight = `${toolbarHeight}px`

                //check
                if (vo.toolbarHeight === toolbarHeight) {
                    return
                }

                //toolbarHeight
                vo.toolbarHeight = toolbarHeight

                //triggerResize
                vo.triggerResize('resizeToolbar')

            }

        },

        resizePanel: function(msg) {
            // console.log('methods resizePanel', msg)

            let vo = this

            //check
            if (msg.snew.offsetWidth === 0 || msg.snew.offsetHeight === 0) {
                return
            }

            //check
            if (vo.panelWidth === msg.snew.offsetWidth && vo.panelHeight === msg.snew.offsetHeight) {
                return
            }

            //update
            vo.panelWidth = msg.snew.offsetWidth
            vo.panelHeight = msg.snew.offsetHeight
            vo.panelScrollHSize = msg.snew.offsetHeight - msg.snew.clientHeight

            //changeSize, 因dialog的resize為window resize, 通常不會被呼叫故無法計算panelHeightMax, 故需額外呼叫
            vo.changeSize()

            //triggerResize
            vo.triggerResize('resizePanel')

        },

        changeSize: function() {
            //console.log('methods changeSize')

            let vo = this

            //fullscreen
            if (vo.maxWidth <= 0) {
                vo.fullscreen = true
            }
            else {
                if (vo.maxWidth > window.innerWidth) {
                    vo.fullscreen = true
                }
                else {
                    vo.fullscreen = false
                }
            }

            //panelHeightMax
            let r = 0.9 //vuetify預設非全螢幕時最大dialog高度為90%
            let panelHeightMax = 0
            if (vo.fullscreen) {
                panelHeightMax = window.innerHeight - vo.toolbarHeight
            }
            else {
                panelHeightMax = r * window.innerHeight - vo.toolbarHeight
            }
            panelHeightMax -= vo.panelScrollHSize //減去橫向捲軸高度

            //check
            if (vo.panelHeightMax === panelHeightMax) {
                return
            }

            //update
            vo.panelHeightMax = panelHeightMax

            //triggerResize
            vo.triggerResize('changeSize')

        },

        triggerResize: function(from) {
            //console.log('methods triggerResize', from)

            let vo = this

            //check
            if (!vo.showTrans) {
                return
            }

            //check
            if (vo.toolbarHeight === 0 || vo.panelWidth === 0 || vo.panelHeight === 0 || vo.panelHeightMax === 0) {
                return
            }

            //msg
            let msg = {
                toolbarHeight: vo.toolbarHeight,
                panelWidth: vo.panelWidth,
                panelHeight: vo.panelHeight,
                panelHeightMax: vo.panelHeightMax,
                panelScrollHSize: vo.panelScrollHSize,
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
            //console.log('methods clickClose', outside)

            let vo = this

            //check
            if (vo.hasCloseBtn && outside) {
                return
            }

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

                        //hide
                        vo.showTrans = false

                        //$nextTick
                        vo.$nextTick(() => {

                            //emit
                            vo.$emit('update:show', vo.showTrans)

                        })

                    })
                    .catch((msg) => { //取消關閉
                        //console.log('pm catch', msg)
                    })


            }
            else {

                //hide
                vo.showTrans = false

                //$nextTick
                vo.$nextTick(() => {

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
/* 因v-toolbar使用contain:layout, 以及v-toolbar__content使用z-index:0, 導致v-toolbar的內容物展示低於v-card, 若v-toolbar內使用popup會被v-card內容物遮, 故需覆寫v-toolbar與v-toolbar__content的css屬性 */
::v-deep .v-toolbar {
    contain: none;
}
::v-deep .v-toolbar__content {
    z-index: inherit;
}
/* 因v-card內文字大小與間距改小, 故強制還原成inherit */
::v-deep .v-card__text {
    line-height: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
}
/* 因v-card內文字顏色變淡, 故強制還原成inherit */
::v-deep .theme--light.v-card > v-card__text {
    color: inherit;
}
</style>
