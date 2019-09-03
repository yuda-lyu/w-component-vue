<template>
    <div>


        <div class="head1">w-button-group-chip</div>


        <div style="padding-left:30px;">


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'breadcrumbs, clickable false in some items'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :activeIndex="-1"
                    :value="WButtonGroupChip.breadcrumbs"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'tooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basicTooltip"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :borderRadius="5"
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'not small (large)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :small="false"
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :textColor="'orange darken-1'"
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'backgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :backgroundColor="'amber lighten-5'"
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'borderColor & borderColorHover & backgroundColorHover & backgroundColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :borderColor="'grey lighten-2'"
                    :borderColorHover="'grey lighten-1'"
                    :backgroundColorHover="'grey lighten-3'"
                    :backgroundColorActive="'grey lighten-2'"
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'borderShadow & borderColor & borderColorHover & backgroundColorHover & backgroundColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :borderShadow="true"
                    :borderColor="'white'"
                    :borderColorHover="'white'"
                    :backgroundColorHover="'grey lighten-3'"
                    :backgroundColorActive="'grey lighten-2'"
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :editable="false"
                    :activeIndex.sync="WButtonGroupChip.activeIndex"
                    :value="WButtonGroupChip.basic"
                ></w-button-group-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-group-chip'"
                    :casename="'nodata'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-group-chip
                    :nodata="'無數據'"
                    :value="[]"
                ></w-button-group-chip>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WButtonGroupChip from './components/WButtonGroupChip.vue'

export default {
    components: {
        demolink,
        WButtonGroupChip,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
    },
    data: function() {
        return {
            'WButtonGroupChip': {
                'activeIndex': 0,
                'basic': [
                    {
                        text: 'Apple',
                    },
                    {
                        text: 'Orange',
                    },
                    {
                        text: 'Banana',
                    },
                ],
                'basicTooltip': [
                    {
                        text: 'Apple',
                        tooltip: 'tooltip apple',
                    },
                    {
                        text: 'Orange',
                        tooltip: 'tooltip apple',
                    },
                    {
                        text: 'Banana',
                        tooltip: 'tooltip banana',
                    },
                ],
                'breadcrumbs': [
                    {
                        text: '現在位置：',
                        clickable: false,
                    },
                    {
                        text: 'Domain',
                    },
                    {
                        text: '>',
                        clickable: false,
                    },
                    {
                        text: 'Kingdom',
                    },
                    {
                        text: '>',
                        clickable: false,
                    },
                    {
                        text: 'Class',
                    },
                ],
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'nth': 1,
                    'selector': 'div[ButtonGroupChip="item"]',
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
