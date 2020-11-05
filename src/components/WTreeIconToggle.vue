<template>
    <div
        style="display:inline-block; user-select:none; cursor:pointer; outline:none;"
        tabindex="0"
        @keyup.enter="(v)=>{$emit('click',v)}"
        @click="(v)=>{$emit('click',v)}"
    >
        <div
            class="cc"
            style="height:100%;"
        >
            <div
                :style="`transition:all 0.1s; transform:rotate(${useRotate}deg)`"
            >

                <div
                    class="cc circle"
                    :style="`transition: all 0.5s; background:${useIconBackgroundColor};`"
                    @mouseenter="mouseenter"
                    @mouseleave="mouseleave"
                >
                    <!-- 圖標稍微偏左1px得強制移動 -->
                    <div
                        class="caretRight"
                        style="transform:translateX(1px);"
                    >
                        <span style="display:flex;">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useIconColor" width="11px" height="11px" x="0px" y="0px" viewBox="0 0 415.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import get from 'lodash/get'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {String} [mode='right'] 輸入圖標朝向字串，可選'right'、'bottom'、'left'、'top'，預設'right'
 * @vue-prop {String} [iconColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [iconBackgroundColor='transparent'] 輸入顯隱icon按鈕背景顏色字串，預設'transparent'
 * @vue-prop {String} [iconBackgroundColorHover='rgba(128,128,128,0.15)'] 輸入滑鼠移入時顯隱icon按鈕背景顏色字串，預設'rgba(128,128,128,0.15)'
 */
export default {
    components: {
    },
    props: {
        dir: {
            type: String,
            default: 'right',
        },
        iconColor: {
            type: String,
            default: 'grey',
        },
        iconBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        iconBackgroundColorHover: {
            type: String,
            default: 'rgba(128,128,128,0.15)',
        },
    },
    data: function() {
        return {
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

        useIconColor: function() {
            //console.log('computed useIconColor')

            let vo = this

            return color2hex(vo.iconColor)
        },

        useIconBackgroundColor: function() {
            //console.log('computed useIconBackgroundColor')

            let vo = this

            return color2hex(vo.iconBackgroundColor)
        },

        useIconBackgroundColorHover: function() {
            //console.log('computed useIconBackgroundColorHover')

            let vo = this

            return color2hex(vo.iconBackgroundColorHover)
        },

    },
    methods: {

        mouseenter: function(e) {
            //console.log('mouseenter', e)

            let vo = this

            e.target.style.background = vo.useIconBackgroundColorHover

        },

        mouseleave: function(e) {
            //console.log('mouseleave', e)

            let vo = this

            e.target.style.background = vo.useIconBackgroundColor

        },

    },
}
</script>

<style scoped>
.caretRight {
    cursor: pointer;
    user-select: none;
    display: inline-block;
}
.cc {
    display: flex;
    align-items: center;
    justify-content: center;
}
.circle {
    width: 24px;
    height: 24px;
    border-radius: 24px;
}
</style>

