<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-pick-hexagon</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hexagon'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHexagon.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHexagon.colorPick}}</div>
                </div>

                <w-color-pick-hexagon
                    v-model="WColorPickHexagon.colorPick"
                ></w-color-pick-hexagon>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hexagon'"
                    :casename="'size'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHexagon.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHexagon.colorPick}}</div>
                </div>

                <w-color-pick-hexagon
                    v-model="WColorPickHexagon.colorPick"
                    :size="150"
                ></w-color-pick-hexagon>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorPickHexagon from './components/WColorPickHexagon.vue'


export default {
    components: {
        demolink,
        WColorPickHexagon,
    },
    props: {
    },
    data: function() {
        return {
            'WColorPickHexagon': {
                'colorPick': '#FF6600',
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
