<template>
    <div>

        <WIconLoading v-if="loading"></WIconLoading>

        <div ref="imgsGroup" v-else>
            <template v-for="(image,k) in images">
                <div
                    style="display:inline-block; opacity:0;"
                    :key="k"
                >
                    <img
                        :class="imageClass"
                        :style="useImageStyle"
                        :src="image"
                        @click="showImg"
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
import showImagesDyn from 'wsemi/src/showImagesDyn.mjs'
import domFadeIn from 'wsemi/src/domFadeIn.mjs'
import WIconLoading from './WIconLoading.vue'

let defStyle = {
    'margin': '5px',
    'cursor': 'pointer',
}

/**
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [ //預設值詳見 wsemi/src/showImagesDyn.mjs, 因此處有預載, 故所使用viewerjs的版本得相同
                'https://cdn.jsdelivr.net/npm/viewerjs@1.5.0/dist/viewer.min.css',
                'https://cdn.jsdelivr.net/npm/viewerjs@1.5.0/dist/viewer.min.js',
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

                //domFadeIn
                setTimeout(() => {
                    each(vo.$refs.imgsGroup.children, (img, k) => {
                        domFadeIn(img, { duration: 500, delay: k * 100 })
                    })
                }, 1)

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

            //showImagesDyn
            showImagesDyn(e.target, eleGroup, vo.opt, vo.pathItems)
                .catch((err) => {
                    console.log(err)
                })

        },

    },
}
</script>

<style scoped>
</style>
