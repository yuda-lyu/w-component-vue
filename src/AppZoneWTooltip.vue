<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-tooltip</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'default'"
                ></demolink>

                <w-tooltip
                    v-model="WTooltip.bShow1"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow1+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'isolated'"
                ></demolink>

                <w-tooltip
                    :isolated="true"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'scroll in large zone'"
                ></demolink>

                <w-tooltip
                    v-model="WTooltip.bShow2"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :paddingStyle="{v:150,h:15}" :text="'show('+WTooltip.bShow2+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'minWidth'"
                ></demolink>

                <w-tooltip
                    :minWidth="200"
                    v-model="WTooltip.bShow3"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow3+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'maxWidth'"
                ></demolink>

                <w-tooltip
                    :maxWidth="300"
                    v-model="WTooltip.bShow4"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow4+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'autoFitMinWidth'"
                ></demolink>

                <w-tooltip
                    :autoFitMinWidth="true"
                    v-model="WTooltip.bShow5"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip style="width:200px;" :text="'show('+WTooltip.bShow5+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.textShort}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'autoFitMaxWidth'"
                ></demolink>

                <w-tooltip
                    :autoFitMaxWidth="true"
                    v-model="WTooltip.bShow6"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip style="width:200px;" :text="'show('+WTooltip.bShow6+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'placementDistY'"
                ></demolink>

                <w-tooltip
                    :placementDistY="10"
                    v-model="WTooltip.bShow7"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow7+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-tooltip
                    :borderRadius="10"
                    v-model="WTooltip.bShow8"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow8+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'backgroundColor'"
                ></demolink>

                <div style="padding:30px; background:#ccb5c7;">

                    <w-tooltip
                        :backgroundColor="'rgba(0,0,0,0.5)'"
                        v-model="WTooltip.bShow9"
                        @show="evShow"
                        @hide="evHide"
                    >

                        <template v-slot:trigger>
                            <w-button-chip :text="'show('+WTooltip.bShow9+')'" :borderRadius="4"></w-button-chip>
                        </template>

                        <template v-slot:content>
                            <w-list-vertical
                                style="height:148px;"
                                :paddingStyle="{v:8,h:15}"
                                :itemTextColor="'#fff'"
                                :itemTextColorHover="'#fff'"
                                :itemTextColorActive="'#fff'"
                                :itemBackgroundColor="'transparent'"
                                :enableActive="false"
                                :items="WTooltip.items"
                            ></w-list-vertical>
                        </template>

                    </w-tooltip>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'no shadow & backgroundColor'"
                ></demolink>

                <w-tooltip
                    :shadow="false"
                    :backgroundColor="'#e08956'"
                    v-model="WTooltip.bShow10"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow10+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        <w-list-vertical
                            style="height:148px;"
                            :paddingStyle="{v:8,h:15}"
                            :itemTextColor="'#fff'"
                            :itemTextColorHover="'#fff'"
                            :itemTextColorActive="'#fff'"
                            :itemBackgroundColor="'transparent'"
                            :enableActive="false"
                            :items="WTooltip.items"
                        ></w-list-vertical>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'textColor & backgroundColor'"
                ></demolink>

                <w-tooltip
                    :textColor="'#E65100'"
                    :backgroundColor="'#FFF3E0'"
                    v-model="WTooltip.bShow11"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow11+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        <div style="width:200px; padding:10px;">{{ WTooltip.text }}</div>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'textFontSize'"
                ></demolink>

                <w-tooltip
                    :textFontSize="'0.7rem'"
                    v-model="WTooltip.bShow12"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow12+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-tooltip
                    :paddingStyle="{v:7,h:15}"
                    v-model="WTooltip.bShow13"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow13+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'shadowStyle'"
                ></demolink>

                <w-tooltip
                    :shadowStyle="'0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'"
                    v-model="WTooltip.bShow14"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow14+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'transitionTime'"
                ></demolink>

                <w-tooltip
                    :transitionTime="50"
                    v-model="WTooltip.bShow15"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow15+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'placement'"
                ></demolink>

                <table style="border-collapse:collapse;">
                    <tr>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                left-start
                            </div>

                            <w-tooltip
                                :placement="'left-start'"
                                v-model="WTooltip.bShow16a"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16a+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                left
                            </div>

                            <w-tooltip
                                :placement="'left'"
                                v-model="WTooltip.bShow16b"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16b+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                left-end
                            </div>

                            <w-tooltip
                                :placement="'left-end'"
                                v-model="WTooltip.bShow16c"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16c+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                right-start
                            </div>

                            <w-tooltip
                                :placement="'right-start'"
                                v-model="WTooltip.bShow16d"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16d+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                right
                            </div>

                            <w-tooltip
                                :placement="'right'"
                                v-model="WTooltip.bShow16e"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16e+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                right-end
                            </div>

                            <w-tooltip
                                :placement="'right-end'"
                                v-model="WTooltip.bShow16f"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16f+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                top-start
                            </div>

                            <w-tooltip
                                :placement="'top-start'"
                                v-model="WTooltip.bShow16g"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16g+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                top
                            </div>

                            <w-tooltip
                                :placement="'top'"
                                v-model="WTooltip.bShow16h"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16h+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                top-end
                            </div>

                            <w-tooltip
                                :placement="'top-end'"
                                v-model="WTooltip.bShow16i"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16i+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                bottom-start
                            </div>

                            <w-tooltip
                                :placement="'bottom-start'"
                                v-model="WTooltip.bShow16j"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16j+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                bottom
                            </div>

                            <w-tooltip
                                :placement="'bottom'"
                                v-model="WTooltip.bShow16k"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16k+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                        <td style="padding:10px;">

                            <div style="font-size:0.7rem; color:#999;">
                                bottom-end
                            </div>

                            <w-tooltip
                                :placement="'bottom-end'"
                                v-model="WTooltip.bShow16l"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow16l+')'" :borderRadius="4"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:5px;"><div style="padding:5px;">{{WTooltip.textL1}}</div><div style="padding:5px;">{{WTooltip.textL2}}</div><div style="padding:5px;">{{WTooltip.textL3}}</div></div>
                                </template>

                            </w-tooltip>

                        </td>
                    </tr>
                </table>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'in scroll panel'"
                ></demolink>

                <div :style="'width:200px; height:300px; border:1px solid #ddd; overflow-y:auto;'">
                    <div style="height:600px;">

                        <div style="height:200px;"></div>

                        <w-tooltip
                            v-model="WTooltip.bShow17"
                            @show="evShow"
                            @hide="evHide"
                        >

                            <template v-slot:trigger>
                                <w-button-chip :text="'show('+WTooltip.bShow17+')'" :borderRadius="4"></w-button-chip>
                            </template>

                            <template v-slot:content>
                                <w-list-vertical
                                    style="height:148px;"
                                    :paddingStyle="{v:8,h:15}"
                                    :itemTextColor="'#fff'"
                                    :itemTextColorHover="'#fff'"
                                    :itemTextColorActive="'#fff'"
                                    :itemBackgroundColor="'transparent'"
                                    :enableActive="false"
                                    :items="WTooltip.itemsExpand"
                                ></w-list-vertical>
                            </template>

                        </w-tooltip>

                        <div style="height:200px;"></div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'auto flipping in scroll panel'"
                ></demolink>

                <div style="width:95vw; text-align:right;">
                    <div :style="'display:inline-block; width:200px; height:300px; border:1px solid #ddd; overflow-y:auto;'">
                        <div style="text-align:left; height:600px;">

                            <div style="height:200px;"></div>

                            <w-tooltip
                                v-model="WTooltip.bShow18"
                                @show="evShow();expandItem()"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow18+')'" :borderRadius="4" @click="expandItem"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <w-list-vertical
                                        style="height:148px;"
                                        :paddingStyle="{v:8,h:15}"
                                        :itemTextColor="'#fff'"
                                        :itemTextColorHover="'#fff'"
                                        :itemTextColorActive="'#fff'"
                                        :itemBackgroundColor="'transparent'"
                                        :enableActive="false"
                                        :items="WTooltip.itemsExpand"
                                    ></w-list-vertical>
                                </template>

                            </w-tooltip>

                            <div style="height:200px;"></div>

                        </div>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'auto flipping in popup'"
                ></demolink>

                <w-popup
                    v-model="WTooltip.bShow20a"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow20a+')'" :borderRadius="4" @click="WTooltip.bShow20a=!WTooltip.bShow20a"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        <div style="padding:40px;">

                            <w-tooltip
                                v-model="WTooltip.bShow20b"
                                @show="evShow();expandItem()"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow20b+')'" :borderRadius="4" @click="expandItem"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <w-list-vertical
                                        style="height:148px;"
                                        :paddingStyle="{v:8,h:15}"
                                        :itemTextColor="'#fff'"
                                        :itemTextColorHover="'#fff'"
                                        :itemTextColorActive="'#fff'"
                                        :itemBackgroundColor="'transparent'"
                                        :enableActive="false"
                                        :items="WTooltip.itemsExpand"
                                    ></w-list-vertical>
                                </template>

                            </w-tooltip>

                        </div>
                    </template>

                </w-popup>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'auto flipping in dialog'"
                ></demolink>

                <w-button-chip :text="'show('+WTooltip.bShow21a+')'" :borderRadius="4" @click="WTooltip.bShow21a=!WTooltip.bShow21a"></w-button-chip>

                <w-dialog
                    :show.sync="WTooltip.bShow21a"
                    :title="'auto flipping in dialog'"
                    :maxWidth="500"
                >

                    <template v-slot:content>
                        <div style="padding:20px; height:400px;">

                            <div style="height:300px;"></div>

                            <w-tooltip
                                style="margin-left:250px;"
                                v-model="WTooltip.bShow21b"
                                @show="evShow();expandItem()"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <w-button-chip :text="'show('+WTooltip.bShow21b+')'" :borderRadius="4" @click="expandItem"></w-button-chip>
                                </template>

                                <template v-slot:content>
                                    <w-list-vertical
                                        style="height:148px;"
                                        :paddingStyle="{v:8,h:15}"
                                        :itemTextColor="'#fff'"
                                        :itemTextColorHover="'#fff'"
                                        :itemTextColorActive="'#fff'"
                                        :itemBackgroundColor="'transparent'"
                                        :enableActive="false"
                                        :items="WTooltip.itemsExpand"
                                    ></w-list-vertical>
                                </template>

                            </w-tooltip>

                            <div style="height:500px;"></div>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'slot for table & maxWidth'"
                ></demolink>

                <w-tooltip
                    :maxWidth="400"
                    v-model="WTooltip.bShow22"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow22+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        <div style="padding:10px 0px; background:#777;">
                            <div style="padding:10px 20px; background:#444;">
                                <span style="font-size:1.1rem; color:#fff;">A data table</span>
                            </div>
                            <div style="padding:10px;" v-html="WTooltip.table"></div>
                            <div style="padding:0px 20px 10px 20px; font-size:0.8rem;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</div>
                        </div>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'not editable'"
                ></demolink>

                <w-tooltip
                    :editable="false"
                    v-model="WTooltip.bShow23"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <w-button-chip :text="'show('+WTooltip.bShow23+')'" :borderRadius="4"></w-button-chip>
                    </template>

                    <template v-slot:content>
                        {{WTooltip.text}}
                    </template>

                </w-tooltip>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTooltip from './components/WTooltip.vue'
import WPopup from './components/WPopup.vue'
import WDialog from './components/WDialog.vue'
import WButtonChip from './components/WButtonChip.vue'
import WListVertical from './components/WListVertical.vue'


export default {
    components: {
        demolink,
        WTooltip,
        WPopup,
        WDialog,
        WButtonChip,
        WListVertical,
    },
    props: {
    },
    data: function() {
        return {
            mdiViewDashboard,
            mdiClockTimeEightOutline,
            mdiBlenderSoftware,
            mdiSpoonSugar,
            mdiApple,
            'WTooltip': {
                'bShow1': false,
                'bShow2': false,
                'bShow3': false,
                'bShow4': false,
                'bShow5': false,
                'bShow6': false,
                'bShow7': false,
                'bShow8': false,
                'bShow9': false,
                'bShow10': false,
                'bShow11': false,
                'bShow12': false,
                'bShow13': false,
                'bShow14': false,
                'bShow15': false,
                'bShow16a': false,
                'bShow16b': false,
                'bShow16c': false,
                'bShow16d': false,
                'bShow16e': false,
                'bShow16f': false,
                'bShow16g': false,
                'bShow16h': false,
                'bShow16i': false,
                'bShow16j': false,
                'bShow16k': false,
                'bShow16l': false,
                'bShow17': false,
                'bShow18': false,
                'bShow19a': false,
                'bShow19b': false,
                'bShow19c': false,
                'bShow20a': false,
                'bShow20b': false,
                'bShow21a': false,
                'bShow21b': false,
                'bShow22': false,
                'bShow23': false,
                'items': ['Item foo', 'Item bar', 'Item fizz', 'Item buzz'],
                'itemsExpand': ['Item foo', 'Item bar', 'Item fizz', 'Item buzz'],
                'text': 'Lorem ipsum met consectetur adipisicing elit 中文測試 aquis praesentium cumque magnam odio iure quidem',
                'textShort': 'Lorem 中文測試',
                'textL1': 'Lorem ipsum',
                'textL2': 'Met consectetur',
                'textL3': 'Aquis praesentium',
                'table': '\n<table style="width:100%; font-size:0.7rem; border-collapse:collapse;">\n                        <thead>\n                            <tr>\n                                <th style="padding:2px 8px; text-align:left;">Dessert</th>\n                                <th style="padding:2px 8px; text-align:left;">Calories</th>\n                                <th style="padding:2px 8px; text-align:left;">Fat</th>\n                                <th style="padding:2px 8px; text-align:left;">Carbs</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>\n                            </tr>\n                        </tbody>\n                    </table>\n',
            },
            'actions': [
            ],
        }
    },
    methods: {
        evShow: function() {
            console.log('evShow')
        },
        evHide: function() {
            console.log('evHide')
        },
        clickHide: function() {
            let vo = this
            setTimeout(function() {
                vo.WTooltip.bShow2 = false
            }, 200)
        },
        expandItem: function() {
            let vo = this
            setTimeout(function() {
                vo.WTooltip.itemsExpand = ['Lorem ipsum dolor sit, amet consectetur', 'bar', 'fizz', 'buzz']
            }, 1000)
            setTimeout(function() {
                vo.WTooltip.itemsExpand = ['Item foo', 'Item bar', 'Item fizz', 'Item buzz']
            }, 3000)
        },
    },
}
</script>

<style scoped>
</style>

