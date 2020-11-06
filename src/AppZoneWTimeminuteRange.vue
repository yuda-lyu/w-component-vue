<template>
    <div>


        <div class="head1">w-timeminute-range</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'default'"
                ></demolink>

                <w-timeminute-range
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-timeminute-range
                    :borderRadius="5"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'minuteBetween'"
                ></demolink>

                <w-timeminute-range
                    :minuteBetween="'to'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-timeminute-range
                    :icon="mdiCheckUnderlineCircle"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-timeminute-range
                    :icon="'fas fa-clipboard-check'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'iconColor & iconColorFoucs'"
                ></demolink>

                <w-timeminute-range
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'pickColor'"
                ></demolink>

                <w-timeminute-range
                    :pickColor="'brown'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'iconTooltip'"
                ></demolink>

                <w-timeminute-range
                    :iconTooltip="'show tooltip'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'not editable'"
                ></demolink>

                <w-timeminute-range
                    :editable="false"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'hourMin & hourMax'"
                ></demolink>

                <w-timeminute-range
                    :hourMin="9"
                    :hourMax="12"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'minuteInter'"
                ></demolink>

                <w-timeminute-range
                    :minuteInter="10"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'minutesCustom'"
                ></demolink>

                <w-timeminute-range
                    :minutesCustom="['10:00','10:30','11:15','12:00']"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & default'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & borderRadius'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :borderRadius="5"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & minuteBetween'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minuteBetween="'to'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & icon (material)'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & icon (fontawesome)'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="'fas fa-clipboard-check'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'cyan lighten-2'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & pickColor'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :pickColor="'brown'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & iconTooltip'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :iconTooltip="'show tooltip'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & not editable'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :editable="false"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & hourMin & hourMax'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :hourMin="9"
                    :hourMax="12"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & minuteInter'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minuteInter="10"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & minutesCustom'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minutesCustom="['10:00','10:30','11:15','12:00']"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTimeminuteRange from './components/WTimeminuteRange.vue'


export default {
    components: {
        demolink,
        WTimeminuteRange,
    },
    props: {
    },
    data: function() {
        return {
            mdiCheckUnderlineCircle,
            mdiPaw,
            'WTimeminuteRange': {
                minuteStart: '2019-01-01T10:00:00',
                minuteEnd: '2019-02-01T12:00:00',
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
                {
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                    'nth': 0,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div.v-list-item__title',
                    'nth': 1,
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
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                    'nth': 1,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div.v-list-item__title',
                    'nth': 1,
                },

                {
                    'mode': 'keypress',
                    'key': 'Tab'
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
