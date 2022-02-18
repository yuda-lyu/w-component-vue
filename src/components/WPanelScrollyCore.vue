<template>
    <div
        :style="`box-sizing:content-box;`"
        v-domresize
        @domresize="resizePanel"
        @mouseenter="mouseEntering=true"
        @mouseleave="mouseEntering=false"
        :changeScrollTop="changeScrollTop"
    >

        <!-- 計算nativeBarWidth -->
        <div style="position:relative; width:0px; height:0px; opacity:0;">
            <div style="position:absolute; left:0; top:0;">
                <div ref="divDetect" style="width:50px; height:50px; overflow:auto;">
                    <div style="width:100px; height:100px;"></div>
                </div>
            </div>
        </div>

        <div
            :style="`position:relative; width:100%; overflow-x:hidden;`"
        >

            <div
                ref="divShell"
                _class="sb"
                :style="`position:relative; width:calc( 100% + ${nativeBarWidth}px ); height:${panelHeight}px; box-sizing:content-box; overflow-x:hidden; overflow-y:scroll;`"
                v-domresize
                @domresize="resizeShell"
                @scroll="scrollShell"
            >

                <div
                    ref="divContent"
                    :style="``"
                    v-dommutation
                    @dommutation="mutation"
                >
                    <slot></slot>
                </div>

            </div>

            <!-- isMobile時divBar仍要存在, 因通用檢測時才會有效, 故isMobile時需於移至右側之外 -->
            <div :style="`position:absolute; top:0px; right:${isMobile?-8:0}px; width:8px;`">

                <div
                    ref="divBar"
                    class="sb"
                    :style="`width:8px; height:${panelHeight}px; box-sizing:content-box; overflow-x:hidden; overflow-y:auto; opacity:${mouseEntering?barOpacityHover:barOpacity};`"
                    @scroll="scrollBar"
                >

                    <div :style="`width:1px; height:${contentHeight}px;`"></div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
// import cloneDeep from 'lodash/cloneDeep'
import waitFun from 'wsemi/src/waitFun.mjs'
import debounce from 'wsemi/src/debounce.mjs'
import domResize from '../js/domResize.mjs'
import domMutation from '../js/domMutation.mjs'


/**
 * @vue-prop {Number} [viewHeightMax=400] 輸入顯示區最大高度，單位為px，預設400
 * @vue-prop {Number} [scrollTop=0] 輸入目前捲動值數字，預設0
 * @vue-prop {Number} [barOpacity=0.6] 輸入捲軸透明度數字，預設0.6
 * @vue-prop {Number} [barOpacityHover=1] 輸入滑鼠移入時捲軸透明度數字，預設1
 */
export default {
    directives: {
        domresize: domResize(),
        dommutation: domMutation(),
    },
    components: {
    },
    props: {
        viewHeightMax: {
            type: Number,
            default: 400,
        },
        scrollTop: {
            type: Number,
            default: 0,
        },
        barOpacity: {
            type: Number,
            default: 0.6,
        },
        barOpacityHover: {
            type: Number,
            default: 1,
        },
    },
    data: function() {
        return {
            dbc: debounce(),

            nativeBarWidth: 16, //預設bar寬度, 先給大值避免初始化時會顯示原本bar條

            useEmitEvent: true, //是否可觸發事件
            mouseEntering: false,
            mouseLoc: '',

            viewHeight: 0, //外框區高度px
            contentHeight: 2, //內容區高度px, 一定要給>=2值(至少可能渲染2border)才能避免初始化無高度導致無法觸發後續事件

            ratio: 0,
            scrollInfor: null,

        }
    },
    computed: {

        changeScrollTop: function () {
            //console.log('computed changeScrollTop')

            let vo = this

            //updateScrollTop
            vo.updateScrollTop(vo.scrollTop)

            return ''
        },

        panelHeight: function () {
            //console.log('computed panelHeight')

            let vo = this

            return Math.min(vo.contentHeight, vo.viewHeightMax)
        },

        isMobile: function() {
            //console.log('computed isMobile')

            let vo = this

            return vo.nativeBarWidth <= 0
        },

        contentHeightEff: function() {
            let vo = this
            return Math.max(vo.contentHeight - vo.panelHeight, 0)
        },

        viewTop: function() {
            let vo = this
            return vo.ratio * vo.contentHeightEff
        },

        viewBottom: function() {
            let vo = this
            return vo.viewTop + vo.viewHeightMax
        },

    },
    methods: {

        resizePanel: function(msg) {
            // console.log('methods resizePanel', msg)

            let vo = this

            //nativeBarWidth
            let divDetect = get(vo, '$refs.divDetect')
            if (divDetect) {

                //save nativeBarWidth
                if (vo.nativeBarWidth !== divDetect.offsetWidth - divDetect.clientWidth) {
                    // console.log('resizePanel 需更新nativeBarWidth', divDetect.offsetWidth - divDetect.clientWidth, '<-', vo.nativeBarWidth)
                    vo.nativeBarWidth = divDetect.offsetWidth - divDetect.clientWidth
                }

            }

            //save
            if (vo.viewHeight !== msg.snew.offsetHeight) {
                // console.log('resizePanel 需更新viewHeight', msg.snew.offsetHeight, '<-', vo.viewHeight)
                vo.viewHeight = msg.snew.offsetHeight
            }

            //divShell
            let divShell = get(vo, '$refs.divShell')
            if (divShell) {

                //emit scrollTop
                vo.$emit('update:scrollTop', divShell.scrollTop)

            }

            //emit
            vo.triggerEvent('resize', { ...msg, from: 'panel' })

        },

        resizeShell: function(msg) {
            // console.log('methods resizeShell', msg)

            let vo = this

            //divContent
            let divContent = get(vo, '$refs.divContent')
            if (divContent) {
                // console.log('resizeShell divContent.offsetHeight', divContent.offsetHeight)

                //save
                if (vo.contentHeight !== divContent.offsetHeight) {
                    // console.log('resizeShell 需更新contentHeight', divContent.offsetHeight, '<-', vo.contentHeight)
                    vo.contentHeight = divContent.offsetHeight
                }

            }

            //divShell
            let divShell = get(vo, '$refs.divShell')
            if (divShell) {

                //emit scrollTop
                vo.$emit('update:scrollTop', divShell.scrollTop)

            }

            //emit
            vo.triggerEvent('resize', { ...msg, from: 'shell' })

        },

        mutation: function(msg) {
            // console.log('methods mutation', msg)

            let vo = this

            //divContent
            let divContent = get(vo, '$refs.divContent')

            //check
            if (divContent) {
                // console.log('mutation divContent.offsetHeight', divContent.offsetHeight)

                //save
                if (vo.contentHeight !== divContent.offsetHeight) {
                    // console.log('mutation 需更新contentHeight', divContent.offsetHeight, '<-', vo.contentHeight)
                    vo.contentHeight = divContent.offsetHeight
                }

            }

            //updateRatio
            vo.updateRatio()

            //emit
            vo.triggerEvent('mutation', { ...msg, from: 'content' })

        },

        updateRatio: function() {
            // console.log('methods updateRatio')

            let vo = this

            //check
            if (!vo.$refs.divShell) { //於async中組件切換時還是有可能消失
                return
            }

            //ratio
            let ratio = 0
            if (vo.contentHeightEff > 0) {
                ratio = vo.$refs.divShell.scrollTop / vo.contentHeightEff
            }

            //save
            vo.ratio = ratio

        },

        // updateScrollTopByRatio: function(r) {
        //     // console.log('methods updateScrollTopByRatio', r)

        //     let vo = this

        //     //divShell
        //     let divShell = get(vo, '$refs.divShell')

        //     //check
        //     if (!divShell) {
        //         return
        //     }

        //     //divBar
        //     let divBar = get(vo, '$refs.divBar')

        //     //check
        //     if (!divBar) {
        //         return
        //     }

        //     //scrollTop
        //     let h = vo.contentHeight - vo.panelHeight
        //     let scrollTop = 0
        //     if (h > 0) {
        //         scrollTop = r * h
        //     }

        //     //update scrollTop
        //     vo.$refs.divShell.scrollTop = scrollTop
        //     vo.$refs.divBar.scrollTop = scrollTop

        // },

        updateScrollTop: function(scrollTop) {
            // console.log('methods updateScrollTop', scrollTop)

            let vo = this

            async function core() {

                //wait divShell與divBar, 組件初始化時會先觸發computed才會有實體元素出現, 故得用waitFun等待
                await waitFun(() => {
                    return vo.$refs.divShell !== undefined && vo.$refs.divBar !== undefined
                }, { timeInterval: 20 })

                //update scrollTop
                if (vo.$refs.divShell) { //於async中組件切換時還是有可能消失
                    vo.$refs.divShell.scrollTop = scrollTop
                }
                if (vo.$refs.divBar) { //於async中組件切換時還是有可能消失
                    vo.$refs.divBar.scrollTop = scrollTop
                }

            }

            //core
            core()
                .catch((err) => {
                    console.log(err)
                })

        },

        updateScrollInfor: function() {
            //console.log('methods updateScrollInfor')

            let vo = this

            //check
            if (!vo.$refs.divShell) { //於async中組件切換時還是有可能消失
                return
            }

            //scrollInfor
            let scrollInfor = {
                r: vo.ratio,
                sti: vo.scrollTop, //輸入給予scrollTop
                stn: vo.$refs.divShell.scrollTop, //目前scrollTop, 要等emit scrollTop出去後才會與sti同值
                dir: vo.scrollTop > vo.$refs.divShell.scrollTop ? 'up' : 'down', //判斷是往上還往下捲
                t: vo.viewTop,
                b: vo.viewBottom,
                ch: vo.contentHeight,
                che: vo.contentHeightEff,
                // ph: vo.panelHeight,
            }

            //save
            if (!isEqual(vo.scrollInfor, scrollInfor)) {
                vo.scrollInfor = scrollInfor
            }

        },

        scrollShell: function(ev) {
            // console.log('methods scrollShell', ev)

            let vo = this

            //check
            if (vo.mouseLoc === '') {
                vo.mouseLoc = 'enter shell'
            }
            if (vo.mouseLoc !== 'enter shell') {
                return
            }
            // console.log('scrollShell')

            //divShell
            let divShell = get(vo, '$refs.divShell')

            //check
            if (!divShell) {
                return
            }

            //divBar
            let divBar = get(vo, '$refs.divBar')

            //check
            if (!divBar) {
                return
            }

            //sync divBar
            vo.$refs.divBar.scrollTop = vo.$refs.divShell.scrollTop

            //emit scrollTop
            vo.$emit('update:scrollTop', vo.$refs.divShell.scrollTop)

            //updateRatio
            vo.updateRatio()

            //emit
            vo.triggerEvent('scroll', { ev, from: 'shell' })

            // //updateScrollInfor
            // vo.updateScrollInfor()

            // //emit
            // vo.triggerEvent('scroll-infor', { ...vo.scrollInfor, from: 'shell' })

            //clear mouseLoc
            vo.dbc(() => {
                // console.log('scrollShell clear mouseLoc')
                vo.mouseLoc = ''
            })

        },

        scrollBar: function(ev) {
            // console.log('methods scrollBar', ev)

            let vo = this

            //check
            if (vo.mouseLoc === '') {
                vo.mouseLoc = 'enter bar'
            }
            if (vo.mouseLoc !== 'enter bar') {
                return
            }
            // console.log('scrollBar')

            //divShell
            let divShell = get(vo, '$refs.divShell')

            //check
            if (!divShell) {
                return
            }

            //divBar
            let divBar = get(vo, '$refs.divBar')

            //check
            if (!divBar) {
                return
            }

            //sync divShell
            vo.$refs.divShell.scrollTop = vo.$refs.divBar.scrollTop

            //emit scrollTop
            vo.$emit('update:scrollTop', vo.$refs.divShell.scrollTop)

            //updateRatio
            vo.updateRatio()

            //emit
            vo.triggerEvent('scroll', { ev, from: 'bar' })

            // //updateScrollInfor
            // vo.updateScrollInfor()

            // //emit
            // vo.triggerEvent('scroll-infor', { ...vo.scrollInfor, from: 'bar' })

            //clear mouseLoc
            vo.dbc(() => {
                // console.log('scrollBar clear mouseLoc')
                vo.mouseLoc = ''
            })

        },

        triggerEvent: function(name, msg) {
            // console.log('methods triggerEvent', name, msg)

            let vo = this

            //check
            if (!vo.useEmitEvent) {
                return
            }

            //emit
            vo.$emit(name, msg)

            //updateScrollInfor
            vo.updateScrollInfor()

            //emit
            vo.$emit('change-infor', {
                evName: name,
                evMsg: msg,
                ...vo.scrollInfor,
            })

        },

    },
}
</script>

<style scoped>
.sb {
    transition: opacity 0.3s;
    /* Works on Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,0.3) transparent;
}
/* Works on Chrome, Edge, and Safari */
.sb::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
.sb::-webkit-scrollbar-track {
    background: transparent;
}
.sb::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3);
    border-radius: 20px;
    border: 3px solid transparent;
}
</style>

