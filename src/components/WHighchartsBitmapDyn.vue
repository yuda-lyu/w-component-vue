<template>
    <div>
        <WIconLoading v-if="isEff && !isGenDone"></WIconLoading>
        <img ref="pic" :style="`width:${picw}px; height:${pich}px;`" :src="b64" v-if="isGenDone">
    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import isNumber from 'lodash-es/isNumber.js'
import waitFun from 'wsemi/src/waitFun.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import importResExt from '../js/importResExt.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入highcharts組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Object} [options={}] 輸入highcharts設定物件，預設{}
 * @vue-prop {Number} [scale=3] 輸入轉出base64圖片時的放大率數字，預設3
 * @vue-prop {Function} [render=null] 輸入外部提供轉出base64圖片時的渲染器函數，預設null
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [

                //jsdelivr: https://cdn.jsdelivr.net/npm/highcharts@11.4.8/
                //official: https://code.highcharts.com/11/

                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/highcharts.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/highcharts-more.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/stock.js', //因vue-highcharts初始化若無stock會無法註冊全域組件, 故若還會使用highstock vue組件, 得先於highcharts vue組件事先載入
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/annotations.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/heatmap.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/boost.js',
                'https://cdn.jsdelivr.net/npm/highcharts@11.4.8/modules/boost-canvas.js',

                // 'https://cdn.jsdelivr.net/npm/w-highcharts@1.0.2/dist/w-highcharts.umd.js', //bbb
                'base:w-highcharts',

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

        //importResExt
        importResExt(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //Highcharts
                    let Highcharts = window['Highcharts']

                    //whc
                    let whc = window['w-highcharts']

                    //iniMarkers
                    whc.iniMarkers(Highcharts)

                    //setOptions
                    Highcharts.setOptions(whc.getDefOpt())

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

                //check
                if (!isfun(vo.render)) {
                    console.log('render is not a function')
                    return
                }

                //render
                let fun = vo.render

                //fun
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
