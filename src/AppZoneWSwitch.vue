<template>
    <div>


        <div class="head1">w-switch</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-switch v-model="WSwitch.valueNo1"></w-switch>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'boolean'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-switch v-model="WSwitch.valueBol"></w-switch>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'text'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-switch :text="WSwitch.text" v-model="WSwitch.valueNo2"></w-switch>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'text & color'"
                        :kind="'nokind'"
                        :shell="'pure'"
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
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-switch :editable="false" v-model="WSwitch.valueYes"></w-switch>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'是否彈出警告訊息'"
                        :leftIcon="mdiAlert"
                    >
                        <w-switch v-model="WSwitch.valueNo1"></w-switch>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'boolean'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'是否彈出警告訊息'"
                        :leftIcon="mdiAlert"
                    >
                        <w-switch v-model="WSwitch.valueBol"></w-switch>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'text'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'使用帳號同步功能'"
                        :leftIcon="mdiCached"
                    >
                        <w-switch :text="WSwitch.text" v-model="WSwitch.valueNo2"></w-switch>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'text & color'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'是否開啟分享'"
                        :leftIcon="mdiAccountVoice"
                    >
                        <w-switch
                            :text="'是'"
                            :color="'teal accent-3'"
                            v-model="WSwitch.valueYes"
                        ></w-switch>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-switch'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'使用帳號同步功能'"
                        :leftIcon="mdiCached"
                    >
                        <w-switch :editable="false" v-model="WSwitch.valueYes"></w-switch>
                    </w-shell-material>
                </div>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiAlert, mdiCached, mdiAccountVoice } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WSwitch from './components/WSwitch.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WSwitch,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
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
