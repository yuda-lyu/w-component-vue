<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-divide-horizontal</span></div>


        <div style="padding:0px;">


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:300px;"
                    >
                        <template v-slot:left="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'ratio'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:300px;"
                        :ratio="0.25"
                    >
                        <template v-slot:left="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'ratioMin & ratioMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:300px;"
                        :ratioMin="0.25"
                        :ratioMax="0.75"
                    >
                        <template v-slot:left="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'leftWidthMin & leftWidthMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:300px;"
                        :leftWidthMin="200"
                        :leftWidthMax="350"
                    >
                        <template v-slot:left="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'rightWidthMin & rightWidthMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:300px;"
                        :rightWidthMin="200"
                        :rightWidthMax="350"
                    >
                        <template v-slot:left="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'barColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:300px;"
                        :barColor="'#f26'"
                    >
                        <template v-slot:left="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlLeft"></div>
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.width}}px)</div>
                                <div v-html="WPanelDivideHorizontal.htmlRight"></div>
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'barSize'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:400px;"
                        :barSize="1"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.23/res/img/view/001.jpg" />
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; right:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.23/res/img/view/001-gray.jpg" />
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-horizontal'"
                    :casename="'barBorderSize & barBorderColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-horizontal
                        style="width:800px; height:400px;"
                        :barBorderSize="10"
                        :barBorderColor="'rgba(255,255,255,0.25)'"
                    >
                        <template v-slot:left="props">
                            <div :style="`overflow-y:auto; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.23/res/img/view/001.jpg" />
                            </div>
                        </template>
                        <template v-slot:right="props">
                            <div :style="`overflow-y:auto; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; right:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.23/res/img/view/001-gray.jpg" />
                            </div>
                        </template>
                    </w-panel-divide-horizontal>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelDivideHorizontal from './components/WPanelDivideHorizontal.vue'


export default {
    components: {
        demolink,
        WPanelDivideHorizontal,
    },
    props: {
    },
    data: function() {
        let h = '<div style="margin:20px;">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div>'
        return {
            'WPanelDivideHorizontal': {
                'htmlLeft': '<h2 style="margin:20px;">Left</h2>' + h,
                'htmlRight': '<h2 style="margin:20px;">Right</h2>' + h,
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
