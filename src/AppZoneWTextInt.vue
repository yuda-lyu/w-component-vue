<template>
    <div>


        <div class="head1">w-text-int</div>


        <div style="padding-left:30px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int v-model="WTextInt.int"></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'buttonColorFocus'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :buttonColorFocus="'pink accent-2'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'buttonColor & buttonColorFocus'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :buttonColor="'cyan accent-4'"
                            :buttonColorFocus="'cyan accent-3'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int :borderRadius="5" v-model="WTextInt.int"></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :titleColor="'brown'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'width'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int :width="100" v-model="WTextInt.int"></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int :small="false" v-model="WTextInt.int"></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int :editable="false" v-model="WTextInt.int"></w-text-int>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int v-model="WTextInt.int"></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text-int v-model="WTextInt.int"></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'buttonColorFocus'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :buttonColorFocus="'pink accent-2'"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'buttonColor & buttonColorFocus'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :buttonColor="'grey lighten-1'"
                                :buttonColorFocus="'pink accent-2'"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int :borderRadius="5" v-model="WTextInt.int"></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'width'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int :width="100" v-model="WTextInt.int"></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int :small="false" v-model="WTextInt.int"></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int :editable="false" v-model="WTextInt.int"></w-text-int>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'buttonColorFocus'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :buttonColorFocus="'pink accent-2'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'buttonColor & buttonColorFocus & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'cyan lighten-1'"
                            :borderColorFocus="'cyan darken-1'"
                            :backgroundColorFocus="'cyan lighten-5'"
                            :buttonColor="'cyan lighten-1'"
                            :buttonColorFocus="'cyan darken-1'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :borderRadius="5"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :titleColor="'brown'"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'width'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :width="100"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :small="false"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-text-int
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :editable="false"
                            v-model="WTextInt.int"
                        ></w-text-int>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'buttonColorFocus'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :buttonColorFocus="'pink accent-2'"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'titleColor & leftIconColor & buttonColor & buttonColorFocus & borderColor & borderColorFocus'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :titleColor="'cyan darken-2'"
                            :leftIcon="mdiCart"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'cyan lighten-3'"
                                :borderColorFocus="'cyan lighten-1'"
                                :backgroundColorFocus="'cyan lighten-5'"
                                :buttonColor="'cyan lighten-3'"
                                :buttonColorFocus="'cyan lighten-1'"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :borderRadius="5"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'width'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :width="100"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :small="false"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-int'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入訂購數量'"
                            :leftIcon="mdiCart"
                        >
                            <w-text-int
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :editable="false"
                                v-model="WTextInt.int"
                            ></w-text-int>
                        </w-shell-material>
                    </div>


                </template>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiCart } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WTextInt from './components/WTextInt.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WTextInt,
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
            mdiCart,
            'WTextInt': {
                'int': 123
            },
            'actions': [
                {
                    'mode': 'eletype',
                    'selector': 'input.basic',
                    'str': 'a'
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div[ShellMaterial="rightIcon"]',
                    'nth': -1,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div[ShellMaterial="rightIcon"]',
                    'nth': -1,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div[ShellMaterial="leftIcon"]',
                    'nth': -1,
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
