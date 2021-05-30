<template>
    <div>


        <div class="head1" style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('https://yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-ckeditor-vue-dyn</div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <div style="color:#f26; margin-bottom:5px;">* Can not support IE11</div>
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/ckeditor/ckeditor5" target="_blank" rel="noreferrer noopener">ckeditor 5</a>
            <span style="margin:0px 10px">|</span>
            <a href="//ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html" target="_blank" rel="noreferrer noopener">ckeditor 5 examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/ckeditor/ckeditor5-vue" target="_blank" rel="noreferrer noopener">ckeditor5-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-ckeditor-vue" target="_blank" rel="noreferrer noopener">w-ckeditor-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-ckeditor-vue/examples/ex-default.html" target="_blank" rel="noreferrer noopener">w-ckeditor-vue examples</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-ckeditor-vue-dyn'"
                    :casename="'default'"
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
    },
    data: function() {
        return {
            'WCkeditorVueDyn': {
                'content': 'abc中文123',
                'settings': {
                    language: 'zh',
                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'fontSize',
                            'fontColor',
                            'fontBackgroundColor',
                            '|',
                            'bold',
                            'italic',
                            'underline',
                            'strikethrough',
                            '|',
                            'subscript',
                            'superscript',
                            '|',
                            'alignment',
                            'bulletedList',
                            'numberedList',
                            '|',
                            'redo',
                            'undo',
                            '|',
                            'removeFormat'
                        ]
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
