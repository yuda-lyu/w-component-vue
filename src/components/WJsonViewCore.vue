<template>
    <div
        :style="`position:absolute; top:${item.screenY}px; width:100%; opacity:${item.nowShow?1:0.01};`"
        :index="item.index"
        :nowShow="item.nowShow"
        v-if="item.show"
    >

        <div :style="[styleLineNumber,{'width':lineNumberWidth+'px'}]">{{item.index+1}}</div>

        <div :style="`display:table-cell; padding-left:${item.paddingLeft}px;`">

            <div style="position:relative;">

                <div style="position:absolute; top:0px; left:0px; transform:translateX(-100%);">
                    <span v-if="item.hasChildren" @click="toggleItems(item)">
                        <span :class="[{'caretRight':true,'showChildren':item.displayChildren}]">
                            <span class="center">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="iconColor" width="11px" height="11px" x="0px" y="0px" viewBox="0 0 415.346 415.346" xml:space="preserve"><g><path d="M41.712,415.346c-11.763,0-21.3-9.537-21.3-21.3V21.299C20.412,9.536,29.949,0,41.712,0l346.122,191.697 c0,0,15.975,15.975,0,31.951C371.859,239.622,41.712,415.346,41.712,415.346z"/></g></svg>
                            </span>
                        </span>
                    </span>
                    <span style="display:inline-block; width:16px;" v-else></span>
                </div>

                <div style="text-indent:-2rem; margin-left:2em;">

                    <span :style="`color:${keyColor};`" v-if="item.key">

                        <span>{{item.key}}</span>

                        <span :style="`margin:0px 10px; color:${keyNumbersColor};`" v-if="item.keyNumbers">
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

/**
 * @vue-prop {Object} item 輸入物件
 * @vue-prop {Number} [lineNumberWidth=0] 輸入列號區寬度，單位為px，預設0
 * @vue-prop {String} [iconColor='#999'] 輸入顯隱icon按鈕顏色字串，預設'#999'
 * @vue-prop {String} [keyColor='#666'] 輸入鍵值顏色字串，預設'#666'
 * @vue-prop {String} [keyNumbersColor='#aaa'] 輸入鍵值內含子節點數量顏色字串，預設'#aaa'
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
            default: '#999',
        },
        keyColor: {
            type: String,
            default: '#666',
        },
        keyNumbersColor: {
            type: String,
            default: '#aaa',
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
    },
    methods: {

        toggleItems: function(item) {
            //console.log('methods toggleItems', item)

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

