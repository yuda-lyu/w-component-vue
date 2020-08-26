<template>
    <div>


        <div class="head1">w-group-tabs</div>


        <div style="padding:0px;">


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tabs'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tabs
                    :valueActive.sync="WGroupTabs.useItem1"
                    v-model="WGroupTabs.items1"
                ></w-group-tabs>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tabs'"
                    :casename="'textColor & textColorActive & backgroundColor & backgroundColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tabs
                    :textColor="'orange lighten-1'"
                    :textColorActive="'white'"
                    :backgroundColor="'white'"
                    :backgroundColorActive="'orange lighten-1'"
                    :valueActive.sync="WGroupTabs.useItem1"
                    v-model="WGroupTabs.items1"
                ></w-group-tabs>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tabs'"
                    :casename="'tagTextColor & tagTextColorActive & tagBackgroundColor & tagBackgroundColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tabs
                    :tagTextColor="'white'"
                    :tagTextColorActive="'black'"
                    :tagBackgroundColor="'purple lighten-3'"
                    :tagBackgroundColorActive="'white'"
                    :valueActive.sync="WGroupTabs.useItem1"
                    v-model="WGroupTabs.items1"
                ></w-group-tabs>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tabs'"
                    :casename="'no close'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tabs
                    :close="false"
                    :valueActive.sync="WGroupTabs.useItem1"
                    v-model="WGroupTabs.items1"
                ></w-group-tabs>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tabs'"
                    :casename="'no draggable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tabs
                    :draggable="false"
                    :valueActive.sync="WGroupTabs.useItem1"
                    v-model="WGroupTabs.items1"
                ></w-group-tabs>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tabs'"
                    :casename="'nodata'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tabs
                    :draggable="false"
                    :valueActive.sync="WGroupTabs.useItem1"
                    v-model="WGroupTabs.empty"
                ></w-group-tabs>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tabs'"
                    :casename="'no shadow and individual setting'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tabs
                    :shadow="false"
                    :tagBackgroundColor="'white'"
                    :tagBackgroundColorActive="'rgba(255,255,255,0.8)'"
                    :tagTextColorActive="'grey darken-2'"
                    :valueActive.sync="WGroupTabs.useItem2"
                    v-model="WGroupTabs.items2"
                ></w-group-tabs>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiEmailVariant } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WGroupTabs from './components/WGroupTabs.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupTabs,
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
            'WGroupTabs': {
                'useItem1': {
                    'name': 'Spinach',
                    'tag': 'Vege',
                },
                'items1': [
                    {
                        'name': 'Spinach',
                        'tag': 'Vege',
                    },
                    {
                        'name': 'Cabbage',
                        'tag': 'Vege',
                    },
                    {
                        'name': 'Cauliflower',
                        'tag': 'Vege',
                    },
                    {
                        'name': 'Radish',
                        'tag': 'Vege',
                    },
                    {
                        'name': 'Apple',
                        'tag': 'Fruit',
                    },
                    {
                        'name': 'Banna',
                        'tag': 'Fruit',
                    },
                    {
                        'name': '橘子',
                        'tag': 'Fruit',
                    },
                ],
                'useItem2': {
                    'name': '2020-01-01',
                    'tag': 'Rank',
                    'textColor': 'purple lighten-1',
                    'textColorActive': 'white',
                    'backgroundColor': 'purple lighten-1',
                    'backgroundColorActive': 'purple lighten-1',
                    'outlined': true,
                    'outlinedActive': false,
                },
                'items2': [
                    {
                        'name': '2020-01-01',
                        'tag': 'Rank',
                        'textColor': 'purple lighten-1',
                        'textColorActive': 'white',
                        'backgroundColor': 'purple lighten-1',
                        'backgroundColorActive': 'purple lighten-1',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020-01-02',
                        'tag': 'Rank',
                        'textColor': 'purple lighten-1',
                        'textColorActive': 'white',
                        'backgroundColor': 'purple lighten-1',
                        'backgroundColorActive': 'purple lighten-1',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020-01-01',
                        'tag': 'View',
                        'textColor': 'pink lighten-3',
                        'textColorActive': 'white',
                        'backgroundColor': 'pink lighten-2',
                        'backgroundColorActive': 'pink lighten-2',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020-01-02',
                        'tag': 'View',
                        'textColor': 'pink lighten-3',
                        'textColorActive': 'white',
                        'backgroundColor': 'pink lighten-2',
                        'backgroundColorActive': 'pink lighten-2',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020-01-03',
                        'tag': 'View',
                        'textColor': 'pink lighten-3',
                        'textColorActive': 'white',
                        'backgroundColor': 'pink lighten-2',
                        'backgroundColorActive': 'pink lighten-2',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                ],
                'empty': []
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
