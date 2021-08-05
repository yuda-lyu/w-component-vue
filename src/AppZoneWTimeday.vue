<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-timeday</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'default'"
                ></demolink>

                <w-timeday v-model="WTimeday.day"></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-timeday :borderRadius="5" v-model="WTimeday.day"></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-timeday
                    :icon="mdiCheckUnderlineCircle"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-timeday
                    :icon="'fas fa-clipboard-check'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'icon & iconSize'"
                ></demolink>

                <w-timeday
                    :icon="mdiCheckUnderlineCircle"
                    :iconSize="20"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'iconColor & iconColorFoucs'"
                ></demolink>

                <w-timeday
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'textColor'"
                ></demolink>

                <w-timeday
                    :textColor="'orange darken-2'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'pickColor'"
                ></demolink>

                <w-timeday
                    :pickColor="'brown'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'iconTooltip'"
                ></demolink>

                <w-timeday
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'not editable'"
                ></demolink>

                <w-timeday :editable="false" v-model="WTimeday.day"></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & default'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & borderRadius'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :borderRadius="5"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & icon (material)'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & icon (fontawesome)'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="'fas fa-clipboard-check'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'cyan lighten-2'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & textColor'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :textColor="'orange darken-2'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & pickColor'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :pickColor="'brown'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & iconTooltip'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & not editable'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :editable="false"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTimeday from './components/WTimeday.vue'


export default {
    components: {
        demolink,
        WTimeday,
    },
    props: {
    },
    data: function() {
        return {
            mdiCheckUnderlineCircle,
            mdiPaw,
            'WTimeday': {
                'day': '2019-01-01'
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
