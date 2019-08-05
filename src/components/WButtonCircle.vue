<template>
    <div style="display:inline-block;">

        <v-tooltip bottom transition="slide-y-transition" :disabled="tooltip===''">

            <template v-slot:activator="{ on }">
                <v-btn
                    v-on="on"
                    :fab="shadow"
                    :icon="!shadow"
                    :small="shadow"
                    :color="buttonColor"
                    :loading="loading"
                    :disabled="!editable"
                    @click="ck_btn"
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
 * @vue-prop {String} [tooltip=text] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor=''] 輸入圖標背景顏色字串，預設''，即透明
 * @vue-prop {String} [buttonColor='grey lighten-3'] 輸入按鈕背景顏色字串，預設'grey lighten-3'
 * @vue-prop {Boolean} [shadow=true] 輸入是否為陰影模式，預設true
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon
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
            default: '',
        },
        buttonColor: {
            type: String,
            default: 'grey lighten-3',
        },
        shadow: {
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

        ck_btn: function () {
            //console.log('methods ck_btn')

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
