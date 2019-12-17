<template>
    <component :is="cmpName" :opt="opt"></component>
</template>

<script>
import Vue from 'vue'
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'

/**
 * @vue-prop {Array} [pathItems=[]] 輸入w-aggrid-vue組件js檔案位置字串陣列，預設詳見props->pathItems->default
 * @vue-prop {Object} [opt={}] 輸入aggrid設定物件，預設{}
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                '//cdn.jsdelivr.net/npm/ag-grid-community/dist/ag-grid-community.min.noStyle.js',
                '//cdn.jsdelivr.net/npm/ag-grid-vue/dist/ag-grid-vue.umd.min.js',
                '//cdn.jsdelivr.net/npm/w-aggrid-vue/dist/w-aggrid-vue.umd.js',
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

        let vo = this

        //save vue, es6 import環境window內沒有Vue, 得自己掛入
        window['Vue'] = Vue

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                if (res !== 'loaded') {
                    Vue.component('w-aggrid-vue', window['w-aggrid-vue'])
                }
                vo.cmpName = 'w-aggrid-vue'
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
