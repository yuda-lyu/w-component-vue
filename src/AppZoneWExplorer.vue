<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-explorer</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'default'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeWidth'"
                ></demolink>

                <div style="padding-bottom:10px;font-size:0.8rem;">treeWidth: {{WExplorer.treeWidth}}</div>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeWidth.sync="WExplorer.treeWidth"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeWidthMin & treeWidthMax'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeWidthMin="100"
                    :treeWidthMax="400"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeBackgroundColor'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeBackgroundColor="'#f8f8f8'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'showTree'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="WExplorer.bShowTree=!WExplorer.bShowTree">Show({{WExplorer.bShowTree}})</v-btn>
                </div>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :showTree.sync="WExplorer.bShowTree"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeAfloat'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeAfloat="true"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeDefaultDisplayLevel'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeDefaultDisplayLevel="1"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeDefItemHeight & listDefItemHeight'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeDefItemHeight="22"
                    :listDefItemHeight="22"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treePaddingStyle'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treePaddingStyle="{v:4,h:4}"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeIndent'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeIndent="0.5"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeFolderIcon & treeFolderIconSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeFolderIcon="'fas fa-folder-open'"
                    :treeFolderIconSize="18"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeItemTextFontSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeItemTextFontSize="'0.75rem'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeItemTextColor & treeItemTextColorHover & treeItemTextColorActive'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeItemTextColor="'#a84'"
                    :treeItemTextColorHover="'#864'"
                    :treeItemTextColorActive="'#862'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeFolderIconColor & treeFolderIconColorHover & treeFolderIconColorActive'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeFolderIconColor="'#ea6'"
                    :treeFolderIconColorHover="'#c84'"
                    :treeFolderIconColorActive="'#a62'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeItemBackgroundColor & treeItemBackgroundColorHover & treeItemBackgroundColorActive'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeItemBackgroundColor="'transparent'"
                    :treeItemBackgroundColorHover="'#FFF3E0'"
                    :treeItemBackgroundColorActive="'#FFE0B2'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeItemRippleColor'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeItemRippleColor="'rgba(130, 180, 255, 0.4)'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'bindRoot'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :bindRoot="'本機'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeToggleIconSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeToggleIconSize="18"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeToggleIconColor & treeToggleIconBackgroundColor & treeToggleIconBackgroundColorHover'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeToggleIconColor="'#f58'"
                    :treeToggleIconBackgroundColor="'rgba(255,200,200,0.5)'"
                    :treeToggleIconBackgroundColorHover="'#fcc'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathBackgroundColor'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :pathBackgroundColor="'#f8f8f8'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathSepIcon & pathSepIconColor & pathSepIconSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :pathSepIcon="'fas fa-angle-double-right'"
                    :pathSepIconColor="'#00C853'"
                    :pathSepIconSize="14"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathBtnTextFontSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :pathBtnTextFontSize="'0.75rem'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathBtnTextColor & pathBtnTextColorHover'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :pathBtnTextColor="'#EF5350'"
                    :pathBtnTextColorHover="'#EC407A'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathBtnBackgroundColor & pathBtnBackgroundColorHover'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :pathBtnBackgroundColor="'#EDE7F6'"
                    :pathBtnBackgroundColorHover="'#D1C4E9'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'btnDisplayTreeIconShow & btnDisplayTreeIconHide & btnDisplayTreeIconSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :btnDisplayTreeIconShow="'fas fa-arrow-circle-right'"
                    :btnDisplayTreeIconHide="'fas fa-arrow-circle-left'"
                    :btnDisplayTreeIconSize="22"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'btnDisplayTreeIconColor & btnDisplayTreeIconColorHover & btnDisplayTreeIconColorFocus'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :btnDisplayTreeIconColor="'rgb(240,70,120)'"
                    :btnDisplayTreeIconColorHover="'rgb(240,50,100)'"
                    :btnDisplayTreeIconColorFocus="'rgb(255,70,120)'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'btnDisplayTreeBackgroundColor & btnDisplayTreeBackgroundColorHover & btnDisplayTreeBackgroundColorFocus'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :btnDisplayTreeBackgroundColor="'rgba(241,241,255,0.7)'"
                    :btnDisplayTreeBackgroundColorHover="'rgb(220,220,255)'"
                    :btnDisplayTreeBackgroundColorFocus="'rgb(200,200,255)'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listPaddingStyle'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listPaddingStyle="{v:2,h:8}"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listBackgroundColor'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listBackgroundColor="'#f8f8f8'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listFolderIcon & listFileIcon & listIconSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listFolderIcon="'fas fa-folder-open'"
                    :listFileIcon="'fas fa-tablet-alt'"
                    :listIconSize="18"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listItemTextFontSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listItemTextFontSize="'0.75rem'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listItemTextColor & listItemTextColorHover & listItemTextColorActive'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listItemTextColor="'#a84'"
                    :listItemTextColorHover="'#864'"
                    :listItemTextColorActive="'#862'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listItemIconColor & listItemIconColorHover & listItemIconColorActive'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listItemIconColor="'#ea6'"
                    :listItemIconColorHover="'#c84'"
                    :listItemIconColorActive="'#a62'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listItemBackgroundColor & listItemBackgroundColorHover & listItemBackgroundColorActive'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listItemBackgroundColor="'transparent'"
                    :listItemBackgroundColorHover="'#FFF3E0'"
                    :listItemBackgroundColorActive="'#FFE0B2'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'listItemRippleColor'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :listItemRippleColor="'rgba(130, 180, 255, 0.4)'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'defaultShowTreeFirst'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :defaultShowTreeFirst="false"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'defaultShowTreeFirst & noSelectedText'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :defaultShowTreeFirst="false"
                    :noSelectedText="'尚未選擇資料夾'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'events'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    @click="ckItem"
                    @click-folder="ckFolder"
                    @click-file="ckFile"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'small text'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeItemTextFontSize="'0.75rem'"
                    :listItemTextFontSize="'0.75rem'"
                    :pathBtnTextFontSize="'0.75rem'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'treeDrawerBarSize & treeDrawerBarColor'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :treeDrawerBarSize="5"
                    :treeDrawerBarColor="'rgba(0,0,0,0.1)'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'lineBetweenPathAndListWidth & lineBetweenPathAndListColor'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :lineBetweenPathAndListWidth="5"
                    :lineBetweenPathAndListColor="'rgba(0,0,0,0.1)'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'dark mode'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#777;">
                    <w-explorer
                        style="width:700px; height:400px; background:#333;
                               border-radius:5px;
                               overflow:hidden;
                               box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);"
                        :items="WExplorer.fps"

                        :treeItemTextColor="'#ddd'"
                        :treeItemTextColorHover="'#eee'"
                        :treeItemTextColorActive="'#fff'"
                        :treeFolderIconColor="'#FFCC80'"
                        :treeFolderIconColorHover="'#FFCC80'"
                        :treeFolderIconColorActive="'#FFB74D'"
                        :treeItemBackgroundColor="'transparent'"
                        :treeItemBackgroundColorHover="'rgba(150,150,150,0.4)'"
                        :treeItemBackgroundColorActive="'rgba(150,150,150,0.2)'"
                        :treeBackgroundColor="'#333'"

                        :treeToggleIconColor="'rgba(255,255,255,0.6)'"
                        :treeToggleIconBackgroundColor="'transparent'"
                        :treeToggleIconBackgroundColorHover="'rgba(150,150,150,0.2)'"

                        :pathBtnTextColor="'#ddd'"
                        :pathBtnTextColorHover="'#eee'"
                        :pathBtnBackgroundColor="'transparent'"
                        :pathBtnBackgroundColorHover="'rgba(150,150,150,0.2)'"
                        :pathBackgroundColor="'#333'"

                        :btnDisplayTreeIconColor="'#ccc'"
                        :btnDisplayTreeIconColorHover="'#eee'"
                        :btnDisplayTreeIconColorFocus="'#eee'"
                        :btnDisplayTreeBackgroundColor="'transparent'"
                        :btnDisplayTreeBackgroundColorHover="'rgba(150,150,150,0.2)'"
                        :btnDisplayTreeBackgroundColorFocus="'rgba(150,150,150,0.1)'"

                        :listItemTextColor="'#ddd'"
                        :listItemTextColorHover="'#eee'"
                        :listItemTextColorActive="'#fff'"
                        :listItemIconColor="'#FFCC80'"
                        :listItemIconColorHover="'#FFCC80'"
                        :listItemIconColorActive="'#FFB74D'"
                        :listItemBackgroundColor="'transparent'"
                        :listItemBackgroundColorHover="'rgba(150,150,150,0.4)'"
                        :listItemBackgroundColorActive="'rgba(150,150,150,0.2)'"
                        :listBackgroundColor="'#333'"

                        :treeDrawerBarSize="1"
                        :treeDrawerBarColor="'rgba(150,150,150,0.4)'"

                        :lineBetweenPathAndListWidth="1"
                        :lineBetweenPathAndListColor="'rgba(150,150,150,0.4)'"

                        :treeItemTextFontSize="'0.75rem'"
                        :listItemTextFontSize="'0.75rem'"
                        :pathBtnTextFontSize="'0.75rem'"

                    >
                    </w-explorer>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'toggleTreeFoldersByFun'"
                ></demolink>

                <div>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersByFun(0, true)">show(rows[0])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersByFun(0, false)">hide(rows[0])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersByFun(1, true)">show(rows[1])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersByFun(1, false)">hide(rows[1])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersByFun(2, true)">show(rows[2])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersByFun(2, false)">hide(rows[2])</v-btn>
                </div>

                <w-explorer
                    ref="ref_toggleTreeFoldersByFun"
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'toggleTreeFoldersAll'"
                ></demolink>

                <div>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersAll(true)">display all</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersAll(false)">hide all</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersAll(null,1)">display to level1</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleTreeFoldersAll(null,2)">display to level2</v-btn>
                </div>

                <w-explorer
                    ref="ref_toggleTreeFoldersAll"
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'triggerClickTreeFolderById'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="ckTriggerClickTreeFolderById('root')">click(root)</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="ckTriggerClickTreeFolderById('root❯Applications')">click(Applications)</v-btn>
                </div>

                <w-explorer
                    ref="we_triggerClickTreeFolderById"
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'triggerClickTreeFolderByFun'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="ckTriggerClickTreeFolderByFun('Applications')">click(Applications)</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="ckTriggerClickTreeFolderByFun('Webs')">click(Webs)</v-btn>
                </div>

                <w-explorer
                    ref="we_triggerClickTreeFolderByFun"
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'funSortTree'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="ckFunSortTree('funSortTree')">funSortTree(reverse)</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="ckFunSortTree('default')">default</v-btn>
                </div>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    :funSortTree="WExplorer.funSortTree"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'slot list-item-cover'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    @click="ckItem"
                >

                    <template v-slot:list-item-cover="props">
                        <div
                            style="display:flex; align-items:center;"
                            v-if="props.item.data._type==='file'"
                        >

                            <div
                                style="padding:0px 5px; color:#6fb57e; cursor:pointer;"
                                @click="ckItem('icon-shield')"
                            >
                                <i class="fas fa-shield-virus"></i>
                            </div>

                            <div style="padding-right:5px;"></div>

                            <div
                                style="padding:0px 5px; color:#b894be; cursor:pointer;"
                                @click="ckItem('icon-dice')"
                            >
                                <i class="fas fa-dice"></i>
                            </div>

                            <div style="padding-right:5px;"></div>

                            <div
                                style="padding:0px 5px; color:#c79f6b; cursor:pointer;"
                                @click="ckItem('icon-wired')"
                            >
                                <i class="fas fa-network-wired"></i>
                            </div>

                            <div style="padding-right:5px;"></div>

                        </div>
                    </template>

                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'slot list-item & list-item-cover & list-head & list-foot'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    @click="ckItem"
                >

                    <template v-slot:list-item="props">
                        <div style="display:flex; align-items:center;">

                            <div
                                style="padding-right:5px; cursor:pointer;"
                                @click="props.funClickListItem()"
                            >
                                <w-icon
                                    :icon="props.item.icon"
                                    _color="props.item.iconColor"
                                    :color="'#d7a72b'"
                                    :size="props.item.iconSize"
                                ></w-icon>
                            </div>

                            <div
                                style=" cursor:pointer;"
                                @click="props.funClickListItem()"
                            >
                                {{props.item.data.text}}
                            </div>

                        </div>
                    </template>

                    <template v-slot:list-head="props">
                        <!-- 使用align-items:stretch讓分隔線div能有height:100%效果 -->
                        <div style="display:flex; align-items:stretch;">

                            <div style="width:100%;">
                                <div style="padding:0px 7px;">
                                    <div style="color:#999; font-size:0.7rem; text-align:center;">
                                        name
                                    </div>
                                </div>
                            </div>

                            <div style="margin:3px 0px; border-right:1px solid #ddd;"></div>

                            <div style="padding:0px 7px;">
                                <div style="width:60px; color:#999; font-size:0.7rem; text-align:center;">
                                    size
                                </div>
                            </div>

                            <div style="margin:3px 0px; border-right:1px solid #ddd;"></div>

                            <div style="padding:0px 7px;">
                                <div style="width:60px; color:#999; font-size:0.7rem; text-align:center;">
                                    tester
                                </div>
                            </div>

                            <div style="margin:3px 0px; border-right:1px solid #ddd;"></div>

                            <div style="padding:0px 7px;">
                                <div style="width:16px; color:#999; font-size:0.7rem; text-align:center;">
                                    i
                                </div>
                            </div>

                            <div style="margin:3px 0px; border-right:1px solid #ddd;"></div>

                            <div style="padding:0px 7px;">
                                <div style="width:16px; color:#999; font-size:0.7rem; text-align:center;">
                                    s
                                </div>
                            </div>

                            <div style="margin:3px 0px; border-right:1px solid #ddd;"></div>

                            <!-- list右側有預留8px捲軸寬度, 2px是捲軸跟內容區重疊寬度, 1px是標題區最右側分隔線寬度 -->
                            <div style="padding-right:calc( 8px - 2px - 1px );"></div>

                        </div>
                    </template>

                    <template v-slot:list-foot="props">
                        <div style="padding:1px 3px; background:#f8f8f8; border-top:1px solid #ddd; font-size:0.7rem; color:#888;">
                            {{getFolderInfor(props)}}
                        </div>
                    </template>

                    <template v-slot:list-item-cover="props">
                        <div
                            style="display:flex; align-items:center;"
                            v-if="props.item.data._type==='file'"
                        >

                            <div style="padding:0px 7px;">
                                <div
                                    style="width:60px; color:#999; font-size:0.7rem; text-align:right; cursor:pointer;"
                                    @click="ckItem('text-size')"
                                >
                                    {{props.item.data.data.size}}
                                </div>
                            </div>

                            <div style="padding-right:1px;"></div>

                            <div style="padding:0px 7px;">
                                <div
                                    style="width:60px; color:#3448a9; font-size:0.7rem; text-align:right; cursor:pointer;"
                                    @click="ckItem('text-tester')"
                                >
                                    {{props.item.data.data.tester}}
                                </div>
                            </div>

                            <div style="padding-right:1px;"></div>

                            <div style="padding:0px 7px;">
                                <div
                                    style="width:16px; color:#996887; cursor:pointer;"
                                    @click="ckItem('icon-branch')"
                                >
                                    <i class="fas fa-code-branch"></i>
                                </div>
                            </div>

                            <div style="padding-right:1px;"></div>

                            <div style="padding:0px 7px;">
                                <div
                                    style="width:16px; color:#777; cursor:pointer;"
                                    @click="ckItem('icon-cog')"
                                >
                                    <i class="fas fa-cog"></i>
                                </div>
                            </div>

                        </div>
                    </template>

                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'slot list-item-sub'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    @click="ckItem"
                >

                    <template v-slot:list-item-sub="props">
                        <div
                            :style="`transition:all 0.3s; padding:3px; background:${props.isHover?'#e2e2e2':'#fbf4f2'}; border-bottom:1px solid #ddd; font-size:0.7rem; line-height:0.7rem; display:flex; align-items:center; justify-content:flex-end;`"
                            v-if="props.item.data._type==='file'"
                        >

                            <div style="padding:0px 5px; display:flex; align-items:center;">
                                <div style="padding-right:3px; color:#888;">
                                    priority:
                                </div>
                                <div
                                    style="width:20px; color:#2e31af; text-align:left; cursor:pointer;"
                                    @click="ckItem('text-priority')"
                                >
                                    {{props.item.data.data.priority}}
                                </div>
                            </div>

                            <div
                                style="padding:0px 5px; color:#6fb57e; cursor:pointer;"
                                @click="ckItem('icon-shield')"
                            >
                                <i class="fas fa-shield-virus"></i>
                            </div>

                            <div
                                style="padding:0px 5px; color:#b894be; cursor:pointer;"
                                @click="ckItem('icon-dice')"
                            >
                                <i class="fas fa-dice"></i>
                            </div>

                            <div
                                style="padding:0px 5px; color:#c79f6b; cursor:pointer;"
                                @click="ckItem('icon-wired')"
                            >
                                <i class="fas fa-network-wired"></i>
                            </div>

                        </div>
                    </template>

                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'slot list-item-text-left'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    @click="ckItem"
                >

                    <template v-slot:list-item-text-left="props">
                        <div
                            :style="`display:flex; align-items:center;`"
                            v-if="props.item.data._type==='file'"
                        >

                            <div
                                :style="`transition:all 0.3s; padding:3px 4px; border-radius:0px; font-size:0.7rem; line-height:0.7rem; color:#fff; cursor:pointer; background:${props.isHover?'#62a':'#84a'};`"
                            >
                                <div
                                    style=""
                                    @click="ckItem('text-priority')"
                                >
                                    {{props.item.data.data.priority}}
                                </div>
                            </div>

                            <div style="padding-right:5px;"></div>

                        </div>
                    </template>

                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'slot list-item-text-right'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps"
                    @click="ckItem"
                >

                    <template v-slot:list-item-text-right="props">
                        <div
                            :style="`display:flex; align-items:center;`"
                            v-if="props.item.data._type==='file'"
                        >

                            <div style="padding-right:5px;"></div>

                            <div
                                :style="`transition:all 0.3s; padding:3px 5px; border-radius:4px; font-size:0.7rem; line-height:0.7rem; color:#fff; cursor:pointer; background:${props.isHover?'#f26':'#f48'};`"
                            >
                                <div
                                    style=""
                                    @click="ckItem('text-tester')"
                                >
                                    {{props.item.data.data.tester}}
                                </div>
                            </div>

                        </div>
                    </template>

                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'draggable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using draggable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :draggable="true"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'draggable & dgPreviewOpacity & dgPreviewBorderWidth & dgBelongBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using draggable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :draggable="true"
                    :dgPreviewOpacity="0.9"
                    :dgPreviewBorderWidth="3"
                    :dgPreviewBorderColor="'rgba(255,100,200,1)'"
                    :dgPreviewBackground="'rgba(255,100,200,0.2)'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'draggable & dgInsertLineColor & dgInsertBackgroundColor & dgBelongBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using draggable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :draggable="true"
                    :dgInsertLineColor="'rgba(120,220,150,0.9)'"
                    :dgInsertBackgroundColor="'rgba(50,220,100,0.1)'"
                    :dgBelongBackgroundColor="'rgba(50,220,100,0.2)'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'draggable & dgTextDisabled & dgTextDisabledColor & dgTextDisabledPaddingLeft & dgTextDisabledFontSize & dgTextDisabledBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using draggable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :draggable="true"
                    :dgTextDisabled="'禁止拖曳至自己子節點當中'"
                    :dgTextDisabledColor="'pink accent-3'"
                    :dgTextDisabledPaddingLeft="13"
                    :dgTextDisabledFontSize="'0.8rem'"
                    :dgTextDisabledBackgroundColor="'rgba(255,255,255,0.8)'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & operateBtnTooltip & operateItemTextForRename & perateItemTextForInsertChild & operateItemTextForDelete'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :operateBtnTooltip="'編輯'"
                    :operateItemTextForRename="'變更項目名稱'"
                    :operateItemTextForInsertChild="'插入子項目'"
                    :operateItemTextForDelete="'刪除項目'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & operatePanelWidth & operatePanelHeight & operateItemIconSize & operateItemPaddingStyle'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :operateItemIconSize="18"
                    :operateItemPaddingStyle="{v:5,h:5}"
                    :operatePanelWidth="130"
                    :operatePanelHeight="90"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & operateItemHeight & operateItemIconSize & operateItemPaddingStyle'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :operateItemIconSize="18"
                    :operateItemPaddingStyle="{v:5,h:5}"
                    :operateItemHeight="29.2"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & operateBtnBackgroundColor & operateBtnBackgroundColorHover & operateBtnBackgroundColorFocus'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :operateBtnBackgroundColor="'rgba(230,230,230,0.4)'"
                    :operateBtnBackgroundColorHover="'rgba(230,230,255,0.8)'"
                    :operateBtnBackgroundColorFocus="'rgba(210,210,255,0.8)'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & operateItemBackgroundColor & operateItemBackgroundColorHover & operateItemTextColor & operateItemTextColorHover & operateItemIconColor & operateItemIconColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :operateItemBackgroundColor="'blue-grey darken-1'"
                    :operateItemBackgroundColorHover="'blue-grey'"
                    :operateItemTextColor="'grey lighten-4'"
                    :operateItemTextColorHover="'white'"
                    :operateItemIconColor="'grey lighten-4'"
                    :operateItemIconColorHover="'white'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & operateItemIconForRename & operateItemIconForInsertChild & operateItemIconForDelete'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :operateItemIconForRename="mdiCommentEditOutline"
                    :operateItemIconForInsertChild="mdiChevronDoubleRight"
                    :operateItemIconForDelete="mdiDeleteVariant"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameContentBackgroundColor & editorRenameFooterBackgroundColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameContentBackgroundColor="'#f2f2f2'"
                    :editorRenameFooterBackgroundColor="'#EFEBE9'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameInputTextColor & editorRenameInputTextBottomLineBorderColor & editorRenameInputTextBottomLineBorderColorHover & editorRenameInputTextBottomLineBorderColorFocus'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameInputTextColor="'#444'"
                    :editorRenameInputTextBottomLineBorderColor="'#888'"
                    :editorRenameInputTextBottomLineBorderColorHover="'#aaa'"
                    :editorRenameInputTextBottomLineBorderColorFocus="'#666'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameCancelBtnText & editorRenameCancelBtnTextColor & editorRenameCancelBtnTextColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameCancelBtnText="'取消'"
                    :editorRenameCancelBtnTextColor="'#444'"
                    :editorRenameCancelBtnTextColorHover="'#222'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameCancelBtnIcon & editorRenameCancelBtnIconSize & editorRenameCancelBtnIconColor & editorRenameCancelBtnIconColorHover & editorRenameCancelBtnIconRippleColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameCancelBtnIcon="'fas fa-times'"
                    :editorRenameCancelBtnIconSize="24"
                    :editorRenameCancelBtnIconColor="'#444'"
                    :editorRenameCancelBtnIconColorHover="'#222'"
                    :editorRenameCancelBtnIconRippleColor="'rgba(200,200,200,0.3)'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameCancelBtnBackgroundColor & editorRenameCancelBtnBackgroundColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameCancelBtnBackgroundColor="'#EFEBE9'"
                    :editorRenameCancelBtnBackgroundColorHover="'#D7CCC8'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameSaveBtnText & editorRenameSaveBtnTextColor & editorRenameSaveBtnTextColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameSaveBtnText="'儲存'"
                    :editorRenameSaveBtnTextColor="'#444'"
                    :editorRenameSaveBtnTextColorHover="'#222'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameSaveBtnIcon & editorRenameSaveBtnIconSize & editorRenameSaveBtnIconColor & editorRenameSaveBtnIconColorHover & editorRenameSaveBtnIconRippleColor'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameSaveBtnIcon="'fas fa-check'"
                    :editorRenameSaveBtnIconSize="24"
                    :editorRenameSaveBtnIconColor="'#444'"
                    :editorRenameSaveBtnIconColorHover="'#222'"
                    :editorRenameSaveBtnIconRippleColor="'rgba(200,200,200,0.3)'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & editorRenameSaveBtnBackgroundColor & editorRenameSaveBtnBackgroundColorHover'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :editorRenameSaveBtnBackgroundColor="'#EFEBE9'"
                    :editorRenameSaveBtnBackgroundColorHover="'#D7CCC8'"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'operatable & draggable'"
                ></demolink>

                <div style="margin-bottom:5px; color:#f26; font-size:0.8rem;">* Disable show and hide folders when using operatable or draggable</div>

                <w-explorer
                    style="width:800px; height:450px;"
                    :items.sync="WExplorer.fps"
                    :operatable="true"
                    :draggable="true"
                    @click-operate-item="clickOperateItem"
                    @change-item="changeItem"
                >
                </w-explorer>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiCommentEditOutline, mdiChevronDoubleRight, mdiDeleteVariant } from '@mdi/js'
import demolink from './components/demolink.vue'
import WIcon from './components/WIcon.vue'
import WExplorer from './components/WExplorer.vue'


export default {
    components: {
        demolink,
        WIcon,
        WExplorer,
    },
    props: {
    },
    data: function() {
        return {
            mdiCommentEditOutline,
            mdiChevronDoubleRight,
            mdiDeleteVariant,
            'WExplorer': {
                bShowTree: true,
                treeWidth: 275,
                funSortTree: null,
                fps: [
                    {
                        type: 'file',
                        path: '/Applications/Calendar.app',
                        size: '256.5mb',
                        tester: 'Perter',
                        priority: 'L4',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Chrome.app',
                        size: '496.7mb',
                        tester: 'Chloe',
                        priority: 'L4',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Webstorm.app',
                        size: '128.6mb',
                        tester: 'Adrian',
                        priority: 'L4',
                    },
                    {
                        type: 'folder',
                        path: '/Applications/Webs',
                        size: '',
                        tester: '',
                        priority: '',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Webs/web_infors.json',
                        size: '92.2kb',
                        tester: 'Carl',
                        priority: 'L3',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Webs/Shareco/shareco-s1.txt',
                        size: '5.4kb',
                        tester: 'Charissa',
                        priority: 'L4',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Webs/Shareco/shareco-s2.txt',
                        size: '7.3kb',
                        tester: 'Dexter',
                        priority: 'L4',
                    },
                    {
                        type: 'folder',
                        path: '/Applications/Webs/Guess',
                        size: '',
                        tester: '',
                        priority: '',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Webs/Guess/guess-s3.txt',
                        size: '21.6kb',
                        tester: 'Ashley',
                        priority: 'L4',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Webs/Guess/guess-s4.txt',
                        size: '82.7kb',
                        tester: 'Dwight',
                        priority: 'L4',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/Regulator.ini',
                        size: '2.5kb',
                        tester: 'Laura',
                        priority: 'L5',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Systems/Regulator/vers/1-settings.st',
                        size: '56.2kb',
                        tester: 'Mavis',
                        priority: 'L5',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Systems/Regulator/vers/2-settings.st',
                        size: '87.2kb',
                        tester: 'Geraint',
                        priority: 'L5',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Systems/Regulator/vers/3-settings.st',
                        size: '224.2kb',
                        tester: 'Penelope',
                        priority: 'L5',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Systems/Regulator/vers/10-settings.st',
                        size: '72.7kb',
                        tester: 'Heman',
                        priority: 'L5',
                    },
                    {
                        type: 'file',
                        path: '/Applications/Systems/Regulator/vers/111-settings.st',
                        size: '91.2kb',
                        tester: 'Tessa',
                        priority: 'L5',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device1.iso',
                        size: '1.2gb',
                        tester: 'Una',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device2.iso',
                        size: '1.3gb',
                        tester: 'Jasper',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device3.iso',
                        size: '1.1gb',
                        tester: 'Violet',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device4.iso',
                        size: '1.7gb',
                        tester: 'Perter',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device5.iso',
                        size: '2.0gb',
                        tester: 'Winifred',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device6.iso',
                        size: '1.7gb',
                        tester: 'Lance',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device7.iso',
                        size: '2.1gb',
                        tester: 'Marvin',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device8.iso',
                        size: '1.5gb',
                        tester: 'Nat',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device9.iso',
                        size: '1.8gb',
                        tester: 'Nahum',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device10.iso',
                        size: '1.6gb',
                        tester: 'Nicholas',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device11.iso',
                        size: '1.2gb',
                        tester: 'Ralph',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device12.iso',
                        size: '2.2gb',
                        tester: 'Rudolph',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device13.iso',
                        size: '1.9gb',
                        tester: 'Rory',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device14.iso',
                        size: '1.2gb',
                        tester: 'Jacqueline',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device15.iso',
                        size: '1.7gb',
                        tester: 'Kathy',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device16.iso',
                        size: '1.1gb',
                        tester: 'Melinda',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device17.iso',
                        size: '1.9gb',
                        tester: 'Sharon',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device18.iso',
                        size: '1.2gb',
                        tester: 'Philippa',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device19.iso',
                        size: '1.5gb',
                        tester: 'Thelma',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Applications//Systems/device20.iso',
                        size: '1.4gb',
                        tester: 'Stewart',
                        priority: 'L2',
                    },
                    {
                        type: 'file',
                        path: '/Documents/design-simple/src/index.txt',
                        size: '6.7kb',
                        tester: 'Steve',
                        priority: 'L1',
                    },
                    {
                        type: 'file',
                        path: '/Documents/design-simple/src/bootstrap.txt',
                        size: '251.7kb',
                        tester: 'Theobald',
                        priority: 'L1',
                    },
                    {
                        type: 'file',
                        path: '/Documents/design-material/src/btn.txt',
                        size: '241.2b',
                        tester: 'Padraic',
                        priority: 'L1',
                    },
                    {
                        type: 'file',
                        path: '/Documents/design-material/src/card.txt',
                        size: '4.7kb',
                        tester: 'Napoleon',
                        priority: 'L1',
                    },
                    {
                        type: 'file',
                        path: '/Documents/design-material/src/window.txt',
                        size: '7.2kb',
                        tester: 'Lionel',
                        priority: 'L1',
                    },
                    {
                        type: 'file',
                        path: '/Downloads/October.pdf',
                        size: '16.9kb',
                        tester: 'Olive',
                        priority: 'L1',
                    },
                    {
                        type: 'file',
                        path: '/Downloads/November.pdf',
                        size: '94.5kb',
                        tester: 'Molly',
                        priority: 'L1',
                    },
                    {
                        type: 'file',
                        path: '/Downloads/Tutorial.html',
                        size: '22.7kb',
                        tester: 'Melanie',
                        priority: 'L1',
                    },
                    {
                        type: 'folder',
                        path: '/Uploads',
                        size: '',
                        tester: '',
                        priority: '',
                    },
                    {
                        type: 'file',
                        path: '/Videos/Tutorials/Basic layouts.mp4',
                        size: '862.7mb',
                        tester: 'Lindsay',
                        priority: 'L3',
                    },
                    {
                        type: 'file',
                        path: '/Videos/Tutorials/Advanced techniques.mp4',
                        size: '626.5mb',
                        tester: 'Jarvis',
                        priority: 'L3',
                    },
                    {
                        type: 'file',
                        path: '/Videos/Tutorials/All about app.mp4',
                        size: '796.2mb',
                        tester: 'Gaston',
                        priority: 'L3',
                    },
                    {
                        type: 'file',
                        path: '/Videos/Intro.mov',
                        size: '852.8mb',
                        tester: 'Dermot',
                        priority: 'L3',
                    },
                    {
                        type: 'file',
                        path: '/Videos/Conference introduction.avi',
                        size: '676.7mb',
                        tester: 'Hector',
                        priority: 'L3',
                    },
                    {
                        type: 'folder',
                        path: '/Videos/Empty',
                        size: '',
                        tester: '',
                        priority: '',
                    },
                ],
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'span[class="v-chip__content"]'
                }
            ],
        }
    },
    methods: {
        ckItem: function(msg) {
            console.log('ckItem', msg)
        },
        ckFolder: function(msg) {
            console.log('ckFolder', msg)
        },
        ckFile: function(msg) {
            console.log('ckFile', msg)
        },
        toggleTreeFoldersByFun: function(ind, toUnfolding) {
            console.log('toggleTreeFoldersByFun', ind, toUnfolding)

            let vo = this

            //toggleTreeFoldersByFun
            vo.$refs.ref_toggleTreeFoldersByFun.toggleTreeFoldersByFun((rows) => {
                console.log('toggleTreeFoldersByFun rows', rows)
                return {
                    row: rows[ind],
                    toUnfolding,
                }
            })

        },
        toggleTreeFoldersAll: function(toUnfolding, toLevel) {
            console.log('toggleTreeFoldersAll', toUnfolding, toLevel)

            let vo = this

            //toggleTreeFoldersAll
            vo.$refs.ref_toggleTreeFoldersAll.toggleTreeFoldersAll(toUnfolding, toLevel)

        },
        ckTriggerClickTreeFolderById: function(treeItemId) {
            console.log('ckTriggerClickTreeFolderById', treeItemId)

            let vo = this

            //triggerClickTreeFolderById
            vo.$refs.we_triggerClickTreeFolderById.triggerClickTreeFolderById(treeItemId)

        },
        ckTriggerClickTreeFolderByFun: function(text) {
            console.log('ckTriggerClickTreeFolderByFun', text)

            let vo = this

            //triggerClickTreeFolderByFun
            vo.$refs.we_triggerClickTreeFolderByFun.triggerClickTreeFolderByFun((msg) => {
                console.log('cb msg', msg)

                //find and triggerClickTreeFolderById
                for (let k = 0; k < msg.treeItemsSpread.length; k++) {
                    let v = msg.treeItemsSpread[k]
                    // console.log(v)
                    if (v.text === text) {
                        console.log('find and click', v)
                        // vo.$refs.we_triggerClickTreeFolderByFun.triggerClickTreeFolderById(v.id)
                        // break
                        return v
                    }
                }

                return null
            })

        },
        ckFunSortTree: function(m) {
            console.log('ckFunSortTree', m)

            let vo = this

            //fun
            let fun = (rs) => {
                console.log('rs', rs)
                rs.reverse()
                return rs
            }

            //funSortTree
            if (m === 'default') {
                vo.WExplorer.funSortTree = null
            }
            else {
                vo.WExplorer.funSortTree = fun
            }

        },
        getFolderInfor: function(props) {
            console.log('getFolderInfor', props)
            let kfd = 0
            let kfl = 0
            for (let i = 0; i < props.items.length; i++) {
                let v = props.items[i]
                let t = v.data._type
                if (t === 'folder') {
                    kfd++
                }
                else if (t === 'file') {
                    kfl++
                }
            }
            return `There are ${kfd} folder(s) and ${kfl} file(s) in this folder`
        },
        clickOperateItem: function(msg) {
            console.log('clickOperateItem', msg)

            //fun, 僅處理並回傳新項目, 不處理刪除項目
            let fun = function() {
                return new Promise(function(resolve, reject) {
                    let id = Math.floor(Math.random() * 1000)
                    let text = 'new-' + id
                    let dataNew = {
                        // id: '',
                        text,
                        type: 'folder',
                        // path: '',
                        size: 'test',
                        tester: 'test',
                        priority: 'test',
                    }
                    resolve(dataNew)
                })
            }

            //targetInd
            let targetInd = msg.rowItem.index

            //operateItem
            msg.operateItem(targetInd, msg.opItem.key, fun)

        },
        changeItem: function(msg) {
            console.log('changeItem', msg)
        },
    }
}
</script>

<style scoped>
</style>
