<template>
    <div :changeParam="changeParam">

        <w-shell-ellipse
            :paddingStyle="paddingStyle"
            :borderWidth="constBorderWidth"
            :borderRadius="borderRadius"
            :shadow="shadow"
            :leftIcon="icon"
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
            @click-left="function(v){$emit('click-left', v)}"
        >

            <div style="margin-right:-5px;">
                <w-text-suggest-core
                    :items="items"
                    :value="value"
                    :height="useHeight"
                    :keyText="keyText"
                    :itemTextColor="itemTextColor"
                    :itemTextColorHover="itemTextColorHover"
                    :itemFontSize="itemFontSize"
                    :itemBackgroundColor="itemBackgroundColor"
                    :itemBackgroundColorHover="itemBackgroundColorHover"
                    :itemPaddingStyle="itemPaddingStyle"
                    :placeholder="placeholder"
                    :searchEmpty="searchEmpty"
                    :distY="5"
                    :defItemHeight="defItemHeight"
                    :editable="editable"
                    @update:focused="changeFocused"
                    @input="function(v){$emit('input', v)}"
                >
                    <template v-slot="props">

                        <slot
                            name="item"
                            :item="props.item"
                            :index="props.index"
                        >
                            <div>{{getText(props.item)}}</div>
                        </slot>

                    </template>
                </w-text-suggest-core>
            </div>

        </w-shell-ellipse>

    </div>
</template>

<script>
import isobj from 'wsemi/src/isobj.mjs'
import WShellEllipse from './WShellEllipse.vue'
import WTextSuggestCore from './WTextSuggestCore.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:0,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:15}
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {Array} [items=[]] 輸入可選(建議)項目陣列，預設[]
 * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
 * @vue-prop {Number} [height=30] 輸入項目高度數字，單位為px，預設30
 * @vue-prop {String} [keyText='text'] 輸入取項目物件內之顯示用文字鍵值字串，預設'text'
 * @vue-prop {String} [itemTextColor='grey darken-3'] 輸入項目文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [itemTextColorHover='light-blue darken-2'] 輸入項目文字Hover顏色字串，預設'light-blue darken-2'
 * @vue-prop {String} [itemFontSize='0.9rem'] 輸入項目顯示文字大小字串，預設'0.9rem'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入項目背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='light-blue lighten-5'] 輸入項目背景Hover顏色字串，預設'light-blue lighten-5'
 * @vue-prop {Object} [itemPaddingStyle={v:12,h:16}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:12,h:16}
 * @vue-prop {String} [icon=''] 輸入框外左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入框外左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時框外左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入取得焦點時框外左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入框外左側圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=-10] 輸入左右側圖標與外框距離數字，單位為px，預設-10
 * @vue-prop {Number} [iconShiftInner=5] 輸入左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='white'] 輸入滑鼠移入時背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入取得焦點時背景顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入滑鼠移入時邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入取得焦點時邊框顏色字串，預設'white'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [searchEmpty='Empty'] 輸入無過濾結果字串，預設'Empty'
 * @vue-prop {Number} [defItemHeight=43] 輸入按需顯示時各項目預設高度值，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設43
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTextSuggestCore,
    },
    props: {
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
        items: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [Object, String, Number],
            default: null,
        },
        height: {
            type: Number,
            default: 30,
        },
        keyText: {
            type: String,
            default: 'text',
        },
        itemTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        itemTextColorHover: {
            type: String,
            default: 'light-blue darken-2',
        },
        itemFontSize: {
            type: String,
            default: '0.8rem',
        },
        itemBackgroundColor: {
            type: String,
            default: 'white',
        },
        itemBackgroundColorHover: {
            type: String,
            default: 'light-blue lighten-5',
        },
        itemPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 12,
                    h: 16,
                }
            },
        },
        icon: {
            type: String,
            default: '',
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
        placeholder: {
            type: String,
            default: '',
        },
        searchEmpty: {
            type: String,
            default: 'Empty',
        },
        defItemHeight: {
            type: Number,
            default: 43,
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
            constBorderWidth: 1,
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

        useHeight: function () {
            //console.log('computed useHeight')

            let vo = this

            //height
            let height = vo.height - 2 * vo.constBorderWidth

            //max
            height = Math.max(height, 0)

            return height
        },

    },
    methods: {

        getText: function(value) {
            //console.log('methods getText', value)

            let vo = this

            //valueTrans
            if (isobj(value)) {
                return value[vo.keyText]
            }
            else {
                return value
            }

        },

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
