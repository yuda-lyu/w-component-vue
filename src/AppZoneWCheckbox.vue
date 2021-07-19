<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-checkbox</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'default'"
                ></demolink>

                <w-checkbox
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'use string (y or n)'"
                ></demolink>

                <w-checkbox
                    v-model="WCheckbox.valueYN"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'iconSize'"
                ></demolink>

                <w-checkbox
                    :iconSize="18"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'checkedIconColor & uncheckedIconColor'"
                ></demolink>

                <w-checkbox
                    :checkedIconColor="'pink'"
                    :uncheckedIconColor="'pink'"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'checkedIcon & uncheckedIcon'"
                ></demolink>

                <w-checkbox
                    :checkedIcon="mdiCheck"
                    :uncheckedIcon="mdiClose"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'not editable'"
                ></demolink>

                <w-checkbox
                    :editable="false"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'not editable & checkedIconColorDisabled & uncheckedIconColorDisabled'"
                ></demolink>

                <w-checkbox
                    :editable="false"
                    :checkedIconColorDisabled="'#FF8A65'"
                    :uncheckedIconColorDisabled="'#FF8A65'"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheck, mdiClose } from '@mdi/js'
import demolink from './components/demolink.vue'
import WCheckbox from './components/WCheckbox.vue'


export default {
    components: {
        demolink,
        WCheckbox,
    },
    props: {
    },
    data: function() {
        return {
            mdiCheck,
            mdiClose,
            'WCheckbox': {
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
