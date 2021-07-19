<template>
    <div
        :style="`display:inline-block; ${editable?'cursor:pointer;':''}`"
        :changeParam="changeParam"
        @click="toogleValue"
    >
        <WIcon
            :icon="checkedIcon"
            :color="editable?checkedIconColor:checkedIconColorDisabled"
            :size="iconSize"
            v-if="b"
        ></WIcon>
        <WIcon
            :icon="uncheckedIcon"
            :color="editable?uncheckedIconColor:uncheckedIconColorDisabled"
            :size="iconSize"
            v-else
        ></WIcon>
    </div>
</template>

<script>
import { mdiCheckboxMarked, mdiCheckboxBlankOutline } from '@mdi/js/mdi.js'
import isbol from 'wsemi/src/isbol.mjs'
import WIcon from './WIcon.vue'


/**
 * @vue-prop {Boolean|String} [value=false] 輸入是否狀態的布林值或字串，可接受true或false，或是'y'或'n'，預設false
 * @vue-prop {Number} [iconSize=24] 輸入圖標大小，單位為px，預設24
 * @vue-prop {String} [checkedIcon=mdiCheckboxMarked] 輸入有效(true|'y')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxMarked
 * @vue-prop {String} [checkedIconColor='blue darken-3'] 輸入可編輯時，有效(true|'y')圖標顏色字串，預設'blue darken-3'
 * @@vue-prop {String} [checkedIconColorDisabled='grey'] 輸入不可編輯時，有效(true|'y')圖標顏色字串，預設'grey'
 * @vue-prop {String} [uncheckedIcon=mdiCheckboxBlankOutline] 輸入無效(false|'n')圖標字串，可為mdi,md,fa代號或mdi/js路徑，預設mdiCheckboxBlankOutline
 * @vue-prop {String} [uncheckedIconColor='blue darken-3'] 輸入可編輯時，無效(false|'n')圖標顏色字串，預設'blue darken-3'
 * @@vue-prop {String} [uncheckedIconColorDisabled='grey'] 輸入不可編輯時，無效(false|'n')圖標顏色字串，預設'grey'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon,
    },
    props: {
        value: {
            type: [Boolean, String],
            default: false,
        },
        iconSize: {
            type: Number,
            default: 24,
        },
        checkedIcon: {
            type: String,
            default: mdiCheckboxMarked,
        },
        checkedIconColor: {
            type: String,
            default: 'blue darken-3',
        },
        checkedIconColorDisabled: {
            type: String,
            default: 'grey',
        },
        uncheckedIcon: {
            type: String,
            default: mdiCheckboxBlankOutline,
        },
        uncheckedIconColor: {
            type: String,
            default: 'blue darken-3',
        },
        uncheckedIconColorDisabled: {
            type: String,
            default: 'grey',
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

        toogleValue: function () {
            //console.log('methods toogleValue')

            let vo = this

            //check
            if (!vo.editable) {
                return
            }

            //toogle
            let b = vo.b
            b = !b

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

            //nextTick
            vo.$nextTick(() => {

                //emit
                vo.$emit('input', value)

            })

        },

    }
}
</script>

<style scoped>
</style>
