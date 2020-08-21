<template>
    <div style="display:inline-block;" :changeParam="changeParam">

        <v-switch
            style="margin:0px; padding:0px;"
            hide-details
            :label="text"
            :color="color"
            :disabled="!editable"
            v-model="b"
            @change="ch_boolean"
        ></v-switch>

    </div>
</template>

<script>
import isbol from 'wsemi/src/isbol.mjs'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {String|Boolean} [value='no'] 輸入是否狀態的字串或布林值，可接受'yes'或'no'，或是true或false，預設'no'
 * @vue-prop {String} [color='pink accent-3'] 輸入切換開關開啟狀態(yes或true)的顏色字串，預設'pink accent-3'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    props: {
        text: {
            type: String,
            default: '',
        },
        value: {
            type: [String, Boolean],
            default: 'no',
        },
        color: {
            type: String,
            default: 'pink accent-3',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            b: null,
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //value for trigger
            let value = vo.value

            //b
            if (isbol(value)) {
                vo.b = value
            }
            else {
                vo.b = (value === 'yes')
            }

            return ''
        },

    },
    methods: {

        ch_boolean: function (b) {
            //console.log('methods ch_boolean', b)

            let vo = this

            //value
            let value = null
            if (isbol(vo.value)) {
                value = false
                if (b) { //傳入為true與null
                    value = true
                }
            }
            else {
                value = 'no'
                if (b) { //傳入為true與null
                    value = 'yes'
                }
            }

            //$nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('input', value)

            })

        },

    },
}
</script>

<style scoped>
</style>
