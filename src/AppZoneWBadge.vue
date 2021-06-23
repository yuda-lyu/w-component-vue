<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-badge</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'default'"
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
                ></demolink>

                <w-badge
                    style="margin-right:20px;"
                    :text="WBadge.textLong"
                    :badgeAlign="'center'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

                <w-badge
                    style="margin-right:20px;"
                    :text="WBadge.textLong"
                    :badgeAlign="'left'"
                >
                    <v-chip style="margin:0px;" label>{{WBadge.labelText}}</v-chip>
                </w-badge>

                <w-badge
                    style="margin-right:20px;"
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
    },
    data: function() {
        return {
            'WBadge': {
                'number': '5',
                'text': 'A',
                'textLong': 'A123',
                'labelText': '測試中文Label',
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
