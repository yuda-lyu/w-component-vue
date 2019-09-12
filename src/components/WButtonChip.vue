<template>
    <div style="display:inline-block;">

        <v-tooltip bottom transition="slide-y-transition" :disabled="tooltip===''">

            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                    rounded
                    :small="small"
                    :color="buttonColor"
                    :loading="loading"
                    :disabled="!editable"
                    @click="clickBtn"
                >

                    <w-icon
                        style="margin:0px 5px 0px -9px;"
                        :icon="icon"
                        :color="iconColor"
                        :size="22"
                    ></w-icon>

                    <span style="font-size:0.875rem; text-transform:none;">{{text}}</span>

                </v-btn>
            </template>

            <span>{{tooltip}}</span>

        </v-tooltip>

    </div>
</template>

<script>
import WIcon from './WIcon.vue'

/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [tooltip=text] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor=''] 輸入圖標背景顏色字串，預設''，即透明
 * @vue-prop {String} [buttonColor='grey lighten-4'] 輸入按鈕背景顏色字串，預設'grey lighten-4'
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
        buttonColor: {
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
    },
    methods: {

        clickBtn: function () {
            //console.log('methods clickBtn')

            let vo = this

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('click')

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
