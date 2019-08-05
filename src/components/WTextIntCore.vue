<template>
    <div :ch_param="ch_param">

        <w-shell-material
            :leftIcon="mdiMinusCircle"
            :leftIconColor="buttonColor"
            :leftIconColorHover="buttonColorHover"
            :leftIconTooltip="leftIconTooltip"
            :rightIcon="mdiPlusCircle"
            :rightIconColor="buttonColor"
            :rightIconColorHover="buttonColorHover"
            :rightIconTooltip="rightIconTooltip"
            :editable="editable"
            @clickleft="ch_content(value_trans,'minus')"
            @clickright="ch_content(value_trans,'add')"
        >

            <w-text-core
                ref="inp"
                :style="{'width':width+'px'}"
                :textAlign="'center'"
                :editable="editable"
                :value="value_trans"
                @input="function(v){ch_content(v,'')}"
            ></w-text-core>

        </w-shell-material>

    </div>
</template>

<script>
import { mdiPlusCircle, mdiMinusCircle } from '@mdi/js'
import WShellMaterial from './WShellMaterial.vue'
import cint from 'wsemi/src/cint.mjs'
import verifyValue from 'wsemi/src/verifyValue.mjs'
import WTextCore from './WTextCore.vue'

/**
 * @vue-prop {Number} [width=70] 輸入框寬度，單位為px，預設70
 * @vue-prop {Number} [value=0] 輸入整數值數字，預設0
 * @vue-prop {Number} [valueMax=null] 輸入最大整數值數字，預設null
 * @vue-prop {String} [leftIconTooltip='減少'] 輸入框內左側圖標提示文字字串，預設'減少'
 * @vue-prop {String} [rightIconTooltip='增加'] 輸入框內右側圖標提示文字字串，預設'增加'
 * @vue-prop {String} [buttonColor='deep-orange lighten-2'] 輸入框內圖標按鈕顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [buttonColorHover='deep-orange lighten-1'] 輸入框內圖標按鈕Hover顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WShellMaterial,
        WTextCore,
    },
    props: {
        width: {
            type: Number,
            default: 70,
        },
        value: {
            type: Number,
            default: 0,
        },
        valueMax: {
            type: Number,
            default: null,
        },
        leftIconTooltip: {
            type: String,
            default: '減少',
        },
        rightIconTooltip: {
            type: String,
            default: '增加',
        },
        buttonColor: {
            type: String,
            default: 'white', //transparent grey lighten-1
        },
        buttonColorHover: {
            type: String,
            default: 'white', //transparent grey lighten-1
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mdiPlusCircle,
            mdiMinusCircle,
            value_trans: '',
        }
    },
    mounted: function() {
    },
    computed: {

        ch_param: function () {
            //console.log('computed ch_param')

            let vo = this

            //value_trans
            vo.value_trans = vo.value

            return ''
        },

    },
    methods: {

        ch_content: function(v, mode) {
            //console.log('methods ch_content', v, mode)

            let vo = this

            if (vo.editable === false) {
                return
            }

            //modify
            v = cint(v)
            if (mode === 'minus') {
                v -= 1
            }
            else if (mode === 'add') {
                v += 1
            }

            //check valueMax
            if (vo.valueMax) {
                if (v > vo.valueMax) {
                    v = vo.valueMax
                }
            }

            //verifyValue
            let r = verifyValue(v, 'isp0int')

            //value, errmsg
            let value = r.value
            let errmsg = r.errmsg

            //setTimeout
            setTimeout(function() {

                //reset for error
                vo.value_trans = value

                //emit
                vo.$emit('input', value)

                //emit
                vo.$emit('errmsg', errmsg)

            }, 1)

            //setTimeout
            setTimeout(function() {

                //setValueTrans
                vo.$refs.inp.setValueTrans(value)

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
