<template>
    <div>


        <div class="head1">w-group-buttons</div>


        <div style="padding:0px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :activeIndex="-1"
                            :value="WGroupButtons.breadcrumbs"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'tooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basicTooltip"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :borderRadius="5"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :small="false"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'textColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :textColor="'orange darken-1'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'backgroundColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-2'"
                            :backgroundColorActive="'grey lighten-1'"
                            :backgroundColor="'grey lighten-3'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'textColor & borderWidth & backgroundColor & backgroundColorHover & backgroundColorActive'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :textColor="'white'"
                            :borderWidth="0"
                            :backgroundColor="'cyan darken-1'"
                            :backgroundColorHover="'cyan lighten-1'"
                            :backgroundColorActive="'cyan lighten-2'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :editable="false"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'nodata'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderShadow="true"
                            :borderWidth="0"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :nodata="'無數據'"
                            :value="[]"
                        ></w-group-buttons>

                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'當前瀏覽位置'"
                            :leftIcon="mdiGraphOutline"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex="-1"
                                :value="WGroupButtons.breadcrumbs"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'tooltip'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basicTooltip"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :borderRadius="5"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :small="false"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'textColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :textColor="'orange darken-1'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'backgroundColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :backgroundColor="'amber lighten-5'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'titleColor & leftIconColor & textColor & borderWidth & backgroundColor & backgroundColorHover & backgroundColorActive'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :titleColor="'cyan darken-2'"
                            :leftIcon="mdiFruitCherries"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :textColor="'white'"
                                :borderWidth="0"
                                :backgroundColor="'cyan darken-1'"
                                :backgroundColorHover="'cyan lighten-1'"
                                :backgroundColorActive="'cyan lighten-2'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :editable="false"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'nodata'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :nodata="'無數據'"
                                :value="[]"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :activeIndex="-1"
                            :value="WGroupButtons.breadcrumbs"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'tooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basicTooltip"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :borderRadius="5"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :small="false"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'textColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :textColor="'orange darken-1'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'backgroundColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :backgroundColor="'amber lighten-5'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'textColor & borderColor & borderColorHover & backgroundColor & backgroundColorHover & backgroundColorActive'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :textColor="'white'"
                            :borderColor="'cyan lighten-1'"
                            :borderColorHover="'cyan lighten-1'"
                            :backgroundColor="'cyan darken-1'"
                            :backgroundColorHover="'cyan lighten-1'"
                            :backgroundColorActive="'cyan lighten-2'"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :editable="false"
                            :activeIndex.sync="WGroupButtons.activeIndex"
                            :value="WGroupButtons.basic"
                        ></w-group-buttons>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'nodata'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-group-buttons
                            :nodata="'無數據'"
                            :value="[]"
                        ></w-group-buttons>

                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-group-buttons
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'當前瀏覽位置'"
                            :leftIcon="mdiGraphOutline"
                        >
                            <w-group-buttons
                                :activeIndex="-1"
                                :value="WGroupButtons.breadcrumbs"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'tooltip'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basicTooltip"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :borderRadius="5"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :small="false"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'textColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :textColor="'orange darken-1'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'backgroundColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :backgroundColor="'amber lighten-5'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'titleColor & leftIconColor & textColor & borderColor & borderColorHover & backgroundColor & backgroundColorHover & backgroundColorActive'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :titleColor="'cyan darken-2'"
                            :leftIcon="mdiFruitCherries"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-group-buttons
                                :textColor="'white'"
                                :borderColor="'cyan lighten-1'"
                                :borderColorHover="'cyan lighten-1'"
                                :backgroundColor="'cyan darken-1'"
                                :backgroundColorHover="'cyan lighten-1'"
                                :backgroundColorActive="'cyan lighten-2'"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :editable="false"
                                :activeIndex.sync="WGroupButtons.activeIndex"
                                :value="WGroupButtons.basic"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-group-buttons'"
                            :casename="'nodata'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-group-buttons
                                :nodata="'無數據'"
                                :value="[]"
                            ></w-group-buttons>
                        </w-shell-material>
                    </div>


                </template>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiFruitCherries, mdiGraphOutline } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WGroupButtons from './components/WGroupButtons.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupButtons,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
    },
    data: function() {
        return {
            mdiFruitCherries,
            mdiGraphOutline,
            'WGroupButtons': {
                'activeIndex': 0,
                'basic': [
                    {
                        text: 'Apple',
                    },
                    {
                        text: 'Orange',
                    },
                    {
                        text: 'Banana',
                    },
                ],
                'basicTooltip': [
                    {
                        text: 'Apple',
                        tooltip: 'tooltip apple',
                    },
                    {
                        text: 'Orange',
                        tooltip: 'tooltip apple',
                    },
                    {
                        text: 'Banana',
                        tooltip: 'tooltip banana',
                    },
                ],
                'breadcrumbs': [
                    {
                        text: '現在位置：',
                        clickable: false,
                    },
                    {
                        text: 'Domain',
                    },
                    {
                        text: '>',
                        clickable: false,
                    },
                    {
                        text: 'Kingdom',
                    },
                    {
                        text: '>',
                        clickable: false,
                    },
                    {
                        text: 'Class',
                    },
                ],
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'nth': 1,
                    'selector': 'div[ButtonGroupChip="item"]',
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
