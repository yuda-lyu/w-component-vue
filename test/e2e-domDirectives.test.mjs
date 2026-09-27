import assert from 'assert'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'


//e2e-domDirectives: 偵測類指令(v-domresize、v-domvisible、v-dommutation、v-domstable)與v-domdragdrop之真瀏覽器測試
//  測試頁(test/tools/e2e-entry-directives.mjs)以真src打包; 每個案例一個全新瀏覽器, 掛載情境(setup)後以滑鼠點按鈕、滾輪、拖曳或改變視窗尺寸操作
//  斷言讀頁面#log之事件紀錄(處理函式收到之事件、Vue錯誤處理收到之錯誤、未攔截錯誤、未處理之拒絕), 以及瀏覽器主控台之警告
//  「不觸發」之斷言須經一段靜止時間: 尺寸事件於ResizeObserver回報後1ms內發出, 顯隱事件於下一幀, 穩定事件每輪約150ms, 故取600ms


let NAME = 'e2e-domDirectives'


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        bundle = await bundleEntry(NAME, 'test/tools/e2e-entry-directives.mjs')
    })
    after(function() {
        removeBundle(NAME)
    })

    let browser = null
    let page = null
    let logs = null
    beforeEach(async function() {
        this.timeout(600000) //首次啟動時可能下載瀏覽器
        browser = await launchBrowser()
    })
    afterEach(async function() {
        if (browser) {
            await browser.close()
        }
        browser = null
        page = null
        logs = null
    })

    //mount, 開頁並掛載情境(setup); opt.setup於掛載前在頁面內執行(例如移除IntersectionObserver)
    let mount = async (name, opt = {}) => {
        let r = await openPage(browser, bundle)
        page = r.page
        logs = r.logs
        if (opt.setup) {
            await page.evaluate(opt.setup)
        }
        await page.evaluate((n) => window.mountCase(n), name)
    }

    let readLog = async () => {
        let t = await page.locator('#log').textContent()
        return t ? t.split('\n') : []
    }

    //waitLog, 等到紀錄符合條件, 逾時回傳最後之紀錄供斷言顯示差異
    let waitLog = async (pred, ms = 3000) => {
        let t0 = Date.now()
        let lines = await readLog()
        while (!pred(lines) && Date.now() - t0 < ms) {
            await page.waitForTimeout(50)
            lines = await readLog()
        }
        return lines
    }

    //quiet, 靜止一段時間後讀紀錄, 用於「不觸發」之斷言
    let quiet = async (ms = 600) => {
        await page.waitForTimeout(ms)
        return readLog()
    }

    let click = async (name) => {
        await page.getByRole('button', { name, exact: true }).click()
    }

    let has = (s) => (lines) => lines.includes(s)

    let count = (s) => (lines) => lines.filter((x) => x === s).length

    let warnsOf = (prefix) => logs.warn.filter((m) => m.startsWith(prefix))

    describe('v-domresize 發事件', function() {

        it('元素上之處理函式收到尺寸事件', async function() {
            await mount('resize-basic')
            await waitLog(has('h:dom:0>100'))
            await click('改寬')
            let lines = await waitLog(has('h:dom:100>150'))
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100', 'h:dom:100>150'])
        })

        it('處理函式同步拋錯交Vue錯誤處理, 之後之事件照常送達', async function() {
            await mount('resize-throw')
            await waitLog(has('errH:v-on handler:boom'))
            await click('改寬')
            let lines = await waitLog(has('h:dom:100>150'))
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100', 'errH:v-on handler:boom', 'h:dom:100>150'])
        })

        it('async處理函式之拒絕交Vue錯誤處理, 不成為未處理之拒絕', async function() {
            await mount('resize-async')
            await waitLog(has('errH:v-on handler (Promise/async):aboom'))
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100', 'errH:v-on handler (Promise/async):aboom'])
        })

        it('@事件與v-on物件並用時依序呼叫兩個處理函式', async function() {
            await mount('resize-array')
            await waitLog(has('b:dom:0>100'))
            await click('改寬')
            let lines = await waitLog(has('b:dom:100>150'))
            assert.strict.deepStrictEqual(lines, ['a:dom:0>100', 'b:dom:0>100', 'a:dom:100>150', 'b:dom:100>150'])
        })

        it('元件標籤之自訂事件於另有其他.native監聽時仍被呼叫', async function() {
            await mount('resize-component-other-native')
            await waitLog(has('h:dom:0>100'))
            await click('改寬')
            let lines = await waitLog(has('h:dom:100>150'))
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100', 'h:dom:100>150'])
        })

        it('元件標籤同時有同名自訂事件與.native時只呼叫自訂事件', async function() {
            await mount('resize-component-same-native')
            await waitLog(has('h:dom:0>100'))
            await click('改寬')
            await waitLog(has('h:dom:100>150'))
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100', 'h:dom:100>150'])
        })

        it('元件標籤只有.native時呼叫之', async function() {
            await mount('resize-component-native-only')
            await waitLog(has('n:dom:0>100'))
            await click('改寬')
            let lines = await waitLog(has('n:dom:100>150'))
            assert.strict.deepStrictEqual(lines, ['n:dom:0>100', 'n:dom:100>150'])
        })

        it('綁定後才加入之監聽會被呼叫, 移除後不再呼叫', async function() {
            await mount('resize-listener-later')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            await click('加監聽')
            await click('改寬')
            await waitLog(has('h:dom:100>150'))
            await click('移除監聽')
            await click('改回')
            lines = await quiet()
            assert.strict.deepStrictEqual(lines, ['h:dom:100>150'])
        })

        it('元件標籤上綁定後才加入之監聽會被呼叫', async function() {
            await mount('resize-component-listener-later')
            await quiet()
            await click('加監聽')
            await click('改寬')
            let lines = await waitLog(has('h:dom:100>150'))
            assert.strict.deepStrictEqual(lines, ['h:dom:100>150'])
        })

        it('綁定後監聽由一個改為兩個時兩者皆呼叫', async function() {
            await mount('resize-single-to-array')
            await waitLog(has('a:dom:0>100'))
            await click('改為兩個')
            await click('改寬')
            let lines = await waitLog(has('b:dom:100>150'))
            assert.strict.deepStrictEqual(lines, ['a:dom:0>100', 'a:dom:100>150', 'b:dom:100>150'])
        })

        it('錯誤之監聽寫法於綁定時各警告一次, 正確寫法不警告', async function() {
            await mount('resize-warnings')
            await quiet(300)
            let ws = warnsOf('[v-domresize]')
            assert.strict.deepStrictEqual(ws, [
                '[v-domresize] domresize="h"為靜態屬性, 應為@domresize',
                '[v-domresize] @domresize不支援.once、.capture、.passive修飾字, 處理函式不會被呼叫',
                '[v-domresize] 事件名須為@domresize, 目前為@domResize, 處理函式不會被呼叫',
                '[v-domresize] 元素上之@domresize.native無效, 應為@domresize',
            ])
        })

    })

    describe('v-domresize 指令值', function() {

        it('停用時不觸發, 啟用時建立偵測並觸發, 再停用後不觸發', async function() {
            await mount('resize-disabled')
            await click('改寬')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            await click('啟用')
            await waitLog(has('h:dom:0>150'))
            await click('停用')
            await click('改回')
            lines = await quiet()
            assert.strict.deepStrictEqual(lines, ['h:dom:0>150'])
        })

        it('event為resize時只轉發元素尺寸事件, 不轉發視窗事件', async function() {
            await mount('resize-event-option')
            await waitLog((ls) => ls.includes('A:dom:0>100') && ls.includes('B:dom:0>100'))
            await page.setViewportSize({ width: 700, height: 500 })
            await waitLog(has('A:window:100>100'))
            await click('改寬B')
            await waitLog(has('B:dom:100>150'))
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines.filter((s) => s.startsWith('B:')), ['B:dom:0>100', 'B:dom:100>150'])
            assert.ok(lines.filter((s) => s.startsWith('A:window')).length >= 1, JSON.stringify(lines))
        })

        it('getBase之基準因尺寸以外之原因改變時, 宿主重繪不自動重新比較, 改變refreshKey才重新比較而觸發', async function() {
            await mount('resize-getbase')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, []) //掛載時使用端尺寸已與元素一致, 不觸發
            await click('只改基準')
            lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            await click('改基準並要求比較')
            await waitLog(has('h:dom:0>100'))
            lines = await quiet()
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100'])
        })

        it('多個元素共用比較基準(誤用)時不因宿主重繪而互相觸發', async function() {
            await mount('resize-shared-base')
            await waitLog(has('B:dom:0>150'))
            await click('重繪')
            await click('重繪')
            let lines = await quiet(1000)
            assert.strict.deepStrictEqual(lines, ['B:dom:0>150'])
        })

        it('模板物件字面值每次重繪為新物件, 內容相同者不重建、不觸發; 未知鍵不採用並警告一次', async function() {
            await mount('resize-literal-rerender')
            await waitLog((ls) => ls.includes('a:dom:0>100') && ls.includes('b:dom:0>100'))
            await click('重繪20次')
            await waitLog(has('rerendered'), 5000)
            let lines = await quiet()
            assert.strict.deepStrictEqual([...lines].sort(), ['a:dom:0>100', 'b:dom:0>100', 'rerendered'])
            let ws = warnsOf('[v-domresize]')
            assert.strict.deepStrictEqual(ws.length, 1)
            assert.ok(ws[0].includes('設定鍵extra不適用而不採用'), ws[0])
        })

        it('設定改變時重建, 重建之首次量測觸發(sold為0)', async function() {
            await mount('resize-config-change')
            await waitLog(has('h:dom:0>100'))
            await click('改容許誤差')
            await waitLog((ls) => count('h:dom:0>100')(ls) === 2)
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100', 'h:dom:0>100'])
        })

        it('解除綁定後視窗改變不觸發', async function() {
            await mount('resize-unbind')
            await waitLog(has('h:dom:0>100'))
            await click('移除')
            await page.setViewportSize({ width: 700, height: 500 })
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, ['h:dom:0>100'])
        })

        for (let [cs, label] of [['resize-double-binding-shared', '共用指令實例'], ['resize-double-binding-separate', '各自之指令實例']]) {
            it(`元件標籤與其根元素皆有v-domresize(${label})時各自觸發, 解除後皆不再觸發`, async function() {
                await mount(cs)
                await waitLog((ls) => ls.includes('ph:dom:0>100') && ls.includes('ch:dom:0>100'))
                await click('改寬')
                await waitLog((ls) => ls.includes('ph:dom:100>150') && ls.includes('ch:dom:100>150'))
                await click('移除')
                await page.setViewportSize({ width: 700, height: 500 })
                let lines = await quiet()
                assert.strict.deepStrictEqual([...lines].sort(), ['ch:dom:0>100', 'ch:dom:100>150', 'ph:dom:0>100', 'ph:dom:100>150'])
            })
        }

        it('無效之指令值與未知設定鍵警告, 並以預設設定照常觸發', async function() {
            await mount('resize-invalid-value')
            await waitLog((ls) => count('h:dom:0>100')(ls) === 2)
            await click('改寬')
            let lines = await waitLog((ls) => count('h:dom:100>150')(ls) === 2)
            assert.strict.deepStrictEqual(lines.length, 4)
            let ws = warnsOf('[v-domresize]')
            assert.strict.deepStrictEqual(ws.length, 2)
            assert.ok(ws[0].includes('指令值須為true、false、null或物件, 目前為string'), ws[0])
            assert.ok(ws[1].includes('設定鍵tolerance不適用而不採用'), ws[1])
        })

    })

    describe('v-domvisible', function() {

        it('初始可見觸發true, 捲出觸發false, 捲回觸發true', async function() {
            await mount('visible-scroll')
            await waitLog(has('v:true'))
            let box = await page.locator('.box').boundingBox()
            await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
            await page.mouse.wheel(0, 400)
            await waitLog(has('v:false'))
            await page.mouse.wheel(0, -400)
            let lines = await waitLog((ls) => ls.length === 3)
            assert.strict.deepStrictEqual(lines, ['v:true', 'v:false', 'v:true'])
        })

        it('祖先display:none時觸發false, 再顯示觸發true', async function() {
            await mount('visible-display')
            await waitLog(has('v:true'))
            await click('隱藏')
            await waitLog(has('v:false'))
            await click('顯示')
            let lines = await waitLog((ls) => ls.length === 3)
            assert.strict.deepStrictEqual(lines, ['v:true', 'v:false', 'v:true'])
        })

        it('同一元素移出頁面觸發false, 插回觸發true', async function() {
            await mount('visible-move')
            await waitLog(has('v:true'))
            await click('移出')
            await waitLog(has('v:false'))
            await click('插回')
            let lines = await waitLog((ls) => ls.length === 3)
            assert.strict.deepStrictEqual(lines, ['v:true', 'v:false', 'v:true'])
        })

        it('元素移除(解除綁定)後不再觸發, 重複10次', async function() {
            await mount('visible-remove-race')
            for (let i = 1; i <= 10; i++) {
                await click('加入')
                await waitLog((ls) => count('v:true')(ls) === i)
                await click('移除')
            }
            let lines = await quiet()
            let expected = []
            for (let i = 0; i < 10; i++) {
                expected.push('v:true', 'removed')
            }
            assert.strict.deepStrictEqual(lines, expected)
        })

        it('無IntersectionObserver之環境不觸發、不拋錯', async function() {
            await mount('visible-no-io', {
                setup: () => {
                    delete window.IntersectionObserver
                    delete window.IntersectionObserverEntry
                },
            })
            await click('隱藏')
            await click('顯示')
            let lines = await quiet()
            assert.strict.deepStrictEqual([lines, logs.pageerror], [[], []])
        })

        it('停用時不觸發, 啟用時觸發', async function() {
            await mount('visible-disabled')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            await click('啟用')
            lines = await waitLog(has('v:true'))
            assert.strict.deepStrictEqual(lines, ['v:true'])
        })

        it('處理函式拋錯交Vue錯誤處理(原本被吞掉)', async function() {
            await mount('visible-throw')
            let lines = await waitLog(has('errH:v-on handler:vboom'))
            assert.strict.deepStrictEqual(lines, ['v:true', 'errH:v-on handler:vboom'])
        })

    })

    describe('v-dommutation', function() {

        it('預設設定下子節點與屬性變更皆觸發', async function() {
            await mount('mutation-default')
            await click('加子節點')
            await waitLog(has('m:childList'))
            await click('改屬性')
            let lines = await waitLog(has('m:attributes'))
            assert.strict.deepStrictEqual(lines, ['m:childList', 'm:attributes'])
        })

        it('給物件時原樣作為MutationObserver設定(不與預設合併)', async function() {
            await mount('mutation-config')
            await click('改屬性')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            await click('加子節點')
            lines = await waitLog(has('m:childList'))
            assert.strict.deepStrictEqual(lines, ['m:childList'])
        })

        it('無效設定警告並不偵測', async function() {
            await mount('mutation-invalid')
            await click('加子節點')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            let ws = warnsOf('[v-dommutation]')
            assert.strict.deepStrictEqual(ws.length, 1)
            assert.ok(ws[0].startsWith('[v-dommutation] MutationObserver設定無效而不偵測'), ws[0])
        })

        it('停用時不觸發, 啟用後觸發', async function() {
            await mount('mutation-disabled')
            await click('加子節點')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            await click('啟用')
            await click('加子節點')
            lines = await waitLog(has('m:childList'))
            assert.strict.deepStrictEqual(lines, ['m:childList'])
        })

    })

    describe('v-domstable', function() {

        it('初始穩定觸發true, 移動中觸發false, 停止後觸發true', async function() {
            await mount('stable-default')
            await waitLog(has('s:true'))
            await click('移動')
            let lines = await waitLog((ls) => ls.length === 3, 5000)
            assert.strict.deepStrictEqual(lines, ['s:true', 's:false', 's:true'])
        })

        it('處理函式拋錯交Vue錯誤處理(原本被吞掉)', async function() {
            await mount('stable-throw')
            let lines = await waitLog(has('errH:v-on handler:sboom'))
            assert.strict.deepStrictEqual(lines, ['s:true', 'errH:v-on handler:sboom'])
        })

        it('無效之數值設定依domIsStable使用預設, 照常觸發; 未知設定鍵不採用並警告', async function() {
            await mount('stable-invalid-option')
            let lines = await waitLog(has('s:true'))
            assert.strict.deepStrictEqual(lines, ['s:true'])
            let ws = warnsOf('[v-domstable]')
            assert.strict.deepStrictEqual(ws, ['[v-domstable] 設定鍵tol不適用而不採用, 可用之鍵為tolerance、timeDiff、timeDetect'])
        })

        it('停用時不觸發, 啟用後觸發', async function() {
            await mount('stable-disabled')
            let lines = await quiet()
            assert.strict.deepStrictEqual(lines, [])
            await click('啟用')
            lines = await waitLog(has('s:true'))
            assert.strict.deepStrictEqual(lines, ['s:true'])
        })

    })

    describe('v-domdragdrop', function() {

        //center, 項目中心座標
        let center = async (text) => {
            let b = await page.getByText(text, { exact: true }).boundingBox()
            return [b.x + b.width / 2, b.y + b.height / 2]
        }

        //dragItem, 真滑鼠: item1按下→移至目標項目→放開
        let dragItem = async (target) => {
            let [x1, y1] = await center('item1')
            let [x2, y2] = await center(target)
            await page.mouse.move(x1, y1)
            await page.mouse.down()
            await page.waitForTimeout(200)
            await page.mouse.move(x2, y2, { steps: 8 })
            await page.waitForTimeout(80)
            await page.mouse.up()
            await page.waitForTimeout(100)
        }

        //hoverAll, 放開後不按鍵移過各項目與外部
        let hoverAll = async () => {
            let [x3, y3] = await center('item3')
            let [x1, y1] = await center('item1')
            await page.mouse.move(x3, y3, { steps: 6 })
            await page.mouse.move(x1, y1, { steps: 6 })
            await page.mouse.move(400, 300, { steps: 6 })
        }

        it('drop之處理函式拋錯交Vue錯誤處理, 放開後不殘留拖曳狀態', async function() {
            await mount('drag', {
                setup: () => {
                    window.__throwOn = 'drop'
                },
            })
            await dragItem('item2')
            let lines = await waitLog(has('errH:v-on handler:dboom'))
            let n = lines.length
            await hoverAll()
            lines = await quiet()
            assert.ok(lines.includes('d:drop1'), JSON.stringify(lines))
            assert.strict.deepStrictEqual(lines.slice(n), [])
        })

        it('拖曳中宿主重繪使指令重建, 拖曳延續且放開時收到drop', async function() {
            await mount('drag-rerender')
            await dragItem('item2')
            let lines = await quiet()
            assert.ok(await page.getByText('n=1', { exact: true }).isVisible(), 'host re-rendered during drag')
            assert.ok(lines.includes('d:drop1'), JSON.stringify(lines))
        })

        it('停用之項目不再收到拖放事件', async function() {
            await mount('drag')
            await click('停用第3項')
            await dragItem('item3')
            let lines = await quiet()
            assert.ok(lines.some((s) => s.startsWith('d:start')), JSON.stringify(lines))
            assert.strict.deepStrictEqual(lines.filter((s) => /^d:(enter|leave|drop)2$/.test(s)), [])
        })

    })

})
