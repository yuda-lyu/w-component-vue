<template>
    <WInputCheckbox
        v-bind="{...$props,multiCheck:false}"
        v-on="$listeners"
    >
        <template v-slot="props">
            <slot
                :item="props.item"
                :kitem="props.kitem"
                :isHover="props.isHover"
                :isActive="props.isActive"
            ></slot>
        </template>
    </WInputCheckbox>
</template>

<script>
import WInputCheckbox from './WInputCheckbox.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入全部可選字串或物件陣列，預設[]
 * @vue-prop {String|Object} value 輸入單選字串或物件，無預設
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
        WInputCheckbox,
    },
    props: {
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
