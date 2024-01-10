<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-pick-alpha</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-alpha'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">Alpha:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickAlpha.alphaPick.toFixed(2)}}</div>
                </div>

                <w-color-pick-alpha
                    v-model="WColorPickAlpha.alphaPick"
                    :color="WColorPickAlpha.colorPanel1"
                ></w-color-pick-alpha>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-alpha'"
                    :casename="'color'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">Alpha:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickAlpha.alphaPick.toFixed(2)}}</div>
                </div>

                <w-color-pick-alpha
                    v-model="WColorPickAlpha.alphaPick"
                    :color="WColorPickAlpha.colorPanel2"
                ></w-color-pick-alpha>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-alpha'"
                    :casename="'cursorSize'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">Alpha:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickAlpha.alphaPick.toFixed(2)}}</div>
                </div>

                <w-color-pick-alpha
                    v-model="WColorPickAlpha.alphaPick"
                    :color="WColorPickAlpha.colorPanel3"
                    :cursorSize="5"
                ></w-color-pick-alpha>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-alpha'"
                    :casename="'width & height'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`font-size:0.8rem; display:inline-block; vertical-align:middle;`">Alpha:</div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickAlpha.alphaPick.toFixed(2)}}</div>
                </div>

                <w-color-pick-alpha
                    v-model="WColorPickAlpha.alphaPick"
                    :color="WColorPickAlpha.colorPanel4"
                    :width="150"
                    :height="15"
                ></w-color-pick-alpha>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorPickAlpha from './components/WColorPickAlpha.vue'


export default {
    components: {
        demolink,
        WColorPickAlpha,
    },
    props: {
    },
    data: function() {
        return {
            'WColorPickAlpha': {

                'alphaPick': 0.5,

                'colorPanel1': '#FF9800',

                'colorPanel2': '#0075C3',

                'colorPanel3': '#930031',

                'colorPanel4': '#95A300',

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
