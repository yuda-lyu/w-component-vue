<template>
    <div style="display:inline-block;">

        <v-tooltip bottom transition="slide-y-transition" :disabled="tooltip===''">

            <template v-slot:activator="{ on }">
                <v-progress-circular
                    v-on="on"
                    :rotate="-90"
                    :size="size"
                    :width="width"
                    :color="color"
                    :value="value"
                >

                    <div style="text-align:center; transform:translateY(-2%);">
                        <div :style="{'font-size':size/5.4+'pt'}">{{value}}%</div>
                        <div :style="{'color':'#666','transform':'scale(1.15)','font-size':size/12+'pt'}">{{text}}</div>
                    </div>

                </v-progress-circular>
            </template>

            <span>{{tooltip}}</span>

        </v-tooltip>

    </div>
</template>

<script>

/**
 * @vue-prop {String} [text=''] 輸入文字字串，預設''
 * @vue-prop {Number} [value=0] 輸入數值，介於0~100之間，預設0
 * @vue-prop {String} [color='purple lighten-1'] 輸入環狀圓條顏色字串，預設'purple lighten-1'
 * @vue-prop {Number} [size=120] 輸入進度條外徑寬度，單位為px，預設120
 * @vue-prop {Number} [width=10] 輸入環狀圓條寬度，單位為px，預設10
 * @vue-prop {String} [tooltip=text] 輸入提示文字字串，預設''
 */
export default {
    props: {
        text: {
            type: String,
            default: '',
        },
        value: {
            type: Number,
            default: 0,
        },
        color: {
            type: String,
            default: 'purple lighten-1',
        },
        size: {
            type: Number,
            default: 120,
        },
        width: {
            type: Number,
            default: 10,
        },
        tooltip: {
            type: String,
            default: '',
        },
    },
    data: function() {
        return {
        }
    },
    mounted: function() {
    },
    computed: {
    },
    methods: {

        ck_btn: function () {
            //console.log('methods ck_btn')

            let vo = this

            //setTimeout
            setTimeout(function() {

                //emit
                vo.$emit('click')

            }, 1)

        },

    },
}
</script>

<style scoped>
</style>
