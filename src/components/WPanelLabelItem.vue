<template>
    <div style="">

        <div
            style="display:table; width:100%;"
            v-if="!seplines"
        >

            <slot name="label">

                <div
                    :style="[
                        {
                            display:'table-cell',
                            verticalAlign:useLabelVerticalAlign,
                            whiteSpace:'nowrap',
                            color:useLabelColor,
                            fontSize:labelFontSize,
                            textAlign:labelHorizontalAlign,
                        },
                    ]"
                >
                    <div :style="[
                        useLabelWidth,
                        useLabelHeight,
                    ]">
                        {{label}}:
                    </div>
                </div>

            </slot>

            <div
                :style="[
                    {
                        display:'table-cell',
                        paddingRight:`${space+8}px`,
                    },
                ]"
            ></div>

            <div
                :style="[
                    {
                        display:'table-cell',
                        width:'100%',
                    },
                ]"
            >

                <slot name="item"></slot>

                <div style="position:relative;">
                    <div style="position:absolute; top:0; left:0;">

                        <slot name="item-sub"></slot>

                    </div>
                </div>

            </div>

        </div>

        <div v-else>

            <slot name="label">

                <div
                    :style="[
                        useLabelWidth,
                        useLabelHeight,
                        {
                            color:useLabelColor,
                            fontSize:labelFontSize,
                            textAlign:labelHorizontalAlign,
                            paddingBottom:`${space}px`,
                        },
                    ]"
                >
                    {{label}}
                </div>

            </slot>

            <div style="">

                <slot name="item"></slot>

                <div style="position:relative;">
                    <div style="position:absolute; top:0; left:0;">

                        <slot name="item-sub"></slot>

                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import isnum from 'wsemi/src/isnum.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {String} [label=''] 輸入標籤文字字串，預設''
 * @vue-prop {Number} [labelWidth=null] 輸入標籤寬度數字，單位為px，預設null
 * @vue-prop {Number} [labelHeight=null] 輸入標籤高度數字，單位為px，若為非分行展示時則高度受table-cell控制故會失效，預設null
 * @vue-prop {String} [labelColor='#666'] 輸入文字顏色字串，預設'#666'
 * @vue-prop {String} [labelFontSize='0.8rem'] 輸入文字字型大小字串，預設'0.8rem'
 * @vue-prop {String} [labelHorizontalAlign='left'] 輸入文字左右對齊字串，可選'left'、'center'、'right'，預設'left'
 * @vue-prop {String} [labelVerticalAlign='center'] 輸入文字垂直對齊字串，可選'top'、'center'、'bottom'，若為分行展示時則因展示機制故不處理，預設'center'
 * @vue-prop {Number} [space=0] 輸入標籤與項目區距離數字，單位為px，若為分行展示時則代表垂直距離(基礎距離0px)，若為非分行展示時則代表水平距離(基礎距離8px)，space為基礎距離再額外增加之距離，預設0
 * @vue-prop {Boolean} [seplines=false] 輸入標籤與項目是否為分行展示布林值，預設false
 */
export default {
    components: {
    },
    props: {
        label: {
            type: String,
            default: '',
        },
        labelWidth: {
            type: Number,
            default: null,
        },
        labelHeight: {
            type: Number,
            default: null,
        },
        labelColor: {
            type: String,
            default: '#666',
        },
        labelFontSize: {
            type: String,
            default: '0.8rem',
        },
        labelHorizontalAlign: {
            type: String,
            default: 'left',
        },
        labelVerticalAlign: {
            type: String,
            default: 'center',
        },
        space: {
            type: Number,
            default: 0,
        },
        seplines: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
        }
    },
    computed: {

        useLabelWidth: function() {
            //console.log('computed useLabelWidth')

            let vo = this

            if (isnum(vo.labelWidth)) {
                let w = cdbl(vo.labelWidth)
                return { width: `${w}px` }
            }

            return {}
        },

        useLabelHeight: function() {
            //console.log('computed useLabelHeight')

            let vo = this

            if (isnum(vo.labelHeight)) {
                let h = cdbl(vo.labelHeight)
                return { height: `${h}px` }
            }

            return {}
        },

        useLabelVerticalAlign: function() {
            let vo = this

            let align = 'middle'
            if (vo.labelVerticalAlign === 'top' || vo.labelVerticalAlign === 'bottom') {
                align = vo.labelVerticalAlign
            }

            return align
        },

        useLabelColor: function() {
            //console.log('computed useLabelColor')

            let vo = this

            return color2hex(vo.labelColor)
        },

    },
    methods: {
    }
}
</script>

<style scoped>
</style>
