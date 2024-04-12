<template>
    <!-- 時間組件因v-date-picker有點擊區域的限制, 故得使用display:inline-block -->
    <div
        style="display:inline-block; cursor:pointer;"
        :changeParam="changeParam"
    >

        <WShellEllipse
            :paddingStyle="paddingStyle"
            :borderRadius="borderRadius"
            :shadow="shadow"
            :leftIcon="icon"
            :leftIconSize="iconSize"
            :leftIconColor="iconColor"
            :leftIconColorHover="iconColorHover"
            :leftIconColorFocus="iconColorFocus"
            :leftIconTooltip="iconTooltip"
            :iconShiftOuter="iconShiftOuter"
            :iconShiftInner="iconShiftInner"
            :backgroundColor="backgroundColor"
            :backgroundColorHover="backgroundColorHover"
            :backgroundColorFocus="backgroundColorFocus"
            :borderColor="borderColor"
            :borderColorHover="borderColorHover"
            :borderColorFocus="borderColorFocus"
            :editable="editable"
            :focused="focusedTrans"
            @click-left="$emit('click-left')"
        >

            <WTimeminuteCore
                :hourMin="hourMin"
                :hourMax="hourMax"
                :minuteInter="minuteInter"
                :minutesCustom="minutesCustom"
                :textFontSize="textFontSize"
                :textColor="textColor"
                :pickColor="pickColor"
                :expansionIcon="expansionIcon"
                :expansionIconSize="expansionIconSize"
                :expansionIconColor="expansionIconColor"
                :placementDist="placementDist"
                :textEmpty="textEmpty"
                :editable="editable"
                :value="value"
                @update:focused="changeFocused"
                @input="(v)=>{$emit('input', v)}"
            ></WTimeminuteCore>

        </WShellEllipse>

    </div>
</template>

<script>
import { mdiClockOutline, mdiPlay } from '@mdi/js'
import WShellEllipse from './WShellEllipse.vue'
import WTimeminuteCore from './WTimeminuteCore.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:2,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:2,h:15}
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度數字，單位為px，預設30
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {Number} [hourMin=8] 輸入可選最小小時，單位為小時，預設8
 * @vue-prop {Number} [hourMax=8] 輸入可選最大小時，單位為小時，預設8
 * @vue-prop {Number} [minuteInter=15] 輸入每小時的切分區間，單位為分鐘，預設15
 * @vue-prop {Array} [minutesCustom=null] 輸入自訂可選的時分點字串陣列，單位為時分(00:00)，若給予，則上述hourMin,hourMax,minuteInter自動失效，預設null
 * @vue-prop {String} [icon=mdiClockOutline] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiClockOutline
 * @vue-prop {Number} [iconSize=24] 輸入左側圖標大小，單位為px，預設24
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入框外左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorHover='deep-orange lighten-1'] 輸入滑鼠移入時框外左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入取得焦點時框外左側圖標顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入圖標提示文字字串，預設''
 * @vue-prop {Number} [iconShiftOuter=-10] 輸入左右側圖標與外框距離數字，單位為px，預設-10
 * @vue-prop {Number} [iconShiftInner=5] 輸入左右側圖標與內插槽區距離數字，單位為px，預設5
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='white'] 輸入滑鼠移入時背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入取得焦點時背景顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入滑鼠移入時邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入取得焦點時邊框顏色字串，預設'white'
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {String} [expansionIcon=mdiPlay] 輸入顯隱圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設使用mdi的圖標(mdiPlay)
 * @vue-prop {Number} [expansionIconSize=18] 輸入顯隱圖標尺寸數字，單位為px，預設18
 * @vue-prop {String} [expansionIconColor='grey'] 輸入顯隱圖標顏色字串，預設'grey'
 * @vue-prop {Number} [placementDist=7] 輸入日期彈窗y向下平移數字，預設7
 * @vue-prop {String} [textEmpty='Select a date'] 輸入尚未輸入日期之顯示文字字串，預設'Select a date'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTimeminuteCore
    },
    props: {
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 2,
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
        value: {
            type: String,
            default: '',
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
        iconSize: {
            type: Number,
            default: 24,
        },
        iconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        iconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
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
        backgroundColorHover: {
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
        borderColorHover: {
            type: String,
            default: 'white',
        },
        borderColorFocus: {
            type: String,
            default: 'white',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        pickColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        expansionIcon: {
            type: String,
            default: mdiPlay,
        },
        expansionIconSize: {
            type: Number,
            default: 18,
        },
        expansionIconColor: {
            type: String,
            default: 'grey',
        },
        placementDist: {
            type: Number,
            default: 7,
        },
        textEmpty: {
            type: String,
            default: 'Select a date',
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
