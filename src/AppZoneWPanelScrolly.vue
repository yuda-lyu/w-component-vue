<template>
    <div>


        <div class="head1">w-panel-scrolly</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    @scroll="scroll"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'scrollDelta'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    :scrollDelta="200"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'barColor & barBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    :barColor="'rgba(250,255,255,0.75)'"
                    :barBackgroundColor="'rgba(0,0,0,0.05)'"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'barWidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    :barWidth="6"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'barHeightMin'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    :barHeightMin="20"
                >
                    <div :style="`height:10000px; background-image:linear-gradient(141deg, #4cc5f8 0%, #fae 75%);`"></div>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'ratio'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    :ratio.sync="WPanelScrolly.ratio"
                    @update:ratio="updateRatio"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WPanelScrolly from './components/WPanelScrolly.vue'


export default {
    components: {
        demolink,
        WPanelScrolly,
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
            'WPanelScrolly': {
                'tableStyle': 'border-collapse:collapse; background-image:linear-gradient(141deg, #4cc5f8 0%, #3fd8eb 75%);',
                'tdStyle': 'padding:50px 22px; color:white; border:1px solid rgba(255,255,255,0.5); font-size:0.8rem;',
                'ratio': 0.5,
            },
            'actions': [
            ],
        }
    },
    methods: {
        scroll: function(v) {
            //console.log('scroll', v)
        },
        updateRatio: function(v) {
            //console.log('updateRatio', v)
        },
    },
}
</script>

<style scoped>
</style>
