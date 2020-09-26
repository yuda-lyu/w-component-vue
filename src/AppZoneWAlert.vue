<template>
    <div>


        <div class="head1">w-alert</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert('Success '+WAlert.text)">Success</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'type error'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert('Error '+WAlert.text,{type:'error'})">Error</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'type warning'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert('Warning '+WAlert.text,{type:'warning'})">Warning</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'position'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn style="margin-right:10px;" small @click="$alert('[Bottom-Right] '+WAlert.text,{
                    position:'bottom-right'
                })">top-right</v-btn>

                <v-btn style="margin-right:10px;" small @click="$alert('[Top-Left] '+WAlert.text,{
                    position:'top-left'
                })">top-left</v-btn>

                <v-btn style="margin-right:10px;" small @click="$alert('[Bottom-Left] '+WAlert.text,{
                    position:'bottom-left'
                })">bottom-left</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'time (6s)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert(WAlert.text,{
                    time:6000
                })">Show</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert(WAlert.text,{
                    textColor:'#995'
                })">Show</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'backgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert(WAlert.text,{
                    backgroundColor:'rgba(220,220,220,0.3)'
                })">Show</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'borderWidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert(WAlert.text,{
                    borderWidth:5
                })">Show</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'borderColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert(WAlert.text,{
                    borderColor:'#9f5'
                })">Show</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert(WAlert.text,{
                    borderRadius:0
                })">Show</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'shadowStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="$alert(WAlert.text,{
                    shadowStyle:'0px 3px 1px -2px rgba(0, 0, 0, 0.08), 0px 2px 2px 0px rgba(0, 0, 0, 0.09), 0px 1px 5px 0px rgba(0, 0, 0, 0.07)'
                })">Show</v-btn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-alert'"
                    :casename="'recive closed event by promise'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <v-btn small @click="receiveCloseEvent">Show</v-btn>

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
                'text': 'test message',
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
    methods: {
        receiveCloseEvent: function() {
            let vo = this
            vo.$alert(vo.WAlert.text)
                .then(function() {
                    alert('finish')
                })
        },
    },
}
</script>

<style scoped>
</style>
