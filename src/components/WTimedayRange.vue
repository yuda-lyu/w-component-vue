<template>
    <!-- 時間組件因v-date-picker有點擊區域的限制, 故得使用display:inline-block -->
    <div style="display:inline-block; cursor:pointer;" :changeParam="changeParam">

        <w-shell-ellipse
            :paddingStyle="paddingStyle"
            :borderRadius="borderRadius"
            :shadow="shadow"
            :leftIcon="icon"
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
            @click-left="function(v){$emit('click-left', v)}"
        >

            <w-timeday-range-core
                :pickColor="pickColor"
                :dayBetween="dayBetween"
                :dayStart="dayStart"
                :dayEnd="dayEnd"
                :editable="editable"
                @update:focused="changeFocused"
                @update:dayStart="function(v){$emit('update:dayStart', v)}"
                @update:dayEnd="function(v){$emit('update:dayEnd', v)}"
            ></w-timeday-range-core>

        </w-shell-ellipse>

    </div>
</template>

<script>
import { mdiClockOutline } from '@mdi/js'
import WShellEllipse from './WShellEllipse.vue'
import WTimedayRangeCore from './WTimedayRangeCore.vue'


/**
 * @vue-prop {Object} [paddingStyle={v:0,h:15}] 輸入內寬距離物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:15}
 * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [dayStart=''] 輸入起始日期字串，預設''
 * @vue-prop {String} [dayEnd=''] 輸入結束日期字串，預設''
 * @vue-prop {String} [dayBetween='至'] 輸入兩日期連接文字字串，預設'至'
 * @vue-prop {String} [icon=mdiClockOutline] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiClockOutline
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
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTimedayRangeCore,
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
        dayStart: {
            type: String,
            default: '',
        },
        dayEnd: {
            type: String,
            default: '',
        },
        dayBetween: {
            type: String,
            default: '至'
        },
        icon: {
            type: String,
            default: mdiClockOutline,
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
