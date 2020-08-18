<template>
    <div :style="{'opacity':editable?1:0.65}" :changeParam="changeParam">

        <template v-for="(item,kitem) in itemsTrans">

            <WButtonChip
                style="margin:10px 10px 10px 0px;"
                :key="kitem"
                :text="get(item,'data.text') || get(item,'data')"
                :tooltip="get(item,'data.tooltip')"
                :icon="get(item,'data.icon')"
                :iconColor="iconColor"
                :iconColorHover="iconColorHover"
                :iconColorActive="iconColorActive"
                :iconShiftLeft="iconShiftLeft"
                :textColor="textColor"
                :textColorHover="textColorHover"
                :textColorActive="textColorActive"
                :borderRadius="borderRadius"
                :borderColor="borderColor"
                :borderColorHover="borderColorHover"
                :borderColorActive="borderColorActive"
                :backgroundColor="backgroundColor"
                :backgroundColorHover="backgroundColorHover"
                :backgroundColorActive="backgroundColorActive"
                :shadow="shadow"
                :shadowStyle="shadowStyle"
                :shadowActive="shadowActive"
                :shadowActiveStyle="shadowActiveStyle"
                :small="small"
                :sizePadding="sizePadding"
                :loading="loading"
                :editable="editable"
                :active="item.active"
                @click="toggleState(item)"
            >
                <slot
                    :item="item"
                    :kitem="kitem"
                ></slot>
            </WButtonChip>

        </template>

    </div>
</template>

<script>
import get from 'lodash/get'
import map from 'lodash/map'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import WButtonChip from './WButtonChip.vue'


/**
 * @vue-prop {Array} items 輸入全部可選字串或物件陣列
 * @vue-prop {String|Object} value 輸入單選字串或物件
 * @vue-prop {String} [keyText=''] 輸入可選項目為物件時，存放顯示文字之欄位字串，預設''
 * @vue-prop {String} [keyIcon=''] 輸入可選項目為物件時，存放圖標之欄位字串，預設''
 * @vue-prop {String} [iconColor='black'] 輸入圖標顏色字串，預設'black'
 * @vue-prop {String} [iconColorHover='grey darken-3'] 輸入滑鼠移入時圖標顏色字串，預設'grey darken-3'
 * @vue-prop {String} [iconColorActive='white'] 輸入主動模式時圖標顏色字串，預設'white'
 * @vue-prop {Number} [iconShiftLeft=0] 輸入圖標左側平移距離數字，單位px，預設0
 * @vue-prop {String} [textColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [textColorHover='grey darken-3'] 輸入滑鼠移入時文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [textColorActive='white'] 輸入主動模式時文字顏色字串，預設'white'
 * @vue-prop {Number} [borderRadius=30] 輸入框圓角寬度，單位為px，預設30
 * @vue-prop {String} [borderColor='transparent'] 輸入邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorHover='transparent'] 輸入滑鼠移入時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [borderColorActive='transparent'] 輸入主動模式時邊框顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColor='transparent'] 輸入背景顏色字串，預設'transparent'
 * @vue-prop {String} [backgroundColorHover='rgba(200,200,200,0.25)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.25)'
 * @vue-prop {String} [backgroundColorActive='orange'] 輸入主動模式時背景顏色字串，預設'orange'
 * @vue-prop {Boolean} [shadow=false] 輸入是否顯示陰影，預設false
 * @vue-prop {String} [shadowStyle=''] 輸入陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [shadowActive=true] 輸入主動模式時是否顯示陰影，預設true
 * @vue-prop {String} [shadowActiveStyle=''] 輸入主動模式時陰影顏色字串，預設值詳見props
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {String} [sizePadding=''] 輸入內寬設定字串，會覆寫small所算得的padding，預設''，也就是由small決定預設padding值
 * @vue-prop {Boolean} [loading=false] 輸入是否為載入模式，預設false
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WButtonChip,
    },
    props: {
        items: {
            type: Array,
        },
        value: {
            type: [String, Object],
        },
        keyText: {
            type: String,
            default: 'text',
        },
        keyIcon: {
            type: String,
            default: 'icon',
        },
        iconColor: {
            type: String,
            default: 'black',
        },
        iconColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        iconColorActive: {
            type: String,
            default: 'white',
        },
        iconShiftLeft: {
            type: Number,
            default: 0,
        },
        textColor: {
            type: String,
            default: 'black',
        },
        textColorHover: {
            type: String,
            default: 'grey darken-3',
        },
        textColorActive: {
            type: String,
            default: 'white',
        },
        borderRadius: {
            type: Number,
            default: 30,
        },
        borderColor: {
            type: String,
            default: 'transparent',
        },
        borderColorHover: {
            type: String,
            default: 'transparent',
        },
        borderColorActive: {
            type: String,
            default: 'transparent',
        },
        backgroundColor: {
            type: String,
            default: 'transparent',
        },
        backgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.25)',
        },
        backgroundColorActive: {
            type: String,
            default: 'orange',
        },
        shadow: {
            type: Boolean,
            default: false,
        },
        shadowStyle: {
            type: String,
            default: '0 12px 20px -10px {backgroundColorAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorAlpha=0.2}',
        },
        shadowActive: {
            type: Boolean,
            default: true,
        },
        shadowActiveStyle: {
            type: String,
            default: '0 12px 20px -10px {backgroundColorActiveAlpha=0.28}, 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px {backgroundColorActiveAlpha=0.2}',
        },
        small: {
            type: Boolean,
            default: true,
        },
        sizePadding: {
            type: String,
            default: '',
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
            get,

            itemsTrans: [],

        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //t
            let t = cloneDeep(vo.items)

            //items
            let items = map(t, (v) => {
                return {
                    active: isEqual(v, vo.value),
                    data: v,
                }
            })

            //save
            vo.itemsTrans = items

            return ''
        },

    },
    methods: {

        toggleState: function(item) {
            //console.log('methods toggleState', item)

            let vo = this

            if (vo.editable === false) {
                return
            }

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('input', item.data)

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
