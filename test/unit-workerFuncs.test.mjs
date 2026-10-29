import fs from 'fs'
import path from 'path'
import assert from 'assert'
import { bundleEntry, removeBundle, launchBrowser, openPage } from './tools/e2e-setup.mjs'
import { genCases } from './tools/workerFuncsCases.mjs'


//unit-workerFuncs: 受追蹤之worker產物之功能契約(帳本「一、建置腳本」R-B3)
//  worker產物以blob URL建立Web Worker, 只能於瀏覽器執行, 故以真Chromium(test/tools/e2e-setup.mjs之唯一launch出口)載入;
//  呼叫為函數層級(page.evaluate), 非使用者操作, 故屬unit-而非e2e-
//  測試頁由webpack打包: 入口於before內寫入test/_tmp(import產物、wsemi之非worker版與共用案例表), 以setContent載入, 不起伺服器
//  每個案例一個全新瀏覽器: worker版與非worker版各以新產生之輸入呼叫, 斷言結果深度相等(含鍵順序), 呼叫結束後無殘留worker、無頁面錯誤
//  分辨力驗證用: 環境變數W_WORKER_DIR可改由他處取worker產物(預設為受追蹤之src/js), 不改動src/js


let NAME = 'unit-workerFuncs'
let root = path.resolve('.')
let fdWorker = path.resolve(process.env.W_WORKER_DIR || 'src/js')
let fdEntry = path.resolve('test/_tmp', `${NAME}-entry`)


//rel, 入口檔至目標之相對import路徑(webpack以/為分隔)
function rel(fp) {
    let r = path.relative(fdEntry, fp).replace(/\\/g, '/')
    return r.startsWith('.') ? r : `./${r}`
}


function writeEntry() {
    let c = `
import { genCases, deepEqual, keyOrder } from '${rel(path.join(root, 'test/tools/workerFuncsCases.mjs'))}'
import convertToTree from 'wsemi/src/convertToTree.mjs'
import flattenTree from 'wsemi/src/flattenTree.mjs'
import convertToTreeWk from '${rel(path.join(fdWorker, 'convertToTreeWk.wk.umd.js'))}'
import flattenTreeWk from '${rel(path.join(fdWorker, 'flattenTreeWk.wk.umd.js'))}'

window.__t = {
    genCases,
    deepEqual,
    keyOrder,
    ref: { convertToTree, flattenTree },
    wk: { convertToTree: convertToTreeWk, flattenTree: flattenTreeWk },
}
`
    fs.mkdirSync(fdEntry, { recursive: true })
    let fp = path.join(fdEntry, 'entry.mjs')
    fs.writeFileSync(fp, c, 'utf8')
    return fp
}


describe(NAME, function() {
    this.timeout(180000)

    let bundle = ''
    before(async function() {
        this.timeout(600000)
        bundle = await bundleEntry(NAME, writeEntry())
    })
    after(function() {
        fs.rmSync(fdEntry, { recursive: true, force: true })
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

    for (let cs of genCases()) {
        it(`${cs.name}: worker版與非worker版結果深度相等且鍵順序相同, 呼叫後無殘留worker`, async function() {
            let { ctx, page, logs } = await openPage(browser, bundle)

            //worker之建立與終止以頁面事件追蹤(Playwright之worker事件與Worker之close事件), 不以固定等待判斷是否已終止
            let made = []
            page.on('worker', (w) => {
                made.push(new Promise((resolve) => w.once('close', resolve)))
            })

            let r = await page.evaluate(async (name) => {
                let t = window.__t
                let a = t.genCases().find((v) => v.name === name)
                let b = t.genCases().find((v) => v.name === name)
                let out = { status: '', err: '', equal: false, keyOrderEqual: false }
                let vWk
                try {
                    vWk = await Promise.race([
                        t.wk[a.fn](a.data, a.opt),
                        new Promise((resolve, reject) => setTimeout(() => reject(new Error('timeout(60s)')), 60000)),
                    ])
                    out.status = 'resolved'
                }
                catch (err) {
                    out.status = 'rejected'
                    out.err = String((err && err.message) || err)
                    return out
                }
                let vRef = t.ref[b.fn](b.data, b.opt)
                out.equal = t.deepEqual(vWk, vRef)
                out.keyOrderEqual = t.keyOrder(vWk) === t.keyOrder(vRef)
                return out
            }, cs.name)

            //R-B3: 可結構化複製之輸入, worker版須照常回傳(不reject、不懸置)
            assert.strict.equal(r.status, 'resolved', `worker rejected: ${r.err}`)
            //R-B3: 結果與非worker版深度相等
            assert.ok(r.equal, 'worker result differs from non-worker result')
            //R-B3: 鍵順序相同(元件依鍵順序顯示)
            assert.ok(r.keyOrderEqual, 'key order differs from non-worker result')

            //R-B3: 一般呼叫結束後不殘留worker(每次呼叫新建並於結束時中止): 等呼叫所建立之worker皆發出close事件, 其後頁面不再有worker
            //  防懸置上限(worker未終止即永遠等不到close)用真實計時器, 只防懸置, 逾時即判殘留
            let timer = null
            let st = await Promise.race([
                Promise.all(made).then(() => 'closed'),
                new Promise((resolve) => {
                    timer = setTimeout(() => resolve('timeout'), 30000)
                }),
            ])
            clearTimeout(timer)
            assert.ok(made.length >= 1, 'worker version created no worker')
            assert.strict.equal(st, 'closed', 'worker left running after the call')
            assert.strict.equal(page.workers().length, 0)

            assert.strict.deepEqual(logs.pageerror, [])
            await ctx.close()
        })
    }

})
