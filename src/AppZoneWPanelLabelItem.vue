<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-label-Item</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'with text'"
                ></demolink>

                <w-panel-label-Item
                    :label="'Name'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'with select'"
                ></demolink>

                <w-panel-label-Item
                    :label="'Fruit'"
                >
                    <template v-slot:item>
                        <w-text-select
                            style="width:200px;"
                            :items="WPanelLabelItem.objItems"
                            v-model="WPanelLabelItem.objValue"
                        ></w-text-select>
                    </template>
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'labelVerticalAlign'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'with textarea & labelVerticalAlign'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'labelWidth'"
                ></demolink>

                <div style="">

                    <w-panel-label-Item
                        :label="'Styles'"
                        :labelWidth="100"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'CSS'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-Item>

                    <div style="padding-top:5px;"></div>

                    <w-panel-label-Item
                        :label="'Components'"
                        :labelWidth="100"
                    >
                        <template v-slot:item>
                            <w-text
                                :value="'Data tables'"
                                :textFontSize="'0.85rem'"
                            ></w-text>
                        </template>
                    </w-panel-label-Item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'labelWidth & labelHorizontalAlign'"
                ></demolink>

                <div style="">

                    <w-panel-label-Item
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
                    </w-panel-label-Item>

                    <div style="padding-top:5px;"></div>

                    <w-panel-label-Item
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
                    </w-panel-label-Item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'labelFontSize'"
                ></demolink>

                <w-panel-label-Item
                    :label="'Name'"
                    :labelFontSize="'0.75rem'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'space'"
                ></demolink>

                <w-panel-label-Item
                    :label="'Name'"
                    :space="12"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'slot label'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'slot item-sub'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'with text & seplines'"
                ></demolink>

                <w-panel-label-Item
                    :seplines="true"
                    :label="'Name'"
                >
                    <template v-slot:item>
                        <w-text
                            :value="'Adelina'"
                            :textFontSize="'0.85rem'"
                        ></w-text>
                    </template>
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'with select & seplines'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'with textarea & seplines'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'seplines & labelWidth'"
                ></demolink>

                <div style="">

                    <w-panel-label-Item
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
                    </w-panel-label-Item>

                    <div style="padding-top:20px;"></div>

                    <w-panel-label-Item
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
                    </w-panel-label-Item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'seplines & labelWidth & labelHorizontalAlign'"
                ></demolink>

                <div style="">

                    <w-panel-label-Item
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
                    </w-panel-label-Item>

                    <div style="padding-top:20px;"></div>

                    <w-panel-label-Item
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
                    </w-panel-label-Item>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'seplines & labelFontSize'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'seplines & space'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'seplines & slot label'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-label-Item'"
                    :casename="'seplines & slot item-sub'"
                ></demolink>

                <w-panel-label-Item
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
                </w-panel-label-Item>

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
import WPanelLabelItem from './components/WPanelLabelItem.vue'


export default {
    components: {
        demolink,
        WIcon,
        WText,
        WTextarea,
        WTextSelect,
        WPanelLabelItem,
    },
    props: {
    },
    data: function() {
        return {
            mdiCat,
            'WPanelLabelItem': {
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
