<template>
    <div>


        <div class="head1">w-button-chip</div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'default'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'icon (material)'"
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
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="'fas fa-clipboard-check'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'shiftLeft'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiYoutubeTv"
                    :shiftLeft="8"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'tooltip'"
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
                    :casename="'close & shiftRight'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :close="true"
                    :shiftRight="5"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'slot & close'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :close="true"
                    @click="ckBtn"
                    @click-close="ckBtnClose"
                >
                    <div style="display:flex; align-items:center;">
                        <div style="display:flex; margin-right:5px;">
                            <w-button-chip
                                :text="'Download'"
                                :textFontSize="'0.75rem'"
                                :paddingStyle="{v:0,h:8}"
                                :textColor="'#fff'"
                                :textColorHover="'#fff'"
                                :backgroundColor="'rgba(250,50,120,0.9)'"
                                :backgroundColorHover="'rgba(250,50,120,0.9)'"
                                @click="ckBtnItem1"
                            ></w-button-chip>
                        </div>
                        <div style="display:flex;">
                            <w-button-chip
                                :text="'View'"
                                :textFontSize="'0.75rem'"
                                :paddingStyle="{v:0,h:8}"
                                :textColor="'#fff'"
                                :textColorHover="'#fff'"
                                :backgroundColor="'rgba(200,20,170,0.9)'"
                                :backgroundColorHover="'rgba(200,20,170,0.9)'"
                                @click="ckBtnItem2"
                            ></w-button-chip>
                        </div>
                    </div>
                </w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'paddingStyle & icon & iconSize & textFontSize'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :paddingStyle="{v:10,h:24}"
                    :icon="mdiCodepen"
                    :iconSize="26"
                    :textFontSize="'0.9rem'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'textColor'"
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
                    :casename="'icon & iconColor & iconColorHover & close'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiWalletGiftcard"
                    :iconColor="'orange'"
                    :iconColorHover="'orange darken-2'"
                    :close="true"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & iconColorActive'"
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
                    :casename="'borderRadiusStyle'"
                ></demolink>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadiusStyle="{left:true}"
                ></w-button-chip>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadiusStyle="{right:true}"
                ></w-button-chip>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadiusStyle="{top:true}"
                ></w-button-chip>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderRadiusStyle="{bottom:true}"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'borderWidth'"
                ></demolink>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiShakerOutline"
                    :borderWidth="{left:1}"
                    :borderColor="'#aaa'"
                    :borderColorHover="'#aaa'"
                ></w-button-chip>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiShakerOutline"
                    :borderWidth="{right:1}"
                    :borderColor="'#aaa'"
                    :borderColorHover="'#aaa'"
                ></w-button-chip>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiShakerOutline"
                    :borderWidth="{top:1}"
                    :borderColor="'#aaa'"
                    :borderColorHover="'#aaa'"
                ></w-button-chip>

                <w-button-chip
                    style="margin-right:15px;"
                    :text="WButtonChip.text"
                    :icon="mdiShakerOutline"
                    :borderWidth="{bottom:1}"
                    :borderColor="'#aaa'"
                    :borderColorHover="'#aaa'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'borderRadiusStyle & borderWidth & borderColor & borderColorHover & no shadow'"
                ></demolink>

                <!-- 用display:flex避免編譯後因換行符號導致按鈕組件間出現間格 -->
                <div style="display:flex;">

                    <w-button-chip
                        :text="WButtonChip.text"
                        :icon="mdiShakerOutline"
                        :borderRadiusStyle="{left:true}"
                        :borderColor="'#aaa'"
                        :borderColorHover="'#aaa'"
                        :shadow="false"
                    ></w-button-chip>

                    <w-button-chip
                        :text="WButtonChip.text"
                        :icon="mdiFlaskRoundBottom"
                        :borderRadiusStyle="{}"
                        :borderWidth="{top:1,bottom:1}"
                        :shadow="false"
                        :borderColor="'#aaa'"
                        :borderColorHover="'#aaa'"
                    ></w-button-chip>

                    <w-button-chip
                        :text="WButtonChip.text"
                        :icon="mdiShoePrint"
                        :borderRadiusStyle="{right:true}"
                        :shadow="false"
                        :borderColor="'#aaa'"
                        :borderColorHover="'#aaa'"
                    ></w-button-chip>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'borderColor & borderColorHover'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :borderColor="'transparent'"
                    :borderColorHover="'#aaa'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & borderColorActive'"
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
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :backgroundColor="'grey lighten-2'"
                    :backgroundColorHover="'grey lighten-3'"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'active & backgroundColorActive'"
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
                    :casename="'modify prog by callback in click'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :prog.sync="WButtonChip.prog"
                    @click="ckBtnModProg"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'loading'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :loading="WButtonChip.loading"
                    @click="ckBtnLoading"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'loading & textColor'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :textColor="'rgba(255,30,60,0.9)'"
                    :loading="WButtonChip.loading"
                    @click="ckBtnLoading"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'modify loading by callback in click'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    :loading.sync="WButtonChip.loading"
                    @click="ckBtnModLoading"
                ></w-button-chip>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-button-chip'"
                    :casename="'not editable'"
                ></demolink>

                <w-button-chip
                    :text="WButtonChip.text"
                    :icon="mdiCheckUnderlineCircle"
                    _textColor="'#fff'"
                    _iconColor="'#fff'"
                    _backgroundColor="'#000'"
                    :editable="false"
                    @click="ckBtn"
                ></w-button-chip>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiWalletGiftcard, mdiFace, mdiOrbit, mdiCheckUnderlineCircle, mdiYoutubeTv, mdiCodepen, mdiShakerOutline, mdiFlaskRoundBottom, mdiShoePrint } from '@mdi/js'
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
            mdiShakerOutline,
            mdiFlaskRoundBottom,
            mdiShoePrint,
            'WButtonChip': {
                'text': 'aBc數字123',
                'prog': null,
                'loading': false,
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
            console.log('ckBtnProg')
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
        ckBtnModProg: function(msg) {
            //console.log('ckBtnModProg', msg)

            //lock
            msg.setProg(0) //先設定prog為0使按鈕自動上鎖禁止高頻觸發

            try {
                // if (Math.random() < 0.5) { //隨機添加出錯
                //     throw new Error('Whoops!')
                // }
                setTimeout(function() { //模擬呼叫api時至少等1s才有反應能setProg, 若沒先設定prog為0按鈕不會上鎖
                    let n = 0
                    let t = setInterval(function() {
                        n += 0.5
                        msg.setProg(n)
                        if (n >= 100) {
                            //vo.WButtonChip.prog = null //當prog>=100時會由內部自動設定為null
                            clearInterval(t)
                        }
                    }, 10)
                }, 1000)
            }
            catch (err) {

                //unlock
                msg.setProg(null)

            }

        },
        ckBtnLoading: function() {
            console.log('ckBtnLoading')
            let vo = this
            vo.WButtonChip.loading = true
            setTimeout(function() {
                vo.WButtonChip.loading = false
            }, 2000)
        },
        ckBtnModLoading: function(msg) {
            console.log('ckBtnModLoading', msg)
            msg.setLoading(true)
            setTimeout(function() {
                msg.setLoading(false)
            }, 2000)
        },
    },
}
</script>

<style scoped>
</style>
