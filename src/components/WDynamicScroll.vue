<template>
    <WScrollPanel
        ref="wsp"
        :ratio.sync="scrollRatio"
        :viewHeight="viewHeight"
        :contentHeight="itemsHeight"
        @change="scrollItems"
    >

        <template v-for="(item,kitem) in useItems">
            <div
                ref="wdsDiv"
                :style="`position:absolute; top:${item.screenY}px; width:100%; box-sizing:border-box; opacity:${(item.nowShow)?1:0.01}; transition:opacity 0.5s;`"
                :index="item.index"
                :nowShow="item.nowShow"
                :y="item.y"
                :h="item.height"
                :key="kitem"
            >
                <slot
                    name="block"
                    :row="item.row"
                    :irow="item.index"
                ></slot>
            </div>
        </template>

    </WScrollPanel>
</template>

<script>
import each from 'lodash/each'
import map from 'lodash/map'
import size from 'lodash/size'
// import debounce from 'lodash/debounce'
// import throttle from 'lodash/throttle'
import cint from 'wsemi/src/cint.mjs'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import binarySearch from '../js/binarySearch.mjs'
import globalMemory from '../js/globalMemory.mjs'
import WScrollPanel from './WScrollPanel.vue'

//gm
let gm = globalMemory()

/**
 * @vue-prop {Array} [rows=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {Number} [viewHeight=400] 輸入顯示區高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=40] 輸入上下方預先載入元素數量，預設40
 */
export default {
    components: {
        WScrollPanel,
    },
    props: {
        rows: {
            type: Array,
            default: () => [],
        },
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
    },
    data: function() {
        return {
            //itemDiv的style記得給width:100%，因ie11的flex內文字會自動撐開版面導致不會換行
            mmkey: null,
            changeHeight: true, //是否有變更高度, 初始化給true使第一次顯示能自動重算節點高度
            scrollRatio: 0, //捲動比例
            scrollInfor: null, //目前捲軸資訊
            scrollToEnd: false, //捲動至底部, 額外refresh
            itemsHeight: 0, //全部節點高度
            useItems: [], //實際需顯示節點陣列
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

        //refresh, watch時觸發的change因為元素沒實際高度故無法自動調整, 得於mounted再觸發一次
        vo.refresh('mounted')

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

                //changeRows
                vo.changeRows(value)

            }
        }

    },
    computed: {
    },
    methods: {

        delay: function(ms = 100) {
            //console.log('methods delay', ms)
            let pm = genPm()
            setTimeout(function() {
                pm.resolve()
            }, ms)
            return pm
        },

        changeRows: function(rows) {
            //console.log('methods changeRows', rows)

            let vo = this

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

            //mmkey
            if (vo.mmkey === null) {

                //mmkey
                vo.mmkey = genID()

            }
            else {

                //remove
                gm.remove(vo.mmkey)

            }

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

            //refresh
            vo.refresh('changeRows')

        },

        refresh: async function(from) {
            //console.log('methods refresh', from)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //core
            let n = 0
            let limit = 3
            async function core() {
                let pm = genPm()

                //n
                n += 1

                // //check, 內容區高度內外不一致
                // if (n >= limit && vo.scrollInfor !== null) {
                //     if (vo.scrollInfor.ch !== vo.itemsHeight) {
                //         console.log('內容區高度內外不一致', JSON.stringify(vo.scrollInfor), vo.scrollInfor.ch, vo.itemsHeight)
                //     }
                // }

                //check, 取得元素高度因文字換行會有來回變動問題, 需有強制跳出機制
                if (n > limit) {
                    //console.log(`已重複refresh ${limit} 次, 強制跳出`)
                    pm.resolve(false)
                    return pm
                }

                //genUseItems
                vo.genUseItems()

                //delay
                await vo.delay(1)

                let b = vo.updateItems()
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

        },

        genUseItems: function() {
            //console.log('methods genUseItems')

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

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
                v.screenY = v.y - vo.scrollInfor.t //換算成實際顯示y向的px位置
                v.nowShow = k >= indStartActual && k <= indEndActual //顯示區下方之預載節點都直接顯示供重算高度
                useItems.push(v)
            }

            //save
            vo.useItems = useItems

        },

        updateItems: function() {
            //console.log('methods updateItems')

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
            each(vo.$refs.wdsDiv, (v) => {
                if (v.getAttribute) {
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
                }
            })

            //check
            let b = vo.changeHeight
            if (b) {

                //update y
                let y = 0
                for (let i = 0; i < n; i++) {
                    let v = items[i]
                    if (v.y !== y) {
                        v.y = y
                    }
                    y += v.height
                }

                //update itemsHeight
                if (vo.itemsHeight !== y) {
                    vo.itemsHeight = y
                }

                //reset
                vo.changeHeight = false

            }

            return b
        },

        scrollItems: async function(e) {
            //console.log('methods scrollItems', e)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //save
            vo.scrollInfor = e

            //refresh
            vo.refresh('scrollItems')

            //check, 當一直捲動至底更新會不夠多, 需重新更新使最底節點顯示
            if (!vo.scrollToEnd && e.r === 1) {

                //lock
                vo.scrollToEnd = true

                //delay
                await vo.delay(100)

                //triggerEvent
                vo.$refs.wsp.triggerEvent()

                //delay
                await vo.delay(100)

                //uplock, 延遲解鎖避免無限自我呼叫
                vo.scrollToEnd = false

            }

        },

    },
}
</script>

<style scoped>
</style>

