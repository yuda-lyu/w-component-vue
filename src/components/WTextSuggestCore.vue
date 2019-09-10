<template>
    <div :changeParam="changeParam">

        <el-autocomplete
            style="margin:0px; padding:0px; width:100%; height:28px;"
            placeholder=""
            :readonly="!editable"
            :value="value_trans"
            :fetch-suggestions="ch_search"
            @input="function(v){$emit('input', v)}"
        ></el-autocomplete>

    </div>
</template>

<script>
import map from 'lodash/map'
import cstr from 'wsemi/src/cstr.mjs'
import Autocomplete from 'element-ui/lib/autocomplete'
import 'element-ui/lib/theme-chalk/autocomplete.css'

/**
 * @vue-prop {Array} [items=[]] 輸入可選(建議)項目陣列，預設[]
 * @vue-prop {Object|String|Number} [value=null] 輸入目前選擇項目，可為物件、字串、數字，預設null
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        'el-autocomplete': Autocomplete,
    },
    props: {
        items: {
            type: Array,
        },
        value: {
            type: [Object, String, Number],
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            items_trans: [],
            value_trans: {},
        }
    },
    mounted: function() {
    },
    computed: {

        changeParam: function () {
            //console.log('computed changeParam')

            let vo = this

            //items_trans
            vo.items_trans = map(vo.items, function(v) {
                let value
                if (v.text) {
                    value = v.text
                }
                else {
                    value = cstr(v)
                }
                return {
                    value: value,
                    data: v,
                }
            })

            //value_trans
            if (vo.value.text) {
                vo.value_trans = vo.value.text
            }
            else {
                vo.value_trans = cstr(vo.value)
            }

            return ''
        },

    },
    methods: {

        ch_search: function (search, cb) {
            //console.log('methods ch_search', search)

            let vo = this

            //rs
            let rs = vo.items_trans.filter(function (v) {
                return v.value.indexOf(search) >= 0
            })

            //callback
            cb(rs)

        },

    },
}
</script>

<style scoped>
::v-deep input {
    font-size: 1rem;
    border: 0px;
    outline: none;
    padding: 0px;
    color: inherit;
}
::v-deep .el-input__inner {
    background-color: transparent !important;
    height: 28px;
    line-height: 28px; /* for ie11 */
}
</style>
