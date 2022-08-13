<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-avatar</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'default'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'avatarIcon (material)'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarIcon="mdiLaravel"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'avatarIcon (fontawesome)'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarIcon="'fas fa-skiing'"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'avatarOuterPadding & avatarInnerPadding'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarOuterPadding="20"
                        :avatarInnerPadding="10"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'avatarBackgroundColor'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarBackgroundColor="'rgba(40,150,60,0.4)'"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'avatarBorderWidth & avatarBorderColor & avatarBackgroundColor'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarBorderWidth="5"
                        :avatarBorderColor="'rgba(200,170,180,0.3)'"
                        :avatarBackgroundColor="'rgba(255,60,120,0.3)'"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'avatarBorderRadius'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarBorderRadius="50"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'avatarIcon & avatarIconSize & avatarIconColor & avatarBackgroundColor'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarIcon="'fas fa-cloud-sun'"
                        :avatarIconSize="32"
                        :avatarIconColor="'#b55'"
                        :avatarBackgroundColor="'rgba(90,60,60,0.25)'"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'no avatarShadow'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarShadow="false"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'shiftVFromAvaterCenter'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :shiftVFromAvaterCenter="0"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'spaceHBetweenAvatarAndHeader & spaceVBetweenHeaderAndContent'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :spaceHBetweenAvatarAndHeader="40"
                        :spaceVBetweenHeaderAndContent="15"
                    >
                        <div style="padding:5px 10px; font-size:0.7rem; color:#999;">
                            <i class="fas fa-drum-steelpan"></i>
                            <span style="margin-left:8px;">Last 24HR</span>
                        </div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'headerVerticalAlign & spaceVBetweenHeaderAndContent'"
                ></demolink>

                <div style="display:inline-block; padding:0px 40px; background:#bbb;">

                    <div style="padding:40px 0px;">
                        <w-panel-avatar
                            :subHeaderText="WPanelAvatar.subTitle"
                            :headerText="WPanelAvatar.title"
                            :headerVerticalAlign="'top'"
                            :spaceVBetweenHeaderAndContent="5"
                        >
                            <div style="padding:5px 10px;">
                                <div style="display:flex; align-items:center;">
                                    <div style="font-size:1.2rem; color:#C0CA33;">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div style="padding-left:8px; font-size:0.7rem; color:#999;">
                                        Utquam vitae odio lacinia tincidunt.
                                    </div>
                                </div>
                            </div>
                        </w-panel-avatar>
                    </div>

                    <div style="padding:40px 0px;">
                        <w-panel-avatar
                            :subHeaderText="WPanelAvatar.subTitle"
                            :headerText="WPanelAvatar.title"
                            :headerVerticalAlign="'center'"
                            :spaceVBetweenHeaderAndContent="5"
                        >
                            <div style="padding:5px 10px;">
                                <div style="display:flex; align-items:center;">
                                    <div style="font-size:1.2rem; color:#C0CA33;">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div style="padding-left:8px; font-size:0.7rem; color:#999;">
                                        Utquam vitae odio lacinia tincidunt.
                                    </div>
                                </div>
                            </div>
                        </w-panel-avatar>
                    </div>

                    <div style="padding:40px 0px;">
                        <w-panel-avatar
                            :subHeaderText="WPanelAvatar.subTitle"
                            :headerText="WPanelAvatar.title"
                            :headerVerticalAlign="'bottom'"
                            :spaceVBetweenHeaderAndContent="5"
                        >
                            <div style="padding:5px 10px;">
                                <div style="display:flex; align-items:center;">
                                    <div style="font-size:1.2rem; color:#C0CA33;">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div style="padding-left:8px; font-size:0.7rem; color:#999;">
                                        Utquam vitae odio lacinia tincidunt.
                                    </div>
                                </div>
                            </div>
                        </w-panel-avatar>
                    </div>

                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'headerPadding & headerTextColor & headerTextSize & subHeaderTextColor & subHeaderTextSize'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="'Capture and storage'"
                        :headerText="'358,912'"
                        :headerPadding="10"
                        :headerTextColor="'#FF9800'"
                        :headerTextSize="'2rem'"
                        :subHeaderTextColor="'#aaa'"
                        :subHeaderTextSize="'0.9rem'"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'contentBorderRadius'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :contentBorderRadius="0"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'sepLineWidth & sepLineColor'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :sepLineWidth="5"
                        :sepLineColor="'rgba(0,0,0,0.5)'"
                    >
                        <div style="padding:10px;">
                            <div style="padding:10px; background:#fff;" v-html="WPanelAvatar.table"></div>
                        </div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'contentBackgroundColor'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :contentBackgroundColor="'rgba(255,255,255,0.5)'"
                    >
                        <div style="padding:10px;">
                            <div style="padding:10px; background:#fff;" v-html="WPanelAvatar.table"></div>
                        </div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'contentShadow'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :contentShadow="false"
                    >
                        <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                    </w-panel-avatar>
                </div>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-avatar'"
                    :casename="'slot avatar & avatarBackgroundColor'"
                ></demolink>

                <div style="display:inline-block; padding:40px; background:#bbb;">
                    <w-panel-avatar
                        :subHeaderText="WPanelAvatar.subTitle"
                        :headerText="WPanelAvatar.title"
                        :avatarBackgroundColor="'rgba(120,120,190,0.4)'"
                    >
                        <template v-slot:avatar>
                            <div>
                                <img style="width:80px; height:80px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNjVjOGQwO30uY2xzLTJ7ZmlsbDojZmNkZDdjO30uY2xzLTN7ZmlsbDojYmE5YmM5O30uY2xzLTR7ZmlsbDojODM4YmM1O30uY2xzLTV7ZmlsbDojZTc2ODVkO30uY2xzLTZ7ZmlsbDojZjRlY2NlO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NywxMy42NWE2LDYsMCwxLDAtNCwwIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDMsMjJWMTBhMiwyLDAsMCwxLDItMmgwYTIsMiwwLDAsMSwyLDJWMjIiLz48cG9seWxpbmUgY2xhc3M9ImNscy0xIiBwb2ludHM9IjExIDIyIDExIDE0IDE1IDE0IDE1IDIyIi8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxOSAyMiAxOSAxNCAyMyAxNCAyMyAyMiIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTMiIHBvaW50cz0iNDkgMjggNTUgMjggNTUgMzQgNDkgMzQiLz48cG9seWxpbmUgY2xhc3M9ImNscy0zIiBwb2ludHM9IjQ5IDUwIDU1IDUwIDU1IDU2IDQ5IDU2Ii8+PHJlY3QgY2xhc3M9ImNscy00IiBoZWlnaHQ9IjQwIiB3aWR0aD0iNDAiIHg9IjkiIHk9IjIyIi8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtNSIgcG9pbnRzPSI0MCA1MSA0NCA1MSA0NCA1NSA0MCA1NSIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMTggNjIgMTggNDMgNDAgNDMgNDAgNjIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMzYgNTggMjIgNTggMjkgNDcgMzYgNTgiLz48cmVjdCBjbGFzcz0iY2xzLTUiIGhlaWdodD0iNCIgd2lkdGg9IjIiIHg9IjI4IiB5PSI1MiIvPjxyZWN0IGNsYXNzPSJjbHMtNSIgaGVpZ2h0PSIyIiB3aWR0aD0iNCIgeD0iMTQiIHk9IjQ2Ii8+PHJlY3QgY2xhc3M9ImNscy01IiBoZWlnaHQ9IjIiIHdpZHRoPSI0IiB4PSIxNCIgeT0iNTYiLz48cmVjdCBjbGFzcz0iY2xzLTIiIGhlaWdodD0iNCIgd2lkdGg9IjYiIHg9IjEzIiB5PSIyNiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgaGVpZ2h0PSI0IiB3aWR0aD0iNiIgeD0iMTMiIHk9IjM0Ii8+PHJlY3QgY2xhc3M9ImNscy02IiBoZWlnaHQ9IjIiIHdpZHRoPSI4IiB4PSIyMiIgeT0iMjciLz48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iMiIgd2lkdGg9IjgiIHg9IjIyIiB5PSIzNSIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMzUiIGN5PSIyOCIgcj0iMiIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNDMiIGN5PSIyOCIgcj0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iMzIiIHk9IjM1Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiBoZWlnaHQ9IjIiIHdpZHRoPSIyIiB4PSIzNiIgeT0iMzUiLz48cmVjdCBjbGFzcz0iY2xzLTEiIGhlaWdodD0iMiIgd2lkdGg9IjIiIHg9IjQwIiB5PSIzNSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgaGVpZ2h0PSIyIiB3aWR0aD0iMiIgeD0iNDQiIHk9IjM1Ii8+PHJlY3QgY2xhc3M9ImNscy0yIiBoZWlnaHQ9IjQiIHdpZHRoPSIyIiB4PSIyMCIgeT0iMTAiLz48cmVjdCBjbGFzcz0iY2xzLTIiIGhlaWdodD0iNCIgd2lkdGg9IjIiIHg9IjEyIiB5PSIxMCIvPjwvc3ZnPg==">
                            </div>
                        </template>
                        <template v-slot>
                            <div style="padding:20px;" v-html="WPanelAvatar.table"></div>
                        </template>
                    </w-panel-avatar>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiLaravel } from '@mdi/js'
import demolink from './components/demolink.vue'
import WPanelAvatar from './components/WPanelAvatar.vue'


export default {
    components: {
        demolink,
        WPanelAvatar,
    },
    props: {
    },
    data: function() {
        return {
            mdiLaravel,
            'WPanelAvatar': {
                'table': '\n<div style="margin-bottom:10px; padding:0px 10px;">\n                        <span>A data table</span>\n                    </div>\n\n                    <table style="width:100%; font-size:0.7rem; border-collapse:collapse;">\n                        <thead>\n                            <tr>\n                                <th style="padding:2px 8px; text-align:left;">Dessert</th>\n                                <th style="padding:2px 8px; text-align:left;">Calories</th>\n                                <th style="padding:2px 8px; text-align:left;">Fat</th>\n                                <th style="padding:2px 8px; text-align:left;">Carbs</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Frozen Yogurt</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">159</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">6</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">24</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Ice cream sandwich</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">237</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">9</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">37</td>\n                            </tr>\n                            <tr>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">Eclair</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">262</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">16</td>\n                                <td style="padding:2px 8px; border-top:1px solid #ddd;">23</td>\n                            </tr>\n                        </tbody>\n                    </table>\n',
                'title': '52/128',
                'subTitle': 'Recovery rate',
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
