<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-color-select-panel-block</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel-block'"
                    :casename="'default'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanelBlock.colorPick1};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanelBlock.colorPick1}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-select-panel-block
                            v-model="WColorSelectPanelBlock.colorPick1"
                        ></w-color-select-panel-block>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel-block'"
                    :casename="'spaceGray & spaceAlpha'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanelBlock.colorPick2};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanelBlock.colorPick2}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-select-panel-block
                            v-model="WColorSelectPanelBlock.colorPick2"
                            :spaceGray="15"
                            :spaceAlpha="15"
                        ></w-color-select-panel-block>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-color-select-panel-block'"
                    :casename="'size'"
                ></demolink>

                <div style="padding:5px 0px;">
                    <div :style="`display:inline-block; vertical-align:middle; border:1px solid #ddd; width:20px; height:20px; background:${WColorSelectPanelBlock.colorPick3};`"></div>
                    <div :style="`padding-left:5px; font-size:0.8rem; display:inline-block; vertical-align:middle;`">{{WColorSelectPanelBlock.colorPick3}}</div>
                </div>

                <div style="display:inline-block; padding:10px; border:1px solid #ddd;">
                    <div style="display:flex;">
                        <w-color-select-panel-block
                            v-model="WColorSelectPanelBlock.colorPick3"
                            :size="150"
                        ></w-color-select-panel-block>
                    </div>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WColorSelectPanelBlock from './components/WColorSelectPanelBlock.vue'


export default {
    components: {
        demolink,
        WColorSelectPanelBlock,
    },
    props: {
    },
    data: function() {
        return {
            'WColorSelectPanelBlock': {
                'colorPick1': 'rgba(255, 102, 0, 1)',
                'colorPick2': 'rgba(102, 0, 255, 0.533)',
                'colorPick3': 'rgba(153, 255, 51, 0.72)',
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
