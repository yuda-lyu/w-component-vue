<template>
    <div
        :changeValue="changeValue"
        :changeDraggable="changeDraggable"
    >

        <transition-group>
            <template v-for="(item,kitem) in itemsTrans">

                <div
                    class="trans"
                    style="display:inline-block;"
                    :key="`${isObjValue?get(item,`${keyText}`):item}`"
                    dragtag
                    :dragindex="kitem"
                >
                    <WButtonChip
                        style="margin:10px 10px 10px 0px;"
                        :text="isObjValue?get(item,`${keyText}`):item"
                        :tooltip="isObjValue?get(item,`${keyTooltip}`):null"
                        :icon="isObjValue?get(item,`${keyIcon}`):icon"
                        :iconColor="iconColor"
                        :iconColorHover="iconColorHover"
                        :iconColorActive="iconColorActive"
                        :iconSize="iconSize"
                        :iconShiftLeft="iconShiftLeft"
                        :iconShiftRight="iconShiftRight"
                        :progColor="progColor"
                        :progBackgroundColor="progBackgroundColor"
                        :textColor="textColor"
                        :textColorHover="textColorHover"
                        :textColorActive="textColorActive"
                        :textFontSize="textFontSize"
                        :borderRadius="borderRadius"
                        :borderColor="borderColor"
                        :borderColorHover="borderColorHover"
                        :borderColorActive="borderColorActive"
                        :backgroundColor="backgroundColor"
                        :backgroundColorHover="backgroundColorHover"
                        :backgroundColorActive="backgroundColorActive"
                        :shadow="shadow"
                        :shadowStyle="shadowStyle"
                        :shadowActive="shadowActive"
                        :shadowActiveStyle="shadowActiveStyle"
                        :sizePadding="sizePadding"
                        :close="editable && editableClose"
                        :editable="true"
                        @click="(ev,msg)=>{clickChip(ev,msg,item,kitem)}"
                        @click-close="clickRemoveBtn($event,item,kitem)"
                    >
                        <slot
                            name="items"
                            :item="item"
                            :kitem="kitem"
                        ></slot>
                    </WButtonChip>
                </div>

            </template>
        </transition-group>

        <template v-if="itemsTrans.length===0">

            <WButtonChip
                style="margin:10px 10px 10px 0px;"
                _key="kitem"
                :text="nodata"
                :tooltip="nodata"
                :icon="icon"
                :iconColor="iconColor"
                :iconColorHover="iconColorHover"
                :iconColorActive="iconColorActive"
                :iconSize="iconSize"
                :iconShiftLeft="iconShiftLeft"
                :iconShiftRight="iconShiftRight"
                :textColor="textColor"
                :textColorHover="textColorHover"
                :textColorActive="textColorActive"
                :textFontSize="textFontSize"
                :borderRadius="borderRadius"
                :borderColor="borderColor"
                :borderColorHover="borderColorHover"
                :borderColorActive="borderColorActive"
                :backgroundColor="backgroundColor"
                :backgroundColorHover="backgroundColorHover"
                :backgroundColorActive="backgroundColorActive"
                :shadow="shadow"
                :shadowStyle="shadowStyle"
                :shadowActive="shadowActive"
                :shadowActiveStyle="shadowActiveStyle"
                :sizePadding="sizePadding"
                _close="editable && editableClose"
                :editable="true"
                _click="(ev,msg)=>{clickChip(ev,msg,item,kitem)}"
                _click-close="clickRemoveBtn($event,item,kitem)"
            >
                <slot
                    name="items"
                    :item="null"
                    :kitem="null"
                ></slot>
            </WButtonChip>

        </template>

        <div style="display:inline-block; width:150px; vertical-align:middle;" v-if="editable && editableInput">
            <slot name="input">

                <template v-if="isObjValue">
                    <WButtonChip
                        :icon="mdiPlusCircle"
                        :iconColor="addButtonIconColor"
                        :iconColorHover="addButtonIconColorHover"
                        :text="addButtonText"
                        :textColor="addButtonTextColor"
                        :textColorHover="addButtonTextColorHover"
                        :backgroundColor="addButtonBackgroundColor"
                        :backgroundColorHover="addButtonBackgroundColorHover"
                        :tooltip="addButtonTooltip"
                        @click.stop="$emit('click-add')"
                    ></WButtonChip>
                </template>

                <template v-else>
                    <WText
                        :borderShadow="false"
                        :textColor="inputTextColor"
                        :rightIcon="mdiPlusCircle"
                        :rightIconColor="inputTextButtonColor"
                        :rightIconColorFocus="inputTextButtonColorFocus"
                        :rightIconTooltip="inputTextButtonTooltip"
                        :backgroundColor="inputTextBackgroundColor"
                        :backgroundColorFocus="inputTextBackgroundColorFocus"
                        :borderColor="inputTextBorderColor"
                        :borderColorFocus="inputTextBorderColorFocus"
                        @click-right="clickAddBtn"
                        @enter="clickAddBtn"
                        v-model="userinput"
                    ></WText>
                </template>

            </slot>
        </div>

    </div>
</template>

<script>
import { mdiPlusCircle } from '@mdi/js'
import get from 'lodash/get'
import each from 'lodash/each'
import cloneDeep from 'lodash/cloneDeep'
import trim from 'lodash/trim'
import every from 'lodash/every'
import pullAt from 'lodash/pullAt'
import filter from 'lodash/filter'
import isEqual from 'lodash/isEqual'
import size from 'lodash/size'
import domDrag from 'wsemi/src/domDrag.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import WButtonChip from './WButtonChip.vue'
import WText from './WText.vue'


/**
 * @vue-prop {Array} [value=[]] 輸入標記項目的字串陣列或物件陣列，預設[]
 * @vue-prop {String} [keyText='text'] 輸入標記項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyIcon='icon'] 輸入標記項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {String} [keyTooltip='tooltip'] 輸入標記項目為物件時，存放提示之欄位字串，預設'tooltip'
 * @vue-prop {String} [icon=''] 輸入左側圖標字串，預設''
 * @vue-prop {String} [iconColor='black'] 輸入圖標顏色字串，預設'black'
 * @vue-prop {String} [iconColorHover='grey darken-3'] 輸入滑鼠移入時圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [iconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {Number} [iconShiftLeft=0] 輸入圖標左側平移距離數字，單位px，預設0
 * @vue-prop {Number} [iconShiftRight=0] 輸入右側關閉圖標之右側距離數字，單位px，預設0
 * @vue-prop {String} [progColor='rgba(150,150,150,0.4)'] 輸入進度條背景顏色字串，預設'rgba(150,150,150,0.4)'
 * @vue-prop {String} [progBackgroundColor='rgba(150,150,150,0.075)'] 輸入進度條顏色字串，預設'rgba(150,150,150,0.075)'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角寬度，單位為px，預設30
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.25)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.25)'
 * @vue-prop {String} [backgroundColorActive='orange'] 輸入主動模式時背景顏色字串，預設'orange'
 * @vue-prop {Boolean} [shadow=true] 輸入是否顯示陰影，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [shadowActive=true] 輸入主動模式時是否顯示陰影，預設true
 * @vue-prop {String} [shadowActiveStyle=''] 輸入主動模式時陰影顏色字串，預設值詳見props
 * @vue-prop {String} [sizePadding='3px 15px'] 輸入內寬設定字串，預設'3px 15px'
 * @vue-prop {String} [inputTextColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [inputTextBackgroundColor='white'] 輸入輸入框背景顏色字串，預設'white'
 * @vue-prop {String} [inputTextBackgroundColorFocus='grey lighten-5'] 輸入輸入框背景Focus顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [inputTextBorderColor='grey lighten-1'] 輸入輸入框未Focus時邊框顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextBorderColorFocus='grey darken-1'] 輸入輸入框Focus時文字邊框字串，預設'grey darken-1'
 * @vue-prop {String} [inputTextButtonColor='grey lighten-1'] 輸入輸入框未Focus時按鈕顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextButtonColorFocus='grey'] 輸入輸入框Focus時按鈕顏色字串，預設'grey'
 * @vue-prop {String} [inputTextButtonTooltip='Add'] 輸入輸入框右側按鈕提示文字字串，預設'Add'
 * @vue-prop {String} [addButtonText='Add'] 輸入新增按鈕文字字串，預設'Add'
 * @vue-prop {String} [addButtonTextColor='grey'] 輸入新增按鈕文字顏色字串，預設'grey'
 * @vue-prop {String} [addButtonTextColorHover='grey'] 輸入滑鼠移入時新增按鈕文字顏色字串，預設'grey'
 * @vue-prop {String} [addButtonIconColor='pink darken-1'] 輸入新增按鈕圖標顏色字串，預設'pink darken-1'
 * @vue-prop {String} [addButtonIconColorHover='pink darken-1'] 輸入滑鼠移入時新增按鈕圖標顏色字串，預設'pink darken-1'
 * @vue-prop {String} [addButtonBackgroundColor='white'] 輸入新增按鈕背景顏色字串，預設'white'
 * @vue-prop {String} [addButtonBackgroundColorHover='white'] 輸入滑鼠移入時新增按鈕背景顏色字串，預設'white'
 * @vue-prop {String} [addButtonTooltip='Add'] 輸入新增按鈕提示文字字串，預設'Add'
 * @vue-prop {Boolean} [closeWithInterceptor=false] 輸入是否通過攔截器來決定是否進行關閉，此處之攔截器係用promise來控制，當使用者點擊關閉時可先行確認或提示。當closeWithInterceptor=true時，於click-close事件所接收物件資訊中的pm，使用pm.resolve()則代表確定關閉，反之pm.reject()則取消關閉事件，預設false
 * @vue-prop {Boolean} [draggable=true] 輸入是否可拖曳模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [editableClose=true] 輸入editable=true時，是否顯示關閉按鈕，預設true
 * @vue-prop {Boolean} [editableInput=true] 輸入editable=true時，是否使用預設的slot input，預設true
 * @vue-prop {String} [nodata='無'] 輸入無任何字串陣列時的預設文字字串，預設'無'
 */
export default {
    components: {
        WButtonChip,
        WText,
    },
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        keyText: {
            type: String,
            default: 'text',
        },
        keyIcon: {
            type: String,
            default: 'icon',
        },
        keyTooltip: {
            type: String,
            default: 'tooltip',
        },
        icon: {
            type: String,
            default: '',
        },
        iconColor: {
            type: String,
            default: 'black',
        },
        iconColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        iconColorActive: {
            type: String,
            default: 'white',
        },
        iconSize: {
            type: Number,
            default: 22,
        },
        iconShiftLeft: {
            type: Number,
            default: 0,
        },
        iconShiftRight: {
            type: Number,
            default: 0,
        },
        progColor: {
            type: String,
            default: 'rgba(150,150,150,0.4)',
        },
        progBackgroundColor: {
            type: String,
            default: 'rgba(150,150,150,0.075)',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        textColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        textColorActive: {
            type: String,
            default: 'white',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderColor: {
            type: String,
            default: 'transparent',
        },
        borderColorHover: {
            type: String,
            default: 'transparent',
        },
        borderColorActive: {
            type: String,
            default: 'transparent',
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        backgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.25)',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange',
        },
        shadow: {
            type: Boolean,
            //default: false,
            default: true,
        },
        shadowStyle: {
            type: String,
            //default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
            default: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        },
        shadowActive: {
            type: Boolean,
            default: true,
        },
        shadowActiveStyle: {
            type: String,
            default: '0 12px 20px -10px {backgroundColorActiveAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorActiveAlpha=0.2}',
        },
        sizePadding: {
            type: String,
            default: '3px 15px',
        },
        inputTextColor: {
            type: String,
            default: 'black',
        },
        inputTextBackgroundColor: {
            type: String,
            default: 'white',
        },
        inputTextBackgroundColorFocus: {
            type: String,
            default: 'grey lighten-5',
        },
        inputTextBorderColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextBorderColorFocus: {
            type: String,
            default: 'grey',
        },
        inputTextButtonColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextButtonColorFocus: {
            type: String,
            default: 'grey',
        },
        inputTextButtonTooltip: {
            type: String,
            default: 'Add',
        },
        addButtonText: {
            type: String,
            default: 'Add',
        },
        addButtonTextColor: {
            type: String,
            default: 'grey',
        },
        addButtonTextColorHover: {
            type: String,
            default: 'grey',
        },
        addButtonIconColor: {
            type: String,
            default: 'pink darken-1',
        },
        addButtonIconColorHover: {
            type: String,
            default: 'pink darken-1',
        },
        addButtonBackgroundColor: {
            type: String,
            default: 'white',
        },
        addButtonBackgroundColorHover: {
            type: String,
            default: 'white',
        },
        addButtonTooltip: {
            type: String,
            default: 'Add',
        },
        closeWithInterceptor: {
            type: Boolean,
            default: false,
        },
        draggable: {
            type: Boolean,
            default: true,
        },
        editable: {
            type: Boolean,
            default: true,
        },
        editableClose: {
            type: Boolean,
            default: true,
        },
        editableInput: {
            type: Boolean,
            default: true,
        },
        nodata: {
            type: String,
            default: 'empty',
        },
    },
    data: function() {
        return {
            get,

            mdiPlusCircle,

            drag: null,
            itemsTrans: [],
            userinput: '',

        }
    },
    mounted: function() {
    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //dragClear
        vo.dragClear()

    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //dragInit
            vo.dragInit(true)

            //save
            vo.itemsTrans = cloneDeep(vo.value)

            return ''
        },

        changeDraggable: function () {
            //console.log('computed changeDraggable')

            let vo = this

            //draggable for trigger
            let draggable = vo.draggable

            //dragInit or dragClear
            if (draggable) {
                if (vo.drag === null) {
                    vo.dragInit()
                }
            }
            else {
                vo.dragClear()
            }

            return ''
        },

        isObjValue: function() {
            //console.log('computed isObjValue')

            let vo = this

            return every(vo.itemsTrans, (v) => {
                return isobj(v)
            })
        },

    },
    methods: {

        dragInit: function(restart = false) {
            //console.log('methods dragInit', restart)

            let vo = this

            async function core() {

                //wait $el
                await waitFun(() => {
                    return vo.$el !== null
                })

                //check
                if (vo.drag !== null) {
                    if (restart) {
                        vo.dragClear()
                    }
                    else {
                        return
                    }
                }

                //domDrag
                let drag = domDrag(vo.$el, {
                    attIndex: 'dragindex',
                    attGroup: 'draggroup',
                    selectors: '[dragtag]',
                    previewOpacity: 1,
                    previewBorderWidth: 0,
                    previewBackground: 'transparent',
                })
                drag.on('change', (msg) => {
                    //console.log('onchange', msg)
                })
                drag.on('drop', ({ startInd, endInd }) => {
                    //console.log('ondrop', startInd, endInd)

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

                    //emit
                    vo.$emit('input', itemsNew)

                })

                //save
                vo.drag = drag

            }

            //$nextTick, 因value變更時需驅動, clear需先行與同步觸發, domDrag需等value變更儲存至itemsTrans後才執行
            vo.$nextTick(() => {

                //core
                core()

            })

        },

        dragClear: function() {
            //console.log('methods dragClear')

            let vo = this

            //clear
            if (vo.drag) {
                vo.drag.clear()
                vo.drag = null
            }

        },

        clickChip: function(ev, msgTemp, item, kitem) {
            //console.log('methods clickChip', ev, msgTemp, item, kitem)

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //msg
                let msg = {
                    ...msgTemp,
                    item,
                    kitem,
                }

                //emit
                vo.$emit('click', ev, msg)

            })

        },

        clickAddBtn: function () {
            //console.log('methods clickAddBtn')

            let vo = this

            //check
            if (trim(vo.userinput) === '') {
                return
            }

            //check
            let r = filter(vo.itemsTrans, (v) => {
                return isEqual(v, vo.userinput)
            })
            if (size(r) >= 1) {

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('error', 'disable duplicate values')

                    //clear
                    vo.userinput = ''

                })

                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //push
                vo.itemsTrans.push(trim(vo.userinput))

                //emit
                vo.$emit('input', vo.itemsTrans)

                //clear
                vo.userinput = ''

            })

        },

        pull: function(ar, kitem) {
            let art = []
            each(ar, (v, k) => {
                if (k !== kitem) {
                    art.push(v)
                }
            })
            return art
        },

        clickRemoveBtn: function (ev, item, kitem) {
            //console.log('methods clickRemoveBtnPromise', ev, item, kitem)

            let vo = this

            //stopPropagation
            ev.stopPropagation()

            //$nextTick
            vo.$nextTick(() => {

                //closeWithInterceptor
                if (vo.closeWithInterceptor) {

                    //pm
                    let pm = genPm()

                    //msg, 給予pm使能於外部中止關閉事件
                    let msg = {
                        item,
                        kitem,
                        pm,
                    }

                    //emit
                    vo.$emit('click-close', ev, msg)

                    //pm
                    pm
                        .then((msg) => { //確認關閉
                            //console.log('pm then', msg)

                            //itemsNew
                            let itemsNew = vo.pull(vo.itemsTrans, kitem)

                            //emit
                            vo.$emit('input', itemsNew)

                        })
                        .catch((msg) => { //取消關閉
                            //console.log('pm catch', msg)
                        })

                }
                else {

                    //itemsNew
                    let itemsNew = vo.pull(vo.itemsTrans, kitem)

                    //emit
                    vo.$emit('input', itemsNew)

                    //msg
                    let msg = {
                        item,
                        kitem,
                    }

                    //emit
                    vo.$emit('click-close', ev, msg)

                }

            })

        },

    },
}
</script>

<style scoped>
.trans { /* transition-group必須使用class */
    transition: all 0.5s;
}
</style>
