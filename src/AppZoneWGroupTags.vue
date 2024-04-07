<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-tags</span></div>


        <div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'default'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'shiftLeft'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                    :shiftLeft="-3"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'marginStyle'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="'fas fa-clipboard-check'"
                    _marginStyle="{v:0,h:20}"
                    :marginStyle="{top:0,right:25,bottom:0,left:0}"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'inputTextButtonTooltip'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :inputTextButtonTooltip="'新增'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'inputTextWidth'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :inputTextWidth="250"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :suggests="WGroupTags.suggestsStrings"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests & placeholder & noResultsText'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :suggests="WGroupTags.suggestsStrings"
                    :placeholder="'請輸入關鍵字'"
                    :noResultsText="'無符合項目'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests & inputTextColor & inputExpansionIconColor'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :suggests="WGroupTags.suggestsStrings"
                    :inputTextColor="'orange darken-2'"
                    :inputExpansionIconColor="'orange'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests & suggectItemFontSize & suggectItemTextColor & suggectItemTextColorHover & suggectItemBackgroundColor & suggectItemBackgroundColorHover'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :suggests="WGroupTags.suggestsStrings"
                    :suggectItemFontSize="'0.8rem'"
                    :suggectItemTextColor="'orange darken-2'"
                    :suggectItemTextColorHover="'white'"
                    :suggectItemBackgroundColor="'white'"
                    :suggectItemBackgroundColorHover="'orange darken-3'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests & slot suggest & addMode'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :suggests="WGroupTags.suggestsObjects"
                    :addMode="'input'"
                    @click-add="ckInputAddForObject"
                >
                    <template v-slot:suggest="props">
                        <div style="color:#888; font-size:0.70rem;">{{props.item.kind}}</div>
                        <div style="color:#000; font-size:0.85rem;">{{props.item.text}}</div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests & slot suggest & addMode & addWhenInputByOutside'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :suggests="WGroupTags.suggestsObjects"
                    :addMode="'input'"
                    :addWhenInputByOutside="true"
                    @click-add="(msg)=>{ckInputAddForString(msg,'text')}"
                >
                    <template v-slot:suggest="props">
                        <div style="color:#888; font-size:0.70rem;">{{props.item.kind}}</div>
                        <div style="color:#000; font-size:0.85rem;">{{props.item.text}}</div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests & slot suggest & addMode & inputKeyText'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :suggests="WGroupTags.suggestsObjectsName"
                    :addMode="'input'"
                    :inputKeyText="'name'"
                    @click-add="ckInputAddForObject"
                >
                    <template v-slot:suggest="props">
                        <div style="color:#888; font-size:0.70rem;">{{props.item.kind}}</div>
                        <div style="color:#000; font-size:0.85rem;">{{props.item.name}}</div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'suggests & slot suggest & addMode & inputKeyText & addWhenInputByOutside'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :suggests="WGroupTags.suggestsObjectsName"
                    :addMode="'input'"
                    :inputKeyText="'name'"
                    :addWhenInputByOutside="true"
                    @click-add="(msg)=>{ckInputAddForString(msg,'name')}"
                >
                    <template v-slot:suggest="props">
                        <div style="color:#888; font-size:0.70rem;">{{props.item.kind}}</div>
                        <div style="color:#000; font-size:0.85rem;">{{props.item.name}}</div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'inputTextFontSize & inputTextColor & inputTextBorderColor & inputTextBorderColorHover & inputTextBorderColorFocus & inputTextButtonIcon & inputTextButtonColor & inputTextButtonColorHover & inputTextButtonColorHover & inputTextBackgroundColor & inputTextBackgroundColorHover & inputTextBackgroundColorFocus'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :inputTextFontSize="'0.8rem'"
                    :inputTextColor="'indigo darken-1'"
                    :inputTextBorderColor="'indigo darken-1'"
                    :inputTextBorderColorHover="'indigo darken-1'"
                    :inputTextBorderColorFocus="'indigo darken-2'"
                    :inputTextButtonIcon="mdiCloudPlus"
                    :inputTextButtonColor="'indigo'"
                    :inputTextButtonColorHover="'indigo'"
                    :inputTextButtonColorFocus="'indigo darken-1'"
                    :inputTextBackgroundColor="'white'"
                    :inputTextBackgroundColorHover="'#fafaff'"
                    :inputTextBackgroundColorFocus="'#f2f2ff'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items'"
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
                    :casename="'object items & addButtonIcon & addButtonTextColor & addButtonTextColorHover & addButtonIconColor & addButtonIconColorHover & addButtonBackgroundColor &  addButtonBackgroundColorHover'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :addButtonIcon="mdiCloudPlus"
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
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center;">
                            <div style="margin-left:-9px; margin-right:5px; display:flex;">
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
                            <div style="display:flex;">
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
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsSlotText"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                    @click-add="ckBtnAddObjSlotText"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center;">
                            <div style="margin-left:-9px; margin-right:5px; display:flex;">
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
                            <div style="display:flex;">
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
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    @click="ckBtnModProg"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'progColor & progBackgroundColor'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
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
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    @click="ckBtnModLoading"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'closeWithInterceptor'"
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
                    :casename="'enableCloseEventOnly'"
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
                    :casename="'not draggable'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :draggable="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :icon="mdiChartBubble"
                    :draggable="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'not editable'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editable="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :icon="mdiChartBubble"
                    :editable="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'editableClose(no close button)'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editableClose="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :icon="mdiChartBubble"
                    :editableClose="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'editableInput(no input text)'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editableInput="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :icon="mdiChartBubble"
                    :editableInput="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'editableClose(no close button) & editableInput(no input text)'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :editableClose="false"
                    :editableInput="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>

                <w-group-tags
                    v-model="WGroupTags.objects"
                    :icon="mdiChartBubble"
                    :editableClose="false"
                    :editableInput="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objects</div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'no enableNodata'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.empty"
                    :enableNodata="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: empty</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'enableNodata'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.empty"
                    :enableNodata="true"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: empty</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'enableNodata & nodata & editableClose(no close button) & editableInput(no input text)'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.empty"
                    :editableClose="false"
                    :editableInput="false"
                    :enableNodata="true"
                    :nodata="'無'"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: empty</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'iconColor & iconColorHover & textColor & textColorHover & borderColor & borderColorHover & backgroundColor & backgroundColorHover & not draggable & no shadow & editableClose(no close button) & editableInput(no input text)'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :icon="mdiChartBubble"
                    :iconColor="'pink darken-1'"
                    :iconColorHover="'pink'"
                    :textColor="'pink darken-1'"
                    :textColorHover="'pink'"
                    :borderColor="'pink'"
                    :borderColorHover="'pink lighten-3'"
                    :backgroundColor="'transparent'"
                    :backgroundColorHover="'transparent'"
                    :shadow="false"
                    :draggable="false"
                    :editableClose="false"
                    :editableInput="false"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'enableActive & valueActive'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :enableActive="true"
                    :valueActive.sync="WGroupTags.stringActive"
                ></w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'slot item & enableActive & valueActive & paddingStyle & textColor & textColorHover & textColorActive & backgroundColor & backgroundColorActive & shadowActiveStyle'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.strings"
                    :enableActive="true"
                    :valueActive.sync="WGroupTags.stringActive"
                    :paddingStyle="{v:1,h:13}"
                    :textColor="'pink lighten-1'"
                    :textColorHover="'red accent-3'"
                    :textColorActive="'white'"
                    :backgroundColor="'white'"
                    :backgroundColorActive="'pink lighten-1'"
                    :shadowActiveStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center;">

                            <div :style="`margin-left:-9px; display:inline-block; border-radius:10px; font-size:0.85rem; user-select:none; padding:0px 12px; ${props.active?'color:#263238; background:rgba(255,255,255,0.7);':'color:#888; background:rgba(100,100,100,0.1);'}`">
                                Menu
                            </div>

                            <div :style="`display:inline-block; font-size:0.85rem; user-select:none; padding:0px 6px; ${props.active?'color:#fff;':'color:#444;'}`">
                                {{props.item}}
                            </div>

                        </div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: strings</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & slot item & editableInput(no input button) & enableActive & valueActive & paddingStyle & textColor & textColorHover & textColorActive & backgroundColor & backgroundColorActive & shadowActiveStyle'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsSlotText"
                    :editableInput="false"
                    :enableActive="true"
                    :valueActive.sync="WGroupTags.objectsSlotTextActive"
                    :paddingStyle="{v:1,h:13}"
                    :textColor="'pink lighten-1'"
                    :textColorHover="'red accent-3'"
                    :textColorActive="'white'"
                    :backgroundColor="'white'"
                    :backgroundColorActive="'pink lighten-1'"
                    :shadowActiveStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center;">

                            <div :style="`margin-left:-9px; display:inline-block; border-radius:10px; font-size:0.85rem; user-select:none; padding:0px 12px; ${props.active?'color:#263238; background:rgba(255,255,255,0.7);':'color:#888; background:rgba(100,100,100,0.1);'}`">
                                {{props.item.slotTextKind}}
                            </div>

                            <div :style="`display:inline-block; font-size:0.85rem; user-select:none; padding:0px 6px; ${props.active?'color:#fff;':'color:#444;'}`">
                                {{props.item.text}}
                            </div>

                        </div>
                    </template>
                </w-group-tags>

                <div style="padding-left:5px; font-size:0.9rem; color:#ea6;">binding: objectsSlotText</div>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-group-tags'"
                    :casename="'object items & slot item & enableColorsFromItem & editableInput(no input button) & no shadow & no shadowActive & enableActive & valueActive & paddingStyle'"
                ></demolink>

                <w-group-tags
                    v-model="WGroupTags.objectsColor"
                    :editableInput="false"
                    :shadow="false"
                    :shadowActive="false"
                    :enableActive="true"
                    :valueActive.sync="WGroupTags.objectsColorActive"
                    :paddingStyle="{v:1,h:12}"
                    :enableColorsFromItem="true"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center;">

                            <div :style="`margin-left:-9px; display:inline-block; border-radius:10px; font-size:0.85rem; user-select:none; padding:0px 12px; ${props.active?'color:#263238; background:rgba(255,255,255,0.7);':'color:#888; background:rgba(100,100,100,0.1);'}`">
                                Menu
                            </div>

                            <div :style="`display:inline-block; font-size:0.85rem; user-select:none; padding:0px 6px; ${props.active?'color:#fff;':'color:#444;'}`">
                                {{props.item.text}}
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
import { mdiEmailVariant, mdiChartBubble, mdiCodepen, mdiPlusCircle, mdiCloudPlus } from '@mdi/js'
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
    },
    data: function() {
        return {
            mdiEmailVariant,
            mdiChartBubble,
            mdiCodepen,
            mdiPlusCircle,
            mdiCloudPlus,
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
                'suggestsStrings': ['Apple', 'Orange', 'Banana'],
                'suggestsObjects': [
                    {
                        id: 'id-Apple',
                        text: 'Apple',
                        kind: 'Fruit',
                    },
                    {
                        id: 'id-Monkey',
                        text: 'Monkey',
                        kind: 'Animal',
                    },
                    {
                        id: 'id-Tulip',
                        text: 'Tulip',
                        kind: 'Plant',
                    },
                ],
                'suggestsObjectsName': [
                    {
                        id: 'id-Apple',
                        name: 'Apple',
                        kind: 'Fruit',
                    },
                    {
                        id: 'id-Monkey',
                        name: 'Monkey',
                        kind: 'Animal',
                    },
                    {
                        id: 'id-Tulip',
                        name: 'Tulip',
                        kind: 'Plant',
                    },
                ],
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
        ckInputAddForObject: function(msg) {
            console.log('ckInputAddForObject', msg)
            this.WGroupTags.objects.push(msg)
        },
        ckInputAddForString: function(msg, key) {
            console.log('ckInputAddForString', msg, key)
            this.WGroupTags.strings.push(msg[key])
        },
    },
}
</script>

<style scoped>
</style>
