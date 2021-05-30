<template>
    <div>


        <div class="head1" style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('https://yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-leaflet-vue-dyn</div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//leafletjs.com/" target="_blank" rel="noreferrer noopener">leaflet</a>
            <span style="margin:0px 10px">|</span>
            <a href="//leafletjs.com/examples.html" target="_blank" rel="noreferrer noopener">leaflet examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//vue2-leaflet.netlify.app/" target="_blank" rel="noreferrer noopener">Vue2Leaflet</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-leaflet-vue" target="_blank" rel="noreferrer noopener">w-leaflet-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-leaflet-vue/examples/app.html" target="_blank" rel="noreferrer noopener">w-leaflet-vue examples</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-leaflet-vue-dyn'"
                    :casename="'pointSets'"
                ></demolink>

                <w-leaflet-vue-dyn
                    style="width:90vw; height:600px;"
                    :opt="WLeafletVueDyn.pointSets"
                ></w-leaflet-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-leaflet-vue-dyn'"
                    :casename="'polygonSets'"
                ></demolink>

                <w-leaflet-vue-dyn
                    style="width:90vw; height:600px;"
                    :opt="WLeafletVueDyn.polygonSets"
                ></w-leaflet-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-leaflet-vue-dyn'"
                    :casename="'contourSets'"
                ></demolink>

                <w-leaflet-vue-dyn
                    style="width:90vw; height:600px;"
                    :opt="WLeafletVueDyn.contourSets"
                ></w-leaflet-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-leaflet-vue-dyn'"
                    :casename="'contourSet for rain data'"
                ></demolink>

                <w-leaflet-vue-dyn
                    style="width:90vw; height:600px;"
                    :opt="WLeafletVueDyn.largeSet"
                ></w-leaflet-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WLeafletVueDyn from './components/WLeafletVueDyn.vue'


export default {
    components: {
        demolink,
        WLeafletVueDyn,
    },
    props: {
    },
    data: function() {
        let ptsStation = window.dataRain
        let ptsContour = []
        for (let i = 0; i < ptsStation.length; i++) {
            let v = ptsStation[i]
            ptsContour.push([v.latLng[0], v.latLng[1], v.rain])
        }
        let ptsClip = window.dataRainClip
        return {
            'WLeafletVueDyn': {
                'pointSets': {
                    pointSets: [
                        {
                            title: 'pointSet A',
                            msg: 'msg from pointSet A',
                            points: [
                                {
                                    title: 'point A-1',
                                    msg: 'msg from data A-1',
                                    latLng: [24.20, 121.27],
                                },
                                {
                                    title: 'point A-2',
                                    msg: 'msg from data A-2',
                                    latLng: [23.90, 120.97],
                                },
                            ],
                            visible: true,
                        },
                        {
                            title: 'pointSet B',
                            msg: 'msg from pointSet B',
                            points: [
                                {
                                    title: 'point B-1',
                                    msg: 'msg from data B-1',
                                    latLng: [23.30, 120.57],
                                },
                                {
                                    title: 'point B-2',
                                    msg: 'msg from data B-2',
                                    latLng: [23.00, 120.87],
                                },
                            ],
                            visible: false,
                        },
                    ],
                },
                'polygonSets': {
                    center: [25, 121.58],
                    zoom: 10,
                    polygonSets: [
                        {
                            title: 'polygonSet A',
                            msg: 'msg from polygonSet A',
                            latLngs: [ //此結構代表1個polygon, leaflet可支援
                                [ //add p1
                                    [24.96, 121.41], [25.11, 121.47], [25.06, 121.69], [24.99, 121.61], [24.95, 121.53]
                                ],
                                [ //c1 XOR p1
                                    [24.98, 121.45], [25.07, 121.49], [25.06, 121.54], [25.00, 121.50]
                                ],
                                [ //add p1-1 in c1
                                    [25.017, 121.48], [25.032, 121.49], [25.036, 121.50], [25.02, 121.502]
                                ],
                                [ //c2 XOR p1
                                    [24.99, 121.54], [25.056, 121.56], [25.05, 121.61], [25.00, 121.59]
                                ],
                                [ //add p2
                                    [24.92, 121.60], [25.045, 121.75], [24.99, 121.79], [24.93, 121.74],
                                ],
                                [ //c3 XOR p1, p2
                                    [24.961, 121.523], [24.979, 121.551], [24.950, 121.674], [24.887, 121.606],
                                ],
                            ],
                            // latLngs: [ //此結構代表1個multiPolygon, leaflet可支援
                            //     [
                            //         [ //add p1
                            //             [24.96, 121.41], [25.11, 121.47], [25.06, 121.69], [24.99, 121.61], [24.95, 121.53]
                            //         ],
                            //     ],
                            //     [
                            //         [ //c1 XOR p1
                            //             [24.98, 121.45], [25.07, 121.49], [25.06, 121.54], [25.00, 121.50]
                            //         ],
                            //     ],
                            //     [
                            //         [ //add p1-1 in c1
                            //             [25.017, 121.48], [25.032, 121.49], [25.036, 121.50], [25.02, 121.502]
                            //         ],
                            //     ],
                            //     [
                            //         [ //c2 XOR p1
                            //             [24.99, 121.54], [25.056, 121.56], [25.05, 121.61], [25.00, 121.59]
                            //         ],
                            //     ],
                            //     [
                            //         [ //add p2
                            //             [24.92, 121.60], [25.045, 121.75], [24.99, 121.79], [24.93, 121.74],
                            //         ],
                            //     ],
                            //     [
                            //         [ //c3 XOR p1, p2
                            //             [24.961, 121.523], [24.979, 121.551], [24.950, 121.674], [24.887, 121.606],
                            //         ],
                            //     ],
                            // ],
                            visible: true,
                        },
                        {
                            title: 'polygonSet B',
                            msg: 'msg from polygonSet B',
                            latLngs: [
                                [ //add p3
                                    [24.971, 121.372], [24.976, 121.434], [24.937, 121.473], [24.918, 121.418]
                                ],
                                [ //add p4
                                    [24.90, 121.14], [24.97, 121.09], [25.05, 121.177], [24.95, 121.32]
                                ],
                            ],
                            visible: false,
                        },
                    ],
                },
                'contourSets': {
                    center: [24.084, 121.068],
                    zoom: 8,
                    contourSets: [
                        {
                            title: 'contourSet A',
                            msg: 'msg from contourSet A',
                            points: [
                                [24.325, 120.786, 0], [23.944, 120.968, 10], [24.884, 121.234, 20], [24.579, 121.345, 80], [24.664, 121.761, 40], [23.803, 121.397, 30],
                                [23.727, 120.772, 0], [23.539, 120.975, 0], [23.612, 121.434, 0],
                                // [24.311, 121.116, 17], [24.351, 121.399, -4],
                                [23.193, 120.355, 22], [23.456, 120.890, 42], [23.280, 120.551, 25], [23.162, 121.247, 5],
                            ],
                            visible: true,
                        },
                        {
                            title: 'contourSet B',
                            msg: 'msg from contourSet B',
                            points: [
                                [22.607, 120.416, 0], [22.967, 120.663, 15], [22.592, 120.922, 20], [22.717, 120.644, 45],
                            ],
                            visible: false,
                        },
                    ],
                },
                'largeSet': {
                    center: [24.084, 121.068],
                    zoom: 8,
                    contourSets: [
                        {
                            title: 'Rain contour',
                            msg: 'data from CWB',
                            points: ptsContour,
                            polygonClipOuter: ptsClip,
                            //放大後瀏覽時移動滑鼠於0-10會比較閃
                            // changeStyleWhenHover: false, //關閉hover的高亮效果
                            gradient: {
                                0: 'rgba(255, 255, 255, 0)', //將0-10區間改為全透明
                                0.2: 'rgba(254, 178, 76, 0.5)',
                                0.4: 'rgba(252, 78, 42, 0.5)',
                                0.6: 'rgba(220, 58, 38, 0.5)',
                                0.8: 'rgba(200, 40, 23, 0.5)',
                                1: 'rgba(180, 30, 60, 0.5)'
                            },
                            visible: true,
                            order: 0
                        }
                    ],
                    pointSets: [
                        {
                            title: 'Rain point',
                            msg: 'data from CWB',
                            points: ptsStation,
                            visible: false,
                            order: 1,
                            tooltip: function(v) {
                                console.log('tooltip v', v)
                                let c = ''
                                c += '<div style="padding:5px 10px;">'
                                c += '<div style="width:150px; color:#222; margin-bottom:5px; white-space:nowrap;"><span style="font-size:0.9rem; color:#f26;">[' + v.point.title + ']</span> <span style="font-size:0.8rem; ">' + v.point.msg + '</span></div>'
                                c += '<div style="font-size:0.7rem; color:#666; white-space:normal;">降雨量 ' + v.point.rain + ' cm</div>'
                                c += '</div>'
                                return c
                            }
                        }
                    ]
                },
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
