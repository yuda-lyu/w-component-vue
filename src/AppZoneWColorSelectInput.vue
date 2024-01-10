<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-select-input</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick1}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick1"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'size'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick2};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick2}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick2"
                    :size="150"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'borderColor & borderColorHover & borderColorActive'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick3};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick3}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick3"
                    :borderColor="'#ccc'"
                    :borderColorHover="'#b2b2b2'"
                    :borderColorActive="'#999'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'menuBorderRadius'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick4};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick4}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick4"
                    :menuBorderRadius="0"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'menuBackgroundColor & menuBackgroundColorHover & menuBackgroundColorActive'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick5};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick5}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick5"
                    :menuBackgroundColor="'#f2f2ff'"
                    :menuBackgroundColorHover="'#e2e2ee'"
                    :menuBackgroundColorActive="'#ddf'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'menuTextColor & menuTextColorHover & menuTextColorActive'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick6};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick6}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick6"
                    :menuTextColor="'#666'"
                    :menuTextColorHover="'#444'"
                    :menuTextColorActive="'#222'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'menuTextFontSize'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick7};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick7}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick7"
                    :menuTextFontSize="'0.75rem'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'inputBorderRadius'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick8};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick8}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick8"
                    :inputBorderRadius="0"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'inputBorderColor & inputBorderColorHover & inputBorderColorActive'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick9};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick9}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick9"
                    :inputBorderColor="'#aaa'"
                    :inputBorderColorHover="'#999'"
                    :inputBorderColorActive="'#888'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="' inputBackgroundColor & inputBackgroundColorHover & inputBackgroundColorActive'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick10};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick10}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick10"
                    :inputBackgroundColor="'#fff'"
                    :inputBackgroundColorHover="'#f2f2ff'"
                    :inputBackgroundColorActive="'#eeeeff'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'inputTextColor'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick11};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick11}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick11"
                    :inputTextColor="'#329'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'inputTextFontSize & inputTextWidth & inputTextHeight'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick12};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick12}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick12"
                    :inputTextFontSize="'0.75rem'"
                    :inputTextWidth="36"
                    :inputTextHeight="16"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'inputLabelColor'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick13};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick13}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick13"
                    :inputLabelColor="'#f26'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'inputLabelWidth & inputLabelFontSize'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick14};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick14}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick14"
                    :inputLabelWidth="10"
                    :inputLabelFontSize="'0.75rem'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'barProgHeight'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick15};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick15}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick15"
                    :barProgHeight="6"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'barProgColor & barProgBackgroundColor & barSliderBackgroundColor & barSliderBackgroundColorHover'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick16};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick16}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick16"
                    :barProgColor="'#F48FB1'"
                    :barProgBackgroundColor="'#FCE4EC'"
                    :barSliderBackgroundColor="'#E91E63'"
                    :barSliderBackgroundColorHover="'#D81B60'"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'barSliderSize'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick17};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick17}}</div>
                </div>

                <w-color-select-input
                    v-model="WColorSelectInput.colorPick17"
                    :barSliderSize="14"
                ></w-color-select-input>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-input'"
                    :casename="'menuBorderRadius & borderColor & borderColorHover & borderColorActive & menuBackgroundColor & menuBackgroundColorHover & menuBackgroundColorActive & menuTextColor & menuTextColorHover & menuTextColorActive & menuTextFontSize & inputBorderColor & inputBorderColorHover & inputBorderColorActive & inputBackgroundColor & inputBackgroundColorHover & inputBackgroundColorActive & inputTextColor & inputLabelColor & barProgColor & barProgBackgroundColor & barSliderBackgroundColor & barSliderBackgroundColorHover'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectInput.colorPick18};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectInput.colorPick18}}</div>
                </div>

                <div style="padding:20px; background:#222;">
                    <w-color-select-input
                        v-model="WColorSelectInput.colorPick18"
                        :borderColor="'#444'"
                        :borderColorHover="'#666'"
                        :borderColorActive="'#888'"
                        :backgroundColor="'#111'"
                        :menuBorderRadius="5"
                        :menuBackgroundColor="'#111'"
                        :menuBackgroundColorHover="'#222'"
                        :menuBackgroundColorActive="'#333'"
                        :menuTextColor="'#b2b2b2'"
                        :menuTextColorHover="'#ccc'"
                        :menuTextColorActive="'#ddd'"
                        :menuTextFontSize="'0.75rem'"
                        :inputBorderColor="'#444'"
                        :inputBorderColorHover="'#555'"
                        :inputBorderColorActive="'#666'"
                        :inputBackgroundColor="'#000'"
                        :inputBackgroundColorHover="'#111'"
                        :inputBackgroundColorActive="'#222'"
                        :inputTextColor="'#ddd'"
                        :inputLabelColor="'#b9b9b9'"
                        :barProgColor="'#0097A7'"
                        :barProgBackgroundColor="'#333'"
                        :barSliderBackgroundColor="'#4DD0E1'"
                        :barSliderBackgroundColorHover="'#80DEEA'"
                    ></w-color-select-input>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorSelectInput from './components/WColorSelectInput.vue'


export default {
    components: {
        demolink,
        WColorSelectInput,
    },
    props: {
    },
    data: function() {
        return {
            'WColorSelectInput': {
                'colorPick1': 'rgba(121, 51, 255, 0.53)',
                'colorPick2': 'rgba(121, 51, 255, 0.53)',
                'colorPick3': 'rgba(121, 51, 255, 0.53)',
                'colorPick4': 'rgba(121, 51, 255, 0.53)',
                'colorPick5': 'rgba(121, 51, 255, 0.53)',
                'colorPick6': 'rgba(121, 51, 255, 0.53)',
                'colorPick7': 'rgba(121, 51, 255, 0.53)',
                'colorPick8': 'rgba(121, 51, 255, 0.53)',
                'colorPick9': 'rgba(121, 51, 255, 0.53)',
                'colorPick10': 'rgba(121, 51, 255, 0.53)',
                'colorPick11': 'rgba(121, 51, 255, 0.53)',
                'colorPick12': 'rgba(121, 51, 255, 0.53)',
                'colorPick13': 'rgba(121, 51, 255, 0.53)',
                'colorPick14': 'rgba(121, 51, 255, 0.53)',
                'colorPick15': 'rgba(121, 51, 255, 0.53)',
                'colorPick16': 'rgba(121, 51, 255, 0.53)',
                'colorPick17': 'rgba(121, 51, 255, 0.53)',
                'colorPick18': 'rgba(121, 51, 255, 0.53)',
            },
            'actions': [
            ],
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>
