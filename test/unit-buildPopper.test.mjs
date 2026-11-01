import assert from 'assert'
import path from 'path'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'


//unit-buildPopper: 彈出層控制器(src/js/buildPopper.mjs)之state歸屬與變更訊號之單元測試(規則帳本三之R-S6)
//  buildPopper依賴popper.js與瀏覽器之過場事件, 故於真瀏覽器頁內以普通物件模擬vo(Vue組件實例)、真DOM與真popper.js驗證, 非組件層測試(組件層見e2e-transitionState)
//  斷言: 1) state由buildPopper擁有: vo未宣告state不拋錯且不新增該鍵, 宣告為undefined或非語彙值時建構即校正為hidden,
//        2) 取值getState與變更訊號('state'事件, ev.on與vo.$emit各發一次): 一次開啟與關閉依序opening、opened、hidden, 建構時不發出, 同值不重複,
//        3) vo已宣告state時同步寫入, 4) 開啟中即關閉為opening、hidden且不再出現opened, 5) 監聽器拋錯不中斷過場追蹤, 6) 其餘必填鍵仍檢查
//  以頁面內記錄之事件順序為同步點, 不以牆鐘上限斷言; 否定斷言(不再出現opened)才用觀察窗
//  分辨力驗證用: 環境變數W_SRC_DIR可改由他處之src資料夾打包(變異副本), 預設工作區之src, 不改動工作區


let NAME = 'unit-buildPopper'
let SRC = process.env.W_SRC_DIR ? path.resolve(process.env.W_SRC_DIR) : null

//buildPopper原有之必填鍵(不含state), 缺少時須拋錯invalid vo.<key>
let KEYS_REQUIRED = ['mode', 'mmkey', 'show', 'triggerWidth', 'placement', 'placementDistX', 'placementDistY', 'transitionTime', 'isolated', 'editable', 'contentStyle']


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        bundle = await bundleEntry(NAME, 'test/tools/e2e-entry-buildPopper.mjs', { srcDir: SRC })
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
        let err = await page.evaluate((o) => window.tryBuild(o), opt)
        return { page, logs, err }
    }

    //waitSignals, 等變更訊號累計至n筆(以頁面內記錄為同步點)
    let waitSignals = async (page, n) => {
        await page.waitForFunction((k) => window.signals.length >= k, n, { timeout: 15000 })
    }

    let sigs = async (page) => {
        return await page.evaluate(() => window.signals.map((v) => v.s))
    }

    it('歸屬: vo未宣告state時建構不拋錯, 全程不新增vo.state, getState初值為hidden', async function() {
        let { page, err } = await openCase({ declare: 'none' })
        //規格: 呼叫端宣告與否皆可運作, 未宣告不拋錯(修前拋invalid vo.state)
        assert.strictEqual(err, null)
        let info = await page.evaluate(() => window.info())
        assert.strictEqual(info.getState, 'hidden')
        assert.strictEqual(info.hasState, false)

        //開啟與關閉後仍不新增vo.state(未宣告時略過寫入)
        await page.evaluate(() => window.open())
        await waitSignals(page, 2)
        await page.evaluate(() => window.close())
        await waitSignals(page, 3)
        info = await page.evaluate(() => window.info())
        assert.strictEqual(info.hasState, false)
        assert.strictEqual(info.getState, 'hidden')
    })

    it('歸屬: vo宣告state為undefined時建構後vo.state與getState皆為hidden(寫入一次hidden)', async function() {
        let { page, err } = await openCase({ declare: 'undefined' })
        assert.strictEqual(err, null)
        let info = await page.evaluate(() => window.info())
        //規格: 初值由buildPopper決定
        assert.strictEqual(info.voState, 'hidden')
        assert.strictEqual(info.getState, 'hidden')
        assert.deepStrictEqual(await page.evaluate(() => window.voWrites), ['hidden'])
    })

    it('歸屬: vo宣告state為非語彙值時建構即校正為hidden', async function() {
        let { page, err } = await openCase({ declare: 'idle' })
        assert.strictEqual(err, null)
        let info = await page.evaluate(() => window.info())
        //規格: 呼叫端宣告之非語彙值由buildPopper校正
        assert.strictEqual(info.voState, 'hidden')
        assert.strictEqual(info.getState, 'hidden')
    })

    it('歸屬: vo宣告state為hidden(同WTooltip與w-vditor-vue)時行為不變, 建構僅寫入hidden', async function() {
        let { page, err } = await openCase({ declare: 'hidden' })
        assert.strictEqual(err, null)
        assert.strictEqual((await page.evaluate(() => window.info())).voState, 'hidden')
        assert.deepStrictEqual(await page.evaluate(() => window.voWrites), ['hidden'])
    })

    it('介面: 回傳物件原有函數鍵不減, 另有getState', async function() {
        let { page } = await openCase({ declare: 'none' })
        let info = await page.evaluate(() => window.info())
        //規格: 只新增getState, 其餘介面不變
        assert.deepStrictEqual(info.fnKeys.sort(), ['getState', 'mounted', 'destroy', 'showPopper', 'hidePopper', 'updatePopper', 'displayPopper', 'updateValue', 'triggerEvent', 'evShow', 'evHide'].sort())
    })

    it('變更訊號: 建構時不發出(僅getState取初值)', async function() {
        let { page } = await openCase({ declare: 'idle' })
        //規格: 建構時之初值不發出訊號, 同值不重複
        assert.deepStrictEqual(await sigs(page), [])
        assert.deepStrictEqual(await page.evaluate(() => window.voSignals), [])
    })

    for (let declare of ['none', 'hidden']) {
        it(`變更訊號(vo${declare === 'none' ? '未' : '已'}宣告state): 一次開啟與關閉依序收到opening、opened、hidden, 訊號當下getState與訊號值一致`, async function() {
            let { page } = await openCase({ declare })
            await page.evaluate(() => window.open())
            await waitSignals(page, 2)
            await page.evaluate(() => window.close())
            await waitSignals(page, 3)
            //規格: opening -> opened -> hidden(關閉無過場, 不經hiding)
            assert.deepStrictEqual(await sigs(page), ['opening', 'opened', 'hidden'])
            //規格: 訊號與取值同源, 監聽器內getState()已為新值
            assert.deepStrictEqual(await page.evaluate(() => window.signals.map((v) => v.got)), ['opening', 'opened', 'hidden'])
            //規格: vo.$emit('state')同發一次, 內容相同
            assert.deepStrictEqual(await page.evaluate(() => window.voSignals), ['opening', 'opened', 'hidden'])
            assert.strictEqual(await page.evaluate(() => window.emitted.filter((v) => v === 'state').length), 3)
            //規格: 終態hidden
            assert.strictEqual(await page.evaluate(() => window.ev.getState()), 'hidden')
        })
    }

    it('變更訊號: opened之訊號到達時內層內容已靜止(opened為過場落定後), opening期間內層內容仍在變動', async function() {
        let { page } = await openCase({ declare: 'none' })
        await page.evaluate(() => {
            window.boxes = []
            window.ev.on('state', (s) => {
                let r = window.els.inner.getBoundingClientRect()
                window.boxes.push({ s, top: r.top, opacity: getComputedStyle(window.els.inner).opacity })
            })
            window.open()
        })
        await waitSignals(page, 2)
        let boxes = await page.evaluate(() => window.boxes)
        //規格: opening時內層內容尚未到達終值(opacity由0過場至1), opened時已到達
        assert.strictEqual(boxes[0].s, 'opening')
        assert.ok(Number(boxes[0].opacity) < 1, `opening時opacity應小於1, 實為${boxes[0].opacity}`)
        assert.strictEqual(boxes[1].s, 'opened')
        assert.strictEqual(Number(boxes[1].opacity), 1)
    })

    it('變更訊號: 開→關→再開, 每次變更各發一次, 同值不重複', async function() {
        let { page } = await openCase({ declare: 'none' })
        await page.evaluate(() => window.open())
        await waitSignals(page, 2)
        await page.evaluate(() => window.close())
        await waitSignals(page, 3)
        await page.evaluate(() => window.open())
        await waitSignals(page, 5)
        assert.deepStrictEqual(await sigs(page), ['opening', 'opened', 'hidden', 'opening', 'opened'])
    })

    it('寫入: vo已宣告state時同步寫入, 序列為建構之hidden, opening, opened, hidden', async function() {
        let { page } = await openCase({ declare: 'idle' })
        await page.evaluate(() => window.open())
        await waitSignals(page, 2)
        await page.evaluate(() => window.close())
        await waitSignals(page, 3)
        //規格: vo.state供樣板綁定, 與變更訊號同序, 另含建構時校正之一次hidden
        assert.deepStrictEqual(await page.evaluate(() => window.voWrites), ['hidden', 'opening', 'opened', 'hidden'])
        assert.strictEqual((await page.evaluate(() => window.info())).voState, 'hidden')
    })

    it('寫入: 以getState為準, 呼叫端外部改寫vo.state不影響其值, 下次變更時被覆寫', async function() {
        let { page } = await openCase({ declare: 'hidden' })
        await page.evaluate(() => {
            window.vo.state = 'tampered'
        })
        assert.strictEqual(await page.evaluate(() => window.ev.getState()), 'hidden')
        assert.strictEqual(await page.evaluate(() => window.vo.state), 'tampered')
        await page.evaluate(() => window.open())
        await waitSignals(page, 2)
        //規格: 寫入為單向輸出, 下次變更時以getState之值覆寫
        assert.strictEqual(await page.evaluate(() => window.vo.state), 'opened')
        assert.strictEqual(await page.evaluate(() => window.ev.getState()), 'opened')
    })

    it('開啟中即關閉: 依序opening、hidden, 其後不再出現opened', async function() {
        let { page } = await openCase({ declare: 'none' })
        await page.evaluate(() => {
            window.open()
        })
        await waitSignals(page, 1)
        await page.evaluate(() => window.close())
        await waitSignals(page, 2)
        assert.deepStrictEqual(await sigs(page), ['opening', 'hidden'])
        //否定斷言: 前次等待已作廢, 逾後備時間(transitionTime 200 + 300)仍不出現opened
        await page.waitForTimeout(900)
        assert.deepStrictEqual(await sigs(page), ['opening', 'hidden'])
        assert.strictEqual(await page.evaluate(() => window.ev.getState()), 'hidden')
    })

    it('監聽器拋錯: 不中斷過場追蹤(仍落定opened與hidden), 錯誤由console.error呈現, vo.$emit之訊號照發', async function() {
        let { page, logs } = await openCase({ declare: 'hidden', throwInListener: true })
        await page.evaluate(() => window.open())
        await waitSignals(page, 2)
        await page.evaluate(() => window.close())
        await waitSignals(page, 3)
        //規格: 訂閱者之例外不得使狀態停在過渡態
        assert.deepStrictEqual(await sigs(page), ['opening', 'opened', 'hidden'])
        assert.deepStrictEqual(await page.evaluate(() => window.voSignals), ['opening', 'opened', 'hidden'])
        assert.deepStrictEqual(await page.evaluate(() => window.voWrites), ['hidden', 'opening', 'opened', 'hidden'])
        //錯誤不被吞沒: 三次拋錯各有console.error
        let boom = logs.error.filter((t) => t.includes('listener-boom'))
        assert.strictEqual(boom.length, 3, `console.error應含三筆listener-boom, 實為${JSON.stringify(logs.error)}`)
        //彈出層本身照常運作: 開啟後內層內容可見
        await page.evaluate(() => window.open())
        await waitSignals(page, 5)
        assert.strictEqual(await page.evaluate(() => getComputedStyle(window.els.content).display), 'block')
    })

    it('必填鍵: state不在其列, 其餘必填鍵缺少時仍拋invalid vo.<key>', async function() {
        let { page } = await openCase({ declare: 'none' })
        for (let key of KEYS_REQUIRED) {
            let err = await page.evaluate((o) => window.tryBuild(o), { declare: 'none', omit: key })
            assert.strictEqual(err, `invalid vo.${key}`, `缺${key}應拋invalid vo.${key}, 實為${err}`)
        }
        //僅缺state(未宣告)不拋錯
        assert.strictEqual(await page.evaluate(() => window.tryBuild({ declare: 'none' })), null)
    })
})
