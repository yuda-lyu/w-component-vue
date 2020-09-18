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
                :editable="editable"
                :disabledColor="'rgba(255,255,255,0.4)'"
                :active="item.active"
                @click="toggleState(item)"
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
import isNumber from 'lodash/isNumber'
import cloneDeep from 'lodash/cloneDeep'
import arrhas from 'wsemi/src/arrhas.mjs'
import WButtonChip from './WButtonChip.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入全部可選字串或物件陣列，預設[]
 * @vue-prop {Array} [value=[]] 輸入複選字串或物件陣列，預設[]
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
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角寬度數字，單位為px，預設30
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
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WButtonChip,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
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
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            get,

            itemsTrans: [],

        }
    },
    mounted: function() {
    },
    computed: {

        changeItems: function () {
            //console.log('computed changeItems')

            let vo = this

            //t
            let t = cloneDeep(vo.items)

            //items
            let items = map(t, (v, k) => {

                //o
                let o = {
                    active: arrhas(vo.value, v),
                    data: v,
                }

                //spcBorderRadiusStyle
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
                    else if (k === t.length - 1) {
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

                //spcBorderWidth
                let spcBorderWidth = {}
                if (vo.group) {
                    if (k === 0) {
                        spcBorderWidth = { top: 1, bottom: 1, left: 1, right: 1 }
                    }
                    else {
                        spcBorderWidth = { top: 1, bottom: 1, left: 0, right: 1 }
                    }
                }
                o.spcBorderWidth = spcBorderWidth

                //spcShiftLeft, spcShiftRight, 因按鈕本身亦提供設定shiftLeft與shiftRight, 故需額外添加group的偏移量
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
            let vo = this

            //四方向margin
            let left = 0
            let right = 0
            let top = 0
            let bottom = 0

            //group, 非群組化時才使用marginStyle
            if (!vo.group) {
                if (isNumber(get(vo, 'marginStyle.h'))) {
                    left = get(vo, 'marginStyle.h')
                    right = left
                }
                if (isNumber(get(vo, 'marginStyle.v'))) {
                    top = get(vo, 'marginStyle.v')
                    bottom = top
                }
                if (isNumber(get(vo, 'marginStyle.left'))) {
                    left = get(vo, 'marginStyle.left')
                }
                if (isNumber(get(vo, 'marginStyle.right'))) {
                    right = get(vo, 'marginStyle.right')
                }
                if (isNumber(get(vo, 'marginStyle.top'))) {
                    top = get(vo, 'marginStyle.top')
                }
                if (isNumber(get(vo, 'marginStyle.bottom'))) {
                    bottom = get(vo, 'marginStyle.bottom')
                }
            }

            //margin
            let margin = `margin-left:${left}px; margin-right:${right}px; margin-top:${top}px; margin-bottom:${bottom}px;`

            return margin
        },

    },
    methods: {

        toggleState: function(item) {
            //console.log('methods toggleState', item)

            let vo = this

            //check
            if (vo.editable === false) {
                return
            }

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

        },

    },
}
</script>

<style scoped>
</style>
