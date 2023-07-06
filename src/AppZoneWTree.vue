<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-tree</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'default'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'iconSize(20)'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :iconSize="20"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'iconSize(20) & defItemHeight(24)'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :iconSize="20"
                    :defItemHeight="24"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'iconSize(30) & defItemHeight(36)'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :iconSize="30"
                    :defItemHeight="36"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'viewHeightMax'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :viewHeightMax="300"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'no viewHeightMax'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :viewHeightMax="null"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'itemRippleColor'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :itemRippleColor="'rgba(245,124,0,0.4)'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'events'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :viewHeightMax="WTree.viewHeightMaxSync"
                    @mouseenter="mouseenter"
                    @mouseleave="mouseleave"
                    @click="click"
                    @change-view-items="changeViewItems"
                    @change-height-of-items="changeHeightOfItems"
                    @render="render"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'toggleItemsByFun'"
                ></demolink>

                <div>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(0, true)">show(rows[0])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(0, false)">hide(rows[0])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(1, true)">show(rows[1])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(1, false)">hide(rows[1])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(2, true)">show(rows[2])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(2, false)">hide(rows[2])</v-btn>
                </div>

                <w-tree
                    ref="ref_toggleItemsByFun"
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :viewHeightMax="WTree.viewHeightMaxSync"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'toggleItemsAll'"
                ></demolink>

                <div>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsAll(true)">display all</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsAll(false)">hide all</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsAll(null,1)">display to level1</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsAll(null,2)">display to level2</v-btn>
                </div>

                <w-tree
                    ref="ref_toggleItemsAll"
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :viewHeightMax="WTree.viewHeightMaxSync"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'defaultDisplayLevel'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :defaultDisplayLevel="1"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'filterKeywords & noResultsText'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WTree.option.keywords"
                    />
                </div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :filterKeywords="WTree.option.keywords"
                    :noResultsText="'There are no items to show...'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'filterKeywords & filterFunction'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WTree.option.keywords"
                    />
                </div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :filterKeywords="WTree.option.keywords"
                    :filterFunction="filterFunction"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'itemTextColor & itemTextColorHover & itemBackgroundColor & itemBackgroundColorHover'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd; background:#444;"
                    :data="WTree.option.items"
                    :itemTextColor="'#ccc'"
                    :itemTextColorHover="'#eee'"
                    :itemBackgroundColor="'#444'"
                    :itemBackgroundColorHover="'rgba(187, 119, 34, 0.6)'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'activable & itemActive'"
                ></demolink>

                <div style="font-size:0.8rem;">itemActive: {{WTree.option.itemActive}}</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :activable="true"
                    :itemActive.sync="WTree.option.itemActive"
                    @click="clickActive"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'activable & itemActive & funActive'"
                ></demolink>

                <div style="font-size:0.8rem;">itemActive: {{WTree.option.itemActive}}</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :activable="true"
                    :itemActive.sync="WTree.option.itemActive"
                    :funActive="funActive"
                    @click="clickActive"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'activable & itemActive & itemTextColor & itemTextColorHover & itemTextColorActive & itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <div style="font-size:0.8rem;">itemActive: {{WTree.option.itemActive}}</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd; background:#444;"
                    :data="WTree.option.items"
                    :activable="true"
                    :itemActive.sync="WTree.option.itemActive"
                    :itemTextColor="'#ccc'"
                    :itemTextColorHover="'#eee'"
                    :itemTextColorActive="'#fff'"
                    :itemBackgroundColor="'#444'"
                    :itemBackgroundColorHover="'rgba(187, 119, 34, 0.6)'"
                    :itemBackgroundColorActive="'rgba(187, 119, 34, 0.8)'"
                    @click="clickActive"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'draggable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using draggable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :draggable="true"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'draggable & dgPreviewOpacity & dgPreviewBorderWidth & dgBelongBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using draggable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :draggable="true"
                    :dgPreviewOpacity="0.9"
                    :dgPreviewBorderWidth="3"
                    :dgPreviewBorderColor="'rgba(255,100,200,1)'"
                    :dgPreviewBackground="'rgba(255,100,200,0.2)'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'draggable & dgInsertLineColor & dgInsertBackgroundColor & dgBelongBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using draggable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :draggable="true"
                    :dgInsertLineColor="'rgba(120,220,150,0.9)'"
                    :dgInsertBackgroundColor="'rgba(50,220,100,0.1)'"
                    :dgBelongBackgroundColor="'rgba(50,220,100,0.2)'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'draggable & dgTextDisabled & dgTextDisabledColor & dgTextDisabledPaddingLeft & dgTextDisabledFontSize & dgTextDisabledBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using draggable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :draggable="true"
                    :dgTextDisabled="'禁止拖曳至自己子節點當中'"
                    :dgTextDisabledColor="'pink accent-3'"
                    :dgTextDisabledPaddingLeft="13"
                    :dgTextDisabledFontSize="'0.8rem'"
                    :dgTextDisabledBackgroundColor="'rgba(255,255,255,0.8)'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & operateBtnTooltip & operateItemTextForRename & operateItemTextForInsertBefore & perateItemTextForInsertChild & operateItemTextForInsertAfter & operateItemTextForDelete'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :operateBtnTooltip="'編輯'"
                    :operateItemTextForRename="'變更項目名稱'"
                    :operateItemTextForInsertBefore="'插入前項目'"
                    :operateItemTextForInsertChild="'插入子項目'"
                    :operateItemTextForInsertAfter="'插入後項目'"
                    :operateItemTextForDelete="'刪除項目'"
                    @click-operate-item="clickOperateItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & operatePanelWidth & operatePanelHeight & operateItemIconSize & operateItemPaddingStyle'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :operateItemIconSize="18"
                    :operateItemPaddingStyle="{v:5,h:5}"
                    :operatePanelWidth="130"
                    :operatePanelHeight="90"
                    @click-operate-item="clickOperateItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & operateItemHeight & operateItemIconSize & operateItemPaddingStyle'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :operateItemIconSize="18"
                    :operateItemPaddingStyle="{v:5,h:5}"
                    :operateItemHeight="29.2"
                    @click-operate-item="clickOperateItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & operateBtnBackgroundColor & operateBtnBackgroundColorHover & operateBtnBackgroundColorFocus'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :operateBtnBackgroundColor="'rgba(230,230,230,0.4)'"
                    :operateBtnBackgroundColorHover="'rgba(230,230,255,0.8)'"
                    :operateBtnBackgroundColorFocus="'rgba(210,210,255,0.8)'"
                    @click-operate-item="clickOperateItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & operateItemBackgroundColor & operateItemBackgroundColorHover & operateItemTextColor & operateItemTextColorHover & operateItemIconColor & operateItemIconColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :operateItemBackgroundColor="'blue-grey darken-1'"
                    :operateItemBackgroundColorHover="'blue-grey'"
                    :operateItemTextColor="'grey lighten-4'"
                    :operateItemTextColorHover="'white'"
                    :operateItemIconColor="'grey lighten-4'"
                    :operateItemIconColorHover="'white'"
                    @click-operate-item="clickOperateItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & operateItemIconForRename & operateItemIconForInsertBefore & operateItemIconForInsertChild & operateItemIconForInsertAfter & operateItemIconForDelete'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :operateItemIconForRename="mdiCommentEditOutline"
                    :operateItemIconForInsertBefore="mdiChevronDoubleUp"
                    :operateItemIconForInsertChild="mdiChevronDoubleRight"
                    :operateItemIconForInsertAfter="mdiChevronDoubleDown"
                    :operateItemIconForDelete="mdiDeleteVariant"
                    @click-operate-item="clickOperateItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & funOperateItem'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :funOperateItem="funOperateItem"
                    @click-operate-item="clickOperateItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameContentBackgroundColor & editorRenameFooterBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameContentBackgroundColor="'#f2f2f2'"
                    :editorRenameFooterBackgroundColor="'#EFEBE9'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameInputTextColor & editorRenameInputTextBottomLineBorderColor & editorRenameInputTextBottomLineBorderColorHover & editorRenameInputTextBottomLineBorderColorFocus'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameInputTextColor="'#444'"
                    :editorRenameInputTextBottomLineBorderColor="'#888'"
                    :editorRenameInputTextBottomLineBorderColorHover="'#aaa'"
                    :editorRenameInputTextBottomLineBorderColorFocus="'#666'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameCancelBtnText & editorRenameCancelBtnTextColor & editorRenameCancelBtnTextColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameCancelBtnText="'取消'"
                    :editorRenameCancelBtnTextColor="'#444'"
                    :editorRenameCancelBtnTextColorHover="'#222'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameCancelBtnIcon & editorRenameCancelBtnIconSize & editorRenameCancelBtnIconColor & editorRenameCancelBtnIconColorHover & editorRenameCancelBtnIconRippleColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameCancelBtnIcon="'fas fa-times'"
                    :editorRenameCancelBtnIconSize="24"
                    :editorRenameCancelBtnIconColor="'#444'"
                    :editorRenameCancelBtnIconColorHover="'#222'"
                    :editorRenameCancelBtnIconRippleColor="'rgba(200,200,200,0.3)'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameCancelBtnBackgroundColor & editorRenameCancelBtnBackgroundColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameCancelBtnBackgroundColor="'#EFEBE9'"
                    :editorRenameCancelBtnBackgroundColorHover="'#D7CCC8'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameSaveBtnText & editorRenameSaveBtnTextColor & editorRenameSaveBtnTextColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameSaveBtnText="'儲存'"
                    :editorRenameSaveBtnTextColor="'#444'"
                    :editorRenameSaveBtnTextColorHover="'#222'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameSaveBtnIcon & editorRenameSaveBtnIconSize & editorRenameSaveBtnIconColor & editorRenameSaveBtnIconColorHover & editorRenameSaveBtnIconRippleColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameSaveBtnIcon="'fas fa-check'"
                    :editorRenameSaveBtnIconSize="24"
                    :editorRenameSaveBtnIconColor="'#444'"
                    :editorRenameSaveBtnIconColorHover="'#222'"
                    :editorRenameSaveBtnIconRippleColor="'rgba(200,200,200,0.3)'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & editorRenameSaveBtnBackgroundColor & editorRenameSaveBtnBackgroundColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    :editorRenameSaveBtnBackgroundColor="'#EFEBE9'"
                    :editorRenameSaveBtnBackgroundColorHover="'#D7CCC8'"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'operatable & draggable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable or draggable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :draggable="true"
                    :operatable="true"
                    @click-operate-item="clickOperateItem"
                    @update:data="changeData"
                    @change-item="changeItem"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :paddingStyle="{v:5,h:5}"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'indent'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :indent="0.5"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'iconToggleColor & iconToggleBackgroundColor & iconToggleBackgroundColorHover'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                    :iconToggleColor="'#d39a70'"
                    :iconToggleBackgroundColor="'rgba(211,154,112,0.1)'"
                    :iconToggleBackgroundColorHover="'rgba(211,154,112,0.3)'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'keyPrimary & keyText & keyChildren'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.optionKeys.items"
                    :keyPrimary="'sid'"
                    :keyText="'name'"
                    :keyChildren="'packages'"
                ></w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data="WTree.option.items"
                >
                    <template v-slot:item="props">
                        <div style="display:flex;">

                            <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                            </div>

                            <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                            </div>

                            <div style="padding:5px 0px;">
                                <div style="display:flex; align-items:center;">
                                    <div style="margin-right:7px;">{{props.data.text}}</div>
                                    <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                </div>
                                <div style="padding-right:20px;" v-if="props.data.msg">
                                    <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                </div>
                            </div>

                        </div>
                    </template>
                </w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & operatable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using operatable</div>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    :operatable="true"
                    @click-operate-item="clickOperateItem"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center; min-height:34px;">

                            <w-popup-edit-text
                                :value="props.data.text"
                                @input="function(v){modifyText({data:WTree.option.items,value:v,props:props})}"
                            ></w-popup-edit-text>

                        </div>
                    </template>
                </w-tree>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & edit-text'"
                ></demolink>

                <w-tree
                    style="width:350px; border:1px solid #ddd;"
                    :data.sync="WTree.option.items"
                    @click-operate-item="clickOperateItem"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center; min-height:34px;">

                            <w-popup-edit-text
                                :value="props.data.text"
                                @input="function(v){modifyText({data:WTree.option.items,value:v,props:props})}"
                            ></w-popup-edit-text>

                        </div>
                    </template>
                </w-tree>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'selectable'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data="WTree.option.items"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                            @update:selections="changeSelections"
                        ></w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & selectable'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data="WTree.option.items"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                            @update:selections="changeSelections"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & selectable & iconSize(20) & defItemHeight(24)'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data="WTree.option.items"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                            :iconSize="20"
                            :defItemHeight="24"
                            @update:selections="changeSelections"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'selectable & draggable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using draggable</div>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data.sync="WTree.option.items"
                            :draggable="true"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                            @update:selections="changeSelections"
                        ></w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & selectable & draggable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide nodes when using draggable</div>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data.sync="WTree.option.items"
                            :draggable="true"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                            @update:selections="changeSelections"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'filterKeywords & noResultsText & selectable'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WTree.option.keywords"
                    />
                </div>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data="WTree.option.items"
                            :selectable="true"
                            :selections.sync="WTree.option.selections"
                            :filterKeywords="WTree.option.keywords"
                            :noResultsText="'There are no items to show...'"
                            @update:selections="changeSelections"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.option.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & locked & selectable'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data="WTree.optionLocked.items"
                            :selectable="true"
                            :selections.sync="WTree.optionLocked.selections"
                            :locked="'locked'"
                            @update:selections="changeSelections"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.optionLocked.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & iconUncheckedColor & iconUncheckedDisabledColor & iconCheckedColor & iconCheckedDisabledColor & iconCheckedPartiallyColor & iconCheckedPartiallyDisabledColor & locked & selectable'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="width:350px; border:1px solid #ddd;"
                            :data="WTree.optionLocked.items"
                            :selectable="true"
                            :selections.sync="WTree.optionLocked.selections"
                            :locked="'locked'"
                            :iconUncheckedColor="'grey darken-1'"
                            :iconUncheckedDisabledColor="'orange lighten-4'"
                            :iconCheckedColor="'orange darken-2'"
                            :iconCheckedDisabledColor="'orange lighten-4'"
                            :iconCheckedPartiallyColor="'orange lighten-2'"
                            :iconCheckedPartiallyDisabledColor="'orange lighten-4'"
                            @update:selections="changeSelections"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex;">

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.avatar">
                                        <img style="border-radius:50%; width:24px; height:24px;" :src="props.data.avatar" />
                                    </div>

                                    <div style="display:flex; align-items:center; padding-right:5px;" v-if="props.data.icon">
                                        <v-icon size="18" color="deep-orange">{{props.data.icon}}</v-icon>
                                    </div>

                                    <div style="padding:5px 0px;">
                                        <div style="display:flex; align-items:center;">
                                            <div style="margin-right:7px;">
                                                {{props.data.text}}
                                                <div style="display:inline-block; color:#26f; font-size:0.7rem;">[id:{{props.data.id}}]</div>
                                            </div>
                                            <div style="padding:0px 9px; font-size:0.7rem; color:#fff; border-radius:30px; background:#f26;" v-if="props.data.key">{{props.data.key}}</div>
                                        </div>
                                        <div style="padding-right:20px;" v-if="props.data.msg">
                                            <div style="font-size:0.7rem; color:#999; text-indent:1rem; padding:12px 18px; background:#fefafa;">{{props.data.msg}}</div>
                                        </div>
                                    </div>

                                </div>

                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.optionLocked.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-tree'"
                    :casename="'slot & selectable & large data (100,000 items)'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-x:auto轉為-ms-overflow-x:auto -->
                <div :style="'overflow-x:auto;'">

                    <div style="display:table-cell; vertical-align:top;">
                        <w-tree
                            style="border:1px solid #ddd;"
                            :data="WTree.optionLarge.items"
                            :selectable="true"
                            :selections.sync="WTree.optionLarge.selections"
                            @update:selections="changeSelections"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex; align-items:center; min-height:34px;">
                                    <div style="margin-right:5px;">
                                        {{props.data.text}}
                                    </div>
                                    <div style="color:#26f; font-size:0.7rem;">
                                        [id:{{props.data.id}}]
                                    </div>
                                </div>
                            </template>
                        </w-tree>
                    </div>

                    <div style="display:table-cell; vertical-align:top;">
                        <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                        <div :style="'padding:10px 20px; height:402px; overflow-y:auto; border:1px solid #ddd; border-left-width:0px;'">
                            <div style="margin-bottom:5px;">selections: </div>
                            <pre style="font-size:0.7rem;">{{JSON.stringify(showSelection(WTree.optionLarge.selections),null,4)}}</pre>
                        </div>
                    </div>

                </div>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiCommentEditOutline, mdiChevronDoubleUp, mdiChevronDoubleRight, mdiChevronDoubleDown, mdiDeleteVariant } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTree from './components/WTree.vue'
import WPopupEditText from './components/WPopupEditText.vue'


// let data = (function (n) {
//     n /= 20
//     let msg = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.'
//     let cItems = '{"id":"{n+1}","text":"Satisfied customers","avatar":"https://cdn.vuetifyjs.com/images/lists/1.jpg","children":[{"id":"{n+2}","text":"Good food","icon":"fas fa-utensils","children":[{"id":"{n+3}","text":"Quality ingredients","children":[{"id":"{n+4}","text":"Character","key":"Genus","msg":"{msg}"},{"id":"{n+5}","text":"Fabric","key":"Genus","msg":"{msg}"}]},{"id":"{n+6}","text":"Good recipe","key":"Family","msg":"{msg}"}]},{"id":"{n+7}","text":"Good service","icon":"fas fa-concierge-bell","children":[{"id":"{n+8}","text":"Prompt attention","key":"Order","msg":"{msg}"},{"id":"{n+9}","text":"Professional waiter","key":"Order","children":[{"id":"{n+10}","text":"Others customers","avatar":"https://cdn.vuetifyjs.com/images/lists/2.jpg","children":[{"id":"{n+11}","text":"Conformance to requirements","key":"Phylum"},{"id":"{n+12}","text":"Fitness for use","children":[{"id":"{n+13}","text":"Refers","key":"Expanded","msg":"{msg}"}]},{"id":"{n+14}","text":"Need to care","children":[{"id":"{n+15}","text":"Models","key":"Disables","msg":"{msg}"}]}]}]}]},{"id":"{n+16}","text":"Pleasant surroundings","icon":"fas fa-camera-retro","children":[{"id":"{n+17}","text":"Happy atmosphere","key":"Class","msg":"{msg}"},{"id":"{n+18}","text":"Good table presentation","key":"Class","msg":"{msg}"},{"id":"{n+19}","text":"Pleasing decor","key":"Class","msg":"{msg}"},{"id":"{n+20}","text":"Special experience","key":"Class","msg":"{msg}"}]}]}'
//     function getOneObj(j) {
//         let t = cItems
//         t = t.replace(new RegExp('{msg}', 'g'), msg)
//         for (let i = 1; i <= 20; i++) {
//             t = t.replace(`{n+${i}}`, `${j + i}`)
//         }
//         return JSON.parse(t)
//     }
//     let rs = []
//     for (let j = 0; j < n; j++) {
//         let r = getOneObj(j * 20)
//         rs.push(r)
//     }
//     return rs
// })(100)
// console.log(data)


export default {
    components: {
        demolink,
        WTree,
        WPopupEditText,
    },
    props: {
    },
    data: function() {
        return {
            mdiCommentEditOutline,
            mdiChevronDoubleUp,
            mdiChevronDoubleRight,
            mdiChevronDoubleDown,
            mdiDeleteVariant,
            'WTree': {
                'viewHeightMaxSync': 400,
                'option': {
                    keywords: 'abr care att',
                    selections: [
                        { 'id': 5 },
                        { 'id': 9 },
                        { 'id': 18 },
                        //勾選id:18會自動再加入id:19
                    ],
                    itemActive: {
                        'id': 4
                    },
                    items: [
                        {
                            id: 1,
                            text: 'Satisfied customers',
                            //  text: 'Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                            children: [
                                {
                                    id: 2,
                                    text: 'Good food',
                                    icon: 'fas fa-utensils',
                                    children: [
                                        {
                                            id: 3,
                                            text: 'Quality ingredients',
                                            children: [
                                                {
                                                    id: 4,
                                                    text: 'Character',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                },
                                                {
                                                    id: 5,
                                                    text: 'Fabric',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                }
                                            ]
                                        },
                                        {
                                            id: 6,
                                            text: 'Good recipe',
                                            key: 'Family',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 7,
                                    text: 'Good service',
                                    icon: 'fas fa-concierge-bell',
                                    children: [
                                        {
                                            id: 8,
                                            text: 'Prompt attention',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 9,
                                            text: 'Professional waiter',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 10,
                                    text: 'Pleasant surroundings',
                                    icon: 'fas fa-camera-retro',
                                    children: [
                                        {
                                            id: 11,
                                            text: 'Happy atmosphere',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 12,
                                            text: 'Good table presentation',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 13,
                                            text: 'Pleasing decor',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 14,
                            text: 'Others customers',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                            children: [
                                {
                                    id: 15,
                                    text: 'Conformance to requirements',
                                    key: 'Phylum',
                                },
                                {
                                    id: 16,
                                    text: 'Fitness for use',
                                    children: [
                                        {
                                            id: 17,
                                            text: 'Refers',
                                            key: 'Expanded',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 18,
                                    text: 'Need to care',
                                    children: [
                                        {
                                            id: 19,
                                            text: 'Models',
                                            key: 'Disables',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                },
                'optionKeys': {
                    items: [
                        {
                            sid: 's1',
                            name: 'Applications :',
                            packages: [
                                { sid: 's2', name: 'Calendar : app' },
                                { sid: 's3', name: 'Chrome : app' },
                                { sid: 's4', name: 'Webstorm : app' },
                            ],
                        },
                        {
                            sid: 's5',
                            name: 'Documents :',
                            packages: [
                                {
                                    sid: 's6',
                                    name: 'vuetify :',
                                    packages: [
                                        {
                                            sid: 's7',
                                            name: 'src :',
                                            packages: [
                                                { sid: 's8', name: 'index : ts' },
                                                { sid: 's9', name: 'bootstrap : ts' },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    sid: 's10',
                                    name: 'material2 :',
                                    packages: [
                                        {
                                            sid: 's11',
                                            name: 'src :',
                                            packages: [
                                                { sid: 's12', name: 't-btn : ts' },
                                                { sid: 's13', name: 't-card : ts' },
                                                { sid: 's14', name: 't-window : ts' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            sid: 's15',
                            name: 'Downloads :',
                            packages: [
                                { sid: 's16', name: 'October : pdf' },
                                { sid: 's17', name: 'November : pdf' },
                                { sid: 's18', name: 'Tutorial : html' },
                            ],
                        },
                        {
                            sid: 's19',
                            name: 'Videos :',
                            packages: [
                                {
                                    sid: 's20',
                                    name: 'Tutorials :',
                                    packages: [
                                        { sid: 's21', name: 'Basic layouts : mp4' },
                                        { sid: 's22', name: 'Advanced techniques : mp4' },
                                        { sid: 's23', name: 'All about app : dir' },
                                    ],
                                },
                                { sid: 's24', name: 'Intro : mov' },
                                { sid: 's25', name: 'Conference introduction : avi' },
                            ],
                        },
                    ],
                },
                'optionLocked': {
                    selections: [
                        { 'id': 5 },
                        { 'id': 9 },
                        { 'id': 18 },
                        //勾選id:18會自動再加入id:19
                    ],
                    items: [
                        {
                            id: 1,
                            text: 'Satisfied customers',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                            children: [
                                {
                                    id: 2,
                                    locked: true,
                                    text: 'Good food',
                                    icon: 'fas fa-utensils',
                                    children: [
                                        {
                                            id: 3,
                                            text: 'Quality ingredients',
                                            children: [
                                                {
                                                    id: 4,
                                                    locked: true,
                                                    text: 'Character',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                },
                                                {
                                                    id: 5,
                                                    text: 'Fabric',
                                                    key: 'Genus',
                                                    msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                                }
                                            ]
                                        },
                                        {
                                            id: 6,
                                            text: 'Good recipe',
                                            key: 'Family',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 7,
                                    text: 'Good service',
                                    icon: 'fas fa-concierge-bell',
                                    children: [
                                        {
                                            id: 8,
                                            text: 'Prompt attention',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 9,
                                            text: 'Professional waiter',
                                            key: 'Order',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 10,
                                    text: 'Pleasant surroundings',
                                    icon: 'fas fa-camera-retro',
                                    children: [
                                        {
                                            id: 11,
                                            text: 'Happy atmosphere',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 12,
                                            text: 'Good table presentation',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        },
                                        {
                                            id: 13,
                                            text: 'Pleasing decor',
                                            key: 'Class',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 14,
                            text: 'Others customers',
                            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                            children: [
                                {
                                    id: 15,
                                    text: 'Conformance to requirements',
                                    key: 'Phylum',
                                },
                                {
                                    id: 16,
                                    text: 'Fitness for use',
                                    children: [
                                        {
                                            id: 17,
                                            text: 'Refers',
                                            key: 'Expanded',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                },
                                {
                                    id: 18,
                                    text: 'Need to care',
                                    children: [
                                        {
                                            id: 19,
                                            text: 'Models',
                                            key: 'Disables',
                                            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                },
                'optionLarge': {
                    selections: [],
                    items: (function (n) {
                        n /= 20; let msg = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.'; let cItems = '{"id":"{n+1}","text":"Satisfied customers","avatar":"https://cdn.vuetifyjs.com/images/lists/1.jpg","children":[{"id":"{n+2}","text":"Good food","icon":"fas fa-utensils","children":[{"id":"{n+3}","text":"Quality ingredients","children":[{"id":"{n+4}","text":"Character","key":"Genus","msg":"{msg}"},{"id":"{n+5}","text":"Fabric","key":"Genus","msg":"{msg}"}]},{"id":"{n+6}","text":"Good recipe","key":"Family","msg":"{msg}"}]},{"id":"{n+7}","text":"Good service","icon":"fas fa-concierge-bell","children":[{"id":"{n+8}","text":"Prompt attention","key":"Order","msg":"{msg}"},{"id":"{n+9}","text":"Professional waiter","key":"Order","children":[{"id":"{n+10}","text":"Others customers","avatar":"https://cdn.vuetifyjs.com/images/lists/2.jpg","children":[{"id":"{n+11}","text":"Conformance to requirements","key":"Phylum"},{"id":"{n+12}","text":"Fitness for use","children":[{"id":"{n+13}","text":"Refers","key":"Expanded","msg":"{msg}"}]},{"id":"{n+14}","text":"Need to care","children":[{"id":"{n+15}","text":"Models","key":"Disables","msg":"{msg}"}]}]}]}]},{"id":"{n+16}","text":"Pleasant surroundings","icon":"fas fa-camera-retro","children":[{"id":"{n+17}","text":"Happy atmosphere","key":"Class","msg":"{msg}"},{"id":"{n+18}","text":"Good table presentation","key":"Class","msg":"{msg}"},{"id":"{n+19}","text":"Pleasing decor","key":"Class","msg":"{msg}"},{"id":"{n+20}","text":"Special experience","key":"Class","msg":"{msg}"}]}]}'; function getOneObj(j) {
                            let t = cItems; t = t.replace(new RegExp('{msg}', 'g'), msg); for (let i = 1; i <= 20; i++) {
                                t = t.replace('{n+'.concat(i, '}'), ''.concat(j + i))
                            } return JSON.parse(t)
                        } let rs = []; for (let j = 0; j < n; j++) {
                            let r = getOneObj(j * 20); rs.push(r)
                        } return rs
                    })(100000), //1000000, 100000, 1000
                },
            },
            'actions': [
            ],
        }
    },
    methods: {
        showSelection: function(selections) {
            let ss = {}
            for (let i = 0; i < selections.length; i++) {
                let s = JSON.parse(JSON.stringify(selections[i]))
                delete s.msg
                let id = parseInt(s.id, 10) //原本為字串, 轉成整數
                ss[id] = s
            }
            let t = []
            Object.keys(ss)
                .sort(function(a, b) {
                    return a - b
                })
                .forEach(function(key) {
                    t.push(ss[key])
                })
            return t
        },
        mouseenter: function(msg) {
            console.log('mouseenter', msg)
            msg.ele.style.transition = 'all 0.3s'
            msg.ele.style.background = '#f0f0f0'
            //msg.ele.style.color = '#fff'
        },
        mouseleave: function(msg) {
            console.log('mouseleave', msg)
            msg.ele.style.background = 'rgba(255, 255, 255, 0)'
            //msg.ele.style.color = 'black'
        },
        click: function(msg) {
            console.log('click', msg)
        },
        render: function(msg) {
            console.log('render', msg)
        },
        clickActive: function(msg) {
            console.log('clickActive', msg)
        },
        funActive: function(msg) {
            console.log('funActive', msg)
            return !Array.isArray(msg.item.children) //children非陣列代表沒有所屬節點
        },
        changeData: function(msg) {
            console.log('changeData', msg)
        },
        changeSelections: function(msg) {
            console.log('changeSelections', msg)
        },
        changeViewItems: function(msg) {
            console.log('changeViewItems', msg)
        },
        changeHeightOfItems: function(msg) {
            console.log('changeHeightOfItems', msg)
        },
        changeItem: function(msg) {
            console.log('changeItem', msg)
        },
        funOperateItem: function(msg) {
            console.log('funOperateItem', msg)
            return !Array.isArray(msg.item.children) //children非陣列代表沒有所屬節點
        },
        clickOperateItem: function(msg) {
            console.log('clickOperateItem', msg)

            //fun, 僅處理並回傳新項目, 不處理刪除項目
            let fun = function() {
                return new Promise(function(resolve, reject) {
                    let id = Math.floor(Math.random() * 1000)
                    let text = 'node-' + id //msg.rowItem.row.item.text + '-' + msg.opItem.key
                    let dataNew = {
                        id,
                        text,
                    }
                    resolve(dataNew)
                })
            }

            //targetInd
            let targetInd = msg.rowItem.index

            //operateItem
            msg.operateItem(targetInd, msg.opItem.key, fun)

        },
        modifyText: function(msg) {
            console.log('modifyText', msg)

            //setDataByPathAndValue
            let setDataByPathAndValue = msg.props.setDataByPathAndValue

            //path add keyText
            let path = msg.props.data.nk
            path.push(msg.props.keyText)

            //value
            let value = msg.value

            //data
            let data = msg.data

            //setDataByPathAndValue
            setDataByPathAndValue(data, path, value)

        },
        filterFunction: function(item, kws) {
            console.log('filterFunction', item, kws)
            let c = item.text.toLowerCase()
            let b = false
            for (let i = 0; i < kws.length; i++) {
                let kw = kws[i]
                b = b || c.indexOf(kw) >= 0
            }
            return b
        },
        toggleItemsByFun: function(ind, toUnfolding) {
            console.log('toggleItemsByFun', ind, toUnfolding)

            let vo = this

            //toggleItemsByFun
            vo.$refs.ref_toggleItemsByFun.toggleItemsByFun((rows) => {
                console.log('toggleItemsByFun rows', rows)
                return {
                    row: rows[ind],
                    toUnfolding,
                }
            })

        },
        toggleItemsAll: function(toUnfolding, toLevel) {
            console.log('toggleItemsAll', toUnfolding, toLevel)

            let vo = this

            //toggleItemsAll
            vo.$refs.ref_toggleItemsAll.toggleItemsAll(toUnfolding, toLevel)

        },
    },
}
</script>

<style scoped>
</style>
