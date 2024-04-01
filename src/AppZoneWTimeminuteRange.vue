<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-timeminute-range</span></div>


        <div>


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
                    :casename="'paddingStyle (thin style) & placementDist'"
                ></demolink>

                <w-timeminute-range
                    :icon="''"
                    :paddingStyle="{v:0,h:8}"
                    :placementDist="3"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'paddingStyle (thin style) & textFontSize & placementDist'"
                ></demolink>

                <w-timeminute-range
                    :icon="''"
                    :paddingStyle="{v:0,h:8}"
                    :textFontSize="'0.7rem'"
                    :placementDist="3"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'paddingStyle (equal height to using icon)'"
                ></demolink>

                <w-timeminute-range
                    :icon="''"
                    :paddingStyle="{v:4,h:15}"
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
                    :casename="'between'"
                ></demolink>

                <w-timeminute-range
                    :between="'至'"
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
                    :casename="'icon & iconSize & placementDist'"
                ></demolink>

                <w-timeminute-range
                    :icon="mdiCheckUnderlineCircle"
                    :iconSize="20"
                    :placementDist="6"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'iconColor & iconColorHover & iconColorFoucs'"
                ></demolink>

                <w-timeminute-range
                    :iconColor="'cyan lighten-2'"
                    :iconColorHover="'cyan lighten-1'"
                    :iconColorFocus="'cyan darken-1'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'textColor & expansionIconColor'"
                ></demolink>

                <w-timeminute-range
                    :textColor="'orange darken-2'"
                    :expansionIconColor="'orange lighten-1'"
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
                    :casename="'empty'"
                ></demolink>

                <w-timeminute-range
                    :minuteStart.sync="WTimeminuteRange.minuteStartEmpty"
                    :minuteEnd.sync="WTimeminuteRange.minuteEndEmpty"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'empty & textEmpty'"
                ></demolink>

                <w-timeminute-range
                    :textEmpty="'請選擇日期'"
                    :minuteStart.sync="WTimeminuteRange.minuteStartEmpty"
                    :minuteEnd.sync="WTimeminuteRange.minuteEndEmpty"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & paddingStyle (thin style) & placementDist'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="''"
                    :paddingStyle="{v:0,h:8}"
                    :placementDist="3"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & paddingStyle (thin style) & textFontSize & placementDist'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="''"
                    :paddingStyle="{v:0,h:8}"
                    :textFontSize="'0.7rem'"
                    :placementDist="3"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & paddingStyle (equal height to using icon)'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="''"
                    :paddingStyle="{v:4,h:15}"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :borderRadius="5"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & between'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :between="'至'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="'fas fa-clipboard-check'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & iconColor & iconColorHover & iconColorFoucs & borderColor & borderColorHover & borderColorFocus & backgroundColor & backgroundColorHover & backgroundColorFocus'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'cyan lighten-2'"
                    :borderColorHover="'cyan lighten-1'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :iconColor="'cyan lighten-2'"
                    :iconColorHover="'cyan lighten-1'"
                    :iconColorFocus="'cyan darken-1'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'border & textColor & expansionIconColor'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :textColor="'orange darken-2'"
                    :expansionIconColor="'orange lighten-1'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :iconTooltip="'show tooltip'"
                    :minuteStart.sync="WTimeminuteRange.minuteStart"
                    :minuteEnd.sync="WTimeminuteRange.minuteEnd"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'empty'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minuteStart.sync="WTimeminuteRange.minuteStartEmpty"
                    :minuteEnd.sync="WTimeminuteRange.minuteEndEmpty"
                ></w-timeminute-range>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute-range'"
                    :casename="'empty & textEmpty'"
                ></demolink>

                <w-timeminute-range
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :textEmpty="'請選擇日期'"
                    :minuteStart.sync="WTimeminuteRange.minuteStartEmpty"
                    :minuteEnd.sync="WTimeminuteRange.minuteEndEmpty"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'white'"
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
                'minuteStart': '2019-01-01T10:00:00',
                'minuteEnd': '2019-02-01T12:00:00',
                'minuteStartEmpty': '',
                'minuteEndEmpty': '',
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
