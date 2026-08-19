<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component
        ref="$self"
        :is="cmpName"
        :value="value"
        :height="height"
        :settings="settings"
        :keyHint="keyHint"
        :hintTimeDetect="hintTimeDetect"
        :hintBorderRadius="hintBorderRadius"
        :hintBackgroundColor="hintBackgroundColor"
        :hintShadow="hintShadow"
        :hintShadowStyle="hintShadowStyle"
        :cmpZIndex="cmpZIndex"
        :editable="editable"
        v-on="$listeners"
    >

        <template v-slot:content="props">
            <slot name="content" v-bind="props"></slot>
        </template>

    </component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * 基於vditor之markdown編輯器組件，vditor本體與其樣式已打包至w-vditor-vue，故使用時不需再由外部引入vditor之js與css。
 * 但vditor於執行期仍會以script或link動態下載lute(markdown引擎)、i18n語系、icons圖示、content-theme樣式等資源，
 * 並於內容含公式或圖表語法時另外下載katex、mermaid、echarts等渲染器，預設來源為「https://unpkg.com/vditor@[版本]」。
 * 內網或無法連外時，可將node_modules/vditor/dist複製至自架站台，再通過settings.cdn指向該dist之上一層目錄，
 * 例如settings.cdn給予'/static/vditor'，vditor即會改由'/static/vditor/dist/js/lute/lute.min.js'取得資源。
 * 另工具列export之PDF子項已固定移除，僅保留Markdown與HTML，因PDF匯出會於iframe內重建vditor環境，
 * 額外由settings.cdn取得dist/index.css、dist/method.min.js、js/i18n/zh_CN.js與hljs樣式共4項資源。
 *
 * @vue-prop {Array} [pathItems=['base:w-vditor-vue']] 輸入w-vditor-vue組件js檔案位置字串陣列，vditor與其css皆已打包於w-vditor-vue內故無須另行載入，預設['base:w-vditor-vue']
 * @vue-prop {String} [value=''] 輸入markdown字串，可使用v-model雙向綁定，預設為''
 * @vue-prop {Number} [height=400] 輸入編輯器高度數字，單位為px，預設為400
 * @vue-prop {Object} [settings={}] 輸入vditor設定物件，會覆蓋組件內建預設值，內建預設值與各設定項詳見w-vditor-vue原始碼與vditor官方文件
 * @vue-prop {String} [settings.mode='wysiwyg'] 輸入編輯模式字串，可選'sv'(雙欄位)、'ir'(即時渲染)、'wysiwyg'(所見即所得)，預設為'wysiwyg'
 * @vue-prop {String} [settings.lang='zh_TW'] 輸入語系字串，可選'zh_CN'、'zh_TW'、'en_US'、'ja_JP'、'ko_KR'、'ru_RU'、'sv_SE'、'fr_FR'、'pt_BR'，預設為'zh_TW'
 * @vue-prop {String} [settings.theme='classic'] 輸入編輯器主題字串，可選'classic'、'dark'，預設為'classic'
 * @vue-prop {String} [settings.cdn='https://unpkg.com/vditor@[版本]'] 輸入vditor執行期動態載入資源(lute、i18n、icons、katex等)之來源位置字串，該位置之下需有dist資料夾，預設為vditor內建之unpkg位置
 * @vue-prop {Object} [settings.i18n=null] 輸入自訂語系物件，給予後vditor將不再下載i18n語系檔，供內網部署時減少依賴，預設為null代表由settings.cdn下載對應settings.lang之語系檔
 * @vue-prop {String} [settings.icon='ant'] 輸入工具列圖示組字串，可選'ant'、'material'，圖示檔由settings.cdn下載，預設為'ant'
 * @vue-prop {Array} [settings.toolbar=['詳見w-vditor-vue原始碼']] 輸入工具列項目陣列，預設詳見w-vditor-vue原始碼處def_settings->toolbar
 * @vue-prop {String} [settings.placeholder=''] 輸入編輯器無內容時顯示之提示字串，預設為''
 * @vue-prop {String|Array} [keyHint=''] 輸入打字時調用提示區之完整觸發字串或其陣列，例如給予'/ht'則輸入「/ht」即顯示提示區，亦可給予'@'、'/ht'等任意字串，或給予['/ht','/kw']陣列註冊多組，給予''則不啟用提示區，預設為''。觸發字串須位於行首或其前方為空白字元方會生效，且點選提示項目後該觸發字串會由內容中移除
 * @vue-prop {Number} [hintTimeDetect=100] 輸入偵測提示區之debounce時間數字，單位為ms，預設100。因vditor之編輯回調options.input為debounce機制，打字時每次按鍵皆重新計時，停止打字後才觸發，而提示區偵測與value回拋皆由該回調驅動，故此值即為打完keyHint後至提示區出現之延遲，亦為v-model同步之延遲；vditor原生預設為800ms，另因其同時決定undo還原點之合併粒度，給予過小值會使undo變得瑣碎
 * @vue-prop {Number} [hintBorderRadius=4] 輸入提示窗框圓角度數字，單位為px，預設4
 * @vue-prop {String} [hintBackgroundColor='#fff'] 輸入提示窗背景顏色字串，預設'#fff'
 * @vue-prop {Boolean} [hintShadow=true] 輸入提示窗是否顯示陰影布林值，預設true
 * @vue-prop {String} [hintShadowStyle='0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)'] 輸入提示窗陰影樣式字串，預設'0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)'
 * @vue-prop {Number} [cmpZIndex=3000] 輸入提示窗使用z-index數字，預設3000
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，給予false則編輯器為唯讀，預設true
 * @vue-event {String} input 當使用者於編輯器內輸入文字，或由提示區點選插入內容時發射，帶出當前markdown字串，供v-model接收
 * @vue-slot {Object} content 提示區內容之渲染slot，需搭配keyHint使用，slot props為{ hint, funInsert, funHide }，hint為當前觸發之keyHint字串，funInsert(v)為插入字串v至編輯器游標處之函數，funHide()為隱藏提示區之函數
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'base:w-vditor-vue',
            ],
        },
        value: {
            type: String,
            default: '',
        },
        height: {
            type: Number,
            default: 400,
        },
        settings: {
            type: Object,
            default: () => {},
        },
        keyHint: {
            type: [String, Array],
            default: '',
        },
        hintTimeDetect: {
            type: Number,
            default: 100,
        },
        hintBorderRadius: {
            type: Number,
            default: 4,
        },
        hintBackgroundColor: {
            type: String,
            default: '#fff',
        },
        hintShadow: {
            type: Boolean,
            default: true,
        },
        hintShadowStyle: {
            type: String,
            default: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
        },
        cmpZIndex: {
            type: Number,
            default: 3000,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            cmpName: 'WIconLoading',
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //importResExt
        importResExt(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //cmp
                    let cmp = window['w-vditor-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use, w-vditor-vue內已打包vditor與其css, 故僅需註冊組件
                    getVue().component('w-vditor-vue', cmp)

                }
                vo.cmpName = 'w-vditor-vue'
            })

    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
</style>
