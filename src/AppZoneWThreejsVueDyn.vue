<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-threejs-vue-dyn</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/mrdoob/three.js" target="_blank" rel="noreferrer noopener">three.js</a>
            <span style="margin:0px 10px">|</span>
            <a href="//threejs.org/" target="_blank" rel="noreferrer noopener">three.js examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-threejs-vue" target="_blank" rel="noreferrer noopener">w-threejs-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-threejs-vue/examples/app.html" target="_blank" rel="noreferrer noopener">w-threejs-vue examples</a>
        </div>


        <div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-threejs-vue-dyn'"
                    :casename="'basicSize'"
                ></demolink>

                <div>

                    <w-button-chip
                        style="margin:0px 5px 5px 0px;"
                        :paddingStyle="{v:0,h:8}"
                        :text="'set width to 800'"
                        @click="setWidth(800)"
                    ></w-button-chip>

                    <w-button-chip
                        style="margin:0px 5px 5px 0px;"
                        :paddingStyle="{v:0,h:8}"
                        :text="'set width to 300'"
                        @click="setWidth(300)"
                    ></w-button-chip>

                    <w-button-chip
                        style="margin:0px 5px 5px 0px;"
                        :paddingStyle="{v:0,h:8}"
                        :text="'set height to 600'"
                        @click="setHeight(600)"
                    ></w-button-chip>

                    <w-button-chip
                        style="margin:0px 5px 5px 0px;"
                        :paddingStyle="{v:0,h:8}"
                        :text="'set height to 300'"
                        @click="setHeight(300)"
                    ></w-button-chip>

                </div>
                <w-threejs-vue-dyn
                    :opt="WThreejsVueDyn.optBasicSize"
                    @init="loading=false"
                ></w-threejs-vue-dyn>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-threejs-vue-dyn'"
                    :casename="'autoRotateDeg'"
                ></demolink>

                <div>

                    <w-button-chip
                        style="margin:0px 5px 5px 0px;"
                        :paddingStyle="{v:0,h:8}"
                        :text="'set to 20'"
                        @click="setAutoRotateDeg(20)"
                    ></w-button-chip>

                    <w-button-chip
                        style="margin:0px 5px 5px 0px;"
                        :paddingStyle="{v:0,h:8}"
                        :text="'set to -5'"
                        @click="setAutoRotateDeg(-5)"
                    ></w-button-chip>

                </div>
                <w-threejs-vue-dyn
                    :opt="WThreejsVueDyn.optAutoRotateDeg"
                    @init="loading=false"
                ></w-threejs-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WButtonChip from './components/WButtonChip.vue'
import WThreejsVueDyn from './components/WThreejsVueDyn.vue'


export default {
    components: {
        demolink,
        WButtonChip,
        WThreejsVueDyn,
    },
    props: {
    },
    data: function() {
        return {
            'loading': true,
            'WThreejsVueDyn': {
                'optBasicSize': {
                    width: 800,
                    height: 600,
                    items: [
                        {
                            url: 'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/model/stl/3d_wheel-hub.stl',
                            name: 'Wheel Hub',
                            color: 'rgba(214, 92, 92, 0.9)',
                        },
                        {
                            url: 'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/model/stl/3d_ushape-connector.stl',
                            name: 'Ushape Connector',
                            color: 'rgba(214, 214, 92, 0.9)',
                        },
                    ],
                },
                'optAutoRotateDeg': {
                    width: 800,
                    height: 600,
                    items: [
                        {
                            url: 'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/model/stl/3d_wheel-hub.stl',
                            name: 'Wheel Hub',
                            color: 'rgba(214, 92, 92, 0.9)',
                        },
                        {
                            url: 'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/model/stl/3d_ushape-connector.stl',
                            name: 'Ushape Connector',
                            color: 'rgba(214, 214, 92, 0.9)',
                        },
                    ],
                    useAutoRotate: true,
                    autoRotateDeg: -5,
                },
            },
            'actions': [
            ],
        }
    },
    methods: {
        setWidth: function(r) {
            let vo = this
            vo.WThreejsVueDyn.optBasicSize.width = r
        },
        setHeight: function(r) {
            let vo = this
            vo.WThreejsVueDyn.optBasicSize.height = r
        },
        setAutoRotateDeg: function(r) {
            let vo = this
            vo.WThreejsVueDyn.optAutoRotateDeg.autoRotateDeg = r
        },
    },
}
</script>

<style scoped>
</style>
