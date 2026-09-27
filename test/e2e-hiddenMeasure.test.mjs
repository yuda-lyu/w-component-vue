import assert from 'assert'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'


//e2e-hiddenMeasure: 原則「隱藏期間之操作, 顯示後之結果須與可見時操作一致」之真瀏覽器測試
//  測試頁(test/tools/e2e-entry-hiddenMeasure.mjs)以真src打包WDynamicList、WTree、WTextarea、WListExpand, 元件置於可隱藏(display:none)之容器內
//  每個案例一個全新瀏覽器, 內含兩條路徑各一個頁面: 可見時操作, 與隱藏→操作→顯示(或初始即隱藏再顯示); 操作一律點頁面按鈕
//  斷言兩條路徑之使用者所見版面(元件外框、捲動區之捲動總高、未被裁切之各元素之相對位置與尺寸)完全相同;
//  虛擬列表於捲動區視窗外預先渲染之列數隨刷新時序而異(可見時換資料因setRows期間之上鎖略過後續刷新而停在較寬之預載範圍), 使用者看不到, 不列入比對;
//  WTextarea、WListExpand另斷言內容未被裁切或溢出(自動高度須等於內容高度), 否則兩條路徑同錯亦會相同
//  WDynamicList不驗「初始即隱藏」: 虛擬列表未渲染列之高度為估計值, 可見時載入之過渡版面(原生捲軸寬度確定前)量得之列高移出範圍後即不再量測, 載入路徑不同則估計值不同(另案)


let NAME = 'e2e-hiddenMeasure'


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        bundle = await bundleEntry(NAME, 'test/tools/e2e-entry-hiddenMeasure.mjs')
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

    //waitStable, 版面連續5次(每150ms)相同才回傳, 列表之量測與重算需數個回合
    let waitStable = async (page) => {
        let prev = ''
        let same = 0
        let t0 = Date.now()
        while (Date.now() - t0 < 10000) {
            await page.waitForTimeout(150)
            let g = JSON.stringify(await page.evaluate(() => window.geom()))
            if (g === prev) {
                same++
                if (same >= 5) {
                    break
                }
            }
            else {
                same = 0
            }
            prev = g
        }
        return JSON.parse(prev)
    }

    //runPath, 開頁掛載情境(opt.hidden為初始即隱藏), 穩定後依序點按鈕, 回傳穩定後之版面與頁面錯誤
    let runPath = async (cs, acts, opt = {}) => {
        let { ctx, page, logs } = await openPage(browser, bundle, { viewport: { width: 900, height: 900 } })
        await page.evaluate(([n, o]) => window.mountCase(n, o), [cs, opt])
        await waitStable(page)
        for (let a of acts) {
            await page.getByRole('button', { name: a, exact: true }).click()
            await page.waitForTimeout(200)
        }
        let g = await waitStable(page)
        await ctx.close()
        return { g, pageerror: logs.pageerror }
    }

    //compare, 兩條路徑之版面須完全相同, 且皆無頁面錯誤; 回傳可見路徑之版面供另加斷言
    let compare = async (cs, actsVisible, actsHidden, optHidden = {}) => {
        let a = await runPath(cs, actsVisible)
        let b = await runPath(cs, actsHidden, optHidden)
        assert.strict.deepStrictEqual([a.pageerror, b.pageerror], [[], []])
        assert.ok(a.g && a.g.els.length > 0, 'empty geom')
        assert.strict.deepStrictEqual(b.g, a.g)
        return a.g
    }

    //noClip, 除捲動區外無內容超出其框之元素(自動高度等於內容高度); 捲動區為WPanelScrolly系之殼層與原生捲軸寬度偵測區
    let noClip = (g) => {
        return g.overflows.filter((o) => o[0] === 'TEXTAREA' || /\bct\b/.test(o[1]))
    }

    describe('WDynamicList', function() {

        it('隱藏→縮窄→顯示, 與直接縮窄相同', async function() {
            await compare('dynamiclist', ['縮窄'], ['隱藏', '縮窄', '顯示'])
        })

        it('隱藏→顯示, 與不動相同', async function() {
            await compare('dynamiclist', [], ['隱藏', '顯示'])
        })

        it('隱藏→換資料→顯示, 與可見時換資料相同', async function() {
            await compare('dynamiclist', ['換資料'], ['隱藏', '換資料', '顯示'])
        })

        it('prop show關閉→換資料→開啟, 與可見時換資料相同', async function() {
            await compare('dynamiclist', ['換資料'], ['關閉顯示', '換資料', '開啟顯示'])
        })

        it('換資料後立即隱藏(落在量測等待期間)→顯示, 與可見時換資料相同', async function() {
            await compare('dynamiclist', ['換資料'], ['換資料並隱藏', '顯示'])
        })

    })

    describe('WTree', function() {

        it('隱藏→縮窄→顯示, 與直接縮窄相同', async function() {
            await compare('tree', ['縮窄'], ['隱藏', '縮窄', '顯示'])
        })

        it('隱藏→換資料→顯示, 與可見時換資料相同', async function() {
            await compare('tree', ['換資料'], ['隱藏', '換資料', '顯示'])
        })

    })

    describe('WTextarea', function() {

        it('隱藏→改值→顯示, 與可見時改值相同, 且高度等於內容高度', async function() {
            let g = await compare('textarea', ['改值'], ['隱藏', '改值', '顯示'])
            assert.strict.deepStrictEqual(noClip(g), [])
        })

        it('隱藏→縮窄→顯示, 與直接縮窄相同, 且縮窄後高度隨換行增加', async function() {
            let g = await compare('textarea', ['縮窄'], ['隱藏', '縮窄', '顯示'])
            assert.strict.deepStrictEqual(noClip(g), [])
        })

        it('初始隱藏再顯示, 與可見時載入相同', async function() {
            let g = await compare('textarea', [], ['顯示'], { hidden: true })
            assert.strict.deepStrictEqual(noClip(g), [])
        })

    })

    describe('WListExpand', function() {

        it('隱藏→展開→顯示, 與可見時展開相同, 且展開高度等於內容高度', async function() {
            let g = await compare('listexpand', ['展開第2項'], ['隱藏', '展開第2項', '顯示'])
            assert.strict.deepStrictEqual(noClip(g), [])
        })

        it('展開後隱藏→縮窄→顯示, 與展開後直接縮窄相同, 且展開高度隨換行增加', async function() {
            let g = await compare('listexpand', ['展開第2項', '縮窄'], ['展開第2項', '隱藏', '縮窄', '顯示'])
            assert.strict.deepStrictEqual(noClip(g), [])
        })

    })

})
