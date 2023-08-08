<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-list-radio</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'string items'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsString"
                        v-model="WListRadio.itemsStringCheck"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'paddingStyle & spaceBetweenCheckboxAndContent'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :paddingStyle="{v:5,h:6}"
                        :spaceBetweenCheckboxAndContent="3"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'keyText & keyIcon'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObjForKey"
                        v-model="WListRadio.itemsObjForKeyCheck"
                        :keyText="'name'"
                        :keyIcon="'path'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'keyPickForObjItem'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheckPick"
                        :keyPickForObjItem="'text'"
                    >
                    </w-list-radio>
                </div>
                <div style="width:250px; font-size:0.7rem; word-break:break-all;">
                    selects: {{JSON.stringify(WListRadio.itemsObjCheckPick)}}
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'item with no editable'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObjForNoEditable"
                        v-model="WListRadio.itemsObjForNoEditableCheck"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'item with no editable & itemDisabledColor'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObjForNoEditable"
                        v-model="WListRadio.itemsObjForNoEditableCheck"
                        :itemDisabledColor="'rgba(230,230,230,0.4)'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'item with no editable & itemTextColorDisabled & itemIconColorDisabled & itemBackgroundColorDisabled'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObjForNoEditable"
                        v-model="WListRadio.itemsObjForNoEditableCheck"
                        :itemTextColorDisabled="'#aaa'"
                        :itemIconColorDisabled="'#aaa'"
                        :itemBackgroundColorDisabled="'transparent'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'itemTextColor & itemTextColorHover & itemTextColorActive & itemIconColor & itemIconColorHover & itemIconColorActive & itemBackgroundColor & itemBackgroundColorHover & itemBackgroundColorActive'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :itemTextColor="'#666'"
                        :itemTextColorHover="'#444'"
                        :itemTextColorActive="'#0D47A1'"
                        :itemIconColor="'#666'"
                        :itemIconColorHover="'#444'"
                        :itemIconColorActive="'#0D47A1'"
                        :itemBackgroundColor="'rgba(245,245,245,0.2)'"
                        :itemBackgroundColorHover="'#ECEFF1'"
                        :itemBackgroundColorActive="'#ECEFF1'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'itemCheckIconIconSize & itemIconSize & itemTextFontSize'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :itemCheckIconIconSize="20"
                        :itemIconSize="20"
                        :itemTextFontSize="'0.85rem'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'itemRippleColor'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :itemRippleColor="'rgba(21, 101, 192, 0.4)'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'item with no editable &  & itemCheckIconCheckedIconColorDisabled & itemCheckIconUncheckedIconColorDisabled'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObjForNoEditable"
                        v-model="WListRadio.itemsObjForNoEditableCheck"
                        :itemCheckIconCheckedIconColorDisabled="'#B0BEC5'"
                        :itemCheckIconUncheckedIconColorDisabled="'#B0BEC5'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'itemCheckIconCheckedIcon & itemCheckIconUncheckedIcon'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :itemCheckIconCheckedIcon="mdiCheckboxMultipleMarkedCircle"
                        :itemCheckIconUncheckedIcon="mdiCheckboxMultipleBlankCircleOutline"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'itemCheckIconCheckedIconColor & itemCheckIconCheckedIconColorHover & itemCheckIconCheckedIconColorActive & itemCheckIconUncheckedIconColor & itemCheckIconUncheckedIconColorHover & itemCheckIconUncheckedIconColorActive'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :itemCheckIconCheckedIconColor="'#90A4AE'"
                        :itemCheckIconCheckedIconColorHover="'#1565C0'"
                        :itemCheckIconCheckedIconColorActive="'#1565C0'"
                        :itemCheckIconUncheckedIconColor="'#90A4AE'"
                        :itemCheckIconUncheckedIconColorHover="'#1565C0'"
                        :itemCheckIconUncheckedIconColorActive="'#1565C0'"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'enableQuery'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :enableQuery="true"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'enableQuery & slot item-content & itemBackgroundColorActive & itemCheckIconCheckedIconColorActive & itemCheckIconUncheckedIconColorActive'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :itemBackgroundColorActive="'#444'"
                        :itemCheckIconCheckedIconColorActive="'#FFE0B2'"
                        :itemCheckIconUncheckedIconColorActive="'#FFE0B2'"
                    >
                        <template v-slot:item-content="props">
                            <div style="">

                                <div style="margin-bottom:5px; display:flex; align-items:center;">

                                    <w-icon
                                        style="margin-right:8px;"
                                        :icon="props.item.icon"
                                        :size="16"
                                        :color="props.isActive?'#CDDC39':props.isHover?'#444':'#666'"
                                    ></w-icon>

                                    <div :style="`transition:all 0.3s; font-size:0.8rem; color:${props.isActive?'#B388FF':props.isHover?'#444':'#666'};`">

                                        <div>{{props.item.type}}</div>

                                    </div>

                                </div>

                                <div style="display:flex; align-items:center;">

                                    <w-icon
                                        style="margin-right:8px;"
                                        :icon="mdiLightbulbOnOutline"
                                        :size="16"
                                        :color="props.isActive?'#CDDC39':'#666'"
                                    ></w-icon>

                                    <div :style="`transition:all 0.3s; color:${props.isActive?'#fff':'#666'};`">{{props.item.text}}</div>

                                </div>

                            </div>
                        </template>
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'enableQuery & queryKeysPickForObjItem'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :enableQuery="true"
                        :queryKeysPickForObjItem="['text','type']"
                    >
                        <template v-slot:item-content="props">
                            <div style="">

                                <div style="margin-bottom:5px; display:flex; align-items:center;">

                                    <w-icon
                                        style="margin-right:8px;"
                                        :icon="props.item.icon"
                                        :size="20"
                                        :color="'#666'"
                                    ></w-icon>

                                    <div>

                                        <div :style="`font-size:0.8rem; color:#666;`">
                                            <div>{{props.item.type}}</div>
                                        </div>

                                        <div :style="`color:#666;`">
                                            {{props.item.text}}
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </template>
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'enableQuery & queryTextFontSize & queryTextColor & queryPlaceholder & queryHeight'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :enableQuery="true"
                        :queryTextFontSize="'0.9rem'"
                        :queryTextColor="'#455A64'"
                        _queryTextAlign="'center'"
                        :queryPlaceholder="'請輸入關鍵字'"
                        :queryHeight="24"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'enableQuery & querySepLineColor & querySepLineWidth'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :enableQuery="true"
                        :querySepLineColor="'#dde'"
                        :querySepLineWidth="3"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'enableQuery & border'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                        :enableQuery="true"
                        :queryShadow="false"
                        :queryBottomLineBorderColor="'transparent'"
                        :queryBottomLineBorderColorHover="'transparent'"
                        :queryBottomLineBorderColorFocus="'transparent'"
                        :queryPaddingStyle="{v:0,h:15}"
                        :queryBorderRadius="30"
                        :queryIconShiftOuter="-10"
                        :queryBorderColor="'blue lighten-2'"
                        :queryBorderColorHover="'blue'"
                        :queryBorderColorFocus="'blue darken-2'"
                        :queryBackgroundColor="'white'"
                        :queryBackgroundColorHover="'rgba(237, 247, 255, 1)'"
                        :queryBackgroundColorFocus="'blue lighten-5'"
                        :queryPanelPaddingStyle="{v:12,h:12}"
                    >
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'slot header'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
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
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'slot footer'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObj"
                        v-model="WListRadio.itemsObjCheck"
                    >
                        <template v-slot:footer>
                            <div style="padding:10px 15px; font-size:0.9rem; color:#fff; background:rgba(150,150,150,0.25); text-align:right;">
                                <v-btn style="margin-left:8px;" small rounded>Save</v-btn>
                                <v-btn style="margin-left:8px;" small rounded>Analysis</v-btn>
                            </div>
                        </template>
                    </w-list-radio>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-list-radio'"
                    :casename="'auto scroll'"
                ></demolink>

                <div style="display:inline-block; border:1px dashed #ddd;">
                    <w-list-radio
                        style="height:300px; width:250px;"
                        :items="WListRadio.itemsObjLarge"
                        v-model="WListRadio.itemsObjLargeCheck"
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
                    </w-list-radio>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiStackOverflow, mdiBookMusicOutline, mdiCharity, mdiLightbulbGroupOutline, mdiMessageCogOutline, mdiGestureDoubleTap, mdiPencilOutline, mdiLightbulbOnOutline, mdiCheckboxMultipleMarkedCircle, mdiCheckboxMultipleBlankCircleOutline } from '@mdi/js/mdi.js'
import demolink from './components/demolink.vue'
import WButtonCircle from './components/WButtonCircle.vue'
import WIcon from './components/WIcon.vue'
import WListRadio from './components/WListRadio.vue'


export default {
    components: {
        demolink,
        WButtonCircle,
        WIcon,
        WListRadio,
    },
    props: {
    },
    data: function() {
        return {
            mdiPencilOutline,
            mdiLightbulbOnOutline,
            mdiCheckboxMultipleMarkedCircle,
            mdiCheckboxMultipleBlankCircleOutline,
            'WListRadio': {
                'itemsString': [
                    'Real-Time',
                    'Audience',
                    'Conversions',
                    'Management',
                    'Settings',
                    'Actions',
                ],
                'itemsStringCheck': 'Audience',
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
                'itemsObjCheck': {
                    text: 'Audience',
                    icon: mdiBookMusicOutline,
                    type: 'Default',
                },
                'itemsObjCheckPick': 'Audience',
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
                'itemsObjLargeCheck': {
                    text: 'Real-Time-1',
                    icon: mdiStackOverflow,
                },
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
                'itemsObjForKeyCheck': {
                    name: 'Audience',
                    path: mdiBookMusicOutline,
                },
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
                'itemsObjForNoEditableCheck': {
                    text: 'Audience',
                    icon: mdiBookMusicOutline,
                    type: 'Default',
                    editable: true,
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
