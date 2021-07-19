<template>
    <div
        style="display:inline-block;"
        :changeParam="changeParam"
    >

        <v-switch
            style="margin:0px; padding:0px;"
            hide-details
            :label="text"
            :color="color"
            :disabled="!editable"
            v-model="b"
            @change="toogleValue"
        ></v-switch>

    </div>
</template>

<script>
import isbol from 'wsemi/src/isbol.mjs'


/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {Boolean|String} [value=false] 輸入是否狀態的布林值或字串，可接受true或false，或是'y'或'n'，預設false
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
            type: [Boolean, String],
            default: false,
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
            b: false,
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
                vo.b = (value === 'y')
            }

            return ''
        },

    },
    methods: {

        toogleValue: function (b) {
            //console.log('methods toogleValue', b)

            let vo = this

            //value
            let value = null
            if (isbol(vo.value)) {
                value = false
                if (b) {
                    value = true
                }
            }
            else {
                value = 'n'
                if (b) {
                    value = 'y'
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
