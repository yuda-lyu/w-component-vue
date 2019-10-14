<template>
    <div style="display:inline-block; cursor:pointer;" :changeParam="changeParam">

        <w-shell-ellipse
            :title="title"
            :titleColor="titleColor"
            :borderRadius="borderRadius"
            :borderShadow="borderShadow"
            :leftIcon="icon"
            :leftIconColor="iconColor"
            :leftIconColorFocus="iconColorFocus"
            :leftIconTooltip="iconTooltip"
            :backgroundColor="backgroundColor"
            :backgroundColorFocus="backgroundColorFocus"
            :borderColor="borderColor"
            :borderColorFocus="borderColorFocus"
            :small="small"
            :editable="editable"
            :focused="focusedTrans"
            @click-left="function(v){$emit('click-left', v)}"
        >

            <w-timeminute-core
                :hourMin="hourMin"
                :hourMax="hourMax"
                :minuteInter="minuteInter"
                :minutesCustom="minutesCustom"
                :pickColor="pickColor"
                :editable="editable"
                :value="value"
                @update:focused="changeFocused"
                @input="function(v){$emit('input', v)}"
            ></w-timeminute-core>

        </w-shell-ellipse>

    </div>
</template>

<script>
import { mdiClockOutline } from '@mdi/js'
import WShellEllipse from './WShellEllipse.vue'
import WTimeminuteCore from './WTimeminuteCore.vue'

/**
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {Number} [hourMin=8] 輸入可選最小小時，單位為小時，預設8
 * @vue-prop {Number} [hourMax=8] 輸入可選最大小時，單位為小時，預設8
 * @vue-prop {Number} [minuteInter=15] 輸入每小時的切分區間，單位為分鐘，預設15
 * @vue-prop {Array} [minutesCustom=null] 輸入自訂可選的時分點字串陣列，單位為時分(00:00)，若給予，則上述hourMin,hourMax,minuteInter自動失效，預設null
 * @vue-prop {String} [icon=mdiClockOutline] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiClockOutline
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入圖標提示文字字串，預設''
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTimeminuteCore
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        titleColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderShadow: {
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
        small: {
            type: Boolean,
            default: true,
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

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('update:focused', focused)

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
