<template>
    <div :changeParam="changeParam">

        <WShellBottomLine
            :borderColor="bottomLineBorderColor"
            :borderColorHover="bottomLineBorderColorHover"
            :borderColorFocus="bottomLineBorderColorFocus"
            :borderWidth="bottomLineBorderWidth"
            :borderWidthHover="bottomLineBorderWidthHover"
            :borderWidthFocus="bottomLineBorderWidthFocus"
            :focused="focusedTrans"
        >
            <WShellEllipse
                :paddingStyle="paddingStyle"
                :borderRadius="borderRadius"
                :shadow="shadow"
                :leftIcon="leftIcon"
                :leftIconSize="leftIconSize"
                :leftIconColor="leftIconColor"
                :leftIconColorHover="leftIconColorHover"
                :leftIconColorFocus="leftIconColorFocus"
                :leftIconTooltip="leftIconTooltip"
                :rightIcon="rightIcon"
                :rightIconSize="rightIconSize"
                :rightIconColor="rightIconColor"
                :rightIconColorHover="rightIconColorHover"
                :rightIconColorFocus="rightIconColorFocus"
                :rightIconTooltip="rightIconTooltip"
                :iconShiftOuter="iconShiftOuter"
                :iconShiftInner="iconShiftInner"
                :backgroundColor="backgroundColor"
                :backgroundColorHover="backgroundColorHover"
                :backgroundColorFocus="backgroundColorFocus"
                :borderColor="borderColor"
                :borderColorHover="borderColorHover"
                :borderColorFocus="borderColorFocus"
                :verticalAlign="verticalAlign"
                :editable="editable"
                :focused="focusedTrans"
                @click-left="$emit('click-left')"
                @click-right="$emit('click-right')"
            >

                <WTextareaCore
                    :textFontSize="textFontSize"
                    :textColor="textColor"
                    :textAlign="textAlign"
                    :placeholder="placeholder"
                    :height="height"
                    :editable="editable"
                    :value="value"
                    :focused="focusedTrans"
                    @update:focused="changeFocused"
                    @select="(v,err,ev)=>{$emit('select',v,err,ev)}"
                    @blur="(v,err,ev)=>{$emit('blur',v,err,ev)}"
                    @enter="(v,err,ev)=>{$emit('enter',v,err,ev)}"
                    @input="(v,err,ev)=>{$emit('input',v,err,ev)}"
                    @change="(v,err,ev)=>{$emit('change',v,err,ev)}"
                ></WTextareaCore>

            </WShellEllipse>
        </WShellBottomLine>

    </div>
</template>

<script>
import WShellEllipse from './WShellEllipse.vue'
import WShellBottomLine from './WShellBottomLine.vue'
import WTextareaCore from './WTextareaCore.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:0,h:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Number} [borderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {Boolean} [shadow=false] 輸入是否為陰影模式，預設false
 * @vue-prop {String|Number} value 輸入文字框值
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字大小字串，預設'1rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [leftIconSize=24] 輸入左側圖標大小，單位為px，預設24
 * @vue-prop {String} [leftIconColor='blue'] 輸入左側圖標顏色字串，預設'blue'
 * @vue-prop {String} [leftIconColorHover='blue darken-1'] 輸入滑鼠移入時左側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [leftIconColorFocus='blue darken-1'] 輸入取得焦點時左側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [rightIconSize=24] 輸入右側圖標大小，單位為px，預設24
 * @vue-prop {String} [rightIconColor='blue'] 輸入右側圖標顏色字串，預設'blue'
 * @vue-prop {String} [rightIconColorHover='blue darken-1'] 輸入滑鼠移入時右側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [rightIconColorFocus='blue darken-1'] 輸入取得焦點時右側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=0] 輸入左右側圖標與外框距離數字，單位為px，預設0
 * @vue-prop {Number} [iconShiftInner=5] 輸入左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorHover='transparent'] 輸入滑鼠移入時背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorFocus='transparent'] 輸入取得焦點時背景顏色字串，預設'transparent'
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorFocus='transparent'] 輸入取得焦點時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [bottomLineBorderColor='grey lighten-1'] 輸入底部線顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [bottomLineBorderColorHover='grey'] 輸入滑鼠移入時底部線顏色字串，預設'grey'
 * @vue-prop {String} [bottomLineBorderColorFocus='blue darken-1'] 輸入取得焦點時底部線顏色字串，預設'blue darken-1'
 * @vue-prop {Number} [bottomLineBorderWidth=1] 輸入底部線寬度數字，單位為px，預設1
 * @vue-prop {Number} [bottomLineBorderWidthHover=1] 輸入滑鼠移入時底部線寬度數字，單位為px，預設1
 * @vue-prop {Number} [bottomLineBorderWidthFocus=2] 輸入取得焦點時底部線寬度數字，單位為px，預設2
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {Number|String} [height=null] 輸入高度數字或字串，數字單位為px，若給予非有效值則代表自動更新高度，預設null
 * @vue-prop {String} [verticalAlign='top'] 輸入input與文字之垂直對齊字串，可選'top'、'center'、'bottom'，預設'top'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WShellBottomLine,
        WTextareaCore,
    },
    props: {
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 0,
                }
            },
        },
        borderRadius: {
            type: Number,
            default: 4,
        },
        shadow: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [String, Number],
        },
        textFontSize: {
            type: String,
            default: '1rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        textAlign: {
            type: String,
            default: 'left',
        },
        leftIcon: {
            type: String,
            default: '',
        },
        leftIconSize: {
            type: Number,
            default: 24,
        },
        leftIconColor: {
            type: String,
            default: 'blue',
        },
        leftIconColorHover: {
            type: String,
            default: 'blue darken-1',
        },
        leftIconColorFocus: {
            type: String,
            default: 'blue darken-1',
        },
        leftIconTooltip: {
            type: String,
            default: '',
        },
        rightIcon: {
            type: String,
            default: '',
        },
        rightIconSize: {
            type: Number,
            default: 24,
        },
        rightIconColor: {
            type: String,
            default: 'blue',
        },
        rightIconColorHover: {
            type: String,
            default: 'blue darken-1',
        },
        rightIconColorFocus: {
            type: String,
            default: 'blue darken-1',
        },
        rightIconTooltip: {
            type: String,
            default: '',
        },
        iconShiftOuter: {
            type: Number,
            default: 0,
        },
        iconShiftInner: {
            type: Number,
            default: 5,
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        backgroundColorHover: {
            type: String,
            default: 'transparent',
        },
        backgroundColorFocus: {
            type: String,
            default: 'transparent',
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
        bottomLineBorderColor: {
            type: String,
            default: 'grey lighten-1', //'transparent',
        },
        bottomLineBorderColorHover: {
            type: String,
            default: 'grey', //'transparent',
        },
        bottomLineBorderColorFocus: {
            type: String,
            default: 'blue darken-1', //'transparent',
        },
        bottomLineBorderWidth: {
            type: Number,
            default: 1,
        },
        bottomLineBorderWidthHover: {
            type: Number,
            default: 1,
        },
        bottomLineBorderWidthFocus: {
            type: Number,
            default: 2,
        },
        placeholder: {
            type: String,
            default: '',
        },
        height: {
            type: [Number, String],
            default: null,
        },
        verticalAlign: {
            type: String,
            default: 'top',
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
