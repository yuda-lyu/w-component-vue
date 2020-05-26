<template>
    <div style="padding-top:20px;">
        <div :class="{'trans':true,'shadow':borderShadow}" :style="`position:relative; background-color:${useContentBackgroundColor}; border-radius:${borderRadius}px;`">

            <div
                class="shadow-header"
                :style="`position:absolute; top:0px; left:${headerLeft}px; transform:translateY(-50%); padding:5px 10px; background-color:${useHeaderBackgroundColor}; color:${useHeaderTextColor}; opacity:${headerOpacity};`">
                {{headerText}}
            </div>

            <div :style="`padding:${useContentPadding};`">
                <slot></slot>
            </div>

        </div>
    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'
import isnum from 'wsemi/src/isnum.mjs'


/**
 * @vue-prop {Number} [borderRadius=0] 輸入圓角寬度，單位為px，預設0
 * @vue-prop {Number} [headerLeft=20] 輸入標題離左側邊界長度，單位為px，預設20
 * @vue-prop {Number} [headerOpacity=0.8] 輸入標題區塊透明度，預設0.8
 * @vue-prop {String} [headerText=''] 輸入標題文字字串，預設''
 * @vue-prop {String} [headerTextColor='white'] 輸入標題文字顏色字串，預設'white'
 * @vue-prop {String} [headerBackgroundColor='teal lighten-2'] 輸入標題背景顏色字串，預設'teal lighten-2'
 * @vue-prop {Number|String} [contentPadding=20] 輸入內容區塊邊寬長度數字或字串，若輸入數字則單位為px，預設20，若輸入字串則需自己添加單位
 * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {Boolean} [borderShadow=true] 輸入是否為陰影模式，預設true
 */
export default {
    props: {
        borderRadius: {
            type: Number,
            default: 0,
        },
        headerLeft: {
            type: Number,
            default: 20,
        },
        headerOpacity: {
            type: Number,
            default: 0.8,
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
            default: 'teal lighten-2',
        },
        contentPadding: {
            type: [Number, String],
            default: 20,
        },
        contentBackgroundColor: {
            type: String,
            default: 'white',
        },
        borderShadow: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
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
    },
}
</script>

<style scoped>
.trans {
    transition: all 0.5s;
}
.shadow {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
.shadow-header {
    box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 7px 10px 1px rgba(0, 0, 0, 0.06), 0px 2px 16px 1px rgba(0, 0, 0, 0.04);
}
</style>
