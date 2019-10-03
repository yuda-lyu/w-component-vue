<template>
    <div
        :style="[{'position':'relative','overflow-y':'auto','overflow-x':'hidden','height':listHeight+'px'}]"
        @scroll="scrollItems"
    >

        <div :style="[{'height':`${contentHeight}px`}]"></div>

        <template v-for="(item,kitem) in useItems">
            <template v-if="item.screenY<=contentHeight && item.show">
                <div
                    ref="itemDiv"
                    :nowShow="item.nowShow"
                    :style="[{'position':'absolute','top':`${item.screenY}px`,'width':'100%','opacity':item.nowShow?1:0.01}]"
                    :index="item.index"
                    :key="kitem"
                >

                    <div :style="[styleLineNumber,{'width':lineNumberWidth+'px'}]">{{item.index+1}}</div>

                    <div :style="[{'display':'table-cell','padding-left':item.paddingLeft+'px'}]">

                        <div style="position:relative;">

                            <div style="position:absolute; top:0px; left:0px; transform:translateX(-100%); ">
                                <span v-if="item.hasChildren" @click="toggleItems(item)">
                                    <span :class="[{'caretRight':true,'showChildren':item.displayChildren}]">
                                        <span class="center">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="iconColor" width="11px" height="11px" x="0px" y="0px" viewBox="0 0 415.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>
                                        </span>
                                    </span>
                                </span>
                                <span style="display:inline-block; width:16px;" v-else></span>
                            </div>

                            <div style="text-indent:-2rem; margin-left:2em;">

                                <span :style="[{'color':keyColor}]" v-if="item.key">

                                    <span>{{item.key}}</span>

                                    <span :style="[{'margin':'0px 10px','color':keyNumbersColor}]" v-if="item.keyNumbers">
                                        <span v-if="item.keyNumbers.type==='arr'">[{{item.keyNumbers.n}}]</span>
                                        <span v-if="item.keyNumbers.type==='obj'"><span>{</span><span>{{item.keyNumbers.n}}</span><span>}</span></span>
                                    </span>

                                    <span v-if="!item.displayChildren"><span style="margin-right:10px;">...</span>{{item.valueTail}}</span>

                                </span>

                                <template v-if="item.value">

                                    <span :style="[{'color':item.valueColor}]">{{item.value}}</span>

                                    <span :style="[{'color':keyColor}]" v-if="item.valueComma">,</span>

                                </template>

                            </div>

                        </div>

                    </div>

                </div>
            </template>
        </template>

    </div>
</template>

<script>
import each from 'lodash/each'
import size from 'lodash/size'
import keys from 'lodash/keys'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'
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

// function g(items) {
//     return items.map((v) => {
//         return {
//             i: v.index,
//             //v: `${v.key}: ${v.value}`,
//             s: v.show,
//             //d: v.displayChildren,
//             y: v.y,
//             useY: v.useY,
//             screenY: v.screenY,
//         }
//     })
// }

//gm
let gm = globalMemory()

/**
 * @vue-prop {*} data 輸入資料陣列或物件
 * @vue-prop {Number} [listHeight=400] 輸入顯示區高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=40] 輸入上下方預先載入元素數量，預設40
 * @vue-prop {String} [iconColor='#999999'] 輸入顯隱icon按鈕顏色字串，預設'#999999'
 * @vue-prop {String} [keyColor='#666666'] 輸入鍵值顏色字串，預設'#666666'
 * @vue-prop {String} [keyNumbersColor='#aaaaaa'] 輸入鍵值內含子節點數量顏色字串，預設'#aaaaaa'
 * @vue-prop {String} [numColor='#1c00d4'] 輸入值為數值時的顏色字串，預設'#1c00d4'
 * @vue-prop {String} [strColor='#ebaf61'] 輸入值為字串時的顏色字串，預設'#ebaf61'
 * @vue-prop {String} [bolColor='#ab0d90'] 輸入值為布林值時的顏色字串，預設'#ab0d90'
 * @vue-prop {String} [funColor='#ca56da'] 輸入值為函數時的顏色字串，預設'#ca56da'
 * @vue-prop {String} [defaultColor='#222222'] 輸入值為其他類型時的顏色字串，預設'#222222'
 * @vue-prop {Boolean} [defDisplayChildren=true] 輸入是否預先展開全部節點，預設true
 */
export default {
    props: {
        data: {},
        listHeight: {
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
            default: '#999999',
        },
        keyColor: {
            type: String,
            default: '#666666',
        },
        keyNumbersColor: {
            type: String,
            default: '#aaaaaa',
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
            default: '#222222',
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
            changeDisplayChildren: true, //變更displayChildren
            changeDisplayChildrenIndex: null, //變更displayChildren的item指標
            changeHeight: true, //變更高度
            lineNumberWidth: 0, //列號區寬度
            scrollTop: 0, //目前捲軸位置
            scrollRatio: 1, //目前全部節點高度與捲軸內容高度的比值
            contentHeight: 0, //實際撐開用內容高度, 大部分情況等於scrollHeight, 可能會差異一個水平捲軸的高度16px, 此處以contentHeight為計算基準
            contentHeightMax: 1e7, //最大撐開用內容高度, chrome當元素高度超過1.4e7px, 排版沒問題但顯示會被截斷, 故需要通過設定最大高度做映射
            itemsHeight: 0, //儲存全部項目高度
            styleLineNumber: {
                'display': 'table-cell',
                'padding-right': '10px',
                'text-align': 'right',
                'font-size': '0.8rem',
                'color': '#f26',
                'user-select': 'none',
            },
            //items: [],
            useItems: [],
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

        //change, watch時觸發的change因為元素沒實際高度故無法自動調整, 得於mounted再觸發一次
        vo.change()

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

                //change
                vo.change()

            }
        }

    },
    computed: {
    },
    methods: {

        change: async function() {
            //console.log('methods change')

            let vo = this

            //core
            let i = 0
            function core() {
                let pm = genPm()

                //count
                i += 1

                //genUseItems
                vo.genUseItems()

                //updateItems
                setTimeout(function() {
                    let b = vo.updateItems()
                    pm.resolve(b)
                }, 50)

                //break, 重複更新5次視為上限, 避免因數據量大導致事件驅動較慢, 導致持續拉取未顯示區節點, 並導致持續更新高度而無法跳出無限迴圈
                if (i >= 5) {
                    pm.resolve(false)
                }

                return pm
            }

            //若任何元素高度有變更則再重新計算需顯示的節點, 此時的確有可能會載入新節點, 所以原本給予節點之預設高度不能太高, 偵測時元素就多是變高, 所以需顯示的節點就會變少, 避免造成重新載入新節點狀況
            let r = await core()
            while (r) {
                r = await core()
            }

        },

        genUseItems: function() {
            //console.log('methods genUseItems')

            let vo = this

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //y1, y2
            let y1
            let y2
            let he = vo.contentHeight - vo.listHeight
            let heAll = vo.itemsHeight
            let r1
            let r2
            let scrollTop
            if (he >= 0) {
                scrollTop = Math.min(vo.scrollTop, he)
                let r = scrollTop / he //0~1
                let rd12 = vo.listHeight / vo.scrollRatio / he //顯示區上下處的正規化縮放比率差, 需針對最大撐開高度對應實際全部節點高度的比率做修正
                r1 = r / (1 + rd12) //顯示區上方的正規化縮放比率
                r1 = Math.max(r1, 0)
                r2 = r1 + rd12 //顯示區下方的正規化縮放比率
                r2 = Math.min(r2, 1)
                y1 = r1 * heAll
                y2 = r2 * heAll
            }
            else {
                scrollTop = 0
                r1 = 0
                r2 = 1
                y1 = 0
                y2 = vo.itemsHeight
            }

            //n
            let n = size(items)

            //indStart, 該元素區有侵入顯示區
            let indStartActual = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = y1 - (v.y + v.height)
                return dy
            })
            if (indStartActual === null) {
                indStartActual = 0
            }
            let indStart = Math.max(indStartActual - vo.itemsPreload, 0)

            //indEnd, 該元素區有侵入顯示區
            let indEndActual = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = y2 - v.y
                return dy
            })
            if (indEndActual === null) {
                indEndActual = n - 1
            }
            let indEnd = Math.min(indEndActual + vo.itemsPreload, n - 1)

            //useItems
            let useItems = []
            for (let k = indStart; k <= indEnd; k++) {
                let v = cloneDeep(items[k])
                v.screenY = ((v.y / heAll) - r1) * vo.contentHeight * vo.scrollRatio + scrollTop //換算成實際顯示y向的px位置
                v.nowShow = k >= indStartActual //顯示區下方之預載節點都直接顯示供重算高度
                useItems.push(v)
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
            each(vo.$refs.itemDiv, (v) => {
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
            })

            //check
            let changed = vo.changeHeight || vo.changeDisplayChildren
            if (changed) {

                //update y, useY, useHeight
                let y = 0
                let useY = 0
                for (let k = 0; k < n; k++) {
                    let v = items[k]

                    //y
                    if (v.y !== y) {
                        v.y = y
                    }

                    //useHeight
                    if (v.show) {
                        y += v.height
                        if (v.useHeight !== v.height) {
                            v.useHeight = v.height
                        }
                    }
                    else {
                        if (v.useHeight !== 0) {
                            v.useHeight = 0
                        }
                    }

                    //useY
                    if (v.useY !== useY) {
                        v.useY = useY
                    }
                    useY += v.useHeight

                }

                //update itemsHeight
                if (vo.itemsHeight !== y) {
                    vo.itemsHeight = y
                    vo.contentHeight = Math.min(vo.itemsHeight, vo.contentHeightMax)
                    vo.scrollRatio = vo.itemsHeight / vo.contentHeight
                }

                //reset
                vo.changeDisplayChildren = false
                vo.changeDisplayChildrenIndex = null
                vo.changeHeight = false

            }

            return changed
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
                    useHeight: 0, //num, 真實使用高度, 受show影響, 加速用
                    y: index * vo.itemMinHeight, //num, 節點y向位置, 預設先由最小列高計算
                    useY: index * vo.itemMinHeight, //num, 真實y向位置, 預設先由最小列高計算
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

        toggleItems: function(item) {
            //console.log('methods toggleItems',item)

            let vo = this

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //toggle, 先變更displayChildren使頁面icon動畫先更新
            items[item.index].displayChildren = !items[item.index].displayChildren

            //setTimeout
            setTimeout(() => {

                //changeDisplayChildren, changeDisplayChildrenIndex
                vo.changeDisplayChildren = true
                vo.changeDisplayChildrenIndex = item.index

                //change
                vo.change()

            }, 10)

        },

        scrollItems: debounce(function(e) {
            //console.log('methods scrollItems', e.target.scrollTop)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //save
                vo.scrollTop = e.target.scrollTop

                //change
                vo.change()

            }, 10)

        }, 100),

    },
}
</script>

<style scoped>
.caretRight {
    transform: translateY(-1px);
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
}
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.showChildren {
    transform: rotate(90deg);
}
</style>

