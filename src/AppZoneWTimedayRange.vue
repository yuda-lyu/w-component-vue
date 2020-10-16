<template>
    <div>


        <div class="head1">w-timeday-range</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :borderRadius="5"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'dayBetween'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :dayBetween="'to'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :icon="mdiCheckUnderlineCircle"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :icon="'fas fa-clipboard-check'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'iconColor & iconColorFoucs'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'pickColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :pickColor="'brown'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'iconTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :iconTooltip="'show tooltip'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :editable="false"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :borderRadius="5"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & dayBetween'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :dayBetween="'to'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="'fas fa-clipboard-check'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'cyan lighten-2'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & pickColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :pickColor="'brown'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & iconTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :iconTooltip="'show tooltip'"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday-range'"
                    :casename="'border & not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :editable="false"
                    :dayStart.sync="WTimedayRange.dayStart"
                    :dayEnd.sync="WTimedayRange.dayEnd"
                ></w-timeday-range>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTimedayRange from './components/WTimedayRange.vue'


export default {
    components: {
        demolink,
        WTimedayRange,
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
            'WTimedayRange': {
                dayStart: '2019-01-01',
                dayEnd: '2019-02-01',
            },
            'actions': [
                //pickColor測試不到

                //起始時間
                {
                    'mode': 'eleclick',
                    'selector': 'div[TimedayCore="day"]',
                    'nth': 0,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'button[type="button"]',
                    'nth': 11,
                },

                //結束時間
                {
                    'mode': 'eleclick',
                    'selector': 'div[TimedayCore="day"]',
                    'nth': 1,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'button[type="button"]',
                    'nth': 14,
                },

                {
                    'mode': 'elemove',
                    'selector': 'div[ShellEllipse="leftIcon"]',
                    'nth': -1,
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
