<template>
    <div :changeItems="changeItems">

        <div :style="`display:inline-block; border-radius:${borderRadius}px; ${useShadow}`">
            <div :style="`display:flex; flex-direction:${useFlexDirection};`">

                <template v-for="(item,kitem) in itemsTrans">

                    <div
                        :style="`display:flex; flex-direction:${useFlexDirection}; align-items:stretch;`"
                        :key="'kitem-'+kitem"
                    >

                        <div
                            :style="`${useSeplineStype}`"
                            v-if="kitem>0"
                        ></div>

                        <WButtonCircle
                            :key="kitem"
                            :tooltip="get(item,`data.${keyTooltip}`)"
                            :icon="get(item,`data.${keyIcon}`)"
                            :iconColor="iconColor"
                            :iconColorHover="iconColorHover"
                            :iconColorFocus="iconColorFocus"
                            :iconColorActive="iconColorActive"
                            :iconSize="iconSize"
                            :borderWidth="borderWidth"
                            :borderRadius="borderRadius"
                            :borderRadiusStyle="getBorderRadiusStyle(kitem)"
                            :borderColor="borderColor"
                            :borderColorHover="borderColorHover"
                            :borderColorFocus="borderColorFocus"
                            :borderColorActive="borderColorActive"
                            :backgroundColor="backgroundColor"
                            :backgroundColorHover="backgroundColorHover"
                            :backgroundColorFocus="backgroundColorFocus"
                            :backgroundColorActive="backgroundColorActive"
                            :tooltipBorderRadius="tooltipBorderRadius"
                            :tooltipPaddingStyle="tooltipPaddingStyle"
                            :tooltipTextFontSize="tooltipTextFontSize"
                            :tooltipTextColor="tooltipTextColor"
                            :tooltipBackgroundColor="tooltipBackgroundColor"
                            :rippleColor="rippleColor"
                            :paddingStyle="paddingStyle"
                            :shadow="false"
                            _shadowStyle="shadowStyle"
                            :editable="editable"
                            :disabledColor="'rgba(255,255,255,0.4)'"
                            :active="item.active"
                            @click="toggleState(item)"
                        ></WButtonCircle>

                    </div>

                </template>

            </div>
        </div>

    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import map from 'lodash-es/map.js'
import each from 'lodash-es/each.js'
import size from 'lodash-es/size.js'
import isEqual from 'lodash-es/isEqual.js'
import cloneDeep from 'lodash-es/cloneDeep.js'
import arrHas from 'wsemi/src/arrHas.mjs'
import join from 'lodash-es/join.js'
import split from 'lodash-es/split.js'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import replace from 'wsemi/src/replace.mjs'
import sep from 'wsemi/src/sep.mjs'
import oc from 'wsemi/src/color.mjs'
import WButtonCircle from './WButtonCircle.vue'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {Boolean} [multiCheck=true] 輸入是否為複選模式布林值，預設true
 * @vue-prop {Array} [items=[]] 輸入全部可選字串或物件陣列，預設[]
 * @vue-prop {Array|Object} [value=null] 輸入單、複選陣列或物件陣列，預設null
 * @vue-prop {String} [keyIcon='icon'] 輸入可選項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {String} [keyTooltip='tooltip'] 輸入可選項目為物件時，存放提示之欄位字串，預設'tooltip'
 * @vue-prop {String} [dir='horizontal'] 輸入圖標排列方向字串，可選'horizontal'、'vertical'，預設'horizontal'
 * @vue-prop {String} [iconColor='#222'] 輸入圖標顏色字串，預設'#222'
 * @vue-prop {String} [iconColorHover='#444'] 輸入滑鼠移入時圖標顏色字串，預設'#444'
 * @vue-prop {String} [iconColorFocus='#666'] 輸入取得焦點時按鈕圖標顏色字串，預設'#666'
 * @vue-prop {String} [iconColorActive='#333'] 輸入主動模式時圖標顏色字串，預設'#333'
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {Number} [borderWidth=0] 輸入框線寬度數字，單位為px，預設0
 * @vue-prop {Number} [borderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorFocus='transparent'] 輸入取得焦點時按鈕框線顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='#f2f2f2'] 輸入背景顏色字串，預設'#f2f2f2'
 * @vue-prop {String} [backgroundColorHover='#eaeaea'] 輸入滑鼠移入時背景顏色字串，預設'#eaeaea'
 * @vue-prop {String} [backgroundColorFocus='#e2e2e2'] 輸入取得焦點時按鈕背景顏色字串，預設'#e2e2e2'
 * @vue-prop {String} [backgroundColorActive='#cecece'] 輸入主動模式時背景顏色字串，預設'#cecece'
 * @vue-prop {Number} [seplineWidth=1] 輸入分隔線寬度數字，單位為px，預設1
 * @vue-prop {String} [seplineColor='#ddd'] 輸入分隔線顏色字串，預設'#ddd'
 * @vue-prop {Number} [tooltipBorderRadius=4] 輸入提示文字框圓角度數字，單位為px，預設4
 * @vue-prop {Object} [tooltipPaddingStyle={v:5,h:8}] 輸入提示文字內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:5,h:8}
 * @vue-prop {String} [tooltipTextFontSize='0.85rem'] 輸入提示文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [tooltipTextColor='white'] 輸入提示文字顏色字串，預設'white'
 * @vue-prop {String} [tooltipBackgroundColor='rgba(60,60,60,0.75)'] 輸入背景顏色字串，預設'rgba(60,60,60,0.75)'
 * @vue-prop {String} [rippleColor='rgba(255,255,255,0.5)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.5)'
 * @vue-prop {Object} [paddingStyle={v:4,h:4}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:4,h:4}
 * @vue-prop {Boolean} [shadow=false] 輸入是否顯示陰影布林值，預設false
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    components: {
        WButtonCircle,
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
            type: [Array, Object],
            default: null,
        },
        keyIcon: {
            type: String,
            default: 'icon',
        },
        keyTooltip: {
            type: String,
            default: 'tooltip',
        },
        dir: {
            type: String,
            default: 'horizontal',
        },
        iconColor: {
            type: String,
            default: '#222',
        },
        iconColorHover: {
            type: String,
            default: '#444',
        },
        iconColorFocus: {
            type: String,
            default: '#666',
        },
        iconColorActive: {
            type: String,
            default: '#333',
        },
        iconSize: {
            type: Number,
            default: 22,
        },
        borderWidth: {
            type: Number,
            default: 0,
        },
        borderRadius: {
            type: Number,
            default: 4,
        },
        borderColor: {
            type: String,
            default: 'transparent',
        },
        borderColorHover: {
            type: String,
            default: 'transparent',
        },
        borderColorFocus: {
            type: String,
            default: 'transparent',
        },
        borderColorActive: {
            type: String,
            default: 'transparent',
        },
        backgroundColor: {
            type: String,
            default: '#f2f2f2',
        },
        backgroundColorHover: {
            type: String,
            default: '#eaeaea',
        },
        backgroundColorFocus: {
            type: String,
            default: '#e2e2e2',
        },
        backgroundColorActive: {
            type: String,
            default: '#cecece',
        },
        seplineWidth: {
            type: Number,
            default: 1,
        },
        seplineColor: {
            type: String,
            default: '#ddd',
        },
        tooltipBorderRadius: {
            type: Number,
            default: 4,
        },
        tooltipPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 5,
                    h: 8,
                }
            },
        },
        tooltipTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        tooltipTextColor: {
            type: String,
            default: 'white',
        },
        tooltipBackgroundColor: {
            type: String,
            default: 'rgba(60,60,60,0.75)',
        },
        rippleColor: {
            type: String,
            default: 'rgba(255, 255, 255, 0.5)',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 4,
                    h: 4,
                }
            },
        },
        shadow: {
            type: Boolean,
            default: false,
        },
        shadowStyle: {
            type: String,
            default: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
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
                    hover: false, //預設為false
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

                //add hover, 預設為false
                o.hover = false

                return o
            })

            //save
            vo.itemsTrans = items

            return ''
        },

        useFlexDirection: function() {
            let vo = this
            if (vo.dir === 'horizontal') {
                return 'row'
            }
            return 'column'
        },

        useSeplineStype: function() {
            let vo = this
            let s = ''
            if (vo.dir === 'horizontal') {
                s = `height:100%; border-left:${vo.seplineWidth}px solid ${vo.useSeplineColor};`
            }
            else {
                s = `width:100%; border-top:${vo.seplineWidth}px solid ${vo.useSeplineColor};`
            }
            return s
        },

        useSeplineColor: function() {
            let vo = this
            return convertColor(vo.seplineColor)
        },

        useShadow: function() {
            let vo = this

            function genShadow(c, alpha) {
                let r = convertColor(c)
                let rgba = oc.toRgba(r)
                rgba.a = alpha
                let s = oc.toRgbaString(rgba)
                return s
            }

            function repColor(tmp, tar, color) {
                tmp = replace(tmp, '}', '{')
                let s = split(tmp, '{') //需用slit, 用sep會把前後字串的雙側空白trim掉, 導致組裝回去樣式失效
                s = map(s, (v) => {
                    if (v.indexOf(tar) >= 0) {
                        let ss = sep(v, '=')
                        let alpha = ss[1]
                        if (isnum(alpha)) {
                            alpha = cdbl(alpha)
                        }
                        else {
                            alpha = 0.2
                        }
                        return genShadow(color, alpha)
                    }
                    return v
                })
                return join(s, '')
            }

            //shadow
            if (vo.shadow) {
                if (isestr(vo.shadowStyle)) {
                    return 'box-shadow:' + repColor(vo.shadowStyle, 'backgroundColorAlpha', vo.backgroundColor)
                }
                return ''
            }

            return ''
        },

    },
    methods: {

        getBorderRadiusStyle: function(k) {
            let vo = this
            let up = size(vo.itemsTrans) - 1
            let obj = {}
            if (vo.dir === 'horizontal') {
                if (k === 0) {
                    obj = { ...obj, topLeft: true, bottomLeft: true, }
                }
                if (k === up) { //有可能僅1個故不能用elseif
                    obj = { ...obj, topRight: true, bottomRight: true }
                }
            }
            else {
                if (k === 0) {
                    obj = { ...obj, topLeft: true, topRight: true }
                }
                if (k === up) { //有可能僅1個故不能用elseif
                    obj = { ...obj, bottomLeft: true, bottomRight: true }
                }
            }
            return obj
        },

        toggleState: function(item) {
            // console.log('methods toggleState', item)

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
