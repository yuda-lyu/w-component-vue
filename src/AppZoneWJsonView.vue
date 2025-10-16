<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-json-view</span></div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'default'"
                ></demolink>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data1"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'viewHeightMax'"
                ></demolink>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :viewHeightMax="250"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'no viewHeightMax'"
                ></demolink>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :viewHeightMax="null"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'iconSize(24) & defItemHeight(32)'"
                ></demolink>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data1"
                    :iconSize="24"
                    :defItemHeight="32"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'rippleColor'"
                ></demolink>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :viewHeightMax="WJsonView.viewHeightMaxSync"
                    :rippleColor="'rgba(245,124,0,0.4)'"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'events'"
                ></demolink>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :viewHeightMax="WJsonView.viewHeightMaxSync"
                    @change-view-items="changeViewItems"
                    @change-height-of-items="changeHeightOfItems"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'toggleItemsByFun'"
                ></demolink>

                <div>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(0, true)">show(rows[0])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(0, false)">hide(rows[0])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(6, true)">show(rows[6])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(6, false)">hide(rows[6])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(9, true)">show(rows[9])</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsByFun(9, false)">hide(rows[9])</v-btn>
                </div>

                <w-json-view
                    ref="ref_toggleItemsByFun"
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :viewHeightMax="WJsonView.viewHeightMaxSync"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'toggleItemsAll'"
                ></demolink>

                <div>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsAll(true)">show all</v-btn>
                    <v-btn style="margin:0px 5px 5px 0px;" small @click="toggleItemsAll(false)">hide all</v-btn>
                </div>

                <w-json-view
                    ref="ref_toggleItemsAll"
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :viewHeightMax="WJsonView.viewHeightMaxSync"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'filterKeywords & noResultsText'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WJsonView.keywords"
                    />
                </div>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :filterKeywords="WJsonView.keywords"
                    :noResultsText="'There are no items to show...'"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'filterKeywords & funFilter'"
                ></demolink>

                <div style="margin-bottom:10px;">
                    <span style="padding-right:10px;">Search :</span>
                    <input
                        style="padding:2px 15px; color:#666; border:1px solid #fca; border-radius:30px; outline:none;"
                        v-model="WJsonView.keywords"
                    />
                </div>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data3"
                    :filterKeywords="WJsonView.keywords"
                    :funFilter="funFilter"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'iconColor & keyColor & keyNumbersColor & numColor & strColor & bolColor & funColor'"
                ></demolink>

                <w-json-view
                    style="width:350px; border:1px solid #ddd;"
                    :data="WJsonView.data1"
                    :iconColor="'#aaa'"
                    :keyColor="'#f6a'"
                    :keyNumbersColor="'#f26'"
                    :numColor="'#00f'"
                    :strColor="'#bababa'"
                    :bolColor="'#c5f'"
                    :funColor="'#fa6'"
                ></w-json-view>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'large data (15,500 lines)'"
                ></demolink>

                <w-json-view
                    style="border:1px solid #ddd;"
                    :data="WJsonView.data4"
                ></w-json-view>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WJsonView from './components/WJsonView.vue'

// let data = (function(n) {
//     n /= 200
//     let obj = {
//         ph1_a: 123,
//         ph1_b: 45.67,
//         ph1_c: '123.456',
//         ph1_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//         ph1_e: true,
//         ph1_g: function() {},
//         ph1_h: [],
//         ph1_j: {},
//         ph1_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} },
//         ph1_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', true, false, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} }],
//         ph1_z: {
//             ph2_a: 123,
//             ph2_b: 45.67,
//             ph2_c: '123.456',
//             ph2_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//             ph2_e: true,
//             ph2_g: function() {},
//             ph2_h: [],
//             ph2_j: {},
//             ph2_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} },
//             ph2_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', true, false, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} }],
//             ph2_z: {
//                 ph3_a: 123,
//                 ph3_b: 45.67,
//                 ph3_c: '123.456',
//                 ph3_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//                 ph3_e: true,
//                 ph3_g: function() {},
//                 ph3_h: [],
//                 ph3_j: {},
//                 ph3_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} },
//                 ph3_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', true, false, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} }],
//                 ph3_z: {
//                     ph4_a: 123,
//                     ph4_b: 45.67,
//                     ph4_c: '123.456',
//                     ph4_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//                     ph4_e: true,
//                     ph4_g: function() {},
//                     ph4_h: [],
//                     ph4_j: {},
//                     ph4_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} },
//                     ph4_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', true, false, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: true, f: [], g: {} }],
//                     ph4_z: {
//                         ph5_a: 123,
//                         ph5_b: 45.67,
//                         ph5_c: '123.456',
//                         ph5_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//                         ph5_e: true,
//                         ph5_f: false,
//                         ph5_g: function() {},
//                         ph5_h: [],
//                         ph5_j: {},
//                         ph5_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', true, false, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx' }],
//                     },
//                 },
//             },
//         },
//     }
//     let r = []
//     for (let i = 0; i < n; i++) {
//         r.push(obj)
//     }
//     return r
// })(100)
// console.log(JSON.stringify(data))

export default {
    components: {
        demolink,
        WJsonView,
    },
    props: {
    },
    data: function() {
        return {
            'WJsonView': {
                'viewHeightMaxSync': 400,
                'keywords': 'ci uadn',
                'data1': { 'squadName': 'Super hero squad', 'homeTown': 'Metro City', 'formed': 2016, 'secretBase': 'Super tower', 'active': true, 'arrayEmpth': [], 'members': [{ 'name': 'There are many variations of passages of Lorem Ipsum available', 'age': 29, 'secretIdentity': 'Dan Jukes', 'powers': ['Radiation resistance', 'Turning tiny', 'Radiation blast'] }, { 'name': 'Madame Uppercut', 'age': 39, 'secretIdentity': 'Jane Wilson', 'powers': ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'] }, { 'name': 'Eternal Flame', 'age': 1000000, 'secretIdentity': 'Unknown', 'powers': ['Immortality', 'Heat Immunity', 'Inferno', 'Teleportation', 'Interdimensional travel'] }] },
                'data2': { 'cookie': 'username-localhost-8888="2|1:0|10:1624431350|23:username-localhost-8888|44:ZmMxYzkwOGI0ODYxNDY1M2ExY2VhOGE3MmFhNWE4M2Y=|f8840028a36433a4e69e67f7eae6d188994203da2f54fe8af55d3e815f5cad0f', 'homeTown': 'Metro City', 'formed': 2016, 'secretBase': 'Super tower', 'active': true, 'arrayEmpth': [], 'members': [{ 'name': 'There are many variations of passages of Lorem Ipsum available', 'age': 29, 'secretIdentity': 'Dan Jukes', 'powers': ['Radiation resistance', 'Turning tiny', 'Radiation blast'] }, { 'name': 'Madame Uppercut', 'age': 39, 'secretIdentity': 'Jane Wilson', 'powers': ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'] }, { 'name': 'Eternal Flame', 'age': 1000000, 'secretIdentity': 'Unknown', 'powers': ['Immortality', 'Heat Immunity', 'Inferno', 'Teleportation', 'Interdimensional travel'] }] },
                'data3': ['squadName', 123, 45.678, 'Super hero squad', '[system::callfunc]abc', { 'homeTown': 'Metro City', 'formed': 2016, 'powers': ['Immortality', 'Heat Immunity', 'Inferno', 'Teleportation', 'Interdimensional travel'], 'members': { 'name': 'Molecule Man', 'age': 29, 'secretIdentity': 'Dan Jukes' } }],
                'data4': (function(a) {
                    a /= 200; a = Math.max(a, 1); let b = { ph1_a: 123, ph1_b: 45.67, ph1_c: '123.456', ph1_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph1_e: !0, ph1_g: '[system::callfunc]abc', ph1_h: [], ph1_j: {}, ph1_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph1_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, '[system::callfunc]abc', { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph1_z: { ph2_a: 123, ph2_b: 45.67, ph2_c: '123.456', ph2_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph2_e: !0, ph2_g: '[system::callfunc]abc', ph2_h: [], ph2_j: {}, ph2_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph2_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, '[system::callfunc]abc', { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph2_z: { ph3_a: 123, ph3_b: 45.67, ph3_c: '123.456', ph3_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph3_e: !0, ph3_g: '[system::callfunc]abc', ph3_h: [], ph3_j: {}, ph3_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph3_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, '[system::callfunc]abc', { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph3_z: { ph4_a: 123, ph4_b: 45.67, ph4_c: '123.456', ph4_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph4_e: !0, ph4_g: '[system::callfunc]abc', ph4_h: [], ph4_j: {}, ph4_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph4_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, '[system::callfunc]abc', { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph4_z: { ph5_a: 123, ph5_b: 45.67, ph5_c: '123.456', ph5_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph5_e: !0, ph5_f: !1, ph5_g: '[system::callfunc]abc', ph5_h: [], ph5_j: {}, ph5_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, '[system::callfunc]abc', { a: 321, b: 76.54, c: '654.321', d: '321 zyx' }] } } } } }; let c = []; for (let d = 0; d < a; d++)c.push(b); return c
                })(20000), //9000000 100000 50000 20000 10000 5000 1000 100 10
            },
            'actions': [
            ],
        }
    },
    // mounted: function() {
    //     console.log('WJsonView.data4', this.WJsonView.data4)
    // },
    methods: {
        changeViewItems: function(msg) {
            console.log('changeViewItems', msg)
        },
        changeHeightOfItems: function(msg) {
            console.log('changeHeightOfItems', msg)
        },
        funFilter: function(item, kws) {
            console.log('funFilter', item, kws)
            if (!item.text) { //若無text則跳出, 若要偵測父層節點得要針對key額外處理
                return false
            }
            let c = String(item.text).toLowerCase()
            let b = false
            for (let i = 0; i < kws.length; i++) {
                let kw = kws[i]
                b = b || c.indexOf(kw) >= 0
            }
            return b
        },
        toggleItemsByFun: function(ind, toUnfolding) {
            console.log('toggleItemsByFun', ind, toUnfolding)

            let vo = this

            //toggleItemsByFun
            vo.$refs.ref_toggleItemsByFun.toggleItemsByFun((rows) => {
                console.log('toggleItemsByFun rows', rows)
                return {
                    row: rows[ind],
                    toUnfolding,
                }
            })

        },
        toggleItemsAll: function(toUnfolding) {
            console.log('toggleItemsAll', toUnfolding)

            let vo = this

            //toggleItemsAll
            vo.$refs.ref_toggleItemsAll.toggleItemsAll(toUnfolding)

        },
    },
}
</script>

<style scoped>
</style>
