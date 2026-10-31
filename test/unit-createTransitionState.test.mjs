import assert from 'assert'
import path from 'path'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'


//unit-createTransitionState: 過場狀態追蹤器(src/js/createTransitionState.mjs)之單元測試
//  追蹤器依賴瀏覽器之過場事件與getAnimations, 故於真瀏覽器頁面內以合成元素(自身width過場)驗證, 非組件層測試
//  斷言: 1) 以受追蹤元素自身之過場事件為主要落定訊號, 2) 事件未觸發時由逾時後備落定, 3) 後備時仍有進行中之過場則等其結束,
//        4) 子孫元素之過場不計, 5) stop與重複begin作廢前次等待, 6) hold與release占位, 7) 過場取消亦落定, 8) destroy後不再寫入
//  時刻由頁面內performance.now記錄, 以事件順序與下限斷言為主, 不以牆鐘上限斷言(避免受負載影響)
//  分辨力驗證用: 環境變數W_SRC_DIR可改由他處之src資料夾打包(變異副本), 預設工作區之src, 不改動工作區


let NAME = 'unit-createTransitionState'
let SRC = process.env.W_SRC_DIR ? path.resolve(process.env.W_SRC_DIR) : null


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        bundle = await bundleEntry(NAME, 'test/tools/e2e-entry-createTransitionState.mjs', { srcDir: SRC })
    })
    after(function() {
        removeBundle(NAME)
    })

    let browser = null
    beforeEach(async function() {
        this.timeout(600000)
        browser = await launchBrowser()
    })
    afterEach(async function() {
        if (browser) {
            await browser.close()
        }
        browser = null
    })

    let openCase = async (opt) => {
        let { page, logs } = await openPage(browser, bundle)
        await page.evaluate((o) => window.mk(o), opt)
        return { page, logs }
    }

    //waitState, 等記錄中出現指定state(以頁面內記錄為同步點)
    let waitState = async (page, state) => {
        await page.waitForFunction((s) => window.states().indexOf(s) >= 0, state, { timeout: 15000 })
    }

    //timeOf, 取記錄中第一筆符合者之時刻
    let timeOf = async (page, type, state = null) => {
        return await page.evaluate(([ty, st]) => {
            let e = window.log.find((v) => v.type === ty && (st === null || v.state === st))
            return e ? e.t : null
        }, [type, state])
    }

    it('主要訊號: 受追蹤元素自身之transitionend到達即落定(後備遠於此), 過渡態先於終態', async function() {
        let { page } = await openCase({ dur: 300, margin: 5000 })
        let t0 = await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 300)
            return window.go()
        })
        await waitState(page, 'fin')
        let tEnd = await timeOf(page, 'end-target')
        let tFin = await timeOf(page, 'state', 'fin')
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy', 'fin'])
        //規格: 落定發生在受追蹤元素過場結束之後, 且為事件觸發(後備須待5300ms後)
        assert.ok(tEnd !== null && tFin >= tEnd, '終態須在transitionend之後')
        assert.ok(tFin - t0 < 5000, `應由事件落定而非後備, 實耗${Math.round(tFin - t0)}ms`)
    })

    it('後備訊號: 過場事件未觸發時於nominalMs+marginMs後落定', async function() {
        let { page } = await openCase({ dur: 100, suppress: true, margin: 200 })
        let t0 = await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 100)
            return window.go()
        })
        await waitState(page, 'fin')
        let tFin = await timeOf(page, 'state', 'fin')
        //規格: 逾時後備不早於nominalMs+marginMs(計時器不會提早)
        assert.ok(tFin - t0 >= 290, `後備不應早於逾時, 實耗${Math.round(tFin - t0)}ms`)
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy', 'fin'])
    })

    it('後備訊號: 無任何過場被觸發時於逾時後落定', async function() {
        let { page } = await openCase({ dur: 100, margin: 100 })
        let t0 = await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 100)
            return performance.now()
        })
        await waitState(page, 'fin')
        let tFin = await timeOf(page, 'state', 'fin')
        assert.ok(tFin - t0 >= 190, `實耗${Math.round(tFin - t0)}ms`)
    })

    it('後備時仍有進行中之過場: 等其結束才落定(不因逾時提早落定)', async function() {
        let { page } = await openCase({ dur: 1500, suppress: true, margin: 100 })
        await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 100)
            window.go()
            //以Animation.finished記錄過場真正結束之時刻
            let a = window.els.target.getAnimations().find((v) => typeof v.transitionProperty === 'string')
            window.animFinished = a.finished.then(() => {
                window.tAnimEnd = performance.now()
            })
        })
        await waitState(page, 'fin')
        await page.evaluate(() => window.animFinished)
        let tFin = await timeOf(page, 'state', 'fin')
        let tAnimEnd = await page.evaluate(() => window.tAnimEnd)
        //規格: 落定時受追蹤元素之過場已結束
        assert.ok(tFin >= tAnimEnd - 5, `落定(${Math.round(tFin)})不得早於過場結束(${Math.round(tAnimEnd)})`)
    })

    it('子孫元素之過場不計: 子元素較早結束不落定, 待受追蹤元素自身結束', async function() {
        let { page } = await openCase({ dur: 600, childDur: 100, margin: 5000 })
        await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 600)
            window.go()
        })
        await waitState(page, 'fin')
        let tEndChild = await timeOf(page, 'end-child')
        let tEndTarget = await timeOf(page, 'end-target')
        let tFin = await timeOf(page, 'state', 'fin')
        assert.ok(tEndChild !== null && tEndChild < tEndTarget, '子元素之過場應較早結束')
        assert.ok(tFin >= tEndTarget, `落定(${Math.round(tFin)})不得早於受追蹤元素自身結束(${Math.round(tEndTarget)})`)
    })

    it('子孫元素之過場不計: 受追蹤元素自身無進行中之過場時, 子元素之過場結束亦不落定', async function() {
        let { page } = await openCase({ dur: 600, childDur: 100, margin: 5000 })
        await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 600)
            window.goChild()
        })
        await page.waitForFunction(() => window.log.some((e) => e.type === 'end-child'), null, { timeout: 15000 })
        //負向觀察窗: 子元素之過場已結束後再等一段, 受追蹤元素無過場, 不得因子孫事件而落定
        await page.waitForTimeout(400)
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy'])
    })

    it('過場被取消(display:none)亦落定, 且為事件觸發而非後備', async function() {
        let { page } = await openCase({ dur: 1500, margin: 5000 })
        let t0 = await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 1500)
            let t = window.go()
            //過場進行中隱藏, 瀏覽器發出transitioncancel(同WDrawer收合時之情形)
            window.els.root.style.display = 'none'
            return t
        })
        await waitState(page, 'fin')
        let tFin = await timeOf(page, 'state', 'fin')
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy', 'fin'])
        //規格: 取消事件到達即落定(後備須待6500ms後)
        assert.ok(tFin - t0 < 3000, `應由取消事件落定而非後備, 實耗${Math.round(tFin - t0)}ms`)
    })

    it('stop: 作廢進行中之等待並立即設為指定state, 其後過場結束與後備皆不再改寫', async function() {
        let { page } = await openCase({ dur: 200, margin: 100 })
        await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 200)
            window.go()
            window.ts.stop('stopped')
        })
        await waitState(page, 'stopped')
        //負向觀察窗: 長於過場(200ms)與後備(300ms)
        await page.waitForTimeout(800)
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy', 'stopped'])
    })

    it('重複begin: 前次之等待作廢, 只落定為最後一次之終態', async function() {
        let { page } = await openCase({ dur: 200, margin: 100 })
        await page.evaluate(() => {
            window.ts.begin('busy1', 'fin1', 200)
            window.ts.begin('busy2', 'fin2', 200)
            window.go()
        })
        await waitState(page, 'fin2')
        await page.waitForTimeout(600)
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy1', 'busy2', 'fin2'])
    })

    it('hold與release: 占位中過場結束亦不落定, release後立即落定', async function() {
        let { page } = await openCase({ dur: 200, margin: 5000 })
        await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 200)
            window.ts.hold(window.els.target)
            window.go()
        })
        await page.waitForFunction(() => window.log.some((e) => e.type === 'end-target'), null, { timeout: 15000 })
        //負向觀察窗: 過場已結束後再等一段, 占位中仍不落定
        await page.waitForTimeout(400)
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy'])
        await page.evaluate(() => window.ts.release(window.els.target))
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy', 'fin'])
    })

    it('hold之元素已不在DOM內視為已釋放', async function() {
        let { page } = await openCase({ dur: 200, margin: 5000, cap: 5000 })
        let t0 = await page.evaluate(() => {
            let ghost = document.createElement('div')
            document.body.appendChild(ghost)
            window.ts.begin('busy', 'fin', 200)
            window.ts.hold(ghost)
            let t = window.go()
            ghost.remove()
            return t
        })
        await waitState(page, 'fin')
        let tFin = await timeOf(page, 'state', 'fin')
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy', 'fin'])
        //規格: 過場結束時即視為已釋放而落定(後備須待5200ms後, 上限須再待5000ms)
        assert.ok(tFin - t0 < 3000, `應於過場結束時落定而非後備或上限, 實耗${Math.round(tFin - t0)}ms`)
    })

    it('destroy: 解除綁定並作廢等待, 其後不再寫入state', async function() {
        let { page } = await openCase({ dur: 200, margin: 100 })
        await page.evaluate(() => {
            window.ts.begin('busy', 'fin', 200)
            window.go()
            window.ts.destroy()
        })
        await page.waitForTimeout(800)
        assert.deepStrictEqual(await page.evaluate(() => window.states()), ['busy'])
    })

    it('設定檢查: 缺getRoot、getTargets、setState時拋錯', async function() {
        let { page } = await openCase({ dur: 200 })
        let r = await page.evaluate(() => {
            let f = window.createTransitionState
            let msg = (o) => {
                try {
                    f(o)
                    return ''
                }
                catch (err) {
                    return String(err.message)
                }
            }
            return [msg({}), msg({ getRoot: () => null }), msg({ getRoot: () => null, getTargets: () => [] })]
        })
        assert.deepStrictEqual(r, ['opt.getRoot is not a function', 'opt.getTargets is not a function', 'opt.setState is not a function'])
    })

})
