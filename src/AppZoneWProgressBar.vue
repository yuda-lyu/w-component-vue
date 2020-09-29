<template>
    <div>


        <div class="head1">w-progress-bar</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'value=0 (waiting)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueWaiting"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'value=100 (finish)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueFinish"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'decimal'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :decimal="0"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'title'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :title="WProgressBar.title"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'title & titleTextColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :title="WProgressBar.title"
                    :titleTextColor="'light-green accent-4'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'title & titleTextFontSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :title="WProgressBar.title"
                    :titleTextFontSize="'1rem'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'height'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :height="6"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :borderRadius="0"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'progColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :progColor="'orange lighten-1'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'progColor & progBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :progColor="'orange lighten-1'"
                    :progBackgroundColor="'orange lighten-5'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'iconSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueFinish"
                    :iconSize="16"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'iconWaiting (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueWaiting"
                    :iconWaiting="'fas fa-shoe-prints'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'iconWatingColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueWaiting"
                    :iconWatingColor="'light-blue accent-2'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'iconFinish (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueFinish"
                    :iconFinish="'fas fa-check-circle'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'iconFinishColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueFinish"
                    :iconFinishColor="'lime accent-4'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'valueTextColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :valueTextColor="'light-green darken-1'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'valueTextFontSize'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :valueTextFontSize="'0.7rem'"
                ></w-progress-bar>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WProgressBar from './components/WProgressBar.vue'


export default {
    components: {
        demolink,
        WProgressBar,
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
            'WProgressBar': {
                'title': 'uploading file...',
                'value': 25,
                'valueWaiting': 0,
                'valueFinish': 100,
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
