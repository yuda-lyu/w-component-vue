<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-image-cascading-dyn</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//github.com/fengyuanchen/fooderjs" target="_blank" rel="noreferrer noopener">Viewer.js</a>
            <span style="margin:0px 10px">|</span>
            <a href="//fengyuanchen.github.io/fooderjs/" target="_blank" rel="noreferrer noopener">Viewer.js examples</a>
        </div>


        <div style="padding:0px;">


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading-dyn'"
                    :casename="'default(imageWidth=300)'"
                ></demolink>

                <w-image-cascading-dyn
                    :images="WImageCascadingDyn.opt1.images"
                    :imageStyle="WImageCascadingDyn.opt1.imageStyle"
                    :opt="WImageCascadingDyn.opt1.opt"
                ></w-image-cascading-dyn>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading-dyn'"
                    :casename="'imageWidth'"
                ></demolink>

                <div style="padding:5px 0px; font-size:0.9rem;">
                    colNum=(645-3*15)/150=4
                </div>

                <w-image-cascading-dyn
                    style="width:645px;"
                    :imageWidth="150"
                    :images="WImageCascadingDyn.opt1.images"
                    :imageStyle="WImageCascadingDyn.opt1.imageStyle"
                    :opt="WImageCascadingDyn.opt1.opt"
                ></w-image-cascading-dyn>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading-dyn'"
                    :casename="'colNum'"
                ></demolink>

                <w-image-cascading-dyn
                    style="max-width:1200px;"
                    :colNum="5"
                    :images="WImageCascadingDyn.opt1.images"
                    :imageStyle="WImageCascadingDyn.opt1.imageStyle"
                    :opt="WImageCascadingDyn.opt1.opt"
                ></w-image-cascading-dyn>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-image-cascading-dyn'"
                    :casename="'arrangeWhenFinish'"
                ></demolink>

                <w-image-cascading-dyn
                    style="max-width:1200px;"
                    :arrangeWhenFinish="true"
                    :images="WImageCascadingDyn.opt1.images"
                    :imageStyle="WImageCascadingDyn.opt1.imageStyle"
                    :opt="WImageCascadingDyn.opt1.opt"
                ></w-image-cascading-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WImageCascadingDyn from './components/WImageCascadingDyn.vue'


export default {
    components: {
        demolink,
        WImageCascadingDyn,
    },
    props: {
    },
    data: function() {
        return {
            'WImageCascadingDyn': {
                'opt1': {
                    images: [
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/001.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/002.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/003.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/004.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/005.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/006.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/007.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/008.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/009.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/010.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/011.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/012.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/013.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/014.jpg',
                        'https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/img/food/015.jpg',
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
