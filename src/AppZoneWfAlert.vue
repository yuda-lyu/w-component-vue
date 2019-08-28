<template>
    <div>


        <div class="head1">wf-alert</div>


        <div style="padding-left:30px;">


            <div class="bk">
                <demolink
                    :kbname="'wf-alert'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="alert('成功'+WfAlert.text)">Success</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'wf-alert'"
                    :casename="'type error'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="alert('失敗'+WfAlert.text,{type:'error'})">Error</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'wf-alert'"
                    :casename="'type warning'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="alert('警告'+WfAlert.text,{type:'warning'})">Warning</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'wf-alert'"
                    :casename="'position'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="alert('左下'+WfAlert.text,{position:'bottom-left'})">bottom-left</v-btn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WfAlert from './js/WfAlert.mjs'

export default {
    components: {
        demolink,
    },
    props: {
    },
    data: function() {
        return {
            'WfAlert': {
                'text': '訊息文字',
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
        alert: function(msg, opt) {
            WfAlert(msg, opt)
        },
    },
}
</script>

<style scoped>
</style>
