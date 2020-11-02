<template>
    <div :changeItems="changeItems" :flatItems="flatItems">
        <!-- 不讓position:relative露出至組件元素 -->
        <div style="position:relative; user-select:none;">

            <div
                :style="`transition:all 0.2s linear; cursor:pointer; outline:none; padding-left:${(node.nk.length-1)*indent}px;`"
                :key="get(node,bindKey,knode)"
                tabindex="0"
                dragtag
                :dragindex="knode"
                v-for="(node,knode) in nodes"
                @mouseenter="(e)=>{$emit('mouseenter',{event:e,ele:e.target,node,knode})}"
                @mouseleave="(e)=>{$emit('mouseleave',{event:e,ele:e.target,node,knode})}"
                @keyup.enter="(e)=>{$emit('click',{event:e,ele:e.target,node,knode})}"
                @click="(e)=>{$emit('click',{event:e,ele:e.target,node,knode})}"
            >

                <slot
                    name="item"
                    :node="node"
                    :knode="knode"
                ></slot>

            </div>

            <div
                :style="`position:absolute; z-index:9999; pointer-events:none; left:${dgTipLeft}px; top:${dgTipTop}px;`"
                :msg="`需使用pointer-events:none;禁用事件, 避免拖曳時因接觸此元素時出現enter與leave`"
                v-if="dgTipMode!==''"
            >
                <template v-if="dgTipMode==='lineTop'">
                    <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useShiftBlockColor}; border-top:1px solid ${useShiftLineColor};`"></div>
                </template>
                <template v-else-if="dgTipMode==='lineBottom'">
                    <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useShiftBlockColor}; border-bottom:1px solid ${useShiftLineColor};`"></div>
                </template>
                <template v-else-if="dgTipMode==='block'">
                    <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useJoinBlockColor};`"></div>
                </template>
                <template v-else-if="dgTipMode==='disabled'">
                    <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useTextDisabledBackgroundColor};`">
                        <div :style="`height:${dgTipHeight}px; display:flex; align-items:center;`">
                            <div :style="`color:${useTextDisabledColor}; padding-left:${textDisabledPaddingLeft}px; font-size:${textDisabledFontSize};`">
                                {{textDisabled}}
                            </div>
                        </div>
                    </div>
                </template>
            </div>

        </div>
    </div>
</template>

<script>
import pullAt from 'lodash/pullAt'
import size from 'lodash/size'
import dropRight from 'lodash/dropRight'
import takeRight from 'lodash/takeRight'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import set from 'lodash/set'
import min from 'lodash/min'
import take from 'lodash/take'
import isEqual from 'lodash/isEqual'
import domDrag from 'wsemi/src/domDrag.mjs'
import cint from 'wsemi/src/cint.mjs'
import flattenTreeObj from 'wsemi/src/flattenTreeObj'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Array} [items=''] 輸入樹狀節點陣列，預設[]
 * @vue-prop {String} [bindKey='id'] 輸入節點物件識別用欄位字串，預設'id'
 * @vue-prop {String} [bindChildren='children'] 輸入節點物件內存放子節點欄位字串，預設'children'
 * @vue-prop {Number} [indent=20] 輸入節點縮排長度數字，單位px，預設20
 * @vue-prop {String} [textDisabled='Can not drop here'] 輸入禁止拖曳文字字串，預設'Can not drop here'
 * @vue-prop {String} [textDisabledColor='#812'] 輸入禁止拖曳文字顏色字串，預設'#812'
 * @vue-prop {Number} [textDisabledPaddingLeft=15] 輸入禁止拖曳padding-left數字，單位px，預設15
 * @vue-prop {String} [textDisabledFontSize='0.9rem'] 輸入禁止拖曳文字大小字串，預設'0.9rem'
 * @vue-prop {String} [textDisabledBackgroundColor='rgba(255,220,240,0.6)'] 輸入禁止拖曳文字區背景顏色字串，預設'rgba(255,220,240,0.6)'
 * @vue-prop {String} [shiftLineColor='#29f'] 輸入拖曳時顯示插入區域線顏色字串，預設'#29f'
 * @vue-prop {String} [shiftBlockColor='rgba(80,150,255,0.15)'] 輸入拖曳時顯示插入區域背景顏色字串，預設'rgba(80,150,255,0.15)'
 * @vue-prop {String} [joinBlockColor='rgba(80,150,255,0.3)'] 輸入拖曳時顯示插入區域(成為目標的子節點)背景顏色字串，預設'rgba(80,150,255,0.3)'
 */
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        bindKey: {
            type: String,
            default: 'id',
        },
        bindChildren: {
            type: String,
            default: 'children',
        },
        indent: {
            type: Number,
            default: 20,
        },
        textDisabled: {
            type: String,
            default: 'Can not drop here', //'禁止拖曳至自己子節點當中',
        },
        textDisabledColor: {
            type: String,
            default: '#812',
        },
        textDisabledPaddingLeft: {
            type: Number,
            default: 15,
        },
        textDisabledFontSize: {
            type: String,
            default: '0.9rem',
        },
        textDisabledBackgroundColor: {
            type: String,
            default: 'rgba(255,220,240,0.6)',
        },
        shiftLineColor: {
            type: String,
            default: '#29f',
        },
        shiftBlockColor: {
            type: String,
            default: 'rgba(80,150,255,0.15)',
        },
        joinBlockColor: {
            type: String,
            default: 'rgba(80,150,255,0.3)',
        },
    },
    data: function() {
        return {
            get,

            dd: null,

            dgTipMode: '',
            dgTipLeft: 0,
            dgTipTop: 0,
            dgTipWidth: 0,
            dgTipHeight: 0,

            itemsTrans: [], //另存的節點
            nodes: [], //攤平後的節點

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //domDrag
        let dd = domDrag(vo.$el, {
            attIndex: 'dragindex',
            attGroup: 'draggroup',
            selectors: '[dragtag]',
        })

        //change
        dd.on('change', (msg) => {
            //console.log('change', msg)
        })
        dd.on('start', (msg) => {
            //console.log('start', msg)
        })
        dd.on('move', (msg) => {
            //console.log('move', msg)

            //belong
            let nodeSelf = vo.nodes[msg.startInd]
            let nodeEnter = vo.nodes[msg.endInd]
            let belong = vo.isNkBelong(nodeEnter.nk, nodeSelf.nk)

            //location
            vo.dgTipTop = msg.endEle.offsetTop
            vo.dgTipLeft = msg.endEle.offsetLeft
            vo.dgTipWidth = msg.endEle.offsetWidth
            vo.dgTipHeight = msg.endEle.offsetHeight

            //dgTipMode
            if (belong) {
                vo.dgTipMode = 'disabled'
            }
            else if (msg.ry <= 0.3) {
                vo.dgTipMode = 'lineTop'
            }
            else if (msg.ry >= 0.7) {
                vo.dgTipMode = 'lineBottom'
            }
            else if (msg.ry > 0.3 && msg.ry < 0.7) {
                vo.dgTipMode = 'block'
            }
            else {
                //不會有此狀況
                vo.dgTipMode = ''
            }

        })
        dd.on('enter', (msg) => {
            //console.log('enter', msg)
        })
        dd.on('leave', (msg) => {
            //console.log('leave', msg)
            vo.dgTipMode = ''
        })
        dd.on('drop', (msg) => {
            //console.log('drop', msg)

            //check
            if (vo.dgTipMode === '') {
                //console.log('純點擊時無move故無有效拖曳模式')
                return
            }

            //modeDir
            let modeDir = ''
            if (cint(msg.startInd) < cint(msg.endInd)) {
                modeDir = 'backward'
            }
            else if (cint(msg.startInd) > cint(msg.endInd)) {
                modeDir = 'forward'
            }

            //check
            if (modeDir === '') { //modeDir為空字串時代表拖曳至原始拖曳項目上
                vo.dgTipMode = ''
                return
            }

            //modeInsert
            let modeInsert
            if (vo.dgTipMode === 'disabled') {
                vo.dgTipMode = ''
                return
            }
            else if (vo.dgTipMode === 'lineTop') {
                modeInsert = 'before'
            }
            else if (vo.dgTipMode === 'lineBottom') {
                modeInsert = 'after'
            }
            else if (vo.dgTipMode === 'block') {
                modeInsert = 'belongto'
            }
            else {
                //console.log('invalid dgTipMode', vo.dgTipMode)
                //於最前面偵測並離開
            }

            //nkFrom
            let nodeFrom = vo.nodes[msg.startInd]
            let nkFrom = cloneDeep(nodeFrom.nk)

            //nkTo
            let nodeTo = vo.nodes[msg.endInd]
            let nkTo = cloneDeep(nodeTo.nk)

            //moveItem
            vo.itemsTrans = vo.moveItem(vo.itemsTrans, nkFrom, nkTo, modeDir, modeInsert)

            //clear
            vo.dgTipMode = ''

            //emit
            vo.$emit('update:items', vo.itemsTrans)

        })

        //save
        vo.dd = dd

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //destroy
        let draggable = get(vo, 'dd.draggable') //可能因切換過快導致domDragDyn會來不及初始化就要解構, 故需偵測是否有draggable才destroy
        if (draggable) {
            draggable.destroy()
        }

    },
    computed: {

        changeItems: function() {
            //console.log('computed changeItems')

            let vo = this

            //cloneDeep
            vo.itemsTrans = cloneDeep(vo.items)

            return ''
        },

        flatItems: function() {
            //console.log('computed flatItems')

            let vo = this

            //nodes
            vo.nodes = flattenTreeObj(vo.itemsTrans, { bindKey: vo.bindKey, bindChildren: vo.bindChildren })

            return ''
        },

        useTextDisabledColor: function() {
            //console.log('computed useTextDisabledColor')

            let vo = this

            return color2hex(vo.textDisabledColor)
        },

        useTextDisabledBackgroundColor: function() {
            //console.log('computed useTextDisabledBackgroundColor')

            let vo = this

            return color2hex(vo.textDisabledBackgroundColor)
        },

        useShiftLineColor: function() {
            //console.log('computed useShiftLineColor')

            let vo = this

            return color2hex(vo.shiftLineColor)
        },

        useShiftBlockColor: function() {
            //console.log('computed useShiftBlockColor')

            let vo = this

            return color2hex(vo.shiftBlockColor)
        },

        useJoinBlockColor: function() {
            //console.log('computed useJoinBlockColor')

            let vo = this

            return color2hex(vo.joinBlockColor)
        },

    },
    methods: {

        isNkBelong: function(arEnter, arSelf) {

            function isArrayOverlap(ar1, ar2) {

                //n
                let n = min([size(ar1), size(ar2)])

                //先截成同長度陣列, 為共有父層資訊
                let tr1 = take(ar1, n)
                let tr2 = take(ar2, n)

                //isEqual
                let b = isEqual(tr1, tr2)

                return b
            }

            if (size(arEnter) >= size(arSelf)) { //若enter要為self的子節點, 其enter size會大於等於 self size
                return isArrayOverlap(arEnter, arSelf) //若有共同父層資訊, 就代表enter為self的子節點
            }
            return false
        },

        deleteItem: function(items, nkFrom) {
            //console.log('methods deleteItem', items, nkFrom)
            //刪除節點, 因會使用nk操作, 故需確保節點順序問題

            // let vo = this

            //cloneDeep
            items = cloneDeep(items)

            //ks, 來源節點的父節點的keys, 若來源節點為頂層(size(nkFrom)===1)就不取父節點
            let ks
            let ind = null
            if (size(nkFrom) === 0) {
                console.log('invalid nkFrom')
            }
            else if (size(nkFrom) === 1) {
                ks = nkFrom
            }
            else {
                ks = dropRight(nkFrom)
                ind = takeRight(nkFrom)
            }

            if (!ind) {
                //來源位於頂層

                //pullAt
                pullAt(items, nkFrom)

            }
            else {

                //src, 來源節點的父節點
                let src = get(items, ks, [])

                //pullAt
                pullAt(src, [ind])

            }

            return items
        },

        moveItem: function(items, nkFrom, nkTo, modeDir, modeInsert) {
            //console.log('methods moveItem', items, nkFrom, nkTo, modeDir, modeInsert)
            //複製節點至指定節點, 因會使用nk操作, 故需確保來源節點位置(位於nodes)要大於目標節點位置(位於nodes)

            let vo = this

            //check
            if (modeDir !== 'forward' && modeDir !== 'backward') {
                console.log('invalid modeDir', modeDir)
            }
            if (size(nkFrom) === 0) {
                console.log('invalid nkFrom', nkTo)
            }
            if (size(nkTo) === 0) {
                console.log('invalid nkTo', nkTo)
            }

            //cloneDeep
            items = cloneDeep(items)

            //src, 來源節點
            let src = get(items, nkFrom)

            //modeDir
            if (modeDir === 'forward') {
                items = vo.deleteItem(items, nkFrom) //若為由後往前移動, 則需先刪除來源節點
            }

            //ind, 依照mode決定ind, before是直接splice對目標節點ind位置塞入, 就能把目標往後移動, after就需+1
            let ind = takeRight(nkTo)[0]
            if (modeInsert === 'before' || modeInsert === 'after') {

                //tar, 目標節點的父節點
                let tar
                if (size(nkTo) === 1) {
                    tar = items
                }
                else {
                    //ks, 目標節點的父節點的keys, 若目標節點為頂層(size(nkTo)===1)就不取父節點
                    let ks = dropRight(nkTo)
                    tar = get(items, ks, [])
                }

                if (modeInsert === 'before') {
                    // ind = ind
                }
                else if (modeInsert === 'after') {
                    ind += 1
                }

                //array insert
                tar.splice(ind, 0, src)

            }
            else if (modeInsert === 'belongto') {

                //tar, 取得所屬節點, 若無則預設空陣列[]
                let tar = get(items, [...nkTo, vo.bindChildren], [])

                //push
                tar.push(src)

                //set
                set(items, [...nkTo, vo.bindChildren], tar)

            }
            else {
                console.log('invalid modeInsert', modeInsert)
            }

            //modeDir
            if (modeDir === 'backward') {
                items = vo.deleteItem(items, nkFrom) //若為由前往後移動, 則需於來源節點複製進目標節點處後, 才能刪除來源節點
            }

            return items
        },

    },
}
</script>

<style scoped>
</style>
