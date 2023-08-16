<template>
    <WDialog
        :minWidth="minWidth"
        :maxWidth="maxWidth"
        :headerShadow="false"
        :show.sync="showTrans"
        :changeParam="changeParam"
    >

        <template v-slot:header>

            <div v-if="showTrans">
                <slot name="header">
                    <div :style="useHeaderStyle">
                        {{title}}
                    </div>
                </slot>
            </div>

        </template>

        <template v-slot:content>

            <div v-if="showTrans">
                <slot name="content">
                    <div :style="useContentStyle">

                        <div style="display:table-cell; vertical-align:middle; padding-right:15px;">
                            <WIcon
                                :icon="contentIcon"
                                :size="contentIconSize"
                                :color="contentIconColor"
                            ></WIcon>
                        </div>

                        <div style="display:table-cell; vertical-align:middle; width:100%;">{{content}}</div>

                    </div>
                </slot>
            </div>

        </template>

        <template v-slot:footer>

            <div v-if="showTrans">
                <slot name="footer">
                    <div :style="useFooterStyle">

                        <WButtonChip
                            style="margin-left:20px;"
                            :shiftLeft="-5"
                            :icon="mdiCloseCircle"
                            :iconColor="noBtnTextColor"
                            :iconColorHover="noBtnTextColorHover"
                            :text="noBtnText"
                            :textColor="noBtnTextColor"
                            :textColorHover="noBtnTextColorHover"
                            :backgroundColor="noBtnBackgroundColor"
                            :backgroundColorHover="noBtnBackgroundColorHover"
                            @click="clickBtns(false)"
                            v-if="hasNoBtn"
                        ></WButtonChip>

                        <WButtonChip
                            style="margin-left:20px;"
                            :shiftLeft="-5"
                            :icon="mdiCheckboxMarkedCircle"
                            :iconColor="yesBtnTextColor"
                            :iconColorHover="yesBtnTextColorHover"
                            :text="yesBtnText"
                            :textColor="yesBtnTextColor"
                            :textColorHover="yesBtnTextColorHover"
                            :backgroundColor="yesBtnBackgroundColor"
                            :backgroundColorHover="yesBtnBackgroundColorHover"
                            @click="clickBtns(true)"
                        ></WButtonChip>

                    </div>
                </slot>
            </div>

        </template>

    </WDialog>
</template>

<script>
import { mdiAlert, mdiCheckboxMarkedCircle, mdiCloseCircle } from '@mdi/js'
import color2hex from '../js/vuetifyColor.mjs'
import WButtonChip from './WButtonChip.vue'
import WIcon from './WIcon.vue'
import WDialog from './WDialog.vue'


/**
 * @vue-prop {Boolean} [show=false] 輸入是否顯示，預設false
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='black'] 輸入標題顏色字串，預設'black'
 * @vue-prop {String} [content=''] 輸入內容字串，預設''
 * @vue-prop {String} [contentColor='black'] 輸入內容顏色字串，預設'black'
 * @vue-prop {String} [contentIcon=mdiAlert] 輸入內容左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiAlert
 * @vue-prop {String} [contentIconColor='orange'] 輸入內容左側圖標顏色字串，預設'orange'
 * @vue-prop {Number} [contentIconSize=40] 輸入內容左側圖標大小數字，預設40
 * @vue-prop {Boolean} [hasNoBtn=true] 輸入是否顯示取消按鈕，預設true
 * @vue-prop {String} [noBtnText='Cancel'] 輸入否決按鈕文字字串，預設'Cancel'
 * @vue-prop {String} [noBtnTextColor='#444'] 輸入否決按鈕文字顏色字串，預設'#444'
 * @vue-prop {String} [noBtnTextColorHover='#444'] 輸入滑鼠移入時否決按鈕文字顏色字串，預設'#444'
 * @vue-prop {String} [noBtnBackgroundColor='#fff'] 輸入否決按鈕顏色字串，預設'#fff'
 * @vue-prop {String} [noBtnBackgroundColorHover='#f2f2f2'] 輸入滑鼠移入時否決按鈕顏色字串，預設'#f2f2f2'
 * @vue-prop {String} [yesBtnText='Yes'] 輸入同意按鈕文字字串，預設'Yes'
 * @vue-prop {String} [yesBtnTextColor='#fff'] 輸入同意按鈕文字顏色字串，預設'#fff'
 * @vue-prop {String} [yesBtnTextColorHover='#fff'] 輸入滑鼠移入時同意按鈕文字顏色字串，預設'#fff'
 * @vue-prop {String} [yesBtnBackgroundColor='#f15'] 輸入同意按鈕顏色字串，預設'#f15'
 * @vue-prop {String} [yesBtnBackgroundColorHover='#f26'] 輸入滑鼠移入時同意按鈕顏色字串，預設'#f26'
 * @vue-prop {String} [headerBackgroundColor='grey lighten-5'] 輸入上方區塊背景顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {String} [footerBackgroundColor='grey lighten-5'] 輸入下方區塊背景顏色字串，預設'grey lighten-5'
 * @vue-prop {Number} [minWidth=200] 輸入彈窗最小寬度數值，單位為px，預設200，當裝置寬度小於彈窗最小寬度時則使用裝置寬度
 * @vue-prop {Number} [maxWidth=500] 輸入彈窗最大寬度，單位為px，預設500
 */
export default {
    components: {
        WButtonChip,
        WIcon,
        WDialog,
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        titleColor: {
            type: String,
            default: 'black',
        },
        content: {
            type: String,
            default: '',
        },
        contentColor: {
            type: String,
            default: 'grey darken-2',
        },
        contentIcon: {
            type: String,
            default: mdiAlert,
        },
        contentIconColor: {
            type: String,
            default: 'orange',
        },
        contentIconSize: {
            type: Number,
            default: 40,
        },
        hasNoBtn: {
            type: Boolean,
            default: true,
        },
        noBtnText: {
            type: String,
            default: 'Cancel',
        },
        noBtnTextColor: {
            type: String,
            default: '#444',
        },
        noBtnTextColorHover: {
            type: String,
            default: '#444',
        },
        noBtnBackgroundColor: {
            type: String,
            default: '#fff',
        },
        noBtnBackgroundColorHover: {
            type: String,
            default: '#f2f2f2',
        },
        yesBtnText: {
            type: String,
            default: 'Yes',
        },
        yesBtnTextColor: {
            type: String,
            default: '#fff',
        },
        yesBtnTextColorHover: {
            type: String,
            default: '#fff',
        },
        yesBtnBackgroundColor: {
            type: String,
            default: '#f15',
        },
        yesBtnBackgroundColorHover: {
            type: String,
            default: '#f26',
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
        minWidth: {
            type: Number,
            default: 200,
        },
        maxWidth: {
            type: Number,
            default: 500,
        },
    },
    data: function() {
        return {
            mdiAlert,
            mdiCheckboxMarkedCircle,
            mdiCloseCircle,
            showTrans: null,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //showTrans
            vo.showTrans = vo.show

            return ''
        },

        useHeaderStyle: function() {
            //console.log('computed useHeaderStyle')

            let vo = this

            let s = {}
            s['padding'] = '15px 20px'
            s['background-color'] = color2hex(vo.headerBackgroundColor)
            s['border-bottom'] = '1px solid #ddd'
            s['font-size'] = '1.2rem'
            s['color'] = color2hex(vo.titleColor)
            return s
        },

        useContentStyle: function() {
            //console.log('computed useContentStyle')

            let vo = this

            let s = {}
            s['padding'] = '20px 15px'
            s['background-color'] = color2hex(vo.contentBackgroundColor)
            s['display'] = 'table'
            s['width'] = '100%'
            //s['align-items'] = 'center'
            s['color'] = color2hex(vo.contentColor)
            s['overflow-y'] = 'auto'
            return s
        },

        useFooterStyle: function() {
            //console.log('computed useFooterStyle')

            let vo = this

            let s = {}
            s['padding'] = '15px'
            s['background-color'] = color2hex(vo.footerBackgroundColor)
            s['border-top'] = '1px solid #ddd'
            s['text-align'] = 'right'
            return s
        },

    },
    methods: {

        clickBtns: function(state) {
            //console.log('methods clickBtns', state)

            let vo = this

            //hide
            vo.showTrans = false

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:show', vo.showTrans)

                //emit
                let c = 'no'
                if (state) {
                    c = 'yes'
                }
                vo.$emit('click-' + c)

            })

        },

    },
}
</script>

<style scoped>
</style>
