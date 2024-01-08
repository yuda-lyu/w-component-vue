<template>
    <div
        :style="`display:inline-block; width:${width}px; height:${height}px;`"
        :changeValue="changeValue"
        :changePick="changePick"
    >

        <div :style="`position:relative; width:${width}px; height:${height}px;`">

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
                background-image: url(${aimg});
                background-repeat:repeat;
            `"></div>

            <div :style="`
                position:absolute; left:0px; top:0px;
                width:${width}px; height:${height}px;
            `">
                <div style="display:flex;">
                    <svg :viewBox="`0 0 ${colors.length*s} ${s}`" :width="width" :height="height" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">

                        <rect
                            :key="'kc-'+kc"
                            v-for="(c,kc) in colors"
                            :style="`fill:${c.color}; stroke-width:0px; cursor:pointer; user-select:none;`"
                            :x="c.x"
                            :y="c.y"
                            :width="s"
                            :height="s"
                            @click="ckColor(c)"
                        />

                        <template v-if="pick">
                            <rect
                                :style="`fill:transparent; stroke:#000; stroke-width:1px; cursor:pointer; user-select:none;`"
                                :x="pick.x"
                                :y="pick.y"
                                :width="s"
                                :height="s"
                            />
                            <rect
                                :style="`fill:transparent; stroke:#fff; stroke-width:2px; cursor:pointer; user-select:none;`"
                                :x="pick.x+2"
                                :y="pick.y+2"
                                :width="s-4"
                                :height="s-4"
                            />
                        </template>

                    </svg>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
import each from 'lodash-es/each'
import oc from 'wsemi/src/color.mjs'
import getImgAlpha from '../js/getImgAlpha.mjs'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {String} [colorLeft='#FFFFFF'] 輸入左側指定色顏色字串，預設'#FFFFFF'
 * @vue-prop {String} [colorRight='#000000'] 輸入右側指定色顏色字串，預設'#000000'
 * @vue-prop {Number} [colorNum=10] 輸入切分顏色整數，預設10
 * @vue-prop {Number} [width=200] 輸入寬度數字，單位px，預設200
 * @vue-prop {Number} [height=20] 輸入高度數字，單位px，預設20
 */
export default {
    components: {
    },
    props: {
        value: {
            type: String,
            default: '#FFFFFF',
        },
        colorLeft: {
            type: String,
            default: '#FFFFFF',
        },
        colorRight: {
            type: String,
            default: '#000000',
        },
        colorNum: {
            type: Number,
            default: 10,
        },
        width: {
            type: Number,
            default: 200,
        },
        height: {
            type: Number,
            default: 20,
        },
    },
    data: function() {
        return {
            aimg: getImgAlpha(),

            valueTrans: null,
            colorLeftTrans: null,
            colorRightTrans: null,

            s: 20,

            pick: null,

        }
    },
    computed: {

        changeValue: function() {
            let vo = this
            vo.valueTrans = convertColor(vo.value)
            vo.colorLeftTrans = convertColor(vo.colorLeft)
            vo.colorRightTrans = convertColor(vo.colorRight)
            return ''
        },

        colors: function() {
            let vo = this

            //gradient
            let gradient = {
                0: vo.colorLeftTrans,
                1: vo.colorRightTrans,
            }

            //fun
            let fun = oc.interp(gradient)
            // console.log('fun(0)', fun(0))
            // console.log('fun(0.1)', fun(0.1))

            let rs = []
            for (let i = 0; i < vo.colorNum; i++) {
                let r = i / Math.max((vo.colorNum - 1), 1)
                // console.log('r', r)
                let color = fun(r)
                // color = oc.toRgbString(color)
                // console.log('color', color)
                rs.push({
                    r,
                    x: i * vo.s,
                    y: 0,
                    color,
                })
            }

            return rs
        },

        changePick: function() {
            let vo = this

            //pick
            let pick = null
            each(vo.colors, (v) => {
                let b = vo.jdColor2(v.color, vo.valueTrans)
                if (b) {
                    pick = v
                }
            })
            vo.pick = pick
            // console.log('pick', pick)

            return ''
        },

    },
    methods: {

        jdColor2: function(c1, c2) {
            // let vo = this
            let _c1 = oc.toRgbString(c1)
            let _c2 = oc.toRgbString(c2)
            return _c1 === _c2
        },

        ckColor: function(v) {
            let vo = this
            vo.valueTrans = v.color
            vo.$emit('input', v.color)
        },

    },
}
</script>

<style scoped>
</style>
