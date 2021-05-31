<template>
    <div style="display:inline-block;">
        <template v-if="name==='cir1'">
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
    </div>
</template>

<script>


/**
 * @vue-prop {String} [name='cir1'] 輸入動畫名稱字串，預設'cir1'
 * @vue-prop {Number} [size=24] 輸入圖標欲顯示的尺寸浮點數，預設24
 */
export default {
    components: {
    },
    props: {
        name: {
            type: String,
            default: 'cir1',
        },
        size: {
            type: Number,
            default: 48,
        },
    },
    data: function() {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
}
</script>

<style scoped>
</style>
