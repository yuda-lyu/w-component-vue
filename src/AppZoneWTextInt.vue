<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-text-int</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'default'"
                ></demolink>

                <w-text-int v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'textFontSize'"
                ></demolink>

                <w-text-int
                    :textFontSize="'0.85rem'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'textColor'"
                ></demolink>

                <w-text-int
                    :textColor="'#f26'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'buttonIconSize'"
                ></demolink>

                <w-text-int
                    :buttonIconSize="20"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'buttonColor & buttonColorHover & buttonColorFocus'"
                ></demolink>

                <w-text-int
                    :buttonColor="'orange lighten-1'"
                    :buttonColorHover="'orange accent-3'"
                    :buttonColorFocus="'orange darken-2'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-text-int :borderRadius="5" v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'width'"
                ></demolink>

                <w-text-int :width="100" v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'not editable'"
                ></demolink>

                <w-text-int :editable="false" v-model="WTextInt.int"></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & default'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & buttonColor & buttonColorHover & buttonColorFocus'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    :backgroundColorFocus="'orange lighten-5'"
                    :buttonColor="'orange lighten-1'"
                    :buttonColorHover="'orange accent-3'"
                    :buttonColorFocus="'orange darken-2'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & backgroundColor & backgroundColorHover & backgroundColorFocus'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
                    :borderColorFocus="'orange darken-2'"
                    _backgroundColorFocus="'orange lighten-5'"
                    :backgroundColor="'rgba(255, 171, 64, 0.05)'"
                    :backgroundColorHover="'rgba(255, 171, 64, 0.1)'"
                    :backgroundColorFocus="'rgba(255, 171, 64, 0.2)'"
                    v-model="WTextInt.int"
                ></w-text-int>
            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-text-int'"
                    :casename="'border & borderRadius'"
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
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
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
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
                ></demolink>

                <w-text-int
                    :shadow="false"
                    :borderColor="'orange lighten-2'"
                    :borderColorHover="'orange'"
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
