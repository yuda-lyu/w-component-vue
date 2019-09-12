<template>
    <div style="display:inline-block; cursor:pointer;">

        <w-shell-ellipse
            :title="title"
            :titleColor="titleColor"
            :borderRadius="borderRadius"
            :borderShadow="borderShadow"
            :leftIcon="icon"
            :leftIconColor="iconColor"
            :leftIconColorHover="iconColorHover"
            :leftIconTooltip="iconTooltip"
            :borderColor="borderColor"
            :borderColorHover="borderColorHover"
            :small="small"
            :editable="editable"
            @click-left="function(v){$emit('click-left', v)}"
        >

            <div style="display:flex; align-items:center; padding-right:8px;">

                <w-timeday-range-core
                    :pickColor="pickColor"
                    :dayBetween="dayBetween"
                    :dayStart="dayStart"
                    :dayEnd="dayEnd"
                    :editable="editable"
                    @update:dayStart="function(v){$emit('update:dayStart', v)}"
                    @update:dayEnd="function(v){$emit('update:dayEnd', v)}"
                ></w-timeday-range-core>

            </div>

        </w-shell-ellipse>

    </div>
</template>

<script>
import { mdiClockOutline } from '@mdi/js'
import WShellEllipse from './WShellEllipse.vue'
import WTimedayRangeCore from './WTimedayRangeCore.vue'

/**
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [dayStart=''] 輸入起始日期字串，預設''
 * @vue-prop {String} [dayEnd=''] 輸入結束日期字串，預設''
 * @vue-prop {String} [dayBetween='至'] 輸入兩日期連接文字字串，預設'至'
 * @vue-prop {String} [icon=mdiClockOutline] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiClockOutline
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorHover='deep-orange lighten-1'] 輸入圖標Hover時顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入圖標提示文字字串，預設''
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入邊框Hover顏色字串，預設'white'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WShellEllipse,
        WTimedayRangeCore,
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
        iconTooltip: {
            type: String,
            default: '',
        },
        borderColor: {
            type: String,
            default: 'white', //transparent grey lighten-1
        },
        borderColorHover: {
            type: String,
            default: 'white', //transparent grey lighten-1
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
    },
    data: function() {
        return {
            mdiClockOutline,
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
