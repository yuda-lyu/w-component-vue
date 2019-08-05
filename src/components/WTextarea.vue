<template>
    <div :ch_param="ch_param">

        <v-textarea
            style="margin:0px;padding:0px;"
            auto-grow
            hide-details
            rows="1"
            :color="borderColorHover"
            :placeholder="placeholder"
            :disabled="!editable"
            v-model="value_trans"
            @change="ch_content"
        ></v-textarea>

    </div>
</template>

<script>

/**
 * @vue-prop {String} [value=''] 輸入文字框值，預設''
 * @vue-prop {String} [placeholder=''] 輸入無文字時的替代字符字串，預設''
 * @vue-prop {String} [borderColorHover='purple lighten-3'] 輸入邊框Hover顏色字串，預設'purple lighten-3'
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
        borderColorHover: {
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
            value_trans: '',
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

        ch_content: function (value) {
            //console.log('methods ch_content', value)

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
