<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-pick-hsv</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hsv'"
                    :casename="'default'"
                ></demolink>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Pick:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPick1}}</div>
                </div>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Corner:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPanel1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPanel1}}</div>
                </div>

                <w-color-pick-hsv
                    v-model="WColorPickHsv.colorPick1"
                    :color="WColorPickHsv.colorPanel1"
                ></w-color-pick-hsv>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hsv'"
                    :casename="'color'"
                ></demolink>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Pick:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPick2};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPick2}}</div>
                </div>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Corner:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPanel2};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPanel2}}</div>
                </div>

                <w-color-pick-hsv
                    v-model="WColorPickHsv.colorPick2"
                    :color="WColorPickHsv.colorPanel2"
                ></w-color-pick-hsv>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hsv'"
                    :casename="'cursorSize'"
                ></demolink>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Pick:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPick1}}</div>
                </div>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Corner:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPanel1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPanel1}}</div>
                </div>

                <w-color-pick-hsv
                    v-model="WColorPickHsv.colorPick1"
                    :color="WColorPickHsv.colorPanel1"
                    :cursorSize="10"
                ></w-color-pick-hsv>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hsv'"
                    :casename="'width & height'"
                ></demolink>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Pick:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPick1}}</div>
                </div>

                <div style="padding-bottom:5px;">
                    <div :style="`display:inline-block; vertical-align:middle; width:50px; font-size:0.8rem;`">Corner:</div>
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHsv.colorPanel1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHsv.colorPanel1}}</div>
                </div>

                <w-color-pick-hsv
                    v-model="WColorPickHsv.colorPick1"
                    :color="WColorPickHsv.colorPanel1"
                    :width="150"
                    :height="150"
                ></w-color-pick-hsv>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorPickHsv from './components/WColorPickHsv.vue'


export default {
    components: {
        demolink,
        WColorPickHsv,
    },
    props: {
    },
    data: function() {
        return {
            'WColorPickHsv': {

                'colorPick1': '#FF9800',
                'colorPanel1': '#FF9800',

                'colorPick2': '#B35977',
                'colorPanel2': '#930031', //非飽和色, 會自動改為#FF0055

            },
            'actions': [
            ],
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>
