<template>
    <!-- popup的minWidth是內容有超長文字可自動撐開才適用, 編輯區內沒有此種條件元素故設定minWidth會失效 -->
    <WPopup
        :isolated="true"
        _minWidth="minWidthForPopup"
        @show="evShow"
        @hide="evHide"
    >

        <template v-slot:trigger>
            <div :style="`min-width:${minWidthForValue}px; min-height:1rem; cursor:pointer;`">
                {{value}}
            </div>
        </template>

        <template v-slot:content="props">

            <!-- 無法使用w-popup的minWidth, 得於slot區自己撐開 -->
            <div :style="`min-width:${minWidthForPopup}px; text-align:left; border-radius:5px; overflow:hidden;`">

                <div v-if="title!==''">
                    <div :style="` padding:10px; color:${useTitleColor}; ${useTitleFontSize}; background:${useHeaderBackgroundColor};`">
                        {{title}}
                    </div>
                </div>

                <div :style="`padding:20px; border-top:1px solid #ddd; border-bottom:1px solid #ddd; background:${useContentBackgroundColor}; display:flex; align-items:center;`">

                    <div style="padding-right:10px;">
                        <WIcon
                            :icon="contentIcon"
                            :size="contentIconSize"
                            :color="contentIconColor"
                        ></WIcon>
                    </div>

                    <div style="width:100%;">
                        <WText
                            :textColor="inputTextColor"
                            :bottomLineBorderColor="inputTextBottomLineBorderColor"
                            :bottomLineBorderColorHover="inputTextBottomLineBorderColorHover"
                            :bottomLineBorderColorFocus="inputTextBottomLineBorderColorFocus"
                            v-model="valueTemp"
                            @enter="ckSave(props)"
                            v-if="showEdit"
                        ></WText>
                    </div>

                </div>

                <div :style="`padding:10px; background:${useFooterBackgroundColor}; text-align:right;`">

                    <WButtonChip
                        :shiftLeft="-5"
                        :icon="saveBtnIcon"
                        :iconColor="saveBtnIconColor"
                        :iconColorHover="saveBtnIconColorHover"
                        :iconSize="saveBtnIconSize"
                        :text="saveBtnText"
                        :textColor="saveBtnTextColor"
                        :textColorHover="saveBtnTextColorHover"
                        :backgroundColor="saveBtnBackgroundColor"
                        :backgroundColorHover="saveBtnBackgroundColorHover"
                        :rippleColor="saveBtnIconRippleColor"
                        @click="ckSave(props)"
                    ></WButtonChip>

                </div>

            </div>

        </template>
    </WPopup>
</template>

<script>
import { mdiSquareEditOutline, mdiCheckboxMarkedCircle } from '@mdi/js'
import replace from 'wsemi/src/replace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WPopup from './WPopup.vue'
import WText from './WText.vue'
import WButtonChip from './WButtonChip.vue'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String|Number} [value=''] 輸入數據字串或數字，預設''
 * @vue-prop {String} [title=''] 輸入上方區數據標題字串，預設''
 * @vue-prop {String} [titleColor='grey darken-3'] 輸入上方區數據標題顏色字串，預設'grey darken-3'
 * @vue-prop {String} [titleFontSize='0.8rem'] 輸入上方區數據標題字型大小字串，預設'0.8rem'
 * @vue-prop {String} [contentIcon=mdiSquareEditOutline] 輸入內容區圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCommentEditOutline
 * @vue-prop {String} [contentIconColor='orange'] 輸入內容區圖標顏色字串，預設'orange'
 * @vue-prop {Number} [contentIconSize=36] 輸入內容區圖標大小，單位為px，預設36
 * @vue-prop {String} [inputTextColor='grey darken-3'] 輸入輸入文字框之文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [inputTextBottomLineBorderColor='grey lighten-1'] 輸入輸入文字框之底部線顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextBottomLineBorderColorHover='grey'] 輸入輸入文字框之滑鼠移入時底部線顏色字串，預設'grey'
 * @vue-prop {String} [inputTextBottomLineBorderColorFocus='blue darken-1'] 輸入輸入文字框之取得焦點時底部線顏色字串，預設'blue darken-1'
 * @vue-prop {String} [saveBtnText='Save'] 輸入儲存按鈕文字字串，預設'Save'
 * @vue-prop {String} [saveBtnTextColor='grey darken-3'] 輸入儲存按鈕文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [saveBtnTextColorHover='grey darken-2'] 輸入滑鼠移入時儲存按鈕文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [saveBtnIcon=mdiCheckboxMarkedCircle] 輸入儲存按鈕圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxMarkedCircle
 * @vue-prop {Number} [saveBtnIconSize=22] 輸入儲存按鈕圖標大小，單位為px，預設22
 * @vue-prop {String} [saveBtnIconColor='grey darken-1'] 輸入儲存按鈕圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [saveBtnIconColorHover='grey darken-2'] 輸入滑鼠移入時儲存按鈕圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [saveBtnIconRippleColor='rgba(200,200,200,0.4)'] 輸入儲存按鈕ripple效果顏色字串，預設'rgba(200,200,200,0.4)'
 * @vue-prop {String} [saveBtnBackgroundColor='white'] 輸入儲存按鈕背景顏色字串，預設'white'
 * @vue-prop {String} [saveBtnBackgroundColorHover='grey lighten-3'] 輸入滑鼠移入時儲存按鈕背景顏色字串，預設'grey lighten-3'
 * @vue-prop {String} [headerBackgroundColor='grey lighten-5'] 輸入上方區背景顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {String} [footerBackgroundColor='grey lighten-5'] 輸入下方區背景顏色字串，預設'grey lighten-5'
 * @vue-prop {Number} [minWidthForValue=30] 輸入數據value展示時最小寬度數字，單位為px，預設30
 * @vue-prop {Number} [minWidthForPopup=300] 輸入彈窗最小寬度數字，單位為px，預設300
 */
export default {
    components: {
        WPopup,
        WText,
        WButtonChip,
        WIcon,
    },
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        title: {
            type: String,
            default: 'Editor',
        },
        titleColor: {
            type: String,
            default: 'grey darken-3',
        },
        titleFontSize: {
            type: String,
            default: '0.8rem',
        },
        contentIcon: {
            type: String,
            default: mdiSquareEditOutline,
        },
        contentIconColor: {
            type: String,
            default: 'orange',
        },
        contentIconSize: {
            type: Number,
            default: 28,
        },
        inputTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        inputTextBottomLineBorderColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextBottomLineBorderColorHover: {
            type: String,
            default: 'grey',
        },
        inputTextBottomLineBorderColorFocus: {
            type: String,
            default: 'blue darken-1',
        },
        saveBtnText: {
            type: String,
            default: 'Save',
        },
        saveBtnTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        saveBtnTextColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        saveBtnIcon: {
            type: String,
            default: mdiCheckboxMarkedCircle,
        },
        saveBtnIconSize: {
            type: Number,
            default: 22,
        },
        saveBtnIconColor: {
            type: String,
            default: 'grey darken-1',
        },
        saveBtnIconColorHover: {
            type: String,
            default: 'grey darken-2',
        },
        saveBtnIconRippleColor: {
            type: String,
            default: 'rgba(200,200,200,0.4)',
        },
        saveBtnBackgroundColor: {
            type: String,
            default: 'white',
        },
        saveBtnBackgroundColorHover: {
            type: String,
            default: 'grey lighten-3',
        },
        headerBackgroundColor: {
            type: String,
            default: 'grey lighten-5',
        },
        contentBackgroundColor: {
            type: String,
            default: 'white',
        },
        footerBackgroundColor: {
            type: String,
            default: 'grey lighten-5',
        },
        minWidthForValue: {
            type: Number,
            default: 30,
        },
        minWidthForPopup: {
            type: Number,
            default: 300,
        },
    },
    data: function() {
        return {

            valueTemp: null,
            showEdit: false,

        }
    },
    computed: {

        useTitleFontSize: function() {
            let vo = this
            let s = vo.titleFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTitleColor: function() {
            let vo = this
            return color2hex(vo.titleColor)
        },

        useHeaderBackgroundColor: function() {
            let vo = this
            return color2hex(vo.headerBackgroundColor)
        },

        useContentBackgroundColor: function() {
            let vo = this
            return color2hex(vo.contentBackgroundColor)
        },

        useFooterBackgroundColor: function() {
            let vo = this
            return color2hex(vo.footerBackgroundColor)
        },

    },
    methods: {

        evShow: function () {
            // console.log('methods evShow')

            let vo = this

            //save
            vo.valueTemp = vo.value

            //nextTick
            vo.$nextTick(() => {

                //show
                vo.showEdit = true

            })

        },

        evHide: function() {
            // console.log('methods evHide')

            let vo = this

            //nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('close')

                //hide
                vo.showEdit = false

            })

        },

        ckSave: function(props, value) {
            // console.log('methods ckSave', props, value)

            let vo = this

            //nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('input', vo.valueTemp)

                //clear
                vo.valueTemp = ''

                //hide popup
                props.funHide()

            })

        },

    }
}
</script>

<style scoped>
</style>
