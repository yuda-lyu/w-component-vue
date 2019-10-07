<template>
    <div>


        <div class="head1">w-radio-chips</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-radio-chips'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-radio-chips
                        :items="WRadioChips.items"
                        v-model="WRadioChips.select"
                    ></w-radio-chips>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-radio-chips'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-radio-chips
                        :iconColor="'orange lighten-5'"
                        :backgroundColor="'orange darken-5'"
                        :items="WRadioChips.items"
                        v-model="WRadioChips.select"
                    ></w-radio-chips>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-radio-chips'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-radio-chips
                        :items="WRadioChips.items"
                        :editable="false"
                        v-model="WRadioChips.select"
                    ></w-radio-chips>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-radio-chips'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-radio-chips
                            :items="WRadioChips.items"
                            v-model="WRadioChips.select"
                        ></w-radio-chips>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-radio-chips'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-radio-chips
                            :iconColor="'orange lighten-5'"
                            :backgroundColor="'orange darken-5'"
                            :items="WRadioChips.items"
                            v-model="WRadioChips.select"
                        ></w-radio-chips>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-radio-chips'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇種植水果'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-radio-chips
                            :items="WRadioChips.items"
                            :editable="false"
                            v-model="WRadioChips.select"
                        ></w-radio-chips>
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
import WRadioChips from './components/WRadioChips.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WRadioChips,
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
            'WRadioChips': {
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
