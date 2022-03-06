<template>
    <div
        style=""
        :changeValue="changeValue"
    >

        <div style="position:relative; height:100%;">

            <div style="width:100%; height:100%; display:flex;">

                <!-- 撐開區, 需使用min-width避免被壓縮 -->
                <div
                    class="ts"
                    :style="`width:${virtualZoneWidth}px; min-width:${virtualZoneWidth}px;`"
                    v-if="isAtLeft"
                ></div>

                <div style="width:100%; height:100%;">

                    <slot name="content"></slot>

                </div>

                <!-- 撐開區, 需使用min-width避免被壓縮 -->
                <div
                    class="ts"
                    :style="`width:${virtualZoneWidth}px; min-width:${virtualZoneWidth}px;`"
                    v-if="!isAtLeft"
                ></div>

            </div>

            <!-- overlay半透明灰色層 -->
            <div
                class="ts"
                :style="`position:${effOverlayPosition}; ${effDrawerDetectLoction} top:0px; right:0px; bottom:0px; z-index:${effDrawerZIndex}; width:${effDrawerDetectWidth}; height:100%; opacity:${effOverlayOpacity}; background:${effOverlayColor};`"
                v-if="showOverlay1Basic"
            >
            </div>

            <!-- overlay關閉事件監聽層, 與隱藏內層之向外陰影 -->
            <div
                :style="`position:${effOverlayPosition}; ${effDrawerDetectLoction} top:0px; right:0px; bottom:0px; z-index:${effDrawerZIndex+1}; width:${effDrawerDetectWidth}; height:100%; overflow:hidden;`"
                @click="(ev)=>{ckToggle(ev,false)}"
                v-show="showOverlay2Detect"
            >

                <!-- drawer平移層 -->
                <div
                    _class="ts"
                    :style="`height:100%; display:flex; justify-content:${ isAtLeft ? 'start' : 'end' };`"
                    _v-show="showOverlay4Translate"
                >

                    <div
                        ref="divDrawer"
                        :class="`ts ${effDrawerClassShadow}`"
                        :style="`width:${drawerWidth}px; height:100%; background:#fff; transform:translateX(${effDrawerTranslateX}%);`"
                    >

                        <slot name="drawer"></slot>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Boolean} [value=false] 輸入是否顯示布林值，預設false
 * @vue-prop {String} [mode='from-left'] 輸入抽屜顯示位置字串，可使用'from-left'與'from-right'，預設'from-left'
 * @vue-prop {Number} [drawerWidth=200] 輸入抽屜寬度數字，單位為px，預設200
 * @vue-prop {Boolean} [afloat=false] 輸入是否為浮動顯示布林值，設為true時浮在內容區上故不壓縮內容區寬度，預設false
 * @vue-prop {Boolean} [afloatByFix=false] 輸入浮動顯示時是否使用fixed使能具有滿版配置布林值，預設false
 * @vue-prop {Number} [overlayOpacity=0.45] 輸入浮動顯示時抽屜外側陰影層之透明度數字，預設0.45
 * @vue-prop {String} [overlayColor='grey darken-2'] 輸入浮動顯示時抽屜外側陰影層背景顏色字串，預設'grey darken-2'
 * @vue-prop {Number} [drawerZIndex=1] 輸入浮動顯示時抽屜使用z-index數字，預設1
 */
export default {
    directives: {
    },
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        mode: {
            type: String,
            default: 'from-left', //from-left, from-right
        },
        drawerWidth: {
            type: Number,
            default: 200,
        },
        afloat: {
            type: Boolean,
            default: false,
        },
        afloatByFix: {
            type: Boolean,
            default: false,
        },
        overlayOpacity: {
            type: Number,
            default: 0.45,
        },
        overlayColor: {
            type: String,
            default: 'grey darken-2',
        },
        drawerZIndex: {
            type: Number,
            default: 1,
        },
    },
    data: function() {
        return {

            timerOverlay1Basic: null,
            showOverlay1Basic: false,
            effOverlay1Basic: false,

            timerOverlay2Detect: null,
            showOverlay2Detect: false,
            // effOverlay2Detect: false,

            timerOverlay3Shadow: null,
            showOverlay3Shadow: false,
            // effOverlay3Shadow: false,

            timerOverlay4Translate: null,
            // showOverlay4Translate: false,
            effOverlay4Translate: false,

        }
    },
    computed: {

        changeValue: function () {
            // console.log('computed changeValue')

            let vo = this

            //trigger
            let value = vo.value

            //toggleValue
            vo.toggleValue(value)

            return ''
        },

        virtualZoneWidth: function() {
            if (!this.value) {
                return 0
            }
            if (this.afloat) {
                return 0
            }
            return this.drawerWidth
        },

        isAtLeft: function() {
            return this.mode !== 'from-right'
        },

        effDrawerZIndex: function() {
            let i = this.drawerZIndex
            if (this.afloat) {
                i += 1000
            }
            if (this.afloatByFix) {
                i += 10000
            }
            return i
        },

        effOverlayColor: function() {
            if (!this.afloat) {
                return 'transparent'
            }
            return color2hex(this.overlayColor)
        },

        effOverlayPosition: function() {
            return this.afloatByFix ? 'fixed' : 'absolute'
        },

        effOverlayOpacity: function() {
            if (!this.afloat) {
                return 0
            }
            return this.effOverlay1Basic ? this.overlayOpacity : 0
        },

        effDrawerTranslateX: function() {
            if (this.effOverlay4Translate) {
                return 0
            }
            let s0 = this.isAtLeft ? -100 : 100
            return s0
        },

        effDrawerDetectLoction: function() {
            if (this.isAtLeft) {
                return 'left:0px;'
            }
            return 'right:0px;'
        },

        effDrawerDetectWidth: function() {
            if (this.afloat) {
                return '100%'
            }
            return `${this.drawerWidth}px`
        },

        effDrawerClassShadow: function() {
            return this.afloat && this.showOverlay3Shadow ? 'bs' : ''
        },

    },
    methods: {

        ckToggle: function(ev, value) {
            // console.log('methods ckToggle', ev, value)

            let vo = this

            //check, 固定時(非浮動)禁止關閉
            if (!vo.afloat) {
                return
            }

            //偵測點擊為抽屜slot區之外
            let b = false
            try {
                b = !vo.$refs.divDrawer.contains(ev.target)
            }
            catch (err) {}
            // console.log('vo.$refs.divDrawer', vo.$refs.divDrawer)
            // console.log('ev.target', ev.target)
            // console.log(vo.$refs.divDrawer.contains(ev.target))

            //check
            if (b) {

                //toggleValue
                vo.toggleValue(value)

            }

        },

        toggleValue: function (value) {
            // console.log('methods toggleValue', value)

            let vo = this

            // //check, 不可編輯時跳出
            // if (!vo.editable) {
            //     return
            // }

            //clearTimeout
            clearTimeout(vo.timerOverlay1Basic)
            clearTimeout(vo.timerOverlay2Detect)
            clearTimeout(vo.timerOverlay3Shadow)
            clearTimeout(vo.timerOverlay4Translate)

            let sec

            //check
            if (value) {
                // vo.fsmShowOverlay.showOverlay()
                // vo.fsmShowStateOverlay.showOverlay()
                sec = 20

                // showOverlay1Basic: false,
                // effOverlay1Basic: false,
                vo.showOverlay1Basic = true
                vo.timerOverlay1Basic = setTimeout(() => {
                    vo.effOverlay1Basic = true
                }, sec)

                // showOverlay2Detect: false,
                // effOverlay2Detect: false,
                vo.showOverlay2Detect = true

                // showOverlay3Shadow: false,
                // effOverlay3Shadow: false,
                vo.showOverlay3Shadow = true

                // showOverlay4Translate: false,
                // effOverlay4Translate: false,
                // vo.showOverlay4Translate = true
                vo.timerOverlay4Translate = setTimeout(() => {
                    vo.effOverlay4Translate = true
                }, sec)

            }
            else {
                // vo.fsmShowOverlay.hideOverlay()
                // vo.fsmShowStateOverlay.hideOverlay()
                sec = 300

                // showOverlay1Basic: false,
                // effOverlay1Basic: false,
                vo.effOverlay1Basic = false
                vo.timerOverlay1Basic = setTimeout(() => {
                    vo.showOverlay1Basic = false
                }, sec)

                // showOverlay2Detect: false,
                // effOverlay2Detect: false,
                vo.timerOverlay2Detect = setTimeout(() => {
                    vo.showOverlay2Detect = false
                }, sec)

                // showOverlay3Shadow: false,
                // effOverlay3Shadow: false,
                vo.timerOverlay3Shadow = setTimeout(() => {
                    vo.showOverlay3Shadow = false
                }, sec / 2) //提前隱藏陰影

                // showOverlay4Translate: false,
                // effOverlay4Translate: false,
                vo.effOverlay4Translate = false
                // vo.timerOverlay4Translate = setTimeout(() => {
                //     vo.showOverlay4Translate = false
                // }, sec)

            }

            //emit
            vo.$emit('input', value)

        },

    },
}
</script>

<style scoped>
.ts {
    transition:all 0.3s cubic-bezier(.25,.8,.5,1);
}
.bs {
    box-shadow:rgba(0, 0, 0, 0.3) 0px 8px 2px -8px, rgba(0, 0, 0, 0.3) 0px 16px 24px 2px, rgba(0, 0, 0, 0.3) 0px 6px 30px 5px;
}
</style>

