<template>
    <div :changeParam="changeParam">

        <transition-group>
            <template v-for="(item,kitem) in valueTrans">

                <v-chip
                    :class="`WGroupTabsChip v-chpi-modify trans ${shadow?'shadow':''}`"
                    small
                    :key="item.name+'|'+item.tag"
                    :close-icon="mdiCloseCircle"
                    :close="close"
                    :text-color="getTextColor(item)"
                    :color="getBackgroundColor(item)"
                    :outlined="getOutlined(item)"
                    @click="clcikItem(item)"
                    @click:close="removeItem(item,kitem)"
                    dragtag
                    :dragindex="kitem"
                    _draggable
                    _dragstart="dragStart($event,item,kitem)"
                    _drop="drop($event,item,kitem)"
                    _dragenter="dragEnter($event,item,kitem)"
                    _dragover="cancelEvent"
                    _touchstart="touchStart($event,item,kitem)"
                    _touchend="drop($event,item,kitem)"
                    _touchmove="touchEnter($event,item,kitem)"
                    _touchcancel="cancelEvent"
                >

                    <div
                        class="trans"
                        :style="`margin-left:-9px; margin-right:5px; border-radius:10px; font-size:0.85rem; ${isActive(item)?`padding:0px 12px; color:${useTagTextColorActive}; background:${useTagBackgroundColorActive};`:`padding:0px 8px; color:${useTagTextColor}; background:${useTagBackgroundColor};`}`"
                    >
                        {{item.tag}}
                    </div>

                    <span style="font-size:0.85rem;">{{item.name}}</span>

                </v-chip>

            </template>
        </transition-group>

        <template v-if="valueTrans.length===0">

            <v-chip
                :class="`v-chpi-modify trans ${shadow?'shadow':''}`"
                small
                :text-color="textColor"
                :color="backgroundColor"
            >

                <span style="font-size:0.875rem;">{{nodata}}</span>

            </v-chip>

        </template>

    </div>
</template>

<script>
import { mdiCloseCircle } from '@mdi/js'
import isEqual from 'lodash/isEqual'
import each from 'lodash/each'
import size from 'lodash/size'
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import pullAt from 'lodash/pullAt'
import color2hex from '../js/vuetifyColor.mjs'
import domDrag from '../js/domDrag.mjs'


/**
 * @vue-prop {Array} value 輸入字串陣列
 * @vue-prop {String} [textColor='pink lighten-1'] 輸入文字顏色字串，預設'pink lighten-1'
 * @vue-prop {String} [textColorActive='white'] 輸入點擊狀態時文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorActive='pink lighten-1'] 輸入點擊狀態時背景顏色字串，預設'pink lighten-1'
 * @vue-prop {String} [tagTextColor='grey'] 輸入標記文字顏色字串，預設'grey'
 * @vue-prop {String} [tagTextColorActive='grey darken-4'] 輸入點擊狀態時標記文字顏色字串，預設'grey darken-4'
 * @vue-prop {String} [tagBackgroundColor='rgba(100,100,100,0.1)'] 輸入標記背景顏色字串，預設'rgba(100,100,100,0.1)'
 * @vue-prop {String} [tagBackgroundColorActive='rgba(255,255,255,0.7)'] 輸入點擊狀態時標記背景顏色字串，預設'rgba(255,255,255,0.7)'
 * @vue-prop {Boolean} [close=true] 輸入是否可刪除模式，預設true
 * @vue-prop {Boolean} [draggable=true] 輸入是否可拖曳模式，預設true
 * @vue-prop {Boolean} [shadow=true] 輸入是否有陰影模式，預設true
 * @vue-prop {String} [nodata='無'] 輸入無任何字串陣列時的預設文字字串，預設'無'
 */
export default {
    components: {
    },
    props: {
        valueActive: {
            type: Object,
        },
        value: {
            type: Array,
        },
        textColor: {
            type: String,
            default: 'pink lighten-1',
        },
        textColorActive: {
            type: String,
            default: 'white',
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorActive: {
            type: String,
            default: 'pink lighten-1',
        },
        tagTextColor: {
            type: String,
            default: 'grey',
        },
        tagTextColorActive: {
            type: String,
            default: 'grey darken-4',
        },
        tagBackgroundColor: {
            type: String,
            default: 'rgba(100,100,100,0.1)',
        },
        tagBackgroundColorActive: {
            type: String,
            default: 'rgba(255,255,255,0.7)',
        },
        close: {
            type: Boolean,
            default: true,
        },
        draggable: {
            type: Boolean,
            default: true,
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        nodata: {
            type: String,
            default: '無',
        },
    },
    data: function() {
        return {
            mdiCloseCircle,
            valueTrans: [],
            itemActive: {},
            startInd: null,
            endInd: null,

            drag: null,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //domDrag
        let drag = domDrag(vo.$el)
        drag.on('change', (msg) => {
            //console.log('onchange', msg)
        })
        drag.on('drop', ({ startInd, endInd }) => {
            //console.log('ondrop', startInd, endInd)

            //cloneDeep
            let items = cloneDeep(vo.valueTrans)

            //move
            if (startInd > endInd) { //往前拖曳, 先移除原始拖曳項目, 再於放下位置插入該拖曳項目

                //pullAt
                let src = pullAt(items, startInd)[0]

                //array insert
                items.splice(endInd, 0, src) //拖曳項目是要放在目標項目之前, 故不能+1

            }
            else { //往後拖曳, 先複製原始拖曳項目, 並於放下位置插入, 再刪除原始拖曳項目

                //cloneDeep
                let src = cloneDeep(items[startInd])

                //array insert
                items.splice(endInd + 1, 0, src) //拖曳項目是要放在目標項目之後, 故需要+1

                //pullAt
                pullAt(items, startInd)

            }

            //save
            vo.valueTrans = items

            //emitDrag
            vo.emitDrag(items)

        })

        //save
        vo.drag = drag

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        vo.drag.clear()

    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //valueTrans, valueActive
            vo.valueTrans = vo.value
            vo.itemActive = vo.valueActive

            return ''
        },

        useTagTextColor: function() {
            let vo = this
            return color2hex(vo.tagTextColor)
        },

        useTagTextColorActive: function() {
            let vo = this
            return color2hex(vo.tagTextColorActive)
        },

        useTagBackgroundColor: function() {
            let vo = this
            return color2hex(vo.tagBackgroundColor)
        },

        useTagBackgroundColorActive: function() {
            let vo = this
            return color2hex(vo.tagBackgroundColorActive)
        },

    },
    methods: {

        // dragStart: function (e, item, kitem) {
        //     //console.log('methods dragStart', e, item, kitem)

        //     let vo = this

        //     //startInd
        //     if (vo.startInd !== kitem) {
        //         vo.startInd = kitem
        //         //console.log('startInd', vo.startInd)
        //     }

        // },

        // dragEnter: function (e, item, kitem) {
        //     //console.log('methods dragEnter', e, item, kitem)

        //     let vo = this

        //     //endInd
        //     if (vo.startInd !== kitem && vo.endInd !== kitem) {
        //         vo.endInd = kitem
        //         //console.log('endInd', vo.endInd)
        //     }

        // },

        // touchStart: function (e, item, kitem) {
        //     //console.log('methods touchStart', e, item, kitem)

        //     let vo = this

        //     //cancelEvent, touchstart需取消之後拖曳事件, 否則會變成捲動螢幕
        //     vo.cancelEvent(e)

        //     //dragStart
        //     vo.dragStart(e, item, kitem)

        // },

        // touchEnter: function (e, item, _kitem) {
        //     //console.log('methods touchEnter', e, item, _kitem)

        //     let vo = this

        //     //check
        //     let touches = get(e, 'touches', [])
        //     if (size(touches) !== 1) {
        //         return
        //     }

        //     //p
        //     let p = touches[0]

        //     //eles
        //     let eles = vo.$el.querySelectorAll('.WGroupTabsChip')

        //     //kitem, touch內為拖曳來源而非目標, 故得要遍歷尋找
        //     let kitem = null
        //     for (let i = 0; i < eles.length; i++) {
        //         let ele = eles[i]
        //         if (isInner(p, ele)) {
        //             kitem = i
        //         }
        //     }
        //     if (vo.startInd !== kitem && vo.endInd !== kitem) {
        //         vo.endInd = kitem
        //         //console.log('endInd', vo.endInd)
        //     }

        // },

        // drop: function (e, item, kitem) {
        //     //console.log('methods drop', e, item, kitem)

        //     let vo = this

        //     //cancelEvent
        //     vo.cancelEvent(e)

        //     //check
        //     if (vo.startInd === null) {
        //         return
        //     }
        //     if (vo.endInd === null) {
        //         return
        //     }
        //     // console.log('vo.startInd', vo.startInd)
        //     // console.log('vo.endInd', vo.endInd)

        //     //cloneDeep
        //     let items = cloneDeep(vo.valueTrans)

        //     //move
        //     if (vo.startInd > vo.endInd) { //往前拖曳, 先移除原始拖曳項目, 再於放下位置插入該拖曳項目

        //         //pullAt
        //         let src = pullAt(items, vo.startInd)[0]

        //         //array insert
        //         items.splice(vo.endInd, 0, src) //拖曳項目是要放在目標項目之前, 故不能+1

        //     }
        //     else { //往後拖曳, 先複製原始拖曳項目, 並於放下位置插入, 再刪除原始拖曳項目

        //         //cloneDeep
        //         let src = cloneDeep(items[vo.startInd])

        //         //array insert
        //         items.splice(vo.endInd + 1, 0, src) //拖曳項目是要放在目標項目之後, 故需要+1

        //         //pullAt
        //         pullAt(items, vo.startInd)

        //     }

        //     //save
        //     vo.valueTrans = items

        //     //emitDrag
        //     vo.emitDrag(items)

        //     //clear
        //     vo.startInd = null
        //     vo.endInd = null

        // },

        // cancelEvent: function (e) {
        //     //console.log('methods cancelEvent', e)

        //     // let vo = this

        //     //check, 拖曳事件因拖曳自己會捲動螢幕, 會觸發不可取消事件, 故需偵測直接跳出
        //     if (!e.cancelable) {
        //         return
        //     }

        //     e.preventDefault()
        //     e.stopPropagation()
        //     return false
        // },

        getTextColor: function(item) {
            //console.log('methods getTextColor', item)

            let vo = this

            if (vo.isActive(item)) {
                let c = get(item, 'textColorActive', null)
                return c || vo.textColorActive
            }
            else {
                let c = get(item, 'textColor', null)
                return c || vo.textColor
            }
        },

        getBackgroundColor: function(item) {
            //console.log('methods getBackgroundColor', item)

            let vo = this

            if (vo.isActive(item)) {
                let c = get(item, 'backgroundColorActive', null)
                return c || vo.backgroundColorActive
            }
            else {
                let c = get(item, 'backgroundColor', null)
                return c || vo.backgroundColor
            }
        },

        getOutlined: function(item) {
            //console.log('methods getOutlined', item)

            let vo = this

            if (vo.isActive(item)) {
                return get(item, 'outlinedActive', false)
            }
            else {
                return get(item, 'outlined', false)
            }
        },

        isActive: function(item) {
            //console.log('methods isActive', item)

            let vo = this

            return isEqual(vo.itemActive, item)
        },

        clcikItem: function(item) {
            //console.log('methods clcikItem', item)

            let vo = this

            //save
            vo.itemActive = cloneDeep(item)

            //setTimeout
            setTimeout(() => {

                //emit click
                vo.$emit('click', item)

                //emit valueActive
                vo.$emit('update:valueActive', vo.itemActive)

            }, 1)

        },

        pull: function(ar, item) { //刪除並具有cloenDeep功效
            let r = []
            each(ar, (v) => {
                if (!isEqual(v, item)) {
                    r.push(v)
                }
            })
            return r
        },

        removeItem: function(item) {
            //console.log('methods removeItem', cp)

            let vo = this

            //若刪除當前顯示項目, 則改回顯示第1個
            if (isEqual(vo.itemActive, item)) {
                if (size(vo.valueTrans) > 0) {
                    vo.itemActive = cloneDeep(vo.valueTrans[0])
                }
                else {
                    vo.itemActive = {}
                }

                //setTimeout
                setTimeout(() => {

                    //emit valueActive
                    vo.$emit('update:valueActive', vo.itemActive)

                }, 1)

            }

            //emitDrag
            vo.emitDrag(vo.pull(vo.valueTrans, item))

        },

        emitDrag: function(items) {
            //console.log('methods emitDrag', items)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('input', cloneDeep(items))

            }, 1)

        },

    },
}
</script>

<style scoped>
.trans {
    transition: all 0.5s;
}
.shadow {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
.v-chpi-modify {
    user-select: none;
    vertical-align: middle;
    margin: 10px 10px 10px 0px;
}
</style>
