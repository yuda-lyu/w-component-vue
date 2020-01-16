<template>
    <div style="" :changeParam="changeParam">

        <VueDraggable
            :value="valueTrans"
            :options="{disabled:!draggable}"
            @input="dragItem"
        >

            <transition-group>
                <template v-for="(item,kitem) in valueTrans">

                    <v-chip
                        :class="`v-chpi-modify trans ${shadow?'shadow':''}`"
                        small
                        :key="item.name+'|'+item.tag"
                        :close-icon="mdiCloseCircle"
                        :close="close"
                        :text-color="getTextColor(item)"
                        :color="getBackgroundColor(item)"
                        :outlined="getOutlined(item)"
                        @click="clcikItem(item)"
                        @click:close="removeItem(item,kitem)"
                    >

                        <div
                            class="trans"
                            :style="`margin-left:-9px; margin-right:5px; border-radius:10px; font-size:0.85rem; ${isActive(item)?`padding:0px 12px; color:${useTagTextColorActive}; background-color:${useTagBackgroundColorActive};`:`padding:0px 8px; color:${useTagTextColor}; background-color:${useTagBackgroundColor};`}`"
                        >
                            {{item.tag}}
                        </div>

                        <span style="font-size:0.85rem;">{{item.name}}</span>

                    </v-chip>

                </template>
            </transition-group>

        </VueDraggable>

        <template v-if="valueTrans.length===0">

            <v-chip
                :class="`v-chpi-modify trans ${shadow?'shadow':''}`"
                small
                :text-color="textColor"
                :color="backgroundColor"
            >

                <span style="font-size:0.875rem;">{{nodata}}</span>

            </v-chip>

        </template>

    </div>
</template>

<script>
import { mdiCloseCircle } from '@mdi/js'
import isEqual from 'lodash/isEqual'
import each from 'lodash/each'
import size from 'lodash/size'
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import color2hex from '../js/vuetifyColor.mjs'
import VueDraggable from 'vuedraggable'

/**
 * @vue-prop {Array} value 輸入字串陣列
 * @vue-prop {String} [textColor='pink lighten-1'] 輸入文字顏色字串，預設'pink lighten-1'
 * @vue-prop {String} [textColorActive='white'] 輸入點擊狀態時文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [backgroundColorActive='pink lighten-1'] 輸入點擊狀態時背景顏色字串，預設'pink lighten-1'
 * @vue-prop {String} [tagTextColor='grey'] 輸入標記文字顏色字串，預設'grey'
 * @vue-prop {String} [tagTextColorActive='grey darken-4'] 輸入點擊狀態時標記文字顏色字串，預設'grey darken-4'
 * @vue-prop {String} [tagBackgroundColor='rgba(100,100,100,0.1)'] 輸入標記背景顏色字串，預設'rgba(100,100,100,0.1)'
 * @vue-prop {String} [tagBackgroundColorActive='rgba(255,255,255,0.7)'] 輸入點擊狀態時標記背景顏色字串，預設'rgba(255,255,255,0.7)'
 * @vue-prop {Boolean} [close=true] 輸入是否可刪除模式，預設true
 * @vue-prop {Boolean} [draggable=true] 輸入是否可拖曳模式，預設true
 * @vue-prop {Boolean} [shadow=true] 輸入是否有陰影模式，預設true
 * @vue-prop {String} [nodata='無'] 輸入無任何字串陣列時的預設文字字串，預設'無'
 */
export default {
    components: {
        VueDraggable,
    },
    props: {
        valueActive: {
            type: Object,
        },
        value: {
            type: Array,
        },
        textColor: {
            type: String,
            default: 'pink lighten-1',
        },
        textColorActive: {
            type: String,
            default: 'white',
        },
        backgroundColor: {
            type: String,
            default: 'white',
        },
        backgroundColorActive: {
            type: String,
            default: 'pink lighten-1',
        },
        tagTextColor: {
            type: String,
            default: 'grey',
        },
        tagTextColorActive: {
            type: String,
            default: 'grey darken-4',
        },
        tagBackgroundColor: {
            type: String,
            default: 'rgba(100,100,100,0.1)',
        },
        tagBackgroundColorActive: {
            type: String,
            default: 'rgba(255,255,255,0.7)',
        },
        close: {
            type: Boolean,
            default: true,
        },
        draggable: {
            type: Boolean,
            default: true,
        },
        shadow: {
            type: Boolean,
            default: true,
        },
        nodata: {
            type: String,
            default: '無',
        },
    },
    data: function() {
        return {
            mdiCloseCircle,
            valueTrans: [],
            itemActive: {},
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //valueTrans, valueActive
            vo.valueTrans = vo.value
            vo.itemActive = vo.valueActive

            return ''
        },

        useTagTextColor: function() {
            let vo = this
            return color2hex(vo.tagTextColor)
        },

        useTagTextColorActive: function() {
            let vo = this
            return color2hex(vo.tagTextColorActive)
        },

        useTagBackgroundColor: function() {
            let vo = this
            return color2hex(vo.tagBackgroundColor)
        },

        useTagBackgroundColorActive: function() {
            let vo = this
            return color2hex(vo.tagBackgroundColorActive)
        },

    },
    methods: {

        getTextColor: function(item) {
            //console.log('methods getTextColor', item)

            let vo = this

            if (vo.isActive(item)) {
                let c = get(item, 'textColorActive', null)
                return c || vo.textColorActive
            }
            else {
                let c = get(item, 'textColor', null)
                return c || vo.textColor
            }
        },

        getBackgroundColor: function(item) {
            //console.log('methods getBackgroundColor', item)

            let vo = this

            if (vo.isActive(item)) {
                let c = get(item, 'backgroundColorActive', null)
                return c || vo.backgroundColorActive
            }
            else {
                let c = get(item, 'backgroundColor', null)
                return c || vo.backgroundColor
            }
        },

        getOutlined: function(item) {
            //console.log('methods getOutlined', item)

            let vo = this

            if (vo.isActive(item)) {
                return get(item, 'outlinedActive', false)
            }
            else {
                return get(item, 'outlined', false)
            }
        },

        isActive: function(item) {
            //console.log('methods isActive', item)

            let vo = this

            return isEqual(vo.itemActive, item)
        },

        clcikItem: function(item) {
            //console.log('methods clcikItem', item)

            let vo = this

            //save
            vo.itemActive = cloneDeep(item)

            //setTimeout
            setTimeout(() => {

                //emit click
                vo.$emit('click', item)

                //emit valueActive
                vo.$emit('update:valueActive', vo.itemActive)

            }, 1)

        },

        pull: function(ar, item) {
            let r = []
            each(ar, (v) => {
                if (!isEqual(v, item)) {
                    r.push(v)
                }
            })
            return r
        },

        removeItem: function(item) {
            //console.log('methods removeItem', cp)

            let vo = this

            //若刪除當前顯示項目, 則改回顯示第1個
            if (isEqual(vo.itemActive, item)) {
                if (size(vo.valueTrans) > 0) {
                    vo.itemActive = cloneDeep(vo.valueTrans[0])
                }
                else {
                    vo.itemActive = {}
                }

                //setTimeout
                setTimeout(() => {

                    //emit valueActive
                    vo.$emit('update:valueActive', vo.itemActive)

                }, 1)

            }

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('input', vo.pull(vo.valueTrans, item))

            }, 1)

        },

        dragItem: function(items) {
            //console.log('methods dragItem', items)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('input', items)

            }, 1)

        },

    },
}
</script>

<style scoped>
.trans {
    transition: all 0.5s;
}
.shadow {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
.v-chpi-modify {
    user-select: none;
    vertical-align: middle;
    margin: 10px 10px 10px 0px;
}
</style>
