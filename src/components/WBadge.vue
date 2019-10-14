<template>
    <div style="display:inline-block; margin:5px 20px 5px 0px; position:relative;">

        <slot></slot>

        <div style="position:absolute; top:0px; right:10px; transform:translateX(100%) translateY(-50%);">
            <span :style="useStyle">{{text}}</span>
        </div>

    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'

/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [textColor='white'] 輸入文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='red'] 輸入背景顏色字串，預設'red'
 */
export default {
    props: {
        text: {
            type: String,
            default: '',
        },
        textColor: {
            type: String,
            default: 'white',
        },
        backgroundColor: {
            type: String,
            default: 'red',
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {

        useStyle: function() {
            //console.log('computed useStyle')

            let vo = this

            return {
                'padding': '2px 8px 3px',
                'font-size': '0.8rem',
                'border-radius': '10px',
                'white-space': 'nowrap',
                'color': color2hex(vo.textColor),
                'background-color': color2hex(vo.backgroundColor),
            }
        },

    },
    methods: {
    },
}
</script>

<style scoped>
</style>
