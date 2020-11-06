<template>
    <div
        style="display:inline-block;"
        :changeBadgeAlign="changeBadgeAlign"
        v-domresize
        @domresize="resize"
    >
        <div :style="`padding:${paddingTop}px ${paddingRight}px 0px 0px;`">

            <div :style="`position:relative;`">

                <slot></slot>

                <div :style="`position:absolute; top:0px; right:${shiftX}px; transform:translateX(${translateX}%) translateY(-50%);`">
                    <span
                        ref="badge"
                        :style="`padding:0px 6px; border-radius:${borderRadius}px; border-width:${borderWidth}px; border-style:solid; border-color:${useBorderColor}; white-space:nowrap; ${useTextFontSize} color:${useTextColor}; background:${useBackgroundColor};`"
                    >
                        {{text}}
                    </span>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import get from 'lodash/get'
import color2hex from '../js/vuetifyColor.mjs'
import replace from 'wsemi/src/replace.mjs'
import domResize from '../js/domResize.mjs'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [badgeAlign='center'] 輸入標記對齊位置字串，預設'center'
 * @vue-prop {String} [textFontSize='0.7rem'] 輸入文字字型大小字串，預設'0.7rem'
 * @vue-prop {String} [textColor='white'] 輸入文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='red'] 輸入背景顏色字串，預設'red'
 * @vue-prop {Number} [borderRadius=10] 輸入框圓角度數字，單位為px，預設10
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {Number} [borderWidth=1] 輸入框寬度數字，單位為px，預設1
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        badgeAlign: {
            type: String,
            default: 'center',
        },
        textFontSize: {
            type: String,
            default: '0.7rem',
        },
        textColor: {
            type: String,
            default: 'white',
        },
        backgroundColor: {
            type: String,
            default: 'red',
        },
        borderRadius: {
            type: Number,
            default: 10,
        },
        borderColor: {
            type: String,
            default: 'transparent',
        },
        borderWidth: {
            type: Number,
            default: 1,
        },
    },
    data: function() {
        return {
            paddingTop: 0,
            paddingRight: 0,
            translateX: 50,
            multiplyW: 0.5,
            shiftX: 0,
        }
    },
    computed: {

        changeBadgeAlign: function() {
            //console.log('computed changeBadgeAlign')

            let vo = this

            if (vo.badgeAlign === 'left') {
                vo.translateX = 100
                vo.multiplyW = 1
                vo.shiftX = 10
            }
            else if (vo.badgeAlign === 'right') {
                vo.translateX = 0
                vo.multiplyW = 0
                vo.shiftX = -10
            }
            else {
                //center
                vo.translateX = 50
                vo.multiplyW = 0.5
                vo.shiftX = 0
            }

            return ''
        },

        useTextFontSize: function() {
            //console.log('computed useTextFontSize')

            let vo = this

            let s = vo.textFontSize
            s = replace(s, ';', '')

            return `font-size:${s};`
        },

        useTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

        useBackgroundColor: function() {
            let vo = this
            return color2hex(vo.backgroundColor)
        },

        useBorderColor: function() {
            let vo = this
            return color2hex(vo.borderColor)
        },

    },
    methods: {

        resize: function(msg) {
            //console.log('methods resize', msg)

            let vo = this

            //bd
            let bd = get(vo, '$refs.badge')
            if (!bd) {
                return
            }

            //w, h
            let w = get(bd, 'offsetWidth', null)
            let h = get(bd, 'offsetHeight', null)
            if (!w || !h) {
                return
            }

            //update
            vo.paddingTop = h * 0.5
            vo.paddingRight = w * vo.multiplyW - vo.shiftX

            //emit
            vo.$emit('resize', msg)

        },

    },
}
</script>

<style scoped>
</style>
