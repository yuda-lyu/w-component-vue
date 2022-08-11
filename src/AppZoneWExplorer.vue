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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
                    :treeWidthMin="100"
                    :treeWidthMax="400"
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
                    :items="WExplorer.fps1"
                    :treeDefaultDisplayLevel="0"
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
                    :items="WExplorer.fps1"
                    :treeDefItemHeight="24"
                    :listDefItemHeight="24"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
                    :treeIndent="0.5"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'toggleTreeIconSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps1"
                    :toggleTreeIconSize="18"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'toggleTreeIconColor & toggleTreeIconBackgroundColor & toggleTreeIconBackgroundColorHover'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps1"
                    :toggleTreeIconColor="'#f58'"
                    :toggleTreeIconBackgroundColor="'rgba(255,200,200,0.5)'"
                    :toggleTreeIconBackgroundColorHover="'#fcc'"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
                    :treeItemBackgroundColor="'transparent'"
                    :treeItemBackgroundColorHover="'#FFF3E0'"
                    :treeItemBackgroundColorActive="'#FFE0B2'"
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
                    :items="WExplorer.fps1"
                    :listPaddingStyle="{v:2,h:8}"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
                    :listItemRippleColor="'rgba(255, 180, 130, 0.4)'"
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
                    :items="WExplorer.fps1"
                    :pathSepIcon="'fas fa-angle-double-right'"
                    :pathSepIconColor="'#00C853'"
                    :pathSepIconSize="14"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathTextFontSize'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps1"
                    :pathTextFontSize="'0.75rem'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathTextColor & pathTextColorHover'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps1"
                    :pathTextColor="'#EF5350'"
                    :pathTextColorHover="'#EC407A'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'pathBackgroundColor & pathBackgroundColorHover'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps1"
                    :pathBackgroundColor="'#EDE7F6'"
                    :pathBackgroundColorHover="'#D1C4E9'"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
                    :btnDisplayTreeBackgroundColor="'rgb(241,241,241)'"
                    :btnDisplayTreeBackgroundColorHover="'rgb(220,220,220)'"
                    :btnDisplayTreeBackgroundColorFocus="'rgb(200,200,200)'"
                >
                </w-explorer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-explorer'"
                    :casename="'noSelectedText'"
                ></demolink>

                <w-explorer
                    style="width:600px; height:250px;"
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
                    :treeItemTextFontSize="'0.75rem'"
                    :listItemTextFontSize="'0.75rem'"
                    :pathTextFontSize="'0.75rem'"
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
                    :items="WExplorer.fps1"
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
                    :items="WExplorer.fps1"
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

                <div style="padding:40px; background:#777;">
                    <w-explorer
                        style="width:700px; height:400px; background:#333;
                               border-radius:5px;
                               overflow:hidden;
                               box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);"
                        :items="WExplorer.fps1"

                        :treeItemTextColor="'#ddd'"
                        :treeItemTextColorHover="'#eee'"
                        :treeItemTextColorActive="'#fff'"
                        :treeFolderIconColor="'#FFCC80'"
                        :treeFolderIconColorHover="'#FFCC80'"
                        :treeFolderIconColorActive="'#FFB74D'"
                        :treeItemBackgroundColor="'transparent'"
                        :treeItemBackgroundColorHover="'#666'"
                        :treeItemBackgroundColorActive="'#444'"

                        :toggleTreeIconColor="'rgba(255,255,255,0.6)'"
                        :toggleTreeIconBackgroundColor="'transparent'"
                        :toggleTreeIconBackgroundColorHover="'rgba(150,150,150,0.2)'"

                        :pathTextColor="'#ddd'"
                        :pathTextColorHover="'#eee'"
                        :pathBackgroundColor="'transparent'"
                        :pathBackgroundColorHover="'rgba(150,150,150,0.2)'"

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
                        :listItemBackgroundColorHover="'rgba(150,150,150,0.2)'"
                        :listItemBackgroundColorActive="'rgba(150,150,150,0.1)'"

                        :treeDrawerBarSize="1"
                        :treeDrawerBarColor="'rgba(150,150,150,0.4)'"

                        :lineBetweenPathAndListWidth="1"
                        :lineBetweenPathAndListColor="'rgba(150,150,150,0.4)'"

                        :treeItemTextFontSize="'0.75rem'"
                        :listItemTextFontSize="'0.75rem'"
                        :pathTextFontSize="'0.75rem'"

                    >
                    </w-explorer>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WExplorer from './components/WExplorer.vue'


export default {
    components: {
        demolink,
        WExplorer,
    },
    props: {
    },
    data: function() {
        return {
            'WExplorer': {
                fps1: [
                    { 'type': 'file', 'path': '/Applications/Calendar.app' },
                    { 'type': 'file', 'path': '/Applications/Chrome.app' },
                    { 'type': 'file', 'path': '/Applications/Webstorm.app' },
                    { 'type': 'folder', 'path': '/Applications/Webs' },
                    { 'type': 'file', 'path': '/Applications/Webs/web_infors.json' },
                    { 'type': 'file', 'path': '/Applications/Webs/Shareco/s1.txt' },
                    { 'type': 'file', 'path': '/Applications/Webs/Shareco/s2.txt' },
                    { 'type': 'folder', 'path': '/Applications/Webs/Guess' },
                    { 'type': 'file', 'path': '/Applications/Webs/Guess/s3.txt' },
                    { 'type': 'file', 'path': '/Applications/Webs/Guess/s4.txt' },
                    { 'type': 'file', 'path': '/Applications//Systems/Regulator.ini' },
                    { 'type': 'file', 'path': '/Applications/Systems/Regulator/vers/settings-v1.st' },
                    { 'type': 'file', 'path': '/Applications/Systems/Regulator/vers/settings-v2.st' },
                    { 'type': 'file', 'path': '/Applications/Systems/Regulator/vers/settings-v3.st' },
                    { 'type': 'file', 'path': '/Applications/Systems/Regulator/vers/settings-v4.st' },
                    { 'type': 'file', 'path': '/Applications/Systems/Regulator/vers/settings-v5.st' },
                    { 'type': 'file', 'path': '/Documents/design-simple/src/index.txt' },
                    { 'type': 'file', 'path': '/Documents/design-simple/src/bootstrap.txt' },
                    { 'type': 'file', 'path': '/Documents/design-material/src/btn.txt' },
                    { 'type': 'file', 'path': '/Documents/design-material/src/card.txt' },
                    { 'type': 'file', 'path': '/Documents/design-material/src/window.txt' },
                    { 'type': 'file', 'path': '/Downloads/October.pdf' },
                    { 'type': 'file', 'path': '/Downloads/November.pdf' },
                    { 'type': 'file', 'path': '/Downloads/Tutorial.html' },
                    { 'type': 'folder', 'path': '/Uploads' },
                    { 'type': 'file', 'path': '/Videos/Tutorials/Basic layouts.mp4' },
                    { 'type': 'file', 'path': '/Videos/Tutorials/Advanced techniques.mp4' },
                    { 'type': 'file', 'path': '/Videos/Tutorials/All about app.mp4' },
                    { 'type': 'file', 'path': '/Videos/Intro.mov' },
                    { 'type': 'file', 'path': '/Videos/Conference introduction.avi' },
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
    }
}
</script>

<style scoped>
</style>
