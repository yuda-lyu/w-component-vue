<template>
    <div>


        <div class="head1" style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('https://yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-progress-bar</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'default'"
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
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :title="WProgressBar.title"
                    :titleTextColor="'light-green darken-1'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'title & titleTextFontSize'"
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
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :height="10"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'height & borderRadius'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.value"
                    :height="10"
                    :borderRadius="0"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'progColor'"
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
                    :casename="'iconWaitingColor'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueWaiting"
                    :iconWaitingColor="'light-blue accent-2'"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'enableIconWaiting (no iconWaiting)'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueWaiting"
                    :enableIconWaiting="false"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'iconFinish (fontawesome)'"
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
                    :casename="'enableIconFinish (no iconFinish)'"
                ></demolink>

                <w-progress-bar
                    style="width:400px;"
                    :value="WProgressBar.valueFinish"
                    :enableIconFinish="false"
                ></w-progress-bar>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-progress-bar'"
                    :casename="'valueTextColor'"
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
    mounted: function() {
        let vo = this
        setInterval(function() {
            vo.WProgressBar.value += 0.1
            if (vo.WProgressBar.value > 100) {
                vo.WProgressBar.value = 0
            }
            //console.log('vo.WProgressBar.value', vo.WProgressBar.value)
        }, 10)
    },
}
</script>

<style scoped>
</style>
