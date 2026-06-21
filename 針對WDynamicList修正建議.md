# 針對 WDynamicList 的修正建議（GIS2D WTree 偶爾空樹之真正根因）

> 狀態：經**逐行追碼 + 真實 8080 app 多次實測 + 因果性修法驗證**確認。
> `w-component-vue@2.4.65` 已修 WTree 層的過濾狀態管理，但 **init 空樹仍 ~15-20%**；
> 實測定位到真正殘留根因在子元件 **WDynamicList**：`setRowsCore` 在鎖住時**靜默丟棄新 rows**。

---

## 1. 結論先講

| 版本／修法 | 真實空樹率（真實 8080、登入完成、0 環境跳過） |
|---|---|
| 舊版 | ~21-33%（3/14、2/6） |
| 2.4.65（WTree 層修法） | 3/20（15%）— **仍失敗** |
| 2.4.65 + caller 端延後 filterByFun（等 `useItems>0`） | 4/20（20%）— **擋不住** |
| **2.4.65 + WDynamicList 根因修法** | **0/20 ✅** |

→ 空樹的根因**不在 WTree、也不在 Gis2dMap caller 端**，而在 **WDynamicList 的 rows 重建被鎖靜默丟棄**。

---

## 2. 根因：`setRowsCore` 在 `lockFromProcess` 時放棄重建、且 `setRows` 忽略其失敗

WTree 的節點實際由子元件 **WDynamicList(`$refs.wdl`)** 承載：
`:data` → `WTree.setData` → `wdl.setRows(rows)` → `wdl.setRowsCore(rows)`（建內部 items）→ `refreshCore` → `useItems`（渲染）。

### 2.1 過濾與資料重建共用鎖 `lockFromProcess`，方向錯誤
- **過濾** `processItems`（由 `filterByFun`/`filterByKeywords` → WTree.`filterItems` → `wdl.processItems` 觸發）執行期間持鎖：
  `vo.lockFromProcess = true`（[WDynamicList.vue:913](node_modules/w-component-vue/src/components/WDynamicList.vue#L913)），於 `finally` 才解（[:1001-1006](node_modules/w-component-vue/src/components/WDynamicList.vue#L1001)）；中間 `await refreshCore`（[:986](node_modules/w-component-vue/src/components/WDynamicList.vue#L986)，含 `await delay(20)`）→ **持鎖約 20ms+ 的視窗**。
- **資料重建** `setRowsCore` 在鎖住時**直接放棄**：
  ```js
  // WDynamicList.vue:284
  setRowsCore: function(rows) {
      if (vo.lockFromProcess) {           // :290
          let msg = 'disabling call when lockFromProcess'
          return msg                       // :293  ← 放棄重建, 新 rows 不寫入 gm.set
      }
      ...
      gm.set(vo.mmkey, items)              // :340  ← 正常時才會建好 items
  }
  ```

### 2.2 `setRows` 忽略 `setRowsCore` 的失敗 → 新 rows 靜默遺失
```js
// WDynamicList.vue:347
setRows: async function(rows) {
    async function core() {
        vo.lockFromSetRows = true          // :355  (另一個鎖, 與 lockFromProcess 無關)
        vo.setRowsCore(rows)               // :362  ← 回傳 'disabling...' 被【完全忽略】
        await vo.refreshCore('setRows')    // :365  ← 在【舊/空 items】上 refresh
    }
    await core().catch(...).finally(() => { vo.lockFromSetRows = false })  // :370-382
}
```
- `setRowsCore` 被鎖擋下時回傳字串 `'disabling call when lockFromProcess'`（**不是 throw**），但 `setRows` 第 [:362](node_modules/w-component-vue/src/components/WDynamicList.vue#L362) 行**不檢查回傳值**。
- 於是 `setRows` 繼續 `refreshCore`，但 `gm` 內 items **沒被更新**（仍是舊的/空的）→ `useItems` 建不出來 → **整棵樹空白**，且**無任何錯誤浮現**、**無重試**。

### 2.3 為何偶發（~15-20%）
GIS2D 初始化時，**過濾鏈**（`filterByFun` / `setData` 尾段 `filterItems` → `processItems`）與
**資料鏈**（`setData` → `setRows` → `setRowsCore`）並發（皆 fire-and-forget、無協調）。
~15-20% 機率，`processItems` 正好持 `lockFromProcess` 時 `setRowsCore` 執行 → 撞上 [:290](node_modules/w-component-vue/src/components/WDynamicList.vue#L290) → rows 丟失。

### 2.4 鎖的本意 vs 副作用
`lockFromProcess` 的本意（[:179](node_modules/w-component-vue/src/components/WDynamicList.vue#L179)「上鎖，使能由外部強制變更內部數據 items 而不會重產 items」）是
「**過濾期間別讓 `setRowsCore` 重產 items 而洗掉過濾結果**」。
但副作用是：「**把合法的新資料 `setRows` 丟掉**」。
即鎖的方向只考慮「保護過濾不被重建洗掉」，卻沒考慮「新資料應優先於過期的過濾」。

> 補充：另有一個 `lockFromSetRows`（[:178,355,377](node_modules/w-component-vue/src/components/WDynamicList.vue#L178)），僅用於 loading 文字（[:36](node_modules/w-component-vue/src/components/WDynamicList.vue#L36)）與 `changeInfor` early-return（[:874](node_modules/w-component-vue/src/components/WDynamicList.vue#L874)），**不**參與 `setRowsCore` 的判斷（[:295-299](node_modules/w-component-vue/src/components/WDynamicList.vue#L295) 已註解），與本 bug 無關。

---

## 3. 建議修法（核心原則：`setRows` 的新資料**絕不可被靜默丟棄**）

### ★ 修法 1（最小、已實測 0/20）：`setRows` 等 `lockFromProcess` 釋放再 `setRowsCore`
```js
// WDynamicList.vue setRows 的 core() 內, setRowsCore 之前
async function core() {
    vo.lockFromSetRows = true
    vo.disableLoadingText = size(rows) <= 10000

    // [修正] 等過濾鎖釋放, 避免 setRowsCore 被 :290 擋下而丟棄新 rows; 加逾時保險避免極端卡死
    for (let k = 0; k < 200 && vo.lockFromProcess; k++) {
        await delay(15)
    }

    vo.setRowsCore(rows)
    await vo.refreshCore('setRows')
}
```
- `delay` 已在本檔使用（`refreshCore` 內 `await delay(20)`），無新增依賴。
- 殘留極小窗：等到後、`setRowsCore` 前若有新 `processItems` 重取鎖，仍可能再被擋（機率極低；實測 0/20）。要 100% 穩健用修法 2。

### ★★ 修法 2（更穩健、推薦 production）：被鎖時**暫存**，解鎖後**重套**（不丟棄）
```js
// data 新增: pendingRows: null

// setRowsCore: 鎖住時不丟棄, 改暫存
setRowsCore: function(rows) {
    if (vo.lockFromProcess) {
        vo.pendingRows = rows          // [修正] 暫存待重套, 不丟棄
        return 'deferred'
    }
    vo.pendingRows = null
    ...原本建 items + gm.set...
}

// processItems 的 finally: 解鎖後若有待套 rows, 補做一次
.finally(() => {
    vo.lockFromProcess = false
    if (vo.pendingRows !== null && vo.pendingRows !== undefined) {  // [修正]
        let rows = vo.pendingRows
        vo.pendingRows = null
        vo.setRows(rows)               // 重新建 rows + refresh + (WTree 會重放當前過濾)
    }
})
```
- 完全消除競態（無論鎖何時被取，被擋的 rows 必在解鎖後補上）。

### 修法 3（架構面，最根本）：重新檢視鎖語意
`setRows`（新資料）在語意上應**取代**進行中的 `processItems`（過濾本就套在舊資料上、已過期），
而非被它擋下。可考慮：`setRows` 進來時**取消/讓位**目前的 `processItems`，重建後再由上層（WTree）重放當前過濾。

---

## 4. 與 WTree（2.4.65）的關係 ── 修 WDynamicList 後還需動 WTree 嗎？

**結論：要解「空樹」bug，只需修 WDynamicList；WTree 不必再動。** 兩者是**不同關注點**：

| 層級 | 職責 | 對應的 bug | 處置 |
|---|---|---|---|
| **WDynamicList** | rows/items 生命週期（從 data 建、渲染） | **空樹**（rows 被鎖丟棄） | **本文件修法（必修）** |
| **WTree（2.4.65）** | 過濾**狀態**管理（filterMode/filterFun）+ 重建後**重放**過濾 | **查詢態過濾在 :data 重建後被洗掉** | 2.4.65 已修，**保留即可** |

- **空樹的根因純在 WDynamicList**：只要 rows 不被丟、能正常建好，樹就不會空（init 無查詢時過濾＝全顯示）。所以**修 WDynamicList 即足以消除空樹**（實測 0/20）。
- **2.4.65 的 WTree 改動（filterMode/filterFun/setData 重放/latest-wins）解的是另一件事**：讓「使用者有查詢條件時的過濾結果，在資料重建後仍存活」。這是正確且有價值的 SoC 改進，**應保留、不需回退**，但它**不是**空樹的解方（實測 2.4.65 仍 3/20）。
- 因此：**WDynamicList 修法（必做）＋ 保留 2.4.65 的 WTree 修法 ＝ 整條鏈一致**；Gis2dMap caller 端則**不需要**任何時序 hack（實測 caller 端延後反而擋不住，4/20）。

---

## 5. 驗證方式
1. 套用修法 1 或 2 後，重編譯，於真實環境重複「進出 GIS2D + 開詮釋資料面板」≥ 20 次，確認**空樹率 = 0**。
2. 可用 `tmp/verify-2465.mjs`（原狀對照）與 `tmp/verify-2465-rootfix.mjs`（修法對照）重跑比對。
3. 不退化檢查：綜合查詢（關鍵字/分類/計畫/數值）過濾正確、清查詢恢復全顯、樹勾選→地圖圖徵、popup 正常。

---

## 6. 附錄：關鍵 file:line（皆 `node_modules/w-component-vue/src/components/WDynamicList.vue`）

| 項目 | 行 |
|---|---|
| `setRowsCore` 鎖住放棄重建（**bug 核心**） | 290-294 |
| `setRowsCore` 正常建 items + `gm.set` | 326-340 |
| `setRows` 忽略 `setRowsCore` 回傳值 | 362 |
| `processItems` 設 `lockFromProcess=true` | 913 |
| `processItems` 未 setRows 時 early-return（`!isarr(items)`） | 920-922 |
| `processItems` finally 解鎖 | 1001-1006 |
| `lockFromProcess` 預設與用途註解 | 179 |
