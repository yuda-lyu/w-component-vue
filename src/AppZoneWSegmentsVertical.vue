<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-segments-vertical</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'default'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'width & height'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :width="300"
                    :height="800"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'paddingStyle & textShift & width & height'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#e1cd9d;">
                    <div style="background:#fef8ef; border:1px solid #fff; box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);">
                        <w-segments-vertical
                            :items="WSegmentsVertical.items"
                            :width="250"
                            :height="700"
                            :paddingStyle="{
                                top: 40,
                                right: 0,
                                bottom: 40,
                                left: 70,
                            }"
                            :textShift="45"
                        ></w-segments-vertical>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'valueMin & valueMax'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :valueMin="1977"
                    :valueMax="2022"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'alignStart & alignEnd'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :alignStart="'left'"
                    :alignEnd="'left'"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'keyValueStart & keyValueEnd & keyText'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.itemsDepth"
                    :keyValueStart="'depthStart'"
                    :keyValueEnd="'depthEnd'"
                    :keyText="'kind'"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'funFormatTickValue'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.itemsDepth"
                    :keyValueStart="'depthStart'"
                    :keyValueEnd="'depthEnd'"
                    :keyText="'kind'"
                    :funFormatTickValue="(v)=>{return v.toFixed(1)}"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'axisColor & tickColor & tickSize & tickLabelColor & tickLabelFontSize'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :axisColor="'#FFA726'"
                    :tickColor="'#FFA726'"
                    :tickSize="10"
                    :tickLabelColor="'#795548'"
                    :tickLabelFontSize="'0.75rem'"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'segmentBackgroundColor & segmentBorderColor & segmentSize'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :segmentBackgroundColor="'rgba(255,120,150,0.9)'"
                    :segmentBorderColor="'#f26'"
                    :segmentSize="4"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'funSegmentBackgroundColor & segmentBorderColor'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :funSegmentBackgroundColor="genSegmentBackgroundColor"
                    :segmentBorderColor="'rgba(200,200,200,0.1)'"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'textWithPopup & slot text-popup'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :textWithPopup="true"
                >
                    <template v-slot:text-popup="props">
                        <div style="padding:5px 0px; max-width:400px;">
                            <div style="padding:10px 20px; background:#666;">
                                <span style="color:#fff;">{{props.item.text}}</span>
                            </div>
                            <div style="padding:5px;">
                                <div style="padding:5px 10px; font-size:0.8rem;">
                                    <span style="color:#888;">Start year: </span>
                                    <span style="color:#f26;">{{props.item.valueStart}}</span>
                                </div>
                                <div style="padding:5px 10px; font-size:0.8rem;">
                                    <span style="color:#888;">End year: </span>
                                    <span style="color:#f26;">{{props.item.valueEnd}}</span>
                                </div>
                            </div>
                            <div style="border-top:1px solid #ddd;"></div>
                            <div style="padding:5px;">
                                <div style="padding:5px 10px; font-size:0.8rem;">
                                    <span style="color:#444;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </div>
                                <div style="padding:5px 10px; font-size:0.8rem; text-align:right;">
                                    <a style="color:#5b29c5;" href="https://www.google.com/" target="_blank">read more</a>
                                </div>
                            </div>
                        </div>
                    </template>
                </w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'textFontSize & textColor & textBackgroundColor'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :textFontSize="'0.75rem'"
                    :textColor="'#fff'"
                    :textBackgroundColor="'#E53935'"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'textTriangularSize & textTriangularRatio'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :textTriangularSize="27"
                    :textTriangularRatio="3"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'items(continuous) & alignStart & alignEnd & textShift & textBackgroundColor'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.itemsConti"
                    :alignStart="'left'"
                    :alignEnd="'left'"
                    :textShift="10"
                    :textBackgroundColor="'#FFE0B2'"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'events & textCanClick & segmentCanClick'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :textCanClick="true"
                    :segmentCanClick="true"
                    @click-text="clickText"
                    @click-segment="clickSegment"
                ></w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'slot text'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :textWithPopup="true"
                >
                    <template v-slot:text="props">
                        <div style="display:flex; align-items:center;">

                            <w-icon
                                :icon="props.item.icon"
                                :size="20"
                                :color="'#E91E63'"
                            ></w-icon>

                            <div style="padding-left:5px; font-size:0.75rem;">
                                {{props.item.text}}
                            </div>

                        </div>
                    </template>
                </w-segments-vertical>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiStackOverflow, mdiBookMusicOutline, mdiCharity, mdiLightbulbGroupOutline, mdiMessageCogOutline, mdiGestureDoubleTap, mdiPencilOutline, mdiLightbulbOnOutline } from '@mdi/js/mdi.js'
import demolink from './components/demolink.vue'
import WIcon from './components/WIcon.vue'
import WSegmentsVertical from './components/WSegmentsVertical.vue'


export default {
    components: {
        demolink,
        WIcon,
        WSegmentsVertical,
    },
    props: {
    },
    data: function() {
        return {
            'WSegmentsVertical': {
                'items': [
                    {
                        valueStart: 1979,
                        valueEnd: 1985,
                        text: 'Myriel',
                        type: 'Audience',
                        icon: mdiStackOverflow,
                    },
                    {
                        valueStart: 1986,
                        valueEnd: 1992,
                        text: 'Napoleon',
                        type: 'Audience',
                        icon: mdiBookMusicOutline,
                    },
                    {
                        valueStart: 1995,
                        valueEnd: 2000,
                        text: 'MlleBaptistine',
                        type: 'Conversions',
                        icon: mdiCharity,
                    },
                    {
                        valueStart: 2001,
                        valueEnd: 2007,
                        text: 'MmeMagloire',
                        type: 'Management',
                        icon: mdiLightbulbGroupOutline,
                    },
                    {
                        valueStart: 2009,
                        valueEnd: 2012,
                        text: 'CountessDeLo',
                        type: 'Conversions',
                        icon: mdiMessageCogOutline,
                    },
                    {
                        valueStart: 2013,
                        valueEnd: 2015,
                        text: 'Geborand',
                        type: 'Actions',
                        icon: mdiGestureDoubleTap,
                    },
                    {
                        valueStart: 2017,
                        valueEnd: 2018,
                        text: 'Champtercier',
                        type: 'Actions',
                        icon: mdiPencilOutline,
                    },
                    {
                        valueStart: 2018,
                        valueEnd: 2020,
                        text: 'Cravatte',
                        type: 'Management',
                        icon: mdiLightbulbOnOutline,
                    },
                ],
                'itemsConti': [
                    {
                        valueStart: 1979,
                        valueEnd: 1985,
                        text: 'Myriel',
                        type: 'Audience',
                        icon: mdiStackOverflow,
                    },
                    {
                        valueStart: 1985,
                        valueEnd: 1992,
                        text: 'Napoleon',
                        type: 'Audience',
                        icon: mdiBookMusicOutline,
                    },
                    {
                        valueStart: 1992,
                        valueEnd: 2000,
                        text: 'MlleBaptistine',
                        type: 'Conversions',
                        icon: mdiCharity,
                    },
                    {
                        valueStart: 2000,
                        valueEnd: 2007,
                        text: 'MmeMagloire',
                        type: 'Management',
                        icon: mdiLightbulbGroupOutline,
                    },
                    {
                        valueStart: 2007,
                        valueEnd: 2012,
                        text: 'CountessDeLo',
                        type: 'Conversions',
                        icon: mdiMessageCogOutline,
                    },
                    {
                        valueStart: 2012,
                        valueEnd: 2015,
                        text: 'Geborand',
                        type: 'Actions',
                        icon: mdiGestureDoubleTap,
                    },
                    {
                        valueStart: 2015,
                        valueEnd: 2018,
                        text: 'Champtercier',
                        type: 'Actions',
                        icon: mdiPencilOutline,
                    },
                    {
                        valueStart: 2018,
                        valueEnd: 2020,
                        text: 'Cravatte',
                        type: 'Management',
                        icon: mdiLightbulbOnOutline,
                    },
                ],
                'itemsDepth': [
                    {
                        depthStart: 0,
                        depthEnd: 0.6,
                        kind: 'Sand',
                    },
                    {
                        depthStart: 1,
                        depthEnd: 1.4,
                        kind: 'Clay',
                    },
                    {
                        depthStart: 1.6,
                        depthEnd: 2.4,
                        kind: 'Silt',
                    },
                    {
                        depthStart: 2.7,
                        depthEnd: 3.2,
                        kind: 'Sand',
                    },
                    {
                        depthStart: 3.5,
                        depthEnd: 4.7,
                        kind: 'Clay',
                    },
                    {
                        depthStart: 5,
                        depthEnd: 5.3,
                        kind: 'Silt',
                    },
                    {
                        depthStart: 5.6,
                        depthEnd: 6,
                        kind: 'Sand',
                    },
                    {
                        depthStart: 6.7,
                        depthEnd: 7.2,
                        kind: 'Clay',
                    },
                ],
            },
            'actions': [
            ],
        }
    },
    methods: {
        genSegmentBackgroundColor: function(item) {
            // console.log('genSegmentBackgroundColor', item)
            let kp = {
                Audience: '#FF9800',
                Conversions: '#8BC34A',
                Management: '#039BE5',
                Actions: '#651FFF',
            }
            let c = kp[item.type]
            return c
        },
        clickText: function(msg) {
            console.log('clickText', msg)
        },
        clickSegment: function(msg) {
            console.log('clickSegment', msg)
        },
    }
}
</script>

<style scoped>
</style>
