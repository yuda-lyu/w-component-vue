<template>
    <div>


        <div class="head1">w-textarea</div>


        <div style="padding:0px;">


            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-textarea v-model="WTextarea.text"></w-textarea>
            </div>

            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'borderColorFocus'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
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
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-textarea :editable="false" v-model="WTextarea.text"></w-textarea>
            </div>

            <div class="bk" style="width:100%;">
                <demolink
                    :kbname="'w-textarea'"
                    :casename="'fullwidth'"
                    :kind="'nokind'"
                    :shell="'pure'"
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
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
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
