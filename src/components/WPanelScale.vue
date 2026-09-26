<template>
    <!-- 不能使用overflow:hidden會使slot內popup被切 -->
    <div
        :style="`display:inline-block; width:${width}px; height:${height}px; max-height:${height}px;`"
        v-dommutation
        @dommutation="dommutation"
    >
        <div :style="`position:relative; width:${width}px; height:${height}px; max-height:${height}px;`">
            <div :style="`position:absolute; left:0; top:0; width:${width}px; height:${height}px; max-height:${height}px;`">

                <!-- 縮放容器寬度用max-content: 內容以自身寬度排版後再縮放; 若給外框寬度, 會換行之內容其可用寬度會隨前次外框改變, 使排版隨縮放歷程而不同 -->
                <div :style="`transform-origin:top left; transform:scale(${scale}); width:max-content; height:${height}px; max-height:${height}px;`">
                    <!-- 偵測內容tar之尺寸: 根元素寬高由fitSize依tar設定, 偵測根元素時內容於無DOM變動下改變尺寸(如圖片載入)會偵測不到 -->
                    <div
                        ref="tar"
                        style="display:inline-block;"
                        v-domresize
                        @domresize="domresize"
                    >
                        <slot></slot>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import isEle from 'wsemi/src/isEle.mjs'
import domResize from '../js/domResize.mjs'
import domMutation from '../js/domMutation.mjs'


/**
 * @vue-prop {Number} [scale=1] 輸入放大比率數字，預設1
 */
export default {
    directives: {
        domresize: domResize(),
        dommutation: domMutation(),
    },
    components: {
    },
    props: {
        scale: {
            type: Number,
            default: 1,
        },
    },
    data: function() {
        return {
            width: 1,
            height: 1,
        }
    },
    mounted: function() {
        // console.log('methods mounted')

        let vo = this

        //fitSize, 有些slot內為靜態內容不會觸發resize或mutation, 故得於mounted初始化執行一次
        vo.fitSize()

    },
    computed: {
    },
    methods: {

        domresize: function(msg) {
            // console.log('methods domresize', msg)

            let vo = this

            //fitSize
            vo.fitSize()

        },

        dommutation: function(msg) {
            // console.log('methods dommutation', msg)

            let vo = this

            //fitSize
            vo.fitSize()

        },

        fitSize: function() {
            // console.log('methods fitSize')

            let vo = this

            //eleTar
            let eleTar = get(vo, `$refs.tar`)

            //check
            if (isEle(eleTar)) {

                //getBoundingClientRect
                let rect = eleTar.getBoundingClientRect()

                //check
                if (vo.width !== rect.width || vo.height !== rect.height) {

                    //save
                    vo.width = rect.width
                    vo.height = rect.height

                }
            }

        },

    }
}
</script>

<style scoped>
</style>
