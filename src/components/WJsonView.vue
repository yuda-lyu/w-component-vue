<template>
    <div :style="[{'position':'relative','overflow-y':'auto','height':listHeight+'px'}]" @scroll="scrollItems">

        <div :style="[{'height':itemsHeight+'px'}]"></div>

        <div :style="[{'position':'absolute','top':'0px'}]">

            <div :style="[{'height':preItemsHeight+'px'}]"></div>

            <template v-for="(item,kitem) in useItems">
                <div ref="itemDiv" :index="item.index" :key="kitem" v-if="item.show">

                    <div :style="[styleLineNumber,{'width':lineNumberWidth+'px'}]">{{item.lineNumber}}</div>

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

            <div :style="[{'height':aftItemsHeight+'px'}]"></div>

        </div>

    </div>
</template>

<script>
import each from 'lodash/each'
import size from 'lodash/size'
import keys from 'lodash/keys'
import get from 'lodash/get'
import find from 'lodash/find'
import findLast from 'lodash/findLast'
import debounce from 'lodash/debounce'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import toString from 'lodash/toString'
import toInteger from 'lodash/toInteger'

/**
 * @vue-prop {*} data 輸入資料陣列或物件
 * @vue-prop {Number} [listHeight=400] 輸入顯示區高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=40] 輸入預先載入上下方向的元素數量，預設40
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
            default: '#ab0d90',
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
            lineNumberWidth: 0, //列號區寬度
            preItemsHeight: 0, //上方空白區高度
            aftItemsHeight: 0, //下方空白區高度
            scrollTop: 0, //目前捲軸位置
            itemsHeight: 0, //儲存全部項目高度
            styleLineNumber: {
                'display': 'table-cell',
                'padding-right': '10px',
                'text-align': 'right',
                'font-size': '0.8rem',
                'color': '#f26',
                'user-select': 'none',
            },
            items: [],
            useItems: [],
        }
    },
    mounted: function() {
    },
    watch: {

        data: {
            immediate: true,
            handler(value) {
                //console.log('watch data', value)

                let vo = this

                //items
                let items = vo.parseData(vo.data)

                //lineNumberWidth, 每個字元使用13px寬度
                let lineNumberWidth = (Math.ceil(Math.pow(size(items), 0.1)) + 1) * 13

                //save
                vo.items = items
                vo.lineNumberWidth = lineNumberWidth

                //change
                vo.change()

            }
        }

    },
    computed: {
    },
    methods: {

        change: function() {
            //console.log('methods change')

            let vo = this

            vo.getUseItems()
            vo.updateItems()
            vo.getUseItems()

        },

        getUseItems: function() {
            //console.log('methods getUseItems')

            let vo = this

            //items, 直接存取vo.item, 不能用cloneDeep對大數據太耗時
            let items = (vo.items)

            //y1, y2
            let y1 = vo.scrollTop
            let y2 = y1 + vo.listHeight

            //indStart, indEnd
            let n = size(items)
            let o
            o = findLast(items, (v, k) => {
                return (v.y + v.useHeight) < y1
            })
            let indStart = get(o, 'index', 0)
            indStart = Math.max(indStart - vo.itemsPreload, 0)
            o = find(items, (v, k) => {
                return v.y > y2
            })
            let indEnd = get(o, 'index', n)
            indEnd = Math.min(indEnd + vo.itemsPreload, n - 1)

            //useItems
            let useItems = []
            let preItemsHeight = 0
            let aftItemsHeight = 0
            each(items, (v, k) => {
                if (k < indStart) {
                    preItemsHeight += v.useHeight
                }
                else if (k > indEnd) {
                    aftItemsHeight += v.useHeight
                }
                else if (v.show) {
                    useItems.push(v)
                }
            })

            //save
            vo.useItems = useItems
            vo.preItemsHeight = preItemsHeight
            vo.aftItemsHeight = aftItemsHeight

        },

        updateItems: function() {
            //console.log('methods updateItems')

            let vo = this

            //items, 直接存取vo.item, 不能用cloneDeep對大數據太耗時
            let items = (vo.items)

            //update height
            each(vo.$refs.itemDiv, (v) => {
                let index = toInteger(v.getAttribute('index'))
                if (index >= 0 && index <= size(items) - 1) {
                    let h = v.clientHeight
                    if (items[index].height !== h) {
                        items[index].height = h
                    }
                }
            })

            //update show
            let hide = false
            let level = null
            let ind = null
            each(items, (v, k) => {

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
                        hide = false
                        level = null
                    }
                }
                else {
                    if (v.show !== true) {
                        v.show = true
                    }
                }

            })

            //update y, useHeight
            let y = 0
            each(items, (v) => {
                if (v.y !== y) {
                    v.y = y
                }
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
            })

            //update itemsHeight
            if (vo.itemsHeight !== y) {
                vo.itemsHeight = y
            }

        },

        parseData: function(d) {
            //console.log('methods parseData', d)

            let vo = this

            let lineNumber = 0
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
                lineNumber += 1
                let index = lineNumber - 1
                items.push({
                    index, //節點指標
                    lineNumber, //int, 列編號
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
                    y: index * vo.itemMinHeight, //num, 真實y向位置, 預設先由最小列高計算
                })
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

                let i = 0
                each(value, (v, k) => {
                    i += 1
                    pSelf({
                        level: level + 1,
                        key: k,
                        value: v,
                        last: i === n,
                    })
                })

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

                let i = 0
                each(value, (v, k) => {
                    i += 1
                    pSelf({
                        level: level + 1,
                        key: k,
                        value: v,
                        last: i === n,
                    })
                })

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
                if (isArray(value)) {
                    pArray({ level, key, value, last })
                }
                else if (isObject(value)) {
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

            if (isArray(d)) {
                pArray({
                    level: 0,
                    key: null,
                    value: d,
                    last: true,
                })
            }
            else if (isObject(d)) {
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

            //toggle
            vo.items[item.index].displayChildren = !vo.items[item.index].displayChildren

            //setTimeout
            setTimeout(() => {

                //change
                vo.change()

            }, 10)

        },

        scrollItems: debounce(function(e) {
            //console.log('methods scrollItems', e.target.scrollTop)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //save scrollTop
                let scrollTop = e.target.scrollTop
                vo.scrollTop = scrollTop

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

