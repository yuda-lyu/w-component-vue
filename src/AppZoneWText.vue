<template>
    <div>


        <div class="head1">w-text</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text v-model="WText.text"></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :textColor="'blue darken-3'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'textAlign'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :textAlign="'left'"
                    v-model="WText.text"
                ></w-text>

                <div style="height:5px;"></div>

                <w-text
                    :textAlign="'center'"
                    v-model="WText.text"
                ></w-text>

                <div style="height:5px;"></div>

                <w-text
                    :textAlign="'right'"
                    v-model="WText.text"
                ></w-text>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'placeholder'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :leftIcon="mdiCheckUnderlineCircle"
                    :placeholder="'請輸入數據'"
                    v-model="WText.emptytext"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'leftIcon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :leftIcon="mdiCheckUnderlineCircle"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'leftIcon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :leftIcon="'fas fa-clipboard-check'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'leftIcon & leftIconColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :leftIcon="mdiCheckUnderlineCircle"
                    :leftIconColorFocus="'blue darken-3'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'leftIcon & leftIconTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :leftIcon="mdiChatProcessingOutline"
                    :leftIconTooltip="'status'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'rightIcon'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text :rightIcon="mdiAvTimer" v-model="WText.text"></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'rightIcon & rightIconColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :rightIcon="mdiSend"
                    :rightIconColorFocus="'blue darken-3'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'rightIcon & rightIconTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :rightIcon="mdiSend"
                    :rightIconTooltip="'Send'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-text'"
                    :casename="'fullwidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :leftIcon="mdiArrowRightDropCircleOutline"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :leftIcon="mdiCheckUnderlineCircle"
                    :editable="false"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div separate-line></div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :borderRadius="5"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textColor="'blue darken-2'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & textAlign'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textAlign="'left'"
                    v-model="WText.text"
                ></w-text>

                <div style="height:5px;"></div>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textAlign="'center'"
                    v-model="WText.text"
                ></w-text>

                <div style="height:5px;"></div>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textAlign="'right'"
                    v-model="WText.text"
                ></w-text>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & placeholder'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :placeholder="'請輸入數據'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & leftIcon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & leftIcon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="'fas fa-clipboard-check'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & leftIcon & leftIconColor & leftIconColorFocus & borderColor & borderColorFocus & backgroundColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'cyan lighten-1'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :leftIconColor="'cyan lighten-1'"
                    :leftIconColorFocus="'cyan darken-1'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & rightIcon'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :rightIcon="mdiAvTimer"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & rightIcon & rightIconColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :rightIcon="mdiSend"
                    :rightIconColorFocus="'blue darken-3'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & rightIcon & rightIconTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :rightIcon="mdiSend"
                    :rightIconTooltip="'Send'"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & fullwidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="mdiArrowRightDropCircleOutline"
                    v-model="WText.text"
                ></w-text>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text'"
                    :casename="'border & not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{h:15}"
                    :iconShiftOuter="-10"
                    :borderColor="'blue lighten-2'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :editable="false"
                    v-model="WText.text"
                ></w-text>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiAvTimer, mdiSend, mdiAccountOutline, mdiArrowRightDropCircleOutline, mdiPaw, mdiChatProcessingOutline } from '@mdi/js'
import demolink from './components/demolink.vue'
import WText from './components/WText.vue'


export default {
    components: {
        demolink,
        WText,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
    },
    data: function() {
        return {
            mdiCheckUnderlineCircle,
            mdiAvTimer,
            mdiSend,
            mdiAccountOutline,
            mdiArrowRightDropCircleOutline,
            mdiPaw,
            mdiChatProcessingOutline,
            'WText': {
                'text': 'aBc數字123',
                'emptytext': ''
            },
            'actions': [
                {
                    'mode': 'eletype',
                    'selector': 'input.basic',
                    'str': '新增文字',
                    'noEnter': true,
                },
                {
                    'mode': 'elemove',
                    'selector': 'div[ShellEllipse="rightIcon"]'
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
