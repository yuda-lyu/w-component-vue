<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :options="options" autoresize></component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'
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

                'https://cdn.jsdelivr.net/npm/echarts@5.6.0/dist/echarts.min.js',
                'https://cdn.jsdelivr.net/npm/echarts@5.6.0/i18n/langEN.js',
                'https://cdn.jsdelivr.net/npm/echarts-gl@2.0.9/dist/echarts-gl.min.js',
                'https://cdn.jsdelivr.net/npm/vue-echarts@4.1.0/dist/vue-echarts.min.js', //只能用4.1.0版, 沒有5版, 從6版之後就依賴composition-api

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

                    //注意: importResExt得要先能讓Vue註冊VueCompositionAPI, 才能再import vue-echarts 6版, 否則6版內使用defineComponent會直接報錯
                    // //cmpAPI
                    // let cmpAPI = window['VueCompositionAPI']
                    // console.log('cmpAPI', cmpAPI)
                    // //use
                    // getVue().use(cmpAPI)

                    //cmp
                    let cmp = window['VueECharts']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
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
