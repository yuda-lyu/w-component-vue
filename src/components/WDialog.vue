<template>
    <v-dialog
        :changeParam="changeParam"
        scrollable
        :persistent="hasCloseBtn"
        :max-width="widthMax"
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
                @domresize="resize"
            >

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
                        :iconColor="get(btn,'iconColor') || headerIconColor"
                        :backgroundColor="get(btn,'backgroundColor') || 'transparent'"
                        :tooltip="get(btn,'tooltip')"
                        @click="clickBtns(btn)"
                    ></WButtonCircle>

                </template>

                <template v-if="hasSaveBtn">
                    <WButtonCircle
                        style="margin-left:5px;"
                        :icon="mdiCheckCircle"
                        :shadow="false"
                        :iconColor="headerIconColor"
                        :tooltip="saveBtnTooltip"
                        @click="clickSave()"
                    ></WButtonCircle>
                </template>

                <template v-if="hasCloseBtn">
                    <WButtonCircle
                        style="margin-left:5px;"
                        :icon="mdiClose"
                        :shadow="false"
                        :iconColor="headerIconColor"
                        :tooltip="closeBtnTooltip"
                        @click="clickClose(false)"
                    ></WButtonCircle>
                </template>

            </v-toolbar>

            <v-card-text
                :style="`padding:0px; color:${useContentTextColor}; background:${useContentBackgroundColor};`"
            >
                <slot name="content"></slot>
            </v-card-text>

        </v-card>

    </v-dialog>
</template>

<script>
import { mdiCheckCircle, mdiClose, mdiCheckerboard } from '@mdi/js'
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import cint from 'wsemi/src/cint.mjs'
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
 * @vue-prop {String} [saveBtnTooltip='儲存'] 輸入儲存按鈕的提示文字字串，預設'儲存'
 * @vue-prop {Boolean} [hasCloseBtn=true] 輸入是否顯示關閉按鈕，預設true
 * @vue-prop {String} [closeBtnTooltip='關閉'] 輸入關閉按鈕的提示文字字串，預設'關閉'
 * @vue-prop {Number} [widthMax=1000] 輸入彈窗最大寬度，單位為px，預設1000，當裝置寬度小於彈窗最大寬度，則彈窗改為全螢幕顯示，若給予widthMax<=0則代表全螢幕
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
            default: '儲存',
        },
        hasCloseBtn: {
            type: Boolean,
            default: true,
        },
        closeBtnTooltip: {
            type: String,
            default: '關閉',
        },
        widthMax: {
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

        resize: function(msg) {
            //console.log('methods resize', msg)

            let vo = this

            //設定最高高度, 因v-toolbar會於v-dialog全螢幕時自動撐開, 改flex又於IE11很多問題, 故直接於resize強制設定maxHeight
            let tb = get(vo, '$refs.tb.$el')
            if (tb) {

                //取得vuetify給予toolbar的高度
                let ch = tb.style.height

                //取得高度數字
                ch = cint(ch.replace('px', ''))

                //設定最高高度
                tb.style.maxHeight = `${ch}px`

            }

        },

        changeSize: function() {
            //console.log('methods changeSize')

            let vo = this

            //fullscreen
            if (vo.widthMax <= 0) {
                vo.fullscreen = true
            }
            else {
                if (vo.widthMax > window.innerWidth) {
                    vo.fullscreen = true
                }
                else {
                    vo.fullscreen = false
                }
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

        clickSave: function() {
            //console.log('methods clickSave')

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click-save')

            })

        },

        clickClose: function(outside) {
            //console.log('methods clickClose', outside)

            let vo = this

            //check
            if (vo.hasCloseBtn && outside) {
                return
            }

            //hide
            vo.showTrans = false

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:show', vo.showTrans)

                //emit
                vo.$emit('click-close')

            })

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
