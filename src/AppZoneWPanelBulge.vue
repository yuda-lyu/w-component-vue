<template>
    <div>


        <div class="head1">w-panel-bulge</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'default'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerText="WPanelBulge.title"
                >
                    <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'headerBorderRadius'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerText="WPanelBulge.title"
                    :headerBorderRadius="5"
                >
                    <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'headerPadding'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerText="WPanelBulge.title"
                    :headerPadding="'0px 10px'"
                >
                    <div style="padding:20px 10px 10px 10px;" v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'headerTextColor & headerBackgroundColor'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerText="WPanelBulge.title"
                    :headerTextColor="'orange darken-1'"
                    :headerBackgroundColor="'rgba(250,70,0,0.15)'"
                >
                    <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'with grey outer'"
                ></demolink>

                <div style="background-color:#bbb; padding:40px;">
                    <w-panel-bulge
                        style="min-width:500px;"
                        :headerText="WPanelBulge.title"
                    >
                        <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                    </w-panel-bulge>
                </div>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'no headerShadow & no contentShadow, with green outer'"
                ></demolink>

                <div style="background-color:#8FF4B1; padding:40px;">
                    <w-panel-bulge
                        style="min-width:500px;"
                        :headerText="WPanelBulge.title"
                        :headerShadow="false"
                        :contentShadow="false"
                    >
                        <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                    </w-panel-bulge>
                </div>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'contentBorderRadius'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerText="WPanelBulge.title"
                    :contentBorderRadius="10"
                >
                    <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'contentBackgroundColor'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerText="WPanelBulge.title"
                    :contentBackgroundColor="'green lighten-5'"
                >
                    <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'slot for header & headerBorderRadius & headerBackgroundColor(linear-gradient)'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerBorderRadius="5"
                    :headerBackgroundColor="'linear-gradient(60deg,#ab47bc,#7b1fa2)'"
                >
                    <template v-slot:header>

                        <!-- 內嵌span為避免self-closing於前端vue模板無法解析問題 -->
                        <w-group-radio
                            style="margin:0px 10px;"
                            :items="WPanelBulge.menu.items"
                            v-model="WPanelBulge.menu.select"
                            :paddingStyle="{v:12,h:27}"
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
                        ><span></span></w-group-radio>

                    </template>

                    <div style="padding:20px;" v-html="WPanelBulge.table"></div>

                </w-panel-bulge>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WPanelBulge from './components/WPanelBulge.vue'
import WGroupRadio from './components/WGroupRadio.vue'


export default {
    components: {
        demolink,
        WPanelBulge,
        WGroupRadio,
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
            'WPanelBulge': {
                'tableFun': function() { //註解會於編譯階段被清除無法用f2c
                    /**
                    <div style="margin-bottom:10px; padding:0px 10px;">
                        <span>A data table</span>
                    </div>

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
                'table': '\n<div style="margin-bottom:10px; padding:0px 10px;">\n                        <span>A data table</span>\n                    </div>\n\n                    <table style="width:100%; font-size:0.7rem; border-collapse:collapse;">\n                        <thead>\n                            <tr>\n                                <th style="padding:2px 8px; text-align:left;">Dessert</th>\n                                <th style="padding:2px 8px; text-align:left;">Calories</th>\n                                <th style="padding:2px 8px; text-align:left;">Fat</th>\n                                <th style="padding:2px 8px; text-align:left;">Carbs</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>\n                            </tr>\n                        </tbody>\n                    </table>\n',
                'title': 'Bulge',
                'menu': {
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
                    ],
                    'select': {
                        text: 'Dashboard',
                        icon: mdiViewDashboard,
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
