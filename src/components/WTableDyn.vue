<template>
    <div
        :changeParamsForInfor="changeParamsForInfor"
        :changeParamsForTable="changeParamsForTable"
    >
        <template v-if="hasEffUseOpt">

            <div
                ref="menu"
                v-domresize
                @domresize="domresize"
            >

                <template v-if="editable">

                    <div :style="`${useInforPadding}`">
                        <table style="width:100%;">
                            <tbody>
                                <tr>
                                    <td :style="`${hasEffLabelNameAndDesp?'padding-right:5px;':''} vertical-align:middle; opacity:0.8; font-size:0.8rem; white-space:nowrap;`">{{textLabelDataName}}</td>
                                    <td style="width:100%; vertical-align:middle;">
                                        <w-text
                                            style="width:100%;"
                                            :placeholder="textPlaceholderDataName"
                                            v-model="nameTrans"
                                        ></w-text>
                                    </td>
                                </tr>
                                <tr>
                                    <td :style="`${hasEffLabelNameAndDesp?'padding-right:5px;':''} vertical-align:middle; opacity:0.8; font-size:0.8rem; white-space:nowrap;`">{{textLabelDataDescription}}</td>
                                    <td style="width:100%; vertical-align:middle;">
                                        <w-text
                                            style="width:100%;"
                                            :placeholder="textPlaceholderDataDescription"
                                            v-model="descriptionTrans"
                                        ></w-text>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div :style="`${useMenuPaddingStyle} background:${useMenuBackgroundColor};`">
                        <div style="display:flex; align-items:center;">

                            <w-button-circle
                                style="margin-right:5px;"
                                :icon="mdiTextBoxPlusOutline"
                                :shadow="false"
                                :tooltip="tooltipAddRow"
                                @click="addRow"
                            ></w-button-circle>

                            <w-button-circle
                                style="margin-right:5px;"
                                :icon="mdiDeleteForever"
                                :iconColor="'#f26'"
                                :shadow="false"
                                :tooltip="tooltipDeleteSelectedRows"
                                @click="removeRows"
                                v-if="rowsSelect.length>0"
                            ></w-button-circle>

                            <w-button-circle
                                style="margin-right:5px;"
                                :icon="mdiDownload"
                                :shadow="false"
                                :tooltip="tooltipDownloadExcelFile"
                                @click="downloadData"
                                v-if="hasEffRows"
                            ></w-button-circle>

                            <w-button-circle
                                style="margin-right:5px;"
                                :icon="mdiUpload"
                                :shadow="false"
                                :tooltip="tooltipUploadExcelFile"
                                @click="uploadData"
                            ></w-button-circle>

                            <slot
                                name="btns"
                                :editable="editable"
                            ></slot>

                        </div>
                    </div>

                </template>

                <template v-else>

                    <div :style="`display:flex; align-items:center;`">

                        <div :style="`${useMenuPaddingStyle} background:${useMenuBackgroundColor};`">
                            <div style="display:flex; align-items:center;">

                                <w-button-circle
                                    :icon="mdiDownload"
                                    :shadow="false"
                                    :tooltip="tooltipDownloadExcelFile"
                                    @click="downloadData"
                                    v-if="hasEffRows"
                                ></w-button-circle>

                                <slot
                                    name="btns"
                                    :editable="editable"
                                ></slot>

                            </div>
                        </div>

                        <div :style="`${useInforPadding}`">
                            <slot
                                name="infor"
                                :infor="{name:nameTrans,description:descriptionTrans}"
                            >

                                <div :style="`display:inline-block; ${hasEffNameAndDesp?'margin-left:5px;':''}`">
                                    <div style="font-size:1.0rem;">
                                        {{nameTrans}}
                                    </div>
                                    <div style="font-size:0.8rem; opacity:0.8;">
                                        {{descriptionTrans}}
                                    </div>
                                </div>

                            </slot>
                        </div>

                    </div>

                </template>

            </div>

            <w-aggrid-vue-dyn
                ref="cmp"
                :pathItems="pathItems"
                :height="tableHeight"
                :opt="useOpt"
            ></w-aggrid-vue-dyn>

        </template>
    </div>
</template>

<script>
import { mdiDownload, mdiUpload, mdiDeleteForever, mdiTextBoxPlusOutline } from '@mdi/js/mdi.js'
import get from 'lodash/get'
import map from 'lodash/map'
import each from 'lodash/each'
import keys from 'lodash/keys'
import sortBy from 'lodash/sortBy'
import pull from 'lodash/pull'
import pullAt from 'lodash/pullAt'
import size from 'lodash/size'
import every from 'lodash/every'
import trim from 'lodash/trim'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import isarr from 'wsemi/src/isarr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isearr from 'wsemi/src/isearr.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import arr2dt from 'wsemi/src/arr2dt.mjs'
import ltdtmapping from 'wsemi/src/ltdtmapping.mjs'
import genID from 'wsemi/src/genID.mjs'
import WButtonCircle from './WButtonCircle.vue'
import WText from './WText.vue'
import WAggridVueDyn from './WAggridVueDyn.vue'
import domResize from '../js/domResize.mjs'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入w-aggrid-vue-dyn組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {String} [name=''] 輸入資料名稱字串，預設''
 * @vue-prop {String} [description=''] 輸入資料描述字串，預設''
 * @vue-prop {Object} [inforPaddingStyle={v:0,h:0}] 輸入資訊區(資料名稱name與資料描述description)內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Object} [menuPaddingStyle={v:3,h:3}] 輸入選單按鈕區內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:3,h:3}
 * @vue-prop {String} [menuBackgroundColor='transparent'] 輸入選單按鈕區背景顏色字串，預設'transparent'
 * @vue-prop {String|Array} [sortColIds=''] 輸入初始化時自動排序數據的欄位，為字串或陣列，若輸入陣列時則依照順序排序，故最末者代表最終排序。預設''
 * @vue-prop {String|Array} [hideIds=''] 輸入欲隱藏欄位字串或陣列，可被opt.kpHeadHide複寫，預設''
 * @vue-prop {String|Array} [fixIds=''] 輸入欲固定於左側欄位字串或陣列，可被opt.kpHeadFixLeft複寫，預設''
 * @vue-prop {String} [checkId=''] 輸入欲使用核選方塊欄位字串，可被opt.kpHeadCheckBox複寫，預設''
 * @vue-prop {String|Array} [removeIdsWhenDownload=''] 輸入當下載成Excel檔案時欲移除的欄位字串或陣列，預設''
 * @vue-prop {Boolean} [checkNoDataWhenSave=false] 輸入於儲存時是否檢查無有效資料布林值，預設為false
 * @vue-prop {Boolean} [editable=false] 輸入是否可編輯布林值，可被opt.defCellEditable複寫，預設為false
 * @vue-prop {String} [textLabelDataName='Data name] 輸入數據名稱字串，預設'Data name'
 * @vue-prop {String} [textPlaceholderDataName='Please enter data name'] 輸入數據名稱placeholder字串，預設'Please enter data name'
 * @vue-prop {String} [textLabelDataDescription='Data description'] 輸入數據說明字串，預設'Data description'
 * @vue-prop {String} [textPlaceholderDataDescription='Please enter data description'] 輸入數據說明placeholder字串，預設'Please enter data description'
 * @vue-prop {String} [tooltipAddRow='add new row'] 輸入新增數據按鈕tooltip字串，預設'add new row'
 * @vue-prop {String} [tooltipDeleteSelectedRows='delete selected rows'] 輸入刪除選擇數據按鈕tooltip字串，預設'delete selected rows'
 * @vue-prop {String} [tooltipDownloadExcelFile='download data to Excel file'] 輸入下載Excel數據檔案按鈕tooltip字串，預設'download data to Excel file'
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
 * @vue-event {Array} save 指調用組件的method，無輸入，會回傳當前的name、description、rows所構成的物件
 * @vue-prop {Object} [opt={}] 輸入w-aggrid-vue設定物件，預設{}
 * @vue-prop {Array} opt.keys 輸入資料各欄位keys
 * @vue-prop {Array} opt.rows 輸入資料列，各列為物件，內含各欄位keys之值，例[{},{},...,{}]
 * @vue-prop {Object} [opt.kpHead={}] 輸入key對應head物件，預設各key值為本身key值
 * @vue-prop {Object} [opt.kpHeadTooltip={}] 輸入key對應需tooltip的html字串物件，於各head處滑鼠移入時觸發，預設各key值為undefined
 * @vue-prop {String} [opt.defHeadAlighH='center'] 輸入head預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpHeadAlighH={}] 輸入key對應head之左右對齊字串物件，預設各key值為defHeadAlighH
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
 * @vue-prop {Object} [opt.kpColStyle={}] 輸入key對應row style之物件，可設定各key欄之col style，預設各key值為undefined
 * @vue-prop {Number} [opt.defCellMinWidth=null] 輸入cell預設最小寬度數字，預設為null
 * @vue-prop {Object} [opt.kpCellWidth={}] 輸入key對應cell之寬度物件，預設各key值為undefined
 * @vue-prop {Object} [opt.kpCellRender={}] 輸入key對應cell之渲染函數物件，預設各key值為undefined
 * @vue-prop {Object} [opt.kpCellTooltip={}] 輸入key對應cell之tooltip的html字串物件，於各cell處滑鼠移入時觸發，預設各key值為undefined
 * @vue-prop {String} [opt.defCellAlighH='center'] 輸入cell預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpCellAlighH={}] 輸入key對應cell之左右對齊字串物件，預設各key值為defCellAlighH
 * @vue-prop {Boolean} [opt.defCellEditable=false] 輸入cell預設之是否可編輯布林值，預設為false
 * @vue-prop {Object} [opt.kpCellEditable={}] 輸入key對應cell之是否可編輯物件，預設各key值為defCellEditable
 * @vue-prop {Object} [opt.kpConvertKeysWhenUploadData={}] 輸入上傳Excel檔案時，當key轉會成對應新key值物件，預設{}
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
 * @vue-prop {Boolean} [opt.autoFitColumn=false] 輸入當表格尺寸變更時自動調整欄寬布林值，預設false
 * @vue-prop {Object} [opt.optForUploadData={}] 輸入呼叫組件uploadData上傳檔案時用的設定物件，物件可給予鍵值：pathItems代表調用wsemi的getDataFromExcelFileU8ArrDyn所傳入的xlsx的來源網址陣列，beforeUpload代表上傳前的處理數據函數，parseSheetInd代表提取Excel檔案的第幾個sheet整數(預設為0)，optForUploadData預設{}
 * @vue-prop {Function} [opt.modifyDataWhenSave=undefined] 輸入當儲存時修改儲存數據事件，輸入rows，輸出rows，預設為undefined
 * @vue-prop {Boolean} [opt.checkNoDataWhenSave=false] 輸入當儲存時是否檢核無數據布林值，預設false
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WButtonCircle,
        WText,
        WAggridVueDyn,
    },
    props: {
        pathItems: {
            type: Array, //預設值見WAggridVueDyn
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
            default: 'download data to Excel file', //下載 Excel 數據檔案
        },
        tooltipUploadExcelFile: {
            type: String,
            default: 'upload data to Excel file', //上傳 Excel 數據檔案
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
        opt: {
            type: Object,
            default: null,
        },
    },
    data: function() {
        return {
            mdiDownload,
            mdiUpload,
            mdiDeleteForever,
            mdiTextBoxPlusOutline,

            tableHeight: 1, //ag-grid需先給予最小高度供顯示, resize才會驅動

            paramsTemp: null,

            nameTrans: '',
            descriptionTrans: '',
            rowsSelect: [],
            useOpt: null,

            nameTemp: '',
            descriptionTemp: '',
            rowsTemp: [],

        }
    },
    computed: {

        changeParamsForInfor: function() {
            // console.log('computed changeParamsForInfor')

            let vo = this

            //for trigger
            let name = vo.name
            let description = vo.description

            //save
            vo.nameTrans = trim(vo.name)
            vo.descriptionTrans = trim(vo.description)

            //backup, 不能使用vo.nameTrans與vo.descriptionTemp備份, 會導致computed掛勾記憶體無法觸發事件變更
            vo.nameTemp = trim(vo.name)
            vo.descriptionTemp = trim(vo.description)

            vo.___changeParamsForInfor___ = { name, description }
            return ''
        },

        changeParamsForTable: function() {
            //console.log('computed changeParamsForTable')

            let vo = this

            //for trigger, rows通常是undefined變更為有效數據, 此時會驅動
            let rows = get(vo, 'opt.rows')
            let hideIds = vo.hideIds
            let fixIds = vo.fixIds
            let checkId = vo.checkId
            let editable = vo.editable

            //paramsTemp
            let paramsTemp = {
                rows, hideIds, fixIds, checkId, editable
            }

            //check, changeParamsForTable掛在dom上, 可能因為dom變更而被觸發, 或因數據為物件(例如rows)可能被修改, 於dom變更時被視為有變而觸發, 故需添加偵測外部數據是否有變才呼叫genOpt
            if (!isEqual(vo.paramsTemp, paramsTemp)) {

                //genOpt
                vo.genOpt()

                //save
                vo.paramsTemp = cloneDeep(paramsTemp)

            }

            return ''
        },

        useKeys: function() {
            //console.log('computed useKeys')

            let vo = this

            //ks
            let ks = []
            if (isearr(get(vo, 'opt.keys'))) {
                ks = get(vo, 'opt.keys')
            }
            else if (isearr(get(vo, 'opt.rows'))) {
                ks = keys(get(vo, 'rows.0', {}))
            }

            return ks
        },

        useKpHead: function() {
            //console.log('computed useKpHead')

            let vo = this

            //kpHeads
            let kpHeads
            if (iseobj(get(vo, 'opt.kpHead'))) {
                kpHeads = get(vo, 'opt.kpHead')
            }
            else {
                kpHeads = {}
                each(vo.useKeys, (k) => {
                    kpHeads[k] = k
                })
            }

            return kpHeads
        },

        hasEffRows: function() {
            //console.log('computed hasEffRows')

            let vo = this

            return size(get(vo, 'useOpt.rows', [])) > 0
        },

        hasEffUseOpt: function() {
            //console.log('computed hasEffUseOpt')

            let vo = this

            return vo.useOpt !== null
        },

        hasEffNameAndDesp: function() {
            //console.log('computed hasEffNameAndDesp')

            let vo = this

            return vo.nameTrans !== '' || vo.descriptionTrans !== ''
        },

        hasEffLabelNameAndDesp: function() {
            //console.log('computed hasEffLabelNameAndDesp')

            let vo = this

            return vo.textLabelDataName !== '' || vo.textLabelDataDescription !== ''
        },

        useInforPadding: function() {
            //console.log('computed useInforPadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.inforPaddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        useMenuPaddingStyle: function() {
            //console.log('computed useMenuPaddingStyle')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.menuPaddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        useMenuBackgroundColor: function() {
            //console.log('computed useMenuBackgroundColor')

            let vo = this

            return color2hex(vo.menuBackgroundColor)
        },

    },
    methods: {

        domresize: function(msg) {
            // console.log('methods domresize', msg)

            let vo = this

            //tableHeight
            let minHeight = 200
            let tableHeight = 0
            let panelHeight = get(vo, '$el.offsetHeight', 0)
            let menuHeight = get(vo, '$refs.menu.offsetHeight')
            if (panelHeight > 0 && menuHeight > 0) {
                tableHeight = panelHeight - menuHeight
            }
            tableHeight = Math.max(tableHeight, minHeight)
            vo.tableHeight = tableHeight

        },

        default: function() {
            // console.log('methods default')

            let vo = this

            vo.tableHeight = 200
            vo.rowsSelect = []
            vo.useOpt = null
            vo.rowsTemp = []
            //不能清空nameTrans與descriptionTrans, 因default可能會被genOpt觸發, 而若是name與description變更在前, opt.rows變更在後, nameTrans與descriptionTrans被清空就無法顯示, 故得獨立出來分開處理
            // vo.nameTrans = ''
            // vo.descriptionTrans = ''
            // vo.nameTemp = ''
            // vo.descriptionTemp = ''

        },

        genOpt: function() {
            // console.log('methods genOpt')

            let vo = this

            //check
            if (size(vo.useKeys) === 0) {
                vo.default()
                return
            }

            //rows
            let rows = null
            if (isarr(get(vo, 'opt.rows'))) { //若有rows則使用

                //rows
                //w-aggrid-vue組件內採取會自動更新外部opt.rows
                //但這邊組件用於專案, 需用cloneDeep斷開與外面記憶體共用問題, 於組件內改變數據才不會影響外面, 另computed有偵測rows故外面改變內部可自動更新
                rows = cloneDeep(get(vo, 'opt.rows'))

            }
            else {
                //若沒有rows則使用useKeys產生空數據

                //rows
                rows = [arr2dt(vo.useKeys)]

            }

            //sortColIds
            if (isestr(vo.sortColIds)) {
                try {
                    rows = sortBy(rows, vo.sortColIds)
                }
                catch (err) {
                    console.log(err)
                }
            }
            else if (isearr(vo.sortColIds)) {
                each(vo.sortColIds, (id) => {
                    try {
                        rows = sortBy(rows, id)
                    }
                    catch (err) {
                        console.log(err)
                    }
                })
            }

            //backup
            vo.rowsTemp = cloneDeep(rows)

            //useOpt
            let useOpt = {
                rows,
                keys: vo.useKeys,
                defCellEditable: vo.editable,
                defCellAlighH: 'left',
                kpHead: vo.useKpHead,
                rowChecked: function(rs) {
                    //console.log('rowChecked rs', rs)
                    vo.rowsSelect = rs
                },
            }

            //hideIds
            if (isestr(vo.hideIds)) {
                useOpt.kpHeadHide = arr2dt([vo.hideIds], true)
            }
            else if (isearr(vo.hideIds)) {
                useOpt.kpHeadHide = arr2dt(vo.hideIds, true)
            }

            //fixIds
            if (isestr(vo.fixIds)) {
                useOpt.kpHeadFixLeft = arr2dt([vo.fixIds], true)
            }
            else if (isearr(vo.fixIds)) {
                useOpt.kpHeadFixLeft = arr2dt(vo.fixIds, true)
            }

            //checkId
            if (vo.editable) {
                if (isestr(vo.checkId)) {
                    useOpt.kpHeadCheckBox = arr2dt([vo.checkId], true)
                }
            }

            //modify by opt
            if (iseobj(vo.opt)) {
                let optTemp = cloneDeep(vo.opt)
                each(optTemp, (v, k) => {
                    if (k !== 'keys' && k !== 'rows' && k !== 'kpHead' && k !== 'editable') { //已於前面使用過就不複寫, 例如rows會被重排序一定不能被複寫回原數據
                        useOpt[k] = v
                    }
                })
            }

            //save
            vo.useOpt = useOpt

        },

        addRow: function() {
            //console.log('methods addRow')

            let vo = this

            //check
            if (size(vo.useKeys) === 0) {
                vo.default()
                vo.$emit('error', vo.errorMsgFromAddRow)
                return
            }

            //newRow
            let newRow = arr2dt(vo.useKeys)

            //id
            newRow.id = genID()

            //beforeAddRow
            if (isfun(get(vo, 'opt.beforeAddRow'))) {
                newRow = vo.opt.beforeAddRow(newRow)
            }

            try {

                //push
                vo.useOpt.rows.push(newRow)

                vo.$nextTick(() => { //變更數據後頁面會先渲染, delay後才能調捲軸, 否則太快執行會被頁面渲染蓋掉

                    //getInstance
                    let getInstance = get(vo, `$refs.cmp.$refs.$self.getInstance`)

                    //check
                    if (isfun(getInstance)) {

                        //ensureIndexVisible, scrollTo(index)
                        let o = getInstance()
                        o.api.ensureIndexVisible(vo.useOpt.rows.length - 1, 'bottom') //捲到最下

                    }

                })

                vo.$emit('success', vo.successMsgFromAddRow)
            }
            catch (err) {
                console.log(err)
                vo.$emit('error', vo.errorMsgFromAddRow)
            }

        },

        removeRows: function() {
            console.log('methods removeRows')

            let vo = this

            //rows
            let rows = get(vo, 'useOpt.rows', [])
            rows = cloneDeep(rows)

            //check
            if (size(rows) === 0) {
                return
            }

            //inds
            let inds = map(vo.rowsSelect, 'rowInd')

            //check
            if (size(inds) === 0) {
                return
            }

            //pullAt
            pullAt(rows, inds)

            //save
            try {
                vo.useOpt.rows = rows
            }
            catch (err) {
                vo.$emit('error', vo.errorMsgFromRemoveRow)
            }

            //reset rowsSelect
            vo.rowsSelect = []

        },

        downloadData: function() {
            //console.log('methods downloadData')

            let vo = this

            try {

                //fun
                let fun = get(vo, `$refs.cmp.$refs.$self.downloadData`)

                //check
                if (!isfun(fun)) {
                    return
                }

                //downloadData
                fun({
                    funGetKeysHook: (keys) => {
                        if (isestr(vo.removeIdsWhenDownload)) {
                            pull(keys, vo.removeIdsWhenDownload)
                        }
                        else if (isearr(vo.removeIdsWhenDownload)) {
                            pull(keys, ...vo.removeIdsWhenDownload)
                        }
                        return keys
                    }
                })

                vo.$emit('success', vo.successMsgFromDownloadData)
            }
            catch (err) {
                vo.$emit('error', vo.errorMsgFromDownloadData)
            }

        },

        uploadData: function() {
            //console.log('methods uploadData')

            let vo = this

            //fun
            let fun = get(vo, `$refs.cmp.$refs.$self.uploadData`)

            //check
            if (!isfun(fun)) {
                return
            }

            //optForUploadData
            let optForUploadData = get(vo, 'opt.optForUploadData')
            if (!isobj(optForUploadData)) {
                optForUploadData = {}
            }

            //beforeUpload, 自動去除無效數據
            let beforeUpload = get(optForUploadData, 'beforeUpload')
            if (!isfun(beforeUpload)) {
                optForUploadData.beforeUpload = (rows) => {
                    // console.log('beforeUpload', rows)

                    //calc eff rows
                    let rs = []
                    each(rows, (row) => {
                        let b = every(row, (v) => {
                            return v === ''
                        })
                        if (!b) {
                            rs.push(row)
                        }
                    })
                    // console.log('rs', rs)

                    return rs
                }
            }
            // console.log('optForUploadData', optForUploadData)

            //uploadData
            fun(optForUploadData)
                .then((rows) => {
                    // console.log('uploadData then', rows)

                    // //save, w-aggrid-vue會自動更新vo.useOpt.rows, 需用cloneDeep斷開與外面記憶體共用問題
                    // vo.useOpt.rows=rows

                    //check
                    if (size(rows) === 0) {
                        vo.$emit('error', vo.errorMsgFromUploadEmptyData)
                    }
                    else {
                        vo.$emit('success', vo.successMsgFromUploadData)
                    }

                    //reset rowsSelect
                    vo.rowsSelect = []

                })
                .catch((err) => {
                    console.log('catch', err)
                    vo.$emit('error', vo.errorMsgFromUploadData)
                })

        },

        save: function() {
            //console.log('methods save')

            let vo = this

            function core() {

                //save
                let name = trim(vo.nameTrans)
                let description = trim(vo.descriptionTrans)

                //check
                if (!isestr(name)) {
                    return { err: vo.errorMsgFromNoName }
                }

                //rows
                let rows = get(vo, 'useOpt.rows', [])

                //ltdtmapping
                rows = ltdtmapping(rows, vo.useKeys)

                //update fields
                if (isfun(get(vo, 'opt.modifyDataWhenSave'))) {
                    rows = vo.opt.modifyDataWhenSave(rows)
                //     rows = map(rows, (v, k) => {
                //         if (!isestr(v.id)) {
                //             v.id = genID()
                //         }
                //         v.mappingId = vo.mappingId
                //         v.order = k
                //         v.isActive = 'y'
                //         return v
                //     })
                }

                //check
                let checkNoDataWhenSave = get(vo, 'opt.checkNoDataWhenSave')
                if (!isbol(checkNoDataWhenSave)) {
                    checkNoDataWhenSave = false
                }
                if (checkNoDataWhenSave && rows.length === 0) {
                    return { err: vo.errorMsgFromNoData }
                }

                //res
                let res = {
                    name,
                    nameTemp: vo.nameTrans,
                    description,
                    descriptionTemp: vo.descriptionTemp,
                    rows: cloneDeep(rows),
                    rowsTemp: cloneDeep(vo.rowsTemp),
                }
                // console.log('res', res)

                return res
            }

            //res
            let res
            try {
                res = core()
            }
            catch (err) {
                res = { err }
            }

            return res
        },

    }
}
</script>

<style scoped>
</style>
