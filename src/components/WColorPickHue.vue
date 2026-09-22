<template>
    <!-- 側效computed之綁定(:changeXxx)必須排在資料prop之前:
         Vue2於父層render期間以同一個物件字面值依原始碼順序取值, :locLeft若排在:changeValue之前會取到上一輪之座標 -->
    <!-- 本元件之根節點必須直接是WPickSurface, 不得再包div, 否則版面高度會多出inline-block之descender -->
    <!-- slot內容於本元件之作用域編譯, 故canvas之ref="cvs"仍註冊於本元件, plotBackground不需更動 -->
    <WPickSurface
        :changeValue="changeValue"
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
                overflow:hidden;
            `">
                <div style="display:flex;">
                    <canvas
                        ref="cvs"
                        :style="`width:${width}px; height:${height}px;`"
                    ></canvas>
                </div>
            </div>

    </WPickSurface>
</template>

<script>
import isEle from 'wsemi/src/isEle.mjs'
import waitFun from 'wsemi/src/waitFun.mjs'
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'
import WPickSurface from './WPickSurface.vue'


/**
 * @vue-prop {String} [value='#FF0000'] 輸入顏色字串，預設'#FF0000'
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

            curLocLeft: 0,
            // curLocTop: 0,

        }
    },
    mounted: function() {
        //console.log('mounted')

        let vo = this

        //plotBackground
        vo.plotBackground()

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

        //pickCur, 承接WPickSurface之pick事件, 等同原updateCurLocByEvent之後半段
        //  座標之真值留在本元件: 其同時被本路徑與updateCurLocByValue(值反算)兩個寫入者更新
        pickCur: function(msg) {
            let vo = this
            vo.curLocLeft = msg.left
            // console.log('pickCur curLocLeft', msg.left)
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

    },
}
</script>

<style scoped>
</style>
