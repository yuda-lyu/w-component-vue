<template>
    <div
        style="display:inline-block;"
        :changeParam="changeParam"
    >

        <!-- 於w-text-int外側可能有width:100%設定, w-shell-ellipse中間區width:100%會無視外層display:inline-block屬性造成滿版, 但其內輸入區仍有指定寬度導致排版錯亂, 故得使用display:inline-block -->
        <WShellEllipse
            style="display:inline-block;"
            :paddingStyle="paddingStyle"
            :borderRadius="borderRadius"
            :shadow="shadow"
            :leftIcon="icon"
            :leftIconSize="iconSize"
            :leftIconColor="iconColor"
            :leftIconColorHover="iconColorHover"
            :leftIconColorFocus="iconColorFocus"
            :leftIconTooltip="iconTooltip"
            :iconShiftOuter="iconShiftOuter"
            :iconShiftInner="iconShiftInner"
            :backgroundColor="backgroundColor"
            :backgroundColorHover="backgroundColorHover"
            :backgroundColorFocus="backgroundColorFocus"
            :borderColor="borderColor"
            :borderColorHover="borderColorHover"
            :borderColorFocus="borderColorFocus"
            :editable="editable"
            :focused="focusedTrans"
            @click-left="$emit('click-left')"
        >

            <div style="margin:0px -10px;">

                <WTextIntCore
                    :width="width"
                    :leftIconTooltip="leftIconTooltip"
                    :rightIconTooltip="rightIconTooltip"
                    :buttonIconSize="buttonIconSize"
                    :buttonColor="buttonColor"
                    :buttonColorHover="buttonColorHover"
                    :buttonColorFocus="buttonColorFocus"
                    :valueMax="valueMax"
                    :value="value"
                    :textFontSize="textFontSize"
                    :textColor="textColor"
                    :editable="editable"
                    :focused="focusedTrans"
                    @update:focused="changeFocused"
                    @input="(v)=>{$emit('input', v)}"
                    @error="(v)=>{$emit('error', v)}"
                ></WTextIntCore>

            </div>

        </WShellEllipse>

    </div>
</template>

<script>
import WShellEllipse from './WShellEllipse.vue'
import WTextIntCore from './WTextIntCore.vue'


/**
 * @vue-prop {Number} [width=70] 輸入框寬度，單位為px，預設70
 * @vue-prop {Object} [paddingStyle={v:0,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:15}
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {Number} [value=0] 輸入整數值數字，預設0
 * @vue-prop {Number} [valueMax=null] 輸入最大整數值數字，預設null
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字大小字串，預設'1rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [icon=''] 輸入框外左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [iconSize=24] 輸入左側圖標大小，單位為px，預設24
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入框外左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時框外左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入取得焦點時框外左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入框外左側圖標提示文字字串，預設''
 * @vue-prop {String} [leftIconTooltip='減少'] 輸入框內左側圖標提示文字字串，預設'減少'
 * @vue-prop {String} [rightIconTooltip='增加'] 輸入框內右側圖標提示文字字串，預設'增加'
 * @vue-prop {Number} [iconShiftOuter=-10] 輸入左右側圖標與外框距離數字，單位為px，預設-10
 * @vue-prop {Number} [iconShiftInner=5] 輸入左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='white'] 輸入滑鼠移入時背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入取得焦點時背景顏色字串，預設'white'
 * @vue-prop {Number} [buttonIconSize=24] 輸入框內圖標大小，單位為px，預設24
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入滑鼠移入時邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入取得焦點時邊框顏色字串，預設'white'
 * @vue-prop {String} [buttonColor='deep-orange lighten-2'] 輸入框內圖標按鈕顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [buttonColorHover='deep-orange lighten-1'] 輸入滑鼠移入時框內圖標按鈕顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [buttonColorFocus='deep-orange lighten-1'] 輸入取得焦點時框內圖標按鈕顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTextIntCore,
    },
    props: {
        width: {
            type: Number,
            default: 70,
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 15,
                }
            },
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        value: {
            type: Number,
            default: 0,
        },
        valueMax: {
            type: Number,
            default: null,
        },
        textFontSize: {
            type: String,
            default: '1rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        icon: {
            type: String,
            default: '',
        },
        iconSize: {
            type: Number,
            default: 24,
        },
        iconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        iconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        iconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        iconTooltip: {
            type: String,
            default: '',
        },
        leftIconTooltip: {
            type: String,
            default: '減少',
        },
        rightIconTooltip: {
            type: String,
            default: '增加',
        },
        iconShiftOuter: {
            type: Number,
            default: -10,
        },
        iconShiftInner: {
            type: Number,
            default: 5,
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorHover: {
            type: String,
            default: 'white',
        },
        backgroundColorFocus: {
            type: String,
            default: 'white',
        },
        buttonIconSize: {
            type: Number,
            default: 24,
        },
        borderColor: {
            type: String,
            default: 'white',
        },
        borderColorHover: {
            type: String,
            default: 'white',
        },
        borderColorFocus: {
            type: String,
            default: 'white',
        },
        buttonColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        buttonColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        buttonColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            focusedTrans: false,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

    },
    methods: {

        changeFocused: function(focused) {
            //console.log('methods changeFocused', focused)

            let vo = this

            //save
            vo.focusedTrans = focused

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', focused)

            })

        },

    },
}
</script>

<style scoped>
</style>
