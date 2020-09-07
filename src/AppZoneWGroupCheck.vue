<template>
    <div>


        <div class="head1">w-group-check</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.string.items"
                    v-model="WGroupCheck.string.selects"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.objectFA.items"
                    v-model="WGroupCheck.objectFA.selects"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'iconShiftLeft'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :iconShiftLeft="5"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'marginStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :marginStyle="'0px 25px 0px 0px'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'tooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.objectTP.items"
                    v-model="WGroupCheck.objectTP.selects"
                    :tooltip="'測試中文tooltip'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'sizePadding & iconSize & textFontSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :sizePadding="'10px 24px'"
                    :iconSize="26"
                    :textFontSize="'0.9rem'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :textColor="'grey darken-1'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'textColor & textColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :textColor="'grey darken-1'"
                    :textColorHover="'orange darken-3'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'textColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :textColorActive="'white'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'iconColor & iconColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :iconColor="'orange'"
                    :iconColorHover="'orange darken-2'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'iconColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :iconColorActive="'yellow'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :borderRadius="0"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'borderColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :borderColor="'grey'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'borderColor & borderColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'borderColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :borderColorActive="'white'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'backgroundColor & backgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :backgroundColor="'grey lighten-4'"
                    :backgroundColorHover="'grey lighten-2'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'backgroundColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :backgroundColorActive="'light-blue darken-2'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'shadow'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :shadow="true"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'shadow & shadowStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :shadow="true"
                    :shadowStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                    _shadowStyle="'0 3px 1px -2px {backgroundColorAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorAlpha=0.12}'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'shadowActiveStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :shadowActiveStyle="'0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'"
                    _shadowActiveStyle="'0 3px 1px -2px {backgroundColorActiveAlpha=0.2}, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 {backgroundColorActiveAlpha=0.12}'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'no shadowActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :shadowActive="false"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'slot & shadow'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.string.items"
                    v-model="WGroupCheck.string.selects"
                    :shadow="true"
                    :backgroundColorActive="'grey'"
                >
                    <template v-slot="props">
                        <div style="display:flex; align-items:center;">
                            <div
                                style="margin:2px 5px 2px 2px; user-select:none; padding:2px 12px; font-size:0.75rem; color:#fff; background:#aa00ff; border-radius:12px; box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);"
                            >{{props.item.data}}</div>
                            <div
                                style="margin:2px; user-select:none; padding:2px 12px; font-size:0.75rem; color:#fff; background:#00acc1; border-radius:12px; box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);"
                            >View</div>
                        </div>
                    </template>
                </w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'loading'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :loading="true"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'loading & textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :loading="true"
                    :textColor="'orange darken-4'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :editable="false"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'sizePadding & borderRadius & textColor & iconColor & backgroundColor & backgroundColorHover & backgroundColorActive & shadowActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <div style="padding:0px 10px; background:linear-gradient(60deg,#ab47bc,#7b1fa2); box-shadow:0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);">
                    <w-group-check
                        :items="WGroupCheck.object.items"
                        v-model="WGroupCheck.object.selects"
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
                    ></w-group-check>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiAccountSupervisorCircle, mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WGroupCheck from './components/WGroupCheck.vue'


export default {
    components: {
        demolink,
        WGroupCheck,
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
            mdiAccountSupervisorCircle,
            'WGroupCheck': {
                'string': {
                    'items': [
                        'Dashboard',
                        'Schedule',
                        'Profile',
                        'History',
                        'Apple',
                        '橘子'
                    ],
                    'selects': ['Dashboard', 'Apple']
                },
                'object': {
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
                        {
                            text: '蘋果',
                            icon: mdiApple,
                        },
                    ],
                    'selects': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                        },
                        {
                            text: 'Profile',
                            icon: mdiBlenderSoftware,
                        }
                    ]
                },
                'objectTP': {
                    'items': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                            tooltip: 'tooltip for Dashboard',
                        },
                        {
                            text: 'Schedule',
                            icon: mdiClockTimeEightOutline,
                            tooltip: 'tooltip for Schedule',
                        },
                        {
                            text: 'Profile',
                            icon: mdiBlenderSoftware,
                            tooltip: 'tooltip for Profile',
                        },
                        {
                            text: 'History',
                            icon: mdiSpoonSugar,
                            tooltip: 'tooltip for History',
                        },
                        {
                            text: '蘋果',
                            icon: mdiApple,
                            tooltip: 'tooltip for 蘋果',
                        },
                    ],
                    'selects': [
                        {
                            text: 'Dashboard',
                            icon: mdiAccountSupervisorCircle,
                            tooltip: 'tooltip for Dashboard',
                        },
                        {
                            text: 'Profile',
                            icon: mdiBlenderSoftware,
                            tooltip: 'tooltip for Profile',
                        }
                    ]
                },
                'objectFA': {
                    'items': [
                        {
                            text: 'Dashboard',
                            icon: 'fa fa-address-book',
                        },
                        {
                            text: 'Schedule',
                            icon: 'fa fa-address-card',
                        },
                        {
                            text: 'Profile',
                            icon: 'fa fa-american-sign-language-interpreting',
                        },
                        {
                            text: 'History',
                            icon: 'fa fa-balance-scale',
                        },
                        {
                            text: '蘋果',
                            icon: 'fa fa-heartbeat',
                        },
                    ],
                    'selects': [
                        {
                            text: 'Dashboard',
                            icon: 'fa fa-address-book',
                        },
                        {
                            text: 'Profile',
                            icon: 'fa fa-american-sign-language-interpreting',
                        }
                    ]
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
