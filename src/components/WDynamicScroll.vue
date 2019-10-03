<template>
    <div
        :style="[{'position':'relative','overflow-y':'auto','overflow-x':'hidden','height':`${listHeight}px`}]"
        @scroll="scrollItems"
    >

        <div :style="[{'height':`${contentHeight}px`}]"></div>

        <template v-for="(item,kitem) in useItems">
            <template v-if="item.screenY<=contentHeight">
                <div
                    ref="itemDiv"
                    :nowShow="item.nowShow"
                    :style="[{'position':'absolute','top':`${item.screenY}px`,'opacity':item.nowShow?1:0.01}]"
                    :index="item.index"
                    :key="kitem"
                >
                    <slot
                        name="block"
                        :row="item.row"
                        :irow="item.index"
                    ></slot>
                </div>
            </template>
        </template>

    </div>
</template>

<script>
import each from 'lodash/each'
import map from 'lodash/map'
import get from 'lodash/get'
import size from 'lodash/size'
import debounce from 'lodash/debounce'
import cint from 'wsemi/src/cint.mjs'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import binarySearch from '../js/binarySearch.mjs'
import globalMemory from '../js/globalMemory.mjs'

//gm
let gm = globalMemory()

/**
 * @vue-prop {Array} [rows=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {Number} [listHeight=400] 輸入顯示區高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=40] 輸入上下方預先載入元素數量，預設40
 */
export default {
    props: {
        rows: {
            type: Array,
            default: () => [],
        },
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
    },
    data: function() {
        return {
            mmkey: null,
            changeHeight: true, //是否有變更高度, 初始化給true使第一次顯示能自動重算節點高度
            scrollTop: 0, //目前捲軸位置
            scrollRatio: 1, //目前全部節點高度與捲軸內容高度的比值
            contentHeight: 0, //實際撐開用內容高度, 大部分情況等於scrollHeight, 可能會差異一個水平捲軸的高度16px, 此處以contentHeight為計算基準
            contentHeightMax: 1e7, //最大撐開用內容高度, chrome當元素高度超過1.4e7px, 排版沒問題但顯示會被截斷, 故需要通過設定最大高度做映射
            itemsHeight: 0, //全部節點高度
            //items: [], //封裝後節點陣列
            useItems: [], //實際需顯示節點陣列
            itemHasShow: false, //資料是否含有show欄位, 可供外部強制顯隱之用
            modifyFromOuter: false, //外部強制變更節點顯隱, 用於阻止watch觸發change
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

        //changeView, watch時觸發的change因為元素沒實際高度故無法自動調整, 得於mounted再觸發一次
        vo.changeView()

    },
    watch: {

        rows: {
            immediate: true,
            deep: true,
            handler(value) {
                //console.log('watch rows', value)

                let vo = this

                //check
                if (size(value) === 0) {
                    return
                }

                //check, 外部呼叫變更數據時, 需阻擋重載數據
                if (!vo.modifyFromOuter) {

                    //changeRows
                    vo.changeRows(value)

                }

            }
        }

    },
    computed: {
    },
    methods: {

        checkRows: function(rows) {
            //console.log('methods checkRows', rows)

            //check
            if (!isarr(rows)) {
                let msg = 'rows is not array'
                //console.log(msg)
                return msg
            }
            if (size(rows) === 0) {
                let msg = 'rows is empty'
                //console.log(msg)
                return msg
            }

            return ''
        },

        changeRows: function(rows) {
            //console.log('methods changeRows', rows)

            let vo = this

            //check
            if (vo.checkRows(rows) !== '') {
                return
            }

            //mmkey
            if (vo.mmkey === null) {

                //mmkey
                vo.mmkey = genID()

            }
            else {

                //remove
                gm.remove(vo.mmkey)

            }

            //itemHasShow
            vo.itemHasShow = get(rows, '[0].show', false)

            //items, lodash使用new Array建構比for+push快
            let items = map(rows, (v, k) => {
                return {
                    index: k,
                    height: vo.itemMinHeight,
                    y: k * vo.itemMinHeight,
                    screenY: 0, //節點換算比率後的顯示y向位置
                    nowShow: false, //預先載入時是否隸屬於顯示區域內
                    row: v,
                }
            })

            //save
            //vo.items = items
            gm.set(vo.mmkey, items)

            //changeView
            vo.changeView()

        },

        changeView: async function(forceUpdate = false) {
            //console.log('methods changeView', forceUpdate)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //core
            let i = 0
            function core() {
                let pm = genPm()

                //count
                i += 1

                //forceUpdate, 僅第1次有效, 第2次以上則不強制更新, 否則updateItems會一直處於有變更狀態造成無限迴圈
                if (i >= 2) {
                    forceUpdate = false
                }

                //genUseItems
                vo.genUseItems()

                //setTimeout
                setTimeout(function() {
                    let b = vo.updateItems(forceUpdate)
                    pm.resolve(b)
                }, 10)

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

            //check
            if (vo.mmkey === null) {
                return
            }

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
                let v = items[k]
                v.screenY = ((v.y / heAll) - r1) * vo.contentHeight * vo.scrollRatio + scrollTop //換算成實際顯示y向的px位置
                v.nowShow = k >= indStartActual //顯示區下方之預載節點都直接顯示供重算高度
                if (vo.itemHasShow) {
                    if (v.row.show) {
                        useItems.push(v)
                    }
                }
                else {
                    useItems.push(v)
                }
            }

            //save
            vo.useItems = useItems

        },

        updateItems: function(forceUpdate = false) {
            //console.log('methods updateItems', forceUpdate)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return false
            }

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //n
            let n = size(items)

            //update height
            each(vo.$refs.itemDiv, (v) => {
                let nowShow = v.getAttribute('nowShow')
                if (nowShow) {
                    let index = cint(v.getAttribute('index'))
                    if (index >= 0 && index < n) {
                        let h = v.clientHeight //元素不要用margin避免計算高度有誤差
                        if (items[index].height !== h) {
                            items[index].height = h
                            vo.changeHeight = true
                        }
                    }
                }
            })

            //check
            let b = vo.changeHeight || forceUpdate
            if (b) {

                //update y
                let y = 0
                if (vo.itemHasShow) {
                    for (let i = 0; i < n; i++) {
                        let v = items[i]
                        if (v.y !== y) {
                            v.y = y
                        }
                        if (v.row.show) {
                            y += v.height
                        }
                    }
                }
                else {
                    for (let i = 0; i < n; i++) {
                        let v = items[i]
                        if (v.y !== y) {
                            v.y = y
                        }
                        y += v.height
                    }
                }

                //update itemsHeight, contentHeight, scrollRatio
                if (vo.itemsHeight !== y) {
                    vo.itemsHeight = y
                    vo.contentHeight = Math.min(vo.itemsHeight, vo.contentHeightMax)
                    vo.scrollRatio = vo.itemsHeight / vo.contentHeight
                }

                //reset
                vo.changeHeight = false

            }

            return b
        },

        modifyItemsFromOuter: function(cb) {
            //console.log('methods modifyItemsFromOuter')

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //lock
            vo.modifyFromOuter = true

            //items
            //let items = vo.items
            let items = gm.get(vo.mmkey)

            //callback
            cb(items)

            //setTimeout, 記憶體變更會太快觸發watch, 通過延遲unlock避免cb結束後還會因watch觸發change
            //由這邊觸發change 1次, 避免多次觸發的可能
            setTimeout(function() {

                //unlock
                vo.modifyFromOuter = false

                //changeView
                vo.changeView(true)

            }, 10)

        },

        scrollItems: debounce(function(e) {
            //console.log('methods scrollItems', e.target.scrollTop)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //setTimeout
            setTimeout(() => {

                //save
                vo.scrollTop = e.target.scrollTop

                //changeView
                vo.changeView()

            }, 10)

        }, 100),

    },
}
</script>

<style scoped>
</style>

