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

                    <div style="display:flex; align-items:center; padding:5px 0px;">

                        <w-button-circle
                            style="margin-right:5px;"
                            :icon="mdiTextBoxPlusOutline"
                            :shadow="false"
                            :tooltip="textAddRow"
                            @click="addRow"
                        ></w-button-circle>

                        <w-button-circle
                            style="margin-right:5px;"
                            :icon="mdiDeleteForever"
                            :iconColor="'#f26'"
                            :shadow="false"
                            :tooltip="texDeleteSelectedRows"
                            @click="removeRows"
                            v-if="rowsSelect.length>0"
                        ></w-button-circle>

                        <w-button-circle
                            style="margin-right:5px;"
                            :icon="mdiDownload"
                            :shadow="false"
                            :tooltip="texDownloadExcelFile"
                            @click="downloadData"
                            v-if="hasEffRows"
                        ></w-button-circle>

                        <w-button-circle
                            style="margin-right:5px;"
                            :icon="mdiUpload"
                            :shadow="false"
                            :tooltip="texUploadExcelFile"
                            @click="uploadData"
                        ></w-button-circle>

                    </div>

                </template>

                <template v-else>

                    <div style="display:flex; align-items:center; margin-bottom:5px;">

                        <w-button-circle
                            :icon="mdiDownload"
                            :shadow="false"
                            :tooltip="texDownloadExcelFile"
                            @click="downloadData"
                            v-if="hasEffRows"
                        ></w-button-circle>

                        <div :style="`display:inline-block; ${hasEffNameAndDesp?'margin-left:10px;':''}`">
                            <div style="font-size:1.0rem;">
                                {{nameTrans}}
                            </div>
                            <div style="font-size:0.8rem; opacity:0.8;">
                                {{descriptionTrans}}
                            </div>
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
import cloneDeep from 'lodash/cloneDeep'
import isarr from 'wsemi/src/isarr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isearr from 'wsemi/src/isearr.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import arr2dt from 'wsemi/src/arr2dt.mjs'
import ltdtmapping from 'wsemi/src/ltdtmapping.mjs'
import genID from 'wsemi/src/genID.mjs'
import WButtonCircle from './WButtonCircle.vue'
import WText from './WText.vue'
import WAggridVueDyn from './WAggridVueDyn.vue'
import domResize from '../js/domResize.mjs'


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
        sortColIds: {
            type: [String, Array],
            default: '',
            // default: 'order',
        },
        hideIds: {
            type: [String, Array],
            default: () => [],
            // default: () => [
            //     'id',
            //     'mappingId',
            //     'order',
            //     'isActive',
            // ],
        },
        fixIds: {
            type: [String, Array],
            default: () => [],
        },
        checkId: {
            type: String,
            default: '',
        },
        removeIdsWhenDownload: {
            type: Array,
            default: () => [],
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
        textAddRow: {
            type: String,
            default: 'add new row', //新增數據
        },
        texDeleteSelectedRows: {
            type: String,
            default: 'delete selected rows', //刪除選擇數據
        },
        texDownloadExcelFile: {
            type: String,
            default: 'download data to Excel file', //下載 Excel 數據檔案
        },
        texUploadExcelFile: {
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
        errorMsgFromUploadEmptyData: {
            type: String,
            default: 'no effective data', //上傳檔案中無有效數據
        },
        errorMsgFromUploadData: {
            type: String,
            default: 'can not upload data', //無法上傳數據
        },
        errorMsgFromNoName: {
            type: String,
            default: 'no data name', //未輸入數據名稱
        },
        errorMsgFromNoData: {
            type: String,
            default: 'no data', //未給予有效數據
        },
        successMsgFromDownloadData: {
            type: String,
            default: 'download data successfully', //下載檔案成功
        },
        errorMsgFromDownloadData: {
            type: String,
            default: 'can not download data', //無法下載檔案
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
            //console.log('computed changeParamsForInfor')

            let vo = this

            //save
            vo.nameTrans = trim(vo.name)
            vo.descriptionTrans = trim(vo.description)

            //backup, 不能使用vo.nameTrans儲存至backup, 會導致computed掛勾記憶體無法觸發事件變更
            vo.nameTemp = trim(vo.name)
            vo.descriptionTemp = trim(vo.description)

            return ''
        },

        changeParamsForTable: function() {
            //console.log('computed changeParamsForTable')

            let vo = this

            //for trigger
            let rows = get(vo, 'opt.rows')
            let editable = vo.editable

            //genOpt
            vo.genOpt()

            vo.___rows___ = rows
            vo.___editable___ = editable
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
            //console.log('methods default')

            let vo = this

            vo.tableHeight = 200
            vo.nameTrans = ''
            vo.descriptionTrans = ''
            vo.rowsSelect = []
            vo.useOpt = null
            vo.nameTemp = ''
            vo.descriptionTemp = ''
            vo.rowsTemp = []

        },

        genOpt: function() {
            //console.log('methods genOpt')

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
                    if (k !== 'keys' && k !== 'rows' && k !== 'kpHead') { //已於前面使用過就不複寫, 例如rows會被重排序一定不能被複寫回原數據
                        useOpt[k] = v
                    }
                })
            }

            //backup
            vo.rowsTemp = cloneDeep(useOpt.rows)

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
            //console.log('methods removeRows')

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
                        if (isearr(vo.removeIdsWhenDownload)) {
                            pull(keys, ...vo.removeIdsWhenDownload)
                        }
                        return keys
                    }
                })

                //emit
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

            //uploadData
            fun({
                beforeUpload: (rows) => {
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
                },
            })
                .then((rows) => {
                    // console.log('uploadData then', rows)

                    //check
                    if (size(rows) === 0) {
                        vo.$emit('error', vo.errorMsgFromUploadEmptyData)
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

                //check
                if (rows.length === 0) {
                    return { err: vo.errorMsgFromNoData }
                }

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

                //res
                let res = {
                    name,
                    description,
                    rows: cloneDeep(rows),
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
