<template>
    <div :changeParam="changeParam">

        <template v-for="(item,kitem) in valueTrans">

            <v-chip
                :class="`v-chpi-modify ${outlined?'':'shadow'}`"
                small
                :text-color="textColor"
                :color="backgroundColor"
                :close="editable"
                :close-icon="mdiCloseCircle"
                :outlined="outlined"
                @click="clickChip(item)"
                @click:close="clickRemoveBtn(item)"
                :key="kitem"
            >

                <v-icon
                    small
                    left
                    :color="iconColor"
                    v-if="icon!==''"
                >{{icon}}</v-icon>

                <span style="font-size:0.875rem;">{{item}}</span>

            </v-chip>

        </template>

        <template v-if="valueTrans.length===0">

            <v-chip
                :class="`v-chpi-modify ${outlined?'':'shadow'}`"
                small
                :text-color="textColor"
                :color="backgroundColor"
                :outlined="outlined"
            >

                <v-icon
                    small
                    left
                    :color="iconColor"
                    v-if="icon!==''"
                >{{icon}}</v-icon>

                <span style="font-size:0.875rem;">{{nodata}}</span>

            </v-chip>

        </template>

        <div style="display:inline-block; width:10px;" v-if="editable"></div>

        <div style="display:inline-block; width:150px; vertical-align:middle;" v-if="editable">
            <w-text
                :textColor="inputTextColor"
                :borderShadow="false"
                :rightIcon="mdiPlusCircle"
                :rightIconColor="inputTextButtonColor"
                :rightIconColorFocus="inputTextButtonColorFocus"
                :rightIconTooltip="inputIconTooltip"
                :backgroundColor="inputTextBackgroundColor"
                :backgroundColorFocus="inputTextBackgroundColorFocus"
                :borderColor="inputTextBorderColor"
                :borderColorFocus="inputTextBorderColorFocus"
                @click-right="clickAddBtn"
                @enter="clickAddBtn"
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
 * @vue-prop {Boolean} [outlined=false] 輸入是否顯示為邊框模式布林值，詳見vuetify的chip設定，預設false
 * @vue-prop {String} [textColor='grey darken-2'] 輸入文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [backgroundColor='grey lighten-3'] 輸入背景顏色字串，預設'grey lighten-3'
 * @vue-prop {String} [icon=''] 輸入左側圖標字串，預設''
 * @vue-prop {String} [iconColor='grey darken-2'] 輸入左側圖標顏色字串，預設'grey darken-2'
 * @vue-prop {String} [inputTextColor='black'] 輸入文字顏色字串，預設'black'
 * @vue-prop {String} [inputTextBackgroundColor='white'] 輸入輸入框背景顏色字串，預設'white'
 * @vue-prop {String} [inputTextBackgroundColorFocus='grey lighten-5'] 輸入輸入框背景Focus顏色字串，預設'grey lighten-5'
 * @vue-prop {String} [inputTextBorderColor='grey lighten-1'] 輸入輸入框未Focus時邊框顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextBorderColorFocus='grey darken-1'] 輸入輸入框Focus時文字邊框字串，預設'grey darken-1'
 * @vue-prop {String} [inputTextButtonColor='grey lighten-1'] 輸入輸入框未Focus時按鈕顏色字串，預設'grey lighten-1'
 * @vue-prop {String} [inputTextButtonColorFocus='grey'] 輸入輸入框Focus時按鈕顏色字串，預設'grey'
 * @vue-prop {String} [inputIconTooltip='新增'] 輸入輸入框右側按鈕提示文字字串，預設'新增'
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
        outlined: {
            type: Boolean,
            default: false,
        },
        textColor: {
            type: String,
            default: 'grey darken-2',
        },
        backgroundColor: {
            type: String,
            default: 'grey lighten-3',
        },
        icon: {
            type: String,
            default: '',
        },
        iconColor: {
            type: String,
            default: 'grey darken-2',
        },
        inputTextColor: {
            type: String,
            default: 'black',
        },
        inputTextBackgroundColor: {
            type: String,
            default: 'white',
        },
        inputTextBackgroundColorFocus: {
            type: String,
            default: 'grey lighten-5',
        },
        inputTextBorderColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextBorderColorFocus: {
            type: String,
            default: 'grey',
        },
        inputTextButtonColor: {
            type: String,
            default: 'grey lighten-1',
        },
        inputTextButtonColorFocus: {
            type: String,
            default: 'grey',
        },
        inputIconTooltip: {
            type: String,
            default: 'Add',
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
            valueTrans: [],
            userinput: '',
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //valueTrans
            vo.valueTrans = vo.value

            return ''
        },

    },
    methods: {

        clickChip: function(item) {
            //console.log('methods clickChip', item)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('click', item)

            }, 1)

        },

        clickAddBtn: function () {
            //console.log('methods clickAddBtn')

            let vo = this

            //check
            if (trim(vo.userinput) === '') {
                return
            }

            //setTimeout
            setTimeout(() => {

                //push
                vo.valueTrans.push(trim(vo.userinput))

                //emit
                vo.$emit('input', vo.valueTrans)

                //clear
                vo.userinput = ''

            }, 1)

        },

        pull: function(ar, item) {
            let i = ar.indexOf(item)
            ar.splice(i, 1)
            return ar
        },

        clickRemoveBtn: function (item) {
            //console.log('methods clickRemoveBtn', cp)

            let vo = this

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('input', vo.pull(vo.valueTrans, item))

            }, 1)

        },

    },
}
</script>

<style scoped>
.v-chpi-modify {
    vertical-align: middle;
    margin: 10px 10px 10px 0px;
}
.shadow {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
