<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-list-horizontal</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'default'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'itemTextFontSize & itemIconSize'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :itemTextFontSize="'0.8rem'"
                    :itemIconSize="20"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'space'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :space="10"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'paddingStyle'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :paddingStyle="{v:12,h:20}"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'itemBorderRadius'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :itemBorderRadius="5"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'keyText & keyIcon'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObjForKey"
                    :keyText="'name'"
                    :keyIcon="'path'"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'item with no editable'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObjForNoEditable"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'item with no editable & itemDisabledColor'"
                ></demolink>

                <div style="padding:25px 30px; background:#eee;">
                    <!-- itemDisabledColor是對item故會對背景有影響, 原則是基於item背景色RGB並給予其他半透明度作為禁用效果 -->
                    <w-list-horizontal
                        :items="WListHorizontal.itemsObjForNoEditable"
                        :itemDisabledColor="'rgba(245,245,245,0.4)'"
                    >
                    </w-list-horizontal>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'item with no editable & itemTextColorDisabled & itemIconColorDisabled & itemBackgroundColorDisabled'"
                ></demolink>

                <div style="padding:25px 30px; background:#eee;">
                    <w-list-horizontal
                        :items="WListHorizontal.itemsObjForNoEditable"
                        :itemTextColorDisabled="'#aaa'"
                        :itemIconColorDisabled="'#aaa'"
                        :itemBackgroundColorDisabled="'transparent'"
                    >
                    </w-list-horizontal>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'string items'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsString"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'string items & itemActive'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsString"
                    :itemActive.sync="WListHorizontal.itemsStringActive"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'no borderBottom'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :borderBottom="false"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'borderBottomSize'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :borderBottomSize="1"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'itemBorderRadius & space'"
                ></demolink>

                <div style="padding:15px 15px 0px 15px; background:#FFF3E0;">
                    <w-list-horizontal
                        :items="WListHorizontal.itemsObj"
                        :itemActive.sync="WListHorizontal.itemActive"
                        :itemBorderRadius="10"
                        :space="10"
                    >
                    </w-list-horizontal>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :itemBackgroundColor="'rgba(255, 243, 224, 0.6)'"
                    :itemBackgroundColorHover="'rgba(255, 243, 224, 1)'"
                    :itemBackgroundColorActive="'rgba(255, 243, 224, 0.8)'"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'itemRippleColor'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :itemRippleColor="'rgba(200, 200, 200, 0.3)'"
                >
                </w-list-horizontal>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'itemRippleColor & borderBottomColor & itemTextColorActive & itemIconColorActive & itemBackgroundColorActive'"
                ></demolink>

                <div style="display:inline-block;">
                    <w-list-horizontal
                        :items="WListHorizontal.itemsObj"
                        :itemActive.sync="WListHorizontal.itemActive"
                        :itemRippleColor="'rgba(255, 100, 150, 0.2)'"
                        :borderBottomColor="'#f26'"
                        :itemTextColorActive="'#f26'"
                        :itemIconColorActive="'#f26'"
                        :itemBackgroundColorActive="'transparent'"
                    >
                    </w-list-horizontal>
                    <div style="border-top:1px solid #ddd;"></div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'paddingStyle & borderBottomColor & itemRippleColor & itemTextColor & itemTextColorHover & itemTextColorActive & itemIconColor & itemIconColorHover & itemIconColorActive & itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <div style="display:inline-block;">
                    <div style="padding:15px 15px 0px 15px; background:linear-gradient(60deg,#ab47bc,#7b1fa2); box-shadow:0 5px 20px 0 rgba(0,0,0,.2), 0 13px 24px -11px rgba(156,39,176,.6);">
                        <w-list-horizontal
                            :items="WListHorizontal.itemsObj"
                            :itemActive.sync="WListHorizontal.itemActive"
                            :paddingStyle="{v:12,h:27}"
                            :borderBottomColor="'rgba(255, 255, 255, 0.7)'"
                            :itemRippleColor="'rgba(255, 255, 255, 0.05)'"
                            :itemTextColor="'white'"
                            :itemTextColorHover="'white'"
                            :itemTextColorActive="'white'"
                            :itemIconColor="'white'"
                            :itemIconColorHover="'white'"
                            :itemIconColorActive="'white'"
                            :itemBackgroundColor="'transparent'"
                            :itemBackgroundColorHover="'rgba(255,255,255,0.1)'"
                            :itemBackgroundColorActive="'rgba(255,255,255,0.2)'"
                        >
                        </w-list-horizontal>
                    </div>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-horizontal'"
                    :casename="'slot item'"
                ></demolink>

                <w-list-horizontal
                    :items="WListHorizontal.itemsObj"
                    :itemActive.sync="WListHorizontal.itemActive"
                    :itemRippleColor="'rgba(200, 200, 200, 0.3)'"
                >
                    <template v-slot:item="props">
                        <div style="display:flex; align-items:center;">

                            <div style="padding:8px 7px 0px 0px;">

                                <w-icon
                                    :icon="props.item.icon"
                                    :size="32"
                                    :color="props.isActive?'#CDDC39':props.isHover?'#444':'#666'"
                                ></w-icon>

                            </div>

                            <div style="">

                                <w-badge
                                    :text="props.kitem"
                                    :badge-align="'left'"
                                >
                                    <div :style="`padding:0px 11px 0px 0px; font-size:0.9rem; line-height:0.9rem; color:${props.isActive?'#FF9800':props.isHover?'#444':'#666'};`">
                                        {{props.item.text}}
                                    </div>
                                </w-badge>

                                <div :style="`font-size:0.7rem; line-height:0.7rem; opacity:0.7; color:${props.isActive?'#FF9800':props.isHover?'#444':'#666'};`">
                                    {{props.item.type}}
                                </div>

                            </div>

                        </div>
                    </template>
                </w-list-horizontal>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiStackOverflow, mdiBookMusicOutline, mdiCharity, mdiLightbulbGroupOutline, mdiMessageCogOutline, mdiGestureDoubleTap, mdiPencilOutline, mdiLightbulbOnOutline } from '@mdi/js/mdi.js'
import demolink from './components/demolink.vue'
import WIcon from './components/WIcon.vue'
import WBadge from './components/WBadge.vue'
import WListHorizontal from './components/WListHorizontal.vue'


export default {
    components: {
        demolink,
        WIcon,
        WBadge,
        WListHorizontal,
    },
    props: {
    },
    data: function() {
        return {
            mdiPencilOutline,
            mdiLightbulbOnOutline,
            'WListHorizontal': {
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
                'itemsObjForNoEditable': [
                    {
                        text: 'Real-Time',
                        icon: mdiStackOverflow,
                        type: 'Default',
                        editable: true,
                    },
                    {
                        text: 'Audience',
                        icon: mdiBookMusicOutline,
                        type: 'Default',
                        editable: true,
                    },
                    {
                        text: 'Conversions',
                        icon: mdiCharity,
                        type: 'Default',
                        editable: false,
                    },
                    {
                        text: 'Management',
                        icon: mdiLightbulbGroupOutline,
                        type: 'Default',
                        editable: true,
                    },
                    {
                        text: 'Settings',
                        icon: mdiMessageCogOutline,
                        type: 'Primary',
                        editable: false,
                    },
                    {
                        text: 'Actions',
                        icon: mdiGestureDoubleTap,
                        type: 'Primary',
                        editable: true,
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
