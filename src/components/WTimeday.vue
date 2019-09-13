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
            :backgroundColor="backgroundColor"
            :backgroundColorHover="backgroundColorHover"
            :borderColor="borderColor"
            :borderColorHover="borderColorHover"
            :small="small"
            :editable="editable"
            @click-left="function(v){$emit('click-left', v)}"
        >

            <w-timeday-core
                :pickColor="pickColor"
                :value="value"
                :editable="editable"
                @input="function(v){$emit('input', v)}"
            ></w-timeday-core>

        </w-shell-ellipse>

    </div>
</template>

<script>
import { mdiClockOutline } from '@mdi/js'
import WShellEllipse from './WShellEllipse.vue'
import WTimedayCore from './WTimedayCore.vue'

/**
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {String} [icon=mdiClockOutline] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiClockOutline
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorHover='deep-orange lighten-1'] 輸入圖標Hover時顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入圖標提示文字字串，預設''
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorHover='white'] 輸入背景Hover顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入邊框Hover顏色字串，預設'white'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WShellEllipse,
        WTimedayCore,
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
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorHover: {
            type: String,
            default: 'white', //orange lighten-5
        },
        borderColor: {
            type: String,
            default: 'white',
        },
        borderColorHover: {
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
