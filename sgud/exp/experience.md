# 累積經驗

本檔為執行工作時特有之累積經驗,留給後續之嘗試、執行與判斷,由agent自行編列、擴充與維護.

## 2026-10-14 建置腳本離開碼審計(run01)

- **w-pksupdate 怎麼判定 script.txt 各列**(讀其 `src/ectScripts.mjs`、`src/runScript.mjs`):以 PowerShell 逐列執行;node 列失敗＝離開碼非 0 或輸出含 `[RollupError]`;`./node_modules/.bin/`(jsdoc)與 git 列不判定;首個 git 列前之 dist 閘門只攔「dist 有刪除且無任何產出」;`#node toolg/addVersion.mjs` 與 `#npm publish` 會被改寫為執行,`#npm test` 不會。
- **`[RollupError]` 字樣只出現在 Rollup 自身錯誤**(如相對引用解析不到,Node 印成 `Error [RollupError]: …`);Babel 外掛之語法錯印成 `SyntaxError`、字串 reject、fs 錯誤都沒有此字樣——不可把字樣當成離開碼的替代。
- **Rollup 對無法解析之「裸」引用只警告並當 external**,建置照常成功;要注入「缺模組」造出建置錯誤,須用相對路徑。驗證「失敗會被攔」時兩種都要測,否則會漏掉「成功但產物壞」這一類。
- **沙箱實跑建置腳本**:把 `git show HEAD:toolg/<x>.mjs` 之副本放在 repo 內 `tmp/` 下之沙箱,以 `spawnSync(process.execPath, [...], { cwd: 沙箱 })` 執行,裸 import 會向上解析到 repo 之 node_modules;沙箱需有 `package.json`(rollupFile 讀 banner)、`docs/`(gDocExams 以非遞迴 mkdir 建 `docs/examples`)、全部 `toolg/`(`src/components/demolink.vue:45` 引用 `../../toolg/cvCasename.mjs`)。缺任一項的失敗是沙箱造成的,不是產品事實(本次兩度踩到,皆先查成因才下結論)。
- **Windows 造清空失敗**:以子行程之工作目錄占住目標下之子資料夾,`fs.rmSync` 即 EPERM(穩定重現);Linux 不成立,跨平台測試改用「目標為檔案」。
- **產物差異歸因法**:`npm pack <套件>@<舊版> --pack-destination tmp/...`(先驗 sha512 與 HEAD 之 package-lock 相同),以 `/c/...` 形式路徑給 GNU tar 解壓(`C:` 會被當成遠端主機),再以其 `src/` 直接 import 重建;與 HEAD 逐位元組比對即可分離「套件版本」與「相依版本」之影響。本次:1.1.16 重建＝HEAD,故 worker 差異全來自 w-package-tools 1.1.18。
- **worker 產物之瀏覽器驗證不需伺服器**:`page.setContent` 之 about:blank(origin null)下 blob worker 可用;產物為 `export{X as default}` 之 ES module,可改寫成掛 window 後以 `addScriptTag({ type: 'module', content })` 載入。`page.workers()` 可數殘留 worker;對呼叫後之 blob URL 做 fetch 可判斷是否已 revoke。
- **換行正規化陷阱**:`git show HEAD:<檔>` 給的是正規化後之 blob(LF),工作區檔可能是 CRLF 或混合;比對產生器之輸出應與工作區檔比,不要與 blob 比(`src/components/WComponentVue.vue` 為 CRLF/LF 混合)。
- **自己犯過的路徑錯**:把 git-bash 之 `/c/...` 路徑交給 `node -e` 讀檔,被解成 `C:\c\...`;改寫成 cwd 相對路徑之 `.mjs` 腳本即可(全域規範 §11.3)。
- **fsCleanFolder 之回傳形狀不一**(wsemi 1.9.15 與 w-package-tools 內附 wsemip 1.8.42 皆然):判定成功以「有 `success`」為準,不要只看 `.error`。注意本 repo 建置腳本實際執行的是 w-package-tools 內附之 `src/wsemip.umd.js`,不是 `node_modules/wsemi`;引用執行碼時要指向實際被 import 的那份。
- **外部複審找到我漏的格(2026-10-14)**:自審 54 格之表,Opus 子代理只讀複審後新增 10 格、修正 6 項,其中最重要的「範例檔名撞名」(84 個 AppZone、1510 個範例只產生 1501 個檔名,9 組被靜默覆寫,`docs/examples/w-popup_isolated.html` 實為 tooltip 範例)早已存在於受追蹤產物中。教訓:「成功但產物壞」這一類不能只靠注入失敗去找,要拿**原始碼的成員數對產物的成員數**(N 個範例 → N 個檔)去對帳。
- **純移除 catch 依賴 Node 預設**:`NODE_OPTIONS=--unhandled-rejections=warn` 時未處理 rejection 之離開碼為 0(實測);建置腳本要可靠地非 0,頂層 catch 後明設 `process.exitCode = 1`。
- **我的 harness 有兩處與真實入口不同**:jsdoc 以 `node node_modules/jsdoc/jsdoc.js` 直跑而非 `.bin` shim;node 列以 `spawnSync(process.execPath)` 直跑而非 w-pksupdate 之 PowerShell 組法。複審以實際組法補測確認離開碼語意相同(stderr 有輸出而 exit 0 不判失敗)。寫 harness 時先列出與真實入口之差異。
- **改範例名稱須使用者同意**(全域規範 §10.1);範例檔名公式手寫兩處(`toolg/gExtractHtml.mjs:245-246`、`src/components/demolink.vue:75-78`),改一處會使 app.html 之連結靜默 404。

## 2026-10-14 建置腳本離開碼修正(run02)

- **先寫測試、先跑紅**:工作區之 toolg 尚未修改時即等於修前,直接跑新測試就是修前紅,不必另取副本;本輪 unit-buildScripts 修前 20 紅 8 綠、修後 28 綠。修前就綠的案例(成功路徑對照、兄弟守門)以變異證分辨力:測試留一個只供驗證用之來源切換環境變數(`W_TOOLG_DIR`、`W_WORKER_DIR`),把腳本或產物換成吞錯、不清空、不檢查、壞產物、語意被改、不終止 worker 之變體,逐一確認預期之案例轉紅。
- **「目標為檔案」不一定能分辨修正**:第 11 列(gExtractHtml)清空 test-html 失敗時,修前也會因為後續寫檔失敗而非 0;能分辨的是「子資料夾刪不掉、但後續寫檔照樣成功」之情形(修前以 0 續行並留下舊頁)。挑注入方式時,先問「修前在這個注入下真的會走到被測的缺陷嗎?」。
- **跨平台之「刪不掉」**:Windows 以子行程之工作目錄占住子資料夾;POSIX 以唯讀子資料夾(內放檔案、chmod 0o555),以 root 執行時無法模擬須略過。要在重試期間解除鎖,解除動作必須在另一個行程:測試以 `spawnSync` 跑腳本時本行程之計時器不會觸發。
- **ESM 頂層同步拋錯恆為 1**:`--unhandled-rejections` 之 default、warn、none 下皆以 1 結束(實測),故同步流程以拋錯結束即滿足「離開碼不依賴該模式」;非同步流程才需頂層 catch 明設 `process.exitCode = 1`。
- **Write 工具會把字串中之 ` ` 寫成實際之行分隔字元**(Edit 工具之 old_string 亦同樣轉換),eslint 因而報 no-multi-str 等錯;以 node 把該字元換回跳脫文字,改動時避開含該跳脫之片段。
- **worker 產物之「呼叫後終止」可由產物外層之 `.finally(()=>{X.terminate()})` 移除來造變體**:以此證明「呼叫後無殘留 worker」之斷言有分辨力(21 案全紅)。

## 2026-10-16 範例檔名撞名修正(run03,D1)

- **改名時改「後寫入者」**:撞名時占住舊檔名的是後寫入者(檔案依 getFiles 順序、同檔依範例順序),而舊檔名通常描述的是先寫入者;改後寫入者使 9 個舊檔名都還在且改放名稱所指之範例,另新增 9 個檔名,沒有任何網址消失。
- **重複之 casename 先看同區兄弟之命名慣例**:text-suggest、timeminute-range 之 5 個重複皆位於檔案後半之 border 變體區,同區其他範例都以 `border & ` 起首,只有它們漏了;補前綴即是「看名稱即知」之名。截斷撞名者以重排屬性使區分者進入前 4 段,屬性一字不減。
- **新舊產物逐檔比對法**:把 HEAD 之 toolg(`git show`)與 HEAD 之 AppZone 放進 `tmp/` 沙箱跑第 11 列,另以工作區跑一次,逐檔比;先以舊版產物對帳受追蹤之 `docs/examples`(把 CDN 行換回 `../dist/...`)1501 頁全同,證明沙箱可重現實際產製,再看新版之差異(1492 同、9 舊檔名改內容、9 新檔名只差標籤 1 行)。
- **app 之連結以真瀏覽器驗**:沙箱跑第 9 列(gDistApp,約 40 秒)產 app.html,`file://…/app.html?cmp=<kbname>` 開啟,`addInitScript` 把 `window.open` 換成記錄器,點 demolink 之第 3、5 個子元素(example、code 按鈕),比對網址與產物檔是否存在。
- **async 函式在同步腳本內之失敗**:w-package-tools 之 `extractHtml` 是 `async` 但內部無 await,寫檔同步發生、失敗卻成為 rejected promise;未接 promise 時預設模式為 1、warn 模式為 0(實測)。看到「同步腳本呼叫 async 函式而不接回傳值」就要查離開碼。
- **建置在 Windows 跑,檔名唯一性要不分大小寫比**:只差大小寫之兩檔名在 Windows 會互相覆寫。
- **git 之換行警告不一定是自己造成**:autocrlf=true 時 HEAD blob 為 LF、工作區為 CRLF;`src/AppZoneWTextSuggest.vue` 之工作區原本就是 LF,改動後 git 才提示,依行號置換並保留原換行即可,不要整檔轉換。

## 2026-10-29 計時器相關測試事件化(tm-compvue2)

- **動工前快照要完整才有意義**:負載試驗之「改造前基準」用 `git archive HEAD src test toolg package.json script.txt` 解到 `tmp/<名>/base`,`node_modules` 以 junction(`cmd //c mklink /J`)連回;只複製 `src/js` 與 `test` 之半成品快照缺 `src/AppZone*.vue`、webpack 找不到 `lodash-es`,出現之失敗是快照造成,不是產品事實(先小跑一次冒煙再開基準)。結案刪除前以不跟進連結之方式列出 junction、`cmd //c rmdir` 拆除並回驗 `node_modules` 完好,才遞迴刪除。
- **junction 共用 `node_modules` 時,升相依須等基準跑完**(基準與工作樹共用同一份 `node_modules`);基準期間可編輯工作樹之 `src`/`test`(快照有自己的副本)。
- **舊測試在三種負載下可能一次都不紅**:本套件 15 次(8 壓力行程、lag 400:1000、lag 1500:3000 各 5 次)只有 2 個與計時無關之預存紅案(見下),`sleep(10)` 與延後發出之 1 ms 計時器同輪建立、依到期時間排序,負載不顛倒;改以規格 P7 之「非缺陷之時序變異」(`domDetect` 之延後發出計時器由 1 ms 改 40 ms,行為語意不變:舊測試轉紅、新測試不受影響)與單案耗時佐證。
- **預存紅要先在 HEAD 單獨確認再歸因**:`unit-buildScripts` 之 `cleanFolderStrict` 2 案(`retried only 1ms`)在 HEAD、無負載時即紅:w-package-tools 1.1.21 之 `cleanFolder` 改為「非 success 即拋、僅占用類自行重試」,`toolg/cleanFolderStrict.mjs` 之迴圈在第一次呼叫即被例外帶出,不再重試非占用類錯誤。升相依(update pks)後未重跑 `unit-buildScripts` 應是它沒被發現的原因(推測)。
- **Windows 之占用就緒不必等**:子行程以 `cwd: sub` 建立,工作目錄應於行程建立時即已占用(早於 JS 執行;此為推論,未另行實測),`sleep(500)` 只是保險,舊測試於 15 次負載下無一失敗與此相符;改為子行程輸出標記、父行程見標記才續行,語意明確且不受負載影響。
- **暫時性占用案要以「第一次確因占用而失敗」為閘門**:`fs.rmSync` 於 Windows 對他行程之工作目錄拋 EBUSY／EPERM;清空腳本載入 `watch-fs.mjs` 包覆 `fs.rmSync` 等(wsemip 之 `fsCleanFolder` 以 `fs.rmSync` 屬性呼叫,故可包覆),首次占用失敗時同步寫 `FS-BUSY`,父行程見標記才釋放並斷言 `o.busy`,不再以子行程計時器(1200 ms)與清空腳本啟動時間賽跑。清空腳本須為非同步子行程(`spawn`),父行程之事件迴圈才能於重試期間釋放占用。
- **「呼叫後不殘留 worker」之同步點**:在呼叫前註冊 `page.on('worker')`,收集每個 worker 之 `close` 事件,呼叫後等全部 `close`,再斷言 `page.workers()` 為 0;21 案於全套與三種負載下皆綠、缺陷版(不 `terminate`)變異兩案皆紅。缺陷版每案等滿 30 秒上限,變異只取 2 案。
- **否定斷言之屏障**:microtask 排定者(如 `refreshKey` 之重新比較)以 `setImmediate` 作屏障即可斷言「尚未發生」之相反面——屏障前必已執行,與負載無關;不必用 `sleep(10)` 觀察窗。
- **`check` 事件為同步通知**:`fireRO` 內量測與是否判定為變化同步完成,「未發出」不必等待,直接斷言 `changed:false` 與 `emit` 數不增;`emit` 於派發給指令之前通知,`until` 之續行在回調返回後之 microtask,續行時指令已轉發完畢。
- **對照 w-converhp 等先例**:明細表之站點清單可能漏列同型站點(本輪 `unit-domResize` 漏 1、`unit-buildScripts` 漏 3),開工時以 `rg -n "sleep\(|waitForTimeout|setTimeout"` 對檔重盤。

## 2026-10-29 修正輪(tm-compvue3)

- **上游行為變更先查證是設計還是缺陷,再改斷言**:w-package-tools 1.1.21 之 `cleanFolder` 對非占用類錯誤首次即拋,查其 JSDoc(`src/cleanFolder.mjs:7-13`)、實作註解(`src/buildCheck.mjs:536-541`)與其自帶測試(`test/unit-cleanFolder.test.mjs:62-74`、`unit-wsemipContract.test.mjs:144-158`)三處一致,確定為設計;斷言改為「首次即拋、訊息以 `can not clean folder[` 起頭並含目標絕對路徑、目標檔案不被改動」,不再斷言耗時 ≥2700 ms。「不重試」以訊息來源(上游首次失敗之訊息,而非本層重試耗盡後之 `cleanFolderStrict: … after 10 retries`)判定,不用牆鐘門檻,故不受負載影響。
- **「完全靜默」要加在共同層**:`createDetectDirective.start` 在呼叫各指令之 `create` 之前,已把所有函數設定包成「拋錯時每綁定每鍵 `console.error` 一次再拋回」;`domResize.create` 內無從取消。故以選用參數 `quietKeys`(預設空,其他三個偵測類指令不變)讓列於其中之鍵不提示、仍拋回(由 wsemi `getTrace` 忽略,保持單一擁有者)。測試要同時攔 `console.error/warn/log/info/debug`(只攔 `error` 會漏掉改走其他輸出的缺陷)。
- **排鎖等待可長達一個多小時,取證與編輯不要被它卡住**:本輪排鎖 80 分鐘(他套件獨佔負載試驗持鎖)。取「修前紅」不必凍結 src 等鎖:在 `tmp/<名>/pre` 放修前 src 副本與新測試(相對引用 `../src/js`、`./tools/…` 於副本內仍成立,`node_modules` 由 repo 向上解析),編輯與取證互不牽制;全套、變異、負載各自獨立 `nohup` 排隊,`quiet-run --timeout 14400`(排鎖等待也計入)。
- **變異/取證腳本在排鎖前先乾跑準備階段**:本輪 `comboA.mjs` 因變異 MQ1 以 `\n` 比對 CRLF 檔(`domResize.mjs`、`unit-domResize.test.mjs` 為 CRLF,`createDetectDirective.mjs` 與多數新檔為 LF)而「changed nothing」拋錯,排鎖 80 分鐘後在最後一段中止,只好再排鎖補跑 MQ 一段(又 21 分鐘)。腳本需有「不取鎖、只建副本並驗證每個變異確有改動」之乾跑模式;改檔之比對用 `\r?\n`。
- **p99Max 不是旋鈕**:CPU 壓力試驗以固定 8 個壓力行程施壓,測試行程之事件迴圈延遲 p99 最大值隨當下機器其他負載而異(改造前 373～623 ms、改造後第 1 次 1222 ms、後 4 次 280～316 ms),不能據以宣稱穩定度改善或惡化;失敗率(本輪案前後皆 0)與單案耗時才是判讀依據。
