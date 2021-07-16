<template>
    <div>
        <WIconLoading></WIconLoading>
    </div>
</template>

<script>
import html2picDyn from 'wsemi/src/html2picDyn.mjs'
import importResources from 'wsemi/src/importResources.mjs'
import domVirtualCreateQueue from 'wsemi/src/domVirtualCreateQueue.mjs'
import WIconLoading from './WIconLoading.vue'
import { getHCGlobal } from '../js/highchartsSetting.mjs'


//dpq
let dpq = domVirtualCreateQueue()


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入highcharts組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
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
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/highcharts.js',
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/stock.js', //因vue-highcharts初始化若無stock會無法註冊全域組件, 故若還會使用highstock vue組件, 得先於highcharts vue組件事先載入
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/heatmap.js',
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/boost.js',
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/boost-canvas.js',
            ],
        },
        options: {
            type: Object,
            default: () => {},
        },
    },
    data: function() {
        return {
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

                }
                vo.render()
            })

    },
    computed: {
    },
    methods: {

        render: function() {
            // console.log('methods render')

            let vo = this

            async function core() {

                //dpq, 先給予圖片寬高與產製函數, 內部通過佇列逐次運行產圖與回傳base64
                let fun = async (ele) => {

                    let highchartsOpt = vo.options
                    let html2canvasOpt = { scale: 3 }

                    //chart
                    window.Highcharts.chart(ele, highchartsOpt)

                    //html2picDyn, 預設轉出base64
                    b64 = await html2picDyn(ele, html2canvasOpt)

                    return b64
                }
                let b64 = await dpq(vo.$el.offsetWidth, vo.$el.offsetHeight, fun)
                // console.log('b64', b64)

                //save
                vo.$el.innerHTML = `<img style="width:${vo.$el.offsetWidth}px; height:${vo.$el.offsetHeight}px;" src="${b64}">`

            }

            core()
                .catch((err) => {
                    console.log(err)

                    //emit
                    vo.$emit('error', err)

                })

        },

    },
}
</script>

<style scoped>
</style>
