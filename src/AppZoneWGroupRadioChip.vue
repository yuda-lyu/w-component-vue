<template>
    <div>


        <div class="head1">w-group-radio-chip</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.items"
                        v-model="WGroupRadioChip.select"
                    ></w-group-radio-chip>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :iconColor="'orange lighten-5'"
                        :backgroundColor="'orange darken-5'"
                        :items="WGroupRadioChip.items"
                        v-model="WGroupRadioChip.select"
                    ></w-group-radio-chip>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.items"
                        :editable="false"
                        v-model="WGroupRadioChip.select"
                    ></w-group-radio-chip>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-radio-chip
                            :items="WGroupRadioChip.items"
                            v-model="WGroupRadioChip.select"
                        ></w-group-radio-chip>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-radio-chip
                            :iconColor="'orange lighten-5'"
                            :backgroundColor="'orange darken-5'"
                            :items="WGroupRadioChip.items"
                            v-model="WGroupRadioChip.select"
                        ></w-group-radio-chip>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-radio-chip
                            :items="WGroupRadioChip.items"
                            :editable="false"
                            v-model="WGroupRadioChip.select"
                        ></w-group-radio-chip>
                    </w-shell-material>
                </div>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiEmailVariant } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WGroupRadioChip from './components/WGroupRadioChip.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupRadioChip,
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
            mdiEmailVariant,
            'WGroupRadioChip': {
                'items': [
                    'foo',
                    'bar',
                    'fizz',
                    'buzz',
                    'Apple',
                    '橘子'
                ],
                'select': 'Apple'
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'nth': 1,
                    'selector': 'span.v-chpi-modify'
                },
                {
                    'mode': 'eleclick',
                    'nth': 2,
                    'selector': 'span.v-chpi-modify'
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
