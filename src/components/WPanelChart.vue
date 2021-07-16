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
import isEle from 'wsemi/src/isEle.mjs'
import html2picDyn from 'wsemi/src/html2picDyn.mjs'
import downloadFileFromB64 from 'wsemi/src/downloadFileFromB64.mjs'
import WButtonCircle from './WButtonCircle.vue'
import WHighchartsBitmapDyn from './WHighchartsBitmapDyn.vue'
import WHighchartsVueDyn from './WHighchartsVueDyn.vue'
import WHighstockVueDyn from './WHighstockVueDyn.vue'
import WEchartsVueDyn from './WEchartsVueDyn.vue'


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

                //b64
                let b64 = await html2picDyn(ele, { scale: vo.downloadPictureScale })

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
