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
  - 清空:`toolg/cleanFolderStrict.mjs`(本 repo 4 個清空呼叫點之唯一出口)。
  - 範例檔名公式 `${kbname}_${cvCasename(casename)}`:`toolg/getExampleFn.mjs`(唯一;2026-10-16 由兩處手寫收斂,原載「仍手寫兩處(`toolg/gExtractHtml.mjs:245-246`、`src/components/demolink.vue:75-78`)」)。站點全集(盤點:`rg -n "getExampleFn|cvCasename" toolg src test`):`toolg/gExtractHtml.mjs`(產製 `test-html/<檔名>.html`、`test-action/<檔名>.action.json` 及撞名檢查)、`src/components/demolink.vue`(app 之範例頁網址 `https://yuda-lyu.github.io/<pkgname>/examples/<檔名>.html` 與原始碼網址 `https://github.com/yuda-lyu/<pkgname>/blob/master/docs/examples/<檔名>.html`)、`test/unit-exampleNames.test.mjs`。第 12 列 `toolg/gDocExams.mjs` 依 test-html 之實際檔名複製至 `docs/examples/`,不另算檔名。`cvCasename` 只被 `getExampleFn` 引用。
  - 範例全集:`src/AppZone*.vue` 內每個 `<demolink>` 之 (kbname, casename);盤點:`rg -c "<demolink" src --glob "AppZone*.vue"`(2026-10-16:84 檔、1510 個)。

### 1.2 規則

- **R-B1** `script.txt` 之每個 node 建置列,產製失敗(來源缺、語法錯、匯出不符、相依解析失敗、寫檔失敗)一律以非 0 離開碼結束,失敗原因印至 stderr;不得 catch 後只印出。理由:w-pksupdate 以離開碼判定,`[RollupError]` 字樣只涵蓋 Rollup 自身之解析錯誤(實測 Babel 語法錯、字串 reject、fs 錯誤皆無此字樣)。
- **R-EXIT**(離開碼須顯式設定)非 0 離開碼不得依賴 Node 之 unhandled-rejections 預設模式:非同步流程明設 `process.exitCode = 1`;同步流程以未捕捉例外結束。理由:`NODE_OPTIONS=--unhandled-rejections=warn` 時未處理 rejection 為 0(實測)。
- **R-B2** 清空步驟(dist、docs、test-html、test-action)一律經 `toolg/cleanFolderStrict.mjs`,失敗即拋錯(腳本以非 0 離開),回傳前回驗目錄存在且為空。失敗之判定與重試分兩層(2026-10-29 主控裁示,依 w-package-tools 1.1.21 之設計):
  - 上游 `w-package-tools` `cleanFolder`(1.1.21 起)非 `success` 即拋 `can not clean folder[絕對路徑]: 原因`;**占用類**(EBUSY、EPERM、ENOTEMPTY、ENOENT)由上游自行重試 10 次、間隔 300 ms,仍失敗才拋;**非占用類**(目標為檔案、無法建立〔上層為檔案〕、未給路徑、目標為連結、根目錄或 cwd 與其上層)首次即拋、不重試(`node_modules/w-package-tools/src/cleanFolder.mjs:7-13` JSDoc、`src/buildCheck.mjs:536-541,610-614`;其自帶測試 `test/unit-cleanFolder.test.mjs:62-74`、`unit-wsemipContract.test.mjs:144-158` 同)。
  - 本層 `toolg/cleanFolderStrict.mjs` **不捕捉上游之拋錯、不另行重試**(捕捉重試將使占用類變為上游 10 次 × 本層 11 次,且對非占用類重試無益);本層之迴圈僅在上游回傳 `success` 而目錄回驗仍非空時重試(10 次、300 ms,比照 w-pksupdate `removeTarget`),仍失敗拋 `cleanFolderStrict: can not clean folder[…] after 10 retries: …`。上游 1.1.21 前失敗時回傳結果而不拋(含 wsemip 於無法建立時回傳裸 Error,`node_modules/w-package-tools/src/wsemip.umd.js:6`),本層「非 `success` 即失敗」之判定因而保留為防線。
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
| R-B2 | 同上 | helper:可清空 → 空;目標為檔案、無法建立(上層為檔案)→ 首次即拋(訊息以 `can not clean folder[` 起頭並含目標之絕對路徑,非本層重試耗盡後之訊息,目標檔案不被改動);持續占用(win32)→ 拋錯且上游重試約 10×300 ms;暫時占用於重試期間解除(win32)→ 成功。第 4 列:可清空 → 0 且 dist、docs 皆空;dist 為檔案 → 非 0;dist 子資料夾被占用(win32)→ 非 0。第 11 列:test-html 為檔案 → 非 0 且無範例頁;test-action 為檔案 → 非 0 |
| (7.9 小項) | 同上 | `git check-ignore temp-<任意>.js` 命中 |
| R-B3 | `test/unit-workerFuncs.test.mjs` | 共用案例表(`test/tools/workerFuncsCases.mjs`)之可複製案例逐案:worker 版深度相等於 wsemi 非 worker 版且鍵順序相同;呼叫後 `page.workers()` 為 0;無 pageerror |
| R-B4 | `test/unit-exampleNames.test.mjs` | 來源:`src/AppZone*.vue` 每個 `<demolink>` 皆取得 (kbname, casename),以 `getExampleFn` 算出之檔名無重複(失敗訊息列出每組撞名之來源);demolink 與第 11 列皆經 `getExampleFn`、不再手寫 `cvCasename`。第 11 列(沙箱、合成輸入):跨檔同 kbname 撞名、同檔 casename 重複、前 4 段相同之截斷撞名、只差大小寫 → 非 0、stderr 列出撞名檔名與兩處來源、test-html 與 test-action 皆未寫出且舊頁未被清空;無撞名(含超過 4 段之 casename)→ 0,產出檔名集合等於 `getExampleFn` 之結果 |
| R-B5 | 同上 | 每個 AppZone 檔之每個 kbname 等於檔名所示之元件名 |

- 建置腳本沙箱之共用層:`test/tools/buildSandbox.mjs`(unit-buildScripts、unit-exampleNames 共用,2026-10-16 自 unit-buildScripts 抽出)。
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
- 已事件化:`unit-domResize` 11 案(原 `sleep(10)` 後斷言)、`unit-buildScripts` 占用 5 案(`cleanFolderStrict` 持續占用、暫時占用、第 4 列 dist 占用、第 11 列 test-html 占用、第 11 列 test-action 占用;原 `sleep(500)`,明細表僅列前 2 案)、`unit-workerFuncs` 每案(原 `waitForTimeout(300)`)。
- 刻意不動:`unit-createDetectDirective` 之 `tick`(`setTimeout 0` 作 macrotask 屏障,等 microtask 排定之重新比較;順序由事件迴圈決定,與負載無關);`test/e2e-*.test.mjs` 與 `test/tools/e2e-*.mjs` 之等待(含 `e2e-hover` 2 案,批 E 另案)。

### 2.4 規則 → 測試

| 規則 | 測試檔 | 案例 |
|---|---|---|
| R-T1 | `test/unit-domResize.test.mjs` | `domResize` 11 案(轉發 dom 事件與方向、視窗事件不帶方向 3 案、容許誤差內之軸、`toleranceBounce`、視窗尺寸、解除後不轉發、無處理器僅警告、`event: 'resize'`、停用後啟用、`refreshKey`) |
| R-T2 | 同上 | `domResize onTrace` 3 案(轉交與凍結／無接收者／事件內容、五種回調形態〔含拋錯案斷言無 console 輸出〕、最新 `onTrace` 不重建與有無之改變重建) |
| R-T2(`quietKeys`) | `test/unit-createDetectDirective.test.mjs` | 列於 `quietKeys` 之鍵拋錯不提示但仍交回、其他函數設定鍵照舊每鍵提示一次 |
| R-T3 | `test/unit-buildScripts.test.mjs` | `cleanFolderStrict(R-B2)` 持續占用、暫時占用;第 4 列 dist 占用;第 11 列 test-html、test-action 占用 |
| R-T4 | `test/unit-workerFuncs.test.mjs` | 每案「呼叫後無殘留 worker」 |

### 2.5 已知限制(文件化)

- (已處置,2026-10-29 tm-compvue3)`unit-buildScripts` 之 `cleanFolderStrict(R-B2)` 兩案原斷言「重試 10 次、≥2700 ms」於 w-package-tools 1.1.21 起不成立(上游對非占用類錯誤首次即拋,見 R-B2);主控裁示照新行為改斷言(案名改為「目標為檔案時首次即拋錯(非占用類失敗不重試)」「目標不存在且無法建立(上層為檔案)時首次即拋錯(非占用類失敗不重試)」)並修訂 R-B2,不改 `toolg`、不令其捕捉重試。`toolg/cleanFolderStrict.mjs` 之重試迴圈因此只對「回傳 `success` 而目錄仍非空」生效,未移除(不在本輪範圍)。
- 本節未涵蓋 `e2e-*` 檔之等待站點(批 E)。
