<script>
import WAggridVueDyn from './WAggridVueDyn.vue'
import WAlert from './WAlert.mjs'
import WBadge from './WBadge.vue'
import WButtonChip from './WButtonChip.vue'
import WButtonCircle from './WButtonCircle.vue'
import WButtonProg from './WButtonProg.vue'
import WCkeditorVueDyn from './WCkeditorVueDyn.vue'
import WConfirm from './WConfirm.vue'
import WDialog from './WDialog.vue'
import WDropfiles from './WDropfiles.vue'
import WDynamicList from './WDynamicList.vue'
import WEchartsVueDyn from './WEchartsVueDyn.vue'
import WGroupButtons from './WGroupButtons.vue'
import WGroupCheck from './WGroupCheck.vue'
import WGroupRadioCapsule from './WGroupRadioCapsule.vue'
import WGroupRadioChip from './WGroupRadioChip.vue'
import WGroupTabs from './WGroupTabs.vue'
import WGroupTags from './WGroupTags.vue'
import WHighchartsVueDyn from './WHighchartsVueDyn.vue'
import WHighstockVueDyn from './WHighstockVueDyn.vue'
import WIcon from './WIcon.vue'
import WIconLoading from './WIconLoading.vue'
import WIconSvg from './WIconSvg.vue'
import WImageViewerDyn from './WImageViewerDyn.vue'
import WJsonView from './WJsonView.vue'
import WJsonViewCore from './WJsonViewCore.vue'
import WPanelBulge from './WPanelBulge.vue'
import WPanelDivideHorizontal from './WPanelDivideHorizontal.vue'
import WPanelDivideVertical from './WPanelDivideVertical.vue'
import WPanelScrolly from './WPanelScrolly.vue'
import WPanelScrollyCore from './WPanelScrollyCore.vue'
import WPanelStripe from './WPanelStripe.vue'
import WPopup from './WPopup.vue'
import WProgressCircle from './WProgressCircle.vue'
import WQuillVueDyn from './WQuillVueDyn.vue'
import WShellEllipse from './WShellEllipse.vue'
import WShellMaterial from './WShellMaterial.vue'
import WSwitch from './WSwitch.vue'
import WText from './WText.vue'
import WTextarea from './WTextarea.vue'
import WTextCore from './WTextCore.vue'
import WTextInt from './WTextInt.vue'
import WTextIntCore from './WTextIntCore.vue'
import WTextSelect from './WTextSelect.vue'
import WTextSuggest from './WTextSuggest.vue'
import WTextSuggestCore from './WTextSuggestCore.vue'
import WTimeday from './WTimeday.vue'
import WTimedayCore from './WTimedayCore.vue'
import WTimedayRange from './WTimedayRange.vue'
import WTimedayRangeCore from './WTimedayRangeCore.vue'
import WTimeminute from './WTimeminute.vue'
import WTimeminuteCore from './WTimeminuteCore.vue'
import WTimeminuteRange from './WTimeminuteRange.vue'
import WTimeminuteRangeCore from './WTimeminuteRangeCore.vue'
import WTinymceVueDyn from './WTinymceVueDyn.vue'
import WTreeDraggable from './WTreeDraggable.vue'

let WComponentVue = {
    install: function(Vue) {
        Vue.component('w-aggrid-vue-dyn', WAggridVueDyn)
        Vue.prototype.$alert = WAlert
        Vue.component('w-badge', WBadge)
        Vue.component('w-button-chip', WButtonChip)
        Vue.component('w-button-circle', WButtonCircle)
        Vue.component('w-button-prog', WButtonProg)
        Vue.component('w-ckeditor-vue-dyn', WCkeditorVueDyn)
        Vue.component('w-confirm', WConfirm)
        Vue.component('w-dialog', WDialog)
        Vue.component('w-dropfiles', WDropfiles)
        Vue.component('w-dynamic-list', WDynamicList)
        Vue.component('w-echarts-vue-dyn', WEchartsVueDyn)
        Vue.component('w-group-buttons', WGroupButtons)
        Vue.component('w-group-check', WGroupCheck)
        Vue.component('w-group-radio-capsule', WGroupRadioCapsule)
        Vue.component('w-group-radio-chip', WGroupRadioChip)
        Vue.component('w-group-tabs', WGroupTabs)
        Vue.component('w-group-tags', WGroupTags)
        Vue.component('w-highcharts-vue-dyn', WHighchartsVueDyn)
        Vue.component('w-highstock-vue-dyn', WHighstockVueDyn)
        Vue.component('w-icon', WIcon)
        Vue.component('w-icon-loading', WIconLoading)
        Vue.component('w-icon-svg', WIconSvg)
        Vue.component('w-image-viewer-dyn', WImageViewerDyn)
        Vue.component('w-json-view', WJsonView)
        Vue.component('w-json-view-core', WJsonViewCore)
        Vue.component('w-panel-bulge', WPanelBulge)
        Vue.component('w-panel-divide-horizontal', WPanelDivideHorizontal)
        Vue.component('w-panel-divide-vertical', WPanelDivideVertical)
        Vue.component('w-panel-scrolly', WPanelScrolly)
        Vue.component('w-panel-scrolly-core', WPanelScrollyCore)
        Vue.component('w-panel-stripe', WPanelStripe)
        Vue.component('w-popup', WPopup)
        Vue.component('w-progress-circle', WProgressCircle)
        Vue.component('w-quill-vue-dyn', WQuillVueDyn)
        Vue.component('w-shell-ellipse', WShellEllipse)
        Vue.component('w-shell-material', WShellMaterial)
        Vue.component('w-switch', WSwitch)
        Vue.component('w-text', WText)
        Vue.component('w-textarea', WTextarea)
        Vue.component('w-text-core', WTextCore)
        Vue.component('w-text-int', WTextInt)
        Vue.component('w-text-int-core', WTextIntCore)
        Vue.component('w-text-select', WTextSelect)
        Vue.component('w-text-suggest', WTextSuggest)
        Vue.component('w-text-suggest-core', WTextSuggestCore)
        Vue.component('w-timeday', WTimeday)
        Vue.component('w-timeday-core', WTimedayCore)
        Vue.component('w-timeday-range', WTimedayRange)
        Vue.component('w-timeday-range-core', WTimedayRangeCore)
        Vue.component('w-timeminute', WTimeminute)
        Vue.component('w-timeminute-core', WTimeminuteCore)
        Vue.component('w-timeminute-range', WTimeminuteRange)
        Vue.component('w-timeminute-range-core', WTimeminuteRangeCore)
        Vue.component('w-tinymce-vue-dyn', WTinymceVueDyn)
        Vue.component('w-tree-draggable', WTreeDraggable)
    }
}

export default WComponentVue
</script>

