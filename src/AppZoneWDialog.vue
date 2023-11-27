<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-dialog</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'slot content'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow01=!WDialog.bShow01">Show({{WDialog.bShow01}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow01"
                    :title="WDialog.title"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow02=!WDialog.bShow02">Show({{WDialog.bShow02}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow02"
                    :title="WDialog.title"
                    :icon="'fas fa-cocktail'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'title'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow03=!WDialog.bShow03">Show({{WDialog.bShow03}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow03"
                    :title="'彈窗組件'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'long title'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow04a=!WDialog.bShow04a">Show({{WDialog.bShow04a}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow04a"
                    :title="'彈窗組件超長標題 Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur'"
                    :fullscreen="WDialog.bShow04b"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>

                            <v-btn style="margin-right:10px;" depressed small elevation="2" @click="WDialog.bShow04a=!WDialog.bShow04a">Hide Window</v-btn>

                            <v-btn style="margin-right:10px;" depressed small elevation="2" @click="WDialog.bShow04b=!WDialog.bShow04b">Toggle to {{WDialog.bShow04b?'Normal Size':'Fullscreen'}}</v-btn>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'headerBackgroundColor'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow05=!WDialog.bShow05">Show({{WDialog.bShow05}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow05"
                    :title="WDialog.title"
                    :headerBackgroundColor="'pink darken-1'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'titleColor & headerIconColor & headerBackgroundColor'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow06=!WDialog.bShow06">Show({{WDialog.bShow06}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow06"
                    :title="WDialog.title"
                    :titleColor="'amber darken-4'"
                    :headerIconColor="'amber darken-4'"
                    :headerBackgroundColor="'amber lighten-5'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'headerShadow (no shadow)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow07=!WDialog.bShow07">Show({{WDialog.bShow07}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow07"
                    :title="WDialog.title"
                    :headerShadow="false"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'headerShadowStyle'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow08=!WDialog.bShow08">Show({{WDialog.bShow08}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow08"
                    :title="WDialog.title"
                    :headerShadowStyle="'0 11px 15px -7px rgb(0 100 200 / 20%), 0 24px 38px 3px rgb(0 100 200 / 14%), 0 9px 46px 8px rgb(0 100 200 / 12%)'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'headerBtns'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow09=!WDialog.bShow09">Show({{WDialog.bShow09}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow09"
                    :title="WDialog.title"
                    :headerBtns="WDialog.headerBtns"
                    @resize="resizeEvent"
                    @click-btns="clickBtns"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'slot header-left & header-right'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow10=!WDialog.bShow10">Show({{WDialog.bShow10}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow10"
                    :title="WDialog.title"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:header-left>
                        <div style="padding-left:15px;">
                            <select style="padding:0px 15px; background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.7); border-radius:30px; outline:none;">
                                <option style="color:#000;" value="0">Select Fruit</option>
                                <option style="color:#000;" value="1">L-Apple</option>
                                <option style="color:#000;" value="2">L-Orange</option>
                                <option style="color:#000;" value="3">L-Banana</option>
                            </select>
                        </div>
                    </template>

                    <template v-slot:header-right>
                        <div style="">
                            <select style="padding:0px 15px; background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.7); border-radius:30px; outline:none;">
                                <option style="color:#000;" value="0">Select Fruit</option>
                                <option style="color:#000;" value="1">R-Apple</option>
                                <option style="color:#000;" value="2">R-Orange</option>
                                <option style="color:#000;" value="3">R-Banana</option>
                            </select>
                        </div>
                    </template>

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'saveBtnTooltip & closeBtnTooltip'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow11=!WDialog.bShow11">Show({{WDialog.bShow11}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow11"
                    :title="WDialog.title"
                    :saveBtnTooltip="'儲存'"
                    :closeBtnTooltip="'關閉'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'hasSaveBtn (no save button)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow12=!WDialog.bShow12">Show({{WDialog.bShow12}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow12"
                    :title="WDialog.title"
                    :hasSaveBtn="false"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'isModal (not persistent)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow13=!WDialog.bShow13">Show({{WDialog.bShow13}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow13"
                    :title="WDialog.title"
                    :isModal="false"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'hasSaveBtn & hasCloseBtn & isModal (no save and close button)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow14=!WDialog.bShow14">Show({{WDialog.bShow14}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow14"
                    :title="WDialog.title"
                    :hasSaveBtn="false"
                    :hasCloseBtn="false"
                    :isModal="false"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'closeWithInterceptor'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow15=!WDialog.bShow15">Show({{WDialog.bShow15}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow15"
                    :title="WDialog.title"
                    :closeWithInterceptor="true"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClosePm"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'contentTextColor & contentBackgroundColor'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow16=!WDialog.bShow16">Show({{WDialog.bShow16}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow16"
                    :title="WDialog.title"
                    :contentTextColor="'#fff'"
                    :contentBackgroundColor="'cyan darken-2'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:1.5rem; margin:10px 0px 20px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px; color:#eee;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px; color:#eee;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px; color:#eee;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'maxWidth (narrow width)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow17=!WDialog.bShow17">Show({{WDialog.bShow17}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow17"
                    :title="WDialog.title"
                    :maxWidth="500"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'fullscreen'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow18a=!WDialog.bShow18a">Show({{WDialog.bShow18a}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow18a"
                    :title="WDialog.title"
                    :fullscreen="WDialog.bShow18b"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>

                            <v-btn style="margin-right:10px;" depressed small elevation="2" @click="WDialog.bShow18a=!WDialog.bShow18a">Hide Window</v-btn>

                            <v-btn style="margin-right:10px;" depressed small elevation="2" @click="WDialog.bShow18b=!WDialog.bShow18b">Toggle to {{WDialog.bShow18b?'Normal Size':'Fullscreen'}}</v-btn>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'panelBorderRadius'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow19=!WDialog.bShow19">Show({{WDialog.bShow19}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow19"
                    :title="WDialog.title"
                    :panelBorderRadius="0"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'panelShadow (no shadow)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow20=!WDialog.bShow20">Show({{WDialog.bShow20}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow20"
                    :title="WDialog.title"
                    :panelShadow="false"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'panelShadowStyle'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow21=!WDialog.bShow21">Show({{WDialog.bShow21}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow21"
                    :title="WDialog.title"
                    :panelShadowStyle="'0px 16px 25px rgba(0, 0, 0, 0.43)'"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'scrollable'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow22=!WDialog.bShow22">Show({{WDialog.bShow22}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow22"
                    :title="WDialog.title"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px; width:2000px; height:2000px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                        <div style="padding:20px;">
                            {{WDialog.text5}}
                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'slot content (separate line)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow23=!WDialog.bShow23">Show({{WDialog.bShow23}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow23"
                    :title="WDialog.title"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>

                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div>
                                {{WDialog.text2}}
                            </div>
                        </div>

                        <div style="border-top:1px solid #ddd;"></div>

                        <div style="padding:20px;">
                            <div style="margin-bottom:15px;">
                                {{WDialog.text3}}
                            </div>
                            <div>
                                {{WDialog.text4}}
                            </div>
                        </div>

                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'slot content (table)'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow24=!WDialog.bShow24">Show({{WDialog.bShow24}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow24"
                    :title="WDialog.title"
                    :maxWidth="500"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>

                        <div style="padding:20px 20px 10px 20px;">
                            <div style="margin:10px 0px 20px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:10px 0px 25px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="font-size:1.5rem;">
                                A data table
                            </div>
                        </div>

                        <table style="width:100%; font-size:0.8rem; border-collapse:collapse;">
                            <thead>
                                <tr>
                                    <th style="padding:5px 20px; text-align:left;">Dessert</th>
                                    <th style="padding:5px 20px; text-align:left;">Calories</th>
                                    <th style="padding:5px 20px; text-align:left;">Fat</th>
                                    <th style="padding:5px 20px; text-align:left;">Carbs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">Frozen Yogurt</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">159</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">6</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">24</td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">Ice cream sandwich</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">237</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">9</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">37</td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">Eclair</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">262</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">16</td>
                                    <td style="padding:5px 20px; border-top:1px solid #ddd;">23</td>
                                </tr>
                            </tbody>
                        </table>

                        <div style="padding:20px 20px 10px 20px;">
                            <div style="margin:10px 0px 25px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>

                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'slot panel'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow25=!WDialog.bShow25;delayClose()">Show({{WDialog.bShow25}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow25"
                    :title="WDialog.title"
                    :maxWidth="600"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:panel>

                        <div style="padding:20px;">
                            <div style="margin:10px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:10px; color:#5b7ad7;">
                                Auto close after
                                <span style="color:#f26;">
                                    {{WDialog.iShow24}}
                                </span>
                                seconds...
                            </div>

                        </div>

                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'multi dialogs'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow26a=!WDialog.bShow26a">Show({{WDialog.bShow26a}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow26c"
                    :title="WDialog.title"
                    :minWidth="600"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">

                            <div style="margin:15px 0px;">
                                Here is 3rd window.
                            </div>

                        </div>
                    </template>

                </w-dialog>

                <w-dialog
                    :show.sync="WDialog.bShow26b"
                    :title="WDialog.title"
                    :minWidth="900"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">

                            <div style="margin:15px 0px;">
                                Here is 2nd window.
                            </div>

                            <v-btn depressed small elevation="2" @click="WDialog.bShow26c=!WDialog.bShow26c">Show({{WDialog.bShow26c}})</v-btn>

                            <div style="height:80px;"></div>

                        </div>
                    </template>

                </w-dialog>

                <w-dialog
                    :show.sync="WDialog.bShow26a"
                    :title="WDialog.title"
                    :minWidth="1200"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">

                            <div style="margin:15px 0px;">
                                Here is 1st window.
                            </div>

                            <v-btn depressed small elevation="2" @click="WDialog.bShow26b=!WDialog.bShow26b">Show({{WDialog.bShow26b}})</v-btn>

                            <div style="height:160px;"></div>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'dialogZIndex'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow27=!WDialog.bShow27">Show({{WDialog.bShow27}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow27"
                    :title="WDialog.title"
                    :dialogZIndex="1000"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">
                            <div style="font-size:2rem; margin:20px 0px 30px 0px;">
                                {{WDialog.text1}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text2}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text3}}
                            </div>
                            <div style="margin:15px 0px;">
                                {{WDialog.text4}}
                            </div>
                        </div>
                    </template>

                </w-dialog>

            </div>

        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WDialog from './components/WDialog.vue'


export default {
    components: {
        demolink,
        WDialog,
    },
    props: {
    },
    data: function() {
        return {
            'WDialog': {
                'bShow01': false,
                'bShow02': false,
                'bShow03': false,
                'bShow04a': false,
                'bShow04b': false, //fullscreen
                'bShow05': false,
                'bShow06': false,
                'bShow07': false,
                'bShow08': false,
                'bShow09': false,
                'bShow10': false,
                'bShow11': false,
                'bShow12': false,
                'bShow13': false,
                'bShow14': false,
                'bShow15': false,
                'bShow16': false,
                'bShow17': false,
                'bShow18a': false,
                'bShow18b': true, //fullscreen
                'bShow19': false,
                'bShow20': false,
                'bShow21': false,
                'bShow22': false,
                'bShow23': false,
                'bShow24': false,
                'bShow25': false,
                'iShow24': 0,
                'bShow26a': false,
                'bShow26b': false,
                'bShow26c': false,
                'bShow27': false,
                'headerBtns': [
                    {
                        icon: 'fas fa-book-reader',
                        tooltip: '測試book-reader',
                        evName: 'bookReader',
                        iconColor: '#f26',
                        backgroundColor: 'rgba(255,255,255,0.7)',
                    },
                    {
                        icon: 'fab fa-codepen',
                        tooltip: '測試codepen',
                        evName: 'codepen',
                    },
                    {
                        icon: 'fab fa-docker',
                        tooltip: '測試docker',
                        evName: 'docker',
                    },
                ],
                'title': 'Popup Dialog',
                'text1': 'Article Title',
                'text2': 'Here is an article content, texts are from Vuetify.',
                'text3': 'Vuetify is a progressive framework that attempts to push web development to the next level. In order to best accomplish this task, some sacrifices had to be made in terms of support for older versions of Internet Explorer. This is not an exhaustive list of compatible browsers, but the main targeted ones.',
                'text4': 'There are three ways in which you can install Vuetify. The first (and recommended) way is to utilize the vuetify-loader or what we call automatic A-la-carte. This will ensure that your application only uses the features and styles from Vuetify that are needed, significantly reducing your application\'s compiled size. Keep in mind, when importing from vuetify/lib, the necessary styles are automatically imported for you.',
                'text5': 'End.',
            },
            'actions': [
            ],
        }
    },
    methods: {

        resizeEvent: function (msg) {
            console.log('resizeEvent', msg)
        },

        clickBtns: function(msg) {
            console.log('clickBtns', msg)
        },

        clickSave: function(msg) {
            console.log('clickSave', msg)
            setTimeout(function() {
                console.log('save finish')
                msg.pm.resolve()
            }, 1000)
        },

        clickClose: function(msg) {
            console.log('clickClose', msg)
        },

        clickClosePm: function(msg) {
            console.log('clickClose', msg)
            alert('pm.resolve() for close')
            msg.pm.resolve()
            //msg.pm.reject()
        },

        delayClose: function() {
            console.log('delayClose')
            let vo = this
            vo.WDialog.iShow24 = 5
            let t = setInterval(() => {
                vo.WDialog.iShow24 -= 1
                if (vo.WDialog.iShow24 <= 0) {
                    clearInterval(t)
                    vo.WDialog.bShow25 = false
                }
            }, 1000)
        },

    },
}
</script>

<style scoped>
</style>
