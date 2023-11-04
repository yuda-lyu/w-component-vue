<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-input-checkbox</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'default'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.string.items"
                    v-model="WInputCheckbox.string.selects"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'click (console.log)'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.string.items"
                    v-model="WInputCheckbox.string.selects"
                    @click="ckRadio"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'object items & keyText'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.objectName.items"
                    v-model="WInputCheckbox.objectName.selects"
                    :keyText="'name'"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.object.items"
                    v-model="WInputCheckbox.object.selects"
                    :paddingStyle="{top:0,right:0,bottom:5,left:0}"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'arrange & paddingStyle'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.object.items"
                    v-model="WInputCheckbox.object.selects"
                    :arrange="'horizontal'"
                    :paddingStyle="{top:0,right:10,bottom:0,left:0}"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'textFontSize & paddingStyle'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.object.items"
                    v-model="WInputCheckbox.object.selects"
                    :textFontSize="'0.75rem'"
                    :paddingStyle="{top:0,right:0,bottom:5,left:0}"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'textColor & textColorHover & textColorActive'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.object.items"
                    v-model="WInputCheckbox.object.selects"
                    :textColor="'#666'"
                    :textColorHover="'#7B1FA2'"
                    :textColorActive="'#4A148C'"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'slot & paddingStyle & verticalAlign & inputSize & inputShiftTop'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.object.items"
                    v-model="WInputCheckbox.object.selects"
                    :paddingStyle="{top:5,right:0,bottom:5,left:0}"
                    :verticalAlign="'top'"
                    :inputSize="18"
                    :inputShiftTop="2"
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

                                <div :style="`font-size:0.9rem; color:${props.isActive?'#5E35B1':'#666'};`">
                                    {{props.item.data.text}}
                                </div>

                            </div>

                            <div style="padding-left:26px;">

                                <div :style="`font-size:0.7rem; color:${props.isActive?'#EC407A':'#999'};`">
                                    {{props.item.data.dsp}}
                                </div>

                            </div>

                        </div>
                    </template>
                </w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'not editable'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.object.items"
                    v-model="WInputCheckbox.object.selects"
                    :editable="false"
                ></w-input-checkbox>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-input-checkbox'"
                    :casename="'not editable & textColorDisabled'"
                ></demolink>

                <w-input-checkbox
                    :items="WInputCheckbox.object.items"
                    v-model="WInputCheckbox.object.selects"
                    :editable="false"
                    :textColorDisabled="'#FFB74D'"
                ></w-input-checkbox>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiAccountSupervisorCircle, mdiViewDashboard, mdiClockTimeEightOutline, mdiBlenderSoftware, mdiApple, mdiSpoonSugar } from '@mdi/js'
import demolink from './components/demolink.vue'
import WInputCheckbox from './components/WInputCheckbox.vue'
import WIcon from './components/WIcon.vue'


export default {
    components: {
        demolink,
        WInputCheckbox,
        WIcon,
    },
    props: {
    },
    data: function() {
        return {
            mdiAccountSupervisorCircle,
            'WInputCheckbox': {
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
                    'selects': [
                        {
                            text: 'Dashboard',
                            icon: mdiViewDashboard,
                            dsp: 'Estimate how felon enfranchisement.',
                        },
                        {
                            text: '蘋果',
                            icon: mdiApple,
                            dsp: 'From being turned in as evidence or by abandonment.',
                        }
                    ]
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
                    'selects': [
                        {
                            name: 'Dashboard',
                            icon: mdiViewDashboard,
                        }
                    ]
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
