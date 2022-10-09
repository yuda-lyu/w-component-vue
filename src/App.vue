<template>
    <v-app style="font-family:inherit;">


        <template v-if="!isNarrow">
            <a href="https://github.com/yuda-lyu/w-component-vue" class="github-corner" style="position:fixed; top:0; right:0; border:0; z-index:10000;" aria-label="View source on GitHub" target="_blank" rel="noreferrer noopener">
                <svg width="80" height="80" viewBox="0 0 250 250" style="fill:rgba(0,0,0,0.25); color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
            </a>
        </template>


        <div>


            <v-tabs
                v-model="io1"
                background-color="grey lighten-3"
                color="grey darken-4"
                slider-color="red"
            >
                <v-tab
                    v-for="(o1,ko1) in sCmps"
                    :key="'l1'+ko1"
                    @click="clickMenu1(ko1)"
                >
                    <span style="text-transform:none">
                        {{kebabCase(o1.name)}}
                    </span>
                </v-tab>
            </v-tabs>
            <div style="padding-top:5px;"></div>


            <template v-if="useL2Cmps">

                <v-tabs
                    v-model="io2"
                    background-color="grey lighten-3"
                    color="grey darken-4"
                    slider-color="red"
                >
                    <v-tab
                        v-for="(o2,ko2) in useL2Cmps"
                        :key="'l2'+ko2"
                        @click="clickMenu2(ko2)"
                    >
                        <span style="text-transform:none">
                            {{kebabCase(o2.name)}}
                        </span>
                    </v-tab>
                </v-tabs>
                <div style="padding-top:5px;"></div>

            </template>


            <template v-if="useL3Cmps">

                <v-tabs
                    v-model="io3"
                    background-color="grey lighten-3"
                    color="grey darken-4"
                    slider-color="red"
                >
                    <v-tab
                        v-for="(o3,ko3) in useL3Cmps"
                        :key="'l3'+ko3"
                        @click="clickMenu3(ko3)"
                    >
                        <span style="text-transform:none">
                            {{kebabCase(o3.name)}}
                        </span>
                    </v-tab>
                </v-tabs>
                <div style="padding-top:5px;"></div>

            </template>


        </div>


        <div style="padding:20px;">


            <AppZoneWBadge
                v-if="useCmpName==='WBadge'"
            ></AppZoneWBadge>


            <AppZoneWPanelStripe
                v-if="useCmpName==='WPanelStripe'"
            ></AppZoneWPanelStripe>


            <AppZoneWPanelBulge
                v-if="useCmpName==='WPanelBulge'"
            ></AppZoneWPanelBulge>


            <AppZoneWPanelAvatar
                v-if="useCmpName==='WPanelAvatar'"
            ></AppZoneWPanelAvatar>


            <AppZoneWPanelScrolly
                v-if="useCmpName==='WPanelScrolly'"
            ></AppZoneWPanelScrolly>


            <AppZoneWPanelDivideHorizontal
                v-if="useCmpName==='WPanelDivideHorizontal'"
            ></AppZoneWPanelDivideHorizontal>


            <AppZoneWPanelDivideVertical
                v-if="useCmpName==='WPanelDivideVertical'"
            ></AppZoneWPanelDivideVertical>


            <AppZoneWPanelScale
                v-if="useCmpName==='WPanelScale'"
            ></AppZoneWPanelScale>


            <AppZoneWIconSvg
                v-if="useCmpName==='WIconSvg'"
            ></AppZoneWIconSvg>


            <AppZoneWDropfiles
                v-if="useCmpName==='WDropfiles'"
            ></AppZoneWDropfiles>


            <AppZoneWButtonChip
                v-if="useCmpName==='WButtonChip'"
            ></AppZoneWButtonChip>


            <AppZoneWButtonCircle
                v-if="useCmpName==='WButtonCircle'"
            ></AppZoneWButtonCircle>


            <AppZoneWProgressBar
                v-if="useCmpName==='WProgressBar'"
            ></AppZoneWProgressBar>


            <AppZoneWProgressCircle
                v-if="useCmpName==='WProgressCircle'"
            ></AppZoneWProgressCircle>


            <AppZoneWSwitch
                v-if="useCmpName==='WSwitch'"
            ></AppZoneWSwitch>


            <AppZoneWCheckbox
                v-if="useCmpName==='WCheckbox'"
            ></AppZoneWCheckbox>


            <AppZoneWAlert
                v-if="useCmpName==='WAlert'"
            ></AppZoneWAlert>


            <AppZoneWDialog
                v-if="useCmpName==='WDialog'"
            ></AppZoneWDialog>


            <AppZoneWConfirm
                v-if="useCmpName==='WConfirm'"
            ></AppZoneWConfirm>


            <AppZoneWPopup
                v-if="useCmpName==='WPopup'"
            ></AppZoneWPopup>


            <AppZoneWPopupEditText
                v-if="useCmpName==='WPopupEditText'"
            ></AppZoneWPopupEditText>


            <AppZoneWDrawer
                v-if="useCmpName==='WDrawer'"
            ></AppZoneWDrawer>


            <AppZoneWGroupTags
                v-if="useCmpName==='WGroupTags'"
            ></AppZoneWGroupTags>


            <AppZoneWGroupDragdrop
                v-if="useCmpName==='WGroupDragdrop'"
            ></AppZoneWGroupDragdrop>


            <AppZoneWGroupBaggage
                v-if="useCmpName==='WGroupBaggage'"
            ></AppZoneWGroupBaggage>


            <AppZoneWListVertical
                v-if="useCmpName==='WListVertical'"
            ></AppZoneWListVertical>


            <AppZoneWListHorizontal
                v-if="useCmpName==='WListHorizontal'"
            ></AppZoneWListHorizontal>


            <AppZoneWListExpand
                v-if="useCmpName==='WListExpand'"
            ></AppZoneWListExpand>


            <AppZoneWInputCheckbox
                v-if="useCmpName==='WInputCheckbox'"
            ></AppZoneWInputCheckbox>


            <AppZoneWGroupCheck
                v-if="useCmpName==='WGroupCheck'"
            ></AppZoneWGroupCheck>


            <AppZoneWInputRadio
                v-if="useCmpName==='WInputRadio'"
            ></AppZoneWInputRadio>


            <AppZoneWGroupRadio
                v-if="useCmpName==='WGroupRadio'"
            ></AppZoneWGroupRadio>


            <AppZoneWText
                v-if="useCmpName==='WText'"
            ></AppZoneWText>


            <AppZoneWTextInt
                v-if="useCmpName==='WTextInt'"
            ></AppZoneWTextInt>


            <AppZoneWTextarea
                v-if="useCmpName==='WTextarea'"
            ></AppZoneWTextarea>


            <AppZoneWTextSelect
                v-if="useCmpName==='WTextSelect'"
            ></AppZoneWTextSelect>


            <AppZoneWTextSuggest
                v-if="useCmpName==='WTextSuggest'"
            ></AppZoneWTextSuggest>


            <AppZoneWTimeday
                v-if="useCmpName==='WTimeday'"
            ></AppZoneWTimeday>


            <AppZoneWTimeminute
                v-if="useCmpName==='WTimeminute'"
            ></AppZoneWTimeminute>


            <AppZoneWTimedayRange
                v-if="useCmpName==='WTimedayRange'"
            ></AppZoneWTimedayRange>


            <AppZoneWTimeminuteRange
                v-if="useCmpName==='WTimeminuteRange'"
            ></AppZoneWTimeminuteRange>


            <AppZoneWDynamicList
                v-if="useCmpName==='WDynamicList'"
            ></AppZoneWDynamicList>


            <AppZoneWJsonView
                v-if="useCmpName==='WJsonView'"
            ></AppZoneWJsonView>


            <AppZoneWTree
                v-if="useCmpName==='WTree'"
            ></AppZoneWTree>


            <AppZoneWHighchartsVueDyn
                v-if="useCmpName==='WHighchartsVueDyn'"
            ></AppZoneWHighchartsVueDyn>


            <AppZoneWHighchartsBitmapDyn
                v-if="useCmpName==='WHighchartsBitmapDyn'"
            ></AppZoneWHighchartsBitmapDyn>


            <AppZoneWHighstockVueDyn
                v-if="useCmpName==='WHighstockVueDyn'"
            ></AppZoneWHighstockVueDyn>


            <AppZoneWEchartsVueDyn
                v-if="useCmpName==='WEchartsVueDyn'"
            ></AppZoneWEchartsVueDyn>


            <AppZoneWAggridVueDyn
                v-if="useCmpName==='WAggridVueDyn'"
            ></AppZoneWAggridVueDyn>


            <AppZoneWTableDyn
                v-if="useCmpName==='WTableDyn'"
            ></AppZoneWTableDyn>


            <AppZoneWImageViewerDyn
                v-if="useCmpName==='WImageViewerDyn'"
            ></AppZoneWImageViewerDyn>


            <AppZoneWImageCascadingDyn
                v-if="useCmpName==='WImageCascadingDyn'"
            ></AppZoneWImageCascadingDyn>


            <AppZoneWCkeditorVueDyn
                v-if="useCmpName==='WCkeditorVueDyn'"
            ></AppZoneWCkeditorVueDyn>


            <AppZoneWTinymceVueDyn
                v-if="useCmpName==='WTinymceVueDyn'"
            ></AppZoneWTinymceVueDyn>


            <AppZoneWQuillVueDyn
                v-if="useCmpName==='WQuillVueDyn'"
            ></AppZoneWQuillVueDyn>


            <AppZoneWLeafletVueDyn
                v-if="useCmpName==='WLeafletVueDyn'"
            ></AppZoneWLeafletVueDyn>


            <AppZoneWExplorer
                v-if="useCmpName==='WExplorer'"
            ></AppZoneWExplorer>


        </div>


    </v-app>
</template>

<script>
import { mdiCheckCircle, mdiCheckboxBlankCircleOutline } from '@mdi/js'
import get from 'lodash/get'
import kebabCase from 'lodash/kebabCase'
import each from 'lodash/each'
import urlParse from 'wsemi/src/urlParse.mjs'
import AppZoneWBadge from './AppZoneWBadge.vue'
import AppZoneWPanelStripe from './AppZoneWPanelStripe.vue'
import AppZoneWPanelBulge from './AppZoneWPanelBulge.vue'
import AppZoneWPanelAvatar from './AppZoneWPanelAvatar.vue'
import AppZoneWPanelScrolly from './AppZoneWPanelScrolly.vue'
import AppZoneWPanelDivideHorizontal from './AppZoneWPanelDivideHorizontal.vue'
import AppZoneWPanelDivideVertical from './AppZoneWPanelDivideVertical.vue'
import AppZoneWPanelScale from './AppZoneWPanelScale.vue'
import AppZoneWIconSvg from './AppZoneWIconSvg.vue'
import AppZoneWDropfiles from './AppZoneWDropfiles.vue'
import AppZoneWDialog from './AppZoneWDialog.vue'
import AppZoneWConfirm from './AppZoneWConfirm.vue'
import AppZoneWPopup from './AppZoneWPopup.vue'
import AppZoneWPopupEditText from './AppZoneWPopupEditText.vue'
import AppZoneWDrawer from './AppZoneWDrawer.vue'
import AppZoneWButtonChip from './AppZoneWButtonChip.vue'
import AppZoneWButtonCircle from './AppZoneWButtonCircle.vue'
import AppZoneWProgressBar from './AppZoneWProgressBar.vue'
import AppZoneWProgressCircle from './AppZoneWProgressCircle.vue'
import AppZoneWSwitch from './AppZoneWSwitch.vue'
import AppZoneWCheckbox from './AppZoneWCheckbox.vue'
import AppZoneWAlert from './AppZoneWAlert.vue'
import AppZoneWGroupTags from './AppZoneWGroupTags.vue'
import AppZoneWGroupDragdrop from './AppZoneWGroupDragdrop.vue'
import AppZoneWGroupBaggage from './AppZoneWGroupBaggage.vue'
import AppZoneWListVertical from './AppZoneWListVertical.vue'
import AppZoneWListHorizontal from './AppZoneWListHorizontal.vue'
import AppZoneWListExpand from './AppZoneWListExpand.vue'
import AppZoneWInputCheckbox from './AppZoneWInputCheckbox.vue'
import AppZoneWGroupCheck from './AppZoneWGroupCheck.vue'
import AppZoneWInputRadio from './AppZoneWInputRadio.vue'
import AppZoneWGroupRadio from './AppZoneWGroupRadio.vue'
import AppZoneWText from './AppZoneWText.vue'
import AppZoneWTextInt from './AppZoneWTextInt.vue'
import AppZoneWTextarea from './AppZoneWTextarea.vue'
import AppZoneWTextSelect from './AppZoneWTextSelect.vue'
import AppZoneWTextSuggest from './AppZoneWTextSuggest.vue'
import AppZoneWTimeday from './AppZoneWTimeday.vue'
import AppZoneWTimeminute from './AppZoneWTimeminute.vue'
import AppZoneWTimedayRange from './AppZoneWTimedayRange.vue'
import AppZoneWTimeminuteRange from './AppZoneWTimeminuteRange.vue'
import AppZoneWDynamicList from './AppZoneWDynamicList.vue'
import AppZoneWJsonView from './AppZoneWJsonView.vue'
import AppZoneWTree from './AppZoneWTree.vue'
import AppZoneWHighchartsVueDyn from './AppZoneWHighchartsVueDyn.vue'
import AppZoneWHighchartsBitmapDyn from './AppZoneWHighchartsBitmapDyn.vue'
import AppZoneWHighstockVueDyn from './AppZoneWHighstockVueDyn.vue'
import AppZoneWEchartsVueDyn from './AppZoneWEchartsVueDyn.vue'
import AppZoneWAggridVueDyn from './AppZoneWAggridVueDyn.vue'
import AppZoneWTableDyn from './AppZoneWTableDyn.vue'
import AppZoneWImageViewerDyn from './AppZoneWImageViewerDyn.vue'
import AppZoneWImageCascadingDyn from './AppZoneWImageCascadingDyn.vue'
import AppZoneWCkeditorVueDyn from './AppZoneWCkeditorVueDyn.vue'
import AppZoneWTinymceVueDyn from './AppZoneWTinymceVueDyn.vue'
import AppZoneWQuillVueDyn from './AppZoneWQuillVueDyn.vue'
import AppZoneWLeafletVueDyn from './AppZoneWLeafletVueDyn.vue'
import AppZoneWExplorer from './AppZoneWExplorer.vue'


export default {
    components: {
        AppZoneWBadge,
        AppZoneWPanelStripe,
        AppZoneWPanelBulge,
        AppZoneWPanelAvatar,
        AppZoneWPanelScrolly,
        AppZoneWPanelDivideHorizontal,
        AppZoneWPanelDivideVertical,
        AppZoneWPanelScale,
        AppZoneWIconSvg,
        AppZoneWDropfiles,
        AppZoneWDialog,
        AppZoneWConfirm,
        AppZoneWPopup,
        AppZoneWPopupEditText,
        AppZoneWDrawer,
        AppZoneWButtonChip,
        AppZoneWButtonCircle,
        AppZoneWProgressBar,
        AppZoneWProgressCircle,
        AppZoneWSwitch,
        AppZoneWCheckbox,
        AppZoneWAlert,
        AppZoneWGroupTags,
        AppZoneWGroupDragdrop,
        AppZoneWGroupBaggage,
        AppZoneWListVertical,
        AppZoneWListHorizontal,
        AppZoneWListExpand,
        AppZoneWInputCheckbox,
        AppZoneWGroupCheck,
        AppZoneWInputRadio,
        AppZoneWGroupRadio,
        AppZoneWText,
        AppZoneWTextInt,
        AppZoneWTextarea,
        AppZoneWTextSelect,
        AppZoneWTextSuggest,
        AppZoneWTimeday,
        AppZoneWTimeminute,
        AppZoneWTimedayRange,
        AppZoneWTimeminuteRange,
        AppZoneWDynamicList,
        AppZoneWJsonView,
        AppZoneWTree,
        AppZoneWHighchartsVueDyn,
        AppZoneWHighchartsBitmapDyn,
        AppZoneWHighstockVueDyn,
        AppZoneWEchartsVueDyn,
        AppZoneWAggridVueDyn,
        AppZoneWTableDyn,
        AppZoneWImageViewerDyn,
        AppZoneWImageCascadingDyn,
        AppZoneWCkeditorVueDyn,
        AppZoneWTinymceVueDyn,
        AppZoneWQuillVueDyn,
        AppZoneWLeafletVueDyn,
        AppZoneWExplorer,
    },
    data: function() {
        return {
            get,
            kebabCase,

            mdiCheckCircle,
            mdiCheckboxBlankCircleOutline,
            io1: 0,
            io2: 0,
            io3: 0,
            sCmps: [
                {
                    name: 'basic',
                    cmps: [
                        { name: 'WBadge' },
                        { name: 'WSwitch' },
                        { name: 'WCheckbox' },
                        { name: 'WIconSvg' },
                        { name: 'WDropfiles' },
                        { name: 'WProgressBar' },
                        { name: 'WProgressCircle' },
                    ]
                },
                {
                    name: 'panel',
                    cmps: [
                        { name: 'WPanelStripe' },
                        { name: 'WPanelBulge' },
                        { name: 'WPanelAvatar' },
                        { name: 'WPanelScrolly' },
                        { name: 'WPanelDivideHorizontal' },
                        { name: 'WPanelDivideVertical' },
                        { name: 'WPanelScale' },
                    ]
                },
                {
                    name: 'button',
                    cmps: [
                        { name: 'WButtonChip' },
                        { name: 'WButtonCircle' },
                    ]
                },
                {
                    name: 'group',
                    cmps: [
                        { name: 'WInputCheckbox' },
                        { name: 'WGroupCheck' },
                        { name: 'WInputRadio' },
                        { name: 'WGroupRadio' },
                        { name: 'WGroupTags' },
                        { name: 'WGroupDragdrop' },
                        { name: 'WGroupBaggage' },
                    ]
                },
                {
                    name: 'list',
                    cmps: [
                        { name: 'WListHorizontal' },
                        { name: 'WListVertical' },
                        { name: 'WListExpand' },
                        { name: 'WDynamicList' },
                    ]
                },
                {
                    name: 'text',
                    cmps: [
                        { name: 'WText' },
                        { name: 'WTextarea' },
                        { name: 'WTextInt' },
                        { name: 'WTextSelect' },
                        { name: 'WTextSuggest' },
                    ]
                },
                {
                    name: 'time',
                    cmps: [
                        { name: 'WTimeday' },
                        { name: 'WTimeminute' },
                        { name: 'WTimedayRange' },
                        { name: 'WTimeminuteRange' },
                    ]
                },
                {
                    name: 'tree',
                    cmps: [
                        { name: 'WExplorer' },
                        { name: 'WTree' },
                        { name: 'WJsonView' },
                    ]
                },
                {
                    name: 'window',
                    cmps: [
                        { name: 'WAlert' },
                        { name: 'WDialog' },
                        { name: 'WConfirm' },
                        { name: 'WPopup' },
                        { name: 'WPopupEditText' },
                        { name: 'WDrawer' },
                    ]
                },
                {
                    name: 'dynamic',
                    cmps: [
                        {
                            name: 'plot',
                            cmps: [
                                { name: 'WHighchartsVueDyn' },
                                { name: 'WHighchartsBitmapDyn' },
                                { name: 'WHighstockVueDyn' },
                                { name: 'WEchartsVueDyn' },
                            ],
                        },
                        {
                            name: 'table',
                            cmps: [
                                { name: 'WAggridVueDyn' },
                                { name: 'WTableDyn' },
                            ],
                        },
                        {
                            name: 'map',
                            cmps: [
                                { name: 'WLeafletVueDyn' },
                            ],
                        },
                        {
                            name: 'imageViewer',
                            cmps: [
                                { name: 'WImageViewerDyn' },
                                { name: 'WImageCascadingDyn' },
                            ],
                        },
                        {
                            name: 'editor',
                            cmps: [
                                { name: 'WTinymceVueDyn' },
                                { name: 'WCkeditorVueDyn' },
                                { name: 'WQuillVueDyn' },
                            ],
                        },
                    ],
                },
            ],
        }
    },
    mounted: function() {
        let vo = this

        let getCmpLoc = (cmpName) => {
            // console.log('getCmpLoc', cmpName)
            let mt = {
                io1: 0,
                io2: 0,
                io3: 0,
            }
            let done = false
            each(vo.sCmps, (v, k) => {
                // console.log('l1', kebabCase(v.name), k)
                if (cmpName === kebabCase(v.name)) {
                    mt = {
                        io1: k,
                        io2: 0,
                        io3: 0,
                    }
                    done = true
                    return false
                }
                if (get(v, 'cmps')) {
                    each(v.cmps, (vv, kk) => {
                        // console.log('l2', kebabCase(vv.name), kk)
                        if (cmpName === kebabCase(vv.name)) {
                            mt = {
                                io1: k,
                                io2: kk,
                                io3: 0,
                            }
                            done = true
                            return false
                        }
                        if (get(vv, 'cmps')) {
                            each(vv.cmps, (vvv, kkk) => {
                                // console.log('l3', kebabCase(vvv.name), kkk)
                                if (cmpName === kebabCase(vvv.name)) {
                                    mt = {
                                        io1: k,
                                        io2: kk,
                                        io3: kkk,
                                    }
                                    done = true
                                    return false
                                }
                                // if (done) {
                                //     return false
                                // }
                            })
                        }
                        if (done) {
                            return false
                        }
                    })
                }
                if (done) {
                    return false
                }
            })
            return mt
        }

        let autoViewCmp = () => {

            ////yuda-lyu.github.io/w-component-vue/examples/app.html?level1=basic&level2=w-switch
            ////yuda-lyu.github.io/w-component-vue/examples/app.html?level1=dynamic&level2=editor&level3=w-quill-vue-dyn
            ////yuda-lyu.github.io/w-component-vue/examples/app.html?cmp=w-switch
            ////yuda-lyu.github.io/w-component-vue/examples/app.html?cmp=w-quill-vue-dyn

            //urlParse
            let p = urlParse(location.href)
            // console.log('p', p)

            let mt = getCmpLoc(p.cmp)
            // console.log('mt', mt)

            vo.io1 = mt.io1
            vo.io2 = mt.io2
            vo.io3 = mt.io3

        }
        autoViewCmp()

    },
    computed: {

        useL2Cmps: function() {
            let vo = this
            return get(vo, `sCmps.${vo.io1}.cmps`)
        },

        useL3Cmps: function() {
            let vo = this
            return get(vo, `sCmps.${vo.io1}.cmps.${vo.io2}.cmps`)
        },

        useCmpName: function () {
            let vo = this
            let name = 'unknow'
            name = get(vo, `sCmps.${vo.io1}.cmps.${vo.io2}.cmps.${vo.io3}.name`)
            if (name) {
                return name
            }
            name = get(vo, `sCmps.${vo.io1}.cmps.${vo.io2}.name`)
            if (name) {
                return name
            }
            name = get(vo, `sCmps.${vo.io1}.name`)
            if (name) {
                return name
            }
            return name
        },

        isNarrow: function() {
            return window.innerWidth < 1000
        },

    },
    methods: {

        resetUrl: function() {
            try {
                //開發端是localhost無法刷history至不同網站(因此為正式網站位址)
                window.history.replaceState({}, '', '//yuda-lyu.github.io/w-component-vue/examples/app.html')
            }
            catch (err) {
                // console.log(err)
            }
        },

        clickMenu1: function (io1) {
            let vo = this
            vo.resetUrl()
            vo.$nextTick(() => {
                vo.io1 = io1
                vo.io2 = 0
                vo.io3 = 0
            })
        },

        clickMenu2: function (io2) {
            let vo = this
            vo.resetUrl()
            vo.$nextTick(() => {
                vo.io2 = io2
                vo.io3 = 0
            })
        },

        clickMenu3: function (io3) {
            let vo = this
            vo.resetUrl()
            vo.$nextTick(() => {
                vo.io3 = io3
            })
        },

    }
}
</script>

<style>
.v-application--wrap {
    /* width與max-width fix for IE11, 其外不能使用padding或margin避免失效 */
    width: 100vw !important;
    max-width: 100vw !important;
    font-family: inherit;
    background: #fff;
}
.head1 {
    margin: 0px;
    padding: 0px 0px 10px 0px;
    font-size: 2.5rem;
}
.bk {
    vertical-align: top;
    padding: 10px 0px 60px 0px;
}
@media screen and (min-width:1000px){ /* 寬版 */
    .bk {
        display: inline-block;
        margin: 0px 80px 0px 0px;
    }
}
</style>
