<template>
    <WPopup
        style="display:block;"
        :minWidth="minWidth"
        :maxWidth="maxWidth"
        :autoFitMinWidth="autoFitMinWidth"
        :autoFitMaxWidth="autoFitMaxWidth"
        :placementDist="placementDist"
        :editable="editable"
        :value="showPanelTrans"
        @input="(v)=>{updateShowPanel(v,'WPopup')}"
        :changeValueFromPopup="changeValueFromPopup"
        :changeFocusedFromPopup="changeFocusedFromPopup"
        :changeShowPanelFromPopup="changeShowPanelFromPopup"
    >

        <template v-slot:trigger>

            <div>
                <!-- 盡量不要讓display:flex暴露至外層 -->
                <div style="display:flex; align-items:center;">

                    <!-- 不能使用tabindex=0禁用駐點, 會導致點擊無法觸發windowMousedown與windowMouseup事件, 進而導致無法自動取消popup -->
                    <div
                        :style="`width:100%; _height:${height}px; _line-height:${height}px; color:${useTextColor}; ${useTextFontSize} vertical-align:middle; white-space:nowrap; text-overflow:ellipsis; cursor:pointer; outline:none;`"
                        _tabindex="0"
                        @focus="focusText"
                        v-if="mode==='select'"
                    >

                        <slot
                            name="select"
                            :item="value"
                            :text="valueTrans"
                        >
                            {{valueTrans}}
                        </slot>

                    </div>

                    <WTextCore
                        style="width:100%;"
                        :textFontSize="textFontSize"
                        :textColor="useTextColor"
                        :textAlign="textAlign"
                        :placeholder="placeholder"
                        :height="height"
                        :editable="editable"
                        :focused="focusedTrans"
                        :value="valueTrans"
                        @update:focused="(v)=>{updateFocused(v,'update:focused');triggerEvent('blur',value,null,'blur')}"
                        @enter="triggerEvent('enter',value,null,'enter')"
                        @input="updateValue"
                        @select="selectText"
                        v-if="mode==='suggest'"
                    ></WTextCore>

                    <div style="">
                        <div :style="`transform:rotate(${useRotateDeg+90}deg); transition:all 0.25s; cursor:pointer;`">
                            <WIcon
                                :icon="expansionIcon"
                                :color="uesExpansionIconColor"
                                :size="expansionIconSize"
                            ></WIcon>
                        </div>
                    </div>

                </div>
            </div>

        </template>

        <template v-slot:content>

            <div>
                <WDynamicList
                    :rows="items"
                    :filterKeywords="mode==='suggest'?valueTrans:''"
                    :viewHeightMax="maxHeight"
                    :itemMinHeight="defItemHeight"
                    :loadingText="loadingText"
                    :noResultsText="noResultsText"
                    :searchingText="searchingText"
                    :show="showPanelTrans"
                >
                    <template v-slot="props">

                        <div
                            :style="`transition:all 0.2s; cursor:pointer; outline:none; background:${useItemBackgroundColor}; color:${useItemTextColor}; ${useItemTextFontSize} ${useItemPadding}`"
                            tabindex="0"
                            @keyup.enter="clickItem(props.row,props.index)"
                            @click="clickItem(props.row,props.index)"
                            @mouseenter="(e)=>{let es=e.currentTarget.style; es.backgroundColor=useItemBackgroundColorHover; es.color=useItemTextColorHover;}"
                            @mouseleave="(e)=>{let es=e.currentTarget.style; es.backgroundColor=useItemBackgroundColor; es.color=useItemTextColor;}"
                            @focus="(e)=>{let es=e.currentTarget.style; es.backgroundColor=useItemBackgroundColorHover; es.color=useItemTextColorHover;}"
                            @blur="(e)=>{let es=e.currentTarget.style; es.backgroundColor=useItemBackgroundColor; es.color=useItemTextColor;}"
                        >

                            <slot
                                name="item"
                                :item="props.row"
                                :index="props.index"
                            >
                                <div>{{getText(props.row)}}</div>
                            </slot>

                        </div>

                    </template>
                </WDynamicList>
            </div>

        </template>

    </WPopup>
</template>

<script>
import { mdiPlay } from '@mdi/js'
import get from 'lodash/get'
import size from 'lodash/size'
import isobj from 'wsemi/src/isobj.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import replace from 'wsemi/src/replace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import WPopup from './WPopup.vue'
import WTextCore from './WTextCore.vue'
import WDynamicList from './WDynamicList.vue'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [mode='suggest'] 輸入模式字串，可有'suggest'與'select'，suggest代表可查詢並不綁定選項的下拉選單，select代表只能選擇的下拉選單，預設'suggest'
 * @vue-prop {Object|String|Number} value 輸入初始項目物件
 * @vue-prop {Array} [items=[]] 輸入項目陣列，預設[]
 * @vue-prop {Number|String} [height=''] 輸入項目高度數字或字串，數字單位為px，預設''
 * @vue-prop {String} [keyText='text'] 輸入取項目物件內之顯示用文字鍵值字串，預設'text'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [itemTextFontSize='0.8rem'] 輸入項目顯示文字大小字串，預設'0.8rem'
 * @vue-prop {String} [itemTextColor='grey darken-3'] 輸入項目文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [itemTextColorHover='light-blue darken-2'] 輸入項目文字Hover顏色字串，預設'light-blue darken-2'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入項目背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='light-blue lighten-5'] 輸入項目背景Hover顏色字串，預設'light-blue lighten-5'
 * @vue-prop {Object} [itemPaddingStyle={v:12,h:16}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:12,h:16}
 * @vue-prop {String} [expansionIcon=mdiPlay] 輸入顯隱圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設使用mdi的圖標(mdiPlay)
 * @vue-prop {Number} [expansionIconSize=18] 輸入顯隱圖標尺寸數字，單位為px，預設18
 * @vue-prop {String} [expansionIconColor='grey'] 輸入顯隱圖標顏色字串，預設'grey'
 * @vue-prop {Number} [maxHeight=200] 輸入顯示區最大高度數字，單位為px，預設200
 * @vue-prop {Number} [minWidth=null] 輸入最小寬度，單位為px，預設null
 * @vue-prop {Number} [maxWidth=null] 輸入最大寬度，單位為px，預設null
 * @vue-prop {Boolean} [autoFitMinWidth=true] 輸入是否使用驅動區寬度作為內容區之最小寬度布林值，預設true
 * @vue-prop {Boolean} [autoFitMaxWidth=true] 輸入是否使用驅動區寬度作為內容區之最大寬度布林值，預設true
 * @vue-prop {Number} [placementDist=5] 輸入彈窗距離觸發元素距離數字，單位為px，預設5
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [loadingText='Loading...'] 輸入載入中字串，預設'Loading...'
 * @vue-prop {String} [noResultsText='No results'] 輸入無過濾結果字串，預設'No results'
 * @vue-prop {String} [searchingText='Searching...'] 輸入搜索中字串，預設'Searching...'
 * @vue-prop {Number} [defItemHeight=43] 輸入按需顯示時各項目預設高度數字，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設43
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態布林值，預設false
 * @vue-prop {Boolean} [showPanel=false] 輸入是否顯示清單布林值，預設false
 */
export default {
    components: {
        WPopup,
        WTextCore,
        WDynamicList,
        WIcon,
    },
    props: {
        mode: {
            type: String,
            default: 'suggest',
        },
        value: {
            type: [Object, String, Number],
            default: null,
        },
        items: {
            type: Array,
            default: () => [],
        },
        height: {
            type: [Number, String],
            default: '',
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
        textAlign: {
            type: String,
            default: 'left',
        },
        itemTextFontSize: {
            type: String,
            default: '0.8rem',
        },
        itemTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        itemTextColorHover: {
            type: String,
            default: 'light-blue darken-2',
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
        expansionIcon: {
            type: String,
            default: mdiPlay,
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
        placementDist: {
            type: Number,
            default: 5,
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
            focusedTrans: false,
            showPanelTrans: false,
            valueTrans: null,
        }
    },
    computed: {

        changeFocusedFromPopup: function () {
            //console.log('computed changeFocusedFromPopup')

            let vo = this

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

        changeShowPanelFromPopup: function () {
            //console.log('computed changeShowPanelFromPopup')

            let vo = this

            //showPanelTrans
            if (size(vo.items) > 0) {
                vo.showPanelTrans = vo.showPanel
            }
            else {
                vo.showPanelTrans = false
            }

            return ''
        },

        changeValueFromPopup: function () {
            //console.log('computed changeValueFromPopup')

            let vo = this

            //valueTrans
            if (isobj(vo.value)) {
                vo.valueTrans = vo.value[vo.keyText]
            }
            else {
                vo.valueTrans = vo.value
            }

            return ''
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return color2hex(vo.textColor)
        },

        useItemBackgroundColor: function() {
            //console.log('computed useItemBackgroundColor')

            let vo = this

            return color2hex(vo.itemBackgroundColor)
        },

        useItemBackgroundColorHover: function() {
            //console.log('computed useItemBackgroundColorHover')

            let vo = this

            return color2hex(vo.itemBackgroundColorHover)
        },

        useItemTextFontSize: function() {
            let vo = this
            let s = vo.itemTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useItemTextColor: function() {
            //console.log('computed useItemTextColor')

            let vo = this

            return color2hex(vo.itemTextColor)
        },

        useItemTextColorHover: function() {
            //console.log('computed useItemTextColorHover')

            let vo = this

            return color2hex(vo.itemTextColorHover)
        },

        useItemPadding: function() {
            //console.log('computed useItemPadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.itemPaddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        uesExpansionIconColor: function() {
            //console.log('computed uesExpansionIconColor')

            let vo = this

            return color2hex(vo.expansionIconColor)
        },

        useRotateDeg: function() {
            //console.log('computed useRotateDeg')

            let vo = this

            return vo.showPanelTrans ? 180 : 0
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

        selectText: function() {
            // console.log('methods selectText')

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //check, 若由滑鼠進行範圍選擇, 離開時位於組件外時, 會被popup視為滑鼠點擊至內容區外側(於外面mousuup), 故會自動隱藏選單, 得重新顯示
            if (!vo.showPanelTrans) {

                //triggerAll
                vo.triggerAll({
                    showPanel: true,
                    focused: true,
                }, 'selectText')

            }

        },

        focusText: function() {
            // console.log('methods focusText')

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //check, 顯示中不需要在再次觸發
            if (vo.showPanelTrans) {
                return
            }

            //triggerAll
            vo.triggerAll({
                showPanel: true,
                focused: true,
            }, 'focusText')

        },

        updateFocused: function(focused, from) {
            // console.log('methods updateFocused', focused, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //triggerAll
            vo.triggerAll({
                // showPanel: false, //不能觸發隱藏, 會導致點擊項目時先被隱藏panel導致無法觸發click事件
                focused, //失去焦點時還是需要觸發focused變更事件
            }, 'updateFocused')

        },

        updateShowPanel: function(showPanel, from) {
            // console.log('methods updateShowPanel', showPanel, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //triggerAll
            vo.triggerAll({
                showPanel,
                focused: showPanel,
            }, 'updateShowPanel')

        },

        updateValue: function(value) {
            // console.log('methods updateValue', value)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //triggerAll
            vo.triggerAll({
                showPanel: true,
                focused: true,
            }, 'updateValue')

            //save
            vo.valueTrans = value

            //triggerEvent
            vo.triggerEvent('input', value, null, 'updateValue') //文字框查詢關鍵字

        },

        clickItem: function(item, kitem) {
            // console.log('methods clickItem', item, kitem)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //triggerAll
            vo.triggerAll({
                showPanel: false,
                focused: false,
            }, 'clickItem')

            //triggerEvent
            vo.triggerEvent('input', item, kitem, 'clickItem')

            //triggerEvent
            vo.triggerEvent('click-item', item, kitem, 'clickItem')

        },

        triggerEvent: function(name, item, kitem, from) {
            //console.log('methods triggerEvent', name, item, kitem, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit(name, item, kitem)

            })

        },

        triggerAll: function(obj, from) {
            // console.log('methods triggerAll', obj, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //param
            let showPanel = get(obj, 'showPanel', null)
            let focused = get(obj, 'focused', null)

            // //因重新顯示時會因沒觸發高度或捲軸變化, 需自行調用WDynamicList的refreshAndTriggerEvent重新渲染
            // if (showPanel) {

            //     //t
            //     let t = get(vo, '$refs.wds.refreshAndTriggerEvent', null)
            //     if (t) {
            //         t('showPanel')
            //     }

            // }

            //focused
            if (isbol(focused) && vo.focusedTrans !== focused) {
                // console.log('triggerAll focused', focused, 'from', from)

                //save
                vo.focusedTrans = focused

                //triggerEvent
                vo.triggerEvent('update:focused', focused, null, 'triggerAll')

            }

            //showPanel
            if (isbol(showPanel) && vo.showPanelTrans !== showPanel) {
                // console.log('triggerAll showPanel', showPanel, 'from', from)

                //save
                if (size(vo.items) > 0) {
                    vo.showPanelTrans = showPanel
                }
                else {
                    vo.showPanelTrans = false
                }

                //triggerEvent
                vo.triggerEvent('update:showPanel', showPanel, null, 'triggerAll')

            }

        },

    },
}
</script>

<style scoped>
</style>

