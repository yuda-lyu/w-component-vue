<template>
    <div
        :changeParams="changeParams"
        v-domresize
        @domresize="resize"
    >

        <WListVertical
            :style="`height:${panelHeight}px;`"
            :items="itemsTrans"
            :enableActive="true"
            _itemActive="itemActive"
            :keyText="keyText"
            :keyIcon="keyIcon"
            :paddingStyle="paddingStyle"
            :itemTextFontSize="itemTextFontSize"
            :itemBackgroundColor="itemBackgroundColor"
            :itemBackgroundColorHover="itemBackgroundColorHover"
            :itemBackgroundColorActive="itemBackgroundColorActive"
            :itemBackgroundColorDisabled="itemBackgroundColorDisabled"
            :itemTextColor="itemTextColor"
            :itemTextColorHover="itemTextColorHover"
            :itemTextColorActive="itemTextColorActive"
            :itemTextColorDisabled="itemTextColorDisabled"
            :itemIconSize="itemIconSize"
            :itemIconColor="itemIconColor"
            :itemIconColorHover="itemIconColorHover"
            :itemIconColorActive="itemIconColorActive"
            :itemIconColorDisabled="itemIconColorDisabled"
            :itemRippleColor="itemRippleColor"
            :itemDisabledColor="itemDisabledColor"
            :itemCursorPointer="itemCursorPointer"
            :query="queryTrans"
            :funFilter="queryFunFilter"
            @click="(vitem,kitem)=>{clickItem(vitem.data,kitem)}"
        >

            <template v-slot:header>

                <slot name="header">
                </slot>

                <template v-if="enableQuery">

                    <div :style="`${useQueryPanelPaddingStyle}`">

                        <WText
                            :paddingStyle="queryPaddingStyle"
                            :borderRadius="queryBorderRadius"
                            :shadow="queryShadow"
                            :textFontSize="queryTextFontSize"
                            :textColor="queryTextColor"
                            :textAlign="queryTextAlign"
                            :leftIcon="queryIcon"
                            :leftIconSize="queryIconSize"
                            :leftIconColor="queryIconColor"
                            :leftIconColorHover="queryIconColorHover"
                            :leftIconColorFocus="queryIconColorFocus"
                            :leftIconTooltip="queryIconTooltip"
                            _rightIcon="queryRightIcon"
                            _rightIconSize="queryRightIconSize"
                            _rightIconColor="queryRightIconColor"
                            _rightIconColorHover="queryRightIconColorHover"
                            _rightIconColorFocus="queryRightIconColorFocus"
                            _rightIconTooltip="queryRightIconTooltip"
                            :iconShiftOuter="queryIconShiftOuter"
                            :iconShiftInner="queryIconShiftInner"
                            :backgroundColor="queryBackgroundColor"
                            :backgroundColorHover="queryBackgroundColorHover"
                            :backgroundColorFocus="queryBackgroundColorFocus"
                            :borderColor="queryBorderColor"
                            :borderColorHover="queryBorderColorHover"
                            :borderColorFocus="queryBorderColorFocus"
                            :bottomLineBorderColor="queryBottomLineBorderColor"
                            :bottomLineBorderColorHover="queryBottomLineBorderColorHover"
                            :bottomLineBorderColorFocus="queryBottomLineBorderColorFocus"
                            :bottomLineBorderWidth="queryBottomLineBorderWidth"
                            :bottomLineBorderWidthHover="queryBottomLineBorderWidthHover"
                            :bottomLineBorderWidthFocus="queryBottomLineBorderWidthFocus"
                            :placeholder="queryPlaceholder"
                            :height="queryHeight"
                            :focused="queryFocused"
                            :editable="true"
                            v-model="queryTrans"
                            @enter="modifyQuery"
                            @change="modifyQuery"
                            @input="modifyQuery"
                            @update:focused="modifyQueryFocused"
                        ></WText>

                    </div>

                    <div :style="`border-top:${querySepLineWidth}px solid ${effSepLineColor};`"></div>

                </template>

            </template>

            <template v-slot:item-left="props">

                <!-- 切換check統一由list的item處理, 此處不監聽處理input事件 -->
                <WCheckbox
                    :iconSize="itemCheckIconIconSize"
                    :checkedIcon="itemCheckIconCheckedIcon"
                    :checkedIconColor="props.isActive?itemCheckIconCheckedIconColorActive:props.isHover?itemCheckIconCheckedIconColorHover:itemCheckIconCheckedIconColor"
                    :checkedIconColorHover="props.isActive?itemCheckIconCheckedIconColorActive:itemCheckIconCheckedIconColorHover"
                    :checkedIconColorDisabled="itemCheckIconCheckedIconColorDisabled"
                    :uncheckedIcon="itemCheckIconUncheckedIcon"
                    :uncheckedIconColor="props.isActive?itemCheckIconUncheckedIconColorActive:props.isHover?itemCheckIconUncheckedIconColorHover:itemCheckIconUncheckedIconColor"
                    :uncheckedIconColorHover="props.isActive?itemCheckIconUncheckedIconColorActive:itemCheckIconUncheckedIconColorHover"
                    :uncheckedIconColorDisabled="itemCheckIconUncheckedIconColorDisabled"
                    :editable="getEditable(props.item.data)"
                    :value="itemsCheck[props.kitem]"
                ></WCheckbox>

                <div :style="`padding-right:${spaceBetweenCheckboxAndContent}px;`"></div>

            </template>

            <template v-slot:item-content="props">

                <slot
                    name="item-content"
                    :item="props.item.data"
                    :kitem="props.kitem"
                    :isHover="props.isHover"
                    :isActive="props.isActive"
                >
                </slot>

            </template>

            <template v-slot:footer>

                <slot name="footer">
                </slot>

            </template>

        </WListVertical>

    </div>
</template>

<script>
import { mdiCheckboxMarked, mdiCheckboxBlankOutline, mdiFilterOutline } from '@mdi/js/mdi.js'
import get from 'lodash/get'
import size from 'lodash/size'
import each from 'lodash/each'
import map from 'lodash/map'
import every from 'lodash/every'
import join from 'lodash/join'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import isestr from 'wsemi/src/isestr.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import isearr from 'wsemi/src/isearr.mjs'
import arrHas from 'wsemi/src/arrHas.mjs'
import sep from 'wsemi/src/sep.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import cstr from 'wsemi/src/cstr.mjs'
import domResize from '../js/domResize.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WCheckbox from './WCheckbox.vue'
import WText from './WText.vue'
import WListVertical from './WListVertical.vue'


/**
 * @vue-prop {Boolean} [multiCheck=true] 輸入是否為複選模式布林值，預設true
 * @vue-prop {Array} [items=[]] 輸入項目的字串陣列或物件陣列，預設[]
 * @vue-prop {Array|String|Object} [value=null] 輸入單、複選陣列、字串或物件陣列，預設null
 * @vue-prop {String} [keyText='text'] 輸入項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyIcon='icon'] 輸入項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {String} [keyPickForObjItem=''] 輸入項目為物件時，比對是否核選之欄位字串，若為空字串代表使用項目物件直接作比對，預設''
 * @vue-prop {Object} [paddingStyle={v:6,h:8}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:6,h:8}
 * @vue-prop {Number} [spaceBetweenCheckboxAndContent=8] 輸入左側核選圖標與項目內容區之距離數字，單位px，預設8
 * @vue-prop {String} [itemTextFontSize='1.0rem'] 輸入文字字型大小字串，預設'1.0rem'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [itemBackgroundColorActive='rgba(200,200,200,0.4)'] 輸入主動模式時背景顏色字串，預設'rgba(200,200,200,0.4)'
 * @vue-prop {String} [itemBackgroundColorDisabled='white'] 輸入非啟用模式時背景顏色字串，預設'white'
 * @vue-prop {String} [itemTextColor='#444'] 輸入文字顏色字串，預設'#444'
 * @vue-prop {String} [itemTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
 * @vue-prop {String} [itemTextColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [itemTextColorDisabled='#444'] 輸入非啟用模式時文字顏色字串，預設'#444'
 * @vue-prop {Number} [itemIconSize=18] 輸入左側圖標之尺寸數字，單位px，預設18
 * @vue-prop {String} [itemIconColor='#444'] 輸入圖標顏色字串，預設'#444'
 * @vue-prop {String} [itemIconColorHover='#222'] 輸入滑鼠移入時圖標顏色字串，預設'#222'
 * @vue-prop {String} [itemIconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {String} [itemIconColorDisabled='#444'] 輸入非啟用模式時圖標顏色字串，預設'#444'
 * @vue-prop {String} [itemRippleColor='rgba(255,255,255,0.4)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
 * @vue-prop {String} [itemDisabledColor='transparent'] 輸入非編輯模式時遮罩顏色字串，預設'transparent'
 * @vue-prop {Boolean} [itemCursorPointer=true] 輸入是否滑鼠移入顯示pointer樣式布林值，預設true
 * @vue-prop {Number} [itemCheckIconIconSize=18] 輸入核選圖標之圖標大小，單位為px，預設18
 * @vue-prop {String} [itemCheckIconCheckedIcon=mdiCheckboxMarked] 輸入核選圖標之有效(true|'y')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxMarked
 * @vue-prop {String} [itemCheckIconCheckedIconColor='blue darken-3'] 輸入核選圖標有效(true|'y')圖標顏色字串，預設'blue darken-3'
 * @vue-prop {String} [itemCheckIconCheckedIconColorHover='blue darken-2'] 輸入滑鼠移入時核選圖標有效(true|'y')圖標顏色字串，預設'blue darken-2'
 * @vue-prop {String} [itemCheckIconCheckedIconColorActive='blue darken-2'] 輸入主動模式時核選圖標有效(true|'y')圖標顏色字串，預設'blue darken-2'
 * @vue-prop {String} [itemCheckIconCheckedIconColorDisabled='grey'] 輸入非啟用模式時核選圖標有效(true|'y')圖標顏色字串，預設'grey'
 * @vue-prop {String} [itemCheckIconUncheckedIcon=mdiCheckboxBlankOutline] 輸入核選圖標之無效(false|'n')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxBlankOutline
 * @vue-prop {String} [itemCheckIconUncheckedIconColor='blue darken-3'] 輸入核選圖標無效(false|'n')圖標顏色字串，預設'blue darken-3'
 * @vue-prop {String} [itemCheckIconUncheckedIconColorHover='blue darken-2'] 輸入滑鼠移入時核選圖標無效(false|'n')圖標顏色字串，預設'blue darken-2'
 * @vue-prop {String} [itemCheckIconUncheckedIconColorActive='blue darken-2'] 輸入主動模式時核選圖標無效(false|'n')圖標顏色字串，預設'blue darken-2'
 * @vue-prop {String} [itemCheckIconUncheckedIconColorDisabled='grey'] 輸入非啟用模式時核選圖標無效(false|'n')圖標顏色字串，預設'grey'
 * @vue-prop {Boolean} [enableQuery=false] 輸入是否使用過濾關鍵字功能布林值，預設false
 * @vue-prop {String} [query=''] 輸入過濾關鍵字字串，預設''
 * @vue-prop {String} [queryKeysPickForObjItem=[]] 輸入項目為物件時，於查詢時所須提取出之欄位字串陣列，預設[]
 * @vue-prop {Object} [queryPaddingStyle={v:0,h:0}] 輸入過濾文字框之內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Number} [queryBorderRadius=30] 輸入過濾文字框之框圓角度數字，單位為px，預設30
 * @vue-prop {Boolean} [queryShadow=false] 輸入過濾文字框之是否為陰影模式，預設false
 * @vue-prop {String} [queryTextFontSize='1.0rem'] 輸入過濾文字框之文字大小字串，預設'1.0rem'
 * @vue-prop {String} [queryTextColor='black'] 輸入過濾文字框之文字顏色字串，預設'black'
 * @vue-prop {String} [queryTextAlign='left'] 輸入過濾文字框之文字左右對齊字串，預設'left'
 * @vue-prop {String} [queryIcon=mdiFilterOutline] 輸入過濾文字框之左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiFilterOutline
 * @vue-prop {Number} [queryIconSize=18] 輸入過濾文字框之左側圖標大小，單位為px，預設18
 * @vue-prop {String} [queryIconColor='blue'] 輸入過濾文字框之左側圖標顏色字串，預設'blue'
 * @vue-prop {String} [queryIconColorHover='blue darken-1'] 輸入過濾文字框之滑鼠移入時左側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [queryIconColorFocus='blue darken-1'] 輸入過濾文字框之取得焦點時左側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [queryIconTooltip=''] 輸入過濾文字框之左側圖標提示文字字串，預設''
 * @vue-prop {Number} [queryIconShiftOuter=0] 輸入過濾文字框之左右側圖標與外框距離數字，單位為px，預設0
 * @vue-prop {Number} [queryIconShiftInner=5] 輸入過濾文字框之左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {String} [queryBackgroundColor='transparent'] 輸入過濾文字框之背景顏色字串，預設'transparent'
 * @vue-prop {String} [queryBackgroundColorHover='transparent'] 輸入過濾文字框之滑鼠移入時背景顏色字串，預設'transparent'
 * @vue-prop {String} [queryBackgroundColorFocus='transparent'] 輸入過濾文字框之取得焦點時背景顏色字串，預設'transparent'
 * @vue-prop {String} [queryBorderColor='transparent'] 輸入過濾文字框之邊框顏色字串，預設'transparent'
 * @vue-prop {String} [queryBorderColorHover='transparent'] 輸入過濾文字框之滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [queryBorderColorFocus='transparent'] 輸入過濾文字框之取得焦點時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [queryBottomLineBorderColor='grey lighten-1'] 輸入過濾文字框之底部線顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [queryBottomLineBorderColorHover='grey'] 輸入過濾文字框之滑鼠移入時底部線顏色字串，預設'grey'
 * @vue-prop {String} [queryBottomLineBorderColorFocus='blue darken-1'] 輸入過濾文字框之取得焦點時底部線顏色字串，預設'blue darken-1'
 * @vue-prop {Number} [queryBottomLineBorderWidth=1] 輸入過濾文字框之底部線寬度數字，單位為px，預設1
 * @vue-prop {Number} [queryBottomLineBorderWidthHover=1] 輸入過濾文字框之滑鼠移入時底部線寬度數字，單位為px，預設1
 * @vue-prop {Number} [queryBottomLineBorderWidthFocus=2] 輸入過濾文字框之取得焦點時底部線寬度數字，單位為px，預設2
 * @vue-prop {String} [queryPlaceholder='Keywords'] 輸入過濾文字框之無文字時的替代字符字串，預設'Keywords'
 * @vue-prop {Number} [queryHeight=28] 輸入過濾文字框之高度數字，單位為px，預設28
 * @vue-prop {Boolean} [queryFocused=false] 輸入過濾文字框之是否為取得焦點狀態，預設false
 * @vue-prop {Object} [queryPanelPaddingStyle={v:10,h:10}] 輸入過濾文字框所在區域之內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:10}
 * @vue-prop {String} [querySepLineColor='#ddd'] 輸入過濾文字框與下方核選區之分界線顏色字串，預設'#ddd'
 * @vue-prop {Number} [querySepLineWidth=1] 輸入過濾文字框與下方核選區之分界線寬度數字，單位為px，預設1
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WCheckbox,
        WText,
        WListVertical,
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
        keyPickForObjItem: {
            type: String,
            default: '',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 6,
                    h: 8,
                }
            },
        },
        spaceBetweenCheckboxAndContent: {
            type: Number,
            default: 8,
        },
        itemTextFontSize: {
            type: String,
            default: '1.0rem',
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
            default: 'rgba(200,200,200,0.4)',
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
            default: '#000',
        },
        itemTextColorDisabled: {
            type: String,
            default: '#444',
        },
        itemIconSize: {
            type: Number,
            default: 18,
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
            default: '#000',
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
        itemCheckIconIconSize: {
            type: Number,
            default: 18,
        },
        itemCheckIconCheckedIcon: {
            type: String,
            default: mdiCheckboxMarked,
        },
        itemCheckIconCheckedIconColor: {
            type: String,
            default: 'blue darken-3',
        },
        itemCheckIconCheckedIconColorHover: {
            type: String,
            default: 'blue darken-2',
        },
        itemCheckIconCheckedIconColorActive: {
            type: String,
            default: 'blue darken-2',
        },
        itemCheckIconCheckedIconColorDisabled: {
            type: String,
            default: 'grey',
        },
        itemCheckIconUncheckedIcon: {
            type: String,
            default: mdiCheckboxBlankOutline,
        },
        itemCheckIconUncheckedIconColor: {
            type: String,
            default: 'blue darken-3',
        },
        itemCheckIconUncheckedIconColorHover: {
            type: String,
            default: 'blue darken-2',
        },
        itemCheckIconUncheckedIconColorActive: {
            type: String,
            default: 'blue darken-2',
        },
        itemCheckIconUncheckedIconColorDisabled: {
            type: String,
            default: 'grey',
        },
        enableQuery: {
            type: Boolean,
            default: false,
        },
        query: {
            type: String,
            default: '',
        },
        queryKeysPickForObjItem: {
            type: Array,
            default: () => ['text'],
        },
        queryPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 0,
                }
            },
        },
        queryBorderRadius: {
            type: Number,
            default: 30,
        },
        queryShadow: {
            type: Boolean,
            default: false,
        },
        queryTextFontSize: {
            type: String,
            default: '1.0rem',
        },
        queryTextColor: {
            type: String,
            default: 'black',
        },
        queryTextAlign: {
            type: String,
            default: 'left',
        },
        queryIcon: {
            type: String,
            default: mdiFilterOutline,
        },
        queryIconSize: {
            type: Number,
            default: 18,
        },
        queryIconColor: {
            type: String,
            default: 'blue',
        },
        queryIconColorHover: {
            type: String,
            default: 'blue darken-1',
        },
        queryIconColorFocus: {
            type: String,
            default: 'blue darken-1',
        },
        queryIconTooltip: {
            type: String,
            default: '',
        },
        queryIconShiftOuter: {
            type: Number,
            default: 0,
        },
        queryIconShiftInner: {
            type: Number,
            default: 5,
        },
        queryBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        queryBackgroundColorHover: {
            type: String,
            default: 'transparent',
        },
        queryBackgroundColorFocus: {
            type: String,
            default: 'transparent',
        },
        queryBorderColor: {
            type: String,
            default: 'transparent',
        },
        queryBorderColorHover: {
            type: String,
            default: 'transparent',
        },
        queryBorderColorFocus: {
            type: String,
            default: 'transparent',
        },
        queryBottomLineBorderColor: {
            type: String,
            default: 'grey lighten-1', //'transparent',
        },
        queryBottomLineBorderColorHover: {
            type: String,
            default: 'grey', //'transparent',
        },
        queryBottomLineBorderColorFocus: {
            type: String,
            default: 'blue darken-1', //'transparent',
        },
        queryBottomLineBorderWidth: {
            type: Number,
            default: 1,
        },
        queryBottomLineBorderWidthHover: {
            type: Number,
            default: 1,
        },
        queryBottomLineBorderWidthFocus: {
            type: Number,
            default: 2,
        },
        queryPlaceholder: {
            type: String,
            default: 'Keywords',
        },
        queryHeight: {
            type: Number,
            default: 28,
        },
        queryFocused: {
            type: Boolean,
            default: false,
        },
        queryPanelPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 10,
                    h: 10,
                }
            },
        },
        querySepLineColor: {
            type: String,
            default: '#ddd',
        },
        querySepLineWidth: {
            type: Number,
            default: 1,
        },
        // editable: {
        //     type: Boolean,
        //     default: true,
        // },
    },
    data: function() {
        return {

            panelHeight: 0,

            itemsTrans: [],
            itemsCheck: [],
            // itemsShow: [],

            queryTrans: '',
            queryFocusedTrans: false,

        }
    },
    computed: {

        changeParams: function () {
            //console.log('computed changeParams')

            let vo = this

            //modifyItems
            vo.modifyItems(vo.value)

            //save
            vo.queryTrans = vo.query
            vo.queryFocusedTrans = vo.queryFocused

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

        useQueryPanelPaddingStyle: function() {
            //console.log('computed useQueryPanelPaddingStyle')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.queryPanelPaddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        effSepLineColor: function() {
            let vo = this
            return color2hex(vo.querySepLineColor)
        },

    },
    methods: {

        resize: function(msg) {
            // console.log('methods resize', msg)

            let vo = this

            //panelHeight
            vo.panelHeight = msg.snew.offsetHeight

        },

        getCheck: function (v, value) {
            // console.log('getCheck', v, value)

            let vo = this

            //vt
            let vt = null
            if (vo.isObjValue && isestr(vo.keyPickForObjItem)) {
                vt = get(v, vo.keyPickForObjItem)
            }
            else {
                vt = v
            }

            //check
            let check = null
            if (vo.multiCheck) {
                check = arrHas(value, vt)
            }
            else {
                check = isEqual(vt, value)
            }

            return check
        },

        queryFunFilter: function(v, k) {
            // console.log('queryFunFilter', v, k)

            let vo = this

            //check
            if (!isestr(vo.queryTrans)) {
                return true
            }

            //vt
            let vt = null
            if (vo.isObjValue) {
                if (isearr(vo.queryKeysPickForObjItem)) {
                    let ks = []
                    each(vo.queryKeysPickForObjItem, (k) => {
                        let kk = get(v, `data.${k}`)
                        ks.push(kk)
                    })
                    vt = join(ks, '|')
                }
                else {
                    vt = o2j(v)
                }
            }
            else {
                vt = cstr(v)
            }
            vt = vt.toLowerCase()
            // console.log('vt', vt)

            //kws
            let kws = sep(vo.queryTrans.toLowerCase(), ' ')
            // console.log('kws', kws)

            //b
            let b = false
            each(kws, (kw) => {
                if (vt.indexOf(kw) >= 0) {
                    b = true
                    return false //跳出
                }
            })
            // console.log('b', b)

            return b

        },

        modifyItems: function(value) {
            // console.log('modifyItems', value)

            let vo = this

            //itemsCheck
            let kLast = -1
            let itemsCheck = map(vo.items, (v, k) => {
                let check = vo.getCheck(v, value)
                if (check) {
                    kLast = k
                }
                return check
            })
            // console.log('itemsCheck', itemsCheck)
            // console.log('kLast', kLast)

            //單選時僅允許最後核選為有效值
            if (!vo.multiCheck && kLast >= 0) {
                itemsCheck = map(itemsCheck, (v) => {
                    return false
                })
                itemsCheck[kLast] = true
                // console.log('itemsCheck(single)', itemsCheck)
            }

            //itemsTrans
            let itemsTrans = map(vo.items, (v, k) => {
                let text = v
                if (vo.isObjValue) {
                    text = get(v, vo.keyText, '')
                }
                let icon = ''
                if (vo.isObjValue) {
                    icon = get(v, vo.keyIcon, '')
                }
                let editable = true
                if (vo.isObjValue) {
                    editable = get(v, 'editable', true)
                }
                let item = {
                    [vo.keyText]: text,
                    [vo.keyIcon]: icon,
                    editable,
                    data: v,
                }
                return item
            })
            // console.log('itemsTrans', itemsTrans)

            //save
            vo.itemsTrans = itemsTrans
            vo.itemsCheck = itemsCheck

        },

        clickItem: function(item, kitem) {
            // console.log('clickItem', item, kitem)

            let vo = this

            //check
            if (!vo.getEditable(item)) {
                return
            }

            //cloneDeep
            let itemsCheck = cloneDeep(vo.itemsCheck)

            //modify
            if (vo.multiCheck) {
                itemsCheck[kitem] = !itemsCheck[kitem]
            }
            else {
                if (!itemsCheck[kitem]) {
                    each(itemsCheck, (v, k) => {
                        if (k === kitem) {
                            itemsCheck[k] = true
                        }
                        else {
                            itemsCheck[k] = false
                        }
                    })
                }
                else {
                    itemsCheck[kitem] = !itemsCheck[kitem]
                }
            }
            // console.log('itemsCheck', itemsCheck)

            //value
            let value = []
            each(itemsCheck, (b, k) => {

                //check
                if (!b) {
                    return true //跳出換下一個
                }

                //v
                let v = cloneDeep(vo.items[k])

                //vt
                let vt = null
                if (vo.isObjValue && isestr(vo.keyPickForObjItem)) {
                    vt = get(v, vo.keyPickForObjItem)
                }
                else {
                    vt = v
                }

                //push
                value.push(vt)

            })
            // console.log('value', value)
            if (!vo.multiCheck) {
                value = get(value, 0, null)
                // console.log('value(single)', value)
            }

            //save
            vo.itemsCheck = itemsCheck
            // console.log('itemsCheck', itemsCheck)

            //emit
            vo.$emit('click', {
                check: itemsCheck[kitem],
                item: cloneDeep(vo.items[kitem]),
                kitem,
            })

            //emit
            vo.$emit('input', value)

        },

        modifyQuery: function() {
            // console.log('methods modifyQuery')

            let vo = this

            //modifyItems
            vo.modifyItems(vo.value)

            //emit
            vo.$emit('update:query', vo.queryTrans)

        },

        modifyQueryFocused: function(queryFocused) {
            //console.log('methods modifyQueryFocused', queryFocused)

            let vo = this

            // //$nextTick
            // vo.$nextTick(() => {

            // })

            //emit
            vo.$emit('update:queryFocused', queryFocused)

        },

        getEditable: function(item) {
            // let vo = this
            let b = get(item, 'editable', true)
            return b
        },

    }
}
</script>

<style scoped>
</style>
