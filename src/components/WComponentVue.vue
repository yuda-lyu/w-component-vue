<script>
import Teleport from './Teleport.vue'
import WAggridVueDyn from './WAggridVueDyn.vue'
import WAlert from './WAlert.mjs'
import WBadge from './WBadge.vue'
import WButtonChip from './WButtonChip.vue'
import WButtonCircle from './WButtonCircle.vue'
import WCheckbox from './WCheckbox.vue'
import WCkeditorVueDyn from './WCkeditorVueDyn.vue'
import WColorPickAlpha from './WColorPickAlpha.vue'
import WColorPickHexagon from './WColorPickHexagon.vue'
import WColorPickHexagonGray from './WColorPickHexagonGray.vue'
import WColorPickHsv from './WColorPickHsv.vue'
import WColorPickHue from './WColorPickHue.vue'
import WColorPickStripe from './WColorPickStripe.vue'
import WColorSelect from './WColorSelect.vue'
import WColorSelectInput from './WColorSelectInput.vue'
import WColorSelectPanel from './WColorSelectPanel.vue'
import WColorSelectPanelBlock from './WColorSelectPanelBlock.vue'
import WColorSelectPanelHsva from './WColorSelectPanelHsva.vue'
import WConfirm from './WConfirm.vue'
import WDialog from './WDialog.vue'
import WDrawer from './WDrawer.vue'
import WDropfiles from './WDropfiles.vue'
import WDynamicList from './WDynamicList.vue'
import WEchartsVueDyn from './WEchartsVueDyn.vue'
import WExplorer from './WExplorer.vue'
import WGroupBaggage from './WGroupBaggage.vue'
import WGroupBaggageItem from './WGroupBaggageItem.vue'
import WGroupChipCheck from './WGroupChipCheck.vue'
import WGroupChipRadio from './WGroupChipRadio.vue'
import WGroupDragdrop from './WGroupDragdrop.vue'
import WGroupIconCheck from './WGroupIconCheck.vue'
import WGroupIconRadio from './WGroupIconRadio.vue'
import WGroupTags from './WGroupTags.vue'
import WHighchartsBitmapDyn from './WHighchartsBitmapDyn.vue'
import WHighchartsVueDyn from './WHighchartsVueDyn.vue'
import WHighstockVueDyn from './WHighstockVueDyn.vue'
import WIcon from './WIcon.vue'
import WIconLoading from './WIconLoading.vue'
import WImageCascadingDyn from './WImageCascadingDyn.vue'
import WImageLazy from './WImageLazy.vue'
import WImageViewerDyn from './WImageViewerDyn.vue'
import WInputCheckbox from './WInputCheckbox.vue'
import WInputRadio from './WInputRadio.vue'
import WJsonView from './WJsonView.vue'
import WLeafletVueDyn from './WLeafletVueDyn.vue'
import WLevelGrade from './WLevelGrade.vue'
import WListCheck from './WListCheck.vue'
import WListExpand from './WListExpand.vue'
import WListExpandItem from './WListExpandItem.vue'
import WListHorizontal from './WListHorizontal.vue'
import WListItem from './WListItem.vue'
import WListRadio from './WListRadio.vue'
import WListVertical from './WListVertical.vue'
import WPanelAvatar from './WPanelAvatar.vue'
import WPanelBulge from './WPanelBulge.vue'
import WPanelDivideHorizontal from './WPanelDivideHorizontal.vue'
import WPanelDivideVertical from './WPanelDivideVertical.vue'
import WPanelLabelItem from './WPanelLabelItem.vue'
import WPanelScale from './WPanelScale.vue'
import WPanelScrolly from './WPanelScrolly.vue'
import WPanelScrollyCore from './WPanelScrollyCore.vue'
import WPanelStripe from './WPanelStripe.vue'
import WPopup from './WPopup.vue'
import WPopupEditText from './WPopupEditText.vue'
import WProgressBar from './WProgressBar.vue'
import WProgressCircle from './WProgressCircle.vue'
import WQuillVueDyn from './WQuillVueDyn.vue'
import WSegmentsVertical from './WSegmentsVertical.vue'
import WShellBottomLine from './WShellBottomLine.vue'
import WShellEllipse from './WShellEllipse.vue'
import WSlider from './WSlider.vue'
import WSwitch from './WSwitch.vue'
import WTableDyn from './WTableDyn.vue'
import WText from './WText.vue'
import WTextarea from './WTextarea.vue'
import WTextareaCore from './WTextareaCore.vue'
import WTextCore from './WTextCore.vue'
import WTextInt from './WTextInt.vue'
import WTextIntCore from './WTextIntCore.vue'
import WTextSelect from './WTextSelect.vue'
import WTextSuggest from './WTextSuggest.vue'
import WTextSuggestCore from './WTextSuggestCore.vue'
import WThreejsVueDyn from './WThreejsVueDyn.vue'
import WTimeday from './WTimeday.vue'
import WTimedayCore from './WTimedayCore.vue'
import WTimedayCoreRe from './WTimedayCoreRe.vue'
import WTimedayRange from './WTimedayRange.vue'
import WTimedayRangeCore from './WTimedayRangeCore.vue'
import WTimeminute from './WTimeminute.vue'
import WTimeminuteCore from './WTimeminuteCore.vue'
import WTimeminuteRange from './WTimeminuteRange.vue'
import WTimeminuteRangeCore from './WTimeminuteRangeCore.vue'
import WTinymceVueDyn from './WTinymceVueDyn.vue'
import WTooltip from './WTooltip.vue'
import WTree from './WTree.vue'
import WTreeIconCheckbox from './WTreeIconCheckbox.vue'
import WTreeIconToggle from './WTreeIconToggle.vue'
import WVditorDyn from './WVditorDyn.vue'

let WComponentVue = {
    install: function(Vue) {
        Vue.component('teleport', Teleport)
        Vue.component('w-aggrid-vue-dyn', WAggridVueDyn)
        Vue.prototype.$alert = WAlert
        Vue.component('w-badge', WBadge)
        Vue.component('w-button-chip', WButtonChip)
        Vue.component('w-button-circle', WButtonCircle)
        Vue.component('w-checkbox', WCheckbox)
        Vue.component('w-ckeditor-vue-dyn', WCkeditorVueDyn)
        Vue.component('w-color-pick-alpha', WColorPickAlpha)
        Vue.component('w-color-pick-hexagon', WColorPickHexagon)
        Vue.component('w-color-pick-hexagon-gray', WColorPickHexagonGray)
        Vue.component('w-color-pick-hsv', WColorPickHsv)
        Vue.component('w-color-pick-hue', WColorPickHue)
        Vue.component('w-color-pick-stripe', WColorPickStripe)
        Vue.component('w-color-select', WColorSelect)
        Vue.component('w-color-select-input', WColorSelectInput)
        Vue.component('w-color-select-panel', WColorSelectPanel)
        Vue.component('w-color-select-panel-block', WColorSelectPanelBlock)
        Vue.component('w-color-select-panel-hsva', WColorSelectPanelHsva)
        Vue.component('w-confirm', WConfirm)
        Vue.component('w-dialog', WDialog)
        Vue.component('w-drawer', WDrawer)
        Vue.component('w-dropfiles', WDropfiles)
        Vue.component('w-dynamic-list', WDynamicList)
        Vue.component('w-echarts-vue-dyn', WEchartsVueDyn)
        Vue.component('w-explorer', WExplorer)
        Vue.component('w-group-baggage', WGroupBaggage)
        Vue.component('w-group-baggage-item', WGroupBaggageItem)
        Vue.component('w-group-chip-check', WGroupChipCheck)
        Vue.component('w-group-chip-radio', WGroupChipRadio)
        Vue.component('w-group-dragdrop', WGroupDragdrop)
        Vue.component('w-group-icon-check', WGroupIconCheck)
        Vue.component('w-group-icon-radio', WGroupIconRadio)
        Vue.component('w-group-tags', WGroupTags)
        Vue.component('w-highcharts-bitmap-dyn', WHighchartsBitmapDyn)
        Vue.component('w-highcharts-vue-dyn', WHighchartsVueDyn)
        Vue.component('w-highstock-vue-dyn', WHighstockVueDyn)
        Vue.component('w-icon', WIcon)
        Vue.component('w-icon-loading', WIconLoading)
        Vue.component('w-image-cascading-dyn', WImageCascadingDyn)
        Vue.component('w-image-lazy', WImageLazy)
        Vue.component('w-image-viewer-dyn', WImageViewerDyn)
        Vue.component('w-input-checkbox', WInputCheckbox)
        Vue.component('w-input-radio', WInputRadio)
        Vue.component('w-json-view', WJsonView)
        Vue.component('w-leaflet-vue-dyn', WLeafletVueDyn)
        Vue.component('w-level-grade', WLevelGrade)
        Vue.component('w-list-check', WListCheck)
        Vue.component('w-list-expand', WListExpand)
        Vue.component('w-list-expand-item', WListExpandItem)
        Vue.component('w-list-horizontal', WListHorizontal)
        Vue.component('w-list-item', WListItem)
        Vue.component('w-list-radio', WListRadio)
        Vue.component('w-list-vertical', WListVertical)
        Vue.component('w-panel-avatar', WPanelAvatar)
        Vue.component('w-panel-bulge', WPanelBulge)
        Vue.component('w-panel-divide-horizontal', WPanelDivideHorizontal)
        Vue.component('w-panel-divide-vertical', WPanelDivideVertical)
        Vue.component('w-panel-label-item', WPanelLabelItem)
        Vue.component('w-panel-scale', WPanelScale)
        Vue.component('w-panel-scrolly', WPanelScrolly)
        Vue.component('w-panel-scrolly-core', WPanelScrollyCore)
        Vue.component('w-panel-stripe', WPanelStripe)
        Vue.component('w-popup', WPopup)
        Vue.component('w-popup-edit-text', WPopupEditText)
        Vue.component('w-progress-bar', WProgressBar)
        Vue.component('w-progress-circle', WProgressCircle)
        Vue.component('w-quill-vue-dyn', WQuillVueDyn)
        Vue.component('w-segments-vertical', WSegmentsVertical)
        Vue.component('w-shell-bottom-line', WShellBottomLine)
        Vue.component('w-shell-ellipse', WShellEllipse)
        Vue.component('w-slider', WSlider)
        Vue.component('w-switch', WSwitch)
        Vue.component('w-table-dyn', WTableDyn)
        Vue.component('w-text', WText)
        Vue.component('w-textarea', WTextarea)
        Vue.component('w-textarea-core', WTextareaCore)
        Vue.component('w-text-core', WTextCore)
        Vue.component('w-text-int', WTextInt)
        Vue.component('w-text-int-core', WTextIntCore)
        Vue.component('w-text-select', WTextSelect)
        Vue.component('w-text-suggest', WTextSuggest)
        Vue.component('w-text-suggest-core', WTextSuggestCore)
        Vue.component('w-threejs-vue-dyn', WThreejsVueDyn)
        Vue.component('w-timeday', WTimeday)
        Vue.component('w-timeday-core', WTimedayCore)
        Vue.component('w-timeday-core-re', WTimedayCoreRe)
        Vue.component('w-timeday-range', WTimedayRange)
        Vue.component('w-timeday-range-core', WTimedayRangeCore)
        Vue.component('w-timeminute', WTimeminute)
        Vue.component('w-timeminute-core', WTimeminuteCore)
        Vue.component('w-timeminute-range', WTimeminuteRange)
        Vue.component('w-timeminute-range-core', WTimeminuteRangeCore)
        Vue.component('w-tinymce-vue-dyn', WTinymceVueDyn)
        Vue.component('w-tooltip', WTooltip)
        Vue.component('w-tree', WTree)
        Vue.component('w-tree-icon-checkbox', WTreeIconCheckbox)
        Vue.component('w-tree-icon-toggle', WTreeIconToggle)
        Vue.component('w-vditor-dyn', WVditorDyn)
    }
}

export default WComponentVue
</script>

