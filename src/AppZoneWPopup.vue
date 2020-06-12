<template>
    <div>


        <div class="head1">w-popup</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-popup
                    v-model="WPopup.bShow1"
                >

                    <template v-slot:trigger>
                        <v-btn small rounded @click="WPopup.bShow1=!WPopup.bShow1">Show({{WPopup.bShow1}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="()=>{}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'minWidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-popup
                    :minWidth="300"
                    v-model="WPopup.bShow2"
                >

                    <template v-slot:trigger>
                        <v-btn small rounded @click="WPopup.bShow2=!WPopup.bShow2">Show({{WPopup.bShow2}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="()=>{}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'maxWidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-popup
                    :maxWidth="500"
                    v-model="WPopup.bShow3"
                >

                    <template v-slot:trigger>
                        <v-btn small rounded @click="WPopup.bShow3=!WPopup.bShow3">Show({{WPopup.bShow3}})</v-btn>
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-popup
                    :distY="0"
                    v-model="WPopup.bShow4"
                >

                    <template v-slot:trigger>
                        <v-btn small rounded @click="WPopup.bShow4=!WPopup.bShow4">Show({{WPopup.bShow4}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="()=>{}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'backgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-popup
                    :backgroundColor="'pink darken-2'"
                    v-model="WPopup.bShow5"
                >

                    <template v-slot:trigger>
                        <v-btn small rounded @click="WPopup.bShow5=!WPopup.bShow5">Show({{WPopup.bShow5}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list dark color="pink darken-2"><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="()=>{}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-popup
                    :editable="false"
                    v-model="WPopup.bShow6"
                >

                    <template v-slot:trigger>
                        <v-btn small rounded @click="WPopup.bShow6=!WPopup.bShow6">Show({{WPopup.bShow6}})</v-btn>
                    </template>

                    <template v-slot:content>
                        <v-list><v-list-item style="min-height:inherit; padding:5px 15px;" :key="kitem" @click="()=>{}" v-for="(item,kitem) in WPopup.items">Item {{item}}</v-list-item></v-list>
                    </template>

                </w-popup>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-popup'"
                    :casename="'slot for table & maxWidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-popup
                    :maxWidth="400"
                    v-model="WPopup.bShow7"
                >

                    <template v-slot:trigger>
                        <v-btn small rounded @click="WPopup.bShow7=!WPopup.bShow7">Show({{WPopup.bShow7}})</v-btn>
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


        </div>


    </div>
</template>

<script>
import { mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WPopup from './components/WPopup.vue'


export default {
    components: {
        demolink,
        WPopup,
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
            'WPopup': {
                'bShow1': false,
                'bShow2': false,
                'bShow3': false,
                'bShow4': false,
                'bShow5': false,
                'bShow6': false,
                'bShow7': false,
                'bShow8': false,
                'items': ['foo', 'bar', 'fizz', 'buzz'],
                'text': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.',
                'table': `
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
