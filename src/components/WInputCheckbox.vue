<template>
    <div :changeItems="changeItems">

        <div
            :style="`${arrange==='vertical'?'':'display:inline-block;'} ${useMarginStyle} ${usePadding}`"
            :key="kitem"
            v-for="(item,kitem) in itemsTrans"
        >

            <div
                :style="`transition:all 0.3s; display:flex; ${useVerticalAlign}; color:${getTextColor(item,kitem)};`"
                @mouseenter="mouseenter(item,kitem)"
                @mouseleave="mouseleave(item,kitem)"
            >

                <input
                    :style="`${useInputHeight} padding:0px; cursor:pointer; opacity:${editable?1:textDisabledOpacity};`"
                    :type="multiCheck?'checkbox':'radio'"
                    :value="item.id"
                    v-model="dataActive"
                    :disabled="!editable"
                >

                <div
                    :style="`opacity:${editable?1:textDisabledOpacity};`"
                    @click="toggleState(item)"
                >

                    <slot
                        :item="item"
                        :kitem="kitem"
                        :isHover="item.hover"
                        :isActive="item.active"
                    >

                        <div
                            :style="`margin:0px 0px 0px 5px; cursor:pointer;`"
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
import get from 'lodash/get'
import map from 'lodash/map'
import each from 'lodash/each'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
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
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [textDisabledOpacity=0.7] 輸入非編輯模式時之透明度數字，預設0.7
 * @vue-prop {Object} [marginStyle={top:0,bottom:0,left:0,right:0}] 輸入外距設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{top:0,bottom:0,left:0,right:0}
 * @vue-prop {Object} [paddingStyle={top:0,bottom:0,left:0,right:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{top:0,bottom:0,left:0,right:0}
 * @vue-prop {String} [verticalAlign='center'] 輸入input與文字之垂直對齊字串，可選'top'、'center'、'bottom'，預設'center'
 * @vue-prop {Number|String} [inputHeight=null] 輸入input高度數字或字串，預設null
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
        textColor: {
            type: String,
            default: '#666',
        },
        textColorHover: {
            type: String,
            default: '#444',
        },
        textColorActive: {
            type: String,
            default: '#222',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        textDisabledOpacity: {
            type: Number,
            default: 0.7,
        },
        marginStyle: {
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
        inputHeight: {
            type: [Number, String],
            default: null,
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

        useMarginStyle: function() {
            //console.log('computed useMarginStyle')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.marginStyle, { parse: !vo.group }) //group, 非群組化時才使用marginStyle

            //margin
            let margin = `margin:${cs};`

            return margin
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

        useInputHeight: function() {
            //console.log('computed useInputHeight')

            let vo = this

            let h = ''
            if (isnum(vo.inputHeight)) {
                h = `height:${vo.inputHeight}px;`
            }
            else if (isestr(vo.inputHeight)) {
                vo.inputHeight = replace(vo.inputHeight, ';', '') //去除分號字元
                h = `height:${vo.inputHeight};`
            }

            return h
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

            //c
            let c
            c = item.active ? vo.effTextColorActive : item.hover ? vo.effTextColorHover : vo.effTextColor
            if (!vo.editable) {
                c = item.active ? vo.effTextColorActive : vo.effTextColor
            }

            return c

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
