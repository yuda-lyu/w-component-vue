<template>
    <div
        :changeValue="changeValue"
    >

        <transition-group>
            <template v-for="(item,kitem) in itemsTrans">

                <!-- 要把原生拖曳功能關閉draggable=false -->
                <div
                    class="WGroupTags-Trans"
                    style="display:inline-block;"
                    :key="`${isObjValue?o2j(item):item}`"
                    :dragindex="kitem"
                    v-domdragdrop="isDraggable?getDgOpt():null"
                    @domdragdrop="dragdrop"
                    draggable="false"
                >
                    <WButtonChip
                        :style="`${useMarginStyle}`"
                        :text="isObjValue?get(item,`${keyText}`):item"
                        :tooltip="isObjValue?get(item,`${keyTooltip}`):null"
                        :icon="isObjValue?get(item,`${keyIcon}`):icon"
                        :iconColor="getColor(item,'iconColor')"
                        :iconColorHover="getColor(item,'iconColorHover')"
                        :iconColorActive="getColor(item,'iconColorActive')"
                        :iconSize="iconSize"
                        :progColor="getColor(item,'progColor')"
                        :progBackgroundColor="getColor(item,'progBackgroundColor')"
                        :textColor="getColor(item,'textColor')"
                        :textColorHover="getColor(item,'textColorHover')"
                        :textColorActive="getColor(item,'textColorActive')"
                        :textFontSize="textFontSize"
                        :borderRadius="borderRadius"
                        :borderColor="getColor(item,'borderColor')"
                        :borderColorHover="getColor(item,'borderColorHover')"
                        :borderColorActive="getColor(item,'borderColorActive')"
                        :backgroundColor="getColor(item,'backgroundColor')"
                        :backgroundColorHover="getColor(item,'backgroundColorHover')"
                        :backgroundColorActive="getColor(item,'backgroundColorActive')"
                        :shadow="shadow"
                        :shadowStyle="shadowStyle"
                        :shadowActive="shadowActive"
                        :shadowActiveStyle="shadowActiveStyle"
                        :paddingStyle="paddingStyle"
                        :shiftLeft="shiftLeft"
                        :shiftRight="shiftRight"
                        :active="isActive(item)"
                        :close="editable && editableClose"
                        :editable="editable"
                        @click="(msg)=>{clickChip(msg,item,kitem)}"
                        @click-close="clickRemoveBtn(item,kitem)"
                    >
                        <slot
                            name="item"
                            :item="item"
                            :kitem="kitem"
                            :active="isActive(item)"
                        ></slot>
                    </WButtonChip>
                </div>

            </template>
        </transition-group>

        <template v-if="enableNodata && itemsTrans.length===0">

            <WButtonChip
                :style="`${useMarginStyle}`"
                _key=""
                :text="nodata"
                :tooltip="nodata"
                :icon="icon"
                :iconColor="iconColor"
                :iconColorHover="iconColorHover"
                :iconColorActive="iconColorActive"
                :iconSize="iconSize"
                :textColor="textColor"
                :textColorHover="textColorHover"
                :textColorActive="textColorActive"
                :textFontSize="textFontSize"
                :borderRadius="borderRadius"
                :borderColor="borderColor"
                :borderColorHover="borderColorHover"
                :borderColorActive="borderColorActive"
                :backgroundColor="backgroundColor"
                :backgroundColorHover="backgroundColorHover"
                :backgroundColorActive="backgroundColorActive"
                :shadow="shadow"
                :shadowStyle="shadowStyle"
                :shadowActive="shadowActive"
                :shadowActiveStyle="shadowActiveStyle"
                :paddingStyle="paddingStyle"
                :shiftLeft="shiftLeft"
                :shiftRight="shiftRight"
                _close="editable && editableClose"
                :editable="true"
                _click="(msg)=>{clickChip(msg,item,kitem)}"
                _click-close="clickRemoveBtn(item,kitem)"
            >
                <slot
                    name="item"
                    :item="null"
                    :kitem="null"
                    :active="false"
                ></slot>
            </WButtonChip>

        </template>

        <div :style="`display:inline-block; vertical-align:middle;`" v-if="editable && editableInput">
            <slot name="input">

                <template v-if="useMode==='button'">
                    <WButtonChip
                        :style="`${useMarginStyle}`"
                        :icon="addButtonIcon"
                        :iconColor="addButtonIconColor"
                        :iconColorHover="addButtonIconColorHover"
                        :text="addButtonText"
                        :textColor="addButtonTextColor"
                        :textColorHover="addButtonTextColorHover"
                        :backgroundColor="addButtonBackgroundColor"
                        :backgroundColorHover="addButtonBackgroundColorHover"
                        :tooltip="addButtonTooltip"
                        :paddingStyle="{v:3,h:12}"
                        _shiftLeft="shiftLeft"
                        _shiftRight="shiftRight"
                        @click="clickAddBtn"
                    ></WButtonChip>
                </template>

                <template v-else>
                    <WTextSuggest
                        :style="`${useMarginStyle} width:${inputTextWidth}px;`"
                        :expansionIconColor="inputExpansionIconColor"
                        :keyText="inputKeyText"
                        :textFontSize="inputTextFontSize"
                        :textColor="inputTextColor"
                        :itemTextColor="suggectItemTextColor"
                        :itemTextColorHover="suggectItemTextColorHover"
                        :itemFontSize="suggectItemFontSize"
                        :itemBackgroundColor="suggectItemBackgroundColor"
                        :itemBackgroundColorHover="suggectItemBackgroundColorHover"
                        :shadow="false"
                        :borderColor="inputTextBorderColor"
                        :borderColorHover="inputTextBorderColorHover"
                        :borderColorFocus="inputTextBorderColorFocus"
                        :backgroundColor="inputTextBackgroundColor"
                        :backgroundColorHover="inputTextBackgroundColorHover"
                        :backgroundColorFocus="inputTextBackgroundColorFocus"
                        :showExpansionIcon="false"
                        :rightIcon="inputTextButtonIcon"
                        :rightIconColor="inputTextButtonColor"
                        :rightIconColorHover="inputTextButtonColorHover"
                        :rightIconColorFocus="inputTextButtonColorFocus"
                        :rightIconTooltip="inputTextButtonTooltip"
                        :items="suggests"
                        :placeholder="placeholder"
                        :noResultsText="noResultsText"
                        v-model="userInput"
                        @enter="clickAddBtn"
                        @click-right="clickAddBtn"
                    >

                        <template v-slot:item="props">

                            <slot
                                name="suggest"
                                :item="props.item"
                                :index="props.index"
                            >
                                <div>{{getSuggestText(props.item)}}</div>
                            </slot>

                        </template>

                    </WTextSuggest>
                </template>

            </slot>
        </div>

    </div>
</template>

<script>
import { mdiPlusCircle } from '@mdi/js'
import get from 'lodash-es/get.js'
import each from 'lodash-es/each.js'
import cloneDeep from 'lodash-es/cloneDeep.js'
import trim from 'lodash-es/trim.js'
import every from 'lodash-es/every.js'
import pullAt from 'lodash-es/pullAt.js'
import filter from 'lodash-es/filter.js'
import isEqual from 'lodash-es/isEqual.js'
import size from 'lodash-es/size.js'
import genID from 'wsemi/src/genID.mjs'
import o2j from 'wsemi/src/o2j.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import genPm from 'wsemi/src/genPm.mjs'
import WButtonChip from './WButtonChip.vue'
import WTextSuggest from './WTextSuggest.vue'
import parseSpace from '../js/parseSpace.mjs'
import domDragDrop from '../js/domDragDrop.mjs'


/**
 * @vue-prop {Array} [value=[]] 輸入項目的字串陣列或物件陣列，預設[]
 * @vue-prop {Boolean} [enableActive=false] 輸入項目是否使用點擊成為活耀狀態布林值，預設false
 * @vue-prop {Object} [valueActive=null] 輸入活耀項目物件，預設null
 * @vue-prop {String} [keyText='text'] 輸入當項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyIcon='icon'] 輸入當項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {String} [keyTooltip='tooltip'] 輸入當項目為物件時，存放提示之欄位字串，預設'tooltip'
 * @vue-prop {Boolean} [enableColorsFromItem=false] 輸入當當項目為物件時是否使用其內相關顏色設定用以覆蓋預設值布林值，預設false
 * @vue-prop {String} [icon=''] 輸入左側圖標字串，預設''
 * @vue-prop {String} [iconColor='black'] 輸入圖標顏色字串，預設'black'
 * @vue-prop {String} [iconColorHover='grey darken-3'] 輸入滑鼠移入時圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [iconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [progColor='rgba(150,150,150,0.4)'] 輸入進度條背景顏色字串，預設'rgba(150,150,150,0.4)'
 * @vue-prop {String} [progBackgroundColor='rgba(150,150,150,0.075)'] 輸入進度條顏色字串，預設'rgba(150,150,150,0.075)'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.25)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.25)'
 * @vue-prop {String} [backgroundColorActive='orange'] 輸入主動模式時背景顏色字串，預設'orange'
 * @vue-prop {Object} [marginStyle={top:10,bottom:10,left:0,right:10}] 輸入外距設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{top:10,bottom:10,left:0,right:10}
 * @vue-prop {Boolean} [shadow=true] 輸入是否顯示陰影布林值，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [shadowActive=true] 輸入主動模式時是否顯示陰影布林值，預設true
 * @vue-prop {String} [shadowActiveStyle=''] 輸入主動模式時陰影顏色字串，預設值詳見props
 * @vue-prop {Object} [paddingStyle={v:3,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:3,h:15}
 * @vue-prop {Number} [shiftLeft=0] 輸入左側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如圖標與左側邊框距離，單位px，預設0
 * @vue-prop {Number} [shiftRight=0] 輸入右側內寬平移距離數字，會對paddingStyle設定再添加，可調整例如關閉圖標與右側邊框距離，單位px，預設0
 * @vue-prop {Array} [suggests=[]] 輸入可選(建議)項目陣列，預設[]
 * @vue-prop {String} [keySuggestText='text'] 輸入當可選(建議)項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [noResultsText='No results'] 輸入無過濾結果字串，預設'No results'
 * @vue-prop {String} [addMode='auto'] 輸入新增模式字串，可使用'auto'、'input'、'button'，預設'auto'
 * @vue-prop {Number} [inputTextWidth=150] 輸入新增按鈕或輸入框區寬度數字，單位px，預設150
 * @vue-prop {String} [inputKeyText='text'] 輸入若可選(建議)項目為元素陣列時，輸入框之提取選擇項目物件內鍵值字串，預設'text'
 * @vue-prop {String} [inputTextFontSize='0.85rem'] 輸入輸入框文字大小字串，預設'0.85rem'
 * @vue-prop {String} [inputTextColor='black'] 輸入輸入框文字顏色字串，預設'black'
 * @vue-prop {String} [inputTextBackgroundColor='white'] 輸入輸入框背景顏色字串，預設'white'
 * @vue-prop {String} [inputTextBackgroundColorHover='white'] 輸入滑鼠移入時輸入框背景顏色字串，預設'white'
 * @vue-prop {String} [inputTextBackgroundColorFocus='grey lighten-5'] 輸入取得焦點時輸入框背景顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [inputTextBorderColor='grey lighten-1'] 輸入輸入框邊框顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextBorderColorHover='grey'] 輸入滑鼠移入時輸入框邊框字串，預設'grey'
 * @vue-prop {String} [inputTextBorderColorFocus='grey'] 輸入取得焦點時輸入框文字邊框字串，預設'grey'
 * @vue-prop {String} [inputTextButtonIcon=mdiPlusCircle] 輸入新增按鈕圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiPlusCircle
 * @vue-prop {String} [inputTextButtonColor='grey lighten-1'] 輸入輸入框按鈕顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextButtonColorHover='grey'] 輸入滑鼠移入時輸入框按鈕顏色字串，預設'grey'
 * @vue-prop {String} [inputTextButtonColorFocus='grey'] 輸入取得焦點時輸入框按鈕顏色字串，預設'grey'
 * @vue-prop {String} [inputTextButtonTooltip='Add'] 輸入輸入框右側按鈕提示文字字串，預設'Add'
 * @vue-prop {String} [inputExpansionIconColor='grey'] 輸入輸入框右側圖標顏色字串，預設'grey'
 * @vue-prop {String} [suggectItemTextColor='grey darken-3'] 輸入輸入框下拉選單項目文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [suggectItemTextColorHover='light-blue darken-2'] 輸入輸入框下拉選單項目文字Hover顏色字串，預設'light-blue darken-2'
 * @vue-prop {String} [suggectItemFontSize='0.9rem'] 輸入輸入框下拉選單項目顯示文字大小字串，預設'0.9rem'
 * @vue-prop {String} [suggectItemBackgroundColor='white'] 輸入輸入框下拉選單項目背景顏色字串，預設'white'
 * @vue-prop {String} [suggectItemBackgroundColorHover='light-blue lighten-5'] 輸入輸入框下拉選單項目背景Hover顏色字串，預設'light-blue lighten-5'
 * @vue-prop {String} [addButtonText='Add'] 輸入新增按鈕文字字串，預設'Add'
 * @vue-prop {String} [addButtonTextColor='black'] 輸入新增按鈕文字顏色字串，預設'black'
 * @vue-prop {String} [addButtonTextColorHover='black'] 輸入滑鼠移入時新增按鈕文字顏色字串，預設'black'
 * @vue-prop {String} [addButtonIcon=mdiPlusCircle] 輸入新增按鈕圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiPlusCircle
 * @vue-prop {String} [addButtonIconColor='pink darken-1'] 輸入新增按鈕圖標顏色字串，預設'pink darken-1'
 * @vue-prop {String} [addButtonIconColorHover='pink darken-1'] 輸入滑鼠移入時新增按鈕圖標顏色字串，預設'pink darken-1'
 * @vue-prop {String} [addButtonBackgroundColor='white'] 輸入新增按鈕背景顏色字串，預設'white'
 * @vue-prop {String} [addButtonBackgroundColorHover='white'] 輸入滑鼠移入時新增按鈕背景顏色字串，預設'white'
 * @vue-prop {String} [addButtonTooltip='Add'] 輸入新增按鈕提示文字字串，預設'Add'
 * @vue-prop {Boolean} [addWhenInputByOutside=false] 輸入當指定或自動使用input並新增時，是否強制使用click-add事件進行新增處理布林值，預設false
 * @vue-prop {Boolean} [closeWithInterceptor=false] 輸入是否通過攔截器來決定是否進行關閉布林值，此處之攔截器係用promise來控制，當使用者點擊關閉時可先行確認或提示。當closeWithInterceptor=true時，於click-close事件所接收物件資訊中的pm，使用pm.resolve()則代表確定關閉，反之pm.reject()則取消關閉事件，預設false
 * @vue-prop {Boolean} [draggable=true] 輸入是否可拖曳模式布林值，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [editableClose=true] 輸入editable=true時是否顯示關閉按鈕布林值，預設true
 * @vue-prop {Boolean} [editableInput=true] 輸入editable=true時是否使用預設的slot input布林值，預設true
 * @vue-prop {Boolean} [enableCloseEventOnly=false] 輸入點擊移除按鈕時是否僅開啟關閉事件，代表不自動刪除項目，需通過監聽關閉事件@click-close自行處理刪除功能，預設false
 * @vue-prop {Boolean} [enableNodata=false] 輸入是否使用nodata展示布林值，預設false
 * @vue-prop {String} [nodata='Empty'] 輸入無任何字串陣列時的預設文字字串，預設'Empty'
 */
export default {
    directives: {
        domdragdrop: domDragDrop(),
    },
    components: {
        WButtonChip,
        WTextSuggest,
    },
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        enableActive: {
            type: Boolean,
            default: false,
        },
        valueActive: {
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
        keyTooltip: {
            type: String,
            default: 'tooltip',
        },
        enableColorsFromItem: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: '',
        },
        iconColor: {
            type: String,
            default: 'black',
        },
        iconColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        iconColorActive: {
            type: String,
            default: 'white',
        },
        iconSize: {
            type: Number,
            default: 22,
        },
        progColor: {
            type: String,
            default: 'rgba(150,150,150,0.4)',
        },
        progBackgroundColor: {
            type: String,
            default: 'rgba(150,150,150,0.075)',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        textColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        textColorActive: {
            type: String,
            default: 'white',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderColor: {
            type: String,
            default: 'transparent',
        },
        borderColorHover: {
            type: String,
            default: 'transparent',
        },
        borderColorActive: {
            type: String,
            default: 'transparent',
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        backgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.25)',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange',
        },
        marginStyle: {
            type: Object,
            default: () => {
                return {
                    top: 10,
                    bottom: 10,
                    left: 0,
                    right: 10,
                }
            },
        },
        shadow: {
            type: Boolean,
            //default: false,
            default: true,
        },
        shadowStyle: {
            type: String,
            // default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
            //使用黑色短陰影比較符合chip(tag)形象
            default: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        },
        shadowActive: {
            type: Boolean,
            default: true,
        },
        shadowActiveStyle: {
            type: String,
            default: '0 12px 20px -10px {backgroundColorActiveAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorActiveAlpha=0.2}',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 3,
                    h: 15,
                }
            },
        },
        shiftLeft: {
            type: Number,
            default: 0,
        },
        shiftRight: {
            type: Number,
            default: 0,
        },
        suggests: {
            type: Array,
            default: () => [],
        },
        keySuggestText: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        noResultsText: {
            type: String,
            default: 'No results',
        },
        addMode: {
            type: String,
            default: 'auto', //auto, input, button
        },
        inputTextWidth: {
            type: Number,
            default: 150,
        },
        inputKeyText: {
            type: String,
            default: 'text',
        },
        inputTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        inputTextColor: {
            type: String,
            default: 'black',
        },
        inputTextBackgroundColor: {
            type: String,
            default: 'white',
        },
        inputTextBackgroundColorHover: {
            type: String,
            default: 'white',
        },
        inputTextBackgroundColorFocus: {
            type: String,
            default: 'grey lighten-5',
        },
        inputTextBorderColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextBorderColorHover: {
            type: String,
            default: 'grey',
        },
        inputTextBorderColorFocus: {
            type: String,
            default: 'grey',
        },
        inputTextButtonIcon: {
            type: String,
            default: mdiPlusCircle,
        },
        inputTextButtonColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextButtonColorHover: {
            type: String,
            default: 'grey',
        },
        inputTextButtonColorFocus: {
            type: String,
            default: 'grey',
        },
        inputTextButtonTooltip: {
            type: String,
            default: 'Add',
        },
        inputExpansionIconColor: {
            type: String,
            default: 'grey',
        },
        suggectItemTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        suggectItemTextColorHover: {
            type: String,
            default: 'light-blue darken-2',
        },
        suggectItemFontSize: {
            type: String,
            default: '0.8rem',
        },
        suggectItemBackgroundColor: {
            type: String,
            default: 'white',
        },
        suggectItemBackgroundColorHover: {
            type: String,
            default: 'light-blue lighten-5',
        },
        addButtonText: {
            type: String,
            default: 'Add',
        },
        addButtonTextColor: {
            type: String,
            default: 'black',
        },
        addButtonTextColorHover: {
            type: String,
            default: 'black',
        },
        addButtonIcon: {
            type: String,
            default: mdiPlusCircle,
        },
        addButtonIconColor: {
            type: String,
            default: 'pink darken-1',
        },
        addButtonIconColorHover: {
            type: String,
            default: 'pink darken-1',
        },
        addButtonBackgroundColor: {
            type: String,
            default: 'white',
        },
        addButtonBackgroundColorHover: {
            type: String,
            default: 'white',
        },
        addButtonTooltip: {
            type: String,
            default: 'Add',
        },
        addWhenInputByOutside: {
            type: Boolean,
            default: false,
        },
        closeWithInterceptor: {
            type: Boolean,
            default: false,
        },
        draggable: {
            type: Boolean,
            default: true,
        },
        editable: {
            type: Boolean,
            default: true,
        },
        editableClose: {
            type: Boolean,
            default: true,
        },
        editableInput: {
            type: Boolean,
            default: true,
        },
        enableCloseEventOnly: {
            type: Boolean,
            default: false,
        },
        enableNodata: {
            type: Boolean,
            default: false,
        },
        nodata: {
            type: String,
            default: 'Empty',
        },
    },
    data: function() {
        return {
            get,
            o2j,

            mdiPlusCircle,

            dgGroupKey: null,

            itemsTrans: [],
            itemActiveTrans: null,
            userInput: '',

        }
    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //save
            vo.itemsTrans = cloneDeep(vo.value)
            vo.itemActiveTrans = cloneDeep(vo.valueActive)

            return ''
        },

        isObjValue: function() {
            //console.log('computed isObjValue')

            let vo = this

            //check, 因every([])=true
            if (size(vo.itemsTrans) === 0) {
                return false
            }
            return every(vo.itemsTrans, (v) => {
                return isobj(v)
            })
        },

        useMode: function() {
            //console.log('computed useMode')

            let vo = this

            let mode = ''
            if (vo.addMode === 'auto') {
                mode = vo.isObjValue ? 'button' : 'input'
            }
            else if (vo.addMode === 'button') {
                mode = 'button'
            }
            else {
                mode = 'input'
            }

            return mode
        },

        isDraggable: function() {
            //console.log('computed isDraggable')

            let vo = this

            return vo.draggable && vo.editable
        },

        useMarginStyle: function() {
            //console.log('computed useMarginStyle')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.marginStyle)

            //margin
            let margin = `margin:${cs};`

            return margin
        },

    },
    methods: {

        getDgGroupKey: function() {
            //console.log('methods getDgGroupKey')

            let vo = this

            //dgGroupKey
            if (vo.dgGroupKey === null) {
                vo.dgGroupKey = `r${genID()}`
            }

            return vo.dgGroupKey
        },

        getDgOpt: function() {
            //console.log('methods getDgOpt')

            let vo = this

            //opt, 使用vue directive初始化時於mounted之前就需要group值, 此代表此組件內可互相拖曳之DOM群組識別碼, 故通過function自動取得group
            let opt = {
                group: vo.getDgGroupKey(),
                //attIdentify
                attIndex: 'dragindex',
                attGroup: 'draggroup',
                previewOpacity: 1,
                previewDisabledOpacity: 0.5,
                previewBorderWidth: 0,
                //previewBorderColor
                previewBackground: 'transparent',
                timeDragStartDelay: 1,
            }

            return opt
        },

        getColor: function(item, keyColor) {
            //console.log('methods getColor', item, keyColor)

            let vo = this

            //c
            let c = null
            if (vo.enableColorsFromItem && vo.isObjValue) {
                c = get(item, keyColor, null)
            }
            if (!c) {
                c = get(vo, keyColor, null)
            }

            return c
        },

        isActive: function(item) {
            //console.log('methods isActive', item)

            let vo = this

            //check
            if (!vo.enableActive) {
                return false
            }

            return isEqual(vo.itemActiveTrans, item)
        },

        dragdrop: function(msg) {
            // console.log('methods dragdrop', msg)

            let vo = this

            if (msg.evName === 'drop') {

                //startInd, endInd
                let { startInd, endInd } = msg

                //check
                if (startInd === endInd) {
                    return
                }

                //cloneDeep
                let itemsNew = cloneDeep(vo.itemsTrans)

                //move
                if (startInd > endInd) { //往前拖曳, 先移除原始拖曳項目, 再於放下位置插入該拖曳項目

                    //pullAt
                    let src = pullAt(itemsNew, startInd)[0]

                    //array insert
                    itemsNew.splice(endInd, 0, src) //拖曳項目是要放在目標項目之前, 故不能+1

                }
                else { //往後拖曳, 先複製原始拖曳項目, 並於放下位置插入, 再刪除原始拖曳項目

                    //cloneDeep
                    let src = cloneDeep(itemsNew[startInd])

                    //array insert
                    itemsNew.splice(endInd + 1, 0, src) //拖曳項目是要放在目標項目之後, 故需要+1

                    //pullAt
                    pullAt(itemsNew, startInd)

                }

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('input', itemsNew)

                })

            }

        },

        getSuggestText: function(value) {
            //console.log('methods getSuggestText', getSuggestText)

            let vo = this

            //valueTrans
            if (isobj(value)) {
                return value[vo.keySuggestText]
            }
            else {
                return value
            }

        },

        clickChip: function(msgTemp, item, kitem) {
            //console.log('methods clickChip', msgTemp, item, kitem)

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //enableActive
                if (vo.enableActive) {

                    //emit
                    vo.$emit('update:valueActive', item)

                }

                //msg
                let msg = {
                    ...msgTemp,
                    item,
                    kitem,
                }

                //emit
                vo.$emit('click', msg)

            })

        },

        clickAddBtn: function () {
            //console.log('methods clickAddBtn')

            let vo = this

            //useMode
            if (vo.useMode === 'button') {
                //交由外部自行處理push

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('click-add', null)

                })

            }
            else { //vo.useMode === 'input'

                //check
                if (trim(vo.userInput) === '') {
                    return
                }

                //addWhenInputByOutside || isObjValue
                if (vo.addWhenInputByOutside || vo.isObjValue) {
                    //若指定由外部處理push, 或若為obj則須交由外部處理push

                    //$nextTick
                    vo.$nextTick(() => {

                        //emit
                        vo.$emit('click-add', vo.userInput)

                        //clear
                        vo.userInput = ''

                    })

                }
                else {

                    //check
                    let r = filter(vo.itemsTrans, (v) => {
                        return isEqual(v, vo.userInput)
                    })
                    if (size(r) >= 1) {

                        //$nextTick
                        vo.$nextTick(() => {

                            //emit
                            vo.$emit('error', 'duplicate values')

                            //clear
                            vo.userInput = ''

                        })

                        return
                    }

                    //$nextTick
                    vo.$nextTick(() => {

                        //push
                        vo.itemsTrans.push(trim(vo.userInput))

                        //emit
                        vo.$emit('input', vo.itemsTrans)

                        //emit
                        vo.$emit('click-add', vo.userInput)

                        //clear
                        vo.userInput = ''

                    })

                }

            }

        },

        pull: function(ar, kitem) {
            let art = []
            each(ar, (v, k) => {
                if (k !== kitem) {
                    art.push(v)
                }
            })
            return art
        },

        clickRemoveBtn: function (item, kitem) {
            //console.log('methods clickRemoveBtnPromise', item, kitem)

            let vo = this

            //check
            if (vo.enableCloseEventOnly) {

                //$nextTick
                vo.$nextTick(() => {

                    //msg
                    let msg = {
                        item,
                        kitem,
                    }

                    //emit
                    vo.$emit('click-close', msg)

                })

                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //closeWithInterceptor
                if (vo.closeWithInterceptor) {

                    //pm
                    let pm = genPm()

                    //msg, 給予pm使能於外部中止關閉事件
                    let msg = {
                        item,
                        kitem,
                        pm,
                    }

                    //emit
                    vo.$emit('click-close', msg)

                    //pm
                    pm
                        .then(() => { //確認關閉
                            //console.log('pm then')

                            //enableActive and isActive
                            if (vo.enableActive && vo.isActive(item)) {

                                //emit
                                vo.$emit('update:valueActive', null)

                            }

                            //itemsNew
                            let itemsNew = vo.pull(vo.itemsTrans, kitem)

                            //emit
                            vo.$emit('input', itemsNew)

                        })
                        .catch((msg) => { //取消關閉
                            //console.log('pm catch', msg)
                        })

                }
                else {

                    //msg
                    let msg = {
                        item,
                        kitem,
                    }

                    //emit
                    vo.$emit('click-close', msg)

                    //enableActive and isActive
                    if (vo.enableActive && vo.isActive(item)) {

                        //emit
                        vo.$emit('update:valueActive', null)

                    }

                    //itemsNew
                    let itemsNew = vo.pull(vo.itemsTrans, kitem)

                    //emit
                    vo.$emit('input', itemsNew)

                }

            })

        },

    },
}
</script>

<style scoped>
.WGroupTags-Trans { /* transition-group必須使用class */
    transition: all 0.5s;
}
</style>
