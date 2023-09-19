<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-check</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'default'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.string.items"
                    v-model="WGroupCheck.string.selects"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'click (console.log)'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.string.items"
                    v-model="WGroupCheck.string.selects"
                    @click="ckBtn"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'icon (material)'"
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
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.objectFA.items"
                    v-model="WGroupCheck.objectFA.selects"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'marginStyle'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :marginStyle="{top:0,right:25,bottom:0,left:0}"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'tooltip'"
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
                    :casename="'paddingStyle & iconSize & textFontSize'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :paddingStyle="{v:10,h:24}"
                    :iconSize="26"
                    :textFontSize="'0.9rem'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'shiftLeft'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :shiftLeft="5"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'shiftLeft & shiftRight'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :shiftLeft="7"
                    :shiftRight="5"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'textColor'"
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
                    :casename="'borderRadius & borderRadiusStyle & paddingStyle'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :borderRadius="20"
                    :borderRadiusStyle="{top:true}"
                    :paddingStyle="{v:3,h:20}"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'borderColor & borderColorHover & borderColorActive'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                    :borderColorActive="'transparent'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'borderWidth & borderColor & borderColorHover & borderColorActive'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :borderWidth="{top:2,bottom:2,left:2,right:2}"
                    _1borderWidth="{top:1}"
                    _2borderWidth="{bottom:1}"
                    _3borderWidth="{left:1}"
                    _4borderWidth="{right:1}"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                    :borderColorActive="'#fff'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'backgroundColor & backgroundColorHover'"
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
                    :casename="'group & borderColor & borderColorHover & borderColorActive & no shadowActive'"
                ></demolink>

                <div style="padding:10px 0px;"><!-- 因使用group故marginStyle會被取消, 此處添加padding只是讓排版一致 -->
                    <w-group-check
                        :items="WGroupCheck.object.items"
                        v-model="WGroupCheck.object.selects"
                        :group="true"
                        :borderColor="'#aaa'"
                        :borderColorHover="'#aaa'"
                        :borderColorActive="'orange lighten-2'"
                        :shadowActive="false"
                    ></w-group-check>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'group & borderColor & borderColorHover & borderColorActive & textColorActive & iconColorActive & backgroundColorActive & no shadowActive'"
                ></demolink>

                <div style="padding:10px 0px;"><!-- 因使用group故marginStyle會被取消, 此處添加padding只是讓排版一致 -->
                    <w-group-check
                        :items="WGroupCheck.object.items"
                        v-model="WGroupCheck.object.selects"
                        :group="true"
                        :borderColor="'#ccc'"
                        :borderColorHover="'orange lighten-2'"
                        :borderColorActive="'orange lighten-2'"
                        :textColorActive="'orange darken-3'"
                        :iconColorActive="'orange darken-3'"
                        :backgroundColorActive="'orange lighten-5'"
                        :shadowActive="false"
                    ></w-group-check>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'group (only one)'"
                ></demolink>

                <div style="padding:10px 0px;"><!-- 因使用group故marginStyle會被取消, 此處添加padding只是讓排版一致 -->
                    <w-group-check
                        :items="WGroupCheck.objectOne.items"
                        v-model="WGroupCheck.objectOne.selects"
                        :group="true"
                        :borderColor="'#aaa'"
                        :borderColorHover="'#aaa'"
                        :borderColorActive="'orange lighten-2'"
                        :shadowActive="false"
                    ></w-group-check>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'group & groupBorderRadiusStyle & groupShift & borderRadius & borderColor & borderColorHover & borderColorActive & no shadowActive & marginStyle'"
                ></demolink>

                <div style="margin:20px 0px">
                    <div style="padding-left:20px; margin-bottom:-1px;"><!-- 因上下皆有border, 故需負margin-bottom來吃掉重複border -->
                        <w-group-check
                            :items="WGroupCheck.object.items"
                            v-model="WGroupCheck.object.selects"
                            :group="true"
                            :groupBorderRadiusStyle="{top:true}"
                            :groupShift="7"
                            :borderRadius="20"
                            :borderColor="'#aaa'"
                            :borderColorHover="'#aaa'"
                            :borderColorActive="'orange lighten-2'"
                            :shadowActive="false"
                            :marginStyle="{}"
                        ></w-group-check>
                    </div>
                    <div style="border:1px solid #aaa; padding:15px; font-size:0.85rem;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>

                <div style="margin:20px 0px">
                    <div style="border:1px solid #aaa; padding:15px; font-size:0.85rem;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div style="padding-left:20px; margin-top:-0.5px;"><!-- 因上下皆有border, 故需負margin-top來吃掉重複border, 0.5因渲染問題為手動調整結果 -->
                        <w-group-check
                            :items="WGroupCheck.object.items"
                            v-model="WGroupCheck.object.selects"
                            :group="true"
                            :groupBorderRadiusStyle="{bottom:true}"
                            :groupShift="7"
                            :borderRadius="20"
                            :borderColor="'#aaa'"
                            :borderColorHover="'#aaa'"
                            :borderColorActive="'orange lighten-2'"
                            :shadowActive="false"
                            :marginStyle="{}"
                        ></w-group-check>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'slot & shadow'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.string.items"
                    v-model="WGroupCheck.string.selects"
                    :shadow="true"
                    :backgroundColorActive="'grey'"
                >
                    <template v-slot="props">
                        <div style="display:flex; align-items:center;">

                            <div style="margin-left:-9px; margin-right:5px; user-select:none; padding:2px 12px; font-size:0.75rem; color:#fff; background:#aa00ff; border-radius:12px; box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);">
                                View
                            </div>

                            <div :style="`margin-right:-9px; display:inline-block; border-radius:10px; font-size:0.85rem; user-select:none; padding:0px 12px; ${props.item.active?'color:#000; background:rgba(255,255,255,0.7);':'color:#444; background:transparent;'}`">
                                {{props.item.data}}
                            </div>

                        </div>
                    </template>
                </w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'loading'"
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
                    :casename="'loading & loadingColor'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :loading="true"
                    :loadingColor="'orange darken-4'"
                ></w-group-check>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'paddingStyle & borderRadius & textColor & iconColor & backgroundColor & backgroundColorHover & backgroundColorActive & shadowActive'"
                ></demolink>

                <div style="padding:0px 10px; background:linear-gradient(60deg,#ab47bc,#7b1fa2); box-shadow:0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);">
                    <w-group-check
                        :items="WGroupCheck.object.items"
                        v-model="WGroupCheck.object.selects"
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
                    ></w-group-check>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-check'"
                    :casename="'not editable'"
                ></demolink>

                <w-group-check
                    :items="WGroupCheck.object.items"
                    v-model="WGroupCheck.object.selects"
                    :editable="false"
                ></w-group-check>

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
                'objectOne': {
                    'items': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                        },
                    ],
                    'selects': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                        },
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
    methods: {
        ckBtn: function(item, mode) {
            console.log(item, mode)
        },
    },
}
</script>

<style scoped>
</style>
