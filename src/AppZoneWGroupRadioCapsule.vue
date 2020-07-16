<template>
    <div>


        <div class="head1">w-group-radio-capsule</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.string.items"
                        v-model="WGroupRadioCapsule.string.select"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'icon (material)'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'icon (fontawesome)'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.objectFA.items"
                        v-model="WGroupRadioCapsule.objectFA.select"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'iconShiftLeft'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :iconShiftLeft="5"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'tooltip'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.objectTP.items"
                        v-model="WGroupRadioCapsule.objectTP.select"
                        :tooltip="'測試中文tooltip'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'not small (large)'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :small="false"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'sizePadding'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :sizePadding="'12px 27px'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'textColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :textColor="'grey darken-1'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :textColor="'grey darken-1'"
                        :textColorHover="'orange darken-3'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'textColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :textColorActive="'white'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'iconColor & iconColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :iconColor="'orange'"
                        :iconColorHover="'orange darken-2'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'iconColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :iconColorActive="'yellow'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderRadius'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :borderRadius="0"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :borderColor="'grey'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :borderColor="'grey'"
                        :borderColorHover="'grey darken-2'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :borderColorActive="'white'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'backgroundColor & backgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :backgroundColor="'grey lighten-4'"
                        :backgroundColorHover="'grey lighten-2'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'backgroundColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :backgroundColorActive="'light-blue darken-2'"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'shadow'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :shadow="true"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'no shadowActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :shadowActive="false"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'loading'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :loading="true"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-capsule
                        :items="WGroupRadioCapsule.object.items"
                        v-model="WGroupRadioCapsule.object.select"
                        :editable="false"
                    ></w-group-radio-capsule>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'sizePadding & borderRadius & textColor & iconColor & backgroundColor & backgroundColorHover & backgroundColorActive & shadowActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <div style="padding:0px 10px; background:linear-gradient(60deg,#ab47bc,#7b1fa2); box-shadow:0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);">
                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :sizePadding="'12px 27px'"
                            :borderRadius="5"
                            :textColor="'white'"
                            :textColorHover="'white'"
                            :textColorActive="'white'"
                            :iconColor="'white'"
                            :iconColorHover="'white'"
                            :iconColorActive="'white'"
                            :backgroundColor="'rgba(255,255,255,0)'"
                            :backgroundColorHover="'rgba(255,255,255,0)'"
                            :backgroundColorActive="'rgba(255,255,255,0.15)'"
                            :shadowActive="false"
                        ></w-group-radio-capsule>
                    </div>

                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.string.items"
                            v-model="WGroupRadioCapsule.string.select"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'icon (material)'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'icon (fontawesome)'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.objectFA.items"
                            v-model="WGroupRadioCapsule.objectFA.select"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'iconShiftLeft'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :iconShiftLeft="5"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'tooltip'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.objectTP.items"
                            v-model="WGroupRadioCapsule.objectTP.select"
                            :tooltip="'測試中文tooltip'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'not small (large)'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :small="false"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'sizePadding'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :sizePadding="'12px 27px'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'textColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :textColor="'grey darken-1'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :textColor="'grey darken-1'"
                            :textColorHover="'orange darken-3'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'textColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :textColorActive="'white'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'iconColor & iconColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :iconColor="'orange'"
                            :iconColorHover="'orange darken-2'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'iconColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :iconColorActive="'yellow'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderRadius'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :borderRadius="0"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :borderColor="'grey'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :borderColor="'grey'"
                            :borderColorHover="'grey darken-2'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'borderColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :borderColorActive="'white'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'backgroundColor & backgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :backgroundColor="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-2'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'backgroundColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :backgroundColorActive="'light-blue darken-2'"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'shadow'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :shadow="true"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'no shadowActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :shadowActive="false"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'loading'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :loading="true"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-capsule
                            :items="WGroupRadioCapsule.object.items"
                            v-model="WGroupRadioCapsule.object.select"
                            :editable="false"
                        ></w-group-radio-capsule>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-capsule'"
                        :casename="'sizePadding & borderRadius & textColor & iconColor & backgroundColor & backgroundColorHover & backgroundColorActive & shadowActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <div style="padding:0px 10px; background:linear-gradient(60deg,#ab47bc,#7b1fa2); box-shadow:0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);">
                            <w-group-radio-capsule
                                :items="WGroupRadioCapsule.object.items"
                                v-model="WGroupRadioCapsule.object.select"
                                :sizePadding="'12px 27px'"
                                :borderRadius="5"
                                :textColor="'white'"
                                :textColorHover="'white'"
                                :textColorActive="'white'"
                                :iconColor="'white'"
                                :iconColorHover="'white'"
                                :iconColorActive="'white'"
                                :backgroundColor="'rgba(255,255,255,0)'"
                                :backgroundColorHover="'rgba(255,255,255,0)'"
                                :backgroundColorActive="'rgba(255,255,255,0.15)'"
                                :shadowActive="false"
                            ></w-group-radio-capsule>
                        </div>

                    </w-shell-material>

                </div>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiAccountSupervisorCircle, mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WGroupRadioCapsule from './components/WGroupRadioCapsule.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupRadioCapsule,
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
            mdiAccountSupervisorCircle,
            mdiViewDashboard,
            mdiClockTimeEightOutline,
            mdiBlenderSoftware,
            mdiSpoonSugar,
            mdiApple,
            'WGroupRadioCapsule': {
                'string': {
                    'items': [
                        'Dashboard',
                        'Schedule',
                        'Profile',
                        'History',
                        'Apple',
                        '橘子'
                    ],
                    'select': 'Apple'
                },
                'object': {
                    'items': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                        },
                        {
                            text: 'Schedule',
                            icon: mdiClockTimeEightOutline,
                        },
                        {
                            text: 'Profile',
                            icon: mdiBlenderSoftware,
                        },
                        {
                            text: 'History',
                            icon: mdiSpoonSugar,
                        },
                        {
                            text: '蘋果',
                            icon: mdiApple,
                        },
                    ],
                    'select': {
                        text: 'Dashboard',
                        icon: mdiViewDashboard,
                    }
                },
                'objectTP': {
                    'items': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                            tooltip: 'tooltip for Dashboard',
                        },
                        {
                            text: 'Schedule',
                            icon: mdiClockTimeEightOutline,
                            tooltip: 'tooltip for Schedule',
                        },
                        {
                            text: 'Profile',
                            icon: mdiBlenderSoftware,
                            tooltip: 'tooltip for Profile',
                        },
                        {
                            text: 'History',
                            icon: mdiSpoonSugar,
                            tooltip: 'tooltip for History',
                        },
                        {
                            text: '蘋果',
                            icon: mdiApple,
                            tooltip: 'tooltip for 蘋果',
                        },
                    ],
                    'select': {
                        text: 'Dashboard',
                        icon: mdiAccountSupervisorCircle,
                        tooltip: 'tooltip for Dashboard',
                    }
                },
                'objectFA': {
                    'items': [
                        {
                            text: 'Dashboard',
                            icon: 'fa fa-address-book',
                        },
                        {
                            text: 'Schedule',
                            icon: 'fa fa-address-card',
                        },
                        {
                            text: 'Profile',
                            icon: 'fa fa-american-sign-language-interpreting',
                        },
                        {
                            text: 'History',
                            icon: 'fa fa-balance-scale',
                        },
                        {
                            text: '蘋果',
                            icon: 'fa fa-heartbeat',
                        },
                    ],
                    'select': {
                        text: 'Dashboard',
                        icon: 'fa fa-address-book',
                    }
                },
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
