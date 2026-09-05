<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component
        ref="$self"
        :is="cmpName"
        :language="language"
        :enableInfor="enableInfor"
        :name="name"
        :description="description"
        :inforPaddingStyle="inforPaddingStyle"
        :enableMenu="enableMenu"
        :menuPaddingStyle="menuPaddingStyle"
        :menuBackgroundColor="menuBackgroundColor"
        :sortColIds="sortColIds"
        :hideIds="hideIds"
        :fixIds="fixIds"
        :checkId="checkId"
        :removeIdsWhenDownload="removeIdsWhenDownload"
        :funGetLtdtHookWhenDownload="funGetLtdtHookWhenDownload"
        :funGetMatHookWhenDownload="funGetMatHookWhenDownload"
        :useHeadWhenDownload="useHeadWhenDownload"
        :useCellFormatWhenDownload="useCellFormatWhenDownload"
        :fileNameWhenDownload="fileNameWhenDownload"
        :sheetNameWhenDownload="sheetNameWhenDownload"
        :editable="editable"
        :textLabelDataName="textLabelDataName"
        :textPlaceholderDataName="textPlaceholderDataName"
        :textLabelDataDescription="textLabelDataDescription"
        :textPlaceholderDataDescription="textPlaceholderDataDescription"
        :tooltipAddRow="tooltipAddRow"
        :tooltipDeleteSelectedRows="tooltipDeleteSelectedRows"
        :tooltipDownloadExcelFile="tooltipDownloadExcelFile"
        :tooltipDownloadExcelFileForDisplay="tooltipDownloadExcelFileForDisplay"
        :tooltipUploadExcelFile="tooltipUploadExcelFile"
        :successMsgFromAddRow="successMsgFromAddRow"
        :errorMsgFromAddRow="errorMsgFromAddRow"
        :errorMsgFromRemoveRow="errorMsgFromRemoveRow"
        :successMsgFromUploadData="successMsgFromUploadData"
        :errorMsgFromUploadData="errorMsgFromUploadData"
        :errorMsgFromUploadEmptyData="errorMsgFromUploadEmptyData"
        :successMsgFromDownloadData="successMsgFromDownloadData"
        :errorMsgFromDownloadData="errorMsgFromDownloadData"
        :errorMsgFromNoName="errorMsgFromNoName"
        :errorMsgFromNoData="errorMsgFromNoData"
        :uploadModeTitle="uploadModeTitle"
        :uploadModeTextForReplace="uploadModeTextForReplace"
        :uploadModeTextForAppend="uploadModeTextForAppend"
        :labelContentForUpload="labelContentForUpload"
        :cmpZIndex="cmpZIndex"
        :opt="opt"
        v-on="$listeners"
    >

        <!-- infor有預設顯示內容, 需外部有給予slot時才可傳遞, 否則會覆蓋成空內容 -->
        <template v-slot:infor="props" v-if="$scopedSlots.infor">
            <slot name="infor" v-bind="props"></slot>
        </template>

        <template v-slot:btns-left="props">
            <slot name="btns-left" v-bind="props"></slot>
        </template>

        <template v-slot:btns-right="props">
            <slot name="btns-right" v-bind="props"></slot>
        </template>

        <!-- cell-render, cell-tooltip, head-render, head-tooltip轉發至w-table-edit(再轉發至w-aggrid-vue), 須加v-if守衛: w-aggrid-vue偵測到slot存在即改用slot renderer, 若無條件轉發, 呼叫端未給slot時儲存格與head會被渲染成空白 -->
        <template v-slot:cell-render="props" v-if="$scopedSlots['cell-render']">
            <slot name="cell-render" v-bind="props"></slot>
        </template>

        <template v-slot:cell-tooltip="props" v-if="$scopedSlots['cell-tooltip']">
            <slot name="cell-tooltip" v-bind="props"></slot>
        </template>

        <template v-slot:head-render="props" v-if="$scopedSlots['head-render']">
            <slot name="head-render" v-bind="props"></slot>
        </template>

        <template v-slot:head-tooltip="props" v-if="$scopedSlots['head-tooltip']">
            <slot name="head-tooltip" v-bind="props"></slot>
        </template>

    </component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['base:w-table-vue']] 輸入w-table-vue組件js檔案位置字串陣列，w-aggrid-vue與ag-grid皆已打包於w-table-vue內故無須另行載入，預設['base:w-table-vue']
 * @vue-prop {String} [language='en'] 輸入指定語系字串，可選'en'、'zh-tw'、'zh-cn'，可被opt.language複寫，預設為'en'
 * @vue-prop {Boolean} [enableInfor=true] 輸入是否使用資訊區(資料名稱name與資料描述description)布林值，預設為true
 * @vue-prop {String} [name=''] 輸入資料名稱字串，預設''
 * @vue-prop {String} [description=''] 輸入資料描述字串，預設''
 * @vue-prop {Object} [inforPaddingStyle={v:0,h:0}] 輸入資訊區(資料名稱name與資料描述description)內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Boolean} [enableMenu=true] 輸入是否使用選單按鈕區布林值，預設為true
 * @vue-prop {Object} [menuPaddingStyle={v:3,h:3}] 輸入選單按鈕區內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:3,h:3}
 * @vue-prop {String} [menuBackgroundColor='transparent'] 輸入選單按鈕區背景顏色字串，預設'transparent'
 * @vue-prop {String|Array} [sortColIds=''] 輸入初始化時自動排序數據的欄位，為字串或陣列，若輸入陣列時則依照順序排序，故最末者代表最終排序。預設''
 * @vue-prop {String|Array} [hideIds=''] 輸入欲隱藏欄位字串或陣列，可被opt.kpHeadHide複寫，預設''
 * @vue-prop {String|Array} [fixIds=''] 輸入欲固定於左側欄位字串或陣列，可被opt.kpHeadFixLeft複寫，預設''
 * @vue-prop {String} [checkId=''] 輸入欲使用核選方塊欄位字串，可被opt.kpHeadCheckBox複寫，預設''
 * @vue-prop {String|Array} [removeIdsWhenDownload=''] 輸入下載Excel檔案時欲移除的欄位字串或陣列，預設''
 * @vue-prop {Boolean} [funGetLtdtHookWhenDownload=null] 輸入下載Excel檔案時針對ltdt數據階段的攔截處理函數，預設為null
 * @vue-prop {Boolean} [funGetMatHookWhenDownload=null] 輸入下載Excel檔案時針對mat數據階段的攔截處理函數，預設為null
 * @vue-prop {Boolean} [useHeadWhenDownload=false] 輸入下載Excel檔案時是否將欄位鍵值轉換成head布林值，此需提供opt.kpHead物件，預設為false
 * @vue-prop {Boolean} [useCellFormatWhenDownload=true] 輸入下載Excel檔案時是否依opt.kpCellFormat格式化各欄值布林值，true時下載內容與畫面一致(有格式化函數之欄為格式化後字串)，false時下載原值，無opt.kpCellFormat時無作用，轉發至w-table-vue(對應w-aggrid-vue之downloadData與downloadDisplayData之useFormat)，預設為true
 * @vue-prop {String} [fileNameWhenDownload='data.xlsx'] 輸入下載Excel檔案時儲存檔名稱字串，預設'data.xlsx'
 * @vue-prop {String} [sheetNameWhenDownload='data'] 輸入下載Excel檔案時sheet名稱字串，預設'data'
 * @vue-prop {Boolean} [editable=false] 輸入是否可編輯布林值，可被opt.defCellEditable複寫，預設為false
 * @vue-prop {String} [textLabelDataName='Data name] 輸入數據名稱字串，預設'Data name'
 * @vue-prop {String} [textPlaceholderDataName='Please enter data name'] 輸入數據名稱placeholder字串，預設'Please enter data name'
 * @vue-prop {String} [textLabelDataDescription='Data description'] 輸入數據說明字串，預設'Data description'
 * @vue-prop {String} [textPlaceholderDataDescription='Please enter data description'] 輸入數據說明placeholder字串，預設'Please enter data description'
 * @vue-prop {String} [tooltipAddRow='add new row'] 輸入新增數據按鈕tooltip字串，預設'add new row'
 * @vue-prop {String} [tooltipDeleteSelectedRows='delete selected rows'] 輸入刪除選擇數據按鈕tooltip字串，預設'delete selected rows'
 * @vue-prop {String} [tooltipDownloadExcelFile='download data to Excel file'] 輸入下載數據成為Excel檔案按鈕tooltip字串，預設'download data to Excel file'
 * @vue-prop {String} [tooltipDownloadExcelFileForDisplay='download filtered data to Excel file'] 輸入下載過濾後數據成為Excel檔案按鈕tooltip字串，預設'download filtered data to Excel file'
 * @vue-prop {String} [tooltipUploadExcelFile='upload data to Excel file'] 輸入上傳Excel數據檔案按鈕tooltip字串，預設'upload data to Excel file'
 * @vue-prop {String} [successMsgFromAddRow='add row successfully'] 輸入新增數據成功事件訊息字串，預設'add row successfully'
 * @vue-prop {String} [errorMsgFromAddRow='can not add row'] 輸入無法新增數據事件訊息字串，預設'can not add row'
 * @vue-prop {String} [errorMsgFromRemoveRow='can not remove selected rows'] 輸入移除數據失敗事件訊息字串，預設'can not remove selected rows'
 * @vue-prop {String} [successMsgFromUploadData='upload data successfully'] 輸入上傳數據成功事件訊息字串，預設'upload data successfully'
 * @vue-prop {String} [errorMsgFromUploadData='can not upload data'] 輸入無法上傳數據事件訊息字串，預設'can not upload data'
 * @vue-prop {String} [errorMsgFromUploadEmptyData='no effective data'] 輸入上傳檔案中無有效數據事件訊息字串，預設'no effective data'
 * @vue-prop {String} [successMsgFromDownloadData='download data successfully'] 輸入下載檔案成功事件訊息字串，預設'download data successfully'
 * @vue-prop {String} [errorMsgFromDownloadData='can not download data'] 輸入無法下載檔案事件訊息字串，預設'can not download data'
 * @vue-prop {String} [errorMsgFromNoName='no data name'] 輸入未輸入數據名稱事件訊息字串，預設'no data name'
 * @vue-prop {String} [errorMsgFromNoData='no data'] 輸入未給予有效數據事件訊息字串，預設'no data'
 * @vue-prop {String} [uploadModeTitle='Choose mode of upload:'] 輸入選擇上傳模式彈窗標題字串，預設'Choose mode of upload:'
 * @vue-prop {String} [uploadModeTextForReplace='Replace'] 輸入取代上傳模式文字字串，預設'Replace'
 * @vue-prop {String} [uploadModeTextForAppend='Append'] 輸入插入於最後上傳模式文字字串，預設'Append'
 * @vue-prop {String} [labelContentForUpload=null] 輸入針對上傳模式之popup彈窗teleport至body內之內容div所給予之wtlp屬性值字串，供查找使用，預設null
 * @vue-event {Array} save 指調用組件的method，無輸入，會回傳當前的name、description、rows所構成的物件
 * @vue-event {String} success 當新增數據、上傳數據、下載數據成功時觸發，回傳對應成功訊息字串
 * @vue-event {String} error 當新增數據、移除數據、上傳數據、下載數據失敗時觸發，回傳對應錯誤訊息字串
 * @vue-slot {Object} infor 顯示模式下資訊區之渲染slot，slot props為{ infor }，infor為{ name, description }
 * @vue-slot {Object} btns-left 選單按鈕區最左側之插入slot，slot props為{ editable }
 * @vue-slot {Object} btns-right 選單按鈕區最右側之插入slot，slot props為{ editable }
 * @vue-slot {Object} cell-render 輸入cell之渲染slot，轉發至w-table-vue再至w-aggrid-vue，slot props為{ value, valueFormatted, key, row }，value為原值，valueFormatted為該欄有opt.kpCellFormat時之格式化值，否則為undefined
 * @vue-slot {Object} cell-tooltip 輸入cell之tooltip渲染slot，轉發至w-table-vue再至w-aggrid-vue，slot props為{ value, valueFormatted, key, row }，value為原值，valueFormatted為該欄有opt.kpCellFormat時之格式化值，否則為undefined，slot內容於掛載時取靜態HTML快照，不支援事件綁定、子組件狀態與響應式更新
 * @vue-slot {Object} head-render 輸入head之渲染slot，轉發至w-table-vue再至w-aggrid-vue，slot props為{ value, key }
 * @vue-slot {Object} head-tooltip 輸入head之tooltip渲染slot，轉發至w-table-vue再至w-aggrid-vue，slot props為{ value, key }，slot內容於掛載時取靜態HTML快照，不支援事件綁定、子組件狀態與響應式更新
 * @vue-prop {Number} [cmpZIndex=3000] 輸入彈窗使用z-index數字，供嵌於高z-index彈窗內時提高層級，預設3000
 * @vue-prop {Object} [opt={}] 輸入w-aggrid-vue設定物件，預設{}
 * @vue-prop {Array} [opt.keys] 輸入資料各欄位keys
 * @vue-prop {Array} [opt.rows] 輸入資料列，各列為物件，內含各欄位keys之值，例[{},{},...,{}]
 * @vue-prop {Object} [opt.kpHead={}] 輸入key對應head物件，預設各key值為本身key值
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
 * @vue-prop {Number} [opt.defHeadMinWidth=null] 輸入cell預設最小寬度數字，預設為null
 * @vue-prop {Number} [opt.defHeadMaxWidth=null] 輸入cell預設最大寬度數字，預設為null
 * @vue-prop {Object} [opt.kpHeadWidth={}] 輸入key對應cell之寬度物件，預設各key值為undefined
 * @vue-prop {String} [opt.defCellAlignH='center'] 輸入cell預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpCellAlignH={}] 輸入key對應cell之左右對齊字串物件，預設各key值為defCellAlignH
 * @vue-prop {Boolean} [opt.defCellEditable=false] 輸入cell預設之是否可編輯布林值，由組件editable複寫，預設為false
 * @vue-prop {Object} [opt.kpCellEditable={}] 輸入key對應cell之是否可編輯物件，預設各key值為defCellEditable
 * @vue-prop {Object} [opt.kpCellFormat={}] 輸入key對應cell之值格式化函數物件，函數簽名為(value, key, row, params)，回傳顯示字串，回傳null或undefined代表不格式化維持原值；所有原值(含null、undefined、空字串)皆原樣傳入，編輯模式新增列之各欄為空字串，故函數內須自行處理空值(如回傳null)；作用於顯示與下載(下載時params為null，可由組件useCellFormatWhenDownload關閉)，排序、過濾、編輯與save回傳之rows仍為原值；與cell-render slot可並用，預設各key值為undefined
 * @vue-prop {Object} [opt.kpConvertKeysWhenUploadData={}] 輸入上傳Excel檔案時，當key轉會成對應新key值物件，預設{}
 * @vue-prop {Function} [opt.rowsChange=function(){}] 輸入rows change之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowClick=function(){}] 輸入row click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowDbClick=function(){}] 輸入row double click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowChange=function(){}] 輸入row change之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowChecked=function(){}] 輸入row checked之觸發事件，需使用kpHeadCheckBox開啟指定key的head與對應rows使用checkbox，預設為function(){}
 * @vue-prop {Function} [opt.rowMouseEnter=function(){}] 輸入row mouseenter之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowMouseLeave=function(){}] 輸入row mouseleave之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellClick=function(){}] 輸入cell click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellDbClick=function(){}] 輸入cell double click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellChange=function(){}] 輸入cell change之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellMouseEnter=function(){}] 輸入cell mouseenter之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellMouseLeave=function(){}] 輸入cell mouseleave之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.filterChange=function(){}] 輸入filter change之觸發事件，預設為function(){}
 * @vue-prop {Boolean} [opt.autoFitColumn=false] 輸入當表格尺寸變更時自動調整欄寬布林值，預設false
 * @vue-prop {String} [opt.language='en'] 輸入指定語系字串，可選'en'、'zh-tw'、'zh-cn'，預設同組件language
 * @vue-prop {Function} [opt.beforeAddRow=undefined] 輸入編輯模式新增數據前之修改新列事件，輸入newRow，輸出newRow，預設為undefined
 * @vue-prop {Object} [opt.optForUploadData={}] 輸入呼叫組件uploadData上傳檔案時用的設定物件，內部調用wsemi的getDataFromExcelFileU8Arr讀取Excel檔案，物件可給予鍵值：uploadMode代表上傳模式字串(可選'replace'、'append'，預設由彈窗選擇)，beforeUpload代表上傳前的處理數據函數，parseSheetInd代表提取Excel檔案的第幾個sheet整數(預設為0)，optForUploadData預設{}
 * @vue-prop {Function} [opt.modifyDataWhenSave=undefined] 輸入當儲存時修改儲存數據事件，輸入rows，輸出rows，預設為undefined
 * @vue-prop {Boolean} [opt.checkNoDataWhenSave=false] 輸入當儲存時是否檢核無數據布林值，預設false
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'base:w-table-vue',
            ],
        },
        language: {
            type: String,
            default: 'en',
        },
        enableInfor: {
            type: Boolean,
            default: true,
        },
        name: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        inforPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 0,
                }
            },
        },
        enableMenu: {
            type: Boolean,
            default: true,
        },
        menuPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 3,
                    h: 3,
                }
            },
        },
        menuBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        sortColIds: {
            type: [String, Array],
            default: '',
            // default: 'order',
        },
        hideIds: {
            type: [String, Array],
            default: '',
            // default: () => [
            //     'id',
            //     'mappingId',
            //     'order',
            //     'isActive',
            // ],
        },
        fixIds: {
            type: [String, Array],
            default: '',
        },
        checkId: {
            type: String,
            default: '',
        },
        removeIdsWhenDownload: {
            type: [String, Array],
            default: '',
            // default: () => [
            //     'id',
            //     'mappingId',
            //     'order',
            //     'isActive',
            // ],
        },
        funGetLtdtHookWhenDownload: {
            type: Function,
            default: null,
        },
        funGetMatHookWhenDownload: {
            type: Function,
            default: null,
        },
        useHeadWhenDownload: {
            type: Boolean,
            default: false,
        },
        useCellFormatWhenDownload: {
            type: Boolean,
            default: true,
        },
        fileNameWhenDownload: {
            type: String,
            default: 'data.xlsx',
        },
        sheetNameWhenDownload: {
            type: String,
            default: 'data',
        },
        editable: {
            type: Boolean,
            default: false,
        },
        textLabelDataName: {
            type: String,
            default: 'Data name:', //數據名稱
        },
        textPlaceholderDataName: {
            type: String,
            default: 'Please enter data name', //請輸入數據名稱
        },
        textLabelDataDescription: {
            type: String,
            default: 'Data description:', //數據說明
        },
        textPlaceholderDataDescription: {
            type: String,
            default: 'Please enter data description', //請輸入數據說明
        },
        tooltipAddRow: {
            type: String,
            default: 'add new row', //新增數據
        },
        tooltipDeleteSelectedRows: {
            type: String,
            default: 'delete selected rows', //刪除選擇數據
        },
        tooltipDownloadExcelFile: {
            type: String,
            default: 'download data to Excel file', //下載數據成為Excel檔案
        },
        tooltipDownloadExcelFileForDisplay: {
            type: String,
            default: 'download filtered data to Excel file', //下載過濾後數據成為Excel檔案
        },
        tooltipUploadExcelFile: {
            type: String,
            default: 'upload data to Excel file', //上傳數據 Excel 檔案
        },
        successMsgFromAddRow: {
            type: String,
            default: 'add row successfully', //新增數據成功
        },
        errorMsgFromAddRow: {
            type: String,
            default: 'can not add row', //無法新增數據
        },
        errorMsgFromRemoveRow: {
            type: String,
            default: 'can not remove selected rows', //移除數據失敗
        },
        successMsgFromUploadData: {
            type: String,
            default: 'upload data successfully', //上傳數據成功
        },
        errorMsgFromUploadData: {
            type: String,
            default: 'can not upload data', //無法上傳數據
        },
        errorMsgFromUploadEmptyData: {
            type: String,
            default: 'no effective data', //上傳檔案中無有效數據
        },
        successMsgFromDownloadData: {
            type: String,
            default: 'download data successfully', //下載檔案成功
        },
        errorMsgFromDownloadData: {
            type: String,
            default: 'can not download data', //無法下載檔案
        },
        errorMsgFromNoName: {
            type: String,
            default: 'no data name', //未輸入數據名稱
        },
        errorMsgFromNoData: {
            type: String,
            default: 'no data', //未給予有效數據
        },
        uploadModeTitle: {
            type: String,
            default: 'Choose mode of upload:',
        },
        uploadModeTextForReplace: {
            type: String,
            default: 'Replace',
        },
        uploadModeTextForAppend: {
            type: String,
            default: 'Append',
        },
        labelContentForUpload: {
            type: String,
            default: null,
        },
        cmpZIndex: {
            type: Number,
            default: 3000,
        },
        opt: {
            type: Object,
            default: null,
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

                    //use, w-table-vue內已打包w-aggrid-vue與ag-grid, 故僅需註冊組件
                    getVue().use(window['w-table-vue'])

                }
                vo.cmpName = 'w-table-edit'
            })

    },
    computed: {
    },
    methods: {

        callCmpMethod: function(funName, ...input) {
            //console.log('methods callCmpMethod', funName)

            let vo = this

            //cmp
            let cmp = vo.$refs.$self

            //check, 組件尚未載入完成時無對應方法
            if (cmp === null || cmp === undefined) {
                return undefined
            }
            if (typeof cmp[funName] !== 'function') {
                return undefined
            }

            return cmp[funName](...input)
        },

        addRow: function(...input) {
            return this.callCmpMethod('addRow', ...input)
        },

        removeRows: function(...input) {
            return this.callCmpMethod('removeRows', ...input)
        },

        downloadData: function(...input) {
            return this.callCmpMethod('downloadData', ...input)
        },

        uploadData: function(...input) {
            return this.callCmpMethod('uploadData', ...input)
        },

        save: function(...input) {
            return this.callCmpMethod('save', ...input)
        },

    },
}
</script>

<style scoped>
</style>
