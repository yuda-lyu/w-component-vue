<template>
    <div>


        <div class="head1">w-group-tags</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags v-model="WGroupTags.items"></w-group-tags>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'textColor & backgroundColor & inputTextBorderColor & inputTextBorderColorFocus & inputTextBackgroundColorFocus & inputTextButtonColor & inputTextButtonColorFocus'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        :textColor="'white'"
                        :backgroundColor="'pink lighten-1'"
                        :inputTextBorderColor="'pink accent-1'"
                        :inputTextBorderColorFocus="'pink lighten-2'"
                        :inputTextBackgroundColorFocus="'red lighten-5'"
                        :inputTextButtonColor="'pink accent-1'"
                        :inputTextButtonColorFocus="'pink lighten-2'"
                        v-model="WGroupTags.items"
                    ></w-group-tags>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'nodata'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags :nodata="'無'" v-model="WGroupTags.empty"></w-group-tags>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags :editable="false" v-model="WGroupTags.items"></w-group-tags>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'not editable & textColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        :textColor="'white'"
                        :backgroundColor="'pink lighten-1'"
                        :editable="false"
                        v-model="WGroupTags.items"
                    ></w-group-tags>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags v-model="WGroupTags.items"></w-group-tags>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'textColor & backgroundColor & inputTextBorderColor & inputTextBorderColorFocus & inputTextBackgroundColorFocus & inputTextButtonColor & inputTextButtonColorFocus'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            :textColor="'white'"
                            :backgroundColor="'pink lighten-1'"
                            :inputTextBorderColor="'pink accent-1'"
                            :inputTextBorderColorFocus="'pink lighten-2'"
                            :inputTextBackgroundColorFocus="'red lighten-5'"
                            :inputTextButtonColor="'pink accent-1'"
                            :inputTextButtonColorFocus="'pink lighten-2'"
                            v-model="WGroupTags.items"
                        ></w-group-tags>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'nodata'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags :nodata="'無'" v-model="WGroupTags.empty"></w-group-tags>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags :editable="false" v-model="WGroupTags.items"></w-group-tags>
                    </w-shell-material>
                </div>

                <div class="bk">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'not editable & textColor & backgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請輸入販賣水果種類'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            :textColor="'white'"
                            :backgroundColor="'pink lighten-1'"
                            :editable="false"
                            v-model="WGroupTags.items"
                        ></w-group-tags>
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
import WGroupTags from './components/WGroupTags.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupTags,
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
            'WGroupTags': {
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
