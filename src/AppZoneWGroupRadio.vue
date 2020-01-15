<template>
    <div>


        <div class="head1">w-group-radio</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio
                        :items="WGroupRadio.items"
                        v-model="WGroupRadio.select"
                    ></w-group-radio>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio
                        :iconColor="'orange lighten-5'"
                        :backgroundColor="'orange darken-5'"
                        :items="WGroupRadio.items"
                        v-model="WGroupRadio.select"
                    ></w-group-radio>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio
                        :items="WGroupRadio.items"
                        :editable="false"
                        v-model="WGroupRadio.select"
                    ></w-group-radio>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-radio
                            :items="WGroupRadio.items"
                            v-model="WGroupRadio.select"
                        ></w-group-radio>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-radio
                            :iconColor="'orange lighten-5'"
                            :backgroundColor="'orange darken-5'"
                            :items="WGroupRadio.items"
                            v-model="WGroupRadio.select"
                        ></w-group-radio>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-radio
                            :items="WGroupRadio.items"
                            :editable="false"
                            v-model="WGroupRadio.select"
                        ></w-group-radio>
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
import WGroupRadio from './components/WGroupRadio.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupRadio,
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
            'WGroupRadio': {
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
