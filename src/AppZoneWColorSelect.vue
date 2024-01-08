<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-select</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'default'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick1"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'size'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick2"
                    :size="250"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'colorBlockSize'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick3"
                    :colorBlockSize="24"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'colorBlockBorderWidth'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick4"
                    :colorBlockBorderWidth="3"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'colorBlockBorderColor'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick5"
                    :colorBlockBorderColor="'#000'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'colorTextColor'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick6"
                    :colorTextColor="'#66a'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'colorTextFontSize'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick7"
                    :colorTextFontSize="'0.75rem'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'panelBackgroundColor'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick8"
                    :panelBackgroundColor="'#e5e5e5'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'toolBackgroundColor'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick9"
                    :toolBackgroundColor="'#f2f2f2'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'menuIconLump & menuIconHsva & menuIconEyeDropper'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick10"
                    :menuIconLump="mdiHexagonOutline"
                    :menuIconHsva="mdiGradientHorizontal"
                    :menuIconEyeDropper="mdiRouter"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'menuIconColor & menuIconColorHover & menuIconColorActive'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick11"
                    :menuIconColor="'#ccc'"
                    :menuIconColorHover="'#aaa'"
                    :menuIconColorActive="'rgb(70, 103, 181)'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'menuIconSize'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick12"
                    :menuIconSize="24"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'btnText'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick13"
                    :btnText="'Save'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'btnPaddingStyle'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick14"
                    :btnPaddingStyle="{v:1,h:4}"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'btnTextColor & btnTextColorHover & btnTextColorActive'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick15"
                    :btnTextColor="'#777'"
                    :btnTextColorHover="'#666'"
                    :btnTextColorActive="'#666'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'btnTextFontSize'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick16"
                    :btnTextFontSize="'0.75rem'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'btnBorderRadius'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick17"
                    :btnBorderRadius="0"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'btnBackgroundColor & btnBackgroundColorHover & btnBackgroundColorActive'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick18"
                    :btnBackgroundColor="'#f2f2f2'"
                    :btnBackgroundColorHover="'#fff'"
                    :btnBackgroundColorActive="'#fff'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'menuTextColor & menuTextColorHover & menuTextColorActive'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick19"
                    :menuTextColor="'#888'"
                    :menuTextColorHover="'#666'"
                    :menuTextColorActive="'rgb(70, 103, 181)'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'menuTextFontSize'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick20"
                    :menuTextFontSize="'0.75rem'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'menuBorderRadius'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick21"
                    :menuBorderRadius="0"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'menuBackgroundColor & menuBackgroundColorHover & menuBackgroundColorActive'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick22"
                    :menuBackgroundColor="'transparent'"
                    :menuBackgroundColorHover="'rgba(255,255,255,0.2)'"
                    :menuBackgroundColorActive="'rgba(70, 103, 181, 0.2)'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'inputBorderRadius'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick23"
                    :inputBorderRadius="0"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'inputBorderColor & inputBorderColorHover & inputBorderColorActive'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick24"
                    :inputBorderColor="'#aaa'"
                    :inputBorderColorHover="'#999'"
                    :inputBorderColorActive="'rgb(70, 103, 181)'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="' inputBackgroundColor & inputBackgroundColorHover & inputBackgroundColorActive'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick25"
                    :inputBackgroundColor="'#fff'"
                    :inputBackgroundColorHover="'#f2f2ff'"
                    :inputBackgroundColorActive="'#eeeeff'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'inputTextColor'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick26"
                    :inputTextColor="'#329'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'inputTextFontSize & inputTextWidth & inputTextHeight'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick27"
                    :inputTextFontSize="'0.75rem'"
                    :inputTextWidth="36"
                    :inputTextHeight="16"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'inputLabelColor'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick28"
                    :inputLabelColor="'#f26'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'inputLabelWidth & inputLabelFontSize'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick29"
                    :inputLabelWidth="10"
                    :inputLabelFontSize="'0.75rem'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'barProgHeight'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick30"
                    :barProgHeight="6"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'barProgColor & barProgBackgroundColor & barSliderBackgroundColor & barSliderBackgroundColorHover'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick31"
                    :barProgColor="'#F48FB1'"
                    :barProgBackgroundColor="'#FCE4EC'"
                    :barSliderBackgroundColor="'#E91E63'"
                    :barSliderBackgroundColorHover="'#D81B60'"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'barSliderSize'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick32"
                    :barSliderSize="14"
                ></w-color-select>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'colorBlockBorderColor & colorTextColor & borderColor & borderColorHover & borderColorActive & menuBackgroundColor & menuBackgroundColorHover & menuBackgroundColorActive & menuTextColor & menuTextColorHover & menuTextColorActive & menuTextFontSize & inputBorderColor & inputBorderColorHover & inputBorderColorActive & inputBackgroundColor & inputBackgroundColorHover & inputBackgroundColorActive & inputTextColor & inputLabelColor & barProgColor & barProgBackgroundColor & barSliderBackgroundColor & barSliderBackgroundColorHover & btnTextColor & btnTextColorHover & btnTextColorActive & btnBackgroundColor & btnBackgroundColorHover & btnBackgroundColorActive'"
                ></demolink>

                <div style="display:flex; padding:20px; background:#222;">
                    <w-color-select
                        v-model="WColorSelect.colorPick33"
                        :colorBlockBorderColor="'#888'"
                        :colorTextColor="'#ddd'"
                        :panelBackgroundColor="'#111'"
                        :toolBackgroundColor="'#222'"
                        :menuIconColor="'#666'"
                        :menuIconColorHover="'#777'"
                        :menuIconColorActive="'#ddd'"
                        :borderColor="'#333'"
                        :borderColorHover="'#333'"
                        :borderColorActive="'#444'"
                        :backgroundColor="'#111'"
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
                        :inputTextColor="'#999'"
                        :inputLabelColor="'#888'"
                        :barProgColor="'#888'"
                        :barProgBackgroundColor="'#222'"
                        :barSliderBackgroundColor="'#ccc'"
                        :barSliderBackgroundColorHover="'#ddd'"
                        :btnTextColor="'#eee'"
                        :btnTextColorHover="'#fff'"
                        :btnTextColorActive="'#fff'"
                        :btnBackgroundColor="'#444'"
                        :btnBackgroundColorHover="'#555'"
                        :btnBackgroundColorActive="'#555'"
                    ></w-color-select>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select'"
                    :casename="'not editable'"
                ></demolink>

                <w-color-select
                    v-model="WColorSelect.colorPick34"
                    :editable="false"
                ></w-color-select>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiHexagonOutline, mdiGradientHorizontal, mdiRouter } from '@mdi/js'
import demolink from './components/demolink.vue'
import WColorSelect from './components/WColorSelect.vue'


export default {
    components: {
        demolink,
        WColorSelect,
    },
    props: {
    },
    data: function() {
        return {
            mdiHexagonOutline,
            mdiGradientHorizontal,
            mdiRouter,
            'WColorSelect': {
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
                'colorPick19': 'rgba(121, 51, 255, 0.53)',
                'colorPick20': 'rgba(121, 51, 255, 0.53)',
                'colorPick21': 'rgba(121, 51, 255, 0.53)',
                'colorPick22': 'rgba(121, 51, 255, 0.53)',
                'colorPick23': 'rgba(121, 51, 255, 0.53)',
                'colorPick24': 'rgba(121, 51, 255, 0.53)',
                'colorPick25': 'rgba(121, 51, 255, 0.53)',
                'colorPick26': 'rgba(121, 51, 255, 0.53)',
                'colorPick27': 'rgba(121, 51, 255, 0.53)',
                'colorPick28': 'rgba(121, 51, 255, 0.53)',
                'colorPick29': 'rgba(121, 51, 255, 0.53)',
                'colorPick30': 'rgba(121, 51, 255, 0.53)',
                'colorPick31': 'rgba(121, 51, 255, 0.53)',
                'colorPick32': 'rgba(121, 51, 255, 0.53)',
                'colorPick33': 'rgba(121, 51, 255, 0.53)',
                'colorPick34': 'rgba(121, 51, 255, 0.53)',
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
