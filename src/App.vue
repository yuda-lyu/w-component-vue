<template>
    <v-app style="font-family:inherit;">


        <template v-if="!isNarrow">
            <a href="https://github.com/yuda-lyu/w-component-vue" class="github-corner" style="position:fixed; top:0; right:0; border:0; z-index:10000;" aria-label="View source on GitHub" target="_blank">
                <svg width="80" height="80" viewBox="0 0 250 250" style="fill:rgba(0,0,0,0.25); color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
            </a>
        </template>


        <div>


            <v-tabs
                v-model="indKind"
                background-color="grey lighten-3"
                color="grey darken-4"
                slider-color="red"
            >
                <v-tab
                    v-for="(oKind,kKind) in sComps"
                    :key="kKind"
                    @click="indName=0"
                >
                    <span style="text-transform:none">
                        {{oKind.name}}
                    </span>
                </v-tab>
            </v-tabs>


            <div style="margin-top:5px;"></div>


            <v-tabs
                v-model="indName"
                background-color="grey lighten-3"
                color="grey darken-4"
                slider-color="red"
            >
                <v-tab
                    v-for="(name,kInd) in sComps[indKind].cmps"
                    :key="kInd"
                    @click="modeBorder='emboss';modeShell='pure'"
                >
                    <span style="text-transform:none">
                        {{kb(name)}}
                    </span>
                </v-tab>
            </v-tabs>


            <template v-if="haveModeBorder[compname] || haveModeShell[compname]">


                <div style="margin-top:5px;"></div>


                <div style="padding:5px 15px; background-color:#eee;">

                    <div style="display:inline-block; margin-right:15px;" v-if="haveModeBorder[compname]">

                        <div style="margin:5px 0px; font-size:10pt; color:#aaa;">border :</div>

                        <v-radio-group
                            style="margin:0px; padding:0px;"
                            hide-details
                            row
                            v-model="modeBorder"
                        >

                            <v-radio
                                color="deep-purple lighten-2"
                                label="emboss"
                                value="emboss"
                                :on-icon="mdiCheckCircle"
                                :off-icon="mdiCheckboxBlankCircleOutline"
                            ></v-radio>

                            <v-radio
                                color="deep-purple lighten-2"
                                label="border"
                                value="border"
                                :on-icon="mdiCheckCircle"
                                :off-icon="mdiCheckboxBlankCircleOutline"
                            ></v-radio>

                        </v-radio-group>

                    </div>

                    <div style="display:inline-block; margin-right:15px;" v-if="haveModeShell[compname]">

                        <div style="margin:5px 0px; font-size:10pt; color:#aaa;">shell :</div>

                        <v-radio-group
                            style="margin:0px; padding:0px;"
                            hide-details
                            row
                            v-model="modeShell"
                        >

                            <v-radio
                                color="pink darken-1"
                                label="pure"
                                value="pure"
                                :on-icon="mdiCheckCircle"
                                :off-icon="mdiCheckboxBlankCircleOutline"
                            ></v-radio>

                            <v-radio
                                color="pink darken-1"
                                label="shell"
                                value="shell"
                                :on-icon="mdiCheckCircle"
                                :off-icon="mdiCheckboxBlankCircleOutline"
                            ></v-radio>

                        </v-radio-group>


                    </div>

                </div>


            </template>


        </div>


        <div style="padding:20px;">


            <AppZoneWBadge
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WBadge'"
            ></AppZoneWBadge>


            <AppZoneWPanelStripe
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WPanelStripe'"
            ></AppZoneWPanelStripe>


            <AppZoneWPanelBulge
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WPanelBulge'"
            ></AppZoneWPanelBulge>


            <AppZoneWPanelScrolly
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WPanelScrolly'"
            ></AppZoneWPanelScrolly>


            <AppZoneWPanelDivideHorizontal
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WPanelDivideHorizontal'"
            ></AppZoneWPanelDivideHorizontal>


            <AppZoneWPanelDivideVertical
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WPanelDivideVertical'"
            ></AppZoneWPanelDivideVertical>


            <AppZoneWIconSvg
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WIconSvg'"
            ></AppZoneWIconSvg>


            <AppZoneWDropfiles
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WDropfiles'"
            ></AppZoneWDropfiles>


            <AppZoneWButtonChip
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WButtonChip'"
            ></AppZoneWButtonChip>


            <AppZoneWButtonCapsule
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WButtonCapsule'"
            ></AppZoneWButtonCapsule>


            <AppZoneWButtonCircle
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WButtonCircle'"
            ></AppZoneWButtonCircle>


            <AppZoneWButtonProg
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WButtonProg'"
            ></AppZoneWButtonProg>


            <AppZoneWGroupButtons
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WGroupButtons'"
            ></AppZoneWGroupButtons>


            <AppZoneWProgressCircle
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WProgressCircle'"
            ></AppZoneWProgressCircle>


            <AppZoneWSwitch
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WSwitch'"
            ></AppZoneWSwitch>


            <AppZoneWAlert
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WAlert'"
            ></AppZoneWAlert>


            <AppZoneWDialog
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WDialog'"
            ></AppZoneWDialog>


            <AppZoneWConfirm
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WConfirm'"
            ></AppZoneWConfirm>


            <AppZoneWPopup
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WPopup'"
            ></AppZoneWPopup>


            <AppZoneWGroupTags
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WGroupTags'"
            ></AppZoneWGroupTags>


            <AppZoneWGroupTabs
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WGroupTabs'"
            ></AppZoneWGroupTabs>


            <AppZoneWGroupCheck
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WGroupCheck'"
            ></AppZoneWGroupCheck>


            <AppZoneWGroupRadioChip
               :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WGroupRadioChip'"
            ></AppZoneWGroupRadioChip>


            <AppZoneWGroupRadioCapsule
               :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WGroupRadioCapsule'"
            ></AppZoneWGroupRadioCapsule>


            <AppZoneWText
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WText'"
            ></AppZoneWText>


            <AppZoneWTextInt
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTextInt'"
            ></AppZoneWTextInt>


            <AppZoneWTextarea
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTextarea'"
            ></AppZoneWTextarea>


            <AppZoneWTextSelect
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTextSelect'"
            ></AppZoneWTextSelect>


            <AppZoneWTextSuggest
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTextSuggest'"
            ></AppZoneWTextSuggest>


            <AppZoneWTimeday
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTimeday'"
            ></AppZoneWTimeday>


            <AppZoneWTimeminute
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTimeminute'"
            ></AppZoneWTimeminute>


            <AppZoneWTimedayRange
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTimedayRange'"
            ></AppZoneWTimedayRange>


            <AppZoneWTimeminuteRange
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTimeminuteRange'"
            ></AppZoneWTimeminuteRange>


            <AppZoneWTreeDraggable
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTreeDraggable'"
            ></AppZoneWTreeDraggable>


            <AppZoneWJsonView
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WJsonView'"
            ></AppZoneWJsonView>


            <AppZoneWDynamicList
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WDynamicList'"
            ></AppZoneWDynamicList>


            <AppZoneWHighchartsVueDyn
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WHighchartsVueDyn'"
            ></AppZoneWHighchartsVueDyn>


            <AppZoneWHighstockVueDyn
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WHighstockVueDyn'"
            ></AppZoneWHighstockVueDyn>


            <AppZoneWEchartsVueDyn
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WEchartsVueDyn'"
            ></AppZoneWEchartsVueDyn>


            <AppZoneWAggridVueDyn
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WAggridVueDyn'"
            ></AppZoneWAggridVueDyn>


            <AppZoneWImageViewerDyn
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WImageViewerDyn'"
            ></AppZoneWImageViewerDyn>


        </div>


    </v-app>
</template>

<script>
import kebabCase from 'lodash/kebabCase'
import { mdiCheckCircle, mdiCheckboxBlankCircleOutline } from '@mdi/js'
import AppZoneWBadge from './AppZoneWBadge.vue'
import AppZoneWPanelStripe from './AppZoneWPanelStripe.vue'
import AppZoneWPanelBulge from './AppZoneWPanelBulge.vue'
import AppZoneWPanelScrolly from './AppZoneWPanelScrolly.vue'
import AppZoneWPanelDivideHorizontal from './AppZoneWPanelDivideHorizontal.vue'
import AppZoneWPanelDivideVertical from './AppZoneWPanelDivideVertical.vue'
import AppZoneWIconSvg from './AppZoneWIconSvg.vue'
import AppZoneWDropfiles from './AppZoneWDropfiles.vue'
import AppZoneWDialog from './AppZoneWDialog.vue'
import AppZoneWConfirm from './AppZoneWConfirm.vue'
import AppZoneWPopup from './AppZoneWPopup.vue'
import AppZoneWButtonChip from './AppZoneWButtonChip.vue'
import AppZoneWButtonCapsule from './AppZoneWButtonCapsule.vue'
import AppZoneWButtonCircle from './AppZoneWButtonCircle.vue'
import AppZoneWButtonProg from './AppZoneWButtonProg.vue'
import AppZoneWGroupButtons from './AppZoneWGroupButtons.vue'
import AppZoneWProgressCircle from './AppZoneWProgressCircle.vue'
import AppZoneWSwitch from './AppZoneWSwitch.vue'
import AppZoneWAlert from './AppZoneWAlert.vue'
import AppZoneWGroupTags from './AppZoneWGroupTags.vue'
import AppZoneWGroupTabs from './AppZoneWGroupTabs.vue'
import AppZoneWGroupCheck from './AppZoneWGroupCheck.vue'
import AppZoneWGroupRadioChip from './AppZoneWGroupRadioChip.vue'
import AppZoneWGroupRadioCapsule from './AppZoneWGroupRadioCapsule.vue'
import AppZoneWText from './AppZoneWText.vue'
import AppZoneWTextInt from './AppZoneWTextInt.vue'
import AppZoneWTextarea from './AppZoneWTextarea.vue'
import AppZoneWTextSelect from './AppZoneWTextSelect.vue'
import AppZoneWTextSuggest from './AppZoneWTextSuggest.vue'
import AppZoneWTimeday from './AppZoneWTimeday.vue'
import AppZoneWTimeminute from './AppZoneWTimeminute.vue'
import AppZoneWTimedayRange from './AppZoneWTimedayRange.vue'
import AppZoneWTimeminuteRange from './AppZoneWTimeminuteRange.vue'
import AppZoneWTreeDraggable from './AppZoneWTreeDraggable.vue'
import AppZoneWJsonView from './AppZoneWJsonView.vue'
import AppZoneWDynamicList from './AppZoneWDynamicList.vue'
import AppZoneWHighchartsVueDyn from './AppZoneWHighchartsVueDyn.vue'
import AppZoneWHighstockVueDyn from './AppZoneWHighstockVueDyn.vue'
import AppZoneWEchartsVueDyn from './AppZoneWEchartsVueDyn.vue'
import AppZoneWAggridVueDyn from './AppZoneWAggridVueDyn.vue'
import AppZoneWImageViewerDyn from './AppZoneWImageViewerDyn.vue'


export default {
    components: {
        AppZoneWBadge,
        AppZoneWPanelStripe,
        AppZoneWPanelBulge,
        AppZoneWPanelScrolly,
        AppZoneWPanelDivideHorizontal,
        AppZoneWPanelDivideVertical,
        AppZoneWIconSvg,
        AppZoneWDropfiles,
        AppZoneWDialog,
        AppZoneWConfirm,
        AppZoneWPopup,
        AppZoneWButtonChip,
        AppZoneWButtonCapsule,
        AppZoneWButtonCircle,
        AppZoneWButtonProg,
        AppZoneWGroupButtons,
        AppZoneWProgressCircle,
        AppZoneWSwitch,
        AppZoneWAlert,
        AppZoneWGroupTags,
        AppZoneWGroupTabs,
        AppZoneWGroupCheck,
        AppZoneWGroupRadioChip,
        AppZoneWGroupRadioCapsule,
        AppZoneWText,
        AppZoneWTextInt,
        AppZoneWTextarea,
        AppZoneWTextSelect,
        AppZoneWTextSuggest,
        AppZoneWTimeday,
        AppZoneWTimeminute,
        AppZoneWTimedayRange,
        AppZoneWTimeminuteRange,
        AppZoneWTreeDraggable,
        AppZoneWJsonView,
        AppZoneWDynamicList,
        AppZoneWHighchartsVueDyn,
        AppZoneWHighstockVueDyn,
        AppZoneWEchartsVueDyn,
        AppZoneWAggridVueDyn,
        AppZoneWImageViewerDyn,
    },
    data: function() {
        return {
            mdiCheckCircle,
            mdiCheckboxBlankCircleOutline,
            indKind: 0,
            indName: 0,
            sComps: [
                {
                    name: 'basic',
                    cmps: [
                        'WBadge',
                        'WSwitch',
                        'WIconSvg',
                        'WDropfiles',
                        'WProgressCircle',
                    ]
                },
                {
                    name: 'panel',
                    cmps: [
                        'WPanelStripe',
                        'WPanelBulge',
                        'WPanelScrolly',
                        'WPanelDivideHorizontal',
                        'WPanelDivideVertical',
                    ]
                },
                {
                    name: 'button',
                    cmps: [
                        'WButtonChip',
                        'WButtonCapsule',
                        'WButtonCircle',
                        'WButtonProg',
                    ]
                },
                {
                    name: 'group',
                    cmps: [
                        'WGroupButtons',
                        'WGroupCheck',
                        'WGroupRadioChip',
                        'WGroupRadioCapsule',
                        'WGroupTags',
                        'WGroupTabs',
                    ]
                },
                {
                    name: 'text',
                    cmps: [
                        'WText',
                        'WTextInt',
                        'WTextarea',
                        'WTextSelect',
                        'WTextSuggest',
                    ]
                },
                {
                    name: 'time',
                    cmps: [
                        'WTimeday',
                        'WTimeminute',
                        'WTimedayRange',
                        'WTimeminuteRange',
                    ]
                },
                {
                    name: 'tree',
                    cmps: [
                        'WTreeDraggable',
                    ]
                },
                {
                    name: 'window',
                    cmps: [
                        'WAlert',
                        'WDialog',
                        'WConfirm',
                        'WPopup',
                    ]
                },
                {
                    name: 'scroll',
                    cmps: [
                        'WJsonView',
                        'WDynamicList',
                    ]
                },
                {
                    name: 'dynamic',
                    cmps: [
                        'WHighchartsVueDyn',
                        'WHighstockVueDyn',
                        'WEchartsVueDyn',
                        'WAggridVueDyn',
                        'WImageViewerDyn',
                    ]
                },
            ],
            haveModeBorder: {
                'WGroupButtons': true,
                'WText': true,
                'WTextInt': true,
                'WTextSelect': true,
                'WTextSuggest': true,
                'WTimeday': true,
                'WTimeminute': true,
                'WTimedayRange': true,
                'WTimeminuteRange': true,
            },
            haveModeShell: {
                'WSwitch': true,
                'WGroupButtons': true,
                'WGroupTags': true,
                'WGroupTabs': true,
                'WGroupCheck': true,
                'WGroupRadioChip': true,
                'WGroupRadioCapsule': true,
                'WText': true,
                'WTextInt': true,
                'WTextarea': true,
                'WTextSelect': true,
                'WTextSuggest': true,
                'WTimeday': true,
                'WTimeminute': true,
                'WTimedayRange': true,
                'WTimeminuteRange': true,
            },
            modeBorder: 'emboss',
            modeBorders: [
                'emboss',
                'border',
            ],
            modeShell: 'pure',
            modeShells: [
                'pure',
                'shell',
            ],
        }
    },
    mounted: function() {
    },
    computed: {

        compname: function () {
            let vo = this
            return vo.sComps[vo.indKind].cmps[vo.indName]
        },

        isNarrow: function() {
            return window.innerWidth < 1000
        },

    },
    methods: {

        kb: function(v) {
            return kebabCase(v)
        },

    }
}
</script>

<style>
.v-application--wrap {
    display: block; /* fix for IE11 */
    font-family: inherit;
    background-color: #fff;
}
.head1 {
    margin-bottom: 20px;
    padding: 0px;
    font-size: 30pt;
}
.item {
    border-left: 3px solid #ffba75;
    margin: 5px 5px 8px 0px;
    padding: 3px 3px 5px 10px;
    font-size: 0.9rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.bk {
    vertical-align: top;
    margin-top: 20px;
}
@media screen and (min-width:1000px){
    .bk {
        display: inline-block;
        margin: 10px 90px 60px 0px;
    }
    .list {
        width: 400px;
    }
}
</style>
