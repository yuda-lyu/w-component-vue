<template>
    <div>


        <div class="head1">w-check-chips</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-check-chips'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-check-chips
                        :items="WCheckChips.items"
                        v-model="WCheckChips.selects"
                    ></w-check-chips>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-check-chips'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-check-chips
                        :iconColor="'orange lighten-5'"
                        :backgroundColor="'orange lighten-1'"
                        :items="WCheckChips.items"
                        v-model="WCheckChips.selects"
                    ></w-check-chips>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-check-chips'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-check-chips
                        :items="WCheckChips.items"
                        v-model="WCheckChips.selects"
                        :editable="false"
                    ></w-check-chips>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-check-chips'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇前菜水果'"
                        :leftIcon="mdiTagHeart"
                    >
                        <w-check-chips
                            :items="WCheckChips.items"
                            v-model="WCheckChips.selects"
                        ></w-check-chips>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-check-chips'"
                        :casename="'iconColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇前菜水果'"
                        :leftIcon="mdiTagHeart"
                    >
                        <w-check-chips
                            :iconColor="'orange lighten-5'"
                            :backgroundColor="'orange lighten-1'"
                            :items="WCheckChips.items"
                            v-model="WCheckChips.selects"
                        ></w-check-chips>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-check-chips'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇前菜水果'"
                        :leftIcon="mdiTagHeart"
                    >
                        <w-check-chips
                            :items="WCheckChips.items"
                            v-model="WCheckChips.selects"
                            :editable="false"
                        ></w-check-chips>
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
import WCheckChips from './components/WCheckChips.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WCheckChips,
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
            'WCheckChips': {
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
