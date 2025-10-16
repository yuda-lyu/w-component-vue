<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :opt="opt" v-on="$listeners"></component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入w-threejs-vue組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
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
                // 'https://cdn.jsdelivr.net/npm/w-threejs-vue@1.0.9/dist/w-threejs-vue.umd.js',
                'base:w-threejs-vue',
            ],
        },
        opt: {
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

                    //cmp
                    let cmp = window['w-threejs-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('w-threejs-vue', cmp)

                }
                vo.cmpName = 'w-threejs-vue'
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
