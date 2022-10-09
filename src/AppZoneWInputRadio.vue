<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-input-radio</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'default'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.string.items"
                    v-model="WInputRadio.string.select"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'click (console.log)'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.string.items"
                    v-model="WInputRadio.string.select"
                    @click="ckRadio"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'object items & keyText'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.objectName.items"
                    v-model="WInputRadio.objectName.select"
                    :keyText="'name'"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'marginStyle'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.object.items"
                    v-model="WInputRadio.object.select"
                    :marginStyle="{top:5,right:0,bottom:5,left:0}"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.object.items"
                    v-model="WInputRadio.object.select"
                    :paddingStyle="{top:5,right:0,bottom:5,left:0}"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'arrange & marginStyle'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.object.items"
                    v-model="WInputRadio.object.select"
                    :arrange="'horizontal'"
                    :marginStyle="{top:0,right:10,bottom:0,left:0}"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'arrange & paddingStyle'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.object.items"
                    v-model="WInputRadio.object.select"
                    :arrange="'horizontal'"
                    :paddingStyle="{top:0,right:10,bottom:0,left:0}"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'textColor & textColorHover & textColorActive'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.object.items"
                    v-model="WInputRadio.object.select"
                    :textColor="'#666'"
                    :textColorHover="'#7B1FA2'"
                    :textColorActive="'#4A148C'"
                ></w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'slot & paddingStyle & verticalAlign & inputHeight'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.object.items"
                    v-model="WInputRadio.object.select"
                    :paddingStyle="{top:5,right:0,bottom:5,left:0}"
                    :verticalAlign="'top'"
                    :inputHeight="22"
                >
                    <template v-slot="props">
                        <div style="padding-left:8px; cursor:pointer;">

                            <div style="display:flex; align-items:center;">

                                <w-icon
                                    :icon="props.item.data.icon"
                                    style="margin-right:5px;"
                                    :size="20"
                                    :color="props.isActive?'#3949AB':props.isHover?'#7E57C2':'#aaa'"
                                ></w-icon>

                                <div style="font-size:0.9rem;">
                                    {{props.item.data.text}}
                                </div>

                            </div>

                            <div style="padding-left:26px;">

                                <div style="font-size:0.7rem; color:#999;">
                                    {{props.item.data.dsp}}
                                </div>

                            </div>

                        </div>
                    </template>
                </w-input-radio>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-radio'"
                    :casename="'not editable'"
                ></demolink>

                <w-input-radio
                    :items="WInputRadio.object.items"
                    v-model="WInputRadio.object.select"
                    :editable="false"
                ></w-input-radio>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiAccountSupervisorCircle, mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WInputRadio from './components/WInputRadio.vue'
import WIcon from './components/WIcon.vue'


export default {
    components: {
        demolink,
        WInputRadio,
        WIcon,
    },
    props: {
    },
    data: function() {
        return {
            mdiAccountSupervisorCircle,
            'WInputRadio': {
                'string': {
                    'items': [
                        'Dashboard',
                        'Schedule',
                        'Profile',
                        'History',
                        'Apple',
                        '橘子'
                    ],
                    'select': 'Apple'
                },
                'object': {
                    'items': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                            dsp: 'Estimate how felon enfranchisement.',
                        },
                        {
                            text: 'Schedule',
                            icon: mdiClockTimeEightOutline,
                            dsp: 'Could affect close elections.',
                        },
                        {
                            text: 'Profile',
                            icon: mdiBlenderSoftware,
                            dsp: ' Track how disenfranchisement',
                        },
                        {
                            text: 'History',
                            icon: mdiSpoonSugar,
                            dsp: 'An American non-profit journalism outlet.',
                        },
                        {
                            text: '蘋果',
                            icon: mdiApple,
                            dsp: 'From being turned in as evidence or by abandonment.',
                        },
                    ],
                    'select': {
                        text: 'Dashboard',
                        icon: mdiViewDashboard,
                    }
                },
                'objectName': {
                    'items': [
                        {
                            name: 'Dashboard',
                            icon: mdiViewDashboard,
                        },
                        {
                            name: 'Schedule',
                            icon: mdiClockTimeEightOutline,
                        },
                        {
                            name: 'Profile',
                            icon: mdiBlenderSoftware,
                        },
                        {
                            name: 'History',
                            icon: mdiSpoonSugar,
                        },
                        {
                            name: '蘋果',
                            icon: mdiApple,
                        },
                    ],
                    'select': {
                        name: 'Dashboard',
                        icon: mdiViewDashboard,
                    }
                },
            },
            'actions': [
            ],
        }
    },
    methods: {
        ckRadio: function(item) {
            console.log(item)
        },
    },
}
</script>

<style scoped>
</style>
