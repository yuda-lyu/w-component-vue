<template>
    <div>


        <div class="head1">w-timeminute</div>


        <div style="padding-left:30px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute v-model="WTimeminute.value"></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderRadius="5"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :icon="mdiCheckUnderlineCircle"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :icon="'fas fa-clipboard-check'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :iconColor="'cyan lighten-2'"
                            :iconColorHover="'cyan darken-1'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :pickColor="'brown'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'brown'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute :small="false" v-model="WTimeminute.value"></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :editable="false"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'hourMin & hourMax'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :hourMin="9"
                            :hourMax="12"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minuteInter'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :minuteInter="10"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minutesCustom'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :minutesCustom="['10:00','10:30','11:15','12:00']"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :icon="mdiCheckUnderlineCircle"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :icon="'fas fa-clipboard-check'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderRadius="5"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'titleColor & leftIconColor & leftIconColorHover & iconColor & iconColorHover'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-2'"
                            :leftIconColorHover="'cyan lighten-2'"
                        >
                            <w-timeminute
                                :iconColor="'cyan lighten-2'"
                                :iconColorHover="'cyan darken-1'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :pickColor="'brown'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
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
                            <w-timeminute
                                :icon="mdiCheckUnderlineCircle"
                                :iconTooltip="'請點選日期以進行選擇'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :small="false"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :editable="false"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'hourMin & hourMax'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :hourMin="9"
                                :hourMax="12"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minuteInter'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :minuteInter="10"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minutesCustom'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :minutesCustom="['10:00','10:30','11:15','12:00']"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :borderRadius="5"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :icon="mdiCheckUnderlineCircle"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :icon="'fas fa-clipboard-check'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'iconColor & iconColorFoucs & borderColor & borderColorHover'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'cyan lighten-2'"
                            :borderColorHover="'cyan darken-1'"
                            :iconColor="'cyan lighten-2'"
                            :iconColorHover="'cyan darken-1'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :pickColor="'brown'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'brown'"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :small="false"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :editable="false"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'hourMin & hourMax'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :hourMin="9"
                            :hourMax="12"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minuteInter'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :minuteInter="10"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minutesCustom'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange darken-2'"
                            :minutesCustom="['10:00','10:30','11:15','12:00']"
                            v-model="WTimeminute.value"
                        ></w-timeminute>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :icon="mdiCheckUnderlineCircle"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :icon="'fas fa-clipboard-check'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderRadius="5"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'titleColor & leftIconColor & leftIconColorHover & borderColor & borderColorHover & iconColor & iconColorHover'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-2'"
                            :leftIconColorHover="'cyan lighten-2'"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'cyan lighten-2'"
                                :borderColorHover="'cyan darken-1'"
                                :iconColor="'cyan lighten-2'"
                                :iconColorHover="'cyan darken-1'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :pickColor="'brown'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
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
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :icon="mdiCheckUnderlineCircle"
                                :iconTooltip="'請點選日期以進行選擇'"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :small="false"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :editable="false"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'hourMin & hourMax'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :hourMin="9"
                                :hourMax="12"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minuteInter'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :minuteInter="10"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute'"
                            :casename="'minutesCustom'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇出發日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorHover="'orange darken-2'"
                                :minutesCustom="['10:00','10:30','11:15','12:00']"
                                v-model="WTimeminute.value"
                            ></w-timeminute>
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
import WTimeminute from './components/WTimeminute.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WTimeminute,
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
            'WTimeminute': {
                value: '2019-01-01T10:00:00',
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
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div.v-list-item__title',
                    'nth': 1,
                },
                {
                    'mode': 'keypress',
                    'key': 'Tab'
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
