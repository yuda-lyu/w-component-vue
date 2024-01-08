<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-pick-stripe</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-stripe'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickStripe.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickStripe.colorPick1}}</div>
                </div>

                <w-color-pick-stripe
                    v-model="WColorPickStripe.colorPick1"
                ></w-color-pick-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-stripe'"
                    :casename="'width & height'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickStripe.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickStripe.colorPick1}}</div>
                </div>

                <w-color-pick-stripe
                    v-model="WColorPickStripe.colorPick1"
                    :width="150"
                    :height="15"
                ></w-color-pick-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-stripe'"
                    :casename="'colorLeft & colorRight'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickStripe.colorPick2};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickStripe.colorPick2}}</div>
                </div>

                <w-color-pick-stripe
                    v-model="WColorPickStripe.colorPick2"
                    :colorLeft="'rgba(153, 51, 255, 0.2)'"
                    :colorRight="'rgba(0, 0, 255, 0.8)'"
                ></w-color-pick-stripe>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-stripe'"
                    :casename="'colorNum'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickStripe.colorPick3};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickStripe.colorPick3}}</div>
                </div>

                <w-color-pick-stripe
                    v-model="WColorPickStripe.colorPick3"
                    :colorLeft="'#FFCCFF'"
                    :colorRight="'#660066'"
                    :width="280"
                    :colorNum="14"
                ></w-color-pick-stripe>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorPickStripe from './components/WColorPickStripe.vue'


export default {
    components: {
        demolink,
        WColorPickStripe,
    },
    props: {
    },
    data: function() {
        return {
            'WColorPickStripe': {
                'colorPick1': 'rgb(255, 255, 255, 1)',
                'colorPick2': 'rgba(68, 23, 255, 0.533)',
                'colorPick3': 'rgb(208, 141, 208, 1)',
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
