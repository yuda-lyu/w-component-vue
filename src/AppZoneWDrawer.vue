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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow101=!WDrawer.bShow101">Show({{WDrawer.bShow101}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow101"
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow102=!WDrawer.bShow102">Show({{WDrawer.bShow102}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow102"
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
                    :casename="'dragDrawerWidth & drawerWidth(sync)'"
                ></demolink>

                <div style="padding-bottom:10px; display:flex; align-items:center;">

                    <div style="">
                        <v-btn depressed small elevation="2" @click="WDrawer.bShow103=!WDrawer.bShow103">Show({{WDrawer.bShow103}})</v-btn>
                    </div>

                    <div style="padding-left:10px; font-size:0.8rem;">drawerWidth: {{WDrawer.drawerWidth}}</div>

                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow103"
                    :drawerWidth.sync="WDrawer.drawerWidth"
                    :dragDrawerWidth="true"
                >

                    <template v-slot:drawer>
                        <!-- 有使用dragDrawerWidth就不用給分隔線 -->
                        <w-list-vertical
                            style="height:100%; _border-right:1px solid #ddd;"
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
                    :casename="'dragDrawerWidth & drawerWidthMin & drawerWidthMax'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow104=!WDrawer.bShow104">Show({{WDrawer.bShow104}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow104"
                    _drawerWidth.sync="WDrawer.drawerWidth"
                    :dragDrawerWidth="true"
                    :drawerWidthMin="150"
                    :drawerWidthMax="300"
                >

                    <template v-slot:drawer>
                        <!-- 有使用dragDrawerWidth就不用給分隔線 -->
                        <w-list-vertical
                            style="height:100%; _border-right:1px solid #ddd;"
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
                    :casename="'dragDrawerWidth & drawerBarColor & drawerBarSize'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow105=!WDrawer.bShow105">Show({{WDrawer.bShow105}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow105"
                    _drawerWidth.sync="WDrawer.drawerWidth"
                    :dragDrawerWidth="true"
                    :drawerBarColor="'rgba(0, 0, 0, 0.1)'"
                    :drawerBarSize="6"
                >

                    <template v-slot:drawer>
                        <!-- 有使用dragDrawerWidth就不用給分隔線 -->
                        <w-list-vertical
                            style="height:100%; _border-right:1px solid #ddd;"
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
                    :casename="'dragDrawerWidth & drawerBarBorderColor & drawerBarBorderSize'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow106=!WDrawer.bShow106">Show({{WDrawer.bShow106}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow106"
                    _drawerWidth.sync="WDrawer.drawerWidth"
                    :dragDrawerWidth="true"
                    :drawerBarBorderColor="'rgba(200,200,200,0.2)'"
                    :drawerBarBorderSize="5"
                >

                    <template v-slot:drawer>
                        <!-- 有使用dragDrawerWidth就不用給分隔線 -->
                        <w-list-vertical
                            style="height:100%; _border-right:1px solid #ddd;"
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
                    :casename="'multiple & dragDrawerWidth & drawerWidthMin & drawerWidthMax'"
                ></demolink>

                <w-drawer
                    style="width:600px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow107a"
                    :dragDrawerWidth="true"
                    :drawerWidthMin="50"
                    :drawerWidthMax="250"
                >

                    <template v-slot:drawer>

                        <!-- 有使用dragDrawerWidth就不用給分隔線 -->
                        <w-list-vertical
                            style="height:100%; _border-right:1px solid #ddd;"
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
                            v-model="WDrawer.bShow107b"
                            :dragDrawerWidth="true"
                            :drawerWidthMin="50"
                            :drawerWidthMax="250"
                        >

                            <template v-slot:drawer>

                                <!-- 有使用dragDrawerWidth就不用給分隔線 -->
                                <w-list-vertical
                                    style="height:100%; _border-right:1px solid #ddd;"
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
                                        <v-btn depressed small elevation="2" @click="WDrawer.bShow107a=!WDrawer.bShow107a">Outer Show({{WDrawer.bShow107a}})</v-btn>
                                    </div>

                                    <div style="padding-bottom:10px;">
                                        <v-btn depressed small elevation="2" @click="WDrawer.bShow107b=!WDrawer.bShow107b">Inner Show({{WDrawer.bShow107b}})</v-btn>
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow108=!WDrawer.bShow108">Show({{WDrawer.bShow108}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow108"
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
                    :casename="'mode & dragDrawerWidth'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow109=!WDrawer.bShow109">Show({{WDrawer.bShow109}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow109"
                    :mode="'from-right'"
                    :dragDrawerWidth="true"
                >

                    <template v-slot:drawer>
                        <!-- 有使用dragDrawerWidth就不用給分隔線 -->
                        <w-list-vertical
                            style="height:100%; _border-left:1px solid #ddd;"
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow110=!WDrawer.bShow110">Show({{WDrawer.bShow110}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow110"
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
                    :casename="'afloat & dragDrawerWidth'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow111=!WDrawer.bShow111">Show({{WDrawer.bShow111}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow111"
                    :afloat="true"
                    :dragDrawerWidth="true"
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow112=!WDrawer.bShow112">Show({{WDrawer.bShow112}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow112"
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow113=!WDrawer.bShow113">Show({{WDrawer.bShow113}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow113"
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
                    :casename="'afloat & mode & dragDrawerWidth'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow114=!WDrawer.bShow114">Show({{WDrawer.bShow114}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow114"
                    :afloat="true"
                    :mode="'from-right'"
                    :dragDrawerWidth="true"
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow115=!WDrawer.bShow115">Show({{WDrawer.bShow115}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow115"
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
                    :casename="'afloat & afloatByFix & dragDrawerWidth'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow116=!WDrawer.bShow116">Show({{WDrawer.bShow116}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow116"
                    :afloat="true"
                    :afloatByFix="true"
                    :dragDrawerWidth="true"
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
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow117=!WDrawer.bShow117">Show({{WDrawer.bShow117}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow117"
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


            <div class="bk">
                <demolink
                    :kbname="'w-drawer'"
                    :casename="'afloat & afloatByFix & mode & dragDrawerWidth'"
                ></demolink>

                <div style="padding-bottom:10px;">
                    <v-btn depressed small elevation="2" @click="WDrawer.bShow118=!WDrawer.bShow118">Show({{WDrawer.bShow118}})</v-btn>
                </div>

                <w-drawer
                    style="width:500px; height:400px; border:1px solid #ddd;"
                    v-model="WDrawer.bShow118"
                    :afloat="true"
                    :afloatByFix="true"
                    :mode="'from-right'"
                    :dragDrawerWidth="true"
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
                'drawerWidth': 300,
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
                'bShow101': false,
                'bShow102': false,
                'bShow103': false,
                'bShow104': false,
                'bShow105': false,
                'bShow106': false,
                'bShow107a': false,
                'bShow107b': false,
                'bShow108': false,
                'bShow109': false,
                'bShow110': false,
                'bShow111': false,
                'bShow112': false,
                'bShow113': false,
                'bShow114': false,
                'bShow115': false,
                'bShow116': false,
                'bShow117': false,
                'bShow118': false,
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
