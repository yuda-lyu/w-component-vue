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
                    :contentIconColor="'pink'"
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
                    :headerBackgroundColor="'grey darken-1'"
                    :footerBackgroundColor="'grey lighten-4'"
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
