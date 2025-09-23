<template>
    <div
        :style="`display:inline-block; vertical-align:middle; outline:none; user-select:none; height:${size}px; width:${size}px;`"
        :cmp="'loading'"
        :loadtype="name"
    >

        <template v-if="name==='cir-wave'">

        <svg
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
            :width="size"
            :height="size"
        >
            <circle cx="50" cy="50" r="14.6699" fill="none" stroke="#420457" stroke-width="10">
                <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
                <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
            </circle>
            <circle cx="50" cy="50" r="33.9915" fill="none" stroke="#5a3faa" stroke-width="10">
                <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
                <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
            </circle>
        </svg>

        </template>

        <template v-else-if="name==='cir-rotate'">

            <div :style="`position:relative; display:inline-flex; align-items:center; justify-content:center; height:${size}px; width:${size}px;`">
                <svg
                    class="pgc-rotate"
                    style="transform: rotate(0deg);"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
                >
                    <circle
                        class="pgc-dash"
                        fill="transparent"
                        cx="43.80952380952381"
                        cy="43.80952380952381"
                        r="20"
                        stroke-width="4"
                        stroke-dasharray="100"
                        stroke-dashoffset="50px"
                        :stroke="effColor"
                    ></circle>
                </svg>
            </div>

        </template>

    </div>
</template>

<script>
import convertColor from '../js/convertColor.mjs'


/**
 * @vue-prop {String} [name='cir-wave'] 輸入動畫名稱字串，預設'cir-wave'
 * @vue-prop {Number} [size=48] 輸入圖標欲顯示的尺寸浮點數，預設48
 * @vue-prop {String} [color='#666'] 輸入圖標顏色字串，預設'#666'
 */
export default {
    components: {
    },
    props: {
        name: {
            type: String,
            default: 'cir-wave',
        },
        size: {
            type: Number,
            default: 48,
        },
        color: {
            type: String,
            default: '#666',
        },
    },
    data: function() {
        return {
        }
    },
    computed: {

        effColor: function() {
            let vo = this
            return convertColor(vo.color)
        },

    },
    methods: {
    },
}
</script>

<style scoped>

.pgc-rotate {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transition: all .6s ease-in-out;
    animation: progress-circular-rotate 1.4s linear infinite;
    transform-origin: center center;
}

.pgc-dash {
    animation: progress-circular-dash 1.4s ease-in-out infinite;
    stroke-linecap: round;
    stroke-dasharray: 80,200;
    stroke-dashoffset: 0px;
}

@-webkit-keyframes progress-circular-dash {
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0px
    }

    50% {
        stroke-dasharray: 100,200;
        stroke-dashoffset: -15px
    }

    to {
        stroke-dasharray: 100,200;
        stroke-dashoffset: -124px
    }
}

@keyframes progress-circular-dash {
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0px
    }

    50% {
        stroke-dasharray: 100,200;
        stroke-dashoffset: -15px
    }

    to {
        stroke-dasharray: 100,200;
        stroke-dashoffset: -124px
    }
}

@-webkit-keyframes progress-circular-rotate {
    to {
        transform: rotate(1turn)
    }
}

@keyframes progress-circular-rotate {
    to {
        transform: rotate(1turn)
    }
}

</style>
