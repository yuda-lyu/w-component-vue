<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-icon-radio</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectFA.items"
                    v-model="WGroupIconRadio.objectFA.select"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'tooltip'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :tooltip="'測試中文tooltip'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'tooltip & tooltipBorderRadius'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :tooltip="'測試中文tooltip'"
                    :tooltipBorderRadius="10"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'tooltip & tooltipPaddingStyle'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :tooltip="'測試中文tooltip'"
                    :tooltipPaddingStyle="{v:10,h:13}"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'tooltip & tooltipTextFontSize'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextFontSize="'0.7rem'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'tooltip & tooltipTextColor & tooltipBackgroundColor'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextColor="'#E65100'"
                    :tooltipBackgroundColor="'#FFF3E0'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'paddingStyle & iconSize'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :paddingStyle="{v:6,h:8}"
                    :iconSize="26"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'iconColor & iconColorHover & iconColorFocus & iconColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :iconColor="'#888'"
                    :iconColorHover="'#666'"
                    :iconColorFocus="'#444'"
                    :iconColorActive="'#4A148C'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :borderRadius="0"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'borderColor & borderColorHover & borderColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                    :borderColorActive="'transparent'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'borderWidth & borderColor & borderColorHover & borderColorFocus & borderColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :borderWidth="1"
                    :borderColor="'#ccc'"
                    :borderColorHover="'#b5b5b5'"
                    :borderColorFocus="'#aaa'"
                    :borderColorActive="'#999'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'backgroundColor & backgroundColorHover & backgroundColorFocus & backgroundColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :backgroundColor="'#FFF3E0'"
                    :backgroundColorHover="'#FFF6E6'"
                    :backgroundColorFocus="'#FFE0B2'"
                    :backgroundColorActive="'#fad2a2'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'seplineWidth'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :seplineWidth="0"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'seplineColor'"
                ></demolink>

                <div style="display:inline-block; padding:20px; background:#555;">
                    <w-group-icon-radio
                        :items="WGroupIconRadio.object.items"
                        v-model="WGroupIconRadio.object.select"
                        :seplineColor="'#aaa'"
                    ></w-group-icon-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'rippleColor'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :rippleColor="'rgba(0,20,255,0.3)'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'shadow'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :shadow="true"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'shadow & shadowStyle'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :shadow="true"
                    :shadowStyle="'0 12px 20px -10px rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                    _shadowStyle="'0 3px 1px -2px {backgroundColorAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorAlpha=0.12}'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'not editable'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :editable="false"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & icon (material)'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & icon (fontawesome)'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectFA.items"
                    v-model="WGroupIconRadio.objectFA.select"
                    :dir="'vertical'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & tooltip'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & tooltip & tooltipBorderRadius'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipBorderRadius="10"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & tooltip & tooltipPaddingStyle'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipPaddingStyle="{v:10,h:13}"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & tooltip & tooltipTextFontSize'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextFontSize="'0.7rem'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & tooltip & tooltipTextColor & tooltipBackgroundColor'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.objectTP.items"
                    v-model="WGroupIconRadio.objectTP.select"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextColor="'#E65100'"
                    :tooltipBackgroundColor="'#FFF3E0'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & paddingStyle & iconSize'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :paddingStyle="{v:6,h:8}"
                    :iconSize="26"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & iconColor & iconColorHover & iconColorFocus & iconColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :iconColor="'#888'"
                    :iconColorHover="'#666'"
                    :iconColorFocus="'#444'"
                    :iconColorActive="'#4A148C'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & borderRadius'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :borderRadius="0"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & borderColor & borderColorHover & borderColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                    :borderColorActive="'transparent'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & borderWidth & borderColor & borderColorHover & borderColorFocus & borderColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :borderWidth="1"
                    :borderColor="'#ccc'"
                    :borderColorHover="'#b5b5b5'"
                    :borderColorFocus="'#aaa'"
                    :borderColorActive="'#999'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & backgroundColor & backgroundColorHover & backgroundColorFocus & backgroundColorActive'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :backgroundColor="'#FFF3E0'"
                    :backgroundColorHover="'#FFF6E6'"
                    :backgroundColorFocus="'#FFE0B2'"
                    :backgroundColorActive="'#fad2a2'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & seplineWidth'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :seplineWidth="0"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & seplineColor'"
                ></demolink>

                <div style="display:inline-block; padding:20px; background:#555;">
                    <w-group-icon-radio
                        :items="WGroupIconRadio.object.items"
                        v-model="WGroupIconRadio.object.select"
                        :dir="'vertical'"
                        :seplineColor="'#aaa'"
                    ></w-group-icon-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & rippleColor'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :rippleColor="'rgba(0,20,255,0.3)'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & shadow'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :shadow="true"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & shadow & shadowStyle'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :shadow="true"
                    :shadowStyle="'0 12px 20px -10px rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                    _shadowStyle="'0 3px 1px -2px {backgroundColorAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorAlpha=0.12}'"
                ></w-group-icon-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-radio'"
                    :casename="'dir(vertical) & not editable'"
                ></demolink>

                <w-group-icon-radio
                    :items="WGroupIconRadio.object.items"
                    v-model="WGroupIconRadio.object.select"
                    :dir="'vertical'"
                    :editable="false"
                ></w-group-icon-radio>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WGroupIconRadio from './components/WGroupIconRadio.vue'


export default {
    components: {
        demolink,
        WGroupIconRadio,
    },
    props: {
    },
    data: function() {
        return {
            'WGroupIconRadio': {
                'object': {
                    'items': [
                        {
                            icon: mdiViewDashboard,
                        },
                        {
                            icon: mdiClockTimeEightOutline,
                        },
                        {
                            icon: mdiBlenderSoftware,
                        },
                        {
                            icon: mdiSpoonSugar,
                        },
                        {
                            icon: mdiApple,
                        },
                    ],
                    'select': {
                        icon: mdiViewDashboard,
                    },
                },
                'objectOne': {
                    'items': [
                        {
                            icon: mdiViewDashboard,
                        },
                    ],
                    'select': {
                        icon: mdiViewDashboard,
                    },
                },
                'objectTP': {
                    'items': [
                        {
                            icon: mdiViewDashboard,
                            tooltip: 'tooltip for Dashboard',
                        },
                        {
                            icon: mdiClockTimeEightOutline,
                            tooltip: 'tooltip for Schedule',
                        },
                        {
                            icon: mdiBlenderSoftware,
                            tooltip: 'tooltip for Profile',
                        },
                        {
                            icon: mdiSpoonSugar,
                            tooltip: 'tooltip for History',
                        },
                        {
                            icon: mdiApple,
                            tooltip: 'tooltip for 蘋果',
                        },
                    ],
                    'select': {
                        icon: mdiViewDashboard,
                        tooltip: 'tooltip for Dashboard',
                    },
                },
                'objectFA': {
                    'items': [
                        {
                            icon: 'fa fa-address-book',
                        },
                        {
                            icon: 'fa fa-address-card',
                        },
                        {
                            icon: 'fa fa-american-sign-language-interpreting',
                        },
                        {
                            icon: 'fa fa-balance-scale',
                        },
                        {
                            icon: 'fa fa-heartbeat',
                        },
                    ],
                    'select': {
                        icon: 'fa fa-address-book',
                    },
                },
            },
            'actions': [
            ],
        }
    },
    methods: {
        ckBtn: function(item, mode) {
            console.log(item, mode)
        },
    },
}
</script>

<style scoped>
</style>
