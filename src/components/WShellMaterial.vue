<template>
    <div
        :changeParam="changeParam"
        class="group"
        :style="[usePadding,{'opacity':editable?1:0.6}]"
    >

        <div
            style="user-select:none; cursor:pointer; outline:none;"
            tabindex="0"
            @keyup.enter="clickIcon('left')"
            @click="clickIcon('left')"
            v-if="leftIcon"
        >

            <v-tooltip bottom transition="slide-y-transition" :disabled="leftIconTooltip===''">

                <template v-slot:activator="{ on: ttShellMaterialLeft }">
                    <div ShellMaterial="leftIcon" v-on="{...ttShellMaterialLeft}">
                        <w-icon
                            :icon="leftIcon"
                            :color="focusedTrans?leftIconColorFocus:leftIconColor"
                        ></w-icon>
                    </div>
                </template>

                <span>{{leftIconTooltip}}</span>

            </v-tooltip>

        </div>

        <div style="width:100%;">

            <div :style="[{'position':'relative'},usePaddingSlot]">

                <div :style="[{'position':'absolute','top':'0px','transform': 'translateY(-120%)','font-size':'0.9rem','white-space':'nowrap','opacity':0.7},useTitleColor]">
                    {{title}}
                </div>

                <slot></slot>

            </div>

        </div>

        <div
            style="user-select:none; cursor:pointer; outline:none;"
            tabindex="0"
            @keyup.enter="clickIcon('right')"
            @click="clickIcon('right')"
            v-if="rightIcon"
        >

            <v-tooltip bottom transition="slide-y-transition" :disabled="rightIconTooltip===''">

                <template v-slot:activator="{ on: ttShellMaterialRight }">
                    <div ShellMaterial="rightIcon" v-on="{...ttShellMaterialRight}">
                        <w-icon
                            :icon="rightIcon"
                            :color="focusedTrans?rightIconColorFocus:rightIconColor"
                        ></w-icon>
                    </div>
                </template>

                <span>{{rightIconTooltip}}</span>

            </v-tooltip>

        </div>

    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {String} [title=''] 輸入標題字串，預設''
 * @vue-prop {String} [titleColor='deep-orange darken-1'] 輸入標題顏色字串，預設'deep-orange darken-1'
 * @vue-prop {String} [leftIcon=''] 輸入左側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [leftIconColor='deep-orange lighten-2'] 輸入左側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [leftIconColorFocus='deep-orange lighten-1'] 輸入左側圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [leftIconTooltip=''] 輸入左側圖標提示文字字串，預設''
 * @vue-prop {String} [rightIcon=''] 輸入右側圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設''
 * @vue-prop {String} [rightIconColor='deep-orange lighten-2'] 輸入右側圖標顏色字串，預設'deep-orange lighten-2'
 * @vue-prop {String} [rightIconColorFocus='deep-orange lighten-1'] 輸入右側圖標Focus顏色字串，預設'deep-orange lighten-1'
 * @vue-prop {String} [rightIconTooltip=''] 輸入右側圖標提示文字字串，預設''
 * @vue-prop {Boolean} [small=true] 輸入是否為小型模式，預設true
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {Boolean} [focused=false] 輸入是否為駐點狀態，預設false
 */
export default {
    components: {
        WIcon,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        titleColor: {
            type: String,
            default: 'deep-orange darken-1',
        },
        leftIcon: {
            type: String,
            default: '',
        },
        leftIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        leftIconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        leftIconTooltip: {
            type: String,
            default: '',
        },
        rightIcon: {
            type: String,
            default: '',
        },
        rightIconColor: {
            type: String,
            default: 'deep-orange lighten-2',
        },
        rightIconColorFocus: {
            type: String,
            default: 'deep-orange lighten-1',
        },
        rightIconTooltip: {
            type: String,
            default: '',
        },
        small: {
            type: Boolean,
            default: true,
        },
        editable: {
            type: Boolean,
            default: true,
        },
        focused: {
            type: Boolean,
            default: false,
        },
    },
    data: function() {
        return {
            focusedTrans: false,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //focusedTrans
            vo.focusedTrans = vo.focused

            return ''
        },

        useTitleColor: function() {
            //console.log('computed useTitleColor')

            let vo = this

            let s = {}
            s['color'] = color2hex(vo.titleColor)
            return s
        },

        usePadding: function() {
            //console.log('computed usePadding')

            let vo = this

            let s = {}
            if (vo.small) {
                s['padding'] = '0px'
            }
            else {
                s['padding'] = '3px 6px'
            }
            return s
        },

        usePaddingSlot: function() {
            //console.log('computed usePaddingSlot')

            let vo = this

            let s = {}
            s['padding-top'] = '0px'
            s['padding-bottom'] = '0px'
            s['padding-left'] = '0px'
            s['padding-right'] = '0px'
            if (vo.leftIcon !== '') {
                s['padding-left'] = '10px'
            }
            if (vo.rightIcon !== '') {
                s['padding-right'] = '10px'
            }
            return s
        },

    },
    methods: {

        clickIcon: function (mode) {
            //console.log('methods clickIcon', mode)

            let vo = this

            if (vo.editable === false) {
                return
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('click-' + mode)

            })

        },

    },
}
</script>

<style scoped>
.group {
    transition: all 0.3s;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>
