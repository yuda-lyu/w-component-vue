<template>
    <v-app style="font-family:inherit;">


        <a href="https://github.com/yuda-lyu/w-component-vue" target="_blank">
            <img width="149" height="149"
                style="position:fixed; top:0; right:0; border:0; z-index:10000;"
                src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1">
        </a>


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


            <AppZoneWBadge
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WBadge'"
            ></AppZoneWBadge>


            <AppZoneWButtonChip
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WButtonChip'"
            ></AppZoneWButtonChip>


            <AppZoneWButtonGroupChip
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WButtonGroupChip'"
            ></AppZoneWButtonGroupChip>


            <AppZoneWButtonCircle
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WButtonCircle'"
            ></AppZoneWButtonCircle>


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


            <AppZoneWChips
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WChips'"
            ></AppZoneWChips>


            <AppZoneWCheckChips
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WCheckChips'"
            ></AppZoneWCheckChips>


            <AppZoneWRadioChips
               :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WRadioChips'"
            ></AppZoneWRadioChips>


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


            <AppZoneWTextSelects
                :modeBorder="modeBorder"
                :modeShell="modeShell"
                v-if="compname==='WTextSelects'"
            ></AppZoneWTextSelects>


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


    </v-app>
</template>

<script>
import kebabCase from 'lodash/kebabCase'
import { mdiCheckCircle, mdiCheckboxBlankCircleOutline } from '@mdi/js'
import AppZoneWBadge from './AppZoneWBadge.vue'
import AppZoneWButtonChip from './AppZoneWButtonChip.vue'
import AppZoneWButtonCircle from './AppZoneWButtonCircle.vue'
import AppZoneWButtonGroupChip from './AppZoneWButtonGroupChip.vue'
import AppZoneWProgressCircle from './AppZoneWProgressCircle.vue'
import AppZoneWSwitch from './AppZoneWSwitch.vue'
import AppZoneWAlert from './AppZoneWAlert.vue'
import AppZoneWChips from './AppZoneWChips.vue'
import AppZoneWCheckChips from './AppZoneWCheckChips.vue'
import AppZoneWRadioChips from './AppZoneWRadioChips.vue'
import AppZoneWText from './AppZoneWText.vue'
import AppZoneWTextInt from './AppZoneWTextInt.vue'
import AppZoneWTextarea from './AppZoneWTextarea.vue'
import AppZoneWTextSelects from './AppZoneWTextSelects.vue'
import AppZoneWTextSuggest from './AppZoneWTextSuggest.vue'
import AppZoneWTimeday from './AppZoneWTimeday.vue'
import AppZoneWTimeminute from './AppZoneWTimeminute.vue'
import AppZoneWTimedayRange from './AppZoneWTimedayRange.vue'
import AppZoneWTimeminuteRange from './AppZoneWTimeminuteRange.vue'

export default {
    components: {
        AppZoneWBadge,
        AppZoneWButtonChip,
        AppZoneWButtonCircle,
        AppZoneWButtonGroupChip,
        AppZoneWProgressCircle,
        AppZoneWSwitch,
        AppZoneWAlert,
        AppZoneWChips,
        AppZoneWCheckChips,
        AppZoneWRadioChips,
        AppZoneWText,
        AppZoneWTextInt,
        AppZoneWTextarea,
        AppZoneWTextSelects,
        AppZoneWTextSuggest,
        AppZoneWTimeday,
        AppZoneWTimeminute,
        AppZoneWTimedayRange,
        AppZoneWTimeminuteRange,
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
                        'WButtonChip',
                        'WButtonGroupChip',
                        'WButtonCircle',
                        'WProgressCircle',
                        'WSwitch',
                        'WAlert',
                    ]
                },
                {
                    name: 'chip',
                    cmps: [
                        'WChips',
                        'WCheckChips',
                        'WRadioChips',
                    ]
                },
                {
                    name: 'text',
                    cmps: [
                        'WText',
                        'WTextInt',
                        'WTextarea',
                        'WTextSelects',
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
            ],
            haveModeBorder: {
                'WText': true,
                'WTextInt': true,
                'WTextSelects': true,
                'WTextSuggest': true,
                'WTimeday': true,
                'WTimeminute': true,
                'WTimedayRange': true,
                'WTimeminuteRange': true,
            },
            haveModeShell: {
                'WSwitch': true,
                'WChips': true,
                'WCheckChips': true,
                'WRadioChips': true,
                'WText': true,
                'WTextInt': true,
                'WTextarea': true,
                'WTextSelects': true,
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
    margin: 20px;
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
    display: inline-block;
    margin: 10px 90px 60px 0px;
    vertical-align: top;
}
</style>
