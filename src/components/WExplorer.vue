<template>
    <div
        style=""
        :changeItems="changeItems"
        v-domresize
        @domresize="resizePanel"
    >

        <WDrawer
            :style="`width:${panelWidth}px; height:${panelHeight}px;`"
            v-model="showTree"
            :drawerWidth.sync="treeWidth"
            :drawerWidthMin="treeWidthMin"
            :drawerWidthMax="treeWidthMax"
            :dragDrawerWidth="true"
            :drawerBarColor="treeDrawerBarColor"
            :drawerBarSize="treeDrawerBarSize"
        >

            <template v-slot:drawer="props">

                <WTree
                    ref="wt"
                    :style="`width:${props.width}px; min-width:${props.width}px;`"
                    :viewHeightMax="panelHeight"
                    :defItemHeight="treeDefItemHeight"
                    :defaultDisplayLevel="treeDefaultDisplayLevel"
                    :data="treeItemsFolder"
                    :activable="true"
                    :itemActive.sync="folderItemActive"
                    :paddingStyle="treePaddingStyle"
                    :indent="treeIndent"
                    :iconSize="toggleTreeIconSize"
                    :iconToggleColor="toggleTreeIconColor"
                    :iconToggleBackgroundColor="toggleTreeIconBackgroundColor"
                    :iconToggleBackgroundColorHover="toggleTreeIconBackgroundColorHover"
                    :itemTextColor="treeItemTextColor"
                    :itemTextColorHover="treeItemTextColorHover"
                    :itemTextColorActive="treeItemTextColorActive"
                    :itemBackgroundColor="treeItemBackgroundColor"
                    :itemBackgroundColorHover="treeItemBackgroundColorHover"
                    :itemBackgroundColorActive="treeItemBackgroundColorActive"
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

            </template>

            <template v-slot:content="props">

                <div
                    :style="`width:${props.width}px; min-width:${props.width}px; border-bottom:${lineBetweenPathAndListWidth}px solid ${effLineBetweenPathAndListColor}; background:transparent;`"
                    v-domresize
                    @domresize="resizePath"
                >

                    <div :style="`display:flex; align-items:start;`">

                        <div :style="`min-height:${btnDisplayTreeIconSize+8}px; padding:0px 2px 0px 5px; display:flex; align-items:center;`">

                            <!-- 切換顯隱tree按鈕 -->
                            <WButtonCircle
                                :paddingStyle="{h:2,v:2}"
                                :icon="showTree?btnDisplayTreeIconHide:btnDisplayTreeIconShow"
                                :iconSize="btnDisplayTreeIconSize"
                                :iconColor="btnDisplayTreeIconColor"
                                :iconColorHover="btnDisplayTreeIconColorHover"
                                :iconColorFocus="btnDisplayTreeIconColorFocus"
                                :backgroundColor="btnDisplayTreeBackgroundColor"
                                :backgroundColorHover="btnDisplayTreeBackgroundColorHover"
                                :backgroundColorFocus="btnDisplayTreeBackgroundColorFocus"
                                :shadow="false"
                                @click="showTree=!showTree"
                            ></WButtonCircle>

                        </div>

                        <div
                            :style="`min-height:${btnDisplayTreeIconSize+8}px; padding-left:4px; color:${effPathTextColor}; ${usePathTextFontSize} display:flex; align-items:center;`"
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
                                        :textColor="pathTextColor"
                                        :textColorHover="pathTextColorHover"
                                        _textColorActive="pathTextColorActive"
                                        :textFontSize="pathTextFontSize"
                                        _icon="pathSepIcon"
                                        _iconColor="pathSepIconColor"
                                        _iconSize="pathSepIconSize"
                                        :backgroundColor="pathBackgroundColor"
                                        :backgroundColorHover="pathBackgroundColorHover"
                                        _backgroundColorActive="pathBackgroundColorActive"
                                        @click="ckPathFolder(pi)"
                                    >
                                    </WButtonChip>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <div
                    :style="`height:${listHeight}px;`"
                    v-if="folderItems.length>0"
                >
                    <WListVertical
                        :style="`width:${props.width}px; min-width:${props.width}px; height:${listHeight}px;`"
                        :items="folderItems"
                        :itemActive.sync="fileItemActive"
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
                    >
                        <template v-slot:item="props">
                            <div>

                                <div :style="`display:flex;`">

                                    <div
                                        :style="`height:${listDefItemHeight}px; padding-right:4px; display:flex; align-items:center; cursor:pointer;`"
                                        @click="ckListItem(props)"
                                    >
                                        <WIcon
                                            :icon="props.item.icon"
                                            :color="getListItemIconColor(props)"
                                            :size="listIconSize"
                                        ></WIcon>
                                    </div>

                                    <div
                                        :style="`min-height:${listDefItemHeight}px; line-height:${listDefItemHeight}px; ${useListItemTextFontSize} cursor:pointer; user-select:none;`"
                                        @click="ckListItem(props)"
                                    >
                                        {{props.item.text}}
                                    </div>

                                </div>

                                <slot
                                    name="list-item-ext"
                                    :item="props.item"
                                >
                                </slot>

                            </div>
                        </template>
                    </WListVertical>
                </div>

            </template>

        </WDrawer>

    </div>
</template>

<script>
import { mdiFolder, mdiFileOutline, mdiChevronRight, mdiArrowLeftBoldHexagonOutline, mdiArrowRightBoldHexagonOutline } from '@mdi/js'
import get from 'lodash/get'
import map from 'lodash/map'
import isbol from 'wsemi/src/isbol.mjs'
import replace from 'wsemi/src/replace.mjs'
import filepathToTree from 'wsemi/src/filepathToTree.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import domResize from '../js/domResize.mjs'
import WIcon from './WIcon.vue'
import WTree from './WTree.vue'
import WListVertical from './WListVertical.vue'
import WDrawer from './WDrawer.vue'
import WButtonChip from './WButtonChip.vue'
import WButtonCircle from './WButtonCircle.vue'


/**
 *
 *

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

        //  * @vue-prop {Array} [items=[]] 輸入項目物件陣列，預設[]
        //  * @vue-prop {Number} [treeWidthMin=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最小值數字，預設null
        //  * @vue-prop {Number} [treeWidthMax=null] 輸入使用拖曳抽屜寬度分隔條(dragDrawerWidth=true)時，拖曳抽屜寬度分隔條最大值數字，預設null
        items: {
            type: Array,
            default: () => [],
        },
        treeWidthMin: { //bbb
            type: Number,
            default: null,
        },
        treeWidthMax: { //bbb
            type: Number,
            default: null,
        },

        //  * @vue-prop {Number} [treeDefItemHeight=30] 輸入按需顯示時各項目預設最小高度(min-height)值，給越準或給大部分項目的高度則渲染速度越快，單位為px，預設30
        //  * @vue-prop {Number} [treeDefaultDisplayLevel=null] 輸入初始展開層數數字，若輸入1就是預設展開至第1層，第2層(含)以下則都隱藏，若輸入null就是全展開，預設null
        //  * @vue-prop {Object} [treePaddingStyle={v:0,h:0}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:0}
        //  * @vue-prop {Number} [treeIndent=0.7] 輸入縮排比率數字，若使用1就是1倍的圖標寬度(24px)+2*separation(3px)，預設0.7
        //  * @vue-prop {Number} [toggleTreeIconSize=24] 輸入顯隱icon按鈕高度數字，單位為px，預設24
        //  * @vue-prop {String} [toggleTreeIconColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
        //  * @vue-prop {String} [toggleTreeIconBackgroundColor='transparent'] 輸入顯隱icon按鈕背景顏色字串，預設'transparent'
        //  * @vue-prop {String} [toggleTreeIconBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱icon按鈕背景顏色字串，預設'rgba(128,128,128,0.15)'
        //  * @vue-prop {String} [treeItemTextColor='#444'] 輸入文字顏色字串，預設'#444'
        //  * @vue-prop {String} [treeItemTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
        //  * @vue-prop {String} [treeItemTextColorActive='#000'] 輸入主動模式時文字顏色字串，預設'#000'
        //  * @vue-prop {String} [treeFolderIcon=mdiFolder] 輸入資料夾圖標字串，預設mdiFolder
        //  * @vue-prop {Number} [treeFolderIconSize=20] 輸入資料夾圖標之尺寸數字，單位px，預設20
        //  * @vue-prop {String} [treeFolderIconColor='#888'] 輸入資料夾圖標顏色字串，預設'#888'
        //  * @vue-prop {String} [treeFolderIconColorHover='#777'] 輸入滑鼠移入時資料夾圖標顏色字串，預設'#777'
        //  * @vue-prop {String} [treeFolderIconColorActive='#666'] 輸入主動模式時資料夾圖標顏色字串，預設'#666'
        //  * @vue-prop {String} [treeItemBackgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
        //  * @vue-prop {String} [treeItemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
        //  * @vue-prop {String} [treeItemBackgroundColorActive='rgba(100,100,100,0.2)'] 輸入主動模式時背景顏色字串，預設'rgba(100,100,100,0.2)'
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
        toggleTreeIconSize: {
            type: Number,
            default: 24,
        },
        toggleTreeIconColor: {
            type: String,
            default: 'grey',
        },
        toggleTreeIconBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        toggleTreeIconBackgroundColorHover: {
            type: String,
            default: 'rgba(128,128,128,0.15)',
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

        //  * @vue-prop {Number} [treeDrawerBarSize=2] 輸入分隔條尺寸數字，為分隔條寬度，單位為px，預設2
        //  * @vue-prop {String} [treeDrawerBarColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
        treeDrawerBarSize: {
            type: Number,
            default: 2,
        },
        treeDrawerBarColor: {
            type: String,
            default: '#ddd',
        },

        //  * @vue-prop {Number} [lineBetweenPathAndListWidth=1] 輸入path與list區之間分隔線寬度，單位為px，預設1
        //  * @vue-prop {String} [lineBetweenPathAndListColor='#ddd'] 輸入path與list區之間分隔線顏色字串，預設'#ddd'
        lineBetweenPathAndListWidth: {
            type: Number,
            default: 1,
        },
        lineBetweenPathAndListColor: {
            type: String,
            default: '#ddd',
        },

        //  * @vue-prop {Number} [listDefItemHeight=30] 輸入按需顯示時各項目預設最小高度(min-height)值，單位為px，預設30
        //  * @vue-prop {Object} [listPaddingStyle={v:0,h:6}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:6}
        //  * @vue-prop {String} [listItemBackgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
        //  * @vue-prop {String} [listItemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
        //  * @vue-prop {String} [listItemBackgroundColorActive='rgba(100,100,100,0.2)'] 輸入主動模式時背景顏色字串，預設'rgba(100,100,100,0.2)'
        //  * @vue-prop {String} [listItemTextFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
        //  * @vue-prop {String} [listItemTextColor='#444'] 輸入文字顏色字串，預設'#444'
        //  * @vue-prop {String} [listItemTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
        //  * @vue-prop {String} [listItemTextColorActive='#000'] 輸入主動模式時文字顏色字串，預設'#000'
        //  * @vue-prop {String} [listFolderIcon=mdiFolder] 輸入資料夾圖標字串，預設mdiFolder
        //  * @vue-prop {String} [listFileIcon=mdiFileOutline] 輸入檔案圖標字串，預設mdiFileOutline
        //  * @vue-prop {Number} [listIconSize=20] 輸入資料夾與檔案圖標之尺寸數字，單位px，預設20
        //  * @vue-prop {Number} [listItemIconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
        //  * @vue-prop {String} [listItemIconColor='#888'] 輸入圖標顏色字串，預設'#888'
        //  * @vue-prop {String} [listItemIconColorHover='#777'] 輸入滑鼠移入時圖標顏色字串，預設'#777'
        //  * @vue-prop {String} [listItemIconColorActive='#666'] 輸入主動模式時圖標顏色字串，預設'#666'
        //  * @vue-prop {String} [listItemRippleColor='rgba(255,255,255,0.4)'] 輸入ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
        listDefItemHeight: { //bbb
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
        listIconSize: {
            type: Number,
            default: 20,
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
        listItemRippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
        },

        //  * @vue-prop {String} [btnDisplayTreeIconShow=mdiArrowRightBoldHexagonOutline] 輸入顯示tree按鈕圖標字串，預設mdiArrowRightBoldHexagonOutline
        //  * @vue-prop {String} [btnDisplayTreeIconShow=mdiArrowLeftBoldHexagonOutline] 輸入隱藏tree按鈕圖標字串，預設mdiArrowLeftBoldHexagonOutline
        //  * @vue-prop {Number} [btnDisplayTreeIconSize=20] 輸入顯隱tree按鈕圖標之尺寸數字，單位px，預設20
        //  * @vue-prop {String} [btnDisplayTreeIconColor='grey darken-1'] 輸入顯隱tree按鈕圖標顏色字串，預設'grey darken-1'
        //  * @vue-prop {String} [btnDisplayTreeIconColorHover='grey darken-2'] 輸入滑鼠移入時顯隱tree按鈕圖標顏色字串，預設'grey darken-2'
        //  * @vue-prop {String} [btnDisplayTreeIconColorFocus='grey darken-3'] 輸入取得焦點時顯隱tree按鈕圖標顏色字串，預設'grey darken-3'
        //  * @vue-prop {String} [btnDisplayTreeBackgroundColor='transparent'] 輸入顯隱tree按鈕背景顏色字串，預設'transparent'
        //  * @vue-prop {String} [btnDisplayTreeBackgroundColorHover='rgb(236,236,236)'] 輸入滑鼠移入時顯隱tree按鈕背景顏色字串，預設'rgb(236,236,236)'
        //  * @vue-prop {String} [btnDisplayTreeBackgroundColorFocus='rgb(230,230,230)'] 輸入主動模式時顯隱tree按鈕背景顏色字串，預設'rgb(230,230,230)'
        btnDisplayTreeIconShow: { //bbb
            type: String,
            default: mdiArrowRightBoldHexagonOutline,
        },
        btnDisplayTreeIconHide: { //bbb
            type: String,
            default: mdiArrowLeftBoldHexagonOutline,
        },
        btnDisplayTreeIconSize: { //bbb
            type: Number,
            default: 20,
        },
        btnDisplayTreeIconColor: { //bbb
            type: String,
            default: 'grey darken-1',
        },
        btnDisplayTreeIconColorHover: { //bbb
            type: String,
            default: 'grey darken-2',
        },
        btnDisplayTreeIconColorFocus: { //bbb
            type: String,
            default: 'grey darken-3',
        },
        btnDisplayTreeBackgroundColor: { //bbb
            type: String,
            default: 'transparent',
        },
        btnDisplayTreeBackgroundColorHover: { //bbb
            type: String,
            default: 'rgb(236,236,236)',
        },
        btnDisplayTreeBackgroundColorFocus: { //bbb
            type: String,
            default: 'rgb(230,230,230)',
        },

        //  * @vue-prop {String} [pathTextColor='#444'] 輸入文字顏色字串，預設'#444'
        //  * @vue-prop {String} [pathTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
        //  * @vue-prop {String} [pathTextFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
        //  * @vue-prop {String} [pathSepIcon=mdiChevronRight] 輸入分隔圖標字串，預設mdiChevronRight
        //  * @vue-prop {String} [pathSepIconColor='#888'] 輸入分隔圖標顏色字串，預設'#888'
        //  * @vue-prop {Number} [pathSepIconSize=18] 輸入分隔圖標之尺寸數字，單位px，預設18
        //  * @vue-prop {String} [pathBackgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
        //  * @vue-prop {String} [pathBackgroundColorHover='rgb(236,236,236)'] 輸入滑鼠移入時背景顏色字串，預設'rgb(236,236,236)'
        pathTextColor: {
            type: String,
            default: '#444',
        },
        pathTextColorHover: {
            type: String,
            default: '#222',
        },
        pathTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        pathSepIcon: { //bbb
            type: String,
            default: mdiChevronRight,
        },
        pathSepIconColor: { //bbb
            type: String,
            default: '#888',
        },
        pathSepIconSize: { //bbb
            type: Number,
            default: 18,
        },
        pathBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        pathBackgroundColorHover: {
            type: String,
            default: 'rgb(236,236,236)',
        },

        //  * @vue-prop {String} [noSelectedText='No selected folder'] 輸入尚未選擇資料夾字串，預設'No selected folder'
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

            showTree: true,
            treeWidth: 200,

            folderItemActive: null,
            folderItems: [],
            fileItemActive: null,

            treeItemsFolder: null,
            treeItems: null,
            kpPath: null,

            parentInfors: [],

        }
    },
    computed: {

        changeItems: function() {
            let vo = this
            let r = filepathToTree(vo.items)
            vo.treeItemsFolder = r.treeItemsFolder
            vo.treeItems = r.treeItems
            vo.kpPath = r.kpPath
            return ''
        },

        effLineBetweenPathAndListColor: function() {
            let vo = this
            return color2hex(vo.lineBetweenPathAndListColor)
        },

        // effTreeItemTextColorHover: function() {
        //     let vo = this
        //     return color2hex(vo.treeItemTextColorHover)
        // },

        // effTreeItemTextColorActive: function() {
        //     let vo = this
        //     return color2hex(vo.treeItemTextColorActive)
        // },

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

        // effTextColor: function() {
        //     let vo = this
        //     return color2hex(vo.textColor)
        // },

        // effTextColorHover: function() {
        //     let vo = this
        //     return color2hex(vo.textColorHover)
        // },

        // effTextColorActive: function() {
        //     let vo = this
        //     return color2hex(vo.textColorActive)
        // },

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

        usePathTextFontSize: function() {
            let vo = this
            let s = vo.pathTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        listHeight: function() {
            let vo = this
            return vo.panelHeight - vo.pathHeight
        },

        effPathTextColor: function() {
            let vo = this
            return color2hex(vo.pathTextColor)
        },

        // effFolderIconColor: function() {
        //     let vo = this
        //     return color2hex(vo.folderIconColor)
        // },

        // effFileIconColor: function() {
        //     let vo = this
        //     return color2hex(vo.fileIconColor)
        // },

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

        // getTreeItemTextColor: function(props) {
        //     console.log('methods getTreeItemTextColor', props)

        //     let vo = this

        //     //isHover
        //     let isHover = get(props, 'isHover')
        //     if (!isbol(isHover)) {
        //         isHover = false
        //     }
        //     console.log('isHover', isHover)

        //     //isActive
        //     let isActive = get(props, 'isActive')
        //     if (!isbol(isActive)) {
        //         isActive = false
        //     }
        //     console.log('isActive', isActive)

        //     if (isActive) {
        //         return vo.effTreeItemTextColorActive
        //     }
        //     else if (isHover) {
        //         return vo.effTreeItemTextColorHover
        //     }
        //     return vo.effTreeItemTextColor
        // },

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
                let iconColor = ''
                let iconSize = null
                if (v._type === 'folder') {
                    text = v.text
                    icon = vo.listFolderIcon
                    // iconColor = vo.effFolderIconColor
                    // iconSize = vo.folderIconSize
                }
                else {
                    text = v.text
                    icon = vo.listFileIcon
                    // iconColor = vo.effFileIconColor
                    // iconSize = vo.fileIconSize
                }
                return {
                    text,
                    icon,
                    iconColor,
                    iconSize,
                    data: v,
                }
            })
            // console.log('rs', rs)

            //save
            vo.folderItems = rs

        },

        displayFolderById: function(id) {
            // console.log('methods displayFolderById', id)

            let vo = this

            //pt
            let pt = vo.kpPath[id]
            // console.log('vo.kpPath', vo.kpPath)
            // console.log('id', id, 'pt', pt)

            //self
            let self = get(vo.treeItems, pt)
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
                vo.folderItemActive = null
                vo.fileItemActive = null
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

                //clear, 因點擊之滑鼠放開會造成切換list內容後觸發對新項目的點擊, 故得要使用setTimeout給予更長延遲後才清除
                setTimeout(() => {
                    vo.folderItemActive = null
                    vo.fileItemActive = null
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
                vo.folderItemActive = null
                vo.fileItemActive = null
            })

        },

    },
}
</script>

<style scoped>
</style>
