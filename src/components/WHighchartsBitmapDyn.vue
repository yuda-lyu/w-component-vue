<template>
    <div>
        <WIconLoading v-if="isEff && !isGenDone"></WIconLoading>
        <img ref="pic" :style="`width:${picw}px; height:${pich}px;`" :src="b64" v-if="isGenDone">
    </div>
</template>

<script>
import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
import waitFun from 'wsemi/src/waitFun.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
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
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/annotations.js',
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/heatmap.js',
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/boost.js',
                'https://cdn.jsdelivr.net/npm/highcharts@9.1.2/modules/boost-canvas.js',
            ],
        },
        options: {
            type: Object,
            default: () => {},
        },
        scale: {
            type: Number,
            default: 3,
        },
        render: {
            type: Function, //need async function, input(w, h, scale, highchartsOpt)
            default: null,
        },
    },
    data: function() {
        return {

            picw: 0,
            pich: 0,
            b64: '',

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

            })

    },
    watch: {

        options: {
            immediate: true,
            deep: true,
            handler(value) {
                // console.log('watch options', value)

                let vo = this

                //default
                vo.picw = 0
                vo.pich = 0
                vo.b64 = ''

                //plot
                vo.plot()

            }
        }

    },
    computed: {

        isEff: function() {
            return iseobj(this.options)
        },

        isGenDone: function() {
            return this.b64 !== ''
        },

    },
    methods: {

        defRender: async function(w, h, scale, highchartsOpt) {
            // console.log('methods defRender', w, h, scale, highchartsOpt)

            //dpq, 先給予圖片寬高與產製函數, 內部通過佇列逐次運行產圖與回傳base64
            let fun = async (ele) => {

                //html2canvasOpt
                let html2canvasOpt = { scale }

                //chart
                window.Highcharts.chart(ele, highchartsOpt)

                //html2picDyn, 預設轉出base64
                b64 = await html2picDyn(ele, html2canvasOpt)

                return b64
            }
            let b64 = await dpq(w, h, fun)
            // console.log('b64', b64)

            return b64
        },

        plot: function() {
            // console.log('methods plot')

            let vo = this

            async function core() {

                //wait $el
                await waitFun(() => {
                    return vo.$el !== undefined
                })

                //check
                if (!vo.isEff) {
                    return
                }
                if (vo.isGenDone) {
                    return
                }

                //w, h
                let w = get(vo, '$el.offsetWidth')
                let h = get(vo, '$el.offsetHeight')
                // console.log('w', w, 'h', h)

                //check
                if (!isNumber(w) || !isNumber(h)) {
                    return
                }

                //check
                if (w <= 0 || h <= 0 || vo.scale <= 0) {
                    return
                }

                //defRender
                let fun = null
                if (isfun(vo.render)) {
                    fun = vo.render
                }
                else {
                    fun = vo.defRender
                }
                let b64 = await fun(w, h, vo.scale, vo.options)

                //save
                vo.picw = w
                vo.pich = h
                vo.b64 = b64

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
