<template>
    <WPopup
        :displayType="'line'"
        :placementDistX="placementDistX"
        :placementDistY="placementDistY"
        :editable="editable"
        :value="showPanelTrans"
        @input="(v)=>{updateShowPanel(v,'WPopup')}"
        :changeValueFromPopup="changeValueFromPopup"
    >

        <template v-slot:trigger>
            <div
                TimedayCore="day"
                :style="`color:${useTextColor}; ${useTextFontSize}`"
            >
                <template v-if="!emptyDay">
                    {{valueDay}}
                </template>
                <template v-else>
                    {{textEmpty}}
                </template>
            </div>
        </template>

        <template v-slot:content>
            <div style="min-width:240px; padding:8px 12px; user-select:none;">

                <!-- Day View -->
                <div v-if="viewMode==='day'">

                    <!-- Header -->
                    <div style="display:flex; align-items:center; justify-content:space-between; padding:4px 0 8px 0;">
                        <div style="cursor:pointer; padding:2px 8px; font-size:1.1rem; color:#666;" @click="prevMonth">‹</div>
                        <div style="cursor:pointer; font-weight:500; font-size:0.95rem;" @click="viewMode='month'">{{renderYear(displayYear)}} {{renderMonth(displayMonth)}}</div>
                        <div style="cursor:pointer; padding:2px 8px; font-size:1.1rem; color:#666;" @click="nextMonth">›</div>
                    </div>

                    <!-- Weekday headers -->
                    <div style="display:grid; grid-template-columns:repeat(7,1fr); text-align:center;">
                        <div v-for="w in weekdayLabels" :key="w" style="padding:4px 0; font-size:0.75rem; color:#999;">{{w}}</div>
                    </div>

                    <!-- Day cells -->
                    <div style="display:grid; grid-template-columns:repeat(7,1fr); text-align:center;">
                        <div v-for="(cell, idx) in calendarCells" :key="idx" style="display:flex; align-items:center; justify-content:center; padding:3px;">
                            <div
                                v-if="cell.day"
                                :style="getDayStyle(cell.selected)"
                                @click="clickDay(cell.day)"
                                @mouseenter="(e)=>{ if(!cell.selected) e.currentTarget.style.backgroundColor=useHoverColor; }"
                                @mouseleave="(e)=>{ if(!cell.selected) e.currentTarget.style.backgroundColor=''; }"
                            >{{cell.day}}</div>
                        </div>
                    </div>

                </div>

                <!-- Month View -->
                <div v-if="viewMode==='month'">

                    <!-- Header -->
                    <div style="display:flex; align-items:center; justify-content:space-between; padding:4px 0 8px 0;">
                        <div style="cursor:pointer; padding:2px 8px; font-size:1.1rem; color:#666;" @click="displayYear--">‹</div>
                        <div style="cursor:pointer; font-weight:500; font-size:0.95rem;" @click="showYearView">{{renderYear(displayYear)}}</div>
                        <div style="cursor:pointer; padding:2px 8px; font-size:1.1rem; color:#666;" @click="displayYear++">›</div>
                    </div>

                    <!-- Month cells -->
                    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:6px; text-align:center;">
                        <div v-for="m in 12" :key="m" style="display:flex; align-items:center; justify-content:center; padding:4px 0;">
                            <div
                                :style="getMonthStyle(m)"
                                @click="clickMonth(m)"
                                @mouseenter="(e)=>{ if(!(selectedYear===displayYear && selectedMonth===m)) e.currentTarget.style.backgroundColor=useHoverColor; }"
                                @mouseleave="(e)=>{ if(!(selectedYear===displayYear && selectedMonth===m)) e.currentTarget.style.backgroundColor=''; }"
                            >{{renderMonth(m)}}</div>
                        </div>
                    </div>

                </div>

                <!-- Year View -->
                <div v-if="viewMode==='year'">
                    <div ref="yearScroll" style="text-align:center; max-height:240px; overflow-y:auto;">
                        <div v-for="y in yearList" :key="y" :ref="'year_'+y" style="padding:4px 0;">
                            <div
                                :style="getYearStyle(y)"
                                @click="clickYear(y)"
                                @mouseenter="(e)=>{ if(selectedYear!==y) e.currentTarget.style.backgroundColor=useHoverColor; }"
                                @mouseleave="(e)=>{ if(selectedYear!==y) e.currentTarget.style.backgroundColor=''; }"
                            >{{renderYear(y)}}</div>
                        </div>
                    </div>
                </div>

            </div>
        </template>

    </WPopup>
</template>

<script>
import isday from 'wsemi/src/isday.mjs'
import replace from 'wsemi/src/replace.mjs'
import now2str from 'wsemi/src/now2str.mjs'
import strleft from 'wsemi/src/strleft.mjs'
import convertColor from '../js/convertColor.mjs'
import WPopup from './WPopup.vue'


/**
 * @vue-prop {String} [value=''] 輸入日期字串，預設''
 * @vue-prop {String} [textFontSize='0.85rem'] 輸入文字大小字串，預設'0.85rem'
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [pickColor='deep-orange darken-1'] 輸入日期彈窗中選擇指定日期之顏色字串，預設'deep-orange darken-1'
 * @vue-prop {String} [hoverColor='#ddd'] 輸入日期彈窗中滑鼠移入時之背景顏色字串，預設'#ddd'
 * @vue-prop {Number} [placementDistX=0] 輸入日期彈窗之水平向右平移數字，單位為px，預設0
 * @vue-prop {Number} [placementDistY=7] 輸入日期彈窗之垂直向下平移數字，單位為px，預設7
 * @vue-prop {String} [textEmpty='Select a date'] 輸入尚未輸入日期之顯示文字字串，預設'Select a date'
 * @vue-prop {Function} [funRenderYear=null] 輸入渲染年份之函數，傳入年數值回傳顯示字串，預設null，未給時回傳'{年}y'
 * @vue-prop {Function} [funRenderMonth=null] 輸入渲染月份之函數，傳入月數值回傳顯示字串，預設null，未給時回傳'{月}m'
 * @vue-prop {Function} [funRenderDayOfWeek=null] 輸入渲染星期幾之函數，傳入星期幾數值(0=日)回傳顯示字串，預設null，未給時回傳對應英文縮寫
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    components: {
        WPopup,
    },
    props: {
        value: {
            type: String,
            default: '',
        },
        textFontSize: {
            type: String,
            default: '0.85rem',
        },
        textColor: {
            type: String,
            default: 'black',
        },
        pickColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        hoverColor: {
            type: String,
            default: '#ddd',
        },
        placementDistX: {
            type: Number,
            default: 0,
        },
        placementDistY: {
            type: Number,
            default: 7,
        },
        textEmpty: {
            type: String,
            default: 'Select a date',
        },
        funRenderYear: {
            type: Function,
            default: null,
        },
        funRenderMonth: {
            type: Function,
            default: null,
        },
        funRenderDayOfWeek: {
            type: Function,
            default: null,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            showPanelTrans: false,
            emptyDay: false,
            valueDay: '',
            viewMode: 'day',
            displayYear: new Date().getFullYear(),
            displayMonth: new Date().getMonth() + 1,
        }
    },
    computed: {

        changeValueFromPopup: function () {
            //console.log('computed changeValueFromPopup')

            let vo = this

            //value for trigger
            let value = vo.value

            //check
            if (isday(value)) {
                vo.emptyDay = false
                vo.valueDay = value
            }
            else {
                vo.emptyDay = true
                vo.valueDay = strleft(now2str(), 10) //預設給今日
            }

            //sync display
            let parts = vo.valueDay.split('-')
            vo.displayYear = parseInt(parts[0])
            vo.displayMonth = parseInt(parts[1])

            return ''
        },


        usePickColor: function() {
            //console.log('computed usePickColor')

            let vo = this

            return convertColor(vo.pickColor)
        },

        useHoverColor: function() {
            //console.log('computed useHoverColor')

            let vo = this

            return convertColor(vo.hoverColor)
        },
        useTextFontSize: function() {
            let vo = this
            let s = vo.textFontSize
            s = replace(s, ';', '')
            return `font-size:${s};`
        },

        useTextColor: function() {
            //console.log('computed useTextColor')

            let vo = this

            return convertColor(vo.textColor)
        },

        calendarCells: function() {
            //console.log('computed calendarCells')

            let vo = this
            let year = vo.displayYear
            let month = vo.displayMonth

            //該月天數
            let daysInMonth = new Date(year, month, 0).getDate()

            //該月第一天星期幾(0=日)
            let firstDayWeekday = new Date(year, month - 1, 1).getDay()

            //parse valueDay
            let selY = 0
            let selM = 0
            let selD = 0
            if (vo.valueDay) {
                let ps = vo.valueDay.split('-')
                selY = parseInt(ps[0])
                selM = parseInt(ps[1])
                selD = parseInt(ps[2])
            }

            let cells = []

            //前方空格
            for (let i = 0; i < firstDayWeekday; i++) {
                cells.push({ day: null, selected: false })
            }

            //日期
            for (let d = 1; d <= daysInMonth; d++) {
                let selected = (selY === year && selM === month && selD === d)
                cells.push({ day: d, selected })
            }

            return cells
        },

        yearList: function() {
            //console.log('computed yearList')

            let years = []
            for (let y = 2100; y >= 1900; y--) {
                years.push(y)
            }
            return years
        },

        weekdayLabels: function() {
            let vo = this
            let defLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
            let labels = []
            for (let i = 0; i < 7; i++) {
                labels.push(vo.funRenderDayOfWeek ? vo.funRenderDayOfWeek(i) : defLabels[i])
            }
            return labels
        },

        selectedYear: function() {
            let vo = this
            if (!vo.valueDay) return null
            return parseInt(vo.valueDay.split('-')[0])
        },

        selectedMonth: function() {
            let vo = this
            if (!vo.valueDay) return null
            return parseInt(vo.valueDay.split('-')[1])
        },

    },
    methods: {

        renderYear: function(y) {
            let vo = this
            return vo.funRenderYear ? vo.funRenderYear(y) : (y + 'y')
        },

        renderMonth: function(m) {
            let vo = this
            return vo.funRenderMonth ? vo.funRenderMonth(m) : (m + 'm')
        },

        updateShowPanel: function(showPanel, from) {
            //console.log('methods updateShowPanel', showPanel, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //save
            vo.showPanelTrans = showPanel

            //開啟時重置
            if (showPanel) {
                vo.viewMode = 'day'
                let parts = vo.valueDay.split('-')
                vo.displayYear = parseInt(parts[0])
                vo.displayMonth = parseInt(parts[1])
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', showPanel)

            })

        },

        prevMonth: function() {
            let vo = this
            if (vo.displayMonth <= 1) {
                vo.displayMonth = 12
                vo.displayYear--
            }
            else {
                vo.displayMonth--
            }
        },

        nextMonth: function() {
            let vo = this
            if (vo.displayMonth >= 12) {
                vo.displayMonth = 1
                vo.displayYear++
            }
            else {
                vo.displayMonth++
            }
        },

        clickDay: function(day) {
            //console.log('methods clickDay', day)

            let vo = this

            //format
            let m = String(vo.displayMonth).padStart(2, '0')
            let d = String(day).padStart(2, '0')
            let value = `${vo.displayYear}-${m}-${d}`

            //hide
            vo.showPanelTrans = false

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('update:focused', false)

                //emit
                vo.$emit('input', value)

            })

        },

        clickMonth: function(m) {
            //console.log('methods clickMonth', m)

            let vo = this
            vo.displayMonth = m
            vo.viewMode = 'day'
        },

        clickYear: function(y) {
            //console.log('methods clickYear', y)

            let vo = this
            vo.displayYear = y
            vo.viewMode = 'month'
        },

        showYearView: function() {
            let vo = this
            vo.viewMode = 'year'
            vo.$nextTick(() => {
                vo.scrollYearIntoView()
            })
        },

        scrollYearIntoView: function() {
            let vo = this
            let ref = vo.$refs['year_' + vo.displayYear]
            let el = Array.isArray(ref) ? ref[0] : ref
            if (el) {
                let container = vo.$refs.yearScroll
                let elTop = el.offsetTop
                let elH = el.offsetHeight
                let cH = container.clientHeight
                container.scrollTop = elTop - (cH / 2) + (elH / 2)
            }
        },

        getDayStyle: function(selected) {
            let vo = this
            let base = 'display:inline-flex; align-items:center; justify-content:center; width:32px; height:32px; border-radius:50%; cursor:pointer; font-size:0.85rem; transition:background-color 0.3s;'
            if (selected) {
                return base + ` background-color:${vo.usePickColor}; color:white;`
            }
            return base
        },

        getMonthStyle: function(m) {
            let vo = this
            let selected = (vo.selectedYear === vo.displayYear && vo.selectedMonth === m)
            let base = 'display:inline-flex; align-items:center; justify-content:center; width:100%; padding:10px 0; border-radius:20px; cursor:pointer; font-size:0.85rem; transition:background-color 0.3s;'
            if (selected) {
                return base + ` background-color:${vo.usePickColor}; color:white;`
            }
            return base
        },

        getYearStyle: function(y) {
            let vo = this
            let selected = (vo.selectedYear === y)
            let base = 'cursor:pointer; padding:4px 0; transition:background-color 0.3s;'
            if (selected) {
                return base + ` font-size:1.3rem; font-weight:500; color:${vo.usePickColor};`
            }
            return base + ' font-size:0.95rem; color:#333;'
        },

    },
}
</script>

<style scoped>
</style>
