<template>
    <div>

        <w-shell-ellipse
            :title="title"
            :titleColor="titleColor"
            :borderRadius="borderRadius"
            :borderShadow="borderShadow"
            :leftIcon="leftIcon"
            :leftIconColor="leftIconColor"
            :leftIconColorHover="leftIconColorHover"
            :leftIconTooltip="leftIconTooltip"
            :rightIcon="rightIcon"
            :rightIconColor="rightIconColor"
            :rightIconColorHover="rightIconColorHover"
            :rightIconTooltip="rightIconTooltip"
            :borderColor="borderColor"
            :borderColorHover="borderColorHover"
            :small="small"
            :editable="editable"
            @click-left="function(v){$emit('click-left', v)}"
            @click-right="function(v){$emit('click-right', v)}"
        >

            <w-text-core
                ref="inp"
                :type="type"
                :textAlign="textAlign"
                :placeholder="placeholder"
                :editable="editable"
                :value="value"
                @blur="function(v,err){$emit('blur', v, err)}"
                @enter="function(v,err){$emit('enter', v, err)}"
                @input="function(v,err){$emit('input', v, err)}"
            ></w-text-core>

        </w-shell-ellipse>

    </div>
</template>

<script>
import WShellEllipse from './WShellEllipse.vue'
import WTextCore from './WTextCore.vue'

/**
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [borderRadius=30] 輸入文字框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'
 * @vue-prop {String|Number} value 輸入文字框值
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [leftIconColorHover='deep-orange lighten-1'] 輸入左側圖標Hover時顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [rightIconColorHover='deep-orange lighten-1'] 輸入右側圖標Hover時顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorHover='white'] 輸入邊框Hover顏色字串，預設'white'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WShellEllipse,
        WTextCore,
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
        type: {
            type: String,
            default: 'any',
        },
        value: {
            type: [String, Number],
        },
        textAlign: {
            type: String,
            default: 'left',
        },
        leftIcon: {
            type: String,
            default: '',
        },
        leftIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        leftIconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        leftIconTooltip: {
            type: String,
            default: '',
        },
        rightIcon: {
            type: String,
            default: '',
        },
        rightIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        rightIconColorHover: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        rightIconTooltip: {
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
        placeholder: {
            type: String,
            default: '',
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
        }
    },
    mounted: function() {
    },
    computed: {
    },
    methods: {

        setValueTrans: function(value) {
            //console.log('methods setValueTrans', value)

            let vo = this

            //setValueTrans
            vo.$refs.inp.setValueTrans(value)

        },

    },
}
</script>

<style scoped>
</style>
