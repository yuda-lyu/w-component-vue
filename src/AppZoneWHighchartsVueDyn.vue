<template>
    <div class="bkh">


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-highcharts-vue-dyn</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//www.highcharts.com/" target="_blank" rel="noreferrer noopener">highcharts</a>
            <span style="margin:0px 10px">|</span>
            <a href="//www.highcharts.com/demo" target="_blank" rel="noreferrer noopener">highcharts examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/weizhenye/vue-highcharts" target="_blank" rel="noreferrer noopener">vue-highcharts</a>
        </div>


        <div>


            <div class="bk">
                <demolink
                    :kbname="'w-highcharts-vue-dyn'"
                    :casename="'line'"
                ></demolink>

                <w-highcharts-vue-dyn
                    style="width:620px;"
                    :options="WHighchartsVueDyn.options1"
                ></w-highcharts-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-highcharts-vue-dyn'"
                    :casename="'area'"
                ></demolink>

                <w-highcharts-vue-dyn
                    style="width:620px;"
                    :options="WHighchartsVueDyn.options2"
                ></w-highcharts-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-highcharts-vue-dyn'"
                    :casename="'bar'"
                ></demolink>

                <w-highcharts-vue-dyn
                    style="width:620px;"
                    :options="WHighchartsVueDyn.options3"
                ></w-highcharts-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-highcharts-vue-dyn'"
                    :casename="'pie'"
                ></demolink>

                <w-highcharts-vue-dyn
                    style="width:620px;"
                    :options="WHighchartsVueDyn.options4"
                ></w-highcharts-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-highcharts-vue-dyn'"
                    :casename="'heatmap'"
                ></demolink>

                <w-highcharts-vue-dyn
                    style="width:620px;"
                    :options="WHighchartsVueDyn.options5"
                ></w-highcharts-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-highcharts-vue-dyn'"
                    :casename="'large heatmap'"
                ></demolink>

                <w-highcharts-vue-dyn
                    style="width:620px;"
                    :options="WHighchartsVueDyn.options6"
                ></w-highcharts-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WHighchartsVueDyn from './components/WHighchartsVueDyn.vue'


export default {
    components: {
        demolink,
        WHighchartsVueDyn,
    },
    props: {
    },
    data: function() {
        return {
            'WHighchartsVueDyn': {
                'options1': {
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
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: 'USD to EUR exchange rate over time'
                    },
                    subtitle: {
                        text: 'Pinch the chart to zoom in'
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: {
                            text: 'Exchange rate'
                        }
                    },
                    plotOptions: {
                        area: {
                            color: 'rgba(255,175,150,1)',
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, 'rgba(255,175,150,1)'],
                                    [1, 'rgba(255,175,150,0.1)']
                                ]
                            },
                            marker: {
                                radius: 2
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },
                    series: [{
                        type: 'area',
                        name: 'USD to EUR',
                        data: window.dataUSD2EUR,
                    }]
                },
                'options3': {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Population pyramid for Germany, 2018'
                    },
                    subtitle: {
                        text: 'Population Pyramids of the World from 1950 to 2100'
                    },
                    accessibility: {
                        point: {
                            descriptionFormatter: function (point) {
                                let index = point.index + 1
                                let category = point.category
                                let val = Math.abs(point.y)
                                let series = point.series.name
                                return index + ', Age ' + category + ', ' + val + '%. ' + series + '.'
                            }
                        }
                    },
                    xAxis: [
                        {
                            categories: [
                                '0-4', '5-9', '10-14', '15-19',
                                '20-24', '25-29', '30-34', '35-39', '40-44',
                                '45-49', '50-54', '55-59', '60-64', '65-69',
                                '70-74', '75-79', '80-84', '85-89', '90-94',
                                '95-99', '100 + '
                            ],
                            reversed: false,
                            labels: {
                                step: 1
                            },
                            accessibility: {
                                description: 'Age (male)'
                            }
                        },
                        { // mirror axis on right side
                            opposite: true,
                            reversed: false,
                            categories: [
                                '0-4', '5-9', '10-14', '15-19',
                                '20-24', '25-29', '30-34', '35-39', '40-44',
                                '45-49', '50-54', '55-59', '60-64', '65-69',
                                '70-74', '75-79', '80-84', '85-89', '90-94',
                                '95-99', '100 + '
                            ],
                            linkedTo: 0,
                            labels: {
                                step: 1
                            },
                            accessibility: {
                                description: 'Age (female)'
                            }
                        }
                    ],
                    yAxis: {
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function () {
                                return Math.abs(this.value) + '%'
                            }
                        },
                        accessibility: {
                            description: 'Percentage population',
                            rangeDescription: 'Range: 0 to 5%'
                        }
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' + 'Population: ' + Math.abs(this.point.y).toFixed(1) + '%'
                        }
                    },
                    series: [{
                        name: 'Male',
                        color: 'rgba(255,100,150,0.85)',
                        data: [
                            -2.2, -2.1, -2.2, -2.4,
                            -2.7, -3.0, -3.3, -3.2,
                            -2.9, -3.5, -4.4, -4.1,
                            -3.4, -2.7, -2.3, -2.2,
                            -1.6, -0.6, -0.3, -0.0,
                            -0.0
                        ]
                    },
                    {
                        name: 'Female',
                        color: 'rgba(155,50,200,0.85)',
                        data: [
                            2.1, 2.0, 2.1, 2.3, 2.6,
                            2.9, 3.2, 3.1, 2.9, 3.4,
                            4.3, 4.0, 3.5, 2.9, 2.5,
                            2.7, 2.2, 1.1, 0.6, 0.2,
                            0.0
                        ]
                    }]
                },
                'options4': {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Browser market shares in January, 2018'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [{
                            name: 'Chrome',
                            y: 61.41,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Internet Explorer',
                            y: 11.84
                        }, {
                            name: 'Firefox',
                            y: 10.85
                        }, {
                            name: 'Edge',
                            y: 4.67
                        }, {
                            name: 'Safari',
                            y: 4.18
                        }, {
                            name: 'Sogou Explorer',
                            y: 1.64
                        }, {
                            name: 'Opera',
                            y: 1.6
                        }, {
                            name: 'QQ',
                            y: 1.2
                        }, {
                            name: 'Other',
                            y: 2.61
                        }]
                    }]
                },
                'options5': {
                    chart: {
                        type: 'heatmap',
                        marginTop: 40,
                        marginBottom: 80,
                        plotBorderWidth: 1
                    },
                    title: {
                        text: 'Sales per employee per weekday'
                    },
                    xAxis: {
                        categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
                    },
                    yAxis: {
                        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        title: null,
                        reversed: true
                    },
                    colorAxis: {
                        min: 0,
                        minColor: '#fff',
                        maxColor: 'rgba(255,120,120,1)'
                    },
                    legend: {
                        align: 'right',
                        layout: 'vertical',
                        margin: 0,
                        verticalAlign: 'top',
                        y: 25,
                        symbolHeight: 280
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br/><b>' + this.point.value + '</b> items on <br/><b>' + this.series.yAxis.categories[this.point.y] + '</b>'
                        }
                    },
                    series: [{
                        name: 'Sales per employee',
                        color: 'rgba(255,120,120,0.75)',
                        borderWidth: 1,
                        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
                        dataLabels: {
                            enabled: true,
                            color: '#000000'
                        }
                    }],
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                yAxis: {
                                    labels: {
                                        formatter: function () {
                                            return this.value.charAt(0)
                                        }
                                    }
                                }
                            }
                        }]
                    }
                },
                'options6': {
                    chart: {
                        type: 'heatmap',
                        margin: [60, 10, 80, 50]
                    },
                    boost: {
                        useGPUTranslations: true
                    },
                    title: {
                        text: 'Highcharts heat map',
                        align: 'left',
                        x: 40
                    },
                    subtitle: {
                        text: 'Temperature variation by day and hour through 2017',
                        align: 'left',
                        x: 40
                    },
                    xAxis: {
                        type: 'datetime',
                        min: Date.UTC(2017, 0, 1),
                        max: Date.UTC(2017, 11, 31, 23, 59, 59),
                        labels: {
                            align: 'left',
                            x: 5,
                            y: 14,
                            format: '{value:%B}' // long month
                        },
                        showLastLabel: false,
                        tickLength: 16,
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        labels: {
                            format: '{value}:00'
                        },
                        minPadding: 0,
                        maxPadding: 0,
                        startOnTick: false,
                        endOnTick: false,
                        tickPositions: [0, 6, 12, 18, 24],
                        tickWidth: 1,
                        min: 0,
                        max: 23,
                        reversed: true
                    },
                    colorAxis: {
                        stops: [
                            [0, '#3060cf'],
                            [0.5, '#fffbbc'],
                            [0.9, '#c4463a'],
                            [1, '#c4463a']
                        ],
                        min: -15,
                        max: 25,
                        startOnTick: false,
                        endOnTick: false,
                        labels: {
                            format: '{value}℃'
                        }
                    },
                    series: [{
                        data: window.dataTemperature,
                        boostThreshold: 100,
                        borderWidth: 0,
                        nullColor: '#EFEFEF',
                        colsize: 24 * 36e5, // one day
                        tooltip: {
                            headerFormat: 'Temperature<br/>',
                            pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
                        },
                        turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
                    }]
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
