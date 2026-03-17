# WColorSelect 快速點擊導致選色彈窗無法關閉 — 問題分析與修改計畫

## 一、元件架構說明

```
WColorSelect.vue
  └─ WPopup.vue
       └─ WTooltip.vue
            ├─ divTrigger (@click → evShow)   ← 外層觸發區
            │    └─ <slot:trigger>
            │         └─ 顏色區塊 div (@click → clickColor) ← 內層點擊
            └─ Teleport → body (divContent)
                 └─ <slot:content> (選色彈窗)
                      └─ Confirm 按鈕 (@click → clickColor)
```

`buildPopper.mjs` 是核心邏輯，管理彈窗的顯示/隱藏與「點擊外側關閉」機制。

---

## 二、關鍵機制說明

### 2-1. `kpRespList` — 彈窗活躍清單

`WTooltip.vue` 模組層級（所有實例共用）的靜態陣列：

```javascript
let kpRespList = { tooltip: [], popup: [] }
```

- `addTriggerMode(mode, mmkey)`：彈窗顯示時將 mmkey 推入清單末端
- `checkTriggerEffMode(mode, mmkey)`：判斷 `last(list) === mmkey`，只有「最後一個顯示的彈窗」才能回應點擊外側關閉事件
- `removeTriggerMode(mode, mmkey)`：彈窗隱藏時用 `pull` 移除清單中所有同值 mmkey

### 2-2. `hidePopper` 的非同步延遲移除

```javascript
let hidePopper = (from) => {
    if (_vo.popperInstance) {
        _vo.popperInstance.destroy()
        _vo.popperInstance = null
    }
    // ★ 非同步 20ms 後才從 kpRespList 移除
    setTimeout(() => {
        removeTrigger()
    }, 20)
}
```

### 2-3. 觸發區雙重點擊事件

點擊「顏色區塊」時，事件冒泡順序為：

1. **內層** `@click="clickColor"` → 呼叫 `vo.show = false`（同步將 `valueTrans` 改為 false）
2. **外層** WTooltip `divTrigger @click="evShow"` → 此時 `valueTrans` 已是 false，`evShow` 的 guard check 失效 → 重新開啟彈窗

---

## 三、Bug 根源分析

### Bug 1：快速連點同一組件 → 彈窗卡死無法關閉

**事件時序（初始狀態：彈窗已開啟，kpRespList=[mmkeyA]）：**

| 時間點 | 發生事件 |
|--------|---------|
| T=0 | 快速第二次點擊觸發區 |
| T=0, step1 | `clickColor()` 執行 → `vo.show=false` → `valueTrans=false`（同步）→ `displayPopper` 排入 `$nextTick #1` |
| T=0, step2 | 事件冒泡至 WTooltip `evShow` → 此時 `valueTrans=false` → guard 不攔截 → `triggerEvent(true)` → 排入 `$nextTick #2`（emit input=true） |
| T=nextTick #1 | `displayPopper` 執行：`b = valueTrans=false` → `hidePopper()` → `_vo.popperShow=false` → **`setTimeout(removeTrigger, 20ms)` 排入** |
| T=nextTick #2 | emit `input=true` → `show=true` → WTooltip `changeValue` → `updateValue(true)` → `valueTrans=true` → `displayPopper` 排入 `$nextTick #3` |
| T=nextTick #3 | `displayPopper` 執行：`b = valueTrans=true` → `showPopper()` → **`addTrigger()` 再次把 mmkeyA 推入清單** → kpRespList=[mmkeyA, mmkeyA] |
| T=+20ms | **setTimeout 到期** → `removeTrigger()` → `pull(kpRespList, mmkeyA)` → **移除所有 mmkeyA** → **kpRespList=[]** |

**結果：** 彈窗視覺上是開啟的，但 `kpRespList=[]`。
點擊外側時：`checkTriggerEffMode` → `last([]) === mmkeyA` → `undefined === mmkeyA` → **false** → 直接 return，evHide 從不觸發。
**彈窗永遠無法關閉。**

---

### Bug 2：快速點A後點擊B → 多個彈窗同時卡住

1. 快速連點 A → A 彈窗顯示但 kpRespList=[]（同 Bug 1 後果）
2. 點擊 B 的觸發區 → B 正常開啟 → kpRespList=[mmkeyB]
3. A 的 `windowMouseup` listener → `checkTriggerEff_A()` → `last([mmkeyB]) === mmkeyA` → false → 無法關閉 A
4. 點擊外側 → B 正常關閉，但 A 永遠留在頁面

**同時多個彈窗殘留。**

---

## 四、修改方案

### 方案主軸：修復 `hidePopper` 的 setTimeout 競態條件

**核心問題：** `hidePopper` 的 `removeTrigger` 是 20ms 後異步執行，若此期間 `showPopper` 被呼叫並把 mmkey 再次加入清單，20ms 到期後的 `removeTrigger` 會把「合法存在」的 mmkey 也一起移除。

**修復方法：** 在 `_vo` 中紀錄 setTimeout 的 handle，在 `showPopper` 被呼叫時清除尚未執行的 `removeTrigger`。

---

### 修改 1：`src/js/buildPopper.mjs`

**變更位置 1** — 在 `_vo` 初始化中新增 `removeTriggerTimer`：

```javascript
// 現有程式碼
let _vo = {
    mouseClientX: 0,
    mouseClientY: 0,
    cursorTriggerInner: false,
    clickContentInner: false,
    popperShow: false,
    popperInstance: null,
}

// 修改後：新增 removeTriggerTimer
let _vo = {
    mouseClientX: 0,
    mouseClientY: 0,
    cursorTriggerInner: false,
    clickContentInner: false,
    popperShow: false,
    popperInstance: null,
    removeTriggerTimer: null,  // ★ 新增
}
```

**變更位置 2** — `showPopper` 函數內，在 `addTrigger()` 之前取消待執行的 removeTrigger：

```javascript
let showPopper = (from) => {
    let divTrigger = funGetDivTrigger()
    if (!isEle(divTrigger)) { return }

    vo.$nextTick(() => {
        vo.triggerWidth = divTrigger.offsetWidth
    })

    let divContent = funGetDivContent()
    if (!isEle(divContent)) { return }

    // ★ 新增：若有待執行的 removeTrigger，先取消它
    if (_vo.removeTriggerTimer !== null) {
        clearTimeout(_vo.removeTriggerTimer)
        _vo.removeTriggerTimer = null
    }

    // addTrigger（原有）
    addTrigger()

    // ... 後續 createPopper 等邏輯不變
}
```

**變更位置 3** — `hidePopper` 函數內，儲存 setTimeout handle：

```javascript
let hidePopper = (from) => {
    if (_vo.popperInstance) {
        _vo.popperInstance.destroy()
        _vo.popperInstance = null
    }

    // ★ 修改：紀錄 timer handle
    _vo.removeTriggerTimer = setTimeout(() => {
        _vo.removeTriggerTimer = null
        removeTrigger()
    }, 20)
}
```

---

### 修改 2：`src/components/WColorSelect.vue`（選擇性但建議）

**問題：** 觸發區的 `@click="clickColor"` 會在彈窗已開啟時觸發 close，事件冒泡後 `evShow` 再次 open，造成每次點擊觸發區都執行「先關後開」的多餘序列，是 Bug 的觸發來源。

**修改方法：** 將觸發區的 `@click="clickColor"` 移除或改為 `stopPropagation` 後不執行動作（讓 WTooltip 的 `evShow` 單獨負責開啟邏輯，Confirm 按鈕負責確認並關閉）。

```html
<!-- 現有 -->
<div
    style="display:flex; align-items:center; cursor:pointer; outline:none;"
    @click="clickColor"
>

<!-- 修改後：觸發區不再呼叫 clickColor，改由 WTooltip 的 evShow 控制開關 -->
<div
    style="display:flex; align-items:center; cursor:pointer; outline:none;"
>
```

> **說明：** Confirm 按鈕已有 `@click="clickColor"` 負責「確認顏色並關閉」，觸發區只需要 WTooltip 的 `evShow` 負責「開啟彈窗」即可，不需要重複綁定 `clickColor`。

---

## 五、修改後預期行為

| 情境 | 修改前 | 修改後 |
|------|--------|--------|
| 正常點擊觸發區 | 開啟彈窗 ✓ | 開啟彈窗 ✓ |
| 點擊外側 | 關閉彈窗 ✓ | 關閉彈窗 ✓ |
| 快速連點觸發區 | 彈窗卡死無法關閉 ✗ | kpRespList 正確維護，可正常關閉 ✓ |
| 快速點A後點B | 多個彈窗殘留 ✗ | 只剩最後一個，其餘正常關閉 ✓ |
| Confirm 按鈕 | 確認並關閉 ✓ | 確認並關閉 ✓ |

---

## 六、修改影響範圍

- `src/js/buildPopper.mjs`：影響所有使用 WTooltip/WPopup 的組件，但變更為純修補競態條件，不改變正常流程
- `src/components/WColorSelect.vue`：僅影響 WColorSelect 觸發區點擊行為，移除冗餘的 clickColor 呼叫
