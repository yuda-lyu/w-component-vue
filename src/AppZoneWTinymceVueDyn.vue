<template>
    <div>


        <div class="head1" style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('https://yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-tinymce-vue-dyn</div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/tinymce/tinymce" target="_blank" rel="noreferrer noopener">tinymce</a>
            <span style="margin:0px 10px">|</span>
            <a href="//www.tiny.cloud/docs/demo/full-featured/" target="_blank" rel="noreferrer noopener">tinymce examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/tinymce/tinymce-vue" target="_blank" rel="noreferrer noopener">tinymce-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-tinymce-vue" target="_blank" rel="noreferrer noopener">w-tinymce-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-tinymce-vue/examples/ex-default.html" target="_blank" rel="noreferrer noopener">w-tinymce-vue examples</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-tinymce-vue-dyn'"
                    :casename="'default'"
                ></demolink>

                <w-tinymce-vue-dyn
                    style="width:620px;"
                    v-model="WTinymceVueDyn.content"
                ></w-tinymce-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tinymce-vue-dyn'"
                    :casename="'height'"
                ></demolink>

                <w-tinymce-vue-dyn
                    style="width:620px;"
                    :height="200"
                    v-model="WTinymceVueDyn.content"
                ></w-tinymce-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tinymce-vue-dyn'"
                    :casename="'settings'"
                ></demolink>

                <w-tinymce-vue-dyn
                    style="width:620px;"
                    :settings="WTinymceVueDyn.settings"
                    v-model="WTinymceVueDyn.content"
                ></w-tinymce-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-tinymce-vue-dyn'"
                    :casename="'not editable'"
                ></demolink>

                <w-tinymce-vue-dyn
                    style="width:620px;"
                    :editable="false"
                    v-model="WTinymceVueDyn.content"
                ></w-tinymce-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WTinymceVueDyn from './components/WTinymceVueDyn.vue'


export default {
    components: {
        demolink,
        WTinymceVueDyn,
    },
    props: {
    },
    data: function() {
        return {
            'WTinymceVueDyn': {
                'content': 'abc中文123',
                'settings': {
                    menubar: '',
                    plugins: '',
                    toolbar: 'fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
                    // language: 'zh_TW',
                    // menubar: 'edit insert format table',
                    // plugins: 'paste imagetools link table lists advlist hr charmap', //autoresize
                    // toolbar: 'undo redo | fontsizeselect | forecolor backcolor | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
                    // fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',
                    // invalid_elements: 'wbr', //禁止使用適合換行處元素wbr
                    // paste_data_images: true,
                    // branding: false, //移除logo
                    // elementpath: false, //移除選擇元素路徑
                    // resize: false, //禁止改變視窗大小
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
