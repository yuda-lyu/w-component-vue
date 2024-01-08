<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-label-item</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'with text'"
                ></demolink>

                <w-panel-label-item
                    :label="'Name'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'with select'"
                ></demolink>

                <w-panel-label-item
                    :label="'Fruit'"
                >
                    <template v-slot:item>
                        <w-text-select
                            style="width:200px;"
                            :items="WPanelLabelItem.objItems"
                            v-model="WPanelLabelItem.objValue"
                        ></w-text-select>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'labelVerticalAlign'"
                ></demolink>

                <w-panel-label-item
                    :label="'Remark'"
                    :labelVerticalAlign="'top'"
                >
                    <template v-slot:item>
                        <div style="font-size:0.8rem; color:#aaa;">
                            <div style="">
                                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
                            </div>
                            <div style="">
                                Mauris cursus commodo interdum.
                            </div>
                            <div style="">
                                Praesent ut risus eget metus luctus accumsan id ultrices nunc.
                            </div>
                        </div>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'with textarea & labelVerticalAlign'"
                ></demolink>

                <w-panel-label-item
                    :label="'Fruit'"
                    :labelVerticalAlign="'top'"
                >
                    <template v-slot:item>
                        <w-textarea
                            style="width:300px;"
                            :textFontSize="'0.85rem'"
                            v-model="WPanelLabelItem.text"
                        ></w-textarea>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'with group-tags & labelVerticalAlign & labelShiftTop'"
                ></demolink>

                <w-panel-label-item
                    :label="'Fruit'"
                    :labelVerticalAlign="'top'"
                    :labelShiftTop="15"
                >
                    <template v-slot:item>
                        <w-group-tags
                            style="width:300px;"
                            :textFontSize="'0.85rem'"
                            v-model="WPanelLabelItem.strItems"
                        ></w-group-tags>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'labelWidth'"
                ></demolink>

                <div style="">

                    <w-panel-label-item
                        :label="'Styles'"
                        :labelWidth="100"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'CSS'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                    <div style="padding-top:5px;"></div>

                    <w-panel-label-item
                        :label="'Components'"
                        :labelWidth="100"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Data tables'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'labelWidth & labelHorizontalAlign'"
                ></demolink>

                <div style="">

                    <w-panel-label-item
                        :label="'Styles'"
                        :labelWidth="100"
                        :labelHorizontalAlign="'right'"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'CSS'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                    <div style="padding-top:5px;"></div>

                    <w-panel-label-item
                        :label="'Components'"
                        :labelWidth="100"
                        :labelHorizontalAlign="'right'"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Data tables'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'labelColor'"
                ></demolink>

                <w-panel-label-item
                    :label="'Name'"
                    :labelColor="'#EF6C00'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'labelFontSize'"
                ></demolink>

                <w-panel-label-item
                    :label="'Name'"
                    :labelFontSize="'0.75rem'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'space'"
                ></demolink>

                <w-panel-label-item
                    :label="'Name'"
                    :space="12"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'slot label'"
                ></demolink>

                <w-panel-label-item
                    :label="'Name'"
                >
                    <template v-slot:label>
                        <div style="display:flex; align-items:center;">
                            <w-icon
                                :icon="mdiCat"
                                :size="22"
                            ></w-icon>
                            <div style="padding-left:3px; padding-right:7px; font-size:0.8rem;">
                                Name:
                            </div>
                        </div>
                    </template>
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'slot item-sub'"
                ></demolink>

                <div style="border:1px dashed #ddd;">
                    <w-panel-label-item
                        :label="'Name'"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Adelina'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                        <template v-slot:item-sub>
                            <div style="color:#f26; font-size:0.7rem;">
                                Please fill in data.
                            </div>
                        </template>
                    </w-panel-label-item>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'slot item-sub & floatForItemSub'"
                ></demolink>

                <div style="border:1px dashed #ddd;">
                    <w-panel-label-item
                        :label="'Name'"
                        :floatForItemSub="false"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Adelina'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                        <template v-slot:item-sub>
                            <div style="color:#f26; font-size:0.7rem;">
                                Please fill in data.
                            </div>
                        </template>
                    </w-panel-label-item>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'with text & seplines'"
                ></demolink>

                <w-panel-label-item
                    :seplines="true"
                    :label="'Name'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'with select & seplines'"
                ></demolink>

                <w-panel-label-item
                    :seplines="true"
                    :label="'Fruit'"
                >
                    <template v-slot:item>
                        <w-text-select
                            style="width:200px;"
                            :items="WPanelLabelItem.objItems"
                            v-model="WPanelLabelItem.objValue"
                        ></w-text-select>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'with textarea & seplines'"
                ></demolink>

                <w-panel-label-item
                    :seplines="true"
                    :label="'Fruit'"
                >
                    <template v-slot:item>
                        <w-textarea
                            style="width:300px;"
                            :textFontSize="'0.85rem'"
                            v-model="WPanelLabelItem.text"
                        ></w-textarea>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & labelWidth'"
                ></demolink>

                <div style="">

                    <w-panel-label-item
                        :seplines="true"
                        :label="'Styles'"
                        :labelWidth="100"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'CSS'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                    <div style="padding-top:20px;"></div>

                    <w-panel-label-item
                        :seplines="true"
                        :label="'Components'"
                        :labelWidth="100"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Data tables'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & labelWidth & labelHorizontalAlign'"
                ></demolink>

                <div style="">

                    <w-panel-label-item
                        :seplines="true"
                        :label="'Styles'"
                        :labelWidth="220"
                        :labelHorizontalAlign="'right'"
                    >
                        <template v-slot:item>
                            <w-text
                                style="width:220px;"
                                :value="'CSS'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                    <div style="padding-top:20px;"></div>

                    <w-panel-label-item
                        :seplines="true"
                        :label="'Components'"
                        :labelWidth="220"
                        :labelHorizontalAlign="'right'"
                    >
                        <template v-slot:item>
                            <w-text
                                style="width:220px;"
                                :value="'Data tables'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & labelColor'"
                ></demolink>

                <w-panel-label-item
                    :seplines="true"
                    :label="'Name'"
                    :labelColor="'#EF6C00'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & labelFontSize'"
                ></demolink>

                <w-panel-label-item
                    :seplines="true"
                    :label="'Name'"
                    :labelFontSize="'0.75rem'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & space'"
                ></demolink>

                <w-panel-label-item
                    :seplines="true"
                    :label="'Name'"
                    :space="12"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & slot label'"
                ></demolink>

                <w-panel-label-item
                    :seplines="true"
                    :label="'Name'"
                >
                    <template v-slot:label>
                        <div style="display:flex; align-items:center;">
                            <w-icon
                                :icon="mdiCat"
                                :size="22"
                            ></w-icon>
                            <div style="padding-left:3px; font-size:0.8rem;">
                                Name
                            </div>
                        </div>
                    </template>
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & slot item-sub'"
                ></demolink>

                <div style="border:1px dashed #ddd;">
                    <w-panel-label-item
                        :seplines="true"
                        :label="'Name'"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Adelina'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                        <template v-slot:item-sub>
                            <div style="color:#f26; font-size:0.7rem;">
                                Please fill in data.
                            </div>
                        </template>
                    </w-panel-label-item>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-item'"
                    :casename="'seplines & slot item-sub & floatForItemSub'"
                ></demolink>

                <div style="border:1px dashed #ddd;">
                    <w-panel-label-item
                        :seplines="true"
                        :label="'Name'"
                        :floatForItemSub="false"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Adelina'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                        <template v-slot:item-sub>
                            <div style="color:#f26; font-size:0.7rem;">
                                Please fill in data.
                            </div>
                        </template>
                    </w-panel-label-item>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiCat } from '@mdi/js/mdi.js'
import demolink from './components/demolink.vue'
import WIcon from './components/WIcon.vue'
import WText from './components/WText.vue'
import WTextarea from './components/WTextarea.vue'
import WTextSelect from './components/WTextSelect.vue'
import WGroupTags from './components/WGroupTags.vue'
import WPanelLabelItem from './components/WPanelLabelItem.vue'


export default {
    components: {
        demolink,
        WIcon,
        WText,
        WTextarea,
        WTextSelect,
        WGroupTags,
        WPanelLabelItem,
    },
    props: {
    },
    data: function() {
        return {
            mdiCat,
            'WPanelLabelItem': {
                strItems: [
                    'Dashboard',
                    'Schedule',
                    'Profile',
                    'History',
                    'Map',
                    '聯絡方式',
                ],
                objItems: [
                    {
                        key: 'orange',
                        text: '橘子(orange)',
                    },
                    {
                        key: 'banana',
                        text: '香蕉(banana)',
                    },
                    {
                        key: 'strawberry',
                        text: '草莓(strawberry)',
                    },
                ],
                objValue: {
                    key: 'banana',
                    text: '香蕉(banana)',
                },
                text: 'The Woodman(樵夫) set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
