<template>
    <WDynamicList
        ref="wdl"
        :viewHeightMax="viewHeightMax"
        :itemMinHeight="defItemHeight"
        :itemsPreload="itemsPreload"
        :searchEmpty="searchEmpty"
        :separatorHeight="separatorHeight"
        :separatorColor="separatorColor"
        :show="show"
        @render="(msg)=>{$emit('render',msg)}"
        :changeSelection="changeSelection"
        :changeFilterKeyWords="changeFilterKeyWords"
    >
        <template v-slot="props">

            <!-- 記得要:key使各div都是可識別元素, 避免捲動時不同方向圖標因transition而會有微轉動問題 -->
            <!-- wdl template內第1層元素高度需設定min-height不能用height, 因會偵測此元素高度來按需顯示, 用height會導致元素高度被寫死無法由slot撐開 -->
            <div
                :key="`wt-${props.index}`"
                :style="`min-height:${iconHeight}px;`"
                @mouseenter="(e)=>{$emit('mouseenter',getEmitData(e,props))}"
                @mouseleave="(e)=>{$emit('mouseleave',getEmitData(e,props))}"
                @click="(e)=>{$emit('click',getEmitData(e,props))}"
            >
                <div :style="`display:table; ${usePadding}`">
                    <!-- 各元素需使用padding撐開寬度避免被壓縮 -->

                    <div :style="`display:table-cell; vertical-align:top; padding-right:${getLevel(props.row)*useIndent}px;`"></div>

                    <div :style="`display:table-cell; vertical-align:top; padding-right:${separation}px;`"></div>

                    <div :style="`display:table-cell; vertical-align:top; padding:0px ${separation}px;`">
                        <WTreeIconToggle
                            :style="`width:24px; height:${iconHeight}px;`"
                            :dir="`${props.row.unfolding?'bottom':'right'}`"
                            :iconColor="iconToggleColor"
                            :iconBackgroundColor="iconToggleBackgroundColor"
                            :iconBackgroundColorHover="iconToggleBackgroundColorHover"
                            @click.stop="toggleItems(props.row)"
                             v-if="hasChildren(props.index)"
                        ></WTreeIconToggle>
                        <div style="padding-right:24px;" v-else></div>
                    </div>

                    <!-- 因顯隱圖標比較小而勾選圖標比較大, 讓separation全灌到padding-right處使排版比較均勻 -->
                    <div :style="`display:table-cell; vertical-align:top; padding:0px ${2*separation}px 0px 0px;`" v-if="selectable">
                        <WTreeIconCheckbox
                            :style="`height:${iconHeight}px;`"
                            :mode="props.row.checked"
                            :editable="getEditable(props.row.item)"
                            :uncheckedColor="iconUncheckedColor"
                            :uncheckedDisabledColor="iconUncheckedDisabledColor"
                            :checkedColor="iconCheckedColor"
                            :checkedDisabledColor="iconCheckedDisabledColor"
                            :checkedPartiallyColor="iconCheckedPartiallyColor"
                            :checkedPartiallyDisabledColor="iconCheckedPartiallyDisabledColor"
                            @click="checkItems(props.row)"
                        ></WTreeIconCheckbox>
                    </div>

                    <!-- 給予width:100%使slot區可自動展開寬度至組件寬 -->
                    <div :style="`display:table-cell; vertical-align:top; height:${iconHeight}px; width:100%;`">

                        <slot
                            name="item"
                            :data="props.row.item"
                            :index="props.index"
                        >
                            <div :style="`height:${iconHeight}px; display:flex; align-items:center;`">
                                {{getText(props.row.item)}}
                            </div>
                        </slot>

                    </div>

                </div>
            </div>

        </template>
    </WDynamicList>
</template>

<script>
import each from 'lodash/each'
import get from 'lodash/get'
import map from 'lodash/map'
import join from 'lodash/join'
import find from 'lodash/find'
import size from 'lodash/size'
import isEqual from 'lodash/isEqual'
import reverse from 'lodash/reverse'
import remove from 'lodash/remove'
import cloneDeep from 'lodash/cloneDeep'
import isInteger from 'lodash/isInteger'
import isNumber from 'lodash/isNumber'
import dropRight from 'lodash/dropRight'
import genID from 'wsemi/src/genID.mjs'
import sep from 'wsemi/src/sep.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import flattenTreeObj from 'wsemi/src/flattenTreeObj'
import globalMemory from '../js/globalMemory.mjs'
import WDynamicList from './WDynamicList.vue'
import WTreeIconToggle from './WTreeIconToggle.vue'
import WTreeIconCheckbox from './WTreeIconCheckbox.vue'


//gm
let gm = globalMemory()


/**
 * @vue-prop {Array|Object} [data=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Boolean} [selectable=false] 輸入是否具有勾選模式，預設false
 * @vue-prop {Array} [selections=[]] 輸入勾選項目陣列，當selectable=true時才可使用，預設[]
 * @vue-prop {String} [keyPrimary='id'] 輸入可選項目為物件時，主鍵之欄位字串，預設'id'
 * @vue-prop {String} [keyText='text'] 輸入可選項目為物件時，顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyChildren='children'] 輸入可選項目為物件時，所屬子項目之欄位字串，預設'children'
 * @vue-prop {String} [keyLock='locked'] 輸入可選項目為物件時，禁止勾選之欄位字串，預設'locked'
 * @vue-prop {Object} [paddingStyle={v:0,h:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Number} [indent=1] 輸入縮排比率數字，若使用1就是1倍的圖標寬度(24px)+2*separation(3px)，預設1
 * @vue-prop {String} [iconToggleColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [iconToggleBackgroundColor='transparent'] 輸入顯隱icon按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [iconToggleBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱icon按鈕背景顏色字串，預設'rgba(128,128,128,0.15)'
 * @vue-prop {String} [iconUncheckedColor='grey darken-2'] 輸入未勾選時顏色字串，預設'grey darken-2'
 * @vue-prop {String} [iconUncheckedDisabledColor='grey'] 輸入禁用時未勾選時顏色字串，預設'grey'
 * @vue-prop {String} [iconCheckedColor='blue darken-3'] 輸入勾選時顏色字串，預設'blue darken-3'
 * @vue-prop {String} [iconCheckedDisabledColor='grey'] 輸入禁用時勾選時顏色字串，預設'grey'
 * @vue-prop {String} [iconCheckedPartiallyColor='blue darken-3'] 輸入部份勾選時(子節點任一有勾選但非全部勾選)顏色字串，預設'blue darken-3'
 * @vue-prop {String} [iconCheckedPartiallyDisabledColor='grey'] 輸入禁用部份勾選時(子節點任一有勾選但非全部勾選)顏色字串，預設'grey'
 * @vue-prop {String} [filterKeywords=''] 輸入過濾關鍵字字串，多關鍵字用空白分隔，預設''
 * @vue-prop {Function} [filterFunction=null] 輸入過濾時呼叫處理函數，傳入為各項目物件資料，回傳布林值代表項目內是否含有關鍵字，預設null
 * @vue-prop {String} [searchEmpty='Empty'] 輸入無過濾結果字串，預設'Empty'
 * @vue-prop {Number} [defItemHeight=34] 輸入按需顯示時各項目預設高度值，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設34
 * @vue-prop {Number} [itemsPreload=5] 輸入上下方預先載入元素數量，預設5
 * @vue-prop {Number} [separatorHeight=1] 輸入分隔線高度數字，預設1
 * @vue-prop {String} [separatorColor='transparent'] 輸入分隔線顏色字串，預設'transparent'
 * @vue-prop {Boolean} [show=true] 輸入是否為顯示模式，預設true，供組件嵌入popup時, 因先初始化但尚未顯示不需渲染, 可給予show=false避免無限偵測與重算高度問題
 */
export default {
    components: {
        WDynamicList,
        WTreeIconToggle,
        WTreeIconCheckbox,
    },
    props: {
        data: {
            type: [Array, Object],
            default: () => [],
        },
        viewHeightMax: {
            type: Number,
            default: 400,
        },
        selectable: {
            type: Boolean,
            default: false,
        },
        selections: {
            type: Array,
            default: () => [],
        },
        keyPrimary: {
            type: String,
            default: 'id',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        keyChildren: {
            type: String,
            default: 'children',
        },
        keyLocked: {
            type: String,
            default: 'locked',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 0,
                }
            },
        },
        indent: {
            type: Number,
            default: 1,
        },
        iconToggleColor: {
            type: String,
            default: 'grey',
        },
        iconToggleBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        iconToggleBackgroundColorHover: {
            type: String,
            default: 'rgba(128,128,128,0.15)',
        },
        iconUncheckedColor: {
            type: String,
            default: 'grey darken-2',
        },
        iconUncheckedDisabledColor: {
            type: String,
            default: 'grey',
        },
        iconCheckedColor: {
            type: String,
            default: 'blue darken-3',
        },
        iconCheckedDisabledColor: {
            type: String,
            default: 'grey',
        },
        iconCheckedPartiallyColor: {
            type: String,
            default: 'blue darken-3',
        },
        iconCheckedPartiallyDisabledColor: {
            type: String,
            default: 'grey',
        },
        filterKeywords: {
            type: String,
            default: '',
        },
        filterFunction: {
            type: Function,
            default: null,
        },
        searchEmpty: {
            type: String,
            default: 'Empty',
        },
        defItemHeight: {
            type: Number,
            default: 34,
        },
        itemsPreload: {
            type: Number,
            default: 5,
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
            dbc: debounce(),
            mmkey: null,
            separation: 3,
            iconHeight: 34,
            selectionsTrans: [],
            filterKeywordsTemp: '', //上次過濾關鍵字
            filtering: false, //是否過濾中
        }
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

        data: {
            immediate: true,
            deep: true,
            handler(value) {
                //console.log('watch data', value)

                let vo = this

                //setData
                vo.setData(value)

            }
        },

    },
    computed: {

        changeSelection: function() {
            //console.log('computed changeSelection')

            let vo = this

            //ss for trigger
            let ss = vo.selections

            //updateSelection
            vo.updateSelection()

            vo.___selections___ = ss
            return ''
        },

        changeFilterKeyWords: function() {
            //console.log('computed changeFilterKeyWords')

            let vo = this

            //ft for trigger
            let ft = vo.filterKeywords

            //filterKeyWordsDebounce
            vo.filterKeyWordsDebounce()

            vo.__filterKeywords__ = ft
            return ''
        },

        useIndent: function() {
            //console.log('computed useIndent')

            let vo = this

            return vo.indent * (24 + 2 * vo.separation)
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            //四方向padding
            let left = 0
            let right = 0
            let top = 0
            let bottom = 0
            if (isNumber(get(vo, 'paddingStyle.h'))) {
                left = get(vo, 'paddingStyle.h')
                right = left
            }
            if (isNumber(get(vo, 'paddingStyle.v'))) {
                top = get(vo, 'paddingStyle.v')
                bottom = top
            }
            if (isNumber(get(vo, 'paddingStyle.left'))) {
                left = get(vo, 'paddingStyle.left')
            }
            if (isNumber(get(vo, 'paddingStyle.right'))) {
                right = get(vo, 'paddingStyle.right')
            }
            if (isNumber(get(vo, 'paddingStyle.top'))) {
                top = get(vo, 'paddingStyle.top')
            }
            if (isNumber(get(vo, 'paddingStyle.bottom'))) {
                bottom = get(vo, 'paddingStyle.bottom')
            }

            //padding
            let padding = `padding:${top}px ${right}px ${bottom}px ${left}px;`

            return padding
        },

    },
    methods: {

        getEmitData: function(e, props) {
            //console.log('methods getEmitData', e, props)

            // let vo = this

            return { event: e, ele: e.currentTarget, row: props.row, item: props.row.item, index: props.index }
        },

        setData: function(data) {
            //console.log('methods setData', data)

            let vo = this

            async function core() {

                //check
                if (!isarr(data) && !isobj(data)) {
                    let msg = 'data is not array or object'
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

                //cloneDeep
                data = cloneDeep(data)

                //flattenTreeObj
                let ts = flattenTreeObj(data, { bindKey: vo.keyPrimary, bindChildren: vo.keyChildren })

                //rows, lodash使用new Array建構比for+push快
                let rows = map(ts, (v, k) => {
                    return {
                        index: k,
                        unfolding: true, //bol, 是否展開顯示此節點
                        checked: 'unchecked', //str, 節點勾選狀態, 'unchecked'代表未勾選, 'checked'代表已勾選, 'checkedPartially'代表部份勾選時(子節點任一有勾選但非全部勾選)
                        item: v,
                    }
                })

                //save
                //vo.rows = rows
                gm.set(vo.mmkey, rows)

                //wait wdl, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.wdl !== undefined
                }, { timeInterval: 20 })

                //setRows
                await vo.$refs.wdl.setRows(rows)

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        getText: function (item) {
            //console.log('methods getText', item)
            let vo = this
            return get(item, vo.keyText, '')
        },

        getEditable: function (item) {
            //console.log('methods getEditable', item)
            let vo = this
            return !get(item, vo.keyLocked, false)
        },

        updateSelection: function() {
            //console.log('methods updateSelection')

            let vo = this

            async function core() {
                let selectionsTrans = [] //由外部selections變更時, 直接由空的selectionsTrans進行重產

                //wait wdl, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.wdl !== undefined
                }, { timeInterval: 20 })

                //check
                if (isEqual(vo.selectionsTrans, vo.selections)) {
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                        //console.log('items', cloneDeep(items))

                        //kpInd, 建立各item的速查表, 由keyPrimary直接取得項目位於items陣列內的指標
                        let kpInd = {}
                        each(items, (v, ind) => {

                            //pk
                            let pk = get(v, `row.item.${vo.keyPrimary}`)

                            //build kpInd
                            if (haskey(kpInd, pk)) {
                                console.log(`Duplicate primary key[${vo.keyPrimary}] in items`, pk)
                            }
                            else {
                                kpInd[pk] = ind
                            }

                            //預設
                            items[ind].row.checked = 'unchecked'

                        })

                        //each, 遍歷selections進行虛擬操作取得selectionsTrans
                        each(cloneDeep(vo.selections), (v) => {

                            //pk
                            let pk = v[vo.keyPrimary]

                            //ind
                            let ind = kpInd[pk]

                            //check
                            if (ind) {

                                //checked
                                let checked = items[ind].row.checked

                                //check, 若節點原本的勾選狀態非checked, 才需要呼叫
                                if (checked !== 'checked') {

                                    //modify
                                    checked = 'checked'

                                    //checkItemsCore
                                    vo.checkItemsCore(selectionsTrans, items, ind, checked)

                                }

                            }

                        })

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

                //save
                vo.selectionsTrans = selectionsTrans

                //emit, 要放在wdl更新後才觸發事件
                vo.$emit('update:selections', cloneDeep(vo.selectionsTrans))

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        addSelection: function(selections, item) {
            //console.log('methods addSelection', selections, item.text, item)

            let vo = this

            //pk
            let pk = get(item, vo.keyPrimary, null)

            //push
            if (pk !== null) {

                //find
                let r = find(selections, { [vo.keyPrimary]: pk })

                //check, 若無項目物件則新增
                if (!r) {

                    //複製項目物件, 僅儲存非keyChildren的key, 避免複製父層物件時使用過多記憶體
                    let t = {}
                    each(item, (v, k) => {
                        if (k !== vo.keyChildren && k !== 'level' && k !== 'nk' && k !== 'msg') { //
                            t[k] = cloneDeep(v)
                        }
                    })

                    //push, 會直接修改selections的記憶體
                    selections.push(t)

                }

            }

        },

        removeSelection: function(selections, item) {
            //console.log('methods removeSelection', selections, item.text, item)

            let vo = this

            //pk
            let pk = get(item, vo.keyPrimary, null)

            //push
            if (pk !== null) {

                //find
                let r = find(selections, { [vo.keyPrimary]: pk })

                //check, 若有項目物件則刪除
                if (r) {

                    //remove, 直接修改selections的記憶體
                    remove(selections, { [vo.keyPrimary]: pk })

                }

            }

        },

        modifySelection: function(selections, checkedOld, checkedNew, item) {
            //console.log('methods modifySelection', selections, checkedOld, checkedNew, item)

            let vo = this

            //check
            if (checkedOld === checkedNew) {
                return
            }

            //call
            if (checkedNew === 'checked') {
                vo.addSelection(selections, item)
            }
            else {
                vo.removeSelection(selections, item)
            }

        },

        hasChildren: function(ind) {
            //console.log('methods hasChildren', ind)

            let vo = this

            return vo.getLevelDiff(ind) > 0
        },

        hasChildrenFromItems: function(items, ind) {
            //console.log('methods hasChildrenFromItems', items, ind)

            let vo = this

            return vo.getLevelDiffFromItems(items, ind) > 0
        },

        getLevelDiff: function(ind) {
            //console.log('methods getLevelDiff', ind)

            let vo = this

            //rows
            let rows = gm.get(vo.mmkey)

            return vo.getLevelDiffFromRows(rows, ind)
        },

        getLevelDiffFromRows: function(rows, ind) {
            //console.log('methods getLevelDiffFromRows', rows, ind)

            let vo = this

            //lev1, lev2
            let lev1 = get(rows, `${ind}.item.level`, null)
            let lev2 = get(rows, `${ind + 1}.item.level`, null)

            return vo.calcLevelDiff(lev1, lev2)
        },

        getLevelDiffFromItems: function(items, ind) {
            //console.log('methods getLevelDiffFromItems', items, ind)

            let vo = this

            //lev1, lev2
            let lev1 = get(items, `${ind}.row.item.level`, null)
            let lev2 = get(items, `${ind + 1}.row.item.level`, null)

            return vo.calcLevelDiff(lev1, lev2)
        },

        calcLevelDiff: function(lev1, lev2) {
            //console.log('methods calcLevelDiff', lev1, lev2)

            // let vo = this

            //check
            if (!isInteger(lev1) || !isInteger(lev2)) {
                return 0
            }

            return lev2 - lev1
        },

        getLevel: function(row) {
            //console.log('methods getLevel', row)
            return get(row, `item.level`, 0)
        },

        toggleItemsCore: function(items, ind, unfolding) {
            //console.log('methods toggleItemsCore', items, ind, unfolding)

            let vo = this

            //unfoldingChain
            let unfoldingChain = []

            //依照unfoldingChain計算節點displayShow
            function getDisplayShow() {
                for (let i = 0; i < unfoldingChain.length; i++) {
                    if (unfoldingChain[i] === false) {
                        return false
                    }
                }
                return true
            }

            //本身節點變更unfolding
            function modifySelf(ind, unfolding) {

                //save unfolding
                items[ind].row.unfolding = unfolding

                //add unfolding
                unfoldingChain.push(unfolding)

            }

            //若有子節點, 則變更所屬子節點
            function modifyChildren(ind, unfolding) {

                //level
                let level = get(items, `${ind}.row.item.level`, null)
                if (level === null) {
                    console.log('invalid level')
                    return
                }

                //modify displayShow
                for (let i = ind + 1; i < items.length; i++) {
                    //點擊節點後之各子節點

                    //levelNow
                    let levelNow = get(items, `${i}.row.item.level`, null)
                    if (levelNow === null) {
                        console.log('invalid levelNow')
                        return
                    }

                    //偵測至與點擊節點同層或父層之節點, 代表已處理完畢展隱所影響之全部節點, 可跳出迴圈加速
                    if (level >= levelNow) {
                        break
                    }

                    //displayShow, 當unfoldingChain內都是true時才能顯示, 有任一是false就得隱藏
                    let displayShow = getDisplayShow()

                    //save displayShow
                    items[i].displayShow = displayShow

                    //levDiff, 計算此節點與下個節點之level差值
                    let levDiff = vo.getLevelDiffFromItems(items, i)

                    //此節點有所屬子節點
                    if (levDiff > 0) {

                        //unfolding
                        let unfoldingNow = get(items, `${i}.row.unfolding`, null)
                        if (unfoldingNow === null) {
                            console.log('invalid unfoldingNow')
                            return
                        }

                        //add unfolding
                        unfoldingChain.push(unfoldingNow)

                    }

                    //此節點之下為父層或更上層之節點
                    if (levDiff < 0) {

                        //dropRight, 刪除所屬各層節點的unfolding
                        unfoldingChain = dropRight(unfoldingChain, -levDiff)

                    }

                }

            }

            //modifySelf
            modifySelf(ind, unfolding)

            //modifyChildren
            modifyChildren(ind, unfolding)

        },

        toggleItems: function(item) {
            //console.log('methods toggleItems', item)

            let vo = this

            async function core() {

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                    //console.log('items', cloneDeep(items))

                        //ind
                        let ind = item.index

                        //unfolding
                        let unfolding = get(items, `${ind}.row.unfolding`, null)
                        if (unfolding === null) {
                            console.log('invalid unfolding')
                            return
                        }

                        //本身節點變更unfolding
                        unfolding = !unfolding

                        //toggleItemsCore
                        vo.toggleItemsCore(items, ind, unfolding)

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        getAllParentIndex: function(items, ind) {
            //console.log('methods getAllParentIndex', items, ind)
            //取得全部父層節點指標與path

            let vo = this

            //selfInd
            let selfInd = ind

            //無限迴圈尋找
            let inds = []
            while (true) {

                //parentInd
                let parentInd = vo.getParentIndex(items, selfInd)

                //break
                if (parentInd === null) {
                    break
                }

                //push
                inds.push(parentInd)

                //save
                selfInd = parentInd

            }

            //path
            let path = join(reverse(inds), '-')

            return {
                inds,
                path,
            }
        },

        getParentIndex: function(items, ind) {
            //console.log('methods getParentIndex', items, ind)
            //取得父層節點指標

            //level
            let level = get(items, `${ind}.row.item.level`, null)
            if (level === null) {
                return null
            }

            //往前偵測
            for (let i = ind - 1; i >= 0; i--) {

                //levelNow
                let levelNow = get(items, `${i}.row.item.level`, null)
                if (levelNow === null) {
                    return null
                }

                //若已出現父層節點, 繼續算則不可能出現同層節點, 可跳出迴圈加速
                if (level > levelNow) {
                    return i
                }

            }

            return null //找不到父層節點
        },

        checkItemsCore: function(selections, items, ind, checked) {
            //console.log('methods checkItemsCore', selections, items, ind, checked)
            //由外部傳入selections並直接修改記憶體, 外部selections需先cloneDeep用以計算本次操作所增減項目

            let vo = this

            //本身節點變更checked
            function modifySelf(selections, ind, checked) {

                //checkedOld
                let checkedOld = items[ind].row.checked

                //save checked
                items[ind].row.checked = checked

                //modifySelection
                vo.modifySelection(selections, checkedOld, checked, items[ind].row.item)

            }

            //若有子節點, 則變更所屬子節點
            function modifyChildren(selections, ind, checked) {
                if (vo.hasChildrenFromItems(items, ind)) {

                    //level
                    let level = get(items, `${ind}.row.item.level`, null)
                    if (level === null) {
                        console.log('invalid level')
                        return
                    }

                    //modify checked
                    for (let i = ind + 1; i < items.length; i++) {
                    //點擊節點後之各子節點

                        //levelNow
                        let levelNow = get(items, `${i}.row.item.level`, null)
                        if (levelNow === null) {
                            console.log('invalid levelNow')
                            return
                        }

                        //偵測至與點擊節點同層或父層之節點, 代表已處理完畢全部所屬子節點, 可跳出迴圈加速
                        if (level >= levelNow) {
                            break
                        }
                        //console.log(`[${items[i].row.item.name}]`, 'level', level, 'levelNow', levelNow)

                        //checkedOld
                        let checkedOld = items[i].row.checked

                        //save checked
                        items[i].row.checked = checked

                        //modifySelection
                        vo.modifySelection(selections, checkedOld, checked, items[i].row.item)

                    }

                }
            }

            //偵測全部同層的checked狀態, 回傳為父層節點的checked狀態
            function detectSameLevelChecked(ind) {

                //level
                let level = get(items, `${ind}.row.item.level`, null)
                if (level === null) {
                    console.log('invalid level')
                    return null
                }

                //sameLevelInds, 把點擊節點先加入至偵測清單
                let sameLevelInds = [{
                    ind,
                    checked: get(items, `${ind}.row.checked`, ''),
                }]

                //往前偵測
                for (let i = ind - 1; i >= 0; i--) {

                    //levelNow
                    let levelNow = get(items, `${i}.row.item.level`, null)
                    if (levelNow === null) {
                        console.log('invalid levelNow')
                        return
                    }

                    //若已出現父層節點, 繼續算則不可能出現同層節點, 可跳出迴圈加速
                    if (level > levelNow) {
                        break
                    }

                    //若為同層節點才加入偵測清單
                    if (level === levelNow) {

                        //push
                        sameLevelInds.push({
                            ind: i,
                            checked: get(items, `${i}.row.checked`, ''),
                        })

                    }

                }

                //往後偵測
                for (let i = ind + 1; i < items.length; i++) {

                    //levelNow
                    let levelNow = get(items, `${i}.row.item.level`, null)
                    if (levelNow === null) {
                        console.log('invalid levelNow')
                        return
                    }

                    //若已出現父層節點, 繼續算不可能出現同層節點, 可跳出迴圈加速
                    if (level > levelNow) {
                        break
                    }

                    //若為同層節點才加入偵測清單
                    if (level === levelNow) {

                        //push
                        sameLevelInds.push({
                            ind: i,
                            checked: get(items, `${i}.row.checked`, ''),
                        })

                    }

                }

                //count
                let nAll = size(sameLevelInds)
                let nChecked = 0
                let nUnchecked = 0
                each(sameLevelInds, (v) => {
                    if (v.checked === 'checked') {
                        nChecked += 1
                    }
                    else if (v.checked === 'unchecked') {
                        nUnchecked += 1
                    }
                })

                if (nChecked === nAll) {
                    return 'checked'
                }
                else if (nUnchecked === nAll) {
                    return 'unchecked'
                }
                return 'checkedPartially'
            }

            //調整全部父層節點的checked狀態
            function modifyParent(selections, ind) {

                //parentInd, 父層節點指標
                let parentInd = vo.getParentIndex(items, ind)

                //check
                if (parentInd === null) {
                    return
                }

                //取得父層節點與checked資訊
                let parent = get(items, parentInd, null)
                let parentCheckedOld = get(parent, 'row.checked', '')
                let parentCheckedNew = detectSameLevelChecked(ind) //偵測與自己同層節點的checked資訊, 代表父層應該的checked

                //比對父層現在與應該checked是否不同, 若不同則覆寫
                if (parentCheckedOld !== parentCheckedNew) {

                    //parentCheckedOld
                    let parentCheckedOld = items[parentInd].row.checked

                    //save checked
                    items[parentInd].row.checked = parentCheckedNew

                    //modifySelection
                    vo.modifySelection(selections, parentCheckedOld, parentCheckedNew, items[parentInd].row.item)

                    //modifyParent, 遞迴繼續查找父層節點
                    modifyParent(selections, parentInd)

                }

            }

            //modifySelf
            modifySelf(selections, ind, checked)
            // console.log(vo.mmkey, 'modifySelf selections', cloneDeep(selections))

            //modifyChildren
            modifyChildren(selections, ind, checked)
            // console.log(vo.mmkey, 'modifyChildren selections', cloneDeep(selections))

            //modifyParent
            modifyParent(selections, ind)
            // console.log(vo.mmkey, 'modifyParent selections', cloneDeep(selections))

        },

        checkItems: function(item) {
            //console.log('methods checkItems', item)

            let vo = this

            async function core() {
                let selectionsTrans = cloneDeep(vo.selectionsTrans) //由內部selectionsTrans當初始值, cloneDeep後進行修改

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                    //console.log('items', cloneDeep(items))

                        //ind
                        let ind = item.index

                        //checked
                        let checked = get(items, `${ind}.row.checked`, null)
                        if (checked === null) {
                            console.log('invalid checked')
                            return
                        }

                        //本身節點變更checked
                        if (checked === 'checked') {
                            checked = 'unchecked'
                        }
                        else if (checked === 'unchecked') {
                            checked = 'checked'
                        }
                        else {
                            checked = 'checked'
                        }

                        //checkItemsCore
                        vo.checkItemsCore(selectionsTrans, items, ind, checked)

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

                //save
                vo.selectionsTrans = selectionsTrans

                //emit, 要放在wdl更新後才觸發事件
                vo.$emit('update:selections', cloneDeep(vo.selectionsTrans))

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        filterKeyWordsCore: function(items) {
            //console.log('methods filterKeyWordsCore', items)

            let vo = this

            //check filterKeywordsTemp
            if (vo.filterKeywordsTemp === vo.filterKeywords) {
                return
            }
            vo.filterKeywordsTemp = vo.filterKeywords //因為函數為同步故可以先覆寫至temp

            //check
            if (size(vo.filterKeywords) === 0) {

                //預設可見
                for (let i = 0; i < items.length; i++) {
                    items[i].filterShow = true
                }

            }
            else {

                //kws
                let kws = sep(vo.filterKeywords.toLowerCase(), ' ')

                //針對各項目偵測過濾
                let pathHasShow = {} //儲存已經強制顯示的父層鏈
                for (let i = 0; i < items.length; i++) {

                    //預設不可見
                    let b = false

                    //filter
                    if (isfun(vo.filterFunction)) {

                        //filterFunction
                        b = vo.filterFunction(items[i].row.item)

                    }
                    else {

                        //預設取得項目文字供關鍵字過濾
                        let c = vo.getText(items[i].row.item)
                        console.log('vo.getText', items[i].row.item, 'c=', c)

                        //toLowerCase
                        c = c.toLowerCase()

                        //若值含有關建字
                        for (let k = 0; k < kws.length; k++) {
                            let kw = kws[k]
                            if (c.indexOf(kw) >= 0) {
                                b = true
                                break
                            }
                        }

                    }

                    //若項目有關鍵字, 則需設定全部父層節點為可見, 不能被過濾掉
                    if (b) {

                        //此節點顯示
                        items[i].filterShow = true

                        //getAllParentIndex, 取得全部父層資訊
                        let pai = vo.getAllParentIndex(items, i)

                        //若有找到一個以上的父層
                        if (pai.path !== '') {

                            //若尚未處理過此父層鏈
                            if (!haskey(pathHasShow, pai.path)) {

                                //針對各父層設定filterShow=true
                                each(pai.inds, (ind) => {
                                    items[ind].filterShow = true
                                })

                                //儲存此父層鏈, 避免下次重複設定減少功耗
                                pathHasShow[pai.path] = pai

                            }

                        }

                    }
                    else {

                        //此節點隱藏
                        items[i].filterShow = false

                    }

                }

            }

        },

        filterKeyWords: function() {
            //console.log('methods filterKeyWords')

            let vo = this

            async function core() {

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //check
                if (vo.filtering) {
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                        //console.log('items', cloneDeep(items))

                        //filterKeyWordsCore
                        vo.filterKeyWordsCore(items)

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

                //filtering
                vo.filtering = false

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        filterKeyWordsDebounce: function() {
            //console.log('methods filterKeyWordsDebounce')

            let vo = this

            //dbc
            vo.dbc(() => {

                //refresh
                vo.filterKeyWords()

            })

        },

    },
}
</script>

<style scoped>
</style>

