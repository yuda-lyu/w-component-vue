<template>
    <div>


        <div class="head1">w-badge</div>


        <div style="padding-left:30px;">


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-badge
                    :text="WBadge.text"
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
                'text': 'aBc數字123',
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
