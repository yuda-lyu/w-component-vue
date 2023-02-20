<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-tooltip</span></div>


        <div style="padding:0px;">


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
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow1}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
                        <v-btn depressed small elevation="2">Show</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
                        <v-btn style="height:200px;" depressed small elevation="2">Show({{WTooltip.bShow2}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow3}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'maxWidth'"
                ></demolink>

                <w-tooltip
                    :maxWidth="500"
                    v-model="WTooltip.bShow4"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow4}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:5px;">
                            <div style="padding:5px;">1. {{WTooltip.text}}</div>
                            <div style="padding:5px;">2. {{WTooltip.text}}</div>
                        </div>
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
                        <v-btn depressed small elevation="2">[autoFitMinWidth] Show({{WTooltip.bShow5}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'placementDist'"
                ></demolink>

                <w-tooltip
                    :placementDist="10"
                    v-model="WTooltip.bShow6"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow6}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
                    v-model="WTooltip.bShow7"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow7}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'backgroundColor'"
                ></demolink>

                <w-tooltip
                    :backgroundColor="'pink darken-2'"
                    v-model="WTooltip.bShow8"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow8}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" dark :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'no shadow & backgroundColor'"
                ></demolink>

                <w-tooltip
                    :shadow="false"
                    :backgroundColor="'#e08956'"
                    v-model="WTooltip.bShow9"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow9}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" dark :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
                    v-model="WTooltip.bShow10"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow10}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
                    v-model="WTooltip.bShow11"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow11}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'placement'"
                ></demolink>

                <w-tooltip
                    :placement="'right-start'"
                    v-model="WTooltip.bShow12"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow12}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-tooltip>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tooltip'"
                    :casename="'in scroll panel'"
                ></demolink>

                <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                <div :style="'width:200px; height:300px; border:1px solid #ddd; overflow-y:auto;'">
                    <div style="height:600px;">

                        <div style="height:200px;"></div>

                        <w-tooltip
                            v-model="WTooltip.bShow13"
                            @show="evShow"
                            @hide="evHide"
                        >

                            <template v-slot:trigger>
                                <v-btn depressed small elevation="2">Show({{WTooltip.bShow13}})</v-btn>
                            </template>

                            <template v-slot:content>
                                <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
                    <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                    <div :style="'display:inline-block; width:200px; height:300px; border:1px solid #ddd; overflow-y:auto;'">
                        <div style="text-align:left; height:600px;">

                            <div style="height:200px;"></div>

                            <w-tooltip
                                v-model="WTooltip.bShow14"
                                @show="evShow();expandItem()"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2" @click="expandItem">Show({{WTooltip.bShow14}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.itemsExpand">Item {{item}}</v-list-item></v-list>
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
                    :casename="'in dialog'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WTooltip.bShow16a=!WTooltip.bShow16a">Show({{WTooltip.bShow16a}})</v-btn>

                <w-dialog
                    :show.sync="WTooltip.bShow16a"
                    :title="'in dialog'"
                    :maxWidth="500"
                >

                    <template v-slot:content>
                        <div style="padding:20px; height:400px;">

                            <div style="height:300px;"></div>

                            <w-tooltip
                                style="margin-left:250px;"
                                v-model="WTooltip.bShow16b"
                                @show="evShow();expandItem()"
                                @hide="evHide"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2" @click="expandItem">Show({{WTooltip.bShow16b}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.itemsExpand">Item {{item}}</v-list-item></v-list>
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
                    v-model="WTooltip.bShow17"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow17}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:10px 0px;">
                            <div style="padding:10px 20px; background:#666;">
                                <span style="color:#fff;">A data table</span>
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
                    v-model="WTooltip.bShow18"
                    @show="evShow"
                    @hide="evHide"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WTooltip.bShow18}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WTooltip.items">Item {{item}}</v-list-item></v-list>
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
import WDialog from './components/WDialog.vue'


export default {
    components: {
        demolink,
        WTooltip,
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
                'bShow15a': false,
                'bShow15b': false,
                'bShow15c': false,
                'bShow16a': false,
                'bShow16b': false,
                'bShow17': false,
                'bShow18': false,
                'items': ['foo', 'bar', 'fizz', 'buzz'],
                'itemsExpand': ['foo', 'bar', 'fizz', 'buzz'],
                'text': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                'table': '\n<table style="width:100%; font-size:0.7rem; border-collapse:collapse;">\n                        <thead>\n                            <tr>\n                                <th style="padding:2px 8px; text-align:left;">Dessert</th>\n                                <th style="padding:2px 8px; text-align:left;">Calories</th>\n                                <th style="padding:2px 8px; text-align:left;">Fat</th>\n                                <th style="padding:2px 8px; text-align:left;">Carbs</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>\n                            </tr>\n                        </tbody>\n                    </table>\n',
                'title': 'Bulge',
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
                vo.WTooltip.itemsExpand = ['foo', 'bar', 'fizz', 'buzz']
            }, 3000)
        },
    },
}
</script>

<style scoped>
</style>


