<template>
    <div
        v-domresize
        @domresize="resize"
        :changeItemActive="changeItemActive"
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
                    v-for="(item,kitem) in items"
                >

                    <WListVerticalItem
                        :icon="getIcon(item)"
                        :text="getText(item)"
                        :textFontSize="itemTextFontSize"
                        :active="getActive(item)"
                        :paddingStyle="paddingStyle"
                        :backgroundColor="itemBackgroundColor"
                        :backgroundColorHover="itemBackgroundColorHover"
                        :backgroundColorActive="itemBackgroundColorActive"
                        :textColor="itemTextColor"
                        :textColorHover="itemTextColorHover"
                        :textColorActive="itemTextColorActive"
                        :iconSize="itemIconSize"
                        :iconColor="itemIconColor"
                        :iconColorHover="itemIconColorHover"
                        :iconColorActive="itemIconColorActive"
                        :rippleColor="itemRippleColor"
                        @click="ckItem(item)"
                    >

                        <template
                            v-slot="props"
                        >
                            <slot
                                name="item"
                                :item="{...item,...props}"
                            >
                            </slot>
                        </template>

                    </WListVerticalItem>

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
import get from 'lodash/get'
import size from 'lodash/size'
import every from 'lodash/every'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import isEle from 'wsemi/src/isEle.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import domResize from '../js/domResize.mjs'
import WPanelScrolly from './WPanelScrolly.vue'
import WListVerticalItem from './WListVerticalItem.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的字串陣列或物件陣列，預設[]
 * @vue-prop {Boolean} [useActive=false] 輸入項目是否使用點擊成為活耀狀態，預設false
 * @vue-prop {String|Object} [itemActive=null] 輸入活耀項目物件，預設null
 * @vue-prop {String} [itemTextFontSize='1rem'] 輸入文字字型大小字串，預設'1rem'
 * @vue-prop {String} [keyText='text'] 輸入項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyIcon='icon'] 輸入項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {Object} [paddingStyle={v:10,h:12}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [itemBackgroundColorActive='orange lighten-1'] 輸入主動模式時背景顏色字串，預設'orange lighten-1'
 * @vue-prop {String} [itemTextColor='#444'] 輸入文字顏色字串，預設'#444'
 * @vue-prop {String} [itemTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
 * @vue-prop {String} [itemTextColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {Number} [itemIconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [itemIconColor='#444'] 輸入圖標顏色字串，預設'#444'
 * @vue-prop {String} [itemIconColorHover='#222'] 輸入滑鼠移入時圖標顏色字串，預設'#222'
 * @vue-prop {String} [itemIconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {String} [itemRippleColor='rgba(255,255,255,0.4)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WPanelScrolly,
        WListVerticalItem,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        useActive: {
            type: Boolean,
            default: true,
        },
        itemActive: {
            type: [String, Object],
            default: null,
        },
        itemTextFontSize: {
            type: String,
            default: '1rem',
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
        itemRippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
        },
    },
    data: function() {
        return {

            panelHeight: 0,
            listHeight: 0,

            itemActiveTrans: null,

        }
    },
    computed: {

        changeItemActive: function() {
            let vo = this
            if (vo.useActive) {
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
            if (vo.useActive) {
                b = isEqual(item, vo.itemActiveTrans)
            }
            return b
        },

        ckItem: function(item) {
            // console.log('methods ckItem', item)

            let vo = this

            //save itemActiveTrans
            vo.itemActiveTrans = item

            //nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click', cloneDeep(item))

                //emit
                vo.$emit('update:itemActive', cloneDeep(item))

            })

        },

    }
}
</script>

<style scoped>
</style>
