<template>
    <div>


        <div class="head1">w-button-capsule</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiWalletGiftcard"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="'fas fa-clipboard-check'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'iconShiftLeft'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiYoutubeTv"
                    :iconShiftLeft="8"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'tooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiFace"
                    :tooltip="'測試中文tooltip'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'not small (large)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiOrbit"
                    :small="false"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'sizePadding'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiFace"
                    :sizePadding="'12px 27px'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'textColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :textColor="'grey darken-1'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'textColor & textColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :textColor="'grey darken-1'"
                    :textColorHover="'orange darken-3'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'textColorActive & active'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :textColorActive="'white'"
                    :active="true"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'iconColor & iconColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'orange'"
                    :iconColorHover="'orange darken-2'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'iconColorActive & active'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :iconColorActive="'black'"
                    :active="true"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'borderRadius'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadius="0"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'borderColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderColor="'grey'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'borderColor & borderColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderColor="'grey'"
                    :borderColorHover="'grey darken-2'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'borderColorActive & active'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderColorActive="'white'"
                    :active="true"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'backgroundColor & backgroundColorHover'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'grey lighten-4'"
                    :backgroundColorHover="'grey lighten-2'"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'backgroundColorActive & active'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColorActive="'light-blue darken-2'"
                    :active="true"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'shadow'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :shadow="true"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'no shadowActive & active'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :shadowActive="false"
                    :active="true"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'loading'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :loading="true"
                ></w-button-capsule>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-capsule'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-capsule
                    :text="WButtonCapsule.text"
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                ></w-button-capsule>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiWalletGiftcard, mdiFace, mdiOrbit, mdiCheckUnderlineCircle, mdiYoutubeTv } from '@mdi/js'
import demolink from './components/demolink.vue'
import WButtonCapsule from './components/WButtonCapsule.vue'


export default {
    components: {
        demolink,
        WButtonCapsule,
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
            'WButtonCapsule': {
                'text': 'aBc數字123'
            },
            'actions': [
                {
                    'mode': 'elemove',
                    'selector': 'button[type="button"]',
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
