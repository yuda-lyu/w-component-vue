<template>
    <div style="position:relative;">

        <div
            ref="pic"
            :style="`position:relative; width:${width}px; min-width:${width}px; height:${height}px; min-height:${height}px; overflow:hidden;`"
            v-if="isEff"
        >

            <div :style="`position:absolute; left:0; top:0; transform-origin:top left; transform:scale(${scale});`">

                <component
                    :is="cmpName"
                    :style="`width:${useWidth}px; min-width:${useWidth}px; height:${useHeight}px; min-height:${useHeight}px;`"
                    :options="options"
                    @error="(err)=>{$emit('error',err)}"
                ></component>

            </div>

        </div>

        <div
            style="position:absolute; top:0; left:0; width:40px; height:40px; z-index:1;"
            v-if="downloadPicture"
        >

            <WButtonCircle
                :tooltip="downloadPictureBtnTooltip"
                :icon="downloadPictureBtnIcon"
                :iconColor="downloadPictureBtnIconColor"
                :iconColorHover="downloadPictureBtnIconColorHover"
                :iconColorFocus="downloadPictureBtnIconColorFocus"
                :backgroundColor="downloadPictureBtnBackgroundColor"
                :backgroundColorHover="downloadPictureBtnBackgroundColorHover"
                :backgroundColorFocus="downloadPictureBtnBackgroundColorFocus"
                :shadow="false"
                @click="download"
            ></WButtonCircle>

        </div>

    </div>
</template>

<script>
import { mdiDownloadCircleOutline } from '@mdi/js/mdi.js'
import get from 'lodash/get'
import iseobj from 'wsemi/src/iseobj.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isEle from 'wsemi/src/isEle.mjs'
import html2picDyn from 'wsemi/src/html2picDyn.mjs'
import domConvertToPicDyn from 'wsemi/src/domConvertToPicDyn.mjs'
import downloadFileFromB64 from 'wsemi/src/downloadFileFromB64.mjs'
import WButtonCircle from './WButtonCircle.vue'
import WHighchartsBitmapDyn from './WHighchartsBitmapDyn.vue'
import WHighchartsVueDyn from './WHighchartsVueDyn.vue'
import WHighstockVueDyn from './WHighstockVueDyn.vue'
import WEchartsVueDyn from './WEchartsVueDyn.vue'


/**
 * @vue-prop {String} [cmpName='WHighchartsVueDyn'] 輸入繪圖組件名稱字串，預設'WHighchartsVueDyn'
 * @vue-prop {Object} [options={}] 輸入highcharts設定物件，預設{}
 * @vue-prop {Number} [width=600] 輸入圖片寬度數字，預設600
 * @vue-prop {Number} [height=400] 輸入圖片高度數字，預設400
 * @vue-prop {Number} [scale=1] 輸入圖片放大率數字，預設1
 * @vue-prop {String} [converter='html2picDyn'] 輸入預設渲染器defRender內將dom轉成base64圖片所使用的函數名稱字串，可使用'html2picDyn'或'domConvertToPicDyn'，前者可支援IE11但效能較差且記憶體使用較多，後者僅支援HTML5瀏覽器但效能佳且記憶體使用較少。預設'html2picDyn'
 * @vue-prop {Boolean} [downloadPicture=false] 輸入是否可使用下載圖片按鈕布林值，預設false
 * @vue-prop {String} [downloadPictureBtnTooltip='download'] 輸入下載圖片按鈕的提示文字字串，預設'download'
 * @vue-prop {Number} [downloadPictureScale=3] 輸入轉出base64圖片時的放大率數字，預設3
 * @vue-prop {String} [downloadPictureFilenmae='pic'] 輸入下載圖片之檔案名稱字串，預設'pic'
 * @vue-prop {String} [downloadPictureBtnBackgroundColor='transparent'] 輸入下載圖片按鈕的背景顏色字串，預設'transparent'
 * @vue-prop {String} [downloadPictureBtnBackgroundColorHover='rgba(200,200,200,0.3)'] 輸入滑鼠移入時下載圖片按鈕的背景顏色字串，預設'rgba(200,200,200,0.3)'
 * @vue-prop {String} [downloadPictureBtnBackgroundColorFocus='rgba(200,200,200,0.3)'] 輸入取得焦點時下載圖片按鈕的背景顏色字串，預設'rgba(200,200,200,0.3)'
 * @vue-prop {String} [downloadPictureBtnIcon=mdiDownloadCircleOutline] 輸入下載圖片按鈕的圖標字串，預設mdiDownloadCircleOutline
 * @vue-prop {String} [downloadPictureBtnIconColor='#888'] 輸入下載圖片按鈕的圖標顏色字串，預設'#888'
 * @vue-prop {String} [downloadPictureBtnIconColorHover='#444'] 輸入滑鼠移入時下載圖片按鈕的圖標顏色字串，預設'#444'
 * @vue-prop {String} [downloadPictureBtnIconColorFocus='#444'] 輸入取得焦點時下載圖片按鈕的圖標顏色字串，預設'#444'
 */
export default {
    components: {
        WButtonCircle,
        WHighchartsBitmapDyn,
        WHighchartsVueDyn,
        WHighstockVueDyn,
        WEchartsVueDyn,
    },
    props: {
        cmpName: {
            type: String,
            // default: 'WHighchartsBitmapDyn',
            default: 'WHighchartsVueDyn',
        },
        options: {
            type: Object,
            default: () => {},
        },
        width: {
            type: Number,
            default: 600,
        },
        height: {
            type: Number,
            default: 400,
        },
        scale: {
            type: Number,
            default: 1,
        },
        converter: {
            type: String,
            default: 'html2picDyn', //domConvertToPicDyn
        },
        downloadPicture: {
            type: Boolean,
            default: false,
        },
        downloadPictureBtnTooltip: {
            type: String,
            default: 'download',
        },
        downloadPictureScale: {
            type: Number,
            default: 3,
        },
        downloadPictureFilenmae: {
            type: String,
            default: 'pic',
        },
        downloadPictureBtnBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        downloadPictureBtnBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.3)',
        },
        downloadPictureBtnBackgroundColorFocus: {
            type: String,
            default: 'rgba(200,200,200,0.3)',
        },
        downloadPictureBtnIcon: {
            type: String,
            default: mdiDownloadCircleOutline,
        },
        downloadPictureBtnIconColor: {
            type: String,
            default: '#888',
        },
        downloadPictureBtnIconColorHover: {
            type: String,
            default: '#444',
        },
        downloadPictureBtnIconColorFocus: {
            type: String,
            default: '#444',
        },
    },
    data: function() {
        return {
        }
    },
    computed: {

        isEff: function() {
            //console.log('computed isEff')

            let vo = this

            return iseobj(vo.options)
        },

        useWidth: function() {
            //console.log('computed useWidth')

            let vo = this

            return vo.width / vo.scale
        },

        useHeight: function() {
            //console.log('computed useHeight')

            let vo = this

            return vo.height / vo.scale
        },

    },
    methods: {

        download: function() {

            let vo = this

            async function core() {

                //check
                if (vo.cmpName === 'WEchartsVueDyn') {
                    return Promise.reject('can not support for WEchartsVueDyn')
                }

                //ele
                let ele = get(vo, '$refs.pic')

                //check
                if (!isEle(ele)) {
                    return Promise.reject('can not find element')
                }

                //converterOpt
                let converterOpt = { scale: vo.downloadPictureScale }

                //convert
                let b64 = ''
                if (vo.converter === 'domConvertToPicDyn') {
                    b64 = await domConvertToPicDyn(ele, converterOpt)
                }
                else {
                    b64 = await html2picDyn(ele, converterOpt)
                }

                //fn
                let fn = vo.downloadPictureFilenmae
                if (!isestr(fn)) {
                    fn = 'pic'
                }

                //downloadFileFromB64
                downloadFileFromB64(`${vo.downloadPictureFilenmae}.png`, b64)

            }

            //core
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
