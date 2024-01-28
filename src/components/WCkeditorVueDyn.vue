<template>
    <!-- ref=$self為供外部存取組件之用 -->
    <component ref="$self" :is="cmpName" :settings="settings" :height="height" :editable="editable" :value="value" @input="(v)=>{$emit('input',v)}"></component>
</template>

<script>
import importResources from 'wsemi/src/importResources.mjs'
import WIconLoading from './WIconLoading.vue'
import getVue from '../js/getVue.mjs'


/**
 * @vue-prop {Array} [pathItems=['詳見原始碼']] 輸入ckeditor、ckeditor5-vue與w-ckeditor-vue組件js檔案位置字串陣列，預設詳見原始碼處props->pathItems->default
 * @vue-prop {String} [value=''] 輸入富文本字串，預設為''
 * @vue-prop {Object} [settings={}] 輸入ckeditor設定物件，預設值為{}，內部預設值詳見w-ckeditor-vue原始碼
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
                'https://cdn.jsdelivr.net/npm/w-ckeditor-vue@2.0.4/dist/ckeditor.js',
                'https://cdn.jsdelivr.net/npm/w-ckeditor-vue@2.0.4/dist/w-ckeditor-vue.umd.js',
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
                    let cmp = window['w-ckeditor-vue']
                    if (cmp.default) {
                        cmp = cmp.default
                    }

                    //use
                    getVue().component('w-ckeditor-vue', cmp)

                }
                vo.cmpName = 'w-ckeditor-vue'
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
