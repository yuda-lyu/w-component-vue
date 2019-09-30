<template>
    <div :style="[{'position':'relative','overflow-y':'auto','height':listHeight+'px'}]" @scroll="scrollItems">

        <div :style="[{'height':itemsHeight+'px'}]"></div>

        <div :style="[{'position':'absolute','top':'0px'}]">

            <div :style="[{'height':preItemsHeight+'px'}]"></div>

            <template v-for="(item,kitem) in useItems">
                <div ref="block" :index="item.index" :key="kitem">

                    <slot name="itemBlock" :row="item.row" :irow="item.index"></slot>

                </div>
            </template>

            <div :style="[{'height':aftItemsHeight+'px'}]"></div>

        </div>

    </div>
</template>

<script>
import each from 'lodash/each'
import map from 'lodash/map'
import get from 'lodash/get'
import size from 'lodash/size'
import find from 'lodash/find'
import findLast from 'lodash/findLast'
import debounce from 'lodash/debounce'
import cint from 'wsemi/src/cint.mjs'

/**
 * @vue-prop {Array} [rows=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標
 * @vue-prop {Number} [listHeight=400] 輸入顯示區高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
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
    },
    data: function() {
        return {
            preItemsHeight: 0, //上方空白區高度
            aftItemsHeight: 0, //下方空白區高度
            scrollTop: 0, //目前捲軸位置
            itemsHeight: 0, //全部節點高度
            items: [], //封裝後節點陣列
            useItems: [], //實際需顯示節點陣列
        }
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
            let idf = 10 //前後預先載入節點數量
            let o
            o = findLast(items, (v, k) => {
                return (v.y + v.height) < y1
            })
            let indStart = get(o, 'index', 0)
            indStart = Math.max(indStart - idf, 0)
            o = find(items, (v, k) => {
                return v.y > y2
            })
            let indEnd = get(o, 'index', n)
            indEnd = Math.min(indEnd + idf, n - 1)

            //useItems
            let useItems = []
            let preItemsHeight = 0
            let aftItemsHeight = 0
            each(items, (v, k) => {
                if (k < indStart) {
                    preItemsHeight += v.height
                }
                else if (k > indEnd) {
                    aftItemsHeight += v.height
                }
                else {
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
            each(vo.$refs.block, (v) => {
                let index = cint(v.getAttribute('index'))
                if (index >= 0 && index <= size(items) - 1) {
                    let h = v.clientHeight
                    if (items[index].height !== h) {
                        items[index].height = h
                    }
                }
            })

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
            }

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
</style>

