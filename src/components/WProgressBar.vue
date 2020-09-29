<template>
    <div>

        <div :style="`color:${useTitleTextColor}; font-size:${titleTextFontSize};`">
            {{title}}
        </div>

        <div style="display:flex; align-items:center;">

            <div :style="`${useBorderRadius} overflow:hidden; width:100%; height:${height}px;`">
                <div :style="`background:${useBackgroundColor}; height:${height}px;`">
                    <div :style="`background:${useProgColor}; width:${useProg}%; height:${height}px;`"></div>
                </div>
            </div>

            <div>
                <w-icon
                    :style="`margin:0px 5px 0px -6px;`"
                    :icon="status==='wating'?mdiCloudOffOutline:mdiCheck"
                    :color="status==='wating'?iconColorWating:iconColorFinish"
                    :size="iconSize"
                    v-if="status==='wating' || status==='finish'"
                ></w-icon>
                <div
                    :style="`color:${useValueTextColor}; font-size:${valueTextFontSize};`"
                    v-else
                >
                    <div style="height:0px;">100%</div>
                    {{value}}%
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mdiCheck, mdiCloudOffOutline } from '@mdi/js'
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Number} [value=0] 輸入進度數字，單位%，介於0至100之間，預設0，進度條出現需狀態status設定為'running'
 * @vue-prop {String} [status='waiting'] 輸入狀態字串，可有'wating'、'running'、'finish'，預設'wating'
 * @vue-prop {String} [title=''] 輸入項目名稱字串，預設''
 * @vue-prop {Number} [height=2] 輸入高度數字，單位為px，預設2
 * @vue-prop {Number} [borderRadius=5] 輸入框圓角度數字，單位為px，預設5
 * @vue-prop {String} [progColor='rgba(150,150,150,0.4)'] 輸入進度條背景顏色字串，預設'rgba(150,150,150,0.4)'
 * @vue-prop {String} [backgroundColor='rgba(150,150,150,0.075)'] 輸入進度條顏色字串，預設'rgba(150,150,150,0.075)'
 * @vue-prop {String} [titleTextColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [titleTextFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [iconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [valueTextColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [valueTextFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 *
 */
export default {
    components: {
        WIcon,
    },
    props: {
        value: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            default: 'wating',
        },
        title: {
            type: String,
            default: '',
        },
        height: {
            type: Number,
            default: 2,
        },
        borderRadius: {
            type: Number,
            default: 5,
        },
        progColor: {
            type: String,
            default: 'rgba(150,150,150,0.4)',
        },
        progBackgroundColor: {
            type: String,
            default: 'rgba(150,150,150,0.075)',
        },
        titleTextColor: {
            type: String,
            default: 'black',
        },
        titleTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        iconSize: {
            type: Number,
            default: 22,
        },
        iconColorWating: {
            type: String,
            default: 'grey',
        },
        iconColorFinish: {
            type: String,
            default: 'green',
        },
        valueTextColor: {
            type: String,
            default: 'black',
        },
        valueTextFontSize: {
            type: String,
            default: '0.85rem',
        },
    },
    data: function() {
        return {
            mdiCheck,
            mdiCloudOffOutline,
        }
    },
    computed: {

        useBorderRadius: function() {
            //console.log('computed useBorderRadius')

            let vo = this

            return `border-radius:${vo.borderRadius}px;`
        },

        useProgColor: function() {
            let vo = this
            return color2hex(vo.progColor)
        },

        useBackgroundColor: function() {
            let vo = this
            return color2hex(vo.backgroundColor)
        },

        useTitleTextColor: function() {
            let vo = this
            return color2hex(vo.titleTextColor)
        },

        useValueTextColor: function() {
            let vo = this
            return color2hex(vo.valueTextColor)
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
