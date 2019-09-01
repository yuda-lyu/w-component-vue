<template>
    <div style="display:inline-block;" v-bind:ch_param="ch_param">

        <template v-for="(item,kitem) in value_trans">

            <v-chip
                class="v-chpi-modify"
                small
                :text-color="textColor"
                :color="backgroundColor"
                :close="editable"
                :close-icon="mdiCloseCircle"
                @click="ck_chip(item)"
                @click:close="ck_remove(item)"
                :key="kitem"
            >

                {{item}}

            </v-chip>

        </template>

        <template v-if="value_trans.length===0">

            <v-chip
                class="v-chpi-modify"
                small
                :text-color="textColor"
                :color="backgroundColor"
            >
                {{nodata}}
            </v-chip>

        </template>

        <div style="display:inline-block; width:10px;" v-if="editable"></div>

        <div style="display:inline-block; width:150px; vertical-align:middle;" v-if="editable">
            <w-text
                :borderShadow="false"
                :rightIcon="mdiPlusCircle"
                :rightIconColor="inputTextBorderAndButtonColor"
                :rightIconColorHover="inputTextBorderAndButtonColorHover"
                :rightIconTooltip="iconTooltip"
                :borderColor="inputTextBorderAndButtonColor"
                :borderColorHover="inputTextBorderAndButtonColorHover"
                @clickright="ck_add"
                @enter="ck_add"
                v-model="userinput"
            ></w-text>
        </div>

    </div>
</template>

<script>
import { mdiCloseCircle, mdiPlusCircle } from '@mdi/js'
import trim from 'lodash/trim'
import WText from './WText.vue'

/**
 * @vue-prop {Array} value 輸入字串陣列
 * @vue-prop {String} [textColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [backgroundColor='grey lighten-3'] 輸入背景顏色字串，預設'grey lighten-3'
 * @vue-prop {String} [inputTextBorderAndButtonColor='grey lighten-1'] 輸入輸入框未選時文字顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextBorderAndButtonColorHover='grey darken-1'] 輸入輸入框有駐點時文字顏色字串，預設'grey darken-1'
 * @vue-prop {String} [iconTooltip='新增'] 輸入輸入框右側按鈕提示文字字串，預設'新增'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 * @vue-prop {String} [nodata='無'] 輸入無任何字串陣列時的預設文字字串，預設'無'
 */
export default {
    components: {
        WText
    },
    props: {
        value: {
            type: Array,
        },
        textColor: {
            type: String,
            default: 'grey darken-2',
        },
        backgroundColor: {
            type: String,
            default: 'grey lighten-3',
        },
        inputTextBorderAndButtonColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextBorderAndButtonColorHover: {
            type: String,
            default: 'grey darken-1',
        },
        iconTooltip: {
            type: String,
            default: '新增',
        },
        editable: {
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
            mdiPlusCircle,
            value_trans: [],
            userinput: '',
        }
    },
    mounted: function() {
    },
    computed: {

        ch_param: function () {
            //console.log('computed ch_param')

            let vo = this

            //value_trans
            vo.value_trans = vo.value

            return ''
        },

    },
    methods: {

        ck_chip: function(item) {
            //console.log('methods ck_chip', item)

            let vo = this

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('click', item)

            }, 1)

        },

        ck_add: function () {
            //console.log('methods ck_add')

            let vo = this

            //check
            if (trim(vo.userinput) === '') {
                return
            }

            //setTimeout
            setTimeout(function() {

                //push
                vo.value_trans.push(trim(vo.userinput))

                //emit
                vo.$emit('input', vo.value_trans)

                //clear
                vo.userinput = ''

            }, 1)

        },

        pull: function(ar, item) {
            let i = ar.indexOf(item)
            ar.splice(i, 1)
            return ar
        },

        ck_remove: function (item) {
            //console.log('methods ck_remove', cp)

            let vo = this

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('input', vo.pull(vo.value_trans, item))

            }, 1)

        },

    },
}
</script>

<style scoped>
.v-size--small {
    font-size: 14px;
}
.v-chpi-modify {
    vertical-align: middle;
    margin: 10px 10px 10px 0px;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
