<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-badge</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-badge'"
                    :casename="'default'"
                ></demolink>

                <w-badge
                    :text="WBadge.number"
                >
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
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
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
                </w-badge>

                <w-badge
                    style="margin-right:20px;"
                    :text="WBadge.textLong"
                    :badgeAlign="'left'"
                >
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
                </w-badge>

                <w-badge
                    style="margin-right:20px;"
                    :text="WBadge.textLong"
                    :badgeAlign="'right'"
                >
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
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
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
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
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
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
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
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
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
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
                    <div style="padding:7px 10px; font-size:0.85rem; background:#ddd; text-align:center;">{{WBadge.labelText}}</div>
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
    methods: {
    }
}
</script>

<style scoped>
</style>
