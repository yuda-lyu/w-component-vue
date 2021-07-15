<template>
    <div
        :style="`position:relative; width:${width}px; min-width:${width}px; height:${height}px; min-height:${height}px; overflow:hidden;`"
        v-if="isEff"
    >

        <div :style="`position:absolute; left:0; top:0; transform-origin:top left; transform:scale(${scale});`">

            <component
                :is="cmpName"
                :style="`width:${useWidth}px; min-width:${useWidth}px; height:${useHeight}px; min-height:${useHeight}px;`"
                :options="options"
            ></component>

        </div>

    </div>
</template>

<script>
import iseobj from 'wsemi/src/iseobj.mjs'
import WHighchartsVueDyn from './WHighchartsVueDyn.vue'
import WHighstockVueDyn from './WHighstockVueDyn.vue'
import WEchartsVueDyn from './WEchartsVueDyn.vue'


export default {
    components: {
        WHighchartsVueDyn,
        WHighstockVueDyn,
        WEchartsVueDyn,
    },
    props: {
        cmpName: {
            type: String,
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
}
</script>

<style scoped>
</style>
