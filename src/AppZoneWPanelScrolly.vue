<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-scrolly</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'default'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'events'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    @scroll="(msg)=>{getEvents('scroll',msg)}"
                    @scroll-infor="(msg)=>{getEvents('scroll-infor',msg)}"
                    @resize="(msg)=>{getEvents('resize',msg)}"
                    @mutation="(msg)=>{getEvents('mutation',msg)}"
                    @update:scrollTop="(msg)=>{getEvents('update:scrollTop',msg)}"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'barOpacity & barOpacityHover'"
                ></demolink>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    :barOpacity="0"
                    :barOpacityHover="0.8"
                >
                    <table :style="WPanelScrolly.tableStyle"><tbody><tr><td :style="WPanelScrolly.tdStyle">11</td><td :style="WPanelScrolly.tdStyle">12</td><td :style="WPanelScrolly.tdStyle">13</td><td :style="WPanelScrolly.tdStyle">14</td></tr><tr><td :style="WPanelScrolly.tdStyle">21</td><td :style="WPanelScrolly.tdStyle">22</td><td :style="WPanelScrolly.tdStyle">23</td><td :style="WPanelScrolly.tdStyle">24</td></tr><tr><td :style="WPanelScrolly.tdStyle">31</td><td :style="WPanelScrolly.tdStyle">32</td><td :style="WPanelScrolly.tdStyle">33</td><td :style="WPanelScrolly.tdStyle">34</td></tr><tr><td :style="WPanelScrolly.tdStyle">41</td><td :style="WPanelScrolly.tdStyle">42</td><td :style="WPanelScrolly.tdStyle">43</td><td :style="WPanelScrolly.tdStyle">44</td></tr><tr><td :style="WPanelScrolly.tdStyle">51</td><td :style="WPanelScrolly.tdStyle">52</td><td :style="WPanelScrolly.tdStyle">53</td><td :style="WPanelScrolly.tdStyle">54</td></tr></tbody></table>
                </w-panel-scrolly>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-scrolly'"
                    :casename="'scrollTop'"
                ></demolink>

                <div style="font-size:0.8rem; color:#aaa;">scrollTop: {{WPanelScrolly.scrollTop}}</div>

                <w-panel-scrolly
                    style="width:240px; height:200px;"
                    :scrollTop.sync="WPanelScrolly.scrollTop"
                    @update:scrollTop="updateScrollTop"
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
    },
    data: function() {
        return {
            'WPanelScrolly': {
                'tableStyle': 'border-collapse:collapse; background-image:linear-gradient(141deg, #4cc5f8 0%, #3fd8eb 75%);',
                'tdStyle': 'padding:50px 22px; color:white; border:1px solid rgba(255,255,255,0.5); font-size:0.8rem;',
                'scrollTop': 100,
            },
            'actions': [
            ],
        }
    },
    methods: {
        getEvents: function(evName, msg) {
            console.log('getEvents', evName, msg)
        },
        updateScrollTop: function(msg) {
            console.log('updateScrollTop', msg)
        },
    },
}
</script>

<style scoped>
</style>
