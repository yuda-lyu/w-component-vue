<template>
    <div :changeParam="changeParam">

        <div
            style="position:relative;"
            @mouseenter="hoverTrans=true"
            @mouseleave="hoverTrans=false"
        >

            <slot></slot>

            <div
                :style="`position:absolute; left:0px; right:0px; bottom:0px; z-index:1; border-bottom:${useBorderWidth}px solid ${useBorderColor};`"
            ></div>

            <transition name="fade">
                <div
                    :style="`position:absolute; left:0px; right:0px; bottom:0px; z-index:2; border-bottom:${borderWidthFocus}px solid ${useBorderColorFocus};`"
                    v-if="focused"
                ></div>
            </transition>

        </div>

    </div>
</template>

<script>
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {Number} [borderWidth=1] 輸入線寬度數字，單位為px，預設1
 * @vue-prop {String} [borderColor='grey lighten-1'] 輸入線顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [borderColorHover='grey'] 輸入滑鼠移入時線顏色字串，預設'grey'
 * @vue-prop {String} [borderColorFocus='blue darken-2'] 輸入取得焦點時線顏色字串，預設'blue darken-2'
 * @vue-prop {Number} [borderWidthHover=1] 輸入滑鼠移入時線寬度數字，單位為px，預設1
 * @vue-prop {Number} [borderWidthFocus=2] 輸入取得焦點時線寬度數字，單位為px，預設2
 * @vue-prop {Boolean} [focused=false] 輸入是否為取得焦點狀態，預設false
 */
export default {
    components: {
    },
    props: {
        borderColor: {
            type: String,
            default: 'grey lighten-1',
        },
        borderColorHover: {
            type: String,
            default: 'grey',
        },
        borderColorFocus: {
            type: String,
            default: 'blue darken-2',
        },
        borderWidth: {
            type: Number,
            default: 1,
        },
        borderWidthHover: {
            type: Number,
            default: 1,
        },
        borderWidthFocus: {
            type: Number,
            default: 2,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            focusedTrans: false,
            hoverTrans: false,
        }
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

        useBorderWidth: function() {
            //console.log('computed useBorderWidth')

            let vo = this

            if (vo.hoverTrans) {
                return vo.borderWidthHover
            }
            return vo.borderWidth
        },

        useBorderColor: function() {
            //console.log('computed useBorderColor')

            let vo = this

            if (vo.hoverTrans) {
                return convertColor(vo.borderColorHover)
            }
            return convertColor(vo.borderColor)
        },

        useBorderColorFocus: function() {
            //console.log('computed useBorderColorFocus')

            let vo = this

            return convertColor(vo.borderColorFocus)
        },

    },
    methods: {
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all 0.3s;
}
.fade-enter, .fade-leave-to {
    transform: scaleX(0);
}
.fade-enter-to, .fade-leave {
    transform: scaleX(100%);
}
</style>
