<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-select-panel-hsva</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel-hsva'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanelHsva.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanelHsva.colorPick1}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-select-panel-hsva
                            v-model="WColorSelectPanelHsva.colorPick1"
                        ></w-color-select-panel-hsva>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel-hsva'"
                    :casename="'space'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanelHsva.colorPick2};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanelHsva.colorPick2}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-select-panel-hsva
                            v-model="WColorSelectPanelHsva.colorPick2"
                            :space="15"
                        ></w-color-select-panel-hsva>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel-hsva'"
                    :casename="'size'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanelHsva.colorPick3};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanelHsva.colorPick3}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-select-panel-hsva
                            v-model="WColorSelectPanelHsva.colorPick3"
                            :size="150"
                        ></w-color-select-panel-hsva>
                    </div>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorSelectPanelHsva from './components/WColorSelectPanelHsva.vue'


export default {
    components: {
        demolink,
        WColorSelectPanelHsva,
    },
    props: {
    },
    data: function() {
        return {
            'WColorSelectPanelHsva': {

                //逆算因有灰階會連動更新hue色盤, 故會有跳動, 此範例取消連動示範
                'colorPick1': 'rgba(255, 50, 100, 0.5)',
                'colorPick2': 'rgba(81, 188, 108, 0.613)',
                'colorPick3': 'rgba(100, 50, 255, 0.75)',

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
