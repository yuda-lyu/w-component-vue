<template>
    <div>

        <div
            :style="`padding:${useHeaderPadding}; z-index:2;`"
        >
            <div
                :class="{'shadow-header':headerShadow}"
                :style="`display:inline-block; background:${useHeaderBackgroundColor}; border-radius:${headerBorderRadius}px;`"
                v-domresize
                @domresize="updateHeaderHeight"
            >

                <slot name="header">
                    <div :style="`padding:5px 10px; color:${useHeaderTextColor};`">
                        {{headerText}}
                    </div>
                </slot>

            </div>
        </div>

        <div :style="`margin-top:-${headerHeight/2}px; z-index:1;`">

            <div
                :class="{'shadow':contentShadow}"
                :style="`background:${useContentBackgroundColor}; border-radius:${contentBorderRadius}px;`"
            >

                <div :style="`padding:${useContentPadding};`">

                    <div :style="`height:${headerHeight/2}px;`"></div>

                    <slot></slot>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import isnum from 'wsemi/src/isnum.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import domResize from '../js/domResize.mjs'


/**
 * @vue-prop {Number} [headerBorderRadius=0] 輸入標題區圓角寬度，單位為px，預設0
 * @vue-prop {Number|String} [headerPadding='0px 20px'] 輸入標題區邊寬長度數字或字串，若輸入數字則單位為px，若輸入字串則需自己添加單位，預設'0px 20px'
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
        domresize: domResize,
    },
    props: {
        headerBorderRadius: {
            type: Number,
            default: 0,
        },
        headerPadding: {
            type: [Number, String],
            default: '0px 20px',
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
            default: 'rgb(77, 182, 172, 0.8)', //teal lighten-2
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

        useHeaderPadding: function() {
            //console.log('computed useHeaderPadding')

            let vo = this

            if (isnum(vo.headerPadding)) {
                return `${vo.headerPadding}px`
            }
            else {
                return vo.headerPadding
            }
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

        updateHeaderHeight: function({ snew }) {
            //console.log('methods updateHeaderHeight', snew)

            let vo = this

            //update
            vo.headerHeight = snew.offsetHeight

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
