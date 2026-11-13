import { launchBrowser } from './e2e-setup.mjs'


//runLaunchBrowserMissing: unit-launchWiring之子行程, 以cwd=專案根執行
//  由父行程設定PLAYWRIGHT_BROWSERS_PATH(空資料夾)與PLAYWRIGHT_DOWNLOAD_HOST(無人監聽之位址), 使受管瀏覽器缺檔且無法下載
//  PLAYWRIGHT_BROWSERS_PATH須在載入w-playwright前設定, 故獨立成子行程; 本檔只輸出launchBrowser之結果(不下載、不啟動任何瀏覽器)
try {
    let b = await launchBrowser()
    await b.close()
    console.log(JSON.stringify({ launched: true }))
}
catch (err) {
    console.log(JSON.stringify({ launched: false, code: err && err.code }))
}
