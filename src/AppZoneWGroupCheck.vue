<template>
    <div>


        <div class="head1">w-group-check</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-check'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-check
                        :items="WGroupCheck.items"
                        v-model="WGroupCheck.selects"
                    ></w-group-check>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-check'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-check
                        :iconColor="'orange lighten-5'"
                        :backgroundColor="'orange lighten-1'"
                        :items="WGroupCheck.items"
                        v-model="WGroupCheck.selects"
                    ></w-group-check>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-check'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-check
                        :items="WGroupCheck.items"
                        v-model="WGroupCheck.selects"
                        :editable="false"
                    ></w-group-check>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-check'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇前菜水果'"
                        :leftIcon="mdiTagHeart"
                    >
                        <w-group-check
                            :items="WGroupCheck.items"
                            v-model="WGroupCheck.selects"
                        ></w-group-check>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-check'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇前菜水果'"
                        :leftIcon="mdiTagHeart"
                    >
                        <w-group-check
                            :iconColor="'orange lighten-5'"
                            :backgroundColor="'orange lighten-1'"
                            :items="WGroupCheck.items"
                            v-model="WGroupCheck.selects"
                        ></w-group-check>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-check'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇前菜水果'"
                        :leftIcon="mdiTagHeart"
                    >
                        <w-group-check
                            :items="WGroupCheck.items"
                            v-model="WGroupCheck.selects"
                            :editable="false"
                        ></w-group-check>
                    </w-shell-material>
                </div>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiTagHeart } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WGroupCheck from './components/WGroupCheck.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupCheck,
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
            mdiTagHeart,
            'WGroupCheck': {
                'items': [
                    'foo',
                    'bar',
                    'fizz',
                    'buzz',
                    'Apple',
                    '橘子'
                ],
                'selects': [
                    'foo',
                    'Apple'
                ]
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'nth': 5,
                    'selector': 'span.v-chpi-modify'
                },
                {
                    'mode': 'eleclick',
                    'nth': 4,
                    'selector': 'span.v-chpi-modify'
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
