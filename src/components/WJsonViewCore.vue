<template>
    <div
        :style="`position:absolute; top:${item.screenY}px; width:100%; opacity:${item.nowShow?1:0.001};`"
        :index="item.index"
        :nowShow="item.nowShow"
        v-if="item.show && item.filterShow"
    >

        <div :style="[styleLineNumber,{'width':lineNumberWidth+'px'}]">{{item.index+1}}</div>

        <div :style="`display:table-cell; padding-left:${item.paddingLeft}px;`">

            <div style="position:relative;">

                <div style="position:absolute; top:0px; left:0px; transform:translateX(-100%);">
                    <span v-if="item.hasChildren" @click.capture="toggleItems(item)">
                        <span :class="[{'caretRight':true,'showChildren':item.displayChildren}]">
                            <span class="center">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useIconColor" width="11px" height="11px" x="0px" y="0px" viewBox="0 0 415.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>
                            </span>
                        </span>
                    </span>
                    <span style="display:inline-block; width:16px;" v-else></span>
                </div>

                <div style="text-indent:-2rem; margin-left:2em;">

                    <span :style="`color:${useKeyColor};`" v-if="item.key">

                        <span>{{item.key}}</span>

                        <span :style="`margin:0px 10px; color:${usekeyNumbersColor};`" v-if="item.keyNumbers">
                            <span v-if="item.keyNumbers.type==='arr'">[{{item.keyNumbers.n}}]</span>
                            <span v-if="item.keyNumbers.type==='obj'"><span>{</span><span>{{item.keyNumbers.n}}</span><span>}</span></span>
                        </span>

                        <span v-if="!item.displayChildren"><span style="margin-right:10px;">...</span>{{item.valueTail}}</span>

                    </span>

                    <template v-if="item.value">

                        <span :style="`color:${item.valueColor}`">{{item.value}}</span>

                        <span :style="`color:${item.keyColor}`" v-if="item.valueComma">,</span>

                    </template>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'

/**
 * @vue-prop {Object} item 輸入物件
 * @vue-prop {Number} [lineNumberWidth=0] 輸入列號區寬度，單位為px，預設0
 * @vue-prop {String} [iconColor='grey'] 輸入顯隱icon按鈕顏色字串，預設'grey'
 * @vue-prop {String} [keyColor='grey darken-2'] 輸入鍵值顏色字串，預設'grey darken-2'
 * @vue-prop {String} [keyNumbersColor='grey lighten-1'] 輸入鍵值內含子節點數量顏色字串，預設'grey lighten-1'
 */
export default {
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
            //記得div給width:100%，因ie11的flex內文字會自動撐開版面導致不會換行
            styleLineNumber: {
                'display': 'table-cell',
                'padding-right': '10px',
                'text-align': 'right',
                'font-size': '0.8rem',
                'color': '#f26',
                'user-select': 'none',
            },
        }
    },
    mounted: function() {
    },
    computed: {

        useIconColor: function() {
            //console.log('computed useIconColor')

            let vo = this

            return color2hex(vo.iconColor)
        },

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
            //記得click需使用capture, 先處理完自己節點點擊才釋出事件, 適用於窄板裝置

            let vo = this

            //emit
            vo.$emit('toggleItems', item)

        },

    },
}
</script>

<style scoped>
.caretRight {
    transform: translateY(-1px);
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
}
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.showChildren {
    transform: rotate(90deg);
}
</style>

