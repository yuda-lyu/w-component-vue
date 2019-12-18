/**
 * 產生Highcharts標記物件
 *
 * @returns {Object} 回傳標記物件
 */
function getMarker() {
    return {
        enabled: true,
        symbol: 'circle',
        fillColor: 'rgba(255,255,255,0.5)', //'#fff',
        lineWidth: 2,
        lineColor: null,
        radius: 5,
    }
}


/**
 * 取得Highcharts時間單位陣列
 *
 * @returns {Array} 回傳時間單位陣列
 */
function getUnits() {
    return [
        [
            'day',
            [1], //允許1天為群組單位
        ],
        [
            'week',
            [1], //允許1週為群組單位
        ],
        [
            'month',
            [1, 3, 6], //允許1月,1季,半年為群組單位
        ]
    ]
}


/**
 * 取得Highcharts時間單位格式物件
 *
 * @returns {Object} 回傳時間單位格式物件
 */
function getDateFmt() {
    return {
        //millisecond: ['%A, %m/%d, %H:%M:%S.%L', '%A, %m/%d, %H:%M:%S.%L', '-%H:%M:%S.%L'],
        //second: ['%A, %m/%d, %H:%M:%S', '%A, %m/%d, %H:%M:%S', '-%H:%M:%S'],
        //minute: ['%A, %m/%d, %H:%M', '%A, %m/%d, %H:%M', '-%H:%M'],
        //hour: ['%A, %m/%d, %H:%M', '%A, %m/%d, %H:%M', '-%H:%M'],
        //day: ['%A, %Y/%m/%d', '%A, %m/%d', '-%A, %Y/%m/%d'],
        //week: ['%Y/%m/%d', '%A, %m/%d', '-%A, %Y/%m/%d'],
        //month: ['%Y/%m', '%m', '-%m %Y'],
        //year: ['%Y', '%Y', '-%Y']
        millisecond: ['%Y/%m/%d %H:%M:%S.%L', '%Y/%m/%d %H:%M:%S.%L', ' ~ %H:%M:%S.%L'],
        second: ['%Y/%m/%d %H:%M:%S', '%Y/%m/%d %H:%M:%S', ' ~ %H:%M:%S'],
        minute: ['%Y/%m/%d %H:%M', '%Y/%m/%d %H:%M', ' ~ %H:%M'],
        hour: ['%Y/%m/%d %H:%M', '%Y/%m/%d %H:%M', ' ~ %H:%M'],
        day: ['%Y/%m/%d', '%Y/%m/%d', ' ~ %Y/%m/%d'],
        week: ['%Y/%m/%d', '%Y/%m/%d', ' ~ %Y/%m/%d'],
        month: ['%Y/%m', '%Y/%m', ' ~ %Y/%m'],
        year: ['%Y', '%Y', ' ~ %Y']
    }
}


/**
 * 取得Highcharts時間群組設定物件
 *
 * @returns {Object} 回傳時間群組設定物件
 */
function getDataGrouping() {
    return {
        enabled: true,
        units: getUnits(),
        dateTimeLabelFormats: getDateFmt(),
    }
}


let rangeSelector = {
    inputDateFormat: '%Y/%m/%d',
    // buttonTheme: {
    //     width: 'auto',
    //     style: {
    //         fontSize: '12px',
    //         padding: '4px'
    //     }
    // },
    buttons: [{
        type: 'month',
        count: 1,
        text: '月'
    },
    {
        type: 'month',
        count: 3,
        text: '季度'
    },
    {
        type: 'month',
        count: 6,
        text: '半年'
    },
    // {
    //     type: 'ytd',
    //     text: 'YTD'
    // },
    {
        type: 'year',
        count: 1,
        text: '年'
    },
    {
        type: 'all',
        text: '所有'
    }]
}


/**
 * 取得Highcharts繪圖設定物件
 *
 * @returns {Object} 回傳繪圖設定物件
 */
function getGlobal() {
    return {

        credits: {
            enabled: false
        },

        // global: {
        //     useUTC: false,
        // },

        lang: {
            decimalPoint: '.',
            thousandsSep: ',',
            contextButtonTitle: '圖表匯出功能表',
            downloadJPEG: '下載 JPEG 圖片',
            downloadPDF: '下載 PDF 文件',
            downloadPNG: '下載 PNG 文件',
            downloadSVG: '下載 SVG 文件',
            downloadXLS: '下載 XLS 文件',
            openInCloud: '在 Highcharts Cloud 中打開',
            drillUpText: '返回 {series.name}',
            invalidDate: '無效的時間',
            loading: '載入中...',
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            noData: '沒有資料',
            printChart: '列印圖表',
            resetZoom: '重置縮放比例',
            resetZoomTitle: '重置為原始大小',
            shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            viewData: '查看資料',
            rangeSelectorFrom: '開始時間',
            rangeSelectorTo: '結束時間',
            rangeSelectorZoom: '範圍',
            zoomIn: '縮小',
            zoomOut: '放大',
        },

        tooltip: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y/%m/%d',
                week: '%Y/%m/%d',
                month: '%Y/%m',
                year: '%Y'
            },
        },

        xAxis: {
            dateTimeLabelFormats: {
                second: '%Y<br/>%m/%d',
                minute: '%Y<br/>%m/%d',
                hour: '%Y<br/>%m/%d',
                day: '%Y<br/>%m/%d',
                week: '%Y<br/>%m/%d',
                month: '%Y<br/>%m/%d',
                year: '%Y<br/>%m/%d',
            },
        },

        rangeSelector: { //選擇起訖時間輸入框與按鈕區
            enabled: false
        },
        // rangeSelector,

        // navigator: { //選擇時間起訖拖曳區
        //     enabled: false
        // },
        // scrollbar: { //選擇時間起訖捲軸區
        //     enabled: false
        // },

        plotOptions: {
            series: {
                dataGrouping: {
                    dateTimeLabelFormats: getDateFmt()
                }
            },
        }

    }

}


export { getMarker, getUnits, getDateFmt, getDataGrouping, getGlobal }
