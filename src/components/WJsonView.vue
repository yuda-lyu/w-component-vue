<template>
    <div>

        <WTree
            ref="wt"
            :viewHeightMax="viewHeightMax"
            :defaultDisplayLevel="defaultDisplayLevel"
            :indent="indent"
            :iconHeight="iconHeight"
            :iconToggleColor="iconToggleColor"
            :iconToggleBackgroundColor="iconToggleBackgroundColor"
            :iconToggleBackgroundColorHover="iconToggleBackgroundColorHover"
            :filterKeywords="filterKeywords"
            :filterFunction="filterFunction"
            :loadingText="loadingText"
            :noResultsText="lockFromSetData?'':noResultsText"
            :searchingText="searchingText"
            :defItemHeight="defItemHeight"
            :itemsPreload="itemsPreload"
            :show="show"
        >
            <template v-slot:head="props">

                <div :style="`min-width:${lineNumberWidth}px; display:flex; align-items:center; justify-content:end; font-size:0.8rem; line-height:1.5625rem; color:#f26; user-select:none;`">
                    {{props.index+1}}
                </div>

            </template>

            <template v-slot:item="props">

                <div style="display:flex; align-items:center;">

                    <div style="display:flex;">
                        <div :style="`padding-right:5px; color:${useColors.keyColor};`" v-if="getKey(props.data)!==''">
                            {{getKey(props.data)}}:
                        </div>
                        <div :style="`padding-right:3px; color:${useColors.keyColor};`" v-if="getType(props.data)!==''">
                            {{getType(props.data)}}
                        </div>
                        <div :style="`color:${getTextTypeColor(props.data)};`">
                            {{getText(props.data)}}
                        </div>
                    </div>

                    <div :style="`padding-left:5px; color:${useColors.keyNumbersColor};`">
                        {{genBlock(props.data)}}
                    </div>

                </div>
            </template>
        </WTree>

        <div style="padding:12px; font-size:0.8rem;" v-if="lockFromSetData">
            {{loadingText}}
        </div>

    </div>
</template>

<script>
// import each from 'lodash/each'
// import map from 'lodash/map'
// import get from 'lodash/get'
import size from 'lodash/size'
// import keys from 'lodash/keys'
// import last from 'lodash/last'
import cloneDeep from 'lodash/cloneDeep'
import isNumber from 'lodash/isNumber'
// import isString from 'lodash/isString'
// import isBoolean from 'lodash/isBoolean'
// import isArray from 'lodash/isArray' //會誤判function為array
// import isObject from 'lodash/isObject' //會誤判function為object
// import isFunction from 'lodash/isFunction'
// import toString from 'lodash/toString'
// import cint from 'wsemi/src/cint.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isstr from 'wsemi/src/isstr.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import isfun from 'wsemi/src/isfun.mjs'
// import sep from 'wsemi/src/sep.mjs'
// import convertToTree from 'wsemi/src/convertToTree.mjs'
// import genID from 'wsemi/src/genID.mjs'
// import genPm from 'wsemi/src/genPm.mjs'
// import delay from 'wsemi/src/delay.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
// import debounce from 'wsemi/src/debounce.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import color2hex from '../js/vuetifyColor.mjs'
// import binarySearch from '../js/binarySearch.mjs'
// import globalMemory from '../js/globalMemory.mjs'
import convertToTreeWk from '../js/convertToTreeWk.wk.umd.js'
// import WPanelScrollyCore from './WPanelScrollyCore.vue'
// import WDynamicList from './WDynamicList.vue'
import WTree from './WTree.vue'


// //gm
// let gm = globalMemory()


/**
 * @vue-prop {Array|Object} [data={}] 輸入資料陣列或物件，預設{}
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [defaultDisplayLevel=null] 輸入初始展開層數數字，若輸入1就是預設展開至第1層，第2層(含)以下則都隱藏，若輸入null就是全展開，預設null
 * @vue-prop {Number} [indent=1] 輸入縮排比率數字，若使用1就是1倍的圖標寬度(24px)+2*separation(3px)，預設1
 * @vue-prop {Number} [iconHeight=24] 輸入顯隱icon按鈕高度數字，單位為px，預設24
 * @vue-prop {String} [iconToggleColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [iconToggleBackgroundColor='transparent'] 輸入顯隱icon按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [iconToggleBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱icon按鈕背景顏色字串，預設'rgba(128,128,128,0.15)'
 * @vue-prop {String} [filterKeywords=''] 輸入過濾關鍵字字串，多關鍵字用空白分隔，預設''
 * @vue-prop {Function} [filterFunction=null] 輸入過濾時呼叫處理函數，傳入為各項目物件資料，回傳布林值代表項目內是否含有關鍵字，預設null
 * @vue-prop {String} [loadingText='Loading...'] 輸入載入中字串，預設'Loading...'
 * @vue-prop {String} [noResultsText='No results'] 輸入無過濾結果字串，預設'No results'
 * @vue-prop {String} [searchingText='Searching...'] 輸入搜索中字串，預設'Searching...'
 * @vue-prop {Number} [defItemHeight=24] 輸入按需顯示時各項目預設高度值，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設24
 * @vue-prop {Number} [itemsPreload=5] 輸入上下方預先載入元素數量，預設5
 * @vue-prop {String} [keyColor='grey darken-2'] 輸入鍵值顏色字串，預設'grey darken-2'
 * @vue-prop {String} [keyNumbersColor='grey lighten-1'] 輸入鍵值內含子節點數量顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [numColor='indigo accent-2'] 輸入值為數值時的顏色字串，預設'indigo accent-2'
 * @vue-prop {String} [strColor='orange accent-2'] 輸入值為字串時的顏色字串，預設'orange accent-2'
 * @vue-prop {String} [bolColor='#ab0d90'] 輸入值為布林值時的顏色字串，預設'#ab0d90'
 * @vue-prop {String} [funColor='purple accent-2'] 輸入值為函數時的顏色字串，預設'purple accent-2'
 * @vue-prop {String} [defaultColor='grey darken-4'] 輸入值為其他類型時的顏色字串，預設'grey darken-4'
 * @vue-prop {Boolean} [show=true] 輸入是否為顯示模式，預設true，供組件嵌入popup時, 因先初始化但尚未顯示不需渲染, 可給予show=false避免無限偵測與重算高度問題
 */
export default {
    components: {
        // WPanelScrollyCore,
        // WDynamicList,
        WTree,
    },
    props: {
        data: {
            type: [Array, Object],
            default: () => {},
        },
        viewHeightMax: {
            type: Number,
            default: 400,
        },
        defaultDisplayLevel: {
            type: Number,
            default: null,
        },
        indent: {
            type: Number,
            default: 1,
        },
        iconHeight: {
            type: Number,
            default: 24,
        },
        iconToggleColor: {
            type: String,
            default: 'grey',
        },
        iconToggleBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        iconToggleBackgroundColorHover: {
            type: String,
            default: 'rgba(128,128,128,0.15)',
        },
        filterKeywords: {
            type: String,
            default: '',
        },
        filterFunction: {
            type: Function,
            default: null,
        },
        loadingText: {
            type: String,
            default: 'Loading...',
        },
        noResultsText: {
            type: String,
            default: 'No results',
        },
        searchingText: {
            type: String,
            default: 'Searching...',
        },
        defItemHeight: {
            type: Number,
            default: 24,
        },
        itemsPreload: {
            type: Number,
            default: 5,
        },
        keyColor: {
            type: String,
            default: 'grey darken-2',
        },
        keyNumbersColor: {
            type: String,
            default: 'grey lighten-1',
        },
        numColor: {
            type: String,
            default: 'indigo accent-2',
        },
        strColor: {
            type: String,
            default: 'orange accent-2',
        },
        bolColor: {
            type: String,
            default: 'light-green lighten-1',
        },
        funColor: {
            type: String,
            default: 'purple accent-2',
        },
        defaultColor: {
            type: String,
            default: 'grey darken-4',
        },
        show: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            // dbcRefresh: debounce(),
            // dbc: debounce(),

            // mmkey: null,

            lockFromSetData: false, //上鎖, 指定數據時禁止變更

            useColors: {}, //因模板初始化就會用到, 故得預設空物件
            root: '___root___', //輸入數據為物件時, 會預設放在root內才能提供顯隱功能
            lineNumberWidth: 0, //列號區寬度

        }
    },
    // beforeDestroy: function() {
    //     //console.log('beforeMount')

    //     let vo = this

    //     //remove
    //     if (vo.mmkey !== null) {
    //         gm.remove(vo.mmkey)
    //     }

    // },
    watch: {

        data: {
            immediate: true,
            deep: true,
            handler(value) {
                // console.log('watch data', value)

                let vo = this

                //setData
                vo.setData(value)

            }
        }

    },
    computed: {

        changeColors: function() {
            //console.log('computed changeColors')

            let vo = this

            //convertColors
            vo.convertColors()

            return ''
        },

        // changeFilterKeyWords: function() {
        //     //console.log('computed changeFilterKeyWords')

        //     let vo = this

        //     //ft to trigger
        //     let ft = vo.filterKeywords

        //     //refreshDebounce
        //     vo.refreshDebounce('changeFilterKeyWords')

        //     return ft
        // },

    },
    methods: {

        convertColors: function() {
            //console.log('methods convertColors')

            let vo = this

            //check
            if (iseobj(vo.useColors)) {
                return
            }

            //useColors
            let useColors = {
                numColor: color2hex(vo.numColor),
                strColor: color2hex(vo.strColor),
                bolColor: color2hex(vo.bolColor),
                funColor: color2hex(vo.funColor),
                defaultColor: color2hex(vo.defaultColor),
                keyColor: color2hex(vo.keyColor),
                keyNumbersColor: color2hex(vo.keyNumbersColor),
            }

            //save
            vo.useColors = useColors

        },

        parseData: async function(data) {
            // console.log('methods parseData', data)

            let vo = this

            //convertToTree
            // console.log('convertToTree1', cloneDeep(data))
            // let items = convertToTree(data, { bindRoot: vo.root })
            let items = await convertToTreeWk(data, { bindRoot: vo.root })
            // console.log('convertToTree2', cloneDeep(items))

            return items
        },

        setData: function(data) {
            // console.log('methods setData', data)

            let vo = this

            async function core() {

                //lock
                vo.lockFromSetData = true

                //check
                if (!isarr(data) && !isobj(data)) {
                    let msg = 'data is not an array or object'
                    //console.log(msg)
                    return msg
                }

                //convertColors, 解析資料比computed還快, 故需先執行轉換顏色
                vo.convertColors()

                //cloneDeep
                data = cloneDeep(data)
                // console.log('data', cloneDeep(data))

                //parseData, convertToTree轉出預設有root
                let tree = await vo.parseData(data)
                // console.log('parseData tree', cloneDeep(tree))

                // //save
                // //vo.rows = rows
                // gm.set(vo.mmkey, rows)

                //wait wt, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.wt !== undefined
                }, { timeInterval: 20 })

                //setData
                if (vo.$refs.wt) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wt.setData(tree)
                }

                //getLineNumberWidth
                vo.getLineNumberWidth()

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {

                    //unlock
                    vo.lockFromSetData = false

                })

        },

        getLineNumberWidth: function() {
            // console.log('methods getLineNumberWidth')

            let vo = this

            async function core() {

                //wait wt, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.wt !== undefined
                }, { timeInterval: 20 })

                //check
                if (!vo.$refs.wt) { //於async中組件切換時還是有可能消失
                    return
                }

                //getRows
                let rows = vo.$refs.wt.getRows()

                //n, json展開後總列數
                let n = size(rows)
                // console.log('size(rows)', n)

                //nn, 列數字元數
                let nn = Math.ceil(Math.log10(n))

                //lineNumberWidth, 每個字元概估使用寬度8px, 若為111這種就會很窄, 若為999就會較寬, 故多0.5字元數避免過窄
                let lineNumberWidth = (nn + 0.5) * 8

                //save lineNumberWidth
                vo.lineNumberWidth = lineNumberWidth

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        genBlock: function(nodeData) {
            // console.log('methods genBlock', nodeData)

            // let vo = this

            //bk
            let bk = ''
            if (nodeData.type === 'object') {
                bk = `{${nodeData.numOfChilren}}`
            }
            else if (nodeData.type === 'array') {
                bk = `[${nodeData.numOfChilren}]`
            }

            return bk
        },

        getKey: function(nodeData) {
            // console.log('methods getKey', nodeData)

            let vo = this

            let k = ''
            if (isestr(nodeData.key) || isNumber(nodeData.key)) {
                k = nodeData.key
            }
            if (k === vo.root) {
                k = ''
            }

            return k
        },

        getType: function(nodeData) {
            // console.log('methods getType', nodeData)

            // let vo = this

            //t
            let t = ''
            if (nodeData.type !== 'node') {
                t = nodeData.type
            }

            return t
        },

        getText: function(nodeData) {
            // console.log('methods getText', nodeData)

            // let vo = this

            //t
            let t = ''
            if (nodeData.type === 'node') {
                t = nodeData.text
            }

            return t
        },

        getTextTypeColor: function(nodeData) {
            // console.log('methods getTextTypeColor', nodeData)

            let vo = this

            let c = vo.useColors.defaultColor
            if (nodeData.type === 'node') {

                //kc
                let kc = ''
                if (isNumber(nodeData.text)) {
                    kc = 'numColor'
                }
                else if (isstr(nodeData.text)) {
                    kc = 'strColor'
                }
                else if (isbol(nodeData.text)) {
                    kc = 'bolColor'
                }
                else if (isfun(nodeData.text)) {
                    kc = 'funColor'
                }

                //check
                if (haskey(vo.useColors, kc)) {
                    c = vo.useColors[kc]
                }

            }

            return c
        },

    },
}
</script>

<style scoped>
</style>

