<template>
    <div>


        <div class="head1">w-alert</div>


        <div style="padding-left:30px;">


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert('成功'+WAlert.text)">Success</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'type error'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert('失敗'+WAlert.text,{type:'error'})">Error</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'type warning'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert('警告'+WAlert.text,{type:'warning'})">Warning</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'position'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert('左下'+WAlert.text,{position:'bottom-left'})">bottom-left</v-btn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WAlert from './components/WAlert.mjs'

export default {
    components: {
        demolink,
    },
    props: {
    },
    data: function() {
        return {
            'WAlert': {
                'text': '訊息文字',
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'button'
                }
            ],
        }
    },
    mounted: function() {
        this.$alert = WAlert
    },
}
</script>

<style scoped>
</style>
