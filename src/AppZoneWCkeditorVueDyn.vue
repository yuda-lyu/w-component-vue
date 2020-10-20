<template>
    <div>


        <div class="head1">w-ckeditor-vue-dyn</div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/ckeditor/ckeditor5" target="_blank">ckeditor 5</a>
            <span style="margin:0px 10px">|</span>
            <a href="//ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html" target="_blank">ckeditor 5 examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/ckeditor/ckeditor5-vue" target="_blank">ckeditor5-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-ckeditor-vue" target="_blank">w-ckeditor-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-ckeditor-vue/examples/ex-default.html" target="_blank">w-ckeditor-vue examples</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-ckeditor-vue-dyn'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-ckeditor-vue-dyn
                    style="width:620px;"
                    v-model="WCkeditorVueDyn.content"
                ></w-ckeditor-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-ckeditor-vue-dyn'"
                    :casename="'height'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-ckeditor-vue-dyn
                    style="width:620px;"
                    :height="200"
                    v-model="WCkeditorVueDyn.content"
                ></w-ckeditor-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-ckeditor-vue-dyn'"
                    :casename="'settings'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-ckeditor-vue-dyn
                    style="width:620px;"
                    :settings="WCkeditorVueDyn.settings"
                    v-model="WCkeditorVueDyn.content"
                ></w-ckeditor-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-ckeditor-vue-dyn'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-ckeditor-vue-dyn
                    style="width:620px;"
                    :editable="false"
                    v-model="WCkeditorVueDyn.content"
                ></w-ckeditor-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WCkeditorVueDyn from './components/WCkeditorVueDyn.vue'


export default {
    components: {
        demolink,
        WCkeditorVueDyn,
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
            'WCkeditorVueDyn': {
                'content': 'abc中文123',
                'settings': {
                    language: 'zh',
                    toolbar: ['heading', '|', 'fontSize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', '|', 'subscript', 'superscript', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', '|', 'bulletedList', 'numberedList', 'blockQuote', '|', 'insertTable', '|', 'Undo', 'Redo'],
                    table: {
                        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                    },
                },
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
