<template>
    <div
        style="display:inline-block;"
        :changeItems="changeItems"
        :flatItems="flatItems"
    >
        <div style="position:relative;">

            <div
                dragtag
                :style="`user-select:none; cursor:pointer; padding-left:${(node.nk.length-1)*indent}px;`"
                :key="get(node,bindKey,knode)"
                :dragindex="knode"
                @mousemove="(ev)=>{mouseMove(ev,node,knode)}"
                v-for="(node,knode) in nodes"
            >

                <slot
                    name="item"
                    :node="node"
                    :knode="knode"
                ></slot>

            </div>

            <div
                :style="`position:absolute; z-index:9999; pointer-events:none; left:${dgTipLeft}px; top:${dgTipTop}px;`"
                msg="需使用pointer-events:none;禁用事件,避免拖曳時因接觸此元素時出現enter與leave"
                v-if="dgTipMode!==''"
            >
                <template v-if="dgTipMode==='lineTop'">
                    <div :style="`border-top:1px solid ${useHoverLineColor}; width:${dgTipWidth}px; height:1px;`"></div>
                </template>
                <template v-else-if="dgTipMode==='lineBottom'">
                    <div :style="`border-bottom:1px solid ${useHoverLineColor}; width:${dgTipWidth}px; height:1px;`"></div>
                </template>
                <template v-else-if="dgTipMode==='block'">
                    <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useHoverBlockColor};`"></div>
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
import each from 'lodash/each'
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
import domDragDyn from 'wsemi/src/domDragDyn.mjs'
import treeObj from 'wsemi/src/treeObj.mjs'
import cint from 'wsemi/src/cint.mjs'
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
 * @vue-prop {String} [hoverLineColor='#29f'] 輸入拖曳時顯示插入線顏色字串，預設'#29f'
 * @vue-prop {String} [hoverBlockColor='rgba(80,150,255,0.3)'] 輸入拖曳時顯示插入塊(成為目標的子節點)顏色字串，預設'rgba(80,150,255,0.3)'
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
        hoverLineColor: {
            type: String,
            default: '#29f',
        },
        hoverBlockColor: {
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
            cursorInfor: null,

            tempItems: [], //另存的節點
            nodes: [], //攤平後的節點

        }
    },
    mounted: async function() {
        //console.log('mounted')

        let vo = this

        //dd, domDragDyn
        let dd = await domDragDyn(vo.$el, { attIndex: 'dragindex', selectors: '[dragtag]' })

        //change
        dd.on('change', (msg) => {
            //console.log('change', msg)
        })
        dd.on('drag-start', (msg) => {
            //console.log('drag-start', msg)
        })
        dd.on('drag-move', (msg) => {
            //console.log('drag-move', msg)

            //belong
            let nodeSelf = vo.nodes[msg.selfInd]
            let nodeEnter = vo.nodes[msg.enterInd]
            let belong = vo.isNkBelong(nodeEnter.nk, nodeSelf.nk)
            // console.log('belong', belong)

            //update size
            vo.dgTipLeft = msg.enterEle.offsetLeft
            vo.dgTipWidth = msg.enterEle.offsetWidth
            vo.dgTipHeight = msg.enterEle.offsetHeight

            //update dgTipTop, dgTipMode
            // console.log('a1 msg.cursorInfor', msg.cursorInfor.ry, msg.cursorInfor.h, msg.cursorInfor)
            // console.log('a2 vo.cursorInfor', vo.cursorInfor.ry, vo.cursorInfor.h, cloneDeep(vo.cursorInfor), vo.cursorInforEv)
            // console.log('a2 pageY', vo.cursorInforEv.pageY)
            // console.log('a2 clientY', vo.cursorInforEv.clientY)
            // console.log('a2 offsetY', vo.cursorInforEv.offsetY)
            // console.log('a2 offsetHeight', vo.cursorInforEv.target.offsetHeight)
            // console.log('a2 r2', vo.cursorInforEv.offsetY / vo.cursorInforEv.target.offsetHeight)
            //let cursorInfor = vo.cursorInfor
            let cursorInfor = msg.cursorInfor
            if (belong) {
                vo.dgTipTop = msg.enterEle.offsetTop
                vo.dgTipMode = '' //先隱藏
                vo.dgTipMode = 'disabled'
            }
            else if (cursorInfor.ry <= 0.3) {
                vo.dgTipTop = msg.enterEle.offsetTop
                vo.dgTipMode = '' //先隱藏
                vo.dgTipMode = 'lineTop'
            }
            else if (cursorInfor.ry >= 0.7) {
                vo.dgTipTop = msg.enterEle.offsetTop + vo.dgTipHeight
                vo.dgTipMode = '' //先隱藏
                vo.dgTipMode = 'lineBottom'
            }
            else if (cursorInfor.ry > 0.3 && cursorInfor.ry < 0.7) {
                vo.dgTipTop = msg.enterEle.offsetTop
                vo.dgTipMode = '' //先隱藏
                vo.dgTipMode = 'block'
            }
            else {
                vo.dgTipMode = '' //清除
            }

        })
        dd.on('drag-enter', (msg) => {
            //console.log('drag-enter', msg)
        })
        dd.on('drag-leave', (msg) => {
            //console.log('drag-leave', msg)
            vo.dgTipMode = '' //清除
        })
        dd.on('drag-drop', (msg) => {
            //console.log('drag-drop', msg)

            //check
            if (vo.dgTipMode === '') {
                //console.log('拖曳過快導致尚未有有效拖曳模式')
                return
            }

            //modeDir, forward, backward
            let modeDir = 'forward'
            if (cint(msg.selfInd) < cint(msg.dropInd)) {
                modeDir = 'backward'
            }

            //modeInsert, before, after, belongto
            let modeInsert
            if (vo.dgTipMode === 'disabled') {
                vo.dgTipMode = '' //清除
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

            //nkFrom
            let nodeFrom = vo.nodes[msg.selfInd]
            let nkFrom = cloneDeep(nodeFrom.nk)

            //nkTo
            let nodeTo = vo.nodes[msg.dropInd]
            let nkTo = cloneDeep(nodeTo.nk)

            //moveItem
            vo.tempItems = vo.moveItem(vo.tempItems, nkFrom, nkTo, modeDir, modeInsert)

            //clear
            vo.dgTipMode = '' //清除

            //emit
            vo.$emit('update:items', vo.tempItems)

        })

        //save
        vo.dd = dd

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //destroy
        vo.dd.draggable.destroy()

    },
    computed: {

        changeItems: function() {
            //console.log('computed changeItems')

            let vo = this

            //cloneDeep
            vo.tempItems = cloneDeep(vo.items)

            return ''
        },

        flatItems: function() {
            //console.log('computed flatItems')

            let vo = this

            function getNk(nk) {
                //將nk內插入vo.bindChildren, 因主節點為array, 各節點內的子節點也為array
                let r = [nk[0]]
                for (let i = 1; i < nk.length; i++) {
                    let k = nk[i]
                    r.push(vo.bindChildren)
                    r.push(k)
                }
                return r
            }

            let nodes = []
            treeObj(vo.tempItems, (value, key, nk) => {
                let pk = get(value, vo.bindKey, null)
                let children = get(value, vo.bindChildren, null)
                if (pk) {
                    nodes.push({
                        ...value,
                        nk: getNk([...nk, key]),
                        key,
                    })
                    if (children) {
                        return children
                    }
                }
            })
            // console.log('nodes', nodes)

            //t
            let t = {}
            each(nodes, (v) => {
                each(v.nk, (vv, kk) => {
                    set(t, '')
                })
            })

            //save
            vo.nodes = nodes

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

        useHoverLineColor: function() {
            //console.log('computed useHoverLineColor')

            let vo = this

            return color2hex(vo.hoverLineColor)
        },

        useHoverBlockColor: function() {
            //console.log('computed useHoverBlockColor')

            let vo = this

            return color2hex(vo.hoverBlockColor)
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

        mouseMove: function(ev, node, knode) {
            //console.log('methods mouseMove', ev, node, knode)

            let vo = this

            //update
            vo.cursorInfor = {
                knode,
                node,
                x: ev.offsetX,
                y: ev.offsetY,
                w: ev.target.offsetWidth,
                h: ev.target.offsetHeight,
                rx: ev.offsetX / ev.target.offsetWidth,
                ry: ev.offsetY / ev.target.offsetHeight,
            }
            vo.cursorInforEv = ev

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
