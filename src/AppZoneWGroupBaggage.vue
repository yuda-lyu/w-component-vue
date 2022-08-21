<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-baggage</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'default'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'keyTag & keyText'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.itemsKey"
                    :keyTag="'name'"
                    :keyText="'content'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'connLineWidth'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :connLineWidth="3"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'connLineColor'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :connLineColor="'#dab78b'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'connLineZoneWidth'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :connLineZoneWidth="200"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagDistBetweenTopAndBaseline'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagDistBetweenTopAndBaseline="40"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagTextFontSize & contentShiftTopFromBaseline'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagTextFontSize="'0.85rem'"
                    :contentShiftTopFromBaseline="12"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagTextColor & tagTextColorHover'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagTextColor="'#FF6F00'"
                    :tagTextColorHover="'#EF6C00'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagBorderRadius'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagBorderRadius="0"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagBorderWidth'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagBorderWidth="2"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagBorderColor & tagBorderColorHover'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagBorderColor="'#7CB342'"
                    :tagBorderColorHover="'#33691E'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagBackgroundColor & tagBackgroundColorHover'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagBackgroundColor="'#F3E5F5'"
                    :tagBackgroundColorHover="'#E1BEE7'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagPaddingStyle & contentShiftTopFromBaseline'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagPaddingStyle="{v:5,h:10}"
                    :contentShiftTopFromBaseline="15"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'contentTextFontSize'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentTextFontSize="'0.85rem'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'contentTextColor & contentTextColorHover'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentTextColor="'#AFB42B'"
                    :contentTextColorHover="'#9E9D24'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'contentBorderRadius'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentBorderRadius="0"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'contentBorderWidth'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentBorderWidth="2"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'contentBorderColor & contentBorderColorHover'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentBorderColor="'#D4E157'"
                    :contentBorderColorHover="'#CDDC39'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'contentBackgroundColor & contentBackgroundColorHover'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentBackgroundColor="'#D1C4E9'"
                    :contentBackgroundColorHover="'#CE93D8'"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'contentPaddingStyle'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentPaddingStyle="{v:5,h:10}"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'tagClickable & contentClickable & events'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :tagClickable="true"
                    :contentClickable="true"
                    @click-tag="ckTag"
                    @click-content="ckContent"
                    @click="ckItem"
                >
                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'slot tag'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                >

                    <template v-slot:tag="props">
                        <div
                            :style="`display:flex; align-items:center; cursor:pointer;`"
                            @click="ckItem('slot-tag')"
                        >

                            <div :style="`transition:all 0.3s; padding-right:5px; _color:#682fff; color:${props.isHover?'#af1654':'#C2185B'};`">
                                <i class="fas fa-balance-scale"></i>
                            </div>

                            <div :style="`transition:all 0.3s; padding-right:5px; color:${props.isHover?'#682fff':'#7C4DFF'};`">
                                {{props.item.tag}}
                            </div>

                        </div>
                    </template>

                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'slot text & contentPaddingStyle'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                    :contentPaddingStyle="{v:0,h:0}"
                >

                    <template v-slot:text="props">
                        <div
                            :style="`transition:all 0.3s; padding:8px 10px; border-radius:5px; background:${props.isHover?'#F1F8E9':'#fff'};`"
                            @click="ckItem('slot-text')"
                        >

                            <div :style="`display:flex; align-items:flex-start;`">

                                <div :style="`transition:all 0.3s; padding-right:5px; color:#AEEA00;`">
                                    <i class="fas fa-box-open"></i>
                                </div>

                                <div :style="`transition:all 0.3s; padding-right:5px; color:#777; font-size:0.85rem; font-weight:bold;`">
                                    {{props.item.title}}
                                </div>

                            </div>

                            <div style="padding-top:3px;">

                                <div :style="`transition:all 0.3s; padding-right:5px; color:#666; font-size:0.7rem;`">
                                    {{props.item.text}}
                                </div>

                            </div>

                        </div>
                    </template>

                </w-group-baggage>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'slot text-sub'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                >

                    <template v-slot:text-sub="props">
                        <div
                            :style="`display:flex; align-items:center; justify-content:flex-end; font-size:0.7rem;`"
                            @click="ckItem('slot-text-sub')"
                        >

                            <div :style="`padding-right:5px; color:#777;`">
                                {{props.item.title}}
                            </div>

                            <div :style="`padding-right:5px; color:#57938c;`">
                                <i class="fas fa-cloud-meatball"></i>
                            </div>

                            <div :style="`padding-right:5px; color:#614b9e;`">
                                <i class="fas fa-battery-three-quarters"></i>
                            </div>

                            <div :style="`padding-right:5px; color:#c72361;`">
                                <i class="fas fa-balance-scale"></i>
                            </div>

                        </div>
                    </template>

                </w-group-baggage>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WGroupBaggage from './components/WGroupBaggage.vue'


export default {
    components: {
        demolink,
        WGroupBaggage,
    },
    props: {
    },
    data: function() {
        return {
            'WGroupBaggage': {
                items: [
                    {
                        tag: 'Audience',
                        text: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                        title: 'Indoctum',
                    },
                    {
                        tag: 'Conversions',
                        text: 'Etiam appellantur pri te, percipit atomorum consequat et mei, et pro liber ubique ceteros. Est at vocent instructior consequuntur.',
                        title: 'Omittantur',
                    },
                    {
                        tag: 'Management',
                        text: 'Qui oratio partem percipit ex, brute omittantur eum no, id his iriure splendide voluptatum. Ei his etiam vivendo adversarium, nam iusto ridens ei, meis disputationi eos eu. Meis accumsan mea et, ut ubique deserunt dignissim vix. Duo ex dicant detracto tacimates.',
                        title: 'Consequat',
                    },
                    {
                        tag: 'Settings',
                        text: 'Sed et nisi maximus, aliquet justo in, consequat nisl.',
                        title: 'Splendide',
                    },
                    {
                        tag: 'Actions',
                        text: 'Morbi mi lectus, semper vitae dolor eget, venenatis pellentesque purus. Phasellus sollicitudin mattis molestie. Nunc felis mauris.',
                        title: 'Pellentesque',
                    },
                    {
                        tag: 'Real-Time',
                        text: 'Lorem ipsum dolor sit amet, id nec quod persius patrioque. Quaestio antiopam sea ex. Ius no illud mucius admodum, ea nonumes habemus interpretaris sit, eu ius suavitate definitionem.',
                        title: 'Quaestio',
                    },
                ],
                itemsKey: [
                    {
                        name: 'Audience',
                        content: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                    },
                    {
                        name: 'Conversions',
                        content: 'Etiam appellantur pri te, percipit atomorum consequat et mei, et pro liber ubique ceteros. Est at vocent instructior consequuntur.',
                    },
                    {
                        name: 'Management',
                        content: 'Qui oratio partem percipit ex, brute omittantur eum no, id his iriure splendide voluptatum. Ei his etiam vivendo adversarium, nam iusto ridens ei, meis disputationi eos eu. Meis accumsan mea et, ut ubique deserunt dignissim vix. Duo ex dicant detracto tacimates.',
                    },
                    {
                        name: 'Settings',
                        content: 'Sed et nisi maximus, aliquet justo in, consequat nisl.',
                    },
                    {
                        name: 'Actions',
                        content: 'Morbi mi lectus, semper vitae dolor eget, venenatis pellentesque purus. Phasellus sollicitudin mattis molestie. Nunc felis mauris.',
                    },
                    {
                        name: 'Real-Time',
                        content: 'Lorem ipsum dolor sit amet, id nec quod persius patrioque. Quaestio antiopam sea ex. Ius no illud mucius admodum, ea nonumes habemus interpretaris sit, eu ius suavitate definitionem.',
                    },
                ],
            },
            'actions': [
            ],
        }
    },
    methods: {
        ckTag: function(msg) {
            console.log('ckTag', msg)
        },
        ckContent: function(msg) {
            console.log('ckContent', msg)
        },
        ckItem: function(msg) {
            console.log('ckItem', msg)
        },
    }
}
</script>

<style scoped>
</style>
