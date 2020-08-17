<template>
    <component ref="$self" :is="cmpName" :settings="settings" :height="height" :editable="editable" :value="value" @input="(v)=>{$emit('input',v)}"></component>
    <!-- ref=$self為供外部存取組件之用 -->
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入quill與vue-quill-editor組件js與css檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {String} [value=''] 輸入富文本字串，預設為''
 * @vue-prop {Object} [settings={}] 輸入quill設定物件，預設值為{}，內部預設值詳見w-quill-vue原始碼
 * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250
 * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        pathItems: {
            type: Array,
            default: () => [
                'https://cdn.jsdelivr.net/npm/quill@1.3.6/dist/quill.min.js',
                'https://cdn.jsdelivr.net/npm/quill@1.3.6/dist/quill.snow.min.css',
                'https://cdn.jsdelivr.net/npm/w-quill-vue@1.0.25/dist/w-quill-vue.umd.js',
            ],
        },
        value: {
            type: String,
            default: '',
        },
        settings: {
            type: Object,
            default: () => {},
        },
        height: {
            type: Number,
            default: 250,
        },
        editable: {
            type: Boolean,
            default: true,
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

        //importResources
        importResources(vo.pathItems)
            .then((res) => {
                //console.log('res', res)
                if (res !== 'loaded') {

                    //cmp
                    let cmp = window['w-quill-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('w-quill-vue', cmp)

                }
                vo.cmpName = 'w-quill-vue'
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
