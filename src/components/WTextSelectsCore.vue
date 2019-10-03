<template>
    <div class="CSSTextSelectsCore" :changeParam="changeParam">

        <div style="margin:-6px -18px -6px -12px;">

            <v-autocomplete
                style="margin:0px; padding:0px;"
                single-line
                hide-no-data
                hide-details
                dense
                solo
                flat
                cache-items
                background-color="transparent"
                item-text="text"
                item-value="value"
                return-object
                :append-icon="mdiMenuDown"
                :readonly="!editable"
                :items="items"
                :value="value_trans"
                @input="changeContent"
                @focus="$emit('update:focused', true)"
                @blur="$emit('update:focused', false)"
            ></v-autocomplete>

        </div>

    </div>
</template>

<script>
import { mdiMenuDown } from '@mdi/js'

/**
 * @vue-prop {Array} [items=[]] 輸入可選項目陣列，預設[]
 * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        value: {
            type: [Object, String, Number],
            default: null,
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mdiMenuDown,
            value_trans: {},
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //value_trans
            vo.value_trans = vo.value

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
::v-deep div {
    cursor: pointer;
}
::v-deep input {
    cursor: pointer;
    font-size: 1rem;
    color: inherit;
    line-height: inherit;
    max-height: inherit; /* for ie11 */
}
::v-deep .v-text-field input {
    line-height: inherit;
}
</style>
