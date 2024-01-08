<template>
    <div
        :style="`display:inline-block;`"
        :changeValue="changeValue"
        :changeColor="changeColor"
    >

        <div :style="`position:relative; width:${width}px; height:${height}px;`">

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

            <div :style="`
                position:absolute; left:${curLocLeft-Math.floor(cursorSize/2)-1}px; top:-1px;
                width:${cursorSize+2}px; height:${height+2}px;
                background:transparent;
                border:1px solid #666;
                cursor:pointer;
                user-select:none;
                _pointer-events:none;
                `"
                @mousedown="mousedownCur"
            ></div>

            <div :style="`
                position:absolute; left:${curLocLeft-Math.floor(cursorSize/2)}px; top:0px;
                width:${cursorSize}px; height:${height}px;
                background:transparent;
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
import getImgAlpha from '../js/getImgAlpha.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {Number} [value=1] 輸入透明度數字，介於0至1，預設1
 * @vue-prop {String} [color='#000000'] 輸入右側原始顏色字串，預設'#000000'
 * @vue-prop {Number} [width=200] 輸入寬度數字，單位px，預設200
 * @vue-prop {Number} [height=20] 輸入高度數字，單位px，預設20
 * @vue-prop {Number} [cursorSize=7] 輸入游標寬度數字，單位px，預設7
 */
export default {
    components: {
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

            curMousedown: false,
            curLocLeft: 0,
            // curLocTop: 0,

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

        updateCurLocByEvent: function(e) {
            let vo = this
            let rt = vo.$el.getBoundingClientRect()
            // console.log('rt', rt)
            let curLocLeft = e.clientX - rt.left
            // let curLocTop = e.clientY - rt.top
            curLocLeft = Math.min(Math.max(curLocLeft, 0), (vo.width - 1))
            // curLocTop = Math.min(Math.max(curLocTop, 0), vo.height)
            vo.curLocLeft = curLocLeft
            // vo.curLocTop = curLocTop
            // console.log('updateCurLocByEvent curLocLeft', curLocLeft)
            // console.log('updateCurLocByEvent curLocTop', curLocTop)
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
