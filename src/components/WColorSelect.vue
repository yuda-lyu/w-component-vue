<template>
    <WPopup
        :minWidth="null"
        :maxWidth="null"
        :autoFitMinWidth="false"
        :autoFitMaxWidth="false"
        :placementDist="popupPlacementDist"
        :editable="editable"
        v-model="show"
        :changeValue="changeValue"
        v-domresize
        @domresize="resize"
    >

        <template v-slot:trigger>

            <div style="">
                <!-- 盡量不要讓display:flex暴露至外層 -->
                <div
                    style="display:flex; align-items:center; cursor:pointer; outline:none;"
                    @click="clickColor"
                >

                    <div :style="`border:${colorBlockBorderWidth}px solid ${useColorBlockBorderColor}; width:${colorBlockSize}px; height:${colorBlockSize}px; background:${valueOri};`"></div>

                    <div :style="`padding-left:5px;`"></div>

                    <div :style="`font-size:${colorTextFontSize}; color:${useColorTextColor};`">
                        {{valueOri}}
                    </div>

                </div>
            </div>

        </template>

        <template v-slot:content>

            <div
                ref="ct"
                :style="`background:${usePanelBackgroundColor}; ${usePanelOverflow}`"
                v-domresize
                @domresize="resizeContent"
            >

                <!-- 上方選單區 -->
                <div :style="`display:flex; padding:${space}px; border-bottom:1px solid ${useBorderColor}; background:${useToolBackgroundColor};`">

                    <div style="">
                        <WIcon
                            style="cursor:pointer;"
                            :icon="menuIconHsva"
                            :color="typeTrans==='HSVA'?menuIconColorActive:menuIconColor"
                            :colorHover="typeTrans==='HSVA'?menuIconColorActive:menuIconColorHover"
                            :size="menuIconSize"
                            @click="typeTrans='HSVA';$emit('update:type','HSVA')"
                        ></WIcon>
                    </div>

                    <div style="">
                        <WIcon
                            style="cursor:pointer;"
                            :icon="menuIconLump"
                            :color="typeTrans==='LUMP'?menuIconColorActive:menuIconColor"
                            :colorHover="typeTrans==='LUMP'?menuIconColorActive:menuIconColorHover"
                            :size="menuIconSize"
                            @click="typeTrans='LUMP';$emit('update:type','LUMP')"
                        ></WIcon>
                    </div>

                    <div style="" v-if="hasEyeDropper">
                        <WIcon
                            :class="{'icon-spinner':loadingEyeDropper}"
                            style="cursor:pointer;"
                            :icon="loadingEyeDropper?mdiLoading:menuIconEyeDropper"
                            :color="loadingEyeDropper?menuIconColor:menuIconColorActive"
                            :colorHover="loadingEyeDropper?menuIconColor:menuIconColorActive"
                            :size="menuIconSize"
                            @click="openEyeDropper"
                        ></WIcon>
                    </div>

                    <div :style="`width:100%;`"></div>

                    <div
                        ref="mtb"
                        :style="`display:flex; align-items:center;`"
                    >

                        <div :style="`display:flex; align-items:center; border:${colorBlockBorderWidth}px solid ${useColorBlockBorderColor};`">

                            <div :style="`width:${colorBlockSize}px; min-width:${colorBlockSize}px; height:${colorBlockSize}px; background:${valueOri};`"></div>

                            <div :style="`width:${colorBlockSize}px; min-width:${colorBlockSize}px; height:${colorBlockSize}px; background:${valueNew};`"></div>

                        </div>

                        <div :style="`padding-left:${space}px;`"></div>

                        <WButtonChip
                            :text="btnText"
                            :rippleColor="btnRippleColor"
                            :paddingStyle="btnPaddingStyle"
                            :textColor="btnTextColor"
                            :textColorHover="btnTextColorHover"
                            :textColorActive="btnTextColorActive"
                            :textFontSize="btnTextFontSize"
                            :borderRadius="btnBorderRadius"
                            _borderColor="btnBorderColor"
                            _borderColorHover="btnBorderColorHover"
                            _borderColorActive="btnBorderColorActive"
                            :backgroundColor="btnBackgroundColor"
                            :backgroundColorHover="btnBackgroundColorHover"
                            :backgroundColorActive="btnBackgroundColorActive"
                            :shadow="btnShadow"
                            @click="clickColor"
                        ></WButtonChip>

                    </div>

                </div>

                <div :style="`padding:${space}px;`">

                    <!-- 顏色選擇區 -->
                    <div
                        style="display:flex;"
                        v-domresize
                        @domresize="resizeSelectPanel"
                    >
                        <WColorSelectPanel
                            :type="typeTrans"
                            :size="size"
                            :space="0"
                            :backgroundColor="'transparent'"
                            :menuIconLump="menuIconLump"
                            :menuIconHsva="menuIconHsva"
                            :menuIconColor="menuIconColor"
                            :menuIconColorHover="menuIconColorHover"
                            :menuIconColorActive="menuIconColorActive"
                            :menuIconSize="menuIconSize"
                            v-model="valueNew"
                        ></WColorSelectPanel>
                    </div>

                    <div :style="`height:${space}px;`"></div>

                    <!-- 顏色數值區 -->
                    <div
                        style="display:flex;"
                        v-domresize
                        @domresize="resizeSelectInput"
                    >
                        <WColorSelectInput
                            :size="Math.max(size-22,0)"
                            :backgroundColor="'transparent'"
                            :borderColor="borderColor"
                            :borderColorHover="borderColorHover"
                            :borderColorActive="borderColorActive"
                            :menuBorderRadius="menuBorderRadius"
                            :menuBackgroundColor="menuBackgroundColor"
                            :menuBackgroundColorHover="menuBackgroundColorHover"
                            :menuBackgroundColorActive="menuBackgroundColorActive"
                            :menuTextColor="menuTextColor"
                            :menuTextColorHover="menuTextColorHover"
                            :menuTextColorActive="menuTextColorActive"
                            :menuTextFontSize="menuTextFontSize"
                            :inputBorderRadius="inputBorderRadius"
                            :inputBorderColor="inputBorderColor"
                            :inputBorderColorHover="inputBorderColorHover"
                            :inputBorderColorActive="inputBorderColorActive"
                            :inputBackgroundColor="inputBackgroundColor"
                            :inputBackgroundColorHover="inputBackgroundColorHover"
                            :inputBackgroundColorActive="inputBackgroundColorActive"
                            :inputTextColor="inputTextColor"
                            :inputTextFontSize="inputTextFontSize"
                            :inputTextWidth="inputTextWidth"
                            :inputTextHeight="inputTextHeight"
                            :inputLabelWidth="inputLabelWidth"
                            :inputLabelColor="inputLabelColor"
                            :inputLabelFontSize="inputLabelFontSize"
                            :barProgHeight="barProgHeight"
                            :barProgColor="barProgColor"
                            :barProgBackgroundColor="barProgBackgroundColor"
                            :barSliderSize="barSliderSize"
                            :barSliderBackgroundColor="barSliderBackgroundColor"
                            :barSliderBackgroundColorHover="barSliderBackgroundColorHover"
                            v-model="valueNew"
                        ></WColorSelectInput>
                    </div>

                </div>

            </div>

        </template>

    </WPopup>
</template>

<script>
import { mdiHexagonSlice6, mdiViewParallel, mdiEyedropper, mdiLoading } from '@mdi/js'
import get from 'lodash-es/get'
import isfun from 'wsemi/src/isfun.mjs'
import domGetBoudRect from 'wsemi/src/domGetBoudRect.mjs'
import convertColor from '../js/convertColor.mjs'
import domResize from '../js/domResize.mjs'
import WPopup from './WPopup.vue'
import WColorSelectPanel from './WColorSelectPanel.vue'
import WColorSelectInput from './WColorSelectInput.vue'
import WButtonChip from './WButtonChip.vue'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {Number} [size=200] 輸入尺寸數字，代表組件基礎寬度與將自動計算高度，單位px，預設200
 * @vue-prop {Number} [space=10] 輸入子組件間距數字，單位px，預設10
 * @vue-prop {Number} [colorBlockSize=20] 輸入色塊長與寬度數字，單位px，預設20
 * @vue-prop {Number} [colorBlockBorderWidth=1] 輸入色塊框線寬度數字，單位px，預設1
 * @vue-prop {String} [colorBlockBorderColor='#ddd'] 輸入色塊框線顏色字串，預設'#ddd'
 * @vue-prop {String} [colorTextColor='#000'] 輸入當前RGBA顏色文字顏色字串，預設'#000'
 * @vue-prop {String} [colorTextFontSize='0.8rem'] 輸入當前RGBA顏色文字字型大小字串，預設'0.8rem'
 * @vue-prop {String} [panelBackgroundColor='#fff'] 輸入彈窗背景顏色字串，預設'#fff'
 * @vue-prop {String} [toolBackgroundColor='#f5f5f5'] 輸入彈窗背景顏色字串，預設'#f5f5f5'
 * @vue-prop {String} [menuIconLump=mdiHexagonSlice6] 輸入選單LUMP模式圖標字串，預設mdiHexagonSlice6
 * @vue-prop {String} [menuIconHsva=mdiViewParallel] mdiViewParallel
 * @vue-prop {String} [menuIconEyeDropper=mdiEyedropper] 輸入取色滴管圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設使用mdi的圖標(mdiEyedropper)
 * @vue-prop {String} [menuIconColor='#aaa'] 輸入選單圖標顏色字串，預設'#aaa'
 * @vue-prop {String} [menuIconColorHover='#999'] 輸入滑鼠移入時選單圖標顏色字串，預設'#999'
 * @vue-prop {String} [menuIconColorActive='#666'] 輸入主動模式時選單圖標顏色字串，預設'#666'
 * @vue-prop {Number} [menuIconSize=20] 輸入選單圖標尺寸數字，單位為px，預設20
 * @vue-prop {String} [borderColor='#ddd'] 輸入邊框顏色字串，預設'#ddd'
 * @vue-prop {String} [borderColorHover='#ccc'] 輸入滑鼠移入時邊框顏色字串，預設'#ccc'
 * @vue-prop {String} [borderColorActive='#777'] 輸入主動模式時邊框顏色字串，預設'#777'
 * @vue-prop {Number} [menuBorderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {String} [menuTextColor='#444'] 輸入選單文字顏色字串，預設'#444'
 * @vue-prop {String} [menuTextColorHover='#222'] 輸入滑鼠移入時選單文字顏色字串，預設'#222'
 * @vue-prop {String} [menuTextColorActive='#000'] 輸入主動模式時選單文字顏色字串，預設'#000'
 * @vue-prop {String} [menuTextFontSize='0.8rem'] 輸入選單文字字型大小字串，預設'0.8rem'
 * @vue-prop {String} [menuBackgroundColor='#fff'] 輸入選單背景顏色字串，預設'#fff'
 * @vue-prop {String} [menuBackgroundColorHover='#f9f9f9'] 輸入滑鼠移入時選單背景顏色字串，預設'#f9f9f9'
 * @vue-prop {String} [menuBackgroundColorActive='#f2f2f2'] 輸入主動模式時選單背景顏色字串，預設'#f2f2f2'
 * @vue-prop {Number} [inputBorderRadius=4] 輸入顏色數字輸入區邊框圓角度數字，單位為px，預設4
 * @vue-prop {String} [inputBorderColor='#ccc'] 輸入顏色數字輸入區邊框顏色字串，預設'#ccc'
 * @vue-prop {String} [inputBorderColorHover='#b5b5b5'] 輸入滑鼠移入時顏色數字輸入區邊框顏色字串，預設'#b5b5b5'
 * @vue-prop {String} [inputBorderColorActive='#aaa'] 輸入主動模式時顏色數字輸入區邊框顏色字串，預設'#aaa'
 * @vue-prop {String} [inputBackgroundColor='#fff'] 輸入顏色數字輸入區背景顏色字串，預設'#fff'
 * @vue-prop {String} [inputBackgroundColorHover='#fafafa'] 輸入滑鼠移入時顏色數字輸入區背景顏色字串，預設'#fafafa'
 * @vue-prop {String} [inputBackgroundColorActive='#f2f2f2'] 輸入主動模式時顏色數字輸入區背景顏色字串，預設'#f2f2f2'
 * @vue-prop {String} [inputTextColor='#000'] 輸入顏色數字輸入區文字顏色字串，預設'#000'
 * @vue-prop {String} [inputTextFontSize='0.8rem'] 輸入顏色數字輸入區文字字型大小字串，預設'0.8rem'
 * @vue-prop {Number} [inputTextWidth=38] 輸入顏色數字輸入區寬度數字，單位為px，預設38
 * @vue-prop {Number} [inputTextHeight=18] 輸入顏色數字輸入區高度數字，單位為px，預設18
 * @vue-prop {Number} [inputLabelWidth=12] 輸入顏色數字輸入區標題寬度數字，單位為px，預設12
 * @vue-prop {String} [inputLabelColor='#666'] 輸入文字顏色字串，預設'#666'
 * @vue-prop {String} [inputLabelFontSize='0.8rem'] 輸入文字字型大小字串，預設'0.8rem'
 * @vue-prop {Number} [barProgHeight=4] 輸入值域條高度數字，單位為px，預設4
 * @vue-prop {String} [barProgColor='#74a4d9'] 輸入值域條顏色字串，預設'#74a4d9'
 * @vue-prop {String} [barProgBackgroundColor='#eee'] 輸入值域條背景顏色字串，預設'#eee'
 * @vue-prop {Number} [barSliderSize=10] 輸入拖曳球尺寸數字，單位為px，預設10
 * @vue-prop {String} [barSliderBackgroundColor='#1565C0'] 輸入拖曳球背景顏色字串，預設'#1565C0'
 * @vue-prop {String} [barSliderBackgroundColorHover='#1976D2'] 輸入滑鼠移入時拖曳球背景顏色字串，預設'#1976D2'
 * @vue-prop {Number} [popupPlacementDist=5] 輸入彈窗距離觸發元素距離數字，單位為px，預設5
 * @vue-prop {String} [btnText='OK'] 輸入確認按鈕之文字字串，預設'OK'
 * @vue-prop {String} [btnRippleColor='rgba(255,255,255,0.4)'] 輸入確認按鈕之ripple效果顏色字串，預設'rgba(255,255,255,0.4)'
 * @vue-prop {Object} [btnPaddingStyle={v:1,h:5}] 輸入確認按鈕之內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:1,h:5}
 * @vue-prop {String} [btnTextColor='#000'] 輸入確認按鈕之文字顏色字串，預設'#000'
 * @vue-prop {String} [btnTextColorHover='#222'] 輸入滑鼠移入時確認按鈕之文字顏色字串，預設'#222'
 * @vue-prop {String} [btnTextColorActive='#222'] 輸入主動模式時確認按鈕之文字顏色字串，預設'#222'
 * @vue-prop {String} [btnTextFontSize='0.8rem'] 輸入確認按鈕之文字字型大小字串，預設'0.8rem'
 * @vue-prop {Number} [btnBorderRadius=4] 輸入確認按鈕之框圓角度數字，單位為px，預設4
 * @vue-prop {String} [btnBackgroundColor='rgb(241,241,241)'] 輸入確認按鈕之背景顏色字串，預設'rgb(241,241,241)'
 * @vue-prop {String} [btnBackgroundColorHover='rgb(236,236,236)'] 輸入滑鼠移入時確認按鈕之背景顏色字串，預設'rgb(236,236,236)'
 * @vue-prop {String} [btnBackgroundColorActive='rgb(236,236,236)'] 輸入主動模式時確認按鈕之背景顏色字串，預設'rgb(236,236,236)'
 * @vue-prop {Boolean} [btnShadow=true] 輸入確認按鈕之是否顯示陰影布林值，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WPopup,
        WColorSelectPanel,
        WColorSelectInput,
        WButtonChip,
        WIcon,
    },
    props: {
        value: {
            type: String,
            default: '#FFFFFF',
        },
        size: {
            type: Number,
            default: 200,
        },
        space: {
            type: Number,
            default: 10,
        },
        colorBlockSize: {
            type: Number,
            default: 20,
        },
        colorBlockBorderWidth: {
            type: Number,
            default: 1,
        },
        colorBlockBorderColor: {
            type: String,
            default: '#ddd',
        },
        colorTextColor: {
            type: String,
            default: '#000',
        },
        colorTextFontSize: {
            type: String,
            default: '0.8rem',
        },
        panelBackgroundColor: {
            type: String,
            default: '#fff',
        },
        toolBackgroundColor: {
            type: String,
            default: '#f5f5f5',
        },
        menuIconLump: {
            type: String,
            default: mdiHexagonSlice6,
        },
        menuIconHsva: {
            type: String,
            default: mdiViewParallel,
        },
        menuIconEyeDropper: {
            type: String,
            default: mdiEyedropper,
        },
        menuIconColor: {
            type: String,
            default: '#aaa',
        },
        menuIconColorHover: {
            type: String,
            default: '#999',
        },
        menuIconColorActive: {
            type: String,
            default: '#666',
        },
        menuIconSize: {
            type: Number,
            default: 20,
        },

        borderColor: {
            type: String,
            default: '#ddd',
        },
        borderColorHover: {
            type: String,
            default: '#ccc',
        },
        borderColorActive: {
            type: String,
            default: '#777',
        },
        menuBorderRadius: {
            type: Number,
            default: 4,
        },
        menuTextColor: {
            type: String,
            default: '#444',
        },
        menuTextColorHover: {
            type: String,
            default: '#222',
        },
        menuTextColorActive: {
            type: String,
            default: '#000',
        },
        menuTextFontSize: {
            type: String,
            default: '0.8rem',
        },
        menuBackgroundColor: {
            type: String,
            default: '#fff',
        },
        menuBackgroundColorHover: {
            type: String,
            default: '#f9f9f9',
        },
        menuBackgroundColorActive: {
            type: String,
            default: '#f2f2f2',
        },
        inputBorderRadius: {
            type: Number,
            default: 4,
        },
        inputBorderColor: {
            type: String,
            default: '#ccc',
        },
        inputBorderColorHover: {
            type: String,
            default: '#b5b5b5',
        },
        inputBorderColorActive: {
            type: String,
            default: '#aaa',
        },
        inputBackgroundColor: {
            type: String,
            default: '#fff',
        },
        inputBackgroundColorHover: {
            type: String,
            default: '#fafafa',
        },
        inputBackgroundColorActive: {
            type: String,
            default: '#f2f2f2',
        },
        inputTextColor: {
            type: String,
            default: '#000',
        },
        inputTextFontSize: {
            type: String,
            default: '0.8rem',
        },
        inputTextWidth: {
            type: Number,
            default: 38,
        },
        inputTextHeight: {
            type: Number,
            default: 18,
        },
        inputLabelWidth: {
            type: Number,
            default: 12,
        },
        inputLabelColor: {
            type: String,
            default: '#666',
        },
        inputLabelFontSize: {
            type: String,
            default: '0.8rem',
        },
        barProgHeight: {
            type: Number,
            default: 4,
        },
        barProgColor: {
            type: String,
            default: '#74a4d9',
        },
        barProgBackgroundColor: {
            type: String,
            default: '#eee',
        },
        barSliderSize: {
            type: Number,
            default: 10,
        },
        barSliderBackgroundColor: {
            type: String,
            default: '#1565C0',
        },
        barSliderBackgroundColorHover: {
            type: String,
            default: '#1976D2',
        },
        popupPlacementDist: {
            type: Number,
            default: 5,
        },
        btnText: {
            type: String,
            default: 'OK',
        },
        btnRippleColor: {
            type: String,
            default: 'rgba(255,255,255,0.4)',
        },
        btnPaddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 1,
                    h: 5,
                }
            },
        },
        btnTextColor: {
            type: String,
            default: '#000',
        },
        btnTextColorHover: {
            type: String,
            default: '#222',
        },
        btnTextColorActive: {
            type: String,
            default: '#222',
        },
        btnTextFontSize: {
            type: String,
            default: '0.8rem',
        },
        btnBorderRadius: {
            type: Number,
            default: 4,
        },
        btnBackgroundColor: {
            type: String,
            default: 'rgb(241,241,241)',
        },
        btnBackgroundColorHover: {
            type: String,
            default: 'rgb(236,236,236)',
        },
        btnBackgroundColorActive: {
            type: String,
            default: 'rgb(236,236,236)',
        },
        btnShadow: {
            type: Boolean,
            default: true,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mdiLoading,

            show: false,

            typeTrans: 'HSVA',

            loadingEyeDropper: false,

            layoutType: 'horizontal',
            layoutOverflowY: false,
            layoutMinY: 300,
            layoutMaxY: 300,

            selectPanelHeight: 0,
            selectInputHeight: 0,

            valueOri: null,
            valueNew: null,

        }
    },
    computed: {

        changeValue: function() {
            let vo = this
            vo.valueOri = convertColor(vo.value)
            vo.valueNew = vo.valueOri
            return ''
        },

        hasEyeDropper: function() {
            // let vo = this
            let b = isfun(window.EyeDropper)
            // console.log('window.EyeDropper', window.EyeDropper)
            return b
        },

        useColorBlockBorderColor: function() {
            let vo = this
            return convertColor(vo.colorBlockBorderColor)
        },

        useColorTextColor: function() {
            let vo = this
            return convertColor(vo.colorTextColor)
        },

        usePanelBackgroundColor: function() {
            let vo = this
            return convertColor(vo.panelBackgroundColor)
        },

        useToolBackgroundColor: function() {
            let vo = this
            return convertColor(vo.toolBackgroundColor)
        },

        useBorderColor: function() {
            let vo = this
            return convertColor(vo.borderColor)
        },

        usePanelOverflow: function() {
            let vo = this
            let of = `overflow-y:auto; min-height:${vo.layoutMinY}px;`
            if (vo.layoutOverflowY) {
                of += `max-height:${vo.layoutMaxY}px;`
            }
            return of
        },

    },
    methods: {

        resize: function(msg) {
            // console.log('methods resize', msg)

            let vo = this

            //check
            if (!vo.show) {
                return
            }

            let w = get(msg, 'snew.windowWidth', 0)
            // let h = get(msg, 'snew.windowHeight', 0)
            // console.log('w', w, 'h', h, b)

            //layoutType
            let b = w >= 2 * (vo.size + 20) + 3 * vo.space //20為組件設定, 不提供外部更改故可直接給
            vo.layoutType = b ? 'horizontal' : 'vertical'
            // console.log('layoutType', vo.layoutType)

        },

        resizeContent: function(msg) {
            // console.log('methods resizeContent', msg)

            let vo = this

            //check
            if (!vo.show) {
                return
            }

            // let w = get(msg, 'snew.windowWidth', 0)
            let h = get(msg, 'snew.windowHeight', 0)

            try {

                // console.log('vo.$refs.ct', vo.$refs.ct)
                let rt = domGetBoudRect(vo.$refs.ct)
                // console.log('rt', rt)

                //hc, 概估組件size=200時高度
                let hc = 500

                //layoutOverflowY
                vo.layoutOverflowY = rt.top + hc > h
                // console.log('layoutOverflowY', vo.layoutOverflowY)

                //layoutMaxY
                vo.layoutMaxY = Math.max(h - rt.top - 30, vo.layoutMinY) //30是概估與底部的留白距離
                // console.log('layoutMaxY', vo.layoutMaxY)

            }
            catch (err) {}

        },

        resizeSelectPanel: function(msg) {
            // console.log('methods resizeSelectPanel', msg)

            let vo = this

            //check
            if (!vo.show) {
                return
            }

            let h = get(msg, 'snew.clientHeight', 0)

            //save
            vo.selectPanelHeight = h

        },

        resizeSelectInput: function(msg) {
            // console.log('methods resizeSelectInput', msg)

            let vo = this

            //check
            if (!vo.show) {
                return
            }

            let h = get(msg, 'snew.clientHeight', 0)

            //save
            vo.selectInputHeight = h

        },

        openEyeDropper: function() {
            // console.log('methods openEyeDropper')

            let vo = this

            //check
            if (!vo.hasEyeDropper) {
                return
            }

            vo.loadingEyeDropper = true

            let eyeDropper = new window.EyeDropper()
            eyeDropper
                .open()
                .then((res) => {
                    // console.log('res', res)
                    let hex = get(res, 'sRGBHex', '#fff')
                    vo.valueNew = hex
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    vo.loadingEyeDropper = false
                })

        },

        clickColor: function() {
            // console.log('methods clickColor')

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //emit
            vo.$emit('input', vo.valueNew)

            //hide
            vo.show = false

        },

    },
}
</script>

<style scoped>
.icon-spinner {
    animation: spin-animation 1.5s infinite;
    display: inline-block;
}
@keyframes spin-animation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}
</style>
