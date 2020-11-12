<template>
    <div :changeParam="changeParam">

        <w-shell-bottom-line
            :borderColor="bottomLineBorderColor"
            :borderColorHover="bottomLineBorderColorHover"
            :borderColorFocus="bottomLineBorderColorFocus"
            :borderWidth="bottomLineBorderWidth"
            :borderWidthHover="bottomLineBorderWidthHover"
            :borderWidthFocus="bottomLineBorderWidthFocus"
            :focused="focusedTrans"
        >
            <w-shell-ellipse
                :paddingStyle="paddingStyle"
                :borderRadius="borderRadius"
                :shadow="shadow"
                :leftIcon="leftIcon"
                :leftIconColor="leftIconColor"
                :leftIconColorFocus="leftIconColorFocus"
                :leftIconTooltip="leftIconTooltip"
                :rightIcon="rightIcon"
                :rightIconColor="rightIconColor"
                :rightIconColorFocus="rightIconColorFocus"
                :rightIconTooltip="rightIconTooltip"
                :iconShiftOuter="iconShiftOuter"
                :iconShiftInner="iconShiftInner"
                :backgroundColor="backgroundColor"
                :backgroundColorFocus="backgroundColorFocus"
                :borderColor="borderColor"
                :borderColorFocus="borderColorFocus"
                :editable="editable"
                :focused="focusedTrans"
                @click-left="function(v){$emit('click-left', v)}"
                @click-right="function(v){$emit('click-right', v)}"
            >

                <w-text-core
                    ref="inp"
                    :type="type"
                    :textColor="textColor"
                    :textAlign="textAlign"
                    :placeholder="placeholder"
                    :height="height"
                    :editable="editable"
                    :value="value"
                    :focused="focusedTrans"
                    @update:focused="changeFocused"
                    @blur="(v,err)=>{$emit('blur', v, err)}"
                    @enter="(v,err)=>{$emit('enter', v, err)}"
                    @input="(v,err)=>{$emit('input', v, err)}"
                ></w-text-core>

            </w-shell-ellipse>
        </w-shell-bottom-line>

    </div>
</template>

<script>
import WShellEllipse from './WShellEllipse.vue'
import WShellBottomLine from './WShellBottomLine.vue'
import WTextCore from './WTextCore.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:0,h:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [shadow=false] 輸入是否為陰影模式，預設false
 * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'
 * @vue-prop {String|Number} value 輸入文字框值
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [leftIconColor='blue darken-1'] 輸入左側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [leftIconColorFocus='blue'] 輸入左側圖標Focus顏色字串，預設'blue'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [rightIconColor='blue darken-1'] 輸入右側圖標顏色字串，預設'blue darken-1'
 * @vue-prop {String} [rightIconColorFocus='blue'] 輸入右側圖標Focus顏色字串，預設'blue'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=0] 輸入左右側圖標與外框距離數字，單位為px，預設0
 * @vue-prop {Number} [iconShiftInner=10] 輸入左右側圖標與內插槽區距離數字，單位為px，預設10
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorFocus='transparent'] 輸入背景Focus顏色字串，預設'transparent'
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorFocus='transparent'] 輸入邊框Focus顏色字串，預設'transparent'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {Number} [height=28] 輸入高度數字，單位為px，預設28
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WShellBottomLine,
        WTextCore,
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
            default: 30,
        },
        shadow: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'any',
        },
        value: {
            type: [String, Number],
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
        leftIconColor: {
            type: String,
            default: 'blue darken-1',
        },
        leftIconColorFocus: {
            type: String,
            default: 'blue',
        },
        leftIconTooltip: {
            type: String,
            default: '',
        },
        rightIcon: {
            type: String,
            default: '',
        },
        rightIconColor: {
            type: String,
            default: 'blue darken-1',
        },
        rightIconColorFocus: {
            type: String,
            default: 'blue',
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
            default: 10,
        },
        backgroundColor: {
            type: String,
            default: 'transparent', //'white',
        },
        backgroundColorFocus: {
            type: String,
            default: 'transparent', //'white',
        },
        borderColor: {
            type: String,
            default: 'transparent', //'white',
        },
        borderColorFocus: {
            type: String,
            default: 'transparent', //'white',
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
            default: 'blue darken-2', //'transparent',
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
            type: Number,
            default: 28,
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
