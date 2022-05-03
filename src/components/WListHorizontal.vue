<template>
    <div
        v-domresize
        @domresize="resize"
        :changeItemActive="changeItemActive"
    >

        <div style="position:relative; display:flex; align-items:center; white-space:nowrap;">

            <div
                :style="`transition:all 0.3s; position:absolute; z-index:1; bottom:0px; left:${borderBottomLeft}px; padding-left:${borderBottomWidth}px; border-bottom:${borderBottomSize}px solid ${useBorderBottomColor};`"
                v-if="borderBottom"
            >
            </div>

            <div
                :key="kitem"
                v-for="(item,kitem) in items"
            >

                <div
                    ref="wli"
                    :style="`${(space>0 && kitem>0)?'padding-left:'+space+'px;':''}`"
                >

                    <WListItem
                        :icon="getIcon(item)"
                        :text="getText(item)"
                        :textFontSize="itemTextFontSize"
                        :active="getActive(item)"
                        :paddingStyle="paddingStyle"
                        :borderRadius="itemBorderRadius"
                        :backgroundColor="itemBackgroundColor"
                        :backgroundColorHover="itemBackgroundColorHover"
                        :backgroundColorActive="itemBackgroundColorActive"
                        :textColor="itemTextColor"
                        :textColorHover="itemTextColorHover"
                        :textColorActive="itemTextColorActive"
                        :iconSize="itemIconSize"
                        :iconColor="itemIconColor"
                        :iconColorHover="itemIconColorHover"
                        :iconColorActive="itemIconColorActive"
                        :rippleColor="itemRippleColor"
                        @click="ckItem(item)"
                    >

                        <template
                            v-slot="props"
                        >
                            <slot
                                name="item"
                                :item="{ind:kitem,...item,...props}"
                            >
                            </slot>
                        </template>

                    </WListItem>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import get from 'lodash/get'
import size from 'lodash/size'
import each from 'lodash/each'
import every from 'lodash/every'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import isobj from 'wsemi/src/isobj.mjs'
import domResize from '../js/domResize.mjs'
import color2hex from '../js/vuetifyColor.mjs'
import WListItem from './WListItem.vue'


/**
 * @vue-prop {Array} [items=[]] 輸入項目的字串陣列或物件陣列，預設[]
 * @vue-prop {Boolean} [useActive=false] 輸入項目是否使用點擊成為活耀狀態，預設false
 * @vue-prop {String|Object} [itemActive=null] 輸入活耀項目物件，預設null
 * @vue-prop {String} [itemTextFontSize='1rem'] 輸入文字字型大小字串，預設'1rem'
 * @vue-prop {String} [keyText='text'] 輸入項目為物件時，存放顯示文字之欄位字串，預設'text'
 * @vue-prop {String} [keyIcon='icon'] 輸入項目為物件時，存放圖標之欄位字串，預設'icon'
 * @vue-prop {Number} [space=0] 輸入項目之間間隔數字，單位px，預設0
 * @vue-prop {Object} [paddingStyle={v:10,h:12}] 輸入內寬距離設定物件，可用鍵值為v、h、left、right、top、bottom，v代表同時設定top與bottom，h代表設定left與right，若有重複設定時後面鍵值會覆蓋前面，各鍵值為寬度數字，單位為px，預設{v:10,h:12}
 * @vue-prop {Number} [itemBorderRadius=0] 輸入框圓角度數字，單位為px，預設0
 * @vue-prop {String} [itemBackgroundColor='white'] 輸入背景顏色字串，預設'white'
 * @vue-prop {String} [itemBackgroundColorHover='rgba(200,200,200,0.2)'] 輸入滑鼠移入時背景顏色字串，預設'rgba(200,200,200,0.2)'
 * @vue-prop {String} [itemBackgroundColorActive='white'] 輸入主動模式時背景顏色字串，預設'white'
 * @vue-prop {String} [itemTextColor='#444'] 輸入文字顏色字串，預設'#444'
 * @vue-prop {String} [itemTextColorHover='#222'] 輸入滑鼠移入時文字顏色字串，預設'#222'
 * @vue-prop {String} [itemTextColorActive='orange darken-3'] 輸入主動模式時文字顏色字串，預設'orange darken-3'
 * @vue-prop {Number} [itemIconSize=22] 輸入左側圖標之尺寸數字，單位px，預設22
 * @vue-prop {String} [itemIconColor='#444'] 輸入圖標顏色字串，預設'#444'
 * @vue-prop {String} [itemIconColorHover='#222'] 輸入滑鼠移入時圖標顏色字串，預設'#222'
 * @vue-prop {String} [itemIconColorActive='orange darken-3'] 輸入主動模式時圖標顏色字串，預設'orange darken-3'
 * @vue-prop {String} [itemRippleColor='rgba(245,124,0,0.4)'] 輸入ripple效果顏色字串，預設'rgba(245,124,0,0.4)'
 * @vue-prop {Boolean} [borderBottom=true] 輸入主動模式時是否於項目底部顯示高亮線條，預設true
 * @vue-prop {Number} [borderBottomSize=2] 輸入底部高亮線條尺寸(高度)數字，單位px，預設2
 * @vue-prop {String} [borderBottomColor='rgba(245,124,0,0.8)'] 輸入底部高亮線條顏色字串，預設'rgba(245,124,0,0.8)'
 */
export default {
    directives: {
        domresize: domResize(),
    },
    components: {
        WListItem,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        useActive: {
            type: Boolean,
            default: true,
        },
        itemActive: {
            type: [String, Object],
            default: null,
        },
        itemTextFontSize: {
            type: String,
            default: '1rem',
        },
        keyText: {
            type: String,
            default: 'text',
        },
        keyIcon: {
            type: String,
            default: 'icon',
        },
        space: {
            type: Number,
            default: 0,
        },
        paddingStyle: {
            type: Object,
            default: () => {
                return {
                    v: 10,
                    h: 12,
                }
            },
        },
        itemBorderRadius: {
            type: Number,
            default: 0,
        },
        itemBackgroundColor: {
            type: String,
            default: 'transparent',
        },
        itemBackgroundColorHover: {
            type: String,
            default: 'rgba(200,200,200,0.2)',
        },
        itemBackgroundColorActive: {
            type: String,
            default: 'white',
        },
        itemTextColor: {
            type: String,
            default: '#444',
        },
        itemTextColorHover: {
            type: String,
            default: '#222',
        },
        itemTextColorActive: {
            type: String,
            default: 'orange darken-3',
        },
        itemIconSize: {
            type: Number,
            default: 22,
        },
        itemIconColor: {
            type: String,
            default: '#444',
        },
        itemIconColorHover: {
            type: String,
            default: '#222',
        },
        itemIconColorActive: {
            type: String,
            default: 'orange darken-3',
        },
        itemRippleColor: {
            type: String,
            default: 'rgba(245,124,0,0.4)',
        },
        borderBottom: {
            type: Boolean,
            default: true,
        },
        borderBottomSize: {
            type: Number,
            default: 2,
        },
        borderBottomColor: {
            type: String,
            default: 'rgba(245,124,0,0.8)',
        },
    },
    data: function() {
        return {

            borderBottomLeft: 0,
            borderBottomWidth: 0,

            itemActiveTrans: null,

        }
    },
    watch: {

        itemActiveTrans: {
            handler(newValue, oldValue) {
                // console.log('watch itemActiveTrans', newValue, oldValue)

                let vo = this

                //updateBorderBottom
                vo.updateBorderBottom()

            },
            immediate: true,
        },

    },
    computed: {

        changeItemActive: function() {
            let vo = this
            if (vo.useActive) {
                vo.itemActiveTrans = vo.itemActive
            }
            return ''
        },

        isObjValue: function() {
            //console.log('computed isObjValue')

            let vo = this

            //check, 因every([])=true
            if (size(vo.items) === 0) {
                return false
            }
            return every(vo.items, (v) => {
                return isobj(v)
            })
        },

        useBorderBottomColor: function() {
            let vo = this
            return color2hex(vo.borderBottomColor)
        },

    },
    methods: {

        resize: function(msg) {
            // console.log('methods resize', msg)

            let vo = this

            //updateBorderBottom
            vo.updateBorderBottom()

        },

        getIcon: function(item) {
            let vo = this
            if (vo.isObjValue) {
                return get(item, vo.keyIcon, '')
            }
            return ''
        },

        getText: function(item) {
            let vo = this
            if (vo.isObjValue) {
                let t = get(item, vo.keyText, '')
                return t
            }
            return item
        },

        getActive: function(item) {
            let vo = this
            let b = false
            if (vo.useActive) {
                b = isEqual(item, vo.itemActiveTrans)
            }
            return b
        },

        updateBorderBottom: function() {
            // console.log('methods updateBorderBottom')

            let vo = this

            //check
            if (vo.itemActiveTrans == null) {
                return
            }

            //locs
            let x = 0
            let locs = []
            let comps = get(vo, '$refs.wli', [])
            each(comps, (comp, kcomp) => {

                //ele
                // let ele = get(comp, '$el')
                let ele = comp

                //w, h
                let w = get(ele, 'clientWidth', 0)
                let h = get(ele, 'clientHeight', 0)
                // console.log(ele, w, h)

                //left, width, heiht
                let left = x
                let width = w
                let heiht = h

                //modify by space
                if (kcomp > 0 && vo.space > 0) {
                    left += vo.space
                    width -= vo.space
                }

                //push
                locs.push({
                    left,
                    bottom: 0,
                    width,
                    heiht,
                })

                x += w
            })
            // console.log('locs', locs)

            //ind
            let ind = -1
            each(vo.items, (item, kitem) => {
                if (isEqual(item, vo.itemActiveTrans)) {
                    ind = kitem
                    return false //跳出
                }
            })
            // console.log('ind', ind)

            //check
            if (ind === -1) {
                return
            }

            //loc
            let loc = locs[ind]

            //update
            vo.borderBottomLeft = loc.left
            vo.borderBottomWidth = loc.width

        },

        ckItem: function(item) {
            // console.log('methods ckItem', item)

            let vo = this

            //save itemActiveTrans
            vo.itemActiveTrans = item

            //nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click', cloneDeep(item))

                //emit
                vo.$emit('update:itemActive', cloneDeep(item))

            })

        },

    }
}
</script>

<style scoped>
</style>
