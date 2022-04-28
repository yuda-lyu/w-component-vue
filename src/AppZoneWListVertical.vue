<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-list-vertical</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'keyText & keyIcon'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObjForKey"
                        :keyText="'name'"
                        :keyIcon="'path'"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'string items'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsString"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'itemActive'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :itemActive.sync="WListVertical.itemActive"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'itemActive & itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <div style="display:inline-block; _border:1px dashed #ddd; background:url('//cdn.jsdelivr.net/npm/w-demores/res/img/view/003.jpg');">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :itemActive.sync="WListVertical.itemActive"
                        :itemBackgroundColor="'rgba(130, 138, 156, 0.1)'"
                        :itemBackgroundColorHover="'rgba(255, 255, 255, 0.2)'"
                        :itemBackgroundColorActive="'rgba(100, 100, 100, 0.5)'"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk" style="width:500px;">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'itemActive & itemTextColor & itemTextColorHover & itemTextColorActive & itemIconColor & itemIconColorHover & itemIconColorActive & itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <div style="display:inline-block; _border:1px dashed #ddd; background:url('//cdn.jsdelivr.net/npm/w-demores/res/img/view/022.jpg');">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :itemActive.sync="WListVertical.itemActive"
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
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'paddingStyle'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :paddingStyle="{v:3,h:5}"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'useActive (no active)'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :useActive="false"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'useActive (no active) & itemRippleColor'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :useActive="false"
                        :itemRippleColor="'rgba(155, 1, 87, 0.4)'"
                    >
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'slot header'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
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
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'slot footer'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :itemBackgroundColorActive="'rgba(100, 100, 140, 0.75)'"
                    >
                        <template v-slot:footer>
                            <div style="padding:10px 15px; font-size:0.9rem; color:#fff; background:rgba(150,150,150,0.25); text-align:right;">
                                <v-btn style="margin-left:8px;" small rounded>Save</v-btn>
                                <v-btn style="margin-left:8px;" small rounded>Analysis</v-btn>
                            </div>
                        </template>
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'slot item'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObj"
                        :itemBackgroundColorActive="'#444'"
                    >
                        <template v-slot:item="props">
                            <div>

                                <div style="margin-bottom:5px; display:flex; align-items:center;">

                                    <w-icon
                                        style="margin-right:8px;"
                                        :icon="props.item.icon"
                                        :size="16"
                                        :color="props.item.isActive?'#CDDC39':'#666'"
                                    ></w-icon>

                                    <div :style="'transition:all 0.3s; font-size:0.8rem; color:'.concat(props.item.isActive?'#B388FF':'#666')">

                                        <div>{{props.item.type}}</div>

                                    </div>

                                </div>

                                <div style="display:flex; align-items:center;">

                                    <w-icon
                                        style="margin-right:8px;"
                                        :icon="mdiLightbulbOnOutline"
                                        :size="16"
                                        :color="props.item.isActive?'#CDDC39':'#666'"
                                    ></w-icon>

                                    <div :style="'transition:all 0.3s; color:'.concat(props.item.isActive?'#fff':'#666')+';'">{{props.item.text}}</div>

                                </div>

                            </div>
                        </template>
                    </w-list-vertical>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-vertical'"
                    :casename="'auto scroll'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-vertical
                        style="height:400px; width:250px;"
                        :items="WListVertical.itemsObjLarge"
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
                    </w-list-vertical>
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
import WListVertical from './components/WListVertical.vue'


export default {
    components: {
        demolink,
        WButtonCircle,
        WIcon,
        WListVertical,
    },
    props: {
    },
    data: function() {
        return {
            mdiPencilOutline,
            mdiLightbulbOnOutline,
            'WListVertical': {
                'itemsString': [
                    'Real-Time',
                    'Audience',
                    'Conversions',
                    'Management',
                    'Settings',
                    'Actions',
                ],
                'itemsObj': [
                    {
                        text: 'Real-Time',
                        icon: mdiStackOverflow,
                        type: 'Default',
                    },
                    {
                        text: 'Audience',
                        icon: mdiBookMusicOutline,
                        type: 'Default',
                    },
                    {
                        text: 'Conversions',
                        icon: mdiCharity,
                        type: 'Default',
                    },
                    {
                        text: 'Management',
                        icon: mdiLightbulbGroupOutline,
                        type: 'Default',
                    },
                    {
                        text: 'Settings',
                        icon: mdiMessageCogOutline,
                        type: 'Primary',
                    },
                    {
                        text: 'Actions',
                        icon: mdiGestureDoubleTap,
                        type: 'Primary',
                    },
                ],
                'itemsObjLarge': [
                    {
                        text: 'Real-Time-1',
                        icon: mdiStackOverflow,
                    },
                    {
                        text: 'Audience-1',
                        icon: mdiBookMusicOutline,
                    },
                    {
                        text: 'Conversions-1',
                        icon: mdiCharity,
                    },
                    {
                        text: 'Management-1',
                        icon: mdiLightbulbGroupOutline,
                    },
                    {
                        text: 'Settings-1',
                        icon: mdiMessageCogOutline,
                    },
                    {
                        text: 'Actions-1',
                        icon: mdiGestureDoubleTap,
                    },
                    {
                        text: 'Real-Time-2',
                        icon: mdiStackOverflow,
                    },
                    {
                        text: 'Audience-2',
                        icon: mdiBookMusicOutline,
                    },
                    {
                        text: 'Conversions-2',
                        icon: mdiCharity,
                    },
                    {
                        text: 'Management-2',
                        icon: mdiLightbulbGroupOutline,
                    },
                    {
                        text: 'Settings-2',
                        icon: mdiMessageCogOutline,
                    },
                    {
                        text: 'Actions-2',
                        icon: mdiGestureDoubleTap,
                    },
                ],
                'itemsObjForKey': [
                    {
                        name: 'Real-Time',
                        path: mdiStackOverflow,
                    },
                    {
                        name: 'Audience',
                        path: mdiBookMusicOutline,
                    },
                    {
                        name: 'Conversions',
                        path: mdiCharity,
                    },
                    {
                        name: 'Management',
                        path: mdiLightbulbGroupOutline,
                    },
                    {
                        name: 'Settings',
                        path: mdiMessageCogOutline,
                    },
                    {
                        name: 'Actions',
                        path: mdiGestureDoubleTap,
                    },
                ],
                'itemActive': {
                    text: 'Audience',
                    icon: mdiBookMusicOutline,
                    type: 'Default',
                },
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
