<template>
    <div>

        <WIconLoading v-if="loading"></WIconLoading>

        <div
            ref="wig"
            :style="`${loading?'heigh:0px; max-height:0px; overflow-y:hidden;':''}`"
        >

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
import each from 'lodash-es/each.js'
import get from 'lodash-es/get.js'
import merge from 'lodash-es/merge.js'
import domShowImages from 'wsemi/src/domShowImages.mjs'
import domFadeIn from 'wsemi/src/domFadeIn.mjs'
import WIconLoading from './WIconLoading.vue'


/**
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

        //loading, viewerjs已由wsemi直接打包提供(含css注入), 無需再動態加載
        vo.loading = false

        //$nextTick
        vo.$nextTick(() => {
            let divs = get(vo, '$refs.wiv', []) //可能因切換組件導致元素消失
            each(divs, (img, k) => {
                //domFadeIn
                domFadeIn(img, { duration: 200, delay: k * 100 })
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

            //domShowImages
            domShowImages(e.currentTarget, eleGroup, vo.opt)
                .catch((err) => {
                    console.log(err)
                })

        },

    },
}
</script>

<style scoped>
</style>
