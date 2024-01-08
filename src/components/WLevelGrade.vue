<template>
    <div
        :style="``"
    >

        <table style="border-collapse:collapse;">
            <tbody>
                <tr
                    :key="'klevel-'+klevel"
                    v-for="(level,klevel) in levels"
                >

                    <td :style="`width:${arrowSize}px;`">
                        <div
                            :style="`transform:rotate(-90deg);`"
                            v-if="indValue===klevel"
                        >
                            <WIcon
                                :icon="mdiTriangleDown"
                                :color="arrowColor"
                                :colorHover="arrowColor"
                                :size="arrowSize"
                            ></WIcon>
                        </div>
                    </td>

                    <td :style="`background:${getColor(get(level,keyColor,'transparent'))}; width:${gradeSize}px; height:${gradeSize}px;`"></td>

                    <td
                        :style="`padding-left:${spaceForGrade}px; text-align:right; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px;`"
                    >
                        <slot
                            name="low"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{getTick(get(level,keyLow,''))}}
                        </slot>
                    </td>

                    <td
                        :style="`padding:0px 2px; text-align:center; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px;`"
                    >
                        <slot
                            name="delimiter"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{get(level,keyDelimiter,'')}}
                        </slot>
                    </td>

                    <td
                        :style="`text-align:left; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px;`"
                    >
                        <slot
                            name="up"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{getTick(get(level,keyUp,''))}}
                        </slot>
                    </td>

                    <td
                        :style="`padding-left:${spaceForText}px; text-align:left; ${useGradeTextFontSize} color:${useGradeTextColor}; height:${gradeSize}px; line-height:${gradeSize}px;`"
                    >
                        <slot
                            name="text"
                            :klevel="klevel"
                            :level="level"
                        >
                            {{get(level,keyText,'')}}
                        </slot>
                    </td>

                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { mdiTriangleDown } from '@mdi/js'
import get from 'lodash-es/get'
import each from 'lodash-es/each'
import replace from 'wsemi/src/replace.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import isp0int from 'wsemi/src/isp0int.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import dig from 'wsemi/src/dig.mjs'
import convertColor from '../js/convertColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的物件陣列，預設[]

 */
export default {
    components: {
        WIcon,
    },
    props: {
        levels: {
            type: Array,
            default: () => [],
        },
        value: {
            type: Number,
            default: null,
        },
        keyColor: {
            type: String,
            default: 'color',
        },
        keyLow: {
            type: String,
            default: 'low',
        },
        keyUp: {
            type: String,
            default: 'up',
        },
        keyDelimiter: {
            type: String,
            default: 'delimiter',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        spaceForGrade: {
            type: Number,
            default: 5,
        },
        spaceForText: {
            type: Number,
            default: 5,
        },
        tickDig: {
            type: Number,
            default: null,
        },
        gradeSize: {
            type: Number,
            default: 18,
        },
        gradeTextFontSize: {
            type: String,
            default: '0.75rem',
        },
        gradeTextColor: {
            type: String,
            default: '#444',
        },
        arrowColor: {
            type: String,
            default: '#666',
        },
        arrowSize: {
            type: Number,
            default: 10,
        },
    },
    data: function() {
        return {
            get,
            mdiTriangleDown,
        }
    },
    computed: {

        useGradeTextFontSize: function() {
            let vo = this
            let s = vo.gradeTextFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useGradeTextColor: function() {
            let vo = this
            return convertColor(vo.gradeTextColor)
        },

        indValue: function() {
            let vo = this

            //ind
            let ind = -1
            each(vo.levels, (v, k) => {
                let low = cdbl(get(v, vo.keyLow, 0))
                let up = cdbl(get(v, vo.keyUp, 0))
                if (low <= vo.value && vo.value <= up) {
                    ind = k
                    return false //跳出
                }
            })

            return ind
        },

    },
    methods: {

        getColor: function(c) {
            return convertColor(c)
        },

        getTick: function(v) {
            let vo = this
            if (isnum(v)) {
                v = cdbl(v)
            }
            if (isp0int(vo.tickDig)) {
                v = dig(v, vo.tickDig)
            }
            return v
        },

    },
}
</script>

<style scoped>
</style>
