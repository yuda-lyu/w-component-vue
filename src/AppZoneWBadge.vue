<template>
    <div>


        <div class="head1">w-badge</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.number"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'badgeAlign'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.textLong"
                    :badgeAlign="'center'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

                <w-badge
                    :text="WBadge.textLong"
                    :badgeAlign="'left'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

                <w-badge
                    :text="WBadge.textLong"
                    :badgeAlign="'right'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'textFontSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.text"
                    :textFontSize="'0.9rem'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'backgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.text"
                    :backgroundColor="'purple'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'textColor & backgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.text"
                    :textColor="'orange accent-4'"
                    :backgroundColor="'orange lighten-5'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.text"
                    :borderRadius="3"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'borderColor & textColor & backgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.text"
                    :textColor="'orange accent-4'"
                    :backgroundColor="'orange lighten-5'"
                    :borderColor="'deep-orange darken-1'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WBadge from './components/WBadge.vue'


export default {
    components: {
        demolink,
        WBadge,
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
            'WBadge': {
                'number': '5',
                'text': 'A',
                'textLong': 'Abc中文123',
                'labelText': '測試中文Label'
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'span[class="v-chip__content"]'
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
