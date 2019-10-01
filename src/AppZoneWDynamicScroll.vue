<template>
    <div>


        <div class="head1">w-dynamic-scroll</div>


        <div style="padding-left:30px;">


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-dynamic-scroll'"
                    :casename="'listHeight'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-scroll
                    style="border:1px solid #ddd;"
                    :listHeight="500"
                    :rows="WDynamicScroll.data"
                >
                    <template v-slot:block="props">

                        <div style="display:table; padding:0px 10px;">

                            <div style="display:table-cell; color:#f26;">{{props.irow}}</div>

                            <div style="display:table-cell; padding-right:10px;">:</div>

                            <div style="display:table-cell; color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-scroll>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WDynamicScroll from './components/WDynamicScroll.vue'

// let data = (function(n) {
//     n /= 5
//     let tt = [
//         'Nam ac nibh imperdiet, gravida metus eget, sodales eros.',
//         'Duis accumsan urna eu risus congue efficitur.',
//         'Etiam eget dolor sit amet ipsum porttitor lacinia vel at diam.',
//         'Sed pulvinar leo ac elit ultricies scelerisque.',
//         'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.',
//     ]
//     let r = []
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < tt.length; j++) {
//             r.push(tt[j])
//         }
//     }
//     return r
// })(1000001)
// console.log(JSON.stringify(data)) //使用1000001時約238mb

export default {
    components: {
        demolink,
        WDynamicScroll,
    },
    props: {
    },
    data: function() {
        return {
            'WDynamicScroll': {
                'data': (function(a) {
                    a /= 5; let b = ['Nam ac nibh imperdiet, gravida metus eget, sodales eros.', 'Duis accumsan urna eu risus congue efficitur.', 'Etiam eget dolor sit amet ipsum porttitor lacinia vel at diam.', 'Sed pulvinar leo ac elit ultricies scelerisque.', 'Integer porttitor urna ultricies justo iaculis vulputate ac non neque. Etiam iaculis est quis urna consequat ornare. Suspendisse a augue sit amet urna tincidunt rhoncus sed non tellus. Mauris ultricies lectus sit amet tellus egestas, in interdum elit rhoncus. Nullam viverra lectus mattis felis semper, in vulputate lorem tincidunt. Suspendisse dapibus arcu id nunc blandit, ut egestas nisi pulvinar.']; let c = []; for (let d = 0; d < a; d++) for (let a = 0; a < b.length; a++)c.push(b[a]); return c
                })(100001), //1000001 100001 1000
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
