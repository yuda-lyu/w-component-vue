import assert from 'assert'
import path from 'path'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'


//e2e-transitionState: 有過場動畫之組件於DOM提供可偵測之state屬性之真瀏覽器測試(建議書 Gitea #29 〈驗證建議〉)
//  WDialog(根節點)、浮層(WPopup、WTooltip、WTextSelect之.WPopperFix)、WListExpandItem(根節點)、WGroupTags與WGroupDragdrop(根節點)
//  測試頁(test/tools/e2e-entry-transitionState.mjs)以真src打包; 操作一律真滑鼠(Locator點擊、mouse.move), 每個案例一個全新瀏覽器
//  記錄器於頁面內以MutationObserver記錄state屬性之每次改變(含改變當下之元素箱體), 以rAF逐幀記錄state與箱體, 斷言:
//    1) state序列(過渡態出現且順序正確, 關閉無hiding), 2) 過渡態期間箱體仍在變動(確有過場可等), 3) 終態出現之瞬間箱體即為終值, 且其後箱體不再變動
//    4) 過場事件未觸發(高負載)時逾時後備仍落定
//  分辨力驗證用: 環境變數W_SRC_DIR可改由他處之src資料夾打包(修前副本、變異副本), 預設工作區之src, 不改動工作區


let NAME = 'e2e-transitionState'
let SRC = process.env.W_SRC_DIR ? path.resolve(process.env.W_SRC_DIR) : null
//等終態出現之上限(ms), 只影響失敗多久才報; 分辨力驗證時可縮短以免大量失敗案例各等15秒
let WAIT_MS = Number(process.env.W_WAIT_MS) > 0 ? Number(process.env.W_WAIT_MS) : 15000


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        bundle = await bundleEntry(NAME, 'test/tools/e2e-entry-transitionState.mjs', { srcDir: SRC })
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

    //checkLogs, 頁面不得有未捕捉例外、console錯誤與警告(Vue攔下之hook、watcher、computed例外與[Vue warn]皆為console.error, 不會成為pageerror)
    let curLogs = null
    let checkLogs = () => {
        assert.deepStrictEqual(curLogs.pageerror, [])
        assert.deepStrictEqual(curLogs.error, [])
        assert.deepStrictEqual(curLogs.warn, [])
    }

    //openCase, 開頁並掛載情境
    let openCase = async (cfg, opt = {}) => {
        let { page, logs } = await openPage(browser, bundle, { viewport: { width: 1000, height: 700 }, clock: opt.clock })
        curLogs = logs
        if (opt.suppress) {
            await page.evaluate(() => window.suppressTransitionEnd())
        }
        await page.evaluate((c) => window.mountCase(c), cfg)
        await page.locator('#host').waitFor({ state: 'attached', timeout: 10000 })
        return { page, logs }
    }

    //record, 開始記錄 -> 以真操作觸發 -> 等終態出現(以state屬性為同步點) -> 終態後觀察一段時間(否定斷言用之觀察窗, 長於任何剩餘過場) -> 回傳記錄
    //  stateSel: state所在元素之選擇器, boxKey: 箱體量測函數名, finalState: 等待之終態
    let record = async (page, stateSel, boxKey, act, finalState, observeMs = 700) => {
        await page.evaluate(([s, k]) => window.startRec(s, k), [stateSel, boxKey])
        await act()
        await page.locator(`${stateSel}[state="${finalState}"]`).waitFor({ state: 'attached', timeout: WAIT_MS })
        await page.waitForTimeout(observeMs)
        checkLogs()
        return await page.evaluate(() => window.stopRec())
    }

    //seqOf, state序列(events已去除連續重複)
    let seqOf = (rec) => rec.events.map((e) => e.state)

    //checkSettled, 終態出現之瞬間箱體即為終值且其後不再變動; busy為過渡態集合, motion為true時過渡態期間箱體須確有變動
    let checkSettled = (rec, finalState, busy, motion) => {
        let evFinal = rec.events[rec.events.length - 1]
        assert.strictEqual(evFinal.state, finalState)
        //規格: 終態(opened等)出現時, 元素位置已不再變動 -> 終態之後的每一幀箱體都等於終態出現當下之箱體
        let after = rec.frames.filter((f) => f.t > evFinal.t)
        assert.ok(after.length >= 5, `終態後觀察幀數不足: ${after.length}`)
        for (let f of after) {
            assert.deepStrictEqual(f.box, evFinal.box, `終態${finalState}之後t=${f.t}箱體仍改變, events=${JSON.stringify(rec.events.map((e) => [e.t, e.state]))}, 該幀state=${f.state}`)
        }
        //規格: 過渡態期間位置仍在變動, 故須等到終態才可量測
        if (motion) {
            let bf = rec.frames.filter((f) => busy.indexOf(f.state) >= 0)
            let ks = new Set(bf.map((f) => JSON.stringify(f.box)))
            assert.ok(ks.size >= 2, `過渡態${busy.join('/')}期間箱體未變動(僅${ks.size}種)`)
            assert.ok(bf.some((f) => JSON.stringify(f.box) !== JSON.stringify(evFinal.box)), `過渡態期間箱體皆已等於終值`)
        }
        return evFinal.box
    }

    describe('WDialog(根節點state: hidden、opening、opened、resizing)', function() {

        let SEL = '#host [state]'

        //open, 開啟並等到opened
        let open = async (page) => {
            await page.locator('#btnShow').click()
            await page.locator(`${SEL}[state="opened"]`).waitFor({ state: 'attached', timeout: 15000 })
            await page.waitForTimeout(100)
        }

        it('驗證建議1: 開啟後為opening, 過場結束為opened, 此時彈窗位置已不再變動', async function() {
            let { page, logs } = await openCase({ cmp: 'dlg' })
            assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'hidden')
            let rec = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnShow').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            let box = checkSettled(rec, 'opened', ['opening'], true)
            assert.ok(box[2] > 0 && box[3] > 0 && box[4] === 1)
            assert.deepStrictEqual(logs.pageerror, [])
        })

        it('驗證建議1: 最大化後短暫為resizing, 結束回opened, 此時彈窗已為全螢幕且不再變動', async function() {
            let { page } = await openCase({ cmp: 'dlg' })
            await open(page)
            let rec = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnFull').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['opened', 'resizing', 'opened'])
            let box = checkSettled(rec, 'opened', ['resizing'], false)
            assert.deepStrictEqual(box, [0, 0, 1000, 700, 1])
        })

        it('驗證建議1: 還原後為resizing再回opened, 彈窗回到最大化前之位置與尺寸', async function() {
            let { page } = await openCase({ cmp: 'dlg' })
            await open(page)
            let box0 = await page.evaluate(() => {
                let e = window.vm.$children[0].$refs.divPanel.getBoundingClientRect()
                return [Math.round(e.left * 100) / 100, Math.round(e.top * 100) / 100, Math.round(e.width * 100) / 100, Math.round(e.height * 100) / 100, 1]
            })
            let rec1 = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnFull').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec1), ['opened', 'resizing', 'opened'])
            let rec = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnFull').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['opened', 'resizing', 'opened'])
            let box = checkSettled(rec, 'opened', ['resizing'], false)
            assert.deepStrictEqual(box, box0)
        })

        it('驗證建議1: 關閉無過場, 由opened直接成為hidden(不經hiding), 彈窗已自DOM移除', async function() {
            let { page } = await openCase({ cmp: 'dlg' })
            await open(page)
            let rec = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnClose').click()
            }, 'hidden', 300)
            assert.deepStrictEqual(seqOf(rec), ['opened', 'hidden'])
            assert.strictEqual(await page.evaluate(() => window.vm.$children[0].$refs.divShield === undefined), true)
            assert.ok(rec.frames.every((f) => f.state !== 'hiding'))
        })

        it('驗證建議1: 初始即顯示者由opening落定為opened', async function() {
            let { page } = await openCase({ cmp: 'dlg', dlgInitShow: true })
            await page.locator(`${SEL}[state="opened"]`).waitFor({ state: 'attached', timeout: 15000 })
            let box = await page.evaluate(() => {
                let e = window.vm.$children[0].$refs.divPanel.getBoundingClientRect()
                return [e.left, e.top, e.width, e.height]
            })
            await page.waitForTimeout(600)
            let box1 = await page.evaluate(() => {
                let e = window.vm.$children[0].$refs.divPanel.getBoundingClientRect()
                return [e.left, e.top, e.width, e.height]
            })
            //規格: opened時位置已不再變動
            assert.deepStrictEqual(box1, box)
            checkLogs()
        })

        it('驗證建議1: 過場事件未觸發(高負載)時, 開啟與最大化仍於逾時後落定, 落定時位置已不再變動', async function() {
            let { page } = await openCase({ cmp: 'dlg' }, { suppress: true })
            let rec = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnShow').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            checkSettled(rec, 'opened', ['opening'], true)
            let rec2 = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnFull').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec2), ['opened', 'resizing', 'opened'])
            let box = checkSettled(rec2, 'opened', ['resizing'], false)
            assert.deepStrictEqual(box, [0, 0, 1000, 700, 1])
        })

        it('驗證建議1: CPU降速20倍之高負載下, 開啟仍落定且落定時位置不再變動', async function() {
            let { page } = await openCase({ cmp: 'dlg' })
            let cdp = await page.context().newCDPSession(page)
            await cdp.send('Emulation.setCPUThrottlingRate', { rate: 20 })
            let rec = await record(page, SEL, 'dlgPanel', async () => {
                await page.locator('#btnShow').click()
            }, 'opened', 1500)
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            checkSettled(rec, 'opened', ['opening'], false)
        })

    })

    describe('浮層(.WPopperFix之state: hidden、opening、opened)', function() {

        let SEL = '.WPopperFix'

        let hoverIn = async (page) => {
            let b = await page.locator('#btnTip').boundingBox()
            await page.mouse.move(b.x - 40, b.y - 40)
            await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2, { steps: 5 })
        }

        it('驗證建議2: 開啟WTextSelect之下拉, opening轉opened之時點內層內容已不再變動; 點外部關閉為hidden', async function() {
            let { page, logs } = await openCase({ cmp: 'sel' })
            assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'hidden')
            let rec = await record(page, SEL, 'popInner', async () => {
                await page.locator('#selBox').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            //規格: .WPopperFix本身位置與透明度恆定, 內層內容仍在滑入, 故須以state判斷
            let box = checkSettled(rec, 'opened', ['opening'], true)
            assert.strictEqual(box[4], 1)
            let rec2 = await record(page, SEL, 'popInner', async () => {
                await page.mouse.click(900, 650)
            }, 'hidden', 300)
            assert.deepStrictEqual(seqOf(rec2), ['opened', 'hidden'])
            assert.deepStrictEqual(logs.pageerror, [])
        })

        it('驗證建議2: WPopup(點擊觸發)開啟為opening再opened, 內層內容已不再變動; 關閉不經hiding', async function() {
            let { page } = await openCase({ cmp: 'pop' })
            let rec = await record(page, SEL, 'popInner', async () => {
                await page.locator('#btnPop').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            checkSettled(rec, 'opened', ['opening'], true)
            let rec2 = await record(page, SEL, 'popInner', async () => {
                await page.mouse.click(900, 650)
            }, 'hidden', 300)
            assert.deepStrictEqual(seqOf(rec2), ['opened', 'hidden'])
            assert.ok(rec2.frames.every((f) => f.state !== 'hiding'))
        })

        it('驗證建議2: WTooltip(移入觸發)transitionTime=800ms時, opening維持至過場結束, 移出為hidden', async function() {
            let { page } = await openCase({ cmp: 'tip', transitionTime: 800 })
            let rec = await record(page, SEL, 'popInner', async () => {
                await hoverIn(page)
            }, 'opened', 1000)
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            checkSettled(rec, 'opened', ['opening'], true)
            let rec2 = await record(page, SEL, 'popInner', async () => {
                await page.mouse.move(900, 650)
            }, 'hidden', 300)
            assert.deepStrictEqual(seqOf(rec2), ['opened', 'hidden'])
        })

        it('驗證建議2: transitionTime趨近0(實際無過場可等)時, 仍經opening於逾時後落定為opened, 不卡在opening', async function() {
            let { page } = await openCase({ cmp: 'tip', transitionTime: 0.001 })
            let rec = await record(page, SEL, 'popInner', async () => {
                await hoverIn(page)
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            checkSettled(rec, 'opened', ['opening'], false)
        })

        it('驗證建議2: 過場事件未觸發(高負載)時, 下拉仍於逾時後落定為opened且內層內容不再變動', async function() {
            let { page } = await openCase({ cmp: 'sel' }, { suppress: true })
            let rec = await record(page, SEL, 'popInner', async () => {
                await page.locator('#selBox').click()
            }, 'opened')
            assert.deepStrictEqual(seqOf(rec), ['hidden', 'opening', 'opened'])
            checkSettled(rec, 'opened', ['opening'], true)
        })

        it('驗證建議2: 開啟過程中即關閉, 以最後一次為準落定為hidden, 不殘留opening', async function() {
            let { page } = await openCase({ cmp: 'pop' })
            await page.evaluate(() => window.startRec('.WPopperFix', 'popInner'))
            await page.locator('#btnPop').click()
            await page.locator(`${SEL}[state="opening"]`).waitFor({ state: 'attached', timeout: 5000 })
            await page.mouse.click(900, 650)
            await page.locator(`${SEL}[state="hidden"]`).waitFor({ state: 'attached', timeout: 5000 })
            //負向觀察窗: 逾時後備不得把已關閉者誤寫為opened
            await page.waitForTimeout(900)
            let rec = await page.evaluate(() => window.stopRec())
            assert.strictEqual(seqOf(rec).pop(), 'hidden')
            assert.ok(seqOf(rec).indexOf('opened') < 0)
        })

    })

    describe('WListExpandItem(根節點state: collapsed、expanding、expanded、collapsing)', function() {

        let SEL = '#host [state]'

        it('驗證建議3: 展開後expanding轉expanded, 此時其下方元素位置已不再變動; 收合亦然', async function() {
            let { page, logs } = await openCase({ cmp: 'exp' })
            assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'collapsed')
            let top0 = await page.evaluate(() => document.querySelector('#below').getBoundingClientRect().top)
            let rec = await record(page, SEL, 'expBelow', async () => {
                await page.getByText('Item A').click()
            }, 'expanded')
            assert.deepStrictEqual(seqOf(rec), ['collapsed', 'expanding', 'expanded'])
            let box = checkSettled(rec, 'expanded', ['expanding'], true)
            //規格: 展開後下方元素下移內容高度(120px)
            assert.strictEqual(box[1], top0 + 120)
            let rec2 = await record(page, SEL, 'expBelow', async () => {
                await page.getByText('Item A').click()
            }, 'collapsed')
            assert.deepStrictEqual(seqOf(rec2), ['expanded', 'collapsing', 'collapsed'])
            let box2 = checkSettled(rec2, 'collapsed', ['collapsing'], true)
            assert.strictEqual(box2[1], top0)
            assert.deepStrictEqual(logs.pageerror, [])
        })

        it('初始渲染無過場: active為true直接為expanded, 且不再改變', async function() {
            let { page } = await openCase({ cmp: 'exp', expInitActive: true })
            await page.evaluate(() => window.startRec('#host [state]', 'expBelow'))
            await page.waitForTimeout(800)
            let rec = await page.evaluate(() => window.stopRec())
            assert.deepStrictEqual(seqOf(rec), ['expanded'])
            checkLogs()
        })

        it('驗證建議3: 過場事件未觸發(高負載)時, 展開與收合仍於逾時後落定且位置不再變動', async function() {
            let { page } = await openCase({ cmp: 'exp' }, { suppress: true })
            let rec = await record(page, SEL, 'expBelow', async () => {
                await page.getByText('Item A').click()
            }, 'expanded')
            assert.deepStrictEqual(seqOf(rec), ['collapsed', 'expanding', 'expanded'])
            checkSettled(rec, 'expanded', ['expanding'], true)
            let rec2 = await record(page, SEL, 'expBelow', async () => {
                await page.getByText('Item A').click()
            }, 'collapsed')
            assert.deepStrictEqual(seqOf(rec2), ['expanded', 'collapsing', 'collapsed'])
            checkSettled(rec2, 'collapsed', ['collapsing'], true)
        })

    })

    for (let [cmp, name] of [['tags', 'WGroupTags'], ['dd', 'WGroupDragdrop']]) {

        describe(`${name}(根節點state: idle、moving)`, function() {

            let SEL = '#host [state]'

            it('初始渲染無過場: 為idle且不出現moving', async function() {
                let { page } = await openCase({ cmp })
                await page.evaluate((s) => window.startRec(s, 'items'), SEL)
                await page.waitForTimeout(900)
                let rec = await page.evaluate(() => window.stopRec())
                assert.deepStrictEqual(seqOf(rec), ['idle'])
                checkLogs()
            })

            it('value為null時不報錯且維持idle', async function() {
                //規格: 只新增屬性, 既有輸入(value為null, 修前模板靜默容忍)不得因state而新增console錯誤
                let { page } = await openCase({ cmp, nullValue: true })
                await page.evaluate((s) => window.startRec(s, 'items'), SEL)
                await page.waitForTimeout(600)
                let rec = await page.evaluate(() => window.stopRec())
                assert.deepStrictEqual(seqOf(rec), ['idle'])
                checkLogs()
            })

            it('驗證建議3: 新增項目後moving轉idle, 此時所有項目與其下方元素位置已不再變動', async function() {
                let { page, logs } = await openCase({ cmp })
                let rec = await record(page, SEL, 'items', async () => {
                    await page.locator('#btnAdd').click()
                }, 'idle')
                assert.deepStrictEqual(seqOf(rec), ['idle', 'moving', 'idle'])
                let box = checkSettled(rec, 'idle', ['moving'], false)
                //規格: 新增一項後共4個項目箱體(x,y)加下方元素
                assert.strictEqual(box.length, 4 * 2 + 2)
                assert.deepStrictEqual(logs.pageerror, [])
            })

            it('驗證建議3: 刪除中間項目, 被刪項目停留至進出場結束才移除且其後項目此時才補位, 故須等idle才位置不再變動', async function() {
                let { page } = await openCase({ cmp })
                let rec = await record(page, SEL, 'items', async () => {
                    await page.locator('#btnRemove').click()
                }, 'idle')
                assert.deepStrictEqual(seqOf(rec), ['idle', 'moving', 'idle'])
                let box = checkSettled(rec, 'idle', ['moving'], false)
                //規格: 刪除一項後剩2個項目箱體加下方元素; moving期間箱體(含被刪項目)與終值不同
                assert.strictEqual(box.length, 2 * 2 + 2)
                let bf = rec.frames.filter((f) => f.state === 'moving')
                assert.ok(bf.length > 0 && bf.every((f) => JSON.stringify(f.box) !== JSON.stringify(box)), `moving期間箱體須與終值不同`)
            })

            it('驗證建議3: 換序後moving期間項目位置仍在位移, 轉idle時已就定位且不再變動', async function() {
                let { page } = await openCase({ cmp })
                let rec = await record(page, SEL, 'items', async () => {
                    await page.locator('#btnReverse').click()
                }, 'idle')
                assert.deepStrictEqual(seqOf(rec), ['idle', 'moving', 'idle'])
                checkSettled(rec, 'idle', ['moving'], true)
            })

            it('驗證建議3: 進出場以Vue計時器(501ms)結束即落定, 不待逾時後備(800ms)', async function() {
                //假時鐘: 虛擬時刻凍結, 由runFor推進, 不受實際負載影響; 新增項目無位移過場, 唯一結束訊號為transition-group之進場完成
                let { page } = await openCase({ cmp }, { clock: true })
                await page.clock.pauseAt(new Date(Date.now() + 1000))
                await page.locator('#btnAdd').click()
                await page.clock.runFor(100)
                assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'moving')
                //規格: 進場完成(約533ms)後即為idle, 此時距後備落定(800ms)仍有餘裕
                await page.clock.runFor(550)
                assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'idle')
            })

            it('驗證建議3: 刪除加換序同次更新, 位移過場(真實時間)先結束時仍待進出場(假時鐘凍結)完成才idle', async function() {
                //假時鐘凍結Vue之進出場計時器(501ms), CSS位移過場仍依真實時間結束並發出transitionend; 若位移過場結束即落定, 其後被刪項目移除時其餘項目才補位, 位置仍會變動
                let { page } = await openCase({ cmp }, { clock: true })
                await page.clock.pauseAt(new Date(Date.now() + 1000))
                await page.locator('#btnMix').click()
                assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'moving')
                //負向觀察窗: 長於位移過場(500ms)
                await page.waitForTimeout(800)
                assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'moving', '進出場未完成, 位移過場結束不得落定')
                //規格: 進出場完成後即為idle
                await page.clock.runFor(600)
                assert.strictEqual(await page.locator(SEL).getAttribute('state'), 'idle')
            })

            it('驗證建議3: 過場事件未觸發(高負載)時, 刪除與換序仍於逾時後落定且位置不再變動', async function() {
                let { page } = await openCase({ cmp }, { suppress: true })
                let rec = await record(page, SEL, 'items', async () => {
                    await page.locator('#btnRemove').click()
                }, 'idle')
                assert.deepStrictEqual(seqOf(rec), ['idle', 'moving', 'idle'])
                checkSettled(rec, 'idle', ['moving'], false)
                let rec2 = await record(page, SEL, 'items', async () => {
                    await page.locator('#btnReverse').click()
                }, 'idle')
                assert.deepStrictEqual(seqOf(rec2), ['idle', 'moving', 'idle'])
                checkSettled(rec2, 'idle', ['moving'], true)
            })

        })

    }

})
