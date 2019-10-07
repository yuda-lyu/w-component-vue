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
                    :casename="'buttonColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :buttonColor="'purple lighten-4'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'buttonColor & iconColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :buttonColor="'orange lighten-5'"
                    :iconColor="'orange'"
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
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                ></w-button-chip>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiWalletGiftcard, mdiFace, mdiOrbit, mdiCheckUnderlineCircle } from '@mdi/js'
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
            'WButtonChip': {
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
