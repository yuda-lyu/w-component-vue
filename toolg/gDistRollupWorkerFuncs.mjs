import path from 'path'
// import _ from 'lodash-es'
import rollupWorkerCore from 'w-package-tools/src/rollupWorkerCore.mjs'


let fdSrc = './src/js/'
let fdTar = './src/js/'

async function core() {

    await rollupWorkerCore({
        name: 'convertToTreeWk', //原模組名稱, 將來會掛於winodw下或於node引入使用
        type: 'function', //原模組輸出為函數, 可傳入參數初始化
        // execFunctionByInstance: true, //default, 原模組為計算函數回傳結果
        fpSrc: path.resolve(fdSrc, 'convertToTreeWk.mjs'), //原始檔案路徑
        fpTar: path.resolve(fdTar, 'convertToTreeWk.wk.umd.js'), //檔案輸出路徑
        runin: 'browser', //於瀏覽器以Web Worker執行
        formatOut: 'es',
        bMinify: true, //false
    })

    await rollupWorkerCore({
        name: 'flattenTreeWk', //原模組名稱, 將來會掛於winodw下或於node引入使用
        type: 'function', //原模組輸出為函數, 可傳入參數初始化
        // execFunctionByInstance: true, //default, 原模組為計算函數回傳結果
        fpSrc: path.resolve(fdSrc, 'flattenTreeWk.mjs'), //原始檔案路徑
        fpTar: path.resolve(fdTar, 'flattenTreeWk.wk.umd.js'), //檔案輸出路徑
        runin: 'browser', //於瀏覽器以Web Worker執行
        formatOut: 'es',
        bMinify: true, //false
    })

    //filepathToTree因opt可傳入soryItems為function, 此無法通過序列化傳入worker, 故不使用wk版
    // await rollupWorkerCore({
    //     name: 'filepathToTreeWk', //原模組名稱, 將來會掛於winodw下或於node引入使用
    //     type: 'function', //原模組輸出為函數, 可傳入參數初始化
    //     // execFunctionByInstance: true, //default, 原模組為計算函數回傳結果
    //     fpSrc: path.resolve(fdSrc, 'filepathToTreeWk.mjs'), //原始檔案路徑
    //     fpTar: path.resolve(fdTar, 'filepathToTreeWk.wk.umd.js'), //檔案輸出路徑
    //     bNode: false,
    //     formatOut: 'es',
    //     bMinify: true, //false
    // })
    //     .catch((err) => {
    //         console.log(err)
    //     })

}
core()
    .catch((err) => {
        //產製失敗須以非0結束, 發布流程以離開碼判定成敗; 明設離開碼, 不依賴Node之unhandled-rejections模式
        console.error(err)
        process.exitCode = 1
    })

//node toolg/gDistRollupWorkerFuncs.mjs
