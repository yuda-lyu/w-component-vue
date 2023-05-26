<template>
    <WPanelScrollyCore
        ref="wpsc"
        :scrollTop.sync="scrollTop"
        :viewHeightMax="viewHeightMax"
        :changeFilterKeyWords="changeFilterKeyWords"
        @change-infor="changeInfor"
    >

        <!-- panel內需使用單1個div顯示動態內容, 若有多個div會因panel渲染時有次序顯示問題, 導致捲軸多次更新, 體驗上不佳且會多重觸發scroll事件, 故上下撐開區改用padding-top與padding-bottom處理 -->
        <div :style="`padding-top:${itemsHeightPre}px; padding-bottom:${itemsHeightAft}px;`">

            <template v-for="(item,kitem) in useItems">
                <div
                    ref="wdsDiv"
                    :key="`kitem-${kitem}`"
                    :style="`_opacity:${item.nowShow?1:0.001};`"
                    :kitem="kitem"
                    :index="item.index"
                    :nowShow="'c:'+item.nowShow"
                    :y="item.y"
                    :h="item.height"
                    :top="item.top"
                >

                    <slot
                        :row="item.row"
                        :index="item.index"
                    ></slot>

                </div>
            </template>

        </div>

        <div style="padding:12px; font-size:0.8rem;" v-if="!disableLoadingText && lockFromSetRows">
            {{loadingText}}
        </div>

        <template v-else>

            <!-- 因暫時還沒刷新需顯示項目(useItems.length=0), 又確定已有搜尋結果searchingResults>0, 才顯示searchingText -->
            <div style="padding:12px; font-size:0.8rem;" v-if="useItems.length===0 && searchingResults>0">
                {{searchingText}}
            </div>

            <template v-else>

                <!-- 已確定無搜尋結果searchingResults=0, 才顯示noResultsText -->
                <div style="padding:12px; font-size:0.8rem;" v-if="searchingResults===0 && noResultsText!==''">
                    {{noResultsText}}
                </div>

            </template>

        </template>

    </WPanelScrollyCore>
</template>

<script>
import get from 'lodash/get'
import each from 'lodash/each'
import map from 'lodash/map'
// import find from 'lodash/find'
import join from 'lodash/join'
import isNumber from 'lodash/isNumber'
import values from 'lodash/values'
import isEqual from 'lodash/isEqual'
import size from 'lodash/size'
import toString from 'lodash/toString'
import cloneDeep from 'lodash/cloneDeep'
import cint from 'wsemi/src/cint.mjs'
// import cstr from 'wsemi/src/cstr.mjs'
import genID from 'wsemi/src/genID.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import delay from 'wsemi/src/delay.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isstr from 'wsemi/src/isstr.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isint from 'wsemi/src/isint.mjs'
import isp0int from 'wsemi/src/isp0int.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import isEle from 'wsemi/src/isEle.mjs'
import ispm from 'wsemi/src/ispm.mjs'
// import haskey from 'wsemi/src/haskey.mjs'
// import waitFun from 'wsemi/src/waitFun.mjs'
import arrFilterByKeywords from 'wsemi/src/arrFilterByKeywords.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import pmThrottle from 'wsemi/src/pmThrottle.mjs'
import binarySearch from '../js/binarySearch.mjs'
import globalMemory from '../js/globalMemory.mjs'
// import color2hex from '../js/vuetifyColor.mjs'
import WPanelScrollyCore from './WPanelScrollyCore.vue'


//gm
let gm = globalMemory()


/**
 * @vue-prop {Array} [rows=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {String} [filterKeywords=''] 輸入過濾關鍵字字串，多關鍵字用空白分隔，預設''
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [itemMinHeight=24] 輸入各元素顯示高度，單位為px，預設24，會於真實顯示後自動更新高度，原則上盡量設定為最多項目可能的高度值，而按需顯示時才自動調整避免大幅刷新
 * @vue-prop {Number} [itemsPreload=5] 輸入上下方預先載入元素數量，預設5
 * @vue-prop {String} [loadingText='Loading...'] 輸入載入中字串，預設'Loading...'
 * @vue-prop {String} [noResultsText='No results'] 輸入無過濾結果字串，預設'No results'
 * @vue-prop {String} [searchingText='Searching...'] 輸入搜索中字串，預設'Searching...'
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
        loadingText: {
            type: String,
            default: 'Loading...',
        },
        noResultsText: {
            type: String,
            default: 'No results',
        },
        searchingText: {
            type: String,
            default: 'Searching...',
        },
        show: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            pmtRefresh: pmThrottle(),
            dbcRefresh: debounce(),
            dbcSetRows: debounce(),

            // mmkey: null,
            mmkey: genID(), //beforeMount內無法變更data, mounted內會晚於computed, 故優先放於data生成
            // mmkey: (() => {
            //     let id = genID()
            //     console.log('data gen mmkey', id)
            //     return id
            // })(),

            changeHeight: true, //是否有變更高度, 初始化給true使第一次顯示能自動重算節點高度
            changeDisplay: false, //是否有變更節點顯隱狀態
            changeFilter: false, //是否有變更過濾關鍵字

            lockFromSetRows: false, //上鎖, 指定數據時禁止變更
            lockFromProcess: false, //上鎖, 使能由外部強制變更內部數據items而不會重產items
            lockFromRefreshUseItems: false, //上鎖, 顯示與調整items高度時禁止變更
            disableLoadingText: false, //禁止顯示載入中文字, 小數據時自動使用
            searchingResults: -1, //過濾結果, -1初始無狀態, 0過濾無結果, >0有結果

            // scrollRatio: 0, //捲動比例
            scrollTop: 0, //捲動值
            // scrollTopTemp: 0, //上次捲動值
            scrollInfor: null, //目前捲軸資訊

            filterKeywordsTemp: '', //上次過濾關鍵字

            itemsHeight: 0, //全部節點高度
            // itemsHeightTemp: 0, //上次全部節點高度
            itemsHeightPre: 0,
            itemsHeightAft: 0,
            useItems: [], //實際需顯示節點陣列
            emItemsTemp: [], //實際需顯示節點之指標陣列

            // iNochangeScrollInfor: 0, //觸發changeScrollInfor時但所到scrollInfor為同值之次數
            // tNochangeScrollInfor: 0, //增加scrollInfor同值次數時之時間

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //refresh, watch時觸發的change因為元素沒實際高度故無法自動調整, 得於mounted再觸發一次
        vo.refresh('mounted')

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

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
                // console.log('watch rows', value)

                let vo = this

                //setRows
                vo.setRows(value)

                // //依照數量調用儲存數據函數
                // if (size(value) < 1000) {

                //     //setRows
                //     vo.setRows(value)

                // }
                // else {

                //     //setRowsDebounce, 若數據value有被修改則會再次觸發watch, 故得用debounce拖勾, 但大量數據時會發生迭代次數過高報錯
                //     vo.setRowsDebounce(value)

                // }

            }
        },

    },
    computed: {

        changeFilterKeyWords: function() {
            //console.log('computed changeFilterKeyWords')

            let vo = this

            //ft for trigger
            let ft = vo.filterKeywords

            //filterDebounce
            vo.filterDebounce()

            return ft
        },

    },
    methods: {

        getRows: function() {
            //console.log('methods getRows')

            let vo = this

            //rows
            let rows = gm.get(vo.mmkey)

            return rows
        },

        setRowsCore: function(rows) {
            // console.log('methods setRowsCore', rows)

            let vo = this

            //check
            if (vo.lockFromProcess) {
                let msg = 'disabling call when lockFromProcess'
                //console.log(msg)
                return msg
            }
            // if (vo.lockFromSetRows) { //setRows內需呼叫setRowsCore故不能上鎖
            //     let msg = 'disabling call when lockFromSetRows'
            //     //console.log(msg)
            //     return msg
            // }
            // if (vo.lockFromRefreshUseItems) { //更新時可能會切換組件並塞入數據故不能上鎖
            //     console.log('return by lockFromRefreshUseItems')
            //     return
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

            //mmkey, 產生mmkey要放在資料變更的地方, 否則須放在beforeMount, 且於vue-cli編譯情況下會有部份情境有問題
            if (vo.mmkey === null) {

                // //mmkey
                // vo.mmkey = genID()

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
            // console.log('setRowsCore items', items)

            //save
            //vo.items = items
            gm.set(vo.mmkey, items)

            //changeDisplay, 若由外部強制變更rows或呼叫setRows變更rows, 則需重設changeDisplay使能重算全部節點高度
            vo.changeDisplay = true

        },

        setRows: async function(rows) {
            // console.log('methods setRows', rows)

            let vo = this

            async function core() {

                //lock
                vo.lockFromSetRows = true

                //lock
                vo.disableLoadingText = size(rows) <= 10000
                // console.log('disableLoadingText', size(rows), vo.disableLoadingText)

                //setRowsCore
                vo.setRowsCore(rows)

                //refreshCore
                await vo.refreshCore('setRows')

            }

            //core
            await core()
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {

                    //unlock
                    vo.lockFromSetRows = false

                    //unlock
                    vo.disableLoadingText = false

                })

        },

        setRowsDebounce: function(rows) {
            //console.log('methods setRowsDebounce', rows)

            let vo = this

            //lock, 若直接調用debounce版則需初始就lock
            vo.lockFromSetRows = true

            //dbcSetRows
            vo.dbcSetRows(() => {

                //setRows, 若rows被修改會導致watch監測再次觸發, 故使用debounce中斷關聯
                vo.setRows(rows)

            })

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
            // let indStart = Math.max(indStartActual - vo.itemsPreload, 0)
            let indStart = Math.max(indStartActual - 1, 0) //只先預載上方1個

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

            //itemsHeightPre
            let itemsHeightPre = 0
            for (let k = 0; k < indStart; k++) {
                let v = items[k]
                if (v.displayShow && v.filterShow) {
                    itemsHeightPre += v.height
                }
            }

            //itemsHeightAft
            let itemsHeightAft = 0
            for (let k = indEnd + 1; k <= n - 1; k++) {
                let v = items[k]
                if (v.displayShow && v.filterShow) {
                    itemsHeightAft += v.height
                }
            }
            // console.log('indStartActual', indStartActual, 'indEndActual', indEndActual, 'indStart', indStart, 'indEnd', indEnd)

            //useItems
            let useItems = []
            for (let k = indStart; k <= indEnd; k++) {
                // let v = {
                //     ...items[k]
                // }
                let v = cloneDeep(items[k])
                if (v.displayShow && v.filterShow) {
                    v.nowShow = true //k >= indStartActual //顯示區下方之預載節點都直接顯示供重算高度
                    v.top = v.y - vo.scrollInfor.t
                    useItems.push(v)
                }
            }

            //save
            let bPadding = false
            if (vo.itemsHeightPre !== itemsHeightPre) {
                bPadding = true
                vo.itemsHeightPre = itemsHeightPre
            }
            if (vo.itemsHeightAft !== itemsHeightAft) {
                bPadding = true
                vo.itemsHeightAft = itemsHeightAft
            }
            let bItems = false
            if (!isEqual(vo.useItems, useItems)) {
                bItems = true
                vo.useItems = useItems
                // console.log('更新useItems', size(useItems), cloneDeep(useItems))
            }
            // let hs = 0
            // each(useItems, (v) => {
            //     hs += v.height
            // })
            // console.log('h(all)=', itemsHeightPre + hs + itemsHeightAft, 'itemsHeightPre', itemsHeightPre, 'itemsHeightAft', itemsHeightAft, 'itemsHeight', hs, 'useItems', cloneDeep(useItems))

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

            return {
                change: bPadding || bItems,
            }
        },

        syncItemsHeight: function(items, fun) {
            // console.log('methods syncItemsHeight')

            let vo = this

            //wdsDiv
            let wdsDiv = get(vo, '$refs.wdsDiv', [])
            // console.log('wdsDiv', wdsDiv)

            //只偵測已顯示dom的高度是否有變化, 若是變更未顯示節點例如於最末新增節點, 就無法得知有變
            let changeHeight = false
            each(wdsDiv, (v, k) => {
                // console.log('wdsDiv', k, v)
                //採分層級判斷用以加速, 但可讀性變差

                //check getAttribute, 可能因切換組件導致元素消失
                if (!v.getAttribute) {
                    console.log('找不到getAttribute')
                    return true //跳出換下一個
                }

                //因更新次數不能太多, 若無算準nowShow會導致無法顯示, 若用以偵測也會導致已顯示節點會更新高度但無法顯示
                // //有標記nowShow顯示才計算高度, 現在nowShow=false一樣顯示只是高度透明, 故需要更新高度, 否則會因為先拉到後面且預設項目高度過低, 導致上方項目所儲存之高度很小但又已撐開為實際高度, 導致顯示誤差
                // let nowShow = v.getAttribute('nowShow')
                // if (nowShow !== 'c:true') {
                //     return true //跳出換下一個
                // }

                //取得數據儲存指標
                let index = v.getAttribute('index')
                if (!isp0int(index)) { //index >= 0 && index < n
                    console.log('!isp0int(index)', index)
                    return true //跳出換下一個
                }

                //cint
                index = cint(index)

                //找偵測高度元素, 需針對slot外層元素判斷offsetHeight比較準確, 否則用v.offsetHeight跟cnode.offsetHeight不同(通常差1px), 則會出現捲動後項目位置跳動問題
                let cnode = get(v, 'children.0')
                if (!isEle(cnode)) {
                    console.log('!isEle(cnode)', cnode)
                    return true //跳出換下一個
                }

                //記得slot提供繪製元素不要用margin避免計算高度有誤差
                // let h = v.offsetHeight
                let h = cnode.offsetHeight
                // console.log('index', index, '1-height', items[index].height, '2-height', cnode.offsetHeight, cnode)

                //detect height
                if (items[index].height !== h) {
                    // console.log('元素高度有更新', 'index', index, ',', items[index].height, '->', h, items[index])

                    //fun
                    if (isfun(fun)) {
                        fun(index, h)
                    }

                    //標記為高度有更新
                    changeHeight = true

                }
                else {
                    // console.log('元素高度無更新', 'index', index, ',', h, items[index])
                }

            })

            return changeHeight
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

            //changeHeight, syncItemsHeight
            vo.changeHeight = vo.syncItemsHeight(items, (index, h) => {
                // console.log('修改高度', 'index', index, items[index].height, '->', h)
                items[index].height = h
            })

            //check visible, 若組件未顯示(例如display:none)則不視為高度有變更狀態, 避免無限更新
            if (!vo.show) {
                vo.changeHeight = false
            }

            //check
            let itemsHeightTemp = null
            let b = vo.changeHeight || vo.changeDisplay || vo.changeFilter
            if (b) {

                //update y
                let y = 0
                for (let i = 0; i < n; i++) {
                    let v = items[i]
                    if (v.y !== y) {
                        items[i].y = y
                    }
                    if (v.displayShow && v.filterShow) {
                        y += v.height
                    }
                }

                //update itemsHeight
                itemsHeightTemp = vo.itemsHeight
                if (itemsHeightTemp !== y) {
                    itemsHeightTemp = y
                }

                //check empty
                if (itemsHeightTemp === 0) {
                    //console.log('偵測出現itemsHeightTemp=0, 強制改為43')
                    itemsHeightTemp = 43 //先預算出empty時高度, 使顯示加速
                }

                //check
                // let pxLimit = 4 //全部項目高度誤差門檻(px)
                // if (Math.abs(vo.itemsHeight - itemsHeightTemp) > pxLimit) { //偵測總項目高度是否與前次差超過pxLimit
                //     console.log('updateItemsHeight 需更新itemsHeight', vo.itemsHeight, '->', itemsHeightTemp)
                //     vo.itemsHeightTemp = vo.itemsHeight
                //     vo.itemsHeight = itemsHeightTemp
                // }
                // else {
                //     b = vo.changeDisplay || vo.changeFilter //若沒超過門檻pxLimit, 則b直接使用changeDisplay與changeFilter, 否則b包含changeHeight會影響導致refresh while導致無限偵測
                // }

                //reset
                vo.changeHeight = false
                vo.changeDisplay = false
                vo.changeFilter = false

            }

            return {
                change: b,
                itemsHeight: itemsHeightTemp,
            }
        },

        refreshCore: async function(from) {
            // console.log('methods refreshCore', from)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //check visible, 若組件未顯示(例如display:none)則不更新
            if (!vo.show) {
                return
            }

            //check, 初始化scrollInfor時預先給予t與b, 否則此時沒有scrollInfor無法計算
            if (vo.scrollInfor === null) {
                vo.scrollInfor = {
                    r: 0,
                    t: 0,
                    b: vo.viewHeightMax,
                    ch: vo.itemsHeight,
                }
            }

            //coreItems
            let n = 0
            let limit = 3
            async function coreItems() {
                let pm = genPm()

                //n
                n += 1
                // console.log('refreshCore n', n, 'scrollInfor', cloneDeep(vo.scrollInfor))

                //check, 取得元素高度因文字換行會有來回變動問題, 需有強制跳出機制
                if (n > limit) {
                    // console.log(`forced termination: call refreshCore ${limit} [from: ${from}]`)
                    pm.resolve(null)
                    return pm
                }

                //filterItems
                vo.filterItems()

                //genUseItems
                let rg = vo.genUseItems()

                //delay
                await delay(20)

                //updateItemsHeight
                let ru = vo.updateItemsHeight()
                // console.log('refreshCore updateItemsHeight r', r)

                //resolve
                pm.resolve({
                    genUseItems: rg,
                    updateItemsHeight: ru,
                })

                return pm
            }

            //coreInfor
            async function coreInfor() {

                //lock
                vo.lockFromRefreshUseItems = true

                //scrollInforTemp, 主要儲存r=ratio, 也就是基於scrollTop(viewTop)所在處的比例, 於內容高度更新後重算
                let scrollInforTemp = cloneDeep(vo.scrollInfor)
                // console.log('ratio=', scrollInforTemp.r, 'scrollTop=', scrollInforTemp.stn, 'scrollInforTemp=', scrollInforTemp)

                //coreItems, 若任何元素高度有變更則再重新計算需顯示的節點, 此時的確有可能會載入新節點, 所以原本給予節點之預設高度不能太高, 偵測時元素就多是變高, 所以需顯示的節點就會變少, 避免造成重新載入新節點狀況
                let r = await coreItems()

                //change
                let change = get(r, 'genUseItems.change', false) || get(r, 'updateItemsHeight.change', false)

                //itemsHeight
                let itemsHeight = get(r, 'updateItemsHeight.itemsHeight', null)

                //check, 為數字代表需更新itemsHeight
                if (isNumber(itemsHeight)) {
                    // console.log('refreshCore 需更新itemsHeight', vo.itemsHeight, '->', itemsHeight)

                    //check, 當點擊瞬間減少顯示內容區高度可能比外框高度小, 此時外部給予之scrollTop只能給0
                    if (itemsHeight <= vo.viewHeightMax) {

                        //check, 若scrollTop非0則需歸零
                        if (vo.scrollTop > 0) {
                            // console.log('refreshCore 需歸零scrollTop', vo.scrollTop, '->', 0)

                            //set 0
                            vo.scrollTop = 0

                        }

                    }
                    else {

                        //scrollTopRecover, 需恢復的scrollTop
                        // let scrollTopRecover = ratioOld * contentHeightEff
                        let scrollTopDiff = 0
                        if (scrollInforTemp.dir === 'up') {
                            // scrollTopDiff = itemsHeight - vo.itemsHeightTemp
                            scrollTopDiff = itemsHeight - scrollInforTemp.ch
                        }
                        let scrollTopRecover = vo.scrollTop + scrollTopDiff

                        // //check, 若本來已捲到最底部
                        // if (vo.scrollTop === 1) {
                        //     scrollTopRecover = 1
                        // }

                        //更新scrollTop
                        if (vo.scrollTop !== scrollTopRecover) {
                            // console.log('refreshCore 需更新scrollTop', vo.scrollTop, '->', scrollTopRecover)
                            vo.scrollTop = scrollTopRecover
                        }

                        //更新itemsHeight
                        vo.itemsHeight = itemsHeight

                        //emit change-height-of-items
                        vo.$emit('change-height-of-items', { height: itemsHeight })

                    }

                }

                //check change
                if (change) {

                    //unlock
                    vo.lockFromRefreshUseItems = false

                    //triggerEvent, 因內容物有改故需triggerEvent, 記得先解索
                    vo.triggerEvent('mutation', { from: 'wdl-refreshCore' })

                }

            }

            //coreInfor
            await coreInfor()
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {

                    //unlock
                    vo.lockFromRefreshUseItems = false

                })

        },

        refresh: function(from) {
            //console.log('methods refresh', from)

            let vo = this

            //refreshCore
            vo.pmtRefresh(vo.refreshCore, from)
                .catch(() => { })

        },

        filterDebounce: function() {
            //console.log('methods filterDebounce')

            let vo = this

            //dbcRefresh
            vo.dbcRefresh(() => {

                //refreshCore
                vo.refreshCore('filterDebounce')

            })

        },

        changeInfor: function(msg) {
            // console.log('methods changeInfor', msg)

            let vo = this

            //check
            if (vo.mmkey === null) {
                return
            }

            //check, 有上鎖時不能執行
            if (vo.lockFromProcess) {
                // console.log('return by lockFromProcess')
                return
            }
            if (vo.lockFromSetRows) {
                // console.log('return by lockFromSetRows')
                return
            }
            if (vo.lockFromRefreshUseItems) {
                // console.log('return by lockFromRefreshUseItems')
                return
            }
            // console.log('changeInfor dbcRefresh call', msg)

            //dbcRefresh
            vo.dbcRefresh(() => {
                // console.log('changeInfor dbcRefresh run')

                //save scrollInfor
                vo.scrollInfor = msg
                // console.log('changeInfor scrollInfor', cloneDeep(msg))

                //refresh
                vo.refresh('changeInfor')

            })

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

                //items
                //let items = vo.items
                let items = gm.get(vo.mmkey)

                //check
                if (!isarr(items)) {
                    return //因加速渲染技術是由外部wdl.setRows, wdl有可能出現未setRows但被調用processItems, 故導致gm內無數據
                }

                //外部使用fun直接修改items
                let fun = get(opt, 'fun', null)
                if (isfun(fun)) {

                    //呼叫fun, items直接傳入被修改, 因記憶體共用不用回傳覆寫items
                    let r = fun(items)

                    //check
                    if (ispm(r)) {
                        r = await r
                    }

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

                //refreshCore, 變更changeDisplay與changeFilter需refresh, 使內部能重算需顯示元素與高度
                await vo.refreshCore('processItems')

                //unluck, 因上鎖無法refresh(mutation), 得先解鎖
                vo.lockFromProcess = false

                //triggerEvent, 因內容物有改故需triggerEvent, 記得先解索
                vo.triggerEvent('mutation', { from: 'wdl-processItems' })

            }

            //core
            await core()
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {

                    //unluck
                    vo.lockFromProcess = false

                })

        },

        setSearchingResults: function(searchingResults) {
            this.searchingResults = searchingResults
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
            vo.searchingResults = -1
            if (size(vo.filterKeywords) === 0) {

                //預設可見
                for (let k = 0; k < n; k++) {
                    items[k].filterShow = true
                }

                //update searchingResults
                vo.searchingResults = 1

            }
            else {

                //fkws, 關鍵字轉小寫再查詢
                let fkws = vo.filterKeywords.toLowerCase()
                // console.log('fkws', fkws)

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
                        c = join(values(r), ' ')
                    }
                    else {
                        c = o2j(r)
                    }
                    c = c.toLowerCase()

                    return c
                })

                //arrFilterByKeywords
                let rs = arrFilterByKeywords(cs, fkws)

                //update filterShow
                let isr = 0
                each(items, (v, k) => {
                    let r = rs[k]
                    // console.log(k, cs[k], r)
                    items[k].filterShow = r.hasKeyword
                    if (r.hasKeyword) {
                        isr++
                    }
                })

                //update searchingResults
                vo.searchingResults = isr

            }

            //changeFilter
            vo.changeFilter = true

        },

        triggerEvent: function(name, msg) {
            //console.log('methods triggerEvent', name, msg)

            let vo = this

            //triggerEvent
            let t = get(vo, '$refs.wpsc.triggerEvent', null)
            if (t) {
                t(name, msg)
            }

        },

    },
}
</script>

<style scoped>
</style>

