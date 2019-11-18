<script>
import WAlert from './WAlert.mjs'
import WBadge from './WBadge.vue'
import WButtonChip from './WButtonChip.vue'
import WButtonCircle from './WButtonCircle.vue'
import WButtonGroupChip from './WButtonGroupChip.vue'
import WCheckChips from './WCheckChips.vue'
import WChips from './WChips.vue'
import WConfirm from './WConfirm.vue'
import WDialog from './WDialog.vue'
import WDynamicList from './WDynamicList.vue'
import WIcon from './WIcon.vue'
import WIconSvg from './WIconSvg.vue'
import WJsonView from './WJsonView.vue'
import WJsonViewCore from './WJsonViewCore.vue'
import WPanel from './WPanel.vue'
import WPopupPanel from './WPopupPanel.vue'
import WProgressCircle from './WProgressCircle.vue'
import WRadioChips from './WRadioChips.vue'
import WScrollyPanel from './WScrollyPanel.vue'
import WShellEllipse from './WShellEllipse.vue'
import WShellMaterial from './WShellMaterial.vue'
import WSwitch from './WSwitch.vue'
import WText from './WText.vue'
import WTextarea from './WTextarea.vue'
import WTextCore from './WTextCore.vue'
import WTextInt from './WTextInt.vue'
import WTextIntCore from './WTextIntCore.vue'
import WTextSelect from './WTextSelect.vue'
import WTextSelectCore from './WTextSelectCore.vue'
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

let WComponentVue = {
    install: function(Vue) {
        Vue.prototype.$alert = WAlert
        Vue.component('w-badge', WBadge)
        Vue.component('w-button-chip', WButtonChip)
        Vue.component('w-button-circle', WButtonCircle)
        Vue.component('w-button-group-chip', WButtonGroupChip)
        Vue.component('w-check-chips', WCheckChips)
        Vue.component('w-chips', WChips)
        Vue.component('w-confirm', WConfirm)
        Vue.component('w-dialog', WDialog)
        Vue.component('w-dynamic-list', WDynamicList)
        Vue.component('w-icon', WIcon)
        Vue.component('w-icon-svg', WIconSvg)
        Vue.component('w-json-view', WJsonView)
        Vue.component('w-json-view-core', WJsonViewCore)
        Vue.component('w-panel', WPanel)
        Vue.component('w-popup-panel', WPopupPanel)
        Vue.component('w-progress-circle', WProgressCircle)
        Vue.component('w-radio-chips', WRadioChips)
        Vue.component('w-scrolly-panel', WScrollyPanel)
        Vue.component('w-shell-ellipse', WShellEllipse)
        Vue.component('w-shell-material', WShellMaterial)
        Vue.component('w-switch', WSwitch)
        Vue.component('w-text', WText)
        Vue.component('w-textarea', WTextarea)
        Vue.component('w-text-core', WTextCore)
        Vue.component('w-text-int', WTextInt)
        Vue.component('w-text-int-core', WTextIntCore)
        Vue.component('w-text-select', WTextSelect)
        Vue.component('w-text-select-core', WTextSelectCore)
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
    }
}

export default WComponentVue
</script>

