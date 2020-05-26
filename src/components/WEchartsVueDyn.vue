<template>
    <component ref="$self" :is="cmpName" :options="options"></component>
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入echarts與vue-echarts組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Object} [options={}] 輸入echarts設定物件，預設{}
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
                'https://cdn.jsdelivr.net/npm/echarts@4.7.0/dist/echarts-en.min.js',
                'https://cdn.jsdelivr.net/npm/echarts-gl@1.1.1/dist/echarts-gl.min.js',
                'https://cdn.jsdelivr.net/npm/vue-echarts@4.0.1/dist/vue-echarts.min.js',
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

                    //cmp
                    let cmp = window['VueECharts']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('vueechart', cmp)

                }
                vo.cmpName = 'vueechart'
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
