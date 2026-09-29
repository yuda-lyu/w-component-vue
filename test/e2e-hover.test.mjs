import assert from 'assert'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'


//e2e-hover: 游標移出後提示框與hover狀態須消失、禁用與重繪時hover表現須正確之真瀏覽器測試
//  測試頁(test/tools/e2e-entry-hover.mjs)以真src打包WButtonCircle、WDialog、WTreeIconToggle; 操作一律真滑鼠與鍵盤, 每個案例一個全新瀏覽器
//  WButtonCircle: 點擊後圖示與載入圖示互換(promiseUnlock或loading)、或停用遮罩出現又移除, 被移除者若為游標命中節點, 未採
//    「命中節點被移除後以最近仍在DOM之祖先為目標」語意之瀏覽器(Chrome 144以前, 及停用BoundaryEventDispatchTracksNodeRemoval者, 如Playwright 1.62之預設)
//    於其後游標移出(或同一輪出現全頁遮罩)時不對按鈕層與提示框觸發區派發mouseleave, 提示框與hover狀態殘留;
//    元件以「圖示層與停用遮罩不接收指標事件, 游標命中恆為按鈕層」避免, 本檔於Playwright預設環境驗使用者所見結果, 並驗命中恆為按鈕層(不依瀏覽器語意)
//  WTreeIconToggle: 上層禁用符號容器不得攔截指標事件致hover底色失效; 點擊切換朝向(元件重繪)後游標仍在其上時hover底色須維持;
//    禁用時無hover底色、游標非手指、點擊與Enter不觸發click(同WTreeIconCheckbox)


let NAME = 'e2e-hover'

//AWAY, 移出之目的點(頁面空白處, 遮罩出現時落在遮罩上)
let AWAY = { x: 60, y: 560 }


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        bundle = await bundleEntry(NAME, 'test/tools/e2e-entry-hover.mjs')
    })
    after(function() {
        removeBundle(NAME)
    })

    let browser = null
    beforeEach(async function() {
        this.timeout(600000) //首次啟動時可能下載瀏覽器
        browser = await launchBrowser()
    })
    afterEach(async function() {
        if (browser) {
            await browser.close()
        }
        browser = null
    })

    //openCase, 開頁並掛載情境, 等受測元件出現
    let openCase = async (cfg) => {
        let { page, logs } = await openPage(browser, bundle, { viewport: { width: 1000, height: 700 } })
        await page.evaluate((c) => window.mountCase(c), cfg)
        let fn = cfg.cmp === 'toggle' ? 'toggleState' : 'buttonState'
        await page.waitForFunction((f) => {
            try {
                window[f]()
                return true
            }
            catch (err) {
                return false
            }
        }, fn, { timeout: 10000 })
        //等位置連續3次(每100ms)相同, WDialog開啟有進場動畫
        let prev = ''
        let same = 0
        let t0 = Date.now()
        while (same < 3 && Date.now() - t0 < 10000) {
            await page.waitForTimeout(100)
            let s = await page.evaluate((f) => window[f](), fn)
            let k = `${s.x},${s.y}`
            same = k === prev ? same + 1 : 0
            prev = k
        }
        return { page, logs }
    }

    let clicks = async (page) => {
        return (await page.locator('#clicks').innerText()).trim()
    }

    //hoverIn, 真滑鼠自按鈕外移入圖示中心, 等提示框出現(移入顯示提示為前提)
    let hoverIn = async (page, tip) => {
        let s = await page.evaluate(() => window.buttonState())
        await page.mouse.move(s.x - 40, s.y - 40)
        await page.mouse.move(s.x, s.y, { steps: 5 })
        await page.locator('.WPopperFix', { hasText: tip }).waitFor({ state: 'visible', timeout: 5000 })
        return s
    }

    //expectTipGone, 移出後提示框須消失
    let expectTipGone = async (page, tip, when) => {
        try {
            await page.locator('.WPopperFix', { hasText: tip }).waitFor({ state: 'hidden', timeout: 3000 })
        }
        catch (err) {
            assert.fail(`${when}提示框「${tip}」仍顯示`)
        }
    }

    //expectBg, 按鈕層底色須於時限內成為指定色(按鈕底色有0.3s過場)
    let expectBg = async (page, color, when) => {
        try {
            await page.waitForFunction((c) => window.buttonState().bg === c, color, { timeout: 3000 })
        }
        catch (err) {
            assert.fail(`${when}按鈕底色應為${color}, 實為${(await page.evaluate(() => window.buttonState())).bg}`)
        }
    }

    //runButtonCase, 移入 -> 點擊 -> (情境動作) -> 移出 -> 提示框須消失 -> 關遮罩或點空白處 -> 再移動 -> 提示框仍須隱藏且按鈕為一般底色
    let runButtonCase = async (cfg, opt = {}) => {
        let tip = cfg.cmp === 'dlg' ? 'Save' : 'Save changes'
        let { page, logs } = await openCase(cfg)
        let s = await hoverIn(page, tip)
        await page.mouse.down()
        await page.mouse.up()
        if (opt.wiggle) {
            //停用期間游標於按鈕內微動(停用遮罩成為游標下之元素)
            await page.waitForFunction(() => window.vm.editable === false, null, { timeout: 5000 })
            await page.mouse.move(s.x + 2, s.y + 1)
        }
        if (cfg.overlay) {
            await page.getByRole('button', { name: 'OK' }).waitFor({ state: 'visible', timeout: 5000 })
        }
        if (cfg.mode === 'pu-late') {
            await page.waitForFunction(() => !window.buttonState().loadingShown, null, { timeout: 5000 })
        }
        //規格: 游標移出按鈕後提示框須消失
        await page.mouse.move(AWAY.x, AWAY.y)
        await expectTipGone(page, tip, '移出後')
        if (cfg.overlay) {
            //關閉遮罩(點OK)
            await page.getByRole('button', { name: 'OK' }).click()
            await page.getByRole('button', { name: 'OK' }).waitFor({ state: 'detached', timeout: 5000 })
        }
        else {
            //點空白處使按鈕失焦, 使底色只反映hover
            await page.mouse.click(AWAY.x, AWAY.y)
        }
        await page.mouse.move(AWAY.x + 300, AWAY.y - 50, { steps: 3 })
        //規格: 游標不在按鈕上時, 提示框維持隱藏, 按鈕為一般底色(非hover色)
        await expectTipGone(page, tip, '關閉遮罩並移動後')
        await expectBg(page, opt.bgNormal || 'rgb(241, 241, 241)', '關閉遮罩並移動後')
        assert.deepStrictEqual(logs.pageerror, [])
    }

    describe('WButtonCircle', function() {

        it('promiseUnlock處理函數第一行resolve且同一輪出現全頁遮罩: 移出後提示框消失, 關閉遮罩後按鈕為一般底色', async function() {
            await runButtonCase({ cmp: 'cir', mode: 'pu-first', overlay: true })
        })

        it('promiseUnlock處理函數第一行resolve且無遮罩: 點擊後立即移出, 提示框消失', async function() {
            await runButtonCase({ cmp: 'cir', mode: 'pu-first', overlay: false })
        })

        it('promiseUnlock延後resolve且點擊時出現全頁遮罩: 移出後提示框消失', async function() {
            await runButtonCase({ cmp: 'cir', mode: 'pu-late', overlay: true })
        })

        it('父層切換loading(無promiseUnlock), 結束時出現全頁遮罩: 移出後提示框消失', async function() {
            await runButtonCase({ cmp: 'cir', mode: 'loading-prop', overlay: true })
        })

        it('父層切換editable期間游標微動, 恢復時出現全頁遮罩: 移出後提示框消失', async function() {
            await runButtonCase({ cmp: 'cir', mode: 'editable', overlay: true }, { wiggle: true })
        })

        it('WDialog標題列儲存鈕: 點擊後出現全頁遮罩, 移出後提示框消失', async function() {
            await runButtonCase({ cmp: 'dlg', mode: 'pu-first', overlay: true }, { bgNormal: 'rgba(0, 0, 0, 0)' })
        })

        it('既有互動不變: 移入顯示提示與hover底色、游標為手指、載入中顯示載入圖示且尺寸不變、點擊與Enter各觸發一次、游標命中恆為按鈕層', async function() {
            let { page, logs } = await openCase({ cmp: 'cir', mode: 'pu-late', overlay: false })
            let s0 = await page.evaluate(() => window.buttonState())
            await hoverIn(page, 'Save changes')
            //規格: 移入時為hover底色, 游標為手指
            await expectBg(page, 'rgb(236, 236, 236)', '移入後')
            let s1 = await page.evaluate(() => window.buttonState())
            assert.strictEqual(s1.cursor, 'pointer')
            //規格(修正之設計): 圖示中心之命中元素為按鈕層
            assert.strictEqual(s1.hitIsLayer, true)
            await page.mouse.down()
            await page.mouse.up()
            await page.waitForFunction(() => window.buttonState().loadingShown, null, { timeout: 5000 })
            let s2 = await page.evaluate(() => window.buttonState())
            //規格: 載入中顯示載入圖示, 按鈕尺寸不變, 命中仍為按鈕層
            assert.deepStrictEqual([s2.w, s2.h], [s0.w, s0.h])
            assert.strictEqual(s2.hitIsLayer, true)
            await page.waitForFunction(() => !window.buttonState().loadingShown, null, { timeout: 5000 })
            let s3 = await page.evaluate(() => window.buttonState())
            assert.deepStrictEqual([s3.w, s3.h], [s0.w, s0.h])
            assert.strictEqual(await clicks(page), '1')
            //規格: 取得焦點時按Enter觸發click
            await page.keyboard.press('Enter')
            await page.waitForFunction(() => document.querySelector('#clicks').innerText.trim() === '2', null, { timeout: 5000 })
            await page.waitForFunction(() => !window.buttonState().loadingShown, null, { timeout: 5000 })
            assert.strictEqual(await clicks(page), '2')
            assert.deepStrictEqual(logs.pageerror, [])
        })

    })

    describe('WTreeIconToggle', function() {

        let HOVER = 'rgba(128, 128, 128, 0.15)'
        let NORMAL = 'rgba(0, 0, 0, 0)'

        let moveIn = async (page) => {
            let s = await page.evaluate(() => window.toggleState())
            await page.mouse.move(s.x - 40, s.y - 40)
            await page.mouse.move(s.x, s.y, { steps: 5 })
            return s
        }

        let waitRotate = async (page, deg) => {
            await page.waitForFunction((d) => document.querySelector('.circle').parentElement.style.transform === `rotate(${d}deg)`, deg, { timeout: 5000 })
        }

        it('可編輯: 移入顯示hover底色且游標為手指, 點擊與Enter各觸發一次, 切換朝向後hover底色維持, 移出恢復', async function() {
            let { page, logs } = await openCase({ cmp: 'toggle', editable: true })
            await moveIn(page)
            //規格: 移入圓鈕顯示hover底色(iconBackgroundColorHover)
            try {
                await page.waitForFunction((c) => window.toggleState().bg === c, HOVER, { timeout: 3000 })
            }
            catch (err) {
                assert.fail(`移入後圓鈕底色應為${HOVER}, 實為${(await page.evaluate(() => window.toggleState())).bg}`)
            }
            let s1 = await page.evaluate(() => window.toggleState())
            assert.strictEqual(s1.cursor, 'pointer')
            assert.strictEqual(s1.hitInCircle, true)
            //規格: 點擊觸發click(測試頁據以切換朝向, 元件重繪), 游標仍在其上時hover底色維持
            await page.mouse.down()
            await page.mouse.up()
            await waitRotate(page, 90)
            assert.strictEqual(await clicks(page), '1')
            assert.strictEqual((await page.evaluate(() => window.toggleState())).bg, HOVER)
            //規格: 取得焦點時按Enter觸發click
            await page.keyboard.press('Enter')
            await waitRotate(page, 0)
            assert.strictEqual(await clicks(page), '2')
            assert.strictEqual((await page.evaluate(() => window.toggleState())).bg, HOVER)
            //規格: 移出恢復一般底色
            await page.mouse.move(AWAY.x, AWAY.y)
            await page.waitForFunction((c) => window.toggleState().bg === c, NORMAL, { timeout: 3000 })
            assert.deepStrictEqual(logs.pageerror, [])
        })

        it('禁用: 顯示禁用符號, 移入無hover底色且游標非手指, 點擊與Enter不觸發click', async function() {
            let { page, logs } = await openCase({ cmp: 'toggle', editable: false })
            let s0 = await page.evaluate(() => window.toggleState())
            //規格: 禁用時顯示禁用符號(兩條斜線)
            assert.strictEqual(s0.strikes, 2)
            await moveIn(page)
            //負向觀察窗: 移入後一段時間內底色不得變為hover色
            await page.waitForTimeout(400)
            let s1 = await page.evaluate(() => window.toggleState())
            assert.strictEqual(s1.bg, NORMAL)
            assert.notStrictEqual(s1.cursor, 'pointer')
            //規格: 禁用時點擊與Enter不觸發click(朝向不變)
            await page.mouse.down()
            await page.mouse.up()
            await page.keyboard.press('Enter')
            await page.waitForTimeout(400)
            assert.strictEqual(await clicks(page), '0')
            assert.strictEqual(await page.evaluate(() => document.querySelector('.circle').parentElement.style.transform), 'rotate(0deg)')
            assert.deepStrictEqual(logs.pageerror, [])
        })

    })

})
