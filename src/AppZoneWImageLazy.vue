<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-image-lazy</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-image-lazy'"
                    :casename="'width & height'"
                ></demolink>

                <div style="width:340px; height:400px; overflow-y:auto; border:1px solid #ddd;">

                    <div
                        :key="'kurl-'+kurl"
                        v-for="(url,kurl) in WImageLazy.images"
                    >
                        <w-image-lazy
                            :width="320"
                            :height="180"
                            _ratio="16/9"
                            :url="url"
                            @click="ckImg"
                        ></w-image-lazy>
                    </div>

                </div>


            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-image-lazy'"
                    :casename="'width & height & delay'"
                ></demolink>

                <div style="width:340px; height:400px; overflow-y:auto; border:1px solid #ddd;">

                    <div
                        :key="'kurl-'+kurl"
                        v-for="(url,kurl) in WImageLazy.images"
                    >
                        <w-image-lazy
                            :width="320"
                            :height="180"
                            _ratio="16/9"
                            :url="url"
                            :delay="1000"
                            @click="ckImg"
                        ></w-image-lazy>
                    </div>

                </div>


            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WImageLazy from './components/WImageLazy.vue'


export default {
    components: {
        demolink,
        WImageLazy,
    },
    props: {
    },
    data: function() {
        return {
            'WImageLazy': {
                images: [
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/001.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/002.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/003.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/004.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/005.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/006.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/007.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/008.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/009.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/010.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/011.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/012.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/013.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/014.jpg',
                    'https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/img/view/015.jpg',
                ],
            },
            'actions': [
            ],
        }
    },
    methods: {
        ckImg: function(msg) {
            console.log('ckImg', msg)
        },
    },
}
</script>

<style scoped>
</style>
