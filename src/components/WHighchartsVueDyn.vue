<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :options="options"></component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['base:w-highcharts-vue']] 輸入w-highcharts-vue組件js檔案位置字串陣列，highcharts與vue-highcharts皆已打包於w-highcharts-vue內故無須另行載入，預設['base:w-highcharts-vue']
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
                'base:w-highcharts-vue',
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

                    //use, w-highcharts-vue內已完成highcharts各模組掛載與w-highcharts之預設設定, 故僅需註冊組件
                    getVue().use(window['w-highcharts-vue'])

                }
                vo.cmpName = 'w-highcharts-vue'
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
