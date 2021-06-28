<template>
    <div>

        <div
            :style="`color:${useTitleTextColor}; ${useTitleTextFontSize};`"
            v-if="title"
        >
            {{title}}
        </div>

        <div style="display:flex; align-items:center;">

            <div :style="`${useBorderRadius} overflow:hidden; width:100%; height:${height}px;`">
                <div :style="`background:${useProgBackgroundColor}; height:${height}px;`">
                    <div :style="`background:${useProgColor}; width:${useProg}%; height:${height}px;`"></div>
                </div>
            </div>

            <div style="padding-left:5px;">
                <WIcon
                    :icon="status==='waiting'?iconWaiting:iconFinish"
                    :color="status==='waiting'?useIconWaitingColor:useIconFinishColor"
                    :size="iconSize"
                    v-if="(enableIconWaiting && status==='waiting') || (enableIconFinish && status==='finish')"
                ></WIcon>
                <div
                    :style="`color:${useValueTextColor}; ${useValueTextFontSize};`"
                    v-else
                >
                    <div>{{useProg}}%</div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mdiCheck, mdiOrbitVariant } from '@mdi/js'
import dig from 'wsemi/src/dig.mjs'
import replace from 'wsemi/src/replace.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Number} [value=0] 輸入進度數字，單位%，介於0至100之間，預設0
 * @vue-prop {Number} [decimal=1] 輸入進度取小數位數字，預設1
 * @vue-prop {String} [title=''] 輸入項目名稱字串，預設''
 * @vue-prop {String} [titleTextColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [titleTextFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Number} [height=4] 輸入高度數字，單位為px，預設4
 * @vue-prop {Number} [borderRadius=5] 輸入框圓角度數字，單位為px，預設5
 * @vue-prop {String} [progColor='light-green accent-4'] 輸入進度條顏色字串，預設'light-green accent-4'
 * @vue-prop {String} [progBackgroundColor='light-green lighten-5'] 輸入進度條背景顏色字串，預設'light-green lighten-5'
 * @vue-prop {Number} [iconSize=20] 輸入左側圖標之尺寸數字，單位px，預設20
 * @vue-prop {String} [iconWaiting='mdiOrbitVariant'] 輸入等待狀態(value<=0)圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設'mdiOrbitVariant'
 * @vue-prop {String} [iconFinish='mdiCheck'] 輸入完成狀態(value>=100)圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設'mdiCheck'
 * @vue-prop {String} [iconWaitingColor='grey'] 輸入等待狀態(value<=0)圖標顏色字串，預設'grey'
 * @vue-prop {String} [iconFinishColor='green'] 輸入完成狀態(value>=100)圖標顏色字串，預設'green'
 * @vue-prop {Boolean} [enableIconWaiting=true] 輸入是否使用等待狀態(value<=0)圖標，預設true
 * @vue-prop {Boolean} [enableIconFinish=true] 輸入是否使用完成狀態(value>=100)圖標，預設true
 * @vue-prop {String} [valueTextColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [valueTextFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
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
        decimal: {
            type: Number,
            default: 1,
        },
        title: {
            type: String,
            default: '',
        },
        titleTextColor: {
            type: String,
            default: 'grey darken-2',
        },
        titleTextFontSize: {
            type: String,
            default: '0.85rem',
        },
        height: {
            type: Number,
            default: 4,
        },
        borderRadius: {
            type: Number,
            default: 5,
        },
        progColor: {
            type: String,
            default: 'lime accent-4',
        },
        progBackgroundColor: {
            type: String,
            default: 'light-green lighten-5',
        },
        iconSize: {
            type: Number,
            default: 20,
        },
        iconWaiting: {
            type: String,
            default: mdiOrbitVariant,
        },
        iconFinish: {
            type: String,
            default: mdiCheck,
        },
        iconWaitingColor: {
            type: String,
            default: 'grey',
        },
        iconFinishColor: {
            type: String,
            default: 'green',
        },
        enableIconWaiting: {
            type: Boolean,
            default: true,
        },
        enableIconFinish: {
            type: Boolean,
            default: true,
        },
        valueTextColor: {
            type: String,
            default: 'grey darken-2',
        },
        valueTextFontSize: {
            type: String,
            default: '0.85rem',
        },
    },
    data: function() {
        return {
            mdiCheck,
            mdiOrbitVariant,
        }
    },
    computed: {

        status: function() {
            let vo = this
            if (vo.value <= 0) {
                return 'waiting'
            }
            else if (vo.value >= 100) {
                return 'finish'
            }
            return 'running'
        },

        useProg: function() {
            let vo = this
            let p = vo.value
            p = Math.max(p, 0)
            p = Math.min(p, 100)
            p = vo.digValue(p)
            return p
        },

        useTitleTextFontSize: function() {
            let vo = this
            let s = vo.titleTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useBorderRadius: function() {
            let vo = this
            return `border-radius:${vo.borderRadius}px;`
        },

        useProgColor: function() {
            let vo = this
            return color2hex(vo.progColor)
        },

        useProgBackgroundColor: function() {
            let vo = this
            return color2hex(vo.progBackgroundColor)
        },

        useTitleTextColor: function() {
            let vo = this
            return color2hex(vo.titleTextColor)
        },

        useIconWaitingColor: function() {
            let vo = this
            return color2hex(vo.iconWaitingColor)
        },

        useIconFinishColor: function() {
            let vo = this
            return color2hex(vo.iconFinishColor)
        },

        useValueTextColor: function() {
            let vo = this
            return color2hex(vo.valueTextColor)
        },

        useValueTextFontSize: function() {
            let vo = this
            let s = vo.valueTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

    },
    methods: {

        digValue: function(value) {
            //console.log('methods digValue', value)
            let vo = this
            return dig(value, vo.decimal)
        },

    },
}
</script>

<style scoped>
</style>
