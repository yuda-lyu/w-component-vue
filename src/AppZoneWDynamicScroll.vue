<template>
    <div>


        <div class="head1">w-dynamic-scroll</div>


        <div style="padding-left:30px;">


            <div class="bk">
                <demolink
                    :kbname="'w-dynamic-scroll'"
                    :casename="'default'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-scroll
                    style="border:1px solid #ddd; width:400px;"
                    :rows="WDynamicScroll.data1"
                >
                    <template v-slot:block="props">

                        <div style="display:table; padding:3px 10px;">

                            <div style="display:table-cell; color:#f26;">{{props.irow}}</div>

                            <div style="display:table-cell; padding-right:10px;">:</div>

                            <div style="display:table-cell; color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-scroll>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-dynamic-scroll'"
                    :casename="'listHeight'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-scroll
                    style="border:1px solid #ddd; width:400px;"
                    :listHeight="250"
                    :rows="WDynamicScroll.data1"
                >
                    <template v-slot:block="props">

                        <div style="display:table; padding:3px 10px;">

                            <div style="display:table-cell; color:#f26;">{{props.irow}}</div>

                            <div style="display:table-cell; padding-right:10px;">:</div>

                            <div style="display:table-cell; color:#999;">{{props.row}}</div>

                        </div>

                    </template>
                </w-dynamic-scroll>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-dynamic-scroll'"
                    :casename="'large data (100000 lines)'"
                    :kind="'nokind'"
                    :shell="'pure'"
                ></demolink>

                <w-dynamic-scroll
                    style="border:1px solid #ddd;"
                    :rows="WDynamicScroll.data2"
                >
                    <template v-slot:block="props">

                        <div style="display:table; padding:3px 10px;">

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
                'data1': [
                    'Examine trends in the movement of guns across different states.',
                    'Code of Federal Regulations - Alcohol, Tobacco Products and Firearms',
                    '1980-2014 November General Election Turnout and Registration',
                    'Reported Voting and Registration, by Sex and Single Years of Age: November 2016',
                    'felon-disenfranchisement',
                    '623e708e-574e-45a2-9dc9-b53178903325',
                    'https://assembly-public-spotlight.s3.amazonaws.com/assets/images/public-welcome/card_disenfranchisement.jpg',
                    'Map felon disenfranchisement patterns by state.',
                    'Estimate how felon enfranchisement could affect close elections. Track how disenfranchisement has varied over time. an American non-profit journalism outlet dedicated to expanding media coverage on the state of guns in the U.S., spent 11 months amassing data on stolen and recovered guns. They filed hundreds of public record requests to over 1,000 law enforcement agencies in 36 states to investigate what happens to guns when they are reported stolen. The data reveals that guns were recovered by a variety of means, from being turned in as evidence or by abandonment.',
                    'Vivien Ngo, Data Journalism Fellow.',
                ],
                'data2': (function(a) {
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
