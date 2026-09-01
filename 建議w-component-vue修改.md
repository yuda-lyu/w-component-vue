# 建議 w-component-vue 修改：WDrawer 落定態 transform / transition 限縮 + 同款幾何盤查

- 日期：2026-09-01
- 依據版本：w-component-vue **2.5.6**（三專案 sso / perm / api 之 `node_modules` 皆為此版）
- 來源：w-web-perm ADR-020（側欄 launch 級 1px 剛性位移）調查之次要建議；主根因（`WPanelScrollyCore` 之 `+1px` 懸出）已於 **2.5.4** 修正，本文件只處理剩下的兩條防禦性硬化與同族幾何盤查。
- 性質：**防禦性硬化，非已觀察缺陷**。目前三專案 e2e 全綠、無對應失敗案例；是否採納由套件開發者裁示。

## 1. 症狀與背景

| 項目 | 內容 | 證據等級 |
|---|---|---|
| 原症狀 | perm e2e 全量重產後每輪 130+ 張中 1~3 張（全在 eng）左側選單整體水平位移 1px；`capture(x,y)==baseline(x+1,y)` 零失配 → 同一份已光柵化 bitmap 被合成到偏左 1px；同 launch 連拍位元級穩定、跨 launch 二態 | 已驗證（perm testPending 四組現場、ADR-020） |
| 主根因 | `WPanelScrollyCore.vue:29` 捲動殼寬 `calc(100% + (nativeBarWidth+1)px)`，headless 下 overlay 捲軸 `nativeBarWidth=0`，懸出恰 1px 被外層 `overflow-x:hidden` 裁切，軟體合成器對懸出層之對齊二選一（左緣貼齊＝正常 / 右緣貼齊＝整層左移 1px），於 launch 初始化決定一次；實測 `+1` 時捲動殼 200 / 裁切殼 199，改 `+0` 後 199/199 且逐像素 0 差異 | 已驗證（介入性證明） |
| 主根因修正 | 2.5.3 為 `${nativeBarWidth+1}px`，**2.5.4（2026-08-26）起改 `${nativeBarWidth}px`**（npm tarball 逐版比對）；perm 升 2.5.6 後全量重產 324 張全綠 | 已驗證 |
| 調查期間之假說 | WPanelScrolly 捲動內容 raster layer 位於帶常駐 `transform:translateX(0%)` + `transition:all` 之 WDrawer layer tree 中，以 launch 級決定的水平 raster origin 被合成 | **高信心假說，未被主根因修正所排除也未被單獨證實**（未做逐旗標 / 逐層消融） |

結論：主根因已修；WDrawer 的常駐 transformed ancestor 層仍存在，是同類「合成層對齊」問題再現時的候選觸發面，值得在無壓力時硬化。

## 2. 現況（2.5.6 原始碼）

### 2.1 WDrawer 落定態仍為 `translateX(0%)`

- `src/components/WDrawer.vue:70`：平移層 `:style="\`${useNoTransStyle} width:${useDrawerWidthTrans}px; height:100%; transform:translateX(${useDrawerTranslateX}%);\`"`
- `src/components/WDrawer.vue:432-437`：

```js
useDrawerTranslateX: function() {
    if (this.effAni4Translate) {
        return 0          // 展開落定態 → transform:translateX(0%)
    }
    let s0 = this.isAtLeft ? -100 : 100
    return s0
},
```

`translateX(0%)` 視覺上無位移，但仍是「帶 transform 的元素」→ 瀏覽器保留獨立合成層，其所有子孫（WListVertical / WPanelScrolly / 選單項）在此層下光柵化與合成。

### 2.2 `.ts { transition:all }`

- `src/components/WDrawer.vue:896-898`：`.ts { transition:all 0.3s cubic-bezier(.25,.8,.5,1); }`
- 掛在平移層（`:70`）、內層（`:77`）、寬度層（`:84`）、虛擬區（`:23`、`:41`）。
- 作者已知此問題並做過局部處理：`useNoTransStyle`（`:476-479`）於拖曳寬度時輸出 `transition:none;`，避免「bar 位置瞬間更新而抽屜邊緣慢動畫追趕」——證明 `all` 會把非預期屬性也帶進過場。
- 狀態機：`state` 於 `:651`（opening）/ `:685`（opened）/ `:702`（hiding）/ `:737`（hidden）切換；落定由 `v-domstable`（`:71-72`、`:749-754`）偵測子樹穩定後回呼。三專案 e2e 之 `waitDrawerReady` 讀根節點 `[state]` 等 `opened` / `hidden`。

## 3. 建議修法（兩條，可獨立採納）

### 3.1 展開落定後移除 transform（`translateX(0%)` → `none`）

目標：動畫期間照常用 `translateX` 平移；`state` 進入 `opened` 後把平移層 style 改為 `transform:none`（或不輸出 transform），釋放常駐合成層；下次收合前再切回 `translateX(0%)` 起點。

實作方向（示意，非最終碼）：

```js
useDrawerTransformStyle: function() {
    if (this.state === 'opened' && !this.dragging) {
        return ''                                   // 落定：不輸出 transform，回到普通 layout
    }
    return `transform:translateX(${this.useDrawerTranslateX}%);`
},
```

注意點：
- 由 `translateX(0%)` 切到 `none` 是無視覺差的切換，但若 `.ts` 之 `transition:all` 仍在，會觸發一次 transform 過場（`none` 與 `translateX(0%)` 之間插值）；故 3.1 需搭配 3.2，或切換瞬間暫時 `transition:none`（沿用 `useNoTransStyle` 機制）。
- 收合流程（`hiding`）開始前須先回到 `translateX(0%)` 再變 `-100%`，否則會從 `none` 直接跳到 `-100%` 沒有動畫；可在 `toggleValue` 進入 `hiding` 前先一 tick 設回 `0%`。
- `afloat` / `afloatByFix` 模式（`:393-426`）以 `position:absolute|fixed` 浮在內容上，落定後同樣可移除 transform；但 `fixed` 元素的 containing block 會因祖先 transform 而改變，移除 transform 反而讓 `fixed` 語意回到正常，需驗證浮動定位不跳動。

### 3.2 `transition:all` 限縮為實際需要的屬性

目標：`.ts` 只過場真正要動畫的屬性。依 `:23 / :41 / :70 / :77 / :84` 的用途：

| 元素 | 現在會過場的屬性（因 `all`） | 建議限縮 |
|---|---|---|
| 平移層 `:70` | width、transform、(shadow class 切換之 box-shadow) | `transition: transform 0.3s, width 0.3s` |
| 內層 `:77`、寬度層 `:84` | width | `transition: width 0.3s` |
| 虛擬區 `:23 / :41` | width、min-width | `transition: width 0.3s, min-width 0.3s` |
| `.bs` 陰影 | box-shadow | 若需淡入淡出，另給 `transition: box-shadow 0.3s` |

好處：①`padding`、`background`、`opacity` 等非預期屬性變動不再產生 0.3s 中間態；②`transitionend` / `domstable` 落定訊號只對應真正的動畫屬性，e2e settle 判定更可靠；③與 3.1 搭配時不會因 `none ↔ translateX(0%)` 切換觸發多餘過場。

`useNoTransStyle` 的拖曳期 `transition:none` 保留不變。

## 4. 同款幾何盤查（「加寬藏捲軸 / 負 margin 藏邊界 / +1px fudge」）

主根因的機制在 headless（overlay 捲軸、bar 寬 0）下會把「為藏原生捲軸而加寬」退化成純懸出；盤查 2.5.6 原始碼中同族寫法：

| 位置 | 寫法 | 判定 | 建議 |
|---|---|---|---|
| `WPanelScrollyCore.vue:29` | `calc(100% + ${nativeBarWidth}px)` | ✅ 2.5.4 已移除 `+1` | 無 |
| `WDialog.vue:26` | 屏蔽層內撐開層 `calc(100svw + ${nativeBarWidth+1}px)`；`:23` 註解「須用 nativeBarWidth+1 使 divShield 能出現水平捲軸，進而能更新 nativeBarWidth」 | **待驗證**：目的為量測捲軸寬（刻意製造 overflow），若該撐開層被 `overflow:hidden` 裁切且參與合成，headless 下（bar 寬 0）即為 1px 懸出，與主根因同型 | 用與 ADR-020 相同的量測法驗證：對開啟中的 WDialog 量撐開層 `scrollWidth/clientWidth` 與裁切祖先寬度差；若懸出非零且該層有子孫內容參與合成 → 改為量測專用之不可見探針（`visibility:hidden; pointer-events:none` 的獨立元素）而非撐開實際內容層 |
| `WDialog.vue:13` | `calc(100svw + ${nativeBarWidth}px)` | 與 WPanelScrollyCore 修正後同型（無 `+1`） | 無 |
| `WButtonChip.vue:49` | `margin-left:-6px; margin-right:${hasText?5:-6}px` | 負 margin 為圖示與文字之視覺對齊，非藏邊界；元素本身不是裁切容器 | 無（記錄即可） |
| `.ts { transition:all }` 使用者 | 28 個組件（WButtonChip、WButtonCircle、WCheckbox、WDialog、WDrawer、WListItem、WTree、WSwitch…） | 非幾何問題，但同屬「過場範圍過寬」；優先處理有平移 / 寬度動畫且承載大量子樹者（WDrawer、WDialog、WTree、WListExpandItem） | 分批限縮，先 WDrawer（本文件 3.2） |

## 5. 影響面

- **三專案 e2e baseline**：3.1 落定態視覺相同、3.2 只改過場範圍，理論上落定截圖不變；但合成層拆除可能改變子樹 AA 光柵化路徑（尤其 eng 拉丁字），須以「升版前 baseline vs 升版後帶旗標 capture」逐位元交叉比對確認差異為 0；若非 0 則依技能重產政策取得授權後全量重產（sso 368 / perm 324 / api 82 張）。
- **WDrawer 互動**：拖曳寬度（`dragDrawerWidth`）、afloat / afloatByFix、`domstable` 落定偵測、`state` 時序皆需回歸。
- **API 相容**：不新增 prop、不改 event；純內部 style 策略變更，引用方無需改碼。

## 6. 驗證清單（上游發版前）

1. WDrawer 單元 / demo：開合各 20 次，`state` 序列仍為 hidden→opening→opened / opened→hiding→hidden，`domstable` 回呼正常；拖曳寬度無追趕位移；afloat 兩模式浮動位置不跳。
2. DevTools Layers：展開落定後 WDrawer 平移層不再是獨立合成層（3.1 生效證明）。
3. 三專案 e2e：升版後不重產，先跑 `e2e-init` + 含側欄之任一 flow（perm `e2e-grups`、sso `e2e-login`、api `e2e-display`），fail-dump 逐位元比對應 0 差異；有差異再走重產授權。
4. 認證掃描：同 flow 共通區（側欄）hash 分群兩語系對稱、無 LCD 彩邊（技能 references/pixel-mismatch-diagnosis.md §5）。
5. WDialog 撐開層懸出量測（第 4 節）結果附回，決定是否納入下一版。

## 7. 過渡方案（若暫不改上游）

- 三專案維持現行防護：六旗標確定性渲染組 + per-case fresh browser + sharp 疊圖紅框 + `waitDrawerReady` 讀 `[state]`；perm 已升 2.5.6 全綠，無需額外守門。
- 本文件之判定於各專案 `CLAUDE_settings.md`「已知缺口 / 待辦」列為「待上游」，不在專案端改 `node_modules`。
