<template>
    <div :changeParam="changeParam">

        <!-- 此處w-shell-ellipse僅提供左右按鈕而由w-text-int提供邊框, 故borderWidth需為0 -->
        <WShellEllipse
            :shadow="false"
            :paddingStyle="{v:0,h:0}"
            :backgroundColor="'transparent'"
            :backgroundColorHover="'transparent'"
            :backgroundColorFocus="'transparent'"
            :borderWidth="0"
            :borderColor="'transparent'"
            :borderColorHover="'transparent'"
            :borderColorFocus="'transparent'"
            :iconShiftOuter="0"
            :leftIcon="mdiMinusCircle"
            :leftIconSize="buttonIconSize"
            :leftIconColor="buttonColor"
            :leftIconColorHover="buttonColorHover"
            :leftIconColorFocus="buttonColorFocus"
            :leftIconTooltip="leftIconTooltip"
            :rightIcon="mdiPlusCircle"
            :rightIconSize="buttonIconSize"
            :rightIconColor="buttonColor"
            :rightIconColorHover="buttonColorHover"
            :rightIconColorFocus="buttonColorFocus"
            :rightIconTooltip="rightIconTooltip"
            :editable="editable"
            :focused="focusedTrans"
            @click-left="changeContent(valueTrans,'minus')"
            @click-right="changeContent(valueTrans,'add')"
        >

            <WTextCore
                ref="inp"
                :style="{'width':width+'px'}"
                :textFontSize="textFontSize"
                :textColor="textColor"
                :textAlign="'center'"
                :height="height"
                :editable="editable"
                :value="valueTrans"
                :focused="focusedTrans"
                @update:focused="changeFocused"
                @input="(v)=>{changeContent(v,'')}"
            ></WTextCore>

        </WShellEllipse>

    </div>
</template>

<script>
import { mdiPlusCircle, mdiMinusCircle } from '@mdi/js'
import WShellEllipse from './WShellEllipse.vue'
import cint from 'wsemi/src/cint.mjs'
import verifyValue from 'wsemi/src/verifyValue.mjs'
import WTextCore from './WTextCore.vue'


/**
 * @vue-prop {Number} [width=70] 輸入框寬度，單位為px，預設70
 * @vue-prop {Number} [value=0] 輸入整數值數字，預設0
 * @vue-prop {Number} [valueMax=null] 輸入最大整數值數字，預設null
 * @vue-prop {String} [textFontSize='1rem'] 輸入文字大小字串，預設'1rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [leftIconTooltip='減少'] 輸入框內左側圖標提示文字字串，預設'減少'
 * @vue-prop {String} [rightIconTooltip='增加'] 輸入框內右側圖標提示文字字串，預設'增加'
 * @vue-prop {Number} [buttonIconSize=24] 輸入框內圖標大小，單位為px，預設24
 * @vue-prop {String} [buttonColor='deep-orange lighten-2'] 輸入框內圖標按鈕顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [buttonColorHover='deep-orange lighten-1'] 輸入滑鼠移入時框內圖標按鈕顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [buttonColorFocus='deep-orange lighten-1'] 輸入取得焦點時框內圖標按鈕Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {Number} [height=28] 輸入高度數字，單位為px，預設28
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
        WShellEllipse,
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
        textFontSize: {
            type: String,
            default: '1rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        leftIconTooltip: {
            type: String,
            default: '減少',
        },
        rightIconTooltip: {
            type: String,
            default: '增加',
        },
        buttonIconSize: {
            type: Number,
            default: 24,
        },
        buttonColor: {
            type: String,
            default: 'white',
        },
        buttonColorHover: {
            type: String,
            default: 'white',
        },
        buttonColorFocus: {
            type: String,
            default: 'white',
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
            mdiPlusCircle,
            mdiMinusCircle,
            valueTrans: '',
            focusedTrans: false,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //valueTrans
            vo.valueTrans = vo.value

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

        changeContent: function(v, mode) {
            // console.log('methods changeContent', v, mode)

            let vo = this
            let r

            //check
            if (vo.editable === false) {
                return
            }

            //mode為按下左右按鈕, 因w-text-core的focus會失去, 得重新補回去
            if (mode !== '') {
                vo.$refs.inp.setFocus()
            }

            //verifyValue
            r = verifyValue(v, 'isp0int')

            //check
            if (r.err) {

                //歸零
                v = 0

                //$nextTick
                vo.$nextTick(() => {

                    //check
                    if (vo.valueTrans === 0) {
                        //若原本valueTrans值就為0會導致無法變更, 因原本外部就是0, 得強制對w-text-core變更值

                        //setValue
                        vo.$refs.inp.setValue(v)

                    }
                    else {

                        //save
                        vo.valueTrans = v

                        //emit, 更新外部值
                        vo.$emit('input', v)

                    }

                    //emit
                    vo.$emit('error', r.errmsg)

                })

                return
            }

            //cint
            v = cint(v)

            //modify
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

            //check valueMin
            let valueMin = 0
            if (v < valueMin) {
                v = valueMin
            }

            //check
            if (vo.valueTrans === v) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //save
                vo.valueTrans = v

                //emit
                vo.$emit('input', v)

            })

        },

    },
}
</script>

<style scoped>
</style>
