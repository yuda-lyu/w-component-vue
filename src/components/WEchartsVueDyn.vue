<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component
        ref="$self"
        :is="cmpName"
        :options="options"
        :theme="theme"
        :initOptions="initOptions"
        :updateOptions="updateOptions"
        :group="group"
        :manualUpdate="manualUpdate"
        :loading="loading"
        :loadingOptions="loadingOptions"
        :autoresize="autoresize"
        v-on="$listeners"
    ></component>
</template>

<script>
import importResExt from '../js/importResExt.mjs'
import getVue from '../js/getVue.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['base:w-echarts-vue']] 輸入w-echarts-vue組件js檔案位置字串陣列，echarts全量圖表與組件、echarts-gl之3D圖表皆已打包於w-echarts-vue內故無須另行載入，預設['base:w-echarts-vue']
 * @vue-prop {Object} [options={}] 輸入echarts設定物件，即echarts之option，預設{}。變更時自動重繪：給予新物件(參照改變)採整體置換(notMerge)，原物件內變更(mutation)採合併更新
 * @vue-prop {String|Object} [theme=''] 輸入echarts主題字串或主題設定物件，字串為已使用echarts.registerTheme註冊之主題名稱，變更時會自動銷毀重建圖表，預設''
 * @vue-prop {Object} [initOptions={}] 輸入echarts初始化設定物件，即echarts.init之opts，可設定renderer('canvas'或'svg')、locale、devicePixelRatio等，變更時會自動銷毀重建圖表，預設{}
 * @vue-prop {Object} [updateOptions={}] 輸入echarts更新設定物件，即echarts之setOption之opts，可設定notMerge、replaceMerge、lazyUpdate等，預設{}
 * @vue-prop {String} [group=''] 輸入圖表群組名稱字串，供echarts.connect跨圖表連動使用，預設''
 * @vue-prop {Boolean} [manualUpdate=false] 輸入是否關閉options之深度監聽布林值，若為true則變更options不會自動重繪，須自行取得實例呼叫setOption更新，適用於資料量龐大時，預設false
 * @vue-prop {Boolean} [loading=false] 輸入是否顯示讀取中動畫布林值，預設false
 * @vue-prop {Object} [loadingOptions={}] 輸入讀取中動畫設定物件，即echarts之showLoading之opts，可設定text、color、maskColor等，預設{}
 * @vue-prop {Boolean|Object} [autoresize=true] 輸入是否於容器尺寸改變時自動重繪布林值，亦可給物件設定{throttle,onResize}，throttle為節流毫秒數預設100，預設true
 * @vue-event {Object} * 對外轉發echarts之全部事件，例如click、mouseover、legendselectchanged、datazoom、finished等，回傳事件參數物件；zrender事件以zr:前綴綁定，例如@zr:click
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
                'base:w-echarts-vue',
            ],
        },
        options: {
            type: Object,
            default: () => {},
        },
        theme: {
            type: [String, Object],
            default: () => '',
        },
        initOptions: {
            type: Object,
            default: () => {},
        },
        updateOptions: {
            type: Object,
            default: () => {},
        },
        group: {
            type: String,
            default: () => '',
        },
        manualUpdate: {
            type: Boolean,
            default: () => false,
        },
        loading: {
            type: Boolean,
            default: () => false,
        },
        loadingOptions: {
            type: Object,
            default: () => {},
        },
        autoresize: {
            type: [Boolean, Object],
            default: () => true,
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
                    let cmp = window['w-echarts-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('w-echarts-vue', cmp)

                }
                vo.cmpName = 'w-echarts-vue'
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
