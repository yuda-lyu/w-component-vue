<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-divide-vertical</span></div>


        <div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:300px;"
                    >
                        <template v-slot:top="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlTop"></div>
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlBottom"></div>
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'ratio'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:300px;"
                        :ratio="0.25"
                    >
                        <template v-slot:top="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlTop"></div>
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlBottom"></div>
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'ratioMin & ratioMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:300px;"
                        :ratioMin="0.25"
                        :ratioMax="0.75"
                    >
                        <template v-slot:top="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlTop"></div>
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlBottom"></div>
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'topHeightMin & topHeightMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:300px;"
                        :topHeightMin="70"
                        :topHeightMax="130"
                    >
                        <template v-slot:top="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlTop"></div>
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlBottom"></div>
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'bottomHeightMin & bottomHeightMax'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:300px;"
                        :bottomHeightMin="70"
                        :bottomHeightMax="130"
                    >
                        <template v-slot:top="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlTop"></div>
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlBottom"></div>
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'barColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:300px;"
                        :barColor="'#f26'"
                    >
                        <template v-slot:top="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlTop"></div>
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <!-- 用:style才能支援IE11因vue會自動把overflow-y:auto轉為-ms-overflow-y:auto -->
                            <div :style="`overflow-y:auto; height:${props.height}px;`">
                                <div style="padding:0px 5px; font-size:0.6rem; background:#eef; user-select:none; user-drag:none;">{{props.ratio}}({{props.height}}px)</div>
                                <div v-html="WPanelDivideVertical.htmlBottom"></div>
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'barSize'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:400px; border:1px solid #ddd;"
                        :barSize="1"
                    >
                        <template v-slot:top="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/001.jpg" />
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; bottom:-200px; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/001-gray.jpg" />
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-panel-divide-vertical'"
                    :casename="'barBorderSize & barBorderColor'"
                ></demolink>

                <div style="display:inline-block; border:1px solid #ddd;">
                    <w-panel-divide-vertical
                        style="width:800px; height:400px; border:1px solid #ddd;"
                        :barBorderSize="10"
                        :barBorderColor="'rgba(255,255,255,0.25)'"
                    >
                        <template v-slot:top="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; top:0; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/001.jpg" />
                            </div>
                        </template>
                        <template v-slot:bottom="props">
                            <div :style="`position:relative; height:${props.height}px; overflow:hidden;`">
                                <img style="position:absolute; bottom:-200px; left:0; width:800px; height:600px; user-select:none; user-drag:none;" src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/001-gray.jpg" />
                            </div>
                        </template>
                    </w-panel-divide-vertical>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelDivideVertical from './components/WPanelDivideVertical.vue'


export default {
    components: {
        demolink,
        WPanelDivideVertical,
    },
    props: {
    },
    data: function() {
        let h = '<div style="margin:20px;">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div><div style="margin:20px;">4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. </div>'
        return {
            'WPanelDivideVertical': {
                'htmlTop': '<h2 style="margin:20px;">Top</h2>' + h,
                'htmlBottom': '<h2 style="margin:20px;">Bottom</h2>' + h,
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
