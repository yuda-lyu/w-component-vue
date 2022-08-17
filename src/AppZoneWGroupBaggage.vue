<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-group-baggage</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-group-baggage'"
                    :casename="'default'"
                ></demolink>

                <w-group-baggage
                    style="width:600px;"
                    :items="WGroupBaggage.items"
                >
                </w-group-baggage>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WGroupBaggage from './components/WGroupBaggage.vue'


export default {
    components: {
        demolink,
        WGroupBaggage,
    },
    props: {
    },
    data: function() {
        return {
            'WGroupBaggage': {
                items: [
                    {
                        tag: 'Audience',
                        text: 'Ad est alii munere indoctum, ei partiendo assentior vituperatoribus his. Per cu dicunt indoctum qualisque. Eam eu honestatis complectitur, iuvaret democritum interpretaris ad vix.',
                    },
                    {
                        tag: 'Conversions',
                        text: 'Etiam appellantur pri te, percipit atomorum consequat et mei, et pro liber ubique ceteros. Est at vocent instructior consequuntur.',
                    },
                    {
                        tag: 'Management',
                        text: 'Qui oratio partem percipit ex, brute omittantur eum no, id his iriure splendide voluptatum. Ei his etiam vivendo adversarium, nam iusto ridens ei, meis disputationi eos eu. Meis accumsan mea et, ut ubique deserunt dignissim vix. Duo ex dicant detracto tacimates.',
                    },
                    {
                        tag: 'Settings',
                        text: 'Sed et nisi maximus, aliquet justo in, consequat nisl.',
                    },
                    {
                        tag: 'Actions',
                        text: 'Morbi mi lectus, semper vitae dolor eget, venenatis pellentesque purus. Phasellus sollicitudin mattis molestie. Nunc felis mauris.',
                    },
                    {
                        tag: 'Real-Time',
                        text: 'Lorem ipsum dolor sit amet, id nec quod persius patrioque. Quaestio antiopam sea ex. Ius no illud mucius admodum, ea nonumes habemus interpretaris sit, eu ius suavitate definitionem.',
                    },
                ],
            },
            'actions': [
            ],
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>
