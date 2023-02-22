<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-progress-circle</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'default'"
                ></demolink>

                <w-progress-circle
                    :text="WProgressCircle.text"
                    :value="WProgressCircle.value"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'中文text'"
                ></demolink>

                <w-progress-circle :text="'完成進度'" :value="12"></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'color'"
                ></demolink>

                <w-progress-circle
                    :text="'Passionate'"
                    :value="83"
                    :color="'pink lighten-1'"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'color & trackColor'"
                ></demolink>

                <w-progress-circle
                    :text="'Passionate'"
                    :value="83"
                    :color="'#AFB42B'"
                    :trackColor="'#E6EE9C'"
                ></w-progress-circle>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'width'"
                ></demolink>

                <w-progress-circle
                    :text="'Completion'"
                    :value="57"
                    :width="3"
                    :color="'#7B1FA2'"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'small size'"
                ></demolink>

                <w-progress-circle
                    :text="'Reverse'"
                    :value="92"
                    :size="80"
                    :width="4"
                    :color="'#9E9D24'"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'very small size'"
                ></demolink>

                <w-progress-circle
                    :value="100"
                    :size="26"
                    :width="2"
                    :color="'#00C853'"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'tooltip'"
                ></demolink>

                <w-progress-circle
                    :text="'Exposure'"
                    :value="72"
                    :color="'#BDBDBD'"
                    :tooltip="'資訊揭露程度(%)'"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'tooltip & tooltipBorderRadius'"
                ></demolink>

                <w-progress-circle
                    :text="'Exposure'"
                    :value="72"
                    :color="'#BDBDBD'"
                    :tooltip="'資訊揭露程度(%)'"
                    :tooltipBorderRadius="10"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'tooltip & tooltipPaddingStyle'"
                ></demolink>

                <w-progress-circle
                    :text="'Exposure'"
                    :value="72"
                    :color="'#BDBDBD'"
                    :tooltip="'資訊揭露程度(%)'"
                    :tooltipPaddingStyle="{v:10,h:13}"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'tooltip & tooltipTextFontSize'"
                ></demolink>

                <w-progress-circle
                    :text="'Exposure'"
                    :value="72"
                    :color="'#BDBDBD'"
                    :tooltip="'資訊揭露程度(%)'"
                    :tooltipTextFontSize="'0.7rem'"
                ></w-progress-circle>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'tooltip & tooltipTextColor & tooltipBackgroundColor'"
                ></demolink>

                <w-progress-circle
                    :text="'Exposure'"
                    :value="72"
                    :color="'#BDBDBD'"
                    :tooltip="'資訊揭露程度(%)'"
                    :tooltipTextColor="'#E65100'"
                    :tooltipBackgroundColor="'#FFF3E0'"
                ></w-progress-circle>
            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WProgressCircle from './components/WProgressCircle.vue'


export default {
    components: {
        demolink,
        WProgressCircle,
    },
    props: {
    },
    data: function() {
        return {
            'WProgressCircle': {
                'text': 'Capacity',
                'value': 30
            },
            'actions': [
                {
                    'mode': 'elehover',
                    'selector': 'div[role="progressbar"]'
                },
            ],
            't': null,
        }
    },
    mounted: function() {
        let vo = this
        vo.t = setInterval(() => {
            vo.WProgressCircle.value = Math.round(Math.random() * 100 * 10) / 10
        }, 1000)
    },
    beforeDestroy: function() {
        let vo = this
        clearInterval(vo.t)
    },
}
</script>

<style scoped>
</style>
