<template>
    <div style="display:flex; align-items:center;">

        <w-timeminute-core
            :hourMin="hourMin"
            :hourMax="hourMax"
            :minuteInter="minuteInter"
            :minutesCustom="minutesCustom"
            :pickColor="pickColor"
            :editable="editable"
            :value="minuteStart"
            @input="function(v){$emit('update:minuteStart', v)}"
        ></w-timeminute-core>

        <div
            :style="[{'display':'inline-block','padding-left':'9px','padding-right':'13px'}]"
        >{{minuteBetween}}</div>

        <w-timeminute-core
            :hourMin="hourMin"
            :hourMax="hourMax"
            :minuteInter="minuteInter"
            :minutesCustom="minutesCustom"
            :pickColor="pickColor"
            :editable="editable"
            :value="minuteEnd"
            @input="function(v){$emit('update:minuteEnd', v)}"
        ></w-timeminute-core>

    </div>
</template>

<script>
import WTimeminuteCore from './WTimeminuteCore.vue'

/**
 * @vue-prop {String} [minuteStart=''] 輸入時間字串，預設''
 * @vue-prop {String} [minuteEnd=''] 輸入時間字串，預設''
 * @vue-prop {String} [minuteBetween='至'] 輸入兩時間連接文字字串，預設'至'
 * @vue-prop {Number} [hourMin=8] 輸入可選最小小時，單位為小時，預設8
 * @vue-prop {Number} [hourMax=8] 輸入可選最大小時，單位為小時，預設8
 * @vue-prop {Number} [minuteInter=15] 輸入每小時的切分區間，單位為分鐘，預設15
 * @vue-prop {Array} [minutesCustom=null] 輸入自訂可選的時分點字串陣列，單位為時分(00:00)，若給予，則上述hourMin,hourMax,minuteInter自動失效，預設null
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WTimeminuteCore,
    },
    props: {
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
        pickColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
</style>
