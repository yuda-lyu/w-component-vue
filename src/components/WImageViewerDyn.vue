<template>
    <div>

        <WIconLoading v-if="loading"></WIconLoading>

        <div ref="wig" v-else>
            <!-- 為了使用fade-in故opacity給0 -->
            <div
                ref="wiv"
                style="display:inline-block; opacity:0; user-select:none; cursor:pointer; outline:none;"
                tabindex="0"
                :key="k"
                @keyup.enter="showImg"
                @click="showImg"
                v-for="(image,k) in images"
            >
                <img
                    :style="useImageStyle"
                    :src="image"
                >
            </div>
        </div>

    </div>
</template>

<script>
import each from 'lodash-es/each'
import get from 'lodash-es/get'
import merge from 'lodash-es/merge'
import importResources from 'wsemi/src/importResources.mjs'
import domShowImagesDyn from 'wsemi/src/domShowImagesDyn.mjs'
import domFadeIn from 'wsemi/src/domFadeIn.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入viewerjs組件js與css檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Array} [images=[]] 輸入圖片網址陣列，預設[]
 * @vue-prop {Object} [imageStyle={}] 輸入圖片style物件，預設{}
 * @vue-prop {Object} [opt={}] 輸入viewerjs設定物件，預設使用optOne或optMuti，若img僅一個則使用optOne，反之使用optMuti
 * @vue-prop {Boolean} [multiple=false] 輸入
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [ //預設值詳見 wsemi/src/domShowImagesDyn.mjs, 因此處有預載, 故所使用viewerjs的版本得相同
                'https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.css',
                'https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.js',
            ],
        },
        images: {
            type: Array,
            default: () => [],
        },
        imageStyle: {
            type: Object,
            default: () => {},
        },
        opt: {
            type: Object,
            default: () => {},
        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            loading: true,
        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                //console.log('res', res)

                //loading
                vo.loading = false

                //$nextTick
                vo.$nextTick(() => {
                    let divs = get(vo, '$refs.wiv', []) //可能因切換組件導致元素消失
                    each(divs, (img, k) => {
                        //domFadeIn
                        domFadeIn(img, { duration: 200, delay: k * 100 })
                    })
                })

            })

    },
    computed: {

        useImageStyle: function() {
            //console.log('computed useImageStyle')

            let vo = this

            //style
            let style = {
                'margin': '5px',
            }

            //merge
            let r = merge(style, vo.imageStyle)

            return r
        },

    },
    methods: {

        showImg: function(e) {
            //console.log('methods showImg', e)

            let vo = this

            //eleGroup
            let eleGroup = null
            if (vo.multiple) {
                eleGroup = vo.$refs.wig
            }

            //domShowImagesDyn
            domShowImagesDyn(e.currentTarget, eleGroup, vo.opt, vo.pathItems)
                .catch((err) => {
                    console.log(err)
                })

        },

    },
}
</script>

<style scoped>
</style>
