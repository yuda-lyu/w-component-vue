<template>
    <div :changeItems="changeItems">

        <div
            :style="`${arrange==='vertical'?'':'display:inline-block;'} ${usePadding}`"
            :key="kitem"
            v-for="(item,kitem) in itemsTrans"
        >

            <div
                :style="`transition:all 0.3s; display:flex; ${useVerticalAlign}; color:${getTextColor(item,kitem)};`"
                @mouseenter="mouseenter(item,kitem)"
                @mouseleave="mouseleave(item,kitem)"
                @click="toggleState(item)"
            >

                <div :style="`display:flex; height:${inputSize+inputShiftTop}px; padding-top:${inputShiftTop}px;`">
                    <input
                        :style="`width:${inputSize}px; height:${inputSize}px; padding:0px; cursor:pointer;`"
                        :type="multiCheck?'checkbox':'radio'"
                        :value="item.id"
                        v-model="dataActive"
                        :disabled="!editable"
                    >
                </div>

                <div
                    :style="``"
                >

                    <slot
                        :item="item"
                        :kitem="kitem"
                        :isHover="item.hover"
                        :isActive="item.active"
                    >

                        <div
                            :style="`margin:0px 0px 0px 5px; ${useTextFontSize} cursor:pointer;`"
                        >
                            {{getText(item)}}
                        </div>

                    </slot>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash-es/get'
import map from 'lodash-es/map'
import each from 'lodash-es/each'
import isEqual from 'lodash-es/isEqual'
import cloneDeep from 'lodash-es/cloneDeep'
import replace from 'wsemi/src/replace.mjs'
import arrHas from 'wsemi/src/arrHas.mjs'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Boolean} [multiCheck=true] 輸入是否為複選模式布林值，預設true
 * @vue-prop {Array} [items=[]] 輸入全部可選字串或物件陣列，預設[]
 * @vue-prop {Array|String|Object} value 輸入複選字串或物件陣列，無預設
 * @vue-prop {String} [keyText='text'] 輸入可選項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [arrange='vertical'] 輸入可選項目排列字串，可選'vertical'、'horizontal'，預設'vertical'
 * @vue-prop {Number} [inputSize=16] 輸入input寬度與高度數字，單位為px，預設16
 * @vue-prop {Number} [inputShiftTop=1] 輸入input上方平移數離數字，單位為px，預設1
 * @vue-prop {String} [textColor='#222'] 輸入文字顏色字串，預設'#222'
 * @vue-prop {String} [textColorHover='#888'] 輸入滑鼠移入時文字顏色字串，預設'#888'
 * @vue-prop {String} [textColorActive='#222'] 輸入主動模式時文字顏色字串，預設'#222'
 * @vue-prop {String} [textColorDisabled='#666'] 輸入主動模式時文字顏色字串，預設'#666'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Object} [paddingStyle={top:0,bottom:0,left:0,right:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{top:0,bottom:0,left:0,right:0}
 * @vue-prop {String} [verticalAlign='center'] 輸入input與文字之垂直對齊字串，可選'top'、'center'、'bottom'，預設'center'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    components: {
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
        arrange: {
            type: String,
            default: 'vertical',
        },
        inputSize: {
            type: Number,
            default: 16,
        },
        inputShiftTop: {
            type: Number,
            default: 1,
        },
        textColor: {
            type: String,
            default: '#222',
        },
        textColorHover: {
            type: String,
            default: '#888',
        },
        textColorActive: {
            type: String,
            default: '#222',
        },
        textColorDisabled: {
            type: String,
            default: '#666',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }
            },
        },
        verticalAlign: {
            type: String,
            default: 'center',
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
            dataActive: null,

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
                return active
            })

            //items, dataActive
            let items = []
            let dataActive = []
            each(t, (v, k) => {

                //o
                let o = {
                    data: v,
                }

                //add id
                let id = `id-${k}`
                o.id = id

                //add active
                let active = itemActives[k]
                o.active = active

                //add hover, 預設為false, 故儲存至spcBorderUsedBackup可直接用於恢復
                o.hover = false

                //push
                items.push(o)
                if (active) {
                    dataActive.push(id)
                }

            })

            //針對單選dataActive改為id
            if (!vo.multiCheck) {
                dataActive = dataActive[0]
            }

            //save
            vo.itemsTrans = items
            vo.dataActive = dataActive

            return ''
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle, { ext: { left: vo.shiftLeft, right: vo.shiftRight } })

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        useVerticalAlign: function() {
            //console.log('computed useVerticalAlign')

            let vo = this

            let c = ''
            if (vo.verticalAlign === 'center') {
                c = 'align-items:center;'
            }
            else if (vo.verticalAlign === 'top') {
                c = 'align-items:flex-start;'
            }
            else if (vo.verticalAlign === 'bottom') {
                c = 'align-items:flex-end;'
            }

            return c
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        effTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

        effTextColorHover: function() {
            let vo = this
            return color2hex(vo.textColorHover)
        },

        effTextColorActive: function() {
            let vo = this
            return color2hex(vo.textColorActive)
        },

        effTextColorDisabled: function() {
            let vo = this
            return color2hex(vo.textColorDisabled)
        },

    },
    methods: {

        getText: function(item) {
            //console.log('methods getText', item)

            let vo = this

            //t
            let t = get(item, `data.${vo.keyText}`) || get(item, 'data')

            return t

        },

        getTextColor: function(item, kitem) {
            // console.log('methods getTextColor', item, kitem)

            let vo = this

            if (!vo.editable) {
                return vo.effTextColorDisabled
            }
            if (item.active) {
                return vo.effTextColorActive
            }
            if (item.hover) {
                return vo.effTextColorHover
            }
            return vo.effTextColor
        },

        mouseenter: function(item, kitem) {
            // console.log('methods mouseenter', item, kitem)

            let vo = this

            //調整hover
            each(vo.itemsTrans, (v, k) => {
                vo.itemsTrans[k].hover = k === kitem
            })
            // console.log('mouseenter vo.itemsTrans', cloneDeep(vo.itemsTrans))

        },

        mouseleave: function(item, kitem) {
            // console.log('methods mouseleave', item, kitem)

            let vo = this

            //調整hover
            each(vo.itemsTrans, (v, k) => {
                vo.itemsTrans[k].hover = false
            })
            // console.log('mouseleave vo.itemsTrans', cloneDeep(vo.itemsTrans))

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

    }
}
</script>

<style>
</style>
