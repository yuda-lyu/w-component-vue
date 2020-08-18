<template>
    <div>


        <div class="head1">w-button-chip</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiWalletGiftcard"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="'fas fa-clipboard-check'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'iconShiftLeft'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiYoutubeTv"
                    :iconShiftLeft="8"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'tooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiFace"
                    :tooltip="'測試中文tooltip'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'close'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :close="true"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'slot & close'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :close="true"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                >
                    <div style="display:flex; align-items:center;">
                        <w-button-chip
                            style="margin-right:5px;"
                            :text="'Download'"
                            :textFontSize="'0.75rem'"
                            :sizePadding="'0px 8px'"
                            :textColor="'#fff'"
                            :textColorHover="'#fff'"
                            :backgroundColor="'rgba(250,50,120,0.9)'"
                            :backgroundColorHover="'rgba(250,50,120,0.9)'"
                            @click.stop="ckBtnItem1"
                        ></w-button-chip>
                        <w-button-chip
                            style=""
                            :text="'View'"
                            :textFontSize="'0.75rem'"
                            :sizePadding="'0px 8px'"
                            :textColor="'#fff'"
                            :textColorHover="'#fff'"
                            :backgroundColor="'rgba(200,20,170,0.9)'"
                            :backgroundColorHover="'rgba(200,20,170,0.9)'"
                            @click.stop="ckBtnItem2"
                        ></w-button-chip>
                    </div>
                </w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'not small (large)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiOrbit"
                    :small="false"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'sizePadding'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCodepen"
                    :sizePadding="'12px 27px'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :textColor="'light-blue darken-3'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'textColor & textColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :textColor="'purple darken-1'"
                    :textColorHover="'purple darken-4'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & textColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :active="true"
                    :textColorActive="'white'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'iconColor & iconColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'orange'"
                    :iconColorHover="'orange darken-2'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & iconColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :active="true"
                    :iconColorActive="'black'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadius="0"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'borderColor & borderColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderColor="'transparent'"
                    :borderColorHover="'pink lighten-1'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & borderColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :active="true"
                    :borderColorActive="'deep-orange lighten-2'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'backgroundColor & backgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'grey lighten-4'"
                    :backgroundColorHover="'grey lighten-2'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & backgroundColorActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :active="true"
                    :backgroundColorActive="'light-blue darken-2'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'no shadow'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :shadow="false"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'shadowStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :shadowStyle="'0 12px 20px -10px rgba(60,30,255,0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(60,30,255,0.2)'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & shadowActiveStyle'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :active="true"
                    :shadowActiveStyle="'0 12px 20px -10px rgba(100,100,100,0.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(100,100,100,0.2)'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & no shadow & no shadowActive'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :active="true"
                    :shadow="false"
                    :shadowActive="false"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'prog'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :prog="WButtonChip.prog"
                    @click="ckBtnProg"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'prog & progColor & progBackgroundColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :prog="WButtonChip.prog"
                    :progColor="'rgba(250,50,150,0.4)'"
                    :progBackgroundColor="'rgba(250,50,150,0.075)'"
                    @click="ckBtnProg"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'loading'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :loading="true"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'loading & textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :textColor="'rgba(255,30,60,0.9)'"
                    :loading="true"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                    @click="ckBtn"
                ></w-button-chip>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiWalletGiftcard, mdiFace, mdiOrbit, mdiCheckUnderlineCircle, mdiYoutubeTv, mdiCodepen } from '@mdi/js'
import demolink from './components/demolink.vue'
import WButtonChip from './components/WButtonChip.vue'


export default {
    components: {
        demolink,
        WButtonChip,
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
            mdiCodepen,
            'WButtonChip': {
                'text': 'aBc數字123',
                'prog': null,
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
        ckBtn: function() {
            console.log('ckBtn')
        },
        ckBtnClose: function() {
            console.log('ckBtnClose')
        },
        ckBtnItem1: function() {
            console.log('ckBtnItem1')
        },
        ckBtnItem2: function() {
            console.log('ckBtnItem2')
        },
        ckBtnProg: function() {
            let vo = this
            let n = 0
            let t = setInterval(function() {
                n += 0.5
                vo.WButtonChip.prog = n
                if (n >= 100) {
                    vo.WButtonChip.prog = null
                    clearInterval(t)
                }
            }, 10)
        },
    },
}
</script>

<style scoped>
</style>
