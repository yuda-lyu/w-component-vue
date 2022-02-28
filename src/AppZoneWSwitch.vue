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
                    :textColor="'#24c'"
                    :textColorHover="'#68c'"
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
                    :casename="'checkedSwitchColor & checkedSwitchColorHover & uncheckedSwitchColor & uncheckedSwitchColorHover'"
                ></demolink>

                <w-switch
                    :checkedSwitchColor="'#f6a'"
                    :checkedSwitchColorHover="'#f26'"
                    :uncheckedSwitchColor="'#ccc'"
                    :uncheckedSwitchColorHover="'#cccccc'"
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
                    :casename="'not editable & checkedSwitchColorDisabled & uncheckedSwitchColorDisabled'"
                ></demolink>

                <w-switch
                    :editable="false"
                    :checkedSwitchColorDisabled="'#ff8a65'"
                    :uncheckedSwitchColorDisabled="'#ffbca6'"
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
