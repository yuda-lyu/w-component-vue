<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-popup</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'default'"
                ></demolink>

                <w-popup
                    v-model="WPopup.bShow1"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow1}})</v-btn>
                    </template>

                    <template v-slot:content>
                        {{WPopup.text}}
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'isolated'"
                ></demolink>

                <w-popup
                    :isolated="true"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show</v-btn>
                    </template>

                    <template v-slot:content="props">
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                        <div style="padding:0px 5px 5px 5px;">
                            <v-btn depressed small elevation="2" @click="props.funHide()">Hide in popup panel</v-btn>
                        </div>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'click item by latency hiding'"
                ></demolink>

                <w-popup
                    v-model="WPopup.bShow2"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow2}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="clickHide" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'minWidth'"
                ></demolink>

                <w-popup
                    :minWidth="200"
                    v-model="WPopup.bShow3"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow3}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'maxWidth'"
                ></demolink>

                <w-popup
                    :maxWidth="500"
                    v-model="WPopup.bShow4"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow4}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:5px;">
                            <div style="padding:5px;">1. {{WPopup.text}}</div>
                            <div style="padding:5px;">2. {{WPopup.text}}</div>
                        </div>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'autoFitMinWidth'"
                ></demolink>

                <w-popup
                    :autoFitMinWidth="true"
                    v-model="WPopup.bShow5"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">[autoFitMinWidth] Show({{WPopup.bShow5}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'placementDist'"
                ></demolink>

                <w-popup
                    :placementDist="10"
                    v-model="WPopup.bShow6"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow6}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-popup
                    :borderRadius="10"
                    v-model="WPopup.bShow7"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow7}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'backgroundColor'"
                ></demolink>

                <div style="padding:30px; background:#ccb5c7;">

                    <w-popup
                        :backgroundColor="'rgba(0,0,0,0.5)'"
                        v-model="WPopup.bShow8"
                        @show="evShow"
                        @hide="evHide"
                    >

                        <template v-slot:trigger>
                            <v-btn depressed small elevation="2">Show({{WPopup.bShow8}})</v-btn>
                        </template>

                        <template v-slot:content>
                            <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" dark :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                        </template>

                    </w-popup>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'no shadow & backgroundColor'"
                ></demolink>

                <w-popup
                    :shadow="false"
                    :backgroundColor="'#e08956'"
                    v-model="WPopup.bShow9"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow9}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" dark :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'textColor & backgroundColor'"
                ></demolink>

                <w-popup
                    :textColor="'#E65100'"
                    :backgroundColor="'#FFF3E0'"
                    v-model="WPopup.bShow10"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow10}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="color:inherit; background:transparent;"><v-list-item style="color:inherit; min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'textFontSize'"
                ></demolink>

                <w-popup
                    :textFontSize="'0.8rem'"
                    v-model="WPopup.bShow11"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow11}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-popup
                    :paddingStyle="{v:7,h:15}"
                    v-model="WPopup.bShow12"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow12}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'shadowStyle'"
                ></demolink>

                <w-popup
                    :shadowStyle="'0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'"
                    v-model="WPopup.bShow13"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow13}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'transitionTime'"
                ></demolink>

                <w-popup
                    :transitionTime="50"
                    v-model="WPopup.bShow14"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow14}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'placement'"
                ></demolink>

                <w-popup
                    :placement="'right-start'"
                    v-model="WPopup.bShow15"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow15}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'in scroll panel'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                <div :style="'width:200px; height:300px; border:1px solid #ddd; overflow-y:auto;'">
                    <div style="height:600px;">

                        <div style="height:200px;"></div>

                        <w-popup
                            v-model="WPopup.bShow16"
                            @show="evShow"
                            @hide="evHide"
                        >

                            <template v-slot:trigger>
                                <v-btn depressed small elevation="2">Show({{WPopup.bShow16}})</v-btn>
                            </template>

                            <template v-slot:content>
                                <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                            </template>

                        </w-popup>

                        <div style="height:200px;"></div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'auto flipping in scroll panel'"
                ></demolink>

                <div style="width:95vw; text-align:right;">
                    <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                    <div :style="'display:inline-block; width:200px; height:300px; border:1px solid #ddd; overflow-y:auto;'">
                        <div style="text-align:left; height:600px;">

                            <div style="height:200px;"></div>

                            <w-popup
                                v-model="WPopup.bShow17"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2" @click="expandItem">Show({{WPopup.bShow17}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.itemsExpand">Item {{item}}</v-list-item></v-list>
                                </template>

                            </w-popup>

                            <div style="height:200px;"></div>

                        </div>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'in popup'"
                ></demolink>

                <w-popup
                    v-model="WPopup.bShow18a"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow18a}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:40px;">

                            <div style="font-size:0.8rem; white-space:nowrap;">Here is 1st pupop.</div>

                            <w-popup
                                v-model="WPopup.bShow18b"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2">Show({{WPopup.bShow18b}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:40px;">

                                        <div style="font-size:0.8rem; white-space:nowrap;">Here is 2nd pupop.</div>
                                        <div style="font-size:0.7rem; white-space:nowrap; color:#f26;">It will close when click to the outside of the content of 1st pupop.</div>

                                        <w-popup
                                            style="margin-bottom:20px;"
                                            v-model="WPopup.bShow18c"
                                            @show="evShow"
                                            @hide="evHide"
                                        >

                                            <template v-slot:trigger>
                                                <v-btn depressed small elevation="2">Show({{WPopup.bShow18c}})</v-btn>
                                            </template>

                                            <template v-slot:content>
                                                <div style="padding:10px 15px 0px 15px;">
                                                    <div style="font-size:0.8rem; white-space:nowrap;">Here is 3rd pupop.</div>
                                                    <div style="font-size:0.7rem; white-space:nowrap; color:#f26;">It will close when click to the outside of the content of 1st or 2st pupop.</div>
                                                </div>
                                                <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                                            </template>

                                        </w-popup>

                                    </div>
                                </template>

                            </w-popup>

                        </div>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'auto flipping in dialog'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WPopup.bShow19a=!WPopup.bShow19a">Show({{WPopup.bShow19a}})</v-btn>

                <w-dialog
                    :show.sync="WPopup.bShow19a"
                    :title="'auto flipping in dialog'"
                    :maxWidth="500"
                >

                    <template v-slot:content>
                        <div style="padding:20px; height:400px;">

                            <div style="height:300px;"></div>

                            <w-popup
                                style="margin-left:250px;"
                                v-model="WPopup.bShow19b"
                                @show="evShow"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2" @click="expandItem">Show({{WPopup.bShow19b}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.itemsExpand">Item {{item}}</v-list-item></v-list>
                                </template>

                            </w-popup>

                            <div style="height:500px;"></div>

                        </div>
                    </template>

                </w-dialog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'slot for table & maxWidth'"
                ></demolink>

                <w-popup
                    :maxWidth="400"
                    v-model="WPopup.bShow20"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow20}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:10px 0px;">
                            <div style="padding:10px 20px; background:#666;">
                                <span style="color:#fff;">A data table</span>
                            </div>
                            <div style="padding:10px;" v-html="WPopup.table"></div>
                            <div style="padding:0px 20px 10px 20px; font-size:0.8rem;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</div>
                        </div>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'not editable'"
                ></demolink>

                <w-popup
                    :editable="false"
                    v-model="WPopup.bShow21"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow21}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WPopup from './components/WPopup.vue'
import WDialog from './components/WDialog.vue'


export default {
    components: {
        demolink,
        WPopup,
        WDialog,
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
            'WPopup': {
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
                'bShow16': false,
                'bShow17': false,
                'bShow18a': false,
                'bShow18b': false,
                'bShow18c': false,
                'bShow19a': false,
                'bShow19b': false,
                'bShow20': false,
                'bShow21': false,
                'items': ['foo', 'bar', 'fizz', 'buzz'],
                'itemsExpand': ['foo', 'bar', 'fizz', 'buzz'],
                'text': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
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
                vo.WPopup.bShow2 = false
            }, 200)
        },
        expandItem: function() {
            let vo = this
            setTimeout(function() {
                vo.WPopup.itemsExpand = ['Lorem ipsum dolor sit, amet consectetur', 'bar', 'fizz', 'buzz']
            }, 1000)
            setTimeout(function() {
                vo.WPopup.itemsExpand = ['foo', 'bar', 'fizz', 'buzz']
            }, 3000)
        },
    },
}
</script>

<style scoped>
</style>

