<template>
    <div>


        <div class="head1">w-text-select</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'default'"
                ></demolink>

                <w-text-select
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-text-select
                    :icon="'fas fa-clipboard-check'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'icon & iconColor & iconColorFoucs'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'iconTooltip'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadius="5"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'keyText'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItemsKeyText"
                    :keyText="'name'"
                    v-model="WTextSelect.objValueKeyText"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'a lot of items'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItemsLarge"
                    v-model="WTextSelect.objValueLarge"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'items(string array)'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.strItems"
                    v-model="WTextSelect.strValue"
                ></w-text-select>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'fullwidth'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'not editable'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & default'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & icon (material)'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & icon (fontawesome)'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="'fas fa-clipboard-check'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & icon & iconColor & iconColorFoucs & borderColor & borderColorFocus & backgroundColorFocus'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'cyan lighten-2'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'cyan lighten-2'"
                    :iconColorFocus="'cyan darken-1'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & iconTooltip'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :iconTooltip="'show tooltip'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & borderRadius'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadius="5"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & keyText'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItemsKeyText"
                    :keyText="'name'"
                    v-model="WTextSelect.objValueKeyText"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & a lot of items'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItemsLarge"
                    v-model="WTextSelect.objValueLarge"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & items(string array)'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.strItems"
                    v-model="WTextSelect.strValue"
                ></w-text-select>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & fullwidth'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & not editable'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCheckUnderlineCircle, mdiPaw } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTextSelect from './components/WTextSelect.vue'


export default {
    components: {
        demolink,
        WTextSelect,
    },
    props: {
    },
    data: function() {
        return {
            mdiCheckUnderlineCircle,
            mdiPaw,
            'WTextSelect': {
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
                    'mode': 'eleclick',
                    'selector': 'div[tabindex="0"]',
                    'nth': 2,
                },
                {
                    'mode': 'keypress',
                    'key': 'Tab'
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
