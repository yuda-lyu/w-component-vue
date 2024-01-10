<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-icon-check</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectFA.items"
                    v-model="WGroupIconCheck.objectFA.selects"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'tooltip'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :tooltip="'測試中文tooltip'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'tooltip & tooltipBorderRadius'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :tooltip="'測試中文tooltip'"
                    :tooltipBorderRadius="10"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'tooltip & tooltipPaddingStyle'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :tooltip="'測試中文tooltip'"
                    :tooltipPaddingStyle="{v:10,h:13}"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'tooltip & tooltipTextFontSize'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextFontSize="'0.7rem'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'tooltip & tooltipTextColor & tooltipBackgroundColor'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextColor="'#E65100'"
                    :tooltipBackgroundColor="'#FFF3E0'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'paddingStyle & iconSize'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :paddingStyle="{v:6,h:8}"
                    :iconSize="26"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'iconColor & iconColorHover & iconColorFocus & iconColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :iconColor="'#888'"
                    :iconColorHover="'#666'"
                    :iconColorFocus="'#444'"
                    :iconColorActive="'#4A148C'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :borderRadius="0"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'borderColor & borderColorHover & borderColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                    :borderColorActive="'transparent'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'borderWidth & borderColor & borderColorHover & borderColorFocus & borderColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :borderWidth="1"
                    :borderColor="'#ccc'"
                    :borderColorHover="'#b5b5b5'"
                    :borderColorFocus="'#aaa'"
                    :borderColorActive="'#999'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'backgroundColor & backgroundColorHover & backgroundColorFocus & backgroundColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :backgroundColor="'#FFF3E0'"
                    :backgroundColorHover="'#FFF6E6'"
                    :backgroundColorFocus="'#FFE0B2'"
                    :backgroundColorActive="'#fad2a2'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'seplineWidth'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :seplineWidth="0"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'one'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectOne.items"
                    v-model="WGroupIconCheck.objectOne.selects"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'seplineColor'"
                ></demolink>

                <div style="display:inline-block; padding:20px; background:#555;">
                    <w-group-icon-check
                        :items="WGroupIconCheck.object.items"
                        v-model="WGroupIconCheck.object.selects"
                        :seplineColor="'#aaa'"
                    ></w-group-icon-check>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'rippleColor'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :rippleColor="'rgba(0,20,255,0.3)'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'shadow'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :shadow="true"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'shadow & shadowStyle'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :shadow="true"
                    :shadowStyle="'0 12px 20px -10px rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                    _shadowStyle="'0 3px 1px -2px {backgroundColorAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorAlpha=0.12}'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'not editable'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :editable="false"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & icon (material)'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & icon (fontawesome)'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectFA.items"
                    v-model="WGroupIconCheck.objectFA.selects"
                    :dir="'vertical'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & tooltip'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & tooltip & tooltipBorderRadius'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipBorderRadius="10"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & tooltip & tooltipPaddingStyle'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipPaddingStyle="{v:10,h:13}"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & tooltip & tooltipTextFontSize'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextFontSize="'0.7rem'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & tooltip & tooltipTextColor & tooltipBackgroundColor'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectTP.items"
                    v-model="WGroupIconCheck.objectTP.selects"
                    :dir="'vertical'"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextColor="'#E65100'"
                    :tooltipBackgroundColor="'#FFF3E0'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & paddingStyle & iconSize'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :paddingStyle="{v:6,h:8}"
                    :iconSize="26"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & iconColor & iconColorHover & iconColorFocus & iconColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :iconColor="'#888'"
                    :iconColorHover="'#666'"
                    :iconColorFocus="'#444'"
                    :iconColorActive="'#4A148C'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & borderRadius'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :borderRadius="0"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & borderColor & borderColorHover & borderColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                    :borderColorActive="'transparent'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & borderWidth & borderColor & borderColorHover & borderColorFocus & borderColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :borderWidth="1"
                    :borderColor="'#ccc'"
                    :borderColorHover="'#b5b5b5'"
                    :borderColorFocus="'#aaa'"
                    :borderColorActive="'#999'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & backgroundColor & backgroundColorHover & backgroundColorFocus & backgroundColorActive'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :backgroundColor="'#FFF3E0'"
                    :backgroundColorHover="'#FFF6E6'"
                    :backgroundColorFocus="'#FFE0B2'"
                    :backgroundColorActive="'#fad2a2'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & seplineWidth'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :seplineWidth="0"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & one'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.objectOne.items"
                    v-model="WGroupIconCheck.objectOne.selects"
                    :dir="'vertical'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & seplineColor'"
                ></demolink>

                <div style="display:inline-block; padding:20px; background:#555;">
                    <w-group-icon-check
                        :items="WGroupIconCheck.object.items"
                        v-model="WGroupIconCheck.object.selects"
                        :dir="'vertical'"
                        :seplineColor="'#aaa'"
                    ></w-group-icon-check>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & rippleColor'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :rippleColor="'rgba(0,20,255,0.3)'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & shadow'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :shadow="true"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & shadow & shadowStyle'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :shadow="true"
                    :shadowStyle="'0 12px 20px -10px rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                    _shadowStyle="'0 3px 1px -2px {backgroundColorAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorAlpha=0.12}'"
                ></w-group-icon-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-icon-check'"
                    :casename="'dir(vertical) & not editable'"
                ></demolink>

                <w-group-icon-check
                    :items="WGroupIconCheck.object.items"
                    v-model="WGroupIconCheck.object.selects"
                    :dir="'vertical'"
                    :editable="false"
                ></w-group-icon-check>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WGroupIconCheck from './components/WGroupIconCheck.vue'


export default {
    components: {
        demolink,
        WGroupIconCheck,
    },
    props: {
    },
    data: function() {
        return {
            'WGroupIconCheck': {
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
                    'selects': [
                        {
                            icon: mdiViewDashboard,
                        },
                        {
                            icon: mdiBlenderSoftware,
                        }
                    ]
                },
                'objectOne': {
                    'items': [
                        {
                            icon: mdiViewDashboard,
                        },
                    ],
                    'selects': [
                        {
                            icon: mdiViewDashboard,
                        },
                    ]
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
                    'selects': [
                        {
                            icon: mdiViewDashboard,
                            tooltip: 'tooltip for Dashboard',
                        },
                        {
                            icon: mdiBlenderSoftware,
                            tooltip: 'tooltip for Profile',
                        }
                    ]
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
                    'selects': [
                        {
                            icon: 'fa fa-address-book',
                        },
                        {
                            icon: 'fa fa-american-sign-language-interpreting',
                        }
                    ]
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
