import path from 'path'
// import _ from 'lodash'
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
        bNode: false,
        formatOut: 'es',
        bMinify: true, //false
    })
        .catch((err) => {
            console.log(err)
        })

}
core()
    .catch((err) => {
        console.log(err)
    })

//node --experimental-modules --es-module-specifier-resolution=node toolg/gDistRollupWorkerFuncs.mjs
