<template>
    <WPanelScrollyCore
        ref="wsp"
        :ratio.sync="scrollRatio"
        :viewHeightMax="viewHeightMax"
        :contentHeight="itemsHeight"
        :changeColors="changeColors"
        :changeFilterKeyWords="changeFilterKeyWords"
        @change="changeScroll"
        @toggleItemsEnd="toggleItemsEnd"
    >

        <template v-for="(item,kitem) in useItems">
            <WJsonViewCore
                ref="wjvc"
                :key="kitem"
                :item="item"
                :lineNumberWidth="lineNumberWidth"
                :iconColor="iconColor"
                :keyColor="keyColor"
                :keyNumbersColor="keyNumbersColor"
                @toggleItems="toggleItems"
            ></WJsonViewCore>
        </template>

        <div style="padding:12px; font-size:0.8rem;" v-if="useItems.length===0">
            {{searchEmpty}}
        </div>

    </WPanelScrollyCore>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'
import each from 'lodash/each'
import get from 'lodash/get'
import size from 'lodash/size'
import keys from 'lodash/keys'
import last from 'lodash/last'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
// import isArray from 'lodash/isArray' //會誤判function為array
// import isObject from 'lodash/isObject' //會誤判function為object
import isFunction from 'lodash/isFunction'
import toString from 'lodash/toString'
import toInteger from 'lodash/toInteger'
import isarr from 'wsemi/src/isarr.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import sep from 'wsemi/src/sep.mjs'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import delay from 'wsemi/src/delay.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import binarySearch from '../js/binarySearch.mjs'
import globalMemory from '../js/globalMemory.mjs'
import WPanelScrollyCore from './WPanelScrollyCore.vue'
import WJsonViewCore from './WJsonViewCore.vue'

//gm
let gm = globalMemory()

/**
 * @vue-prop {*} data 輸入資料陣列或物件
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=5] 輸入上下方預先載入元素數量，預設5
 * @vue-prop {String} [iconColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [keyColor='grey darken-2'] 輸入鍵值顏色字串，預設'grey darken-2'
 * @vue-prop {String} [keyNumbersColor='grey lighten-1'] 輸入鍵值內含子節點數量顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [numColor='indigo accent-2'] 輸入值為數值時的顏色字串，預設'indigo accent-2'
 * @vue-prop {String} [strColor='orange accent-2'] 輸入值為字串時的顏色字串，預設'orange accent-2'
 * @vue-prop {String} [bolColor='#ab0d90'] 輸入值為布林值時的顏色字串，預設'#ab0d90'
 * @vue-prop {String} [funColor='purple accent-2'] 輸入值為函數時的顏色字串，預設'purple accent-2'
 * @vue-prop {String} [defaultColor='grey darken-4'] 輸入值為其他類型時的顏色字串，預設'grey darken-4'
 * @vue-prop {Boolean} [defDisplayChildren=true] 輸入是否預先展開全部節點，預設true
 * @vue-prop {String} [searchEmpty='Empty'] 輸入無過濾結果字串，預設'Empty'
 */
export default {
    components: {
        WPanelScrollyCore,
        WJsonViewCore,
    },
    props: {
        data: {},
        filterKeywords: {
            type: String,
            default: '',
        },
        viewHeightMax: {
            type: Number,
            default: 400,
        },
        itemMinHeight: {
            type: Number,
            default: 24,
        },
        itemsPreload: {
            type: Number,
            default: 5,
        },
        iconColor: {
            type: String,
            default: 'grey',
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
        defDisplayChildren: {
            type: Boolean,
            default: true,
        },
        searchEmpty: {
            type: String,
            default: 'Empty',
        },
    },
    data: function() {
        return {
            //itemDiv的style記得給width:100%，因ie11的flex內文字會自動撐開版面導致不會換行
            mmkey: null,
            useColors: {},
            changeDisplayChildren: true, //是否有變更displayChildren
            changeDisplayChildrenIndex: null, //變更displayChildren的item指標
            changeHeight: true, //是否有變更高度, 預設true使一開始能強制計算各節點高度
            changeFilter: false, //是否有變更過濾關鍵字
            toggling: false, //是否顯隱節點中
            scrollRatio: 0, //捲動比例
            lineNumberWidth: 0, //列號區寬度
            scrollInfor: null, //目前捲軸資訊
            toggleInfor: {}, //之前捲軸位置資訊物件
            itemsHeight: 0, //儲存全部項目高度
            filterKeywordsTemp: '', //上次過濾關鍵字
            viewInfor: {},
            //items: [],
            useItems: [],
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //refresh
        vo.refresh('mounted')

    },
    beforeDestroy: function() {
        //console.log('beforeMount')

        let vo = this

        //remove
        gm.remove(vo.mmkey)

    },
    watch: {

        data: {
            immediate: true,
            handler(value) {
                //console.log('watch data', value)

                let vo = this

                //check
                if (vo.mmkey === null) {

                    //mmkey
                    vo.mmkey = genID()

                }
                else {

                    //remove
                    gm.remove(vo.mmkey)

                }

                //items
                let items = vo.parseData(vo.data)

                //lineNumberWidth, 每個字元使用13px寬度
                let lineNumberWidth = (Math.ceil(Math.pow(size(items), 0.1)) + 1) * 13

                //save items
                //vo.items = items
                gm.set(vo.mmkey, items)

                //save lineNumberWidth
                vo.lineNumberWidth = lineNumberWidth

                //refresh
                vo.refresh('watch')

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

        changeFilterKeyWords: function() {
            //console.log('computed changeFilterKeyWords')

            let vo = this

            //ft to trigger
            let ft = vo.filterKeywords

            //refreshDebounce
            vo.refreshDebounce('changeFilterKeyWords')

            return ft
        },

    },
    methods: {

        convertColors: function() {
            //console.log('methods convertColors')

            let vo = this

            vo.useColors.numColor = color2hex(vo.numColor)
            vo.useColors.strColor = color2hex(vo.strColor)
            vo.useColors.bolColor = color2hex(vo.bolColor)
            vo.useColors.funColor = color2hex(vo.funColor)
            vo.useColors.defaultColor = color2hex(vo.defaultColor)

        },

        refresh: async function(from) {
            //console.log('methods refresh', from)

            let vo = this

            let n = 0
            let limit = 3
            async function core() {
                let pm = genPm()

                //n
                n += 1

                //check, 取得元素高度因文字換行會有來回變動問題, 需有強制跳出機制
                if (n > limit) {
                    //console.log(`已重複refresh ${limit} 次, 強制跳出`)
                    pm.resolve(false)
                    return pm
                }

                //genUseItems
                vo.genUseItems()

                //delay
                await delay(1)

                //filterItems
                vo.filterItems()

                //delay
                await delay(1)

                //updateItems
                let b = vo.updateItems()

                //resolve
                pm.resolve(b)

                return pm
            }

            async function call() {

                //若任何元素高度有變更則再重新計算需顯示的節點, 此時的確有可能會載入新節點, 所以原本給予節點之預設高度不能太高, 偵測時元素就多是變高, 所以需顯示的節點就會變少, 避免造成重新載入新節點狀況
                let r = await core()
                while (r) {
                    r = await core()
                }

            }

            //call
            await call()

            //genUseItems
            vo.genUseItems()

            // //delayShow
            // for (let k = 0; k < size(vo.useItems); k++) {
            //     let v = vo.useItems[k]
            //     if (!v.delayShow) {
            //         v.delayShow = true
            //     }
            // }

        },

        refreshDebounce: function(from) {
            //console.log('methods refreshDebounce', from)

            let vo = this

            //debounce
            debounce(`${vo.mmkey}|refresh`, () => {

                //refresh
                vo.refresh(from)

            })

        },

        genUseItems: function() {
            //console.log('methods genUseItems')

            let vo = this

            //default scrollInfor
            if (vo.scrollInfor === null) {
                vo.scrollInfor = {
                    r: 0,
                    t: 0,
                    b: vo.viewHeightMax,
                    ch: vo.itemsHeight,
                }
            }

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //n
            let n = size(items)

            //check
            if (n === 0) {
                return
            }

            //indStart, 該元素區有侵入顯示區
            let indStartActual = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = vo.scrollInfor.t - (v.y + v.height)
                return dy
            })
            if (indStartActual === null) {
                indStartActual = 0
            }
            let indStart = Math.max(indStartActual - vo.itemsPreload, 0)

            //indEnd, 該元素區有侵入顯示區
            let indEndActual = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = vo.scrollInfor.b - v.y
                return dy
            })
            if (indEndActual === null) {
                indEndActual = n - 1
            }
            let indEnd = Math.min(indEndActual + vo.itemsPreload, n - 1)

            // //delayShow
            // let delayShow = false
            // let m = size(vo.useItems)
            // if (m > 0) {
            //     let bIndexStart = vo.useItems[0].index === indStart
            //     let bIndexEnd = vo.useItems[m - 1].index === indEndActual
            //     delayShow = bIndexStart && bIndexEnd
            // }

            //useItems
            let useItems = []
            for (let k = indStart; k <= indEnd; k++) {
                let v = {
                    ...items[k]
                }
                if (v.show && v.filterShow) {
                    v.screenY = v.y - vo.scrollInfor.t //換算成實際顯示y向的px位置
                    v.nowShow = k >= indStartActual //顯示區下方之預載節點都直接顯示供重算高度
                    //v.delayShow = delayShow //起訖指標相同才直接顯示, 否則就採用延遲顯示
                    useItems.push(v)
                }
            }

            //save
            vo.useItems = useItems

        },

        updateItems: function() {
            //console.log('methods updateItems')

            let vo = this

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //n
            let n = size(items)

            //check
            let showPath = []
            function nodeShow(parent) {
                let n = showPath.length
                if (parent) {
                    n -= 1
                }
                for (let i = 0; i < n; i++) {
                    if (!get(showPath[i], 'displayChildren', false)) {
                        return false
                    }
                }
                return true
            }
            if (vo.changeDisplayChildren) {

                //check
                let indexClick = 0
                if (vo.changeDisplayChildrenIndex !== null) {
                    indexClick = vo.changeDisplayChildrenIndex
                }

                //update show
                let levelClick = null
                for (let k = indexClick; k < n; k++) {
                    let v = items[k]

                    //有子節點
                    if (v.stateChildren === 1) {

                        //push
                        showPath.push({
                            displayChildren: v.displayChildren,
                            level: v.level,
                        })

                    }

                    if (k === indexClick) {
                        //點擊此節點, 一定是當前可見(v.show=true)才能被點擊

                        //save level
                        levelClick = v.level

                    }
                    else if (k > indexClick) {
                        //之後節點

                        //show
                        if (v.stateChildren === 1) {

                            //若有子節點, 則showPath內已添加自己, 需由上一層資訊判斷是否顯示
                            v.show = nodeShow(true)

                        }
                        else if (v.stateChildren === -1) {

                            //有子節點的尾節點, 由上一層資訊判斷是否顯示, 若顯示, 且起始節點亦需顯示子節點時, 才顯示尾節點
                            let o = last(showPath)
                            v.show = nodeShow(true) && o.displayChildren

                        }
                        else {

                            //show
                            v.show = nodeShow(false)

                        }

                    }

                    //子節點的尾節點
                    if (v.stateChildren === -1) {

                        //pop
                        showPath.pop()

                    }

                    //break
                    if (k > indexClick && v.level === levelClick) {
                        break
                    }

                }

            }

            //update height
            each(vo.$refs.wjvc, (cmp) => {
                let v = cmp.$el
                if (v.getAttribute) {
                    let nowShow = v.getAttribute('nowShow')
                    if (nowShow) {
                        let index = toInteger(v.getAttribute('index'))
                        if (index >= 0 && index < n) {
                            let h = v.clientHeight
                            if (items[index].height !== h) {
                                items[index].height = h
                                vo.changeHeight = true
                            }
                        }
                    }
                }
            })

            //check
            let b = vo.changeHeight || vo.changeDisplayChildren || vo.changeFilter
            if (b) {

                //update y
                let y = 0
                for (let k = 0; k < n; k++) {
                    let v = items[k]
                    if (v.y !== y) {
                        v.y = y
                    }
                    if (v.show && v.filterShow) {
                        y += v.height
                    }
                }

                //update itemsHeight
                let itemsHeightTemp = vo.itemsHeight
                if (itemsHeightTemp !== y) {
                    itemsHeightTemp = y
                }

                //check empty
                if (itemsHeightTemp === 0) {
                    itemsHeightTemp = 43 //先預算出empty時高度
                }

                //check same
                let pxLimit = 4 //全部項目高度誤差門檻(px)
                if (Math.abs(vo.itemsHeight - itemsHeightTemp) > pxLimit) { //偵測總項目高度是否與前次差超過pxLimit
                    vo.itemsHeight = itemsHeightTemp
                }
                else {
                    b = vo.changeFilter //若沒超過門檻pxLimit, 則b直接使用changeFilter, 否則b為包含changeHeight影響導致refresh while持續偵測
                }

                //reset
                vo.changeDisplayChildren = false
                vo.changeDisplayChildrenIndex = null
                vo.changeHeight = false
                vo.changeFilter = false

            }

            return b
        },

        parseData: function(d) {
            //console.log('methods parseData', d)

            let vo = this

            //convertColors, 解析資料比computed還快, 故需先執行轉換顏色
            vo.convertColors()

            let index = -1
            let items = []

            function cValue(v) {
                if (isNumber(v)) {
                    return {
                        type: 'num',
                        value: toString(v),
                    }
                }
                else if (isString(v)) {
                    return {
                        type: 'str',
                        value: `"${v}"`,
                    }
                }
                else if (isBoolean(v)) {
                    let c = 'false'
                    if (v) {
                        c = 'true'
                    }
                    return {
                        type: 'bol',
                        value: c,
                    }
                }
                else if (isFunction(v)) {
                    return {
                        type: 'fun',
                        value: v.toString(),
                    }
                }
                return {
                    type: 'default',
                    value: v,
                }
            }

            function addItem({ parentIndex, level, key, keyNumbers, value, valueColor, valueComma, valueTail, stateChildren }) {
                index += 1
                let item = {
                    index, //節點指標
                    level, //int, 節點層數(縮排)
                    paddingLeft: level * 24 + 16, //num, 給予16px放置顯隱icon
                    key, //str, 鍵
                    keyNumbers, //obj, 鍵值為陣列或物件顯示所含節點數量
                    value, //str, 值
                    valueColor, //str, 數值顏色, 需依照值型別給予
                    valueComma, //bol, 數值後方是否顯示","
                    valueTail, //str, 數值後方結尾符號, 僅用於陣列或物件, 供displayChildren=false時額外顯示出結尾符號
                    stateChildren, //num, 子節點狀態, 僅陣列或物件才為1, 陣列或物件的尾節點為-1, 其他為0
                    displayChildren: vo.defDisplayChildren, //bol, 是否顯示子節點
                    show: true, //bol, 是否顯示此節點
                    filterShow: true, //bol, 是否過濾後顯示此節點
                    height: vo.itemMinHeight, //num, 節點高度, 日後動態更新
                    y: index * vo.itemMinHeight, //num, 節點y向位置, 預設先由最小列高計算
                    parentIndex, //num, 父節點編號
                    // screenY: 0, //num, 節點換算比率後的顯示y向位置
                    // nowShow: false, //bol, 預先載入用, 判斷節點是否隸屬於顯示區域內, 可被重算元素高度
                    // delayShow: false, //bol, 延遲載入用, 是否顯示節點
                }
                items.push(item)
            }

            function pArray({ parentIndex, level, key, value, last }) {

                let selfIndex = index + 1
                let n = size(value)
                let keyNumbers = {
                    type: 'arr',
                    n,
                }

                let _key = `[`
                if (key !== null) {
                    _key = `${key} :  [`
                }
                addItem({
                    parentIndex,
                    level,
                    key: _key,
                    value: null,
                    valueColor: null,
                    valueTail: ']',
                    keyNumbers,
                    valueComma: false,
                    stateChildren: 1,
                })

                // each(value, (v, k) => {
                //     pSelf({
                //         level: level + 1,
                //         key: k,
                //         value: v,
                //         last: (k + 1) === n,
                //     })
                // })
                for (let k = 0; k < n; k++) {
                    pSelf({
                        parentIndex: selfIndex,
                        level: level + 1,
                        key: k,
                        value: value[k],
                        last: (k + 1) === n,
                    })
                }

                let cend = `],`
                if (last) {
                    cend = `]`
                }
                addItem({
                    parentIndex: selfIndex,
                    level,
                    key: cend,
                    value: null,
                    valueColor: null,
                    keyNumbers: null,
                    valueComma: false,
                    stateChildren: -1,
                })

            }

            function pObject({ parentIndex, level, key, value, last }) {

                let selfIndex = index + 1
                let n = size(keys(value))
                let keyNumbers = {
                    type: 'obj',
                    n,
                }

                let _key = `{`
                if (key !== null) {
                    _key = `${key} :  {`
                }
                addItem({
                    parentIndex,
                    level,
                    key: _key,
                    value: null,
                    valueColor: null,
                    valueTail: '}',
                    keyNumbers,
                    valueComma: false,
                    stateChildren: 1,
                })

                // each(value, (v, k) => {
                //     pSelf({
                //         level: level + 1,
                //         key: k,
                //         value: v,
                //         last: (k + 1) === n,
                //     })
                // })
                let kks = Object.keys(value)
                for (let i = 0; i < kks.length; i++) {
                    let k = kks[i]
                    pSelf({
                        parentIndex: selfIndex,
                        level: level + 1,
                        key: k,
                        value: value[k],
                        last: (k + 1) === n,
                    })
                }

                let cend = `},`
                if (last) {
                    cend = `}`
                }
                addItem({
                    parentIndex: selfIndex,
                    level,
                    key: cend,
                    value: null,
                    valueColor: null,
                    keyNumbers: null,
                    valueComma: false,
                    stateChildren: -1,
                })

            }

            function pSelf({ parentIndex, level, key, value, last }) {
                if (isarr(value)) {
                    pArray({ parentIndex, level, key, value, last })
                }
                else if (isobj(value)) {
                    pObject({ parentIndex, level, key, value, last })
                }
                else {
                    let r = cValue(value)
                    let c = vo.useColors[`${r.type}Color`]
                    addItem({
                        parentIndex,
                        level,
                        key: `${key} :  `,
                        value: r.value,
                        valueColor: c,
                        keyNumbers: null,
                        valueComma: !last,
                        stateChildren: 0,
                    })
                }
            }

            if (isarr(d)) {
                pArray({
                    parentIndex: null,
                    level: 0,
                    key: null,
                    value: d,
                    last: true,
                })
            }
            else if (isobj(d)) {
                pObject({
                    parentIndex: null,
                    level: 0,
                    key: null,
                    value: d,
                    last: true,
                })
            }
            else {
                let r = cValue(d)
                let c = vo.useColors[`${r.type}Color`]
                addItem({
                    parentIndex: null,
                    level: 0,
                    key: null,
                    value: r.value,
                    valueColor: c,
                    keyNumbers: null,
                    valueComma: null,
                    stateChildren: 0,
                })
            }

            return items
        },

        toggleItems: async function(item) {
            //console.log('methods toggleItems', item)

            let vo = this

            //luck
            vo.toggling = true

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //toggle, 先變更displayChildren使頁面icon動畫先更新
            items[item.index].displayChildren = !items[item.index].displayChildren

            //changeDisplayChildren, changeDisplayChildrenIndex
            vo.changeDisplayChildren = true
            vo.changeDisplayChildrenIndex = item.index

            //save toggleInfor
            vo.toggleInfor = {
                ...vo.scrollInfor,
                itemClickY: items[item.index].y, //點擊時, 點擊節點的頂端y座標
            }

            //refresh
            await vo.refresh('toggleItems')

            //triggerEvent, 上鎖階段呼叫自行創建的toggleItemsEnd事件
            vo.triggerEvent('toggleItemsEnd')

        },

        toggleItemsEnd: async function(e) {
            //console.log('methods toggleItemsEnd', e)

            let vo = this

            //check, 無上鎖時不能執行
            if (!vo.toggling) {
                return
            }

            //check
            let r = 0
            if (size(vo.useItems) > 0 && vo.itemsHeight > 0 && vo.toggleInfor.ch > 0) { //已有內容資料

                //內容高度變少, 點擊節點為隱藏動作
                if (vo.itemsHeight < vo.toggleInfor.ch) {

                    //內容高度小於等於當前視窗高度
                    if (vo.itemsHeight <= vo.viewHeightMax) {
                        r = 0
                        //console.log('隱藏, 內容高度小於當前視窗高度, r=', r)
                    }
                    //內容高度大於當前視窗高度
                    else {
                        r = vo.toggleInfor.t / (vo.itemsHeight - vo.viewHeightMax)
                        //console.log('隱藏, 內容高度大於當前視窗高度, r=', r, vo.toggleInfor.t, vo.itemsHeight, vo.viewHeightMax)
                    }

                }
                //內容高度變高, 點擊節點為顯示動作
                else {

                    //內容高度小於等於當前視窗高度
                    if (vo.itemsHeight <= vo.viewHeightMax) {
                        r = 0
                        //console.log('顯示, 內容高度小於當前視窗高度, r=', r)
                    }
                    //內容高度大於當前視窗高度
                    else {
                        r = vo.toggleInfor.t / (vo.itemsHeight - vo.viewHeightMax)
                        //console.log('顯示, 內容高度大於當前視窗高度, r=', r, vo.toggleInfor.t, vo.itemsHeight, vo.viewHeightMax)
                    }

                }

            }

            //scrollRatio, 變更scrollRatio不會觸發panel捲動事件, 得自己呼叫
            vo.scrollRatio = r

            //triggerEvent
            vo.triggerEvent()

            //unluck
            vo.toggling = false

        },

        changeScroll: async function(e) {
            //console.log('methods changeScroll', e)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            // //check, 不能判斷scrollInfor是否相等, 因wsp會有resize觸發此事件, 會給出內部的scrollInfor與上次相同故為原值, 若檢查相同則離開將無法重算各動態項目高度
            // if (isEqual(vo.scrollInfor, e)) {
            //     return
            // }

            //check, 有上鎖時不能執行
            if (vo.toggling) {
                return
            }

            //save
            vo.scrollInfor = e

            //refresh
            await vo.refresh('wsp')

        },

        filterItems: function() {
            //console.log('methods filterItems')

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //check filterKeywordsTemp
            if (vo.filterKeywordsTemp === vo.filterKeywords) {
                return
            }
            vo.filterKeywordsTemp = vo.filterKeywords

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //n
            let n = size(items)

            //updateParent
            function updateParent(k) {

                //self
                items[k].filterShow = true //可見

                //往上找parentIndex的父節點, 更改為顯示
                let pi = items[k].parentIndex
                while (pi !== null) {

                    //父節點
                    items[pi].filterShow = true //可見

                    //往後找level一樣者, 也改為顯示
                    let selfLevel = items[pi].level
                    for (let j = pi + 1; j < n; j++) { //往後找同level就是結束區塊符號
                        if (items[j].level === selfLevel) {
                            items[j].filterShow = true //可見
                            break
                        }
                    }

                    //reset pi
                    pi = items[pi].parentIndex

                }

            }

            //check
            if (size(vo.filterKeywords) === 0) {

                //預設可見
                for (let k = 0; k < n; k++) {
                    items[k].filterShow = true
                }

            }
            else {

                //預設不可見
                for (let k = 0; k < n; k++) {
                    items[k].filterShow = false
                }

                //kws
                let kws = sep(vo.filterKeywords.toLowerCase(), ' ')

                //filter
                let k = -1
                while (k < n) {
                    k += 1
                    if (k >= n - 1) {
                        break //可於內圈修改k, 故需檢核
                    }
                    let v = items[k]

                    //cKey, cValue
                    let cKey = toString(v.key).toLowerCase()
                    let cValue = toString(v.value).toLowerCase()
                    let b

                    //若鍵值(key)含有關建字
                    b = false
                    for (let i = 0; i < size(kws); i++) {
                        let kw = kws[i]
                        if (cKey.indexOf(kw) >= 0) {
                            b = true
                            break
                        }
                    }

                    //check
                    if (b) {

                        //updateParent
                        updateParent(k)

                        //self
                        items[k].filterShow = true //可見

                        //往後修改為顯示, 直至level一樣改為顯示才停止
                        let keyLevel = v.level
                        while (k < n) {
                            k += 1
                            if (k >= n - 1) {
                                break //可於內圈修改k, 故需檢核
                            }

                            //end-block
                            items[k].filterShow = true //可見

                            if (items[k].level === keyLevel) {
                                break
                            }

                        }

                        //continue
                        continue

                    }

                    //若值(value)含有關建字
                    b = false
                    for (let i = 0; i < size(kws); i++) {
                        let kw = kws[i]
                        if (cValue.indexOf(kw) >= 0) {
                            b = true
                            break
                        }
                    }

                    //check
                    if (b) {

                        //updateParent
                        updateParent(k)

                    }

                }

            }

            //changeFilter
            vo.changeFilter = true

        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //t
            let t = get(vo, '$refs.wsp.triggerEvent', null)
            if (t) {
                t(from)
            }

        },

    },
}
</script>

<style scoped>
</style>

