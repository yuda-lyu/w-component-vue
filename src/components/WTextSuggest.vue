<template>
    <div
        :changeFocused="changeFocused"
        :changeShowPanel="changeShowPanel"
        v-domresize
        @domresize="resize"
    >

        <WShellEllipse
            :paddingStyle="paddingStyle"
            :borderWidth="constBorderWidth"
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
            :editable="editable"
            :focused="focusedTrans"
            @click-left="$emit('click-left')"
            @click-right="$emit('click-right')"
        >

            <div style="margin-right:-5px;">
                <WTextSuggestCore
                    :mode="'suggest'"
                    :items="items"
                    :value="value"
                    :keyText="keyText"
                    :textFontSize="textFontSize"
                    :textColor="textColor"
                    :itemTextFontSize="itemTextFontSize"
                    :itemTextColor="itemTextColor"
                    :itemTextColorHover="itemTextColorHover"
                    :itemBackgroundColor="itemBackgroundColor"
                    :itemBackgroundColorHover="itemBackgroundColorHover"
                    :itemPaddingStyle="itemPaddingStyle"
                    :expansionIcon="showExpansionIcon?undefined:''"
                    :expansionIconSize="expansionIconSize"
                    :expansionIconColor="expansionIconColor"
                    :maxHeight="maxHeight"
                    :minWidth="minWidth"
                    :maxWidth="maxWidth"
                    :autoFitMinWidth="autoFitMinWidth"
                    :autoFitMaxWidth="autoFitMaxWidth"
                    :placeholder="placeholder"
                    :loadingText="loadingText"
                    :noResultsText="noResultsText"
                    :searchingText="searchingText"
                    :placementDist="useDistY"
                    :defItemHeight="defItemHeight"
                    :editable="editable"
                    :focused="focusedTrans"
                    :showPanel="showPanelTrans"
                    @update:focused="(v)=>{updateFocused(v);$emit('blur',null,null)}"
                    @update:showPanel="updateShowPanel"
                    @input="(item,kitem)=>{$emit('input',item,kitem)}"
                    @enter="(item,kitem)=>{$emit('enter',item,kitem)}"
                    @click-item="(item,kitem)=>{$emit('click-item',item,kitem)}"
                >

                    <template v-slot:item="props">

                        <slot
                            name="item"
                            :item="props.item"
                            :index="props.index"
                        >
                            <div>{{getText(props.item)}}</div>
                        </slot>

                    </template>

                </WTextSuggestCore>
            </div>

        </WShellEllipse>

    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import isobj from 'wsemi/src/isobj.mjs'
import parseSpace from '../js/parseSpace.mjs'
import domResize from '../js/domResize.mjs'
import WShellEllipse from './WShellEllipse.vue'
import WTextSuggestCore from './WTextSuggestCore.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:2,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:2,h:15}
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式布林值，預設true
 * @vue-prop {Array} [items=[]] 輸入可選(建議)項目陣列，預設[]
 * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
 * @vue-prop {String} [keyText='text'] 輸入取項目物件內之顯示用文字鍵值字串，預設'text'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [itemTextFontSize='0.8rem'] 輸入項目顯示文字大小字串，預設'0.8rem'
 * @vue-prop {String} [itemTextColor='#444'] 輸入項目文字顏色字串，預設'#444'
 * @vue-prop {String} [itemTextColorHover='#333'] 輸入項目文字Hover顏色字串，預設'#333'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入項目背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='#f2f2f2'] 輸入項目背景Hover顏色字串，預設'#f2f2f2'
 * @vue-prop {Object} [itemPaddingStyle={v:10,h:14}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:14}
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [leftIconSize=24] 輸入左側圖標大小，單位為px，預設24
 * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [leftIconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入取得焦點時左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {Number} [rightIconSize=24] 輸入右側圖標大小，單位為px，預設24
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
 * @vue-prop {Number} [expansionIconSize=18] 輸入右側圖標尺寸數字，單位為px，預設18
 * @vue-prop {String} [expansionIconColor='grey'] 輸入右側圖標顏色字串，預設'grey'
 * @vue-prop {Number} [maxHeight=200] 輸入顯示區最大高度數字，單位為px，預設200
 * @vue-prop {Number} [minWidth=null] 輸入最小寬度，單位為px，預設null
 * @vue-prop {Number} [maxWidth=null] 輸入最大寬度，單位為px，預設null
 * @vue-prop {Boolean} [autoFitMinWidth=true] 輸入是否使用驅動區寬度作為內容區之最小寬度布林值，預設true
 * @vue-prop {Boolean} [autoFitMaxWidth=true] 輸入是否使用驅動區寬度作為內容區之最大寬度布林值，預設true
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [loadingText='Loading...'] 輸入載入中字串，預設'Loading...'
 * @vue-prop {String} [noResultsText='No results'] 輸入無過濾結果字串，預設'No results'
 * @vue-prop {String} [searchingText='Searching...'] 輸入搜索中字串，預設'Searching...'
 * @vue-prop {Number} [defItemHeight=43] 輸入按需顯示時各項目預設高度值數字，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設43
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態布林值，預設false
 * @vue-prop {Boolean} [showPanel=false] 輸入是否顯示清單布林值，預設false
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WShellEllipse,
        WTextSuggestCore,
    },
    props: {
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 2,
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
        keyText: {
            type: String,
            default: 'text',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        itemTextColor: {
            type: String,
            default: '#444',
        },
        itemTextColorHover: {
            type: String,
            default: '#333',
        },
        itemTextFontSize: {
            type: String,
            default: '0.8rem',
        },
        itemBackgroundColor: {
            type: String,
            default: 'white',
        },
        itemBackgroundColorHover: {
            type: String,
            default: '#f2f2f2',
        },
        itemPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 10,
                    h: 14,
                }
            },
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
        rightIconSize: {
            type: Number,
            default: 24,
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
        expansionIconSize: {
            type: Number,
            default: 18,
        },
        expansionIconColor: {
            type: String,
            default: 'grey',
        },
        maxHeight: {
            type: Number,
            default: 200,
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
            default: true,
        },
        autoFitMaxWidth: {
            type: Boolean,
            default: true,
        },
        placeholder: {
            type: String,
            default: '',
        },
        loadingText: {
            type: String,
            default: 'Loading...',
        },
        noResultsText: {
            type: String,
            default: 'No results',
        },
        searchingText: {
            type: String,
            default: 'Searching...',
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
            useDistY: 0,
        }
    },
    mounted: function() {
    },
    computed: {

        changeFocused: function () {
            //console.log('computed changeFocused')

            let vo = this

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

        changeShowPanel: function () {
            //console.log('computed changeShowPanel')

            let vo = this

            //showPanelTrans
            vo.showPanelTrans = vo.showPanel

            return ''
        },

    },
    methods: {

        resize: function(msg) {
            //console.log('methods resize', msg)

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle, { returnObj: true })
            let defv = 2 //原本paddingStyle.v=2

            //ypb
            let ypb = cs.bottom - defv

            //h
            let h = get(vo, '$el.offsetHeight', 0)

            //ych
            let ych = (h - 26) - ypb * 2 //要扣掉padding-top與padding-bottom的影響, 故需減ypb*2
            ych /= 2 //底部高度差故得要/2

            //useDistY
            let def = 5
            vo.useDistY = ypb + ych + def
            //console.log('ypb', ypb, 'ych', ych, 'vo.useDistY ', vo.useDistY)

        },

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
