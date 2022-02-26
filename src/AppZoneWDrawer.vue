<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-drawer</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'default'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow1=!WDrawer.bShow1">Show({{WDrawer.bShow1}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow1"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%; border-right:1px solid #ddd;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'drawerWidth'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow2=!WDrawer.bShow2">Show({{WDrawer.bShow2}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow2"
                    :drawerWidth="300"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%; border-right:1px solid #ddd;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'multiple'"
                ></demolink>

                <w-drawer
                    style="width:600px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow3a"
                >

                    <template v-slot:drawer>

                        <w-list-vertical
                            style="height:100%; border-right:1px solid #ddd;"
                            :items="WDrawer.listPkgs"
                            :itemActive.sync="WDrawer.listPkgActive"
                        >
                            <template v-slot:header>
                                <div style="padding:5px 10px; font-size:0.7rem; color:#999;">
                                    Outer list
                                </div>
                            </template>
                        </w-list-vertical>

                    </template>

                    <template v-slot:content>

                        <w-drawer
                            style="width:100%; height:100%;"
                            v-model="WDrawer.bShow3b"
                        >

                            <template v-slot:drawer>

                                <w-list-vertical
                                    style="height:100%; border-right:1px solid #ddd;"
                                    :items="WDrawer.listItems"
                                    :itemActive.sync="WDrawer.listItemActive"
                                >
                                    <template v-slot:header>
                                        <div style="padding:5px 10px; font-size:0.7rem; color:#999;">
                                            Inner list
                                        </div>
                                    </template>
                                </w-list-vertical>

                            </template>

                            <template v-slot:content>
                                <div style="height:100%; overflow-y:auto;">

                                    <div style="padding-bottom:10px;">
                                        <v-btn depressed small elevation="2" @click="WDrawer.bShow3a=!WDrawer.bShow3a">Outer Show({{WDrawer.bShow3a}})</v-btn>
                                    </div>

                                    <div style="padding-bottom:10px;">
                                        <v-btn depressed small elevation="2" @click="WDrawer.bShow3b=!WDrawer.bShow3b">Inner Show({{WDrawer.bShow3b}})</v-btn>
                                    </div>

                                    <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                                    <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                                </div>
                            </template>

                        </w-drawer>

                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'mode'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow4=!WDrawer.bShow4">Show({{WDrawer.bShow4}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow4"
                    :mode="'from-right'"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%; border-left:1px solid #ddd;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'afloat'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow5=!WDrawer.bShow5">Show({{WDrawer.bShow5}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow5"
                    :afloat="true"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'afloat & overlayOpacity'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow6=!WDrawer.bShow6">Show({{WDrawer.bShow6}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow6"
                    :afloat="true"
                    :overlayOpacity="0.1"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'afloat & mode'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow7=!WDrawer.bShow7">Show({{WDrawer.bShow7}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow7"
                    :afloat="true"
                    :mode="'from-right'"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'afloat & afloatByFix'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow8=!WDrawer.bShow8">Show({{WDrawer.bShow8}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow8"
                    :afloat="true"
                    :afloatByFix="true"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'afloat & afloatByFix & mode'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow9=!WDrawer.bShow9">Show({{WDrawer.bShow9}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow9"
                    :afloat="true"
                    :afloatByFix="true"
                    :mode="'from-right'"
                >

                    <template v-slot:drawer>
                        <w-list-vertical
                            style="height:100%;"
                            :items="WDrawer.listItems"
                            :itemActive.sync="WDrawer.listItemActive"
                        ></w-list-vertical>
                    </template>

                    <template v-slot:content>
                        <div style="height:100%; overflow-y:auto;">
                            <div style="padding:10px; font-size:1.2rem;">{{WDrawer.title}}</div>
                            <div style="padding:0px 10px 10px 10px; font-size:0.9rem;">{{WDrawer.content}}</div>
                        </div>
                    </template>

                </w-drawer>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WListVertical from './components/WListVertical.vue'
import WDrawer from './components/WDrawer.vue'


export default {
    components: {
        demolink,
        WListVertical,
        WDrawer,
    },
    props: {
    },
    data: function() {
        return {
            'WDrawer': {
                'title': 'Article Title',
                'content': 'Here is an article content, texts are from Vuetify. There are three ways in which you can install Vuetify. The first (and recommended) way is to utilize the vuetify-loader or what we call automatic A-la-carte. This will ensure that your application only uses the features and styles from Vuetify that are needed, significantly reducing your application\'s compiled size. Keep in mind, when importing from vuetify/lib, the necessary styles are automatically imported for you.',
                'listItems': [
                    {
                        text: 'Interpreting',
                        icon: 'fas fa-american-sign-language-interpreting',
                    },
                    {
                        text: 'Search',
                        icon: 'fas fa-search',
                    },
                    {
                        text: 'Binoculars',
                        icon: 'fas fa-binoculars',
                    },
                    {
                        text: 'Building',
                        icon: 'fa-regular fa-building',
                    },
                    {
                        text: 'Tachometer-alt',
                        icon: 'fas fa-tachometer-alt',
                    },
                    {
                        text: 'Chess-king',
                        icon: 'fas fa-chess-king',
                    },


                    {
                        text: 'Calendar',
                        icon: 'fas fa-calendar-alt',
                    },
                    {
                        text: 'chart',
                        icon: 'fas fa-chart-bar',
                    },
                    {
                        text: 'Cloud-meatball',
                        icon: 'fas fa-cloud-meatball',
                    },
                    {
                        text: 'Cubes',
                        icon: 'fas fa-cubes',
                    },
                    {
                        text: 'Dungeon',
                        icon: 'fas fa-dungeon',
                    },
                ],
                'listPkgs': [
                    {
                        text: 'Balance',
                        icon: 'fas fa-balance-scale',
                    },
                    {
                        text: 'Connection',
                        icon: 'fas fa-bezier-curve',
                    },
                    {
                        text: 'Issue',
                        icon: 'fa-box-tissue',
                    },
                ],
                'listItemActive': {
                    text: 'Search',
                    icon: 'fas fa-search',
                },
                'listPkgActive': {
                    text: 'Balance',
                    icon: 'fas fa-balance-scale',
                },
                'bShow1': false,
                'bShow2': false,
                'bShow3a': false,
                'bShow3b': false,
                'bShow4': false,
                'bShow5': false,
                'bShow6': false,
                'bShow7': false,
                'bShow8': false,
                'bShow9': false,
            },
            'actions': [
                {

                }
            ],
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>
