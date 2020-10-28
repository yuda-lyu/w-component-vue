<template>
    <div>


        <div class="head1">w-quill-vue-dyn</div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/quilljs/quill" target="_blank">quill</a>
            <span style="margin:0px 10px">|</span>
            <a href="//quilljs.com/playground/" target="_blank">quill examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-quill-vue" target="_blank">w-quill-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-quill-vue/examples/ex-default.html" target="_blank">w-quill-vue examples</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-quill-vue-dyn'"
                    :casename="'default'"
                ></demolink>

                <w-quill-vue-dyn
                    style="width:620px;"
                    v-model="WQuillVueDyn.content"
                ></w-quill-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-quill-vue-dyn'"
                    :casename="'height'"
                ></demolink>

                <w-quill-vue-dyn
                    style="width:620px;"
                    :height="200"
                    v-model="WQuillVueDyn.content"
                ></w-quill-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-quill-vue-dyn'"
                    :casename="'settings'"
                ></demolink>

                <w-quill-vue-dyn
                    style="width:620px;"
                    :settings="WQuillVueDyn.settings"
                    v-model="WQuillVueDyn.content"
                ></w-quill-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-quill-vue-dyn'"
                    :casename="'not editable'"
                ></demolink>

                <w-quill-vue-dyn
                    style="width:620px;"
                    :editable="false"
                    v-model="WQuillVueDyn.content"
                ></w-quill-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WQuillVueDyn from './components/WQuillVueDyn.vue'


export default {
    components: {
        demolink,
        WQuillVueDyn,
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
            'WQuillVueDyn': {
                'content': 'abc中文123',
                'settings': {
                    modules: {
                        toolbar: [
                            { size: ['small', false, 'large', 'huge'] },
                            // ['bold', 'italic', 'underline', 'strike'],
                            // [{ 'color': [] }, { 'background': [] }],
                            // // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            // [{ 'indent': '-1' }, { 'indent': '+1' }],
                            // [{ 'script': 'sub' }, { 'script': 'super' }],
                            // // [{ 'header': [1, 2, 3, false] }],
                            // [{ 'align': [] }],
                            // // ['blockquote', 'code-block'],
                            // // ['link', 'image', 'video'],
                            // // ['clean'],
                        ],
                    },
                },
                // 'opt1': {
                //     keys: keys,
                //     rows: rows,
                // },
                // 'opt2': {
                //     keys: keys,
                //     rows: rows,
                //     defCellEditable: true,
                // },
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
