<template>
    <component :is="cmpName" :options="options"></component>
</template>

<script>
import Vue from 'vue'
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'

/**
 * @vue-prop {Array} [pathItems=[]] 輸入vue-highcharts組件js檔案位置字串陣列，預設詳見props->pathItems->default
 * @vue-prop {Object} [options={}] 輸入highcharts設定物件，預設{}
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                '//cdn.jsdelivr.net/npm/highcharts/highcharts.js',
                '//cdn.jsdelivr.net/npm/highcharts/modules/stock.js',
                '//cdn.jsdelivr.net/npm/vue-highcharts/dist/vue-highcharts.min.js',
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

        let vo = this

        //save vue, es6 import環境window內沒有Vue, 得自己掛入
        window['Vue'] = Vue

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                if (res !== 'loaded') {
                    Vue.use(window['VueHighcharts'].default)
                }
                vo.cmpName = 'Highstock'
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
