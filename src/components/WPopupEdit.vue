<template>
    <w-popup
        :isolated="true"
        @show="evShow"
        @hide="evHide"
    >

        <template v-slot:trigger>
            <div ref="refValue" style="cursor:pointer;">
                <slot name="value">
                    {{value}}
                </slot>
            </div>
        </template>

        <template v-slot:content="props">
            <div style="padding:10px 5px 10px 10px; text-align:left;">

                <div>
                    <slot name="label">
                        <div style="color:#999; font-size:0.7rem;">
                            {{label}}
                        </div>
                    </slot>
                </div>

                <div>
                    <div style="display:flex; align-items:center;">

                        <div style="width:100%;">
                            <slot
                                name="edit"
                                :funSave="(value)=>{ckSave(props,value)}"
                            >
                                <WText
                                    style="min-width:150px;"
                                    v-model="valueTemp"
                                    @enter="ckSave(props)"
                                    v-if="showText"
                                ></WText>
                            </slot>
                        </div>

                        <div style="margin-left:5px;">
                            <WButtonCircle
                                :icon="mdiCheckCircle"
                                :shadow="false"
                                :loadingColor="saveIconColor"
                                :iconColor="saveIconColor"
                                :iconColorHover="saveIconColor"
                                :iconColorFocus="saveIconColor"
                                :backgroundColor="'rgba(200, 200, 200, 0.1)'"
                                :backgroundColorHover="'rgba(200, 200, 200, 0.3)'"
                                :backgroundColorFocus="'rgba(200, 200, 200, 0.6)'"
                                :rippleColor="'rgba(200, 200, 200, 0.4)'"
                                :tooltip="saveBtnTooltip"
                                @click="ckSave(props)"
                            ></WButtonCircle>
                        </div>

                    </div>
                </div>

            </div>

        </template>
    </w-popup>
</template>

<script>
import { mdiCheckCircle } from '@mdi/js'
import WPopup from './WPopup.vue'
import WText from './WText.vue'
import WButtonCircle from './WButtonCircle.vue'


export default {
    components: {
        WPopup,
        WText,
        WButtonCircle,
    },
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        saveIconColor: {
            type: String,
            default: 'grey',
        },
        saveBtnTooltip: {
            type: String,
            default: 'save',
        },
    },
    data: function() {
        return {
            mdiCheckCircle,

            valueTemp: null,
            showText: false,

        }
    },
    computed: {

    },
    methods: {

        evShow: function () {
            // console.log('methods evShow')

            let vo = this

            //save
            vo.valueTemp = vo.value

            //delay show
            vo.$nextTick(() => {
                vo.showText = true
            })

        },

        evHide: function() {
            // console.log('methods evHide')

            let vo = this

            //hide
            vo.showText = false

        },

        ckSave: function(props, value) {
            console.log('methods ckSave', props, value)

            let vo = this

            //emit
            vo.$emit('input', vo.valueTemp)

            //clear
            vo.valueTemp = ''

            //hide popup
            props.funHide()

        },

    }
}
</script>

<style scoped>
</style>
