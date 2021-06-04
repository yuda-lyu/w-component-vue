<template>
    <div
        style="display:inline-block;"
        role="button"
    >

        <v-tooltip bottom transition="slide-y-transition" :disabled="tooltip===''">

            <template v-slot:activator="{ on }">

                <v-btn
                    v-on="on"
                    aaa
                    :style="`color:${effIconColor}`"
                    fab
                    depressed
                    :class="{bx:shadow}"
                    :small="small"
                    :color="backgroundColor"
                    :loading="loading"
                    :disabled="!editable"
                    @click="clickBtn"
                >
                    <w-icon
                        :icon="icon"
                        :color="effIconColor"
                    ></w-icon>
                </v-btn>

            </template>

            <span>{{tooltip}}</span>

        </v-tooltip>

    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor='grey darken-1'] 輸入按鈕圖標顏色字串，預設'grey darken-1'
 * @vue-prop {String} [backgroundColor='transparent'] 輸入按鈕背景顏色字串，預設'transparent'
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon,
    },
    props: {
        tooltip: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
        iconColor: {
            type: String,
            default: 'grey darken-1',
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        small: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {

        effIconColor: function() {
            let vo = this
            return color2hex(vo.iconColor)
        },

    },
    methods: {

        clickBtn: function () {
            //console.log('methods clickBtn')

            let vo = this

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click')

            })

        },

    },
}
</script>

<style scoped>
.bx {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
