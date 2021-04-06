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
                    :casename="'events'"
                ></demolink>

                <w-text-suggest
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                    @update:focused="evUpdateFocused"
                    @update:showPanel="evUpdateShowPanel"
                    @blur="evBlur"
                    @input="evInput"
                    @enter="evEnter"
                    @click-item="evClickItem"
                    @click-left="evClickLeft"
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
                    :casename="'placeholder'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :placeholder="'keywords'"
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
                    :casename="'itemPaddingStyle'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :itemPaddingStyle="{v:5,h:8}"
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
                    :casename="'itemFontSize & defItemHeight'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :defItemHeight="48"
                    :itemFontSize="'1rem'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'itemTextColor & itemTextColorHover & itemBackgroundColor & itemBackgroundColorHover'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :itemTextColor="'orange darken-3'"
                    :itemTextColorHover="'white'"
                    :itemBackgroundColor="'white'"
                    :itemBackgroundColorHover="'orange darken-3'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
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


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'showPanel(press enter to hide panel) & focused'"
                ></demolink>

                <div style="margin-bottom:5px;">
                    <div style="font-size:0.8rem;">focused={{WTextSuggest.focused}}, showPanel={{WTextSuggest.showPanel}}</div>
                    <div>
                        <v-btn style="margin-right:5px;" small @click="WTextSuggest.showPanel=true">show panel</v-btn>
                        <v-btn style="margin-right:5px;" small @click="WTextSuggest.showPanel=false">hide panel</v-btn>
                    </div>
                </div>

                <w-text-suggest
                    :focused.sync="WTextSuggest.focused"
                    :showPanel.sync="WTextSuggest.showPanel"
                    @enter="hidePanelWhenEnter"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'slot'"
                ></demolink>

                <w-text-suggest
                    :icon="mdiCheckUnderlineCircle"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                >
                    <template v-slot:item="props">
                        <div style="color:#f26; font-size:0.7rem;">{{props.item.key}}</div>
                        <div>{{props.item.text}}</div>
                    </template>
                </w-text-suggest>
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
                    :casename="'border & placeholder'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :placeholder="'keywords'"
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
                    :casename="'border & itemPaddingStyle'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :itemPaddingStyle="{v:5,h:8}"
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
                    :casename="'border & itemFontSize & defItemHeight'"
                ></demolink>

                <w-text-suggest
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :icon="mdiCheckUnderlineCircle"
                    :defItemHeight="48"
                    :itemFontSize="'1rem'"
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
                ></w-text-suggest>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & itemTextColor & itemTextColorHover & itemBackgroundColor & itemBackgroundColorHover'"
                ></demolink>

                <w-text-suggest
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
                    :items="WTextSuggest.objItems"
                    v-model="WTextSuggest.objValue"
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


            <div class="bk">
                <demolink
                    :kbname="'w-text-suggest'"
                    :casename="'border & showPanel(press enter to hide panel) & focused'"
                ></demolink>

                <div style="margin-bottom:5px;">
                    <div style="font-size:0.8rem;">focused={{WTextSuggest.focused}}, showPanel={{WTextSuggest.showPanel}}</div>
                    <div>
                        <v-btn style="margin-right:5px;" small @click="WTextSuggest.showPanel=true">show panel</v-btn>
                        <v-btn style="margin-right:5px;" small @click="WTextSuggest.showPanel=false">hide panel</v-btn>
                    </div>
                </div>

                <w-text-suggest
                    :focused.sync="WTextSuggest.focused"
                    :showPanel.sync="WTextSuggest.showPanel"
                    @enter="hidePanelWhenEnter"
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
                    :casename="'border & slot'"
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
                >
                    <template v-slot:item="props">
                        <div style="color:#f26; font-size:0.7rem;">{{props.item.key}}</div>
                        <div>{{props.item.text}}</div>
                    </template>
                </w-text-suggest>
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
                focused: false,
                showPanel: false,
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
    methods: {
        evUpdateFocused: function(item, kitem) {
            console.log('evUpdateFocused', 'item=', item, 'kitem', kitem)
        },
        evUpdateShowPanel: function(item, kitem) {
            console.log('evUpdateShowPanel', 'item=', item, 'kitem', kitem)
        },
        evBlur: function(item, kitem) {
            console.log('evBlur', 'item=', item, 'kitem', kitem)
        },
        evInput: function(item, kitem) {
            console.log('evInput', 'item=', item, 'kitem', kitem)
        },
        evEnter: function(item, kitem) {
            console.log('evEnter', 'item=', item, 'kitem', kitem)
        },
        evClickItem: function(item, kitem) {
            console.log('evClickItem', 'item=', item, 'kitem', kitem)
        },
        evClickLeft: function(item, kitem) {
            console.log('evClickLeft', 'item=', item, 'kitem', kitem)
        },
        hidePanelWhenEnter: function() {
            // console.log('hidePanelWhenEnter')

            let vo = this

            //blur, 要先將text的焦點取消, 先觸發掉focused變更事件(此會再觸發changeContent內容變更事件, 故會觸發顯示panel)
            document.activeElement.blur()

            //delay hide, 因enter觸發blur後會觸發changeContent內容變更事件, 故得等顯示事件完成才給予showPanel=false, 100ms是經驗值, 使其完整觸發隱藏panel流程
            setTimeout(function() {

                //hide
                vo.WTextSuggest.showPanel = false

            }, 100)

        },
    },
}
</script>

<style scoped>
</style>
