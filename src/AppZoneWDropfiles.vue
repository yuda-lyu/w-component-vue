<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-dropfiles</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'default'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    @drop-in="dropIn"
                    @drop-out="dropOut"
                    @drop-error="dropError"
                    @get-files="function(msg){
                        WDropfiles.msg1='get files('+msg.files.length+')' + ', ' +
                        'filesTree('+msg.filesTree.length+')' + ', ' +
                        'entries('+msg.entries.length+')'
                    }"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg1}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'backgroundColor & backgroundColorDropIn & backgroundColorHover'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :backgroundColor="'rgba(240,230,255,0.3)'"
                    :backgroundColorDropIn="'rgba(240,230,255,0.9)'"
                    :backgroundColorHover="'rgba(240,230,255,0.6)'"
                    @drop-in="dropIn"
                    @drop-out="dropOut"
                    @drop-error="dropError"
                    @get-files="function(msg){
                        WDropfiles.msg2='get files('+msg.files.length+')' + ', ' +
                        'filesTree('+msg.filesTree.length+')' + ', ' +
                        'entries('+msg.entries.length+')'
                    }"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg2}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :borderRadius="30"
                    @drop-in="dropIn"
                    @drop-out="dropOut"
                    @drop-error="dropError"
                    @get-files="function(msg){
                        WDropfiles.msg3='get files('+msg.files.length+')' + ', ' +
                        'filesTree('+msg.filesTree.length+')' + ', ' +
                        'entries('+msg.entries.length+')'
                    }"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg3}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'borderWidth'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :borderWidth="5"
                    @drop-in="dropIn"
                    @drop-out="dropOut"
                    @drop-error="dropError"
                    @get-files="function(msg){
                        WDropfiles.msg4='get files('+msg.files.length+')' + ', ' +
                        'filesTree('+msg.filesTree.length+')' + ', ' +
                        'entries('+msg.entries.length+')'
                    }"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg4}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'borderColor & borderColorDropIn & borderColorHover & backgroundColorDropIn & backgroundColorHover'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :borderColor="'orange lighten-4'"
                    :borderColorDropIn="'orange lighten-2'"
                    :borderColorHover="'orange lighten-4'"
                    :backgroundColorDropIn="'orange lighten-4'"
                    :backgroundColorHover="'orange lighten-5'"
                    @drop-in="dropIn"
                    @drop-out="dropOut"
                    @drop-error="dropError"
                    @get-files="function(msg){
                        WDropfiles.msg5='get files('+msg.files.length+')' + ', ' +
                        'filesTree('+msg.filesTree.length+')' + ', ' +
                        'entries('+msg.entries.length+')'
                    }"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg5}}</div>
                    </div>
                </w-dropfiles>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dropfiles'"
                    :casename="'timeTransition'"
                ></demolink>

                <w-dropfiles
                    style="width:200px; height:200px; display:flex; justify-content:center; align-items:center;"
                    :timeTransition="0.1"
                    @drop-in="dropIn"
                    @drop-out="dropOut"
                    @drop-error="dropError"
                    @get-files="function(msg){
                        WDropfiles.msg6='get files('+msg.files.length+')' + ', ' +
                        'filesTree('+msg.filesTree.length+')' + ', ' +
                        'entries('+msg.entries.length+')'
                    }"
                >
                    <div style="text-align:center;">
                        Drop files here
                        <div style="font-size:0.8rem; margin-top:5px;">{{WDropfiles.msg6}}</div>
                    </div>
                </w-dropfiles>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WDropfiles from './components/WDropfiles.vue'


export default {
    components: {
        demolink,
        WDropfiles,
    },
    props: {
    },
    data: function() {
        return {
            'WDropfiles': {
                'msg1': '',
                'msg2': '',
                'msg3': '',
                'msg4': '',
                'msg5': '',
                'msg6': '',
            },
            'actions': [
            ],
        }
    },
    methods: {
        dropIn: function(msg) {
            console.log('dropIn', msg)
        },
        dropOut: function(msg) {
            console.log('dropOut', msg)
        },
        dropError: function(msg) {
            console.log('dropError', msg)
        },
    },
}
</script>

<style scoped>
</style>
