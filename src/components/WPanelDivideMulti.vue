<template>
    <div
        v-domresize
        @domresize="resizePanel"
    >

        <!-- cols>=2: 外層水平分割(2欄用WPanelDivideHorizontal, 3欄用WPanelDivideHorizontalTriple), 各欄內再依rows垂直分割 -->
        <component
            :is="compX"
            style="width:100%; height:100%;"
            v-bind="bindX"
            v-on="onX"
            v-if="compX"
        >
            <template v-for="(sn, kc) in slotNamesX" v-slot:[sn]="sp">
                <component
                    :is="compY"
                    :key="'col-'+kc"
                    :style="`width:${sp.width}px; height:${sp.height}px; overflow:hidden;`"
                    v-bind="bindY(kc)"
                    v-on="onY(kc)"
                    v-if="compY"
                >
                    <!-- 格寬取自外層水平分割之sp.width而非內層垂直分割之spY.width, 因內層寬度係由domresize量測回授, 於拖曳欄分隔條時會慢一幀, 致各格右側短暫露出底色 -->
                    <template v-for="(snY, kr) in slotNamesY" v-slot:[snY]="spY">
                        <slot
                            name="pane"
                            :index="kr*useLayout.cols+kc"
                            :row="kr"
                            :col="kc"
                            :width="sp.width"
                            :height="spY.height"
                        ></slot>
                    </template>
                </component>
                <slot
                    name="pane"
                    :index="kc"
                    :row="0"
                    :col="kc"
                    :width="sp.width"
                    :height="sp.height"
                    v-else
                ></slot>
            </template>
        </component>

        <!-- cols===1且rows>=2: 單欄垂直分割 -->
        <component
            :is="compY"
            style="width:100%; height:100%;"
            v-bind="bindY(0)"
            v-on="onY(0)"
            v-else-if="compY"
        >
            <template v-for="(snY, kr) in slotNamesY" v-slot:[snY]="spY">
                <slot
                    name="pane"
                    :index="kr"
                    :row="kr"
                    :col="0"
                    :width="spY.width"
                    :height="spY.height"
                ></slot>
            </template>
        </component>

        <!-- 1:1: 單格無分割 -->
        <slot
            name="pane"
            :index="0"
            :row="0"
            :col="0"
            :width="panelWidth"
            :height="panelHeight"
            v-else
        ></slot>

    </div>
</template>

<script>
import isNumber from 'lodash-es/isNumber.js'
import isArray from 'lodash-es/isArray.js'
import WPanelDivideHorizontal from './WPanelDivideHorizontal.vue'
import WPanelDivideVertical from './WPanelDivideVertical.vue'
import WPanelDivideHorizontalTriple from './WPanelDivideHorizontalTriple.vue'
import WPanelDivideVerticalTriple from './WPanelDivideVerticalTriple.vue'
import domResize from '../js/domResize.mjs'


/**
 * 多切分面板組件，組合兩分割(WPanelDivideHorizontal、WPanelDivideVertical)與三分割(WPanelDivideHorizontalTriple、WPanelDivideVerticalTriple)四組件而成，
 * 支援rows(1~3)列x cols(1~3)欄共9種佈局，先水平切為cols欄(外層)，各欄再各自垂直切為rows列(各欄比例獨立)，
 * 各格內容以具名scoped slot(pane)帶出，pane帶出index(格序=row*cols+col)、row(列序)、col(欄序)、width(格寬px)、height(格高px)，
 * 分隔條之呈現與拖曳行為皆由前述四組件提供，本組件僅負責組合與比例陣列之轉接
 *
 * @vue-prop {Number} [cols=1] 輸入水平切分欄數整數，範圍為1~3，預設1
 * @vue-prop {Number} [rows=1] 輸入各欄垂直切分列數整數，範圍為1~3，預設1
 * @vue-prop {Array} [layouts=null] 輸入支援佈局清單陣列，元素為'rows:cols'字串(如'2:2')，rows與cols組合不在清單內時回退為1:1並提示錯誤，預設null表示支援全部9種
 * @vue-prop {Array} [ratiosX=null] 輸入直向分隔條(欄邊界)位置比例陣列，長度需為cols-1且為遞增於0~1之數字，無效時自動均分，預設null
 * @vue-prop {Array} [ratiosY=null] 輸入橫向分隔條(列邊界)位置比例陣列之陣列，外層長度需為cols，各欄內層長度需為rows-1且為遞增於0~1之數字，無效時自動均分，預設null
 * @vue-prop {Number} [sectionWidthMin=null] 輸入各欄最小寬度數字，單位為px，預設null
 * @vue-prop {Number} [sectionWidthMax=null] 輸入各欄最大寬度數字，單位為px，預設null
 * @vue-prop {Number} [sectionHeightMin=null] 輸入各格最小高度數字，單位為px，預設null
 * @vue-prop {Number} [sectionHeightMax=null] 輸入各格最大高度數字，單位為px，預設null
 * @vue-prop {String} [barColor='#ddd'] 輸入分隔條顏色字串，預設'#ddd'
 * @vue-prop {Number} [barSize=2] 輸入分隔條尺寸數字，為分隔條寬(高)度，單位為px，預設2
 * @vue-prop {String} [barBorderColor='transparent'] 輸入分隔條框線顏色字串，預設'transparent'
 * @vue-prop {Number} [barBorderSize=3] 輸入分隔條框線寬度數字，單位為px，預設3，通常配合barBorderColor='transparent'使可拖曳區加大又不遮蔽可視區
 *
 * @vue-event update:ratiosX 拖曳直向分隔條時發射，帶出新的欄邊界比例陣列
 * @vue-event update:ratiosY 拖曳橫向分隔條時發射，帶出新的列邊界比例陣列之陣列
 * @vue-event resize 面板尺寸變更時發射，帶出domresize訊息物件
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WPanelDivideHorizontal,
        WPanelDivideVertical,
        WPanelDivideHorizontalTriple,
        WPanelDivideVerticalTriple,
    },
    props: {
        cols: {
            type: Number,
            default: 1,
        },
        rows: {
            type: Number,
            default: 1,
        },
        layouts: {
            type: Array,
            default: null,
        },
        ratiosX: {
            type: Array,
            default: null,
        },
        ratiosY: {
            type: Array,
            default: null,
        },
        sectionWidthMin: {
            type: Number,
            default: null,
        },
        sectionWidthMax: {
            type: Number,
            default: null,
        },
        sectionHeightMin: {
            type: Number,
            default: null,
        },
        sectionHeightMax: {
            type: Number,
            default: null,
        },
        barColor: {
            type: String,
            default: '#ddd',
        },
        barSize: {
            type: Number,
            default: 2,
        },
        barBorderColor: {
            type: String,
            default: 'transparent',
        },
        barBorderSize: {
            type: Number,
            default: 3,
        },
    },
    data: function() {
        return {
            panelWidth: 0,
            panelHeight: 0,
        }
    },
    computed: {

        useLayout: function() {
            let vo = this

            //rows, cols, 夾制至1~3
            let rows = Math.min(Math.max(Math.floor(vo.rows), 1), 3)
            let cols = Math.min(Math.max(Math.floor(vo.cols), 1), 3)

            //lys, 支援佈局清單, 未指定時支援全部9種
            let lys = (isArray(vo.layouts) && vo.layouts.length > 0) ? vo.layouts : ['1:1', '1:2', '1:3', '2:1', '2:2', '2:3', '3:1', '3:2', '3:3']

            //check, 不在支援清單內時回退為1:1
            let k = `${rows}:${cols}`
            if (lys.indexOf(k) < 0) {
                console.error(`WPanelDivideMulti: 佈局[${k}]不在支援清單[${lys.join(', ')}]內, 回退為1:1`)
                return { rows: 1, cols: 1 }
            }

            return { rows, cols }
        },

        compX: function() {
            let vo = this

            //外層水平分割組件, 1欄無分割
            if (vo.useLayout.cols === 2) {
                return 'WPanelDivideHorizontal'
            }
            if (vo.useLayout.cols === 3) {
                return 'WPanelDivideHorizontalTriple'
            }
            return null
        },

        compY: function() {
            let vo = this

            //各欄垂直分割組件, 1列無分割
            if (vo.useLayout.rows === 2) {
                return 'WPanelDivideVertical'
            }
            if (vo.useLayout.rows === 3) {
                return 'WPanelDivideVerticalTriple'
            }
            return null
        },

        slotNamesX: function() {
            let vo = this

            //外層水平分割組件之slot名稱, 順序即欄序
            if (vo.useLayout.cols === 3) {
                return ['left', 'center', 'right']
            }
            return ['left', 'right']
        },

        slotNamesY: function() {
            let vo = this

            //各欄垂直分割組件之slot名稱, 順序即列序
            if (vo.useLayout.rows === 3) {
                return ['top', 'center', 'bottom']
            }
            return ['top', 'bottom']
        },

        rxUse: function() {
            let vo = this

            //正規化欄邊界
            return vo.normalizeBounds(vo.ratiosX, vo.useLayout.cols)
        },

        ryUse: function() {
            let vo = this

            //逐欄正規化列邊界
            let ry = []
            for (let kc = 0; kc < vo.useLayout.cols; kc++) {
                ry.push(vo.normalizeBounds(isArray(vo.ratiosY) ? vo.ratiosY[kc] : null, vo.useLayout.rows))
            }
            return ry
        },

        bindX: function() {
            let vo = this

            //外層水平分割組件之props
            if (vo.useLayout.cols === 2) {
                return {
                    ratio: vo.rxUse[0],
                    leftWidthMin: vo.sectionWidthMin,
                    leftWidthMax: vo.sectionWidthMax,
                    rightWidthMin: vo.sectionWidthMin,
                    rightWidthMax: vo.sectionWidthMax,
                    barColor: vo.barColor,
                    barSize: vo.barSize,
                    barBorderColor: vo.barBorderColor,
                    barBorderSize: vo.barBorderSize,
                }
            }
            if (vo.useLayout.cols === 3) {
                return {
                    ratio1: vo.rxUse[0],
                    ratio2: vo.rxUse[1],
                    sectionWidthMin: vo.sectionWidthMin,
                    sectionWidthMax: vo.sectionWidthMax,
                    barColor: vo.barColor,
                    barSize: vo.barSize,
                    barBorderColor: vo.barBorderColor,
                    barBorderSize: vo.barBorderSize,
                }
            }
            return {}
        },

        onX: function() {
            let vo = this

            //外層水平分割組件之事件轉接: 更新對應欄邊界後發射完整陣列
            if (vo.useLayout.cols === 2) {
                return {
                    'update:ratio': (r) => {
                        vo.$emit('update:ratiosX', [r])
                    },
                }
            }
            if (vo.useLayout.cols === 3) {
                return {
                    'update:ratio1': (r) => {
                        vo.$emit('update:ratiosX', [r, vo.rxUse[1]])
                    },
                    'update:ratio2': (r) => {
                        vo.$emit('update:ratiosX', [vo.rxUse[0], r])
                    },
                }
            }
            return {}
        },

    },
    methods: {

        resizePanel: function(msg) {
            //console.log('methods resizePanel', msg)

            let vo = this

            //update
            vo.panelWidth = msg.snew.offsetWidth
            vo.panelHeight = msg.snew.offsetHeight

            //emit
            vo.$emit('resize', msg)

        },

        normalizeBounds: function(bs, n) {
            //bs需為長度n-1且遞增於0~1之數字陣列, 無效時回傳均分邊界
            //註: 邊界值0與1及相鄰值相等皆須視為有效, 因分隔條可被拖曳至面板邊緣或彼此貼齊, 此時各分割組件所發射之比例即為0、1或與相鄰者相等, 若視為無效將回退為均分, 導致與外部同步值不一致

            //ok
            let ok = isArray(bs) && bs.length === n - 1
            if (ok) {
                let prev = 0
                for (let i = 0; i < bs.length; i++) {
                    if (!isNumber(bs[i]) || bs[i] < prev || bs[i] > 1) {
                        ok = false
                        break
                    }
                    prev = bs[i]
                }
            }

            //check
            if (!ok) {
                let r = []
                for (let i = 1; i < n; i++) {
                    r.push(i / n)
                }
                return r
            }

            return bs.slice()
        },

        bindY: function(kc) {
            let vo = this

            //欄kc之垂直分割組件props
            if (vo.useLayout.rows === 2) {
                return {
                    ratio: vo.ryUse[kc][0],
                    topHeightMin: vo.sectionHeightMin,
                    topHeightMax: vo.sectionHeightMax,
                    bottomHeightMin: vo.sectionHeightMin,
                    bottomHeightMax: vo.sectionHeightMax,
                    barColor: vo.barColor,
                    barSize: vo.barSize,
                    barBorderColor: vo.barBorderColor,
                    barBorderSize: vo.barBorderSize,
                }
            }
            if (vo.useLayout.rows === 3) {
                return {
                    ratio1: vo.ryUse[kc][0],
                    ratio2: vo.ryUse[kc][1],
                    sectionHeightMin: vo.sectionHeightMin,
                    sectionHeightMax: vo.sectionHeightMax,
                    barColor: vo.barColor,
                    barSize: vo.barSize,
                    barBorderColor: vo.barBorderColor,
                    barBorderSize: vo.barBorderSize,
                }
            }
            return {}
        },

        onY: function(kc) {
            let vo = this

            //欄kc之垂直分割組件事件轉接: 更新該欄列邊界後發射完整(逐欄)陣列
            let emitY = (kb, r) => {
                let rys = vo.ryUse.map((a) => a.slice())
                rys[kc].splice(kb, 1, r)
                vo.$emit('update:ratiosY', rys)
            }
            if (vo.useLayout.rows === 2) {
                return {
                    'update:ratio': (r) => {
                        emitY(0, r)
                    },
                }
            }
            if (vo.useLayout.rows === 3) {
                return {
                    'update:ratio1': (r) => {
                        emitY(0, r)
                    },
                    'update:ratio2': (r) => {
                        emitY(1, r)
                    },
                }
            }
            return {}
        },

    }
}
</script>

<style scoped>
</style>
