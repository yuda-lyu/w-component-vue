<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-dialog</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'slot content'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow1=!WDialog.bShow1">Show({{WDialog.bShow1}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow1"
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

                <v-btn depressed small elevation="2" @click="WDialog.bShow2=!WDialog.bShow2">Show({{WDialog.bShow2}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow2"
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

                <v-btn depressed small elevation="2" @click="WDialog.bShow3=!WDialog.bShow3">Show({{WDialog.bShow3}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow3"
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
                    :casename="'headerBackgroundColor'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow4=!WDialog.bShow4">Show({{WDialog.bShow4}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow4"
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
                    :casename="'headerIconColor & headerTextColor & headerBackgroundColor'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow5=!WDialog.bShow5">Show({{WDialog.bShow5}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow5"
                    :title="WDialog.title"
                    :headerIconColor="'amber darken-4'"
                    :headerTextColor="'amber darken-4'"
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
                    :casename="'headerBtns'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow6=!WDialog.bShow6">Show({{WDialog.bShow6}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow6"
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

                <v-btn depressed small elevation="2" @click="WDialog.bShow7=!WDialog.bShow7">Show({{WDialog.bShow7}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow7"
                    :title="WDialog.title"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:header-left>
                        <select style="margin-left:15px; padding:0px 20px; background-color:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.7); border-radius:30px; outline:none;">
                            <option style="color:#000;" value="0">Select Fruit</option>
                            <option style="color:#000;" value="1">L-Apple</option>
                            <option style="color:#000;" value="2">L-Orange</option>
                            <option style="color:#000;" value="3">L-Banana</option>
                        </select>
                    </template>

                    <template v-slot:header-right>
                        <select style="margin-right:15px; padding:0px 20px; background-color:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.7); border-radius:30px; outline:none;">
                            <option style="color:#000;" value="0">Select Fruit</option>
                            <option style="color:#000;" value="1">R-Apple</option>
                            <option style="color:#000;" value="2">R-Orange</option>
                            <option style="color:#000;" value="3">R-Banana</option>
                        </select>
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

                <v-btn depressed small elevation="2" @click="WDialog.bShow8=!WDialog.bShow8">Show({{WDialog.bShow8}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow8"
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
                    :casename="'hasSaveBtn, no save button'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow9=!WDialog.bShow9">Show({{WDialog.bShow9}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow9"
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
                    :casename="'hasSaveBtn and hasCloseBtn, no save and close button'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow11=!WDialog.bShow11">Show({{WDialog.bShow11}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow11"
                    :title="WDialog.title"
                    :hasSaveBtn="false"
                    :hasCloseBtn="false"
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

                <v-btn depressed small elevation="2" @click="WDialog.bShow10=!WDialog.bShow10">Show({{WDialog.bShow10}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow10"
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

                <v-btn depressed small elevation="2" @click="WDialog.bShow12=!WDialog.bShow12">Show({{WDialog.bShow12}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow12"
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
                    :casename="'maxWidth, for narrow width'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow13=!WDialog.bShow13">Show({{WDialog.bShow13}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow13"
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

                <v-btn depressed small elevation="2" @click="WDialog.bShow14=!WDialog.bShow14">Show({{WDialog.bShow14}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow14"
                    :title="WDialog.title"
                    :maxWidth="0"
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

                            <v-btn depressed small elevation="2" @click="WDialog.bShow14=!WDialog.bShow14">Hide Window</v-btn>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dialog'"
                    :casename="'scrollable'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow15=!WDialog.bShow15">Show({{WDialog.bShow15}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow15"
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
                    :casename="'separate for slot content'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow16=!WDialog.bShow16">Show({{WDialog.bShow16}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow16"
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
                    :casename="'table in slot content'"
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
                    :casename="'multi dialogs'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WDialog.bShow18=!WDialog.bShow18">Show({{WDialog.bShow18}})</v-btn>

                <w-dialog
                    :show.sync="WDialog.bShow18"
                    :title="WDialog.title"
                    :maxWidth="1200"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">

                            <div style="margin:15px 0px;">
                                Here is 1st window.
                            </div>

                            <v-btn depressed small elevation="2" @click="WDialog.bShow18A=!WDialog.bShow18A">Show({{WDialog.bShow18A}})</v-btn>

                            <div style="height:160px;"></div>

                        </div>
                    </template>

                </w-dialog>

                <w-dialog
                    :show.sync="WDialog.bShow18A"
                    :title="WDialog.title"
                    :maxWidth="900"
                    @resize="resizeEvent"
                    @click-save="clickSave"
                    @click-close="clickClose"
                >

                    <template v-slot:content>
                        <div style="padding:20px;">

                            <div style="margin:15px 0px;">
                                Here is 2nd window.
                            </div>

                            <v-btn depressed small elevation="2" @click="WDialog.bShow18B=!WDialog.bShow18B">Show({{WDialog.bShow18B}})</v-btn>

                            <div style="height:80px;"></div>

                        </div>
                    </template>

                </w-dialog>

                <w-dialog
                    :show.sync="WDialog.bShow18B"
                    :title="WDialog.title"
                    :maxWidth="600"
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
                'bShow1': false,
                'bShow2': false,
                'bShow3': false,
                'bShow4': false,
                'bShow5': false,
                'bShow6': false,
                'bShow7': false,
                'bShow8': false,
                'bShow9': false,
                'bShow10': false,
                'bShow11': false,
                'bShow12': false,
                'bShow13': false,
                'bShow14': false,
                'bShow15': false,
                'bShow16': false,
                'bShow17': false,
                'bShow18': false,
                'bShow18A': false,
                'bShow18B': false,
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
                'text2': 'Here is a article content, texts are from Vuetify.',
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

    },
}
</script>

<style scoped>
</style>
