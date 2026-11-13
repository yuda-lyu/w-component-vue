# 回饋

任務中發現之自有套件、全域技能、全域設定之調整與抽提提案;只增不改,處置結果另記一列。

| 日期 | 類別 | 對象 | 內容 | 依據 |
|---|---|---|---|---|
| 2026-11-13 | 自有套件 | w-playwright | `setBrowserTypeForTest` 之替身層不自動安裝(缺檔一律 `E_BROWSER_MISSING`),使用端無法以替身驗證自己傳了 `autoInstall: true`。本輪以子行程(空的 `PLAYWRIGHT_BROWSERS_PATH` 加無人監聽之 `PLAYWRIGHT_DOWNLOAD_HOST`)區分 `E_INSTALL`／`E_BROWSER_MISSING` 驗證。建議 README〈Testing〉列此作法;或於 `onTrace` 之 `launch-options` 事件增 `autoInstall` 欄位(使用端無需子行程即可斷言)。 | `test/unit-launchWiring.test.mjs` C 案;`test/tools/runLaunchBrowserMissing.mjs` |
