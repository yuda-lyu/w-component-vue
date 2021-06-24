<template>
    <div :changeParam="changeParam">

        <w-shell-ellipse
            :paddingStyle="paddingStyle"
            :borderWidth="constBorderWidth"
            :borderRadius="borderRadius"
            :shadow="shadow"
            :leftIcon="leftIcon"
            :leftIconColor="leftIconColor"
            :leftIconColorHover="leftIconColorHover"
            :leftIconColorFocus="leftIconColorFocus"
            :leftIconTooltip="leftIconTooltip"
            :rightIcon="rightIcon"
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
            :editable="editable"
            :focused="focusedTrans"
            @click-left="$emit('click-left')"
            @click-right="$emit('click-right')"
        >

            <div style="margin-right:-5px;">
                <w-text-suggest-core
                    :mode="'select'"
                    :items="items"
                    :value="value"
                    :keyText="keyText"
                    :textColor="textColor"
                    :height="useHeight"
                    :itemTextColor="itemTextColor"
                    :itemTextColorHover="itemTextColorHover"
                    :itemFontSize="itemFontSize"
                    :itemBackgroundColor="itemBackgroundColor"
                    :itemBackgroundColorHover="itemBackgroundColorHover"
                    :itemPaddingStyle="itemPaddingStyle"
                    :expansionIcon="showExpansionIcon?undefined:''"
                    :expansionIconColor="expansionIconColor"
                    :distY="5"
                    :defItemHeight="defItemHeight"
                    :editable="editable"
                    :focused="focusedTrans"
                    :showPanel="showPanelTrans"
                    @update:focused="(v)=>{updateFocused(v);$emit('blur',null,null)}"
                    @update:showPanel="updateShowPanel"
                    @input="(item,kitem)=>{$emit('input',item,kitem)}"
                    @click-item="(item,kitem)=>{$emit('click-item',item,kitem)}"
                >

                    <template v-slot:select="props">

                        <slot
                            name="select"
                            :item="props.item"
                            :text="props.text"
                        >
                            {{props.text}}
                        </slot>

                    </template>

                    <template v-slot:item="props">

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
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式布林值，預設true
 * @vue-prop {Number} [height=30] 輸入項目高度數字，單位為px，預設30
 * @vue-prop {Array} [items=[]] 輸入可選項目陣列，預設[]
 * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
 * @vue-prop {String} [keyText='text'] 輸入取項目物件內之顯示用文字鍵值字串，預設'text'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [itemTextColor='grey darken-3'] 輸入項目文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [itemTextColorHover='light-blue darken-2'] 輸入項目文字Hover顏色字串，預設'light-blue darken-2'
 * @vue-prop {String} [itemFontSize='0.9rem'] 輸入項目顯示文字大小字串，預設'0.9rem'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入項目背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='light-blue lighten-5'] 輸入項目背景Hover顏色字串，預設'light-blue lighten-5'
 * @vue-prop {Object} [itemPaddingStyle={v:12,h:16}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:12,h:16}
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [leftIconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入取得焦點時左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [rightIconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時右側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入取得焦點時右側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=-10] 輸入左右側圖標與外框距離數字，單位為px，預設-10
 * @vue-prop {Number} [iconShiftInner=5] 輸入左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='white'] 輸入滑鼠移入時背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入取得焦點時背景顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入滑鼠移入時邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入取得焦點時邊框顏色字串，預設'white'
 * @vue-prop {Boolean} [showExpansionIcon=true] 輸入是否顯示時顯示旋轉按鈕布林值，預設true
 * @vue-prop {String} [expansionIconColor='grey'] 輸入右側圖標顏色字串，預設'grey'
 * @vue-prop {Number} [defItemHeight=43] 輸入按需顯示時各項目預設高度值數字，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設43
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態布林值，預設false
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
        height: {
            type: Number,
            default: 30,
        },
        items: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [Object, String, Number],
            default: null,
        },
        keyText: {
            type: String,
            default: 'text',
        },
        textColor: {
            type: String,
            default: 'black',
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
        leftIcon: {
            type: String,
            default: '',
        },
        leftIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        leftIconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        leftIconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
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
            default: 'deep-orange lighten-2',
        },
        rightIconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        rightIconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        rightIconTooltip: {
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
        showExpansionIcon: {
            type: Boolean,
            default: true,
        },
        expansionIconColor: {
            type: String,
            default: 'grey',
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
        showPanel: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            constBorderWidth: 1,
            focusedTrans: false,
            showPanelTrans: false,
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

        updateFocused: function(focused) {
            //console.log('methods updateFocused', focused)

            let vo = this

            //save
            vo.focusedTrans = focused

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', focused)

            })

        },

        updateShowPanel: function(showPanel) {
            //console.log('methods updateShowPanel', showPanel)

            let vo = this

            //save
            vo.showPanelTrans = showPanel

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:showPanel', showPanel)

            })

        },

    },
}
</script>

<style scoped>
</style>
