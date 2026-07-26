<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-divide-horizontal-triple</span></div>


        <div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'ratio1 & ratio2'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :ratio1="0.2"
                        :ratio2="0.5"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'ratio1Min & ratio1Max'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :ratio1Min="0.1"
                        :ratio1Max="0.3"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'ratio2Min & ratio2Max'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :ratio2Min="0.6"
                        :ratio2Max="0.9"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'sectionWidthMin & sectionWidthMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :sectionWidthMin="150"
                        :sectionWidthMax="450"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'leftWidthMin & leftWidthMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :leftWidthMin="200"
                        :leftWidthMax="350"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'centerWidthMin & centerWidthMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :centerWidthMin="200"
                        :centerWidthMax="350"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'rightWidthMin & rightWidthMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :rightWidthMin="200"
                        :rightWidthMax="350"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'barColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:300px;"
                        :barColor="'#f26'"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlCenter"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontalTriple.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'barSize'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:400px;"
                        :barSize="1"
                        :ratio1.sync="WPanelDivideHorizontalTriple.ratio1A"
                        :ratio2.sync="WPanelDivideHorizontalTriple.ratio2A"
                    >
                        <template v-slot:left="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001.jpg" />
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img :style="`position:absolute; top:0; left:${-WPanelDivideHorizontalTriple.ratio1A*800}px; width:800px; height:600px; user-select:none; user-drag:none;`" src="https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001-gray.jpg" />
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img :style="`position:absolute; top:0; left:${-WPanelDivideHorizontalTriple.ratio2A*800}px; width:800px; height:600px; user-select:none; user-drag:none;`" src="https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001.jpg" />
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal-triple'"
                    :casename="'barBorderSize & barBorderColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal-triple
                        style="width:800px; height:400px;"
                        :barBorderSize="10"
                        :barBorderColor="'rgba(255,255,255,0.25)'"
                        :ratio1.sync="WPanelDivideHorizontalTriple.ratio1B"
                        :ratio2.sync="WPanelDivideHorizontalTriple.ratio2B"
                    >
                        <template v-slot:left="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001.jpg" />
                            </div>
                        </template>
                        <template v-slot:center="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img :style="`position:absolute; top:0; left:${-WPanelDivideHorizontalTriple.ratio1B*800}px; width:800px; height:600px; user-select:none; user-drag:none;`" src="https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001-gray.jpg" />
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img :style="`position:absolute; top:0; left:${-WPanelDivideHorizontalTriple.ratio2B*800}px; width:800px; height:600px; user-select:none; user-drag:none;`" src="https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001.jpg" />
                            </div>
                        </template>
                    </w-panel-divide-horizontal-triple>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelDivideHorizontalTriple from './components/WPanelDivideHorizontalTriple.vue'


export default {
    components: {
        demolink,
        WPanelDivideHorizontalTriple,
    },
    props: {
    },
    data: function() {
        let h = '<div style="margin:20px;">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div>'
        return {
            'WPanelDivideHorizontalTriple': {
                'htmlLeft': '<h2 style="margin:20px;">Left</h2>' + h,
                'htmlCenter': '<h2 style="margin:20px;">Center</h2>' + h,
                'htmlRight': '<h2 style="margin:20px;">Right</h2>' + h,
                'ratio1A': 1 / 3,
                'ratio2A': 2 / 3,
                'ratio1B': 1 / 3,
                'ratio2B': 2 / 3,
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
