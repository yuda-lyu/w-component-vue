import assert from 'assert'
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'
import wpw from 'w-playwright'
import { launchBrowser } from './tools/e2e-setup.mjs'


//unit-launchWiring: 測試用瀏覽器之啟動一律經w-playwright(規則帳本四: R-PW-ONLY、R-PW-WIRING)
//  啟動點全集: test/tools/e2e-setup.mjs之launchBrowser(7個測試檔皆經此出口); 本套件src無啟動點
//  替身: wpw.setBrowserTypeForTest(使用端之launchBrowser與本檔皆取同一份w-playwright主檔, 替身對兩者同時有效)
//  A、C案不啟動任何瀏覽器; B案以next()走真路徑, 只啟動headless shell(無頭預設; 不觸發Chromium之登入呼叫)


let projRoot = path.resolve('.')
let nameDir = 'launchWiring'
let dirTmp = path.join(projRoot, 'test', '_tmp', nameDir)


//runChild, 以cwd=專案根起子行程執行腳本, 回傳其stdout最後一行之JSON
function runChild(fp, env) {
    return new Promise((resolve, reject) => {
        let envUse = { ...process.env, ...env }
        for (let k of ['PWDEBUG', 'SELENIUM_REMOTE_URL', 'npm_config_pwdebug', 'npm_package_config_pwdebug']) {
            delete envUse[k]
        }
        let cp = spawn(process.execPath, [fp], { cwd: projRoot, env: envUse, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] })
        let out = ''
        let err = ''
        let timer = setTimeout(() => {
            cp.kill()
        }, 120000)
        cp.stdout.on('data', (d) => {
            out += d
        })
        cp.stderr.on('data', (d) => {
            err += d
        })
        cp.on('error', (e) => {
            clearTimeout(timer)
            reject(e)
        })
        cp.on('close', (code) => {
            clearTimeout(timer)
            let lines = out.split(/\r?\n/).filter((s) => s !== '')
            try {
                resolve(JSON.parse(lines[lines.length - 1]))
            }
            catch (e) {
                reject(new Error(`child exit=${code} stdout=${out.slice(-300)} stderr=${err.slice(-300)}`))
            }
        })
    })
}


describe('unit-launchWiring', function() {

    let info = wpw.getPlaywrightInfo()
    let GUARD = info.guardFeatures[0]

    after(function() {
        fs.rmSync(dirTmp, { recursive: true, force: true })
        try {
            fs.rmdirSync(path.join(projRoot, 'test', '_tmp'))
        }
        catch (err) {}
    })

    it('A: launchBrowser經w-playwright啟動, 替身被呼叫且送出之選項含守門(args最後一個元素為恰一串之--disable-features, 含守門功能與Playwright預設)', async function() {
        //R-PW-WIRING: 每個啟動點送出之選項含守門, 並斷言替身之呼叫次數>0(未經w-playwright時替身不會被呼叫)
        let stub = { stub: true }
        let seen = []
        let restore = wpw.setBrowserTypeForTest({
            launch: async (o) => {
                seen.push(o)
                return stub
            },
        })
        let b = null
        try {
            b = await launchBrowser()
        }
        finally {
            restore()
            if (b && b !== stub && typeof b.close === 'function') {
                await b.close() //未經w-playwright時真啟動了瀏覽器(此案將於下方斷言轉紅), 先關閉
            }
        }
        assert.strict.deepStrictEqual(seen.length, 1)
        assert.strict.deepStrictEqual(b, stub)
        let o = seen[0]
        let args = o.args
        assert.strict.deepStrictEqual(Array.isArray(args), true)
        let dis = args.filter((s) => /^--disable-features(=|$)/i.test(s))
        assert.strict.deepStrictEqual(dis.length, 1)
        let last = args[args.length - 1]
        assert.strict.deepStrictEqual(last, dis[0])
        assert.strict.deepStrictEqual(last.startsWith('--disable-features='), true)
        let feats = last.slice('--disable-features='.length).split(',')
        assert.strict.deepStrictEqual(feats.includes(GUARD), true)
        for (let f of info.defaultDisableFeatures) {
            assert.strict.deepStrictEqual(feats.includes(f), true)
        }
        //原選項(headless: true)保留; 自用鍵autoInstall已由w-playwright取用, 不轉傳給Playwright
        assert.strict.deepStrictEqual(o.headless, true)
        assert.strict.deepStrictEqual('autoInstall' in o, false)
    })

    it('B: launchBrowser經替身之next()走真路徑, 啟動headless shell並可載入頁面', async function() {
        //不用替身遮住接縫: 替身只記錄選項並交給next()走完整真流程
        let seen = []
        let restore = wpw.setBrowserTypeForTest({
            launch: async (o, next) => {
                seen.push(o)
                return await next()
            },
        })
        let b = null
        try {
            b = await launchBrowser()
            let page = await b.newPage()
            await page.setContent('<div id="a">ok</div>')
            assert.strict.deepStrictEqual(await page.evaluate(() => document.getElementById('a').textContent), 'ok')
            assert.strict.deepStrictEqual(typeof b.version(), 'string')
        }
        finally {
            restore()
            if (b) {
                await b.close()
            }
        }
        assert.strict.deepStrictEqual(seen.length, 1)
        let last = seen[0].args[seen[0].args.length - 1]
        assert.strict.deepStrictEqual(last.startsWith('--disable-features='), true)
        assert.strict.deepStrictEqual(last.includes(GUARD), true)
    })

    it('C: 受管瀏覽器缺檔時launchBrowser自動安裝(autoInstall: true, 與改前w-package-tools-e2e之首次啟動自動下載一致); 以無法下載之位址證明走安裝而非E_BROWSER_MISSING', async function() {
        //下載主機指向無人監聽之位址, 安裝必失敗(E_INSTALL); 若未給autoInstall則為E_BROWSER_MISSING; 不下載、不啟動瀏覽器
        let dirBrowsers = path.join(dirTmp, 'browsers')
        fs.mkdirSync(dirBrowsers, { recursive: true })
        let r = await runChild(path.join(projRoot, 'test', 'tools', 'runLaunchBrowserMissing.mjs'), {
            PLAYWRIGHT_BROWSERS_PATH: dirBrowsers,
            PLAYWRIGHT_DOWNLOAD_HOST: 'http://127.0.0.1:9',
        })
        assert.strict.deepStrictEqual(r, { launched: false, code: 'E_INSTALL' })
    })

})
