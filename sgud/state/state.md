# 現況

本檔記當前已開發功能之最新狀態(各功能做到哪裡、對應之規則帳本條目與測試檔、已知缺口與待辦、最近一次驗證或發布之版本),只記現況、不寫過程(過程見 `sgud/exp/experience.md`)。與 `sgud/rule/rulebook.md` 比對即知尚未做到者。

- 套件版本:2.5.38(`package.json`;本檔更新時之工作樹,未發布、未 commit 之變更見下「待發布之變更」)
- 相依:`wsemi` ^1.9.37(自有套件,從 Verdaccio 取得)、`w-package-tools` ^1.1.21(已安裝 1.1.21)、`w-package-tools-e2e` ^1.0.15
- 最近一次驗證:2026-11-02 cv267——全套 `npm test`(`quiet-run --lock`)**232 passing／0 failing／0 pending**(改前 235 案,淨減 3 案:`unit-buildScripts` 31 → 28,見下「待發布之變更(2026-11-02 cv267)」);依 `script.txt` 實跑 cleanFolder 至 gDistRollupComps(不含 addVersion、modifyReadme、git、deploy),`dist/` 兩檔逐位元組同改前,`docs/` 除 jsdoc 產製時間與 `app.umd.js` 快取參數外同改前;第 6 列 `toolg/gDocExams.mjs`(主控未提交之批次改動)匯入之 `genDocsExams.mjs` 不在已安裝之 w-package-tools 1.1.21,該列以 HEAD 版副本實跑。報告 `C:\opensrcOper\dnow\20261102075126\agent-out\cv267-修正報告.md`
- 前一輪驗證:2026-11-01 cv-rmdyn——全套 `npm test`(`quiet-run --lock`)**235 passing／0 failing／0 pending**(移除前 `mocha --dry-run` 亦 235 案,案數 0 增減);eslint 對改動檔(`src/App.vue`、`src/components/WComponentVue.vue`)0 error;`toolg/gDistRollupComps.mjs` 同設定另輸出至 `./tmp` 之 umd 不含 `refs/heads/master`、`raw.githubusercontent`、`base:` 載入碼(舊 dist 各 1 處),不含 `Dyn`。報告 `C:\opensrcOper\dnow\20261101202155\agent-out\cv-rmdyn-修正報告.md`
- 前一輪驗證:2026-11-01 cv37——全套 `npm test`(`quiet-run --lock`)**235 passing／0 failing／0 pending**(220 + 新增 `unit-buildPopper` 15 案);新測試對修前(HEAD 之 src,`git archive` 副本)1 綠 14 紅,對 15 種變異皆有案例轉紅;eslint 對改動檔 0 error。報告 `C:\opensrcOper\dnow\20261031234910\agent-out\cv37-修正報告.md`
- 再前一輪驗證:2026-10-31 cv29——全套 `npm test`(`quiet-run --lock`)**220 passing／0 failing／0 pending**(含新增 `unit-createTransitionState` 與 `e2e-transitionState` 共 45 案);新測試對修前(HEAD 之 src)全紅,對 17 種變異皆有案例轉紅;eslint 對改動檔 0 error。報告 `C:\opensrcOper\dnow\20261031175415\agent-out\cv29-修正報告.md`
- 更早一輪驗證:2026-10-29 tm-compvue3——全套 175 passing／0 failing／0 pending;CPU 壓力負載(8 行程)改造前 5 次對改造後 5 次皆完成,本輪案 0 失敗,壓力行程全數結束;新增斷言對修前副本與變異皆轉紅。報告 `C:\opensrcOper\dnow\20261029050859\agent-out\tm-compvue3-修正報告.md`
- 最早一輪驗證:2026-10-29 tm-compvue2——計時器相關測試之變異(新測試對照舊測試,新⊇舊)與 lag 400:1000、lag 1500:3000 各 5 次負載試驗,報告 `C:\opensrcOper\dnow\20261029050859\agent-out\tm-compvue2-修正報告.md`

## 功能現況

| 功能 | 狀態 | 規則帳本 | 測試檔 | 已知缺口與待辦 |
|---|---|---|---|---|
| 建置腳本之失敗與離開碼(`script.txt` 各列) | 生效 | 一、R-B1、R-EXIT、R-B2、R-B3 | `unit-buildScripts`、`unit-workerFuncs` | 無(R-B2 依 w-package-tools 1.1.21 修訂,2026-10-29;2026-11-02 cv267 依 dspec〈自有套件之發布與建置腳本〉改回標準寫法,`toolg/` 不含自創包裝) |
| 範例檔名唯一與 kbname 一致 | 生效 | 一、R-B4、R-B5 | `unit-exampleNames` | 無 |
| 偵測類指令 `v-domresize`、`v-dommutation`、`v-domstable`、`v-domvisible` 之共同生命週期與指令值解析 | 生效 | (指令契約見各檔 JSDoc) | `unit-createDetectDirective`、`unit-createVnodeEmitter`、`unit-parseDetectValue`、`unit-domResize`、`e2e-domDirectives`、`e2e-hiddenMeasure` | 無 |
| `v-domresize` 之觀察回調 `onTrace`(轉交 wsemi `domDetect`;回調拋錯完全靜默:`createDetectDirective` 之 `quietKeys`) | 生效(新增,2026-10-29) | 二、R-T2 | `unit-domResize`「domResize onTrace」、`unit-createDetectDirective`(`quietKeys` 案) | 其餘三個偵測類指令未轉交 `onTrace`:可擴充,未做(見「已知缺口」第 1 項) |
| 計時器相關之測試以事件同步 | 部分 | 二、R-T1～R-T6 | `unit-domResize`(11 案)、`unit-buildScripts`(占用 5 案)、`unit-workerFuncs`(每案) | `e2e-*` 檔之等待站點(含 `e2e-hover` 2 案)屬批 E,未處理 |
| 有過場動畫之組件於 DOM 提供可偵測之 `state` 屬性:WDialog〔`hidden`/`opening`/`opened`/`resizing`〕、WTooltip 的 `.WPopperFix`〔`hidden`/`opening`/`opened`;WPopup、WTextSelect、WTextSuggest、WTimeday、WColorSelect、WSlider 提示等一併〕、WListExpandItem〔`collapsed`/`expanding`/`expanded`/`collapsing`〕、WGroupTags 與 WGroupDragdrop〔`idle`/`moving`〕;共用 `src/js/createTransitionState.mjs` | 生效(新增,2026-10-31 cv29;未發布) | 三、R-S1～R-S6 | `unit-createTransitionState`、`e2e-transitionState` | 見「已知缺口」第 4～6 項;WDialog 與浮層關閉無過場,不使用 `hiding`(待使用者裁示是否要加關閉過場) |
| `buildPopper` 之 `state` 歸屬:由 `buildPopper` 擁有(建構時即 `hidden`),提供取值 `ev.getState()` 與變更訊號(`ev.on('state')`、`vo.$emit('state')`);呼叫端宣告 `state` 時同步寫入並於建構時校正,未宣告不拋錯;`_keys` 不含 `state` | 生效(新增,2026-11-01 cv37,Gitea #37;未發布) | 三、R-S6 | `unit-buildPopper`(另 `e2e-transitionState` 浮層案為組件層回歸) | 建議 4(`buildPopper` 直接於 `.WPopperFix` 設屬性)不採,理由見 R-S6;下游 w-vditor-vue `WVditorVue.vue:338` 之註解「BuildPopper要求vo須預先宣告state」於本版發布後過時(該套件只讀,留待其主責更新;其宣告與綁定仍有效) |

| *Dyn 組件(依 GitHub master 版號以 jsDelivr `/npm/` 動態載入自有套件之 14 個 `w-*-dyn` 組件)與其載入機制 `importResExt` | **已移除,不留相容**(2026-11-01 cv-rmdyn,Gitea #43;使用者 2026-11-01 裁示;未發布) | (無規則帳本條目) | (無專屬測試;全套 235 案不變) | 使用端改用對應套件之非 Dyn 組件(對照表見報告);已發布之舊版(≤2.5.37)umd 仍含 *Dyn,由使用端停用 |

## 已知缺口

1. 其餘三個偵測類指令(`v-dommutation`、`v-domstable`、`v-domvisible`)未轉交 `onTrace`:**可擴充,未做**(主控 2026-10-29 裁示;無測試需要,要做時各指令 `keys` 增 `onTrace`、`quietKeys` 傳 `['onTrace']`,並比照 `domResize onTrace` 補案)。
2. (已處置,2026-11-02 cv267)原 `toolg/cleanFolderStrict.mjs` 已移除,清空直接呼叫 w-package-tools 之 `cleanFolder`(依 dspec〈自有套件之發布與建置腳本〉規則 4)。
3. `e2e-*` 檔之等待站點(含 `e2e-hover` 2 案)屬批 E,未處理。
4. `state` 屬性未涵蓋:建議書範圍外且含 `transition: all 0.3s`、屬性改變時會改變版面之組件(`WPanelAvatar`、`WPanelBulge`、`WGroupBaggage` 等,未逐一盤點);WDialog 強制模式點擊外部之振動提示動畫(規則帳本 R-S5)。
5. `WDrawer` 自帶一份落定實作(`settleState`),未收斂至 `createTransitionState`;收斂須驗證其既有行為不變,不在 cv29 範圍。
6. WGroupTags/WGroupDragdrop 之 e2e 以頁面按鈕改 `value` 代替真拖放換序(兩者走同一條 `changeKeys` 路徑);逾時後備之 `marginMs=300`、`capMs=3000` 為經驗值。

## 待發布之變更(2026-11-02 cv267,未 commit)

- 依 dspec〈自有套件之發布與建置腳本〉(使用者 2026-11-02 裁示)將 `toolg/` 改回標準寫法:移除 `toolg/cleanFolderStrict.mjs`(2026-10-14 修正輪自創之包裝);`toolg/cleanFolder.mjs` 改為 `cleanFolder('dist')`、`cleanFolder('docs')`(自 `w-package-tools/src/cleanFolder.mjs` 匯入);`toolg/gExtractHtml.mjs` 改自 `w-package-tools/src/cleanFolder.mjs` 匯入 `cleanFolder`(清 test-html、test-action)。`src/`、`package.json`、`script.txt`、`CLAUDE.md` 無改動。
- `test/unit-buildScripts.test.mjs`:原直驅 `cleanFolderStrict` 之 6 案撤除,改為以副本並指定 cwd 執行 `toolg/cleanFolder.mjs`(第 4 列 6 案:可清空、不存在建立、dist 為檔案、docs 為檔案、dist 持續占用〔重試且失敗不只一次、耗時 ≥ 2700 ms〕、暫時占用於重試期間解除);原「目標不存在且上層為檔案」案不保留(toolg 目標皆 cwd 相對路徑,造不出;由上游自身測試負責)。`unit-buildScripts` 31 → 28 案,全套 235 → 232 案。
- `sgud/`:撤除據自創包裝所立之 R-B2「本層」規則,改為依 dspec;經驗(`experience.md`)相關兩則保留原文並加註。
- 既有標準圖:本套件無標準圖(`test/pics` 不存在),0 張改變。
- 已知前提:工作樹之 `toolg/gDocExams.mjs`(主控未提交之批次改動,呼叫 `genDocsExams`)須 w-package-tools 升至含 `src/genDocsExams.mjs` 之版本才可執行(已安裝 1.1.21 無此檔)。

## 待發布之變更(2026-11-01 cv-rmdyn,未 commit)

- 移除 14 個 `src/components/*Dyn.vue`(`WAggridVueDyn`、`WCkeditorVueDyn`、`WEchartsVueDyn`、`WHighchartsVueDyn`、`WHighstockVueDyn`、`WImageCascadingDyn`、`WImageViewerDyn`、`WLeafletVueDyn`、`WMaplibreglVueDyn`、`WQuillVueDyn`、`WTableDyn`、`WThreejsVueDyn`、`WTinymceVueDyn`、`WVditorDyn`)、`src/js/importResExt.mjs`、孤兒 `src/js/getVue.mjs`(僅被 Dyn 組件引用)、12 個示範頁 `src/AppZone*Dyn.vue`。
- `src/App.vue`:移除上列示範頁之 import、template 掛載、components 註冊與整組 `dynamic` 選單群(選單項 84 → 72);`?cmp=` 註解範例改 `w-tree`。
- `src/components/WComponentVue.vue`:以 `node toolg/gMergeComps.mjs` 重生(僅減 14 行 import、14 行 `Vue.component('w-*-dyn')`)。
- `package.json`、`README.md`、`test/`、`toolg/` 無改動(盤點 0 命中);`docs/`(jsdoc 與範例頁)、`dist/` 為發布流程(`script.txt`:cleanFolder → jsdoc → gDocExams → rollup)重生之產出,本輪不動,發布時重生後即不含 *Dyn。
- 既有標準圖:本套件無標準圖(`test/pics` 不存在),0 張改變。
- 建議書(Gitea #43)由主控處理。

## 待發布之變更(2026-11-01 cv37,未 commit)

- `src/js/buildPopper.mjs`:新增 JSDoc;`state` 改由 `buildPopper` 擁有(內部變數,建構時 `hidden`),`_keys` 移除 `'state'`;新增 `ev.getState()`、變更訊號(`ev.emit('state', s)` 與 `vo.$emit('state', s)`,值有變更時發,建構初值不發,`ev.emit` 外包 try/catch);`vo` 已宣告 `state`(`haskey`)時建構時與每次變更同步寫入 `vo.state`,未宣告略過、不拋錯。`.WPopperFix[state]` 之語彙與時機不變。
- `src/components/WTooltip.vue`:僅 `data` 內 `state` 之註解(行為不變;仍宣告 `state` 供 `:state` 綁定)。
- `test/`:新增 `unit-buildPopper.test.mjs`、`tools/e2e-entry-buildPopper.mjs`;既有標準圖:本套件無標準圖,0 張改變。
- 建議書 `建議w-component-vue調整.md`(Gitea #37)由主控於發布前刪除。

## 待發布之變更(2026-10-31 cv29,未 commit)

- 新增 `src/js/createTransitionState.mjs`(過場狀態追蹤器);`WDialog.vue`、`WTooltip.vue`(及 `WPopup.vue` 之 JSDoc)、`src/js/buildPopper.mjs`、`WListExpandItem.vue`、`WGroupTags.vue`、`WGroupDragdrop.vue` 新增 `state` 屬性(只新增屬性,外觀、動畫時間、互動不變;值與轉換時點見規則帳本三)。(cv29 時 `buildPopper` 之 `vo` 須宣告 `state`,已於 cv37 改由 `buildPopper` 擁有,見上節。)
- `README.md` 新增「State attribute of components with transitions」一節。
- `test/`:新增 `unit-createTransitionState.test.mjs`、`e2e-transitionState.test.mjs`、`tools/e2e-entry-transitionState.mjs`、`tools/e2e-entry-createTransitionState.mjs`;`tools/e2e-setup.mjs` 之 `bundleEntry` 新增 `opt.srcDir`(別名 `@src`),`openPage` 新增 `opt.clock`;既有標準圖:本套件無標準圖(`test/pics` 不存在),0 張改變。
- 建議書 `建議w-component-vue調整.md`(Gitea #29)由主控於發布前刪除。

## 待發布之變更(2026-10-29,未 commit)

- `src/js/domResize.mjs`:`keys` 增 `onTrace`,`quietKeys: ['onTrace']`,JSDoc 補述(未給時行為同前,無破壞性變更;`onTrace` 拋錯完全靜默)。
- `src/js/createDetectDirective.mjs`:新增選用參數 `quietKeys`(預設空,其他三個偵測類指令行為不變):列於其中之函數設定鍵,拋錯時不 `console.error` 提示,仍交回偵測器。
- `package.json`:`wsemi` ^1.9.25 → ^1.9.30、`w-package-tools-e2e` ^1.0.10 → ^1.0.11(`version` 未動)。
- `test/`:`unit-domResize`、`unit-buildScripts`、`unit-workerFuncs` 改為事件同步;新增 `test/tools/traceKit.mjs`、`loadTrial.mjs`、`loadPreload.mjs`。
- `test/`(tm-compvue3):`unit-buildScripts` 之清空兩案依 w-package-tools 1.1.21 之新行為改斷言並更名(首次即拋錯、非占用類不重試;2026-11-02 cv267 已改為經 `toolg/cleanFolder.mjs` 執行,見該節);`unit-domResize` 之五種回調形態案改斷言拋錯案無任何 console 輸出;`unit-createDetectDirective` 新增 `quietKeys` 案。
