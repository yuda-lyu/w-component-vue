<template>
    <div>


        <div class="head1" style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('https://yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-highstock-vue-dyn</div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//www.highcharts.com/" target="_blank" rel="noreferrer noopener">highcharts</a>
            <span style="margin:0px 10px">|</span>
            <a href="//www.highcharts.com/stock/demo" target="_blank" rel="noreferrer noopener">highstock examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/weizhenye/vue-highcharts" target="_blank" rel="noreferrer noopener">vue-highcharts</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-highstock-vue-dyn'"
                    :casename="'line'"
                ></demolink>

                <w-highstock-vue-dyn
                    style="width:620px;"
                    :options="WHighstockVueDyn.options1"
                ></w-highstock-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-highstock-vue-dyn'"
                    :casename="'area'"
                ></demolink>

                <w-highstock-vue-dyn
                    style="width:620px;"
                    :options="WHighstockVueDyn.options2"
                ></w-highstock-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WHighstockVueDyn from './components/WHighstockVueDyn.vue'


export default {
    components: {
        demolink,
        WHighstockVueDyn,
    },
    props: {
    },
    data: function() {
        return {
            'WHighstockVueDyn': {
                'options1': {
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
                'options2': {
                    chart: {
                        zoomType: 'x'
                    },
                    // rangeSelector: {
                    //     enabled: true,
                    //     selected: 3 //3季=1年
                    // },
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
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            color: 'rgba(200,200,255,1)',
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, 'rgba(200,200,255,1)'],
                                    [1, 'rgba(200,200,255,0.1)']
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
            },
            'actions': [
            ],
        }
    },
}
</script>

<style scoped>
</style>
