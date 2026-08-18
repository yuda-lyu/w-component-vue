<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-image-viewer</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/fengyuanchen/viewerjs" target="_blank" rel="noreferrer noopener">Viewer.js</a>
            <span style="margin:0px 10px">|</span>
            <a href="//fengyuanchen.github.io/viewerjs/" target="_blank" rel="noreferrer noopener">Viewer.js examples</a>
        </div>


        <div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-viewer'"
                    :casename="'one image'"
                ></demolink>

                <w-image-viewer
                    :images="WImageViewer.opt1.images"
                    :imageStyle="WImageViewer.opt1.imageStyle"
                    :opt="WImageViewer.opt1.opt"
                ></w-image-viewer>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-viewer'"
                    :casename="'multiple image with navbar'"
                ></demolink>

                <w-image-viewer
                    :images="WImageViewer.opt2.images"
                    :imageStyle="WImageViewer.opt2.imageStyle"
                    :opt="WImageViewer.opt2.opt"
                    :multiple="true"
                ></w-image-viewer>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WImageViewer from './components/WImageViewer.vue'


export default {
    components: {
        demolink,
        WImageViewer,
    },
    props: {
    },
    data: function() {
        return {
            'WImageViewer': {
                'opt1': {
                    images: [
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/001.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/002.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/003.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/004.jpg',
                    ],
                    imageStyle: {
                        maxWidth: '300px',
                        maxHeight: '300px',
                    },
                    opt: {},
                },
                'opt2': {
                    images: [
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/005.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/006.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/007.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/view/008.jpg',
                    ],
                    imageStyle: {
                        maxWidth: '300px',
                        maxHeight: '300px',
                    },
                    opt: {},
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
