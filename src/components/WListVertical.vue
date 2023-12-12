<template>
    <div
        :changeParams="changeParams"
        :changeItemActive="changeItemActive"
        v-domresize
        @domresize="resize"
    >

        <div
            :style="`height:${panelHeight}px;`"
        >

            <div ref="refHeader">
                <slot name="header">
                </slot>
            </div>

            <WPanelScrolly
                :style="`height:${listHeight}px;`"
            >
                <div
                    :key="kitem"
                    v-for="(item,kitem) in useItems"
                >

                    <WListItem
                        :icon="getIcon(item)"
                        :text="getText(item)"
                        :textFontSize="itemTextFontSize"
                        :active="getActive(item)"
                        :paddingStyle="paddingStyle"
                        :backgroundColor="itemBackgroundColor"
                        :backgroundColorHover="itemBackgroundColorHover"
                        :backgroundColorActive="itemBackgroundColorActive"
                        :backgroundColorDisabled="itemBackgroundColorDisabled"
                        :textColor="itemTextColor"
                        :textColorHover="itemTextColorHover"
                        :textColorActive="itemTextColorActive"
                        :textColorDisabled="itemTextColorDisabled"
                        :iconSize="itemIconSize"
                        :iconColor="itemIconColor"
                        :iconColorHover="itemIconColorHover"
                        :iconColorActive="itemIconColorActive"
                        :iconColorDisabled="itemIconColorDisabled"
                        :rippleColor="getEditable(item)?itemRippleColor:null"
                        :editable="getEditable(item)"
                        :disabledColor="itemDisabledColor"
                        :cursorPointer="itemCursorPointer"
                        @click="ckItem(item,kitem)"
                    >

                        <template v-slot:item="props">
                            <slot
                                name="item"
                                :item="item"
                                :kitem="kitem"
                                :isHover="props.isHover"
                                :isActive="props.isActive"
                            >
                            </slot>
                        </template>

                        <template v-slot:item-left="props">
                            <slot
                                name="item-left"
                                :item="item"
                                :kitem="kitem"
                                :isHover="props.isHover"
                                :isActive="props.isActive"
                            >
                            </slot>
                        </template>

                        <template v-slot:item-content="props">
                            <slot
                                name="item-content"
                                :item="item"
                                :kitem="kitem"
                                :isHover="props.isHover"
                                :isActive="props.isActive"
                            >
                            </slot>
                        </template>

                        <template v-slot:item-right="props">
                            <slot
                                name="item-right"
                                :item="item"
                                :kitem="kitem"
                                :isHover="props.isHover"
                                :isActive="props.isActive"
                            >
                            </slot>
                        </template>

                    </WListItem>

                </div>
            </WPanelScrolly>

            <div ref="refFooter">
                <slot name="footer">
                </slot>
            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash-es/get'
import size from 'lodash-es/size'
import every from 'lodash-es/every'
import isEqual from 'lodash-es/isEqual'
import cloneDeep from 'lodash-es/cloneDeep'
import isEle from 'wsemi/src/isEle.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import ispm from 'wsemi/src/ispm.mjs'
import sep from 'wsemi/src/sep.mjs'
import cstr from 'wsemi/src/cstr.mjs'
import domResize from '../js/domResize.mjs'
import WPanelScrolly from './WPanelScrolly.vue'
import WListItem from './WListItem.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的字串陣列或物件陣列，預設[]
 * @vue-prop {Boolean} [enableActive=false] 輸入項目是否使用點擊成為活耀狀態布林值，預設false
 * @vue-prop {String|Object} [itemActive=null] 輸入活耀項目字串或物件，預設null
 * @vue-prop {String} [keyText='text'] 輸入項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyIcon='icon'] 輸入項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {Object} [paddingStyle={v:10,h:12}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {String} [itemTextFontSize='1rem'] 輸入文字字型大小字串，預設'1rem'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [itemBackgroundColorActive='orange lighten-1'] 輸入主動模式時背景顏色字串，預設'orange lighten-1'
 * @vue-prop {String} [itemBackgroundColorDisabled='white'] 輸入非啟用模式時背景顏色字串，預設'white'
 * @vue-prop {String} [itemTextColor='#444'] 輸入文字顏色字串，預設'#444'
 * @vue-prop {String} [itemTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
 * @vue-prop {String} [itemTextColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [itemTextColorDisabled='#444'] 輸入非啟用模式時文字顏色字串，預設'#444'
 * @vue-prop {Number} [itemIconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [itemIconColor='#444'] 輸入圖標顏色字串，預設'#444'
 * @vue-prop {String} [itemIconColorHover='#222'] 輸入滑鼠移入時圖標顏色字串，預設'#222'
 * @vue-prop {String} [itemIconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {String} [itemIconColorDisabled='#444'] 輸入非啟用模式時圖標顏色字串，預設'#444'
 * @vue-prop {String} [itemRippleColor='rgba(255,255,255,0.4)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
 * @vue-prop {String} [itemDisabledColor='transparent'] 輸入非編輯模式時遮罩顏色字串，預設'transparent'
 * @vue-prop {Boolean} [itemCursorPointer=true] 輸入是否滑鼠移入顯示pointer樣式布林值，預設true
 * @vue-prop {Function} [funFilter=null] 輸入過濾時呼叫處理函數，可使用sync或async函數，傳入為各項目物件資料，若為sync函數回傳布林值，若為async函數等待resolve結果為布林值，代表項目內是否含有關鍵字，預設null
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WPanelScrolly,
        WListItem,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        enableActive: {
            type: Boolean,
            default: true,
        },
        itemActive: {
            type: [String, Object],
            default: null,
        },
        keyText: {
            type: String,
            default: 'text',
        },
        keyIcon: {
            type: String,
            default: 'icon',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 10,
                    h: 12,
                }
            },
        },
        itemTextFontSize: {
            type: String,
            default: '1rem',
        },
        itemBackgroundColor: {
            type: String,
            default: 'white',
        },
        itemBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.2)',
        },
        itemBackgroundColorActive: {
            type: String,
            default: 'orange lighten-1',
        },
        itemBackgroundColorDisabled: {
            type: String,
            default: 'white',
        },
        itemTextColor: {
            type: String,
            default: '#444',
        },
        itemTextColorHover: {
            type: String,
            default: '#222',
        },
        itemTextColorActive: {
            type: String,
            default: 'white',
        },
        itemTextColorDisabled: {
            type: String,
            default: '#444',
        },
        itemIconSize: {
            type: Number,
            default: 22,
        },
        itemIconColor: {
            type: String,
            default: '#444',
        },
        itemIconColorHover: {
            type: String,
            default: '#222',
        },
        itemIconColorActive: {
            type: String,
            default: 'white',
        },
        itemIconColorDisabled: {
            type: String,
            default: '#444',
        },
        itemRippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
        },
        itemDisabledColor: {
            type: String,
            default: 'transparent',
        },
        itemCursorPointer: {
            type: Boolean,
            default: true,
        },
        query: {
            type: String,
            default: '',
        },
        funFilter: {
            type: Function,
            default: null,
        },
    },
    data: function() {
        return {

            panelHeight: 0,
            listHeight: 0,

            queryTrans: '',
            useItems: [],
            itemActiveTrans: null,

        }
    },
    computed: {

        changeParams: function() {
            //console.log('computed changeParams')

            let vo = this

            //queryTrans
            vo.queryTrans = vo.query

            //updateUseItems
            vo.updateUseItems()

            return ''
        },

        changeItemActive: function() {
            let vo = this
            if (vo.enableActive) {
                vo.itemActiveTrans = vo.itemActive
            }
            return ''
        },

        isObjValue: function() {
            //console.log('computed isObjValue')

            let vo = this

            //check, 因every([])=true
            if (size(vo.items) === 0) {
                return false
            }
            return every(vo.items, (v) => {
                return isobj(v)
            })
        },

    },
    methods: {

        resize: function(msg) {
            // console.log('methods resize', msg)

            let vo = this

            //panelHeight
            vo.panelHeight = msg.snew.offsetHeight

            //headerHeight
            let headerHeight = 0
            let eleHeader = get(vo, '$refs.refHeader')
            if (isEle(eleHeader)) {
                headerHeight = eleHeader.offsetHeight
            }

            //footerHeight
            let footerHeight = 0
            let eleFooter = get(vo, '$refs.refFooter')
            if (isEle(eleFooter)) {
                footerHeight = eleFooter.offsetHeight
            }

            //listHeight
            let listHeight = vo.panelHeight - headerHeight - footerHeight
            // console.log('vo.panelHeight', vo.panelHeight, 'headerHeight', headerHeight, 'footerHeight', footerHeight)
            // console.log('listHeight', listHeight)

            //check
            if (listHeight > 0 && vo.listHeight !== listHeight) {
                vo.listHeight = listHeight
            }

        },

        getIcon: function(item) {
            let vo = this
            if (vo.isObjValue) {
                return get(item, vo.keyIcon, '')
            }
            return ''
        },

        getText: function(item) {
            let vo = this
            if (vo.isObjValue) {
                let t = get(item, vo.keyText, '')
                return t
            }
            return item
        },

        getActive: function(item) {
            let vo = this
            let b = false
            if (vo.enableActive) {
                b = isEqual(item, vo.itemActiveTrans)
            }
            return b
        },

        getEditable: function(item) {
            // let vo = this
            let b = get(item, 'editable', true)
            return b
        },

        updateUseItems: function() {
            // console.log('methods updateUseItems')

            let vo = this

            async function core() {

                //useItems
                let useItems = []

                //check
                if (isestr(vo.queryTrans)) {
                    //使用過濾

                    for (let i = 0; i < size(vo.items); i++) {
                        let v = vo.items[i]

                        //預設不可見
                        let b = false

                        if (isfun(vo.funFilter)) {
                            //有給予指定過濾函數

                            //funFilter
                            b = vo.funFilter(v, i)

                            //check
                            if (ispm(b)) {
                                b = await b
                            }

                        }
                        else {
                            //使用內建過濾

                            //kws
                            let kws = sep(vo.queryTrans.toLowerCase(), ' ')

                            //預設取得項目文字供關鍵字過濾
                            let c = ''
                            if (vo.isObjValue) {
                                c = vo.getText(v)
                            }
                            else {
                                c = cstr(v)
                            }
                            c = c.toLowerCase()
                            // console.log('getText', v, 'c=', c)

                            //若值含有關建字
                            for (let k = 0; k < size(kws); k++) {
                                let kw = kws[k]
                                if (c.indexOf(kw) >= 0) {
                                    b = true
                                    break
                                }
                            }

                        }

                        //check
                        if (b) {
                            useItems.push(cloneDeep(v))
                        }

                    }
                }
                else {
                    //不使用過濾

                    //cloneDeep
                    useItems = cloneDeep(vo.items)

                }

                //save
                vo.useItems = useItems

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },


        ckItem: function(item, kitem) {
            // console.log('methods ckItem', item, kitem)

            let vo = this

            //check
            if (!vo.getEditable(item)) {
                return
            }

            //save itemActiveTrans
            vo.itemActiveTrans = item
            // console.log('item', cloneDeep(item))

            //msg
            let msg = null
            if (vo.isObjValue) {
                msg = { ...item }
            }
            else {
                msg = item
            }
            // console.log('msg', msg)

            //emit
            vo.$emit('click', msg, kitem)

            //emit
            vo.$emit('update:itemActive', msg)

        },

    }
}
</script>

<style scoped>
</style>
