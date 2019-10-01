<template>
    <div>


        <div class="head1">w-json-view</div>


        <div style="padding-left:30px;">


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-json-view
                    style="border:1px solid #ddd; width:400px;"
                    :data="WJsonView.data1"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'listHeight'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-json-view
                    style="border:1px solid #ddd; width:400px;"
                    :listHeight="250"
                    :data="WJsonView.data1"
                ></w-json-view>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'iconColor & keyColor & keyNumbersColor & numColor & strColor & bolColor & funColor'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-json-view
                    style="border:1px solid #ddd; width:400px;"
                    :iconColor="'#aaa'"
                    :keyColor="'#f6a'"
                    :keyNumbersColor="'#f26'"
                    :numColor="'#00f'"
                    :strColor="'#bbb'"
                    :bolColor="'#c5f'"
                    :funColor="'#fa6'"
                    :data="WJsonView.data1"
                ></w-json-view>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-json-view'"
                    :casename="'large data (20000 lines)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-json-view
                    style="border:1px solid #ddd;"
                    :data="WJsonView.data2"
                ></w-json-view>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WJsonView from './components/WJsonView.vue'
// console.log(btoa(encodeURIComponent(JSON.stringify(data))))
// console.log(JSON.parse(decodeURIComponent(atob(b))))

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
// })(1000001)
// console.log(JSON.stringify(data)) //使用1000001時約51.5mb

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
                'data1': { 'squadName': 'Super hero squad', 'fun': function() {}, 'homeTown': 'Metro City', 'formed': 2016, 'secretBase': 'Super tower', 'active': true, 'members': [{ 'name': 'Molecule Man', 'age': 29, 'secretIdentity': 'Dan Jukes', 'powers': ['Radiation resistance', 'Turning tiny', 'Radiation blast'] }, { 'name': 'Madame Uppercut', 'age': 39, 'secretIdentity': 'Jane Wilson', 'powers': ['Million tonne punch', 'Damage resistance', 'Superhuman reflexes'] }, { 'name': 'Eternal Flame', 'age': 1000000, 'secretIdentity': 'Unknown', 'powers': ['Immortality', 'Heat Immunity', 'Inferno', 'Teleportation', 'Interdimensional travel'] }] },
                'data2': (function(a) {
                    a /= 200; a = Math.max(a, 1); let b = { ph1_a: 123, ph1_b: 45.67, ph1_c: '123.456', ph1_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph1_e: !0, ph1_g: function() {}, ph1_h: [], ph1_j: {}, ph1_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph1_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph1_z: { ph2_a: 123, ph2_b: 45.67, ph2_c: '123.456', ph2_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph2_e: !0, ph2_g: function() {}, ph2_h: [], ph2_j: {}, ph2_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph2_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph2_z: { ph3_a: 123, ph3_b: 45.67, ph3_c: '123.456', ph3_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph3_e: !0, ph3_g: function() {}, ph3_h: [], ph3_j: {}, ph3_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph3_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph3_z: { ph4_a: 123, ph4_b: 45.67, ph4_c: '123.456', ph4_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph4_e: !0, ph4_g: function() {}, ph4_h: [], ph4_j: {}, ph4_k: { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }, ph4_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx', e: !0, f: [], g: {} }], ph4_z: { ph5_a: 123, ph5_b: 45.67, ph5_c: '123.456', ph5_d: 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', ph5_e: !0, ph5_f: !1, ph5_g: function() {}, ph5_h: [], ph5_j: {}, ph5_l: [123, 45.67, '123.456', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.', !0, !1, function() {}, { a: 321, b: 76.54, c: '654.321', d: '321 zyx' }] } } } } }; let c = []; for (let d = 0; d < a; d++)c.push(b); return c
                })(20000), //200000 20000 1000
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
