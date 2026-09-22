<template>
    <!-- 屬性順序為正確性條件, 不可重排:
         一、:changeParams 必須在 :changeColor 之前, 前者寫座標、後者讀座標
         二、兩個側效computed必須在資料prop之前, 否則 :locLeft 會取到上一輪之座標, 並使單擊之input由2次變3次
         Vue2於父層render期間以同一個物件字面值依原始碼順序取值 -->
    <!-- 本元件之根節點必須直接是WPickSurface, 不得再包div, 否則版面高度會多出inline-block之descender -->
    <WPickSurface
        :changeParams="changeParams"
        :changeColor="changeColor"
        :width="width"
        :height="height"
        :cursorSize="cursorSize"
        :axis="'xy'"
        :locLeft="curLocLeft"
        :locTop="curLocTop"
        @pick="pickCur"
    >

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                background:linear-gradient(to right, ${colorLeftTop}, ${colorTrans});
            `"></div>

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                background:linear-gradient(to top, ${colorBottom}, transparent);
            `"></div>

    </WPickSurface>
</template>

<script>
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'
import WPickSurface from './WPickSurface.vue'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入選擇顏色字串，預設'#FFFFFF'
 * @vue-prop {String} [color='#FFFFFF'] 輸入右上角指定色顏色字串，預設'#FFFFFF'
 * @vue-prop {String} [colorLeftTop='#FFFFFF'] 輸入左上角顏色字串，預設'#FFFFFF'
 * @vue-prop {String} [colorBottom='#000000'] 輸入下方顏色字串，預設'#000000'
 * @vue-prop {Number} [width=200] 輸入寬度數字，單位px，預設200
 * @vue-prop {Number} [height=200] 輸入高度數字，單位px，預設200
 * @vue-prop {Number} [cursorSize=14] 輸入游標寬度數字，單位px，預設14
 */
export default {
    components: {
        WPickSurface,
    },
    props: {
        value: {
            type: String,
            default: '#FFFFFF',
        },
        color: { //colorRightTop
            type: String,
            default: '#FFFFFF',
        },
        colorLeftTop: {
            type: String,
            default: '#FFFFFF',
        },
        colorBottom: {
            type: String,
            default: '#000000',
        },
        width: {
            type: Number,
            default: 200,
        },
        height: {
            type: Number,
            default: 200,
        },
        cursorSize: {
            type: Number,
            default: 14,
        },
    },
    data: function() {
        return {

            valueTrans: '#fff',
            colorTrans: '#fff',

            colorLeftTopTrans: '#fff',
            colorBottomTrans: '#fff',

            curLocLeft: 0,
            curLocTop: 0,

        }
    },
    computed: {

        changeParams: function() {
            let vo = this

            //valueTrans
            vo.valueTrans = convertColor(vo.value)

            let c = convertColor(vo.color)

            //colorTrans
            let t = oc.toHsv(c)
            // console.log('t', t)
            c = {
                h: t.h,
                s: 1,
                v: 1,
            }
            // console.log('c1', c)
            c = oc.toHexString(c)
            // console.log('c2', c)
            vo.colorTrans = c

            //colorLeftTopTrans, colorBottomTrans
            vo.colorLeftTopTrans = convertColor(vo.colorLeftTop)
            vo.colorBottomTrans = convertColor(vo.colorBottom)

            //updateCurLocByValue
            vo.updateCurLocByValue()

            return ''
        },

        changeColor: function() {
            let vo = this

            //updateColor
            vo.updateColor(vo.color)

            return ''
        },

    },
    methods: {

        //pickCur, 承接WPickSurface之pick事件, 等同原updateCurLocByEvent之後半段
        //  座標之真值必須留在本元件: 其一同時被本路徑與updateCurLocByValue(值反算, 帶色相守門)兩個寫入者更新;
        //  其二changeColor這個會emit的computed對座標有隱式依賴, 座標若移出, 該依賴被切斷,
        //  WColorSelectPanelHsva之lock將失去唯一解鎖來源而永久卡死
        pickCur: function(msg) {
            let vo = this
            vo.curLocLeft = msg.left
            vo.curLocTop = msg.top
            // console.log('pickCur curLoc', msg.left, msg.top)
            vo.updateColor()
        },

        updateCurLocByValue: function() {
            let vo = this

            let r = oc.toHsv(vo.valueTrans)
            // console.log('updateCurLocByValue value toHsv', r, vo.valueTrans)

            let curLocLeft = r.s * (vo.width - 1)
            let curLocTop = (1 - r.v) * (vo.height - 1)

            let t = oc.toHsv(vo.colorTrans)
            // console.log('updateCurLocByValue color toHsv', r, vo.colorTrans)

            if (r.h === t.h) {
                vo.curLocLeft = curLocLeft
                vo.curLocTop = curLocTop
                // console.log('updateCurLocByValue curLocLeft', curLocLeft)
                // console.log('updateCurLocByValue curLocTop', curLocTop)
            }

        },

        updateColor: function() {
            let vo = this
            let xmin = 0
            let xmax = (vo.width - 1)
            let rx = 0
            if ((xmax - xmin) > 0) {
                rx = (vo.curLocLeft - xmin) / (xmax - xmin)
            }
            // console.log('rx', rx)
            let ymin = 0
            let ymax = (vo.height - 1)
            let ry = 0
            if ((ymax - ymin) > 0) {
                ry = (vo.curLocTop - ymin) / (ymax - ymin)
            }
            // console.log('ry', ry)
            let c1
            let c2
            let c
            c1 = vo.colorTrans
            c2 = vo.colorLeftTopTrans
            c = oc.mix(c1, rx, c2, (1 - rx), 'toRgbString')
            c1 = c
            c2 = vo.colorBottomTrans
            c = oc.mix(c1, (1 - ry), c2, ry, 'toHexString')
            c = c.toUpperCase()
            // console.log('updateColor', c)
            vo.$emit('input', c)
        },

    },
}
</script>

<style scoped>
</style>
