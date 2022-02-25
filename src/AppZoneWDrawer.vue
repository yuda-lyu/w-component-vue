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
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow1"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent; height:100%; border-right:1px solid #ddd;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow2"
                    :drawerWidth="300"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent; height:100%; border-right:1px solid #ddd;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
                    :casename="'mode'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow3=!WDrawer.bShow3">Show({{WDrawer.bShow3}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow3"
                    :mode="'from-right'"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent; height:100%; border-left:1px solid #ddd;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow4=!WDrawer.bShow4">Show({{WDrawer.bShow4}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow4"
                    :afloat="true"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow5=!WDrawer.bShow5">Show({{WDrawer.bShow5}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow5"
                    :afloat="true"
                    :overlayOpacity="0.1"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent; height:100%; border-right:1px solid #ddd;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow6=!WDrawer.bShow6">Show({{WDrawer.bShow6}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow6"
                    :afloat="true"
                    :mode="'from-right'"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow7=!WDrawer.bShow7">Show({{WDrawer.bShow7}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow7"
                    :afloat="true"
                    :afloatByFix="true"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow8=!WDrawer.bShow8">Show({{WDrawer.bShow8}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd; _box-sizing:content-box;"
                    v-model="WDrawer.bShow8"
                    :afloat="true"
                    :afloatByFix="true"
                    :mode="'from-right'"
                >

                    <template v-slot:drawer>
                        <v-list style="padding:0px; background:transparent;"><v-list-item style="min-height:inherit; padding:10px;" :key="kitem" @click="function(){}" v-for="(item,kitem) in WDrawer.listItems"><div style="display:flex; align-items:center;"><div style="padding-right:10px; width:35px; text-align:center;"><v-icon>{{item.icon}}</v-icon></div><div>{{item.text}}</div></div></v-list-item></v-list>
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
import WDrawer from './components/WDrawer.vue'


export default {
    components: {
        demolink,
        WDrawer,
    },
    props: {
    },
    data: function() {
        return {
            'WDrawer': {
                'title': 'Article Title',
                'content': 'Here is a article content, texts are from Vuetify. There are three ways in which you can install Vuetify. The first (and recommended) way is to utilize the vuetify-loader or what we call automatic A-la-carte. This will ensure that your application only uses the features and styles from Vuetify that are needed, significantly reducing your application\'s compiled size. Keep in mind, when importing from vuetify/lib, the necessary styles are automatically imported for you.',
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

                ],
                'bShow1': false,
                'bShow2': false,
                'bShow3': false,
                'bShow4': false,
                'bShow5': false,
                'bShow6': false,
                'bShow7': false,
                'bShow8': false,
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
