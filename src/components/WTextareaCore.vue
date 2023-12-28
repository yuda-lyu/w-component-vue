<template>
    <div :changeValue="changeValue">
        <!-- 須使用display:block與rows=1避免多行時有殘餘行距 -->
        <!-- 須使用overflow:hidden避免初始化時出現垂直捲軸 -->
        <textarea
            ref="ta"
            :style="`
                transition:all 0.3s;
                display:block;
                outline:none;
                width:100%;
                box-sizing:border-box;
                border-style:none;
                resize:none;
                background:transparent;
                color:${useTextColor};
                ${useHeight}
                text-align:${textAlign};
                ${useTextFontSize}
                ${useOverflow}
                opacity:${(valueTrans==='' && !focused)?0.6:1};
            `"
            rows="1"
            :readonly="!editable"
            :placeholder="placeholder"
            v-model="valueTrans"
            @input="(ev)=>{updateHeight(ev.srcElement);updateValue(ev);trigger('input',ev);updateFocused(true)}"
            @change="(ev)=>{trigger('change',ev)}"
            @focus="updateFocused(true)"
            @blur="(ev)=>{trigger('blur',ev);updateFocused(false)}"
            @keyup.enter="(ev)=>{trigger('enter',ev)}"
            @select="(ev)=>{trigger('select',ev)}"
        ></textarea>
    </div>
</template>

<script>
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
// import verifyValue from 'wsemi/src/verifyValue.mjs'
import replace from 'wsemi/src/replace.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import color2hex from '../js/color2hex.mjs'


/**
 * @vue-prop {String|Number} [value=''] 輸入文字框值字串或數字，預設''
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字大小字串，預設'1rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {Number|String} [height=null] 輸入高度數字或字串，數字單位為px，若給予非有效值則代表自動更新高度，預設null
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    props: {
        value: {
            type: [String, Number],
            default: '',
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
            errmsg: '',
        }
    },
    mounted: function() {
    },
    computed: {

        changeValue: function () {
            // console.log('computed changeValue')

            let vo = this

            //valueTrans
            vo.valueTrans = vo.value

            //updateHeight
            vo.updateHeight()

            return ''
        },

        useHeight: function () {
            //console.log('computed useHeight')

            let vo = this

            let h = ''
            if (isnum(vo.height)) {
                h = `height:${vo.height}px;` //line-height:${vo.height}px;
            }
            else if (isestr(vo.height)) {
                h = `height:${vo.height};` //line-height:${vo.height}px;
            }

            return h
        },

        useOverflow: function () {
            //console.log('computed useOverflow')

            let vo = this

            let of = 'overflow:hidden;'
            if (isestr(vo.useHeight)) {
                of = `overflow:auto;` //若有指定height則使用overflow:auto
            }

            return of
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

        updateHeight: function () {
            // console.log('methods updateHeight')

            let vo = this

            //check, 若有指定height則不自動更因ㄒ更新
            if (isestr(vo.useHeight)) {
                return
            }

            //wait ta, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
            waitFun(() => {
                return vo.$refs.ta !== undefined
            }, { timeInterval: 20 })
                .then(() => {

                    try {

                        //ele
                        let ele = vo.$refs.ta //ev.srcElement

                        //update height
                        ele.style.height = 'auto' //先使用auto讓scrollHeight更新為內容高度
                        ele.style.height = (ele.scrollHeight) + 'px' //給予指定高度完成自動更新
                        // console.log('ele.style.height', ele.style.height)

                    }
                    catch (err) {}

                })
                .catch((err) => {
                    console.log(err)
                })

        },

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
            vo.$refs.ta.focus()

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

        updateValue: function (ev) {
            // console.log('methods updateValue', ev)

            let vo = this

            // //verifyValue, 因為input觸發是得到新輸入的字串(ev.data), 故要完整檢核得拿v-model變更後vo.valueTrans
            // let r = verifyValue(vo.valueTrans, vo.type)

            // //save
            // vo.valueTrans = r.value
            // vo.errmsg = r.errmsg

            //save
            vo.errmsg = ''

        },

        trigger: function (name, ev) {
            // console.log('methods trigger', name, ev)

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit(name, vo.valueTrans, vo.errmsg, ev)

            })

        },

    },
}
</script>

<style scoped>
</style>
