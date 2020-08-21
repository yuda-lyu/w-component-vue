<template>
    <div :changeValue="changeValue">

        <input
            ref="inp"
            type="text"
            :style="`transition:all 0.3s; outline: none; width:100%; color:${useTextColor}; height:${height}px; text-align:${textAlign}; opacity:${(!valueTrans && !focused)?0.6:1};`"
            :readonly="!editable"
            :placeholder="placeholder"
            v-model="valueTrans"
            @input="changeFocused(true);changeContent('input')"
            @focus="changeFocused(true)"
            @blur="changeFocused(false);changeContent('blur');"
            @keyup.enter="changeContent('enter')"
        >

    </div>
</template>

<script>
import verifyValue from 'wsemi/src/verifyValue.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'
 * @vue-prop {String|Number} value 輸入文字框值
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {Number} [height=28] 輸入高度數字，單位為px，預設28
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    props: {
        type: {
            type: String,
            default: 'any',
        },
        value: {
            type: [String, Number],
        },
        textColor: {
            type: String,
            default: 'black',
        },
        textAlign: {
            type: String,
            default: 'left',
        },
        placeholder: {
            type: String,
            default: '',
        },
        height: {
            type: Number,
            default: 28,
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
            valueTrans: '',
        }
    },
    mounted: function() {
    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //valueTrans
            vo.valueTrans = vo.value

            return ''
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return color2hex(vo.textColor)
        },


    },
    methods: {

        changeFocused: function(focused) {
            //console.log('methods changeFocused', focused)

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', focused)

            })

        },

        changeContent: function (evname) {
            //console.log('methods changeContent', evname)

            let vo = this

            //verifyValue
            let r = verifyValue(vo.valueTrans, vo.type)

            //value, errmsg
            let value = r.value
            let errmsg = r.errmsg

            //$nextTick
            vo.$nextTick(() => {

                //save
                vo.valueTrans = value

                //emit
                vo.$emit('input', value, errmsg)

                //emit
                vo.$emit(evname, value, errmsg)

            })

        },

    },
}
</script>

<style scoped>
</style>
