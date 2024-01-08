<template>
    <div
        :style="`display:inline-block;`"
        :changeParams="changeParams"
        :changeColor="changeColor"
    >

        <div :style="`position:relative; width:${width}px; height:${height}px;`">

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

            <div :style="`
                position:absolute; left:${curLocLeft-Math.floor(cursorSize/2)-1}px; top:${curLocTop-Math.floor(cursorSize/2)-1}px;
                width:${cursorSize+2}px; height:${cursorSize+2}px;
                background:transparent;
                border-radius:50%;
                border:1px solid #666;
                cursor:pointer;
                user-select:none;
                _pointer-events:none;
                `"
                @mousedown="mousedownCur"
            ></div>

            <div :style="`
                position:absolute; left:${curLocLeft-Math.floor(cursorSize/2)}px; top:${curLocTop-Math.floor(cursorSize/2)}px;
                width:${cursorSize}px; height:${cursorSize}px;
                background:transparent;
                border-radius:50%;
                border:1px solid #fff;
                cursor:pointer;
                user-select:none;
                _pointer-events:none;
                `"
                @mousedown="mousedownCur"
            ></div>

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                cursor:pointer;
                user-select:none;
                _pointer-events:none;
                `"
                @mousedown="mousedownCur"
            ></div>

        </div>

    </div>
</template>

<script>
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'


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

            curMousedown: false,
            curLocLeft: 0,
            curLocTop: 0,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //windowMousemove
        vo.windowMousemove = (e) => {
            // console.log('windowMousemove', e)
            if (vo.curMousedown) {
                vo.updateCurLocByEvent(e)
            }
        }
        window.addEventListener('mousemove', vo.windowMousemove, false)

        //windowMouseup
        vo.windowMouseup = (e) => {
            // console.log('windowMouseup')
            vo.curMousedown = false
        }
        window.addEventListener('mouseup', vo.windowMouseup, false)

    },
    beforeDestroy: function() {
        //console.log('beforeDestroy')

        let vo = this

        //removeEventListener
        window.removeEventListener('mousemove', vo.windowMousemove, false)
        window.removeEventListener('mouseup', vo.windowMouseup, false)

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

        updateCurLocByEvent: function(e) {
            let vo = this
            let rt = vo.$el.getBoundingClientRect()
            // console.log('rt', rt)
            let curLocLeft = e.clientX - rt.left
            let curLocTop = e.clientY - rt.top
            curLocLeft = Math.min(Math.max(curLocLeft, 0), (vo.width - 1))
            curLocTop = Math.min(Math.max(curLocTop, 0), (vo.height - 1))
            vo.curLocLeft = curLocLeft
            vo.curLocTop = curLocTop
            // console.log('updateCurLocByEvent curLocLeft', curLocLeft)
            // console.log('updateCurLocByEvent curLocTop', curLocTop)
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

        mousedownCur: function(e) {
            let vo = this
            vo.curMousedown = true
            vo.updateCurLocByEvent(e)
        },

    },
}
</script>

<style scoped>
</style>
