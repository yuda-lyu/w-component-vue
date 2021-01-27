<template>
    <component ref="$self" :is="cmpName" :options="options"></component>
    <!-- ref=$self為供外部存取組件之用 -->
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'
import { getHCGlobal } from '../js/highchartsSetting.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入vue-highcharts組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
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
                'https://cdn.jsdelivr.net/npm/highcharts@8.2.2/highcharts.js',
                'https://cdn.jsdelivr.net/npm/highcharts@8.2.2/modules/stock.js', //因vue-highcharts初始化若無stock會無法註冊全域組件, 故若還會使用highstock vue組件, 得先於highcharts vue組件事先載入
                'https://cdn.jsdelivr.net/npm/highcharts@8.2.2/modules/heatmap.js',
                'https://cdn.jsdelivr.net/npm/highcharts@8.2.2/modules/boost.js',
                'https://cdn.jsdelivr.net/npm/highcharts@8.2.2/modules/boost-canvas.js',
                'https://cdn.jsdelivr.net/npm/vue-highcharts@0.1.0/dist/vue-highcharts.min.js', //for vue2
                //'https://cdn.jsdelivr.net/npm/vue-highcharts@0.2.0/dist/vue-highcharts.min.js',
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

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //Highcharts
                    let Highcharts = window['Highcharts']

                    //setOptions
                    Highcharts.setOptions(getHCGlobal())

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
