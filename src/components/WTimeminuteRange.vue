<template>
    <!-- 時間組件因v-date-picker有點擊區域的限制, 故得使用display:inline-block -->
    <div style="display:inline-block; cursor:pointer;" :changeParam="changeParam">

        <w-shell-ellipse
            :paddingStyle="paddingStyle"
            :borderRadius="borderRadius"
            :shadow="shadow"
            :leftIcon="icon"
            :leftIconColor="iconColor"
            :leftIconColorFocus="iconColorFocus"
            :leftIconTooltip="iconTooltip"
            :iconShiftOuter="iconShiftOuter"
            :iconShiftInner="iconShiftInner"
            :backgroundColor="backgroundColor"
            :backgroundColorFocus="backgroundColorFocus"
            :borderColor="borderColor"
            :borderColorFocus="borderColorFocus"
            :editable="editable"
            :focused="focusedTrans"
            @click-left="function(v){$emit('click-left', v)}"
        >

            <w-timeminute-range-core
                :pickColor="pickColor"
                :hourMin="hourMin"
                :hourMax="hourMax"
                :minuteInter="minuteInter"
                :minutesCustom="minutesCustom"
                :minuteBetween="minuteBetween"
                :minuteEnd="minuteEnd"
                :minuteStart="minuteStart"
                :editable="editable"
                @update:focused="changeFocused"
                @update:minuteEnd="function(v){$emit('update:minuteEnd', v)}"
                @update:minuteStart="function(v){$emit('update:minuteStart', v)}"
            ></w-timeminute-range-core>

        </w-shell-ellipse>

    </div>
</template>

<script>
import { mdiClockOutline } from '@mdi/js'
import WShellEllipse from './WShellEllipse.vue'
import WTimeminuteRangeCore from './WTimeminuteRangeCore.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:0,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:15}
 * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [minuteStart=''] 輸入時間字串，預設''
 * @vue-prop {String} [minuteEnd=''] 輸入時間字串，預設''
 * @vue-prop {String} [minuteBetween='至'] 輸入兩時間連接文字字串，預設'至'
 * @vue-prop {Number} [hourMin=8] 輸入可選最小小時，單位為小時，預設8
 * @vue-prop {Number} [hourMax=8] 輸入可選最大小時，單位為小時，預設8
 * @vue-prop {Number} [minuteInter=15] 輸入每小時的切分區間，單位為分鐘，預設15
 * @vue-prop {Array} [minutesCustom=null] 輸入自訂可選的時分點字串陣列，單位為時分(00:00)，若給予，則上述hourMin,hourMax,minuteInter自動失效，預設null
 * @vue-prop {String} [icon=mdiClockOutline] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiClockOutline
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=-10] 輸入左右側圖標與外框距離數字，單位為px，預設-10
 * @vue-prop {Number} [iconShiftInner=5] 輸入左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTimeminuteRangeCore,
    },
    props: {
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 15,
                }
            },
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        minuteStart: {
            type: String,
            default: '',
        },
        minuteEnd: {
            type: String,
            default: '',
        },
        minuteBetween: {
            type: String,
            default: '至'
        },
        hourMin: {
            type: Number,
            default: 8,
        },
        hourMax: {
            type: Number,
            default: 18,
        },
        minuteInter: {
            type: Number,
            default: 15,
        },
        minutesCustom: {
            type: Array,
            default: null,
        },
        icon: {
            type: String,
            default: mdiClockOutline,
        },
        iconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        iconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        iconTooltip: {
            type: String,
            default: '',
        },
        iconShiftOuter: {
            type: Number,
            default: -10,
        },
        iconShiftInner: {
            type: Number,
            default: 5,
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorFocus: {
            type: String,
            default: 'white',
        },
        borderColor: {
            type: String,
            default: 'white',
        },
        borderColorFocus: {
            type: String,
            default: 'white',
        },
        pickColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            mdiClockOutline,
            focusedTrans: false,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

    },
    methods: {

        changeFocused: function(focused) {
            //console.log('methods changeFocused', focused)

            let vo = this

            //save
            vo.focusedTrans = focused

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', focused)

            })

        },

    },
}
</script>

<style scoped>
</style>
