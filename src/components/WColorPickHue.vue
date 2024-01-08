<template>
    <div
        :style="`display:inline-block;`"
        :changeValue="changeValue"
    >

        <div :style="`position:relative; width:${width}px; height:${height}px;`">

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                overflow:hidden;
            `">
                <div style="display:flex;">
                    <canvas
                        ref="cvs"
                        :style="`width:${width}px; height:${height}px;`"
                    ></canvas>
                </div>
            </div>

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
import isEle from 'wsemi/src/isEle.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {Number} [width=200] 輸入寬度數字，單位px，預設200
 * @vue-prop {Number} [height=20] 輸入高度數字，單位px，預設20
 * @vue-prop {Number} [cursorSize=7] 輸入游標寬度數字，單位px，預設7
 */
export default {
    components: {
    },
    props: {
        value: {
            type: String,
            default: '#FF0000',
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

            valueTrans: '#fff',

            curMousedown: false,
            curLocLeft: 0,
            // curLocTop: 0,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //plotBackground
        vo.plotBackground()

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
            vo.valueTrans = convertColor(vo.value)
            vo.updateCurLocByValue()
            return ''
        },

    },
    methods: {

        plotBackground: function () {
            let vo = this

            async function core() {

                await waitFun(() => {
                    return isEle(vo.$refs.cvs)
                })

                //canvas
                let canvas = vo.$refs.cvs
                // console.log('canvas', canvas)
                // let { offsetWidth, offsetHeight } = canvas
                // console.log('offsetWidth', offsetWidth)
                // console.log('offsetHeight', offsetHeight)

                //canvas預設寬高是300x150, 須重設寬高
                canvas.width = vo.width
                canvas.height = vo.height

                //ctx
                let ctx = canvas.getContext('2d')

                // let t = oc.toHsv(vo.colorRight)
                // // console.log('t', t)

                let w = (vo.width - 1)
                // let h = vo.height - 1

                for (let j = 0; j <= w; j++) {
                    // console.log('j', j)

                    //c
                    let c = {
                        h: j / w * 360,
                        s: 1,
                        v: 1,
                    }
                    // console.log('c', c)
                    c = oc.toHexString(c)

                    //draw
                    ctx.fillStyle = c
                    ctx.fillRect(j, 0, 1, vo.height)

                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

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
            vo.updateColor()
        },

        updateCurLocByValue: function() {
            let vo = this

            let r = oc.toHsv(vo.valueTrans)
            // console.log('updateCurLocByValue toHsv', r)

            let curLocLeft = r.h / 360 * (vo.width - 1)

            vo.curLocLeft = curLocLeft
            // console.log('updateCurLocByValue curLocLeft', curLocLeft)

        },

        updateColor: function() {
            let vo = this
            let xmin = 0
            let xmax = (vo.width - 1)
            let rx = 0
            if ((xmax - xmin - 1) > 0) {
                rx = (vo.curLocLeft - xmin) / (xmax - xmin)
            }
            // console.log('rx', rx)
            let c = {
                h: rx * 360,
                s: 1,
                v: 1,
            }
            c = oc.toHexString(c)
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
