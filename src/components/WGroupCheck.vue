<template>
    <div :changeItems="changeItems">

        <template v-for="(item,kitem) in itemsTrans">

            <WButtonChip
                :style="`${useMarginStyle}`"
                :key="kitem"
                :text="get(item,`data.${keyText}`) || get(item,'data')"
                :tooltip="get(item,`data.${keyTooltip}`)"
                :icon="get(item,`data.${keyIcon}`)"
                :iconColor="iconColor"
                :iconColorHover="iconColorHover"
                :iconColorActive="iconColorActive"
                :iconSize="iconSize"
                :textColor="textColor"
                :textColorHover="textColorHover"
                :textColorActive="textColorActive"
                :textFontSize="textFontSize"
                :borderUsed="group?item.spcBorderUsed:borderUsed"
                :borderWidth="group?item.spcBorderWidth:borderWidth"
                :borderRadius="borderRadius"
                :borderRadiusStyle="group?item.spcBorderRadiusStyle:borderRadiusStyle"
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
                :paddingStyle="paddingStyle"
                :shiftLeft="shiftLeft+item.spcShiftLeft"
                :shiftRight="shiftRight+item.spcShiftRight"
                _close="close"
                :loading="loading"
                :loadingColor="loadingColor"
                :editable="editable"
                :disabledColor="'rgba(255,255,255,0.4)'"
                :active="item.active"
                @click="toggleState(item)"
                @mouseenter="mouseenter(item,kitem)"
                @mouseleave="mouseleave(item,kitem)"
            >
                <slot
                    :item="item"
                    :kitem="kitem"
                ></slot>
            </WButtonChip>

        </template>

    </div>
</template>

<script>
import get from 'lodash/get'
import map from 'lodash/map'
import each from 'lodash/each'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import arrHas from 'wsemi/src/arrHas.mjs'
import WButtonChip from './WButtonChip.vue'
import parseSpace from '../js/parseSpace.mjs'


/**
 * @vue-prop {Boolean} [multiCheck=true] 輸入是否為複選模式，預設true
 * @vue-prop {Array} [items=[]] 輸入全部可選字串或物件陣列，預設[]
 * @vue-prop {Array|String|Object} value 輸入複選字串或物件陣列，無預設
 * @vue-prop {String} [keyText='text'] 輸入可選項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyIcon='icon'] 輸入可選項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {String} [keyTooltip='tooltip'] 輸入可選項目為物件時，存放提示之欄位字串，預設'tooltip'
 * @vue-prop {String} [iconColor='black'] 輸入圖標顏色字串，預設'black'
 * @vue-prop {String} [iconColorHover='grey darken-3'] 輸入滑鼠移入時圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [iconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Object} [borderWidth={top:1,bottom:1,left:1,right:1}] 輸入框樣式物件，可用鍵值為left、right、top、bottom，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{top:1,bottom:1,left:1,right:1}
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {Object} [borderRadiusStyle={left:true,right:true}] 輸入框圓角樣式物件，可用鍵值為left、right、top、bottom、top-left、bottom-left、top-right、bottom-right，left代表設定top-left與bottom-left，right代表設定top-right與bottom-right，top代表設定top-left與top-right，bottom代表設定bottom-left與bottom-right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為布林值，預設{left:true,right:true}
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.25)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.25)'
 * @vue-prop {String} [backgroundColorActive='orange'] 輸入主動模式時背景顏色字串，預設'orange'
 * @vue-prop {Object} [marginStyle={top:10,bottom:10,left:0,right:10}] 輸入外距設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{top:10,bottom:10,left:0,right:10}
 * @vue-prop {Boolean} [shadow=false] 輸入是否顯示陰影，預設false
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [shadowActive=true] 輸入主動模式時是否顯示陰影，預設true
 * @vue-prop {String} [shadowActiveStyle=''] 輸入主動模式時陰影顏色字串，預設值詳見props
 * @vue-prop {Object} [paddingStyle={v:3,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:3,h:15}
 * @vue-prop {Number} [shiftLeft=0] 輸入左側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如圖標與左側邊框距離，單位px，預設0
 * @vue-prop {Number} [shiftRight=0] 輸入右側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如關閉圖標與右側邊框距離，單位px，預設0
 * @vue-prop {Boolean} [group=false] 輸入是否為群組模式，若group=true時會取消marginStyle、borderWidth、borderRadiusStyle設定，預設false
 * @vue-prop {Object} [groupBorderRadiusStyle={left:true,right:true}] 輸入框圓角樣式物件，當群組模式group=true時才生效，可用鍵值為left、right、top、bottom、top-left、bottom-left、top-right、bottom-right，各鍵值為布林值，預設{left:true,right:true}
 * @vue-prop {Number} [groupShift=5] 輸入群組模式時第一按鈕左側以及最末按鈕右側與邊框距離數字，單位px，預設5
 * @vue-prop {Boolean} [close=false] 輸入是否具有關閉按鈕模式，預設false
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {String} [loadingColor='black'] 輸入載入圖標顏色字串，預設'black'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WButtonChip,
    },
    props: {
        multiCheck: {
            type: Boolean,
            default: true,
        },
        items: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [Array, String, Object],
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
        borderWidth: {
            type: Object,
            default: () => {
                return {
                    top: 1,
                    bottom: 1,
                    left: 1,
                    right: 1,
                }
            },
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderRadiusStyle: {
            type: Object,
            default: () => {
                return {
                    left: true,
                    right: true,
                }
            },
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
        marginStyle: {
            type: Object,
            default: () => {
                return {
                    top: 10,
                    bottom: 10,
                    left: 0,
                    right: 10,
                }
            },
        },
        shadow: {
            type: Boolean,
            default: false,
        },
        shadowStyle: {
            type: String,
            default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
        },
        shadowActive: {
            type: Boolean,
            default: true,
        },
        shadowActiveStyle: {
            type: String,
            default: '0 12px 20px -10px {backgroundColorActiveAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorActiveAlpha=0.2}',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 3,
                    h: 15,
                }
            },
        },
        shiftLeft: {
            type: Number,
            default: 0,
        },
        shiftRight: {
            type: Number,
            default: 0,
        },
        group: {
            type: Boolean,
            default: false,
        },
        groupBorderRadiusStyle: {
            type: Object,
            default: () => {
                return {
                    left: true,
                    right: true,
                }
            },
        },
        groupShift: {
            type: Number,
            default: 5,
        },
        close: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        loadingColor: {
            type: String,
            default: 'black',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            get,

            itemsTrans: [],

            borderUsed: {
                top: true,
                bottom: true,
                left: true,
                right: true,
            },

        }
    },
    mounted: function() {
    },
    computed: {

        changeItems: function () {
            //console.log('computed changeItems')

            let vo = this

            function getActive(v) {
                let active
                if (vo.multiCheck) {
                    active = arrHas(vo.value, v)
                }
                else {
                    active = isEqual(v, vo.value)
                }
                return active
            }

            //t
            let t = cloneDeep(vo.items)

            //itemActives
            let itemActives = map(t, (v) => {
                let active = getActive(v)
                return {
                    active,
                    hover: false,
                    borderColor: vo.borderColor,
                    borderColorHover: vo.borderColorHover,
                    borderColorActive: vo.borderColorActive,
                    // borderLeftColor: borderColor,
                    // borderRightColor: borderColor,
                    // borderLeftColorHover: borderColorHover,
                    // borderRightColorHover: borderColorHover,
                    // borderLeftColorActive: vo.borderColorActive,
                    // borderRightColorActive: vo.borderColorActive,
                }
            })

            //items
            let items = map(t, (v, k) => {

                //o
                let o = {
                    data: v,
                }

                //add ia
                let ia = itemActives[k]
                o.ia = ia

                //add active
                o.active = ia.active

                //add hover, 預設為false, 故儲存至spcBorderUsedBackup可直接用於恢復
                o.hover = false

                //iaPre, 前一個項目的itemActive
                let iaPre = null
                if (k > 0) {
                    iaPre = itemActives[k - 1]
                }

                //iaAft, 後一個項目的itemActive
                let iaAft = null
                if (k < t.length - 1) {
                    iaAft = itemActives[k + 1]
                }

                //add spcBorderRadiusStyle
                let spcBorderRadiusStyle = {}
                if (vo.group) {
                    if (k === 0) {
                        if (get(vo, 'groupBorderRadiusStyle.left') === true) {
                            spcBorderRadiusStyle.left = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.topLeft') === true || get(vo, 'groupBorderRadiusStyle.top-left') === true) {
                            spcBorderRadiusStyle.topLeft = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.bottomLeft') === true || get(vo, 'groupBorderRadiusStyle.bottom-left') === true) {
                            spcBorderRadiusStyle.bottomLeft = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.top') === true) {
                            spcBorderRadiusStyle.topLeft = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.bottom') === true) {
                            spcBorderRadiusStyle.bottomLeft = true
                        }
                    }
                    if (k === t.length - 1) { //不能用else if, 否則只有1個項目會無法左右側都設定到borderRadiusStyle
                        if (get(vo, 'groupBorderRadiusStyle.right') === true) {
                            spcBorderRadiusStyle.right = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.topRight') === true || get(vo, 'groupBorderRadiusStyle.top-right') === true) {
                            spcBorderRadiusStyle.topRight = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.bottomRight') === true || get(vo, 'groupBorderRadiusStyle.bottom-right') === true) {
                            spcBorderRadiusStyle.bottomRight = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.top') === true) {
                            spcBorderRadiusStyle.topRight = true
                        }
                        if (get(vo, 'groupBorderRadiusStyle.bottom') === true) {
                            spcBorderRadiusStyle.bottomRight = true
                        }
                    }
                }
                o.spcBorderRadiusStyle = spcBorderRadiusStyle

                //add spcBorderWidth
                let spcBorderWidth = {}
                if (vo.group) {

                    //top與bottom先預設成borderWidth
                    spcBorderWidth = { top: vo.borderWidth.top, bottom: vo.borderWidth.bottom, left: 1, right: 1 }

                    if (k === 0) { //為最左者
                        spcBorderWidth.left = vo.borderWidth.left
                    }
                    if (k === t.length - 1) { //為最右者
                        spcBorderWidth.right = vo.borderWidth.right
                    }

                }
                o.spcBorderWidth = spcBorderWidth

                //add spcBorderUsed
                let spcBorderUsed = {}
                if (vo.group) {

                    //getSpcBorderUsed
                    spcBorderUsed = vo.getSpcBorderUsed(k, false, iaPre, ia, iaAft)

                }
                o.spcBorderUsed = spcBorderUsed

                //add spcBorderUsedBackup, 供滑鼠移出時恢復之用
                o.spcBorderUsedBackup = cloneDeep(spcBorderUsed)

                //add spcShiftLeft, spcShiftRight, 因按鈕本身亦提供設定shiftLeft與shiftRight, 故需額外添加group的偏移量
                let spcShiftLeft = 0
                let spcShiftRight = 0
                if (vo.group) {
                    if (k === 0) {
                        spcShiftLeft = vo.groupShift
                    }
                    else if (k === t.length - 1) {
                        spcShiftRight = vo.groupShift
                    }
                }
                o.spcShiftLeft = spcShiftLeft
                o.spcShiftRight = spcShiftRight

                return o
            })

            //save
            vo.itemsTrans = items

            return ''
        },

        useMarginStyle: function() {
            //console.log('computed useMarginStyle')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.marginStyle, { parse: !vo.group }) //group, 非群組化時才使用marginStyle

            //margin
            let margin = `margin:${cs};`

            return margin
        },

    },
    methods: {

        getSpcBorderUsed: function(k, isSelf, iaPre, ia, iaAft) {
            //console.log('methods getSpcBorderUsed', isSelf, iaPre, ia, iaAft)

            // let vo = this

            //全部項目皆顯示左右框線, 若框線同色則使線變寬
            let spcBorderUsed = { top: true, bottom: true, left: true, right: true }

            if (iaPre) { //前者有效時

                //preBorderColor
                let preBorderColor = null
                preBorderColor = iaPre.hover ? iaPre.borderColorHover : iaPre.borderColor
                preBorderColor = iaPre.active ? iaPre.borderColorActive : preBorderColor

                //selfBorderColor
                let selfBorderColor = null
                selfBorderColor = ia.hover ? ia.borderColorHover : ia.borderColor
                selfBorderColor = ia.active ? ia.borderColorActive : selfBorderColor

                //若自己左邊界顏色與前項目右邊界顏色相同者
                let bSame = false
                if (preBorderColor === selfBorderColor) {
                    bSame = true
                }
                //console.log(k, 'bSame', bSame, 'preBorderColor', preBorderColor, 'selfBorderColor', selfBorderColor)

                //若前項目為active但自己非active
                let bAgainstActive = false
                if (iaPre.active && !ia.active) {
                    bAgainstActive = true
                }
                //console.log(k, 'bAgainstActive', bAgainstActive)

                //若自己為hover狀態
                let bHover = false
                if (ia.hover) {
                    bHover = true
                }
                //console.log(k, 'bHover', bHover, cloneDeep(ia))

                //是否取消邊界
                let bCancel = false
                if (!bHover) {
                    bCancel = bAgainstActive //自己非hover時, 前項目為active但自己非active, 就取消
                }
                //console.log(k, 'bCancel a', bCancel)
                bCancel = bCancel || bSame //若同顏色就取消
                //console.log(k, 'bCancel b', bCancel)

                //save
                spcBorderUsed.left = !bCancel
                //console.log(k, 'spcBorderUsed.left', spcBorderUsed.left)

            }
            if (iaAft) { //後者有效時

                //若前項目為active但自己非active
                let bAgainstActive = false
                if (iaAft.active && !ia.active) {
                    bAgainstActive = true
                }
                //console.log(k, 'bAgainstActive', bAgainstActive)

                //若自己為hover狀態
                let bHover = false
                if (ia.hover) {
                    bHover = true
                }
                //console.log(k, 'bHover', bHover, cloneDeep(ia))

                //是否取消邊界
                let bCancel = false
                if (!bHover) {
                    bCancel = bAgainstActive //自己非hover時, 前項目為active但自己非active, 就取消
                }
                //console.log(k, 'bCancel', bCancel)

                //save
                spcBorderUsed.right = !bCancel
                //console.log(k, 'spcBorderUsed.right', spcBorderUsed.right)

            }

            return spcBorderUsed
        },

        mouseenter: function(item, kitem) {
            //console.log('methods mouseenter', item, kitem)

            let vo = this

            //調整hover
            each(vo.itemsTrans, (v, k) => {
                vo.itemsTrans[k].ia.hover = k === kitem
            })

            //各項目逐一判斷
            each(vo.itemsTrans, (v, k) => {

                //ia, iaPre
                let ia = get(vo, `itemsTrans[${k}].ia`, null)
                let iaPre = get(vo, `itemsTrans[${k - 1}].ia`, null)
                let iaAft = get(vo, `itemsTrans[${k + 1}].ia`, null)

                //getSpcBorderUsed
                let spcBorderUsed = vo.getSpcBorderUsed(k, k === kitem, iaPre, ia, iaAft)

                //save spcBorderUsed
                vo.itemsTrans[k].spcBorderUsed = spcBorderUsed

            })

        },

        mouseleave: function(item, kitem) {
            //console.log('methods mouseleave', item, kitem)

            let vo = this

            // //調整hover
            // each(vo.itemsTrans, (v, k) => {
            //     vo.itemsTrans[k].ia.hover = false
            // })

            //各項目使用spcBorderUsedBackup還原至spcBorderUsed, 比重算快
            each(vo.itemsTrans, (v, k) => {
                vo.itemsTrans[k].spcBorderUsed = cloneDeep(vo.itemsTrans[k].spcBorderUsedBackup)
            })

        },

        toggleState: function(item) {
            //console.log('methods toggleState', item)

            let vo = this

            //check
            if (vo.editable === false) {
                return
            }

            //emit
            if (vo.multiCheck) {

                //pull or push
                let valueTrans = cloneDeep(vo.value)
                if (item.active) {
                    let r = []
                    each(valueTrans, (v) => {
                        if (!isEqual(v, item.data)) {
                            r.push(v)
                        }
                    })
                    valueTrans = r
                }
                else {
                    valueTrans.push(item.data)
                }

                //nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('input', valueTrans)

                    //emit
                    vo.$emit('click', item.data, `${item.active ? 'hide' : 'show'}`)

                })

            }
            else {

                //nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('input', item.data)

                    //emit
                    vo.$emit('click', item.data)

                })

            }

        },

    },
}
</script>

<style scoped>
</style>
