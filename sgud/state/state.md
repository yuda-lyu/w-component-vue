# 現況

本檔記當前已開發功能之最新狀態(各功能做到哪裡、對應之規則帳本條目與測試檔、已知缺口與待辦、最近一次驗證或發布之版本),只記現況、不寫過程(過程見 `sgud/exp/experience.md`)。與 `sgud/rule/rulebook.md` 比對即知尚未做到者。

- 套件版本:2.5.34(`package.json`;本檔更新時之工作樹,未發布、未 commit 之變更見下「待發布之變更」)
- 相依:`wsemi` ^1.9.36(自有套件,從 Verdaccio 取得)、`w-package-tools` ^1.1.21、`w-package-tools-e2e` ^1.0.13
- 最近一次驗證:2026-10-31 cv29——全套 `npm test`(`quiet-run --lock`)**220 passing／0 failing／0 pending**(含新增 `unit-createTransitionState` 與 `e2e-transitionState` 共 45 案);新測試對修前(HEAD 之 src)全紅,對 17 種變異皆有案例轉紅;eslint 對改動檔 0 error。報告 `C:\opensrcOper\dnow\20261031175415\agent-out\cv29-修正報告.md`
- 前一輪驗證:2026-10-29 tm-compvue3——全套 175 passing／0 failing／0 pending;CPU 壓力負載(8 行程)改造前 5 次對改造後 5 次皆完成,本輪案 0 失敗,壓力行程全數結束;新增斷言對修前副本與變異皆轉紅。報告 `C:\opensrcOper\dnow\20261029050859\agent-out\tm-compvue3-修正報告.md`
- 再前一輪驗證:2026-10-29 tm-compvue2——計時器相關測試之變異(新測試對照舊測試,新⊇舊)與 lag 400:1000、lag 1500:3000 各 5 次負載試驗,報告 `C:\opensrcOper\dnow\20261029050859\agent-out\tm-compvue2-修正報告.md`

## 功能現況

| 功能 | 狀態 | 規則帳本 | 測試檔 | 已知缺口與待辦 |
|---|---|---|---|---|
| 建置腳本之失敗與離開碼(`script.txt` 各列) | 生效 | 一、R-B1、R-EXIT、R-B2、R-B3 | `unit-buildScripts`、`unit-workerFuncs` | 無(R-B2 依 w-package-tools 1.1.21 修訂,2026-10-29) |
| 範例檔名唯一與 kbname 一致 | 生效 | 一、R-B4、R-B5 | `unit-exampleNames` | 無 |
| 偵測類指令 `v-domresize`、`v-dommutation`、`v-domstable`、`v-domvisible` 之共同生命週期與指令值解析 | 生效 | (指令契約見各檔 JSDoc) | `unit-createDetectDirective`、`unit-createVnodeEmitter`、`unit-parseDetectValue`、`unit-domResize`、`e2e-domDirectives`、`e2e-hiddenMeasure` | 無 |
| `v-domresize` 之觀察回調 `onTrace`(轉交 wsemi `domDetect`;回調拋錯完全靜默:`createDetectDirective` 之 `quietKeys`) | 生效(新增,2026-10-29) | 二、R-T2 | `unit-domResize`「domResize onTrace」、`unit-createDetectDirective`(`quietKeys` 案) | 其餘三個偵測類指令未轉交 `onTrace`:可擴充,未做(見「已知缺口」第 1 項) |
| 計時器相關之測試以事件同步 | 部分 | 二、R-T1～R-T6 | `unit-domResize`(11 案)、`unit-buildScripts`(占用 5 案)、`unit-workerFuncs`(每案) | `e2e-*` 檔之等待站點(含 `e2e-hover` 2 案)屬批 E,未處理 |
| 有過場動畫之組件於 DOM 提供可偵測之 `state` 屬性:WDialog〔`hidden`/`opening`/`opened`/`resizing`〕、WTooltip 的 `.WPopperFix`〔`hidden`/`opening`/`opened`;WPopup、WTextSelect、WTextSuggest、WTimeday、WColorSelect、WSlider 提示等一併〕、WListExpandItem〔`collapsed`/`expanding`/`expanded`/`collapsing`〕、WGroupTags 與 WGroupDragdrop〔`idle`/`moving`〕;共用 `src/js/createTransitionState.mjs` | 生效(新增,2026-10-31 cv29;未發布) | 三、R-S1～R-S6 | `unit-createTransitionState`、`e2e-transitionState` | 見「已知缺口」第 4～6 項;WDialog 與浮層關閉無過場,不使用 `hiding`(待使用者裁示是否要加關閉過場) |

## 已知缺口

1. 其餘三個偵測類指令(`v-dommutation`、`v-domstable`、`v-domvisible`)未轉交 `onTrace`:**可擴充,未做**(主控 2026-10-29 裁示;無測試需要,要做時各指令 `keys` 增 `onTrace`、`quietKeys` 傳 `['onTrace']`,並比照 `domResize onTrace` 補案)。
2. `toolg/cleanFolderStrict.mjs` 之重試迴圈在 w-package-tools 1.1.21 後只對「上游回傳 `success` 而目錄仍非空」生效(上游失敗即拋,本層不捕捉、不重試,見 R-B2);未移除,有需要時另案。
3. `e2e-*` 檔之等待站點(含 `e2e-hover` 2 案)屬批 E,未處理。
4. `state` 屬性未涵蓋:建議書範圍外且含 `transition: all 0.3s`、屬性改變時會改變版面之組件(`WPanelAvatar`、`WPanelBulge`、`WGroupBaggage` 等,未逐一盤點);WDialog 強制模式點擊外部之振動提示動畫(規則帳本 R-S5)。
5. `WDrawer` 自帶一份落定實作(`settleState`),未收斂至 `createTransitionState`;收斂須驗證其既有行為不變,不在 cv29 範圍。
6. WGroupTags/WGroupDragdrop 之 e2e 以頁面按鈕改 `value` 代替真拖放換序(兩者走同一條 `changeKeys` 路徑);逾時後備之 `marginMs=300`、`capMs=3000` 為經驗值。

## 待發布之變更(2026-10-31 cv29,未 commit)

- 新增 `src/js/createTransitionState.mjs`(過場狀態追蹤器);`WDialog.vue`、`WTooltip.vue`(及 `WPopup.vue` 之 JSDoc)、`src/js/buildPopper.mjs`、`WListExpandItem.vue`、`WGroupTags.vue`、`WGroupDragdrop.vue` 新增 `state` 屬性(只新增屬性,外觀、動畫時間、互動不變;值與轉換時點見規則帳本三)。`buildPopper` 之 `vo` 須宣告 `state`(`WTooltip` 已宣告)。
- `README.md` 新增「State attribute of components with transitions」一節。
- `test/`:新增 `unit-createTransitionState.test.mjs`、`e2e-transitionState.test.mjs`、`tools/e2e-entry-transitionState.mjs`、`tools/e2e-entry-createTransitionState.mjs`;`tools/e2e-setup.mjs` 之 `bundleEntry` 新增 `opt.srcDir`(別名 `@src`),`openPage` 新增 `opt.clock`;既有標準圖:本套件無標準圖(`test/pics` 不存在),0 張改變。
- 建議書 `建議w-component-vue調整.md`(Gitea #29)由主控於發布前刪除。

## 待發布之變更(2026-10-29,未 commit)

- `src/js/domResize.mjs`:`keys` 增 `onTrace`,`quietKeys: ['onTrace']`,JSDoc 補述(未給時行為同前,無破壞性變更;`onTrace` 拋錯完全靜默)。
- `src/js/createDetectDirective.mjs`:新增選用參數 `quietKeys`(預設空,其他三個偵測類指令行為不變):列於其中之函數設定鍵,拋錯時不 `console.error` 提示,仍交回偵測器。
- `package.json`:`wsemi` ^1.9.25 → ^1.9.30、`w-package-tools-e2e` ^1.0.10 → ^1.0.11(`version` 未動)。
- `test/`:`unit-domResize`、`unit-buildScripts`、`unit-workerFuncs` 改為事件同步;新增 `test/tools/traceKit.mjs`、`loadTrial.mjs`、`loadPreload.mjs`。
- `test/`(tm-compvue3):`unit-buildScripts` 之 `cleanFolderStrict(R-B2)` 兩案依 w-package-tools 1.1.21 之新行為改斷言並更名(首次即拋錯、非占用類不重試);`unit-domResize` 之五種回調形態案改斷言拋錯案無任何 console 輸出;`unit-createDetectDirective` 新增 `quietKeys` 案。
