<template>
    <div>

        <div
            :style="`transition:all 0.3s; ${usePadding} z-index:2;`"
        >
            <div
                :class="{'shadow-header':headerShadow}"
                :style="`transition:all 0.3s; display:inline-block; background:${useHeaderBackgroundColor}; border-radius:${headerBorderRadius}px;`"
                v-domresize
                @domresize="updateHeaderHeight"
            >

                <slot name="header">
                    <div :style="`transition:all 0.3s; padding:5px 10px; color:${useHeaderTextColor};`">
                        {{headerText}}
                    </div>
                </slot>

            </div>
        </div>

        <div :style="`transition:all 0.3s; margin-top:-${headerHeight/2}px; z-index:1;`">

            <div
                :class="{'shadow':contentShadow}"
                :style="`transition:all 0.3s; background:${useContentBackgroundColor}; border-radius:${contentBorderRadius}px;`"
            >

                <div :style="`transition:all 0.3s; padding:${useContentPadding};`">

                    <div :style="`transition:all 0.3s; height:${headerHeight/2}px;`"></div>

                    <slot></slot>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import isnum from 'wsemi/src/isnum.mjs'
import color2hex from '../js/color2hex.mjs'
import parseSpace from '../js/parseSpace.mjs'
import domResize from '../js/domResize.mjs'


/**
 * @vue-prop {Number} [headerBorderRadius=0] 輸入標題區圓角寬度，單位為px，預設0
 * @vue-prop {Object} [paddingStyle={v:0,h:20}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:0,h:20}
 * @vue-prop {String} [headerText=''] 輸入標題文字字串，預設''
 * @vue-prop {String} [headerTextColor='white'] 輸入標題文字顏色字串，預設'white'
 * @vue-prop {String} [headerBackgroundColor='teal lighten-2'] 輸入標題背景顏色字串，預設'teal lighten-2'
 * @vue-prop {Boolean} [headerShadow=true] 輸入標題區是否使用陰影模式，預設true
 * @vue-prop {Number} [contentBorderRadius=0] 輸入內容區圓角寬度，單位為px，預設0
 * @vue-prop {Number|String} [contentPadding=20] 輸入內容區邊寬長度數字或字串，若輸入數字則單位為px，預設20，若輸入字串則需自己添加單位
 * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {Boolean} [contentShadow=true] 輸入內容區是否使用陰影模式，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        headerBorderRadius: {
            type: Number,
            default: 0,
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 0,
                    h: 20,
                }
            },
        },
        headerText: {
            type: String,
            default: '',
        },
        headerTextColor: {
            type: String,
            default: 'white',
        },
        headerBackgroundColor: {
            type: String,
            default: 'rgba(77, 182, 172, 0.8)', //teal lighten-2
        },
        headerShadow: {
            type: Boolean,
            default: true,
        },
        contentBorderRadius: {
            type: Number,
            default: 0,
        },
        contentPadding: {
            type: [Number, String],
            default: 0,
        },
        contentBackgroundColor: {
            type: String,
            default: 'white',
        },
        contentShadow: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            headerHeight: 0,
        }
    },
    computed: {

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle, { ext: { left: vo.shiftLeft, right: vo.shiftRight } })

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        useHeaderTextColor: function() {
            //console.log('computed useHeaderTextColor')

            let vo = this

            return color2hex(vo.headerTextColor)
        },

        useHeaderBackgroundColor: function() {
            //console.log('computed useHeaderBackgroundColor')

            let vo = this

            return color2hex(vo.headerBackgroundColor)
        },

        useContentBackgroundColor: function() {
            //console.log('computed useContentBackgroundColor')

            let vo = this

            return color2hex(vo.contentBackgroundColor)
        },

        useContentPadding: function() {
            //console.log('computed useContentPadding')

            let vo = this

            if (isnum(vo.contentPadding)) {
                return `${vo.contentPadding}px`
            }
            else {
                return vo.contentPadding
            }
        },

    },
    methods: {

        updateHeaderHeight: function(msg) {
            //console.log('methods updateHeaderHeight', msg)

            let vo = this

            //update
            vo.headerHeight = msg.snew.offsetHeight

            //emit
            vo.$emit('resize', msg)

        },

    },
}
</script>

<style scoped>
.shadow {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
.shadow-header {
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.06), 0px 2px 16px 1px rgba(0, 0, 0, 0.04);
}
</style>
