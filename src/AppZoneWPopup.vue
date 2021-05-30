<template>
    <div>


        <div class="head1" style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('https://yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-popup</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'default'"
                ></demolink>

                <w-popup
                    v-model="WPopup.bShow1"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow1}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'click item and delay hiding'"
                ></demolink>

                <w-popup
                    v-model="WPopup.bShow2"
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
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow4}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div>
                            <div style="margin:15px;">1. {{WPopup.text}}</div>
                            <div style="margin:15px;">2. {{WPopup.text}}</div>
                        </div>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'distY'"
                ></demolink>

                <w-popup
                    :distY="10"
                    v-model="WPopup.bShow5"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow5}})</v-btn>
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
                    v-model="WPopup.bShow6"
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
                    :casename="'backgroundColor'"
                ></demolink>

                <w-popup
                    :backgroundColor="'pink darken-2'"
                    v-model="WPopup.bShow7"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow7}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" dark :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'no shadow & backgroundColor'"
                ></demolink>

                <w-popup
                    :shadow="false"
                    :backgroundColor="'#e08956'"
                    v-model="WPopup.bShow8"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow8}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" dark :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
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
                    v-model="WPopup.bShow9"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow9}})</v-btn>
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

                        <!-- 內嵌br為避免self-closing於前端vue模板無法解析問題 -->
                        <div style="height:200px;"><span></span></div>

                        <w-popup
                            v-model="WPopup.bShow10"
                        >

                            <template v-slot:trigger>
                                <v-btn depressed small elevation="2">Show({{WPopup.bShow10}})</v-btn>
                            </template>

                            <template v-slot:content>
                                <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                            </template>

                        </w-popup>

                        <!-- 內嵌br為避免self-closing於前端vue模板無法解析問題 -->
                        <div style="height:200px;"><span></span></div>

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

                            <!-- 內嵌span為避免self-closing於前端vue模板無法解析問題 -->
                            <div style="height:200px;"><span></span></div>

                            <w-popup
                                v-model="WPopup.bShow11"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2" @click="expandItem">Show({{WPopup.bShow11}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.itemsExpand">Item {{item}}</v-list-item></v-list>
                                </template>

                            </w-popup>

                            <!-- 內嵌span為避免self-closing於前端vue模板無法解析問題 -->
                            <div style="height:200px;"><span></span></div>

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
                    v-model="WPopup.bShow12"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow12}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:40px;">

                            <div style="font-size:0.8rem; white-space:nowrap;">Here is 1st pupop.</div>

                            <w-popup
                                v-model="WPopup.bShow12a"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2">Show({{WPopup.bShow12a}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <div style="padding:40px;">

                                        <div style="font-size:0.8rem; white-space:nowrap;">Here is 2nd pupop.</div>
                                        <div style="font-size:0.7rem; white-space:nowrap; color:#f26;">It will close when click to the outside of the content of 1st pupop.</div>

                                        <w-popup
                                            style="margin-bottom:20px;"
                                            v-model="WPopup.bShow12b"
                                        >

                                            <template v-slot:trigger>
                                                <v-btn depressed small elevation="2">Show({{WPopup.bShow12b}})</v-btn>
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
                    :casename="'in dialog'"
                ></demolink>

                <v-btn depressed small elevation="2" @click="WPopup.bShow13=!WPopup.bShow13">Show({{WPopup.bShow13}})</v-btn>

                <w-dialog
                    :show.sync="WPopup.bShow13"
                    :title="'in dialog'"
                    :widthMax="500"
                >

                    <template v-slot:content>
                        <div style="padding:20px; height:400px;">

                            <!-- 內嵌span為避免self-closing於前端vue模板無法解析問題 -->
                            <div style="height:300px;"><span></span></div>

                            <w-popup
                                style="margin-left:250px;"
                                v-model="WPopup.bShow13a"
                            >

                                <template v-slot:trigger>
                                    <v-btn depressed small elevation="2" @click="expandItem">Show({{WPopup.bShow13a}})</v-btn>
                                </template>

                                <template v-slot:content>
                                    <v-list style="background:transparent;"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WPopup.itemsExpand">Item {{item}}</v-list-item></v-list>
                                </template>

                            </w-popup>

                            <!-- 內嵌span為避免self-closing於前端vue模板無法解析問題 -->
                            <div style="height:500px;"><span></span></div>

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
                    v-model="WPopup.bShow14"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow14}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:10px 0px;">
                            <div style="padding:10px 20px; background:#666;">
                                <span style="color:#fff;">A data table</span>
                            </div>
                            <!-- 內嵌span為避免self-closing於前端vue模板無法解析問題 -->
                            <div style="padding:10px;" v-html="WPopup.table"><span></span></div>
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
                    v-model="WPopup.bShow15"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show({{WPopup.bShow15}})</v-btn>
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
                'bShow12a': false,
                'bShow12b': false,
                'bShow13': false,
                'bShow13a': false,
                'bShow14': false,
                'bShow15': false,
                'items': ['foo', 'bar', 'fizz', 'buzz'],
                'itemsExpand': ['foo', 'bar', 'fizz', 'buzz'],
                'text': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                'tableFun': function() { //註解會於編譯階段被清除無法用f2c
                    /**
                    <table style="width:100%; font-size:0.7rem; border-collapse:collapse;">
                        <thead>
                            <tr>
                                <th style="padding:2px 8px; text-align:left;">Dessert</th>
                                <th style="padding:2px 8px; text-align:left;">Calories</th>
                                <th style="padding:2px 8px; text-align:left;">Fat</th>
                                <th style="padding:2px 8px; text-align:left;">Carbs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>
                            </tr>
                            <tr>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>
                            </tr>
                            <tr>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>
                                <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>
                            </tr>
                        </tbody>
                    </table>
                     */
                },
                'table': '\n<table style="width:100%; font-size:0.7rem; border-collapse:collapse;">\n                        <thead>\n                            <tr>\n                                <th style="padding:2px 8px; text-align:left;">Dessert</th>\n                                <th style="padding:2px 8px; text-align:left;">Calories</th>\n                                <th style="padding:2px 8px; text-align:left;">Fat</th>\n                                <th style="padding:2px 8px; text-align:left;">Carbs</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>\n                            </tr>\n                        </tbody>\n                    </table>\n',
                'title': 'Bulge',
            },
            'actions': [
            ],
        }
    },
    methods: {
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
