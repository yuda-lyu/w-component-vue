<template>
    <div :style="{'opacity':editable?1:0.65}">

        <template v-for="(item,kitem) in items">

            <v-chip
                class="v-chpi-modify"
                small
                :text-color="getTextColor(item)"
                :color="getBgColor(item)"
                @click="toggleState(item)"
                :key="kitem"
            >

                <div style="margin-left:-9px; margin-right:9px;" v-if="getSelected(item)">
                    <w-icon
                        :icon="mdiCheckCircle"
                        :color="iconColor"
                        :size="20"
                    ></w-icon>
                </div>

                <div style="height:24px; line-height:24px; font-size:0.875rem;">{{item}}</div>

            </v-chip>

        </template>

    </div>
</template>

<script>
import { mdiCheckCircle } from '@mdi/js'
import WIcon from './WIcon.vue'

/**
 * @vue-prop {Array} items 輸入全部可選字串陣列
 * @vue-prop {String} value 輸入單選字串
 * @vue-prop {String} [textColor='white'] 輸入已選項目之文字顏色字串，預設'white'
 * @vue-prop {String} [backgroundColor='purple lighten-1'] 輸入已選項目之文字背景顏色字串，預設'purple lighten-1'
 * @vue-prop {String} [iconColor='white'] 輸入已選項目之文字背景顏色字串，預設'white'
 * @vue-prop {String} [textcolorInactive='grey darken-2'] 輸入未選項目之文字顏色字串，預設'grey darken-2'
 * @vue-prop {String} [bgcolorInactive='grey lighten-5'] 輸入未選項目之文字背景顏色字串，預設'grey lighten-5'
 * @vue-prop {Boolean} [editable=true] 輸入是否為編輯模式，預設true
 */
export default {
    components: {
        WIcon
    },
    props: {
        items: {
            type: Array,
        },
        value: {
            type: String,
        },
        textColor: {
            type: String,
            default: 'white',
        },
        backgroundColor: {
            type: String,
            default: 'purple lighten-1',
        },
        iconColor: {
            type: String,
            default: 'white',
        },
        textcolorInactive: {
            type: String,
            default: 'grey darken-2',
        },
        bgcolorInactive: {
            type: String,
            default: 'grey lighten-5',
        },
        editable: {
            type: Boolean,
            default: true,
        },
    },
    data: function() {
        return {
            mdiCheckCircle,
        }
    },
    mounted: function() {
    },
    computed: {
    },
    methods: {

        getSelected: function(item) {
            return this.value === item
        },

        getBgColor: function(item) {
            if (this.getSelected(item)) {
                return this.backgroundColor
            }
            return this.bgcolorInactive
        },

        getTextColor: function(item) {
            if (this.getSelected(item)) {
                return this.textColor
            }
            return this.textcolorInactive
        },

        pull: function(ar, item) {
            let i = ar.indexOf(item)
            ar.splice(i, 1)
            return ar
        },

        toggleState: function(item) {
            //console.log('methods toggleState', item)

            let vo = this

            if (vo.editable === false) {
                return
            }

            //setTimeout
            setTimeout(() => {

                //emit
                vo.$emit('input', item)

            }, 1)

        },

    },
}
</script>

<style scoped>
.v-chpi-modify {
    vertical-align: middle;
    margin:10px 10px 10px 0px;
    box-shadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
