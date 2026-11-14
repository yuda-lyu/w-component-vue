# 規則帳本

本檔為套件設計與開發階段之規則帳本,為要求程式碼須長成什麼樣,或由規格產出之測試(項目/說明/流程)有哪些,包含軸、單一擁有者、已知限制、破壞性變更紀錄,以及對應是哪些測試檔案或指令等,由agent自行編列、擴充與維護.

## 一、建置腳本(`script.txt` 所執行之 `toolg/*.mjs` 與 jsdoc 列)之失敗與離開碼

> 狀態:**生效**(2026-10-14 主控複審 `C:\opensrcOper\dnow\20261014001435\review\run01-複審.md` 裁示採 A1+、B2;run02 實作)。R-B4、R-B5 **生效**(2026-10-15 使用者同意 D1;2026-10-16 run03 實作,報告 `C:\opensrcOper\dnow\20261014001435\agent-out\run03-修正報告.md`)。全盤表:`tmp/build-exit-全盤.md`(66 格);審計回應:`C:\opensrcOper\dnow\20261014001435\agent-out\run01-審計回應.md`。

### 1.1 軸與單一擁有者

- 列:`script.txt` 第 1(addVersion,被 w-pksupdate 改寫為執行)、2、4、5(jsdoc)、7、9、11、12、14、15 列;git/npm 列不屬之。
- 失敗點:輸入缺、輸入壞、相依解析失敗(相對/裸)、輸出不可寫、清空失敗、取代比對不到、行程中途被終止、成功路徑之誤導輸出。
- 觀察量:離開碼;w-pksupdate 判定(node 列:離開碼非 0 或輸出含 `[RollupError]`;`.bin` 與 git 列不判定;dist 閘門只攔「dist 有刪除且無產出」);產物狀態。
- 單一擁有者:
  - 離開碼:各腳本之頂層。非同步流程於頂層 `.catch` 印至 stderr 並設 `process.exitCode = 1`;同步流程以未捕捉例外結束(ESM 頂層同步拋錯在 `--unhandled-rejections` 之 default/warn/none 皆為 1,2026-10-14 實測)。同步腳本內呼叫之 async 函式(如第 11 列之 w-package-tools `extractHtml`)須接其 promise,失敗印出並設 `process.exitCode = 1`(第 11 列以 `Promise.allSettled` 統一處理;第 9 列 `rollupVueToHtml`、第 15 列 `rollupFiles` 以 `.catch`,同第 7 列)。
  - 清空:依 dspec〈自有套件之發布與建置腳本〉規則 4,`toolg/cleanFolder.mjs`(dist、docs)與 `toolg/gExtractHtml.mjs`(test-html、test-action)皆直接呼叫 w-package-tools 之 `cleanFolder`,不另包裝(2026-11-02 撤原 `toolg/cleanFolderStrict.mjs`)。
  - 範例檔名公式 `${kbname}_${cvCasename(casename)}`:`toolg/getExampleFn.mjs`(唯一;2026-10-16 由兩處手寫收斂,原載「仍手寫兩處(`toolg/gExtractHtml.mjs:245-246`、`src/components/demolink.vue:75-78`)」)。站點全集(盤點:`rg -n "getExampleFn|cvCasename" toolg src test`):`toolg/gExtractHtml.mjs`(產製 `test-html/<檔名>.html`、`test-action/<檔名>.action.json` 及撞名檢查)、`src/components/demolink.vue`(app 之範例頁網址 `https://yuda-lyu.github.io/<pkgname>/examples/<檔名>.html` 與原始碼網址 `https://github.com/yuda-lyu/<pkgname>/blob/master/docs/examples/<檔名>.html`)、`test/unit-exampleNames.test.mjs`。第 12 列 `toolg/gDocExams.mjs` 依 test-html 之實際檔名複製至 `docs/examples/`,不另算檔名。`cvCasename` 只被 `getExampleFn` 引用。
  - 範例全集:`src/AppZone*.vue` 內每個 `<demolink>` 之 (kbname, casename);盤點:`rg -c "<demolink" src --glob "AppZone*.vue"`(2026-10-16:84 檔、1510 個)。

### 1.2 規則

- **R-B1** `script.txt` 之每個 node 建置列,產製失敗(來源缺、語法錯、匯出不符、相依解析失敗、寫檔失敗)一律以非 0 離開碼結束,失敗原因印至 stderr;不得 catch 後只印出。理由:w-pksupdate 以離開碼判定,`[RollupError]` 字樣只涵蓋 Rollup 自身之解析錯誤(實測 Babel 語法錯、字串 reject、fs 錯誤皆無此字樣)。
- **R-EXIT**(離開碼須顯式設定)非 0 離開碼不得依賴 Node 之 unhandled-rejections 預設模式:非同步流程明設 `process.exitCode = 1`;同步流程以未捕捉例外結束。理由:`NODE_OPTIONS=--unhandled-rejections=warn` 時未處理 rejection 為 0(實測)。
- **R-B2** 清空步驟(dist、docs、test-html、test-action)一律依 dspec〈自有套件之發布與建置腳本〉規則 4,直接呼叫 w-package-tools 之 `cleanFolder`(`toolg/cleanFolder.mjs` 即 `cleanFolder('dist')`、`cleanFolder('docs')`;`toolg/gExtractHtml.mjs` 清 test-html、test-action),本套件不另寫包裝(2026-11-02 使用者裁示統一,撤原 `toolg/cleanFolderStrict.mjs` 及其「本層」重試與回驗規則)。失敗即拋錯、腳本以非 0 離開之行為由上游負責(2026-10-29 主控裁示,依 w-package-tools 1.1.21 之設計):
  - 上游 `w-package-tools` `cleanFolder`(失敗即拋錯並重試,2026-10-16 `1e957dc` 起;本套件實測 1.1.21)非 `success` 即拋 `can not clean folder[絕對路徑]: 原因`;**占用類**(EBUSY、EPERM、ENOTEMPTY、ENOENT)由上游自行重試 10 次、間隔 300 ms,仍失敗才拋;**非占用類**(目標為檔案、無法建立〔上層為檔案〕、未給路徑、目標為連結、根目錄或 cwd 與其上層)首次即拋、不重試(`node_modules/w-package-tools/src/cleanFolder.mjs:7-13` JSDoc、`src/buildCheck.mjs:536-541,610-614`;其自帶測試 `test/unit-cleanFolder.test.mjs:62-74`、`unit-wsemipContract.test.mjs:144-158` 同)。
  - 本套件之測試只驗**發布列可觀察之結果**(離開碼、stderr 含 `can not clean folder[` 與目標絕對路徑、目標不被改動、占用時之重試與解除後成功),以副本並指定 cwd 執行 toolg 腳本(規則 4);上游內部之各種失敗形狀(如「目標不存在且上層為檔案」)由 w-package-tools 自身測試負責,toolg 腳本之目標皆為 cwd 相對路徑,無法由本套件之測試造出。
- **R-B3** 受追蹤之 worker 產物(`src/js/convertToTreeWk.wk.umd.js`、`src/js/flattenTreeWk.wk.umd.js`)對可結構化複製之輸入,結果須與 wsemi 非 worker 版深度相等(含鍵順序);一般呼叫結束後不得殘留 worker。
- **R-B4** 每個範例之輸出檔名(`getExampleFn(kbname, casename)`)全域唯一;第 11 列於產製前(清空 test-html、test-action 與寫檔之前)以全部 AppZone 之 (kbname, casename) 檢查,撞名即把每組撞名之檔名與各來源(AppZone 檔、kbname、casename)印至 stderr 並以非 0 結束,不清空、不寫出任何範例頁。理由:後寫者會靜默覆寫前者,app 之連結指向錯置之內容(2026-10-14 實測 9 組,例 `docs/examples/w-popup_isolated.html` 實為 tooltip 範例)。撞名須改範例名稱來解,改名須使用者同意(全域規範 §10.1);改名時只改撞名者,以「看名稱即知是哪個範例」為準,`cvCasename` 只取前 4 段,故前 4 段須可區分。
- **R-B5** 每個 AppZone 檔內 demolink 之 kbname 等於檔名所示之元件名(`_.kebabCase` 檔名去 `AppZone` 與 `.vue`,例 `AppZoneWTooltip.vue` → `w-tooltip`)。只由測試把關,第 11 列不檢查(建置行為之變更限於使用者同意之 D1)。理由:kbname 誤植而未撞名時,範例頁會靜默掛在別的元件名下(D1 之 tooltip 即此類,只是剛好撞名才被發現);2026-10-16 實測 1510 個中只有該 1 個不符。
- **成功路徑不印錯誤字樣**:建置腳本呼叫 w-package-tools 時明給 `runin: 'browser'`(未給時其印 `invalid runin[null]`);第 9 列因 `rollupVueToHtml` 不轉交 runin 而無法消除(上游)。

### 1.3 規則 → 測試

| 規則 | 測試檔 | 案例 |
|---|---|---|
| R-B1、R-EXIT | `test/unit-buildScripts.test.mjs` | 第 7 列:來源缺、語法錯、無預設匯出、相對引用缺、產物路徑為資料夾 → 非 0 且 stderr 含原因;來源缺、語法錯另於 `NODE_OPTIONS=--unhandled-rejections=warn` 下非 0;成功 → 0、兩產物為 ES module 預設匯出、無 `invalid runin` |
| R-B1、R-EXIT(第 11 列寫檔) | 同上 | 第 11 列:範例頁寫檔失敗(casename 含路徑分隔字元)→ 非 0 且 stderr 含 `ENOENT`,於 `NODE_OPTIONS=--unhandled-rejections=warn` 下亦非 0(2026-10-16 補:`extractHtml` 為 async,其內寫檔失敗原為未處理之 rejection,warn 模式下以 0 結束,實測) |
| R-EXIT(第 9、15 列) | 同上 | 第 9 列 App.vue 語法錯、第 15 列元件語法錯 → 於 `NODE_OPTIONS=--unhandled-rejections=warn` 下亦非 0(2026-10-16 補:`rollupVueToHtml`、`rollupFiles` 為 async 而腳本未接 promise,warn 模式下以 0 結束,實測;第 2、12、14 列為同步流程,兩模式皆 1) |
| R-B1(兄弟守門) | 同上 | 第 2 列 README 缺、第 9 列 App.vue 語法錯、第 11 列 AppZone 無 template、第 12 列 test-html 缺、第 14 列 components 缺、第 15 列元件語法錯 → 非 0;第 15 列成功無 `invalid runin` |
| R-B2 | 同上 | 第 4 列(副本並指定 cwd 執行 `toolg/cleanFolder.mjs`):可清空 → 0 且 dist、docs 皆空;dist、docs 不存在 → 0 且皆建立為空資料夾;dist 為檔案 → 非 0、stderr 含 `can not clean folder[` 與目標之絕對路徑、目標檔案不被改動;docs 為檔案(dist 照常)→ 非 0、stderr 含目標、dist 已清空;dist 子資料夾持續占用(win32)→ 非 0,占用使清空失敗 ≥ 2 次(重試)且耗時 ≥ 2700 ms(上游 10×300 ms);暫時占用於重試期間解除(win32)→ 0、dist 與 docs 皆空,且確有經過占用(事件閘門)。第 11 列:test-html 子資料夾被占用 → 非 0 且不續行;test-action 子資料夾被占用 → 非 0 |
| (7.9 小項) | 同上 | `git check-ignore temp-<任意>.js` 命中 |
| R-B3 | `test/unit-workerFuncs.test.mjs` | 共用案例表(`test/tools/workerFuncsCases.mjs`)之可複製案例逐案:worker 版深度相等於 wsemi 非 worker 版且鍵順序相同;呼叫後 `page.workers()` 為 0;無 pageerror |
| R-B4 | `test/unit-exampleNames.test.mjs` | 來源:`src/AppZone*.vue` 每個 `<demolink>` 皆取得 (kbname, casename),以 `getExampleFn` 算出之檔名無重複(失敗訊息列出每組撞名之來源);demolink 與第 11 列皆經 `getExampleFn`、不再手寫 `cvCasename`。第 11 列(沙箱、合成輸入):跨檔同 kbname 撞名、同檔 casename 重複、前 4 段相同之截斷撞名、只差大小寫 → 非 0、stderr 列出撞名檔名與兩處來源、test-html 與 test-action 皆未寫出且舊頁未被清空;無撞名(含超過 4 段之 casename)→ 0,產出檔名集合等於 `getExampleFn` 之結果 |
| R-B5 | 同上 | 每個 AppZone 檔之每個 kbname 等於檔名所示之元件名 |

- 建置腳本沙箱之共用層:`test/tools/buildSandbox.mjs`(unit-buildScripts、unit-exampleNames 共用,2026-10-16 自 unit-buildScripts 抽出)。作法即 dspec〈自有套件之發布與建置腳本〉規則 4 之「副本並指定 cwd 執行 toolg 腳本」:複製 `toolg/` 與 `package.json` 至 `test/_tmp/<測試檔>/<案>/`,以 `spawn` 指定該夾為 cwd 執行;toolg 本身不為測試改寫(2026-11-02 重驗:測試不直接 import toolg 內之輔助檔驗清空,只經 `toolg/cleanFolder.mjs`、`toolg/gExtractHtml.mjs` 之執行結果)。
- 測試之來源切換(只供分辨力驗證,預設不設):`W_TOOLG_DIR`(unit-buildScripts、unit-exampleNames 改由該資料夾複製 toolg,unit-exampleNames 之結構案例亦讀該資料夾之 gExtractHtml;預設工作區之 `toolg/`)、`W_WORKER_DIR`(unit-workerFuncs 改由該資料夾取 worker 產物,預設 `src/js/`)。
- 有效性證明:修前(HEAD 之 toolg 副本)R-B1/R-B2/R-EXIT 案例須紅、修後綠;R-B3 與兄弟守門以變異(壞產物、吞錯變體)證之。紀錄見 `sgud/exp/experience.md` 與 run02 修正報告。

### 1.4 已知限制(文件化,不修)

- 裸引用解析失敗被 Rollup 當 external,建置以 0 結束而產物載入即壞:屬 w-package-tools(建議書由主控另立一路),本 repo 腳本無法修;本 repo 目前 0 筆此類警告(2026-10-14 整庫實跑)。
- 測試不在發布管線(`script.txt:23` `#npm test`;CI 於 push 後跑):本節之測試只擋開發期回歸。
- jsdoc 列之離開碼(錯誤即 1)由 w-pksupdate 維持不判定(主控 2026-10-14 裁示)。
- `README`、CDN 之字串取代比對不到時靜默不改(現況皆命中)。
- R-B3 不涵蓋「不可複製之輸入呼叫後不殘留 worker、blob URL 已 revoke」:受追蹤之產物為 w-package-tools 1.1.16 所產,此二者至 1.1.18 才修正;發布流程以 1.1.18 重產後可再加嚴。
- 第 4 列以 Windows 檔案占用模擬清空失敗之案例只在 win32 執行;Linux 上可刪除他程序之當前目錄,改以「目標為檔案」涵蓋。
- `cvCasename` 之截斷規則(只取前 4 段)不改(D2 不採:會改 98 個既有範例頁之網址);新範例之 casename 須使前 4 段可區分,撞名由第 11 列攔下。
- 發布後舊網址之內容:撞名時被覆寫之舊檔名於改名後改放其名稱所指之範例(見 1.5),不另設轉址;外部連結若原本指向被覆寫後之內容,內容會改變。部署(`npm run deploy` → `node_modules/w-package-tools/bin/gh-pages.mjs`)先 `git rm -rf .` 再複製 docs,站點與 docs 一致,不殘留已不產製之檔名。
- 第 11 列不預檢檔名之合法字元(Windows 禁用之 `<>:"/\|?*`、結尾點或空白):寫檔失敗時以非 0 結束,但其他範例頁照常寫出(非原子)。2026-10-16 實測 1510 個檔名皆無此類字元、不分大小寫亦無撞名,最長之 `<檔名>.action.json` 為 157 字元。

### 1.5 破壞性變更紀錄

- **2026-10-16 範例改名(D1,使用者 2026-10-15 同意)**:9 組撞名各改「後寫入者」(即原本覆寫成功、占住舊檔名者),舊檔名改回放其名稱所指之先寫入者;9 個舊檔名皆仍存在(內容改變),另新增 9 個檔名。範例頁網址為 `https://yuda-lyu.github.io/w-component-vue/examples/<檔名>.html`。

| 來源(改名處) | 原 kbname/casename → 改為 | 原占用之檔名(改後放) | 新檔名 |
|---|---|---|---|
| `src/AppZoneWTooltip.vue:37` | kbname `'w-popup'` → `'w-tooltip'`(casename `'isolated'` 不變) | `w-popup_isolated`(改放 `AppZoneWPopup.vue:44` 之 popup 範例) | `w-tooltip_isolated` |
| `src/AppZoneWTextSuggest.vue:1109` | `'maxHeight'` → `'border & maxHeight'` | `w-text-suggest_maxHeight`(改放 `:427`) | `w-text-suggest_border_maxHeight` |
| `src/AppZoneWTextSuggest.vue:1129` | `'minWidth & autoFitMinWidth & autoFitMaxWidth'` → `'border & minWidth & autoFitMinWidth & autoFitMaxWidth'` | `w-text-suggest_minWidth_autoFitMinWidth_autoFitMaxWidth`(改放 `:442`) | `w-text-suggest_border_minWidth_autoFitMinWidth_autoFitMaxWidth` |
| `src/AppZoneWTextSuggest.vue:1151` | `'maxWidth & autoFitMinWidth & autoFitMaxWidth'` → `'border & maxWidth & autoFitMinWidth & autoFitMaxWidth'` | `w-text-suggest_maxWidth_autoFitMinWidth_autoFitMaxWidth`(改放 `:459`) | `w-text-suggest_border_maxWidth_autoFitMinWidth_autoFitMaxWidth` |
| `src/AppZoneWTimeminuteRange.vue:624` | `'empty'` → `'border & empty'` | `w-timeminute-range_empty`(改放 `:236`) | `w-timeminute-range_border_empty` |
| `src/AppZoneWTimeminuteRange.vue:644` | `'empty & textEmpty'` → `'border & empty & textEmpty'` | `w-timeminute-range_empty_textEmpty`(改放 `:249`) | `w-timeminute-range_border_empty_textEmpty` |
| `src/AppZoneWGroupChipCheck.vue:477` | `'group & borderColor & borderColorHover & borderColorActive & textColorActive & iconColorActive & backgroundColorActive & no shadowActive'` → `'group & textColorActive & iconColorActive & backgroundColorActive & borderColor & borderColorHover & borderColorActive & no shadowActive'` | `w-group-chip-check_group_borderColor_borderColorHover_borderColorActive`(改放 `:456`) | `w-group-chip-check_group_textColorActive_iconColorActive_backgroundColorActive` |
| `src/AppZoneWGroupChipRadio.vue:476` | 同上之重排 | `w-group-chip-radio_group_borderColor_borderColorHover_borderColorActive`(改放 `:456`) | `w-group-chip-radio_group_textColorActive_iconColorActive_backgroundColorActive` |
| `src/AppZoneWGroupTags.vue:258` | `'suggests & slot suggest & addMode & inputKeyText & addWhenInputByOutside'` → `'suggests & slot suggest & inputKeyText & addWhenInputByOutside & addMode'` | `w-group-tags_suggests_slot suggest_addMode_inputKeyText`(改放 `:235`) | `w-group-tags_suggests_slot suggest_inputKeyText_addWhenInputByOutside` |

- 改名依據:text-suggest、timeminute-range 之 5 個位於該檔後半之 border 變體區(`:shadow="false"`、橘色邊框),同區其他範例皆以 `border & ` 起首,唯此 5 個漏前綴而與前半同名;3 組截斷撞名者以重排使區分之屬性進入前 4 段,屬性清單一字不減。

## 二、計時器相關之測試:以事件同步,不以延時偵測

> 狀態:**生效**(2026-10-29 tm-compvue2;tm-compvue3 修訂 R-T2 為 `onTrace` 拋錯完全靜默,並依 w-package-tools 1.1.21 修訂第一節 R-B2)。規格正本:`C:\opensrcOper\dspec\計時器相關函數之觀察回調與測試.md`(P1～P7);作法細則:全域技能 role-coder-for-test §8 與其 `references/timer-tests.md`。本節只記本套件之適用範圍、單一擁有者與站點;原則不在此重述。

### 2.1 單一擁有者

- 觀察回調 `opt.onTrace`:wsemi `src/getTrace.mjs`(`getTrace`,wsemi 1.9.30 起;本套件不自寫等價實作)。`v-domresize`(`src/js/domResize.mjs`)把指令值之 `onTrace` 原樣轉交 wsemi `domDetect` 之 opt(`keys` 列有 `onTrace`),事件格式與種類(`check`、`emit`、`skip`、`inline`)見 wsemi `domDetect` 之 JSDoc。視窗事件為視窗 resize 之同步派發,不產生觀察事件。
- 測試紀錄器:`test/tools/traceKit.mjs`(`mkTrace`、`count`;複製自 wsemi 之 `test/tools`,未改;防懸置上限用模組載入時保存之真實計時器)。
- 負載試驗執行器:`test/tools/loadTrial.mjs`、`test/tools/loadPreload.mjs`(複製自 wsemi,未改;不跨套件引用路徑)。

### 2.2 規則

- **R-T1(P1、P2)** 以延時同步者改等被測物之事件或可觀察條件,斷言語意(事件內容、最終狀態),不斷言「X 毫秒內恰 N 次」。`unit-domResize`:等 `emit` 事件(`emit` 於派發給指令之前同步通知,續行於其後之 microtask,故續行時指令已轉發完畢);量測與是否判定為變化(`check` 事件)為 `fireRO` 內同步完成,「未發出」直接以 `check` 之 `changed:false` 斷言。
- **R-T2(P3、P4)** `v-domresize` 之 `onTrace` 為選用之對外 API(JSDoc 已述):未給時行為同前;回調之拋錯與回傳值(含 rejection)一律忽略且**完全靜默**(不影響偵測、不產生任何 console 輸出;wsemi `getTrace` 為單一擁有者,2026-10-29 主控裁示,規格 P4):`createDetectDirective` 之選用參數 `quietKeys`(預設空,其他指令不變)列出之函數設定鍵,其拋錯不依「函數設定拋錯時每綁定每鍵 `console.error` 一次」之通則提示,仍交回偵測器(由 `getTrace` 忽略),`domResize` 傳 `quietKeys: ['onTrace']`;同 `getSize`、`getBase` 一律呼叫最新指令值中之同名函數;有無 `onTrace` 之改變(由無到有、由有到無)重建偵測器(`getTrace` 於建立時決定有無回調)。五種回調(未傳、紀錄器、拋錯、回傳 rejection、非函數)結果須相同、無未處理之 rejection 且無 console 輸出(error、warn、log、info、debug);事件凍結、`this` 為 undefined。其餘三個偵測類指令(`v-dommutation`、`v-domstable`、`v-domvisible`)不轉交 `onTrace`:可擴充,未做(無測試需要)。
- **R-T3** 占用類測試(`unit-buildScripts` 之 `lock`)之就緒不等 `sleep(500)`:Windows 子行程以 `sub` 為工作目錄(行程建立時即占用),啟動後輸出標記,父行程見到標記才算就緒(`lk.ready`);其他平台同步完成。暫時性占用案不以計時器與清空腳本之啟動時間賽跑:清空腳本(非同步子行程)載入 `watch-fs.mjs` 包覆 `fs.rmSync` 等刪除類函數,首次因占用(EBUSY、EPERM、ENOTEMPTY、EACCES)而失敗時同步輸出標記 `FS-BUSY`,父行程見到標記才釋放占用,其後之重試須成功,並斷言確有經過占用(`o.busy`)。
- **R-T4** 「呼叫後不殘留 worker」(R-B3)不等 `waitForTimeout(300)`:以 `page.on('worker')` 收集呼叫所建立之 worker 與其 `close` 事件,全部 `close` 後才斷言 `page.workers()` 為 0;防懸置上限(30 秒)用真實計時器,逾時即判殘留。
- **R-T5** 否定斷言才可用短暫觀察窗:本套件 `unit-domResize` 之否定斷言皆改為同步可判(`check` 事件、`listeners` 數)或以 `setImmediate` 屏障(microtask 排定者必於其前執行,與負載無關);不以重試掩蓋、不只加大 timeout。
- **R-T6** 每個改寫附變異證據並對照舊測試;負載試驗(8 壓力行程、事件迴圈阻塞 400:1000、重度阻塞 1500:3000 各 ≥5 次,前後同批同次數,`quiet-run --lock-exclusive`,結束以 PID 回驗壓力行程)為穩定之判準。紀錄見 `sgud/exp/experience.md` 與 tm-compvue2 修正報告。

### 2.3 站點全集與盤點指令

- 盤點(本套件非 e2e 層):`rg -n "sleep\(|waitForTimeout|setTimeout" test/unit-*.test.mjs test/tools/buildSandbox.mjs`。
- 已事件化:`unit-domResize` 11 案(原 `sleep(10)` 後斷言)、`unit-buildScripts` 占用 4 案(第 4 列 dist 持續占用、第 4 列暫時占用、第 11 列 test-html 占用、第 11 列 test-action 占用;原 `sleep(500)`;2026-11-02 依 dspec〈自有套件之發布與建置腳本〉撤 `cleanFolderStrict` 後,原直驅該包裝之持續占用、暫時占用 2 案改為經 `toolg/cleanFolder.mjs` 執行,原第 4 列 dist 占用案併入持續占用案)、`unit-workerFuncs` 每案(原 `waitForTimeout(300)`)。
- 刻意不動:`unit-createDetectDirective` 之 `tick`(`setTimeout 0` 作 macrotask 屏障,等 microtask 排定之重新比較;順序由事件迴圈決定,與負載無關);`test/e2e-*.test.mjs` 與 `test/tools/e2e-*.mjs` 之等待(含 `e2e-hover` 2 案,批 E 另案)。

### 2.4 規則 → 測試

| 規則 | 測試檔 | 案例 |
|---|---|---|
| R-T1 | `test/unit-domResize.test.mjs` | `domResize` 11 案(轉發 dom 事件與方向、視窗事件不帶方向 3 案、容許誤差內之軸、`toleranceBounce`、視窗尺寸、解除後不轉發、無處理器僅警告、`event: 'resize'`、停用後啟用、`refreshKey`) |
| R-T2 | 同上 | `domResize onTrace` 3 案(轉交與凍結／無接收者／事件內容、五種回調形態〔含拋錯案斷言無 console 輸出〕、最新 `onTrace` 不重建與有無之改變重建) |
| R-T2(`quietKeys`) | `test/unit-createDetectDirective.test.mjs` | 列於 `quietKeys` 之鍵拋錯不提示但仍交回、其他函數設定鍵照舊每鍵提示一次 |
| R-T3 | `test/unit-buildScripts.test.mjs` | 第 4 列 `toolg/cleanFolder.mjs` 持續占用、暫時占用;第 11 列 test-html、test-action 占用 |
| R-T4 | `test/unit-workerFuncs.test.mjs` | 每案「呼叫後無殘留 worker」 |

### 2.5 已知限制(文件化)

- (已處置,2026-11-02 依 dspec〈自有套件之發布與建置腳本〉)原 `toolg/cleanFolderStrict.mjs`(2026-10-14 修正輪自創之包裝)及據以立之 R-B2「本層」規則已撤除;清空一律直接呼叫 w-package-tools 之 `cleanFolder`(R-B2)。原直驅該包裝之測試案「目標不存在且無法建立(上層為檔案)」不再保留:toolg 腳本之清空目標皆為 cwd 相對路徑,本套件之測試造不出「上層為檔案」,該形狀由 w-package-tools 自身測試(`unit-cleanFolder`、`unit-wsemipContract`)負責。
- 本節未涵蓋 `e2e-*` 檔之等待站點(批 E)。

## 三、有過場動畫之組件於 DOM 提供可偵測之 `state` 屬性

> 狀態:**生效**(2026-10-31 cv29;來源:Gitea #29〔下游使用端提出,使用者轉交〕,建議書範圍:WDialog、buildPopper 浮層、WListExpandItem、WGroupTags、WGroupDragdrop)。要求:**只新增屬性**,外觀、動畫時間與互動不變。語彙比照 `WDrawer`(根節點 `state`)。報告:`C:\opensrcOper\dnow\20261031175415\agent-out\cv29-修正報告.md`。

### 3.1 單一擁有者與站點全集

- 落定邏輯單一擁有者:`src/js/createTransitionState.mjs`(`createTransitionState`)。`WDrawer` 於本規則前已自帶一份(`settleState`,以 `transitionend` 為主、逾時兜底),**未收斂**(不在本輪範圍,收斂須驗證其既有行為不變)。
- 站點(盤點:`rg -n "createTransitionState" src`):

| 組件 | 帶 `state` 之元素 | 值 | 過場來源(受追蹤元素) |
|---|---|---|---|
| WDialog | 根節點 | `hidden`、`opening`、`opened`、`resizing` | 遮罩 `divOverlay` 與彈窗 `divPanel` 自身之過場 |
| WTooltip(WPopup 包它;WTextSelect、WTextSuggest、WTimeday、WColorSelect 以其為基礎者一併;**WSlider 提示不在內**:自建 `.WPopperFix` 以 `createPopper` 直接建立、`v-show` 顯示、無過場,不經 `buildPopper`,故無 `state`,建議書 §2 假設其一併生效不成立) | `.WPopperFix`(teleport 至 body) | `hidden`、`opening`、`opened` | `.WPopperFix` 之內層內容(第一個子元素)自身之 opacity/transform 過場(`buildPopper.mjs` `displayPopper`) |
| WListExpandItem | 根節點 | `collapsed`、`expanding`、`expanded`、`collapsing` | `.ct`(`ref="ct"`)自身之 height/opacity 過場 0.5s |
| WGroupTags、WGroupDragdrop | 根節點 | `idle`、`moving` | 各項目(`.WGroupTags-Trans`、`.WGroupDragdrop-Trans`)自身之位移過場 0.5s,加 transition-group 之進出場(以 `@before-enter` 等鉤子占位) |

### 3.2 規則

- **R-S1(值與轉換時點)** 過渡態在**引起它的資料改變之同一個 tick** 寫入(先於瀏覽器開始過場),故觸發操作後立即讀 `state` 即為過渡態:WDialog `showPanel()` → `opening`;已 `opened` 時 `useWidth`/`useHeight`/`useBorder` 之合併字串(`changeSize`)改變 → `resizing`;WTooltip `displayPopper` 顯示 → `opening`;WListExpandItem `active` 改變 → `expanding`/`collapsing`;WGroupTags/WGroupDragdrop 之 key 序列(`changeKeys`)改變 → `moving`。終態僅在落定條件成立時寫入(R-S3)。
- **R-S2(無過場者直接為終態)** 初始渲染無過場:WListExpandItem 依 `active` 為 `expanded`/`collapsed`,WGroupTags/WGroupDragdrop 為 `idle`(以掛載當下之 key 序列為基準,不因初始 `itemsTrans` 寫入而進入 `moving`)。**關閉無過場者不使用 `hiding`**:WDialog 關閉(`v-if` 移除)與浮層隱藏(內層 `v-if`、外層 `v-show`)皆直接 `hidden`(2026-10-31 實測:關閉時無任何 transition 事件,7ms 內移除)。若要有 `hiding` 須先加關閉過場,屬行為變更,須使用者裁示。
- **R-S3(落定)** 終態於「受追蹤元素自身之 CSS transition 皆結束(含尚未開始者,以 `getAnimations()` 判斷)且無占位」時寫入:①主要訊號:容器收到受追蹤元素**自身**之 `transitionend`/`transitioncancel`(子孫元素之過場不計)且此時已無進行中之過場;②後備:`begin` 後經 `nominalMs + marginMs(300)` 仍未落定(事件未觸發之高負載,或根本無過場被觸發)→ 若仍有進行中之過場則每 50ms 重查,結束即落定,上限 `capMs(3000)` 後強制落定。故 `state` 必定落定。重複觸發以 token 作廢前次等待。
- **R-S4(只新增屬性)** 不得為了 `state` 改動既有 CSS、動畫時間、計時器、事件或互動。允許之附帶改動:`ref`(WListExpandItem 之 `ref="ct"`)、`created`/`mounted`/`beforeDestroy`/`watch`/`computed`(`changeSize`、`changeKeys`)、`<transition-group>` 之 `@before-enter` 等鉤子(僅 `before-enter`、`after-enter`、`enter-cancelled`、`before-leave`、`after-leave`、`leave-cancelled`;**不得綁 `@enter`、`@leave`**:Vue 依其形參個數判斷是否由使用者控制結束)。
- **R-S5(不納入)** WDialog 強制模式(`isModal`)點擊外部之振動提示動畫(兩段式 100ms+100ms 暫態)不納入 `state`;WDialog 全螢幕時因視窗尺寸改變致面板跟著過場(`changeSize` 字串不變,不進 `resizing`)不納入;WListExpandItem 展開後內容尺寸改變經 `resizeContent`→`setHeightContent` 重設高度之過場不納入(巢狀展開之外層屬此);WTooltip/WPopup 之 `.WPopperFix` 位置由 popper.js 在內容尺寸改變時重算(`updatePopper`)之位移不納入(非過場)。
- **R-S7(無過場可等時落定偏晚)** `transitionTime` 趨近 0、祖先 `display:none` 內之 WListExpandItem、末端新增之標籤(僅 Vue 進場計時器 501ms)等無 CSS 過場可等者,過渡態停留至逾時後備(約 `nominalMs + 300ms`,最長至 `capMs`)才落定,不是卡死;下游對過渡態斷言有時限者須知悉。
- **R-S8(輸入容忍)** `changeKeys` 對 `value` 為 `null` 容忍(`Array.isArray` 守門),不得因新增 `state` 使修前靜默容忍之輸入(`value=null`)新增 console 錯誤。
- **R-S6(buildPopper 契約;2026-11-01 cv37 修訂,來源 Gitea #37)** `state` 由 `buildPopper` 擁有(值之歸屬,非向下相容補丁),呼叫端宣告與否皆可運作:
  - 初值與每次變更皆由 `buildPopper` 決定:建構時即為 `hidden`,之後只經過場追蹤器之 `setState`(`opening`、`opened`、`hidden`,語彙與時機同 R-S1～R-S3,不變)。
  - 取值:回傳物件之 `ev.getState()`。變更訊號:`'state'` 事件,`ev.on('state', (s)=>{})` 與 `vo.$emit('state', s)` 雙發(同 `placement-change`、`resize`、`show`、`hide` 之慣例);建構時之初值不發、同值不重複發;`ev.on` 之監聽器拋錯由 `buildPopper` 攔下並 `console.error`,不得中斷過場追蹤器(`ev` 為 eventemitter3,監聽器拋錯會外拋,而 `setState` 在追蹤器 `begin`/`settle` 內呼叫,外拋會使 `state` 停在過渡態且後備計時器不排程)。
  - `vo` 已宣告 `state`(`haskey(vo, 'state')`)時,建構時與每次變更同步寫入 `vo.state` 供其樣板綁定(建構時校正宣告為 `undefined` 或非語彙值者為 `hidden`);未宣告時略過寫入、不拋錯、不新增該鍵。寫入為單向輸出,以 `getState()` 為準(外部改寫 `vo.state` 不影響之,下次變更時被覆寫)。
  - `_keys`(必填鍵)不含 `state`;其餘 11 鍵(`mode`、`mmkey`、`keyShow` 所指鍵、`triggerWidth`、`placement`、`placementDistX`、`placementDistY`、`transitionTime`、`isolated`、`editable`、`contentStyle`)缺少時仍拋 `invalid vo.<key>`。
  - 使用者:`WTooltip`(本套件唯一;仍宣告 `state` 供樣板 `:state` 綁定至 `.WPopperFix`);下游 w-vditor-vue 1.0.24 同(宣告 `state: 'hidden'` 並綁定,行為不變)。
  - **不採「由 `buildPopper` 直接於 `.WPopperFix` 設 `state` 屬性」(建議 4)**:①`buildPopper` 對 DOM 只讀,對外輸出一律寫入 `vo` 之資料(`contentStyle`、`triggerWidth`、`state`),由呼叫端樣板綁定,直接 `setAttribute` 會破壞此邊界;②`.WPopperFix` 為呼叫端樣板擁有之節點(class、style、`v-show`、指令),`buildPopper` 僅持有取節點之函數、無法得知節點是否被重建(`<Teleport>` 重新掛載、熱更新、呼叫端 `v-if`),重建後屬性靜默消失而樣板綁定則每次建立皆會套用;③`funGetDivContent` 可回 `null`(`buildPopper` 全程以 `isEle` 守門),不保證建構時節點已存在,初值須另在節點出現時補寫;④與呼叫端既有 `:state` 綁定並存即雙寫入者,且同步 `setAttribute` 早於 Vue 渲染一個 tick,改變 `.WPopperFix[state]` 之時機(R-S1 要求不變)。

### 3.3 規則 → 測試

| 規則 | 測試檔 | 案例 |
|---|---|---|
| R-S3(追蹤器) | `test/unit-createTransitionState.test.mjs`(真瀏覽器頁內合成元素) | 事件為主且先過渡態後終態、事件被攔時逾時後備、無過場時逾時、後備時仍有過場則等其結束、子孫過場不計、`display:none` 取消亦落定、`stop`/重複 `begin` 作廢、`hold`/`release`、已離開 DOM 之占位視為釋放、`destroy` 後不寫入、設定檢查 |
| R-S6(buildPopper 契約) | `test/unit-buildPopper.test.mjs`(真瀏覽器頁內以普通物件模擬 `vo`、真 DOM 與真 popper.js;入口 `test/tools/e2e-entry-buildPopper.mjs`) | 未宣告 `state` 不拋錯且不新增該鍵、宣告為 `undefined`/非語彙值/`hidden` 時建構後為 `hidden`、回傳物件原有函數鍵不減並新增 `getState`、建構時不發訊號、開啟與關閉依序 `opening`/`opened`/`hidden`(`ev.on` 與 `vo.$emit` 各一次,訊號當下 `getState()` 已為新值,宣告與否皆然)、`opening` 時內層內容尚在過場而 `opened` 時已到終值、開→關→再開各發一次、已宣告時 `vo.state` 寫入序列、外部改寫 `vo.state` 不影響 `getState`、開啟中即關閉為 `opening`/`hidden` 且其後不出現 `opened`、監聽器拋錯不中斷追蹤且錯誤以 `console.error` 呈現、其餘 11 個必填鍵缺少時仍拋 `invalid vo.<key>` |
| R-S1、R-S2、R-S3(組件) | `test/e2e-transitionState.test.mjs` | WDialog 開啟/最大化/還原/關閉(不經 hiding)/初始即顯示/事件被攔/CPU 降速 20 倍;浮層(WTextSelect、WPopup、WTooltip〔`transitionTime=800`〕)開啟與關閉、事件被攔、開啟中即關閉;WListExpandItem 展開收合、初始 `active`、事件被攔;WGroupTags、WGroupDragdrop 初始 `idle`、末端新增、刪除中間、換序、假時鐘下進場計時器結束即落定(證 `hold` 接線)、事件被攔 |

- 斷言口徑(皆為建議書〈驗證建議〉之翻譯):①state 序列(過渡態出現、順序正確、關閉無 hiding);②過渡態期間箱體仍在變動(確有過場可等,避免空過);③終態**出現當下**之箱體即為終值,且其後每一幀箱體不變(終態後以 700ms 觀察窗,屬否定斷言);④事件未觸發(以 window 捕獲階段攔下 `transitionend`/`transitioncancel`)時仍落定。
- 分辨力驗證用之來源切換:`W_SRC_DIR`(unit-createTransitionState、unit-buildPopper、e2e-transitionState 改由該資料夾之 src 打包,預設工作區 `src`;測試入口以 `@src/` 引用,別名由 `test/tools/e2e-setup.mjs` 之 `bundleEntry(name, entry, { srcDir })` 提供)。
- 有效性證明(2026-10-31 cv29 實測):修前(HEAD 之 src;當時測試為 43 案之版本,之後僅加 2 案)0 綠、31 紅(單元測試因缺 `createTransitionState` 而 `before all` 失敗計 1,e2e 30 案全紅);變異 M1～M17 各至少 1 案轉紅(M1 移除逾時後備 9、M2 提早設終態 34、M3 事件到達不查進行中之過場 4、M4 後備不查進行中之過場 2、M5 不限定自身事件 1、M6 `hold` 無作用 3、M7 無 `resizing` 3、M8 浮層不經 `opening` 6、M9 無 `moving` 12、M10 展開終態寫錯 2、M11 無 `collapsing` 2、M12 WDialog 不經 `opening` 5、M13 不監聽 `transitioncancel` 1、M14 不剔除離開 DOM 之占位 1、M15 `changeKeys` 不容忍 null 1、M16 WDialog 關閉不設 `hidden` 1、M17 浮層隱藏不設 `hidden` 4)。變異腳本與副本為暫存(`./tmp/cv29/variants.mjs`,結案已清);要重做時以 `W_SRC_DIR` 指向改動過的 src 副本。未能分辨者:WDialog `mounted` 內之 `ts.attach()`(缺它時初始即顯示者由後備落定,結果同,僅慢)。
- 有效性證明(2026-11-01 cv37 實測,R-S6):`unit-buildPopper` 15 案;修前(HEAD 之 src)1 綠、14 紅(唯一綠者為「建構時不發訊號」,修前本就不發,其分辨力由 M8 證);變異 M1～M15 各至少 1 案轉紅(M1 `_keys` 加回 `state` 7、M2 建構時不寫初值 5、M3 不發 `ev.emit` 9、M4 不發 `vo.$emit` 3、M5 `getState` 恆回 `hidden` 3、M6 移除 `haskey` 守門 1、M7 移除 `ev.emit` 外層 try/catch 1、M8 恆視為有變更 4、M9 先發訊號後才更新內部值 2、M10 建構時不校正非語彙值 4、M11 無 `getState` 13、M12 `_keys` 移除 `contentStyle` 1、M13 關閉寫成 `hiding` 7、M14 終態寫成 `open` 7、M15 僅宣告 `state` 時發訊號 5)。變異腳本與副本為暫存(`./tmp/cv37/runVariants.mjs`,結案已清);要重做時以 `W_SRC_DIR` 指向改動過的 src 副本。

### 3.4 改動範圍 → e2e 檔對照表

| 改動範圍 | 須跑之測試檔 |
|---|---|
| `src/js/createTransitionState.mjs` | `unit-createTransitionState`、`e2e-transitionState` |
| `src/js/buildPopper.mjs`、`WTooltip.vue`、`WPopup.vue` | `unit-buildPopper`、`e2e-transitionState`、`e2e-hover`(WButtonCircle 提示框) |
| `WDialog.vue` | `e2e-transitionState`、`e2e-hover`(WDialog 標題列儲存鈕) |
| `WListExpandItem.vue`、`WGroupTags.vue`、`WGroupDragdrop.vue` | `e2e-transitionState` |
| 偵測類指令(`domResize`、`domMutation`、`domStable`、`domVisible`、`createDetectDirective`) | `e2e-domDirectives`、`e2e-hiddenMeasure`、相關 `unit-*` |
| `test/tools/e2e-setup.mjs`(共用層) | 所有 `e2e-*` 與 `unit-createTransitionState`、`unit-buildPopper`、`unit-workerFuncs`、`unit-launchWiring`(啟動點改動時) |
| `WButtonCircle.vue`、`WTreeIconToggle.vue` | `e2e-hover` |
| `WExplorer.vue`(`convertItems` 之錯誤處理) | `e2e-explorerError` |

### 3.5 已知限制(文件化)

- 建議書範圍外、含 `transition: all 0.3s` 且於屬性改變時改變版面之組件(`WPanelAvatar`、`WPanelBulge`、`WGroupBaggage` 等)**未盤點,未提供 `state`**;`WDrawer` 之實作未收斂至 `createTransitionState`。
- WGroupTags/WGroupDragdrop 之 `moving` 為保守語意:末端新增時他項雖不動,仍至進場完成(約 0.5s)才 `idle`。
- 拖放(`v-domdragdrop`)換序之 e2e 以頁面按鈕改 `value` 代替真拖放(拖放最終亦經 `input` 事件改 `value`,走同一條 `changeKeys` 路徑);真拖放未另行驗證。
- 逾時後備之 `marginMs=300`、`capMs=3000` 為經驗值(比照 `WDrawer` 之 `sec+1000`、3000ms),未依機器效能調整。

## 四、測試用瀏覽器之啟動:一律經 w-playwright

> 狀態:**生效**(2026-11-13 pm-cv,排程第 442 項遷移輪;來源:w-playwright 設計報告〈逐包遷移表〉、w-playwright 帳本 R-PW-ONLY／R-PW-WIRING)。緣由:Chromium 系瀏覽器(真 Chrome、完整 Chromium、Edge,153 起)於 Windows 每啟動一個新根行程即以錯誤密碼呼叫一次 `LogonUser`,10 分鐘內 10 次鎖住目前使用者帳號;w-playwright 於每次啟動合併出恰一串 `--disable-features`(Playwright 預設＋`AutofillAiWalletPrivatePasses`＋呼叫端自給者)並統一 Playwright 版本(`playwright-core` 精確 1.64.1)。

### 4.1 單一擁有者與啟動點全集

- 擁有者:w-playwright(`devDependencies` `^1.0.1`;安裝後 `node_modules/w-playwright/package.json` 之 `version` 為 1.0.1)。本套件 `package.json` 不宣告 `playwright`／`playwright-core`。
- 啟動點:`test/tools/e2e-setup.mjs` 之 `launchBrowser`(**唯一**;`e2e-domDirectives`、`e2e-hiddenMeasure`、`e2e-hover`、`e2e-transitionState`、`unit-buildPopper`、`unit-createTransitionState`、`unit-workerFuncs` 七檔皆經此出口)。本套件 `src/`、`toolg/` 無啟動點(dist 不含 playwright)。盤點:`rg -n "wpw\.(launchChromium|launchChromiumPersistent)\(" src test toolg`(應只命中 `test/tools/e2e-setup.mjs`)。

### 4.2 規則

- **R-PW-ONLY**:`src`、`test`、`toolg` 之 `.mjs`／`.js`(含動態 import、`require`)不得引用 `playwright`／`playwright-core`;`package.json` 不得宣告兩者。盤點指令(命中數須為 0;防空集合以 w-playwright 之 `src/_pw.mjs` 必命中):`rg -n --glob '*.{mjs,js}' --glob '!**/node_modules/**' --glob '!**/dist/**' "(from\s+|import\(\s*|require\(\s*)['\"\`]playwright(-core)?['\"\`/]" .` 與 `rg -n --glob '**/package.json' --glob '!**/node_modules/**' "\"playwright(-core)?\"\s*:" .`。
- **R-PW-AUTO**:`launchBrowser` 傳 `autoInstall: true`(缺 Playwright 指定版本之受管瀏覽器時首次啟動下載一次,與改前 w-package-tools-e2e 之行為一致);不傳 `installDeps`(Linux 缺系統相依時不自動安裝,見 4.4)。受管瀏覽器亦可先以 `wpw.ensureChromium()` 取得;不用 `npx playwright install`;離線以 `PLAYWRIGHT_BROWSERS_PATH`(載入前設定)。
- **R-PW-WIRING**:啟動點送出之選項含守門(`args` 最後一個元素為恰一串之 `--disable-features`,含 `AutofillAiWalletPrivatePasses` 與 Playwright 預設),以 `wpw.setBrowserTypeForTest` 斷言且**斷言替身呼叫次數 >0**;至少一案以替身之 `next()` 走真路徑。
- **R-PW-HEADLESS**:本套件測試只啟動 Playwright 受管之 headless shell(`headless: true`、無通道;不觸發 Chromium 之登入呼叫);每案新啟瀏覽器(`beforeEach`)為案例隔離所需,不共用。**若日後測試改啟動真 Chrome、Edge 或完整 Chromium**(`channel`、`headless: false`),須改為每檔最多啟動一次(`before` 起、`after` 關,案例各開 `newContext()`),以 `findSystemChrome` 判可用性(不以真啟動探測),並於跑前後讀錯誤密碼次數。

### 4.3 規則 → 測試

| 規則 | 測試 | 內容 |
|---|---|---|
| R-PW-WIRING | `unit-launchWiring` A | 替身收到之選項:恰一串 `--disable-features` 居末、含守門功能與 Playwright 預設、`headless: true` 保留、自用鍵 `autoInstall` 不轉傳;替身呼叫次數 =1 |
| R-PW-WIRING(真路徑) | `unit-launchWiring` B | 替身以 `next()` 走真路徑,啟動 headless shell、載入頁面、關閉;選項同樣含守門 |
| R-PW-AUTO | `unit-launchWiring` C | 子行程以空的 `PLAYWRIGHT_BROWSERS_PATH` 與無人監聽之 `PLAYWRIGHT_DOWNLOAD_HOST` 呼叫 `launchBrowser`:拒絕碼 `E_INSTALL`(走了安裝;未給 `autoInstall` 則為 `E_BROWSER_MISSING`);不下載、不啟動瀏覽器 |
| R-PW-ONLY | (盤點指令,非自動化測試) | 遷移輪與每次改動啟動點時執行,命中須為 0 |

- 有效性(2026-11-13 pm-cv 實測):`unit-launchWiring` 對改前之 `e2e-setup.mjs`(經 w-package-tools-e2e 直接用 `playwright`)3 案全紅(替身呼叫 0 次、無 `E_INSTALL`);變異:移除 `autoInstall` → C 紅(`E_BROWSER_MISSING`),`headless: false` → A 紅。

### 4.4 已知限制(文件化)

- Linux:改前 `launchChromiumCore` 於缺系統相依時先執行 `install-deps`;現 `launchBrowser` 不傳 `installDeps`(設計 §5.1 本套件列為 `autoInstall: true` 而已),Linux 缺相依時須手動 `ensureChromium({ installDeps: true })`。本套件之測試於 Windows 開發。
- `package.json` 仍列 devDependency `w-package-tools-e2e`,本套件已不使用(原只用其 `launchChromium`);其移除屬連動(該套件改版移除 `launchChromium` 與 `playwright` 依賴)之範圍,待主控裁示。

## 五、WExplorer 轉換 items 失敗之錯誤處理:以 `error` 事件交給父元件

> 狀態:**生效**(2026-11-14 wexp430,排程第 430 項第二批之下游調整;未發布)。來源:wsemi 1.9.60 起 `filepathToTree` 遇無效項目、重複路徑、資料夾與檔案同名、路徑段含分隔符號時拋出明確錯誤(訊息為固定詞彙加第幾個項目,不含路徑);使用者 2026-11-14 裁定:元件層發出 `error` 事件,父元件未接收時才 `console.error` 一行。原行為為 `.catch(console.log)` 靜默吞掉。

### 5.1 單一擁有者與站點全集

- 擁有者:`src/components/WExplorer.vue` 之 `convertItems`(本套件唯一呼叫 `filepathToTree` 之元件)。盤點:`rg -n "filepathToTree" src`(命中:`WExplorer.vue` 之 import 與 `convertItems`,另 `src/js/filepathToTreeWk.mjs` 為 worker 包裝,`WExplorer.vue` 內僅留註解,未使用)。
- 慣例沿用:`WGroupTags`、`WTextInt`、`WTextIntCore` 以 `$emit('error', …)` 交給父元件。

### 5.2 規則

- **R-EXP-EMIT**:`convertItems` 之 `core()` 失敗(`filepathToTree` 拋錯,及 `core()` 內其餘拋錯)一律 `vo.$emit('error', err)`,帶出原 Error 物件(不改寫、不包裝);無論父元件是否監聽皆 emit。
- **R-EXP-CONSOLE**:父元件未監聽 `error`(Vue 2:`vo.$listeners.error` 不存在)時,另以 `console.error` 輸出**恰一行** `WExplorer: <err.message>`(`err` 非 Error 時輸出 `String(err)`);已監聽時不輸出,避免重複。理由:錯誤不得被靜默吞掉。
- **R-EXP-ASYNC**:emit 與 `console.error` 只在 `core().catch` 內執行:`convertItems` 由 computed `changeItems` 於渲染時呼叫,不得於渲染期間同步 emit(父層 handler 若改響應式資料會在渲染中觸發重繪)。
- **R-EXP-VALID**:資料有效時不發 `error`、不輸出 `console.error`,畫面與行為同改前。
- **R-EXP-KEEP**:失敗時不清空畫面,維持上一次成功轉換之結果(`itemsTrans`、`treeItemsFolder`、`treeItems`、`kpPath` 之寫入在 `filepathToTree` 成功之後);之後 `items` 改回有效即照常重建,不再有新的 `error`。此為既有行為,JSDoc `@vue-event error` 已載明。

### 5.3 規則 → 測試

| 規則 | 測試 | 內容 |
|---|---|---|
| R-EXP-VALID | `e2e-explorerError`「資料有效時行為不變」2 案 | 有/無監聽 `error`:渲染出資料夾名 `data`、`errors` 0 筆、無 `WExplorer: ` 開頭之 `console.error`、無 pageerror |
| R-EXP-EMIT、R-EXP-CONSOLE(已監聽) | 同檔「轉換失敗: 父元件有監聽error」5 案 | 路徑重複、資料夾與檔案同名、項目缺 `type`、路徑段含 `❯`、項目非物件各一:恰 1 次 `error`、為 `Error` 實例、message 符合 `^invalid fps\[\d+\]`、不含路徑特有字串、無 `console.error`、無 pageerror |
| R-EXP-EMIT、R-EXP-CONSOLE(未監聽)、R-EXP-ASYNC | 同檔「轉換失敗: 父元件未監聽error」5 案 | 同上 5 種輸入:`WExplorer: ` 開頭之 `console.error` 恰 1 行、單行、符合 `^WExplorer: invalid fps\[\d+\]`、不含路徑特有字串、無 pageerror |
| R-EXP-KEEP | 同檔「資料更新」1 案 | 有效 → 無效(恰 1 次 `error`,畫面仍含上一份之 `data`)→ 另一份有效(渲染出 `other`,`error` 仍 1 次,無 `console.error`) |

- 測試頁 `test/tools/e2e-entry-explorerError.mjs`;`e2e-explorerError` 之 `E2E_SRC_DIR` 環境變數可指向修前或變異副本之 `src`(分辨力驗證用,預設工作區 `src`)。
- 有效性證明(2026-11-14 wexp430 實測):修前(HEAD 之 `src`,`git archive` 副本)2 綠(資料有效之兩案,行為本就不變)11 紅;變異:M1 移除 `$emit` → 6 紅(已監聽 5 案 + 資料更新案);M2 恆輸出 `console.error` → 6 紅(已監聽 5 案 + 資料更新案);M3 `console.error` 改 `console.log` → 5 紅(未監聽 5 案)。

### 5.4 已知限制(文件化)

- `core()` 內 `showTreeFirstFolder` 之拋錯亦走同一個 `.catch`,同樣以 `error` 事件發出(不另分流)。
- `error` 事件只帶 Error 物件,不另帶項目索引欄位;索引在 message 內(如 `invalid fps[2].path: …`)。
- 同檔 `triggerClickTreeFolderById` 之 `console.log('invalid id', id)` 屬呼叫端傳入無效 id 之防呆,非轉換失敗,不屬本節,未改。
