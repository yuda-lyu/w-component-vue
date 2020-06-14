<template>
    <component ref="$self" :is="cmpName" :opt="opt" :height="height" :filterall="filterall"></component>
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入ag-grid與w-aggrid-vue組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Object} [options={}] 輸入w-aggrid-vue設定物件，預設{}
 * @vue-prop {Object} opt 輸入資料設定物件
 * @vue-prop {Array} opt.keys 輸入資料各欄位keys
 * @vue-prop {Array} opt.rows 輸入資料列，各列為物件，內含各欄位keys之值，例[{},{},...,{}]
 * @vue-prop {Object} [opt.kpHead={}] 輸入key對應head物件，預設為keys
 * @vue-prop {Object} [opt.kpHeadTooltip={}] 輸入key對應需tooltip的html字串物件，於各head處滑鼠移入時觸發，預設為{}
 * @vue-prop {Object} [opt.defHeadAlighH='center'] 輸入head預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpHeadAlighH={}] 輸入key對應head之左右對齊字串物件，預設為各key值為defHeadAlighH
 * @vue-prop {Object} [opt.defHeadSort=true] 輸入head預設之是否允許排序布林值，預設為true
 * @vue-prop {Object} [opt.kpHeadSort={}] 輸入key對應head之是否允許排序物件，預設為各key值為defHeadSort
 * @vue-prop {Object} [opt.kpHeadFixLeft={}] 輸入key對應head之是否固定於左側物件，預設為各key值為false
 * @vue-prop {Object} [opt.defHeadFilter=true] 輸入head預設之是否允許過濾布林值，預設為true
 * @vue-prop {Object} [opt.kpHeadFilter={}] 輸入key對應head之是否允許過濾物件，預設為各key值為defHeadFilter
 * @vue-prop {Object} [opt.defHeadDrag=true] 輸入head預設之是否允許拖曳布林值，預設為true
 * @vue-prop {Object} [opt.kpHeadDrag={}] 輸入key對應head之是否允許拖曳物件，預設為各key值為defHeadDrag
 * @vue-prop {Object} [opt.kpRowStyle={}] 輸入key對應row style之物件，可設定key欄之cell值所需對應之row style，預設為{}
 * @vue-prop {Object} [opt.kpRowDrag={}] [專有:ag-grid] 輸入key對應row之是否能拖曳排序物件，預設為各key值為false
 * @vue-prop {Number} [opt.defCellMinWidth=null] 輸入cell預設最小寬度數字，預設為null
 * @vue-prop {Object} [opt.kpCellWidth=null] 輸入key對應cell之寬度物件，預設為各key值為null
 * @vue-prop {Object} [opt.kpCellRender={}] 輸入key對應cell之渲染函數物件，預設為{}
 * @vue-prop {Object} [opt.kpCellTooltip={}] 輸入key對應cell之tooltip的html字串物件，於各cell處滑鼠移入時觸發，預設為{}
 * @vue-prop {Object} [opt.defCellAlighH='center'] 輸入cell預設之左右對齊字串，預設為'center'
 * @vue-prop {Object} [opt.kpCellAlighH={}] 輸入key對應cell之左右對齊字串物件，預設為各key值為defCellAlighH
 * @vue-prop {Object} [opt.defCellEditable=false] 輸入cell預設之是否可編輯布林值，預設為false
 * @vue-prop {Object} [opt.kpCellEditable={}] 輸入key對應cell之是否可編輯物件，預設為各key值為defCellEditable
 * @vue-prop {Function} [opt.rowClick={}] 輸入row click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowDbClick={}] 輸入row double click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowChange={}] 輸入row change之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowMouseEnter={}] 輸入row mouseenter之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.rowMouseLeave={}] 輸入row mouseleave之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellClick={}] 輸入cell click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellDbClick={}] 輸入cell double click之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellChange={}] 輸入cell change之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellMouseEnter={}] 輸入cell mouseenter之觸發事件，預設為function(){}
 * @vue-prop {Function} [opt.cellMouseLeave={}] 輸入cell mouseleave之觸發事件，預設為function(){}
 * @vue-prop {Boolean} [opt.autoFitColumn=false] 輸入當表格尺寸變更時自動調整欄寬，預設false
 * @vue-prop {Number} [height=300] 表格高度，預設300(px)
 * @vue-prop {String} [filterall=''] 輸入對全表數據進行過濾之字串，預設為''
 * @vue-event {Null} refresh 刷新表格，無輸入與回傳
 * @vue-event {Array} showKeys 指定欲顯示欄位的keys，數量最多為原本初始化的keys，可更改順序，無回傳
 * @vue-event {Array} setHeadFilter 指定欄位的key與要過濾的值value，會於界面上指定欄進行過濾
 * @vue-event {Array} clearHeadFilter 指定欄位的key並清除當前所使用的過濾值
 * @vue-event {Array} clearHeadFilterAll 清除當前所有欄位所使用的過濾值
 * @vue-event {Null} getDisplayData 無輸入，會回傳目前表格所顯示之數據
 * @vue-event {Null} getInstance 無輸入，會回傳ag-grid表格實例物件
 * @vue-event {Null} fitColumns 無輸入，會進行擴充版的sizeColumnsToFit
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'https://cdn.jsdelivr.net/npm/ag-grid-community@23.1.1/dist/ag-grid-community.min.noStyle.js',
                'https://cdn.jsdelivr.net/npm/ag-grid-vue@23.1.1/dist/ag-grid-vue.umd.min.js', //於es5內載入時, AgGridVue會出現在window['ag-grid-vue'].AgGridVue
                'https://cdn.jsdelivr.net/npm/w-aggrid-vue@1.0.44/dist/w-aggrid-vue.umd.js',
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
