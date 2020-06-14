<template>
    <div
        style="display:inline-block;"
        role="button"
    >

        <v-tooltip bottom transition="slide-y-transition" :disabled="tooltip===''">

            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                    rounded
                    :small="small"
                    :color="backgroundColor"
                    :loading="loading"
                    :disabled="!editable"
                    @click="clickBtn"
                >

                    <w-icon
                        :style="`margin:0px 5px 0px ${useIconShiftLeft}px;`"
                        :icon="icon"
                        :color="iconColor"
                        :size="22"
                    ></w-icon>

                    <span
                        :style="`font-size:0.875rem; text-transform:none; color:${useTextColor}`"
                    >
                        {{text}}
                    </span>

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
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor=''] 輸入圖標顏色字串，預設''，即透明
 * @vue-prop {Number} [iconShiftLeft=0] 輸入圖標左側平移距離數字，單位px，預設0
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [backgroundColor='grey lighten-4'] 輸入按鈕背景顏色字串，預設'grey lighten-4'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon
    },
    props: {
        text: {
            type: String,
            default: '',
        },
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
            default: '',
        },
        iconShiftLeft: {
            type: Number,
            default: 0,
        },
        textColor: {
            type: String,
            default: 'black',
        },
        backgroundColor: {
            type: String,
            default: 'grey lighten-4',
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

        useIconShiftLeft: function() {
            let vo = this
            return vo.iconShiftLeft - 9 //初始值-9, 使圓圈類icon能貼合chip左側
        },

        useTextColor: function() {
            let vo = this
            return color2hex(vo.textColor)
        },

    },
    methods: {

        clickBtn: function () {
            //console.log('methods clickBtn')

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('click')

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
