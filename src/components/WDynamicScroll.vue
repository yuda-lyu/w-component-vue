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
                    :style="[{'position':'absolute','top':`${item.screenY}px`}]"
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
import binarySearch from '../js/binarySearch.mjs'

/**
 * @vue-prop {Array} [rows=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {Number} [listHeight=400] 輸入顯示區高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=40] 輸入下方預先載入元素數量，預設40
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
            changeHeight: true, //變更高度
            scrollTop: 0, //目前捲軸位置
            scrollRatio: 1, //目前全部節點高度與捲軸內容高度的比值
            contentHeight: 0, //實際撐開用內容高度, 大部分情況等於scrollHeight, 可能會差異一個水平捲軸的高度16px, 此處以contentHeight為計算基準
            contentHeightMax: 1e6, //最大撐開用內容高度, chrome當元素高度超過1.4e7px, 排版沒問題但顯示會被截斷, 故需要通過設定最大高度做映射
            itemsHeight: 0, //全部節點高度
            items: [], //封裝後節點陣列
            useItems: [], //實際需顯示節點陣列
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //change, watch時觸發的change因為元素沒實際高度故無法自動調整, 得於mounted再觸發一次
        vo.change()

    },
    watch: {

        rows: {
            immediate: true,
            deep: true,
            handler(value) {
                //console.log('watch rows', value)

                let vo = this

                //items
                let items = map(vo.rows, (v, k) => {
                    return {
                        index: k,
                        height: vo.itemMinHeight,
                        y: k * vo.itemMinHeight,
                        screenY: 0, //節點換算比率後的顯示y向位置
                        row: v,
                    }
                })

                //save
                vo.items = items

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

            //getUseItems
            vo.getUseItems()

            //setTimeout
            setTimeout(function() {

                //updateItems
                let changed = vo.updateItems()

                //若任何元素高度有變更則再重新計算需顯示的節點, 此時的確有可能會載入新節點, 所以原本給予節點之預設高度不能太高, 偵測時元素就多是變高, 所以需顯示的節點就會變少, 避免造成重新載入新節點狀況
                if (changed) {
                    vo.getUseItems()
                }

            }, 10)

        },

        getUseItems: function() {
            //console.log('methods getUseItems')

            let vo = this

            //items, 直接存取vo.item, 不能用cloneDeep對大數據太耗時
            let items = (vo.items)

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

            //indStart
            let n = size(items)
            let o
            o = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = y1 - (v.y + v.height)
                return dy
            }).result
            let indStart = get(o, 'index', 0)
            indStart = Math.max(indStart, 0) //不預載前面節點, 避免拉動捲軸時因上方節點預載後高度變高, 自動把當前顯示節點往下推移

            //indEnd
            o = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = v.y - y2
                return dy
            }).result
            let indEnd = get(o, 'index', n)
            indEnd = Math.min(indEnd + vo.itemsPreload, n - 1)

            //useItems
            let useItems = []
            for (let k = indStart; k <= indEnd; k++) {
                let v = items[k]
                v.screenY = ((v.y / heAll) - r1) * vo.contentHeight * vo.scrollRatio + scrollTop //換算成實際顯示y向的px位置
                useItems.push(v)
            }

            //save
            vo.useItems = useItems

        },

        updateItems: function() {
            //console.log('methods updateItems')

            let vo = this

            //items, 直接存取vo.item, 不能用cloneDeep對大數據太耗時
            let items = (vo.items)

            //update height
            each(vo.$refs.itemDiv, (v) => {
                let index = cint(v.getAttribute('index'))
                if (index >= 0 && index <= size(items) - 1) {
                    let h = v.clientHeight //元素不要用margin避免計算高度有誤差
                    if (items[index].height !== h) {
                        items[index].height = h
                        vo.changeHeight = true
                    }
                }
            })

            //check
            let changed = vo.changeHeight
            if (changed) {

                //update y
                let y = 0
                each(items, (v) => {
                    if (v.y !== y) {
                        v.y = y
                    }
                    y += v.height
                })

                //update itemsHeight
                if (vo.itemsHeight !== y) {
                    vo.itemsHeight = y
                    vo.contentHeight = Math.min(vo.itemsHeight, vo.contentHeightMax)
                    vo.scrollRatio = vo.itemsHeight / vo.contentHeight
                }

                //reset
                vo.changeHeight = false

            }

            return changed
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
</style>

