<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-divide-multi</span></div>


        <div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:300px;"
                    >
                        <template v-slot:pane="props">
                            <div :style="`width:${props.width}px; height:${props.height}px; overflow:auto;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">[{{props.row}},{{props.col}}]({{props.width}}px, {{props.height}}px)</div>
                                <div v-html="WPanelDivideMulti.htmls[props.index]"></div>
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'rows & cols'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="3"
                        :cols="3"
                    >
                        <template v-slot:pane="props">
                            <div :style="`width:${props.width}px; height:${props.height}px; overflow:auto;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">[{{props.row}},{{props.col}}]({{props.width}}px, {{props.height}}px)</div>
                                <div v-html="WPanelDivideMulti.htmls[props.index]"></div>
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'layouts'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="2"
                        :cols="2"
                        :layouts="['1:1', '2:2', '3:3']"
                    >
                        <template v-slot:pane="props">
                            <div :style="`width:${props.width}px; height:${props.height}px; overflow:auto;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">[{{props.row}},{{props.col}}]({{props.width}}px, {{props.height}}px)</div>
                                <div v-html="WPanelDivideMulti.htmls[props.index]"></div>
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'ratiosX & ratiosY'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="2"
                        :cols="3"
                        :ratiosX.sync="WPanelDivideMulti.ratiosX"
                        :ratiosY.sync="WPanelDivideMulti.ratiosY"
                    >
                        <template v-slot:pane="props">
                            <div :style="`width:${props.width}px; height:${props.height}px; overflow:auto;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">[{{props.row}},{{props.col}}]({{props.width}}px, {{props.height}}px)</div>
                                <div v-html="WPanelDivideMulti.htmls[props.index]"></div>
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

                <div style="padding:5px 0px; font-size:0.7rem;">ratiosX: {{WPanelDivideMulti.ratiosX}}</div>
                <div style="padding:0px 0px 5px 0px; font-size:0.7rem;">ratiosY: {{WPanelDivideMulti.ratiosY}}</div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'sectionWidthMin & sectionHeightMin'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="2"
                        :cols="3"
                        :sectionWidthMin="150"
                        :sectionHeightMin="100"
                    >
                        <template v-slot:pane="props">
                            <div :style="`width:${props.width}px; height:${props.height}px; overflow:auto;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">[{{props.row}},{{props.col}}]({{props.width}}px, {{props.height}}px)</div>
                                <div v-html="WPanelDivideMulti.htmls[props.index]"></div>
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'sectionWidthMax & sectionHeightMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="2"
                        :cols="3"
                        :sectionWidthMax="400"
                        :sectionHeightMax="300"
                    >
                        <template v-slot:pane="props">
                            <div :style="`width:${props.width}px; height:${props.height}px; overflow:auto;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">[{{props.row}},{{props.col}}]({{props.width}}px, {{props.height}}px)</div>
                                <div v-html="WPanelDivideMulti.htmls[props.index]"></div>
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'barColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="2"
                        :cols="2"
                        :barColor="'#f26'"
                    >
                        <template v-slot:pane="props">
                            <div :style="`width:${props.width}px; height:${props.height}px; overflow:auto;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">[{{props.row}},{{props.col}}]({{props.width}}px, {{props.height}}px)</div>
                                <div v-html="WPanelDivideMulti.htmls[props.index]"></div>
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'barSize'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="2"
                        :cols="2"
                        :barSize="1"
                        :ratiosX.sync="WPanelDivideMulti.ratiosXA"
                        :ratiosY.sync="WPanelDivideMulti.ratiosYA"
                    >
                        <template v-slot:pane="props">
                            <div :style="`position:relative; width:${props.width}px; height:${props.height}px; overflow:hidden;`">
                                <img
                                    :style="`position:absolute; top:${props.row === 0 ? 0 : -WPanelDivideMulti.ratiosYA[props.col][0]*400}px; left:${props.col === 0 ? 0 : -WPanelDivideMulti.ratiosXA[0]*800}px; width:800px; height:600px; user-select:none; user-drag:none;`"
                                    :src="(props.row+props.col)%2 === 0 ? 'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001.jpg' : 'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001-gray.jpg'"
                                />
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-multi'"
                    :casename="'barBorderSize & barBorderColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-multi
                        style="width:800px; height:400px;"
                        :rows="2"
                        :cols="2"
                        :barBorderSize="10"
                        :barBorderColor="'rgba(255,255,255,0.25)'"
                        :ratiosX.sync="WPanelDivideMulti.ratiosXB"
                        :ratiosY.sync="WPanelDivideMulti.ratiosYB"
                    >
                        <template v-slot:pane="props">
                            <div :style="`position:relative; width:${props.width}px; height:${props.height}px; overflow:hidden;`">
                                <img
                                    :style="`position:absolute; top:${props.row === 0 ? 0 : -WPanelDivideMulti.ratiosYB[props.col][0]*400}px; left:${props.col === 0 ? 0 : -WPanelDivideMulti.ratiosXB[0]*800}px; width:800px; height:600px; user-select:none; user-drag:none;`"
                                    :src="(props.row+props.col)%2 === 0 ? 'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001.jpg' : 'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001-gray.jpg'"
                                />
                            </div>
                        </template>
                    </w-panel-divide-multi>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelDivideMulti from './components/WPanelDivideMulti.vue'


export default {
    components: {
        demolink,
        WPanelDivideMulti,
    },
    props: {
    },
    data: function() {
        let h = '<div style="margin:20px;">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div>'
        let htmls = []
        for (let k = 0; k < 9; k++) {
            htmls.push('<h2 style="margin:20px;">Pane ' + k + '</h2>' + h)
        }
        return {
            'WPanelDivideMulti': {
                htmls,
                'ratiosX': [0.25, 0.5],
                'ratiosY': [[0.5], [0.5], [0.5]],
                'ratiosXA': [0.5],
                'ratiosYA': [[0.5], [0.5]],
                'ratiosXB': [0.5],
                'ratiosYB': [[0.5], [0.5]],
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
