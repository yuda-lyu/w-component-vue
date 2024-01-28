<template>
    <v-app
        style="font-family:inherit;"
        :changeMenus="changeMenus"
    >


        <template v-if="!isNarrow">
            <a href="https://github.com/yuda-lyu/w-component-vue" class="github-corner" style="position:fixed; top:0; right:0; border:0; z-index:10000;" aria-label="View source on GitHub" target="_blank" rel="noreferrer noopener">
                <svg width="80" height="80" viewBox="0 0 250 250" style="fill:rgba(0,0,0,0.25); color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
            </a>
        </template>


        <div style="background:#f5f5f5;">

            <div style="width:calc( 100vw - 20px ); overflow-x:auto;" v-if="cmpsL1 && cmpsL1.length>0">
                <WListHorizontal
                    :items="cmpsL1"
                    :itemActive.sync="cmpP1"
                    :itemBackgroundColor="'transparent'"
                    :itemBackgroundColorHover="'#eee'"
                    :itemBackgroundColorActive="'#eee'"
                    :keyText="'name'"
                    :paddingStyle="{v:12,h:20}"
                    @update:itemActive="(v)=>{indP3=0;indP2=0;indP1=getInd(v,cmpsL1)}"
                >
                    <template v-slot:item="props">
                        <div style="">
                            {{kebabCase(props.item.name)}}
                        </div>
                    </template>
                </WListHorizontal>
                <div style="height:1px; background:#ddd;"></div>
            </div>

            <div style="width:calc( 100vw - 20px ); overflow-x:auto;" v-if="cmpsL2 && cmpsL2.length>0">
                <div style="height:3px; background:#fff;"></div>
                <WListHorizontal
                    :items="cmpsL2"
                    :itemActive.sync="cmpP2"
                    :itemBackgroundColor="'transparent'"
                    :itemBackgroundColorHover="'#eee'"
                    :itemBackgroundColorActive="'#eee'"
                    :keyText="'name'"
                    :paddingStyle="{v:12,h:20}"
                    @update:itemActive="(v)=>{indP3=0;indP2=getInd(v,cmpsL2)}"
                >
                    <template v-slot:item="props">
                        <div style="">
                            {{kebabCase(props.item.name)}}
                        </div>
                    </template>
                </WListHorizontal>
                <div style="height:1px; background:#ddd;"></div>
            </div>

            <div style="width:calc( 100vw - 20px ); overflow-x:auto;" v-if="cmpsL3 && cmpsL3.length>0">
                <div style="height:3px; background:#fff;"></div>
                <WListHorizontal
                    :items="cmpsL3"
                    :itemActive.sync="cmpP3"
                    :itemBackgroundColor="'transparent'"
                    :itemBackgroundColorHover="'#eee'"
                    :itemBackgroundColorActive="'#eee'"
                    :keyText="'name'"
                    :paddingStyle="{v:12,h:20}"
                    @update:itemActive="(v)=>{indP3=getInd(v,cmpsL3)}"
                >
                    <template v-slot:item="props">
                        <div style="">
                            {{kebabCase(props.item.name)}}
                        </div>
                    </template>
                </WListHorizontal>
                <div style="height:1px; background:#ddd;"></div>
            </div>

        </div>


        <div>

            <AppZoneWBadge v-if="cmpPick==='WBadge'"></AppZoneWBadge>

            <AppZoneWPanelStripe v-if="cmpPick==='WPanelStripe'"></AppZoneWPanelStripe>

            <AppZoneWPanelBulge v-if="cmpPick==='WPanelBulge'"></AppZoneWPanelBulge>

            <AppZoneWPanelAvatar v-if="cmpPick==='WPanelAvatar'"></AppZoneWPanelAvatar>

            <AppZoneWPanelScrolly v-if="cmpPick==='WPanelScrolly'"></AppZoneWPanelScrolly>

            <AppZoneWPanelLabelItem v-if="cmpPick==='WPanelLabelItem'"></AppZoneWPanelLabelItem>

            <AppZoneWPanelDivideHorizontal v-if="cmpPick==='WPanelDivideHorizontal'"></AppZoneWPanelDivideHorizontal>

            <AppZoneWPanelDivideVertical v-if="cmpPick==='WPanelDivideVertical'"></AppZoneWPanelDivideVertical>

            <AppZoneWPanelScale v-if="cmpPick==='WPanelScale'"></AppZoneWPanelScale>

            <AppZoneWIcon v-if="cmpPick==='WIcon'"></AppZoneWIcon>

            <AppZoneWDropfiles v-if="cmpPick==='WDropfiles'"></AppZoneWDropfiles>

            <AppZoneWButtonChip v-if="cmpPick==='WButtonChip'"></AppZoneWButtonChip>

            <AppZoneWButtonCircle v-if="cmpPick==='WButtonCircle'"></AppZoneWButtonCircle>

            <AppZoneWSlider v-if="cmpPick==='WSlider'"></AppZoneWSlider>

            <AppZoneWProgressBar v-if="cmpPick==='WProgressBar'"></AppZoneWProgressBar>

            <AppZoneWProgressCircle v-if="cmpPick==='WProgressCircle'"></AppZoneWProgressCircle>

            <AppZoneWSwitch v-if="cmpPick==='WSwitch'"></AppZoneWSwitch>

            <AppZoneWCheckbox v-if="cmpPick==='WCheckbox'"></AppZoneWCheckbox>

            <AppZoneWLevelGrade v-if="cmpPick==='WLevelGrade'"></AppZoneWLevelGrade>

            <AppZoneWAlert v-if="cmpPick==='WAlert'"></AppZoneWAlert>

            <AppZoneWDialog v-if="cmpPick==='WDialog'"></AppZoneWDialog>

            <AppZoneWConfirm v-if="cmpPick==='WConfirm'"></AppZoneWConfirm>

            <AppZoneWTooltip v-if="cmpPick==='WTooltip'"></AppZoneWTooltip>

            <AppZoneWPopup v-if="cmpPick==='WPopup'"></AppZoneWPopup>

            <AppZoneWPopupEditText v-if="cmpPick==='WPopupEditText'"></AppZoneWPopupEditText>

            <AppZoneWDrawer v-if="cmpPick==='WDrawer'"></AppZoneWDrawer>

            <AppZoneWGroupTags v-if="cmpPick==='WGroupTags'"></AppZoneWGroupTags>

            <AppZoneWGroupDragdrop v-if="cmpPick==='WGroupDragdrop'"></AppZoneWGroupDragdrop>

            <AppZoneWGroupBaggage v-if="cmpPick==='WGroupBaggage'"></AppZoneWGroupBaggage>

            <AppZoneWListVertical v-if="cmpPick==='WListVertical'"></AppZoneWListVertical>

            <AppZoneWListHorizontal v-if="cmpPick==='WListHorizontal'"></AppZoneWListHorizontal>

            <AppZoneWInputRadio v-if="cmpPick==='WInputRadio'"></AppZoneWInputRadio>

            <AppZoneWInputCheckbox v-if="cmpPick==='WInputCheckbox'"></AppZoneWInputCheckbox>

            <AppZoneWListExpand v-if="cmpPick==='WListExpand'"></AppZoneWListExpand>

            <AppZoneWListRadio v-if="cmpPick==='WListRadio'"></AppZoneWListRadio>

            <AppZoneWListCheck v-if="cmpPick==='WListCheck'"></AppZoneWListCheck>

            <AppZoneWGroupChipCheck v-if="cmpPick==='WGroupChipCheck'"></AppZoneWGroupChipCheck>

            <AppZoneWGroupChipRadio v-if="cmpPick==='WGroupChipRadio'"></AppZoneWGroupChipRadio>

            <AppZoneWGroupIconCheck v-if="cmpPick==='WGroupIconCheck'"></AppZoneWGroupIconCheck>

            <AppZoneWGroupIconRadio v-if="cmpPick==='WGroupIconRadio'"></AppZoneWGroupIconRadio>

            <AppZoneWText v-if="cmpPick==='WText'"></AppZoneWText>

            <AppZoneWTextInt v-if="cmpPick==='WTextInt'"></AppZoneWTextInt>

            <AppZoneWTextarea v-if="cmpPick==='WTextarea'"></AppZoneWTextarea>

            <AppZoneWTextSelect v-if="cmpPick==='WTextSelect'"></AppZoneWTextSelect>

            <AppZoneWTextSuggest v-if="cmpPick==='WTextSuggest'"></AppZoneWTextSuggest>

            <AppZoneWTimeday v-if="cmpPick==='WTimeday'"></AppZoneWTimeday>

            <AppZoneWTimeminute v-if="cmpPick==='WTimeminute'"></AppZoneWTimeminute>

            <AppZoneWTimedayRange v-if="cmpPick==='WTimedayRange'"></AppZoneWTimedayRange>

            <AppZoneWTimeminuteRange v-if="cmpPick==='WTimeminuteRange'"></AppZoneWTimeminuteRange>

            <AppZoneWDynamicList v-if="cmpPick==='WDynamicList'"></AppZoneWDynamicList>

            <AppZoneWSegmentsVertical v-if="cmpPick==='WSegmentsVertical'"></AppZoneWSegmentsVertical>

            <AppZoneWJsonView v-if="cmpPick==='WJsonView'"></AppZoneWJsonView>

            <AppZoneWTree v-if="cmpPick==='WTree'"></AppZoneWTree>

            <AppZoneWHighchartsVueDyn v-if="cmpPick==='WHighchartsVueDyn'"></AppZoneWHighchartsVueDyn>

            <AppZoneWHighchartsBitmapDyn v-if="cmpPick==='WHighchartsBitmapDyn'"></AppZoneWHighchartsBitmapDyn>

            <AppZoneWHighstockVueDyn v-if="cmpPick==='WHighstockVueDyn'"></AppZoneWHighstockVueDyn>

            <AppZoneWEchartsVueDyn v-if="cmpPick==='WEchartsVueDyn'"></AppZoneWEchartsVueDyn>

            <AppZoneWThreejsVueDyn v-if="cmpPick==='WThreejsVueDyn'"></AppZoneWThreejsVueDyn>

            <AppZoneWAggridVueDyn v-if="cmpPick==='WAggridVueDyn'"></AppZoneWAggridVueDyn>

            <AppZoneWTableDyn v-if="cmpPick==='WTableDyn'"></AppZoneWTableDyn>

            <AppZoneWImageViewerDyn v-if="cmpPick==='WImageViewerDyn'"></AppZoneWImageViewerDyn>

            <AppZoneWImageCascadingDyn v-if="cmpPick==='WImageCascadingDyn'"></AppZoneWImageCascadingDyn>

            <AppZoneWCkeditorVueDyn v-if="cmpPick==='WCkeditorVueDyn'"></AppZoneWCkeditorVueDyn>

            <AppZoneWTinymceVueDyn v-if="cmpPick==='WTinymceVueDyn'"></AppZoneWTinymceVueDyn>

            <AppZoneWQuillVueDyn v-if="cmpPick==='WQuillVueDyn'"></AppZoneWQuillVueDyn>

            <AppZoneWLeafletVueDyn v-if="cmpPick==='WLeafletVueDyn'"></AppZoneWLeafletVueDyn>

            <AppZoneWExplorer v-if="cmpPick==='WExplorer'"></AppZoneWExplorer>

            <AppZoneWColorPickHexagon v-if="cmpPick==='WColorPickHexagon'"></AppZoneWColorPickHexagon>

            <AppZoneWColorPickHexagonGray v-if="cmpPick==='WColorPickHexagonGray'"></AppZoneWColorPickHexagonGray>

            <AppZoneWColorPickHsv v-if="cmpPick==='WColorPickHsv'"></AppZoneWColorPickHsv>

            <AppZoneWColorPickHue v-if="cmpPick==='WColorPickHue'"></AppZoneWColorPickHue>

            <AppZoneWColorPickAlpha v-if="cmpPick==='WColorPickAlpha'"></AppZoneWColorPickAlpha>

            <AppZoneWColorPickStripe v-if="cmpPick==='WColorPickStripe'"></AppZoneWColorPickStripe>

            <AppZoneWColorSelectPanelBlock v-if="cmpPick==='WColorSelectPanelBlock'"></AppZoneWColorSelectPanelBlock>

            <AppZoneWColorSelectPanelHsva v-if="cmpPick==='WColorSelectPanelHsva'"></AppZoneWColorSelectPanelHsva>

            <AppZoneWColorSelectPanel v-if="cmpPick==='WColorSelectPanel'"></AppZoneWColorSelectPanel>

            <AppZoneWColorSelectInput v-if="cmpPick==='WColorSelectInput'"></AppZoneWColorSelectInput>

            <AppZoneWColorSelect v-if="cmpPick==='WColorSelect'"></AppZoneWColorSelect>


        </div>


    </v-app>
</template>

<script>
import get from 'lodash-es/get'
import kebabCase from 'lodash-es/kebabCase'
import each from 'lodash-es/each'
// import cloneDeep from 'lodash-es/cloneDeep'
import urlParse from 'wsemi/src/urlParse.mjs'
import WListHorizontal from './components/WListHorizontal.vue'
import AppZoneWBadge from './AppZoneWBadge.vue'
import AppZoneWPanelStripe from './AppZoneWPanelStripe.vue'
import AppZoneWPanelBulge from './AppZoneWPanelBulge.vue'
import AppZoneWPanelAvatar from './AppZoneWPanelAvatar.vue'
import AppZoneWPanelScrolly from './AppZoneWPanelScrolly.vue'
import AppZoneWPanelLabelItem from './AppZoneWPanelLabelItem.vue'
import AppZoneWPanelDivideHorizontal from './AppZoneWPanelDivideHorizontal.vue'
import AppZoneWPanelDivideVertical from './AppZoneWPanelDivideVertical.vue'
import AppZoneWPanelScale from './AppZoneWPanelScale.vue'
import AppZoneWIcon from './AppZoneWIcon.vue'
import AppZoneWDropfiles from './AppZoneWDropfiles.vue'
import AppZoneWDialog from './AppZoneWDialog.vue'
import AppZoneWConfirm from './AppZoneWConfirm.vue'
import AppZoneWTooltip from './AppZoneWTooltip.vue'
import AppZoneWPopup from './AppZoneWPopup.vue'
import AppZoneWPopupEditText from './AppZoneWPopupEditText.vue'
import AppZoneWDrawer from './AppZoneWDrawer.vue'
import AppZoneWButtonChip from './AppZoneWButtonChip.vue'
import AppZoneWButtonCircle from './AppZoneWButtonCircle.vue'
import AppZoneWSlider from './AppZoneWSlider.vue'
import AppZoneWProgressBar from './AppZoneWProgressBar.vue'
import AppZoneWProgressCircle from './AppZoneWProgressCircle.vue'
import AppZoneWSwitch from './AppZoneWSwitch.vue'
import AppZoneWCheckbox from './AppZoneWCheckbox.vue'
import AppZoneWLevelGrade from './AppZoneWLevelGrade.vue'
import AppZoneWAlert from './AppZoneWAlert.vue'
import AppZoneWGroupTags from './AppZoneWGroupTags.vue'
import AppZoneWGroupDragdrop from './AppZoneWGroupDragdrop.vue'
import AppZoneWGroupBaggage from './AppZoneWGroupBaggage.vue'
import AppZoneWListVertical from './AppZoneWListVertical.vue'
import AppZoneWListHorizontal from './AppZoneWListHorizontal.vue'
import AppZoneWListExpand from './AppZoneWListExpand.vue'
import AppZoneWListRadio from './AppZoneWListRadio.vue'
import AppZoneWListCheck from './AppZoneWListCheck.vue'
import AppZoneWInputCheckbox from './AppZoneWInputCheckbox.vue'
import AppZoneWInputRadio from './AppZoneWInputRadio.vue'
import AppZoneWGroupChipCheck from './AppZoneWGroupChipCheck.vue'
import AppZoneWGroupChipRadio from './AppZoneWGroupChipRadio.vue'
import AppZoneWGroupIconCheck from './AppZoneWGroupIconCheck.vue'
import AppZoneWGroupIconRadio from './AppZoneWGroupIconRadio.vue'
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
import AppZoneWSegmentsVertical from './AppZoneWSegmentsVertical.vue'
import AppZoneWJsonView from './AppZoneWJsonView.vue'
import AppZoneWTree from './AppZoneWTree.vue'
import AppZoneWHighchartsVueDyn from './AppZoneWHighchartsVueDyn.vue'
import AppZoneWHighchartsBitmapDyn from './AppZoneWHighchartsBitmapDyn.vue'
import AppZoneWHighstockVueDyn from './AppZoneWHighstockVueDyn.vue'
import AppZoneWEchartsVueDyn from './AppZoneWEchartsVueDyn.vue'
import AppZoneWThreejsVueDyn from './AppZoneWThreejsVueDyn.vue'
import AppZoneWAggridVueDyn from './AppZoneWAggridVueDyn.vue'
import AppZoneWTableDyn from './AppZoneWTableDyn.vue'
import AppZoneWImageViewerDyn from './AppZoneWImageViewerDyn.vue'
import AppZoneWImageCascadingDyn from './AppZoneWImageCascadingDyn.vue'
import AppZoneWCkeditorVueDyn from './AppZoneWCkeditorVueDyn.vue'
import AppZoneWTinymceVueDyn from './AppZoneWTinymceVueDyn.vue'
import AppZoneWQuillVueDyn from './AppZoneWQuillVueDyn.vue'
import AppZoneWLeafletVueDyn from './AppZoneWLeafletVueDyn.vue'
import AppZoneWExplorer from './AppZoneWExplorer.vue'
import AppZoneWColorPickHexagon from './AppZoneWColorPickHexagon.vue'
import AppZoneWColorPickHexagonGray from './AppZoneWColorPickHexagonGray.vue'
import AppZoneWColorPickHsv from './AppZoneWColorPickHsv.vue'
import AppZoneWColorPickHue from './AppZoneWColorPickHue.vue'
import AppZoneWColorPickAlpha from './AppZoneWColorPickAlpha.vue'
import AppZoneWColorPickStripe from './AppZoneWColorPickStripe.vue'
import AppZoneWColorSelectPanelBlock from './AppZoneWColorSelectPanelBlock.vue'
import AppZoneWColorSelectPanelHsva from './AppZoneWColorSelectPanelHsva.vue'
import AppZoneWColorSelectPanel from './AppZoneWColorSelectPanel.vue'
import AppZoneWColorSelectInput from './AppZoneWColorSelectInput.vue'
import AppZoneWColorSelect from './AppZoneWColorSelect.vue'


export default {
    components: {
        WListHorizontal,
        AppZoneWBadge,
        AppZoneWPanelStripe,
        AppZoneWPanelBulge,
        AppZoneWPanelAvatar,
        AppZoneWPanelScrolly,
        AppZoneWPanelLabelItem,
        AppZoneWPanelDivideHorizontal,
        AppZoneWPanelDivideVertical,
        AppZoneWPanelScale,
        AppZoneWIcon,
        AppZoneWDropfiles,
        AppZoneWDialog,
        AppZoneWConfirm,
        AppZoneWTooltip,
        AppZoneWPopup,
        AppZoneWPopupEditText,
        AppZoneWDrawer,
        AppZoneWButtonChip,
        AppZoneWButtonCircle,
        AppZoneWSlider,
        AppZoneWProgressBar,
        AppZoneWProgressCircle,
        AppZoneWSwitch,
        AppZoneWCheckbox,
        AppZoneWLevelGrade,
        AppZoneWAlert,
        AppZoneWGroupTags,
        AppZoneWGroupDragdrop,
        AppZoneWGroupBaggage,
        AppZoneWListVertical,
        AppZoneWListHorizontal,
        AppZoneWListExpand,
        AppZoneWListRadio,
        AppZoneWListCheck,
        AppZoneWInputCheckbox,
        AppZoneWInputRadio,
        AppZoneWGroupChipCheck,
        AppZoneWGroupChipRadio,
        AppZoneWGroupIconCheck,
        AppZoneWGroupIconRadio,
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
        AppZoneWSegmentsVertical,
        AppZoneWJsonView,
        AppZoneWTree,
        AppZoneWHighchartsVueDyn,
        AppZoneWHighchartsBitmapDyn,
        AppZoneWHighstockVueDyn,
        AppZoneWEchartsVueDyn,
        AppZoneWThreejsVueDyn,
        AppZoneWAggridVueDyn,
        AppZoneWTableDyn,
        AppZoneWImageViewerDyn,
        AppZoneWImageCascadingDyn,
        AppZoneWCkeditorVueDyn,
        AppZoneWTinymceVueDyn,
        AppZoneWQuillVueDyn,
        AppZoneWLeafletVueDyn,
        AppZoneWExplorer,
        AppZoneWColorPickHexagon,
        AppZoneWColorPickHexagonGray,
        AppZoneWColorPickHsv,
        AppZoneWColorPickHue,
        AppZoneWColorPickAlpha,
        AppZoneWColorPickStripe,
        AppZoneWColorSelectPanelBlock,
        AppZoneWColorSelectPanelHsva,
        AppZoneWColorSelectPanel,
        AppZoneWColorSelectInput,
        AppZoneWColorSelect,
    },
    data: function() {
        let cmps = [
            {
                name: 'basic',
                cmps: [
                    { name: 'WBadge' },
                    { name: 'WSwitch' },
                    { name: 'WCheckbox' },
                    { name: 'WIcon' },
                    { name: 'WDropfiles' },
                    { name: 'WSlider' },
                    { name: 'WProgressBar' },
                    { name: 'WProgressCircle' },
                ]
            },
            {
                name: 'special',
                cmps: [
                    { name: 'WLevelGrade' },
                ]
            },
            {
                name: 'panel',
                cmps: [
                    { name: 'WPanelStripe' },
                    { name: 'WPanelBulge' },
                    { name: 'WPanelAvatar' },
                    { name: 'WPanelScrolly' },
                    { name: 'WPanelLabelItem' },
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
                    { name: 'WInputRadio' },
                    { name: 'WGroupChipCheck' },
                    { name: 'WGroupChipRadio' },
                    { name: 'WGroupIconCheck' },
                    { name: 'WGroupIconRadio' },
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
                    { name: 'WListRadio' },
                    { name: 'WListCheck' },
                    { name: 'WDynamicList' },
                    { name: 'WSegmentsVertical' },
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
                name: 'color',
                cmps: [
                    {
                        name: 'pick',
                        cmps: [
                            { name: 'WColorPickHexagon' },
                            { name: 'WColorPickHexagonGray' },
                            { name: 'WColorPickHsv' },
                            { name: 'WColorPickHue' },
                            { name: 'WColorPickAlpha' },
                            { name: 'WColorPickStripe' },
                        ]
                    },
                    {
                        name: 'select',
                        cmps: [
                            { name: 'WColorSelectPanelBlock' },
                            { name: 'WColorSelectPanelHsva' },
                            { name: 'WColorSelectPanel' },
                            { name: 'WColorSelectInput' },
                            { name: 'WColorSelect' },
                        ]
                    },
                ]
            },
            {
                name: 'tree',
                cmps: [
                    { name: 'WTree' },
                    { name: 'WExplorer' },
                    { name: 'WJsonView' },
                ]
            },
            {
                name: 'window',
                cmps: [
                    { name: 'WAlert' },
                    { name: 'WDialog' },
                    { name: 'WConfirm' },
                    { name: 'WTooltip' },
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
                            { name: 'WThreejsVueDyn' },
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
        ]
        return {
            kebabCase,

            cmpsL1: cmps,
            indP1: null,
            cmpP1: null,

            cmpsL2: null,
            indP2: null,
            cmpP2: null,

            cmpsL3: null,
            indP3: null,
            cmpP3: null,

            cmpsL4: null,

            cmpPick: '',

        }
    },
    mounted: function() {
        let vo = this

        //default
        vo.indP1 = 0
        vo.indP2 = 0
        vo.indP3 = 0

        //urlParse, http://localhost:8080/?cmp=w-ckeditor-vue-dyn
        let p = urlParse(location.href)
        // console.log('p', p)

        //viewPick
        vo.viewPick(get(p, 'cmp', ''))

    },
    computed: {

        changeMenus: function() {
            let vo = this
            vo.modifyMenus(vo.indP1, vo.indP2, vo.indP3)
            return ''
        },

        isNarrow: function() {
            return window.innerWidth < 1000
        },

    },
    methods: {

        modifyMenus: function() {
            let vo = this

            let cmpPick = ''

            setTimeout(() => {

                // console.log('call P1')
                vo.cmpP1 = get(vo.cmpsL1, vo.indP1, {})
                vo.cmpsL2 = get(vo.cmpP1, `cmps`, [])
                let _cmpPick = get(vo.cmpP1, `name`, '')
                if (_cmpPick) {
                    cmpPick = _cmpPick
                }
                // console.log('vo.cmpP1', cloneDeep(vo.cmpP1))
                // console.log('vo.cmpsL2', cloneDeep(vo.cmpsL2))

            }, 50)

            setTimeout(() => {

                // console.log('call P2')
                let cmps = get(vo.cmpP1, `cmps`, [])
                vo.cmpP2 = get(cmps, vo.indP2, {})
                vo.cmpsL3 = get(vo.cmpP2, `cmps`, [])
                let _cmpPick = get(vo.cmpP2, `name`, '')
                if (_cmpPick) {
                    cmpPick = _cmpPick
                }
                // console.log('vo.cmpP2', cloneDeep(vo.cmpP2))
                // console.log('vo.cmpsL3', cloneDeep(vo.cmpsL3))

            }, 100)

            setTimeout(() => {

                // console.log('call P3')
                let cmps = get(vo.cmpP2, `cmps`, [])
                vo.cmpP3 = get(cmps, vo.indP3, {})
                vo.cmpsL4 = get(vo.cmpP3, `cmps`, [])
                let _cmpPick = get(vo.cmpP3, `name`, '')
                if (_cmpPick) {
                    cmpPick = _cmpPick
                }
                // console.log('vo.cmpP3', cloneDeep(vo.cmpP3))
                // console.log('vo.cmpsL4', cloneDeep(vo.cmpsL4))

                //update
                vo.cmpPick = cmpPick
                // console.log('cmpPick', cmpPick)

            }, 150)

        },

        getInd: function(item, items) {
            // let vo = this
            let ind = -1
            each(items, (v, k) => {
                if (item.name === v.name) {
                    ind = k
                    return false //跳出
                }
            })
            return ind
        },

        viewPick: function(cmpPick) {
            let vo = this
            let _cmpPick = kebabCase(cmpPick)
            let r = ''
            let rs = []
            let ls = []
            let pv = (ts) => {
                each(ts, (v, k) => {
                    ls.push(k)

                    //name, _name
                    let name = get(v, `name`, '')
                    let _name = kebabCase(name)

                    //cmps
                    let cmps = get(v, `cmps`, [])

                    //push
                    let cls = ls.join('.')
                    let b = _name === _cmpPick
                    rs.push({
                        cls,
                        name,
                        b,
                    })

                    //save
                    if (b) {
                        r = JSON.parse(JSON.stringify(ls))
                    }

                    //遞迴pv
                    if (cmps.length > 0) {
                        pv(cmps)
                    }

                    ls.pop()
                })
            }
            pv(vo.cmpsL1)
            // console.log('rs', rs)
            // console.log('r', r)
            vo.indP1 = get(r, 0, 0)
            vo.indP2 = get(r, 1, 0)
            vo.indP3 = get(r, 2, 0)
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
    padding: 0px 0px 20px 0px;
    font-size: 2.5rem;
}
.bkh { /* 寬 */
    padding:20px;
}
@media screen and (max-width:800px){ /* 中 */
    .bkh {
        padding:10px;
    }
}
@media screen and (max-width:400px){ /* 窄 */
    .bkh {
        padding:5px;
    }
}
.bk { /* 寬 */
    display: inline-block;
    vertical-align: top;
    padding: 0px 80px 60px 0px;
}
@media screen and (max-width:1000px){ /* 中窄 */
    .bk {
        display: block;
        padding: 0px 0px 50px 0px;
    }
}
</style>
