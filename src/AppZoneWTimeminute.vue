<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-timeminute</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'default'"
                ></demolink>

                <w-timeminute v-model="WTimeminute.value"></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-timeminute
                    :borderRadius="5"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-timeminute
                    :icon="mdiCheckUnderlineCircle"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-timeminute
                    :icon="'fas fa-clipboard-check'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'icon & iconSize'"
                ></demolink>

                <w-timeminute
                    :icon="mdiCheckUnderlineCircle"
                    :iconSize="20"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'iconColor & iconColorFoucs'"
                ></demolink>

                <w-timeminute
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'pickColor'"
                ></demolink>

                <w-timeminute
                    :pickColor="'brown'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'iconTooltip'"
                ></demolink>

                <w-timeminute
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'not editable'"
                ></demolink>

                <w-timeminute
                    :editable="false"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'hourMin & hourMax'"
                ></demolink>

                <w-timeminute
                    :hourMin="9"
                    :hourMax="12"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'minuteInter'"
                ></demolink>

                <w-timeminute
                    :minuteInter="10"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'minutesCustom'"
                ></demolink>

                <w-timeminute
                    :minutesCustom="['10:00','10:30','11:15','12:00']"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & default'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & borderRadius'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :borderRadius="5"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & icon (material)'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & icon (fontawesome)'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="'fas fa-clipboard-check'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'cyan lighten-2'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & pickColor'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :pickColor="'brown'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & iconTooltip'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & not editable'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :editable="false"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & hourMin & hourMax'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :hourMin="9"
                    :hourMax="12"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & minuteInter'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minuteInter="10"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeminute'"
                    :casename="'border & minutesCustom'"
                ></demolink>

                <w-timeminute
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :minutesCustom="['10:00','10:30','11:15','12:00']"
                    v-model="WTimeminute.value"
                ></w-timeminute>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTimeminute from './components/WTimeminute.vue'


export default {
    components: {
        demolink,
        WTimeminute,
    },
    props: {
    },
    data: function() {
        return {
            mdiCheckUnderlineCircle,
            mdiPaw,
            'WTimeminute': {
                value: '2019-01-01T10:00:00',
            },
            'actions': [
                //pickColor測試不到
                {
                    'mode': 'eleclick',
                    'selector': 'div[TimedayCore="day"]',
                },
                {
                    'mode': 'eleclick',
                    'selector': 'button[type="button"]',
                    'nth': 11,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div.v-list-item__title',
                    'nth': 1,
                },
                {
                    'mode': 'keypress',
                    'key': 'Tab'
                },
                {
                    'mode': 'elemove',
                    'selector': 'div[ShellEllipse="leftIcon"]',
                    'nth': -1,
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
