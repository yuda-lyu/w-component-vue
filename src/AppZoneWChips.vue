<template>
    <div>


        <div class="head1">w-chips</div>


        <div style="padding-left:30px;">


            <template v-if="modeShell==='pure'">


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-chips v-model="WChips.items"></w-chips>
                </div>

                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'textColor & backgroundColor & inputTextBorderAndButtonColor & inputTextBorderAndButtonColorHover & inputTextBackgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-chips
                        :textColor="'white'"
                        :backgroundColor="'pink lighten-1'"
                        :inputTextBorderAndButtonColor="'pink accent-1'"
                        :inputTextBorderAndButtonColorHover="'pink lighten-2'"
                        :inputTextBackgroundColorHover="'red lighten-5'"
                        v-model="WChips.items"
                    ></w-chips>
                </div>

                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'nodata'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-chips :nodata="'無'" v-model="WChips.empty"></w-chips>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-chips :editable="false" v-model="WChips.items"></w-chips>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'not editable & textColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-chips
                        :textColor="'white'"
                        :backgroundColor="'pink lighten-1'"
                        :editable="false"
                        v-model="WChips.items"
                    ></w-chips>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        aleftIcon="mdiEmailVariant"
                        :left-icon="'mdi-email-variant'"
                    >
                        <w-chips v-model="WChips.items"></w-chips>
                    </w-shell-material>
                </div>

                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'textColor & backgroundColor & inputTextBorderAndButtonColor & inputTextBorderAndButtonColorHover & inputTextBackgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-chips
                            :textColor="'white'"
                            :backgroundColor="'pink lighten-1'"
                            :inputTextBorderAndButtonColor="'pink accent-1'"
                            :inputTextBorderAndButtonColorHover="'pink lighten-2'"
                            :inputTextBackgroundColorHover="'red lighten-5'"
                            v-model="WChips.items"
                        ></w-chips>
                    </w-shell-material>
                </div>

                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'nodata'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-chips :nodata="'無'" v-model="WChips.empty"></w-chips>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-chips :editable="false" v-model="WChips.items"></w-chips>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-chips'"
                        :casename="'not editable & textColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-chips
                            :textColor="'white'"
                            :backgroundColor="'pink lighten-1'"
                            :editable="false"
                            v-model="WChips.items"
                        ></w-chips>
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
import WChips from './components/WChips.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WChips,
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
            'WChips': {
                'items': [
                    'foo',
                    'bar',
                    'fizz',
                    'buzz',
                    'Apple',
                    '橘子'
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
