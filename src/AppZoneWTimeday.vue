<template>
    <div>


        <div class="head1">w-timeday</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday v-model="WTimeday.day"></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday :borderRadius="5" v-model="WTimeday.day"></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :icon="'fas fa-clipboard-check'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'iconColor & iconColorFoucs'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :casename="'pickColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday :pickColor="'brown'" v-model="WTimeday.day"></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'iconTooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday :editable="false" v-model="WTimeday.day"></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    v-model="WTimeday.day"
                ></w-timeday>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-timeday'"
                    :casename="'border & borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :casename="'border & pickColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-timeday
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
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
