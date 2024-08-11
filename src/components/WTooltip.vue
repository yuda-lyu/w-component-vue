<template>
    <div
        :style="`${useDisplayType}`"
        :changeValue="changeValue"
    >

        <div
            ref="divTrigger"
            style="outline:none;"
            tabindex="0"
            @click="evShow('click','click')"
            @mouseenter="evShow('hover','mouseenter')"
            @mouseleave="evHide('hover','mouseleave')"
        >

            <slot name="trigger"></slot>

        </div>

        <!-- 不能給予position因會被popupjs洗掉, 但可給z-index, 且popupjs會改用transform:translate定位 -->
        <!-- 若使用minWidth, 會使popupjs重算給予minWidth用以自動撐開彈窗寬度失效, 若於其內slot外添加div給予minWidth, 亦會使popupjs給予minWidth機制失效, 待研究 -->
        <div
            ref="divContent"
            class="WPopperFix"
            :style="`z-index:${cmpZIndex};`"
            v-show="valueTrans"
            v-domresize
            @domresize="updatePopper"
        >
            <div
                :style="`${contentStyle} ${usePadding} ${useTextFontSize} color:${useTextColor}; background:${useBackgroundColor}; ${useMinWidth} ${useMaxWidth} ${useBorderRadius} ${useShadow}`"
                v-if="valueTrans"
            >
                <slot
                    name="content"
                    :funHide="()=>{updateValue(false,'slot')}"
                ></slot>
            </div>
        </div>

    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import last from 'lodash-es/last.js'
import pull from 'lodash-es/pull.js'
import isNumber from 'lodash-es/isNumber.js'
import genID from 'wsemi/src/genID.mjs'
import replace from 'wsemi/src/replace.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import convertColor from '../js/convertColor.mjs'
import parseSpace from '../js/parseSpace.mjs'
import domResize from '../js/domResize.mjs'
import BuildPopper from '../js/buildPopper.mjs'


//tootip與popup不共用已出現項目清單, 避免互相影響
let kpRespList = {
    tooltip: [],
    popup: [],
}
function addTriggerMode(mode, mmkey) {
    kpRespList[mode].push(mmkey)
}
function checkTriggerEffMode(mode, mmkey) {
    return last(kpRespList[mode]) === mmkey
}
function removeTriggerMode(mode, mmkey) {
    pull(kpRespList[mode], mmkey)
}


/**
 * @vue-prop {String} [mode='tooltip'] 輸入組件模式字串，可選'tooltip'與'popup'，預設'tooltip'
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {String} [displayType='block'] 輸入display設定字串，可選'block'與'line'，預設'block'
 * @vue-prop {Number} [cmpZIndex=3000] 輸入提示窗或彈窗使用z-index數字，預設3000
 * @vue-prop {Boolean} [isolated=false] 輸入提示窗或彈窗當mode為'popup'時是否為獨立顯引狀態布林值，也就是可不接收外部傳入value值，預設false
 * @vue-prop {Number} [minWidth=null] 輸入提示窗或彈窗最小寬度數字，單位為px，預設null
 * @vue-prop {Number} [maxWidth=null] 輸入提示窗或彈窗最大寬度數字，單位為px，預設null
 * @vue-prop {Boolean} [autoFitMinWidth=false] 輸入是否使用驅動區寬度作為提示窗或彈窗之最小寬度布林值，預設false
 * @vue-prop {Boolean} [autoFitMaxWidth=false] 輸入是否使用驅動區寬度作為提示窗或彈窗之最大寬度布林值，預設false
 * @vue-prop {String} [placement='bottom'] 輸入提示窗或彈窗出現位置字串，可選'top-start'、'top'、'top-end'、'bottom-start'、'bottom'、'bottom-end'、'left-start'、'left'、'left-end'、'right-start'、'right'、'right-end'、，預設'bottom'
 * @vue-prop {Number} [placementDistX=0] 輸入提示窗或彈窗距離觸發元素之水平向右平移數字，單位為px，預設0
 * @vue-prop {Number} [placementDistY=5] 輸入提示窗或彈窗距離觸發元素之垂直向下平移數字，單位為px，預設5
 * @vue-prop {Number} [borderRadius=4] 輸入提示窗或彈窗框圓角度數字，單位為px，預設4
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入提示窗或彈窗文字字型大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='white'] 輸入提示窗或彈窗文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='rgba(60,60,60,0.75)'] 輸入提示窗或彈窗背景顏色字串，預設'rgba(60,60,60,0.75)'
 * @vue-prop {Object} [paddingStyle={v:2,h:10}] 輸入提示窗或彈窗內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:2,h:10}
 * @vue-prop {Boolean} [shadow=true] 輸入提示窗或彈窗是否顯示陰影布林值，預設true
 * @vue-prop {String} [shadowStyle=''] 輸入提示窗或彈窗陰影顏色字串，預設值詳見props
 * @vue-prop {Number} [transitionTime=200] 輸入提示窗或彈窗淡入出現時間數字，單位為ms，預設200
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    props: {
        mode: {
            type: String,
            default: 'tooltip', //tooltip, popup
        },
        value: {
            type: Boolean,
            default: false,
        },
        displayType: {
            type: String,
            default: 'block', //line, block
        },
        cmpZIndex: {
            type: Number,
            default: 3000,
        },
        isolated: {
            type: Boolean,
            default: false,
        },
        minWidth: {
            type: Number,
            default: null,
        },
        maxWidth: {
            type: Number,
            default: null,
        },
        autoFitMinWidth: {
            type: Boolean,
            default: false,
        },
        autoFitMaxWidth: {
            type: Boolean,
            default: false,
        },
        placement: {
            type: String,
            default: 'bottom',
        },
        placementDistX: {
            type: Number,
            default: 0,
        },
        placementDistY: {
            type: Number,
            default: 5,
        },
        borderRadius: {
            type: Number,
            default: 4,
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        textColor: {
            type: String,
            default: 'white',
        },
        backgroundColor: {
            type: String,
            default: 'rgba(60,60,60,0.75)',
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 2,
                    h: 10,
                }
            },
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        shadowStyle: {
            type: String,
            default: '0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)',
        },
        transitionTime: {
            type: Number,
            default: 200,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {

            mmkey: genID(), //beforeMount內無法變更data, mounted內會晚於computed, 故優先放於data生成
            // mmkey: (() => {
            //     let id = genID()
            //     console.log('data gen mmkey', id)
            //     return id
            // })(),

            valueTrans: false,

            triggerWidth: null,
            contentStyle: '',

            bp: null,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //BuildPopper
        let keyShow = 'valueTrans'
        let evNameValue = 'input'
        vo.bp = new BuildPopper(vo,
            vo.funGetDivTrigger,
            vo.funGetDivContent,
            keyShow,
            evNameValue,
            {
                addTriggerMode,
                checkTriggerEffMode,
                removeTriggerMode,
            })

        //mounted
        vo.bp.mounted()

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //destroy
        vo.bp.destroy()

    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //trigger
            let value = vo.value
            let isolated = vo.isolated

            //updateValue
            if (!isolated) {
                vo.updateValue(value, 'changeValue')
            }

            return ''
        },

        useDisplayType: function() {
            let vo = this
            if (vo.displayType === 'line') {
                return 'display:block;'
            }
            return 'display:inline-block;'
        },

        useMinWidth: function() {
            //console.log('computed useMinWidth')

            let vo = this

            if (isNumber(vo.minWidth)) {
                return `min-width:${vo.minWidth}px;`
            }
            else if (vo.autoFitMinWidth) {
                return `min-width:${vo.triggerWidth}px;`
            }
            return ''
        },

        useMaxWidth: function() {
            //console.log('computed useMaxWidth')

            let vo = this

            if (isNumber(vo.maxWidth)) {
                return `max-width:${vo.maxWidth}px;`
            }
            else if (vo.autoFitMaxWidth) {
                return `max-width:${vo.triggerWidth}px;`
            }
            return ''
        },

        useBorderRadius: function() {
            //console.log('computed useBorderRadius')

            let vo = this

            if (isNumber(vo.borderRadius)) {
                return `border-radius:${vo.borderRadius}px;`
            }
            return ''
        },

        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return convertColor(vo.textColor)
        },

        useBackgroundColor: function() {
            //console.log('computed useBackgroundColor')

            let vo = this

            return convertColor(vo.backgroundColor)
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            //parseSpace
            let cs = parseSpace(vo.paddingStyle)

            //padding
            let padding = `padding:${cs};`

            return padding
        },

        useShadow: function() {
            //console.log('computed useShadow')

            let vo = this

            //check
            if (!vo.shadow) {
                return ''
            }

            //shadowStyle
            let s = replace(vo.shadowStyle, ';', '')
            if (s !== '') {
                return `box-shadow:${s};`
            }

            return ''
        },

        kind: function() {
            let vo = this
            if (vo.mode === 'popup') {
                return 'click'
            }
            return 'hover'
        },

    },
    methods: {

        funGetDivTrigger: function() {
            let vo = this
            let divTrigger = get(vo, '$refs.divTrigger', null)
            return divTrigger
        },

        funGetDivContent: function() {
            let vo = this
            let divContent = get(vo, '$refs.divContent', null)
            return divContent
        },

        evShow: function(kind, from) {
            let vo = this
            let f = get(vo, 'bp.evShow')
            if (isfun(f)) {
                vo.bp.evShow(kind, from)
            }
        },

        evHide: function(kind, from) {
            let vo = this
            let f = get(vo, 'bp.evHide')
            if (isfun(f)) {
                vo.bp.evHide(kind, from)
            }
        },

        updatePopper: function(msg, from) {
            let vo = this
            let f = get(vo, 'bp.updatePopper')
            if (isfun(f)) {
                vo.bp.updatePopper(msg, from)
            }
        },

        updateValue: function(value, from) {
            let vo = this
            let f = get(vo, 'bp.updateValue')
            if (isfun(f)) {
                vo.bp.updateValue(value, from)
            }
        },

    },
}
</script>

<style scoped>
.WPopperFix[data-popper-reference-hidden] {
    visibility: hidden;
    pointer-events: none;
}
</style>

