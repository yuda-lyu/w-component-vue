<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :options="options"></component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入highcharts與vue-highcharts組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Object} [options={}] 輸入highcharts設定物件，預設{}
 */
//export default {
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [

                //jsdelivr: https://cdn.jsdelivr.net/npm/highcharts@11.4.8/
                //official: https://code.highcharts.com/11/

                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/highcharts.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/highcharts-more.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/stock.js', //因vue-highcharts初始化若無stock會無法註冊全域組件, 故若還會使用highstock vue組件, 得先於highcharts vue組件事先載入
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/annotations.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/heatmap.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/boost.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/boost-canvas.js',

                'https://cdn.jsdelivr.net/npm/vue-highcharts@0.1.0/dist/vue-highcharts.min.js', //for vue2
                //'https://cdn.jsdelivr.net/npm/vue-highcharts@0.2.0/dist/vue-highcharts.min.js',

                // 'https://cdn.jsdelivr.net/npm/w-highcharts@1.0.2/dist/w-highcharts.umd.js', //bbb
                'base:w-highcharts',

            ],
        },
        options: {
            type: Object,
            default: () => {},
        },
    },
    data: function() {
        return {
            cmpName: 'WIconLoading',
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //importResExt
        importResExt(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //Highcharts
                    let Highcharts = window['Highcharts']

                    //whc
                    let whc = window['w-highcharts']

                    //iniMarkers
                    whc.iniMarkers(Highcharts)

                    //setOptions
                    Highcharts.setOptions(whc.getDefOpt())

                    //cmp
                    let cmp = window['VueHighcharts']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().use(cmp, { Highcharts })

                }
                vo.cmpName = 'Highcharts'
            })

    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
</style>
