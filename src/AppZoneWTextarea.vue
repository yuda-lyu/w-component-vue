<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-textarea</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'default'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'textFontSize'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :textFontSize="'0.85rem'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'textColor'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :textColor="'blue darken-3'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'textAlign'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :textAlign="'left'"
                    v-model="WTextarea.text"
                ></w-textarea>

                <div style="height:5px;"></div>

                <w-textarea
                    style="width:350px;"
                    :textAlign="'center'"
                    v-model="WTextarea.text"
                ></w-textarea>

                <div style="height:5px;"></div>

                <w-textarea
                    style="width:350px;"
                    :textAlign="'right'"
                    v-model="WTextarea.text"
                ></w-textarea>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'placeholder'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :placeholder="'請輸入數據'"
                    v-model="WTextarea.emptytext"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'bottomLineBorderColor & bottomLineBorderColorHover & bottomLineBorderColorFocus'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :bottomLineBorderColor="'pink lighten-3'"
                    :bottomLineBorderColorHover="'pink lighten-1'"
                    :bottomLineBorderColorFocus="'pink'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'leftIcon (material)'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="mdiCheckUnderlineCircle"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'leftIcon (fontawesome)'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="'fas fa-clipboard-check'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'leftIcon & leftIconSize'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :leftIconSize="20"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'leftIcon & leftIconColor & leftIconColorHover & leftIconColorFocus'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :leftIconColor="'pink lighten-2'"
                    :leftIconColorHover="'pink lighten-1'"
                    :leftIconColorFocus="'pink'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'leftIcon & leftIconTooltip'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="mdiChatProcessingOutline"
                    :leftIconTooltip="'status'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'rightIcon & verticalAlign'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :verticalAlign="'bottom'"
                    :rightIcon="mdiAvTimer"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'rightIcon & rightIconSize & verticalAlign'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :verticalAlign="'bottom'"
                    :rightIcon="mdiAvTimer"
                    :rightIconSize="20"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'rightIcon & rightIconColor & rightIconColorHover & rightIconColorFocus & verticalAlign'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :verticalAlign="'bottom'"
                    :rightIcon="mdiSend"
                    :rightIconColor="'pink lighten-2'"
                    :rightIconColorHover="'pink lighten-1'"
                    :rightIconColorFocus="'pink'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'rightIcon & rightIconTooltip & verticalAlign'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :verticalAlign="'bottom'"
                    :rightIcon="mdiSend"
                    :rightIconTooltip="'Send'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'fullwidth'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="mdiArrowRightDropCircleOutline"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'not editable'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :editable="false"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'events'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :verticalAlign="'center'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :rightIcon="mdiSend"
                    v-model="WTextarea.text"
                    @click-left="clickLeft"
                    @click-right="clickRight"
                    @select="select"
                    @blur="blur"
                    @enter="enter"
                    @input="input"
                    @change="change"
                ></w-textarea>
            </div>


            <div separate-line></div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & default'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & textFontSize'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textFontSize="'0.85rem'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & borderRadius & paddingStyle'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :borderRadius="0"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & textColor'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textColor="'blue darken-2'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & textAlign'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textAlign="'left'"
                    v-model="WTextarea.text"
                ></w-textarea>

                <div style="height:5px;"></div>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textAlign="'center'"
                    v-model="WTextarea.text"
                ></w-textarea>

                <div style="height:5px;"></div>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :textAlign="'right'"
                    v-model="WTextarea.text"
                ></w-textarea>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & placeholder'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :placeholder="'請輸入數據'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & leftIcon (material)'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="-3"
                    :iconShiftInner="5"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & leftIcon (fontawesome)'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="-3"
                    :iconShiftInner="5"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="'fas fa-clipboard-check'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & leftIcon & leftIconColor & leftIconColorHover & leftIconColorFocus & leftIconTooltip'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="-3"
                    :iconShiftInner="5"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :leftIconColor="'indigo lighten-2'"
                    :leftIconColorHover="'indigo lighten-1'"
                    :leftIconColorFocus="'indigo'"
                    :leftIconTooltip="'Show tooltip'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & rightIcon & rightIconColor & rightIconColorHover & rightIconColorFocus & rightIconTooltip'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="-3"
                    :iconShiftInner="5"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :verticalAlign="'bottom'"
                    :rightIcon="mdiSend"
                    :rightIconColor="'blue lighten-1'"
                    :rightIconColorHover="'blue'"
                    :rightIconColorFocus="'blue darken-2'"
                    :rightIconTooltip="'Send'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & backgroundColor & backgroundColorHover & backgroundColorFocus'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="0"
                    :iconShiftInner="0"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'rgba(30, 136, 229, 0.05)'"
                    :backgroundColorHover="'rgba(30, 136, 229, 0.1)'"
                    :backgroundColorFocus="'rgba(30, 136, 229, 0.2)'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & fullwidth'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="-3"
                    :iconShiftInner="5"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="mdiArrowRightDropCircleOutline"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & not editable'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="-3"
                    :iconShiftInner="5"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :editable="false"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'border & events'"
                ></demolink>

                <w-textarea
                    style="width:350px;"
                    :shadow="false"
                    :bottomLineBorderColor="'transparent'"
                    :bottomLineBorderColorHover="'transparent'"
                    :bottomLineBorderColorFocus="'transparent'"
                    :paddingStyle="{v:5,h:8}"
                    :iconShiftOuter="-3"
                    :iconShiftInner="5"
                    :borderColor="'blue lighten-2'"
                    :borderColorHover="'blue'"
                    :borderColorFocus="'blue darken-2'"
                    :backgroundColor="'white'"
                    :backgroundColorHover="'rgba(237, 247, 255, 1)'"
                    :backgroundColorFocus="'blue lighten-5'"
                    :verticalAlign="'center'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :rightIcon="mdiSend"
                    v-model="WTextarea.text"
                    @click-left="clickLeft"
                    @click-right="clickRight"
                    @select="select"
                    @blur="blur"
                    @enter="enter"
                    @input="input"
                    @change="change"
                ></w-textarea>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiAvTimer, mdiSend, mdiAccountOutline, mdiArrowRightDropCircleOutline, mdiPaw, mdiChatProcessingOutline } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTextarea from './components/WTextarea.vue'


export default {
    components: {
        demolink,
        WTextarea,
    },
    props: {
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
            'WTextarea': {
                'text': 'The Woodman(樵夫) set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
                'emptytext': ''
            },
            'actions': [
            ],
        }
    },
    methods: {

        clickLeft: function() {
            console.log('clickLeft')
        },

        clickRight: function() {
            console.log('clickRight')
        },

        select: function(value, err, ev) {
            console.log('select', value, err, ev)
        },

        blur: function(value, err, ev) {
            console.log('blur', value, err, ev)
        },

        enter: function(value, err, ev) {
            console.log('enter', value, err, ev)
        },

        input: function(value, err, ev) {
            console.log('input', value, err, ev)
        },

        change: function(value, err, ev) {
            console.log('change', value, err, ev)
        },

    },
}
</script>

<style scoped>
</style>
