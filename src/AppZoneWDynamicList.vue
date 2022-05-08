<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-dynamic-list</span></div>


        <div style="padding:0px;">


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'default'"
                ></demolink>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data1"
                >
                    <template v-slot="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.index+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'viewHeightMax'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="WDynamicList.viewHeightMax=250">set height to 250px</v-btn>
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="WDynamicList.viewHeightMax=350">set height to 350px</v-btn>
                </div>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :viewHeightMax="WDynamicList.viewHeightMax"
                    :rows="WDynamicList.data1"
                >
                    <template v-slot="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.index+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999; word-break:normal;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'change rows'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="WDynamicList.changeText=false">original set</v-btn>
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="WDynamicList.changeText=true">other set</v-btn>
                </div>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.changeText?WDynamicList.data2:WDynamicList.data1"
                >
                    <template v-slot="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.index+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'change slot'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="WDynamicList.changeSlot=false">original slot</v-btn>
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="WDynamicList.changeSlot=true">other slot</v-btn>
                </div>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data1"
                >
                    <template v-slot="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;" v-if="!WDynamicList.changeSlot">

                            <div style="color:#f26;">{{props.index+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999;">{{props.row}}</div>

                        </div>

                        <div style="padding:10px 20px;" v-else>

                            <div>
                                <span style="color:#99f; font-size:0.7rem; margin-right:5px;">Number:</span>
                                <span style="color:#f26; font-size:0.7rem;">{{props.index+1}}</span>
                            </div>

                            <div style="color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'filterKeywords & noResultsText'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WDynamicList.keywords"
                    />
                </div>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :filterKeywords="WDynamicList.keywords"
                    :noResultsText="'There are no items to show...'"
                    :rows="WDynamicList.data1"
                >
                    <template v-slot="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.index+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999; word-break:normal;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'render'"
                ></demolink>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data1"
                    @render="render"
                >
                    <template v-slot="props">

                        <div style="display:flex; align-items:flex-start; padding:5px 15px;">

                            <div style="color:#f26;">{{props.index+1}}</div>

                            <div style="padding-right:10px;">:</div>

                            <div style="color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'slot item with image'"
                ></demolink>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data3"
                >
                    <template v-slot="props">

                        <div style="display:flex; padding:15px;">

                            <div style="padding:5px 20px 0px 0px; max-height:53px;">
                                <img style="border-radius:50%; width:48px; height:48px;" :src="props.row.avatar" alt="avatar" />
                            </div>

                            <div style="width:100%;">

                                <div style="padding-bottom:5px;">
                                    <div style="display:inline-block; vertical-align:middle; padding:1px 9px; color:#fff; background:#f26; border-radius:10px; font-size:10px; line-height:14px;">{{props.index+1}}</div>
                                    <div style="display:inline-block; vertical-align:middle; font-size:14px; line-height:14px; padding-left:7px;">{{props.row.name}}</div>
                                </div>

                                <div style="font-size:12px; color:#999;">{{props.row.msg}}</div>

                            </div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk dz">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'processItems'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="processItemsByFun">hide items by fun</v-btn>
                    <v-btn style="margin:5px;" depressed small elevation="2" @click="processItemsByInd">hide items by ind</v-btn>
                </div>

                <w-dynamic-list
                    ref="wdl"
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data4"
                >
                    <template v-slot="props">

                        <div style="display:flex; padding:15px;">

                            <div style="padding:5px 20px 0px 0px; max-height:53px;">
                                <img style="border-radius:50%; width:48px; height:48px;" :src="props.row.avatar" alt="avatar" />
                            </div>

                            <div style="width:100%;">

                                <div style="padding-bottom:5px;">
                                    <div style="display:inline-block; vertical-align:middle; padding:1px 9px; color:#fff; background:#f26; border-radius:10px; font-size:10px; line-height:14px;">{{props.index+1}}</div>
                                    <div style="display:inline-block; vertical-align:middle; font-size:14px; line-height:14px; padding-left:7px;">{{props.row.name}}</div>
                                </div>

                                <div style="font-size:12px; color:#999;">{{props.row.msg}}</div>

                            </div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


            <div class="bk" style="display:block; margin:0px 10px 0px 0px;">
                <demolink
                    :kbname="'w-dynamic-list'"
                    :casename="'large data (1,000,000 items)'"
                ></demolink>

                <w-dynamic-list
                    style="border:1px solid #ddd;"
                    :rows="WDynamicList.data5"
                >
                    <template v-slot="props">

                        <div style="display:flex; padding:15px;">

                            <div style="padding:5px 20px 0px 0px; max-height:53px;">
                                <img style="border-radius:50%; width:48px; height:48px;" :src="props.row.avatar" alt="avatar" />
                            </div>

                            <div style="width:100%;">

                                <div style="padding-bottom:5px;">
                                    <div style="display:inline-block; vertical-align:middle; padding:1px 9px; color:#fff; background:#f26; border-radius:10px; font-size:10px; line-height:14px;">{{props.index+1}}</div>
                                    <div style="display:inline-block; vertical-align:middle; font-size:14px; line-height:14px; padding-left:7px;">{{props.row.name}}</div>
                                </div>

                                <div style="font-size:12px; color:#999;">{{props.row.msg}}</div>

                            </div>

                        </div>

                    </template>
                </w-dynamic-list>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WDynamicList from './components/WDynamicList.vue'


// let data = (function(n) {
//     n /= 5
//     let tt = [
//         {
//             name: 'Jason Oner',
//             msg: 'Boost campaign performance by targeting specific user groups.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
//         },
//         {
//             name: 'Travis Howard',
//             msg: 'Determine the exact users you\'d like to target with a message or an experiment, based on behavioral data, like watching a video, or abandoning a cart, and demographic data, like age or location.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
//         },
//         {
//             name: 'Ali Connors',
//             msg: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
//         },
//         {
//             name: 'Cindy Baker',
//             msg: 'Easily build highly personalized messages, and test multiple versions to see what works—all in Mixpanel, no code required.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
//         },
//         {
//             name: 'Deborah Lee',
//             msg: 'Set detailed behavioral triggers, sequences, and rate limits for messages, to ensure that each campaign is relevant, timely, and delivered at the right pace.',
//             avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
//         },
//     ]
//     let r = []
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < tt.length; j++) {
//             r.push(tt[j])
//         }
//     }
//     return r
// })(100)
// console.log(JSON.stringify(data))


export default {
    components: {
        demolink,
        WDynamicList,
    },
    props: {
    },
    data: function() {
        let ts1 = [
            'Examine trends in the movement of guns across different states.',
            'Code of Federal Regulations - Alcohol, Tobacco Products and Firearms',
            '1980-2014 November General Election Turnout and Registration',
            'Reported Voting and Registration, by Sex and Single Years of Age: November 2016',
            'felon-disenfranchisement',
            '623e708e-574e-45a2-9dc9-b53178903325',
            'https://assembly-public-spotlight.s3.amazonaws.com/assets/images/public-welcome/card_disenfranchisement.jpg',
            'Disenfranchisement patterns by General Election.',
            'Estimate how felon enfranchisement could affect close elections. Track how disenfranchisement has varied over time. an American non-profit journalism outlet dedicated to expanding media coverage on the state of guns in the U.S., spent 11 months amassing data on stolen and recovered guns. They filed hundreds of public record requests to over 1,000 law enforcement agencies in 36 states to investigate what happens to guns when they are reported stolen. The data reveals that guns were recovered by a variety of means, from being turned in as evidence or by abandonment.',
            'Vivien Ngo, Data Journalism Fellow.',
        ]
        let ts2 = [
            'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'But I must explain to you how all this mistaken idea of denouncing.',
            'It is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences',
            'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple.',
            'Tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        ]
        return {
            'WDynamicList': {
                'viewHeightMax': 250,
                'keywords': 'fede 80',
                'changeText': false,
                'changeSlot': false,
                'data1': ts1,
                'data2': ts2,
                'data3': (function(a) {
                    a /= 5; let b = [{ name: 'Jason Oner', msg: 'Boost campaign performance by targeting specific user groups.', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }, { name: 'Travis Howard', msg: 'Determine the exact users you\'d like to target with a message or an experiment, based on behavioral data, like watching a video, or abandoning a cart, and demographic data, like age or location.', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' }, { name: 'Ali Connors', msg: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar. Examine trends in the movement of guns across different states. Code of Federal Regulations - Alcohol, Tobacco Products and Firearms 1980-2014 November General Election Turnout and Registration. Reported Voting and Registration, by Sex and Single Years of Age: November 2016. Map felon disenfranchisement patterns by state.', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }, { name: 'Cindy Baker', msg: 'Easily build highly personalized messages, and test multiple versions to see what works\u2014all in Mixpanel, no code required.', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }, { name: 'Deborah Lee', msg: 'Set detailed behavioral triggers, sequences, and rate limits for messages, to ensure that each campaign is relevant, timely, and delivered at the right pace.', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }]; let c = []; for (let d = 0; d < a; d++) for (let a = 0; a < b.length; a++)c.push(b[a]); return c
                })(100),
                'data4': (function(a) {
                    a /= 5; let b = [{ name: 'Jason Oner', msg: 'Boost campaign performance by targeting specific user groups.', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }, { name: 'Travis Howard', msg: 'Determine the exact users you\'d like to target with a message or an experiment, based on behavioral data, like watching a video, or abandoning a cart, and demographic data, like age or location.', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' }, { name: 'Ali Connors', msg: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar. Examine trends in the movement of guns across different states. Code of Federal Regulations - Alcohol, Tobacco Products and Firearms 1980-2014 November General Election Turnout and Registration. Reported Voting and Registration, by Sex and Single Years of Age: November 2016. Map felon disenfranchisement patterns by state.', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }, { name: 'Cindy Baker', msg: 'Easily build highly personalized messages, and test multiple versions to see what works\u2014all in Mixpanel, no code required.', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }, { name: 'Deborah Lee', msg: 'Set detailed behavioral triggers, sequences, and rate limits for messages, to ensure that each campaign is relevant, timely, and delivered at the right pace.', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }]; let c = []; for (let d = 0; d < a; d++) for (let a = 0; a < b.length; a++)c.push(b[a]); return c
                })(100),
                'data5': (function(a) {
                    a /= 5; let b = [{ name: 'Jason Oner', msg: 'Boost campaign performance by targeting specific user groups.', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' }, { name: 'Travis Howard', msg: 'Determine the exact users you\'d like to target with a message or an experiment, based on behavioral data, like watching a video, or abandoning a cart, and demographic data, like age or location.', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' }, { name: 'Ali Connors', msg: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar. Examine trends in the movement of guns across different states. Code of Federal Regulations - Alcohol, Tobacco Products and Firearms 1980-2014 November General Election Turnout and Registration. Reported Voting and Registration, by Sex and Single Years of Age: November 2016. Map felon disenfranchisement patterns by state.', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }, { name: 'Cindy Baker', msg: 'Easily build highly personalized messages, and test multiple versions to see what works\u2014all in Mixpanel, no code required.', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }, { name: 'Deborah Lee', msg: 'Set detailed behavioral triggers, sequences, and rate limits for messages, to ensure that each campaign is relevant, timely, and delivered at the right pace.', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }]; let c = []; for (let d = 0; d < a; d++) for (let a = 0; a < b.length; a++)c.push(b[a]); return c
                })(1000000), //20000000 1000000 500000 100000 50000 1000
            },
            'actions': [
            ],
        }
    },
    methods: {
        processItemsByFun: function() {
            let vo = this
            let opt = {
                fun: function(items) { //可支援sync函數
                    for (let i = 0; i < items.length; i++) {
                        items[i].displayShow = (i % 10 === 0)
                    }
                },
                // fun: async function(items) { //可支援async函數
                //     for (let i = 0; i < items.length; i++) {
                //         items[i].displayShow = (i % 10 === 0)
                //     }
                // },
            }
            vo.$refs.wdl.processItems(opt)
        },
        processItemsByInd: function() {
            let vo = this
            let opt
            opt = {
                indStart: 0,
                indEnd: 99,
                displayShow: true,
            }
            vo.$refs.wdl.processItems(opt)
            opt = {
                indStart: 0,
                indEnd: 5,
                displayShow: false,
            }
            vo.$refs.wdl.processItems(opt)
            opt = {
                indStart: 8,
                indEnd: 97,
                displayShow: false,
            }
            vo.$refs.wdl.processItems(opt)
        },
        render: function(msg) {
            console.log('render', msg)
        },
    },
}
</script>

<style scoped>
</style>
