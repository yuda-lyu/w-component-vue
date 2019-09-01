import _ from 'lodash'
import pmSeries from './pmSeries.mjs'
import deleteFolder from './deleteFolder.mjs'
import rollupFile from './rollupFile.mjs'


/**
 * 使用rollup編譯檔案
 *
 * @param {Object} opt 輸入設定物件
 * @param {Array} opt.fns 輸入原始碼檔案名稱字串陣列，各檔案含副檔名，不含所在資料夾
 * @param {String} opt.fdSrc 輸入原始碼檔案所在資料夾字串
 * @param {String} opt.fdTar 輸入編譯檔案至儲存資料夾字串
 * @param {String} [opt.hookNameDist=null]  輸入強制指定編譯檔案名稱字串，預設為null
 * @param {String} [opt.nameDistType=''] 輸入編譯檔案名稱格式字串，預設為''，可選'kebabCase'
 * @param {String} [opt.format='umd'] 輸入編譯格式字串，預設為'umd'，可選'umd','iife'
 * @param {Boolean} [opt.bSourcemap=true] 輸入編譯檔案是否提供sourcemap布林值，預設為true
 * @param {Boolean} [opt.bBanner=true] 輸入編譯檔案是否帶有開頭banner布林值，預設為true
 * @param {Boolean} [opt.bMinify=true] 輸入編譯檔案是否進行壓縮布林值，預設為true
 * @param {Object} opt.globals 輸入指定內外模組的關聯性物件
 * @param {Array} opt.external 輸入指定內部模組需引用外部模組陣列
 */
async function rollupFiles(opt = {}) {

    //deleteFolder
    deleteFolder(opt.fdTar)

    //fns
    let fns = opt.fns
    if (_.isString(fns)) {
        fns = [fns]
    }

    //pmSeries
    return pmSeries(fns, (fn) => {
        let o = { ...opt }
        o.fn = fn
        return rollupFile(o)
    })
        .then()
        .catch()

}


export default rollupFiles
