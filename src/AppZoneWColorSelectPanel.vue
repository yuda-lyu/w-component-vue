<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-select-panel</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanel.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanel.colorPick1}}</div>
                </div>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-color-select-panel
                        v-model="WColorSelectPanel.colorPick1"
                    ></w-color-select-panel>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel'"
                    :casename="'type'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanel.colorPick2};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanel.colorPick2}}</div>
                </div>

                <div style="padding:5px 0px;">
                    <w-input-radio
                        :arrange="'horizontal'"
                        :paddingStyle="{top:0,right:10,bottom:0,left:0}"
                        :items="['LUMP','HSVA']"
                        v-model="WColorSelectPanel.type"
                    ></w-input-radio>
                </div>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-color-select-panel
                        v-model="WColorSelectPanel.colorPick2"
                        :type="WColorSelectPanel.type"
                    ></w-color-select-panel>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel'"
                    :casename="'size'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanel.colorPick3};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanel.colorPick3}}</div>
                </div>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-color-select-panel
                        v-model="WColorSelectPanel.colorPick3"
                        :size="150"
                    ></w-color-select-panel>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel'"
                    :casename="'space'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanel.colorPick4};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanel.colorPick4}}</div>
                </div>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-color-select-panel
                        v-model="WColorSelectPanel.colorPick4"
                        :space="0"
                    ></w-color-select-panel>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel'"
                    :casename="'backgroundColor'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanel.colorPick5};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanel.colorPick5}}</div>
                </div>

                <div style="display:inline-block; padding:30px; background:#222;">
                    <w-color-select-panel
                        v-model="WColorSelectPanel.colorPick5"
                        :backgroundColor="'#111'"
                    ></w-color-select-panel>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WInputRadio from './components/WInputRadio.vue'
import WColorSelectPanel from './components/WColorSelectPanel.vue'


export default {
    components: {
        demolink,
        WInputRadio,
        WColorSelectPanel,
    },
    props: {
    },
    data: function() {
        return {
            'WColorSelectPanel': {
                'type': 'HSVA',
                'colorPick1': 'rgba(255, 255, 255, 1)',
                'colorPick2': 'rgba(51, 51, 255, 0.533)',
                'colorPick3': 'rgba(51, 204, 204, 0.95)',
                'colorPick4': 'rgba(0, 204, 0, 0.874)',
                'colorPick5': 'rgba(153, 204, 0, 0.874)',
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
