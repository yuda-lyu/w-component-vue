<template>
    <WScrollPanel
        ref="wsp"
        :ratio.sync="scrollRatio"
        :viewHeight="viewHeight"
        :contentHeight="itemsHeight"
        @change="scrollItems"
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

    </WScrollPanel>
</template>

<script>
import each from 'lodash/each'
import size from 'lodash/size'
import keys from 'lodash/keys'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
// import isArray from 'lodash/isArray' //會誤判function
// import isObject from 'lodash/isObject' //會誤判function
import isFunction from 'lodash/isFunction'
import toString from 'lodash/toString'
import toInteger from 'lodash/toInteger'
import isarr from 'wsemi/src/isarr.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import binarySearch from '../js/binarySearch.mjs'
import globalMemory from '../js/globalMemory.mjs'
import WScrollPanel from './WScrollPanel.vue'
import WJsonViewCore from './WJsonViewCore.vue'

//gm
let gm = globalMemory()

/**
 * @vue-prop {*} data 輸入資料陣列或物件
 * @vue-prop {Number} [viewHeight=400] 輸入顯示區高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=40] 輸入上下方預先載入元素數量，預設40
 * @vue-prop {String} [iconColor='#999'] 輸入顯隱icon按鈕顏色字串，預設'#999'
 * @vue-prop {String} [keyColor='#666'] 輸入鍵值顏色字串，預設'#666'
 * @vue-prop {String} [keyNumbersColor='#aaa'] 輸入鍵值內含子節點數量顏色字串，預設'#aaa'
 * @vue-prop {String} [numColor='#1c00d4'] 輸入值為數值時的顏色字串，預設'#1c00d4'
 * @vue-prop {String} [strColor='#ebaf61'] 輸入值為字串時的顏色字串，預設'#ebaf61'
 * @vue-prop {String} [bolColor='#ab0d90'] 輸入值為布林值時的顏色字串，預設'#ab0d90'
 * @vue-prop {String} [funColor='#ca56da'] 輸入值為函數時的顏色字串，預設'#ca56da'
 * @vue-prop {String} [defaultColor='#222'] 輸入值為其他類型時的顏色字串，預設'#222'
 * @vue-prop {Boolean} [defDisplayChildren=true] 輸入是否預先展開全部節點，預設true
 */
export default {
    components: {
        WScrollPanel,
        WJsonViewCore,
    },
    props: {
        data: {},
        viewHeight: {
            type: Number,
            default: 400,
        },
        itemMinHeight: {
            type: Number,
            default: 24,
        },
        itemsPreload: {
            type: Number,
            default: 40,
        },
        iconColor: {
            type: String,
            default: '#999',
        },
        keyColor: {
            type: String,
            default: '#666',
        },
        keyNumbersColor: {
            type: String,
            default: '#aaa',
        },
        numColor: {
            type: String,
            default: '#1c00d4',
        },
        strColor: {
            type: String,
            default: '#ebaf61',
        },
        bolColor: {
            type: String,
            default: '#80d85f',
        },
        funColor: {
            type: String,
            default: '#ca56da',
        },
        defaultColor: {
            type: String,
            default: '#222',
        },
        defDisplayChildren: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            //itemDiv的style記得給width:100%，因ie11的flex內文字會自動撐開版面導致不會換行
            mmkey: null,
            changeDisplayChildren: true, //是否有變更displayChildren
            changeDisplayChildrenIndex: null, //變更displayChildren的item指標
            changeHeight: true, //是否有變更高度, 預設true使一開始能強制計算各節點高度
            toggling: false, //是否顯隱節點中
            scrollRatio: 0, //捲動比例
            lineNumberWidth: 0, //列號區寬度
            scrollInfor: null, //目前捲軸資訊
            toggleInfor: {}, //之前捲軸位置資訊物件
            itemsHeight: 0, //儲存全部項目高度
            viewInfor: {},
            //items: [],
            //useItems: [],
            useItems: {},
        }
    },
    beforeDestroy: function() {
        //console.log('beforeMount')

        let vo = this

        //remove
        gm.remove(vo.mmkey)

    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //refresh
        vo.refresh('mounted')

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
    },
    methods: {

        refresh: async function(from) {
            //console.log('methods refresh', from)

            let vo = this

            let n = 0
            let limit = 3
            function core() {
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

                //updateItems
                setTimeout(function() {
                    let b = vo.updateItems()
                    pm.resolve(b)
                }, 1)

                return pm
            }

            function call() {
                let pm = genPm()

                //setTimeout
                setTimeout(async function() {

                    //若任何元素高度有變更則再重新計算需顯示的節點, 此時的確有可能會載入新節點, 所以原本給予節點之預設高度不能太高, 偵測時元素就多是變高, 所以需顯示的節點就會變少, 避免造成重新載入新節點狀況
                    let r = await core()
                    while (r) {
                        r = await core()
                    }

                    pm.resolve()
                }, 1)

                return pm
            }

            await call()

        },

        genUseItems: function() {
            //console.log('methods genUseItems')

            let vo = this

            //default scrollInfor
            if (vo.scrollInfor === null) {
                vo.scrollInfor = {
                    r: 0,
                    t: 0,
                    b: vo.viewHeight,
                    ch: vo.itemsHeight,
                }
            }

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //n
            let n = size(items)

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

            //useItems
            let useItems = []
            for (let k = indStart; k <= indEnd; k++) {
                let v = items[k]
                if (v.show) {
                    v.screenY = v.y - vo.scrollInfor.t //換算成實際顯示y向的px位置
                    v.nowShow = k >= indStartActual //顯示區下方之預載節點都直接顯示供重算高度
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
            if (vo.changeDisplayChildren) {

                //check
                let index = 0
                if (vo.changeDisplayChildrenIndex !== null) {
                    index = vo.changeDisplayChildrenIndex
                }

                //update show
                let hide = false
                let level = null
                let ind = null
                for (let k = index; k < n; k++) {
                    let v = items[k]

                    //detect start
                    if (!hide && !v.displayChildren) {
                        hide = true
                        level = v.level
                        ind = k
                    }

                    //detect level
                    if (ind !== k && hide) {
                        if (v.level > level) {
                            if (v.show !== false) {
                                v.show = false
                            }
                        }
                        else if (v.level === level) {
                            if (v.show !== false) {
                                v.show = false
                            }
                            break
                        }
                    }
                    else {
                        if (v.show !== true) {
                            v.show = true
                        }
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
            let b = vo.changeHeight || vo.changeDisplayChildren
            if (b) {

                //update y
                let y = 0
                for (let k = 0; k < n; k++) {
                    let v = items[k]
                    if (v.y !== y) {
                        v.y = y
                    }
                    if (v.show) {
                        y += v.height
                    }
                }

                //update itemsHeight
                if (vo.itemsHeight !== y) {
                    vo.itemsHeight = y
                }

                //reset
                vo.changeDisplayChildren = false
                vo.changeDisplayChildrenIndex = null
                vo.changeHeight = false

            }

            return b
        },

        parseData: function(d) {
            //console.log('methods parseData', d)

            let vo = this

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

            function addItem({ level, key, keyNumbers, value, valueColor, valueComma, valueTail, hasChildren }) {
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
                    hasChildren, //bol, 是否有子節點, 僅陣列或物件才為true
                    displayChildren: vo.defDisplayChildren, //bol, 是否顯示子節點
                    show: true, //bol, 是否顯示此節點
                    height: vo.itemMinHeight, //num, 節點高度, 日後動態更新
                    y: index * vo.itemMinHeight, //num, 節點y向位置, 預設先由最小列高計算
                    screenY: 0, //num, 節點換算比率後的顯示y向位置
                    nowShow: false, //bol, 預先載入時是否隸屬於顯示區域內, 不顯示者
                }
                items.push(item)
            }

            function pArray({ level, key, value, last }) {

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
                    level,
                    key: _key,
                    value: null,
                    valueColor: null,
                    valueTail: ']',
                    keyNumbers,
                    valueComma: false,
                    hasChildren: true,
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
                    level,
                    key: cend,
                    value: null,
                    valueColor: null,
                    keyNumbers: null,
                    valueComma: false,
                    hasChildren: false,
                })

            }

            function pObject({ level, key, value, last }) {

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
                    level,
                    key: _key,
                    value: null,
                    valueColor: null,
                    valueTail: '}',
                    keyNumbers,
                    valueComma: false,
                    hasChildren: true,
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
                    level,
                    key: cend,
                    value: null,
                    valueColor: null,
                    keyNumbers: null,
                    valueComma: false,
                    hasChildren: false,
                })

            }

            function pSelf({ level, key, value, last }) {
                if (isarr(value)) {
                    pArray({ level, key, value, last })
                }
                else if (isobj(value)) {
                    pObject({ level, key, value, last })
                }
                else {
                    let r = cValue(value)
                    let c = vo[`${r.type}Color`]
                    addItem({
                        level,
                        key: `${key} :  `,
                        value: r.value,
                        valueColor: c,
                        keyNumbers: null,
                        valueComma: !last,
                        hasChildren: false,
                    })
                }
            }

            if (isarr(d)) {
                pArray({
                    level: 0,
                    key: null,
                    value: d,
                    last: true,
                })
            }
            else if (isobj(d)) {
                pObject({
                    level: 0,
                    key: null,
                    value: d,
                    last: true,
                })
            }
            else {
                let r = cValue(d)
                let c = vo[`${r.type}Color`]
                addItem({
                    level: 0,
                    key: null,
                    value: r.value,
                    valueColor: c,
                    keyNumbers: null,
                    valueComma: null,
                    hasChildren: false,
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
            vo.$refs.wsp.triggerEvent('toggleItemsEnd')

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
                    if (vo.itemsHeight <= vo.viewHeight) {
                        r = 0
                        //console.log('隱藏, 內容高度小於當前視窗高度, r=', r)
                    }
                    //內容高度大於當前視窗高度
                    else {
                        r = vo.toggleInfor.t / (vo.itemsHeight - vo.viewHeight)
                        //console.log('隱藏, 內容高度大於當前視窗高度, r=', r, vo.toggleInfor.t, vo.itemsHeight, vo.viewHeight)
                    }

                }
                //內容高度變高, 點擊節點為顯示動作
                else {

                    //內容高度小於等於當前視窗高度
                    if (vo.itemsHeight <= vo.viewHeight) {
                        r = 0
                        //console.log('顯示, 內容高度小於當前視窗高度, r=', r)
                    }
                    //內容高度大於當前視窗高度
                    else {
                        r = vo.toggleInfor.t / (vo.itemsHeight - vo.viewHeight)
                        //console.log('顯示, 內容高度大於當前視窗高度, r=', r, vo.toggleInfor.t, vo.itemsHeight, vo.viewHeight)
                    }

                }

            }

            //scrollRatio, 外部變更scrollRatio不會觸發捲動事件, 得自己呼叫
            vo.scrollRatio = r

            //triggerEvent
            vo.$refs.wsp.triggerEvent()

            //unluck
            vo.toggling = false

        },

        scrollItems: function(e) {
            //console.log('methods scrollItems', e)

            let vo = this

            //check, 有上鎖時不能執行
            if (vo.toggling) {
                return
            }

            //save
            vo.scrollInfor = e

            //refresh
            vo.refresh('scrollItems')

        },

    },
}
</script>

<style scoped>
</style>

