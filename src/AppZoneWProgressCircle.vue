<template>
    <div>


        <div class="head1">w-progress-circle</div>


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
                    :casename="'width'"
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
                    :casename="'very small size'"
                ></demolink>

                <w-progress-circle
                    :value="100"
                    :size="26"
                    :width="2"
                    :color="'light-green accent-4'"
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
