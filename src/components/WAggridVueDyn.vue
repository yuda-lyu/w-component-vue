<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :opt="opt" :height="height" :filterall="filterall"></component>
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入ag-grid與w-aggrid-vue組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Object} [opt={}] 輸入w-aggrid-vue設定物件，預設{}
 * @vue-prop {Array} opt.keys 輸入資料各欄位keys
 * @vue-prop {Array} opt.rows 輸入資料列，各列為物件，內含各欄位keys之值，例[{},{},...,{}]
 * @vue-prop {Object} [opt.kpHead={}] 輸入key對應head物件，預設各key值為本身key值
 * @vue-prop {Number} [opt.defHeadMinWidth=null] 輸入cell預設最小寬度數字，預設為null
 * @vue-prop {Number} [opt.defHeadMaxWidth=null] 輸入cell預設最小寬度數字，預設為null
 * @vue-prop {Object} [opt.kpHeadWidth={}] 輸入key對應cell之寬度物件，預設各key值為undefined
 * @vue-prop {Object} [opt.kpHeadTooltip={}] 輸入key對應需tooltip的html字串物件，於各head處滑鼠移入時觸發，預設各key值為undefined
 * @vue-prop {String} [opt.defHeadAlignH='center'] 輸入head預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpHeadAlignH={}] 輸入key對應head之左右對齊字串物件，預設各key值為defHeadAlignH
 * @vue-prop {Boolean} [opt.defHeadSort=true] 輸入head預設之是否允許排序布林值，預設為true
 * @vue-prop {Object} [opt.kpHeadSort={}] 輸入key對應head之是否允許排序物件，預設各key值為defHeadSort
 * @vue-prop {Function|String} [opt.defHeadSortMethod=null] 輸入head預設之排序方式函數或字串，若需自行定義則給予函數，若需使用內建的自動轉型判斷方式則給予'auto'字串，預設為null
 * @vue-prop {Object} [opt.kpHeadSortMethod={}] 輸入key對應head之排序方式函數或字串，若需自行定義則給予函數，若需使用內建的自動轉型判斷方式則給予'auto'字串，預設各key值為defHeadSortMethod
 * @vue-prop {Object} [opt.kpHeadFixLeft={}] 輸入key對應head之是否固定於左側物件，預設各key值為false
 * @vue-prop {Boolean} [opt.defHeadFilter=true] 輸入head預設之是否允許過濾布林值，預設為true
 * @vue-prop {Object} [opt.kpHeadFilter={}] 輸入key對應head之是否允許過濾物件，預設各key值為defHeadFilter
 * @vue-prop {String} [opt.defHeadFilterType='num'] 輸入head預設過濾器字串，可選'num'、'text'、'time'、'set'，預設為'num'
 * @vue-prop {Object} [opt.kpHeadFilterType={}] 輸入key對應head之過濾器物件，可使用'num'、'text'、'time'、'set'，預設各key值為'num'
 * @vue-prop {Object} [opt.kpHeadRender={}] 輸入key對應head之渲染函數物件，預設各key值為undefined
 * @vue-prop {Boolean} [opt.defHeadDrag=true] 輸入head預設之是否允許拖曳布林值，預設為true
 * @vue-prop {Object} [opt.kpHeadDrag={}] 輸入key對應head之是否允許拖曳物件，預設各key值為defHeadDrag
 * @vue-prop {Object} [opt.kpHeadCheckBox={}] 輸入key對應head與key的各列是否使用核選方塊物件，預設各key值為false
 * @vue-prop {Object} [opt.kpHeadFocusHighlight={}] 輸入key對應key的各列於獲得焦點時是否高亮顯示物件，預設各key值為true
 * @vue-prop {Object} [opt.kpHeadHide={}] 輸入key對應head是否隱藏物件，預設各key值為false
 * @vue-prop {Object} [opt.kpRowStyle={}] 輸入key對應row style之物件，可設定各key欄之函數，函數給予cell值需回傳之row style，預設各key值為undefined
 * @vue-prop {Object} [opt.kpRowDrag={}] 輸入key對應col之是否能拖曳排序物件，預設各key值為false
 * @vue-prop {Function} [opt.genRowsPinnTop=null] 輸入產生置頂rows函數，輸入為表內全部數據，預設為null
 * @vue-prop {Function} [opt.genRowsPinnBottom=null] 輸入產生置底rows函數，輸入為表內全部數據，預設為null
 * @vue-prop {Object} [opt.kpColStyle={}] 輸入key對應col style之物件，可設定各key欄之col style，預設各key值為undefined
 * @vue-prop {Object} [opt.kpColSpan={}] 輸入key對應col span之物件，可設定各key欄之col span，預設各key值為undefined
 * @vue-prop {Object} [opt.kpCellRender={}] 輸入key對應cell之渲染函數物件，預設各key值為undefined
 * @vue-prop {Object} [opt.kpCellTooltip={}] 輸入key對應cell之tooltip的html字串物件，於各cell處滑鼠移入時觸發，預設各key值為undefined
 * @vue-prop {String} [opt.defCellAlignH='center'] 輸入cell預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpCellAlignH={}] 輸入key對應cell之左右對齊字串物件，預設各key值為defCellAlignH
 * @vue-prop {Boolean} [opt.defCellEditable=false] 輸入cell預設之是否可編輯布林值，預設為false
 * @vue-prop {Object} [opt.kpCellEditable={}] 輸入key對應cell之是否可編輯物件，預設各key值為defCellEditable
 * @vue-prop {Object} [opt.kpConvertKeysWhenUploadData={}] 輸入上傳Excel檔案時，當key轉會成對應新key值物件，預設{}
 * @vue-prop {Function} [opt.rowsChange=()=>{}] 輸入rows change之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.rowClick=()=>{}] 輸入row click之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.rowDbClick=()=>{}] 輸入row double click之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.rowChange=()=>{}] 輸入row change之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.rowChecked=()=>{}] 輸入row checked之觸發事件，需使用kpHeadCheckBox開啟指定key的head與對應rows使用checkbox，預設為()=>{}
 * @vue-prop {Function} [opt.rowMouseEnter=()=>{}] 輸入row mouseenter之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.rowMouseLeave=()=>{}] 輸入row mouseleave之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.cellClick=()=>{}] 輸入cell click之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.cellDbClick=()=>{}] 輸入cell double click之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.cellChange=()=>{}] 輸入cell change之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.cellMouseEnter=()=>{}] 輸入cell mouseenter之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.cellMouseLeave=()=>{}] 輸入cell mouseleave之觸發事件，預設為()=>{}
 * @vue-prop {Function} [opt.filterChange=()=>{}] 輸入filter change之觸發事件，預設為()=>{}
 * @vue-prop {Boolean} [opt.autoFitColumn=false] 輸入當表格尺寸變更時自動調整欄寬布林值，預設false
 * @vue-prop {String} [opt.language='en'] 輸入指定語系字串，可選'en'、'zh-tw'、'zh-cn'，預設為'en'
 * @vue-prop {Number} [height=300] 表格高度，單位為px，預設300
 * @vue-prop {String} [filterall=''] 輸入對全表數據進行過濾之字串，預設為''
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js', //w-aggrid-vue的download與upload會使用, 一併預載
                'https://cdn.jsdelivr.net/npm/ag-grid-community@31.3.4/dist/ag-grid-community.min.noStyle.js',
                'https://cdn.jsdelivr.net/npm/ag-grid-vue@31.3.4/dist/ag-grid-vue.umd.min.js', //於es5內載入時, AgGridVue會出現在window['ag-grid-vue'].AgGridVue
                'https://cdn.jsdelivr.net/npm/w-aggrid-vue@2.0.54/dist/w-aggrid-vue.umd.js',
            ],
        },
        opt: {
            type: Object,
            default: () => {},
        },
        height: {
            type: Number,
            default: 300
        },
        filterall: {
            type: String,
            default: ''
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

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //cmp
                    let cmp = window['w-aggrid-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('w-aggrid-vue', cmp)

                }
                vo.cmpName = 'w-aggrid-vue'
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
