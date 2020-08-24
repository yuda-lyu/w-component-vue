<template>
    <div>


        <div class="head1">w-group-tags</div>


        <div style="padding:0px;">


            <template v-if="modeShell==='pure'">


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'icon (material)'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="mdiChartBubble"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'icon (fontawesome)'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="'fas fa-clipboard-check'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'iconShiftLeft'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="'fas fa-clipboard-check'"
                        :iconShiftLeft="-3"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'funTooltip'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :funTooltip="(v)=>{return '測試中文tooltip: '+v}"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'slot item'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        @click="ckBtn"
                        @click-close="ckBtnClose"
                    >
                        <template v-slot:item="props">
                            <div style="display:flex; align-items:center;">
                                <div style="display:flex; margin-right:5px;">
                                    <w-button-chip
                                        :text="props.item"
                                        :textFontSize="'0.75rem'"
                                        :sizePadding="'0px 8px'"
                                        :textColor="'#fff'"
                                        :textColorHover="'#fff'"
                                        :backgroundColor="'rgba(250,50,120,0.9)'"
                                        :backgroundColorHover="'rgba(250,50,120,0.9)'"
                                        @click.stop="ckBtnItem1(props)"
                                    ></w-button-chip>
                                </div>
                                <div style="display:flex;">
                                    <w-button-chip
                                        :text="'View'"
                                        :textFontSize="'0.75rem'"
                                        :sizePadding="'0px 8px'"
                                        :textColor="'#fff'"
                                        :textColorHover="'#fff'"
                                        :backgroundColor="'rgba(200,20,170,0.9)'"
                                        :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                        @click.stop="ckBtnItem2(props)"
                                    ></w-button-chip>
                                </div>
                            </div>
                        </template>
                    </w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'slot input'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        @click="ckBtn"
                        @click-close="ckBtnClose"
                    >
                        <template v-slot:input>
                            <div style="display:flex; align-items:center;">
                                <w-button-chip
                                    :icon="mdiPlusCircle"
                                    :iconColor="'#fff'"
                                    :iconColorHover="'#fff'"
                                    :text="'Add'"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(200,20,170,0.9)'"
                                    :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                    @click.stop="ckBtnAdd"
                                ></w-button-chip>
                            </div>
                        </template>
                    </w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'sizePadding & icon & iconSize & textFontSize'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :sizePadding="'10px 24px'"
                        :icon="mdiCodepen"
                        :iconSize="26"
                        :textFontSize="'0.9rem'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'textColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :textColor="'light-blue darken-3'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :textColor="'purple darken-1'"
                        :textColorHover="'purple darken-4'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'icon & iconColor & iconColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="mdiChartBubble"
                        :iconColor="'orange'"
                        :iconColorHover="'orange darken-2'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'borderRadius'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="mdiChartBubble"
                        :borderRadius="0"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="mdiChartBubble"
                        :borderColor="'transparent'"
                        :borderColorHover="'grey darken-1'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'backgroundColor & backgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="mdiChartBubble"
                        :backgroundColor="'amber lighten-5'"
                        :backgroundColorHover="'amber lighten-4'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'no shadow & borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :borderColor="'grey lighten-1'"
                        :borderColorHover="'grey'"
                        :shadow="false"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'shadowStyle'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :shadowStyle="'0 12px 20px -10px rgba(250,120,155,0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(250,120,155,0.2)'"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'modify prog by callback in click'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        @click="ckBtnModProg"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'progColor & progBackgroundColor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :progColor="'rgba(250,50,150,0.4)'"
                        :progBackgroundColor="'rgba(250,50,150,0.075)'"
                        @click="ckBtnModProg"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'modify loading by callback in click'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        @click="ckBtnModLoading"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'modify loading & textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :textColor="'rgba(255,30,60,0.9)'"
                        :textColorHover="'rgba(255,20,50,1)'"
                        @click="ckBtnModLoading"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'closeWithInterceptor'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="mdiChartBubble"
                        :closeWithInterceptor="true"
                        @click-close="ckBtnClosePm"
                    ></w-group-tags>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'pure'"
                    ></demolink>

                    <w-group-tags
                        v-model="WGroupTags.items"
                        :icon="mdiChartBubble"
                        :editable="false"
                    ></w-group-tags>
                </div>


            </template>


            <template v-if="modeShell==='shell'">


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'default'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'icon (material)'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="mdiChartBubble"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'icon (fontawesome)'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="'fas fa-clipboard-check'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'iconShiftLeft'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="'fas fa-clipboard-check'"
                            :iconShiftLeft="-3"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'funTooltip'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :funTooltip="(v)=>{return '測試中文tooltip: '+v}"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'slot item'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            @click="ckBtn"
                            @click-close="ckBtnClose"
                        >
                            <template v-slot:item="props">
                                <div style="display:flex; align-items:center;">
                                    <div style="display:flex; margin-right:5px;">
                                        <w-button-chip
                                            :text="props.item"
                                            :textFontSize="'0.75rem'"
                                            :sizePadding="'0px 8px'"
                                            :textColor="'#fff'"
                                            :textColorHover="'#fff'"
                                            :backgroundColor="'rgba(250,50,120,0.9)'"
                                            :backgroundColorHover="'rgba(250,50,120,0.9)'"
                                            @click.stop="ckBtnItem1(props)"
                                        ></w-button-chip>
                                    </div>
                                    <div style="display:flex;">
                                        <w-button-chip
                                            :text="'View'"
                                            :textFontSize="'0.75rem'"
                                            :sizePadding="'0px 8px'"
                                            :textColor="'#fff'"
                                            :textColorHover="'#fff'"
                                            :backgroundColor="'rgba(200,20,170,0.9)'"
                                            :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                            @click.stop="ckBtnItem2(props)"
                                        ></w-button-chip>
                                    </div>
                                </div>
                            </template>
                        </w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'slot input'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >

                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'sizePadding & icon & iconSize & textFontSize'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :sizePadding="'10px 24px'"
                            :icon="mdiCodepen"
                            :iconSize="26"
                            :textFontSize="'0.9rem'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'textColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :textColor="'light-blue darken-3'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :textColor="'purple darken-1'"
                            :textColorHover="'purple darken-4'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'icon & iconColor & iconColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="mdiChartBubble"
                            :iconColor="'orange'"
                            :iconColorHover="'orange darken-2'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'borderRadius'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="mdiChartBubble"
                            :borderRadius="0"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="mdiChartBubble"
                            :borderColor="'transparent'"
                            :borderColorHover="'grey darken-1'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'backgroundColor & backgroundColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="mdiChartBubble"
                            :backgroundColor="'amber lighten-5'"
                            :backgroundColorHover="'amber lighten-4'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'no shadow & borderColor & borderColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :borderColor="'grey lighten-1'"
                            :borderColorHover="'grey'"
                            :shadow="false"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'shadowStyle'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :shadowStyle="'0 12px 20px -10px rgba(250,120,155,0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(250,120,155,0.2)'"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'modify prog by callback in click'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            @click="ckBtnModProg"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'progColor & progBackgroundColor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :progColor="'rgba(250,50,150,0.4)'"
                            :progBackgroundColor="'rgba(250,50,150,0.075)'"
                            @click="ckBtnModProg"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'modify loading by callback in click'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            @click="ckBtnModLoading"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'modify loading & textColor & textColorHover'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :textColor="'rgba(255,30,60,0.9)'"
                            :textColorHover="'rgba(255,20,50,1)'"
                            @click="ckBtnModLoading"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'closeWithInterceptor'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="mdiChartBubble"
                            :closeWithInterceptor="true"
                            @click-close="ckBtnClosePm"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


                <div class="bk" style="display:block;">
                    <demolink
                        :kbname="'w-group-tags'"
                        :casename="'not editable'"
                        :kind="'nokind'"
                        :shell="'shell'"
                    ></demolink>

                    <w-shell-material
                        style="margin-top:30px;"
                        :title="'請選擇分頁頁籤'"
                        :leftIcon="mdiEmailVariant"
                    >
                        <w-group-tags
                            v-model="WGroupTags.items"
                            :icon="mdiChartBubble"
                            :editable="false"
                        ></w-group-tags>
                    </w-shell-material>
                </div>


            </template>


        </div>


    </div>
</template>

<script>
import { mdiEmailVariant, mdiChartBubble, mdiCodepen, mdiPlusCircle } from '@mdi/js'
import demolink from './components/demolink.vue'
import WShellMaterial from './components/WShellMaterial.vue'
import WGroupTags from './components/WGroupTags.vue'
import WButtonChip from './components/WButtonChip.vue'


export default {
    components: {
        demolink,
        WShellMaterial,
        WGroupTags,
        WButtonChip,
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
            mdiChartBubble,
            mdiCodepen,
            mdiPlusCircle,
            'WGroupTags': {
                'items': [
                    'Dashboard',
                    'Schedule',
                    'Profile',
                    'History',
                    'Map',
                    '聯絡方式'
                ],
                'empty': [],
            },
            'actions': [
            ],
        }
    },
    methods: {
        ckBtn: function(ev, msg) {
            console.log('ckBtn', msg)
        },
        ckBtnAdd: function(ev) {
            console.log('ckBtnAdd')
            this.WGroupTags.items.push('test')
        },
        ckBtnClose: function(ev, item) {
            console.log('ckBtnClose', item)
        },
        ckBtnClosePm: function(ev, item) {
            console.log('ckBtnClosePm', item)
            alert('pm.resolve() for close')
            item.pm.resolve()
            //item.pm.reject()
        },
        ckBtnItem1: function(msg) {
            console.log('ckBtnItem1', msg)
        },
        ckBtnItem2: function(msg) {
            console.log('ckBtnItem2', msg)
        },
        ckBtnModProg: function(ev, msg) {
            console.log('ckBtnModProg', msg)
            let n = 0
            let t = setInterval(function() {
                n += 0.5
                msg.setProg(n)
                if (n >= 100) {
                    //當prog>=100時會由內部自動設定為null
                    clearInterval(t)
                }
            }, 10)
        },
        ckBtnModLoading: function(ev, msg) {
            console.log('ckBtnModLoading', msg)
            msg.setLoading(true)
            setTimeout(function() {
                msg.setLoading(false)
            }, 2000)
        },
    },
}
</script>

<style scoped>
</style>
