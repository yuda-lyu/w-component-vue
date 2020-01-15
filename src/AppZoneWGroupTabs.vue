<template>
    <div>


        <div class="head1">w-group-tabs</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tabs'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tabs
                        :valueActive.sync="WGroupTabs.valueActive"
                        v-model="WGroupTabs.items"
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
                        :textColorActive="'orange darken-2'"
                        :backgroundColor="'white'"
                        :backgroundColorActive="'orange lighten-4'"
                        :valueActive.sync="WGroupTabs.valueActive"
                        v-model="WGroupTabs.items"
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
                        :tagTextColor="'purple lighten-1'"
                        :tagTextColorActive="'purple darken-2'"
                        :tagBackgroundColor="'purple lighten-4'"
                        :tagBackgroundColorActive="'rgba(255,255,255,0.8)'"
                        :valueActive.sync="WGroupTabs.valueActive"
                        v-model="WGroupTabs.items"
                    ></w-group-tabs>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tabs'"
                        :casename="'no shadow and use settings from value'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tabs
                        :shadow="false"
                        :tagBackgroundColor="'white'"
                        :tagBackgroundColorActive="'rgba(255,255,255,0.8)'"
                        :tagTextColorActive="'grey darken-2'"
                        v-model="WGroupTabs.itemsPlus"
                    ></w-group-tabs>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tabs
                            :valueActive.sync="WGroupTabs.valueActive"
                            v-model="WGroupTabs.items"
                        ></w-group-tabs>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tabs'"
                        :casename="'textColor & textColorActive & backgroundColor & backgroundColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tabs
                            :textColor="'orange lighten-1'"
                            :textColorActive="'orange darken-2'"
                            :backgroundColor="'white'"
                            :backgroundColorActive="'orange lighten-4'"
                            :valueActive.sync="WGroupTabs.valueActive"
                            v-model="WGroupTabs.items"
                        ></w-group-tabs>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tabs'"
                        :casename="'tagTextColor & tagTextColorActive & tagBackgroundColor & tagBackgroundColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tabs
                            :tagTextColor="'purple lighten-1'"
                            :tagTextColorActive="'purple darken-2'"
                            :tagBackgroundColor="'purple lighten-4'"
                            :tagBackgroundColorActive="'rgba(255,255,255,0.8)'"
                            :valueActive.sync="WGroupTabs.valueActive"
                            v-model="WGroupTabs.items"
                        ></w-group-tabs>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tabs'"
                        :casename="'no shadow and use settings from value'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tabs
                            :shadow="false"
                            :tagBackgroundColor="'white'"
                            :tagBackgroundColorActive="'rgba(255,255,255,0.8)'"
                            :tagTextColorActive="'grey darken-2'"
                            v-model="WGroupTabs.itemsPlus"
                        ></w-group-tabs>
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
                'valueActive': {
                    'name': 'Spinach',
                    'tag': 'Vege',
                },
                'items': [
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
                'itemsPlus': [
                    {
                        'name': '2020年1月1日',
                        'tag': '點擊排行',
                        'textColor': 'purple lighten-1',
                        'textColorActive': 'white',
                        'backgroundColor': 'purple lighten-1',
                        'backgroundColorActive': 'purple lighten-1',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020年1月2日',
                        'tag': '點擊排行',
                        'textColor': 'purple lighten-1',
                        'textColorActive': 'white',
                        'backgroundColor': 'purple lighten-1',
                        'backgroundColorActive': 'purple lighten-1',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020年1月1日',
                        'tag': '分數排行',
                        'textColor': 'pink lighten-3',
                        'textColorActive': 'white',
                        'backgroundColor': 'pink lighten-2',
                        'backgroundColorActive': 'pink lighten-2',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020年1月2日',
                        'tag': '分數排行',
                        'textColor': 'pink lighten-3',
                        'textColorActive': 'white',
                        'backgroundColor': 'pink lighten-2',
                        'backgroundColorActive': 'pink lighten-2',
                        'outlined': true,
                        'outlinedActive': false,
                    },
                    {
                        'name': '2020年1月3日',
                        'tag': '分數排行',
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
                {
                    'mode': 'eletype',
                    'selector': 'input.basic',
                    'str': '新增1',
                },
                {
                    'mode': 'eletype',
                    'selector': 'input.basic',
                    'str': '項目1',
                    'noEnter': true,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div[shellellipse="rightIcon"]',
                },
                {
                    'mode': 'eleclick',
                    'selector': 'i[role="button"]',
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
