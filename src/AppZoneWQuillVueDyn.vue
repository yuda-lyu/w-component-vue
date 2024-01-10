<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-quill-vue-dyn</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/quilljs/quill" target="_blank" rel="noreferrer noopener">quill</a>
            <span style="margin:0px 10px">|</span>
            <a href="//quilljs.com/playground/" target="_blank" rel="noreferrer noopener">quill examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/surmon-china/vue-quill-editor" target="_blank" rel="noreferrer noopener">vue-quill-editor</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-quill-vue" target="_blank" rel="noreferrer noopener">w-quill-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-quill-vue/examples/ex-default.html" target="_blank" rel="noreferrer noopener">w-quill-vue examples</a>
        </div>


        <div>


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
                //     keys,
                //     rows: rows,
                // },
                // 'opt2': {
                //     keys,
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
