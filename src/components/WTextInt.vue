<template>
    <div style="display:inline-block;" :changeParam="changeParam">

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

            <div style="margin:0px -10px;">

                <w-text-int-core
                    :width="width"
                    :leftIconTooltip="leftIconTooltip"
                    :rightIconTooltip="rightIconTooltip"
                    :buttonColor="buttonColor"
                    :buttonColorFocus="buttonColorFocus"
                    :valueMax="valueMax"
                    :value="value"
                    :editable="editable"
                    :focused="focusedTrans"
                    @update:focused="changeFocused"
                    @input="function(v){$emit('input', v)}"
                ></w-text-int-core>

            </div>

        </w-shell-ellipse>

    </div>
</template>

<script>
import WShellEllipse from './WShellEllipse.vue'
import WTextIntCore from './WTextIntCore.vue'


/**
 * @vue-prop {Number} [width=70] 輸入框寬度，單位為px，預設70
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角度，單位為px，預設30
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {Number} [value=0] 輸入整數值數字，預設0
 * @vue-prop {Number} [valueMax=null] 輸入最大整數值數字，預設null
 * @vue-prop {String} [icon=''] 輸入框外左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor='deep-orange lighten-2'] 輸入框外左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [iconColorFocus='deep-orange lighten-1'] 輸入框外左側圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [iconTooltip=''] 輸入框外左側圖標提示文字字串，預設''
 * @vue-prop {String} [leftIconTooltip='減少'] 輸入框內左側圖標提示文字字串，預設'減少'
 * @vue-prop {String} [rightIconTooltip='增加'] 輸入框內右側圖標提示文字字串，預設'增加'
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorFocus='white'] 輸入背景Focus顏色字串，預設'white'
 * @vue-prop {String} [borderColor='white'] 輸入邊框顏色字串，預設'white'
 * @vue-prop {String} [borderColorFocus='white'] 輸入邊框Focus顏色字串，預設'white'
 * @vue-prop {String} [buttonColor='deep-orange lighten-2'] 輸入框內圖標按鈕顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [buttonColorFocus='deep-orange lighten-1'] 輸入框內圖標按鈕Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
        WTextIntCore,
    },
    props: {
        width: {
            type: Number,
            default: 70,
        },
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
            type: Number,
            default: 0,
        },
        valueMax: {
            type: Number,
            default: null,
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
        leftIconTooltip: {
            type: String,
            default: '減少',
        },
        rightIconTooltip: {
            type: String,
            default: '增加',
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
        buttonColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        buttonColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
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
