<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-pick-hue</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hue'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHue.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHue.colorPick}}</div>
                </div>

                <w-color-pick-hue
                    v-model="WColorPickHue.colorPick"
                ></w-color-pick-hue>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hue'"
                    :casename="'cursorSize'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHue.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHue.colorPick}}</div>
                </div>

                <w-color-pick-hue
                    v-model="WColorPickHue.colorPick"
                    :cursorSize="5"
                ></w-color-pick-hue>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hue'"
                    :casename="'width & height'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHue.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHue.colorPick}}</div>
                </div>

                <w-color-pick-hue
                    v-model="WColorPickHue.colorPick"
                    :width="150"
                    :height="15"
                ></w-color-pick-hue>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorPickHue from './components/WColorPickHue.vue'


export default {
    components: {
        demolink,
        WColorPickHue,
    },
    props: {
    },
    data: function() {
        return {
            'WColorPickHue': {

                'colorPick': '#FF9800',

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
