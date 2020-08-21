<template>
    <div
        style="display:inline-block;"
        role="button"
    >

        <v-tooltip bottom transition="slide-y-transition" :disabled="tooltip===''">

            <template v-slot:activator="{ on }">

                <v-btn
                    v-on="on"
                    icon
                    :large="!small"
                    :elevation="shadow?4:0"
                    :color="iconColor"
                    :loading="loading"
                    :disabled="!editable"
                    @click="clickBtn"
                    v-if="backgroundColor==='transparent'"
                >
                    <w-icon
                        :icon="icon"
                    ></w-icon>
                </v-btn>

                <v-btn
                    v-on="on"
                    fab
                    :small="small"
                    :elevation="shadow?4:0"
                    :color="backgroundColor"
                    :loading="loading"
                    :disabled="!editable"
                    @click="clickBtn"
                    v-else
                >
                    <w-icon
                        :icon="icon"
                        :color="iconColor"
                    ></w-icon>
                </v-btn>

            </template>

            <span>{{tooltip}}</span>

        </v-tooltip>

    </div>
</template>

<script>
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
</style>
