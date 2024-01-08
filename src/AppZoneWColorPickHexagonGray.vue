<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-pick-hexagon-gray</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hexagon-gray'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHexagonGray.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHexagonGray.colorPick}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-pick-hexagon-gray
                            v-model="WColorPickHexagonGray.colorPick"
                        ></w-color-pick-hexagon-gray>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hexagon-gray'"
                    :casename="'space'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHexagonGray.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHexagonGray.colorPick}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-pick-hexagon-gray
                            v-model="WColorPickHexagonGray.colorPick"
                            :space="15"
                        ></w-color-pick-hexagon-gray>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-pick-hexagon-gray'"
                    :casename="'size'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorPickHexagonGray.colorPick};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorPickHexagonGray.colorPick}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-pick-hexagon-gray
                            v-model="WColorPickHexagonGray.colorPick"
                            :size="150"
                        ></w-color-pick-hexagon-gray>
                    </div>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorPickHexagonGray from './components/WColorPickHexagonGray.vue'


export default {
    components: {
        demolink,
        WColorPickHexagonGray,
    },
    props: {
    },
    data: function() {
        return {
            'WColorPickHexagonGray': {
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
