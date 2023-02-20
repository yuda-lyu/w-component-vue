<template>
    <WTooltip
        v-bind="{...$props,mode:'popup'}"
        v-on="$listeners"
    >
        <template v-slot:trigger>
            <slot
                name="trigger"
            ></slot>
        </template>
        <template v-slot:content="props">
            <slot
                name="content"
                :funHide="props.funHide"
            ></slot>
        </template>
    </WTooltip>
</template>

<script>
import WTooltip from './WTooltip.vue'


/**
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {Boolean} [isolated=false] 輸入當mode為'popup'時是否為獨立顯引狀態布林值，也就是可不接收外部傳入value值，預設false
 * @vue-prop {String} [placement='bottom-start'] 輸入內容區出現位置字串，可選'top-start'、'top'、'top-end'、'bottom-start'、'bottom'、'bottom-end'、'left-start'、'left'、'left-end'、'right-start'、'right'、'right-end'、，預設'bottom-start'
 * @vue-prop {Number} [minWidth=null] 輸入最小寬度數字，單位為px，預設null
 * @vue-prop {Number} [maxWidth=null] 輸入最大寬度數字，單位為px，預設null
 * @vue-prop {Boolean} [autoFitMinWidth=false] 輸入是否使用驅動區寬度作為內容區之最小寬度布林值，預設false
 * @vue-prop {Number} [placementDist=5] 輸入彈窗距離觸發元素距離數字，單位為px，預設5
 * @vue-prop {Number} [borderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {String} [textFontSize='inherit'] 輸入入內容區塊文字字型大小字串，預設'inherit'
 * @vue-prop {String} [textColor='black'] 輸入內容區塊文字顏色字串，預設'black'
 * @vue-prop {String} [backgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {Object} [paddingStyle={v:0,h:0}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Boolean} [shadow=true] 輸入是否顯示陰影布林值，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Number} [transitionTime=200] 輸入淡入出現時間數字，單位為ms，預設200
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    components: {
        WTooltip,
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        isolated: {
            type: Boolean,
            default: false,
        },
        placement: {
            type: String,
            default: 'bottom-start',
        },
        minWidth: {
            type: Number,
            default: null,
        },
        maxWidth: {
            type: Number,
            default: null,
        },
        autoFitMinWidth: {
            type: Boolean,
            default: false,
        },
        placementDist: {
            type: Number,
            default: 5,
        },
        borderRadius: {
            type: Number,
            default: 4,
        },
        textFontSize: {
            type: String,
            default: 'inherit',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 0,
                }
            },
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        shadowStyle: {
            type: String,
            default: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
        },
        transitionTime: {
            type: Number,
            default: 200,
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
