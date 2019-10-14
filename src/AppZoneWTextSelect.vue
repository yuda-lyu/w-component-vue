<template>
    <div>


        <div class="head1">w-text-select</div>


        <div style="padding:0px;">


            <template v-if="modeBorder==='emboss'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'default'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'icon (material)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'icon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="'fas fa-clipboard-check'"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'icon & iconColor & iconColorFoucs'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'iconTooltip'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="5"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'title'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'title & titleColor'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :titleColor="'brown'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :small="false"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :editable="false"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'a lot of items'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItemsLarge"
                            v-model="WTextSelect.objValueLarge"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'key error'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValueErr"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'items[string] & key[string]'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.strItems"
                            v-model="WTextSelect.strValue"
                        ></w-text-select>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'fullwidth'"
                            :kind="'emboss'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'leftIcon (material)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text-select
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'leftIcon & leftIconColor'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-text-select
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'borderRadius'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderRadius="5"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not small (large)'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :small="false"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not editable'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :editable="false"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'a lot of items'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :items="WTextSelect.objItemsLarge"
                                v-model="WTextSelect.objValueLarge"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'key error'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValueErr"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'items[string] & key[string]'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :items="WTextSelect.strItems"
                                v-model="WTextSelect.strValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'fullwidth'"
                            :kind="'emboss'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>


                </template>


            </template>


            <template v-if="modeBorder==='border'">


                <template v-if="modeShell==='pure'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'default'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'icon (material)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'icon (fontawesome)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="'fas fa-clipboard-check'"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'icon & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'cyan lighten-2'"
                            :borderColorFocus="'cyan darken-1'"
                            :backgroundColorFocus="'cyan lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :iconColor="'cyan lighten-2'"
                            :iconColorFocus="'cyan darken-1'"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'iconTooltip'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :iconTooltip="'show tooltip'"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="5"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'title'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'title & titleColor'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :titleColor="'brown'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :small="false"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :editable="false"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'a lot of items'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItemsLarge"
                            v-model="WTextSelect.objValueLarge"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'key error'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValueErr"
                        ></w-text-select>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'items[string] & key[string]'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.strItems"
                            v-model="WTextSelect.strValue"
                        ></w-text-select>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'fullwidth'"
                            :kind="'border'"
                            :shell="'pure'"
                        ></demolink>

                        <w-text-select
                            :borderShadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :icon="mdiCheckUnderlineCircle"
                            :items="WTextSelect.objItems"
                            v-model="WTextSelect.objValue"
                        ></w-text-select>
                    </div>


                </template>


                <template v-if="modeShell==='shell'">


                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'leftIcon (material)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'leftIcon (fontawesome)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="'fas fa-clipboard-check'"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'leftIcon & leftIconColor & borderColor & borderColorFocus & backgroundColorFocus'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :titleColor="'cyan darken-1'"
                            :leftIcon="mdiPaw"
                            :leftIconColor="'cyan lighten-1'"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'cyan lighten-3'"
                                :borderColorFocus="'cyan lighten-1'"
                                :backgroundColorFocus="'cyan lighten-5'"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'borderRadius'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :borderRadius="5"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not small (large)'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :small="false"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'not editable'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :editable="false"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'a lot of items'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSelect.objItemsLarge"
                                v-model="WTextSelect.objValueLarge"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'key error'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValueErr"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'items[string] & key[string]'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSelect.strItems"
                                v-model="WTextSelect.strValue"
                            ></w-text-select>
                        </w-shell-material>
                    </div>

                    <div class="bk" style="display:block;">
                        <demolink
                            :kbname="'w-text-select'"
                            :casename="'fullwidth'"
                            :kind="'border'"
                            :shell="'shell'"
                        ></demolink>

                        <w-shell-material
                            style="margin-top:30px;"
                            :title="'請選擇水果種類'"
                            :leftIcon="mdiPaw"
                        >
                            <w-text-select
                                :borderShadow="false"
                                :borderColor="'orange lighten-2'"
                                :borderColorFocus="'orange darken-2'"
                                :backgroundColorFocus="'orange lighten-5'"
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
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
import WTextSelect from './components/WTextSelect.vue'

export default {
    components: {
        demolink,
        WShellMaterial,
        WTextSelect,
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
            'WTextSelect': {
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
                    'mode': 'eleclick',
                    'selector': 'div[tabindex="0"]',
                    'nth': 2,
                },
                {
                    'mode': 'keypress',
                    'key': 'Tab'
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
