<template>
    <!-- 需設定width:100%, 因ie11的flex內文字會自動撐開版面導致不會換行 -->
    <div
        :style="`position:absolute; top:${item.screenY}px; width:100%; opacity:${item.nowShow?1:0.001};`"
        :index="item.index"
        :nowShow="item.nowShow"
        v-if="item.show && item.filterShow"
    >

        <div :style="`${styleCell}; ${styleLineNumber}; width:${lineNumberWidth}px;`">{{item.index+1}}</div>

        <div :style="`${styleCell}; padding-left:${item.paddingLeft}px;`">

            <div style="position:relative;">

                <div style="position:absolute; top:0px; left:0px; transform:translateX(-100%);">
                    <WTreeIconToggle
                        style="display:inline-block; width:16px; transform:translateX(-2px);"
                        :dir="`${item.displayChildren?'bottom':'right'}`"
                        :iconColor="iconColor"
                        @click="toggleItems(item)"
                        v-if="item.stateChildren===1"
                    ></WTreeIconToggle>
                    <div style="display:inline-block; width:16px;" v-else></div>
                </div>

                <div style="">

                    <div :style="`${styleCell}; white-space:pre; color:${useKeyColor};`" v-if="item.key">

                        <span>{{item.key}}</span>

                        <span :style="`margin:0px 10px; color:${usekeyNumbersColor};`" v-if="item.keyNumbers">
                            <span v-if="item.keyNumbers.type==='arr'">[{{item.keyNumbers.n}}]</span>
                            <span v-if="item.keyNumbers.type==='obj'"><span>{</span><span>{{item.keyNumbers.n}}</span><span>}</span></span>
                        </span>

                        <span v-if="!item.displayChildren"><span style="margin-right:10px;">...</span>{{item.valueTail}}</span>

                    </div>

                    <template v-if="item.value">

                        <div :style="`${styleCell}; color:${item.valueColor}`">{{item.value}}</div>

                        <div :style="`${styleCell}; color:${item.keyColor}`" v-if="item.valueComma">,</div>

                    </template>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import WTreeIconToggle from './WTreeIconToggle.vue'
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {Object} item 輸入物件
 * @vue-prop {Number} [lineNumberWidth=0] 輸入列號區寬度，單位為px，預設0
 * @vue-prop {String} [iconColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [keyColor='grey darken-2'] 輸入鍵值顏色字串，預設'grey darken-2'
 * @vue-prop {String} [keyNumbersColor='grey lighten-1'] 輸入鍵值內含子節點數量顏色字串，預設'grey lighten-1'
 */
export default {
    components: {
        WTreeIconToggle,
    },
    props: {
        item: {
            type: Object,
            default: () => {},
        },
        lineNumberWidth: {
            type: Number,
            default: 0,
        },
        iconColor: {
            type: String,
            default: 'grey',
        },
        keyColor: {
            type: String,
            default: 'grey darken-2',
        },
        keyNumbersColor: {
            type: String,
            default: 'grey lighten-1',
        },
    },
    data: function() {
        return {
            //line-height = ( 1 / 0.8(font-size) )^2
            styleLineNumber: `padding-right:10px; text-align:right; font-size:0.8rem; line-height:1.5625rem; color:#f26; user-select:none;`,
            styleCell: `display:table-cell; vertical-align:top;`,
        }
    },
    mounted: function() {
    },
    computed: {

        useKeyColor: function() {
            //console.log('computed useKeyColor')

            let vo = this

            return color2hex(vo.keyColor)
        },

        usekeyNumbersColor: function() {
            //console.log('computed usekeyNumbersColor')

            let vo = this

            return color2hex(vo.keyNumbersColor)
        },

    },
    methods: {

        toggleItems: function(item) {
            //console.log('methods toggleItems', item)

            let vo = this

            //emit
            vo.$emit('toggle-items', item)

        },

    },
}
</script>

<style scoped>
</style>

