<template>
    <div>


        <div class="head1">w-timeminute-range</div>


        <div style="padding:0px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderRadius="5"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteBetween'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :minuteBetween="'to'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :icon="mdiCheckUnderlineCircle"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :icon="'fas fa-clipboard-check'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :pickColor="'brown'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :iconTooltip="'show tooltip'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :titleColor="'brown'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :small="false"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :editable="false"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'hourMin & hourMax'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :hourMin="9"
                            :hourMax="12"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteInter'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :minuteInter="10"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minutesCustom'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :minutesCustom="['10:00','10:30','11:15','12:00']"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderRadius="5"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteBetween'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :minuteBetween="'to'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :icon="mdiCheckUnderlineCircle"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :icon="'fas fa-clipboard-check'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'titleColor & leftIconColor & iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-timeminute-range
                                :iconColor="'cyan lighten-2'"
                                :iconColorFocus="'cyan darken-1'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :pickColor="'brown'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :iconTooltip="'show tooltip'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :small="false"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :editable="false"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'hourMin & hourMax'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :hourMin="9"
                                :hourMax="12"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteInter'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :minuteInter="10"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minutesCustom'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :minutesCustom="['10:00','10:30','11:15','12:00']"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :borderRadius="5"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteBetween'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :minuteBetween="'to'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="'fas fa-clipboard-check'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'cyan lighten-2'"
                            :borderColorFocus="'cyan darken-1'"
                            :backgroundColorFocus="'cyan lighten-5'"
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :pickColor="'brown'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :iconTooltip="'show tooltip'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :titleColor="'brown'"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :small="false"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :editable="false"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'hourMin & hourMax'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :hourMin="9"
                            :hourMax="12"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteInter'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :minuteInter="10"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minutesCustom'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeminute-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :minutesCustom="['10:00','10:30','11:15','12:00']"
                            :minuteStart.sync="WTimeminuteRange.minuteStart"
                            :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                        ></w-timeminute-range>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :borderRadius="5"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteBetween'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :minuteBetween="'to'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :icon="mdiCheckUnderlineCircle"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :icon="'fas fa-clipboard-check'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'titleColor & leftIconColor & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'cyan lighten-2'"
                                :borderColorFocus="'cyan darken-1'"
                                :backgroundColorFocus="'cyan lighten-5'"
                                :iconColor="'cyan lighten-2'"
                                :iconColorFocus="'cyan darken-1'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :pickColor="'brown'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :iconTooltip="'show tooltip'"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :small="false"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :editable="false"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'hourMin & hourMax'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :hourMin="9"
                                :hourMax="12"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minuteInter'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :minuteInter="10"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeminute-range'"
                            :casename="'minutesCustom'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇開會起訖時間'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeminute-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :minutesCustom="['10:00','10:30','11:15','12:00']"
                                :minuteStart.sync="WTimeminuteRange.minuteStart"
                                :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                            ></w-timeminute-range>
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
import WTimeminuteRange from './components/WTimeminuteRange.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WTimeminuteRange,
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
            'WTimeminuteRange': {
                minuteStart: '2019-01-01T10:00:00',
                minuteEnd: '2019-02-01T12:00:00',
            },
            'actions': [
                //pickColor測試不到

                //起始時間
                {
                    'mode': 'eleclick',
                    'selector': 'div[TimedayCore="day"]',
                    'nth': 0,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'button[type="button"]',
                    'nth': 11,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                    'nth': 0,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div.v-list-item__title',
                    'nth': 1,
                },

                //結束時間
                {
                    'mode': 'eleclick',
                    'selector': 'div[TimedayCore="day"]',
                    'nth': 1,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'button[type="button"]',
                    'nth': 14,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                    'nth': 1,
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
