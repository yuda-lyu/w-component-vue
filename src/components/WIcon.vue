<template>
    <div 
        style="display:flex; align-items:center; user-select:none;" 
        @click="(v)=>{$emit('click',v)}"
        v-if="icon!==''"
    >

        <v-icon
            :style="useStyle"
            :color="color"
            :size="useSize"
        >
            {{useIcon}}
        </v-icon>

    </div>
</template>

<script>

/**
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [color=''] 輸入圖標顏色字串，預設''
 * @vue-prop {Number} [size=24] 輸入圖標大小，單位為px，預設24
 */
export default {
    props: {
        icon: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '',
        },
        size: {
            type: Number,
            default: 24,
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {

        useIcon: function () {
            //console.log('computed useIcon')

            let vo = this

            if (vo.icon.indexOf('fa-') >= 0) {
                return vo.icon + ' fa-fw'
            }
            return vo.icon
        },

        useSize: function () {
            //console.log('computed useSize')

            let vo = this

            //size
            let size = vo.size

            if (vo.icon.indexOf('fa-') >= 0) {
                return size - 4
            }
            return size
        },

        useStyle: function () {
            //console.log('computed useStyle')

            //let vo = this

            let s = {
                'vertical-align': 'middle'
            }
            // s['transform'] = ''
            // if (vo.icon.indexOf('fa-') >= 0) {
            //     s['transform'] += ' translateY(-1px)'
            // }
            // s['transform'] += ' translateX(-1px)'
            return s
        },


    },
    methods: {
    },
}
</script>

<style scoped>
.v-icon {
    transition: all 0.3s;
}
</style>
