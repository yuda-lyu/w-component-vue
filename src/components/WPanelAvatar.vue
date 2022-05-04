<template>
    <div
        style="display:inline-block; position:relative;"
    >

        <div style="position:absolute; top:0px; left:0px;">

            <div
                :style="`transition:all 0.3s; padding:0px ${avatarOuterPadding}px ${avatarOuterPadding}px ${avatarOuterPadding}px;`"
            >
                <div
                    :class="`${avatarShadow?'shadow-header':''}`"
                    :style="`transition:all 0.3s; border-radius:${avatarBorderRadius}px; background:${useAvatarBackgroundColor};`"
                    v-domresize
                    @domresize="resizeAvatar"
                >

                    <div style="height:100%; width:100%; display:flex; align-items:center; justify-content:center;">
                        <div :style="`transition:all 0.3s; padding:${avatarInnerPadding}px;`">

                            <slot name="avatar">
                                <WIcon
                                    :icon="avatarIcon"
                                    :size="avatarIconSize"
                                    :color="useAvatarIconColor"
                                ></WIcon>
                            </slot>

                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div :style="`transition:all 0.3s; padding-top:${avatarHeight/2-shiftVFromAvaterCenter}px;`"></div>

        <div
            avatarWidth
            :class="`${contentShadow?'shadow':''}`"
            :style="`transition:all 0.3s; border-radius:${contentBorderRadius}px; background:${useContentBackgroundColor};`"
        >

            <div style="display:flex;">

                <div :style="`transition:all 0.3s; min-width:${avatarOuterPadding+avatarWidth+spaceHBetweenAvatarAndHeader}px; min-height:${avatarOuterPadding+(avatarHeight/2+shiftVFromAvaterCenter)+spaceVBetweenHeaderAndContent}px;`"></div>

                <div :style="`transition:all 0.3s; width:100%; padding:${headerPadding}px; display:flex; align-items:${useHeaderVerticalAlign}; justify-content:flex-end;`">

                    <div style="text-align:right;">
                        <div :style="`transition:all 0.3s; color:${useSubHeaderTextColor}; font-size:${subHeaderTextSize}; line-height:${subHeaderTextSize};`">
                            {{subHeaderText}}
                        </div>

                        <div :style="`transition:all 0.3s; color:${useHeaderTextColor}; font-size:${headerTextSize};`">
                            {{headerText}}
                        </div>
                    </div>

                </div>

            </div>

            <div :style="`transition:all 0.3s; border-top:${sepLineWidth}px solid ${useSepLineColor};`">

                <div style="transition:all 0.3s;">
                    <slot></slot>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { mdiForest } from '@mdi/js'
import color2hex from '../js/vuetifyColor.mjs'
import domResize from '../js/domResize.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Number} [avatarOuterPadding=15] 輸入圖標區外側間距數字，單位為px，預設15
 * @vue-prop {Number} [avatarInnerPadding=15] 輸入圖標區內側間距數字，單位為px，預設15
 * @vue-prop {String} [avatarIcon=mdiForest] 輸入圖標字串，預設mdiForest
 * @vue-prop {Number} [avatarIconSize=60] 輸入圖標尺寸數字，單位為px，預設60
 * @vue-prop {String} [avatarIconColor='white'] 輸入圖標顏色字串，預設'white'
 * @vue-prop {String} [avatarBackgroundColor='rgba(239,108,0,0.5)'] 輸入圖標區背景顏色字串，預設'rgba(239,108,0,0.5)'
 * @vue-prop {Number} [avatarBorderRadius=10] 輸入圖標區框圓角程度數字，單位為px，預設10
 * @vue-prop {Boolean} [avatarShadow=true] 輸入是否使用圖標區陰影效果數字，預設true
 * @vue-prop {Number} [shiftVFromAvaterCenter=20] 輸入圖標區基於水平中線之朝下平移數字，單位為px，預設20
 * @vue-prop {Number} [spaceHBetweenAvatarAndHeader=20] 輸入圖標區與右側標題區間距數字，單位為px，預設20
 * @vue-prop {Number} [spaceVBetweenHeaderAndContent=0] 輸入標題區與下方內容區間距數字，單位為px，預設0
 * @vue-prop {String} [headerVerticalAlign='center'] 輸入標題區內文字垂直對齊字串，可選'top'、'center'、'bottom'，預設'center'
 * @vue-prop {Number} [headerPadding=15] 輸入標題區間距數字，單位為px，預設15
 * @vue-prop {String} [headerText=''] 輸入標題區主要文字字串，預設''
 * @vue-prop {String} [headerTextColor='#444'] 輸入標題區主要文字顏色字串，預設'#444'
 * @vue-prop {String} [headerTextSize='1.0rem'] 輸入標題區主要文字字型大小數字，預設'1.0rem'
 * @vue-prop {String} [subHeaderText=''] 輸入標題區次要文字字串，預設''
 * @vue-prop {String} [subHeaderTextColor='#888'] 輸入標題區次要文字顏色字串，預設'#888'
 * @vue-prop {String} [subHeaderTextSize='0.7rem'] 輸入標題區次要文字字型大小數字，預設'0.7rem'
 * @vue-prop {Number} [sepLineWidth=1] 輸入標題區與內容區分隔線寬度數字，單位為px，預設1
 * @vue-prop {String} [sepLineColor='#ddd'] 輸入標題區與內容區分隔線顏色字串，預設'#ddd'
 * @vue-prop {Number} [contentBorderRadius=3] 輸入內容區框圓角程度數字，單位為px，預設3
 * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區背景顏色字串，預設'white'
 * @vue-prop {Boolean} [contentShadow=true] 輸入是否使用內容區陰影效果數字，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WIcon,
    },
    props: {
        avatarOuterPadding: {
            type: Number,
            default: 15,
        },
        avatarInnerPadding: {
            type: Number,
            default: 15,
        },
        avatarIcon: {
            type: String,
            default: mdiForest,
        },
        avatarIconSize: {
            type: Number,
            default: 60,
        },
        avatarIconColor: {
            type: String,
            default: 'white',
        },
        avatarBackgroundColor: {
            type: String,
            default: 'rgba(239,108,0,0.5)',
        },
        avatarBorderRadius: {
            type: Number,
            default: 10,
        },
        avatarShadow: {
            type: Boolean,
            default: true,
        },
        shiftVFromAvaterCenter: {
            type: Number,
            default: 20,
        },
        spaceHBetweenAvatarAndHeader: {
            type: Number,
            default: 20,
        },
        spaceVBetweenHeaderAndContent: {
            type: Number,
            default: 0,
        },
        headerVerticalAlign: {
            type: String,
            default: 'center', //top, center, bottom
        },
        headerPadding: {
            type: Number,
            default: 15,
        },
        headerText: {
            type: String,
            default: '',
        },
        headerTextColor: {
            type: String,
            default: '#444',
        },
        headerTextSize: {
            type: String,
            default: '1.0rem',
        },
        subHeaderText: {
            type: String,
            default: '',
        },
        subHeaderTextColor: {
            type: String,
            default: '#888',
        },
        subHeaderTextSize: {
            type: String,
            default: '0.7rem',
        },
        sepLineWidth: {
            type: Number,
            default: 1,
        },
        sepLineColor: {
            type: String,
            default: '#ddd',
        },
        contentBorderRadius: {
            type: Number,
            default: 3,
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

            avatarWidth: 0,
            avatarHeight: 0,

            // headerHeight: 0,

        }
    },
    computed: {

        useAvatarIconColor: function() {
            //console.log('computed useAvatarIconColor')

            let vo = this

            return color2hex(vo.avatarIconColor)
        },

        useAvatarBackgroundColor: function() {
            //console.log('computed useAvatarBackgroundColor')

            let vo = this

            return color2hex(vo.avatarBackgroundColor)
        },

        useHeaderVerticalAlign: function() {
            //console.log('computed useHeaderVerticalAlign')

            let vo = this

            let c = ''
            if (vo.headerVerticalAlign === 'bottom') {
                c = 'flex-end'
            }
            else if (vo.headerVerticalAlign === 'center') {
                c = 'center'
            }
            else {
                //top, default
                c = 'flex-start'
            }

            return c
        },

        useHeaderTextColor: function() {
            //console.log('computed useHeaderTextColor')

            let vo = this

            return color2hex(vo.headerTextColor)
        },

        useSubHeaderTextColor: function() {
            //console.log('computed useSubHeaderTextColor')

            let vo = this

            return color2hex(vo.subHeaderTextColor)
        },

        useSepLineColor: function() {
            //console.log('computed useSepLineColor')

            let vo = this

            return color2hex(vo.sepLineColor)
        },

        useContentBackgroundColor: function() {
            //console.log('computed useContentBackgroundColor')

            let vo = this

            return color2hex(vo.contentBackgroundColor)
        },

    },
    methods: {

        resizeAvatar: function(msg) {
            // console.log('methods resizeAvatar', msg)

            let vo = this

            //update
            vo.avatarWidth = msg.snew.clientWidth
            vo.avatarHeight = msg.snew.clientHeight

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
