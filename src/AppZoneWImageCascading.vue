<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-image-cascading</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/fengyuanchen/viewerjs" target="_blank" rel="noreferrer noopener">Viewer.js</a>
            <span style="margin:0px 10px">|</span>
            <a href="//fengyuanchen.github.io/viewerjs/" target="_blank" rel="noreferrer noopener">Viewer.js examples</a>
        </div>


        <div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading'"
                    :casename="'default(imageWidth=300)'"
                ></demolink>

                <w-image-cascading
                    :images="WImageCascading.opt1.images"
                    :imageStyle="WImageCascading.opt1.imageStyle"
                    :opt="WImageCascading.opt1.opt"
                ></w-image-cascading>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading'"
                    :casename="'imageWidth'"
                ></demolink>

                <div style="padding:5px 0px; font-size:0.9rem;">
                    colNum=(645-3*15)/150=4
                </div>

                <w-image-cascading
                    style="width:645px;"
                    :imageWidth="150"
                    :images="WImageCascading.opt1.images"
                    :imageStyle="WImageCascading.opt1.imageStyle"
                    :opt="WImageCascading.opt1.opt"
                ></w-image-cascading>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading'"
                    :casename="'colNum'"
                ></demolink>

                <w-image-cascading
                    style="max-width:1200px;"
                    :colNum="5"
                    :images="WImageCascading.opt1.images"
                    :imageStyle="WImageCascading.opt1.imageStyle"
                    :opt="WImageCascading.opt1.opt"
                ></w-image-cascading>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading'"
                    :casename="'imageWidthSoft'"
                ></demolink>

                <w-image-cascading
                    style="width:100%;"
                    :imageWidthSoft="300"
                    :images="WImageCascading.opt1.images"
                    :imageStyle="WImageCascading.opt1.imageStyle"
                    :opt="WImageCascading.opt1.opt"
                ></w-image-cascading>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading'"
                    :casename="'arrangeWhenFinish'"
                ></demolink>

                <w-image-cascading
                    style="max-width:1200px;"
                    :arrangeWhenFinish="true"
                    :images="WImageCascading.opt1.images"
                    :imageStyle="WImageCascading.opt1.imageStyle"
                    :opt="WImageCascading.opt1.opt"
                ></w-image-cascading>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WImageCascading from './components/WImageCascading.vue'


export default {
    components: {
        demolink,
        WImageCascading,
    },
    props: {
    },
    data: function() {
        return {
            'WImageCascading': {
                'opt1': {
                    images: [
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/001.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/002.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/003.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/004.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/005.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/006.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/007.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/008.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/009.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/010.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/011.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/012.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/013.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/014.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores/res/img/food/015.jpg',
                    ],
                    imageStyle: { },
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
