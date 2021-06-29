<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-scale</span></div>


        <div style="padding:0px;">


            <v-slider
                style="width:200px;"
                min="0.5"
                max="1.5"
                step="0.05"
                hide-details
                v-model="WPanelScale.scale"
                v-if="useGlobalSlider"
            ></v-slider>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scale'"
                    :casename="'for v-btn'"
                ></demolink>

                <v-slider
                    style="width:200px;"
                    min="0.5"
                    max="1.5"
                    step="0.05"
                    hide-details
                    v-model="WPanelScale.scale"
                    v-if="!useGlobalSlider"
                ></v-slider>

                <div style="color:#f26; font-size:0.8rem;">
                    * div使用display:inline-block且與其他元素有空白時, 照規範渲染時會出現textNode造成空隙問題
                </div>

                <div style="display:inline-block; padding:10px; border:1px dashed #999;">
                    <w-panel-scale
                        :scale="WPanelScale.scale"
                    >

                        <v-btn>button</v-btn>

                    </w-panel-scale>
                </div>

                <br>

                <div style="display:inline-block; padding:10px; border:1px dashed #999;">
                    <w-panel-scale
                        :scale="WPanelScale.scale"
                    >

                        <div style="_display:inline-block; overflow:hidden; width:150px; height:100px; background:#f26;"></div>

                    </w-panel-scale>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scale'"
                    :casename="'for w-panel-scrolly'"
                ></demolink>

                <v-slider
                    style="width:200px;"
                    min="0.5"
                    max="1.5"
                    step="0.05"
                    hide-details
                    v-model="WPanelScale.scale"
                    v-if="!useGlobalSlider"
                ></v-slider>

                <div style="display:inline-block; padding:10px; border:1px dashed #999;">
                    <w-panel-scale
                        :scale="WPanelScale.scale"
                    >

                        <w-panel-scrolly
                            style="width:240px; height:200px;"
                        >
                            <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                        </w-panel-scrolly>

                    </w-panel-scale>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scale'"
                    :casename="'for select'"
                ></demolink>

                <v-slider
                    style="width:200px;"
                    min="0.5"
                    max="1.5"
                    step="0.05"
                    hide-details
                    v-model="WPanelScale.scale"
                    v-if="!useGlobalSlider"
                ></v-slider>

                <div style="display:inline-block; padding:10px; border:1px dashed #999;">
                    <w-panel-scale
                        :scale="WPanelScale.scale"
                    >

                        <select style="padding:0px 10px; background-color:rgba(200,200,200,0.1); color:#000; border:1px solid rgba(200,200,200,0.5); border-radius:30px; outline:none;">
                            <option style="color:#000;" value="0">Select Fruit</option>
                            <option style="color:#000;" value="1">Apple</option>
                            <option style="color:#000;" value="2">Orange</option>
                            <option style="color:#000;" value="3">Banana</option>
                        </select>

                    </w-panel-scale>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scale'"
                    :casename="'for w-text-suggest'"
                ></demolink>

                <v-slider
                    style="width:200px;"
                    min="0.5"
                    max="1.5"
                    step="0.05"
                    hide-details
                    v-model="WPanelScale.scale"
                    v-if="!useGlobalSlider"
                ></v-slider>

                <div style="color:#f26; font-size:0.8rem;">
                    * transform scale縮放會造成popupjs定位偏移
                </div>

                <div style="display:inline-block; padding:10px; border:1px dashed #999;">
                    <w-panel-scale
                        :scale="WPanelScale.scale"
                    >

                        <w-text-suggest
                            style="width:200px;"
                            :shadow="false"
                            :borderColor="'orange lighten-2'"
                            :borderColorHover="'orange'"
                            :borderColorFocus="'orange darken-2'"
                            :backgroundColorFocus="'orange lighten-5'"
                            :items="WTextSuggest.objItems"
                            v-model="WTextSuggest.objValue"
                        ></w-text-suggest>

                    </w-panel-scale>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scale'"
                    :casename="'for w-panel-bulge'"
                ></demolink>

                <v-slider
                    style="width:200px;"
                    min="0.5"
                    max="1.5"
                    step="0.05"
                    hide-details
                    v-model="WPanelScale.scale"
                    v-if="!useGlobalSlider"
                ></v-slider>

                <div style="display:inline-block; padding:10px; border:1px dashed #999;">
                    <w-panel-scale
                        :scale="WPanelScale.scale"
                    >

                        <w-panel-bulge
                            style="min-width:500px;"
                            :headerText="WPanelBulge.title"
                        >
                            <div style="padding:20px;" v-html="WPanelBulge.table"></div>
                        </w-panel-bulge>

                    </w-panel-scale>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelScale from './components/WPanelScale.vue'
import WPanelScrolly from './components/WPanelScrolly.vue'
import WTextSuggest from './components/WTextSuggest.vue'
import WPanelBulge from './components/WPanelBulge.vue'


window.inAppZone = true


export default {
    components: {
        demolink,
        WPanelScale,
        WPanelScrolly,
        WTextSuggest,
        WPanelBulge,
    },
    props: {
    },
    data: function() {
        return {
            'useGlobalSlider': !!window.inAppZone,
            'WPanelScale': {
                'scale': 1,
            },
            'WPanelScrolly': {
                'tableStyle': 'border-collapse:collapse; background-image:linear-gradient(141deg, #4cc5f8 0%, #3fd8eb 75%);',
                'tdStyle': 'padding:50px 22px; color:white; border:1px solid rgba(255,255,255,0.5); font-size:0.8rem;',
            },
            'WTextSuggest': {
                'objItems': [
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
                'objValue': {
                    key: 'banana',
                    text: '香蕉(banana)',
                },
            },
            'WPanelBulge': {
                'title': 'Bulge',
                'table': '\n<div style="margin-bottom:10px; padding:0px 10px;">\n                        <span>A data table</span>\n                    </div>\n\n                    <table style="width:100%; font-size:0.7rem; border-collapse:collapse;">\n                        <thead>\n                            <tr>\n                                <th style="padding:2px 8px; text-align:left;">Dessert</th>\n                                <th style="padding:2px 8px; text-align:left;">Calories</th>\n                                <th style="padding:2px 8px; text-align:left;">Fat</th>\n                                <th style="padding:2px 8px; text-align:left;">Carbs</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>\n                            </tr>\n                        </tbody>\n                    </table>\n',
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'span[class="v-chip__content"]'
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
