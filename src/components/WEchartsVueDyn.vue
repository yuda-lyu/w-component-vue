<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :options="options"></component>
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'
// import VueCompositionAPI from '@vue/composition-api'


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
                'https://cdn.jsdelivr.net/npm/echarts@5.1.2/dist/echarts.min.js',
                'https://cdn.jsdelivr.net/npm/echarts@5.1.2/i18n/langEN.js',
                'https://cdn.jsdelivr.net/npm/echarts-gl@2.0.5/dist/echarts-gl.min.js',
                'https://cdn.jsdelivr.net/npm/vue-echarts@4.1.0/dist/vue-echarts.min.js',
                //vue-echarts 6版使用vue2 composition api, 仍有問題
                // 'https://cdn.jsdelivr.net/npm/@vue/composition-api@1.4.3/dist/vue-composition-api.min.js',
                // 'https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js',
                // 'https://cdn.jsdelivr.net/npm/echarts@5.2.2/i18n/langEN.js',
                // 'https://cdn.jsdelivr.net/npm/echarts-gl@2.0.9/dist/echarts-gl.min.js',
                // 'https://cdn.jsdelivr.net/npm/vue-echarts@6.0.2/dist/index.umd.min.js',
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
                    // getVue().use(VueCompositionAPI)
                    getVue().component('v-chart', cmp)

                }
                vo.cmpName = 'v-chart'
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
