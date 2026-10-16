import cvCasename from './cvCasename.mjs'


//getExampleFn: 範例輸出檔名(不含副檔名)之唯一公式, 第11列(gExtractHtml)產製範例頁、app之demolink組連結、測試皆經此, 不得另行手寫
//  各範例之檔名須全域唯一(帳本R-B4), 第11列於產製前檢查, 撞名即拋錯
function getExampleFn(kbname, casename) {
    return `${kbname}_${cvCasename(`${casename}`)}`
}


export default getExampleFn
