<template>
    <div>


        <div class="head1">w-timeday</div>


        <div style="padding-left:30px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday v-model="WTimeday.day"></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday :borderRadius="5" v-model="WTimeday.day"></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :icon="mdiCheckUnderlineCircle"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :icon="'fas fa-clipboard-check'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday :pickColor="'brown'" v-model="WTimeday.day"></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'brown'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday :small="false" v-model="WTimeday.day"></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday :editable="false" v-model="WTimeday.day"></w-timeday>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :icon="mdiCheckUnderlineCircle"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :icon="'fas fa-clipboard-check'"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday :borderRadius="5" v-model="WTimeday.day"></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'titleColor & leftIconColor & iconColor & iconColorFocus'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-timeday
                                :iconColor="'cyan lighten-2'"
                                :iconColorFocus="'cyan darken-1'"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday :pickColor="'brown'" v-model="WTimeday.day"></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'leftIconTooltip & iconTooltip'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                            :leftIconTooltip="'出發日期'"
                        >
                            <w-timeday
                                :icon="mdiCheckUnderlineCircle"
                                :iconTooltip="'請點選日期以進行選擇'"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday :small="false" v-model="WTimeday.day"></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday :editable="false" v-model="WTimeday.day"></w-timeday>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :borderRadius="5"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="'fas fa-clipboard-check'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'cyan lighten-2'"
                            :borderColorFocus="'cyan darken-1'"
                            :backgroundColorFocus="'cyan lighten-5'"
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :pickColor="'brown'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'brown'"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :small="false"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :editable="false"
                            v-model="WTimeday.day"
                        ></w-timeday>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :icon="mdiCheckUnderlineCircle"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :icon="'fas fa-clipboard-check'"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :borderRadius="5"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'titleColor & leftIconColor & borderColor & borderColorFocus & backgroundColorFocus & iconColor & iconColorFocus'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'cyan lighten-2'"
                                :borderColorFocus="'cyan darken-1'"
                                :backgroundColorFocus="'cyan lighten-5'"
                                :iconColor="'cyan lighten-2'"
                                :iconColorFocus="'cyan darken-1'"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :pickColor="'brown'"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'leftIconTooltip & iconTooltip'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                            :leftIconTooltip="'出發日期'"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :icon="mdiCheckUnderlineCircle"
                                :iconTooltip="'請點選日期以進行選擇'"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :small="false"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :editable="false"
                                v-model="WTimeday.day"
                            ></w-timeday>
                        </w-shell-material>
                    </div>


                </template>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WTimeday from './components/WTimeday.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WTimeday,
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
            mdiPaw,
            'WTimeday': {
                'day': '2019-01-01'
            },
            'actions': [
                //pickColor測試不到
                {
                    'mode': 'eleclick',
                    'selector': 'div[TimedayCore="day"]',
                },
                {
                    'mode': 'eleclick',
                    'selector': 'button[type="button"]',
                    'nth': 11,
                },
                {
                    'mode': 'elemove',
                    'selector': 'div[ShellEllipse="leftIcon"]',
                    'nth': -1,
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
