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
                    :icon="'fas fa-pause-circle'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'tooltip'"
                ></demolink>

                <w-button-circle
                    :icon="mdiFaceMan"
                    :tooltip="'測試中文tooltip'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'tooltip & tooltipBorderRadius'"
                ></demolink>

                <w-button-circle
                    :icon="mdiFaceMan"
                    :tooltip="'測試中文tooltip'"
                    :tooltipBorderRadius="10"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'tooltip & tooltipPaddingStyle'"
                ></demolink>

                <w-button-circle
                    :icon="mdiFaceMan"
                    :tooltip="'測試中文tooltip'"
                    :tooltipPaddingStyle="{v:10,h:13}"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'tooltip & tooltipTextFontSize'"
                ></demolink>

                <w-button-circle
                    :icon="mdiFaceMan"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextFontSize="'0.7rem'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'tooltip & tooltipTextColor & tooltipBackgroundColor'"
                ></demolink>

                <w-button-circle
                    :icon="mdiFaceMan"
                    :tooltip="'測試中文tooltip'"
                    :tooltipTextColor="'#E65100'"
                    :tooltipBackgroundColor="'#FFF3E0'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'iconColor & iconColorHover & iconColorFocus'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :iconColor="'rgba(244, 81, 30, 0.7)'"
                    :iconColorHover="'rgba(244, 81, 30, 0.8)'"
                    :iconColorFocus="'rgba(244, 81, 30, 1)'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'backgroundColor & backgroundColorHover & backgroundColorFocus'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'rgba(225, 190, 231, 0.5)'"
                    :backgroundColorHover="'rgba(225, 190, 231, 0.75)'"
                    :backgroundColorFocus="'rgba(225, 190, 231, 1)'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'borderWidth & borderColor & borderColorHover & borderColorFocus'"
                ></demolink>

                <div style="display:inline-block; padding:15px; background:#888;">
                    <w-button-circle
                        :icon="mdiCheckUnderlineCircle"
                        :borderWidth="1"
                        :borderColor="'#aaa'"
                        :borderColorHover="'#ccc'"
                        :borderColorFocus="'#eee'"
                    ></w-button-circle>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'borderRadius'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadius="4"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'borderRadiusStyle(horizontal btns)'"
                ></demolink>

                <div style="display:inline-block; border-radius:8px; box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)">
                    <div style="display:flex;">
                        <w-button-circle
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="8"
                            :borderRadiusStyle="{topLeft:true,bottomLeft:true,topRight:false,bottomRight:false}"
                            :shadow="false"
                        ></w-button-circle>
                        <div style="border-left:1px solid #ddd;"></div>
                        <w-button-circle
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="8"
                            :borderRadiusStyle="{topLeft:false,bottomLeft:false,topRight:true,bottomRight:true}"
                            :shadow="false"
                        ></w-button-circle>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'borderRadiusStyle(vertical btns)'"
                ></demolink>

                <div style="display:inline-block; border-radius:8px; box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)">
                    <div style="display:flex; flex-direction:column;">
                        <w-button-circle
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="8"
                            :borderRadiusStyle="{topLeft:true,bottomLeft:false,topRight:true,bottomRight:false}"
                            :shadow="false"
                        ></w-button-circle>
                        <div style="border-top:1px solid #ddd;"></div>
                        <w-button-circle
                            :icon="mdiCheckUnderlineCircle"
                            :borderRadius="8"
                            :borderRadiusStyle="{topLeft:false,bottomLeft:true,topRight:false,bottomRight:true}"
                            :shadow="false"
                        ></w-button-circle>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'rippleColor'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :rippleColor="'rgba(0,20,255,0.3)'"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :paddingStyle="{v:0,h:0}"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'paddingStyle & iconSize'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :paddingStyle="{v:8,h:8}"
                    :iconSize="30"
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
                    :casename="'shadowStyle'"
                ></demolink>

                <w-button-circle
                    :icon="mdiWalletGiftcard"
                    :shadowStyle="'0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)'"
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
                    :casename="'loading & loadingColor'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :loadingColor="'red accent-3'"
                    :loading="true"
                ></w-button-circle>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'promiseUnlock'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :promiseUnlock="true"
                    @click="ckBtnPmUnlock"
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


            <div class="bk">
                <demolink
                    :kbname="'w-button-circle'"
                    :casename="'not editable & disabledColor'"
                ></demolink>

                <w-button-circle
                    :icon="mdiCheckUnderlineCircle"
                    :editable="false"
                    :disabledColor="'rgba(255,200,220,0.7)'"
                ></w-button-circle>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiWalletGiftcard, mdiFaceMan, mdiCheckUnderlineCircle } from '@mdi/js'
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
            mdiFaceMan,
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
    methods: {
        ckBtnPmUnlock: function(msg) {
            console.log('ckBtnPmUnlock', msg)
            setTimeout(function() {
                console.log('finish')
                msg.pm.resolve()
            }, 2000)
        },
    },
}
</script>

<style scoped>
</style>
