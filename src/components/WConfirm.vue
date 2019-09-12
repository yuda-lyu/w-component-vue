<template>
    <v-dialog
        :changeParam="changeParam"
        persistent
        :max-width="widthMax"
        v-model="show_trans"
    >

        <v-card>

            <div :style="useHeaderStyle">
                <span
                    :style="[{'font-size':'1.2rem', 'font-weight':'bold'},useTitleColor]"
                >
                    {{title}}
                </span>
            </div>

            <div :style="useContentStyle">

                <v-icon
                    :size="contentIconSize"
                    :color="contentIconColor"
                >
                    {{contentIcon}}
                </v-icon>

                <div style="margin-left:15px; font-size:1.2rem;">{{content}}</div>

            </div>

            <div :style="useFooterStyle">

                <v-btn
                    style="margin-left:20px;"
                    small
                    rounded
                    dark
                    color="pink lighten-1"
                    @click="clickBtns(false)"
                    v-if="hasCancelBtn"
                >
                    <v-icon style="margin-left:-8px;">{{mdiCloseCircleOutline}}</v-icon>
                    <span style="margin-left:5px; font-size:0.875rem; text-transform:none;">{{noText}}</span>
                </v-btn>

                <v-btn
                    style="margin-left:20px;"
                    small
                    rounded
                    dark
                    color="blue"
                    @click="clickBtns(true)"
                >
                    <v-icon style="margin-left:-8px;">{{mdiCheckboxMarkedCircleOutline}}</v-icon>
                    <span style="margin-left:5px; font-size:0.875rem; text-transform:none;">{{yesText}}</span>
                </v-btn>

            </div>

        </v-card>

    </v-dialog>
</template>

<script>
import { mdiAlert, mdiCheckboxMarkedCircleOutline, mdiCloseCircleOutline } from '@mdi/js'
import { color2hex } from '../js/vuetifyColor.mjs'

/**
 * @vue-prop {Boolean} [show=false] 輸入是否顯示，預設false
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='black'] 輸入標題顏色字串，預設'black'
 * @vue-prop {String} [content=''] 輸入內容字串，預設''
 * @vue-prop {String} [contentColor='black'] 輸入內容顏色字串，預設'black'
 * @vue-prop {String} [contentIcon=mdiAlert] 輸入內容左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiAlert
 * @vue-prop {String} [contentIconColor='orange'] 輸入內容左側圖標顏色字串，預設'orange'
 * @vue-prop {Number} [contentIconSize=40] 輸入內容左側圖標大小數字，預設40
 * @vue-prop {String} [noText='取消'] 輸入否決按鈕文字字串，預設'取消'
 * @vue-prop {String} [yesText='同意'] 輸入同意按鈕文字字串，預設'同意'
 * @vue-prop {Boolean} [hasCancelBtn=true] 輸入是否顯示取消按鈕，預設true
 * @vue-prop {String} [headerBackgroundColor='grey lighten-5'] 輸入上方區塊背景顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [contentBackgroundColor='white'] 輸入內容區塊背景顏色字串，預設'white'
 * @vue-prop {String} [footerBackgroundColor='grey lighten-5'] 輸入下方區塊背景顏色字串，預設'grey lighten-5'
 * @vue-prop {Number} [widthMax=500] 輸入彈窗最大寬度，單位為px，預設500
 */
export default {
    components: {
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
        noText: {
            type: String,
            default: '取消',
        },
        yesText: {
            type: String,
            default: '同意',
        },
        hasCancelBtn: {
            type: Boolean,
            default: true,
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
        widthMax: {
            type: Number,
            default: 500,
        },
    },
    data: function() {
        return {
            mdiAlert,
            mdiCheckboxMarkedCircleOutline,
            mdiCloseCircleOutline,
            show_trans: null,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //show_trans
            vo.show_trans = vo.show

            return ''
        },

        useTitleColor: function() {
            //console.log('computed useTitleColor')

            let vo = this

            let s = {}
            s['color'] = color2hex(vo.titleColor)

            return s
        },

        useHeaderStyle: function() {
            //console.log('computed useHeaderStyle')

            let vo = this

            let s = {}
            s['padding'] = '15px'
            s['background-color'] = color2hex(vo.headerBackgroundColor)
            s['border-bottom'] = '1px solid #ddd'

            return s
        },

        useContentStyle: function() {
            //console.log('computed useContentStyle')

            let vo = this

            let s = {}
            s['padding'] = '20px 15px'
            s['background-color'] = color2hex(vo.contentBackgroundColor)
            s['display'] = 'flex'
            s['align-items'] = 'center'
            s['color'] = color2hex(vo.contentColor)

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
            vo.show_trans = false

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('update:show', vo.show_trans)

                //emit
                let c = 'no'
                if (state) {
                    c = 'yes'
                }
                vo.$emit('click-' + c)

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
