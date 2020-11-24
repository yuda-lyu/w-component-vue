<template>
    <div>


        <div class="head1">w-text-suggest</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'default'"
                ></demolink>

                <w-text-suggest
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'searchEmpty'"
                ></demolink>

                <w-text-suggest
                    :items="WTextSuggest.objItems"
                    :searchEmpty="'無有效項目'"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-text-suggest
                    :icon="'fas fa-clipboard-check'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'icon & iconColor & iconColorHover & iconColorFoucs'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'orange lighten-1'"
                    :iconColorHover="'orange accent-3'"
                    :iconColorFocus="'orange darken-2'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'iconTooltip'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadius="5"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'keyText'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItemsKeyText"
                    :keyText="'name'"
                    :searchEmpty="'無有效項目'"
                    v-model="WTextSuggest.objValueKeyText"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'a lot of items'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItemsLarge"
                    :searchEmpty="'無有效項目'"
                    v-model="WTextSuggest.objValueLarge"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'items(string array)'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.strItems"
                    v-model="WTextSuggest.strValue"
                ></w-text-suggest>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'fullwidth'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'not editable'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & default'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & searchEmpty'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :items="WTextSuggest.objItems"
                    :searchEmpty="'無有效項目'"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & icon (material)'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & icon (fontawesome)'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="'fas fa-clipboard-check'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & iconColor & iconColorHover & iconColorFoucs'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'orange lighten-1'"
                    :iconColorHover="'orange accent-3'"
                    :iconColorFocus="'orange darken-2'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & backgroundColor & backgroundColorHover & backgroundColorFocus'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    _backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'rgba(255, 171, 64, 0.05)'"
                    :backgroundColorHover="'rgba(255, 171, 64, 0.1)'"
                    :backgroundColorFocus="'rgba(255, 171, 64, 0.2)'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & iconTooltip'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & borderRadius'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadius="5"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & keyText'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItemsKeyText"
                    :keyText="'name'"
                    :searchEmpty="'無有效項目'"
                    v-model="WTextSuggest.objValueKeyText"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & a lot of items'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItemsLarge"
                    :searchEmpty="'無有效項目'"
                    v-model="WTextSuggest.objValueLarge"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & items(string array)'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.strItems"
                    v-model="WTextSuggest.strValue"
                ></w-text-suggest>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & fullwidth'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & not editable'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTextSuggest from './components/WTextSuggest.vue'


export default {
    components: {
        demolink,
        WTextSuggest,
    },
    props: {
    },
    data: function() {
        return {
            mdiCheckUnderlineCircle,
            mdiPaw,
            'WTextSuggest': {
                objItems: [
                    {
                        key: 'orange',
                        text: '橘子(orange)',
                    },
                    {
                        key: 'banana',
                        text: '香蕉(banana)',
                    },
                    {
                        key: 'strawberry',
                        text: '草莓(strawberry)',
                    },
                ],
                objValue: {
                    key: 'banana',
                    text: '香蕉(banana)',
                },
                objItemsKeyText: [
                    {
                        key: 'orange',
                        name: '橘子(orange)',
                    },
                    {
                        key: 'banana',
                        name: '香蕉(banana)',
                    },
                    {
                        key: 'strawberry',
                        name: '草莓(strawberry)',
                    },
                ],
                objValueKeyText: {
                    key: 'banana',
                    name: '香蕉(banana)',
                },
                objItemsLarge: (function() {
                    let vs = []
                    vs.push({
                        key: 'banana:1',
                        text: '香蕉(banana:1)',
                    })
                    for (let i = 2; i <= 10000; i++) {
                        vs.push({
                            key: 'banana:' + i,
                            text: '香蕉(banana:' + i + ')',
                        })
                    }
                    return vs
                })(),
                objValueLarge: {
                    key: 'banana:1',
                    text: '香蕉(banana:1)',
                },
                strItems: ['orange(橘子)', 'banana(香蕉)', 'strawberry(草莓)'],
                strValue: 'strawberry(草莓)',
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'input[type="text"]',
                },
                {
                    'mode': 'keypress',
                    'key': 'End',
                },
                {
                    'mode': 'keypress',
                    'key': 'Backspace',
                    'count': 15,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'li[role="option"]',
                    'nth': 2,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div.bk',
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
