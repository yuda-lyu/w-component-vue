<template>
    <div
        :style="`position:relative; display:inline-block; user-select:none; ${editable?'cursor:pointer;':''} outline:none;`"
        tabindex="0"
        @keyup.enter="emitClick"
        @click="emitClick"
    >

        <div style="display:inline-block; height:100%; display:flex; align-items:center; justify-content:center;" v-if="mode==='unchecked'">
            <span style="display:flex;">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useUncheckedColor" width="24px" height="24px" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"></path>
                </svg>
            </span>
        </div>

        <div style="display:inline-block; height:100%; display:flex; align-items:center; justify-content:center;" v-if="mode==='checked'">
            <span style="display:flex;">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useCheckedColor" width="24px" height="24px" viewBox="0 0 24 24">
                    <path v-if="false" d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
                    <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>
                </svg>
            </span>
        </div>

        <div style="display:inline-block; height:100%; display:flex; align-items:center; justify-content:center;" v-if="mode==='checkedPartially'">
            <span style="display:flex;">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :fill="useCheckedPartiallyColor" width="24px" height="24px" viewBox="0 0 24 24">
                    <path v-if="false" d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z"></path>
                    <path d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>
                </svg>
            </span>
        </div>

        <div style="position:absolute; z-index:1; left:0; top:0; bottom:0; right:0; margin:auto;">
            <div style="height:100%; display:flex; align-items:center; justify-content:center;" v-if="!editable">
                <div :style="`display:inline-block; width:30px; height:2px; border-top:2px solid #fff; transform:translateY(-1px) rotate(45deg);`"></div>
            </div>
        </div>

        <div style="position:absolute; z-index:1; left:0; top:0; bottom:0; right:0; margin:auto;">
            <div style="height:100%; display:flex; align-items:center; justify-content:center;" v-if="!editable">
                <div :style="`display:inline-block; width:30px; height:2px; border-top:2px solid ${useDisabledColor}; transform:translateY(1px)rotate(45deg);`"></div>
            </div>
        </div>

    </div>
</template>

<script>
import color2hex from '../js/vuetifyColor.mjs'


/**
 * @vue-prop {String} [mode='unchecked'] 輸入勾選模式字串，可選'unchecked'、'checked'、'checkedPartially'，預設'unchecked'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {String} [uncheckedColor='grey darken-2'] 輸入未勾選時顏色字串，預設'grey darken-2'
 * @vue-prop {String} [uncheckedDisabledColor='grey'] 輸入禁用時未勾選時顏色字串，預設'grey'
 * @vue-prop {String} [checkedColor='blue darken-3'] 輸入勾選時顏色字串，預設'blue darken-3'
 * @vue-prop {String} [checkedDisabledColor='grey'] 輸入禁用時勾選時顏色字串，預設'grey'
 * @vue-prop {String} [checkedPartiallyColor='blue darken-3'] 輸入部份勾選時(子節點任一有勾選但非全部勾選)顏色字串，預設'blue darken-3'
 * @vue-prop {String} [checkedPartiallyDisabledColor='grey'] 輸入禁用部份勾選時(子節點任一有勾選但非全部勾選)顏色字串，預設'grey'
 */
export default {
    components: {
    },
    props: {
        mode: {
            type: String,
            default: 'unchecked',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        uncheckedColor: {
            type: String,
            default: 'grey darken-2',
        },
        uncheckedDisabledColor: {
            type: String,
            default: 'grey',
        },
        checkedColor: {
            type: String,
            default: 'blue darken-3',
        },
        checkedDisabledColor: {
            type: String,
            default: 'grey',
        },
        checkedPartiallyColor: {
            type: String,
            default: 'blue darken-3',
        },
        checkedPartiallyDisabledColor: {
            type: String,
            default: 'grey',
        },
    },
    data: function() {
        return {
        }
    },
    computed: {

        useDisabledColor: function() {
            //console.log('computed useDisabledColor')

            let vo = this

            if (vo.mode === 'checked') {
                return color2hex(vo.checkedDisabledColor)
            }
            else if (vo.mode === 'unchecked') {
                return color2hex(vo.uncheckedDisabledColor)
            }
            return color2hex(vo.checkedPartiallyDisabledColor)
        },

        useUncheckedColor: function() {
            //console.log('computed useUncheckedColor')

            let vo = this

            if (vo.editable) {
                return color2hex(vo.uncheckedColor)
            }
            return color2hex(vo.uncheckedDisabledColor)
        },

        useCheckedColor: function() {
            //console.log('computed useCheckedColor')

            let vo = this

            if (vo.editable) {
                return color2hex(vo.checkedColor)
            }
            return color2hex(vo.checkedDisabledColor)
        },

        useCheckedPartiallyColor: function() {
            //console.log('computed useCheckedPartiallyColor')

            let vo = this

            if (vo.editable) {
                return color2hex(vo.checkedPartiallyColor)
            }
            return color2hex(vo.checkedPartiallyDisabledColor)
        },

    },
    methods: {

        emitClick: function(v) {
            if (!this.editable) {
                return
            }
            this.$emit('click', v)
        },

    },
}
</script>

<style scoped>
</style>

