<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-switch</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'default'"
                ></demolink>

                <w-switch
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'use string (y or n)'"
                ></demolink>

                <w-switch
                    v-model="WSwitch.valueYN"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'text'"
                ></demolink>

                <w-switch
                    :text="'顯示文字(text)'"
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'text & textColor & textColorHover'"
                ></demolink>

                <w-switch
                    :text="'顯示文字(text)'"
                    :textColor="'#44f'"
                    :textColorHover="'#77f'"
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'switchSize & textFontSize'"
                ></demolink>

                <w-switch
                    :text="'顯示文字(text)'"
                    :switchSize="18"
                    :textFontSize="'0.7rem'"
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'checkedSwitchCircleColor & checkedSwitchCircleColorHover & checkedSwitchBarColor & checkedSwitchBarColorHover'"
                ></demolink>

                <w-switch
                    :checkedSwitchCircleColor="'#f6a'"
                    :checkedSwitchCircleColorHover="'#f26'"
                    :checkedSwitchBarColor="'rgba(255, 102, 170, 0.6)'"
                    :checkedSwitchBarColorHover="'rgba(255, 54, 122, 0.6)'"
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'uncheckedSwitchCircleColor & uncheckedSwitchCircleColorHover & uncheckedSwitchBarColor & uncheckedSwitchBarColorHover'"
                ></demolink>

                <w-switch
                    :uncheckedSwitchCircleColor="'#74a4d9'"
                    :uncheckedSwitchCircleColorHover="'#69e'"
                    :uncheckedSwitchBarColor="'#d1e1f2'"
                    :uncheckedSwitchBarColorHover="'#bce'"
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'not editable'"
                ></demolink>

                <w-switch
                    :editable="false"
                    v-model="WSwitch.valueBol"
                ></w-switch>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-switch'"
                    :casename="'not editable & checkedSwitchCircleColorDisabled & checkedSwitchBarColorDisabled & uncheckedSwitchCircleColorDisabled & uncheckedSwitchBarColorDisabled'"
                ></demolink>

                <w-switch
                    :editable="false"
                    :checkedSwitchCircleColorDisabled="'#ff8a65'"
                    :checkedSwitchBarColorDisabled="'#ffbca6'"
                    :uncheckedSwitchCircleColorDisabled="'rgba(255, 138, 101, 0.5)'"
                    :uncheckedSwitchBarColorDisabled="'rgba(255, 188, 166, 0.5)'"
                    v-model="WSwitch.valueBol"
                ></w-switch>
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
