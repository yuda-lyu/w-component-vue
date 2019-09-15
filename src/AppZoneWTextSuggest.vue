<template>
    <div>


        <div class="head1">w-text-suggest</div>


        <div style="padding-left:30px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="'fas fa-clipboard-check'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'icon & iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="5"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :titleColor="'brown'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :small="false"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :editable="false"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk" style="width:240px;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'a lot of items'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItemsLarge"
                            v-model="WTextSuggest.objValueLarge"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'key error'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValueErr"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'items[string] & key[string]'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.strItems"
                            v-model="WTextSuggest.strValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'fullwidth'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text-suggest
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'leftIcon & leftIconColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-text-suggest
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderRadius="5"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :small="false"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :editable="false"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="width:240px;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'a lot of items'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :items="WTextSuggest.objItemsLarge"
                                v-model="WTextSuggest.objValueLarge"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'key error'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValueErr"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'items[string] & key[string]'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :items="WTextSuggest.strItems"
                                v-model="WTextSuggest.strValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'fullwidth'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="'fas fa-clipboard-check'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'icon & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'cyan lighten-2'"
                            :borderColorFocus="'cyan darken-1'"
                            :backgroundColorFocus="'cyan lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="5"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :titleColor="'brown'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :small="false"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :editable="false"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk" style="width:240px;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'a lot of items'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItemsLarge"
                            v-model="WTextSuggest.objValueLarge"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'key error'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValueErr"
                        ></w-text-suggest>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'items[string] & key[string]'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.strItems"
                            v-model="WTextSuggest.strValue"
                        ></w-text-suggest>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'fullwidth'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-suggest
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'leftIcon & leftIconColor & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'cyan lighten-3'"
                                :borderColorFocus="'cyan lighten-1'"
                                :backgroundColorFocus="'cyan lighten-5'"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :borderRadius="5"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :small="false"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :editable="false"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="width:240px;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'a lot of items'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSuggest.objItemsLarge"
                                v-model="WTextSuggest.objValueLarge"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'key error'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValueErr"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'items[string] & key[string]'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSuggest.strItems"
                                v-model="WTextSuggest.strValue"
                            ></w-text-suggest>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-suggest'"
                            :casename="'fullwidth'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請輸入水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-suggest
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSuggest.objItems"
                                v-model="WTextSuggest.objValue"
                            ></w-text-suggest>
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
import WTextSuggest from './components/WTextSuggest.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WTextSuggest,
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
            'WTextSuggest': {
                objItems: [
                    {
                        key: 'orange',
                        text: '橘子(orange)',
                    },
                    {
                        key: 'banana',
                        text: '香蕉(banana)',
                    },
                    {
                        key: 'strawberry',
                        text: '草莓(strawberry)',
                    },
                ],
                objValue: {
                    key: 'banana',
                    text: '香蕉(banana)',
                },
                objValueErr: {
                    key: 'banana err',
                    text: '香蕉(banana err)',
                },
                objItemsLarge: (function() {
                    let vs = []
                    vs.push({
                        key: 'banana:1',
                        text: '香蕉(banana:1)',
                    })
                    for (let i = 2; i <= 10000; i++) {
                        vs.push({
                            key: 'banana:' + i,
                            text: '香蕉(banana:' + i + ')',
                        })
                    }
                    return vs
                })(),
                objValueLarge: {
                    key: 'banana:1',
                    text: '香蕉(banana:1)',
                },
                strItems: ['orange(橘子)', 'banana(香蕉)', 'strawberry(草莓)'],
                strValue: 'strawberry(草莓)',
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                },
                {
                    'mode': 'keypress',
                    'key': 'End',
                },
                {
                    'mode': 'keypress',
                    'key': 'Backspace',
                    'count': 15,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'li[role="option"]',
                    'nth': 2,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div.bk',
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
