<template>
    <component ref="$self" :is="cmpName" :opt="opt"></component>
</template>

<script>
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
                'https://cdn.jsdelivr.net/npm/ag-grid-community@22.0.0/dist/ag-grid-community.min.noStyle.js',
                'https://cdn.jsdelivr.net/npm/ag-grid-vue@22.0.0/dist/ag-grid-vue.umd.min.js', //於es5內載入時, AgGridVue會出現在window['ag-grid-vue'].AgGridVue
                'https://cdn.jsdelivr.net/npm/w-aggrid-vue/dist/w-aggrid-vue.umd.js',
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

        //通過window內Vue取得當前所用Vue實體, 並依此加載組件
        let Vue = window['Vue']

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                if (res !== 'loaded') {
                    let cmp = window['w-aggrid-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }
                    Vue.component('w-aggrid-vue', cmp)
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
