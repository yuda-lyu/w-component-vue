<template>
    <WPanelScrollyCore
        ref="wsp"
        :viewHeightMax="viewHeightMax"
        :contentHeight="itemsHeight"
        :changeFilterKeyWords="changeFilterKeyWords"
        @change="changeScroll"
    >

        <template v-for="(item,kitem) in useItems">
            <!-- wdsDiv記得給width:100%，因ie11的flex內文字會自動撐開版面導致不會換行 -->
            <div
                ref="wdsDiv"
                :style="`position:absolute; top:${item.screenY}px; width:100%; opacity:${(item.nowShow && item.delayShow)?1:0.001}; ${item.delayShow?'transition:opacity 0.1s':''}`"
                :index="item.index"
                :nowShow="item.nowShow"
                :delayShow="item.delayShow"
                :y="item.y"
                :key="kitem"
            >
                <slot
                    name="block"
                    :row="item.row"
                    :irow="item.index"
                ></slot>
            </div>
        </template>

        <div style="padding:12px; font-size:0.8rem;" v-if="useItems.length===0">
            {{searchEmpty}}
        </div>

    </WPanelScrollyCore>
</template>

<script>
import each from 'lodash/each'
import get from 'lodash/get'
import map from 'lodash/map'
import join from 'lodash/join'
import values from 'lodash/values'
import size from 'lodash/size'
import toString from 'lodash/toString'
import cint from 'wsemi/src/cint.mjs'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import delay from 'wsemi/src/delay.mjs'
import sep from 'wsemi/src/sep.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isstr from 'wsemi/src/isstr.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import binarySearch from '../js/binarySearch.mjs'
import globalMemory from '../js/globalMemory.mjs'
import WPanelScrollyCore from './WPanelScrollyCore.vue'

//gm
let gm = globalMemory()

/**
 * @vue-prop {Array} [rows=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {String} [filterKeywords=''] 輸入過濾關鍵字字串，多關鍵字用空白分隔，預設''
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度
 * @vue-prop {Number} [itemsPreload=5] 輸入上下方預先載入元素數量，預設5
 * @vue-prop {String} [searchEmpty='Empty'] 輸入無過濾結果字串，預設'Empty'
 */
export default {
    components: {
        WPanelScrollyCore,
    },
    props: {
        rows: {
            type: Array,
            default: () => [],
        },
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
        searchEmpty: {
            type: String,
            default: 'Empty',
        },
    },
    data: function() {
        return {
            mmkey: null,
            changeHeight: true, //是否有變更高度, 初始化給true使第一次顯示能自動重算節點高度
            changeFilter: false, //是否有變更過濾關鍵字
            scrollInfor: null, //目前捲軸資訊
            scrollToEnd: false, //捲動至底部, 額外refresh
            filterKeywordsTemp: '', //上次過濾關鍵字
            itemsHeight: 0, //全部節點高度
            useItems: [], //實際需顯示節點陣列
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //refresh, watch時觸發的change因為元素沒實際高度故無法自動調整, 得於mounted再觸發一次
        vo.refresh('mounted')

    },
    beforeDestroy: function() {
        //console.log('beforeMount')

        let vo = this

        //remove
        gm.remove(vo.mmkey)

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
        },

    },
    computed: {

        changeFilterKeyWords: function() {
            //console.log('computed changeFilterKeyWords')

            let vo = this

            //ft for trigger
            let ft = vo.filterKeywords

            //refreshDebounce
            vo.refreshDebounce('changeFilterKeyWords')

            return ft
        },

    },
    methods: {

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
                    filterShow: true, //bol, 是否過濾後顯示此節點
                    y: k * vo.itemMinHeight,
                    // screenY: 0, //num, 節點換算比率後的顯示y向位置
                    // nowShow: false, //bol, 預先載入時是否隸屬於顯示區域內
                    // delayShow: false, //bol, 延遲載入用, 是否顯示節點
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

            //delayShow
            for (let k = 0; k < size(vo.useItems); k++) {
                let v = vo.useItems[k]
                if (!v.delayShow) {
                    v.delayShow = true
                }
            }

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

            //check
            if (vo.mmkey === null) {
                return
            }

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

            //indStart, 該元素區(底部)有侵入顯示區
            let indStartActual = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = vo.scrollInfor.t - (v.y + v.height)
                return dy
            })
            if (indStartActual === null) {
                indStartActual = 0
            }
            let indStart = Math.max(indStartActual - vo.itemsPreload, 0)

            //indEnd, 該元素區(頂部)有侵入顯示區
            let indEndActual = binarySearch(items, (ind) => {
                let v = items[ind]
                let dy = vo.scrollInfor.b - v.y
                return dy
            })
            if (indEndActual === null) {
                indEndActual = n - 1
            }
            let indEnd = Math.min(indEndActual + vo.itemsPreload, n - 1)

            //kpDelayShow
            let kpDelayShow = {}
            each(vo.useItems, (v) => {
                kpDelayShow[v.index] = true
            })

            //useItems
            let useItems = []
            for (let k = indStart; k <= indEnd; k++) {
                let v = {
                    ...items[k]
                }
                if (v.filterShow) {
                    v.screenY = v.y - vo.scrollInfor.t //換算成實際顯示y向的px位置
                    v.nowShow = k >= indStartActual //顯示區下方之預載節點都直接顯示供重算高度
                    v.delayShow = kpDelayShow[k] === true //已經顯示的節點就直接顯示, 否則就延遲顯示
                    useItems.push(v)
                }
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
            let b = vo.changeHeight || vo.changeFilter //changeHeight預設為true, 故第1次一定會重算itemsHeight
            if (b) {

                //update y
                let y = 0
                for (let i = 0; i < n; i++) {
                    let v = items[i]
                    if (v.y !== y) {
                        v.y = y
                    }
                    if (v.filterShow) {
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
                vo.changeHeight = false
                vo.changeFilter = false

            }

            return b
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

            //check
            if (size(vo.filterKeywords) === 0) {

                //預設可見
                for (let k = 0; k < n; k++) {
                    items[k].filterShow = true
                }

            }
            else {

                //kws
                let kws = sep(vo.filterKeywords.toLowerCase(), ' ')

                //預設不可見
                for (let k = 0; k < n; k++) {
                    let r = items[k].row

                    //c
                    let c = ''
                    if (isstr(r)) {
                        c = r
                    }
                    else if (isnum(r)) {
                        c = toString(r)
                    }
                    else if (iseobj(r)) {
                        //console.log('r', r, 'values(r)', values(r))
                        c = join(values(r), '')
                    }
                    else {
                        c = o2j(r)
                    }
                    c = c.toLowerCase()

                    //若值含有關建字
                    let b = false
                    for (let i = 0; i < size(kws); i++) {
                        let kw = kws[i]
                        if (c.indexOf(kw) >= 0) {
                            b = true
                            break
                        }
                    }
                    items[k].filterShow = b

                }

            }

            //changeFilter
            vo.changeFilter = true

        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //triggerEvent
            let t = get(vo, '$refs.wsp.triggerEvent', null)
            if (t) {
                t(from)
            }

        },

        refreshAndTriggerEvent: async function(from) {
            //console.log('methods refreshAndTriggerEvent', from)

            let vo = this

            //refresh
            await vo.refresh(from)

            //triggerEvent
            vo.triggerEvent(from)

        },

    },
}
</script>

<style scoped>
</style>

