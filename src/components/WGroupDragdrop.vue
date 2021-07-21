<template>
    <div :changeValue="changeValue">
        <transition-group>
            <template v-for="(item,kitem) in itemsTrans">
                <div
                    class="WGroupDragdrop-Trans"
                    :style="`display:${itemStyleInline?'inline-block':'block'}; user-select:none;`"
                    :key="`${isObjValue?o2j(item):item}`"
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
import get from 'lodash/get'
import each from 'lodash/each'
import cloneDeep from 'lodash/cloneDeep'
import trim from 'lodash/trim'
import every from 'lodash/every'
import pullAt from 'lodash/pullAt'
import filter from 'lodash/filter'
import isEqual from 'lodash/isEqual'
import size from 'lodash/size'
import genID from 'wsemi/src/genID.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import WButtonChip from './WButtonChip.vue'
import WTextSuggest from './WTextSuggest.vue'
import parseSpace from '../js/parseSpace.mjs'
import domDragDrop from '../js/domDragDrop.mjs'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [badgeAlign='center'] 輸入標記對齊位置字串，預設'center'
 * @vue-prop {String} [textFontSize='0.7rem'] 輸入文字字型大小字串，預設'0.7rem'
 * @vue-prop {String} [textColor='white'] 輸入文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='red'] 輸入背景顏色字串，預設'red'
 * @vue-prop {Number} [borderRadius=10] 輸入框圓角度數字，單位為px，預設10
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {Number} [borderWidth=1] 輸入框寬度數字，單位為px，預設1
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
        draggable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            o2j,

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
