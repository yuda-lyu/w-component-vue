<template>
    <div :changeValue="changeValue">
        <!-- 要設定display:block否則input會有最小高度 -->
        <input
            ref="inp"
            type="text"
            :style="`transition:all 0.3s; display:block; outline:none; width:100%; box-sizing:border-box; border-style:none; background:transparent; color:${useTextColor}; ${useHeight} text-align:${textAlign}; ${useTextFontSize} opacity:${(valueTrans==='' && !focused)?0.6:1};`"
            :readonly="!editable"
            :placeholder="placeholder"
            v-model="valueTrans"
            @input="updateContent('input');updateFocused(true)"
            @focus="updateFocused(true)"
            @blur="updateContent('blur');updateFocused(false)"
            @keyup.enter="updateContent('enter')"
            @select="(ev)=>{$emit('select',ev)}"
        >
    </div>
</template>

<script>
import isnum from 'wsemi/src/isnum.mjs'
import verifyValue from 'wsemi/src/verifyValue.mjs'
import replace from 'wsemi/src/replace.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {String} [type='any'] 輸入文字框類型字串，預設'any'
 * @vue-prop {String|Number} value 輸入文字框值
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字大小字串，預設'1rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {Number|String} [height=''] 輸入高度數字或字串，數字單位為px，預設''
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
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
        textFontSize: {
            type: String,
            default: '1rem',
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
            type: [Number, String],
            default: '',
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

        useHeight: function () {
            //console.log('computed useHeight')

            let vo = this

            let h = ''
            if (isnum(vo.height)) {
                h = `height:${vo.height}px; line-height:${vo.height}px;`
            }

            return h
        },

        useTextFontSize: function() {
            //console.log('computed useTextFontSize')

            let vo = this

            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return color2hex(vo.textColor)
        },

    },
    methods: {

        setValue: function (value) {
            //console.log('methods setValue', value)
            //供外部強制變更值且不觸發事件之用

            let vo = this

            //save
            vo.valueTrans = value

        },

        setFocus: function () {
            //console.log('methods setFocus')
            //供外部強制使input成為焦點且不觸發事件之用

            let vo = this

            //focus
            vo.$refs.inp.focus()

        },

        updateFocused: function(focused) {
            //console.log('methods updateFocused', focused)

            let vo = this

            //check
            if (vo.focused === focused) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', focused)

            })

        },

        updateContent: function (evname) {
            // console.log('methods updateContent', evname)

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
                if (evname !== 'input') {
                    vo.$emit(evname, value, errmsg)
                }

            })

        },

    },
}
</script>

<style scoped>
</style>
