<template>
    <div :style="`display:inline-block; width:${iconSize}px; height:${iconSize}px; overflow:hidden;`">
        <div :style="`transform:scale(${useScale}); transform-origin:0% 0%;`">

            <div
                :style="`position:relative; display:inline-block; width:${defIconSize}px; height:${defIconSize}px; user-select:none; ${editable?'cursor:pointer;':''} outline:none;`"
                tabindex="0"
                @keyup.enter="emitClick"
                @click="emitClick"
            >

                <!-- 三角形按鈕 -->
                <div
                    class="cc"
                    style="height:100%;"
                >
                    <div
                        :style="`transition:all 0.1s; transform:rotate(${useRotate}deg); transform-origin:50% 50%;`"
                    >

                        <!-- hover底色由hoverTrans計算, 不直接改元素樣式, 否則點擊切換朝向致重繪時會被:style寫回 -->
                        <div
                            class="cc circle"
                            :style="`background:${useCircleBackgroundColor};`"
                            @mouseenter="mouseenter"
                            @mouseleave="mouseleave"
                        >
                            <div
                                class="caretRight"
                            >
                                <span style="display:flex;">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useIconColor" width="11px" height="11px" x="0px" y="0px" viewBox="-70 0 475.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <!-- 禁用符號, 容器蓋滿按鈕故不接收指標事件, 否則圓鈕收不到mouseenter而hover底色失效 -->
                <template>

                    <div
                        style="position:absolute; z-index:1; left:0px; top:0px; bottom:0; right:0; margin:auto; opacity:0.75; pointer-events:none;"
                    >
                        <div :style="`height:${defIconSize}px; transform:rotate(45deg) translateY(-5px);`" v-if="!editable">
                            <div :style="`display:inline-block; width:24px; height:1px; border-top:2px solid #fff;`"></div>
                        </div>
                    </div>

                    <div style="position:absolute; z-index:1; left:0px; top:0px; bottom:0; right:0; margin:auto; opacity:0.75; pointer-events:none;">
                        <div :style="`height:${defIconSize}px; transform:rotate(45deg) translateY(-3px);`" v-if="!editable">
                            <div :style="`display:inline-block; width:24px; height:1px; border-top:2px solid ${useIconColor};`"></div>
                        </div>
                    </div>

                </template>

            </div>

        </div>
    </div>
</template>

<script>
import get from 'lodash-es/get.js'
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {String} [dir='right'] 輸入圖標朝向字串，可選'right'、'bottom'、'left'、'top'，預設'right'
 * @vue-prop {Number} [iconSize=24] 輸入顯隱icon按鈕高度數字，預設24
 * @vue-prop {String} [iconColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [iconDisabledColor='grey lighten-1'] 輸入顯隱icon按鈕禁用時顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [iconBackgroundColor='transparent'] 輸入顯隱icon按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [iconBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱icon按鈕背景顏色字串，預設'rgba(128,128,128,0.15)'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式布林值，預設true
 */
export default {
    components: {
    },
    props: {
        dir: {
            type: String,
            default: 'right',
        },
        iconSize: {
            type: Number,
            default: 24,
        },
        iconColor: {
            type: String,
            default: 'grey',
        },
        iconDisabledColor: {
            type: String,
            default: 'grey lighten-1',
        },
        iconBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        iconBackgroundColorHover: {
            type: String,
            default: 'rgba(128,128,128,0.15)',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            defIconSize: 24,
            hoverTrans: false,
        }
    },
    computed: {

        useRotate: function() {
            //console.log('computed useRotate')

            let vo = this

            let kp = {
                left: 180,
                right: 0,
                top: 270,
                bottom: 90,
            }
            return get(kp, vo.dir, 0)
        },

        useScale: function() {
            return this.iconSize / this.defIconSize
        },

        useIconColor: function() {
            //console.log('computed useIconColor')

            let vo = this

            if (vo.editable) {
                return convertColor(vo.iconColor)
            }
            return convertColor(vo.iconDisabledColor)
        },

        useIconBackgroundColor: function() {
            //console.log('computed useIconBackgroundColor')

            let vo = this

            return convertColor(vo.iconBackgroundColor)
        },

        useIconBackgroundColorHover: function() {
            //console.log('computed useIconBackgroundColorHover')

            let vo = this

            return convertColor(vo.iconBackgroundColorHover)
        },

        useCircleBackgroundColor: function() {
            //console.log('computed useCircleBackgroundColor')

            let vo = this

            //非編輯模式不顯示hover底色
            if (vo.editable && vo.hoverTrans) {
                return vo.useIconBackgroundColorHover
            }
            return vo.useIconBackgroundColor
        },

    },
    methods: {

        mouseenter: function() {
            //console.log('mouseenter')

            let vo = this

            vo.hoverTrans = true

        },

        mouseleave: function() {
            //console.log('mouseleave')

            let vo = this

            vo.hoverTrans = false

        },

        emitClick: function(v) {
            //非編輯模式不觸發click, 同WTreeIconCheckbox
            if (!this.editable) {
                return
            }
            this.$emit('click', v)
        },

    },
}
</script>

<style scoped>
/* 游標樣式繼承按鈕層(僅編輯模式為pointer), 此處不另給, 否則非編輯模式時移入三角形仍顯示pointer */
.caretRight {
    user-select: none;
    display: inline-block;
}
.cc {
    display: flex;
    align-items: center;
    justify-content: center;
}
.circle {
    width: 22px;
    height: 22px;
    min-width: 22px;
    min-height: 22px;
    max-width: 22px;
    max-height: 22px;
    border-radius: 50%;
}
</style>

