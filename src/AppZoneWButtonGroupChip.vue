<template>
    <div>


        <div class="head1">w-button-group-chip</div>


        <div style="padding-left:30px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :activeIndex="-1"
                            :value="WButtonGroupChip.breadcrumbs"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'tooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basicTooltip"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :borderRadius="5"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :small="false"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'textColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :textColor="'pink lighten-1'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'backgroundColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-2'"
                            :backgroundColorActive="'grey lighten-1'"
                            :backgroundColor="'grey lighten-3'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'textColor & borderColor & borderColorHover & backgroundColor & backgroundColorHover & backgroundColorActive'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :textColor="'white'"
                            :borderColor="'cyan lighten-1'"
                            :borderColorHover="'cyan lighten-1'"
                            :backgroundColor="'cyan'"
                            :backgroundColorHover="'cyan darken-1'"
                            :backgroundColorActive="'cyan darken-2'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :editable="false"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'nodata'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderShadow="true"
                            :borderColor="'grey lighten-4'"
                            :borderColorHover="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-3'"
                            :backgroundColorActive="'grey lighten-2'"
                            :nodata="'無數據'"
                            :value="[]"
                        ></w-button-group-chip>

                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'當前瀏覽位置'"
                            :leftIcon="mdiGraphOutline"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex="-1"
                                :value="WButtonGroupChip.breadcrumbs"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'tooltip'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basicTooltip"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :borderRadius="5"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :small="false"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'textColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :textColor="'orange darken-1'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'backgroundColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :backgroundColor="'amber lighten-5'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'titleColor & leftIconColor & textColor & borderColor & borderColorHover & backgroundColor & backgroundColorHover & backgroundColorActive'"
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
                            <w-button-group-chip
                                :borderShadow="true"
                                :textColor="'white'"
                                :borderColor="'cyan lighten-1'"
                                :borderColorHover="'cyan lighten-1'"
                                :backgroundColor="'cyan'"
                                :backgroundColorHover="'cyan darken-1'"
                                :backgroundColorActive="'cyan darken-2'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :editable="false"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'nodata'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderShadow="true"
                                :borderColor="'grey lighten-4'"
                                :borderColorHover="'grey lighten-4'"
                                :backgroundColorHover="'grey lighten-3'"
                                :backgroundColorActive="'grey lighten-2'"
                                :nodata="'無數據'"
                                :value="[]"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :activeIndex="-1"
                            :value="WButtonGroupChip.breadcrumbs"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'tooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basicTooltip"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :borderRadius="5"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :small="false"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'textColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :textColor="'orange darken-1'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'backgroundColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :backgroundColor="'amber lighten-5'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'textColor & borderColor & borderColorHover & backgroundColor & backgroundColorHover & backgroundColorActive'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :textColor="'white'"
                            :borderColor="'cyan lighten-1'"
                            :borderColorHover="'cyan lighten-1'"
                            :backgroundColor="'cyan'"
                            :backgroundColorHover="'cyan darken-1'"
                            :backgroundColorActive="'cyan darken-2'"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :editable="false"
                            :activeIndex.sync="WButtonGroupChip.activeIndex"
                            :value="WButtonGroupChip.basic"
                        ></w-button-group-chip>

                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'nodata'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-button-group-chip
                            :nodata="'無數據'"
                            :value="[]"
                        ></w-button-group-chip>

                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-button-group-chip
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'breadcrumbs, clickable false in some items'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'當前瀏覽位置'"
                            :leftIcon="mdiGraphOutline"
                        >
                            <w-button-group-chip
                                :activeIndex="-1"
                                :value="WButtonGroupChip.breadcrumbs"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'tooltip'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basicTooltip"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :borderRadius="5"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :small="false"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'textColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :textColor="'orange darken-1'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'backgroundColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :backgroundColor="'amber lighten-5'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
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
                            <w-button-group-chip
                                :textColor="'white'"
                                :borderColor="'cyan lighten-1'"
                                :borderColorHover="'cyan lighten-1'"
                                :backgroundColor="'cyan'"
                                :backgroundColorHover="'cyan darken-1'"
                                :backgroundColorActive="'cyan darken-2'"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :editable="false"
                                :activeIndex.sync="WButtonGroupChip.activeIndex"
                                :value="WButtonGroupChip.basic"
                            ></w-button-group-chip>
                        </w-shell-material>
                    </div>


                    <div class="bk">
                        <demolink
                            :kbname="'w-button-group-chip'"
                            :casename="'nodata'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiFruitCherries"
                        >
                            <w-button-group-chip
                                :nodata="'無數據'"
                                :value="[]"
                            ></w-button-group-chip>
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
import WButtonGroupChip from './components/WButtonGroupChip.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WButtonGroupChip,
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
            'WButtonGroupChip': {
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
