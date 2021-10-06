<template>
    <WPanelScrollyCore
        ref="wpsc"
        :ratio.sync="scrollRatio"
        :viewHeightMax="viewHeightMax"
        :contentHeight="itemsHeight"
        :changeFilterKeyWords="changeFilterKeyWords"
        @change="changeScrollInfor"
    >

        <template v-for="(item,kitem) in useItems">
            <!-- 需設定width:100%, 因ie11的flex內文字會自動撐開版面導致不會換行 -->
            <div
                ref="wdsDiv"
                :key="`wpsc-${kitem}`"
                :style="`position:absolute; top:${item.screenY}px; left:0px; width:100%; opacity:${(item.nowShow && item.delayShow)?1:0.001}; ${item.delayShow?'transition:opacity 0.1s':''};`"
                :index="item.index"
                :nowShow="item.nowShow"
                :delayShow="item.delayShow"
                :y="item.y"
            >
                <!-- 因分隔線若是直接用border或translateY或_padding, 於渲染時會有多層更新而讓迭代收斂更為困難, 此處直接用定位div去繪製分隔線 -->
                <div :style="`position:relative;`">

                    <slot
                        :row="item.row"
                        :index="item.index"
                    ></slot>

                    <!-- 用position:absolute定位方式繪製分隔線, top為(-高度/2), 直接畫在兩元素中間, 故線設定太高會遮蔽過多元素內容 -->
                    <div :style="`position:absolute; top:${-getSeparatorHeight(kitem)/2}px; left:0px; width:100%; border-top:${getSeparatorHeight(kitem)}px solid ${useSeparatorColor};`"></div>

                </div>
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
import isEqual from 'lodash/isEqual'
import size from 'lodash/size'
import toString from 'lodash/toString'
import cloneDeep from 'lodash/cloneDeep'
import cint from 'wsemi/src/cint.mjs'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import delay from 'wsemi/src/delay.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isstr from 'wsemi/src/isstr.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isint from 'wsemi/src/isint.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import arrFilter from 'wsemi/src/arrFilter.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import pmThrottle from 'wsemi/src/pmThrottle.mjs'
import binarySearch from '../js/binarySearch.mjs'
import globalMemory from '../js/globalMemory.mjs'
import color2hex from '../js/vuetifyColor.mjs'
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
 * @vue-prop {Number} [separatorHeight=1] 輸入分隔線高度數字，預設1
 * @vue-prop {String} [separatorColor='transparent'] 輸入分隔線顏色字串，預設'transparent'
 * @vue-prop {Boolean} [show=true] 輸入是否為顯示模式布林值，預設true，供組件嵌入popup時, 因先初始化但尚未顯示不需渲染, 可給予show=false避免無限偵測與重算高度問題
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
        separatorHeight: {
            type: Number,
            default: 1,
        },
        separatorColor: {
            type: String,
            default: 'transparent',
        },
        show: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            pmt: pmThrottle(),
            dbc: debounce(),
            mmkey: null,
            changeHeight: true, //是否有變更高度, 初始化給true使第一次顯示能自動重算節點高度
            changeDisplay: false, //是否有變更節點顯隱狀態
            changeFilter: false, //是否有變更過濾關鍵字
            lockFromProcess: false, //上鎖, 使能由外部強制變更內部數據items而不會重產items
            lockFromSetRows: false, //上鎖
            scrollRatio: 0, //捲動比例
            scrollInfor: null, //目前捲軸資訊
            filterKeywordsTemp: '', //上次過濾關鍵字
            itemsHeight: 0, //全部節點高度
            useItems: [], //實際需顯示節點陣列
            emItemsTemp: [], //實際需顯示節點之指標陣列
            iNochangeScrollInfor: 0, //觸發changeScrollInfor時但所到scrollInfor為同值之次數
            tNochangeScrollInfor: 0, //增加scrollInfor同值次數時之時間
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
        if (vo.mmkey !== null) {
            gm.remove(vo.mmkey)
        }

    },
    watch: {

        rows: {
            immediate: true,
            deep: true,
            handler(value) {
                //console.log('watch rows', value)

                let vo = this

                //setRows
                vo.setRows(value)

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

        useSeparatorColor: function() {
            //console.log('computed useSeparatorColor')

            let vo = this

            return color2hex(vo.separatorColor)
        },

    },
    methods: {

        getSeparatorHeight: function(kitem) {
            //console.log('methods getSeparatorHeight', kitem)

            let vo = this

            return kitem > 0 ? vo.separatorHeight : 0
        },

        setRowsCore: function(rows) {
            // console.log('methods setRowsCore', rows)

            let vo = this

            //check
            if (vo.lockFromProcess) {
                let msg = 'disabling call when lockFromProcess'
                return msg
            }
            // if (vo.lockFromSetRows) { //setRows內需呼叫setRowsCore故不能上鎖
            //     let msg = 'disabling call when lockFromSetRows'
            //     return msg
            // }

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

            //mmkey, 產生mmkey要放在資料變更的地方, 否則beforeCreate只有1次(mounted會比computed還慢), 於vue-cli編譯情況下會有部份情境有問題
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
                    displayShow: true, //bol, 是否直接顯示此節點
                    filterShow: true, //bol, 是否過濾後顯示此節點
                    y: k * vo.itemMinHeight,
                    row: v,
                }
            })

            //save
            //vo.items = items
            gm.set(vo.mmkey, items)

            //changeDisplay, 若由外部強制變更rows或呼叫setRows變更rows, 則需重設changeDisplay使能重算全部節點高度
            vo.changeDisplay = true

            // //refresh
            // vo.refresh('setRowsCore')

        },

        setRows: function(rows) {
            // console.log('methods setRows', rows)

            let vo = this

            async function core() {

                //lock
                vo.lockFromSetRows = true

                //先儲存scrollInfor一份至scrollInforTemp, 供顯隱後重算scrollInfor
                vo.scrollInforTemp = cloneDeep(vo.scrollInfor)

                //setRowsCore
                vo.setRowsCore(rows)

                //refreshCore
                await vo.refreshCore('setRows')

                //resumeScrollRatio
                vo.resumeScrollRatio()

                //triggerEvent
                vo.triggerEvent('setRows')

                //unlock
                vo.lockFromSetRows = false

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        refresh: function(from) {
            //console.log('methods refresh', from)

            let vo = this

            //refreshCore
            vo.pmt(vo.refreshCore, from)
                .catch(() => { })

        },

        refreshCore: async function(from) {
            // console.log('methods refreshCore', from)

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
                // console.log('n', n)

                //check, 取得元素高度因文字換行會有來回變動問題, 需有強制跳出機制
                if (n > limit) {
                    // console.log(`forced termination: call refreshCore ${limit} [from: ${from}]`)
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

                //updateItemsHeight
                let b = vo.updateItemsHeight()

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

            //dbc
            vo.dbc(() => {

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
                if (v.displayShow && v.filterShow) {
                    v.screenY = v.y - vo.scrollInfor.t //換算成實際顯示y向的px位置
                    v.nowShow = k >= indStartActual //顯示區下方之預載節點都直接顯示供重算高度
                    v.delayShow = kpDelayShow[k] === true //已經顯示的節點就直接顯示, 否則delayShow=false就是延遲顯示
                    useItems.push(v)
                }
            }

            //save
            vo.useItems = useItems

            //偵測是否已有wdsDiv
            if (vo.$refs.wdsDiv) {

                //emRows, emItems
                let emRows = map(useItems, 'row')
                let emItems = map(useItems, 'row.item')

                //emit render
                vo.$emit('render', { eles: vo.$refs.wdsDiv, rows: emRows, items: emItems })

                //check
                if (!isEqual(vo.emItemsTemp, emItems)) {

                    //emit change-view-items
                    vo.$emit('change-view-items', { eles: vo.$refs.wdsDiv, rows: emRows, items: emItems })

                    //save
                    vo.emItemsTemp = emItems

                }

            }

        },

        updateItemsHeight: function() {
            // console.log('methods updateItemsHeight')

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

            //check changeHeight, 只偵測已顯示dom的高度是否有變化, 若是變更未顯示節點例如於最末新增節點, 就無法得知有變
            let wdsDiv = get(vo, '$refs.wdsDiv', []) //可能因切換組件導致元素消失
            each(wdsDiv, (v) => {
                if (v.getAttribute) {
                    let nowShow = v.getAttribute('nowShow')
                    if (nowShow) {
                        let index = cint(v.getAttribute('index'))
                        if (index >= 0 && index < n) {
                            let h = v.offsetHeight //元素不要用margin避免計算高度有誤差
                            if (items[index].height !== h) {
                                items[index].height = h
                                vo.changeHeight = true
                            }
                        }
                    }
                }
            })

            //check visible, 若組件未顯示(例如display:none)則不視為高度有變更狀態, 避免無限更新
            if (!vo.show) {
                vo.changeHeight = false
            }

            //check
            let b = vo.changeHeight || vo.changeDisplay || vo.changeFilter
            if (b) {

                //update y
                let y = 0
                for (let i = 0; i < n; i++) {
                    let v = items[i]
                    if (v.y !== y) {
                        v.y = y
                    }
                    if (v.displayShow && v.filterShow) {
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
                    //console.log('偵測出現itemsHeightTemp=0, 強制改為43')
                    itemsHeightTemp = 43 //先預算出empty時高度
                }

                //check same
                let pxLimit = 4 //全部項目高度誤差門檻(px)
                if (Math.abs(vo.itemsHeight - itemsHeightTemp) > pxLimit) { //偵測總項目高度是否與前次差超過pxLimit
                    vo.itemsHeight = itemsHeightTemp
                }
                else {
                    b = vo.changeDisplay || vo.changeFilter //若沒超過門檻pxLimit, 則b直接使用changeDisplay與changeFilter, 否則b包含changeHeight會影響導致refresh while導致無限偵測
                }

                //reset
                vo.changeHeight = false
                vo.changeDisplay = false
                vo.changeFilter = false

            }

            return b
        },

        changeScrollInfor: async function(e) {
            // console.log('methods changeScrollInfor', e)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //check
            //不能直接使用偵測scrollInfor是否相等, 因wsp會有resize觸發此事件, 會給出內部的scrollInfor與上次相同故為原值, 若檢查相同則離開將無法重算各動態項目高度
            //仍有非預期行為會持續觸發changeScrollInfor, 且提供的scrollInfor相同, 故改採最大觸發限制
            //因外部不同操作行為會累計次數, 故需要給予指定時間內判斷最大觸發限制
            // console.log('isEqual(vo.scrollInfor, e)', e)
            if (isEqual(vo.scrollInfor, e)) {
                let limitNum = 3 //指定時間內最大相同scrollInfor次數
                let limitTime = 200 //指定時間

                //check
                let t = Date.now()
                if (t - vo.tNochangeScrollInfor > limitTime) {
                    vo.iNochangeScrollInfor = 0
                    vo.tNochangeScrollInfor = 0
                }

                //update
                vo.iNochangeScrollInfor += 1
                vo.tNochangeScrollInfor = Date.now()

                //check
                if (vo.iNochangeScrollInfor >= limitNum) {
                    // console.log(`forced termination: call changeScrollInfor ${limit}`)
                    vo.iNochangeScrollInfor = 0
                    return
                }

            }

            //check, 有上鎖時不能執行
            if (vo.lockFromProcess) {
                return
            }
            if (vo.lockFromSetRows) {
                return
            }

            //save
            vo.scrollInfor = e

            //refresh
            vo.refresh('changeScrollInfor')

        },

        resumeScrollRatio: function() {
            //console.log('methods resumeScrollRatio')

            let vo = this

            //resumeRatio
            let t = get(vo, '$refs.wpsc.resumeRatio', null)
            if (t) {
                t(vo.scrollInforTemp)
            }

        },

        processItems: async function(opt = {}) {
            //console.log('methods processItems', opt)
            //供外部調用時需要知道什麼時候結束, 故需為async function

            let vo = this

            async function core() {

                //check
                if (vo.mmkey === null) {
                    return
                }

                //lock
                vo.lockFromProcess = true

                //先儲存scrollInfor一份至scrollInforTemp, 供顯隱後重算scrollInfor
                vo.scrollInforTemp = cloneDeep(vo.scrollInfor)

                //items
                //let items = vo.items
                let items = gm.get(vo.mmkey)

                //外部使用fun直接修改items
                let fun = get(opt, 'fun', null)
                if (isfun(fun)) {

                    //呼叫fun, items直接傳入被修改, 因記憶體共用不用回傳覆寫items
                    fun(items)

                    //changeDisplay
                    vo.changeDisplay = true

                    //changeFilter
                    vo.changeFilter = true

                }

                //對起訖點設定
                let indStart = get(opt, 'indStart', null)
                let indEnd = get(opt, 'indEnd', null)
                if (isint(indStart) && isint(indEnd)) {

                    //修改displayShow
                    let displayShow = get(opt, 'displayShow', null)
                    if (isbol(displayShow)) {

                        //each
                        for (let k = indStart; k <= indEnd; k++) {
                            let item = get(items, k, null)
                            if (item) {
                                items[k].displayShow = displayShow
                            }
                        }

                        //changeDisplay
                        vo.changeDisplay = true

                    }

                    //修改filterShow
                    let filterShow = get(opt, 'filterShow', null)
                    if (isbol(filterShow)) {

                        //each
                        for (let k = indStart; k <= indEnd; k++) {
                            let item = get(items, k, null)
                            if (item) {
                                items[k].filterShow = filterShow
                            }
                        }

                        //changeFilter
                        vo.changeFilter = true

                    }

                }

                //refreshCore
                //要先變更changeDisplay才能呼叫refresh, 使內部能重算各顯示元素高度
                //需先refreshCore才能呼叫resumeScrollRatio, 因需由前次scrollInforTemp重算最新的scrollInfor, 使點擊節點於顯隱節點後不會改變位置
                await vo.refreshCore('processItems')

                //resumeScrollRatio
                vo.resumeScrollRatio()

                //triggerEvent
                vo.triggerEvent('processItems')

                //unluck
                vo.lockFromProcess = false

            }

            //core
            await core()
                .catch((err) => {
                    console.log(err)
                })

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
            vo.filterKeywordsTemp = vo.filterKeywords //因為函數為同步故可以先覆寫至temp

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

                //fkws, 關鍵字轉小寫再查詢
                let fkws = vo.filterKeywords.toLowerCase()

                //產生目標字串陣列
                let cs = map(items, (v) => {

                    //r
                    let r = v.row

                    //c
                    let c = ''
                    if (isstr(r)) {
                        c = r
                    }
                    else if (isnum(r)) {
                        c = toString(r)
                    }
                    else if (iseobj(r)) {
                        c = join(values(r), '')
                    }
                    else {
                        c = o2j(r)
                    }
                    c = c.toLowerCase()

                    return c
                })

                //arrFilter
                let rs = arrFilter(cs, fkws)

                //update filterShow
                each(items, (v, k) => {
                    let r = rs[k]
                    items[k].filterShow = r.hasKeyword
                })

            }

            //changeFilter
            vo.changeFilter = true

        },

        triggerEvent: function(from) {
            //console.log('methods triggerEvent', from)

            let vo = this

            //triggerEvent
            let t = get(vo, '$refs.wpsc.triggerEvent', null)
            if (t) {
                t(from)
            }

        },

        refreshAndTriggerEvent: async function(from) {
            //console.log('methods refreshAndTriggerEvent', from)
            //供外部呼叫之用

            let vo = this

            //refresh
            await vo.refreshCore(from)

            //triggerEvent
            vo.triggerEvent(from)

        },

    },
}
</script>

<style scoped>
</style>

