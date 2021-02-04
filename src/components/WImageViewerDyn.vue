<template>
    <div>

        <WIconLoading v-if="loading"></WIconLoading>

        <div ref="imgsGroup" v-else>
            <template v-for="(image,k) in images">
                <div
                    style="display:inline-block; opacity:0; user-select:none; cursor:pointer; outline:none;"
                    tabindex="0"
                    :key="k"
                    @keyup.enter="showImg"
                    @click="showImg"
                >
                    <img
                        :class="imageClass"
                        :style="useImageStyle"
                        :src="image"
                    >
                </div>
            </template>
        </div>

    </div>
</template>

<script>
import each from 'lodash/each'
import merge from 'lodash/merge'
import importResources from 'wsemi/src/importResources.mjs'
import domShowImagesDyn from 'wsemi/src/domShowImagesDyn.mjs'
import domFadeIn from 'wsemi/src/domFadeIn.mjs'
import WIconLoading from './WIconLoading.vue'


//defStyle
let defStyle = {
    'margin': '5px',
}


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入viewerjs組件js與css檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {Array} [images=[]] 輸入
 * @vue-prop {String} [imageClass=''] 輸入
 * @vue-prop {Object} [imageStyle={}] 輸入
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
                'https://cdn.jsdelivr.net/npm/viewerjs@1.6.2/dist/viewer.min.css',
                'https://cdn.jsdelivr.net/npm/viewerjs@1.6.2/dist/viewer.min.js',
            ],
        },
        images: {
            type: Array,
            default: () => [],
        },
        imageClass: {
            type: String,
            default: '',
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
                    each(vo.$refs.imgsGroup.children, (img, k) => {
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

            //merge
            let r = merge(defStyle, vo.imageStyle)

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
                eleGroup = vo.$refs.imgsGroup
            }

            //domShowImagesDyn
            domShowImagesDyn(e.target, eleGroup, vo.opt, vo.pathItems)
                .catch((err) => {
                    console.log(err)
                })

        },

    },
}
</script>

<style scoped>
</style>
