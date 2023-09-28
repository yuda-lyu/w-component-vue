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
                    :casename="'title & titleColor & titleFontSize & titleShift & width & paddingStyle'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :width="270"
                    :paddingStyle="{
                        top: 10,
                        right: 0,
                        bottom: 10,
                        left: 70,
                    }"
                    :title="'Timeline'"
                    :titleColor="'#666'"
                    :titleFontSize="'1.2rem'"
                    :titleShift="-58"
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
                    :casename="'funSegmentBackgroundColor & funSegmentBorderColor'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.items"
                    :funSegmentBackgroundColor="getSegmentBackgroundColor"
                    :funSegmentBorderColor="getSegmentBorderColor"
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


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'slot support-left & width & paddingStyle & segmentBackgroundType & funSegmentBackgroundImage & segmentBorderColor & tickSize & segmentSize & axisColor & tickColor & keyValueStart & keyValueEnd & keyText & alignEnd & textShift & title'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.itemLayers"
                    :width="310"
                    :paddingStyle="{
                        top: 10,
                        right: 0,
                        bottom: 10,
                        left: 95,
                    }"
                    :tickSize="30"
                    :segmentSize="50"
                    :segmentBackgroundType="'image'"
                    :funSegmentBackgroundImage="getSegmentBackgroundIcon"
                    :segmentBorderColor="{v:'transparent',h:'#444'}"
                    :axisColor="'transparent'"
                    :tickColor="'#444'"
                    :keyValueStart="'depthStart'"
                    :keyValueEnd="'depthEnd'"
                    :keyText="'description'"
                    :alignEnd="'left'"
                    :textShift="35"
                    :title="'Depth(m)'"
                >
                    <template v-slot:support-left="props">
                        <div :style="`padding-top:${props.convertValueToY(2.6)}px;`">

                            <!-- anchor line, 圖標與數值寬度38px -->
                            <div style="_width:38px; _border-top:1px solid #f26;">

                                <!-- wl vertical center line, 圖標與數值垂直中線距左側19px -->
                                <div style="padding-left:19px;">

                                    <div style="position:relative;">

                                        <!-- water level text -->
                                        <div style="position:absolute; top:-30px; left:1px; transform:translateX(-50%);">
                                            <div style="white-space:nowrap; transform-origin:center; transform:scale(0.6);">
                                                GL 2.6m
                                            </div>
                                        </div>

                                        <!-- water level icon -->
                                        <div style="position:absolute; top:-15px; left:0px; transform:translateX(-50%);">
                                            <svg width="14" height="12" viewBox="0 0 14 12">
                                                <polygon points="2,0 12,0 7,9" style="fill:rgba(0,0,0,0);stroke:#000;stroke-width:1" />
                                                <line x1="0" y1="9" x2="14" y2="9" style="stroke:#000;stroke-width:1" />
                                                <line x1="4" y1="11" x2="11" y2="11" style="stroke:#000;stroke-width:1" />
                                            </svg>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </template>
                </w-segments-vertical>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-segments-vertical'"
                    :casename="'slot support-right & width & paddingStyle & segmentBackgroundType & funSegmentBackgroundImage & segmentBorderColor & tickSize & segmentSize & axisColor & tickColor & keyValueStart & keyValueEnd & keyText & alignEnd & textShift & title'"
                ></demolink>

                <w-segments-vertical
                    :items="WSegmentsVertical.itemLayers"
                    :width="340"
                    :paddingStyle="{
                        top: 10,
                        right: 0,
                        bottom: 10,
                        left: 80,
                    }"
                    :tickSize="30"
                    :segmentSize="50"
                    :segmentBackgroundType="'image'"
                    :funSegmentBackgroundImage="getSegmentBackgroundIcon"
                    :segmentBorderColor="{v:'transparent',h:'#444'}"
                    :axisColor="'transparent'"
                    :tickColor="'#444'"
                    :keyValueStart="'depthStart'"
                    :keyValueEnd="'depthEnd'"
                    :keyText="'description'"
                    :alignEnd="'left'"
                    :textShift="80"
                    :title="'Depth(m)'"
                >
                    <template v-slot:support-right="props">
                        <div :style="`padding-top:${props.convertValueToY(2.6)}px;`">

                            <!-- anchor line, 圖標與數值寬度38px -->
                            <div style="_width:38px; _border-top:1px solid #f26;">

                                <!-- wl vertical center line, 圖標與數值垂直中線距左側19px -->
                                <div style="padding-left:19px;">

                                    <div style="position:relative;">

                                        <!-- water level text -->
                                        <div style="position:absolute; top:-30px; left:1px; transform:translateX(-50%);">
                                            <div style="white-space:nowrap; transform-origin:center; transform:scale(0.6);">
                                                GL 2.6m
                                            </div>
                                        </div>

                                        <!-- water level icon -->
                                        <div style="position:absolute; top:-15px; left:0px; transform:translateX(-50%);">
                                            <svg width="14" height="12" viewBox="0 0 14 12">
                                                <polygon points="2,0 12,0 7,9" style="fill:rgba(0,0,0,0);stroke:#000;stroke-width:1" />
                                                <line x1="0" y1="9" x2="14" y2="9" style="stroke:#000;stroke-width:1" />
                                                <line x1="4" y1="11" x2="11" y2="11" style="stroke:#000;stroke-width:1" />
                                            </svg>
                                        </div>

                                    </div>

                                </div>

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
                'itemLayers': [
                    { depthStart: 0, depthEnd: 2.3, code: '106', description: 'Gray Clay' },
                    { depthStart: 2.3, depthEnd: 5.3, code: '106', description: 'Brownish Yellow Clay' },
                    { depthStart: 5.3, depthEnd: 9.2, code: '224', description: 'Gray Medium Sand' },
                    { depthStart: 9.2, depthEnd: 14.4, code: '106', description: 'Grayish Brown Clay' },
                    { depthStart: 14.4, depthEnd: 32.4, code: '106', description: 'Gray Clay' },
                    { depthStart: 32.4, depthEnd: 37.1, code: '106', description: 'Gray Clay with Fine Sand' },
                    { depthStart: 37.1, depthEnd: 41.2, code: '106', description: 'Gray Clay' },
                    { depthStart: 41.2, depthEnd: 45.1, code: '225', description: 'Gray Fine Sand' },
                    { depthStart: 45.1, depthEnd: 46.7, code: '106', description: 'Gray Clay' },
                ],
            },
            'actions': [
            ],
        }
    },
    methods: {
        getSegmentBackgroundColor: function(item) {
            // console.log('getSegmentBackgroundColor', item)
            let kp = {
                Audience: '#ffb13e',
                Conversions: '#a2cf70',
                Management: '#4ac2fd',
                Actions: '#9f77ff',
            }
            let c = kp[item.type]
            return c
        },
        getSegmentBackgroundIcon: function(item) {
            // console.log('getSegmentBackgroundIcon', item)
            let kp = window.dataCivilSoilCodeIcon
            let bgicon = kp[item.code]
            // console.log('bgicon', bgicon)
            return bgicon
        },
        getSegmentBorderColor: function(item) {
            // console.log('getSegmentBorderColor', item)
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
