<template>
    <!-- 拖曳區可能超過組件區域外, 故得使用overflow:hidden -->
    <div
        style="position:relative; overflow:hidden;"
        :changeViewHeightMax="changeViewHeightMax"
        :changeActiveItem="changeActiveItem"
        :changeDefaultDisplayLevel="changeDefaultDisplayLevel"
        :changeDraggableAndOperatable="changeDraggableAndOperatable"
        :changeFilterKeyWords="changeFilterKeyWords"
    >

        <WDynamicList
            ref="wdl"
            :viewHeightMax="viewHeightMaxTrans"
            :itemMinHeight="defItemHeight"
            :itemsPreload="itemsPreload"
            :loadingText="loadingText"
            :noResultsText="noResultsText"
            :searchingText="searchingText"
            :show="show"
            @render="(msg)=>{$emit('render',msg)}"
            @change-view-items="(msg)=>{updateOperateShow(false);$emit('change-view-items',msg)}"
            @change-height-of-items="(msg)=>{updateViewHeightMaxTrans(msg);$emit('change-height-of-items',msg)}"
        >
            <template v-slot="props">

                <!-- 記得要:key, 使DOM可被唯一標記識別, 此為避免捲動按需顯示時, 因圖標有顯隱(2方向), 瞬間被Vue切換導致transition轉動問題 -->
                <!-- 要把原生拖曳功能關閉draggable=false -->
                <div
                    :key="`wt-${props.index}`"
                    :style="`
                        transition:all 0.3s; ${draggable?'user-select:none;':''}
                        ${getUseActivable(props)?'cursor:pointer;':''}
                        color:${getTextColor(props.row.item)};
                        background:${getBackgroundColor(props.row.item)};
                    `"
                    :dragindex="props.index"
                    v-domdragdrop="useDraggable?getDgOpt():null"
                    v-domripple="{color:itemRippleColor}"
                    @domdragdrop="dragdrop"
                    draggable="false"
                    @mouseenter="(e)=>{mouseenterItem(e,props)}"
                    @mouseleave="(e)=>{mouseleaveItem(e,props)}"
                    @click="(e)=>{clickItem(e,props)}"
                >
                    <div :style="`position:relative; display:table; ${usePadding}`">

                        <div :style="`display:table-cell; vertical-align:top;`">
                            <slot
                                name="head"
                                :index="props.index"
                                :data="props.row.item"
                                :row="props.row"
                            >
                            </slot>
                        </div>

                        <!-- display:table內各元素需使用padding撐開寬度避免被壓縮 -->

                        <div :style="`display:table-cell; vertical-align:top; padding-right:${getLevel(props.row)*useIndent}px;`"></div>

                        <!-- 顯隱圖標左側因右邊為文字或核選圖標導致間距呈現相對較窄, 故*2 -->
                        <div :style="`display:table-cell; vertical-align:top; padding-right:${2*separation}px;`"></div>

                        <div :style="`display:table-cell; vertical-align:top; padding-right:${separation}px;`">

                            <!-- 若有顯隱圖標才會有min-height效果 -->
                            <div :style="`min-height:${useItemHeightMin}px; display:flex; align-items:center; justify-content:center;`" v-if="hasChildren(props.index)">
                                <WTreeIconToggle
                                    :dir="`${props.row.unfolding?'bottom':'right'}`"
                                    :iconSize="iconSize"
                                    :iconColor="iconToggleColor"
                                    :iconDisabledColor="iconToggleDisabledColor"
                                    :iconBackgroundColor="iconToggleBackgroundColor"
                                    :iconBackgroundColorHover="iconToggleBackgroundColorHover"
                                    :editable="!useDraggableOrOperatable"
                                    @click.stop="toggleItems(props.row, null)"
                                ></WTreeIconToggle>
                            </div>

                            <!-- 若無顯隱圖標至少要撐開寬度 -->
                            <div :style="`min-height:${useItemHeightMin}px; padding-right:${iconSize}px;`" v-else></div>

                        </div>

                        <!-- 因顯隱圖標較小而右側間距看起來較寬, 故核選圖標右側間距*3 -->
                        <div :style="`display:table-cell; vertical-align:top; padding-right:${3*separation}px;`" v-if="selectable">
                            <div :style="`min-height:${useItemHeightMin}px; display:flex; align-items:center; justify-content:center;`">
                                <WTreeIconCheckbox
                                    :mode="props.row.checked"
                                    :iconSize="iconSize"
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
                        </div>

                        <!-- 給予width:100%使slot區可自動展開寬度至組件寬 -->
                        <div :style="`display:table-cell; vertical-align:top; width:100%;`">

                            <slot
                                name="item"
                                :index="props.index"
                                :data="props.row.item"
                                :row="props.row"
                                :keyPrimary="keyPrimary"
                                :keyText="keyText"
                                :keyChildren="keyChildren"
                                :setDataByPathAndValue="setDataByPathAndValue"
                                :isHover="pkHover===props.row.item[keyPrimary]"
                                :isActive="pkActive===props.row.item[keyPrimary]"
                            >
                                <!-- 得使用min-height否則無法撐開高度 -->
                                <div :style="`min-height:${useItemHeightMin}px; display:flex; align-items:center;`">
                                    {{getText(props.row.item)}}
                                </div>
                            </slot>

                        </div>

                        <!-- tree可能有捲軸, 給予預留與右側空間8px -->
                        <div
                            :style="`position:absolute; top:${(useItemHeightMin-(operateBtnIconSize+2*2))/2}px; right:8px;`"
                            v-if="getUseOperatable(props)"
                            @mousedown="(ev)=>{operateDisableEvent(ev,'mousedown')}"
                            @touchstart="(ev)=>{operateDisableEvent(ev,'touchstart')}"
                            @click="(ev)=>{operateDisableEvent(ev,'click')}"
                        >

                            <!-- 使用displayType=line使WPopup的display:block, 避免出現text-node間隙 -->
                            <WPopup
                                :isolated="true"
                                :displayType="'line'"
                                @show="operateDisplayEvent('show')"
                                @hide="operateDisplayEvent('hide')"
                            >

                                <template v-slot:trigger>
                                    <!-- 指定display:block避免有text-node間隙 -->
                                    <WButtonCircle
                                        style="display:block;"
                                        :paddingStyle="{v:2,h:2}"
                                        :icon="mdiDotsVertical"
                                        :iconSize="operateBtnIconSize"
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
                                        :style="`${getOperatePanelHeight(props)} width:${operatePanelWidth}px;`"
                                        :items="getUseOperateItems(props)"
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
                                        @mousedown.stop=""
                                    ></WListVertical>
                                </template>

                            </WPopup>

                        </div>

                    </div>
                </div>

            </template>
        </WDynamicList>

        <!-- 需使用pointer-events:none;禁用事件, 避免拖曳時因接觸此元素時出現enter與leave -->
        <div
            :style="`position:absolute; z-index:1; pointer-events:none; left:${dgTipLeft}px; top:${dgTipTop}px;`"
            v-if="dgTipMode!==''"
        >
            <template v-if="dgTipMode==='lineTop'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background:${useDgInsertBackgroundColor}; border-top:1px solid ${useDgInsertLineColor};`"></div>
            </template>
            <template v-else-if="dgTipMode==='lineBottom'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background:${useDgInsertBackgroundColor}; border-bottom:1px solid ${useDgInsertLineColor};`"></div>
            </template>
            <template v-else-if="dgTipMode==='block'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background:${uesDgBelongBackgroundColor};`"></div>
            </template>
            <template v-else-if="dgTipMode==='disabled'">
                <div :style="`display:inline-block; width:${dgTipWidth}px; height:${dgTipHeight}px; background:${useDgTextDisabledBackgroundColor};`">
                    <div :style="`height:${dgTipHeight}px; display:flex; align-items:center;`">
                        <div :style="`color:${useDgTextDisabledColor}; padding-left:${dgTextDisabledPaddingLeft}px; font-size:${dgTextDisabledFontSize};`">
                            {{dgTextDisabled}}
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <Teleport to="body">
            <WDialog
                :show.sync="editorShow"
                :minWidth="300"
                :maxWidth="300"
            >

                <template v-slot:panel>

                    <div :style="`padding:20px; border-bottom:1px solid #ddd; background:${useEditorContentBackgroundColor};`">

                        <div style="width:100%;">
                            <WText
                                :textColor="editorRenameInputTextColor"
                                :bottomLineBorderColor="editorRenameInputTextBottomLineBorderColor"
                                :bottomLineBorderColorHover="editorRenameInputTextBottomLineBorderColorHover"
                                :bottomLineBorderColorFocus="editorRenameInputTextBottomLineBorderColorFocus"
                                v-model="editorRenameInputText"
                                @enter="saveRename"
                            ></WText>
                        </div>

                    </div>

                    <div :style="`padding:10px; background:${useEditorFooterBackgroundColor}; display:flex; justify-content:flex-end;`">

                        <WButtonChip
                            :shiftLeft="-5"
                            :icon="editorRenameCancelBtnIcon"
                            :iconColor="editorRenameCancelBtnIconColor"
                            :iconColorHover="editorRenameCancelBtnIconColorHover"
                            :iconSize="editorRenameCancelBtnIconSize"
                            :text="editorRenameCancelBtnText"
                            :textColor="editorRenameCancelBtnTextColor"
                            :textColorHover="editorRenameCancelBtnTextColorHover"
                            :backgroundColor="editorRenameCancelBtnBackgroundColor"
                            :backgroundColorHover="editorRenameCancelBtnBackgroundColorHover"
                            :rippleColor="editorRenameCancelBtnIconRippleColor"
                            @click="cancelEditor"
                        ></WButtonChip>

                        <div style="padding-left:10px;"></div>

                        <WButtonChip
                            :shiftLeft="-5"
                            :icon="editorRenameSaveBtnIcon"
                            :iconColor="editorRenameSaveBtnIconColor"
                            :iconColorHover="editorRenameSaveBtnIconColorHover"
                            :iconSize="editorRenameSaveBtnIconSize"
                            :text="editorRenameSaveBtnText"
                            :textColor="editorRenameSaveBtnTextColor"
                            :textColorHover="editorRenameSaveBtnTextColorHover"
                            :backgroundColor="editorRenameSaveBtnBackgroundColor"
                            :backgroundColorHover="editorRenameSaveBtnBackgroundColorHover"
                            :rippleColor="editorRenameSaveBtnIconRippleColor"
                            @click="saveRename"
                        ></WButtonChip>

                    </div>

                </template>

            </WDialog>
        </Teleport>

    </div>
</template>

<script>
import { mdiDotsVertical, mdiRenameOutline, mdiFormatVerticalAlignTop, mdiFormatHorizontalAlignRight, mdiFormatVerticalAlignBottom, mdiClose, mdiCloseCircleOutline, mdiCloudUploadOutline } from '@mdi/js/mdi.js'
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
import genPm from 'wsemi/src/genPm.mjs'
import sep from 'wsemi/src/sep.mjs'
import isarr from 'wsemi/src/isarr.mjs'
import isobj from 'wsemi/src/isobj.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import ispm from 'wsemi/src/ispm.mjs'
import cint from 'wsemi/src/cint.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import cstr from 'wsemi/src/cstr.mjs'
import haskey from 'wsemi/src/haskey.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import flattenTreeWk from '../js/flattenTreeWk.wk.umd.js'
import globalMemory from '../js/globalMemory.mjs'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import domDragDrop from '../js/domDragDrop.mjs'
import domRipple from '../js/domRipple.mjs'
import WDynamicList from './WDynamicList.vue'
import WButtonCircle from './WButtonCircle.vue'
import WButtonChip from './WButtonChip.vue'
import WText from './WText.vue'
import WPopup from './WPopup.vue'
import WDialog from './WDialog.vue'
import WListVertical from './WListVertical.vue'
import WTreeIconToggle from './WTreeIconToggle.vue'
import WTreeIconCheckbox from './WTreeIconCheckbox.vue'
import Teleport from './Teleport.vue'


//gm
let gm = globalMemory()


/**
 * @vue-prop {Array|Object} [data=[]] 輸入資料陣列，預設[]，各元素配合slot顯示即可，slot內提供row與irow，對應原始rows內各元素與指標，另外各元素slot時不要用margin避免計算高度有誤差
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，若給予非數字則自動依照當前顯隱最高內容調整，預設400
 * @vue-prop {Number} [defaultDisplayLevel=null] 輸入初始展開層數數字，若輸入1就是預設展開至第1層，第2層(含)以下則都隱藏，若輸入null就是全展開，預設null
 * @vue-prop {Boolean} [activable=false] 輸入是否使用主動模式布林值，預設false
 * @vue-prop {Function} [funActive=null] 輸入主動模式時處理點擊項目函數，回傳true時代表點擊項目給予主動模式，回傳false代表點擊項目不給予主動模式，可應用於資料夾與有效項目之區隔，預設null
 * @vue-prop {Object} [itemActive={}] 輸入主動模式時外部給予主動模式項目物件，物件內至少要給予keyPrimary鍵值方能進行識別，預設{}
 * @vue-prop {Boolean} [selectable=false] 輸入是否具有勾選模式布林值，預設false
 * @vue-prop {Array} [selections=[]] 輸入勾選項目陣列，當selectable=true時才可使用，預設[]
 * @vue-prop {String} [keyPrimary='id'] 輸入可選項目為物件時，主鍵之欄位字串，預設'id'
 * @vue-prop {String} [keyText='text'] 輸入可選項目為物件時，顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyChildren='children'] 輸入可選項目為物件時，所屬子項目之欄位字串，預設'children'
 * @vue-prop {String} [keyLock='locked'] 輸入可選項目為物件時，禁止勾選之欄位字串，物件給予此欄位需為布林值，預設'locked'
 * @vue-prop {Object} [paddingStyle={v:0,h:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Number} [indent=1] 輸入縮排比率數字，若使用1就是1倍的圖標寬度(24px)+2*separation(3px)，預設1
 * @vue-prop {Number} [iconSize=24] 輸入顯隱與核選icon按鈕高度數字，單位為px，預設24
 * @vue-prop {String} [iconToggleColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [iconToggleDisabledColor='grey lighten-1'] 輸入顯隱icon按鈕禁用時顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [iconToggleBackgroundColor='transparent'] 輸入顯隱icon按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [iconToggleBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱icon按鈕背景顏色字串，預設'rgba(128,128,128,0.15)'
 * @vue-prop {String} [iconUncheckedColor='grey darken-2'] 輸入核選icon未勾選時顏色字串，預設'grey darken-2'
 * @vue-prop {String} [iconUncheckedDisabledColor='grey'] 輸入核選icon禁用時未勾選時顏色字串，預設'grey'
 * @vue-prop {String} [iconCheckedColor='blue darken-3'] 輸入核選icon勾選時顏色字串，預設'blue darken-3'
 * @vue-prop {String} [iconCheckedDisabledColor='grey'] 輸入核選icon禁用時勾選時顏色字串，預設'grey'
 * @vue-prop {String} [iconCheckedPartiallyColor='blue darken-3'] 輸入核選icon部份勾選時(子節點任一有勾選但非全部勾選)顏色字串，預設'blue darken-3'
 * @vue-prop {String} [iconCheckedPartiallyDisabledColor='grey'] 輸入核選icon禁用時部份勾選時顏色字串，預設'grey'
 * @vue-prop {String} [filterKeywords=''] 輸入過濾關鍵字字串，多關鍵字用空白分隔，預設''
 * @vue-prop {Function} [filterFunction=null] 輸入過濾時呼叫處理函數，可使用sync或async函數，傳入為各項目物件資料，若為sync函數回傳布林值，若為async函數等待resolve結果為布林值，代表項目內是否含有關鍵字，預設null
 * @vue-prop {String} [loadingText='Loading...'] 輸入載入中字串，預設'Loading...'
 * @vue-prop {String} [noResultsText='No results'] 輸入無過濾結果字串，預設'No results'
 * @vue-prop {String} [searchingText='Searching...'] 輸入搜索中字串，預設'Searching...'
 * @vue-prop {Number} [defItemHeight=34] 輸入按需顯示時各項目預設最小高度(min-height)值，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設34
 * @vue-prop {Number} [itemsPreload=5] 輸入上下方預先載入元素數量，預設5
 * @vue-prop {String} [itemTextColor='#444'] 輸入文字顏色字串，預設'#444'
 * @vue-prop {String} [itemTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
 * @vue-prop {String} [itemTextColorActive='#d72'] 輸入主動模式時文字顏色字串，預設'#d72'
 * @vue-prop {String} [itemBackgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [itemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [itemBackgroundColorActive='rgba(255,167,38,0.2)'] 輸入主動模式時背景顏色字串，預設'rgba(255,167,38,0.2)'
 * @vue-prop {String} [itemRippleColor='rgba(200,200,200,0.4)'] 輸入ripple效果顏色字串，預設'rgba(200,200,200,0.4)'
 * @vue-prop {Boolean} [draggable=false] 輸入是否為可拖曳編輯模式布林值，若draggable設定true，此時所有節點皆為展開顯示並且禁止顯隱節點功能，也就是defaultDisplayLevel強制設定為null，此外也不提供過濾功能，也就是filterKeywords強制清空。開啟draggable僅適用小規模數據。draggable預設false
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
 * @vue-prop {Number} [dgPreviewBorderWidth=0] 輸入拖曳時預覽元素邊框寬度數字，單位px，預設0
 * @vue-prop {String} [dgPreviewBorderColor='#f26'] 輸入拖曳時預覽元素邊框顏色字串，預設'#f26'
 * @vue-prop {String} [dgPreviewBackground='transparent'] 輸入拖曳時預覽元素背景顏色字串，預設'transparent'
 * @vue-prop {Boolean} [operatable=false] 輸入是否使用控制節點模式布林值，若operatable設定true，將於各項目右側顯示控制按鈕，點擊可彈出選單進行插入與刪除等項目，此時會觸發事件click-operate-item，而處理相應數據則需呼叫事件提供物件內operateItem函數，詳情請見範例。此時所有節點皆為展開顯示並且禁止顯隱節點功能，也就是defaultDisplayLevel強制設定為null，此外也不提供過濾功能，也就是filterKeywords強制清空。開啟operatable僅適用小規模數據。operatable預設false
 * @vue-prop {String} [operateItemTextForRename='Rename'] 輸入控制選項變更文字之文字字串，預設'Rename'
 * @vue-prop {String} [operateItemTextForInsertBefore='Insert before'] 輸入控制選項插入前項目之文字字串，預設'Insert before'
 * @vue-prop {String} [operateItemTextForInsertChild='Insert child'] 輸入控制選項插入子項目之文字字串，預設'Insert child'
 * @vue-prop {String} [operateItemTextForInsertAfter='Insert after'] 輸入控制選項插入後項目之文字字串，預設'Insert after'
 * @vue-prop {String} [operateItemTextForDelete='Delete'] 輸入控制選項刪除項目之文字字串，預設'Delete'
 * @vue-prop {String} [operateItemIconForRename=mdiRenameOutline] 輸入控制選項變更文字之圖標字串，預設mdiRenameOutline
 * @vue-prop {String} [operateItemIconForInsertBefore=mdiFormatVerticalAlignTop] 輸入控制選項插入前項目之圖標字串，預設mdiFormatVerticalAlignTop
 * @vue-prop {String} [operateItemIconForInsertChild=mdiFormatHorizontalAlignRight] 輸入控制選項插入子項目之圖標字串，預設mdiFormatHorizontalAlignRight
 * @vue-prop {String} [operateItemIconForInsertAfter=mdiFormatVerticalAlignBottom] 輸入控制選項插入後項目之圖標字串，預設mdiFormatVerticalAlignBottom
 * @vue-prop {String} [operateItemIconForDelete=mdiClose] 輸入控制選項刪除項目之圖標字串，預設mdiClose
 * @vue-prop {Object} [operateItemPaddingStyle={v:10,h:12}] 輸入控制選項內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {Number} [operatePanelWidth=150] 輸入控制選項寬度數字，單位px，預設150
 * @vue-prop {Number} [operatePanelHeight=null] 輸入控制選項高度數字，若為null則使用選項數量*operateItemHeight，單位px，預設null
 * @vue-prop {String} [operateBtnTooltip='Operations'] 輸入控制按鈕之提示文字字串，預設'Operations'
 * @vue-prop {Number} [operateBtnIconSize=22] 輸入控制按鈕圖標尺寸數字，單位px，預設22
 * @vue-prop {String} [operateBtnBackgroundColor='transparent'] 輸入控制按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [operateBtnBackgroundColorHover='rgba(230,230,230,0.7)'] 輸入滑鼠移入時控制按鈕背景顏色字串，預設'rgba(230,230,230,0.7)'
 * @vue-prop {String} [operateBtnBackgroundColorFocus='rgba(230,230,230,0.9)'] 輸入取得焦點時控制按鈕背景顏色字串，預設'rgba(230,230,230,0.9)'
 * @vue-prop {String} [operateItemBackgroundColor='transparent'] 輸入控制項目背景顏色字串，預設'transparent'
 * @vue-prop {String} [operateItemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時控制項目背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {Number} [operateItemHeight=42] 輸入控制項目高度數字，單位px，預設42
 * @vue-prop {String} [operateItemTextColor='#444'] 輸入控制項目文字顏色字串，預設'#444'
 * @vue-prop {String} [operateItemTextColorHover='#222'] 輸入滑鼠移入時控制項目文字顏色字串，預設'#222'
 * @vue-prop {Number} [operateItemIconSize=22] 輸入控制項目圖標尺寸數字，單位px，預設22
 * @vue-prop {String} [operateItemIconColor='#444'] 輸入控制項目圖標顏色字串，預設'#444'
 * @vue-prop {String} [operateItemIconColorHover='#222'] 輸入滑鼠移入時控制項目圖標顏色字串，預設'#222'
 * @vue-prop {Function} [funOperateItem=null] 輸入使用控制節點模式時處理項目函數，回傳陣列代表該項目提供指定控制按鈕，回傳true代表提供全部控制按鈕，回傳false或空陣列代表不提供控制按鈕，可應用於檔案清單之根目錄禁用控制節點模式或特定項目採用控制節點模式，預設null
 * @vue-prop {String} [editorRenameContentBackgroundColor='white'] 輸入變更文字彈窗之內容區塊背景顏色字串，預設'white'
 * @vue-prop {String} [editorRenameFooterBackgroundColor='grey lighten-5'] 輸入變更文字彈窗之下方區背景顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [editorRenameInputTextColor='grey darken-3'] 輸入變更文字彈窗之輸入文字框之文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [editorRenameInputTextBottomLineBorderColor='grey lighten-1'] 輸入變更文字彈窗之輸入文字框之底部線顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [editorRenameInputTextBottomLineBorderColorHover='grey'] 輸入變更文字彈窗之輸入文字框之滑鼠移入時底部線顏色字串，預設'grey'
 * @vue-prop {String} [editorRenameInputTextBottomLineBorderColorFocus='blue darken-1'] 輸入變更文字彈窗之輸入文字框之取得焦點時底部線顏色字串，預設'blue darken-1'
 * @vue-prop {String} [editorRenameCancelBtnText='Save'] 輸入變更文字彈窗之取消按鈕文字字串，預設'Save'
 * @vue-prop {String} [editorRenameCancelBtnTextColor='grey darken-3'] 輸入變更文字彈窗之取消按鈕文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [editorRenameCancelBtnTextColorHover='grey darken-2'] 輸入變更文字彈窗之滑鼠移入時取消按鈕文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [editorRenameCancelBtnIcon=mdiCloseCircleOutline] 輸入變更文字彈窗之取消按鈕圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCloseCircleOutline
 * @vue-prop {Number} [editorRenameCancelBtnIconSize=22] 輸入變更文字彈窗之取消按鈕圖標大小，單位為px，預設22
 * @vue-prop {String} [editorRenameCancelBtnIconColor='grey darken-1'] 輸入變更文字彈窗之取消按鈕圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [editorRenameCancelBtnIconColorHover='grey darken-2'] 輸入變更文字彈窗之滑鼠移入時取消按鈕圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [editorRenameCancelBtnIconRippleColor='rgba(200,200,200,0.4)'] 輸入變更文字彈窗之取消按鈕ripple效果顏色字串，預設'rgba(200,200,200,0.4)'
 * @vue-prop {String} [editorRenameCancelBtnBackgroundColor='white'] 輸入變更文字彈窗之取消按鈕背景顏色字串，預設'white'
 * @vue-prop {String} [editorRenameCancelBtnBackgroundColorHover='grey lighten-3'] 輸入變更文字彈窗之滑鼠移入時取消按鈕背景顏色字串，預設'grey lighten-3'
 * @vue-prop {String} [editorRenameSaveBtnText='Save'] 輸入變更文字彈窗之儲存按鈕文字字串，預設'Save'
 * @vue-prop {String} [editorRenameSaveBtnTextColor='grey darken-3'] 輸入變更文字彈窗之儲存按鈕文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [editorRenameSaveBtnTextColorHover='grey darken-2'] 輸入變更文字彈窗之滑鼠移入時儲存按鈕文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [editorRenameSaveBtnIcon=mdiCloudUploadOutline] 輸入變更文字彈窗之儲存按鈕圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxMarkedCircle
 * @vue-prop {Number} [editorRenameSaveBtnIconSize=22] 輸入變更文字彈窗之儲存按鈕圖標大小，單位為px，預設22
 * @vue-prop {String} [editorRenameSaveBtnIconColor='grey darken-1'] 輸入變更文字彈窗之儲存按鈕圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [editorRenameSaveBtnIconColorHover='grey darken-2'] 輸入變更文字彈窗之滑鼠移入時儲存按鈕圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [editorRenameSaveBtnIconRippleColor='rgba(200,200,200,0.4)'] 輸入變更文字彈窗之儲存按鈕ripple效果顏色字串，預設'rgba(200,200,200,0.4)'
 * @vue-prop {String} [editorRenameSaveBtnBackgroundColor='white'] 輸入變更文字彈窗之儲存按鈕背景顏色字串，預設'white'
 * @vue-prop {String} [editorRenameSaveBtnBackgroundColorHover='grey lighten-3'] 輸入變更文字彈窗之滑鼠移入時儲存按鈕背景顏色字串，預設'grey lighten-3'
 * @vue-prop {Boolean} [show=true] 輸入是否為顯示模式布林值，預設true，供組件嵌入popup時, 因先初始化但尚未顯示不需渲染, 可給予show=false避免無限偵測與重算高度問題
 */
export default {
    directives: {
        domdragdrop: domDragDrop(),
        domripple: domRipple(),
    },
    components: {
        WDynamicList,
        WButtonCircle,
        WButtonChip,
        WText,
        WPopup,
        WDialog,
        WListVertical,
        WTreeIconToggle,
        WTreeIconCheckbox,
        Teleport,
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
        activable: {
            type: Boolean,
            default: false,
        },
        funActive: {
            type: Function,
            default: null,
        },
        itemActive: {
            type: Object,
            default: () => {},
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
        iconSize: {
            type: Number,
            default: 24,
        },
        iconToggleColor: {
            type: String,
            default: 'grey',
        },
        iconToggleDisabledColor: {
            type: String,
            default: 'grey lighten-1',
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
            default: 34,
        },
        itemsPreload: {
            type: Number,
            default: 5,
        },
        itemTextColor: {
            type: String,
            default: '#444',
        },
        itemTextColorHover: {
            type: String,
            default: '#222',
        },
        itemTextColorActive: {
            type: String,
            default: '#d72',
        },
        itemBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        itemBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.2)',
        },
        itemBackgroundColorActive: {
            type: String,
            default: 'rgba(255,167,38,0.2)',
        },
        itemRippleColor: {
            type: String,
            default: 'rgba(200,200,200,0.4)',
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
        operateItemTextForRename: {
            type: String,
            default: 'Rename',
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
        operateItemTextForDelete: {
            type: String,
            default: 'Delete',
        },
        operateItemIconForRename: {
            type: String,
            default: mdiRenameOutline,
        },
        operateItemIconForInsertBefore: {
            type: String,
            default: mdiFormatVerticalAlignTop,
        },
        operateItemIconForInsertChild: {
            type: String,
            default: mdiFormatHorizontalAlignRight,
        },
        operateItemIconForInsertAfter: {
            type: String,
            default: mdiFormatVerticalAlignBottom,
        },
        operateItemIconForDelete: {
            type: String,
            default: mdiClose,
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
            default: null,
        },
        operateBtnTooltip: {
            type: String,
            default: 'Operations',
        },
        operateBtnIconSize: {
            type: Number,
            default: 22,
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
        operateItemHeight: {
            type: Number,
            default: 42,
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
        funOperateItem: {
            type: Function,
            default: null,
        },
        editorRenameContentBackgroundColor: {
            type: String,
            default: 'white',
        },
        editorRenameFooterBackgroundColor: {
            type: String,
            default: 'grey lighten-5',
        },
        editorRenameInputTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        editorRenameInputTextBottomLineBorderColor: {
            type: String,
            default: 'grey lighten-1',
        },
        editorRenameInputTextBottomLineBorderColorHover: {
            type: String,
            default: 'grey',
        },
        editorRenameInputTextBottomLineBorderColorFocus: {
            type: String,
            default: 'blue darken-1',
        },
        editorRenameCancelBtnText: {
            type: String,
            default: 'Cancel',
        },
        editorRenameCancelBtnTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        editorRenameCancelBtnTextColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        editorRenameCancelBtnIcon: {
            type: String,
            default: mdiCloseCircleOutline,
        },
        editorRenameCancelBtnIconSize: {
            type: Number,
            default: 22,
        },
        editorRenameCancelBtnIconColor: {
            type: String,
            default: 'grey darken-1',
        },
        editorRenameCancelBtnIconColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        editorRenameCancelBtnIconRippleColor: {
            type: String,
            default: 'rgba(200,200,200,0.4)',
        },
        editorRenameCancelBtnBackgroundColor: {
            type: String,
            default: 'white',
        },
        editorRenameCancelBtnBackgroundColorHover: {
            type: String,
            default: 'grey lighten-3',
        },
        editorRenameSaveBtnText: {
            type: String,
            default: 'Save',
        },
        editorRenameSaveBtnTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        editorRenameSaveBtnTextColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        editorRenameSaveBtnIcon: {
            type: String,
            default: mdiCloudUploadOutline,
        },
        editorRenameSaveBtnIconSize: {
            type: Number,
            default: 22,
        },
        editorRenameSaveBtnIconColor: {
            type: String,
            default: 'grey darken-1',
        },
        editorRenameSaveBtnIconColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        editorRenameSaveBtnIconRippleColor: {
            type: String,
            default: 'rgba(200,200,200,0.4)',
        },
        editorRenameSaveBtnBackgroundColor: {
            type: String,
            default: 'white',
        },
        editorRenameSaveBtnBackgroundColorHover: {
            type: String,
            default: 'grey lighten-3',
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

            // mmkey: null,
            mmkey: genID(), //beforeMount內無法變更data, mounted內會晚於computed, 故優先放於data生成
            // mmkey: (() => {
            //     let id = genID()
            //     console.log('data gen mmkey', id)
            //     return id
            // })(),

            viewHeightMaxTrans: 2, //預設給予>=2最小內容區高度, 使能觸發顯示渲染連動機制

            separation: 3,
            defIconSize: 24,
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

            pkActive: '',
            pkHover: '',

            operateShow: false,

            editorShow: false,
            editorPm: null,
            editorRenameData: null,
            editorRenameItem: {},
            editorRenameInputText: '',

        }
    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //remove
        if (vo.mmkey !== null) {
            gm.remove(vo.mmkey)
        }

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

        selections: {
            immediate: true,
            deep: true,
            handler(value) {
                // console.log('watch selections', value)

                let vo = this

                //updateSelections
                vo.updateSelections()

            }
        },

    },
    computed: {

        changeViewHeightMax: function() {
            let vo = this

            //save
            if (isNumber(vo.viewHeightMax)) {
                vo.viewHeightMaxTrans = vo.viewHeightMax
                // console.log('changeViewHeightMax viewHeightMaxTrans', vo.viewHeightMaxTrans)
            }

            return ''
        },

        changeActiveItem: function() {
            let vo = this

            //pk
            let pk = get(vo.itemActive, vo.keyPrimary)
            // console.log('pk', pk)

            //save pkActive
            if (vo.isKey(pk)) {
                vo.pkActive = pk
            }
            else {
                vo.pkActive = ''
            }

            return ''
        },

        changeDefaultDisplayLevel: function() {
            //console.log('computed changeDefaultDisplayLevel')

            let vo = this

            //save
            vo.defaultDisplayLevelTrans = vo.defaultDisplayLevel

            return ''
        },

        useDraggableOrOperatable: function() {
            //console.log('computed useDraggableOrOperatable')

            let vo = this

            return vo.draggable || vo.operatable
        },

        changeDraggableAndOperatable: function() {
            //console.log('computed changeDraggableAndOperatable')

            let vo = this

            //若draggable或operatable為true, 則defaultDisplayLevel強制為null, filterKeywords強制清空
            if (vo.useDraggableOrOperatable) {
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

        useItemHeightMin: function() {
            //console.log('computed useItemHeightMin')

            let vo = this

            return Math.max(vo.iconSize, vo.defItemHeight)
        },

        useIndent: function() {
            //console.log('computed useIndent')

            let vo = this

            return vo.indent * (vo.defIconSize + 2 * vo.separation)
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

        useItemTextColor: function() {
            //console.log('computed useItemTextColor')

            let vo = this

            return color2hex(vo.itemTextColor)
        },

        useItemBackgroundColor: function() {
            //console.log('computed useItemBackgroundColor')

            let vo = this

            return color2hex(vo.itemBackgroundColor)
        },

        useItemTextColorHover: function() {
            //console.log('computed useItemTextColorHover')

            let vo = this

            return color2hex(vo.itemTextColorHover)
        },

        useItemBackgroundColorHover: function() {
            //console.log('computed useItemBackgroundColorHover')

            let vo = this

            return color2hex(vo.itemBackgroundColorHover)
        },

        useItemTextColorActive: function() {
            //console.log('computed useItemTextColorActive')

            let vo = this

            return color2hex(vo.itemTextColorActive)
        },

        useItemBackgroundColorActive: function() {
            //console.log('computed useItemBackgroundColorActive')

            let vo = this

            return color2hex(vo.itemBackgroundColorActive)
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

        operateItems: function() {
            //console.log('computed operateItems')

            let vo = this

            //rs
            let rs = [
                {
                    key: 'Rename',
                    text: vo.operateItemTextForRename,
                    icon: vo.operateItemIconForRename,
                },
                {
                    key: 'InsertBefore',
                    text: vo.operateItemTextForInsertBefore,
                    icon: vo.operateItemIconForInsertBefore,
                },
                {
                    key: 'InsertChild',
                    text: vo.operateItemTextForInsertChild,
                    icon: vo.operateItemIconForInsertChild,
                },
                {
                    key: 'InsertAfter',
                    text: vo.operateItemTextForInsertAfter,
                    icon: vo.operateItemIconForInsertAfter,
                },
                {
                    key: 'Delete',
                    text: vo.operateItemTextForDelete,
                    icon: vo.operateItemIconForDelete,
                },
            ]

            return rs
        },

        useDraggable: function() {
            //console.log('computed useDraggable')

            let vo = this

            //b, 彈窗內點擊或拖曳項目亦會驅動drag, 故須使用operateShow偵測禁用拖曳功能
            let b = vo.draggable && !vo.operateShow

            return b
        },

        useEditorContentBackgroundColor: function() {
            let vo = this
            return color2hex(vo.editorRenameContentBackgroundColor)
        },

        useEditorFooterBackgroundColor: function() {
            let vo = this
            return color2hex(vo.editorRenameFooterBackgroundColor)
        },

    },
    methods: {

        getEmitData: function(e, props) {
            //console.log('methods getEmitData', e, props)

            // let vo = this

            //r
            let r = {
                event: e,
                ele: get(e, 'currentTarget', null),
                row: props.row,
                item: props.row.item,
                index: props.index
            }

            return r
        },

        updateViewHeightMaxTrans: function(msg) {
            // console.log('methods updateViewHeightMaxTrans', msg)

            let vo = this

            //check, 若viewHeightMax給予數字則將直接使用, 故不更新viewHeightMaxTrans
            if (isNumber(vo.viewHeightMax)) {
                return
            }

            //update viewHeightMaxTrans
            let h = get(msg, 'height')
            if (isNumber(h)) {
                vo.viewHeightMaxTrans = h
                // console.log('updateViewHeightMaxTrans viewHeightMaxTrans', vo.viewHeightMaxTrans)
            }

        },

        getRowsFromData: async function(data) {
            //console.log('methods getRowsFromData', data)

            let vo = this

            //flattenTreeWk
            let ts = await flattenTreeWk(data, { bindKey: vo.keyPrimary, bindChildren: vo.keyChildren })

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
                    let msg = 'data is not an array or object'
                    //console.log(msg)
                    return msg
                }

                //mmkey, 產生mmkey要放在資料變更的地方, 否則須放在beforeMount, 且於vue-cli編譯情況下會有部份情境有問題
                if (vo.mmkey === null) {

                    // //mmkey
                    // vo.mmkey = genID()

                }
                else {

                    //remove
                    gm.remove(vo.mmkey)

                }

                //cloneDeep
                data = cloneDeep(data)
                // console.log('setData data', cloneDeep(data))

                //getRowsFromData
                let rows = await vo.getRowsFromData(data)
                // console.log('setData getRowsFromData rows', cloneDeep(rows))

                //save
                //vo.rows = rows
                gm.set(vo.mmkey, rows)

                //wait wdl, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.wdl !== undefined
                }, { timeInterval: 20 })

                //setRows
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wdl.setRows(rows)
                }

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
            let t = get(item, vo.keyText, '')
            t = cstr(t)
            return t
        },

        getEditable: function (item) {
            //console.log('methods getEditable', item)
            let vo = this
            return !get(item, vo.keyLocked, false)
        },

        isKey: function(k) {
            return isestr(k) || isnum(k)
        },

        getUseActivable: function(props) {
            // console.log('getUseActivable', props)
            let vo = this

            //activable
            if (!vo.activable) {
                return false
            }

            //ck
            let ck = true
            if (isfun(vo.funActive)) {

                //funActive
                ck = vo.funActive(vo.getEmitData({}, props))

                //check
                if (!isbol(ck)) {
                    throw new Error(`funActive return value is not a boolean`)
                }

            }

            return ck
        },

        getTextColor: function(item) {
            // console.log('getTextColor', item)
            let vo = this

            //pk
            let pk = get(item, vo.keyPrimary)
            // console.log('getTextColor pk', pk)

            //check
            if (!vo.isKey(pk)) {
                return vo.useItemTextColor
            }

            //active
            if (vo.isKey(vo.pkActive) && pk === vo.pkActive) {
                // console.log('getTextColor vo.useItemTextColorActive', vo.useItemTextColorActive)
                return vo.useItemTextColorActive
            }

            //hover
            if (vo.isKey(vo.pkHover) && pk === vo.pkHover) {
                // console.log('getTextColor vo.useItemTextColorHover', vo.useItemTextColorHover)
                return vo.useItemTextColorHover
            }

            return vo.useItemTextColor
        },

        getBackgroundColor: function(item) {
            // console.log('getBackgroundColor', item)
            let vo = this

            //pk
            let pk = get(item, vo.keyPrimary)
            // console.log('getBackgroundColor pk', pk)

            //check
            if (!vo.isKey(pk)) {
                return vo.useItemBackgroundColor
            }

            //active
            if (vo.isKey(vo.pkActive) && pk === vo.pkActive) {
                // console.log('getBackgroundColor vo.useItemBackgroundColorActive', vo.useItemBackgroundColorActive)
                return vo.useItemBackgroundColorActive
            }

            //hover
            if (vo.isKey(vo.pkHover) && pk === vo.pkHover) {
                // console.log('getBackgroundColor vo.useItemBackgroundColorHover', vo.useItemBackgroundColorHover)
                return vo.useItemBackgroundColorHover
            }

            return vo.useItemBackgroundColor
        },

        mouseenterItem: function(e, props) {
            // console.log('mouseenterItem', e, props)

            let vo = this

            //item
            let item = get(props, 'row.item')

            //pk
            let pk = get(item, vo.keyPrimary)

            //check
            if (vo.isKey(pk)) {

                //save pkHover
                vo.pkHover = pk

            }

            //emit
            vo.$emit('mouseenter', vo.getEmitData(e, props))

        },

        mouseleaveItem: function(e, props) {
            // console.log('mouseleaveItem', e, props)

            let vo = this

            //clear pkHover
            vo.pkHover = ''

            //emit
            vo.$emit('mouseleave', vo.getEmitData(e, props))

        },

        clickItem: function(e, props) {
            // console.log('clickItem', e, props)

            let vo = this

            //activable
            if (vo.activable) {
                while (true) {

                    //item
                    let item = get(props, 'row.item')
                    // console.log('clickItem item', item)

                    //funActive
                    let ck = true
                    if (isfun(vo.funActive)) {
                        ck = vo.funActive(vo.getEmitData(e, props))
                    }

                    //check
                    if (!ck) {
                        break
                    }

                    //pk
                    let pk = get(item, vo.keyPrimary)
                    // console.log('clickItem pk', pk)

                    //check
                    if (!vo.isKey(pk)) {
                        break
                    }

                    //save pkActive
                    vo.pkActive = pk

                    //itemActive
                    let itemActive = { [vo.keyPrimary]: pk }
                    //  console.log('clickItem itemActive', itemActive)

                    //emit
                    vo.$emit('update:itemActive', itemActive)

                    break
                }
            }

            //emit
            vo.$emit('click', vo.getEmitData(e, props))

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

                //check
                if (isEqual(vo.selectionsTrans, vo.selections)) {
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
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wdl.processItems(opt)
                }

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

        getRows: function() {
            //console.log('methods getRows')
            //主要供外部例如WJsonView讀取展開後rows數量, 藉此調整顯示列數量欄寬

            let vo = this

            //rows
            let rows = gm.get(vo.mmkey)

            return rows
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

            //unfoldingChain, 紀錄自己與其下子節點的unfolding值
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
                    console.log('invalid items[i].row.item.level')
                    return
                }

                //modify displayShow
                for (let i = ind + 1; i < items.length; i++) {
                    //點擊節點後之各子節點

                    //levelNow
                    let levelNow = get(items, `${i}.row.item.level`, null)
                    if (levelNow === null) {
                        console.log('invalid items[i].row.item.level')
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
            // console.log('modifySelf unfoldingChain', unfoldingChain)

            //modifyChildren
            modifyChildren(ind, unfolding)
            // console.log('modifyChildren unfoldingChain', unfoldingChain)

        },

        unfoldingItemParentsCore: function(items, ind) {
            // console.log('methods unfoldingItemParentsCore', items, ind)

            let vo = this

            //unfolding parents
            let level = 1e20
            let rs = []
            for (let i = ind; i >= 0; i--) {
                // console.log('i', i)

                //levelNow
                let levelNow = get(items, `${i}.row.item.level`, null)
                if (levelNow === null) {
                    console.log('invalid items[i].row.item.level')
                    return
                }

                //check
                if (level > levelNow) {
                    // console.log('get level', levelNow, items[i].row.item.text)

                    //ind
                    let ind = get(items, `${i}.row.index`, null)
                    if (ind === null) {
                        console.log('invalid items[i].row.index')
                        return
                    }

                    //push, 紀錄需展開之父層節點編號(含自己)
                    rs.push(ind)
                    // console.log('rs', rs)

                    //update
                    level = levelNow

                }

                //check
                if (level === 0) {
                    break //已處理至最頂層可先跳出加速
                }

            }

            //reverse, 由最頂層往下排
            rs = reverse(rs)

            //dropRight, 剔除自己
            // console.log('rs1', cloneDeep(rs))
            rs = dropRight(rs)
            // console.log('rs2', cloneDeep(rs))

            //由頂層往下依序展開
            each(rs, (ind) => {

                //toggleItemsCore
                vo.toggleItemsCore(items, ind, true) //展開指定父層

            })

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

                        //toggleItemsCore
                        each(items, (v, k) => {
                            if (v.row.item.level >= l && v.row.unfolding) {
                                vo.toggleItemsCore(items, k, false) //非指定層數則隱藏
                            }
                        })

                    }
                }

                //processItems
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wdl.processItems(opt)
                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        toggleItemsAllCore: function(items, toUnfolding, toLevel = 0) {
            // console.log('methods toggleItemsAllCore', items, toUnfolding, toLevel)

            let vo = this

            //check, 若指定level小於0則使用預設值0
            if (toLevel < 0) {
                toLevel = 0
            }
            // console.log('toLevel', toLevel)

            //check, 若指定level大於0, 則代表是指定顯示至level而其下節點皆隱藏, 故toUnfolding=false
            if (toLevel > 0) {
                toUnfolding = false
            }
            // console.log('toUnfolding', toUnfolding)

            //toggleItemsCore
            each(items, (v, k) => {
                // console.log(`v.row.item.level`, v.row.item.level, `v.row.unfolding[${v.row.unfolding}] !== toUnfolding[${toUnfolding}]`, v.row.unfolding !== toUnfolding)
                if (v.row.item.level >= toLevel && (v.row.unfolding !== toUnfolding)) {
                    vo.toggleItemsCore(items, k, toUnfolding) //大於等於指定層且與指定顯隱不同, 則切換
                }
                else if (v.row.item.level < toLevel && (v.row.unfolding !== (!toUnfolding))) {
                    vo.toggleItemsCore(items, k, !toUnfolding) //大於等於指定層且與指定顯隱不同, 則切換
                }
            })

        },

        toggleItemsAll: function(toUnfolding, toLevel = 0) {
            // console.log('methods toggleItemsAll', toUnfolding, toLevel)

            let vo = this

            async function core() {

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                        // console.log('items', cloneDeep(items))

                        //toggleItemsAllCore
                        vo.toggleItemsAllCore(items, toUnfolding, toLevel)

                    }
                }

                //processItems
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wdl.processItems(opt)
                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        toggleItems: function(item, toUnfolding) {
            // console.log('methods toggleItems', item, toUnfolding)

            let vo = this

            async function core() {

                //check
                if (!vo.$refs.wdl) {
                    return
                }

                //check useDraggableOrOperatable
                if (vo.useDraggableOrOperatable) {
                    // console.log('禁止顯隱節點')
                    return
                }

                //opt
                let opt = {
                    fun: function(items) {
                        //console.log('items', cloneDeep(items))

                        //ind
                        let ind = get(item, 'index', null)
                        if (ind === null) {
                            console.log('invalid item.index')
                            return
                        }

                        // //wdl rows, 取得wdl內展示數據
                        // let rows = vo.$refs.wdl.getRows()
                        // // console.log('wdl rows', rows)

                        // //displayShow, 提取節點之直接顯示狀態
                        // let displayShow = get(rows, `${ind}.displayShow`)
                        // // console.log('displayShow', displayShow)

                        // //filterShow, 提取節點之過濾後顯示狀態
                        // let filterShow = get(rows, `${ind}.filterShow`)
                        // // console.log('filterShow', filterShow)

                        // //show, 節點是否為顯示狀態
                        // let show = !(!displayShow || !filterShow)
                        // // console.log('show', show)

                        // //check show, 若非顯示代表由上層隱藏或被過濾而隱藏, 不提供切換功能
                        // if (!show) {
                        //     console.log('本節點為非顯示狀態(包含節點隱藏與過濾被剔除)')
                        //     return
                        // }

                        //unfolding
                        let unfolding = get(items, `${ind}.row.unfolding`, null)
                        if (unfolding === null) {
                            console.log('invalid unfolding')
                            return
                        }

                        //toUnfolding
                        if (isbol(toUnfolding)) { //若有指定要展開或隱藏

                            //check 若節點當前已為指定要展開或隱藏, 則不用處理
                            // if (toUnfolding === unfolding) {
                            //     return
                            // }

                            //update
                            unfolding = toUnfolding

                            //若指定展開(toUnfolding=true), 得展開各父層節點
                            if (toUnfolding) {
                                // console.log('toUnfolding=true: call unfoldingItemParentsCore')
                                vo.unfoldingItemParentsCore(items, ind)
                            }

                        }
                        else {

                            //本身節點變更unfolding
                            unfolding = !unfolding

                            //若原本為隱藏而需展開(unfolding=!unfolding), 得展開各父層節點
                            if (unfolding) {
                                // console.log('unfolding=!unfolding: call unfoldingItemParentsCore')
                                vo.unfoldingItemParentsCore(items, ind)
                            }

                        }

                        //toggleItemsCore
                        vo.toggleItemsCore(items, ind, unfolding)

                    }
                }

                //processItems
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wdl.processItems(opt)
                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        toggleItemsByFun: async function(cb) {
            // console.log('methods toggleItemsByFun', cb)

            let vo = this

            //check
            if (!isfun(cb)) {
                return
            }

            //getRows, 取得展開後數據
            let rows = vo.getRows()
            // console.log('rows', rows)

            //r, 通過cb回傳操作物件, 包含欲顯隱之row與toUnfolding, 若toUnfolding不給則進行反向切換顯隱, cb亦支援使用async function使用resolve回傳操作物件
            let r = cb(rows)

            //check
            if (ispm(r)) {
                r = await r
            }

            //row
            let row = get(r, 'row')
            // console.log('row', row)

            //check
            if (!iseobj(row)) {
                console.log('invalid row', row)
                return
            }

            //toUnfolding
            let toUnfolding = get(r, 'toUnfolding')

            //check
            if (!isbol(toUnfolding)) {
                // console.log('invalid toUnfolding', toUnfolding, 'default to null')
                toUnfolding = null
            }

            //toggleItems, 切換或指定顯隱狀態
            vo.toggleItems(row, toUnfolding)

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
                        console.log('invalid items[i].row.item.level')
                        return
                    }

                    //modify checked
                    for (let i = ind + 1; i < items.length; i++) {
                    //點擊節點後之各子節點

                        //levelNow
                        let levelNow = get(items, `${i}.row.item.level`, null)
                        if (levelNow === null) {
                            console.log('invalid items[i].row.item.level')
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
                    console.log('invalid items[i].row.item.level')
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
                        console.log('invalid items[i].row.item.level')
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
                        console.log('invalid items[i].row.item.level')
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
            // console.log('methods checkItems', item)

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
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wdl.processItems(opt)
                }

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

        filterKeyWordsCore: async function(items) {
            // console.log('methods filterKeyWordsCore', items)

            let vo = this

            //check useDraggableOrOperatable
            if (vo.useDraggableOrOperatable) {
                // console.log('禁止過濾')
                return Promise.resolve()
            }

            //check filterKeywordsTransTemp
            if (vo.filterKeywordsTransTemp === vo.filterKeywordsTrans) {
                return Promise.resolve()
            }

            //filterKeywordsTransTemp
            vo.filterKeywordsTransTemp = vo.filterKeywordsTrans //因為函數為同步故可以先覆寫至temp

            //searchingResults
            let searchingResults = 0 //儲存全部關鍵字是否有找到至少一個項目

            //check
            if (size(vo.filterKeywordsTrans) === 0) {

                //預設可見
                for (let i = 0; i < items.length; i++) {
                    items[i].filterShow = true
                }

                //searchingResults
                searchingResults = items.length

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
                        b = vo.filterFunction(items[i].row.item, kws)

                        //check
                        if (ispm(b)) {
                            b = await b
                        }

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

                        //searchingResults
                        searchingResults++

                    }
                    else {

                        //此節點隱藏
                        items[i].filterShow = false

                    }

                }

            }

            return searchingResults
        },

        filterKeyWords: function() {
            // console.log('methods filterKeyWords')

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
                let searchingResults = -1
                let opt = {
                    fun: async function(items) {

                        //filterKeyWordsCore
                        searchingResults = await vo.filterKeyWordsCore(items)

                    }
                }

                //setSearchingResults
                vo.$refs.wdl.setSearchingResults(-1)

                //processItems
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    await vo.$refs.wdl.processItems(opt)
                }

                //setSearchingResults, 依照搜尋結果數量給予wdl, 否則沒辦法呈現無搜尋結果
                if (vo.$refs.wdl) { //於async中組件切換時還是有可能消失
                    vo.$refs.wdl.setSearchingResults(searchingResults)
                }

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

        getPathInfors: function (data, nk) {
            //console.log('methods getPathInfors', data, nk)

            let vo = this

            //ps
            let ps = []
            for (let i = 0; i < size(nk); i++) {

                //k
                let k = nk[i]

                //check
                if (k === vo.keyChildren) {
                    continue
                }

                //tss
                let tss = []
                for (let j = 0; j <= i; j++) {
                    tss.push(nk[j])
                }

                //p
                let p = get(data, tss)

                //pt
                let pt = {}
                each(p, (vv, kk) => {
                    if (kk === vo.keyChildren) {
                        return true //跳出換下一個
                    }
                    pt[kk] = vv
                })

                //push
                ps.push(pt)

            }

            return ps
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
            let dataSelf = cloneDeep(get(data, nkSelf))
            // let dataEnter = get(data, nkEnter)
            // console.log('nkSelf', nkSelf)
            // console.log('dataSelf', dataSelf)
            // console.log('nkEnter', nkEnter)
            // console.log('dataEnter', dataEnter)

            //pathInforsOri, pathInforsNew, nkOri, nkNew
            let pathInforsOri = vo.getPathInfors(data, nkSelf) //要先取得, 否則modeDir=forward時會先刪除來源導致之後就無法取得
            let pathInforsNew = []
            let nkOri = nkSelf //可先取得
            let nkNew = []

            //modeDir
            if (modeDir === 'forward') {
                //若為由後往前移動, 則需先刪除來源節點, 否則同資料夾下節點先移動會導致來源節點指標+1無法刪除
                vo.deleteItem(data, nkSelf)
                // console.log('modeDir forward', 'deleteItem', JSON.parse(JSON.stringify(data)), 'nkSelf', nkSelf)
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
                    tar = get(data, ks, []) //取得要移入的父節點children
                }

                //tar insert
                if (modeInsert === 'before') {
                    // ind = ind
                }
                else if (modeInsert === 'after') {
                    ind += 1
                }
                tar.splice(ind, 0, dataSelf)

                //nkTar
                let nkTar = dropRight(nkEnter)
                nkTar = [...nkTar, ind]

                //nkNew
                nkNew = nkTar

                //pathInforsNew
                pathInforsNew = vo.getPathInfors(data, nkTar)
                // console.log('before|after', 'pathInforsNew', cloneDeep(pathInforsNew))

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

                //nkTar
                let nkTar = [...ks, size(tar) - 1]
                // console.log('belongto', 'nkEnter', nkEnter)
                // console.log('belongto', 'ks', ks)
                // console.log('belongto', 'nkTar', nkTar)

                //nkNew
                nkNew = nkTar

                //pathInforsNew
                pathInforsNew = vo.getPathInfors(data, nkTar)
                // console.log('belongto', 'pathInforsNew', pathInforsNew)

            }
            // console.log('data2', JSON.parse(JSON.stringify(data)))

            //modeDir
            if (modeDir === 'backward') {
                //若為由前往後移動, 則需於來源節點複製進目標節點處後, 才能刪除來源節點
                vo.deleteItem(data, nkSelf)
                // console.log('modeDir backward', 'deleteItem', JSON.parse(JSON.stringify(data)), 'nkSelf', nkSelf)
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:data', cloneDeep(data))

                //emit
                vo.$emit('change-item', {
                    from: 'drag',
                    mode: 'move',
                    dir: modeDir,
                    kind: modeInsert,
                    nkOri,
                    pathInforsOri,
                    nkNew,
                    pathInforsNew,
                })

            })

        },

        getUseOperateItems: function(props) {
            // console.log('getUseOperateItems', props)

            let vo = this

            //operatable
            if (!vo.operatable) {
                return []
            }

            //rs
            let rs = null
            if (isfun(vo.funOperateItem)) {

                //funOperateItem
                let ck = vo.funOperateItem(vo.getEmitData({}, props))

                //check
                if (!isbol(ck) && !isarr(ck)) {
                    throw new Error(`funOperateItem return value is not a boolean or an array`)
                }

                //rs
                if (ck === true) {
                    rs = vo.operateItems
                    // console.log('ck === true rs', rs)
                }
                else if (ck === false) {
                    rs = []
                    // console.log('ck === false rs', rs)
                }
                else {
                    rs = []
                    each(ck, (v) => {
                        let r = find(vo.operateItems, { key: v })
                        if (iseobj(r)) {
                            rs.push(r)
                        }
                    })
                    // console.log('ck isarr rs', rs)
                }

            }
            else {
                rs = vo.operateItems
                // console.log('ck all rs', rs)
            }

            return rs
        },

        getUseOperatable: function(props) {
            // console.log('getUseOperatable', props)

            let vo = this

            //getUseOperateItems
            let rs = vo.getUseOperateItems(props)

            //ck
            let ck = size(rs) > 0

            return ck
        },

        getOperatePanelHeight: function(props) {
            // console.log('getOperatePanelHeight', props)

            let vo = this

            //h
            let h = ''
            if (isnum(vo.operatePanelHeight)) {
                h = `height:${vo.operatePanelHeight}px;`
            }
            else if (isestr(vo.operatePanelHeight)) {
                h = `height:${vo.operatePanelHeight};`
            }
            else if (isnum(vo.operateItemHeight)) {

                //operateItemHeight
                let operateItemHeight = cdbl(vo.operateItemHeight)

                //getUseOperateItems
                let rs = vo.getUseOperateItems(props)

                //h
                h = `height:${size(rs) * operateItemHeight}px;`

            }

            return h
        },

        operateItem: async function(targetInd, mode, fun) {
            // console.log('methods operateItem', targetInd, mode, fun)

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

                //modeOperate, pathInforsOri, pathInforsNew, nkOri, nkNew
                let modeOperate = ''
                let pathInforsOri = []
                let pathInforsNew = []
                let nkOri = []
                let nkNew = []

                //mode for Delete
                if (mode === 'Delete') {

                    //modeOperate
                    modeOperate = 'self'

                    //nkOri, 要於deleteItem之前處理
                    nkOri = nkTarget

                    //pathInforsOri, 要於deleteItem之前處理
                    pathInforsOri = vo.getPathInfors(data, nkTarget)
                    // console.log('delete', 'pathInforsOri', pathInforsOri)

                    //deleteItem
                    vo.deleteItem(data, nkTarget)
                    // console.log('data', cloneDeep(data))

                    //nkNew
                    nkNew = []

                    //pathInforsNew
                    pathInforsNew = []
                    // console.log('delete', 'pathInforsNew', pathInforsNew)

                }
                else if (mode === 'Rename') {

                    //showEditor
                    vo.editorRenameData = data
                    vo.editorRenameItem = get(itemTarget, 'item', {})
                    vo.editorRenameInputText = get(itemTarget, `item.${vo.keyText}`, '')
                    let r = await vo.showEditor()

                    //state
                    if (r === 'save') {

                        //modeOperate
                        modeOperate = 'self'

                        //nkOri
                        nkOri = nkTarget

                        //pathInforsOri
                        pathInforsOri = vo.getPathInfors(vo.data, nkTarget)
                        // console.log('rename', 'pathInforsOri', pathInforsOri)

                        //update data
                        data = vo.editorRenameData

                        //nkNew
                        nkNew = nkOri

                        //pathInforsNew
                        pathInforsNew = vo.getPathInfors(data, nkTarget)
                        // console.log('rename', 'pathInforsNew', pathInforsNew)

                    }
                    else {
                        return //跳出
                    }

                }
                else { //InsertBefore, InsertAfter, InsertChild

                    //check
                    if (!isfun(fun)) {
                        throw new Error('invalid fun')
                    }

                    //dataNew
                    let dataNew = fun() //外部fun僅用於提供新項目數據
                    if (ispm(dataNew)) {
                        dataNew = await dataNew
                    }
                    // console.log('dataNew', dataNew)

                    //modeOperate
                    if (mode === 'InsertBefore') {
                        modeOperate = 'before'
                    }
                    else if (mode === 'InsertAfter') {
                        modeOperate = 'after'
                    }
                    else if (mode === 'InsertChild') {
                        modeOperate = 'belongto'
                    }
                    else {
                        throw new Error(`invalid mode[${mode}]`)
                    }

                    let modeInsert = modeOperate
                    if (modeInsert === 'before' || modeInsert === 'after') {

                        //nkOri
                        nkOri = []

                        //pathInforsOri
                        pathInforsOri = []
                        // console.log('before|after', 'pathInforsOri', pathInforsOri)

                        //ind, 依照mode決定ind, before是直接splice對目標節點ind位置塞入, 就能把目標往後移動, after就需+1
                        let ind = takeRight(nkTarget)[0]

                        //tar, 目標的父節點, 待移入對象
                        let tar
                        if (size(nkTarget) === 1) {
                            tar = data //因目標是第1層內元素, 故要取得的父節點就是原本數據
                        }
                        else {
                            let ks = dropRight(nkTarget) //目標父節點的keys, dropRight後就是其上的keyChildren
                            tar = get(data, ks, []) //取得要移入的父節點children
                        }

                        //tar insert
                        if (modeInsert === 'before') {
                            // ind = ind
                        }
                        else if (modeInsert === 'after') {
                            ind += 1
                        }
                        tar.splice(ind, 0, dataNew)

                        //nkTar
                        let nkTar = dropRight(nkTarget)
                        nkTar = [...nkTar, ind]

                        //nkNew
                        nkNew = nkTar

                        //pathInforsNew
                        pathInforsNew = vo.getPathInfors(data, nkTar)
                        // console.log('before|after', 'pathInforsNew', pathInforsNew)

                    }
                    else if (modeInsert === 'belongto') {

                        //nkOri
                        nkOri = []

                        //pathInforsOri
                        pathInforsOri = []
                        // console.log('belongto', 'pathInforsOri', pathInforsOri)

                        //ks, 所屬儲存子節點欄位, 也就是keyChildren
                        let ks = [...nkTarget, vo.keyChildren]

                        //tar, 取得子節點, 若無則預設空陣列[]
                        let tar = get(data, ks, [])

                        //push
                        tar.push(dataNew)

                        //set
                        set(data, ks, tar)

                        //nkTar
                        let nkTar = [...ks, size(tar) - 1]
                        // console.log('belongto', 'nkEnter', nkEnter)
                        // console.log('belongto', 'ks', ks)
                        // console.log('belongto', 'nkTar', nkTar)

                        //nkNew
                        nkNew = nkTar

                        //pathInforsNew
                        pathInforsNew = vo.getPathInfors(data, nkTar)
                        // console.log('belongto', 'pathInforsNew', pathInforsNew)

                    }
                    // console.log('data2', JSON.parse(JSON.stringify(data)))

                }

                //$nextTick
                vo.$nextTick(() => {

                    //emit
                    vo.$emit('update:data', cloneDeep(data))

                    //modeMain
                    let modeMain = ''
                    if (mode === 'Delete') {
                        modeMain = 'delete'
                    }
                    else if (mode === 'Rename') {
                        modeMain = 'rename'
                    }
                    else {
                        modeMain = 'add'
                    }

                    //emit
                    vo.$emit('change-item', {
                        from: 'operate',
                        mode: modeMain,
                        dir: '',
                        kind: modeOperate,
                        nkOri,
                        pathInforsOri,
                        nkNew,
                        pathInforsNew,
                    })

                })

            }

            //core
            await core()
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

                //ele, 因WDynamicList會重新封裝按需顯示, 故顯示拖曳指標區為上層的父節點, 取top才會正確
                let ele = get(msg, `endEle.parentNode`)
                // console.log('endEle.parentNode ele', ele)

                if (!ele.getAttribute) {
                    console.log('invalud ele.getAttribute', ele)
                    return
                }

                //location
                // vo.dgTipTop = cdbl(replace(ele.style.top, 'px', ''))
                // vo.dgTipLeft = cdbl(replace(ele.style.left, 'px', ''))
                vo.dgTipTop = cdbl(ele.getAttribute('top'))
                vo.dgTipLeft = 0
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

        clickOperateItem: function(msg) {
            // console.log('clickOperateItem', msg)

            let vo = this

            //改由operateItem複寫msg.operateItem
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

        saveRename: function() {
            // console.log('saveRename')

            let vo = this

            //nk
            let nk = get(vo.editorRenameItem, 'nk', [])
            // console.log('vo.editorRenameItem', cloneDeep(vo.editorRenameItem))
            // console.log('nk', nk)

            //path
            let path = [...nk, vo.keyText]
            // console.log('path', path)

            //value
            let value = vo.editorRenameInputText
            // console.log('value', value)

            //set
            set(vo.editorRenameData, path, value)

            //resolve
            vo.editorPm.resolve('save')

            //hide
            vo.editorShow = false

        },

        cancelEditor: function() {
            // console.log('cancelEditor')

            let vo = this

            //resolve
            vo.editorPm.resolve('cancel')

            //hide
            vo.editorShow = false

        },

        showEditor: async function() {
            // console.log('showEditor')

            let vo = this

            //pm
            let pm = genPm()

            //show
            vo.editorShow = true

            //save
            vo.editorPm = pm

            return pm
        },

        operateDisableEvent: function(ev, from) {
            // console.log('operateDisableEvent', from, this.operateShow)

            let vo = this

            //check, 當operate彈窗開啟時須跳出, 否則彈窗內點擊事件亦會被stopPropagation而禁用, 而彈窗內點擊或拖曳造成drag則通過operateShow連帶變更useDraggable禁用拖曳功能
            if (vo.operateShow) {
                return
            }

            //stopPropagation, 用以停用拖曳或點擊事件, 但允許mouseenter可有hover效果
            ev.stopPropagation()

        },

        operateDisplayEvent: function(from) {
            // console.log('operateDisplayEvent', from)

            let vo = this

            if (from === 'show') {
                vo.operateShow = true
            }
            else {
                vo.operateShow = false //若開啟operate彈窗又於list捲動, 會造成原始驅動popup物件已消失但來不及接收hide事件, 導致operateShow無法變更為false, 故須於change-view-items事件變更operateShow為false
            }

        },

        updateOperateShow: function(b) {
            // console.log('updateOperateShow', b)

            let vo = this

            //save
            vo.operateShow = b

        },

    },
}
</script>

<style scoped>
</style>

