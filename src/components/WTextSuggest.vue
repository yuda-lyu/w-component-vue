<template>
    <div :changeParam="changeParam">

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
            :focused="focused_trans"
            @click-left="function(v){$emit('click-left', v)}"
        >

            <w-text-suggest-core
                :items="items"
                :value="value"
                :editable="editable"
                @update:focused="changeFocused"
                @input="function(v){$emit('input', v)}"
            ></w-text-suggest-core>

        </w-shell-ellipse>

    </div>
</template>

<script>
import WShellEllipse from './WShellEllipse.vue'
import WTextSuggestCore from './WTextSuggestCore.vue'

/**
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角寬度，單位為px，預設30
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {Array} [items=[]] 輸入可選(建議)項目陣列，預設[]
 * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
 * @vue-prop {String} [icon=''] 輸入框外左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入框外左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入框外左側圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入框外左側圖標提示文字字串，預設''
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTextSuggestCore,
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
        items: {
            type: Array,
        },
        value: {
            type: [Object, String, Number],
        },
        icon: {
            type: String,
            default: '',
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
            focused_trans: false,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //focused_trans
            vo.focused_trans = vo.focused

            return ''
        },

    },
    methods: {

        changeFocused: function(focused) {
            //console.log('methods changeFocused', focused)

            let vo = this

            //save
            vo.focused_trans = focused

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
