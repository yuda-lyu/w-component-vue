<template>
    <div>


        <div class="head1">w-panel-bulge</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-bulge
                    style="min-width:500px;"
                    :headerBorderRadius="5"
                    :headerBackgroundColor="'linear-gradient(60deg,#ab47bc,#7b1fa2)'"
                >
                    <template v-slot:header>

                        <w-group-radio-capsule
                            style="margin:0px 10px;"
                            :items="WPanelBulge.menu.items"
                            v-model="WPanelBulge.menu.select"
                            :sizePadding="'12px 27px'"
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
                        ></w-group-radio-capsule>

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
import WGroupRadioCapsule from './components/WGroupRadioCapsule.vue'


export default {
    components: {
        demolink,
        WPanelBulge,
        WGroupRadioCapsule,
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
            mdiViewDashboard,
            mdiClockTimeEightOutline,
            mdiBlenderSoftware,
            mdiSpoonSugar,
            mdiApple,
            'WPanelBulge': {
                'table': `

                    <div style="margin-bottom:10px; padding:0px 10px;">
                        <span>A data table</span>
                    </div>

                    <table style="width:100%; font-size:0.7rem;">
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

                `,
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
