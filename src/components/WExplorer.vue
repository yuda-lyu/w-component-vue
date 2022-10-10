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
                        :data="treeItemsFolder"
                        :activable="true"
                        :itemActive.sync="treeItemActive"
                        :paddingStyle="treePaddingStyle"
                        :indent="treeIndent"
                        :iconSize="treeToggleIconSize"
                        :iconToggleColor="treeToggleIconColor"
                        :iconToggleBackgroundColor="treeToggleIconBackgroundColor"
                        :iconToggleBackgroundColorHover="treeToggleIconBackgroundColorHover"
                        :itemTextColor="treeItemTextColor"
                        :itemTextColorHover="treeItemTextColorHover"
                        :itemTextColorActive="treeItemTextColorActive"
                        :itemBackgroundColor="treeItemBackgroundColor"
                        :itemBackgroundColorHover="treeItemBackgroundColorHover"
                        :itemBackgroundColorActive="treeItemBackgroundColorActive"
                        :itemRippleColor="treeItemRippleColor"
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

                    <div :style="`position:absolute; top:0px; right:0px;`" v-if="showTreeTrans">
                        <!-- drawer可能有捲軸, 給予預留空間padding-right:8px -->
                        <div :style="`padding-right:8px; min-height:${btnDisplayTreeInDrawerHeightMin}px; display:flex; align-items:center;`">

                            <!-- 切換顯隱tree按鈕 -->
                            <WButtonCircle
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
                                <WButtonCircle
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
                                v-if="parentInfors.length===0"
                            >
                                {{noSelectedText}}
                            </div>

                            <div :style="`display:flex; flex-wrap:wrap;`">
                                <div
                                    :style="`min-height:${btnDisplayTreeIconSize+8}px;`"
                                    :key="'kpi-'+kpi"
                                    v-for="(pi,kpi) in parentInfors"
                                >

                                    <!-- 因path區域預設有底線故-1px -->
                                    <div :style="`min-height:${btnDisplayTreeIconSize+8}px; display:flex; align-items:center;`">

                                        <WIcon
                                            :icon="pathSepIcon"
                                            :color="pathSepIconColor"
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
                            :itemClickable="true"
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
import { mdiFolder, mdiFileOutline, mdiChevronRight, mdiArrowLeftBoldHexagonOutline, mdiArrowRightBoldHexagonOutline } from '@mdi/js'
import get from 'lodash/get'
import each from 'lodash/each'
import map from 'lodash/map'
import isbol from 'wsemi/src/isbol.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import ispm from 'wsemi/src/ispm.mjs'
import replace from 'wsemi/src/replace.mjs'
import arrSort from 'wsemi/src/arrSort.mjs'
import filepathToTree from 'wsemi/src/filepathToTree.mjs'
import parseSpace from '../js/parseSpace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
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
 * @vue-prop {Number} [treeWidth=200] 輸入樹狀資料夾寬度數字，單位為px，預設200
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
            default: 200,
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
    },
    data: function() {
        return {

            panelWidth: 0,
            panelHeight: 0,
            pathHeight: 0,

            showTreeTrans: true,
            treeWidthTrans: 200,

            kpPath: null,
            treeItemsFolder: null,
            treeItems: null,
            treeItemActive: null,

            parentInfors: [],

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

            //soryItems
            let soryItems = (rs, pid, ns) => {
                // console.log('soryItems', 'pid=', pid, 'ns=', ns, 'rs=', rs)

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
            }

            //filepathToTree
            let r = filepathToTree(vo.items, { bindRoot: vo.bindRoot, soryItems })

            //save
            vo.treeItemsFolder = r.treeItemsFolder
            vo.treeItems = r.treeItems
            vo.kpPath = r.kpPath

            //showTreeFirstFolder
            if (vo.defaultShowTreeFirst) {
                vo.showTreeFirstFolder()
            }

            return ''
        },

        effTreeBackgroundColor: function() {
            let vo = this
            return color2hex(vo.treeBackgroundColor)
        },

        effListBackgroundColor: function() {
            let vo = this
            return color2hex(vo.listBackgroundColor)
        },

        effPathBackgroundColor: function() {
            let vo = this
            return color2hex(vo.pathBackgroundColor)
        },

        effLineBetweenPathAndListColor: function() {
            let vo = this
            return color2hex(vo.lineBetweenPathAndListColor)
        },

        effTreeFolderIconColor: function() {
            let vo = this
            return color2hex(vo.treeFolderIconColor)
        },

        effTreeFolderIconColorHover: function() {
            let vo = this
            return color2hex(vo.treeFolderIconColorHover)
        },

        effTreeFolderIconColorActive: function() {
            let vo = this
            return color2hex(vo.treeFolderIconColorActive)
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
            return color2hex(vo.listItemIconColor)
        },

        effListItemIconColorHover: function() {
            let vo = this
            return color2hex(vo.listItemIconColorHover)
        },

        effListItemIconColorActive: function() {
            let vo = this
            return color2hex(vo.listItemIconColorActive)
        },

        usePathBtnTextFontSize: function() {
            let vo = this
            let s = vo.pathBtnTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        effPathBtnTextColor: function() {
            let vo = this
            return color2hex(vo.pathBtnTextColor)
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

        showTreeFirstFolder: function() {
            // console.log('methods showTreeFirstFolder')

            let vo = this

            //triggerClickTreeFolderById
            let id = vo.bindRoot
            vo.triggerClickTreeFolderById(id)

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

        displayFolderById: function(id) {
            // console.log('methods displayFolderById', id)

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

            //parentInfors
            let parentInfors = get(self, 'parentInfors', [])
            // console.log('parentInfors', parentInfors)

            //save
            vo.parentInfors = parentInfors

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
            vo.displayFolderById(id)

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
                vo.displayFolderById(id)

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
            vo.displayFolderById(id)

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

            //treeItemsSpread
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

    },
}
</script>

<style scoped>
</style>
