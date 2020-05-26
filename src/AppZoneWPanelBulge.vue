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
                    style="width:500px;"
                    :headerText="WPanelBulge.title"
                >
                    <div v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-bulge
                    style="width:500px;"
                    :headerText="WPanelBulge.title"
                    :borderRadius="10"
                >
                    <div v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'headerLeft & contentPadding'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-bulge
                    style="width:500px;"
                    :headerText="WPanelBulge.title"
                    :headerLeft="10"
                    :contentPadding="'20px 10px 10px 10px'"
                >
                    <div v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'headerOpacity & headerTextColor & headerBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-bulge
                    style="width:500px;"
                    :headerText="WPanelBulge.title"
                    :headerOpacity="1"
                    :headerTextColor="'orange darken-1'"
                    :headerBackgroundColor="'rgba(250,70,0,0.15)'"
                >
                    <div v-html="WPanelBulge.table"></div>
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
                        style="width:500px;"
                        :headerText="WPanelBulge.title"
                    >
                        <div v-html="WPanelBulge.table"></div>
                    </w-panel-bulge>
                </div>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'no borderShadow, with pink outer'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <div style="background-color:#F48FB1; padding:40px;">
                    <w-panel-bulge
                        style="width:500px;"
                        :headerText="WPanelBulge.title"
                        :borderShadow="false"
                    >
                        <div v-html="WPanelBulge.table"></div>
                    </w-panel-bulge>
                </div>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-bulge'"
                    :casename="'contentBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-bulge
                    style="width:500px;"
                    :headerText="WPanelBulge.title"
                    :contentBackgroundColor="'green lighten-5'"
                >
                    <div v-html="WPanelBulge.table"></div>
                </w-panel-bulge>
            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelBulge from './components/WPanelBulge.vue'


export default {
    components: {
        demolink,
        WPanelBulge,
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
            'WPanelBulge': {
                'table': `

                    <div style="padding:10px;">
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
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
