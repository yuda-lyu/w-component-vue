<template>
    <div
        :style="`display:inline-block;`"
        :changeValue="changeValue"
    >

        <div :style="`padding-left:10px; margin-bottom:-1px;`">
            <WGroupChipRadio
                :items="methods"
                v-model="methodSelect"
                :paddingStyle="{v:1,h:6}"
                :group="true"
                :groupBorderRadiusStyle="{top:true}"
                :groupShift="0"
                :borderRadius="menuBorderRadius"
                :borderColor="borderColor"
                :borderColorHover="borderColorHover"
                :borderColorActive="borderColorActive"
                :backgroundColor="menuBackgroundColor"
                :backgroundColorHover="menuBackgroundColorHover"
                :backgroundColorActive="menuBackgroundColorActive"
                :textColor="menuTextColor"
                :textColorHover="menuTextColorHover"
                :textColorActive="menuTextColorActive"
                :textFontSize="menuTextFontSize"
                :marginStyle="{}"
                :shadowActive="false"
            ></WGroupChipRadio>
        </div>

        <div :style="`padding:10px; border:1px solid ${useBorderColor}; background:${useBackgroundColor};`">

            <div
                style=""
                v-show="methodSelect.text==='RGBA'"
            >

                <WPanelLabelItem
                    :label="'R'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="cki255"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="rt"
                                @input="(v,err)=>{updateColor(v,err,'r')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="255"
                                :valueStep="1"
                                :valueDecimal="0"
                                :value="r"
                                @input="(v)=>{rt=v;updateColor(v,'','rs')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

                <div style="height:10px;"></div>

                <WPanelLabelItem
                    :label="'G'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="cki255"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="gt"
                                @input="(v,err)=>{updateColor(v,err,'g')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="255"
                                :valueStep="1"
                                :valueDecimal="0"
                                :value="g"
                                @input="(v)=>{gt=v;updateColor(v,'','gs')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

                <div style="height:10px;"></div>

                <WPanelLabelItem
                    :label="'B'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="cki255"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="bt"
                                @input="(v,err)=>{updateColor(v,err,'b')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="255"
                                :valueStep="1"
                                :valueDecimal="0"
                                :value="b"
                                @input="(v)=>{bt=v;updateColor(v,'','bs')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

                <div style="height:10px;"></div>

                <WPanelLabelItem
                    :label="'A'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="ckd1"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="at"
                                @input="(v,err)=>{updateColor(v,err,'a')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="1"
                                :valueStep="0.01"
                                :valueDecimal="2"
                                :value="a"
                                @input="(v)=>{at=v;updateColor(v,'','as')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

            </div>

            <div
                style=""
                v-show="methodSelect.text==='HSVA'"
            >

                <WPanelLabelItem
                    :label="'H'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="cki360"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="ht"
                                @input="(v,err)=>{updateColor(v,err,'h')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="360"
                                :valueStep="1"
                                :valueDecimal="0"
                                :value="h"
                                @input="(v)=>{ht=v;updateColor(v,'','hs')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

                <div style="height:10px;"></div>

                <WPanelLabelItem
                    :label="'S'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="ckd1"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="st"
                                @input="(v,err)=>{updateColor(v,err,'s')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="1"
                                :valueStep="0.01"
                                :valueDecimal="2"
                                :value="s"
                                @input="(v)=>{st=v;updateColor(v,'','ss')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

                <div style="height:10px;"></div>

                <WPanelLabelItem
                    :label="'V'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="ckd1"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="vt"
                                @input="(v,err)=>{updateColor(v,err,'v')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="1"
                                :valueStep="0.01"
                                :valueDecimal="2"
                                :value="v"
                                @input="(vv)=>{vt=vv;updateColor(vv,'','bs')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

                <div style="height:10px;"></div>

                <WPanelLabelItem
                    :label="'A'"
                    :labelFontSize="inputLabelFontSize"
                    :labelWidth="inputLabelWidth"
                    :labelColor="inputLabelColor"
                >
                    <template v-slot:item>
                        <div style="display:flex; align-items:center;">

                            <WText
                                :style="`width:${inputTextWidth}px;`"
                                :type="ckd1"
                                :shadow="false"
                                :bottomLineBorderColor="'transparent'"
                                :bottomLineBorderColorHover="'transparent'"
                                :bottomLineBorderColorFocus="'transparent'"
                                :paddingStyle="{v:0,h:5}"
                                :iconShiftOuter="-10"
                                :borderRadius="inputBorderRadius"
                                :borderColor="inputBorderColor"
                                :borderColorHover="inputBorderColorHover"
                                :borderColorFocus="inputBorderColorActive"
                                :backgroundColor="inputBackgroundColor"
                                :backgroundColorHover="inputBackgroundColorHover"
                                :backgroundColorFocus="inputBackgroundColorActive"
                                :textColor="inputTextColor"
                                :textFontSize="inputTextFontSize"
                                :height="inputTextHeight"
                                v-model="at"
                                @input="(v,err)=>{updateColor(v,err,'a')}"
                            ></WText>

                            <div style="padding-left:5px;"></div>

                            <WSlider
                                :style="`width:${sliderWidth}px;`"
                                :progHeight="barProgHeight"
                                :progColor="barProgColor"
                                :progBackgroundColor="barProgBackgroundColor"
                                :sliderSize="barSliderSize"
                                :sliderBackgroundColor="barSliderBackgroundColor"
                                :sliderBackgroundColorHover="barSliderBackgroundColorHover"
                                :valueMin="0"
                                :valueMax="1"
                                :valueStep="0.01"
                                :valueDecimal="2"
                                :value="a"
                                @input="(v)=>{at=v;updateColor(v,'','as')}"
                            ></WSlider>

                        </div>
                    </template>
                </WPanelLabelItem>

            </div>

        </div>

    </div>
</template>

<script>
import isp0int from 'wsemi/src/isp0int.mjs'
import isp0num from 'wsemi/src/isp0num.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import cint from 'wsemi/src/cint.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'
import WGroupChipRadio from './WGroupChipRadio.vue'
import WPanelLabelItem from './WPanelLabelItem.vue'
import WText from './WText.vue'
import WSlider from './WSlider.vue'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {Number} [size=200] 輸入尺寸數字，代表組件基礎寬度與將自動計算高度，單位px，預設200
 * @vue-prop {String} [borderColor='#ddd'] 輸入邊框顏色字串，預設'#ddd'
 * @vue-prop {String} [borderColorHover='#ccc'] 輸入滑鼠移入時邊框顏色字串，預設'#ccc'
 * @vue-prop {String} [borderColorActive='#777'] 輸入主動模式時邊框顏色字串，預設'#777'
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {Number} [menuBorderRadius=4] 輸入框圓角度數字，單位為px，預設4
 * @vue-prop {String} [menuBackgroundColor='#fff'] 輸入選單背景顏色字串，預設'#fff'
 * @vue-prop {String} [menuBackgroundColorHover='#f9f9f9'] 輸入滑鼠移入時選單背景顏色字串，預設'#f9f9f9'
 * @vue-prop {String} [menuBackgroundColorActive='#f2f2f2'] 輸入主動模式時選單背景顏色字串，預設'#f2f2f2'
 * @vue-prop {String} [menuTextColor='#444'] 輸入選單文字顏色字串，預設'#444'
 * @vue-prop {String} [menuTextColorHover='#222'] 輸入滑鼠移入時選單文字顏色字串，預設'#222'
 * @vue-prop {String} [menuTextColorActive='#000'] 輸入主動模式時選單文字顏色字串，預設'#000'
 * @vue-prop {String} [menuTextFontSize='0.8rem'] 輸入選單文字字型大小字串，預設'0.8rem'
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
 */
export default {
    components: {
        WGroupChipRadio,
        WPanelLabelItem,
        WText,
        WSlider,
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
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        menuBorderRadius: {
            type: Number,
            default: 4,
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
    },
    data: function() {
        return {

            methods: [
                {
                    text: 'RGBA',
                    // icon: null,
                },
                {
                    text: 'HSVA',
                    // icon: null,
                },
            ],
            methodSelect: {
                text: 'RGBA',
                // icon: null,
            },

            lock: false,

            valueTrans: null,

            r: 255,
            g: 255,
            b: 255,
            h: 360,
            s: 1,
            v: 1,
            a: 1,

            rt: 255,
            gt: 255,
            bt: 255,
            ht: 360,
            st: 1,
            vt: 1,
            at: 1,

        }
    },
    computed: {

        changeValue: function() {
            let vo = this

            vo.valueTrans = convertColor(vo.value)

            let rgba = oc.toRgba(vo.valueTrans)
            // console.log('toRgba', rgba)

            let hsva = oc.toHsva(vo.valueTrans)
            // console.log('toHsva', hsva)

            vo.r = rgba.r
            vo.rt = rgba.r

            vo.g = rgba.g
            vo.gt = rgba.g

            vo.b = rgba.b
            vo.bt = rgba.b

            vo.a = rgba.a
            vo.at = rgba.a

            vo.h = hsva.h
            vo.ht = hsva.h

            vo.s = hsva.s
            vo.st = hsva.s

            vo.v = hsva.v
            vo.vt = hsva.v

            return ''
        },

        sliderWidth: function() {
            let vo = this
            let w = vo.size - vo.inputTextWidth - vo.inputLabelWidth - 13
            w = Math.max(w, 0)
            return w
        },

        useBorderColor: function() {
            let vo = this
            return convertColor(vo.borderColor)
        },

        useBackgroundColor: function() {
            let vo = this
            return convertColor(vo.backgroundColor)
        },

    },
    methods: {

        cki255: function(v) {
            // console.log('cki255', v)
            let b = isp0int(v)
            if (!b) {
                return 0
            }
            let v0 = v
            v = cint(v)
            if (v < 0) {
                v = 0
            }
            else if (v > 255) {
                v = 255
            }
            if (v === cint(v0)) {
                return v0
            }
            return v
        },

        cki360: function(v) {
            // console.log('cki360', v)
            let b = isp0int(v)
            if (!b) {
                return 0
            }
            let v0 = v
            v = cint(v)
            if (v < 0) {
                v = 0
            }
            else if (v > 360) {
                v = 360
            }
            if (v === cint(v0)) {
                return v0
            }
            return v
        },

        ckd1: function(v) {
            // console.log('ckd1', v)
            let b = isp0num(v)
            if (!b) {
                return 0
            }
            let v0 = v
            v = cdbl(v)
            if (v < 0) {
                v = 0
            }
            else if (v > 1) {
                v = 1
            }
            if (v === cdbl(v0)) {
                return v0
            }
            return v
        },

        updateColorCore: function() {
            let vo = this

            let modifyRgba = false
            let modifyHsva = false

            if (true) {
                let rt = cint(vo.rt)
                if (vo.r !== rt) {
                    vo.r = rt
                    modifyRgba = true
                }
            }

            if (true) {
                let gt = cint(vo.gt)
                if (vo.g !== gt) {
                    vo.g = gt
                    modifyRgba = true
                }
            }

            if (true) {
                let bt = cint(vo.bt)
                if (vo.b !== bt) {
                    vo.b = bt
                    modifyRgba = true
                }
            }

            if (true) {
                let at = cdbl(vo.at)
                if (vo.a !== at) {
                    vo.a = at
                    modifyRgba = true
                }
            }

            if (true) {
                let ht = cint(vo.ht)
                if (vo.h !== ht) {
                    vo.h = ht
                    modifyHsva = true
                }
            }

            if (true) {
                let st = cdbl(vo.st)
                if (vo.s !== st) {
                    vo.s = st
                    modifyHsva = true
                }
            }

            if (true) {
                let vt = cdbl(vo.vt)
                if (vo.v !== vt) {
                    vo.v = vt
                    modifyHsva = true
                }
            }

            let c = null
            // console.log('modifyRgba', modifyRgba)
            if (modifyRgba) {
                c = {
                    r: vo.r,
                    g: vo.g,
                    b: vo.b,
                    a: vo.a,
                }
            }
            else if (modifyHsva) {
                c = {
                    h: vo.h,
                    s: vo.s,
                    v: vo.v,
                    a: vo.a,
                }
            }

            if (iseobj(c)) {
                c = oc.toRgbaString(c)
                // console.log('c', c)
                vo.valueTrans = c
                vo.$emit('input', c)
            }

        },

        updateColor: function(c, err, from) {
            // console.log('updateColor', c, err, from)

            let vo = this

            //延遲偵測, 因input內有自動偵測與變更機制, 得要延遲再偵測修正
            setTimeout(() => {
                vo.updateColorCore()
            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
