<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-textarea</span></div>


        <div style="padding:0px;">


            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'default'"
                ></demolink>

                <w-textarea v-model="WTextarea.text"></w-textarea>
            </div>

            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'borderColorFocus'"
                ></demolink>

                <w-textarea
                    :borderColorFocus="'light-blue darken-2'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>

            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'placeholder'"
                ></demolink>

                <w-textarea
                    :placeholder="'請輸入項目申請原因'"
                    v-model="WTextarea.text"
                ></w-textarea>
            </div>

            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'not editable'"
                ></demolink>

                <w-textarea :editable="false" v-model="WTextarea.text"></w-textarea>
            </div>

            <div class="bk" style="width:100%;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'fullwidth'"
                ></demolink>

                <w-textarea v-model="WTextarea.text"></w-textarea>
            </div>


        </div>


    </div>
</template>

<script>
import { mdiAccountCircle } from '@mdi/js'
import demolink from './components/demolink.vue'
import WTextarea from './components/WTextarea.vue'


export default {
    components: {
        demolink,
        WTextarea,
    },
    props: {
    },
    data: function() {
        return {
            mdiAccountCircle,
            'WTextarea': {
                'text': 'The Woodman(樵夫) set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.'
            },
            'actions': [
                {
                    'mode': 'eleclick',
                    'selector': 'textarea[rows="1"]'
                },
                {
                    'mode': 'keypress',
                    'key': 'ArrowRight'
                },
                {
                    'mode': 'keypress',
                    'key': 'ArrowDown'
                },
                {
                    'mode': 'type',
                    'selector': 'textarea[rows="1"]',
                    'str': '新增文字',
                    'noEnter': true,
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
