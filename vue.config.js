module.exports = {
    lintOnSave: false, //禁止eslint-loader於編譯時檢查語法
    pages: {
        'index': {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
        // //dev-only 精簡測試頁: 一頁一棵 WTree, 避免示範頁多樹佔滿單執行緒CPU致wdl渲染被餓死 (重構等價測試用, 之後可移除)
        // 'wtree-test': {
        //     entry: 'tmp/wtree-test/main.js',
        //     template: 'tmp/wtree-test/index.html',
        //     filename: 'wtree-test.html',
        // },
        // //dev-only WDL 虛擬捲動探測頁: 單一大數據 WDynamicList, 量 dir/itemsHeightPre/scrollTop 漂移 (之後可移除)
        // 'wdl-probe': {
        //     entry: 'tmp/wdl-probe/main.js',
        //     template: 'tmp/wdl-probe/index.html',
        //     filename: 'wdl-probe.html',
        // },
    },
    devServer: {
        proxy: {
        }
    },
    //publicPath: process.env.NODE_ENV === 'production' ? '/abc/' : '/',
}
