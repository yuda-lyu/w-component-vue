<template>
    <div>


        <div class="head1">w-group-tags</div>


        <div style="padding:0px;">


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
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
                    v-model="WGroupTags.strings"
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
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'shiftLeft'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                    :shiftLeft="-3"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'marginStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                    _marginStyle="{v:0,h:20}"
                    :marginStyle="{top:0,right:25,bottom:0,left:0}"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'inputTextButtonTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :inputTextButtonTooltip="'新增'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'inputTextColor & inputTextBorderColor & inputTextBorderColorFocus & inputTextButtonColor & inputTextButtonColorHover & inputTextBackgroundColor & inputTextBackgroundColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :inputTextColor="'indigo darken-1'"
                    :inputTextBorderColor="'indigo darken-1'"
                    :inputTextBorderColorFocus="'indigo darken-2'"
                    :inputTextButtonColor="'indigo'"
                    :inputTextButtonColorFocus="'indigo darken-1'"
                    :inputTextBackgroundColor="'white'"
                    :inputTextBackgroundColorFocus="'#f2f2ff'"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    @click-add="ckBtnAddObj"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & keyText'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsText"
                    :keyText="'value'"
                    @click-add="ckBtnAddObjText"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objectsText</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & keyIcon'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsIcon"
                    :keyIcon="'icon'"
                    @click-add="ckBtnAddObjIcon"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objectsIcon</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & keyTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsTooltip"
                    :keyTooltip="'tooltip'"
                    @click-add="ckBtnAddObjTooltip"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objectsTooltip</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & addButtonText & addButtonTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :addButtonText="'新增'"
                    :addButtonTooltip="'新增項目'"
                    @click-add="ckBtnAddObj"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & addButtonTextColor & addButtonTextColorHover & addButtonIconColor & addButtonIconColorHover & addButtonBackgroundColor &  addButtonBackgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :addButtonTextColor="'white'"
                    :addButtonTextColorHover="'white'"
                    :addButtonIconColor="'white'"
                    :addButtonIconColorHover="'white'"
                    :addButtonBackgroundColor="'yellow darken-3'"
                    :addButtonBackgroundColorHover="'yellow darken-2'"
                    @click-add="ckBtnAddObj"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'slot item'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                >
                    <template v-slot:items="props">
                        <div style="display:flex; align-items:center;">
                            <div style="display:flex; margin-right:5px;" msg="inline-block元素會無法被垂直置中故使用flex">
                                <w-button-chip
                                    :text="props.item"
                                    :textFontSize="'0.75rem'"
                                    :paddingStyle="{v:0,h:8}"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(250,50,120,0.9)'"
                                    :backgroundColorHover="'rgba(250,50,120,0.9)'"
                                    @click="ckBtnItem1(props)"
                                ></w-button-chip>
                            </div>
                            <div style="display:flex;" msg="inline-block元素會無法被垂直置中故使用flex">
                                <w-button-chip
                                    :text="'View'"
                                    :textFontSize="'0.75rem'"
                                    :paddingStyle="{v:0,h:8}"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(200,20,170,0.9)'"
                                    :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                    @click="ckBtnItem2(props)"
                                ></w-button-chip>
                            </div>
                        </div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & slot item'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsSlotText"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                    @click-add="ckBtnAddObjSlotText"
                >
                    <template v-slot:items="props">
                        <div style="display:flex; align-items:center;">
                            <div style="display:flex; margin-right:5px;" msg="inline-block元素會無法被垂直置中故使用flex">
                                <w-button-chip
                                    :text="props.item.slotTextKind"
                                    :textFontSize="'0.75rem'"
                                    :paddingStyle="{v:0,h:8}"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(250,50,120,0.9)'"
                                    :backgroundColorHover="'rgba(250,50,120,0.9)'"
                                    @click="ckBtnItem1(props)"
                                ></w-button-chip>
                            </div>
                            <div style="display:flex;" msg="inline-block元素會無法被垂直置中故使用flex">
                                <w-button-chip
                                    :text="props.item.slotTextLevel"
                                    :textFontSize="'0.75rem'"
                                    :paddingStyle="{v:0,h:8}"
                                    :textColor="'#fff'"
                                    :textColorHover="'#fff'"
                                    :backgroundColor="'rgba(200,20,170,0.9)'"
                                    :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                    @click="ckBtnItem2(props)"
                                ></w-button-chip>
                            </div>
                        </div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objectsSlotText</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'slot input'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                >
                    <template v-slot:input>
                        <w-button-chip
                            :icon="mdiPlusCircle"
                            :iconColor="'#fff'"
                            :iconColorHover="'#fff'"
                            :text="'Add'"
                            :textColor="'#fff'"
                            :textColorHover="'#fff'"
                            :backgroundColor="'rgba(200,20,170,0.9)'"
                            :backgroundColorHover="'rgba(200,20,170,0.9)'"
                            @click="ckBtnAddString"
                        ></w-button-chip>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'paddingStyle & icon & iconSize & textFontSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :paddingStyle="{v:10,h:24}"
                    :icon="mdiCodepen"
                    :iconSize="26"
                    :textFontSize="'0.9rem'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :textColor="'light-blue darken-3'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'textColor & textColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :textColor="'purple darken-1'"
                    :textColorHover="'purple darken-4'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'icon & iconColor & iconColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :iconColor="'orange'"
                    :iconColorHover="'orange darken-2'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :borderRadius="0"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'borderColor & borderColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :borderColor="'transparent'"
                    :borderColorHover="'grey darken-1'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'backgroundColor & backgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :backgroundColor="'#fea'"
                    :backgroundColorHover="'#ffd888'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'no shadow & borderColor & borderColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :borderColor="'grey lighten-1'"
                    :borderColorHover="'grey'"
                    :shadow="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'shadowStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :shadowStyle="'0 12px 20px -10px rgba(250,120,155,0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(250,120,155,0.2)'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'modify prog by callback in click'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtnModProg"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'progColor & progBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :progColor="'rgba(250,50,150,0.4)'"
                    :progBackgroundColor="'rgba(250,50,150,0.075)'"
                    @click="ckBtnModProg"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'modify loading by callback in click'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtnModLoading"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'modify loading & textColor & textColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :textColor="'rgba(255,30,60,0.9)'"
                    :textColorHover="'rgba(255,20,50,1)'"
                    @click="ckBtnModLoading"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'closeWithInterceptor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :closeWithInterceptor="true"
                    @click-close="ckBtnClosePm"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'not draggable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :draggable="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editable="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'editableClose(no close button)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editableClose="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'editableInput(no slot input)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editableInput="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'not editable & nodata'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.empty"
                    :editable="false"
                    :nodata="'無'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: empty</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'useActive & valueActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :useActive="true"
                    :valueActive.sync="WGroupTags.stringActive"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'slot item & useActive & valueActive & paddingStyle & textColor & textColorHover & textColorActive & backgroundColor & backgroundColorActive & shadowActiveStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :useActive="true"
                    :valueActive.sync="WGroupTags.stringActive"
                    :paddingStyle="{v:1,h:13}"
                    :textColor="'pink lighten-1'"
                    :textColorHover="'red accent-3'"
                    :textColorActive="'white'"
                    :backgroundColor="'white'"
                    :backgroundColorActive="'pink lighten-1'"
                    :shadowActiveStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                >
                    <template v-slot:items="props">
                        <div style="display:flex; align-items:center;">

                            <div :style="`display:inline-block; border-radius:10px; font-size:0.85rem; user-select:none; ${props.active?`padding:0px 12px; color:#263238; background:rgba(255,255,255,0.7);`:`padding:0px 12px; color:#9E9E9E; background:rgba(100,100,100,0.1);`}`">
                                Menu
                            </div>

                        </div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & slot item & editableInput(no slot input) & useActive & valueActive & paddingStyle & textColor & textColorHover & textColorActive & backgroundColor & backgroundColorActive & shadowActiveStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsSlotText"
                    :editableInput="false"
                    :useActive="true"
                    :valueActive.sync="WGroupTags.objectsSlotTextActive"
                    :paddingStyle="{v:1,h:13}"
                    :textColor="'pink lighten-1'"
                    :textColorHover="'red accent-3'"
                    :textColorActive="'white'"
                    :backgroundColor="'white'"
                    :backgroundColorActive="'pink lighten-1'"
                    :shadowActiveStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                >
                    <template v-slot:items="props">
                        <div style="display:flex; align-items:center;">

                            <div :style="`display:inline-block; border-radius:10px; font-size:0.85rem; user-select:none; ${props.active?`padding:0px 12px; color:#263238; background:rgba(255,255,255,0.7);`:`padding:0px 12px; color:#9E9E9E; background:rgba(100,100,100,0.1);`}`">
                                {{props.item.slotTextKind}}
                            </div>

                        </div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objectsSlotText</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'enableCloseEventOnly'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    :enableCloseEventOnly="true"
                    v-model="WGroupTags.strings"
                    @click-close="ckBtnClose"
                ></w-group-tags>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & slot item & useColorsFromItem & editableInput(no slot input) & no shadow & no shadowActive & useActive & valueActive & paddingStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsColor"
                    :editableInput="false"
                    :shadow="false"
                    :shadowActive="false"
                    :useActive="true"
                    :valueActive.sync="WGroupTags.objectsColorActive"
                    :paddingStyle="{v:1,h:12}"
                    :useColorsFromItem="true"
                >
                    <template v-slot:items="props">
                        <div style="display:flex; align-items:center;">

                            <div :style="`display:inline-block; border-radius:10px; font-size:0.85rem; user-select:none; ${props.active?`padding:0px 12px; color:#263238; background:rgba(255,255,255,0.7);`:`padding:0px 12px; color:#666; background:#fff;`}`">
                                Menu
                            </div>

                        </div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objectsColor</div>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiEmailVariant, mdiChartBubble, mdiCodepen, mdiPlusCircle } from '@mdi/js'
import demolink from './components/demolink.vue'
import WGroupTags from './components/WGroupTags.vue'
import WButtonChip from './components/WButtonChip.vue'


export default {
    components: {
        demolink,
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
                'strings': [
                    'Dashboard',
                    'Schedule',
                    'Profile',
                    'History',
                    'Map',
                    '聯絡方式'
                ],
                'stringActive': 'Dashboard',
                'objects': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                    },
                ],
                'objectsText': [
                    {
                        id: 'id-Dashboard',
                        value: 'cmDashboard',
                    },
                    {
                        id: 'id-Schedule',
                        value: 'cmSchedule',
                    },
                    {
                        id: 'id-Profile',
                        value: 'cmProfile',
                    },
                    {
                        id: 'id-History',
                        value: 'cmHistory',
                    },
                    {
                        id: 'id-Map',
                        value: 'cmMap',
                    },
                    {
                        id: 'id-contact',
                        value: 'cm聯絡方式',
                    },
                ],
                'objectsIcon': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                        icon: 'fab fa-accessible-icon',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                        icon: 'fab fa-asymmetrik',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                        icon: 'fas fa-baby',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                        icon: 'fas fa-balance-scale',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                        icon: 'fas fa-blender',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                        icon: 'fas fa-hands-helping',
                    },
                ],
                'objectsTooltip': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                        tooltip: 'Dashboard for tooltip',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                        tooltip: 'Schedule for tooltip',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                        tooltip: 'Profile for tooltip',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                        tooltip: 'History for tooltip',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                        tooltip: 'Map for tooltip',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                        tooltip: '聯絡方式 for tooltip',
                    },
                ],
                'objectsSlotText': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                        slotTextKind: 'Efficacy',
                        slotTextLevel: 'High',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                        slotTextKind: 'Efficacy',
                        slotTextLevel: 'Slow',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                        slotTextKind: 'Basic',
                        slotTextLevel: 'None',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                        slotTextKind: 'Basic',
                        slotTextLevel: 'None',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                        slotTextKind: 'Efficacy',
                        slotTextLevel: 'High',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                        slotTextKind: 'Basic',
                        slotTextLevel: 'None',
                    },
                ],
                'objectsSlotTextActive': {
                    id: 'id-Dashboard',
                    text: 'Dashboard',
                    slotTextKind: 'Efficacy',
                    slotTextLevel: 'High',
                },
                'objectsColor': [
                    {
                        id: 'id-Dashboard',
                        text: 'Dashboard',
                        iconColor: 'pink accent-3',
                        iconColorHover: 'pink accent-3',
                        iconColorActive: 'white',
                        textColor: 'pink accent-3',
                        textColorHover: 'pink accent-3',
                        textColorActive: 'white',
                        borderColor: 'pink accent-3',
                        borderColorHover: 'pink accent-3',
                        borderColorActive: 'pink accent-3',
                        backgroundColor: 'white',
                        backgroundColorHover: 'white',
                        backgroundColorActive: 'pink accent-3',
                    },
                    {
                        id: 'id-Schedule',
                        text: 'Schedule',
                        iconColor: 'pink accent-3',
                        iconColorHover: 'pink accent-3',
                        iconColorActive: 'white',
                        textColor: 'pink accent-3',
                        textColorHover: 'pink accent-3',
                        textColorActive: 'white',
                        borderColor: 'pink accent-3',
                        borderColorHover: 'pink accent-3',
                        borderColorActive: 'pink accent-3',
                        backgroundColor: 'white',
                        backgroundColorHover: 'white',
                        backgroundColorActive: 'pink accent-3',
                    },
                    {
                        id: 'id-Profile',
                        text: 'Profile',
                        iconColor: 'pink accent-3',
                        iconColorHover: 'pink accent-3',
                        iconColorActive: 'white',
                        textColor: 'pink accent-3',
                        textColorHover: 'pink accent-3',
                        textColorActive: 'white',
                        borderColor: 'pink accent-3',
                        borderColorHover: 'pink accent-3',
                        borderColorActive: 'pink accent-3',
                        backgroundColor: 'white',
                        backgroundColorHover: 'white',
                        backgroundColorActive: 'pink accent-3',
                    },
                    {
                        id: 'id-History',
                        text: 'History',
                        iconColor: 'purple darken-1',
                        iconColorHover: 'purple darken-1',
                        iconColorActive: 'white',
                        textColor: 'purple darken-1',
                        textColorHover: 'purple darken-1',
                        textColorActive: 'white',
                        borderColor: 'purple darken-1',
                        borderColorHover: 'purple darken-1',
                        borderColorActive: 'purple darken-1',
                        backgroundColor: 'white',
                        backgroundColorHover: 'white',
                        backgroundColorActive: 'purple darken-1',
                    },
                    {
                        id: 'id-Map',
                        text: 'Map',
                        iconColor: 'purple darken-1',
                        iconColorHover: 'purple darken-1',
                        iconColorActive: 'white',
                        textColor: 'purple darken-1',
                        textColorHover: 'purple darken-1',
                        textColorActive: 'white',
                        borderColor: 'purple darken-1',
                        borderColorHover: 'purple darken-1',
                        borderColorActive: 'purple darken-1',
                        backgroundColor: 'white',
                        backgroundColorHover: 'white',
                        backgroundColorActive: 'purple darken-1',
                    },
                    {
                        id: 'id-contact',
                        text: '聯絡方式',
                        iconColor: 'purple darken-1',
                        iconColorHover: 'purple darken-1',
                        iconColorActive: 'white',
                        textColor: 'purple darken-1',
                        textColorHover: 'purple darken-1',
                        textColorActive: 'white',
                        borderColor: 'purple darken-1',
                        borderColorHover: 'purple darken-1',
                        borderColorActive: 'purple darken-1',
                        backgroundColor: 'white',
                        backgroundColorHover: 'white',
                        backgroundColorActive: 'purple darken-1',
                    },
                ],
                'objectsColorActive': {
                    id: 'id-Dashboard',
                    text: 'Dashboard',
                    iconColor: 'pink accent-3',
                    iconColorHover: 'pink accent-3',
                    iconColorActive: 'white',
                    textColor: 'pink accent-3',
                    textColorHover: 'pink accent-3',
                    textColorActive: 'white',
                    borderColor: 'pink accent-3',
                    borderColorHover: 'pink accent-3',
                    borderColorActive: 'pink accent-3',
                    backgroundColor: 'white',
                    backgroundColorHover: 'white',
                    backgroundColorActive: 'pink accent-3',
                },
                'empty': [],
            },
            'actions': [
            ],
        }
    },
    methods: {
        genName: function() {
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
            let radix = chars.length
            let len = 4
            let uuid = []
            for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
            return uuid.join('')
        },
        ckBtn: function(msg) {
            console.log('ckBtn', msg)
        },
        ckBtnAddString: function() {
            console.log('ckBtnAddString')
            let name = this.genName()
            this.WGroupTags.strings.push(name)
        },
        ckBtnAddObj: function() {
            console.log('ckBtnAddObj')
            let name = this.genName()
            this.WGroupTags.objects.push({ id: 'id-' + name, text: name })
        },
        ckBtnAddObjText: function() {
            console.log('ckBtnAddObjText')
            let name = this.genName()
            this.WGroupTags.objectsText.push({ id: 'id-' + name, value: name })
        },
        ckBtnAddObjIcon: function() {
            console.log('ckBtnAddObjIcon')
            let name = this.genName()
            this.WGroupTags.objectsIcon.push({ id: 'id-' + name, text: name, icon: 'fas fa-hands-wash' })
        },
        ckBtnAddObjTooltip: function() {
            console.log('ckBtnAddObjTooltip')
            let name = this.genName()
            this.WGroupTags.objectsTooltip.push({ id: 'id-' + name, text: name, tooltip: name + ' for tooltip' })
        },
        ckBtnAddObjSlotText: function() {
            console.log('ckBtnAddObjSlotText')
            let name = this.genName()
            this.WGroupTags.objectsSlotText.push({ id: 'id-' + name, text: name, slotTextKind: 'Basic', slotTextLevel: 'None' })
        },
        ckBtnClose: function(msg) {
            console.log('ckBtnClose', msg)
        },
        ckBtnClosePm: function(msg) {
            console.log('ckBtnClosePm', msg)
            alert('pm.resolve() for close')
            msg.pm.resolve()
            //msg.pm.reject()
        },
        ckBtnItem1: function(msg) {
            console.log('ckBtnItem1', msg)
        },
        ckBtnItem2: function(msg) {
            console.log('ckBtnItem2', msg)
        },
        ckBtnModProg: function(msg) {
            console.log('ckBtnModProg', msg)

            //lock
            msg.setProg(0) //先設定prog為0使按鈕自動上鎖禁止高頻觸發

            try {
                // if (Math.random() < 0.5) { //隨機添加出錯
                //     throw new Error('Whoops!')
                // }
                setTimeout(function() { //模擬呼叫api時至少等1s才有反應能setProg, 若沒先設定prog為0按鈕不會上鎖
                    let n = 0
                    let t = setInterval(function() {
                        n += 0.5
                        msg.setProg(n)
                        if (n >= 100) {
                            //vo.WButtonChip.prog = null //當prog>=100時會由內部自動設定為null
                            clearInterval(t)
                        }
                    }, 10)
                }, 1000)
            }
            catch (err) {

                //unlock
                msg.setProg(null)

            }

        },
        ckBtnModLoading: function(msg) {
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
