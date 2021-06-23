<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-button-circle</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'icon (material)'"
                ></demolink>

                <w-button-circle
                    :icon="mdiWalletGiftcard"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'icon (fontawesome)'"
                ></demolink>

                <w-button-circle
                    :icon="'fas fa-clipboard-check'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'no shadow'"
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
                ></demolink>

                <w-button-circle
                    :icon="mdiFace"
                    :small="false"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'backgroundColor'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'purple lighten-4'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'backgroundColor & iconColor'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'orange lighten-4'"
                    :iconColor="'deep-orange darken-1'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'loading'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :loading="true"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'loading & iconColor'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'red accent-3'"
                    :loading="true"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'not editable'"
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
