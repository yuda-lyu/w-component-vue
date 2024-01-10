<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-checkbox</span></div>


        <div>


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
                    :casename="'text'"
                ></demolink>

                <w-checkbox
                    :text="'顯示文字(text)'"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'text & textColor & textColorHover'"
                ></demolink>

                <w-checkbox
                    :text="'顯示文字(text)'"
                    :textColor="'#24c'"
                    :textColorHover="'#68c'"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'iconSize & textFontSize'"
                ></demolink>

                <w-checkbox
                    :text="'顯示文字(text)'"
                    :iconSize="18"
                    :textFontSize="'0.7rem'"
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
                    :casename="'checkedIconColor & checkedIconColorHover & uncheckedIconColor & uncheckedIconColorHover'"
                ></demolink>

                <w-checkbox
                    :checkedIconColor="'#f6a'"
                    :checkedIconColorHover="'#f26'"
                    :uncheckedIconColor="'#f6a'"
                    :uncheckedIconColorHover="'#f26'"
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
                    :checkedIconColorDisabled="'#ff8a65'"
                    :uncheckedIconColorDisabled="'#ff8a65'"
                    v-model="WCheckbox.valueBol"
                ></w-checkbox>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-checkbox'"
                    :casename="'slot'"
                ></demolink>

                <w-checkbox
                    :text="'應力(kN/m<sup>3</sup>)'"
                    v-model="WCheckbox.valueBol"
                >
                    <template v-slot:text="props">
                        <span v-html="props.text"></span>
                    </template>
                </w-checkbox>
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
