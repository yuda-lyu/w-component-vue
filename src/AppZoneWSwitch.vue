<template>
    <div>


        <div class="head1" style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-switch</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'default'"
                ></demolink>

                <w-switch v-model="WSwitch.valueNo1"></w-switch>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'boolean'"
                ></demolink>

                <w-switch v-model="WSwitch.valueBol"></w-switch>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'text'"
                ></demolink>

                <w-switch :text="WSwitch.text" v-model="WSwitch.valueNo2"></w-switch>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'text & color'"
                ></demolink>

                <w-switch
                    :text="'是否開啟分享'"
                    :color="'teal accent-3'"
                    v-model="WSwitch.valueYes"
                ></w-switch>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'not editable'"
                ></demolink>

                <w-switch :editable="false" v-model="WSwitch.valueYes"></w-switch>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiAlert, mdiCached, mdiAccountVoice } from '@mdi/js'
import demolink from './components/demolink.vue'
import WSwitch from './components/WSwitch.vue'


export default {
    components: {
        demolink,
        WSwitch,
    },
    props: {
    },
    data: function() {
        return {
            mdiAlert,
            mdiCached,
            mdiAccountVoice,
            'WSwitch': {
                'text': '開啟',
                'valueYes': 'yes',
                'valueNo1': 'no',
                'valueNo2': 'no',
                'valueBol': false,
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'input[type="checkbox"]'
                },
                {
                    'mode': 'move',
                    'x1': 0,
                    'y1': 0,
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
