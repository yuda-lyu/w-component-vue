<template>
    <div
        :style="`display:inline-block; width:${useWidth}px; height:${useHeight}px; vertical-align:top;`"
        :changeParams="changeParams"
    >

        <img
            :style="`width:${useWidth}px; height:${useHeight}px;;`"
            :src="url"
            v-if="loaded"
        >

        <WIconLoading v-else></WIconLoading>

    </div>
</template>

<script>
import domIsVisible from 'wsemi/src/domIsVisible.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import WIconLoading from './WIconLoading.vue'


/**
 * @vue-prop {Number} [width=null] 輸入圖片寬度浮點數，寬度、高度與比例(寬度/高度)3個須至少提供2個，若都提供則優先使用寬度與高度。預設null
 * @vue-prop {Number} [height=null] 輸入圖片高度浮點數，寬度、高度與比例(寬度/高度)3個須至少提供2個，若都提供則優先使用寬度與高度。預設null
 * @vue-prop {Number} [ratio=null] 輸入圖片比例(寬度/高度)浮點數，寬度、高度與比例(寬度/高度)3個須至少提供2個，若都提供則優先使用寬度與高度。預設null
 * @vue-prop {String} [url=''] 輸入圖片網址字串，預設''
 */
export default {
    components: {
        WIconLoading,
    },
    props: {
        width: {
            type: Number,
            default: null,
        },
        height: {
            type: Number,
            default: null,
        },
        ratio: {
            type: Number,
            default: null,
        },
        url: {
            type: String,
            default: '',
        },
    },
    data: function() {
        return {

            ev: null,

            loaded: false,

            useWidth: 0,
            useHeight: 0,

        }
    },
    mounted: function() {
        let vo = this

        //ev
        vo.ev = domIsVisible(vo.$el)

        //create
        vo.ev.create()

        //on
        vo.ev.on('visible', (b) => {
            // console.log('visible', b)
            if (b) {

                //dispose
                try {
                    vo.ev.dispose()
                }
                catch (err) {}

                //loaded
                vo.loaded = true

            }
        })

    },
    beforeDestroy: function() {
        let vo = this

        //dispose
        try {
            vo.ev.dispose()
        }
        catch (err) {}

    },
    computed: {

        changeParams: function() {
            let vo = this

            //width, height, ratio
            let width = vo.width
            let height = vo.height
            let ratio = vo.ratio

            if (isnum(width) && isnum(height)) {
                width = Math.max(cdbl(width), 0)
                height = Math.max(cdbl(height), 0)
                vo.useWidth = width
                vo.useHeight = height
                // console.log(`width,height`, width, height)
            }
            else if (isnum(width) && isnum(ratio)) {
                width = Math.max(cdbl(width), 0)
                ratio = Math.max(cdbl(ratio), 0)
                height = width / ratio
                vo.useWidth = width
                vo.useHeight = height
                // console.log(`width,ratio=>height`, width, ratio, '=>', height)
            }
            else if (isnum(height) && isnum(ratio)) {
                height = Math.max(cdbl(height), 0)
                ratio = Math.max(cdbl(ratio), 0)
                width = height * ratio
                vo.useWidth = width
                vo.useHeight = height
                // console.log(`height,ratio=>width`, height, ratio, '=>', width)
            }
            else {
                console.log(`width, height and ratio, at least two of the three parameters must be provided`)
            }

            return ''
        },

    },
    methods: {

    }
}
</script>

<style scoped>
</style>
