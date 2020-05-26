<template>
    <div style="display:inline-block;" :changeParam="changeParam">

        <v-tooltip bottom transition="slide-y-transition" :disabled="tooltip===''">

            <template v-slot:activator="{ on }">

                <div style="position:relative;">

                    <div
                        style="position:absolute; left:0; right:0; top:0; bottom:0;"
                        v-if="loadingTrans"
                    >
                        <v-progress-linear
                            :style="`border-radius:${useHeight/2}px;`"
                            rounded
                            :color="progColor"
                            :height="useHeight"
                            :value="loadingProgTrans"
                        ></v-progress-linear>
                    </div>

                    <v-btn
                        v-on="on"
                        rounded
                        :style="`opacity:${loadingTrans?0.5:1}`"
                        :small="small"
                        :color="backgroundColor"
                        :disabled="!editable"
                        @click="clickBtn(item)"
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
                            {{useText}}
                        </span>

                    </v-btn>

                </div>

            </template>

            <span>{{tooltip}}</span>

        </v-tooltip>

    </div>
</template>

<script>
import get from 'lodash/get'
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Object} [item={}] 輸入數據物件，預設{}
 * @vue-prop {String} [textKey='name'] 輸入由數據物件取欄位為顯示文字用字串，預設'name'
 * @vue-prop {String} [tooltip=''] 輸入提示文字字串，預設''
 * @vue-prop {String} [icon=''] 輸入圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [iconColor=''] 輸入圖標背景顏色字串，預設''，即透明
 * @vue-prop {Number} [iconShiftLeft=0] 輸入圖標左側平移距離數字，單位px，預設0
 * @vue-prop {String} [textColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [backgroundColor='amber lighten-2'] 輸入按鈕背景顏色字串，預設'amber lighten-2'
 * @vue-prop {String} [progColor='yellow darken-4'] 輸入按鈕背景顏色字串，預設'yellow darken-4'
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
            default: 'grey lighten-4', //'amber lighten-2',
        },
        progColor: {
            type: String,
            default: 'brown', //'yellow darken-4',
        },
        small: {
            type: Boolean,
            default: true,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        loadingProg: {
            type: Number,
            default: 0,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            loadingTrans: false, //開始下載不代表就會觸發prog事件或提供有效值(>0), 故狀態與prog得分開處理
            loadingProgTrans: 0,
        }
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //loadingTrans, loadingProgTrans
            vo.loadingTrans = vo.loading
            vo.loadingProgTrans = vo.loadingProg

            return ''
        },

        useText: function() {
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

        useHeight: function() {
            let vo = this
            return vo.small ? 28 : 36
        },

    },
    methods: {

        clickBtn: function(item) {
            //console.log('methods clickBtn', item)

            let vo = this

            //check
            if (vo.loadingTrans) {
                return
            }

            //default
            vo.loadingTrans = true
            vo.loadingProgTrans = 0

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('update:loading', vo.loadingTrans)
                vo.$emit('update:loadingProg', vo.loadingProgTrans)

            }, 1)

            //emit
            vo.$emit('click', item, (prog) => {

                //update loadingProgTrans
                vo.loadingProgTrans = prog

                //setTimeout
                setTimeout(() => {

                    //emit
                    vo.$emit('update:loadingProg', vo.loadingProgTrans)

                }, 1)

                if (prog >= 100) {

                    //update loadingTrans
                    vo.loadingTrans = false

                    //setTimeout
                    setTimeout(() => {

                        //emit
                        vo.$emit('update:loading', vo.loadingTrans)

                    }, 1)

                }
            })

        },

    }
}
</script>

<style scoped>
.v-chpi-shadow {
    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
