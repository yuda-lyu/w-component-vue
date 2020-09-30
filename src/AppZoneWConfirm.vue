<template>
    <div>


        <div class="head1">w-confirm</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'title & content'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow1=!WConfirm.bShow1">Show({{WConfirm.bShow1}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow1"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'contentIcon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow2=!WConfirm.bShow2">Show({{WConfirm.bShow2}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow2"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :contentIcon="'fab fa-buffer'"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'contentIconColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow3=!WConfirm.bShow3">Show({{WConfirm.bShow3}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow3"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :contentIconColor="'pink darken-1'"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'contentIconSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow4=!WConfirm.bShow4">Show({{WConfirm.bShow4}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow4"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :contentIconSize="80"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'noBtnText & yesBtnText'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow5=!WConfirm.bShow5">Show({{WConfirm.bShow5}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow5"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :noBtnText="'取消'"
                    :yesBtnText="'同意'"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'hasNoBtn & yesBtnText'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow6=!WConfirm.bShow6">Show({{WConfirm.bShow6}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow6"
                    :title="WConfirm.title"
                    :content="'您已經下載完檔案'"
                    :hasNoBtn="false"
                    :yesBtnText="'確認'"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'titleColor & headerBackgroundColor & footerBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow7=!WConfirm.bShow7">Show({{WConfirm.bShow7}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow7"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :titleColor="'white'"
                    :headerBackgroundColor="'#a36'"
                    :footerBackgroundColor="'#eee'"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'contentColor & contentIconColor & contentBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow8=!WConfirm.bShow8">Show({{WConfirm.bShow8}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow8"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :contentColor="'white'"
                    :contentIconColor="'white'"
                    :contentBackgroundColor="'yellow darken-4'"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'noBtnTextColor & noBtnBackgroundColor & yesBtnTextColor & yesBtnBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow9=!WConfirm.bShow9">Show({{WConfirm.bShow9}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow9"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :noBtnTextColor="'pink lighten-1'"
                    :noBtnBackgroundColor="'white'"
                    :yesBtnTextColor="'light-blue darken-1'"
                    :yesBtnBackgroundColor="'white'"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'widthMax'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow10=!WConfirm.bShow10">Show({{WConfirm.bShow10}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow10"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    :widthMax="350"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'slot header'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow11=!WConfirm.bShow11">Show({{WConfirm.bShow11}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow11"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                >
                    <template v-slot:header>
                        <div style="padding:30px; background:linear-gradient(135deg,#e9aa16,#c99314);">
                            <div style="font-size:1.8rem; color:#fff; margin-top:-10px;">
                                System Broadcast
                            </div>
                            <div style="font-size:0.8rem; color:rgba(255,255,255,0.75);">
                                You are now subscribing to the System Broadcast, let us serve you!
                            </div>
                        </div>
                    </template>
                </w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'slot content'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow12=!WConfirm.bShow12">Show({{WConfirm.bShow12}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow12"
                    :title="WConfirm.title"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                >
                    <template v-slot:content>

                        <div style="padding:20px 20px 0px 20px; font-size:1.5rem;">
                            A data table
                        </div>

                        <div style="padding:10px 20px; font-size:0.9rem;">
                            Vuetify is a progressive framework that attempts to push web development to the next level.
                        </div>

                        <div style="padding:10px 20px 20px 20px;">
                            <table style="width:100%; font-size:0.8rem; border-collapse:collapse; border:1px solid #ddd;">
                                <thead>
                                    <tr>
                                        <th style="padding:5px 20px; text-align:left; background:#eee;">Dessert</th>
                                        <th style="padding:5px 20px; text-align:left; background:#eee;">Calories</th>
                                        <th style="padding:5px 20px; text-align:left; background:#eee;">Fat</th>
                                        <th style="padding:5px 20px; text-align:left; background:#eee;">Carbs</th>
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
                                        <td style="padding:5px 20px; border-top:1px solid #ddd; color:#f26;">Ice cream sandwich</td>
                                        <td style="padding:5px 20px; border-top:1px solid #ddd; color:#f26;">237</td>
                                        <td style="padding:5px 20px; border-top:1px solid #ddd; color:#f26;">9</td>
                                        <td style="padding:5px 20px; border-top:1px solid #ddd; color:#f26;">37</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:5px 20px; border-top:1px solid #ddd;">Eclair</td>
                                        <td style="padding:5px 20px; border-top:1px solid #ddd;">262</td>
                                        <td style="padding:5px 20px; border-top:1px solid #ddd;">16</td>
                                        <td style="padding:5px 20px; border-top:1px solid #ddd;">23</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </template>
                </w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'slot footer'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow13=!WConfirm.bShow13">Show({{WConfirm.bShow13}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow13"
                    :title="WConfirm.title"
                    :content="WConfirm.content"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                >
                    <template v-slot:footer>
                        <div style="border-top:1px solid #ddd; padding:30px; text-align:center; background:#923a60;">
                            <div style="font-size:0.8rem; color:#fff; margin-bottom:10px;">
                                Please confirm the message and then press the AGREE button.
                            </div>
                            <div style="">
                                <v-btn color="pink" dark @click="WConfirm.bShow13=false">Agree</v-btn>
                            </div>
                        </div>
                    </template>
                </w-confirm>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WConfirm from './components/WConfirm.vue'


export default {
    components: {
        demolink,
        WConfirm,
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
            'WConfirm': {
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
                'title': 'Confirm',
                'content': 'Do you agree to upload the information?',
            },
            'actions': [
            ],
        }
    },
    methods: {

        clickEvent: function (data) {
            console.log(data)
        },

    },
}
</script>

<style scoped>
</style>
