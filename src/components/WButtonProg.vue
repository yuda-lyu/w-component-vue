<template>
    <div style="display:inline-block;">

        <div style="position:relative;">

            <v-progress-linear
                style="margin:-12px 0px; transform:translateY(14px); border-radius:12px;"
                rounded
                :color="progColor"
                :height="24"
                :value="loadingProg"
                v-if="loading"
            ></v-progress-linear>

            <v-chip
                :style="`opacity:${loading?0.5:1}`"
                :color="backgroundColor"
                small
                @click="clckItem(item)"
            >

                <WIcon
                    :style="`margin:0px 5px 0px ${useIconShiftLeft}px;`"
                    :icon="icon"
                    :color="iconColor"
                    :size="22"
                    v-if="icon"
                ></WIcon>

                <span
                    :style="`text-transform:none; color:${useTextColor}`"
                >
                    {{useText}}
                </span>

            </v-chip>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'

/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String} [tooltip=text] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor=''] 輸入圖標背景顏色字串，預設''，即透明
 * @vue-prop {Number} [iconShiftLeft=0] 輸入圖標左側平移距離數字，單位px，預設0
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [backgroundColor='grey lighten-4'] 輸入按鈕背景顏色字串，預設'grey lighten-4'
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon,
    },
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        textKey: {
            type: String,
            default: 'name',
        },
        textColor: {
            type: String,
            default: 'grey darken-2',
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
        backgroundColor: {
            type: String,
            default: 'amber lighten-2',
        },
        progColor: {
            type: String,
            default: 'yellow darken-4',
        },


        inputTextBackgroundColor: {
            type: String,
            default: 'white',
        },
        inputTextBackgroundColorFocus: {
            type: String,
            default: 'grey lighten-5',
        },
        inputTextBorderColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextBorderColorFocus: {
            type: String,
            default: 'grey',
        },
        inputTextButtonColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextButtonColorFocus: {
            type: String,
            default: 'grey',
        },
        iconTooltip: {
            type: String,
            default: '新增',
        },
    },
    data: function() {
        return {
            loading: false, //開始下載不代表就會觸發prog事件或提供有效值(>0), 故狀態與prog得分開處理
            loadingProg: 0,
        }
    },
    computed: {

        useText: function() {
            //console.log('computed useText')

            let vo = this

            return get(vo.item, vo.textKey, '')
        },

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

        clckItem: function(item) {
            //console.log('methods clckItem', item)

            let vo = this

            //check
            if (vo.loading) {
                return
            }

            //loading
            vo.loading = true
            vo.loadingProg = 0

            //emit
            vo.$emit('click', item, (prog) => {
                vo.loadingProg = prog
                if (prog >= 100) {
                    vo.loading = false
                }
            })

        },

    }
}
</script>

<style scoped>
</style>
