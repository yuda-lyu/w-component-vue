<template>
    <div
        :style="[useStyleSize,{'display':'flex','align-items':'center','user-select':'none'}]"
        @keyup.enter="(v)=>{$emit('click',v)}"
        @click="(v)=>{$emit('click',v)}"
        v-if="icon!==''"
    >

        <v-icon
            :style="[useStyleSize]"
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

        useIconType: function () {
            //console.log('computed useIconType')

            let vo = this

            if (vo.icon.indexOf('fa-') >= 0) {
                return 'fontawesome'
            }
            return 'mdi/js'
        },

        isFontawesome: function() {
            return this.useIconType === 'fontawesome'
        },

        // useShiftY: function () {
        //     //console.log('computed useShiftY')

        //     let vo = this

        //     let s = {}
        //     // s.transform = `translateY(-1px)`
        //     // if (vo.isFontawesome) {
        //     //     s.transform = `translateY(-2px)`
        //     // }
        //     return s
        // },

        useIcon: function () {
            //console.log('computed useIcon')

            let vo = this

            if (vo.isFontawesome) {
                return vo.icon + ' fa-fw'
            }
            return vo.icon
        },

        useSize: function () {
            //console.log('computed useSize')

            let vo = this

            //size
            let size = vo.size

            if (vo.isFontawesome) {
                return size / 24 * 20 //size - 4
            }
            return size
        },

        useStyleSize: function () {
            //console.log('computed useStyleSize')

            let vo = this

            let s = {
                'width': `${vo.size}px`,
                'height': `${vo.size}px`,
                'line-height': `${vo.size}px`,
                'max-height': `${vo.size}px`,
                'min-height': `${vo.size}px`,
            }
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
