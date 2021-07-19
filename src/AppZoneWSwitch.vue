<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-switch</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'default'"
                ></demolink>

                <w-switch v-model="WSwitch.valueBol"></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'use string (y or n)'"
                ></demolink>

                <w-switch v-model="WSwitch.valueYN"></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'text & color'"
                ></demolink>

                <w-switch
                    :text="'是否開啟分享'"
                    :color="'teal accent-3'"
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'not editable'"
                ></demolink>

                <w-switch :editable="false" v-model="WSwitch.valueBol"></w-switch>
            </div>


        </div>


    </div>
</template>

<script>
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
            'WSwitch': {
                'valueBol': true,
                'valueYN': 'y',
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
