<template>
    <!-- 拖曳區可能超過組件區域外, 故得使用overflow:hidden -->
    <div
        style="position:relative; overflow:hidden;"
        :changeDefaultDisplayLevel="changeDefaultDisplayLevel"
        :changeDraggableAndOperatable="changeDraggableAndOperatable"
        :changeFilterKeyWords="changeFilterKeyWords"
    >

        <WDynamicList
            ref="wdl"
            :viewHeightMax="viewHeightMax"
            :itemMinHeight="defItemHeight"
            :itemsPreload="itemsPreload"
            :searchEmpty="searchEmpty"
            :separatorHeight="separatorHeight"
            :separatorColor="separatorColor"
            :show="show"
            @change-view-items="changeViewItems"
        >
            <template v-slot="props">

                <!-- 記得要:key, 使DOM可被唯一標記識別, 此為避免捲動按需顯示時, 因圖標有顯隱(2方向), 瞬間被Vue切換導致transition轉動問題 -->
                <!-- wdl template內第1層元素高度需設定min-height不能用height, 因會偵測此元素高度來按需顯示, 用height會導致元素高度被寫死無法由slot撐開 -->
                <!-- 要把原生拖曳功能關閉draggable=false -->
                <div
                    :key="`wt-${props.index}`"
                    :style="`min-height:${iconHeight}px; ${draggable?'user-select:none;':''}`"
                    :dragindex="props.index"
                    v-domdragdrop="isDraggable?getDgOpt():null"
                    @domdragdrop="dragdrop"
                    draggable="false"
                    @mouseenter="(e)=>{$emit('mouseenter',getEmitData(e,props))}"
                    @mouseleave="(e)=>{$emit('mouseleave',getEmitData(e,props))}"
                    @click="(e)=>{$emit('click',getEmitData(e,props))}"
                >
                    <div :style="`position:relative; display:table; ${usePadding}`">

                        <div style="position:absolute; top:2px; right:8px;" v-if="operatable">

                            <WPopup
                                :isolated="true"
                            >

                                <template v-slot:trigger>
                                    <WButtonCircle
                                        :icon="mdiDotsVertical"
                                        :backgroundColor="operateBtnBackgroundColor"
                                        :backgroundColorHover="operateBtnBackgroundColorHover"
                                        :backgroundColorFocus="operateBtnBackgroundColorFocus"
                                        :shadow="false"
                                        :tooltip="operateBtnTooltip"
                                    ></WButtonCircle>
                                </template>

                                <template v-slot:content="propsOperate">
                                    <!-- 因位於WDynamicList內位置太複雜popup.js無法順利計算寬高, 得由外部指定寬高 -->
                                    <WListVertical
                                        :style="`height:${operatePanelHeight}px; width:${operatePanelWidth}px;`"
                                        :items="useOperateItems"
                                        :itemTextFontSize="'0.8rem'"
                                        :useActive="false"
                                        :paddingStyle="operateItemPaddingStyle"
                                        :itemBackgroundColor="operateItemBackgroundColor"
                                        :itemBackgroundColorHover="operateItemBackgroundColorHover"
                                        :itemTextColor="operateItemTextColor"
                                        :itemTextColorHover="operateItemTextColorHover"
                                        :itemIconSize="operateItemIconSize"
                                        :itemIconColor="operateItemIconColor"
                                        :itemIconColorHover="operateItemIconColorHover"
                                        @click="(item)=>{propsOperate.funHide();clickOperateItem({opItem:item,rowItem:props})}"
                                    ></WListVertical>
                                </template>

                            </WPopup>


                        </div>

                        <!-- display:table內各元素需使用padding撐開寬度避免被壓縮 -->

                        <div :style="`display:table-cell; vertical-align:top; padding-right:${getLevel(props.row)*useIndent}px;`"></div>

                        <div :style="`display:table-cell; vertical-align:top; padding-right:${separation}px;`"></div>

                        <div :style="`display:table-cell; vertical-align:top; padding:0px ${separation}px;`">
                            <WTreeIconToggle
                                :style="`width:24px; height:${iconHeight}px;`"
                                :dir="`${props.row.unfolding?'bottom':'right'}`"
                                :iconColor="iconToggleColor"
                                :iconBackgroundColor="iconToggleBackgroundColor"
                                :iconBackgroundColorHover="iconToggleBackgroundColorHover"
                                @click.stop="toggleItems(props.row)"
                                v-if="hasChildren(props.index)"
                            ></WTreeIconToggle>
                            <div style="padding-right:24px;" v-else></div>
                        </div>

                        <!-- 因顯隱圖標比較小而勾選圖標比較大, 讓separation全灌到padding-right處使排版比較均勻 -->
                        <div :style="`display:table-cell; vertical-align:top; padding:0px ${2*separation}px 0px 0px;`" v-if="selectable">
                            <WTreeIconCheckbox
                                :style="`height:${iconHeight}px;`"
                                :mode="props.row.checked"
                                :editable="getEditable(props.row.item)"
                                :uncheckedColor="iconUncheckedColor"
                                :uncheckedDisabledColor="iconUncheckedDisabledColor"
                                :checkedColor="iconCheckedColor"
                                :checkedDisabledColor="iconCheckedDisabledColor"
                                :checkedPartiallyColor="iconCheckedPartiallyColor"
                                :checkedPartiallyDisabledColor="iconCheckedPartiallyDisabledColor"
                                @click="checkItems(props.row)"
                            ></WTreeIconCheckbox>
                        </div>

                        <!-- 給予width:100%使slot區可自動展開寬度至組件寬 -->
                        <div :style="`display:table-cell; vertical-align:top; height:${iconHeight}px; width:100%;`">

                            <slot
                                name="item"
                                :index="props.index"
                                :data="props.row.item"
                                :row="props.row"
                                :keyPrimary="keyPrimary"
                                :keyText="keyText"
                                :keyChildren="keyChildren"
                                :setDataByPathAndValue="setDataByPathAndValue"
                            >
                                <!-- 得使用min-height否則無法撐開高度 -->
                                <div :style="`min-height:${iconHeight}px; display:flex; align-items:center;`">
                                    {{getText(props.row.item)}}
                                </div>
                            </slot>

                        </div>

                    </div>
                </div>

            </template>
        </WDynamicList>

        <div
            :style="`position:absolute; z-index:1; pointer-events:none; left:${dgTipLeft}px; top:${dgTipTop}px; _width:calc( 100% - 8px ); _overflow-x:hidden;`"
            :msg="`需使用pointer-events:none;禁用事件, 避免拖曳時因接觸此元素時出現enter與leave`"
            v-if="dgTipMode!==''"
        >
            <template v-if="dgTipMode==='lineTop'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useDgInsertBackgroundColor}; border-top:1px solid ${useDgInsertLineColor};`"></div>
            </template>
            <template v-else-if="dgTipMode==='lineBottom'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useDgInsertBackgroundColor}; border-bottom:1px solid ${useDgInsertLineColor};`"></div>
            </template>
            <template v-else-if="dgTipMode==='block'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${uesDgBelongBackgroundColor};`"></div>
            </template>
            <template v-else-if="dgTipMode==='disabled'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background-color:${useDgTextDisabledBackgroundColor};`">
                    <div :style="`height:${dgTipHeight}px; display:flex; align-items:center;`">
                        <div :style="`color:${useDgTextDisabledColor}; padding-left:${dgTextDisabledPaddingLeft}px; font-size:${dgTextDisabledFontSize};`">
                            {{dgTextDisabled}}
                        </div>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>

<script>
import { mdiDotsVertical, mdiFormatVerticalAlignTop, mdiFormatHorizontalAlignRight, mdiFormatVerticalAlignBottom, mdiClose } from '@mdi/js/mdi.js'
import each from 'lodash/each'
import get from 'lodash/get'
import set from 'lodash/set'
import map from 'lodash/map'
import join from 'lodash/join'
import min from 'lodash/min'
import take from 'lodash/take'
import takeRight from 'lodash/takeRight'
import find from 'lodash/find'
import size from 'lodash/size'
import isEqual from 'lodash/isEqual'
import isNumber from 'lodash/isNumber'
import reverse from 'lodash/reverse'
import remove from 'lodash/remove'
import pullAt from 'lodash/pullAt'
import cloneDeep from 'lodash/cloneDeep'
import isInteger from 'lodash/isInteger'
import dropRight from 'lodash/dropRight'
import genID from 'wsemi/src/genID.mjs'
import sep from 'wsemi/src/sep.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import cint from 'wsemi/src/cint.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import replace from 'wsemi/src/replace.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import flattenTreeObj from 'wsemi/src/flattenTreeObj'
import globalMemory from '../js/globalMemory.mjs'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import domDragDrop from '../js/domDragDrop.mjs'
import WDynamicList from './WDynamicList.vue'
import WButtonCircle from './WButtonCircle.vue'
import WPopup from './WPopup.vue'
import WListVertical from './WListVertical.vue'
import WTreeIconToggle from './WTreeIconToggle.vue'
import WTreeIconCheckbox from './WTreeIconCheckbox.vue'


//gm
let gm = globalMemory()


/**
 * @vue-prop {Array|Object} [data=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [defaultDisplayLevel=null] 輸入初始展開層數數字，若輸入1就是預設展開至第1層，第2層(含)以下則都隱藏，若輸入null就是全展開，預設null
 * @vue-prop {Boolean} [selectable=false] 輸入是否具有勾選模式，預設false
 * @vue-prop {Array} [selections=[]] 輸入勾選項目陣列，當selectable=true時才可使用，預設[]
 * @vue-prop {String} [keyPrimary='id'] 輸入可選項目為物件時，主鍵之欄位字串，預設'id'
 * @vue-prop {String} [keyText='text'] 輸入可選項目為物件時，顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyChildren='children'] 輸入可選項目為物件時，所屬子項目之欄位字串，預設'children'
 * @vue-prop {String} [keyLock='locked'] 輸入可選項目為物件時，禁止勾選之欄位字串，物件給予此欄位需為布林值，預設'locked'
 * @vue-prop {Object} [paddingStyle={v:0,h:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Number} [indent=1] 輸入縮排比率數字，若使用1就是1倍的圖標寬度(24px)+2*separation(3px)，預設1
 * @vue-prop {String} [iconToggleColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [iconToggleBackgroundColor='transparent'] 輸入顯隱icon按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [iconToggleBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱icon按鈕背景顏色字串，預設'rgba(128,128,128,0.15)'
 * @vue-prop {String} [iconUncheckedColor='grey darken-2'] 輸入未勾選時顏色字串，預設'grey darken-2'
 * @vue-prop {String} [iconUncheckedDisabledColor='grey'] 輸入禁用時未勾選時顏色字串，預設'grey'
 * @vue-prop {String} [iconCheckedColor='blue darken-3'] 輸入勾選時顏色字串，預設'blue darken-3'
 * @vue-prop {String} [iconCheckedDisabledColor='grey'] 輸入禁用時勾選時顏色字串，預設'grey'
 * @vue-prop {String} [iconCheckedPartiallyColor='blue darken-3'] 輸入部份勾選時(子節點任一有勾選但非全部勾選)顏色字串，預設'blue darken-3'
 * @vue-prop {String} [iconCheckedPartiallyDisabledColor='grey'] 輸入禁用部份勾選時(子節點任一有勾選但非全部勾選)顏色字串，預設'grey'
 * @vue-prop {String} [filterKeywords=''] 輸入過濾關鍵字字串，多關鍵字用空白分隔，預設''
 * @vue-prop {Function} [filterFunction=null] 輸入過濾時呼叫處理函數，傳入為各項目物件資料，回傳布林值代表項目內是否含有關鍵字，預設null
 * @vue-prop {String} [searchEmpty='Empty'] 輸入無過濾結果字串，預設'Empty'
 * @vue-prop {Number} [defItemHeight=34] 輸入按需顯示時各項目預設高度值，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設34
 * @vue-prop {Number} [itemsPreload=5] 輸入上下方預先載入元素數量，預設5
 * @vue-prop {Number} [separatorHeight=1] 輸入分隔線高度數字，預設1
 * @vue-prop {String} [separatorColor='transparent'] 輸入分隔線顏色字串，預設'transparent'
 * @vue-prop {Boolean} [draggable=false] 輸入是否為可拖曳編輯模式，若draggable設定true，此時所有節點皆為展開顯示並且禁止顯隱節點功能，也就是defaultDisplayLevel強制設定為null，此外也不提供過濾功能，也就是filterKeywords強制清空。開啟draggable僅適用小規模數據。draggable預設false
 * @vue-prop {String} [dgTextDisabled='Can not drop here'] 輸入禁止拖曳文字字串，預設'Can not drop here'
 * @vue-prop {String} [dgTextDisabledColor='#812'] 輸入禁止拖曳文字顏色字串，預設'#812'
 * @vue-prop {Number} [dgTextDisabledPaddingLeft=15] 輸入禁止拖曳padding-left數字，單位px，預設15
 * @vue-prop {String} [dgTextDisabledFontSize='0.9rem'] 輸入禁止拖曳文字大小字串，預設'0.9rem'
 * @vue-prop {String} [dgTextDisabledBackgroundColor='rgba(255,220,240,0.6)'] 輸入禁止拖曳文字區背景顏色字串，預設'rgba(255,220,240,0.6)'
 * @vue-prop {String} [dgInsertLineColor='#29f'] 輸入拖曳時顯示插入區域線顏色字串，預設'#29f'
 * @vue-prop {String} [dgInsertBackgroundColor='rgba(80,150,255,0.15)'] 輸入拖曳時顯示插入區域背景顏色字串，預設'rgba(80,150,255,0.15)'
 * @vue-prop {String} [dgBelongBackgroundColor='rgba(80,150,255,0.3)'] 輸入拖曳時顯示插入區域(成為目標的子節點)背景顏色字串，預設'rgba(80,150,255,0.3)'
 * @vue-prop {Number} [dgPreviewOpacity=1] 輸入拖曳時預覽元素透明度數字，預設1
 * @vue-prop {Number} [dgPreviewDisabledOpacity=1] 輸入無效時(位於非可拖曳元素內)拖曳時預覽元素透明度數字，預設1
 * @vue-prop {Number} [dgPreviewBorderWidth=0] 輸入拖曳時預覽元素邊框寬度數字，預設0
 * @vue-prop {String} [dgPreviewBorderColor='#f26'] 輸入拖曳時預覽元素邊框顏色字串，預設'#f26'
 * @vue-prop {String} [dgPreviewBackground='transparent'] 輸入拖曳時預覽元素背景顏色字串，預設'transparent'
 * @vue-prop {Boolean} [operatable=false] 輸入是否使用控制節點模式，若operatable設定true，將於各項目右側顯示控制按鈕，點擊可彈出選單進行插入與刪除等項目，此時會觸發事件click-operate-item，而處理相應數據則需呼叫事件提供物件內operateItem函數，詳情請見範例。此時所有節點皆為展開顯示並且禁止顯隱節點功能，也就是defaultDisplayLevel強制設定為null，此外也不提供過濾功能，也就是filterKeywords強制清空。開啟operatable僅適用小規模數據。operatable預設false
 * @vue-prop {String} [operateItemTextForInsertBefore='Insert before'] 輸入控制選項插入前項目之文字字串，預設'Insert before'
 * @vue-prop {String} [operateItemTextForInsertChild='Insert child'] 輸入控制選項插入子項目之文字字串，預設'Insert child'
 * @vue-prop {String} [operateItemTextForInsertAfter='Insert after'] 輸入控制選項插入後項目之文字字串，預設'Insert after'
 * @vue-prop {String} [operateItemTextForInsertDelete='Delete'] 輸入控制選項刪除項目之文字字串，預設'Delete'
 * @vue-prop {Object} [operateItemPaddingStyle={v:10,h:12}] 輸入控制選項內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {Number} [operatePanelWidth=150] 輸入控制選項寬度數字，預設150
 * @vue-prop {Number} [operatePanelHeight=168] 輸入控制選項高度數字，預設168
 * @vue-prop {String} [operateBtnTooltip='Operations'] 輸入控制按鈕之提示文字字串，預設'Operations'
 * @vue-prop {String} [operateBtnBackgroundColor='transparent'] 輸入控制按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [operateBtnBackgroundColorHover='rgba(230,230,230,0.7)'] 輸入滑鼠移入時控制按鈕背景顏色字串，預設'rgba(230,230,230,0.7)'
 * @vue-prop {String} [operateBtnBackgroundColorFocus='rgba(230,230,230,0.9)'] 輸入取得焦點時控制按鈕背景顏色字串，預設'rgba(230,230,230,0.9)'
 * @vue-prop {String} [operateItemBackgroundColor='transparent'] 輸入控制項目背景顏色字串，預設'transparent'
 * @vue-prop {String} [operateItemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時控制項目背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [operateItemTextColor='#444'] 輸入控制項目文字顏色字串，預設'#444'
 * @vue-prop {String} [operateItemTextColorHover='#222'] 輸入滑鼠移入時控制項目文字顏色字串，預設'#222'
 * @vue-prop {Number} [operateItemIconSize=22] 輸入控制項目圖標尺寸數字，預設22
 * @vue-prop {String} [operateItemIconColor='#444'] 輸入控制項目圖標顏色字串，預設'#444'
 * @vue-prop {String} [operateItemIconColorHover='#222'] 輸入滑鼠移入時控制項目圖標顏色字串，預設'#222'
 * @vue-prop {Boolean} [show=true] 輸入是否為顯示模式，預設true，供組件嵌入popup時, 因先初始化但尚未顯示不需渲染, 可給予show=false避免無限偵測與重算高度問題
 */
export default {
    directives: {
        domdragdrop: domDragDrop(),
    },
    components: {
        WDynamicList,
        WButtonCircle,
        WPopup,
        WListVertical,
        WTreeIconToggle,
        WTreeIconCheckbox,
    },
    props: {
        data: {
            type: [Array, Object],
            default: () => [],
        },
        viewHeightMax: {
            type: Number,
            default: 400,
        },
        defaultDisplayLevel: {
            type: Number,
            default: null,
        },
        selectable: {
            type: Boolean,
            default: false,
        },
        selections: {
            type: Array,
            default: () => [],
        },
        keyPrimary: {
            type: String,
            default: 'id',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        keyChildren: {
            type: String,
            default: 'children',
        },
        keyLocked: {
            type: String,
            default: 'locked',
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
        indent: {
            type: Number,
            default: 1,
        },
        iconToggleColor: {
            type: String,
            default: 'grey',
        },
        iconToggleBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        iconToggleBackgroundColorHover: {
            type: String,
            default: 'rgba(128,128,128,0.15)',
        },
        iconUncheckedColor: {
            type: String,
            default: 'grey darken-2',
        },
        iconUncheckedDisabledColor: {
            type: String,
            default: 'grey',
        },
        iconCheckedColor: {
            type: String,
            default: 'blue darken-3',
        },
        iconCheckedDisabledColor: {
            type: String,
            default: 'grey',
        },
        iconCheckedPartiallyColor: {
            type: String,
            default: 'blue darken-3',
        },
        iconCheckedPartiallyDisabledColor: {
            type: String,
            default: 'grey',
        },
        filterKeywords: {
            type: String,
            default: '',
        },
        filterFunction: {
            type: Function,
            default: null,
        },
        searchEmpty: {
            type: String,
            default: 'Empty',
        },
        defItemHeight: {
            type: Number,
            default: 34,
        },
        itemsPreload: {
            type: Number,
            default: 5,
        },
        separatorHeight: {
            type: Number,
            default: 1,
        },
        separatorColor: {
            type: String,
            default: 'transparent',
        },
        draggable: {
            type: Boolean,
            default: false,
        },
        dgTextDisabled: {
            type: String,
            default: 'Can not drop here', //禁止拖曳至自己子節點當中
        },
        dgTextDisabledColor: {
            type: String,
            default: '#812',
        },
        dgTextDisabledPaddingLeft: {
            type: Number,
            default: 15,
        },
        dgTextDisabledFontSize: {
            type: String,
            default: '0.9rem',
        },
        dgTextDisabledBackgroundColor: {
            type: String,
            default: 'rgba(255,220,240,0.6)',
        },
        dgInsertLineColor: {
            type: String,
            default: '#29f',
        },
        dgInsertBackgroundColor: {
            type: String,
            default: 'rgba(80,150,255,0.15)',
        },
        dgBelongBackgroundColor: {
            type: String,
            default: 'rgba(80,150,255,0.3)',
        },
        dgPreviewOpacity: {
            type: Number,
            default: 1,
        },
        dgPreviewDisabledOpacity: {
            type: Number,
            default: 1,
        },
        dgPreviewBorderWidth: {
            type: Number,
            default: 0,
        },
        dgPreviewBorderColor: {
            type: String,
            default: '#f26',
        },
        dgPreviewBackground: {
            type: String,
            default: 'transparent',
        },
        operatable: {
            type: Boolean,
            default: false,
        },
        operateItemTextForInsertBefore: {
            type: String,
            default: 'Insert before',
        },
        operateItemTextForInsertChild: {
            type: String,
            default: 'Insert child',
        },
        operateItemTextForInsertAfter: {
            type: String,
            default: 'Insert after',
        },
        operateItemTextForInsertDelete: {
            type: String,
            default: 'Delete',
        },
        operateItemPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 10,
                    h: 12,
                }
            },
        },
        operatePanelWidth: {
            type: Number,
            default: 150,
        },
        operatePanelHeight: {
            type: Number,
            default: 42 * 4,
        },
        operateBtnTooltip: {
            type: String,
            default: 'Operations',
        },
        operateBtnBackgroundColor: {
            type: String,
            default: 'transparent', //'rgba(225,225,225,0.5)',
        },
        operateBtnBackgroundColorHover: {
            type: String,
            default: 'rgba(230,230,230,0.7)',
        },
        operateBtnBackgroundColorFocus: {
            type: String,
            default: 'rgba(230,230,230,0.9)',
        },
        operateItemBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        operateItemBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.2)',
        },
        operateItemTextColor: {
            type: String,
            default: '#444',
        },
        operateItemTextColorHover: {
            type: String,
            default: '#222',
        },
        operateItemIconSize: {
            type: Number,
            default: 22,
        },
        operateItemIconColor: {
            type: String,
            default: '#444',
        },
        operateItemIconColorHover: {
            type: String,
            default: '#222',
        },
        show: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mdiDotsVertical,

            dbc: debounce(),
            mmkey: null,

            separation: 3,
            iconHeight: 34,
            selectionsTrans: [],

            filterKeywordsTrans: '',
            filterKeywordsTransTemp: '', //上次過濾關鍵字
            filtering: false, //是否過濾中

            defaultDisplayLevelTrans: null,

            dgGroupKey: null,
            // drag: null,
            dgTipMode: '',
            dgTipLeft: 0,
            dgTipTop: 0,
            dgTipWidth: 0,
            dgTipHeight: 0,

        }
    },
    beforeDestroy: function() {
        //console.log('beforeMount')

        let vo = this

        //remove
        if (vo.mmkey !== null) {
            gm.remove(vo.mmkey)
        }

        // //dragClear
        // vo.dragClear()

    },
    watch: {

        data: {
            immediate: true,
            deep: true,
            handler(value) {
                //console.log('watch data', value)

                let vo = this

                //setData
                vo.setData(value)

            }
        },

    },
    computed: {

        changeDefaultDisplayLevel: function() {
            //console.log('computed changeDefaultDisplayLevel')

            let vo = this

            //save
            vo.defaultDisplayLevelTrans = vo.defaultDisplayLevel

            return ''
        },

        changeDraggableAndOperatable: function() {
            //console.log('computed changeDraggableAndOperatable')

            let vo = this

            //trigger
            let draggable = vo.draggable
            let operatable = vo.operatable

            //若draggable或operatable為true, 則defaultDisplayLevel強制為null, filterKeywords強制清空
            if (draggable || operatable) {
                vo.defaultDisplayLevelTrans = null
                vo.filterKeywordsTrans = ''
            }

            return ''
        },

        changeFilterKeyWords: function() {
            //console.log('computed changeFilterKeyWords')

            let vo = this

            //save
            vo.filterKeywordsTrans = vo.filterKeywords

            //filterKeyWordsDebounce
            vo.filterKeyWordsDebounce()

            return ''
        },

        useIndent: function() {
            //console.log('computed useIndent')

            let vo = this

            return vo.indent * (24 + 2 * vo.separation)
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        useDgTextDisabledColor: function() {
            //console.log('computed useDgTextDisabledColor')

            let vo = this

            return color2hex(vo.dgTextDisabledColor)
        },

        useDgTextDisabledBackgroundColor: function() {
            //console.log('computed useDgTextDisabledBackgroundColor')

            let vo = this

            return color2hex(vo.dgTextDisabledBackgroundColor)
        },

        useDgInsertLineColor: function() {
            //console.log('computed useDgInsertLineColor')

            let vo = this

            return color2hex(vo.dgInsertLineColor)
        },

        useDgInsertBackgroundColor: function() {
            //console.log('computed useDgInsertBackgroundColor')

            let vo = this

            return color2hex(vo.dgInsertBackgroundColor)
        },

        uesDgBelongBackgroundColor: function() {
            //console.log('computed uesDgBelongBackgroundColor')

            let vo = this

            return color2hex(vo.dgBelongBackgroundColor)
        },

        useOperateItems: function() {
            //console.log('computed useOperateItems')

            let vo = this

            //operateItems
            let operateItems = [
                {
                    key: 'InsertBefore',
                    text: vo.operateItemTextForInsertBefore,
                    icon: mdiFormatVerticalAlignTop,
                },
                {
                    key: 'InsertChild',
                    text: vo.operateItemTextForInsertChild,
                    icon: mdiFormatHorizontalAlignRight,
                },
                {
                    key: 'InsertAfter',
                    text: vo.operateItemTextForInsertAfter,
                    icon: mdiFormatVerticalAlignBottom,
                },
                {
                    key: 'Delete',
                    text: vo.operateItemTextForInsertDelete,
                    icon: mdiClose,
                },
            ]

            return operateItems
        },

        isDraggable: function() {
            //console.log('computed isDraggable')

            let vo = this

            return vo.draggable // && vo.editable
        },

    },
    methods: {

        getEmitData: function(e, props) {
            //console.log('methods getEmitData', e, props)

            // let vo = this

            return { event: e, ele: e.currentTarget, row: props.row, item: props.row.item, index: props.index }
        },

        getRowsFromData: function(data) {
            //console.log('methods getRowsFromData', data)

            let vo = this

            //flattenTreeObj
            let ts = flattenTreeObj(data, { bindKey: vo.keyPrimary, bindChildren: vo.keyChildren })

            //rows, lodash使用new Array建構比for+push快
            let rows = map(ts, (v, k) => {
                return {
                    index: k,
                    unfolding: true, //bol, 是否展開顯示此節點
                    checked: 'unchecked', //str, 節點勾選狀態, 'unchecked'代表未勾選, 'checked'代表已勾選, 'checkedPartially'代表部份勾選時(子節點任一有勾選但非全部勾選)
                    item: v,
                }
            })

            return rows
        },

        setData: function(data) {
            // console.log('methods setData', data)

            let vo = this

            async function core() {

                //check
                if (!isarr(data) && !isobj(data)) {
                    let msg = 'data is not array or object'
                    //console.log(msg)
                    return msg
                }

                //mmkey, 產生mmkey要放在資料變更的地方, 否則beforeCreate只有1次(mounted會比computed還慢), 於vue-cli編譯情況下會有部份情境有問題
                if (vo.mmkey === null) {

                    //mmkey
                    vo.mmkey = genID()

                }
                else {

                    //remove
                    gm.remove(vo.mmkey)

                }

                //cloneDeep
                data = cloneDeep(data)

                //getRowsFromData
                let rows = vo.getRowsFromData(data)

                //save
                //vo.rows = rows
                gm.set(vo.mmkey, rows)

                //wait wdl, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.wdl !== undefined
                }, { timeInterval: 20 })

                //setRows
                await vo.$refs.wdl.setRows(rows)

                //defaultToggleItems
                vo.defaultToggleItems()

                //updateSelections
                vo.updateSelections()

                //filterKeywordsTransTemp
                vo.filterKeywordsTransTemp = '' //需清空之前暫存關鍵字才能重新搜尋
                vo.filterKeyWords()

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        getText: function (item) {
            //console.log('methods getText', item)
            let vo = this
            return get(item, vo.keyText, '')
        },

        getEditable: function (item) {
            //console.log('methods getEditable', item)
            let vo = this
            return !get(item, vo.keyLocked, false)
        },

        updateSelections: function() {
            // console.log('methods updateSelections')

            let vo = this

            async function core() {
                let selectionsTrans = [] //由外部selections變更時, 直接由空的selectionsTrans進行重產

                //check
                if (!vo.selectable) {
                    return
                }

                //wait wdl, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.wdl !== undefined
                }, { timeInterval: 20 })

                //opt
                let opt = {
                    fun: function(items) {
                        // console.log('items', cloneDeep(items))

                        //kpInd, 建立各item的速查表, 由keyPrimary直接取得項目位於items陣列內的指標
                        let kpInd = {}
                        each(items, (v, ind) => {

                            //pk
                            let pk = get(v, `row.item.${vo.keyPrimary}`)

                            //build kpInd
                            if (haskey(kpInd, pk)) {
                                throw new Error(`Duplicate primary key[${vo.keyPrimary}] in items`)
                            }
                            else {
                                kpInd[pk] = ind
                            }

                            //預設
                            items[ind].row.checked = 'unchecked'

                        })

                        //selections
                        let selections = cloneDeep(vo.selections)

                        //each, 遍歷selections進行虛擬操作取得selectionsTrans
                        each(selections, (v) => {

                            //pk
                            let pk = v[vo.keyPrimary]

                            //ind
                            let ind = kpInd[pk]

                            //check
                            if (ind) {

                                //checked
                                let checked = items[ind].row.checked

                                //check, 若節點原本的勾選狀態非checked, 才需要呼叫
                                if (checked !== 'checked') {

                                    //modify
                                    checked = 'checked'

                                    //checkItemsCore
                                    vo.checkItemsCore(selectionsTrans, items, ind, checked)

                                }

                            }

                        })

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

                //save
                vo.selectionsTrans = selectionsTrans

                //emit, 要放在wdl更新後才觸發事件
                vo.$emit('update:selections', cloneDeep(selectionsTrans))

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        addSelection: function(selections, item) {
            //console.log('methods addSelection', selections, item.text, item)

            let vo = this

            //pk
            let pk = get(item, vo.keyPrimary, null)

            //push
            if (pk !== null) {

                //find
                let r = find(selections, { [vo.keyPrimary]: pk })

                //check, 若無項目物件則新增
                if (!r) {

                    //複製項目物件, 僅儲存非keyChildren的key, 避免複製父層物件時使用過多記憶體
                    let t = {}
                    each(item, (v, k) => {
                        if (k !== vo.keyChildren && k !== 'level' && k !== 'nk' && k !== 'msg') { //
                            t[k] = cloneDeep(v)
                        }
                    })

                    //push, 會直接修改selections的記憶體
                    selections.push(t)

                }

            }

        },

        removeSelection: function(selections, item) {
            //console.log('methods removeSelection', selections, item.text, item)

            let vo = this

            //pk
            let pk = get(item, vo.keyPrimary, null)

            //push
            if (pk !== null) {

                //find
                let r = find(selections, { [vo.keyPrimary]: pk })

                //check, 若有項目物件則刪除
                if (r) {

                    //remove, 直接修改selections的記憶體
                    remove(selections, { [vo.keyPrimary]: pk })

                }

            }

        },

        modifySelection: function(selections, checkedOld, checkedNew, item) {
            //console.log('methods modifySelection', selections, checkedOld, checkedNew, item)

            let vo = this

            //check
            if (checkedOld === checkedNew) {
                return
            }

            //call
            if (checkedNew === 'checked') {
                vo.addSelection(selections, item)
            }
            else {
                vo.removeSelection(selections, item)
            }

        },

        hasChildren: function(ind) {
            //console.log('methods hasChildren', ind)

            let vo = this

            return vo.getLevelDiff(ind) > 0
        },

        hasChildrenFromItems: function(items, ind) {
            //console.log('methods hasChildrenFromItems', items, ind)

            let vo = this

            return vo.getLevelDiffFromItems(items, ind) > 0
        },

        getLevelDiff: function(ind) {
            //console.log('methods getLevelDiff', ind)

            let vo = this

            //rows
            let rows = gm.get(vo.mmkey)

            return vo.getLevelDiffFromRows(rows, ind)
        },

        getLevelDiffFromRows: function(rows, ind) {
            //console.log('methods getLevelDiffFromRows', rows, ind)

            let vo = this

            //lev1, lev2
            let lev1 = get(rows, `${ind}.item.level`, null)
            let lev2 = get(rows, `${ind + 1}.item.level`, null)

            return vo.calcLevelDiff(lev1, lev2)
        },

        getLevelDiffFromItems: function(items, ind) {
            //console.log('methods getLevelDiffFromItems', items, ind)

            let vo = this

            //lev1, lev2
            let lev1 = get(items, `${ind}.row.item.level`, null)
            let lev2 = get(items, `${ind + 1}.row.item.level`, null)

            return vo.calcLevelDiff(lev1, lev2)
        },

        calcLevelDiff: function(lev1, lev2) {
            //console.log('methods calcLevelDiff', lev1, lev2)

            // let vo = this

            //check
            if (!isInteger(lev1) || !isInteger(lev2)) {
                return 0
            }

            return lev2 - lev1
        },

        getLevel: function(row) {
            //console.log('methods getLevel', row)
            return get(row, `item.level`, 0)
        },

        toggleItemsCore: function(items, ind, unfolding) {
            // console.log('methods toggleItemsCore', items, ind, unfolding)

            let vo = this

            //unfoldingChain
            let unfoldingChain = []

            //依照unfoldingChain計算節點displayShow
            function getDisplayShow() {
                for (let i = 0; i < unfoldingChain.length; i++) {
                    if (unfoldingChain[i] === false) {
                        return false
                    }
                }
                return true
            }

            //本身節點變更unfolding
            function modifySelf(ind, unfolding) {

                //save unfolding
                items[ind].row.unfolding = unfolding

                //add unfolding
                unfoldingChain.push(unfolding)

            }

            //若有子節點, 則變更所屬子節點
            function modifyChildren(ind, unfolding) {

                //level
                let level = get(items, `${ind}.row.item.level`, null)
                if (level === null) {
                    console.log('invalid level')
                    return
                }

                //modify displayShow
                for (let i = ind + 1; i < items.length; i++) {
                    //點擊節點後之各子節點

                    //levelNow
                    let levelNow = get(items, `${i}.row.item.level`, null)
                    if (levelNow === null) {
                        console.log('invalid levelNow')
                        return
                    }

                    //偵測至與點擊節點同層或父層之節點, 代表已處理完畢展隱所影響之全部節點, 可跳出迴圈加速
                    if (level >= levelNow) {
                        break
                    }

                    //displayShow, 當unfoldingChain內都是true時才能顯示, 有任一是false就得隱藏
                    let displayShow = getDisplayShow()

                    //save displayShow
                    items[i].displayShow = displayShow

                    //levDiff, 計算此節點與下個節點之level差值
                    let levDiff = vo.getLevelDiffFromItems(items, i)

                    //此節點有所屬子節點
                    if (levDiff > 0) {

                        //unfolding
                        let unfoldingNow = get(items, `${i}.row.unfolding`, null)
                        if (unfoldingNow === null) {
                            console.log('invalid unfoldingNow')
                            return
                        }

                        //add unfolding
                        unfoldingChain.push(unfoldingNow)

                    }

                    //此節點之下為父層或更上層之節點
                    if (levDiff < 0) {

                        //dropRight, 刪除所屬各層節點的unfolding
                        unfoldingChain = dropRight(unfoldingChain, -levDiff)

                    }

                }

            }

            //modifySelf
            modifySelf(ind, unfolding)

            //modifyChildren
            modifyChildren(ind, unfolding)

        },

        defaultToggleItems: function() {
            // console.log('methods defaultToggleItems')

            let vo = this

            async function core() {

                //check
                if (!isNumber(vo.defaultDisplayLevelTrans)) {
                    return
                }

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                        // console.log('items', cloneDeep(items))

                        //l, 有指定預先展開層數
                        let l = cint(vo.defaultDisplayLevelTrans)

                        // toggleItemsCore
                        each(items, (v, k) => {
                            if ((v.row.item.level + 1) > l && v.row.unfolding) {
                                vo.toggleItemsCore(items, k, false) //非指定層數則隱藏
                            }
                        })

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        toggleItems: function(item) {
            //console.log('methods toggleItems', item)

            let vo = this

            async function core() {

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //check draggable and operatable
                if (vo.draggable || vo.operatable) {
                    // console.log('禁止顯隱節點')
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                        //console.log('items', cloneDeep(items))

                        //ind
                        let ind = item.index

                        //unfolding
                        let unfolding = get(items, `${ind}.row.unfolding`, null)
                        if (unfolding === null) {
                            console.log('invalid unfolding')
                            return
                        }

                        //本身節點變更unfolding
                        unfolding = !unfolding

                        //toggleItemsCore
                        vo.toggleItemsCore(items, ind, unfolding)

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        getAllParentIndex: function(items, ind) {
            //console.log('methods getAllParentIndex', items, ind)
            //取得全部父層節點指標與path

            let vo = this

            //selfInd
            let selfInd = ind

            //無限迴圈尋找
            let inds = []
            while (true) {

                //parentInd
                let parentInd = vo.getParentIndex(items, selfInd)

                //break
                if (parentInd === null) {
                    break
                }

                //push
                inds.push(parentInd)

                //save
                selfInd = parentInd

            }

            //path
            let path = join(reverse(inds), '-')

            return {
                inds,
                path,
            }
        },

        getParentIndex: function(items, ind) {
            //console.log('methods getParentIndex', items, ind)
            //取得父層節點指標

            //level
            let level = get(items, `${ind}.row.item.level`, null)
            if (level === null) {
                return null
            }

            //往前偵測
            for (let i = ind - 1; i >= 0; i--) {

                //levelNow
                let levelNow = get(items, `${i}.row.item.level`, null)
                if (levelNow === null) {
                    return null
                }

                //若已出現父層節點, 繼續算則不可能出現同層節點, 可跳出迴圈加速
                if (level > levelNow) {
                    return i
                }

            }

            return null //找不到父層節點
        },

        checkItemsCore: function(selections, items, ind, checked) {
            //console.log('methods checkItemsCore', selections, items, ind, checked)
            //由外部傳入selections並直接修改記憶體, 外部selections需先cloneDeep用以計算本次操作所增減項目

            let vo = this

            //本身節點變更checked
            function modifySelf(selections, ind, checked) {

                //checkedOld
                let checkedOld = items[ind].row.checked

                //save checked
                items[ind].row.checked = checked

                //modifySelection
                vo.modifySelection(selections, checkedOld, checked, items[ind].row.item)

            }

            //若有子節點, 則變更所屬子節點
            function modifyChildren(selections, ind, checked) {
                if (vo.hasChildrenFromItems(items, ind)) {

                    //level
                    let level = get(items, `${ind}.row.item.level`, null)
                    if (level === null) {
                        console.log('invalid level')
                        return
                    }

                    //modify checked
                    for (let i = ind + 1; i < items.length; i++) {
                    //點擊節點後之各子節點

                        //levelNow
                        let levelNow = get(items, `${i}.row.item.level`, null)
                        if (levelNow === null) {
                            console.log('invalid levelNow')
                            return
                        }

                        //偵測至與點擊節點同層或父層之節點, 代表已處理完畢全部所屬子節點, 可跳出迴圈加速
                        if (level >= levelNow) {
                            break
                        }
                        //console.log(`[${items[i].row.item.name}]`, 'level', level, 'levelNow', levelNow)

                        //checkedOld
                        let checkedOld = items[i].row.checked

                        //save checked
                        items[i].row.checked = checked

                        //modifySelection
                        vo.modifySelection(selections, checkedOld, checked, items[i].row.item)

                    }

                }
            }

            //偵測全部同層的checked狀態, 回傳為父層節點的checked狀態
            function detectSameLevelChecked(ind) {

                //level
                let level = get(items, `${ind}.row.item.level`, null)
                if (level === null) {
                    console.log('invalid level')
                    return null
                }

                //sameLevelInds, 把點擊節點先加入至偵測清單
                let sameLevelInds = [{
                    ind,
                    checked: get(items, `${ind}.row.checked`, ''),
                }]

                //往前偵測
                for (let i = ind - 1; i >= 0; i--) {

                    //levelNow
                    let levelNow = get(items, `${i}.row.item.level`, null)
                    if (levelNow === null) {
                        console.log('invalid levelNow')
                        return
                    }

                    //若已出現父層節點, 繼續算則不可能出現同層節點, 可跳出迴圈加速
                    if (level > levelNow) {
                        break
                    }

                    //若為同層節點才加入偵測清單
                    if (level === levelNow) {

                        //push
                        sameLevelInds.push({
                            ind: i,
                            checked: get(items, `${i}.row.checked`, ''),
                        })

                    }

                }

                //往後偵測
                for (let i = ind + 1; i < items.length; i++) {

                    //levelNow
                    let levelNow = get(items, `${i}.row.item.level`, null)
                    if (levelNow === null) {
                        console.log('invalid levelNow')
                        return
                    }

                    //若已出現父層節點, 繼續算不可能出現同層節點, 可跳出迴圈加速
                    if (level > levelNow) {
                        break
                    }

                    //若為同層節點才加入偵測清單
                    if (level === levelNow) {

                        //push
                        sameLevelInds.push({
                            ind: i,
                            checked: get(items, `${i}.row.checked`, ''),
                        })

                    }

                }

                //count
                let nAll = size(sameLevelInds)
                let nChecked = 0
                let nUnchecked = 0
                each(sameLevelInds, (v) => {
                    if (v.checked === 'checked') {
                        nChecked += 1
                    }
                    else if (v.checked === 'unchecked') {
                        nUnchecked += 1
                    }
                })

                if (nChecked === nAll) {
                    return 'checked'
                }
                else if (nUnchecked === nAll) {
                    return 'unchecked'
                }
                return 'checkedPartially'
            }

            //調整全部父層節點的checked狀態
            function modifyParent(selections, ind) {

                //parentInd, 父層節點指標
                let parentInd = vo.getParentIndex(items, ind)

                //check
                if (parentInd === null) {
                    return
                }

                //取得父層節點與checked資訊
                let parent = get(items, parentInd, null)
                let parentCheckedOld = get(parent, 'row.checked', '')
                let parentCheckedNew = detectSameLevelChecked(ind) //偵測與自己同層節點的checked資訊, 代表父層應該的checked

                //比對父層現在與應該checked是否不同, 若不同則覆寫
                if (parentCheckedOld !== parentCheckedNew) {

                    //parentCheckedOld
                    let parentCheckedOld = items[parentInd].row.checked

                    //save checked
                    items[parentInd].row.checked = parentCheckedNew

                    //modifySelection
                    vo.modifySelection(selections, parentCheckedOld, parentCheckedNew, items[parentInd].row.item)

                    //modifyParent, 遞迴繼續查找父層節點
                    modifyParent(selections, parentInd)

                }

            }

            //modifySelf
            modifySelf(selections, ind, checked)
            // console.log(vo.mmkey, 'modifySelf selections', cloneDeep(selections))

            //modifyChildren
            modifyChildren(selections, ind, checked)
            // console.log(vo.mmkey, 'modifyChildren selections', cloneDeep(selections))

            //modifyParent
            modifyParent(selections, ind)
            // console.log(vo.mmkey, 'modifyParent selections', cloneDeep(selections))

        },

        checkItems: function(item) {
            //console.log('methods checkItems', item)

            let vo = this

            async function core() {

                //由內部selectionsTrans當初始值, cloneDeep後進行修改
                let selectionsTrans = cloneDeep(vo.selectionsTrans)

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                        //console.log('items', cloneDeep(items))

                        //ind
                        let ind = item.index

                        //checked
                        let checked = get(items, `${ind}.row.checked`, null)
                        if (checked === null) {
                            console.log('invalid checked')
                            return
                        }

                        //本身節點變更checked
                        if (checked === 'checked') {
                            checked = 'unchecked'
                        }
                        else if (checked === 'unchecked') {
                            checked = 'checked'
                        }
                        else {
                            checked = 'checked'
                        }

                        //checkItemsCore
                        vo.checkItemsCore(selectionsTrans, items, ind, checked)

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

                //save
                vo.selectionsTrans = selectionsTrans

                //emit, 要放在wdl更新後才觸發事件
                vo.$emit('update:selections', cloneDeep(selectionsTrans))

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        filterKeyWordsCore: function(items) {
            //console.log('methods filterKeyWordsCore', items)

            let vo = this

            //check draggable and operatable
            if (vo.draggable || vo.operatable) {
                return
            }

            //check filterKeywordsTransTemp
            if (vo.filterKeywordsTransTemp === vo.filterKeywordsTrans) {
                return
            }

            //filterKeywordsTransTemp
            vo.filterKeywordsTransTemp = vo.filterKeywordsTrans //因為函數為同步故可以先覆寫至temp

            //check
            if (size(vo.filterKeywordsTrans) === 0) {

                //預設可見
                for (let i = 0; i < items.length; i++) {
                    items[i].filterShow = true
                }

            }
            else {

                //kws
                let kws = sep(vo.filterKeywordsTrans.toLowerCase(), ' ')

                //針對各項目偵測過濾
                let pathHasShow = {} //儲存已經強制顯示的父層鏈
                for (let i = 0; i < items.length; i++) {

                    //預設不可見
                    let b = false

                    //filter
                    if (isfun(vo.filterFunction)) {

                        //filterFunction
                        b = vo.filterFunction(items[i].row.item)

                    }
                    else {

                        //預設取得項目文字供關鍵字過濾
                        let c = vo.getText(items[i].row.item)
                        // console.log('vo.getText', items[i].row.item, 'c=', c)

                        //toLowerCase
                        c = c.toLowerCase()

                        //若值含有關建字
                        for (let k = 0; k < kws.length; k++) {
                            let kw = kws[k]
                            if (c.indexOf(kw) >= 0) {
                                b = true
                                break
                            }
                        }

                    }

                    //若項目有關鍵字, 則需設定全部父層節點為可見, 不能被過濾掉
                    if (b) {

                        //此節點顯示
                        items[i].filterShow = true

                        //getAllParentIndex, 取得全部父層資訊
                        let pai = vo.getAllParentIndex(items, i)

                        //若有找到一個以上的父層
                        if (pai.path !== '') {

                            //若尚未處理過此父層鏈
                            if (!haskey(pathHasShow, pai.path)) {

                                //針對各父層設定filterShow=true
                                each(pai.inds, (ind) => {
                                    items[ind].filterShow = true
                                })

                                //儲存此父層鏈, 避免下次重複設定減少功耗
                                pathHasShow[pai.path] = pai

                            }

                        }

                    }
                    else {

                        //此節點隱藏
                        items[i].filterShow = false

                    }

                }

            }

        },

        filterKeyWords: function() {
            //console.log('methods filterKeyWords')

            let vo = this

            async function core() {

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //check
                if (vo.filtering) {
                    return
                }

                //filtering
                vo.filtering = true

                //opt
                let opt = {
                    fun: function(items) {
                        //console.log('items', cloneDeep(items))

                        //filterKeyWordsCore
                        vo.filterKeyWordsCore(items)

                    }
                }

                //processItems
                await vo.$refs.wdl.processItems(opt)

                //filtering
                vo.filtering = false

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        filterKeyWordsDebounce: function() {
            //console.log('methods filterKeyWordsDebounce')

            let vo = this

            //dbc
            vo.dbc(() => {

                //filterKeyWords
                vo.filterKeyWords()

            })

        },

        changeViewItems: function(msg) {
            // console.log('methods changeViewItems', msg)

            let vo = this

            //emit
            vo.$emit('change-view-items', msg)

            // //draggable
            // if (vo.draggable) {

            //     //$nextTick, 因WDynamicList為按需顯示, 為使domDrag能抓到元素, 需等WDynamicList內觸發change-view-items結束後dom才會更新, 故得延遲執行
            //     vo.$nextTick(() => {

            //         //dragInit
            //         vo.dragInit()

            //     })

            // }

        },

        deleteItem: function (data, nk) {
            //console.log('methods deleteItem', data, nk)
            //刪除節點, 因會使用nk操作, 故需確保節點順序問題

            if (size(nk) === 0) {
                throw new Error('invalid nk')
            }
            else if (size(nk) === 1) {

                //pullAt, 若節點為頂層(size(nk)===1)就不取父節點, data就是父節點
                pullAt(data, nk)

            }
            else {

                //ks, 當前節點的父節點的keys
                let ks = dropRight(nk)

                //ind, 當前節點位於父節點的指標
                let ind = takeRight(nk)

                //tar, 節點的父節點
                let tar = get(data, ks, [])

                //pullAt
                pullAt(tar, [ind])

            }

        },

        dragItem: function(startInd, endInd, modeDir, modeInsert) {
            //console.log('methods dragItem', startInd, endInd, modeDir, modeInsert)

            let vo = this

            //rows
            let rows = gm.get(vo.mmkey)
            // console.log('rows', JSON.parse(JSON.stringify(rows)))

            //data
            let data = cloneDeep(vo.data)
            // console.log('data1', JSON.parse(JSON.stringify(data)))

            //itemSelf, itemEnter
            let itemSelf = rows[startInd]
            let itemEnter = rows[endInd]
            // console.log('itemSelf', startInd, itemSelf)
            // console.log('itemEnter', endInd, itemEnter)

            //src, 來源節點
            let nkSelf = itemSelf.item.nk
            let nkEnter = itemEnter.item.nk
            let dataSelf = get(data, itemSelf.item.nk)
            // let dataEnter = get(data, itemEnter.item.nk)
            // console.log('dataSelf', nkSelf, dataSelf)
            // console.log('dataEnter', nkEnter, dataEnter)

            //modeDir
            if (modeDir === 'forward') {
                //若為由後往前移動, 則需先刪除來源節點
                vo.deleteItem(data, nkSelf)
                // console.log('data2', JSON.parse(JSON.stringify(data)))
            }

            if (modeInsert === 'before' || modeInsert === 'after') {

                //ind, 依照mode決定ind, before是直接splice對目標節點ind位置塞入, 就能把目標往後移動, after就需+1
                let ind = takeRight(nkEnter)[0]

                //tar, 目標的父節點, 待移入對象
                let tar
                if (size(nkEnter) === 1) {
                    tar = data //因目標是第1層內元素, 故要取得的父節點就是原本數據
                }
                else {
                    let ks = dropRight(nkEnter) //目標父節點的keys, dropRight後就是其上的keyChildren
                    tar = get(data, ks, []) //取得要移入的父節點
                }

                if (modeInsert === 'before') {
                    // ind = ind
                }
                else if (modeInsert === 'after') {
                    ind += 1
                }

                //array insert
                tar.splice(ind, 0, dataSelf)

            }
            else if (modeInsert === 'belongto') {

                //ks, 所屬儲存子節點欄位, 也就是keyChildren
                let ks = [...nkEnter, vo.keyChildren]

                //tar, 取得子節點, 若無則預設空陣列[]
                let tar = get(data, ks, [])

                //push
                tar.push(dataSelf)

                //set
                set(data, ks, tar)

            }
            // console.log('data3', JSON.parse(JSON.stringify(data)))

            //modeDir
            if (modeDir === 'backward') {
                //若為由前往後移動, 則需於來源節點複製進目標節點處後, 才能刪除來源節點
                vo.deleteItem(data, nkSelf)
                // console.log('data4', JSON.parse(JSON.stringify(data)))
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:data', cloneDeep(data))

            })

        },

        operateItem: function(targetInd, mode, fun) {
            //console.log('methods operateItem', targetInd, mode, fun)

            let vo = this

            async function core() {

                //rows
                let rows = gm.get(vo.mmkey)
                // console.log('rows', JSON.parse(JSON.stringify(rows)))

                //data
                let data = cloneDeep(vo.data)
                // console.log('data1', JSON.parse(JSON.stringify(data)))

                //itemTarget
                let itemTarget = rows[targetInd]
                // console.log('itemTarget', targetInd, itemTarget)

                //src, 來源節點
                let nkTarget = itemTarget.item.nk
                // console.log('dataEnter', nkTarget, itemTarget.item)

                //mode for Delete
                if (mode === 'Delete') {

                    //deleteItem
                    vo.deleteItem(data, nkTarget)

                    return data
                }

                //check
                if (!isfun(fun)) {
                    throw new Error('invalid fun')
                }

                //dataNew
                let dataNew = await fun()
                // console.log('dataNew', dataNew)

                //modeInsert and convert for InsertBefore, InsertAfter, InsertChild
                let modeInsert = mode
                if (modeInsert === 'InsertBefore') {
                    modeInsert = 'before'
                }
                else if (modeInsert === 'InsertAfter') {
                    modeInsert = 'after'
                }
                else if (modeInsert === 'InsertChild') {
                    modeInsert = 'belongto'
                }

                if (modeInsert === 'before' || modeInsert === 'after') {

                    //ind, 依照mode決定ind, before是直接splice對目標節點ind位置塞入, 就能把目標往後移動, after就需+1
                    let ind = takeRight(nkTarget)[0]

                    //tar, 目標的父節點, 待移入對象
                    let tar
                    if (size(nkTarget) === 1) {
                        tar = data //因目標是第1層內元素, 故要取得的父節點就是原本數據
                    }
                    else {
                        let ks = dropRight(nkTarget) //目標父節點的keys, dropRight後就是其上的keyChildren
                        tar = get(data, ks, []) //取得要移入的父節點
                    }

                    if (modeInsert === 'before') {
                    // ind = ind
                    }
                    else if (modeInsert === 'after') {
                        ind += 1
                    }

                    //array insert
                    tar.splice(ind, 0, dataNew)

                }
                else if (modeInsert === 'belongto') {

                    //ks, 所屬儲存子節點欄位, 也就是keyChildren
                    let ks = [...nkTarget, vo.keyChildren]

                    //tar, 取得子節點, 若無則預設空陣列[]
                    let tar = get(data, ks, [])

                    //push
                    tar.push(dataNew)

                    //set
                    set(data, ks, tar)

                }
                else {
                    throw new Error('invalid modeInsert')
                }
                // console.log('data3', JSON.parse(JSON.stringify(data)))

                return data
            }

            //core
            core()
                .then((data) => {

                    //$nextTick
                    vo.$nextTick(() => {

                        //emit
                        vo.$emit('update:data', cloneDeep(data))

                    })

                })
                .catch((err) => {
                    console.log(err)
                })

        },

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
                previewOpacity: vo.dgPreviewOpacity,
                previewDisabledOpacity: vo.dgPreviewDisabledOpacity,
                previewBorderWidth: vo.dgPreviewBorderWidth,
                previewBorderColor: vo.dgPreviewBorderColor,
                previewBackground: vo.dgPreviewBackground,
                timeDragStartDelay: 1,
            }

            return opt
        },

        isBelong: function(arEnter, arSelf) {
            function isArrayOverlap(ar1, ar2) {

                //n
                let n = min([size(ar1), size(ar2)])

                //先截成同長度陣列, 為共有父層資訊
                let tr1 = take(ar1, n)
                let tr2 = take(ar2, n)

                //isEqual
                let b = isEqual(tr1, tr2)

                return b
            }
            if (size(arEnter) >= size(arSelf)) { //若enter要為self的子節點, 其enter size會大於等於 self size
                return isArrayOverlap(arEnter, arSelf) //若有共同父層資訊, 就代表enter為self的子節點
            }
            return false
        },

        dragdrop: function(msg) {
            // console.log('methods dragdrop', msg)

            let vo = this

            if (msg.evName === 'move') {

                //rows
                let rows = gm.get(vo.mmkey)
                // console.log('rows', JSON.parse(JSON.stringify(rows)))

                //itemSelf, itemEnter
                let itemSelf = rows[msg.startInd]
                let itemEnter = rows[msg.endInd]
                // console.log('itemSelf', itemSelf, msg.startInd, itemSelf.item.nk)
                // console.log('itemEnter', itemEnter, msg.endInd, itemEnter.item.nk)

                //belong
                let belong = vo.isBelong(itemEnter.item.nk, itemSelf.item.nk)
                // console.log('belong', belong)

                //ele, 因WDynamicList會重新封裝按需顯示, 故顯示拖曳指標區為上2層的父節點, 取top才會正確
                let ele = get(msg, `endEle.parentNode.parentNode`)

                //location
                vo.dgTipTop = cdbl(replace(ele.style.top, 'px', ''))
                vo.dgTipLeft = cdbl(replace(ele.style.left, 'px', ''))
                vo.dgTipWidth = ele.offsetWidth
                vo.dgTipHeight = ele.offsetHeight

                //dgTipMode
                if (belong) {
                    vo.dgTipMode = 'disabled'
                }
                else if (msg.ry <= 0.3) {
                    vo.dgTipMode = 'lineTop'
                }
                else if (msg.ry >= 0.7) {
                    vo.dgTipMode = 'lineBottom'
                }
                else if (msg.ry > 0.3 && msg.ry < 0.7) {
                    vo.dgTipMode = 'block'
                }
                else {
                    //不會有此狀況
                    vo.dgTipMode = ''
                }

            }
            else if (msg.evName === 'leave') {
                vo.dgTipMode = ''
            }
            else if (msg.evName === 'drop') {

                //check, 拖曳至原始拖曳項目上, 無有效拖曳模式
                if (msg.startInd === msg.endInd) {
                    vo.dgTipMode = ''
                    return
                }

                //check, 多層組件觸發時可能會因leave觸發導致dgTipMode=''
                if (vo.dgTipMode === '') {
                    return
                }

                //modeDir
                let modeDir
                if (msg.startInd < msg.endInd) {
                    modeDir = 'backward'
                }
                else if (msg.startInd > msg.endInd) {
                    modeDir = 'forward'
                }
                else {
                    throw new Error('invalid modeDir')
                }
                // console.log('modeDir', modeDir)

                //modeInsert
                let modeInsert
                if (vo.dgTipMode === 'disabled') {
                    vo.dgTipMode = ''
                }
                else if (vo.dgTipMode === 'lineTop') {
                    modeInsert = 'before'
                }
                else if (vo.dgTipMode === 'lineBottom') {
                    modeInsert = 'after'
                }
                else if (vo.dgTipMode === 'block') {
                    modeInsert = 'belongto'
                }
                else {
                    console.log('dgTipMode', vo.dgTipMode)
                    throw new Error('invalid dgTipMode')
                }
                // console.log('modeInsert', modeInsert)

                //check, 純點擊時無move, 或拖曳至禁止對象內(通常是拖入自己子節點內)
                if (vo.dgTipMode === '') {
                    return
                }

                //clear, 已由dgTipMode換算出modeInsert, 拖曳完需清除dgTipMode使拖曳時指示對象隱藏
                vo.dgTipMode = ''

                //dragItem
                vo.dragItem(msg.startInd, msg.endInd, modeDir, modeInsert)

            }

        },

        // dragInit: function() {
        //     // console.log('methods dragInit')

        //     let vo = this

        //     function isBelong(arEnter, arSelf) {
        //         function isArrayOverlap(ar1, ar2) {

        //             //n
        //             let n = min([size(ar1), size(ar2)])

        //             //先截成同長度陣列, 為共有父層資訊
        //             let tr1 = take(ar1, n)
        //             let tr2 = take(ar2, n)

        //             //isEqual
        //             let b = isEqual(tr1, tr2)

        //             return b
        //         }
        //         if (size(arEnter) >= size(arSelf)) { //若enter要為self的子節點, 其enter size會大於等於 self size
        //             return isArrayOverlap(arEnter, arSelf) //若有共同父層資訊, 就代表enter為self的子節點
        //         }
        //         return false
        //     }

        //     async function core() {

        //         //check
        //         if (!vo.draggable) {
        //             return
        //         }

        //         //wait $el
        //         await waitFun(() => {
        //             return vo.$el !== undefined
        //         })

        //         //check
        //         if (!vo.$refs.wdl) {
        //             return
        //         }

        //         //check
        //         if (vo.drag !== null) {
        //             vo.dragClear()
        //         }

        //         //domDrag
        //         let drag = domDrag(vo.$el, {
        //             attIndex: 'dragindex',
        //             attGroup: 'draggroup',
        //             selectors: '[dragtag]',
        //             // previewOpacity: 0.4,
        //             // previewBorderWidth: 1,
        //             // previewBorderColor: '#f26',
        //             // previewBackground: '#fff',
        //             previewOpacity: vo.dgPreviewOpacity,
        //             previewBorderWidth: vo.dgPreviewBorderWidth,
        //             previewBorderColor: vo.dgPreviewBorderColor,
        //             previewBackground: vo.dgPreviewBackground,
        //         })
        //         drag.on('change', (msg) => {
        //             // console.log('onchange', msg)
        //         })
        //         drag.on('move', (msg) => {
        //             // console.log('move', msg)

        //             //rows
        //             let rows = gm.get(vo.mmkey)
        //             // console.log('rows', JSON.parse(JSON.stringify(rows)))

        //             //itemSelf, itemEnter
        //             let itemSelf = rows[msg.startInd]
        //             let itemEnter = rows[msg.endInd]
        //             // console.log('itemSelf', itemSelf, msg.startInd, itemSelf.item.nk)
        //             // console.log('itemEnter', itemEnter, msg.endInd, itemEnter.item.nk)

        //             //belong
        //             let belong = isBelong(itemEnter.item.nk, itemSelf.item.nk)
        //             // console.log('belong', belong)

        //             //ele, 因WDynamicList會重新封裝按需顯示, 故顯示拖曳指標區為上2層的父節點, 取top才會正確
        //             let ele = get(msg, `endEle.parentNode.parentNode`)

        //             //location
        //             vo.dgTipTop = cdbl(replace(ele.style.top, 'px', ''))
        //             vo.dgTipLeft = cdbl(replace(ele.style.left, 'px', ''))
        //             vo.dgTipWidth = ele.offsetWidth
        //             vo.dgTipHeight = ele.offsetHeight

        //             //dgTipMode
        //             if (belong) {
        //                 vo.dgTipMode = 'disabled'
        //             }
        //             else if (msg.ry <= 0.3) {
        //                 vo.dgTipMode = 'lineTop'
        //             }
        //             else if (msg.ry >= 0.7) {
        //                 vo.dgTipMode = 'lineBottom'
        //             }
        //             else if (msg.ry > 0.3 && msg.ry < 0.7) {
        //                 vo.dgTipMode = 'block'
        //             }
        //             else {
        //                 //不會有此狀況
        //                 vo.dgTipMode = ''
        //             }

        //         })
        //         drag.on('enter', (msg) => {
        //             //console.log('enter', msg)
        //         })
        //         drag.on('leave', (msg) => {
        //             //console.log('leave', msg)
        //             vo.dgTipMode = ''
        //         })
        //         drag.on('drop', (msg) => {
        //             // console.log('ondrop', msg.startInd, msg.endInd)

        //             //check, 拖曳至原始拖曳項目上, 無有效拖曳模式
        //             if (msg.startInd === msg.endInd) {
        //                 vo.dgTipMode = ''
        //                 return
        //             }

        //             //check, 多層組件觸發時可能會因leave觸發導致dgTipMode=''
        //             if (vo.dgTipMode === '') {
        //                 return
        //             }

        //             //modeDir
        //             let modeDir
        //             if (msg.startInd < msg.endInd) {
        //                 modeDir = 'backward'
        //             }
        //             else if (msg.startInd > msg.endInd) {
        //                 modeDir = 'forward'
        //             }
        //             else {
        //                 throw new Error('invalid modeDir')
        //             }
        //             // console.log('modeDir', modeDir)

        //             //modeInsert
        //             let modeInsert
        //             if (vo.dgTipMode === 'disabled') {
        //                 vo.dgTipMode = ''
        //             }
        //             else if (vo.dgTipMode === 'lineTop') {
        //                 modeInsert = 'before'
        //             }
        //             else if (vo.dgTipMode === 'lineBottom') {
        //                 modeInsert = 'after'
        //             }
        //             else if (vo.dgTipMode === 'block') {
        //                 modeInsert = 'belongto'
        //             }
        //             else {
        //                 console.log('dgTipMode', vo.dgTipMode)
        //                 throw new Error('invalid dgTipMode')
        //             }
        //             // console.log('modeInsert', modeInsert)

        //             //check, 純點擊時無move, 或拖曳至禁止對象內(通常是拖入自己子節點內)
        //             if (vo.dgTipMode === '') {
        //                 return
        //             }

        //             //clear, 已由dgTipMode換算出modeInsert, 拖曳完需清除dgTipMode使拖曳時指示對象隱藏
        //             vo.dgTipMode = ''

        //             //dragItem
        //             vo.dragItem(msg.startInd, msg.endInd, modeDir, modeInsert)

        //         })

        //         //save
        //         vo.drag = drag

        //     }

        //     //$nextTick, 因value變更時需驅動dom更新, 才能使domDrag抓到元素, 故需延遲執行
        //     vo.$nextTick(() => {

        //         //core
        //         core()
        //             .catch(() => {})

        //     })

        // },

        // dragClear: function() {
        //     //console.log('methods dragClear')

        //     let vo = this

        //     //clear
        //     if (vo.drag) {
        //         vo.drag.clear()
        //         vo.drag = null
        //     }

        // },

        clickOperateItem: function(msg) {
            // console.log('clickOperateItem', msg)

            let vo = this

            //add operateItem function and set from lodash
            msg.operateItem = vo.operateItem

            //emit
            vo.$emit('click-operate-item', msg)

        },

        setDataByPathAndValue: function(data, path, value) {
            // console.log('setDataByPathAndValue', data, path, value)

            let vo = this

            //set
            set(data, path, value)

            //setData
            vo.setData(data)

        },

    },
}
</script>

<style scoped>
</style>

