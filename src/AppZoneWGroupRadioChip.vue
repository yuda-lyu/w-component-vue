<template>
    <div>


        <div class="head1">w-group-radio-chip</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.string.items"
                        v-model="WGroupRadioChip.string.select"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'icon (material)'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'icon (fontawesome)'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.objectFA.items"
                        v-model="WGroupRadioChip.objectFA.select"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconShiftLeft'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :iconShiftLeft="5"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'tooltip'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.objectTP.items"
                        v-model="WGroupRadioChip.objectTP.select"
                        :tooltip="'測試中文tooltip'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'sizePadding & iconSize & textFontSize'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :sizePadding="'10px 24px'"
                        :iconSize="26"
                        :textFontSize="'0.9rem'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'textColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :textColor="'grey darken-1'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :textColor="'grey darken-1'"
                        :textColorHover="'orange darken-3'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'textColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :textColorActive="'white'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconColor & iconColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :iconColor="'orange'"
                        :iconColorHover="'orange darken-2'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :iconColorActive="'yellow'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderRadius'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :borderRadius="0"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :borderColor="'grey'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :borderColor="'grey'"
                        :borderColorHover="'grey darken-2'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :borderColorActive="'white'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'backgroundColor & backgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :backgroundColor="'grey lighten-4'"
                        :backgroundColorHover="'grey lighten-2'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'backgroundColorActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :backgroundColorActive="'light-blue darken-2'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'shadow'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :shadow="true"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'shadow & shadowStyle'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :shadow="true"
                        :shadowStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                        _shadowStyle="'0 3px 1px -2px {backgroundColorAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorAlpha=0.12}'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'shadowActiveStyle'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :shadowActiveStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                        _shadowActiveStyle="'0 3px 1px -2px {backgroundColorActiveAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorActiveAlpha=0.12}'"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'no shadowActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :shadowActive="false"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'slot & shadow'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.string.items"
                        v-model="WGroupRadioChip.string.select"
                        :shadow="true"
                        :backgroundColorActive="'grey'"
                    >
                        <template v-slot="props">
                            <div style="display:flex; align-items:center;">
                                <div
                                    style="margin:2px 5px 2px 2px; user-select:none; padding:2px 12px; font-size:0.75rem; color:#fff; background:#aa00ff; border-radius:12px; box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);"
                                >{{props.item.data}}</div>
                                <div
                                    style="margin:2px; user-select:none; padding:2px 12px; font-size:0.75rem; color:#fff; background:#00acc1; border-radius:12px; box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);"
                                >View</div>
                            </div>
                        </template>
                    </w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'loading'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :loading="true"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-radio-chip
                        :items="WGroupRadioChip.object.items"
                        v-model="WGroupRadioChip.object.select"
                        :editable="false"
                    ></w-group-radio-chip>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'sizePadding & borderRadius & textColor & iconColor & backgroundColor & backgroundColorHover & backgroundColorActive & shadowActive'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <div style="padding:0px 10px; background:linear-gradient(60deg,#ab47bc,#7b1fa2); box-shadow:0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);">
                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
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
                        ></w-group-radio-chip>
                    </div>

                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.string.items"
                            v-model="WGroupRadioChip.string.select"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'icon (material)'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'icon (fontawesome)'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.objectFA.items"
                            v-model="WGroupRadioChip.objectFA.select"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconShiftLeft'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :iconShiftLeft="5"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'tooltip'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.objectTP.items"
                            v-model="WGroupRadioChip.objectTP.select"
                            :tooltip="'測試中文tooltip'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'sizePadding & iconSize & textFontSize'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :sizePadding="'10px 24px'"
                            :iconSize="26"
                            :textFontSize="'0.9rem'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'textColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :textColor="'grey darken-1'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :textColor="'grey darken-1'"
                            :textColorHover="'orange darken-3'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'textColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :textColorActive="'white'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconColor & iconColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :iconColor="'orange'"
                            :iconColorHover="'orange darken-2'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'iconColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :iconColorActive="'yellow'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderRadius'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :borderRadius="0"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :borderColor="'grey'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :borderColor="'grey'"
                            :borderColorHover="'grey darken-2'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'borderColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :borderColorActive="'white'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'backgroundColor & backgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :backgroundColor="'grey lighten-4'"
                            :backgroundColorHover="'grey lighten-2'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'backgroundColorActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :backgroundColorActive="'light-blue darken-2'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'shadow'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :shadow="true"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'shadow & shadowStyle'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :shadow="true"
                            :shadowStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                            _shadowStyle="'0 3px 1px -2px {backgroundColorAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorAlpha=0.12}'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'shadowActiveStyle'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :shadowActiveStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                            _shadowActiveStyle="'0 3px 1px -2px {backgroundColorActiveAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorActiveAlpha=0.12}'"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'no shadowActive'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :shadowActive="false"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'slot & shadow'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.string.items"
                            v-model="WGroupRadioChip.string.select"
                            :shadow="true"
                            :backgroundColorActive="'grey'"
                        >
                            <template v-slot="props">
                                <div style="display:flex;">
                                    <v-chip
                                        style="transform:scale(0.9); box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                                        small
                                        rounded
                                        dark
                                        color="purple accent-4"
                                    >{{props.item.data}}</v-chip>
                                    <v-chip
                                        style="transform:scale(0.9); box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                                        small
                                        rounded
                                        dark
                                        color="cyan darken-1"
                                    >View</v-chip>
                                </div>
                            </template>
                        </w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'loading'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :loading="true"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiAccountSupervisorCircle"
                    >

                        <w-group-radio-chip
                            :items="WGroupRadioChip.object.items"
                            v-model="WGroupRadioChip.object.select"
                            :editable="false"
                        ></w-group-radio-chip>

                    </w-shell-material>

                </div>


                <div class="bk">
                    <demolink
                        :kbname="'w-group-radio-chip'"
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
                            <w-group-radio-chip
                                :items="WGroupRadioChip.object.items"
                                v-model="WGroupRadioChip.object.select"
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
                            ></w-group-radio-chip>
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
import WGroupRadioChip from './components/WGroupRadioChip.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupRadioChip,
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
            'WGroupRadioChip': {
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
