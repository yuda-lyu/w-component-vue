<script>
import WAlert from './WAlert.mjs'
import WBadge from './WBadge.vue'
import WButtonChip from './WButtonChip.vue'
import WButtonCircle from './WButtonCircle.vue'
import WCheckChips from './WCheckChips.vue'
import WChips from './WChips.vue'
import WIcon from './WIcon.vue'
import WProgressCircle from './WProgressCircle.vue'
import WRadioChips from './WRadioChips.vue'
import WShellEllipse from './WShellEllipse.vue'
import WShellMaterial from './WShellMaterial.vue'
import WSwitch from './WSwitch.vue'
import WText from './WText.vue'
import WTextarea from './WTextarea.vue'
import WTextCore from './WTextCore.vue'
import WTextInt from './WTextInt.vue'
import WTextIntCore from './WTextIntCore.vue'
import WTextSelects from './WTextSelects.vue'
import WTextSelectsCore from './WTextSelectsCore.vue'
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
        Vue.component('w-check-chips', WCheckChips)
        Vue.component('w-chips', WChips)
        Vue.component('w-icon', WIcon)
        Vue.component('w-progress-circle', WProgressCircle)
        Vue.component('w-radio-chips', WRadioChips)
        Vue.component('w-shell-ellipse', WShellEllipse)
        Vue.component('w-shell-material', WShellMaterial)
        Vue.component('w-switch', WSwitch)
        Vue.component('w-text', WText)
        Vue.component('w-textarea', WTextarea)
        Vue.component('w-text-core', WTextCore)
        Vue.component('w-text-int', WTextInt)
        Vue.component('w-text-int-core', WTextIntCore)
        Vue.component('w-text-selects', WTextSelects)
        Vue.component('w-text-selects-core', WTextSelectsCore)
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

