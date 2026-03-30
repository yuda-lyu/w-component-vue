<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-dialog</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'slot content'"
                ></demolink>

                <w-button-chip :text="'show('+WDialog.bShow01+')'" :borderRadius="4" @click="WDialog.bShow01=!WDialog.bShow01"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow02+')'" :borderRadius="4" @click="WDialog.bShow02=!WDialog.bShow02"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow03+')'" :borderRadius="4" @click="WDialog.bShow03=!WDialog.bShow03"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow04a+')'" :borderRadius="4" @click="WDialog.bShow04a=!WDialog.bShow04a"></w-button-chip>

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

                            <w-button-chip style="margin-right:10px;" :text="'hide window'" :borderRadius="4" @click="WDialog.bShow04a=!WDialog.bShow04a"></w-button-chip>

                            <w-button-chip style="margin-right:10px;" :text="'toggle to '+(WDialog.bShow04b?'normal size':'fullscreen')" :borderRadius="4" @click="WDialog.bShow04b=!WDialog.bShow04b"></w-button-chip>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'headerBackgroundColor'"
                ></demolink>

                <w-button-chip :text="'show('+WDialog.bShow05+')'" :borderRadius="4" @click="WDialog.bShow05=!WDialog.bShow05"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow06+')'" :borderRadius="4" @click="WDialog.bShow06=!WDialog.bShow06"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow07+')'" :borderRadius="4" @click="WDialog.bShow07=!WDialog.bShow07"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow08+')'" :borderRadius="4" @click="WDialog.bShow08=!WDialog.bShow08"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow09+')'" :borderRadius="4" @click="WDialog.bShow09=!WDialog.bShow09"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow10+')'" :borderRadius="4" @click="WDialog.bShow10=!WDialog.bShow10"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow11+')'" :borderRadius="4" @click="WDialog.bShow11=!WDialog.bShow11"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow12+')'" :borderRadius="4" @click="WDialog.bShow12=!WDialog.bShow12"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow13+')'" :borderRadius="4" @click="WDialog.bShow13=!WDialog.bShow13"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow14+')'" :borderRadius="4" @click="WDialog.bShow14=!WDialog.bShow14"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow15+')'" :borderRadius="4" @click="WDialog.bShow15=!WDialog.bShow15"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow16+')'" :borderRadius="4" @click="WDialog.bShow16=!WDialog.bShow16"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow17+')'" :borderRadius="4" @click="WDialog.bShow17=!WDialog.bShow17"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow18a+')'" :borderRadius="4" @click="WDialog.bShow18a=!WDialog.bShow18a"></w-button-chip>

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

                            <w-button-chip style="margin-right:10px;" :text="'hide window'" :borderRadius="4" @click="WDialog.bShow18a=!WDialog.bShow18a"></w-button-chip>

                            <w-button-chip style="margin-right:10px;" :text="'toggle to '+(WDialog.bShow18b?'normal size':'fullscreen')" :borderRadius="4" @click="WDialog.bShow18b=!WDialog.bShow18b"></w-button-chip>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'panelBorderRadius'"
                ></demolink>

                <w-button-chip :text="'show('+WDialog.bShow19+')'" :borderRadius="4" @click="WDialog.bShow19=!WDialog.bShow19"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow20+')'" :borderRadius="4" @click="WDialog.bShow20=!WDialog.bShow20"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow21+')'" :borderRadius="4" @click="WDialog.bShow21=!WDialog.bShow21"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow22+')'" :borderRadius="4" @click="WDialog.bShow22=!WDialog.bShow22"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow23+')'" :borderRadius="4" @click="WDialog.bShow23=!WDialog.bShow23"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow24+')'" :borderRadius="4" @click="WDialog.bShow24=!WDialog.bShow24"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow25+')'" :borderRadius="4" @click="WDialog.bShow25=!WDialog.bShow25;delayClose()"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow26a+')'" :borderRadius="4" @click="WDialog.bShow26a=!WDialog.bShow26a"></w-button-chip>

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

                            <w-button-chip :text="'show('+WDialog.bShow26c+')'" :borderRadius="4" @click="WDialog.bShow26c=!WDialog.bShow26c"></w-button-chip>

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

                            <w-button-chip :text="'show('+WDialog.bShow26b+')'" :borderRadius="4" @click="WDialog.bShow26b=!WDialog.bShow26b"></w-button-chip>

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

                <w-button-chip :text="'show('+WDialog.bShow27+')'" :borderRadius="4" @click="WDialog.bShow27=!WDialog.bShow27"></w-button-chip>

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
import WButtonChip from './components/WButtonChip.vue'


export default {
    components: {
        demolink,
        WDialog,
        WButtonChip,
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
                'text4': 'There are three ways in which you can install Vuetify. The first (and recommended) way is to utilize the loader or what we call automatic A-la-carte. This will ensure that your application only uses the features and styles from Vuetify that are needed, significantly reducing your application\'s compiled size. Keep in mind, when importing from lib, the necessary styles are automatically imported for you.',
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
