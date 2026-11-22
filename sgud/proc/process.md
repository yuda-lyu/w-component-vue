# 處理要點

本檔記本套件特有之處理流程與使用者裁示.規則帳本(藍圖)見 `sgud/rule/rulebook.md`,實測經驗見 `sgud/exp/experience.md`,現況見 `sgud/state/state.md`.

> 2026-11-22 自 Claude Code 自動記憶提取(記憶依資料夾路徑存放,套件層級改變後失聯;原記於 2026-09-26～2026-10-01).

## 1. CI 工作流程檔 `.github/workflows/ci-test.yml` 由外部統籌管理,不得自改(使用者明示,2026-09-26)

- **裁示**:`.github/workflows/ci-test.yml` 由外部統籌管理,不要自己改;e2e 所需之瀏覽器等一律由專責之測試工具套件統一負責(它存在之原因),**不可要求全部套件加安裝指令**,也不可改用機器上之 Google Chrome——像素比對之套件須用與本機相同、Playwright 指定版本之瀏覽器.
- **why**:套件區並非全部都有 e2e,範本若無條件安裝瀏覽器會拖慢其他套件;CI 已會安裝 devDependencies.
- **現況**(與記憶不同處,以此為準):本套件測試用瀏覽器之啟動已於 2026-11-13 改為一律經 w-playwright(`autoInstall: true`,缺受管瀏覽器時首次啟動下載一次;`package.json` 不宣告 `playwright`／`playwright-core`),規則見 `sgud/rule/rulebook.md` 四(R-PW-ONLY、R-PW-AUTO、R-PW-WIRING、R-PW-HEADLESS);原由 w-package-tools-e2e 之 `launchChromium` 負責,該依賴待主控裁示移除(規則帳本 4.4).CI 上 Linux 缺系統相依時之行為尚未實跑驗證(規則帳本 4.4).
- 本裁示跨套件(各自有套件之 `ci-test.yml` 皆同),主控酌情納入跨套件規格.
