import assert from 'assert'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'


//e2e-explorerError: WExplorer轉換items失敗時之錯誤處理(真瀏覽器, 真src打包WExplorer)
//  規格(Gitea: 使用端回報, 2026-11-14裁定): wsemi 1.9.60起filepathToTree遇無效項目、重複路徑、資料夾與檔案同名、路徑段含分隔符號時拋出明確錯誤(固定詞彙+第幾個項目, 不含路徑);
//    WExplorer須將此錯誤以error事件交給父元件; 父元件未監聽error時改以console.error輸出一行錯誤訊息; 資料有效時畫面與行為不變
//  測試頁: test/tools/e2e-entry-explorerError.mjs(window.mountCase、window.setItems、window.errors、window.pageText)
//  本檔只驗WExplorer之錯誤處理接線, 各種無效輸入之判定本身由wsemi之filepathToTree負責, 此處各取一例作為觸發


let NAME = 'e2e-explorerError'

//有效資料, 渲染後頁面文字含資料夾名data與檔名
let ITEMS_OK = [
    { type: 'folder', path: '/data' },
    { type: 'file', path: '/data/one.txt' },
    { type: 'file', path: '/data/two.txt' },
]

//另一份有效資料, 供失敗後復原案例
let ITEMS_OK2 = [
    { type: 'folder', path: '/other' },
    { type: 'file', path: '/other/three.txt' },
]

//各種無效輸入(各對應wsemi 1.9.60之一種拋錯情形), secret為路徑中之特有字串, 錯誤訊息與console.error不得含之
let CASES_BAD = [
    {
        name: '路徑重複',
        secret: 'secretDupName',
        items: [
            { type: 'file', path: '/data/secretDupName.txt' },
            { type: 'file', path: '/data/secretDupName.txt' },
        ],
    },
    {
        name: '資料夾與檔案同名',
        secret: 'secretSameName',
        items: [
            { type: 'folder', path: '/data/secretSameName' },
            { type: 'file', path: '/data/secretSameName' },
        ],
    },
    {
        name: '項目缺type',
        secret: 'secretNoType',
        items: [
            { path: '/data/secretNoType.txt' },
        ],
    },
    {
        name: '路徑段含分隔符號',
        secret: 'secretDelim',
        items: [
            { type: 'file', path: '/data/secretDelim❯x.txt' },
        ],
    },
    {
        name: '項目非物件',
        secret: 'secretNotObj',
        items: [
            'secretNotObj',
        ],
    },
]


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        //E2E_SRC_DIR: 分辨力驗證用, 改由修前副本或變異副本之src打包(不改動工作區)
        bundle = await bundleEntry(NAME, 'test/tools/e2e-entry-explorerError.mjs', { srcDir: process.env.E2E_SRC_DIR || undefined })
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

    //openCase, 開頁並掛載WExplorer
    let openCase = async (cfg) => {
        let { page, logs } = await openPage(browser, bundle, { viewport: { width: 900, height: 500 } })
        await page.evaluate((c) => window.mountCase(c), cfg)
        return { page, logs }
    }

    //waitText, 等頁面文字含指定字串(WExplorer已渲染該份items)
    let waitText = async (page, text) => {
        await page.waitForFunction((t) => {
            try {
                return window.pageText().includes(t)
            }
            catch (err) {
                return false
            }
        }, text, { timeout: 10000 })
    }

    //waitErrors, 等父層收到n個error事件
    let waitErrors = async (page, n) => {
        await page.waitForFunction((k) => window.errors.length >= k, n, { timeout: 10000 })
    }

    //flush, 以一次往返確保此前之console與pageerror事件皆已送達(CDP事件依序送達, 先於後續evaluate之回應)
    let flush = async (page) => {
        await page.evaluate(() => 0)
    }

    //explorerErrors, 取WExplorer輸出之console.error(以'WExplorer: '開頭者), 排除Vue開發版警告等他處輸出
    let explorerErrors = (logs) => {
        return logs.error.filter((s) => s.startsWith('WExplorer: '))
    }

    describe('資料有效時行為不變', function() {

        //spec: 資料有效時不發射error事件、不輸出console.error, 畫面照常渲染
        it('有監聽error: 照常渲染, 無error事件, 無console.error, 無pageerror', async function() {
            let { page, logs } = await openCase({ items: ITEMS_OK, listen: true })
            await waitText(page, 'data')
            await flush(page)
            assert.strictEqual(await page.evaluate(() => window.errors.length), 0)
            assert.deepStrictEqual(explorerErrors(logs), [])
            assert.deepStrictEqual(logs.pageerror, [])
        })

        it('未監聽error: 照常渲染, 無console.error, 無pageerror', async function() {
            let { page, logs } = await openCase({ items: ITEMS_OK, listen: false })
            await waitText(page, 'data')
            await flush(page)
            assert.deepStrictEqual(explorerErrors(logs), [])
            assert.deepStrictEqual(logs.pageerror, [])
        })

    })

    describe('轉換失敗: 父元件有監聽error', function() {

        for (let c of CASES_BAD) {

            //spec: 轉換失敗時發射error事件, 帶出Error物件, message指出第幾個項目且不含路徑; 父元件已接收故不輸出console.error
            it(`${c.name}: 發射1次error事件(Error物件, 指出第幾個項目, 不含路徑), 不輸出console.error`, async function() {
                let { page, logs } = await openCase({ items: c.items, listen: true })
                await waitErrors(page, 1)
                await flush(page)
                let errs = await page.evaluate(() => window.errors)
                assert.strictEqual(errs.length, 1)
                assert.strictEqual(errs[0].isError, true)
                assert.ok(/^invalid fps\[\d+\]/.test(errs[0].message), errs[0].message)
                assert.ok(!errs[0].message.includes(c.secret), errs[0].message)
                assert.deepStrictEqual(explorerErrors(logs), [])
                assert.deepStrictEqual(logs.pageerror, [])
            })

        }

    })

    describe('轉換失敗: 父元件未監聽error', function() {

        for (let c of CASES_BAD) {

            //spec: 父元件未接收error事件時, 改以console.error輸出一行錯誤訊息(單行, 含錯誤原文, 不含路徑), 不拋出未處理之例外
            it(`${c.name}: 輸出1行console.error(含錯誤原文, 不含路徑), 無pageerror`, async function() {
                let { page, logs } = await openCase({ items: c.items, listen: false })
                let t0 = Date.now()
                while (explorerErrors(logs).length < 1 && Date.now() - t0 < 10000) {
                    await page.waitForTimeout(50)
                }
                await flush(page)
                let es = explorerErrors(logs)
                assert.strictEqual(es.length, 1, JSON.stringify(logs.error))
                assert.ok(!es[0].includes('\n'), es[0])
                assert.ok(/^WExplorer: invalid fps\[\d+\]/.test(es[0]), es[0])
                assert.ok(!es[0].includes(c.secret), es[0])
                assert.deepStrictEqual(logs.pageerror, [])
            })

        }

    })

    describe('資料更新', function() {

        //spec: 渲染後items變為無效時發射error事件, 畫面維持上一次成功轉換之結果; 之後items改回有效即恢復渲染, 不再有新的error事件
        it('有效 → 無效 → 有效: 失敗時發射1次error並維持畫面, 恢復後渲染新資料且無新error', async function() {
            let { page, logs } = await openCase({ items: ITEMS_OK, listen: true })
            await waitText(page, 'data')

            //有效 → 無效
            await page.evaluate((v) => window.setItems(v), CASES_BAD[0].items)
            await waitErrors(page, 1)
            await flush(page)
            assert.strictEqual(await page.evaluate(() => window.errors.length), 1)
            assert.ok((await page.evaluate(() => window.pageText())).includes('data'), '失敗時應維持上一次成功轉換之畫面')

            //無效 → 有效
            await page.evaluate((v) => window.setItems(v), ITEMS_OK2)
            await waitText(page, 'other')
            await flush(page)
            assert.strictEqual(await page.evaluate(() => window.errors.length), 1)
            assert.deepStrictEqual(explorerErrors(logs), [])
            assert.deepStrictEqual(logs.pageerror, [])
        })

    })

})
