<template>
    <div :changeValue="changeValue">
        <transition-group>
            <template v-for="(item,kitem) in itemsTrans">
                <div
                    class="WGroupDragdrop-Trans"
                    :style="`display:${itemStyleInline?'inline-block':'block'}; user-select:none;`"
                    :key="getForKey(item)"
                    :dragindex="kitem"
                    v-domdragdrop="draggable?getDgOpt():null"
                    @domdragdrop="dragdrop"
                    draggable="false"
                >

                    <slot
                        :item="item"
                        :index="kitem"
                    ></slot>

                </div>
            </template>
        </transition-group>
    </div>
</template>

<script>
import cloneDeep from 'lodash-es/cloneDeep.js'
import every from 'lodash-es/every.js'
import pullAt from 'lodash-es/pullAt.js'
import size from 'lodash-es/size.js'
import genID from 'wsemi/src/genID.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import domDragDrop from '../js/domDragDrop.mjs'


/**
 * @vue-prop {Array} [value=[]] 輸入項目的字串陣列或物件陣列，預設[]
 * @vue-prop {Boolean} [itemStyleInline=true] 輸入項目之display樣式是否使用行內樣式，true為'inline-block'而false為'block'，預設true
 * @vue-prop {Function} [keyBinder=null] 輸入由項目取得唯一識別碼(key)函數，預設項目為物件就序列化成為字串再作為key，反之就是用項目值作為key。函數會輸入項目物件或值，回傳需為字串。keyBinder預設null
 * @vue-prop {Boolean} [draggable=true] 輸入是否可拖曳布林值，預設true
 */
export default {
    directives: {
        domdragdrop: domDragDrop(),
    },
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        itemStyleInline: {
            type: Boolean,
            default: true,
        },
        keyBinder: {
            type: Function,
            default: null,
        },
        draggable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {

            itemsTrans: [],
            dgGroupKey: null,
        }
    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //save itemsTrans
            vo.itemsTrans = vo.value

            return ''
        },

        isObjValue: function() {
            //console.log('computed isObjValue')

            let vo = this

            //check, 因every([])=true
            if (size(vo.itemsTrans) === 0) {
                return false
            }
            return every(vo.itemsTrans, (v) => {
                return isobj(v)
            })
        },

    },
    methods: {

        getForKey: function(item) {
            //console.log('methods getForKey', item)

            let vo = this

            let k = null
            if (isfun(vo.keyBinder)) {
                k = vo.keyBinder(item)
            }
            else {
                k = vo.isObjValue ? o2j(item) : item
            }

            return k
        },

        getDgGroupKey: function() {
            //console.log('methods getDgGroupKey')

            let vo = this

            //dgGroupKey
            if (vo.dgGroupKey === null) {
                vo.dgGroupKey = `r${genID()}`
            }

            return vo.dgGroupKey
        },

        getDgOpt: function() {
            //console.log('methods getDgOpt')

            let vo = this

            //opt, 使用vue directive初始化時於mounted之前就需要group值, 此代表此組件內可互相拖曳之DOM群組識別碼, 故通過function自動取得group
            let opt = {
                group: vo.getDgGroupKey(),
                //attIdentify
                attIndex: 'dragindex',
                attGroup: 'draggroup',
                previewOpacity: 1,
                previewDisabledOpacity: 0.5,
                previewBorderWidth: 0,
                //previewBorderColor
                previewBackground: 'transparent',
                timeDragStartDelay: 1,
            }

            return opt
        },

        dragdrop: function(msg) {
            // console.log('methods dragdrop', msg)

            let vo = this

            if (msg.evName === 'drop') {

                //startInd, endInd
                let { startInd, endInd } = msg

                //check
                if (startInd === endInd) {
                    return
                }

                //cloneDeep
                let itemsNew = cloneDeep(vo.itemsTrans)

                //move
                if (startInd > endInd) { //往前拖曳, 先移除原始拖曳項目, 再於放下位置插入該拖曳項目

                    //pullAt
                    let src = pullAt(itemsNew, startInd)[0]

                    //array insert
                    itemsNew.splice(endInd, 0, src) //拖曳項目是要放在目標項目之前, 故不能+1

                }
                else { //往後拖曳, 先複製原始拖曳項目, 並於放下位置插入, 再刪除原始拖曳項目

                    //cloneDeep
                    let src = cloneDeep(itemsNew[startInd])

                    //array insert
                    itemsNew.splice(endInd + 1, 0, src) //拖曳項目是要放在目標項目之後, 故需要+1

                    //pullAt
                    pullAt(itemsNew, startInd)

                }

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('input', itemsNew)

                })

            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('dragdrop', msg)

            })

        },

    },
}
</script>

<style scoped>
.WGroupDragdrop-Trans { /* transition-group必須使用class */
    transition: all 0.5s;
}
</style>
