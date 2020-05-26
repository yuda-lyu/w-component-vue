<template>
    <div>


        <div class="head1">w-button-prog</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'textKey'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item2"
                    :textKey="'label'"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="mdiWalletGiftcard"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="'fas fa-clipboard-check'"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'iconShiftLeft'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="mdiYoutubeTv"
                    :iconShiftLeft="8"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'tooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :tooltip="'測試中文tooltip'"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'not small (large)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="mdiOrbit"
                    :small="false"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'iconColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'orange'"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'backgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'purple lighten-4'"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'iconColor & backgroundColor & textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'blue lighten-5'"
                    :backgroundColor="'blue darken-1'"
                    :textColor="'white'"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-prog'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-prog
                    :item="WButtonProg.item1"
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                    :loading.sync="WButtonProg.loading"
                    :loadingProg.sync="WButtonProg.loadingProg"
                    @click="clickItem"
                ></w-button-prog>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiWalletGiftcard, mdiFace, mdiOrbit, mdiCheckUnderlineCircle, mdiYoutubeTv } from '@mdi/js'
import demolink from './components/demolink.vue'
import WButtonProg from './components/WButtonProg.vue'


export default {
    components: {
        demolink,
        WButtonProg,
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
            mdiWalletGiftcard,
            mdiFace,
            mdiOrbit,
            mdiCheckUnderlineCircle,
            mdiYoutubeTv,
            'WButtonProg': {
                'loading': false,
                'loadingProg': 0,
                'item1': {
                    id: 'id-for-item1',
                    name: 'aBc數字123',
                },
                'item2': {
                    id: 'id-for-item2',
                    label: 'aBc數字123',
                },
            },
            'actions': [
                {
                    'mode': 'elemove',
                    'selector': 'button[type="button"]',
                }
            ],
        }
    },
    methods: {

        clickItem: function(item, cbProg) {
            let n = 100
            for (let i = 0; i <= n; i++) {
                let s = i / n
                let t = s ** 6 * 1000
                let p = s * 99.9
                setTimeout(function() {
                    //console.log('i=', i, 't=', t, 'p=', p)
                    cbProg(p)
                }, t)
                setTimeout(function() {
                    cbProg(100)
                }, 1300)
            }
        },

    },
}
</script>

<style scoped>
</style>
