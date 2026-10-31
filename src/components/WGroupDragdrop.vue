<template>
    <div
        :state="state"
        :changeValue="changeValue"
    >
        <transition-group
            @before-enter="holdTrans"
            @after-enter="releaseTrans"
            @enter-cancelled="releaseTrans"
            @before-leave="holdTrans"
            @after-leave="releaseTrans"
            @leave-cancelled="releaseTrans"
        >
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
import createTransitionState from '../js/createTransitionState.mjs'


/**
 * 根節點提供可偵測之state屬性(idle、moving), 供使用端與e2e判斷項目增刪與換序之移動過場是否結束:
 *   idle: 靜止, 所有項目位置不再變動
 *   moving: 移動中, 自項目集合或順序改變起(增、刪、換序), 至進出場與0.5s位移過場全部結束為止, 期間項目與其後元素位置仍在變動(例如刪除項目時, 被刪項目會停留0.5s後才移除, 其後項目於移除時才補位)
 * 以項目自身之transitionend與transition-group之進出場完成為主要落定訊號, 事件未觸發(如高負載)時由逾時後備落定, 故state必定會落定; 初始渲染無過場, 為idle
 *
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

            state: 'idle', //idle, moving
            ts: null, //過場狀態追蹤器, 以項目自身之transitionend與transition-group之進出場完成為主要落定訊號, 逾時後備落定

            itemsTrans: [],
            dgGroupKey: null,
        }
    },
    created: function() {
        //console.log('created')

        let vo = this

        //ts, 項目(.WGroupDragdrop-Trans)自身之位移過場與進出場全部結束才落定; 凍結以避免被轉為響應式
        vo.ts = Object.freeze(createTransitionState({
            getRoot: () => vo.$el,
            getTargets: () => {
                return vo.$el ? Array.from(vo.$el.getElementsByClassName('WGroupDragdrop-Trans')) : []
            },
            setState: (state) => {
                vo.state = state
            },
        }))

    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //attach
        vo.ts.attach()

        //keysRef, 初始渲染(itemsTrans由changeValue於首次渲染時寫入)無過場, 以掛載當下之key序列為基準
        vo.keysRef = vo.changeKeys

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //destroy
        vo.ts.destroy()

    },
    watch: {

        changeKeys: function(keys) {
            //console.log('watch changeKeys', keys)

            let vo = this

            //check
            if (keys === vo.keysRef) {
                return
            }

            //keysRef
            vo.keysRef = keys

            //moving, .WGroupDragdrop-Trans恆帶transition: all 0.5s, transition-group之進出場亦以此時長結束
            vo.ts.begin('moving', 'idle', 500)

        },

    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //save itemsTrans
            vo.itemsTrans = vo.value

            return ''
        },

        changeKeys: function() {
            //console.log('computed changeKeys')

            let vo = this

            //項目之key序列字串, 增刪或換序才會改變(與template之key一致)
            let keys = (Array.isArray(vo.itemsTrans) ? vo.itemsTrans : []).map((item) => {
                return vo.getForKey(item)
            })

            return JSON.stringify(keys)
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

        holdTrans: function(el) {
            //console.log('methods holdTrans', el)

            let vo = this

            //hold, transition-group之進場或出場開始(無CSS transition事件可等, 由Vue之計時器結束), 結束前不落定
            vo.ts.hold(el)

        },

        releaseTrans: function(el) {
            //console.log('methods releaseTrans', el)

            let vo = this

            //release, 進場或出場結束或取消
            vo.ts.release(el)

        },

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
