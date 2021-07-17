<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-panel-chart</span></div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'default (WHighchartsVueDyn)'"
                ></demolink>

                <w-panel-chart
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'cmpName (WHighstockVueDyn)'"
                ></demolink>

                <w-panel-chart
                    :cmpName="'WHighstockVueDyn'"
                    :options="WPanelChart.options2"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'cmpName (WEchartsVueDyn)'"
                ></demolink>

                <w-panel-chart
                    :cmpName="'WEchartsVueDyn'"
                    :options="WPanelChart.options3"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'cmpName (WHighchartsBitmapDyn)'"
                ></demolink>

                <w-panel-chart
                    :cmpName="'WHighchartsBitmapDyn'"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'width & height'"
                ></demolink>

                <w-panel-chart
                    :width="700"
                    :height="450"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'scale'"
                ></demolink>

                <w-panel-chart
                    :scale="0.8"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'downloadPicture'"
                ></demolink>

                <w-panel-chart
                    :downloadPicture="true"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'downloadPicture & downloadPictureBtnTooltip'"
                ></demolink>

                <w-panel-chart
                    :downloadPicture="true"
                    :downloadPictureBtnTooltip="'下載圖片'"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'downloadPicture & downloadPictureFilenmae'"
                ></demolink>

                <w-panel-chart
                    :downloadPicture="true"
                    :downloadPictureFilenmae="'圖片名稱'"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'downloadPicture & downloadPictureBtnIcon'"
                ></demolink>

                <w-panel-chart
                    :downloadPicture="true"
                    :downloadPictureBtnIcon="mdiArrowDownBoldHexagonOutline"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-panel-chart'"
                    :casename="'downloadPicture & downloadPictureBtnIconColor & downloadPictureBtnIconColorHover & downloadPictureBtnIconColorFocus & downloadPictureBtnBackgroundColor & downloadPictureBtnBackgroundColorHover & downloadPictureBtnBackgroundColorFocus'"
                ></demolink>

                <w-panel-chart
                    :downloadPicture="true"
                    :downloadPictureBtnIconColor="'#f48'"
                    :downloadPictureBtnIconColorHover="'#f26'"
                    :downloadPictureBtnIconColorFocus="'#f26'"
                    :downloadPictureBtnBackgroundColor="'rgba(255,200,200,0.3)'"
                    :downloadPictureBtnBackgroundColorHover="'rgba(255,200,200,0.5)'"
                    :downloadPictureBtnBackgroundColorFocus="'rgba(255,200,200,0.5)'"
                    :options="WPanelChart.options1"
                ></w-panel-chart>

            </div>


        </div>


    </div>
</template>

<script>
import { mdiArrowDownBoldHexagonOutline } from '@mdi/js'
import demolink from './components/demolink.vue'
import WPanelChart from './components/WPanelChart.vue'


export default {
    components: {
        demolink,
        WPanelChart,
    },
    props: {
    },
    data: function() {
        let df = function(d) {
            let date = []
            let data = []
            for (let i = 0; i < d.length; i++) {
                let v = d[i]
                let now = new Date(v[0])
                let t = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-')
                date.push(t)
                data.push(v[1])
            }
            return {
                date: date,
                data: data,
            }
        }
        let rDataAAPL = df(window.dataAAPL)
        return {
            mdiArrowDownBoldHexagonOutline,
            'WPanelChart': {
                'options1': {
                    chart: {
                        animation: false, //關閉動畫
                    },
                    plotOptions: {
                        series: {
                            animation: false, //關閉動畫
                        },
                    },
                    title: {
                        text: 'AAPL Stock Price'
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: {
                            text: 'Price'
                        }
                    },
                    tooltip: {
                        headerFormat: '<div style="font-size:8pt;">{point.x:%Y/%m/%d %H:%M}</div><br/>',
                        pointFormat: ' Price: <b>{point.y}</b>'
                    },
                    series: [{
                        name: 'AAPL',
                        data: window.dataAAPL,
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
                },
                'options2': {
                    // rangeSelector: {
                    //     enabled: true,
                    //     selected: 1
                    // },
                    title: {
                        text: 'AAPL Stock Price'
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: {
                            text: 'Price'
                        }
                    },
                    series: [{
                        name: 'AAPL',
                        data: window.dataAAPL,
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
                },
                'options3': {
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%']
                        }
                    },
                    title: {
                        left: 'center',
                        text: 'AAPL Stock Price',
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none',
                                title: {
                                    zoom: 'Zoom',
                                    back: 'Zoom Reset'
                                }
                            },
                            restore: {
                                title: 'Restore',
                            },
                            saveAsImage: {
                                title: 'Download',
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: rDataAAPL.date
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 100
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    series: [
                        {
                            name: 'Price',
                            type: 'line',
                            itemStyle: {
                                color: 'rgba(20, 20, 200, 0.5)'
                            },
                            data: rDataAAPL.data
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
