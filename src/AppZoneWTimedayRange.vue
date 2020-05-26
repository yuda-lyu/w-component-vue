<template>
    <div>


        <div class="head1">w-timeday-range</div>


        <div style="padding:0px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderRadius="5"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'dayBetween'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :dayBetween="'to'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :icon="mdiCheckUnderlineCircle"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :icon="'fas fa-clipboard-check'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :pickColor="'brown'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :iconTooltip="'show tooltip'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :titleColor="'brown'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :small="false"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :editable="false"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderRadius="5"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'dayBetween'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :dayBetween="'to'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :icon="mdiCheckUnderlineCircle"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :icon="'fas fa-clipboard-check'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'titleColor & leftIconColor & iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-timeday-range
                                :iconColor="'cyan lighten-2'"
                                :iconColorFocus="'cyan darken-1'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'pickColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :pickColor="'brown'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :iconTooltip="'show tooltip'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :small="false"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :editable="false"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :borderRadius="5"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'dayBetween'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :dayBetween="'to'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="'fas fa-clipboard-check'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'cyan lighten-2'"
                            :borderColorFocus="'cyan darken-1'"
                            :backgroundColorFocus="'cyan lighten-5'"
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :pickColor="'brown'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :iconTooltip="'show tooltip'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :titleColor="'brown'"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :small="false"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-timeday-range
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :editable="false"
                            :dayStart.sync="WTimedayRange.dayStart"
                            :dayEnd.sync="WTimedayRange.dayEnd"
                        ></w-timeday-range>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :borderRadius="5"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'dayBetween'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :dayBetween="'to'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :icon="mdiCheckUnderlineCircle"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :icon="'fas fa-clipboard-check'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'titleColor & leftIconColor & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'cyan lighten-2'"
                                :borderColorFocus="'cyan darken-1'"
                                :backgroundColorFocus="'cyan lighten-5'"
                                :iconColor="'cyan lighten-2'"
                                :iconColorFocus="'cyan darken-1'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'pickColor'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :pickColor="'brown'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :iconTooltip="'show tooltip'"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :small="false"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-timeday-range'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇旅遊起訖日期'"
                            :leftIcon="mdiPaw"
                        >
                            <w-timeday-range
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :editable="false"
                                :dayStart.sync="WTimedayRange.dayStart"
                                :dayEnd.sync="WTimedayRange.dayEnd"
                            ></w-timeday-range>
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
import WTimedayRange from './components/WTimedayRange.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WTimedayRange,
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
            'WTimedayRange': {
                dayStart: '2019-01-01',
                dayEnd: '2019-02-01',
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
