<template>
    <WListCheck
        v-bind="{...$props,multiCheck:false}"
        v-on="$listeners"
    >

        <template v-slot:header="">
            <slot
                name="header"
            ></slot>
        </template>

        <template v-slot:item-content="props">
            <slot
                name="item-content"
                :item="props.item"
                :kitem="props.kitem"
                :isHover="props.isHover"
                :isActive="props.isActive"
            ></slot>
        </template>

        <template v-slot:footer="">
            <slot
                name="footer"
            ></slot>
        </template>

    </WListCheck>
</template>

<script>
import { mdiCheckCircle, mdiCheckboxBlankCircleOutline, mdiFilterOutline } from '@mdi/js/mdi.js'
import WListCheck from './WListCheck.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的字串陣列或物件陣列，預設[]
 * @vue-prop {String|Object} [value=null] 輸入單選字串或物件，預設null
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
 * @vue-prop {String} [itemCheckIconCheckedIcon=mdiCheckCircle] 輸入核選圖標之有效(true|'y')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckCircle
 * @vue-prop {String} [itemCheckIconCheckedIconColor='blue darken-3'] 輸入核選圖標有效(true|'y')圖標顏色字串，預設'blue darken-3'
 * @vue-prop {String} [itemCheckIconCheckedIconColorHover='blue darken-2'] 輸入滑鼠移入時核選圖標有效(true|'y')圖標顏色字串，預設'blue darken-2'
 * @vue-prop {String} [itemCheckIconCheckedIconColorActive='blue darken-2'] 輸入主動模式時核選圖標有效(true|'y')圖標顏色字串，預設'blue darken-2'
 * @vue-prop {String} [itemCheckIconCheckedIconColorDisabled='grey'] 輸入非啟用模式時核選圖標有效(true|'y')圖標顏色字串，預設'grey'
 * @vue-prop {String} [itemCheckIconUncheckedIcon=mdiCheckboxBlankCircleOutline] 輸入核選圖標之無效(false|'n')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxBlankCircleOutline
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
    components: {
        WListCheck,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        value: {
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
            default: mdiCheckCircle,
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
            default: mdiCheckboxBlankCircleOutline,
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
        }
    },
    mounted: function() {
    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
</style>
