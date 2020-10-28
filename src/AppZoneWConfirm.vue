<template>
    <div>


        <div class="head1">w-confirm</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'title & content'"
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


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'scrollable, extensive text'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow14=!WConfirm.bShow14">Show({{WConfirm.bShow14}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow14"
                    :title="WConfirm.title"
                    :content="WConfirm.contentExtensive"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                ></w-confirm>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-confirm'"
                    :casename="'scrollable, extensive text (slot content)'"
                ></demolink>

                <v-btn small rounded @click="WConfirm.bShow15=!WConfirm.bShow15">Show({{WConfirm.bShow15}})</v-btn>

                <w-confirm
                    :show.sync="WConfirm.bShow15"
                    :title="WConfirm.title"
                    @click-no="clickEvent('click-no')"
                    @click-yes="clickEvent('click-yes')"
                >
                    <template v-slot:content>

                        <div style="padding:30px 20px 10px 20px; font-size:1.5rem;">
                            Cupiditate anim officia
                        </div>

                        <div style="padding:10px 20px; font-size:0.9rem;">
                            Deserunt mollit amet sunt sed. Mollit dolor est in voluptate blanditiis in. Tempor sint consequat quod mollitia ad qui dolore pariatur. Laborum dolorum amet eos sint. Nulla ullamco similique elit eos. Est nulla eu proident exercitation vero.
                            <br/><br/>
                            In laboris odio dolor voluptatum deleniti pariatur in. Et excepteur est ad omnis corrupti. Quos dolore aliqua corrupti. Dolores soluta commodo similique est quos. Amet et molestias est vero cupiditate dolorum proident fugiat. Aliquip omnis vero laboris ea dolore voluptatum corrupti.
                            <br/><br/>
                            Possimus facere excepteur qui praesentium. Non expedita accusamus quis dolore. Elit omnis aliqua voluptate culpa. Laborum placeat non facilis est elit. Provident animi at fugiat labore eiusmod harum.
                            <br/><br/>
                            Atque facere aliqua qui iusto mollit enim. Et cumque et omnis. Anim irure id at do duis. Fugiat aute culpa nobis ad irure quod et. Assumenda elit est exercitation sunt est laborum nulla fugiat.
                            <br/><br/>
                            Tempor eiusmod deserunt ducimus iusto cumque adipisicing consequat ex. Deleniti et officia qui esse similique harum. Molestias pariatur laborum cupidatat sint rerum. Deserunt do sit mollit ad animi distinctio soluta. Eos vero aliqua cupiditate sunt id.
                            <br/><br/>
                            Quis voluptas in excepteur optio voluptas. Enim animi non nisi eu ex obcaecati at. Cumque aliquip et at soluta sunt. Cupidatat mollit nostrud veniam dolor eos. Placeat qui adipisicing voluptas quas laboris odio voluptate. In atque sint expedita eos nobis irure.
                            <br/><br/>
                            Sed quo officia excepteur est. Minim libero dolore in fuga. Soluta optio expedita culpa omnis consequat adipisicing mollitia ut. Consectetur magna ut sed accusamus. Facilis quas facilis ut ea sed dolor placeat non. Omnis provident reprehenderit est et.
                            <br/><br/>
                            Nihil dolorum odio aute sit corrupti cumque. Tempore at laboris quis est impedit ea. Nihil expedita commodo est tempor sint. Ut excepturi aute tempor ut laboris cumque. Similique vero aliqua at in culpa consequat sunt.
                            <br/><br/>
                            Est et cupiditate praesentium facilis dolores sit. Deserunt ducimus amet veniam assumenda. Laborum excepturi enim proident tempor sunt dolorum atque aliquip. Irure deleniti magna ullamco ipsum eligendi et nihil.
                            <br/><br/>
                            Reprehenderit omnis anim enim dignissimos dolor obcaecati occaecat. Id cupiditate et corrupti labore proident omnis est. Dolor obcaecati id est sit. Qui dolorum aliquip et occaecat labore pariatur cupidatat. Quo nobis expedita amet dignissimos qui.
                            <br/><br/>
                            Accusamus in animi pariatur ducimus tempor. Et dignissimos in deserunt est dignissimos. Rerum impedit et est quod. Id ex ea laborum aliquip ipsum amet. Ut dolor est blanditiis incididunt minus magna culpa. Labore aute aute optio facere cumque. Cum minus eos culpa dolore enim.
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
                'bShow15': false,
                'bShow14': false,
                'title': 'Confirm',
                'content': 'Do you agree to upload the information?',
                'contentExtensive': 'Est aliqua irure deserunt excepteur. Ullamco do blanditiis nobis aute exercitation. Possimus in optio quod at. Dolores dolorum dolores eu excepteur proident. Quas distinctio sunt dolor amet lorem nostrud deserunt. Dolor molestias exercitation deserunt ut est aute occaecat dolore. Quod ut laboris dolores mollitia vero non corrupti?',
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
