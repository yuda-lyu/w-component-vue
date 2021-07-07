<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-text-select</span></div>


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
                    :casename="'textColor & expansionIconColor'"
                ></demolink>

                <w-text-select
                    :textColor="'orange darken-2'"
                    :expansionIconColor="'orange'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'leftIcon (material)'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'leftIcon (fontawesome)'"
                ></demolink>

                <w-text-select
                    :leftIcon="'fas fa-clipboard-check'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'leftIcon & leftIconColor & leftIconColorHover & leftIconColorFocus & leftIconTooltip'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :leftIconColor="'orange lighten-1'"
                    :leftIconColorHover="'orange accent-3'"
                    :leftIconColorFocus="'orange darken-2'"
                    :leftIconTooltip="'show tooltip'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'rightIcon & rightIconColor & rightIconColorHover & rightIconColorFocus & rightIconTooltip'"
                ></demolink>

                <w-text-select
                    :rightIcon="mdiCheckUnderlineCircle"
                    :rightIconColor="'orange lighten-1'"
                    :rightIconColorHover="'orange accent-3'"
                    :rightIconColorFocus="'orange darken-2'"
                    :rightIconTooltip="'show tooltip'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'showExpansionIcon'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :showExpansionIcon="false"
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :borderRadius="5"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'itemPaddingStyle'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :itemPaddingStyle="{v:5,h:8}"
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItemsKeyText"
                    :keyText="'name'"
                    v-model="WTextSelect.objValueKeyText"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'itemFontSize & defItemHeight & width'"
                ></demolink>

                <w-text-select
                    style="width:250px;"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :defItemHeight="48"
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
                    :leftIcon="mdiCheckUnderlineCircle"
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
                    :leftIcon="mdiCheckUnderlineCircle"
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.strItems"
                    v-model="WTextSelect.strValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'slot select'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                >
                    <template v-slot:select="props">
                        {{
                            props.item.key==='orange'?'🍊🍊🍊🍊🍊🍊':
                            props.item.key==='banana'?'🍌🍌🍌🍌🍌🍌':
                                                      '🍓🍓🍓🍓🍓🍓'
                        }}
                    </template>
                </w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'slot item'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                >
                    <template v-slot:item="props">
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'with popup'"
                ></demolink>

                <w-popup
                    :isolated="true"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show popup</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:45px 25px;">
                            <w-text-select
                                :items="WTextSelect.objItems"
                                v-model="WTextSelect.objValue"
                            ></w-text-select>
                        </div>
                    </template>

                </w-popup>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'events'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :rightIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                    @update:focused="evUpdateFocused"
                    @update:showPanel="evUpdateShowPanel"
                    @blur="evBlur"
                    @input="evInput"
                    _enter="evEnter"
                    @click-item="evClickItem"
                    @click-left="evClickLeft"
                    @click-right="evClickRight"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'not editable'"
                ></demolink>

                <w-text-select
                    :leftIcon="mdiCheckUnderlineCircle"
                    :editable="false"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div></div>


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
                    :casename="'border & textColor & expansionIconColor'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :textColor="'orange darken-2'"
                    :expansionIconColor="'orange'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & leftIcon (material)'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & leftIcon (fontawesome)'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="'fas fa-clipboard-check'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & leftIconColor & leftIconColorHover & leftIconColorFocus & leftIconTooltip'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :leftIconColor="'orange lighten-1'"
                    :leftIconColorHover="'orange accent-3'"
                    :leftIconColorFocus="'orange darken-2'"
                    :leftIconTooltip="'show tooltip'"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & rightIconColor & rightIconColorHover & rightIconColorFocus & rightIconTooltip'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :rightIcon="mdiCheckUnderlineCircle"
                    :rightIconColor="'orange lighten-1'"
                    :rightIconColorHover="'orange accent-3'"
                    :rightIconColorFocus="'orange darken-2'"
                    :rightIconTooltip="'show tooltip'"
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
                    :leftIcon="mdiCheckUnderlineCircle"
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
                    :casename="'border & showExpansionIcon'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :showExpansionIcon="false"
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :borderRadius="5"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & itemPaddingStyle'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :itemPaddingStyle="{v:5,h:8}"
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItemsKeyText"
                    :keyText="'name'"
                    v-model="WTextSelect.objValueKeyText"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & itemFontSize & defItemHeight & width'"
                ></demolink>

                <w-text-select
                    style="width:250px;"
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :defItemHeight="48"
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
                    :leftIcon="mdiCheckUnderlineCircle"
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
                    :leftIcon="mdiCheckUnderlineCircle"
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.strItems"
                    v-model="WTextSelect.strValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & slot select'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                >
                    <template v-slot:select="props">
                        {{
                            props.item.key==='orange'?'🍊🍊🍊🍊🍊🍊':
                            props.item.key==='banana'?'🍌🍌🍌🍌🍌🍌':
                                                      '🍓🍓🍓🍓🍓🍓'
                        }}
                    </template>
                </w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & slot item'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                >
                    <template v-slot:item="props">
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
                    :leftIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                ></w-text-select>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & with popup'"
                ></demolink>

                <w-popup
                    :isolated="true"
                >

                    <template v-slot:trigger>
                        <v-btn depressed small elevation="2">Show popup</v-btn>
                    </template>

                    <template v-slot:content>
                        <div style="padding:45px 25px;">
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
                    </template>

                </w-popup>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-select'"
                    :casename="'border & events'"
                ></demolink>

                <w-text-select
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :leftIcon="mdiCheckUnderlineCircle"
                    :rightIcon="mdiCheckUnderlineCircle"
                    :items="WTextSelect.objItems"
                    v-model="WTextSelect.objValue"
                    @update:focused="evUpdateFocused"
                    @update:showPanel="evUpdateShowPanel"
                    @blur="evBlur"
                    @input="evInput"
                    _enter="evEnter"
                    @click-item="evClickItem"
                    @click-left="evClickLeft"
                    @click-right="evClickRight"
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
                    :leftIcon="mdiCheckUnderlineCircle"
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
import WPopup from './components/WPopup.vue'


export default {
    components: {
        demolink,
        WTextSelect,
        WPopup,
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
        // evEnter: function(item, kitem) {
        //     console.log('evEnter', 'item=', item, 'kitem', kitem)
        // },
        evClickItem: function(item, kitem) {
            console.log('evClickItem', 'item=', item, 'kitem', kitem)
        },
        evClickLeft: function() {
            console.log('evClickLeft')
        },
        evClickRight: function() {
            console.log('evClickRight')
        },
    },
}
</script>

<style scoped>
</style>
