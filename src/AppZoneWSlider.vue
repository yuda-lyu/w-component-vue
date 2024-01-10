<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-slider</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'default'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'valueMin & valueMax'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value2"
                            :valueMin="15"
                            :valueMax="85"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value2}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'valueStep'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value3"
                            :valueStep="10"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value3}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'valueDecimal & valueMin & valueMax & valueStep'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value4"
                            :valueMin="0.1"
                            :valueMax="0.2"
                            :valueStep="0.001"
                            :valueDecimal="3"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value4}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'progBorderRadius'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :progBorderRadius="0"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'progHeight'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :progHeight="8"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'progColor & progBackgroundColor & sliderBackgroundColor & sliderBackgroundColorHover'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :progColor="'#F06292'"
                            :progBackgroundColor="'#FCE4EC'"
                            :sliderBackgroundColor="'#EC407A'"
                            :sliderBackgroundColorHover="'#D81B60'"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'sliderSize'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :sliderSize="14"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'tooltipPlacementDist'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :tooltipPlacementDist="10"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'tooltipBorderRadius'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :tooltipBorderRadius="0"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'tooltipTextFontSize'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :tooltipTextFontSize="'0.7rem'"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'tooltipTextColor & tooltipBackgroundColor'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :tooltipTextColor="'#E1F5FE'"
                            :tooltipBackgroundColor="'#2196F3'"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'not editable'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :editable="false"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-slider'"
                    :casename="'not editable & progColorDisabled & progBackgroundColorDisabled & sliderBackgroundColorDisabled'"
                ></demolink>

                <div style="_border:1px solid #ddd; display:inline-block;">
                    <div style="display:flex; align-items:center;">

                        <w-slider
                            style="width:400px;"
                            v-model="WSlider.value1"
                            :progColorDisabled="'#ff8a65'"
                            :progBackgroundColorDisabled="'#ffbca6'"
                            :sliderBackgroundColorDisabled="'#ff8a65'"
                            :editable="false"
                        ></w-slider>

                        <div style="padding:0px 5px; font-size:0.85rem; width:35px;">{{WSlider.value1}}</div>

                    </div>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WSlider from './components/WSlider.vue'


export default {
    components: {
        demolink,
        WSlider,
    },
    props: {
    },
    data: function() {
        return {
            'WSlider': {
                value1: 25,
                value2: 25,
                value3: 20,
                value4: 0.11,
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
