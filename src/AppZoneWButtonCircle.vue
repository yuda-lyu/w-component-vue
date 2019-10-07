<template>
    <div>


        <div class="head1">w-button-circle</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'icon (material)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiWalletGiftcard"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'icon (fontawesome)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="'fas fa-clipboard-check'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'no shadow'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiWalletGiftcard"
                    :shadow="false"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'tooltip'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiFace"
                    :tooltip="'測試中文tooltip'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'not small (large)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiFace"
                    :small="false"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'buttonColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :buttonColor="'purple lighten-4'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'buttonColor & iconColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :buttonColor="'orange lighten-4'"
                    :iconColor="'deep-orange darken-1'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'loading'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :loading="true"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'not editable'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                ></w-button-circle>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiWalletGiftcard, mdiFace, mdiCheckUnderlineCircle } from '@mdi/js'
import demolink from './components/demolink.vue'
import WButtonCircle from './components/WButtonCircle.vue'

export default {
    components: {
        demolink,
        WButtonCircle,
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
            mdiCheckUnderlineCircle,
            'WButtonCircle': {
            },
            'actions': [
                {
                    'mode': 'elemove',
                    'selector': 'button[type="button"]'
                }
            ],
        }
    },
}
</script>

<style scoped>
</style>
