<template>
    <div :changeParam="changeParam">

        <v-textarea
            style="margin:0px;padding:0px;"
            auto-grow
            hide-details
            rows="1"
            :color="borderColorFocus"
            :placeholder="placeholder"
            :disabled="!editable"
            v-model="valueTrans"
            @change="changeContent"
        ></v-textarea>

    </div>
</template>

<script>

/**
 * @vue-prop {String} [value=''] 輸入文字框值，預設''
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [borderColorFocus='purple lighten-3'] 輸入邊框Focus顏色字串，預設'purple lighten-3'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        borderColorFocus: {
            type: String,
            default: 'purple lighten-3',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            valueTrans: '',
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

        changeContent: function (value) {
            //console.log('methods changeContent', value)

            let vo = this

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('input', value)

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
