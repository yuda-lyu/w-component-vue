<template>
    <div>


        <div class="head1">w-text</div>


        <div style="padding-left:30px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text v-model="WText.text"></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text :borderRadius="5" v-model="WText.text"></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :leftIcon="mdiCheckUnderlineCircle"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :leftIcon="'fas fa-clipboard-check'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'placeholder'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :leftIcon="mdiCheckUnderlineCircle"
                            :placeholder="'請輸入數據'"
                            v-model="WText.emptytext"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon & leftIconColorHover'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :leftIcon="mdiCheckUnderlineCircle"
                            :leftIconColorHover="'pink accent-2'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'rightIcon'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text :rightIcon="mdiAvTimer" v-model="WText.text"></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'rightIcon & rightIconTooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :rightIcon="mdiSend"
                            :rightIconTooltip="'Send'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            style="margin-top:30px;"
                            :title="'請輸入地址'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            style="margin-top:30px;"
                            :title="'請輸入地址'"
                            :titleColor="'brown lighten-1'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :leftIcon="mdiAccountOutline"
                            :small="false"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :leftIcon="mdiCheckUnderlineCircle"
                            :editable="false"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'fullwidth'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :leftIcon="mdiArrowRightDropCircleOutline"
                            v-model="WText.text"
                        ></w-text>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text v-model="WText.text"></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text v-model="WText.text"></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text :borderRadius="5" v-model="WText.text"></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'placeholder'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'身份識別碼'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text
                                :placeholder="'請輸入中英文8碼'"
                                v-model="WText.emptytext"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text :small="false" v-model="WText.text"></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text :editable="false" v-model="WText.text"></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'fullwidth'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text v-model="WText.text"></w-text>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">
                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :borderRadius="5"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :leftIcon="mdiCheckUnderlineCircle"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :leftIcon="'fas fa-clipboard-check'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'placeholder'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :leftIcon="mdiCheckUnderlineCircle"
                            :placeholder="'請輸入數據'"
                            v-model="WText.emptytext"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon & leftIconColorHover'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :leftIcon="mdiCheckUnderlineCircle"
                            :leftIconColorHover="'pink accent-2'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon & leftIconColor & leftIconColorHover & borderColor & borderColorHover & backgroundColorHover'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'cyan lighten-1'"
                            :borderColorHover="'cyan darken-1'"
                            :backgroundColorHover="'cyan lighten-5'"
                            :leftIcon="mdiCheckUnderlineCircle"
                            :leftIconColor="'cyan lighten-1'"
                            :leftIconColorHover="'cyan darken-1'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'rightIcon'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :rightIcon="mdiAvTimer"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'rightIcon & rightIconTooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :rightIcon="mdiSend"
                            :rightIconTooltip="'Send'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請輸入地址'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請輸入地址'"
                            :titleColor="'brown lighten-1'"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :leftIcon="mdiAccountOutline"
                            :small="false"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :leftIcon="mdiCheckUnderlineCircle"
                            :editable="false"
                            v-model="WText.text"
                        ></w-text>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'fullwidth'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :backgroundColorHover="'orange lighten-5'"
                            :leftIcon="mdiArrowRightDropCircleOutline"
                            v-model="WText.text"
                        ></w-text>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :backgroundColorHover="'orange lighten-5'"
                                v-model="WText.text"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :backgroundColorHover="'orange lighten-5'"
                                v-model="WText.text"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :backgroundColorHover="'orange lighten-5'"
                                :borderRadius="5"
                                v-model="WText.text"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'placeholder'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'身份識別碼'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :backgroundColorHover="'orange lighten-5'"
                                :placeholder="'請輸入中英文8碼'"
                                v-model="WText.emptytext"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'titleColor & leftIconColor & leftIconColorHover & borderColor & borderColorHover & backgroundColorHover'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :titleColor="'cyan darken-2'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                            :leftIconColorHover="'cyan darken-1'"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'cyan lighten-1'"
                                :borderColorHover="'cyan darken-1'"
                                :backgroundColorHover="'cyan lighten-5'"
                                v-model="WText.text"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :backgroundColorHover="'orange lighten-5'"
                                :small="false"
                                v-model="WText.text"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :backgroundColorHover="'orange lighten-5'"
                                :editable="false"
                                v-model="WText.text"
                            ></w-text>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text'"
                            :casename="'fullwidth'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入貨物商品編號'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :backgroundColorHover="'orange lighten-5'"
                                v-model="WText.text"
                            ></w-text>
                        </w-shell-material>
                    </div>


                </template>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiAvTimer, mdiSend, mdiAccountOutline, mdiArrowRightDropCircleOutline, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WText from './components/WText.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WText,
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
            mdiCheckUnderlineCircle,
            mdiAvTimer,
            mdiSend,
            mdiAccountOutline,
            mdiArrowRightDropCircleOutline,
            mdiPaw,
            'WText': {
                'text': 'aBc數字123',
                'emptytext': ''
            },
            'actions': [
                {
                    'mode': 'eletype',
                    'selector': 'input.basic',
                    'str': '新增文字',
                    'noEnter': true,
                },
                {
                    'mode': 'elemove',
                    'selector': 'div[ShellEllipse="rightIcon"]'
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
