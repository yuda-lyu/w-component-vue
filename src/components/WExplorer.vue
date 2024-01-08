<template>
    <div
        style=""
        :changeShowTree="changeShowTree"
        :changeTreeWidth="changeTreeWidth"
        :changeItems="changeItems"
        v-domresize
        @domresize="resizePanel"
    >

        <WDrawer
            :style="`width:${panelWidth}px; height:${panelHeight}px;`"
            :afloat="treeAfloat"
            :drawerWidth="treeWidthTrans"
            :drawerWidthMin="treeWidthMin"
            :drawerWidthMax="treeWidthMax"
            :dragDrawerWidth="true"
            :drawerBarColor="treeDrawerBarColor"
            :drawerBarSize="treeDrawerBarSize"
            :value="showTreeTrans"
            @input="emitShowTree"
            @update:drawerWidth="emitDrawerWidth"
        >

            <template v-slot:drawer="props">
                <!-- tree高度是使用viewHeightMax為動態高度, 故外部封裝一層給予背景色 -->
                <div :style="`position:relative; height:100%; background:${effTreeBackgroundColor};`">

                    <WTree
                        ref="wt"
                        :style="`width:${props.width}px; min-width:${props.width}px;`"
                        :viewHeightMax="panelHeight"
                        :defItemHeight="treeDefItemHeight"
                        :defaultDisplayLevel="treeDefaultDisplayLevel"
                        :data.sync="treeItemsFolder"
                        :activable="true"
                        :itemActive.sync="treeItemActive"
                        :paddingStyle="treePaddingStyle"
                        :indent="treeIndent"
                        :iconSize="treeToggleIconSize"
                        :iconToggleColor="treeToggleIconColor"
                        :iconToggleDisabledColor="treeToggleIconDisabledColor"
                        :iconToggleBackgroundColor="treeToggleIconBackgroundColor"
                        :iconToggleBackgroundColorHover="treeToggleIconBackgroundColorHover"
                        :itemTextColor="treeItemTextColor"
                        :itemTextColorHover="treeItemTextColorHover"
                        :itemTextColorActive="treeItemTextColorActive"
                        :itemBackgroundColor="treeItemBackgroundColor"
                        :itemBackgroundColorHover="treeItemBackgroundColorHover"
                        :itemBackgroundColorActive="treeItemBackgroundColorActive"
                        :itemRippleColor="treeItemRippleColor"
                        :draggable="draggable"
                        :dgTextDisabled="dgTextDisabled"
                        :dgTextDisabledColor="dgTextDisabledColor"
                        :dgTextDisabledPaddingLeft="dgTextDisabledPaddingLeft"
                        :dgTextDisabledFontSize="dgTextDisabledFontSize"
                        :dgTextDisabledBackgroundColor="dgTextDisabledBackgroundColor"
                        :dgInsertLineColor="dgInsertLineColor"
                        :dgInsertBackgroundColor="dgInsertBackgroundColor"
                        :dgBelongBackgroundColor="dgBelongBackgroundColor"
                        :dgPreviewOpacity="dgPreviewOpacity"
                        :dgPreviewDisabledOpacity="dgPreviewDisabledOpacity"
                        :dgPreviewBorderWidth="dgPreviewBorderWidth"
                        :dgPreviewBorderColor="dgPreviewBorderColor"
                        :dgPreviewBackground="dgPreviewBackground"
                        :operatable="operatable"
                        :operateItemTextForRename="operateItemTextForRename"
                        _operateItemTextForInsertBefore="operateItemTextForInsertBefore"
                        :operateItemTextForInsertChild="operateItemTextForInsertChild"
                        _operateItemTextForInsertAfter="operateItemTextForInsertAfter"
                        :operateItemTextForDelete="operateItemTextForDelete"
                        :operateItemIconForRename="operateItemIconForRename"
                        _operateItemIconForInsertBefore="operateItemIconForInsertBefore"
                        :operateItemIconForInsertChild="operateItemIconForInsertChild"
                        _operateItemIconForInsertAfter="operateItemIconForInsertAfter"
                        :operateItemIconForDelete="operateItemIconForDelete"
                        :operateItemPaddingStyle="operateItemPaddingStyle"
                        :operatePanelWidth="operatePanelWidth"
                        :operatePanelHeight="operatePanelHeight"
                        :operateBtnTooltip="operateBtnTooltip"
                        :operateBtnBackgroundColor="operateBtnBackgroundColor"
                        :operateBtnBackgroundColorHover="operateBtnBackgroundColorHover"
                        :operateBtnBackgroundColorFocus="operateBtnBackgroundColorFocus"
                        :operateItemBackgroundColor="operateItemBackgroundColor"
                        :operateItemBackgroundColorHover="operateItemBackgroundColorHover"
                        :operateItemHeight="operateItemHeight"
                        :operateItemTextColor="operateItemTextColor"
                        :operateItemTextColorHover="operateItemTextColorHover"
                        :operateItemIconSize="operateItemIconSize"
                        :operateItemIconColor="operateItemIconColor"
                        :operateItemIconColorHover="operateItemIconColorHover"
                        :funOperateItem="useFunOperateItem"
                        :editorRenameContentBackgroundColor="editorRenameContentBackgroundColor"
                        :editorRenameFooterBackgroundColor="editorRenameFooterBackgroundColor"
                        :editorRenameInputTextColor="editorRenameInputTextColor"
                        :editorRenameInputTextBottomLineBorderColor="editorRenameInputTextBottomLineBorderColor"
                        :editorRenameInputTextBottomLineBorderColorHover="editorRenameInputTextBottomLineBorderColorHover"
                        :editorRenameInputTextBottomLineBorderColorFocus="editorRenameInputTextBottomLineBorderColorFocus"
                        :editorRenameCancelBtnText="editorRenameCancelBtnText"
                        :editorRenameCancelBtnTextColor="editorRenameCancelBtnTextColor"
                        :editorRenameCancelBtnTextColorHover="editorRenameCancelBtnTextColorHover"
                        :editorRenameCancelBtnIcon="editorRenameCancelBtnIcon"
                        :editorRenameCancelBtnIconSize="editorRenameCancelBtnIconSize"
                        :editorRenameCancelBtnIconColor="editorRenameCancelBtnIconColor"
                        :editorRenameCancelBtnIconColorHover="editorRenameCancelBtnIconColorHover"
                        :editorRenameCancelBtnIconRippleColor="editorRenameCancelBtnIconRippleColor"
                        :editorRenameCancelBtnBackgroundColor="editorRenameCancelBtnBackgroundColor"
                        :editorRenameCancelBtnBackgroundColorHover="editorRenameCancelBtnBackgroundColorHover"
                        :editorRenameSaveBtnText="editorRenameSaveBtnText"
                        :editorRenameSaveBtnTextColor="editorRenameSaveBtnTextColor"
                        :editorRenameSaveBtnTextColorHover="editorRenameSaveBtnTextColorHover"
                        :editorRenameSaveBtnIcon="editorRenameSaveBtnIcon"
                        :editorRenameSaveBtnIconSize="editorRenameSaveBtnIconSize"
                        :editorRenameSaveBtnIconColor="editorRenameSaveBtnIconColor"
                        :editorRenameSaveBtnIconColorHover="editorRenameSaveBtnIconColorHover"
                        :editorRenameSaveBtnIconRippleColor="editorRenameSaveBtnIconRippleColor"
                        :editorRenameSaveBtnBackgroundColor="editorRenameSaveBtnBackgroundColor"
                        :editorRenameSaveBtnBackgroundColorHover="editorRenameSaveBtnBackgroundColorHover"
                        @click-operate-item="clickOperateItem"
                        @update:data="changeData"
                        @change-item="changeItem"
                        _render="render"
                    >
                        <template v-slot:item="props">
                            <div
                                :style="`display:flex; min-height:${treeDefItemHeight}px;`"
                                @click="ckTreeFolder(props)"
                            >

                                <div :style="`height:${treeDefItemHeight}px; padding-right:4px; display:flex; align-items:center;`">
                                    <WIcon
                                        :icon="treeFolderIcon"
                                        :color="getTreeFolderIconColor(props)"
                                        :colorHover="getTreeFolderIconColor(props)"
                                        :size="treeFolderIconSize"
                                    ></WIcon>
                                </div>

                                <!-- 文字一般、hover與active顏色可由tree組件由item殼設定提供, 故slot內可不用自行封裝取得文字顏色功能 -->
                                <div :style="`min-height:${treeDefItemHeight}px; line-height:${treeDefItemHeight}px; ${useTreeItemTextFontSize}`">
                                    {{props.data.text}}
                                </div>

                            </div>
                        </template>
                    </WTree>

                    <!-- drawer可能有捲軸, 給予預留與右側空間8px -->
                    <div
                        :style="`position:absolute; top:${(useTreeItemHeightMin-(btnDisplayTreeIconSize+2*2))/2}px; right:${8+(operatable?(btnDisplayTreeIconSize+2*2):0)}px;`"
                        v-if="showTreeTrans"
                    >

                        <!-- 切換顯隱tree按鈕 -->
                        <!-- 指定display:block避免有text-node間隙 -->
                        <WButtonCircle
                            style="display:block;"
                            :paddingStyle="{h:2,v:2}"
                            :icon="showTreeTrans?btnDisplayTreeIconHide:btnDisplayTreeIconShow"
                            :iconSize="btnDisplayTreeIconSize"
                            :iconColor="btnDisplayTreeIconColor"
                            :iconColorHover="btnDisplayTreeIconColorHover"
                            :iconColorFocus="btnDisplayTreeIconColorFocus"
                            :backgroundColor="btnDisplayTreeBackgroundColor"
                            :backgroundColorHover="btnDisplayTreeBackgroundColorHover"
                            :backgroundColorFocus="btnDisplayTreeBackgroundColorFocus"
                            :shadow="false"
                            @click="emitShowTreeDelay(!showTreeTrans)"
                        ></WButtonCircle>

                    </div>

                </div>
            </template>

            <template v-slot:content="props">
                <!-- 較多組件時初始化偵測高度會較慢, 連帶造成高度超過容器, 故使用overflow:hidden避免顯示捲軸 -->
                <div :style="`height:100%; overflow:hidden;`">

                    <div
                        :style="`width:${props.width}px; min-width:${props.width}px; border-bottom:${lineBetweenPathAndListWidth}px solid ${effLineBetweenPathAndListColor}; background:${effPathBackgroundColor};`"
                        v-domresize
                        @domresize="resizePath"
                    >

                        <div :style="`padding-left:5px; display:flex; align-items:flex-start;`">

                            <div
                                :style="`min-height:${btnDisplayTreeIconSize+8}px; padding-right:2px; display:flex; align-items:center;`"
                                v-if="!showTreeTrans"
                            >

                                <!-- 切換顯隱tree按鈕 -->
                                <!-- 指定display:block避免有text-node間隙 -->
                                <WButtonCircle
                                    style="display:block;"
                                    :paddingStyle="{h:2,v:2}"
                                    :icon="showTreeTrans?btnDisplayTreeIconHide:btnDisplayTreeIconShow"
                                    :iconSize="btnDisplayTreeIconSize"
                                    :iconColor="btnDisplayTreeIconColor"
                                    :iconColorHover="btnDisplayTreeIconColorHover"
                                    :iconColorFocus="btnDisplayTreeIconColorFocus"
                                    :backgroundColor="btnDisplayTreeBackgroundColor"
                                    :backgroundColorHover="btnDisplayTreeBackgroundColorHover"
                                    :backgroundColorFocus="btnDisplayTreeBackgroundColorFocus"
                                    :shadow="false"
                                    @click="emitShowTreeDelay(!showTreeTrans)"
                                ></WButtonCircle>

                            </div>

                            <div
                                :style="`min-height:${btnDisplayTreeIconSize+8}px; padding-left:4px; color:${effPathBtnTextColor}; ${usePathBtnTextFontSize} display:flex; align-items:center;`"
                                v-if="pathInfors.length===0"
                            >
                                {{noSelectedText}}
                            </div>

                            <div :style="`display:flex; flex-wrap:wrap;`">
                                <div
                                    :style="`min-height:${btnDisplayTreeIconSize+8}px;`"
                                    :key="'kpi-'+kpi"
                                    v-for="(pi,kpi) in pathInfors"
                                >

                                    <!-- 因path區域預設有底線故-1px -->
                                    <div :style="`min-height:${btnDisplayTreeIconSize+8}px; display:flex; align-items:center;`">

                                        <WIcon
                                            :icon="pathSepIcon"
                                            :color="pathSepIconColor"
                                            :colorHover="pathSepIconColor"
                                            :size="pathSepIconSize"
                                        ></WIcon>

                                        <!-- 因會重刷path故textColorActive與backgroundColorActive會被清除, 也就不須提供外部設定 -->
                                        <WButtonChip
                                            :paddingStyle="{h:6,v:0}"
                                            :borderWidth="{}"
                                            :borderRadius="4"
                                            :shadow="false"
                                            :text="pi.name"
                                            :textColor="pathBtnTextColor"
                                            :textColorHover="pathBtnTextColorHover"
                                            _textColorActive="pathBtnTextColorActive"
                                            :textFontSize="pathBtnTextFontSize"
                                            _icon="pathSepIcon"
                                            _iconColor="pathSepIconColor"
                                            _iconSize="pathSepIconSize"
                                            :backgroundColor="pathBtnBackgroundColor"
                                            :backgroundColorHover="pathBtnBackgroundColorHover"
                                            _backgroundColorActive="pathBtnBackgroundColorActive"
                                            @click="ckPathFolder(pi)"
                                        >
                                        </WButtonChip>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div
                        :style="`height:${listHeight}px; background:${effListBackgroundColor};`"
                    >

                        <WListVertical
                            :style="`width:${props.width}px; min-width:${props.width}px; height:${listHeight}px;`"
                            :items="listItems"
                            :itemActive.sync="listItemActive"
                            :itemCursorPointer="false"
                            :paddingStyle="listPaddingStyle"
                            :itemBackgroundColor="listItemBackgroundColor"
                            :itemBackgroundColorHover="listItemBackgroundColorHover"
                            :itemBackgroundColorActive="listItemBackgroundColorActive"
                            :itemTextColor="listItemTextColor"
                            :itemTextColorHover="listItemTextColorHover"
                            :itemTextColorActive="listItemTextColorActive"
                            :itemIconSize="listItemIconSize"
                            _itemIconColor="listItemIconColor"
                            _itemIconColorHover="listItemIconColorHover"
                            _itemIconColorActive="listItemIconColorActive"
                            :itemRippleColor="listItemRippleColor"
                            _click="ckListItem"
                            _v-if="listItems.length>0"
                        >

                            <template v-slot:header>
                                <slot
                                    name="list-head"
                                    :items="listItems"
                                >
                                </slot>
                            </template>

                            <template v-slot:item="props">

                                <!-- 使用line-height使多行文字時依然能置頂對齊 -->
                                <div :style="`position:relative; min-height:${listDefItemHeight}px; line-height:${listDefItemHeight}px;`">

                                    <!-- 由slot外側提供預設字型設定, 而字型顏色設定由更外側WListVertical組件提供 -->
                                    <div :style="`${useListItemTextFontSize}`">
                                        <slot
                                            name="list-item"
                                            :item="{
                                                ...props.item,
                                                iconColor:getListItemIconColor(props),
                                                iconSize:listItemIconSize,
                                            }"
                                            :isHover="props.isHover"
                                            :isActive="props.isActive"
                                            :funClickListItem="()=>{ckListItem(props)}"
                                        >

                                            <!-- 僅使用display:flex使多行文字置頂對齊 -->
                                            <div :style="`display:flex;`">

                                                <div
                                                    :style="`height:${listDefItemHeight}px; padding-right:4px; display:flex; align-items:center; cursor:pointer;`"
                                                    @click="ckListItem(props)"
                                                >
                                                    <WIcon
                                                        :icon="props.item.icon"
                                                        :color="getListItemIconColor(props)"
                                                        :colorHover="getListItemIconColor(props)"
                                                        :size="listItemIconSize"
                                                    ></WIcon>
                                                </div>

                                                <slot
                                                    name="list-item-text-left"
                                                    :item="props.item"
                                                    :isHover="props.isHover"
                                                    :isActive="props.isActive"
                                                >
                                                </slot>

                                                <div
                                                    :style="`${useListItemTextFontSize} cursor:pointer; user-select:none;`"
                                                    @click="ckListItem(props)"
                                                >
                                                    {{props.item.text}}
                                                </div>

                                                <slot
                                                    name="list-item-text-right"
                                                    :item="props.item"
                                                    :isHover="props.isHover"
                                                    :isActive="props.isActive"
                                                >
                                                </slot>

                                            </div>

                                        </slot>
                                    </div>

                                    <div :style="`position:absolute; top:0px; right:0px;`">
                                        <slot
                                            name="list-item-cover"
                                            :item="props.item"
                                            :isHover="props.isHover"
                                            :isActive="props.isActive"
                                        >
                                        </slot>
                                    </div>

                                    <slot
                                        name="list-item-sub"
                                        :item="props.item"
                                        :isHover="props.isHover"
                                        :isActive="props.isActive"
                                    >
                                    </slot>

                                </div>

                            </template>

                            <template v-slot:footer>
                                <slot
                                    name="list-foot"
                                    :items="listItems"
                                >
                                </slot>
                            </template>

                        </WListVertical>
                    </div>

                </div>
            </template>

        </WDrawer>

    </div>
</template>

<script>
import { mdiFolder, mdiFileOutline, mdiChevronRight, mdiArrowLeftBoldHexagonOutline, mdiArrowRightBoldHexagonOutline, mdiFolderPlusOutline, mdiFolderRemoveOutline, mdiRenameOutline, mdiCloseCircleOutline, mdiCloudUploadOutline } from '@mdi/js'
import get from 'lodash-es/get'
import each from 'lodash-es/each'
import map from 'lodash-es/map'
import size from 'lodash-es/size'
import join from 'lodash-es/join'
import cloneDeep from 'lodash-es/cloneDeep'
import isbol from 'wsemi/src/isbol.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import ispm from 'wsemi/src/ispm.mjs'
import replace from 'wsemi/src/replace.mjs'
import strleft from 'wsemi/src/strleft.mjs'
import strdelleft from 'wsemi/src/strdelleft.mjs'
import arrSort from 'wsemi/src/arrSort.mjs'
// import treeToFilepath from 'wsemi/src/treeToFilepath.mjs'
import filepathToTree from 'wsemi/src/filepathToTree.mjs'
// import filepathToTreeWk from '../js/filepathToTreeWk.wk.umd.js'
import parseSpace from '../js/parseSpace.mjs'
import convertColor from '../js/convertColor.mjs'
import domResize from '../js/domResize.mjs'
import WIcon from './WIcon.vue'
import WTree from './WTree.vue'
import WListVertical from './WListVertical.vue'
import WDrawer from './WDrawer.vue'
import WButtonChip from './WButtonChip.vue'
import WButtonCircle from './WButtonCircle.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目物件陣列，預設[]
 * @vue-prop {String} [bindRoot='root'] 輸入建置根目錄名稱字串，預設'root'
 * @vue-prop {Function} [funSortTree=null] 輸入排序樹狀資料夾名稱函數，預設null
 * @vue-prop {Boolean} [showTree=true] 輸入是否顯示樹狀資料夾布林值，預設true
 * @vue-prop {Boolean} [defaultShowTreeFirst=true] 輸入是否預先顯示樹狀資料夾之第1個資料夾布林值，預設true
 * @vue-prop {Number} [treeWidth=250] 輸入樹狀資料夾寬度數字，單位為px，預設250
 * @vue-prop {Number} [treeWidthMin=null] 輸入樹狀資料夾可拖曳寬度之最小值數字，單位為px，預設null
 * @vue-prop {Number} [treeWidthMax=null] 輸入樹狀資料夾可拖曳寬度之最大值數字，單位為px，預設null
 * @vue-prop {Boolean} [treeAfloat=false] 輸入是否樹狀資料夾為浮動顯示布林值，設為true時浮在內容區上故不壓縮內容區寬度，預設false
 * @vue-prop {Number} [treeDefItemHeight=30] 輸入樹狀資料夾之按需顯示時各項目預設最小高度(min-height)值，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設30
 * @vue-prop {Number} [treeDefaultDisplayLevel=null] 輸入樹狀資料夾之初始展開層數數字，若輸入1就是預設展開至第1層，第2層(含)以下則都隱藏，若輸入null就是全展開，預設null
 * @vue-prop {Object} [treePaddingStyle={v:0,h:0}] 輸入樹狀資料夾之內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
 * @vue-prop {Number} [treeIndent=0.7] 輸入樹狀資料夾之縮排比率數字，若使用1就是1倍的圖標寬度(24px)+2*separation(3px)，預設0.7
 * @vue-prop {String} [treeItemTextColor='#444'] 輸入樹狀資料夾之文字顏色字串，預設'#444'
 * @vue-prop {String} [treeItemTextColorHover='#222'] 輸入滑鼠移入時樹狀資料夾之文字顏色字串，預設'#222'
 * @vue-prop {String} [treeItemTextColorActive='#000'] 輸入主動模式時樹狀資料夾之文字顏色字串，預設'#000'
 * @vue-prop {String} [treeFolderIcon=mdiFolder] 輸入樹狀資料夾之資料夾圖標字串，預設mdiFolder
 * @vue-prop {Number} [treeFolderIconSize=20] 輸入樹狀資料夾之資料夾圖標之尺寸數字，單位為px，預設20
 * @vue-prop {String} [treeFolderIconColor='#888'] 輸入樹狀資料夾之資料夾圖標顏色字串，預設'#888'
 * @vue-prop {String} [treeFolderIconColorHover='#777'] 輸入滑鼠移入時樹狀資料夾之資料夾圖標顏色字串，預設'#777'
 * @vue-prop {String} [treeFolderIconColorActive='#666'] 輸入主動模式時樹狀資料夾之資料夾圖標顏色字串，預設'#666'
 * @vue-prop {String} [treeItemBackgroundColor='transparent'] 輸入樹狀資料夾之項目區背景顏色字串，預設'transparent'
 * @vue-prop {String} [treeItemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時樹狀資料夾之項目區背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [treeItemBackgroundColorActive='rgba(100,100,100,0.2)'] 輸入主動模式時樹狀資料夾之項目區背景顏色字串，預設'rgba(100,100,100,0.2)'
 * @vue-prop {String} [treeItemRippleColor='rgba(200,200,200,0.4)'] 輸入樹狀資料夾之項目區ripple效果顏色字串，預設'rgba(200,200,200,0.4)'
 * @vue-prop {String} [treeBackgroundColor='#fff'] 輸入樹狀資料夾背景顏色字串，預設'#fff'
 * @vue-prop {Number} [treeDrawerBarSize=2] 輸入樹狀資料夾抽屜之分隔條尺寸數字，為分隔條寬度，單位為px，預設2
 * @vue-prop {String} [treeDrawerBarColor='#ddd'] 輸入樹狀資料夾抽屜之分隔條顏色字串，預設'#ddd'
 * @vue-prop {Number} [treeToggleIconSize=24] 輸入顯隱樹狀資料夾按鈕之圖標尺寸數字，單位為px，預設24
 * @vue-prop {String} [treeToggleIconColor='grey'] 輸入顯隱樹狀資料夾按鈕之圖標顏色字串，預設'grey'
 * @vue-prop {String} [treeToggleIconDisabledColor='grey lighten-1'] 輸入顯隱樹狀資料夾按鈕之禁用時圖標顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [treeToggleIconBackgroundColor='transparent'] 輸入顯隱樹狀資料夾按鈕之圖標背景顏色字串，預設'transparent'
 * @vue-prop {String} [treeToggleIconBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱樹狀資料夾按鈕之圖標背景顏色字串，預設'rgba(128,128,128,0.15)'
 * @vue-prop {Number} [lineBetweenPathAndListWidth=1] 輸入路徑區與清單區之間分隔線寬度，單位為px，預設1
 * @vue-prop {String} [lineBetweenPathAndListColor='#ddd'] 輸入路徑區與清單區之間分隔線顏色字串，預設'#ddd'
 * @vue-prop {Number} [listDefItemHeight=30] 輸入清單區按需顯示時各項目預設最小高度(min-height)值，單位為px，預設30
 * @vue-prop {Object} [listPaddingStyle={v:0,h:6}] 輸入清單區項目之內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:6}
 * @vue-prop {String} [listItemTextFontSize='0.85rem'] 輸入清單區項目之文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [listItemTextColor='#444'] 輸入清單區項目之文字顏色字串，預設'#444'
 * @vue-prop {String} [listItemTextColorHover='#222'] 輸入滑鼠移入時清單區項目之文字顏色字串，預設'#222'
 * @vue-prop {String} [listItemTextColorActive='#000'] 輸入主動模式時清單區項目之文字顏色字串，預設'#000'
 * @vue-prop {String} [listFolderIcon=mdiFolder] 輸入清單區項目之資料夾圖標字串，預設mdiFolder
 * @vue-prop {String} [listFileIcon=mdiFileOutline] 輸入清單區項目之檔案圖標字串，預設mdiFileOutline
 * @vue-prop {Number} [listItemIconSize=22] 輸入清單區項目之圖標尺寸數字，單位為px，預設22
 * @vue-prop {String} [listItemIconColor='#888'] 輸入清單區項目之圖標顏色字串，預設'#888'
 * @vue-prop {String} [listItemIconColorHover='#777'] 輸入滑鼠移入時清單區項目之圖標顏色字串，預設'#777'
 * @vue-prop {String} [listItemIconColorActive='#666'] 輸入主動模式時清單區項目之圖標顏色字串，預設'#666'
 * @vue-prop {String} [listItemBackgroundColor='transparent'] 輸入清單區項目之背景顏色字串，預設'transparent'
 * @vue-prop {String} [listItemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時清單區項目之背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [listItemBackgroundColorActive='rgba(100,100,100,0.2)'] 輸入主動模式時清單區項目之背景顏色字串，預設'rgba(100,100,100,0.2)'
 * @vue-prop {String} [listItemRippleColor='rgba(255,255,255,0.4)'] 輸入清單區項目之ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
 * @vue-prop {String} [listBackgroundColor='#fff'] 輸入清單區背景顏色字串，預設'#fff'
 * @vue-prop {String} [btnDisplayTreeIconShow=mdiArrowRightBoldHexagonOutline] 輸入顯示樹狀資料夾按鈕圖標字串，預設mdiArrowRightBoldHexagonOutline
 * @vue-prop {String} [btnDisplayTreeIconShow=mdiArrowLeftBoldHexagonOutline] 輸入隱藏樹狀資料夾按鈕圖標字串，預設mdiArrowLeftBoldHexagonOutline
 * @vue-prop {Number} [btnDisplayTreeIconSize=20] 輸入顯隱樹狀資料夾按鈕圖標之尺寸數字，單位為px，預設20
 * @vue-prop {String} [btnDisplayTreeIconColor='grey darken-1'] 輸入顯隱樹狀資料夾按鈕圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [btnDisplayTreeIconColorHover='grey darken-2'] 輸入滑鼠移入時顯隱樹狀資料夾按鈕圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [btnDisplayTreeIconColorFocus='grey darken-3'] 輸入取得焦點時顯隱樹狀資料夾按鈕圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [btnDisplayTreeBackgroundColor='transparent'] 輸入顯隱樹狀資料夾按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [btnDisplayTreeBackgroundColorHover='rgba(200,200,200,0.3)'] 輸入滑鼠移入時顯隱樹狀資料夾按鈕背景顏色字串，預設'rgba(200,200,200,0.3)'
 * @vue-prop {String} [btnDisplayTreeBackgroundColorFocus='rgba(180,180,180,0.3)'] 輸入主動模式時顯隱樹狀資料夾按鈕背景顏色字串，預設'rgba(180,180,180,0.3)'
 * @vue-prop {String} [pathBtnTextColor='#444'] 輸入路徑區按鈕之文字顏色字串，預設'#444'
 * @vue-prop {String} [pathBtnTextColorHover='#222'] 輸入滑鼠移入時路徑區按鈕之文字顏色字串，預設'#222'
 * @vue-prop {String} [pathBtnTextFontSize='0.85rem'] 輸入路徑區按鈕之文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [pathBtnBackgroundColor='transparent'] 輸入路徑區按鈕之背景顏色字串，預設'transparent'
 * @vue-prop {String} [pathBtnBackgroundColorHover='rgb(236,236,236)'] 輸入滑鼠移入時路徑區按鈕之背景顏色字串，預設'rgb(236,236,236)'
 * @vue-prop {String} [pathSepIcon=mdiChevronRight] 輸入路徑區分隔符號之圖標字串，預設mdiChevronRight
 * @vue-prop {String} [pathSepIconColor='#888'] 輸入路徑區分隔符號之圖標顏色字串，預設'#888'
 * @vue-prop {Number} [pathSepIconSize=18] 輸入路徑區分隔符號之圖標尺寸數字，單位為px，預設18
 * @vue-prop {String} [pathBackgroundColor='transparent'] 輸入路徑區背景顏色字串，預設'#fff'
 * @vue-prop {String} [noSelectedText='No selected folder'] 輸入尚未選擇資料夾文字字串，預設'No selected folder'
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
 * @vue-prop {String} [operateItemTextForRename='Rename folder'] 輸入控制選項變更文字之文字字串，預設'Rename folder'
 * @vue-prop {String} [operateItemTextForInsertChild='Create sub folder'] 輸入控制選項插入子項目之文字字串，預設'Create sub folder'
 * @vue-prop {String} [operateItemTextForDelete='Delete folder'] 輸入控制選項刪除項目之文字字串，預設'Delete folder'
 * @vue-prop {String} [operateItemIconForRename=mdiRenameOutline] 輸入控制選項變更文字之圖標字串，預設mdiRenameOutline
 * @vue-prop {String} [operateItemIconForInsertChild=mdiFolderPlusOutline] 輸入控制選項插入子項目之圖標字串，預設mdiFolderPlusOutline
 * @vue-prop {String} [operateItemIconForDelete=mdiFolderRemoveOutline] 輸入控制選項刪除項目之圖標字串，預設mdiFolderRemoveOutline
 * @vue-prop {Object} [operateItemPaddingStyle={v:10,h:12}] 輸入控制選項內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {Number} [operatePanelWidth=170] 輸入控制選項寬度數字，單位px，預設170
 * @vue-prop {Number} [operatePanelHeight=null] 輸入控制選項高度數字，若為null則使用選項數量*operateItemHeight，單位px，預設null
 * @vue-prop {String} [operateBtnTooltip='Operations'] 輸入控制按鈕之提示文字字串，預設'Operations'
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
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WIcon,
        WTree,
        WListVertical,
        WDrawer,
        WButtonChip,
        WButtonCircle,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        bindRoot: {
            type: String,
            default: 'root',
        },
        funSortTree: {
            type: Function,
            default: null,
        },
        showTree: {
            type: Boolean,
            default: true,
        },
        defaultShowTreeFirst: {
            type: Boolean,
            default: true,
        },
        treeWidth: {
            type: Number,
            default: 250,
        },
        treeWidthMin: {
            type: Number,
            default: null,
        },
        treeWidthMax: {
            type: Number,
            default: null,
        },
        treeAfloat: {
            type: Boolean,
            default: false,
        },
        treeDefItemHeight: {
            type: Number,
            default: 30,
        },
        treeDefaultDisplayLevel: {
            type: Number,
            default: null,
        },
        treePaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 0,
                }
            },
        },
        treeIndent: {
            type: Number,
            default: 0.7,
        },
        treeItemTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        treeItemTextColor: {
            type: String,
            default: '#444',
        },
        treeItemTextColorHover: {
            type: String,
            default: '#222',
        },
        treeItemTextColorActive: {
            type: String,
            default: '#000',
        },
        treeFolderIcon: {
            type: String,
            default: mdiFolder,
        },
        treeFolderIconSize: {
            type: Number,
            default: 20,
        },
        treeFolderIconColor: {
            type: String,
            default: '#888',
        },
        treeFolderIconColorHover: {
            type: String,
            default: '#777',
        },
        treeFolderIconColorActive: {
            type: String,
            default: '#666',
        },
        treeItemBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        treeItemBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.2)',
        },
        treeItemBackgroundColorActive: {
            type: String,
            default: 'rgba(100,100,100,0.2)',
        },
        treeItemRippleColor: {
            type: String,
            default: 'rgba(200,200,200,0.4)',
        },
        treeBackgroundColor: {
            type: String,
            default: '#fff',
        },
        treeDrawerBarSize: {
            type: Number,
            default: 2,
        },
        treeDrawerBarColor: {
            type: String,
            default: '#ddd',
        },
        treeToggleIconSize: {
            type: Number,
            default: 24,
        },
        treeToggleIconColor: {
            type: String,
            default: 'grey',
        },
        treeToggleIconDisabledColor: {
            type: String,
            default: 'grey lighten-1',
        },
        treeToggleIconBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        treeToggleIconBackgroundColorHover: {
            type: String,
            default: 'rgba(128,128,128,0.15)',
        },
        lineBetweenPathAndListWidth: {
            type: Number,
            default: 1,
        },
        lineBetweenPathAndListColor: {
            type: String,
            default: '#ddd',
        },
        listDefItemHeight: {
            type: Number,
            default: 30,
        },
        listPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 6,
                }
            },
        },
        listItemTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        listItemTextColor: {
            type: String,
            default: '#444',
        },
        listItemTextColorHover: {
            type: String,
            default: '#222',
        },
        listItemTextColorActive: {
            type: String,
            default: '#000',
        },
        listFolderIcon: {
            type: String,
            default: mdiFolder,
        },
        listFileIcon: {
            type: String,
            default: mdiFileOutline,
        },
        listItemIconSize: {
            type: Number,
            default: 22,
        },
        listItemIconColor: {
            type: String,
            default: '#888',
        },
        listItemIconColorHover: {
            type: String,
            default: '#777',
        },
        listItemIconColorActive: {
            type: String,
            default: '#666',
        },
        listItemBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        listItemBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.2)',
        },
        listItemBackgroundColorActive: {
            type: String,
            default: 'rgba(100,100,100,0.2)',
        },
        listItemRippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
        },
        listBackgroundColor: {
            type: String,
            default: '#fff',
        },
        btnDisplayTreeIconShow: {
            type: String,
            default: mdiArrowRightBoldHexagonOutline,
        },
        btnDisplayTreeIconHide: {
            type: String,
            default: mdiArrowLeftBoldHexagonOutline,
        },
        btnDisplayTreeIconSize: {
            type: Number,
            default: 20,
        },
        btnDisplayTreeIconColor: {
            type: String,
            default: 'grey darken-1',
        },
        btnDisplayTreeIconColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        btnDisplayTreeIconColorFocus: {
            type: String,
            default: 'grey darken-3',
        },
        btnDisplayTreeBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        btnDisplayTreeBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.3)',
        },
        btnDisplayTreeBackgroundColorFocus: {
            type: String,
            default: 'rgba(180,180,180,0.3)',
        },
        pathBtnTextColor: {
            type: String,
            default: '#444',
        },
        pathBtnTextColorHover: {
            type: String,
            default: '#222',
        },
        pathBtnTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        pathBtnBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        pathBtnBackgroundColorHover: {
            type: String,
            default: 'rgb(236,236,236)',
        },
        pathSepIcon: {
            type: String,
            default: mdiChevronRight,
        },
        pathSepIconColor: {
            type: String,
            default: '#888',
        },
        pathSepIconSize: {
            type: Number,
            default: 18,
        },
        pathBackgroundColor: {
            type: String,
            default: '#fff',
        },
        noSelectedText: {
            type: String,
            default: 'No selected folder',
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
        // operateItemTextForInsertBefore: {
        //     type: String,
        //     default: 'Insert before',
        // },
        operateItemTextForInsertChild: {
            type: String,
            default: 'Create sub folder',
        },
        // operateItemTextForInsertAfter: {
        //     type: String,
        //     default: 'Insert after',
        // },
        operateItemTextForDelete: {
            type: String,
            default: 'Delete folder',
        },
        operateItemIconForRename: {
            type: String,
            default: mdiRenameOutline,
        },
        // operateItemIconForInsertBefore: {
        //     type: String,
        //     default: mdiFormatVerticalAlignTop,
        // },
        operateItemIconForInsertChild: {
            type: String,
            default: mdiFolderPlusOutline,
        },
        // operateItemIconForInsertAfter: {
        //     type: String,
        //     default: mdiFormatVerticalAlignBottom,
        // },
        operateItemIconForDelete: {
            type: String,
            default: mdiFolderRemoveOutline,
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
            default: 170,
        },
        operatePanelHeight: {
            type: Number,
            default: null,
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
    },
    data: function() {
        return {

            panelWidth: 0,
            panelHeight: 0,
            pathHeight: 0,

            showTreeTrans: true,
            treeWidthTrans: 200,

            itemsTrans: [],
            kpPath: null,
            treeItemsFolder: null,
            treeItems: null,
            treeItemActive: null,

            pathInfors: [],

            listItems: [],
            listItemActive: null,

        }
    },
    computed: {

        changeShowTree: function() {
            // console.log('changeShowTree')

            let vo = this

            //save
            vo.showTreeTrans = vo.showTree

            return ''
        },

        changeTreeWidth: function() {
            // console.log('changeTreeWidth')

            let vo = this

            //save
            vo.treeWidthTrans = vo.treeWidth

            return ''
        },

        changeItems: function() {
            // console.log('changeItems')

            let vo = this

            //convertItems
            vo.convertItems(vo.items)

            return ''
        },

        useTreeItemHeightMin: function() {
            //console.log('computed useTreeItemHeightMin')

            let vo = this

            return Math.max(vo.treeToggleIconSize, vo.treeDefItemHeight)
        },

        effTreeBackgroundColor: function() {
            let vo = this
            return convertColor(vo.treeBackgroundColor)
        },

        effListBackgroundColor: function() {
            let vo = this
            return convertColor(vo.listBackgroundColor)
        },

        effPathBackgroundColor: function() {
            let vo = this
            return convertColor(vo.pathBackgroundColor)
        },

        effLineBetweenPathAndListColor: function() {
            let vo = this
            return convertColor(vo.lineBetweenPathAndListColor)
        },

        effTreeFolderIconColor: function() {
            let vo = this
            return convertColor(vo.treeFolderIconColor)
        },

        effTreeFolderIconColorHover: function() {
            let vo = this
            return convertColor(vo.treeFolderIconColorHover)
        },

        effTreeFolderIconColorActive: function() {
            let vo = this
            return convertColor(vo.treeFolderIconColorActive)
        },

        useTreeItemTextFontSize: function() {
            let vo = this
            let s = vo.treeItemTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useListItemTextFontSize: function() {
            let vo = this
            let s = vo.listItemTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        effListItemIconColor: function() {
            let vo = this
            return convertColor(vo.listItemIconColor)
        },

        effListItemIconColorHover: function() {
            let vo = this
            return convertColor(vo.listItemIconColorHover)
        },

        effListItemIconColorActive: function() {
            let vo = this
            return convertColor(vo.listItemIconColorActive)
        },

        usePathBtnTextFontSize: function() {
            let vo = this
            let s = vo.pathBtnTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        effPathBtnTextColor: function() {
            let vo = this
            return convertColor(vo.pathBtnTextColor)
        },

        listHeight: function() {
            let vo = this
            return vo.panelHeight - vo.pathHeight
        },

        btnDisplayTreeInDrawerHeightMin: function() {
            let vo = this
            let o = parseSpace(vo.treePaddingStyle, { returnObj: true })
            // console.log('btnDisplayTreeInDrawerHeightMin', o)
            let t = o.top
            let b = o.bottom
            let h = vo.treeDefItemHeight
            return h + t + b
        },

    },
    methods: {

        resizePanel: function(msg) {
            // console.log('methods resizePanel', msg)

            let vo = this

            //update
            vo.panelWidth = msg.snew.offsetWidth
            vo.panelHeight = msg.snew.offsetHeight

        },

        resizePath: function(msg) {
            // console.log('methods resizePath', msg)

            let vo = this

            //update
            // vo.pathWidth = msg.snew.offsetWidth
            vo.pathHeight = msg.snew.offsetHeight

        },

        soryItems: function(rs, pid, ns) {
            // console.log('soryItems', rs, pid, ns)

            let vo = this

            // let mm = (rs) => {
            //     return map(rs, (v, k) => {
            //         return {
            //             k,
            //             t: v.text
            //         }
            //     })
            // }

            //arrSort
            // console.log('rs1', JSON.stringify(mm(rs)))
            rs = arrSort(rs, { compareKey: 'text', localeCompare: true })
            // console.log('rs2', JSON.stringify(mm(rs)))

            //funSortTree
            if (isfun(vo.funSortTree)) {
                rs = vo.funSortTree(rs)
            }

            return rs
        },

        showTreeFirstFolder: function() {
            // console.log('methods showTreeFirstFolder')

            let vo = this

            //triggerClickTreeFolderById
            let id = vo.bindRoot
            vo.triggerClickTreeFolderById(id)

        },

        convertItems: function() {
            // console.log('convertItems')

            let vo = this

            async function core() {

                //filepathToTree
                let r = filepathToTree(vo.items, { bindRoot: vo.bindRoot, soryItems: vo.soryItems })
                // let r = await filepathToTreeWk(vo.items, { bindRoot: vo.bindRoot, soryItems: vo.soryItems }) //filepathToTree因opt可傳入soryItems為function, 此無法通過序列化傳入worker, 故不使用wk版

                //save
                vo.itemsTrans = r.fpsNormalize
                vo.treeItemsFolder = r.treeItemsFolder
                vo.treeItems = r.treeItems
                vo.kpPath = r.kpPath
                // console.log('items', cloneDeep(vo.items))
                // console.log('itemsTrans', cloneDeep(vo.itemsTrans))
                // console.log('treeItemsFolder', cloneDeep(vo.treeItemsFolder))
                // console.log('treeItems', cloneDeep(vo.treeItems))
                // console.log('kpPath', cloneDeep(vo.kpPath))

                //showTreeFirstFolder
                if (vo.defaultShowTreeFirst) {
                    vo.showTreeFirstFolder()
                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        emitShowTreeDelay: function(b) {
            // console.log('methods emitShowTreeDelay', b)

            let vo = this

            //setTimeout
            setTimeout(() => {
                vo.emitShowTree(b)
            }, 1)

        },

        emitShowTree: function(b) {
            // console.log('methods emitShowTree', b)

            let vo = this

            //update
            vo.showTreeTrans = b

            //emit
            vo.$emit('update:showTree', b)

        },

        emitDrawerWidth: function(w) {
            // console.log('methods emitDrawerWidth', w)

            let vo = this

            //update
            vo.treeWidthTrans = w

            //emit
            vo.$emit('update:treeWidth', w)

        },

        getTreeFolderIconColor: function(props) {
            // console.log('methods getTreeFolderIconColor', props)

            let vo = this

            //isHover
            let isHover = get(props, 'isHover')
            if (!isbol(isHover)) {
                isHover = false
            }
            // console.log('isHover', isHover)

            //isActive
            let isActive = get(props, 'isActive')
            if (!isbol(isActive)) {
                isActive = false
            }
            // console.log('isActive', isActive)

            if (isActive) {
                return vo.effTreeFolderIconColorActive
            }
            else if (isHover) {
                return vo.effTreeFolderIconColorHover
            }
            return vo.effTreeFolderIconColor
        },

        getListItemIconColor: function(props) {
            // console.log('methods getListItemIconColor', props)

            let vo = this

            //isHover
            let isHover = get(props, 'isHover')
            if (!isbol(isHover)) {
                isHover = false
            }
            // console.log('isHover', isHover)

            //isActive
            let isActive = get(props, 'isActive')
            if (!isbol(isActive)) {
                isActive = false
            }
            // console.log('isActive', isActive)

            if (isActive) {
                return vo.effListItemIconColorActive
            }
            else if (isHover) {
                return vo.effListItemIconColorHover
            }
            return vo.effListItemIconColor
        },

        listFolder: function(children) {
            // console.log('methods listFolder', children)

            let vo = this

            //重建物件陣列
            let rs = map(children, (v) => {
                let text = ''
                let icon = ''
                if (v._type === 'folder') {
                    text = v.text
                    icon = vo.listFolderIcon
                }
                else {
                    text = v.text
                    icon = vo.listFileIcon
                }
                return {
                    text,
                    icon,
                    data: v,
                }
            })
            // console.log('rs', rs)

            //save
            vo.listItems = rs

        },

        displayFolderById: function(id, from) {
            // console.log('methods displayFolderById', id, from)

            let vo = this

            //pt
            let pt = vo.kpPath[id]
            // console.log('id', id)
            // console.log('vo.kpPath', vo.kpPath)
            // console.log('pt', pt)

            //self
            let self = get(vo.treeItems, pt)
            // console.log('vo.treeItems', vo.treeItems)
            // console.log('self', self)

            //chpt
            let chpt = `${pt}.children`

            //children
            let children = get(vo.treeItems, chpt)
            // console.log('children', children)

            //listFolder
            vo.listFolder(children)

            //pathInfors
            let pathInfors = get(self, 'pathInfors', [])
            // console.log('pathInfors', pathInfors)

            //save
            vo.pathInfors = pathInfors

        },

        ckTreeFolder: function(props) {
            // console.log('methods ckTreeFolder', props)

            let vo = this

            //item
            let item = get(props, 'data', null)
            // console.log('item', item)

            //id
            let id = get(props, 'data.id', '')
            // console.log('id', id)

            //displayFolderById
            vo.displayFolderById(id, 'ckTreeFolder')

            //emit
            vo.$emit('click-folder', { from: 'tree', item })
            vo.$emit('click', { type: 'folder', from: 'tree', item })

            //clear
            vo.$nextTick(() => {
                // vo.treeItemActive = null //tree點擊不能清除主動項目
                vo.listItemActive = null
            })

        },

        ckListItem: function(props) {
            // console.log('methods ckListItem', props)

            let vo = this

            //item
            let item = get(props, 'item.data', null)
            // console.log('item', item)

            //id
            let id = get(props, 'item.data.id', '')
            // console.log('id', id)

            //_type
            let _type = get(props, 'item.data._type', '')

            //click folder
            if (_type === 'folder') {

                //displayFolderById
                vo.displayFolderById(id, 'ckListItem')

                //emit
                vo.$emit('click-folder', { from: 'list', item })
                vo.$emit('click', { type: 'folder', from: 'list', item })

                //clear
                setTimeout(() => {
                    vo.treeItemActive = null //點擊list則清除tree主動項目
                    vo.listItemActive = null //因點擊之滑鼠放開會造成切換list內容後觸發對新項目的點擊, 故得要使用setTimeout給予更長延遲後才清除
                }, 300)

            }
            else {

                //emit
                vo.$emit('click-file', { from: 'list', item })
                vo.$emit('click', { type: 'file', from: 'list', item })

            }

        },

        ckPathFolder: function(item) {
            // console.log('methods ckPathFolder', item)

            let vo = this

            //id
            let id = get(item, 'id', '')
            // console.log('id', id)

            //displayFolderById
            vo.displayFolderById(id, 'ckPathFolder')

            //emit
            vo.$emit('click-folder', { from: 'path', item })
            vo.$emit('click', { type: 'folder', from: 'path', item })

            //clear
            vo.$nextTick(() => {
                vo.treeItemActive = null //點擊path則清除tree主動項目
                vo.listItemActive = null //點擊path則清除list主動項目
            })

        },

        toggleTreeFoldersByFun: function(cb) {
            // console.log('methods toggleTreeFoldersByFun', cb)

            let vo = this

            return vo.$refs.wt.toggleItemsByFun(cb)
        },

        toggleTreeFoldersAll: function(toUnfolding, toLevel) {
            // console.log('methods toggleTreeFoldersAll', toUnfolding, toLevel)

            let vo = this

            return vo.$refs.wt.toggleItemsAll(toUnfolding, toLevel)
        },

        triggerClickTreeFolderById: function(id) {
            // console.log('methods triggerClickTreeFolderById', id)

            let vo = this

            //props
            let props = {
                data: {
                    id,
                }
            }

            //ckTreeFolder
            vo.ckTreeFolder(props)

            //treeItemActive
            vo.treeItemActive = { id }

        },

        triggerClickTreeFolderByFun: async function(cb) {
            // console.log('methods triggerClickTreeFolderByFun', cb)

            let vo = this

            //check
            if (!isfun(cb)) {
                return
            }

            //treeItemsSpread, 供外部尋找待點擊項目
            let treeItemsSpread = []
            each(vo.kpPath, (pt) => {
                let r = get(vo.treeItems, pt, '')
                treeItemsSpread.push(r)
            })

            //msg
            let msg = {
                treeItemsFolder: vo.treeItemsFolder,
                treeItems: vo.treeItems,
                kpPath: vo.kpPath,
                treeItemsSpread,
            }

            //r, 通過cb回傳操作物件, 包含欲顯隱之row與toUnfolding, 若toUnfolding不給則進行反向切換顯隱, cb亦支援使用async function使用resolve回傳操作物件
            let r = cb(msg)

            //check
            if (ispm(r)) {
                r = await r
            }
            // console.log('r', r)

            //id
            let id = get(r, 'id')
            // console.log('id', id)

            //check
            if (!isestr(id)) {
                console.log('invalid id', id)
                return
            }

            //triggerClickTreeFolderById
            vo.triggerClickTreeFolderById(id)

        },

        useFunOperateItem: function(msg) {
            // console.log('methods useFunOperateItem', msg)

            let vo = this

            //ck
            let ck = [
                'Rename',
                // 'InsertBefore',
                // 'InsertAfter',
                'InsertChild',
                'Delete',
            ]

            //根目錄僅允許新增子資料夾
            let id = get(msg, 'item.id', '')
            if (id === vo.bindRoot) {
                ck = [
                    'InsertChild',
                ]
            }

            return ck
        },

        changeData: function(msg) {
            // console.log('changeData', msg)
            // let vo = this
        },

        changeItem: function(msg) {
            // console.log('changeItem', msg)

            let vo = this

            //getItem
            let getItem = (pathInfors) => {

                //n1
                let n1 = size(pathInfors) - 1
                if (n1 < 1) {
                    throw new Error(`n1${n1} < 1`)
                }

                //n2
                let n2 = n1 - 1
                if (n2 < 0) {
                    throw new Error(`n2${n2} < 0`)
                }

                //node
                let node = get(pathInfors, n1, {}) //不直接用last改用get, 使能有預設值{}, 讓後續spread能解構
                // console.log('node', node)

                //text
                let text = get(node, 'text', '')

                //check
                if (!isestr(text)) {
                    throw new Error(`node.text is not a string`)
                }

                //pnode
                let pnode = get(pathInfors, n2, {}) //last(dropRight(pathInfors)) //所在父節點
                // console.log('pnode', pnode)

                //ts
                let ts = get(pnode, 'ts', [])
                // console.log('ts', ts)

                //nk
                let nk = [...ts, text]
                // console.log('nk', nk)

                //path
                let path = '/' + join(nk, '/') //配合treeToFilepath使用同格式

                //itemTar
                let itemTar = {
                    ...node,
                    type: 'folder',
                    path,
                }
                // console.log('itemTar', itemTar)

                return itemTar
            }

            //removeRoot
            let removeRoot = (itemsNew) => {

                //剔除root
                let n = size(vo.bindRoot) + 1
                // console.log('n', n)
                itemsNew = map(itemsNew, (v) => {
                    v.path = strdelleft(v.path, n)
                    return v
                })
                // console.log('itemsNew(剔除root)', cloneDeep(itemsNew))

                return itemsNew
            }

            //itemsNew
            let itemsNew = []
            if (msg.mode === 'add') {

                //check
                if (msg.kind !== 'belongto') {
                    console.log(msg)
                    throw new Error(`kind[${msg.kind}] is not supported`)
                }

                //itemNew
                let itemNew = getItem(msg.pathInforsNew)
                // console.log('itemNew', itemNew)

                //itemsNew
                itemsNew = cloneDeep(vo.itemsTrans)
                // console.log('itemsNew', itemsNew)

                //push
                itemsNew.push(itemNew)
                // console.log('itemsNew(push)', cloneDeep(itemsNew))

            }
            else if (msg.mode === 'delete') {

                //itemDel
                let itemDel = getItem(msg.pathInforsOri)
                // console.log('itemDel', itemDel)

                //np
                let np = size(itemDel.path)
                // console.log('np', np)

                //itemsTrans
                let itemsTrans = cloneDeep(vo.itemsTrans)
                // console.log('itemsTrans', itemsTrans)

                //itemsNew
                itemsNew = []
                each(itemsTrans, (v) => {
                    if (strleft(v.path, np) !== itemDel.path) { //path中不隸屬於itemDel.path為不刪除節點, 才須儲存
                        itemsNew.push(v)
                    }
                })
                // console.log('itemsNew', cloneDeep(itemsNew))

            }
            else if (msg.mode === 'move' || msg.mode === 'rename') {
                //msg.kind於before是先針對nkOri刪除目標節點再對nkNew塞入新節點, 於after是先針對nkNew塞入新節點再對nkOri刪除來源節點

                //pathInforsOri
                let pathInforsOri = msg.pathInforsOri
                // console.log('pathInforsOri', cloneDeep(pathInforsOri))

                //pathInforsNew
                let pathInforsNew = msg.pathInforsNew
                // console.log('pathInforsNew', cloneDeep(pathInforsNew))

                //pathOri
                let pathOri = '/' + join(map(pathInforsOri, 'text'), '/') //配合treeToFilepath使用同格式
                // console.log('pathOri', pathOri)

                //n
                let n = size(pathOri)

                //pathNew
                let pathNew = '/' + join(map(pathInforsNew, 'text'), '/') //配合treeToFilepath使用同格式
                // console.log('pathNew', pathNew)

                // //check, 不能偵測同名跳出, 因tree可拖曳順序但explorer得要按照排序規則呈現, 故得要向外變更數據, 觸發數據重新處理與呈現
                // if (pathOri === pathNew) {
                //     return
                // }

                //itemsNew
                itemsNew = cloneDeep(vo.itemsTrans)
                // console.log('itemsNew', cloneDeep(itemsNew))

                //modify path
                itemsNew = map(itemsNew, (v) => {
                    if (strleft(v.path, n) === pathOri) {
                        let path = strdelleft(v.path, n)
                        v.path = pathNew + path
                    }
                    return v
                })
                // console.log('itemsNew(replace)', cloneDeep(itemsNew))

            }

            //removeRoot
            itemsNew = removeRoot(itemsNew)
            // console.log('itemsNew(剔除root)', cloneDeep(itemsNew))

            //emit
            vo.$emit('update:items', itemsNew)

            //emit
            vo.$emit('change-item', msg)

        },

        clickOperateItem: function(msg) {
            // console.log('clickOperateItem', msg)

            let vo = this

            //emit
            vo.$emit('click-operate-item', msg)

        },

    },
}
</script>

<style scoped>
</style>
