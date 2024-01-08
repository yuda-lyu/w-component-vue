<template>
    <div :changeContinuous="changeContinuous">

        <div
            :style="`color:${useTitleTextColor}; ${useTitleTextFontSize};`"
            v-if="hasTitle"
        >
            {{title}}
        </div>

        <div
            :style="`display:flex; align-items:center;`"
            v-if="!enableContinuous"
        >

            <div :style="`${useBorderRadius} overflow:hidden; width:100%; height:${height}px;`">
                <div :style="`background:${useProgBackgroundColor}; height:${height}px;`">
                    <div :style="`background:${useProgColor}; width:${useProg}%; height:${height}px;`"></div>
                </div>
            </div>

            <div style="padding-left:5px;">
                <WIcon
                    :icon="status==='waiting'?iconWaiting:iconFinish"
                    :color="status==='waiting'?useIconWaitingColor:useIconFinishColor"
                    :colorHover="status==='waiting'?useIconWaitingColor:useIconFinishColor"
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

        <div
            :style="`${useBorderRadius} overflow:hidden; width:100%; height:${height}px;`"
            v-if="enableContinuous"
        >
            <div :style="`position:relative; background:${useProgBackgroundColor}; height:${height}px;`">
                <div :style="`position:absolute; transition:all ${continuousFirst?0:continuousPeriod}ms linear; left:${continuousShiftX}%; top:0px; background:${useProgColor}; width:${continuousWidth}%; height:${height}px;`"></div>
            </div>
        </div>

    </div>
</template>

<script>
import { mdiCheck, mdiOrbitVariant } from '@mdi/js'
import isestr from 'wsemi/src/isestr.mjs'
import dig from 'wsemi/src/dig.mjs'
import replace from 'wsemi/src/replace.mjs'
import convertColor from '../js/convertColor.mjs'
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
 * @vue-prop {Boolean} [enableIconWaiting=true] 輸入是否使用等待狀態(value<=0)圖標布林值，預設true
 * @vue-prop {Boolean} [enableIconFinish=true] 輸入是否使用完成狀態(value>=100)圖標布林值，預設true
 * @vue-prop {String} [valueTextColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [valueTextFontSize='0.85rem'] 輸入文字字型大小字串，預設'0.85rem'
 * @vue-prop {Boolean} [enableContinuous=false] 輸入是否使用持續變化展示布林值，使用true時進度數字(value)與圖標(icon)失效，預設false
 * @vue-prop {Number} [continuousIncrease=12] 輸入持續變化時進度寬度增量數字，單位為px，預設12
 * @vue-prop {Number} [continuousPeriod=100] 輸入持續變化時定時器週期數字，單位為ms，預設100
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
        enableContinuous: {
            type: Boolean,
            default: false,
        },
        continuousIncrease: {
            type: Number,
            default: 12,
        },
        continuousPeriod: {
            type: Number,
            default: 100,
        },
    },
    data: function() {
        return {
            mdiCheck,
            mdiOrbitVariant,

            timer: null,
            continuousFirst: true,
            continuousRatio: 0,
            continuousShiftX: 0,
            continuousWidth: 0,

        }
    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //clearInterval
        if (vo.timer !== null) {
            clearInterval(vo.timer)
            vo.timer = null
        }

    },
    computed: {

        changeContinuous: function() {
            let vo = this
            if (vo.enableContinuous) {
                vo.runContinuous()
            }
            else {
                vo.destroyContinuous()
            }
            return ''
        },

        hasTitle: function() {
            let vo = this
            let b = isestr(vo.title)
            return b
        },

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
            return convertColor(vo.progColor)
        },

        useProgBackgroundColor: function() {
            let vo = this
            return convertColor(vo.progBackgroundColor)
        },

        useTitleTextColor: function() {
            let vo = this
            return convertColor(vo.titleTextColor)
        },

        useIconWaitingColor: function() {
            let vo = this
            return convertColor(vo.iconWaitingColor)
        },

        useIconFinishColor: function() {
            let vo = this
            return convertColor(vo.iconFinishColor)
        },

        useValueTextColor: function() {
            let vo = this
            return convertColor(vo.valueTextColor)
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

        runContinuous: function() {
            // console.log('methods runContinuous')
            let vo = this

            //waveInOutCubic
            let waveInOutCubic = (x) => {
                x /= 100
                let y = x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
                y = Math.max(Math.min(y, 1), 0)
                y *= 100
                return y
            }
            // for (let x = -20; x <= 120; x++) {
            //     let y = waveInOutCubic(x)
            //     console.log('waveInOutCubic', x, y)
            // }

            //waveGausian
            let waveGausian = (x) => {
                x -= 50
                x *= 2
                x /= 100
                x = Math.max(Math.min(x, 1), -1)
                let landa = 1
                let alpha = 2
                let y = landa * Math.exp(-alpha * x ** 2)
                y = Math.max(Math.min(y, 1), 0)
                let ym = 0.1353352832366127
                y -= ym
                y *= 1 / (1 - 0.1353352832366127)
                y *= 100
                return y
            }
            // for (let x = -20; x <= 120; x++) {
            //     let y = waveGausian(x)
            //     console.log('waveGausian', x, y)
            // }

            if (vo.timer === null) {
                vo.timer = setInterval(() => {

                    //continuousRatio
                    vo.continuousRatio += vo.continuousIncrease
                    vo.continuousFirst = false
                    if (vo.continuousRatio >= (100 + vo.continuousIncrease)) {
                        vo.continuousFirst = true
                        vo.continuousRatio = -vo.continuousIncrease
                    }

                    //continuousShiftX
                    vo.continuousShiftX = waveInOutCubic(vo.continuousRatio)

                    //continuousWidth
                    vo.continuousWidth = waveGausian(vo.continuousRatio)

                }, vo.continuousPeriod)
            }
        },

        destroyContinuous: function() {
            // console.log('methods destroyContinuous')
            let vo = this
            if (vo.timer !== null) {
                clearInterval(vo.timer)
                vo.timer = null
            }
        },

    },
}
</script>

<style scoped>
</style>
