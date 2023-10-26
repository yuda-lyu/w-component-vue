<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-list-expand</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActive"
                    >
                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'activeMode(multi)'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActiveMulti"
                        :activeMode="'multi'"
                    >
                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'keyText & keyIcon & keyDsp'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObjForKey"
                        :keyText="'name'"
                        :keyIcon="'path'"
                        :keyDsp="'message'"
                    >
                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'slot item-header & item-content'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActive"
                    >

                        <template v-slot:item-header="props">
                            <div style="display:flex; align-items:center;">

                                <w-icon
                                    style="margin-right:8px;"
                                    :icon="props.item.icon"
                                    :size="28"
                                    :color="props.item.isActive?'#fff':'#FFAB00'"
                                ></w-icon>

                                <div>

                                    <div :style="`${props.item.isActive?'color:#fff;':''};`">
                                        {{props.item.text}}
                                    </div>

                                    <div :style="`font-size:0.7rem; line-height:0.7rem; ${props.item.isActive?'opacity:1; color:#FFE0B2;':'opacity:0.7; color:#666;'}`">
                                        Vestibulum a sodales lorem.
                                    </div>

                                </div>

                            </div>
                        </template>

                        <template v-slot:item-content="props">
                            <!-- 使用多層border-left會有無渲染間距, 導致看起來有白線, 暫時使用align-items:stretch呈現 -->
                            <div style="display:flex; align-items:stretch; border-bottom:1px solid #eee;">

                                <div style="padding-left:10px; background:#FFE0B2;">
                                </div>

                                <div style="padding-left:1px; background:#FFB74D;">
                                </div>

                                <div style="padding:10px; font-size:0.7rem; background:rgba(255, 243, 224, 0.2);">
                                    {{props.item.dsp}}
                                </div>

                            </div>
                        </template>

                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'string items & slot item-content'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsString"
                        :itemActive.sync="WListExpand.itemsStringActive"
                    >

                        <template v-slot:item-content="props">
                            <!-- 使用多層border-left會有無渲染間距, 導致看起來有白線, 暫時使用align-items:stretch呈現 -->
                            <div style="display:flex; align-items:stretch; border-bottom:1px solid #eee;">

                                <div style="padding-left:10px; background:#FFE0B2;">
                                </div>

                                <div style="padding-left:1px; background:#FFB74D;">
                                </div>

                                <div style="padding:10px; font-size:0.7rem; background:rgba(255, 243, 224, 0.2);">
                                    {{props}}
                                </div>

                            </div>
                        </template>

                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <div style="display:inline-block; _border:1px dashed #ddd; background:url('//cdn.jsdelivr.net/npm/w-demores/res/img/view/003.jpg');">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActive"
                        :itemBackgroundColor="'rgba(130, 138, 156, 0.1)'"
                        :itemBackgroundColorHover="'rgba(255, 255, 255, 0.2)'"
                        :itemBackgroundColorActive="'rgba(100, 100, 100, 0.5)'"
                    >
                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'slot item-content & itemTextColor & itemTextColorHover & itemTextColorActive & itemIconColor & itemIconColorHover & itemIconColorActive & itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <div style="display:inline-block; _border:1px dashed #ddd; background:url('//cdn.jsdelivr.net/npm/w-demores/res/img/view/022.jpg');">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActive"
                        :itemTextColor="'#222'"
                        :itemTextColorHover="'#fff'"
                        :itemTextColorActive="'#fff'"
                        :itemIconColor="'#222'"
                        :itemIconColorHover="'#fff'"
                        :itemIconColorActive="'#fff'"
                        :itemBackgroundColor="'rgba(255, 255, 255, 0.5)'"
                        :itemBackgroundColorHover="'rgba(255, 255, 255, 0.2)'"
                        :itemBackgroundColorActive="'rgba(0, 0, 0, 0.5)'"
                    >

                        <template v-slot:item-content="props">
                            <div style="display:flex; align-items:stretch; border-bottom:1px solid #eee;">

                                <div style="padding-left:10px; opacity:0.2; background:#fff;">
                                </div>

                                <div style="padding-left:1px; opacity:0.5; background:#fff;">
                                </div>

                                <div style="padding:10px; font-size:0.8rem; opacity:0.8; color:#fff;">
                                    {{props.item.dsp}}
                                </div>

                            </div>
                        </template>

                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'paddingStyle'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActive"
                        :paddingStyle="{v:3,h:5}"
                    >
                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'slot header'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActive"
                        :itemBackgroundColorActive="'rgba(140, 100, 100, 0.75)'"
                    >
                        <template v-slot:header>
                            <div style="display:flex; align-items:center; padding:10px 15px; font-size:0.9rem; color:#fff; background:#666;">

                                <div>
                                    Application
                                </div>

                                <div style="width:100%; text-align:right;">
                                    <w-button-circle
                                        :icon="mdiPencilOutline"
                                    ></w-button-circle>
                                </div>

                            </div>
                        </template>
                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'slot footer'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObj"
                        :itemActive.sync="WListExpand.itemActive"
                        :itemBackgroundColorActive="'rgba(100, 100, 140, 0.75)'"
                    >
                        <template v-slot:footer>
                            <div style="padding:10px 15px; font-size:0.9rem; color:#fff; background:rgba(150,150,150,0.25); text-align:right;">
                                <v-btn style="margin-left:8px;" small rounded>Save</v-btn>
                                <v-btn style="margin-left:8px;" small rounded>Analysis</v-btn>
                            </div>
                        </template>
                    </w-list-expand>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-expand'"
                    :casename="'auto scroll'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-expand
                        style="height:400px; width:250px;"
                        :items="WListExpand.itemsObjLarge"
                        :itemBackgroundColorActive="'#78909C'"
                    >
                        <template v-slot:header>
                            <div style="display:flex; align-items:center; padding:10px 15px; font-size:0.9rem; color:#fff; background:#455A64;">
                                Header
                            </div>
                        </template>
                        <template v-slot:footer>
                            <div style="display:flex; align-items:center; padding:10px 15px; font-size:0.9rem; color:#fff; background:#455A64;">
                                Footer
                            </div>
                        </template>
                    </w-list-expand>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiStackOverflow, mdiBookMusicOutline, mdiCharity, mdiLightbulbGroupOutline, mdiMessageCogOutline, mdiGestureDoubleTap, mdiPencilOutline, mdiLightbulbOnOutline } from '@mdi/js/mdi.js'
import demolink from './components/demolink.vue'
import WButtonCircle from './components/WButtonCircle.vue'
import WIcon from './components/WIcon.vue'
import WListExpand from './components/WListExpand.vue'


export default {
    components: {
        demolink,
        WButtonCircle,
        WIcon,
        WListExpand,
    },
    props: {
    },
    data: function() {
        return {
            mdiPencilOutline,
            mdiLightbulbOnOutline,
            'WListExpand': {
                'itemsString': [
                    'Real-Time',
                    'Audience',
                    'Conversions',
                    'Management',
                    'Settings',
                    'Actions',
                ],
                'itemsStringActive': 'Real-Time',
                'itemsObj': [
                    {
                        text: 'Real-Time',
                        icon: mdiStackOverflow,
                        dsp: 'Lorem ipsum dolor sit amet, id nec quod persius patrioque. Quaestio antiopam sea ex. Ius no illud mucius admodum, ea nonumes habemus interpretaris sit, eu ius suavitate definitionem.',
                    },
                    {
                        text: 'Audience',
                        icon: mdiBookMusicOutline,
                        dsp: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                    },
                    {
                        text: 'Conversions',
                        icon: mdiCharity,
                        dsp: 'Etiam appellantur pri te, percipit atomorum consequat et mei, et pro liber ubique ceteros. Est at vocent instructior consequuntur.',
                    },
                    {
                        text: 'Management',
                        icon: mdiLightbulbGroupOutline,
                        dsp: 'Qui oratio partem percipit ex, brute omittantur eum no, id his iriure splendide voluptatum. Ei his etiam vivendo adversarium, nam iusto ridens ei, meis disputationi eos eu. Meis accumsan mea et, ut ubique deserunt dignissim vix. Duo ex dicant detracto tacimates.',
                    },
                    {
                        text: 'Settings',
                        icon: mdiMessageCogOutline,
                        dsp: 'Sed et nisi maximus, aliquet justo in, consequat nisl.',
                    },
                    {
                        text: 'Actions',
                        icon: mdiGestureDoubleTap,
                        dsp: 'Aliquam faucibus ipsum quis massa facilisis, ac sollicitudin lectus volutpat.',
                    },
                ],
                'itemsObjLarge': [
                    {
                        text: 'Real-Time-1',
                        icon: mdiStackOverflow,
                        dsp: 'Lorem ipsum dolor sit amet, id nec quod persius patrioque. Quaestio antiopam sea ex. Ius no illud mucius admodum, ea nonumes habemus interpretaris sit, eu ius suavitate definitionem.',
                    },
                    {
                        text: 'Audience-1',
                        icon: mdiBookMusicOutline,
                        dsp: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                    },
                    {
                        text: 'Conversions-1',
                        icon: mdiCharity,
                        dsp: 'Etiam appellantur pri te, percipit atomorum consequat et mei, et pro liber ubique ceteros. Est at vocent instructior consequuntur.',
                    },
                    {
                        text: 'Management-1',
                        icon: mdiLightbulbGroupOutline,
                        dsp: 'Qui oratio partem percipit ex, brute omittantur eum no, id his iriure splendide voluptatum. Ei his etiam vivendo adversarium, nam iusto ridens ei, meis disputationi eos eu. Meis accumsan mea et, ut ubique deserunt dignissim vix. Duo ex dicant detracto tacimates.',
                    },
                    {
                        text: 'Settings-1',
                        icon: mdiMessageCogOutline,
                        dsp: 'Sed et nisi maximus, aliquet justo in, consequat nisl.',
                    },
                    {
                        text: 'Actions-1',
                        icon: mdiGestureDoubleTap,
                        dsp: 'Aliquam faucibus ipsum quis massa facilisis, ac sollicitudin lectus volutpat.',
                    },
                    {
                        text: 'Real-Time-2',
                        icon: mdiStackOverflow,
                        dsp: 'Donec sagittis hendrerit sapien at varius. Donec semper massa eget neque consequat, quis elementum nisi venenatis. Sed sed libero vitae eros rutrum dapibus a eget neque.',
                    },
                    {
                        text: 'Audience-2',
                        icon: mdiBookMusicOutline,
                        dsp: 'Nam facilisis, felis ac pellentesque ultrices, ligula lacus lobortis mauris, sed elementum orci orci ac urna. Ut sit amet ipsum dapibus.',
                    },
                    {
                        text: 'Conversions-2',
                        icon: mdiCharity,
                        dsp: 'Placerat libero sed, commodo purus. Donec suscipit nibh a lobortis varius. Nullam quis velit dignissim ligula luctus rutrum. In viverra viverra pellentesque.',
                    },
                    {
                        text: 'Management-2',
                        icon: mdiLightbulbGroupOutline,
                        dsp: 'Ut iaculis sapien id arcu ornare sodales. Pellentesque faucibus ipsum a odio pharetra tincidunt. Mauris molestie consequat neque a vestibulum.',
                    },
                    {
                        text: 'Settings-2',
                        icon: mdiMessageCogOutline,
                        dsp: 'Morbi mi lectus, semper vitae dolor eget, venenatis pellentesque purus. Phasellus sollicitudin mattis molestie. Nunc felis mauris.',
                    },
                    {
                        text: 'Actions-2',
                        icon: mdiGestureDoubleTap,
                        dsp: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus lectus, tincidunt id mi id, accumsan imperdiet ante.',
                    },
                ],
                'itemsObjForKey': [
                    {
                        name: 'Real-Time',
                        path: mdiStackOverflow,
                        message: 'Lorem ipsum dolor sit amet, id nec quod persius patrioque. Quaestio antiopam sea ex. Ius no illud mucius admodum, ea nonumes habemus interpretaris sit, eu ius suavitate definitionem.',
                    },
                    {
                        name: 'Audience',
                        path: mdiBookMusicOutline,
                        message: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                    },
                    {
                        name: 'Conversions',
                        path: mdiCharity,
                        message: 'Etiam appellantur pri te, percipit atomorum consequat et mei, et pro liber ubique ceteros. Est at vocent instructior consequuntur.',
                    },
                    {
                        name: 'Management',
                        path: mdiLightbulbGroupOutline,
                        message: 'Qui oratio partem percipit ex, brute omittantur eum no, id his iriure splendide voluptatum. Ei his etiam vivendo adversarium, nam iusto ridens ei, meis disputationi eos eu. Meis accumsan mea et, ut ubique deserunt dignissim vix. Duo ex dicant detracto tacimates.',
                    },
                    {
                        name: 'Settings',
                        path: mdiMessageCogOutline,
                        message: 'Sed et nisi maximus, aliquet justo in, consequat nisl.',
                    },
                    {
                        name: 'Actions',
                        path: mdiGestureDoubleTap,
                        message: 'Morbi mi lectus, semper vitae dolor eget, venenatis pellentesque purus. Phasellus sollicitudin mattis molestie. Nunc felis mauris.',
                    },
                ],
                'itemActive': {
                    text: 'Audience',
                    icon: mdiBookMusicOutline,
                    dsp: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                },
                'itemActiveMulti': [
                    {
                        text: 'Audience',
                        icon: mdiBookMusicOutline,
                        dsp: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                    }
                ],
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
