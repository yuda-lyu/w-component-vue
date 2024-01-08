<template>
    <div
        :style="`display:inline-block; width:${width}px; height:${height}px;`"
        :changeValue="changeValue"
        :changePick="changePick"
    >

        <div style="display:flex;">
            <svg :viewBox="`0 0 ${xmax} ${ymax}`" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">

                <!-- 若無框線各六角型之間會有些微縫隙, 故還是用各指定色給予1px線寬 -->
                <polygon
                    :key="'kc-'+kc"
                    v-for="(c,kc) in colors"
                    :style="`fill:${c.color}; stroke:${c.color}; stroke-width:1px; cursor:pointer; user-select:none;`"
                    :transform="`translate(${c.x}, ${c.y})`"
                    :points="cpgs"
                    @click="ckColor(c)"
                />

                <template v-if="pick">
                    <polygon
                        :style="`fill:transparent; stroke:#000; stroke-width:4px; cursor:pointer; user-select:none;`"
                        :transform="`translate(${pick.x}, ${pick.y})`"
                        :points="cpgs"
                        @click="ckColor(pick)"
                    />
                    <polygon
                        :style="`fill:transparent; stroke:#fff; stroke-width:2px; cursor:pointer; user-select:none;`"
                        :transform="`translate(${pick.x}, ${pick.y})`"
                        :points="cpgs"
                        @click="ckColor(pick)"
                    />
                </template>

            </svg>
        </div>

    </div>
</template>

<script>
import map from 'lodash-es/map'
import each from 'lodash-es/each'
import min from 'lodash-es/min'
import max from 'lodash-es/max'
import join from 'lodash-es/join'
import isestr from 'wsemi/src/isestr.mjs'
import oc from 'wsemi/src/color.mjs'
import convertColor from '../js/convertColor.mjs'


function genHexagon(size) {

    let s = size
    let sr = s / 2 * Math.sqrt(3)
    let st = s / 4 * 3
    let getRegularHexagonVertices = () => {
        let vertices = []
        let centerX = 0.5
        let centerY = 0.5
        let radius = 0.5
        for (let i = 0; i < 6; i++) {
            let angle = (Math.PI / 3) * (i + 1 / 2)
            let x = centerX + radius * Math.cos(angle)
            let y = centerY + radius * Math.sin(angle)
            x *= s
            y *= s
            vertices.push({ x, y })
        }
        return vertices
    }
    let vts = getRegularHexagonVertices()
    let cpgs = map(vts, (v) => {
        return `${v.x},${v.y}`
    })
    cpgs = join(cpgs, ' ')
    // console.log('vts', vts)
    // console.log('cpgs', cpgs)


    let hcs = [

        {
            dx: 6,
            cs: ['#003366', '#336699', '#3366CC', '#003399', '#000099', '#0000CC', '#000066'],
        },

        {
            dx: 5,
            cs: ['#006666', '#006699', '#0099CC', '#0066CC', '#0033CC', '#0000FF', '#3333FF', '#333399'],
        },

        {
            dx: 4,
            cs: ['#669999', '#009999', '#33CCCC', '#00CCFF', '#0099FF', '#0066FF', '#3366FF', '#3333CC', '#666699'],
        },

        {
            dx: 3,
            cs: ['#339966', '#00CC99', '#00FFCC', '#00FFFF', '#33CCFF', '#3399FF', '#6699FF', '#6666FF', '#6600FF', '#6600CC'],
        },

        {
            dx: 2,
            cs: ['#339933', '#00CC66', '#00FF99', '#66FFCC', '#66FFFF', '#66CCFF', '#99CCFF', '#9999FF', '#9966FF', '#9933FF', '#9900FF'],
        },

        {
            dx: 1,
            cs: ['#006600', '#00CC00', '#00FF00', '#66FF99', '#99FFCC', '#CCFFFF', '#CCCCFF', '#CC99FF', '#CC66FF', '#CC33FF', '#CC00FF', '#9900CC'],
        },

        {
            dx: 0,
            cs: ['#003300', '#009933', '#33CC33', '#66FF66', '#99FF99', '#CCFFCC', '#FFFFFF', '#FFCCFF', '#FF99FF', '#FF66FF', '#FF00FF', '#CC00CC', '#660066'],
        },

        {
            dx: 1,
            cs: ['#336600', '#009900', '#66FF33', '#99FF66', '#CCFF99', '#FFFFCC', '#FFCCCC', '#FF99CC', '#FF66CC', '#FF33CC', '#CC0099', '#993399'],
        },

        {
            dx: 2,
            cs: ['#333300', '#669900', '#99FF33', '#CCFF66', '#FFFF99', '#FFCC99', '#FF9999', '#FF6699', '#FF3399', '#CC3399', '#990099'],
        },

        {
            dx: 3,
            cs: ['#666633', '#99CC00', '#CCFF33', '#FFFF66', '#FFCC66', '#FF9966', '#FF6666', '#FF0066', '#CC6699', '#993366'],
        },

        {
            dx: 4,
            cs: ['#999966', '#CCCC00', '#FFFF00', '#FFCC00', '#FF9933', '#FF6600', '#FF5050', '#CC0066', '#660033'],
        },

        {
            dx: 5,
            cs: ['#996633', '#CC9900', '#FF9900', '#CC6600', '#FF3300', '#FF0000', '#CC0000', '#990033'],
        },

        {
            dx: 6,
            cs: ['#663300', '#996600', '#CC3300', '#993300', '#990000', '#800000', '#993333'],
        },

    ]
    let colors = []
    each(hcs, (h, kr) => {
        each(h.cs, (c, kc) => {
            let v = {
                x: (sr + 0) * (kc) + h.dx * (sr / 2),
                y: (st + 0) * (kr),
                color: c,
            }
            if (isestr(c)) {
                colors.push(v)
            }
        })
    })
    // console.log('hcs', hcs)
    // console.log('colors', colors)

    let xmin = min(map(colors, 'x'))
    let xmax = max(map(colors, 'x'))
    let ymin = min(map(colors, 'y'))
    let ymax = max(map(colors, 'y'))
    xmax += sr + 2
    ymax += s + 1
    // console.log('xmin', xmin)
    // console.log('xmax', xmax)
    // console.log('ymin', ymin)
    // console.log('ymax', ymax)

    return {
        cpgs,
        colors,
        xmin,
        xmax,
        ymin,
        ymax,
    }
}


/**
 * @vue-prop {String} [value='#FFFFFF'] 輸入顏色字串，預設'#FFFFFF'
 * @vue-prop {Number} [size=200] 輸入尺寸數字，代表組件基礎寬度與將自動計算高度，單位px，預設200
 */
export default {
    components: {
    },
    props: {
        value: {
            type: String,
            default: '#FFFFFF',
        },
        size: {
            type: Number,
            default: 200,
        },
    },
    data: function() {
        let size = 18
        let hn = genHexagon(size)
        // console.log('hn', hn)
        return {

            valueTrans: null,

            cpgs: hn.cpgs,
            colors: hn.colors,
            xmin: hn.xmin,
            xmax: hn.xmax,
            ymin: hn.ymin,
            ymax: hn.ymax,

            pick: null,

        }
    },
    computed: {

        changeValue: function() {
            let vo = this
            vo.valueTrans = convertColor(vo.value)
            return ''
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

        width: function() {
            let vo = this
            return vo.size
        },

        height: function() {
            let vo = this
            return vo.width / 10 * 9
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
