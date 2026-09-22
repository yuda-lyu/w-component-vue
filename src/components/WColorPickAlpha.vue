<template>
    <!-- 側效computed之綁定(:changeXxx)必須排在資料prop之前:
         Vue2於父層render期間以同一個物件字面值依原始碼順序取值, :locLeft若排在:changeValue之前會取到上一輪之座標 -->
    <!-- 本元件之根節點必須直接是WPickSurface, 不得再包div, 否則版面高度會多出inline-block之descender -->
    <WPickSurface
        :changeValue="changeValue"
        :changeColor="changeColor"
        :width="width"
        :height="height"
        :cursorSize="cursorSize"
        :axis="'x'"
        :locLeft="curLocLeft"
        @pick="pickCur"
    >

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                background-image: url(${aimg});
                background-repeat:repeat;
            `">
                <!-- 使用svg轉base64圖片 -->
                <svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg" v-if="false">
                    <rect x="0" y="0" width="5" height="5" fill="#ddd" />
                    <rect x="0" y="5" width="5" height="5" fill="#fff" />
                    <rect x="5" y="0" width="5" height="5" fill="#fff" />
                    <rect x="5" y="5" width="5" height="5" fill="#ddd" />
                </svg>
            </div>

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                background:linear-gradient(to left, ${colorTrans}, transparent);
            `"></div>

    </WPickSurface>
</template>

<script>
import getImgAlpha from '../js/getImgAlpha.mjs'
import convertColor from '../js/convertColor.mjs'
import WPickSurface from './WPickSurface.vue'


/**
 * @vue-prop {Number} [value=1] 輸入透明度數字，介於0至1，預設1
 * @vue-prop {String} [color='#000000'] 輸入右側原始顏色字串，預設'#000000'
 * @vue-prop {Number} [width=200] 輸入寬度數字，單位px，預設200
 * @vue-prop {Number} [height=20] 輸入高度數字，單位px，預設20
 * @vue-prop {Number} [cursorSize=7] 輸入游標寬度數字，單位px，預設7
 */
export default {
    components: {
        WPickSurface,
    },
    props: {
        value: {
            type: Number,
            default: 1,
        },
        color: {
            type: String,
            default: '#000000',
        },
        width: {
            type: Number,
            default: 200,
        },
        height: {
            type: Number,
            default: 20,
        },
        cursorSize: {
            type: Number,
            default: 7,
        },
    },
    data: function() {
        return {
            aimg: getImgAlpha(),

            valueTrans: 1,
            colorTrans: '#000',

            curLocLeft: 0,
            // curLocTop: 0,

        }
    },
    computed: {

        changeValue: function() {
            let vo = this
            vo.valueTrans = vo.value
            vo.updateCurLocByValue()
            return ''
        },

        changeColor: function() {
            let vo = this
            vo.colorTrans = convertColor(vo.color)
            return ''
        },

    },
    methods: {

        //pickCur, 承接WPickSurface之pick事件, 等同原updateCurLocByEvent之後半段
        //  座標之真值留在本元件: 其同時被本路徑與updateCurLocByValue(值反算)兩個寫入者更新
        pickCur: function(msg) {
            let vo = this
            vo.curLocLeft = msg.left
            // console.log('pickCur curLocLeft', msg.left)
            vo.updateAlpha()
        },

        updateCurLocByValue: function() {
            let vo = this

            let curLocLeft = vo.valueTrans * (vo.width - 1)

            vo.curLocLeft = curLocLeft
            // console.log('updateCurLocByValue curLocLeft', curLocLeft)

        },

        updateAlpha: function() {
            let vo = this
            let xmin = 0
            let xmax = (vo.width - 1)
            let rx = 0
            if ((xmax - xmin - 1) > 0) {
                rx = (vo.curLocLeft - xmin) / (xmax - xmin)
            }
            // console.log('rx', rx)
            let a = rx
            // console.log('updateAlpha', a)
            vo.$emit('input', a)
        },

    },
}
</script>

<style scoped>
</style>
