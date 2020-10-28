<template>
    <WPopup
        style="display:block;"
        :minWidth="minWidth"
        :maxWidth="maxWidth"
        :distY="distY"
        :editable="editable"
        v-model="show"
        @input="(v)=>{changeShow(v,'WPopup')}"
        :changeValue="changeValue"
    >

        <template v-slot:trigger>

            <div>
                <!-- 盡量不要讓display:flex暴露至外層 -->
                <div style="display:flex; align-items:center;">

                    <div
                        :style="`width:100%; height:${height}px; line-height:${height}px; vertical-align:middle; cursor:pointer; outline:none;`"
                        tabindex="0"
                        @focus="focusText"
                        v-if="mode==='select'"
                    >
                        {{valueTrans}}
                    </div>

                    <w-text-core
                        style="width:100%;"
                        :textAlign="textAlign"
                        :placeholder="placeholder"
                        :height="height"
                        :editable="editable"
                        :value="valueTrans"
                        @blur="triggerEvent('blur',value,null,'blur')"
                        @enter="triggerEvent('enter',value,null,'enter')"
                        @input="changeValueTrans"
                        @select="selectText"
                        v-if="mode==='suggest'"
                    ></w-text-core>

                    <div :style="`padding:0px 5px; transform:rotate(${getRotateDeg}deg); transition:all 0.2s; cursor:pointer;`">
                        <div style="transform:rotate(90deg) scaleX(0.7);"> <!-- 調整svg角度與寬度 -->
                            <div :style="`display:flex; align-items:center; height:${height}px;`"> <!-- 使svg垂直置中 -->
                                <div style="display:flex; align-items:center; width:11px; height:11px;"> <!-- 使svg貼合div -->
                                    <svg
                                        width="11px"
                                        height="11px"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 415.346 415.346"
                                        :fill="useIconColor"
                                    >
                                        <g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </template>

        <template v-slot:content>

            <div>
                <WDynamicList
                    ref="wds"
                    :rows="items"
                    :filterKeywords="mode==='suggest'?valueTrans:''"
                    :viewHeightMax="maxHeight"
                    :ratio.sync="ratio"
                    :itemMinHeight="43"
                    :searchEmpty="searchEmpty"
                    :show="show"
                >
                    <template v-slot:block="props">

                        <div
                            :style="`padding:12px 16px; transition:all 0.2s; cursor:pointer; outline:none; background:${useItemBackgroundColor}; color:${useItemTextColor};`"
                            tabindex="0"
                            @keyup.enter="clickItem(props.row,props.irow)"
                            @click="clickItem(props.row,props.irow)"
                            @mouseenter="(e)=>{let es=e.target.style; es.backgroundColor=useItemBackgroundColorHover; es.color=useItemTextColorHover;}"
                            @mouseleave="(e)=>{let es=e.target.style; es.backgroundColor=useItemBackgroundColor; es.color=useItemTextColor;}"
                            @focus="(e)=>{let es=e.target.style; es.backgroundColor=useItemBackgroundColorHover; es.color=useItemTextColorHover;}"
                            @blur="(e)=>{let es=e.target.style; es.backgroundColor=useItemBackgroundColor; es.color=useItemTextColor;}"
                        >

                            <div :style="`font-size:${itemFontSize};`">{{getText(props.row)}}</div>

                        </div>

                    </template>
                </WDynamicList>
            </div>

        </template>

    </WPopup>
</template>

<script>
import get from 'lodash/get'
import isobj from 'wsemi/src/isobj.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WPopup from './WPopup.vue'
import WTextCore from './WTextCore.vue'
import WDynamicList from './WDynamicList.vue'


/**
 * @vue-prop {String} [mode='suggest'] 輸入模式字串，可有'suggest'與'select'，suggest代表可查詢並不綁定選項的下拉選單，select代表只能選擇的下拉選單，預設'suggest'
 * @vue-prop {Object|String|Number} value 輸入初始項目物件
 * @vue-prop {Array} [items=[]] 輸入項目陣列，預設[]
 * @vue-prop {String} [keyText='text'] 輸入取項目物件內之顯示用文字鍵值字串，預設'text'
 * @vue-prop {String} [itemTextColor='grey darken-3'] 輸入項目文字顏色字串，預設'grey darken-3'
 * @vue-prop {String} [itemTextColorHover='light-blue darken-2'] 輸入項目文字Hover顏色字串，預設'light-blue darken-2'
 * @vue-prop {String} [itemFontSize='0.9rem'] 輸入項目顯示文字大小字串，預設'0.9rem'
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入項目背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='light-blue lighten-5'] 輸入項目背景Hover顏色字串，預設'light-blue lighten-5'
 * @vue-prop {String} [iconColor='#999'] 輸入圖標顏色字串，預設'#999'
 * @vue-prop {Number} [maxHeight=200] 輸入顯示區最大高度，單位為px，預設200
 * @vue-prop {Number} [minWidth=null] 輸入最小寬度，單位為px，預設null
 * @vue-prop {Number} [maxWidth=null] 輸入最大寬度，單位為px，預設null
 * @vue-prop {Number} [distY=5] 輸入彈窗距離觸發元素底部的距離，單位為px，預設5
 * @vue-prop {String} [textAlign='left'] 輸入文字左右對齊字串，預設'left'
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [searchEmpty='Empty'] 輸入無過濾結果字串，預設'Empty'
 * @vue-prop {Number} [height=28] 輸入高度數字，單位為px，預設28
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WPopup,
        WTextCore,
        WDynamicList,
    },
    props: {
        mode: {
            type: String,
            default: 'suggest',
        },
        value: {
            type: [Object, String, Number],
            default: null,
        },
        items: {
            type: Array,
            default: () => [],
        },
        keyText: {
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
            default: null,
        },
        maxWidth: {
            type: Number,
            default: null,
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
        height: {
            type: Number,
            default: 28,
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
            ratio: 0,
        }
    },
    computed: {

        changeValue: function () {
            //console.log('computed changeValue')

            let vo = this

            //valueTrans
            if (isobj(vo.value)) {
                vo.valueTrans = vo.value[vo.keyText]
            }
            else {
                vo.valueTrans = vo.value
            }

            return ''
        },

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
                return value[vo.keyText]
            }
            else {
                return value
            }

        },

        selectText: function() {
            //console.log('methods selectText')

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //check, 若由滑鼠進行範圍選擇, 離開時位於組件外時, 會被popup視為滑鼠點擊至內容區外側(於外面mousuup), 故會自動隱藏選單, 得重新顯示
            if (!vo.show) {

                //show
                vo.show = true

            }

        },

        focusText: function() {
            //console.log('methods focusText')

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //因由鍵盤觸發不會有點擊事件, 得直接變更show
            vo.show = true

            //changeShow
            vo.changeShow(vo.show, 'focusText')

        },


        changeValueTrans: function(value) {
            //console.log('methods changeValueTrans')

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //save
                vo.valueTrans = value

                //triggerEvent
                vo.triggerEvent('input', value, null, 'changeValueTrans') //文字框查詢關鍵字

            })

        },

        changeShow: function(show, from) {
            //console.log('methods changeShow', show, from)

            let vo = this

            // //show, 因WPopup會更新show才觸發, 不需再次覆寫vo.show避免事件多重觸發, 若div focus要呼叫得先變更show=true才調用此函數
            // vo.show = show

            //因WPopup內第二次重新顯示後僅panel元素由display:none轉為block, 而重新顯示時會因沒觸發高度或捲軸變化, 導致組件WDynamicList無法依照最新顯示數據重算顯示項目高度, 故延遲調用triggerEvent
            if (show) {
                setTimeout(() => {
                    //t
                    let t = get(vo, '$refs.wds.refreshAndTriggerEvent', null)
                    if (t) {
                        t('show')
                    }
                }, 100)
            }

            //triggerEvent
            vo.triggerEvent('update:focused', show, null, 'changeShow')

        },

        clickItem: function(item, kitem) {
            //console.log('methods clickItem', item, kitem)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //hide
            vo.show = false

            //triggerEvent, 因直接修改show不會觸發WPopup的input事件, 得自己補觸發update:focused
            vo.triggerEvent('update:focused', vo.show, null, 'clickItem')

            //triggerEvent
            vo.triggerEvent('input', item, kitem, 'clickItem') //點擊選擇項目

        },

        triggerEvent: function(name, item, kitem, from) {
            //console.log('methods triggerEvent', name, item, kitem, from)

            let vo = this

            //check, 不可編輯時跳出
            if (!vo.editable) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit(name, item, kitem)

            })

        },

    },
}
</script>

<style scoped>
</style>

