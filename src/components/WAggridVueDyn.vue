<template>
    <component ref="$self" :is="cmpName" :opt="opt" :height="height" :filterall="filterall"></component>
    <!-- ref=$self為供外部存取組件之用 -->
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入ag-grid與w-aggrid-vue組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Object} [opt={}] 輸入w-aggrid-vue設定物件，預設{}
 * @vue-prop {Array} opt.keys 輸入資料各欄位keys
 * @vue-prop {Array} opt.rows 輸入資料列，各列為物件，內含各欄位keys之值，例[{},{},...,{}]
 * @vue-prop {Object} [opt.kpHead={}] 輸入key對應head物件，預設各key值為本身key值
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
 * @vue-prop {Boolean} [opt.defHeadDrag=true] 輸入head預設之是否允許拖曳布林值，預設為true
 * @vue-prop {Object} [opt.kpHeadDrag={}] 輸入key對應head之是否允許拖曳物件，預設各key值為defHeadDrag
 * @vue-prop {Object} [opt.kpHeadCheckBox={}] 輸入key對應head與key的各列是否使用核選方塊物件，預設各key值為false
 * @vue-prop {Object} [opt.kpHeadHide={}] 輸入key對應head是否隱藏物件，預設各key值為false
 * @vue-prop {Object} [opt.kpRowStyle={}] 輸入key對應row style之物件，可設定各key欄之函數，函數給予cell值需回傳之row style，預設各key值為undefined
 * @vue-prop {Object} [opt.kpRowDrag={}] 輸入key對應col之是否能拖曳排序物件，預設各key值為false
 * @vue-prop {Function} [opt.genRowsPinnTop=null] 輸入產生置頂rows函數，輸入為表內全部數據，預設為null
 * @vue-prop {Function} [opt.genRowsPinnBottom=null] 輸入產生置底rows函數，輸入為表內全部數據，預設為null
 * @vue-prop {Object} [opt.kpColStyle={}] 輸入key對應col style之物件，可設定各key欄之col style，預設各key值為undefined
 * @vue-prop {Object} [opt.kpColSpan={}] 輸入key對應col span之物件，可設定各key欄之col span，預設各key值為undefined
 * @vue-prop {Number} [opt.defCellMinWidth=null] 輸入cell預設最小寬度數字，預設為null
 * @vue-prop {Object} [opt.kpCellWidth={}] 輸入key對應cell之寬度物件，預設各key值為undefined
 * @vue-prop {Object} [opt.kpCellRender={}] 輸入key對應cell之渲染函數物件，預設各key值為undefined
 * @vue-prop {Object} [opt.kpCellTooltip={}] 輸入key對應cell之tooltip的html字串物件，於各cell處滑鼠移入時觸發，預設各key值為undefined
 * @vue-prop {String} [opt.defCellAlignH='center'] 輸入cell預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpCellAlignH={}] 輸入key對應cell之左右對齊字串物件，預設各key值為defCellAlignH
 * @vue-prop {Boolean} [opt.defCellEditable=false] 輸入cell預設之是否可編輯布林值，預設為false
 * @vue-prop {Object} [opt.kpCellEditable={}] 輸入key對應cell之是否可編輯物件，預設各key值為defCellEditable
 * @vue-prop {Object} [opt.kpConvertKeysWhenUploadData={}] 輸入上傳Excel檔案時，當key轉會成對應新key值物件，預設{}
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
 * @vue-prop {Boolean} [opt.autoFitColumn=false] 輸入當表格尺寸變更時自動調整欄寬布林值，預設false
 * @vue-prop {Number} [height=300] 表格高度，單位為px，預設300
 * @vue-prop {String} [filterall=''] 輸入對全表數據進行過濾之字串，預設為''
 * @vue-event {Null} refresh 指調用組件的method，無輸入與回傳，刷新表格
 * @vue-event {Array} showKeys 指調用組件的method，輸入指定欲顯示欄位的keys，數量最多為原本初始化的keys，可更改順序，無回傳
 * @vue-event {Array} setHeadFilter 指調用組件的method，輸入指定欄位的key與要過濾的值value，會於界面上指定欄進行過濾
 * @vue-event {Array} clearHeadFilter 指調用組件的method，輸入指定欄位的key並清除當前所使用的過濾值
 * @vue-event {Array} clearHeadFilterAll 指調用組件的method，無輸入與回傳，清除當前所有欄位所使用的過濾值
 * @vue-event {Null} getDisplayData 指調用組件的method，無輸入，會回傳目前表格所顯示之數據
 * @vue-event {Null} getInstance 指調用組件的method，無輸入，會回傳ag-grid表格實例物件
 * @vue-event {Null} fitColumns 指調用組件的method，無輸入與回傳，自動調整欄寬
 * @vue-event {String} pasteText 指調用組件的method，輸入text為欲貼上的文字，showRowIndNow為貼上的列指標整數，預設null，showColKeyNow為貼上的欄位key值字串，預設null
 * @vue-event {Null} downloadDisplayData 指調用組件的method，無輸入，下載目前表格所顯示之數據為Excel檔，亦會回傳目前表格所顯示之數據
 * @vue-event {Null} downloadData 指調用組件的method，無輸入，下載數據為Excel檔，亦會回傳數據
 * @vue-event {Object} uploadData 指調用組件的method，輸入設定物件，其中pathItems代表調用wsemi的getDataFromExcelFileU8ArrDyn所傳入的xlsx的來源網址陣列，beforeUpload代表上傳前的處理數據函數，parseSheetInd代表提取Excel檔案的第幾個sheet整數，預設為0。呼叫時會開啟選擇檔案視窗給使用者上傳Excel檔案，需為含有標題的Excel檔，標題需為各欄位key值而非head。回傳為Promise，resolve為成功上傳之數據，reject為失敗原因
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
                'https://cdn.jsdelivr.net/npm/ag-grid-community@27.3.0/dist/ag-grid-community.min.noStyle.js',
                'https://cdn.jsdelivr.net/npm/ag-grid-vue@27.3.0/dist/ag-grid-vue.umd.min.js', //於es5內載入時, AgGridVue會出現在window['ag-grid-vue'].AgGridVue
                'https://cdn.jsdelivr.net/npm/w-aggrid-vue@2.0.37/dist/w-aggrid-vue.umd.js',
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
