<template>
    <div>


        <div class="head1">w-text-int</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'buttonColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :buttonColorFocus="'pink accent-2'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'buttonColor & buttonColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :buttonColor="'cyan accent-4'"
                    :buttonColorFocus="'cyan accent-3'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int :borderRadius="5" v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'width'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int :width="100" v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int :editable="false" v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & buttonColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :buttonColorFocus="'pink accent-2'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & buttonColor & buttonColorFocus & borderColor & borderColorFocus & backgroundColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'cyan lighten-1'"
                    :borderColorFocus="'cyan darken-1'"
                    :backgroundColorFocus="'cyan lighten-5'"
                    :buttonColor="'cyan lighten-1'"
                    :buttonColorFocus="'cyan darken-1'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :borderRadius="5"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & width'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :width="100"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :editable="false"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiCart } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTextInt from './components/WTextInt.vue'


export default {
    components: {
        demolink,
        WTextInt,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
    },
    data: function() {
        return {
            mdiCart,
            'WTextInt': {
                'int': 123
            },
            'actions': [
                {
                    'mode': 'eletype',
                    'selector': 'input.basic',
                    'str': 'a'
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div[ShellMaterial="rightIcon"]',
                    'nth': -1,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div[ShellMaterial="rightIcon"]',
                    'nth': -1,
                },
                {
                    'mode': 'eleclick',
                    'selector': 'div[ShellMaterial="leftIcon"]',
                    'nth': -1,
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>
