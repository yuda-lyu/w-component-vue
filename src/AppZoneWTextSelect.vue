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
                    :casename="'icon & iconColor & iconColorHover & iconColorFoucs'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'orange lighten-1'"
                    :iconColorHover="'orange accent-3'"
                    :iconColorFocus="'orange darken-2'"
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
                    :casename="'itemFontSize & width'"
                ></demolink>

                <w-text-select
                    style="width:250px;"
                    :icon="mdiCheckUnderlineCircle"
                    :itemFontSize="'1rem'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'itemTextColor & itemTextColorHover & itemBackgroundColor & itemBackgroundColorHover'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :itemTextColor="'orange darken-3'"
                    :itemTextColorHover="'white'"
                    :itemBackgroundColor="'white'"
                    :itemBackgroundColorHover="'orange darken-3'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
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


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'slot'"
                ></demolink>

                <w-text-select
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                >
                    <template v-slot="props">
                        <div style="color:#f26; font-size:0.7rem;">{{props.item.key}}</div>
                        <div>{{props.item.text}}</div>
                    </template>
                </w-text-select>
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
                    :borderColorHover="'orange'"
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
                    :borderColorHover="'orange'"
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
                    :borderColorHover="'orange'"
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
                    :casename="'border & iconColor & iconColorHover & iconColorFoucs'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'orange lighten-1'"
                    :iconColorHover="'orange accent-3'"
                    :iconColorFocus="'orange darken-2'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & backgroundColor & backgroundColorHover & backgroundColorFocus'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    _backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'rgba(255, 171, 64, 0.05)'"
                    :backgroundColorHover="'rgba(255, 171, 64, 0.1)'"
                    :backgroundColorFocus="'rgba(255, 171, 64, 0.2)'"
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
                    :borderColorHover="'orange'"
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
                    :borderColorHover="'orange'"
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
                    :borderColorHover="'orange'"
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
                    :casename="'border & itemFontSize & width'"
                ></demolink>

                <w-text-select
                    style="width:250px;"
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :itemFontSize="'1rem'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & itemTextColor & itemTextColorHover & itemBackgroundColor & itemBackgroundColorHover'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :itemTextColor="'orange darken-3'"
                    :itemTextColorHover="'white'"
                    :itemBackgroundColor="'white'"
                    :itemBackgroundColorHover="'orange darken-3'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
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
                    :borderColorHover="'orange'"
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
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.strItems"
                    v-model="WTextSelect.strValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & slot'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                >
                    <template v-slot="props">
                        <div style="color:#f26; font-size:0.7rem;">{{props.item.key}}</div>
                        <div>{{props.item.text}}</div>
                    </template>
                </w-text-select>
            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & fullwidth'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
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
                    :borderColorHover="'orange'"
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
