<template>
    <div>


        <div class="head1">w-image-viewer-dyn</div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/fengyuanchen/viewerjs" target="_blank">Viewer.js</a>
            <span style="margin:0px 10px">|</span>
            <a href="//fengyuanchen.github.io/viewerjs/" target="_blank">Viewer.js examples</a>
        </div>


        <div style="padding:0px;">

            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-viewer-dyn'"
                    :casename="'one image'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-image-viewer-dyn
                    :images="WImageViewerDyn.opt1.images"
                    :imageStyle="WImageViewerDyn.opt1.imageStyle"
                    :opt="WImageViewerDyn.opt1.opt"
                ></w-image-viewer-dyn>

            </div>

            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-viewer-dyn'"
                    :casename="'multiple image with navbar'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-image-viewer-dyn
                    :images="WImageViewerDyn.opt2.images"
                    :imageStyle="WImageViewerDyn.opt2.imageStyle"
                    :opt="WImageViewerDyn.opt2.opt"
                    :multiple="true"
                ></w-image-viewer-dyn>

            </div>

        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WImageViewerDyn from './components/WImageViewerDyn.vue'


export default {
    components: {
        demolink,
        WImageViewerDyn,
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
            'WImageViewerDyn': {
                'opt1': {
                    images: [
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/001.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/002.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/003.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/004.jpg',
                    ],
                    imageStyle: {
                        maxWidth: '300px',
                        maxHeight: '300px',
                    },
                    opt: {},
                },
                'opt2': {
                    images: [
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/005.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/006.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/007.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.10/res/img/view/008.jpg',
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
