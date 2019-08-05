<template>
    <div>


        <div class="head1">w-progress-circle</div>


        <div style="padding-left:30px;">


            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-circle :text="'完成進度'" :value="12"></w-progress-circle>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'color'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :casename="'width'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-circle
                    :text="'Completion'"
                    :value="57"
                    :width="3"
                ></w-progress-circle>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'small size'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-circle
                    :text="'Reverse'"
                    :value="92"
                    :size="80"
                    :width="7"
                    :color="'orange accent-1'"
                ></w-progress-circle>
            </div>

            <div class="bk">
                <demolink
                    :kbname="'w-progress-circle'"
                    :casename="'tooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-circle
                    :text="'Exposure'"
                    :value="72"
                    :color="'brown lighten-2'"
                    :tooltip="'資訊揭露程度(%)'"
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
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
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
        }
    },
}
</script>

<style scoped>
</style>
