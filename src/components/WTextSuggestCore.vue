<template>
    <WPopupPanel
        :minWidth="minWidth"
        :maxWidth="maxWidth"
        :distY="distY"
        :editable="editable"
        :changeValue="changeValue"
        v-model="show"
    >

        <template v-slot:trigger>

            <div style="display:flex; align-items:center;">

                <w-text-core
                    style="width:100%;"
                    ref="inp"
                    :textAlign="textAlign"
                    :placeholder="placeholder"
                    :editable="editable"
                    :value="valueTrans"
                    :focused="focusedTrans"
                    @update:focused="changeFocused"
                    @blur="triggerEvent('blur',value,null)"
                    @enter="triggerEvent('enter',value,null)"
                    @input="changeValueTrans"
                ></w-text-core>

                <div :style="`padding:0px 5px; transform:rotate(${getRotateDeg}deg); transition:all 0.2s;`">
                    <div style="display:flex; align-items:center; justify-content:center; transform:rotate(90deg) scaleX(0.7);">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useIconColor" width="11px" height="11px" x="0px" y="0px" viewBox="0 0 415.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>
                    </div>
                </div>

            </div>

        </template>

        <template v-slot:content>

            <div style="background-color:#fff;">
                <WDynamicList
                    ref="wds"
                    :rows="items"
                    :filterKeywords="valueTrans"
                    :viewHeightMax="maxHeight"
                    :ratio.sync="ratio"
                    :itemMinHeight="43"
                    :searchEmpty="searchEmpty"
                >
                    <template v-slot:block="props">

                        <div
                            :style="`padding:12px 16px; cursor:pointer; transition:all 0.2s; background:${useItemBackgroundColor}; color:${useItemTextColor};`"
                            @click="clickItem(props.row,props.irow)"
                            @mouseenter="(e)=>{let es=e.target.style; es.backgroundColor=useItemBackgroundColorHover; es.color=useItemTextColorHover;}"
                            @mouseleave="(e)=>{let es=e.target.style; es.backgroundColor=useItemBackgroundColor; es.color=useItemTextColor;}"
                        >

                            <div :style="`font-size:${itemFontSize};`">{{getText(props.row)}}</div>

                        </div>

                    </template>
                </WDynamicList>
            </div>

        </template>

    </WPopupPanel>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'
import get from 'lodash/get'
import isobj from 'wsemi/src/isobj.mjs'
import WPopupPanel from './WPopupPanel.vue'
import WTextCore from './WTextCore.vue'
import WDynamicList from './WDynamicList.vue'


/**
 * @vue-prop {Object|String|Number} value 輸入初始項目物件
 * @vue-prop {Array} [items=400] 輸入項目陣列，預設[]
 * @vue-prop {String} [itemText='value'] 輸入取項目物件內之顯示用文字鍵值字串，預設'value'
 * @vue-prop {String} [itemTextColor='grey darken-3'] 輸入項目文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [itemTextColorHover='light-blue darken-2'] 輸入項目文字Hover顏色字串，預設'light-blue darken-2'
 * @vue-prop {String} [itemFontSize='0.9rem'] 輸入項目顯示文字大小字串，預設'0.9rem'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入項目背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='light-blue lighten-5'] 輸入項目背景Hover顏色字串，預設'light-blue lighten-5'
 * @vue-prop {String} [iconColor='#999'] 輸入圖標顏色字串，預設'#999'
 * @vue-prop {Number} [maxHeight=200] 輸入顯示區最大高度，單位為px，預設200
 * @vue-prop {Number} [minWidth=undefined] 輸入最小寬度，單位為px，預設undefined
 * @vue-prop {Number} [maxWidth=undefined] 輸入最大寬度，單位為px，預設undefined
 * @vue-prop {Number} [distY=5] 輸入彈窗距離觸發元素底部的距離，單位為px，預設5
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [searchEmpty='Empty'] 輸入無過濾結果字串，預設'Empty'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WPopupPanel,
        WTextCore,
        WDynamicList,
    },
    props: {
        value: {
            type: [Object, String, Number],
            default: null,
        },
        items: {
            type: Array,
            default: () => [],
        },
        itemText: {
            type: String,
            default: 'text',
        },
        itemTextColor: {
            type: String,
            default: 'grey darken-3',
        },
        itemTextColorHover: {
            type: String,
            default: 'light-blue darken-2',
        },
        itemFontSize: {
            type: String,
            default: '0.8rem',
        },
        itemBackgroundColor: {
            type: String,
            default: 'white',
        },
        itemBackgroundColorHover: {
            type: String,
            default: 'light-blue lighten-5',
        },
        iconColor: {
            type: String,
            default: 'grey',
        },
        maxHeight: {
            type: Number,
            default: 200,
        },
        minWidth: {
            type: Number,
            default: undefined,
        },
        maxWidth: {
            type: Number,
            default: undefined,
        },
        distY: {
            type: Number,
            default: 5,
        },
        textAlign: {
            type: String,
            default: 'left',
        },
        placeholder: {
            type: String,
            default: '',
        },
        searchEmpty: {
            type: String,
            default: 'Empty',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            show: false,
            valueTrans: null,
            focusedTrans: false,
            ratio: 0,
        }
    },
    computed: {

        useItemBackgroundColor: function() {
            //console.log('computed useItemBackgroundColor')

            let vo = this

            return color2hex(vo.itemBackgroundColor)
        },

        useItemBackgroundColorHover: function() {
            //console.log('computed useItemBackgroundColorHover')

            let vo = this

            return color2hex(vo.itemBackgroundColorHover)
        },

        useItemTextColor: function() {
            //console.log('computed useItemTextColor')

            let vo = this

            return color2hex(vo.itemTextColor)
        },

        useItemTextColorHover: function() {
            //console.log('computed useItemTextColorHover')

            let vo = this

            return color2hex(vo.itemTextColorHover)
        },

        useIconColor: function() {
            //console.log('computed useIconColor')

            let vo = this

            return color2hex(vo.iconColor)
        },

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //valueTrans
            if (isobj(vo.value)) {
                vo.valueTrans = vo.value[vo.itemText]
            }
            else {
                vo.valueTrans = vo.value
            }

            return ''
        },

        getRotateDeg: function() {
            //console.log('computed getRotateDeg')

            let vo = this

            return vo.show ? 180 : 0
        },

    },
    methods: {

        getText: function(value) {
            //console.log('methods getText', value)

            let vo = this

            //valueTrans
            if (isobj(value)) {
                return value[vo.itemText]
            }
            else {
                return value
            }

        },

        changeValueTrans: function(value) {
            //console.log('methods changeValueTrans')

            let vo = this

            //show
            vo.show = true

            setTimeout(() => {

                //save
                vo.valueTrans = value

                //triggerEvent
                vo.triggerEvent('input', value, null)

            }, 1)

        },

        changeFocused: function(focused) {
            //console.log('methods changeFocused', focused)

            let vo = this

            //focusedTrans
            vo.focusedTrans = focused

            //因WPopupPanel內v-menu顯示後有延遲顯示dom, 導致組件WDynamicList於focused=true時尚未出現或mounted, 此處靠算準延遲調用triggerEvent
            if (focused) {
                setTimeout(async () => {

                    //t
                    let t = get(vo, '$refs.wds.refreshAndTriggerEvent', null)
                    if (t) {
                        t('show')
                    }

                }, 300)
            }

            //triggerEvent
            vo.triggerEvent('update:focused', focused, null)

        },

        clickItem: function(item, kitem) {
            //console.log('methods clickItem', item, kitem)

            let vo = this

            //hide
            vo.show = false

            //triggerEvent
            vo.triggerEvent('input', item, kitem)

        },

        triggerEvent: function(from, item, kitem) {
            //console.log('methods triggerEvent', from, item, kitem)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit(from, item, kitem)

            }, 1)

        },

    },
}
</script>

<style scoped>
.wisc-item {
    transition: all 0.2s;
    background-color: #fff;
    color: #444;
}
.wisc-item:hover {
    background-color: #666;
    color: #ddd;
}
</style>

