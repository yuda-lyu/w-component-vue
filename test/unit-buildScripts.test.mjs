import fs from 'fs'
import path from 'path'
import cp from 'child_process'
import assert from 'assert'
import { root, put, patch, list, mkSbx as mkSbxIn, run, rmBase } from './tools/buildSandbox.mjs'


//unit-buildScripts: script.txt所執行之建置腳本之失敗回報契約(帳本「一、建置腳本」R-B1、R-EXIT、R-B2)
//  每案於test/_tmp/unit-buildScripts/<案>/建沙箱, 複製toolg全部檔與所需最小輸入, 以沙箱為cwd用子行程執行腳本(沙箱共用層見test/tools/buildSandbox.mjs)
//  只斷言發布流程可觀察之結果: 離開碼、stderr之失敗原因、產物是否寫出; 離開碼不依賴Node之unhandled-rejections模式(R-EXIT另以warn模式驗)
//  清空失敗以lock模擬: Windows以子行程之工作目錄占住子資料夾, 其他平台以唯讀子資料夾; 以root執行時無法模擬, 該等案例略過
//  分辨力驗證用: 環境變數W_TOOLG_DIR可改由他處複製toolg(預設為工作區之toolg), 不改動工作區


let NAME = 'unit-buildScripts'
let fdBase = path.resolve('test/_tmp', NAME)
let isWin = process.platform === 'win32'
let canLock = isWin || !(typeof process.getuid === 'function' && process.getuid() === 0)
let OLD = '//old product\n'

let vueOk = `<template>\r\n    <div class="x">ok</div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: 'x',\r\n    data: function() {\r\n        return { a: 1 }\r\n    },\r\n}\r\n</script>\r\n`
let vueBad = vueOk.replace('return { a: 1 }', 'return { a: 1 ')


let mkSbx = (name) => mkSbxIn(fdBase, name)


function waitExit(h) {
    if (!h || h.exitCode !== null || h.signalCode !== null) {
        return Promise.resolve()
    }
    return new Promise((resolve) => h.once('exit', resolve))
}


//lock, 使dir無法被清空(其下子資料夾sub刪不掉), 回傳{ release }; ms>0時於ms後自行解除
//  解除由另一行程執行: 執行腳本之spawnSync期間本行程之計時器不會觸發
//  Windows: 子行程以sub為工作目錄(Windows不可刪除他程序之當前目錄), 模擬檔案總管、終端機、防毒之占用
//  其他平台: sub內放檔案並將sub設為唯讀, 其內檔案不可刪除
function lock(dir, ms = 0) {
    let sub = path.join(dir, 'sub')
    fs.mkdirSync(sub, { recursive: true })
    if (isWin) {
        let h = cp.spawn(process.execPath, ['-e', `setTimeout(() => {}, ${ms || 60000})`], { cwd: sub, stdio: 'ignore' })
        return {
            release: async () => {
                let p = waitExit(h)
                if (h.exitCode === null && h.signalCode === null) {
                    h.kill()
                }
                await p
            },
        }
    }
    fs.writeFileSync(path.join(sub, 'locked.txt'), 'x')
    fs.chmodSync(sub, 0o555)
    let h = null
    if (ms > 0) {
        h = cp.spawn(process.execPath, ['-e', `setTimeout(() => require('fs').chmodSync(${JSON.stringify(sub)}, 0o755), ${ms})`], { stdio: 'ignore' })
    }
    return {
        release: async () => {
            await waitExit(h)
            try {
                fs.chmodSync(sub, 0o755)
            }
            catch (err) {}
        },
    }
}


let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


describe(NAME, function() {
    this.timeout(180000)

    after(function() {
        rmBase(fdBase)
    })


    describe('第7列 gDistRollupWorkerFuncs(R-B1、R-EXIT)', function() {

        let fpWorker = 'toolg/gDistRollupWorkerFuncs.mjs'
        let names = ['convertToTreeWk', 'flattenTreeWk']

        //mkWorkerSbx, 來源取自工作區src/js(不受本測試改動), 產物位置先放舊內容以辨識是否被改寫
        let mkWorkerSbx = (name) => {
            let sbx = mkSbx(name)
            for (let n of names) {
                put(sbx, `src/js/${n}.mjs`, fs.readFileSync(path.join(root, 'src/js', `${n}.mjs`)))
                put(sbx, `src/js/${n}.wk.umd.js`, OLD)
            }
            return sbx
        }

        it('產製成功時離開碼為0, 兩個產物皆改寫為具預設匯出之ES module, 輸出不含invalid runin', function() {
            let sbx = mkWorkerSbx('w-ok')
            let r = run(sbx, fpWorker)
            //R-B1: 成功即0
            assert.strict.equal(r.code, 0, r.stdout + r.stderr)
            //R-B1: 產物寫出(不再是舊內容), 為ES module且有預設匯出(WJsonView、WTree以import default引用)
            for (let n of names) {
                let c = fs.readFileSync(path.join(sbx, `src/js/${n}.wk.umd.js`), 'utf8')
                assert.notStrictEqual(c, OLD, `${n} not rewritten`)
                assert.ok(/export\s*\{\s*[\w$]+\s+as\s+default\s*\}/.test(c), `${n} has no default export`)
            }
            //成功路徑不印錯誤字樣(明給runin)
            assert.ok((r.stdout + r.stderr).indexOf('invalid runin') < 0, 'prints invalid runin')
        })

        let fails = [
            {
                name: '來源不存在',
                set: (sbx) => fs.rmSync(path.join(sbx, 'src/js/convertToTreeWk.mjs')),
                reason: 'opt.fpSrc is not file',
            },
            {
                name: '來源語法錯誤',
                set: (sbx) => patch(sbx, 'src/js/flattenTreeWk.mjs', (c) => c + '\nlet = ;\n'),
                reason: 'SyntaxError',
            },
            {
                name: '來源無預設匯出',
                set: (sbx) => patch(sbx, 'src/js/convertToTreeWk.mjs', (c) => c.replace('export default convertToTreeWk', 'export { convertToTreeWk }')),
                reason: 'has no default export',
            },
            {
                name: '來源引用不存在之相對路徑檔',
                set: (sbx) => patch(sbx, 'src/js/convertToTreeWk.mjs', (c) => `import nx from './notExist.mjs'\nconsole.log(nx)\n` + c),
                reason: 'Could not resolve',
            },
            {
                name: '產物路徑為資料夾',
                set: (sbx) => {
                    fs.rmSync(path.join(sbx, 'src/js/convertToTreeWk.wk.umd.js'))
                    fs.mkdirSync(path.join(sbx, 'src/js/convertToTreeWk.wk.umd.js'))
                },
                reason: 'EISDIR',
            },
        ]

        for (let k = 0; k < fails.length; k++) {
            let f = fails[k]
            it(`${f.name}時離開碼非0, 且stderr含失敗原因`, function() {
                let sbx = mkWorkerSbx(`w-fail-${k}`)
                f.set(sbx)
                let r = run(sbx, fpWorker)
                //R-B1: 失敗即非0
                assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
                //R-B1: 失敗原因印至stderr
                assert.ok(r.stderr.indexOf(f.reason) >= 0, `stderr lacks [${f.reason}]: ${r.stderr.slice(0, 500)}`)
            })
        }

        for (let k of [0, 1]) {
            let f = fails[k]
            it(`${f.name}時於NODE_OPTIONS=--unhandled-rejections=warn下離開碼亦非0`, function() {
                let sbx = mkWorkerSbx(`w-warn-${k}`)
                f.set(sbx)
                let r = run(sbx, fpWorker, { env: { NODE_OPTIONS: '--unhandled-rejections=warn' } })
                //R-EXIT: 離開碼不依賴unhandled-rejections模式
                assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
            })
        }

    })


    describe('cleanFolderStrict(R-B2)', function() {

        //drive, 於沙箱內以子行程呼叫toolg/cleanFolderStrict.mjs清空指定路徑, 回傳成敗、耗時與清空後之內容
        let drive = (sbx, target) => {
            put(sbx, 'drive.mjs', [
                `import fs from 'fs'`,
                `import cleanFolderStrict from './toolg/cleanFolderStrict.mjs'`,
                `let fd = process.argv[2]`,
                `let out = { ok: false, msg: '', ms: 0, entries: null }`,
                `let t0 = Date.now()`,
                `try {`,
                `    cleanFolderStrict(fd)`,
                `    out.ok = true`,
                `}`,
                `catch (err) {`,
                `    out.msg = String((err && err.message) || err)`,
                `}`,
                `out.ms = Date.now() - t0`,
                `out.entries = fs.existsSync(fd) && fs.statSync(fd).isDirectory() ? fs.readdirSync(fd) : null`,
                `console.log(JSON.stringify(out))`,
                ``,
            ].join('\n'))
            let r = run(sbx, 'drive.mjs', { args: [target] })
            let line = r.stdout.trim().split(/\r?\n/).pop()
            assert.ok(line && line.startsWith('{'), `driver failed: ${r.stdout}${r.stderr}`.slice(0, 600))
            return JSON.parse(line)
        }

        it('可清空時回傳, 資料夾存在且為空', function() {
            let sbx = mkSbx('c-ok')
            put(sbx, 'out/a.txt', 'a')
            put(sbx, 'out/sub/b.txt', 'b')
            let o = drive(sbx, 'out')
            assert.ok(o.ok, o.msg)
            assert.strict.deepEqual(o.entries, [])
        })

        it('資料夾不存在時建立為空資料夾', function() {
            let sbx = mkSbx('c-new')
            let o = drive(sbx, 'out')
            assert.ok(o.ok, o.msg)
            assert.strict.deepEqual(o.entries, [])
        })

        it('目標為檔案時重試後拋錯', function() {
            let sbx = mkSbx('c-file')
            put(sbx, 'out', 'iam-a-file')
            let o = drive(sbx, 'out')
            //R-B2: 非success即拋錯, 訊息含目標
            assert.strict.equal(o.ok, false)
            assert.ok(o.msg.indexOf('out') >= 0, o.msg)
            //R-B2: 拋錯前重試10次、間隔300ms
            assert.ok(o.ms >= 2700, `retried only ${o.ms}ms`)
        })

        it('目標不存在且無法建立(上層為檔案)時重試後拋錯', function() {
            let sbx = mkSbx('c-nocreate')
            put(sbx, 'afile', 'x')
            let o = drive(sbx, 'afile/sub')
            //R-B2: 內附wsemip於此分支回傳裸Error(無error鍵), 仍須判為失敗
            assert.strict.equal(o.ok, false)
            assert.ok(o.ms >= 2700, `retried only ${o.ms}ms`)
        })

        it('子資料夾持續無法刪除時重試後拋錯', async function() {
            if (!canLock) {
                this.skip() //以root執行時無法以唯讀造出刪除失敗
            }
            let sbx = mkSbx('c-locked')
            put(sbx, 'out/a.txt', 'a')
            let lk = lock(path.join(sbx, 'out'))
            try {
                await sleep(500)
                let o = drive(sbx, 'out')
                assert.strict.equal(o.ok, false)
                assert.ok(o.ms >= 2700, `retried only ${o.ms}ms`)
            }
            finally {
                await lk.release()
            }
        })

        it('暫時無法刪除而於重試期間解除時清空成功', async function() {
            if (!canLock) {
                this.skip()
            }
            let sbx = mkSbx('c-transient')
            put(sbx, 'out/a.txt', 'a')
            let lk = lock(path.join(sbx, 'out'), 1200)
            try {
                await sleep(500)
                let o = drive(sbx, 'out')
                //R-B2: 重試使暫時性占用不致誤中止
                assert.ok(o.ok, o.msg)
                assert.strict.deepEqual(o.entries, [])
                assert.ok(o.ms >= 300, `no retry happened (${o.ms}ms)`)
            }
            finally {
                await lk.release()
            }
        })

    })


    describe('第4列 cleanFolder(R-B2)', function() {

        it('dist與docs皆可清空時離開碼為0, 兩者皆為空資料夾', function() {
            let sbx = mkSbx('l4-ok')
            put(sbx, 'dist/a.txt', 'a')
            put(sbx, 'dist/sub/b.txt', 'b')
            put(sbx, 'docs/c.html', 'c')
            put(sbx, 'docs/sub2/d.html', 'd')
            let r = run(sbx, 'toolg/cleanFolder.mjs')
            assert.strict.equal(r.code, 0, r.stdout + r.stderr)
            assert.strict.deepEqual([list(sbx, 'dist'), list(sbx, 'docs')], [[], []])
        })

        it('dist為檔案時離開碼非0, 且stderr含dist', function() {
            let sbx = mkSbx('l4-file')
            put(sbx, 'dist', 'iam-a-file')
            let r = run(sbx, 'toolg/cleanFolder.mjs')
            //R-B2: 清空失敗即非0, 原因印出
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
            assert.ok(r.stderr.indexOf('dist') >= 0, r.stderr.slice(0, 500))
        })

        it('dist內子資料夾無法刪除而清空不了時離開碼非0', async function() {
            if (!canLock) {
                this.skip()
            }
            let sbx = mkSbx('l4-locked')
            put(sbx, 'dist/a.txt', 'a')
            put(sbx, 'dist/zz-stale.txt', 'stale')
            put(sbx, 'docs/c.html', 'c')
            let lk = lock(path.join(sbx, 'dist'))
            try {
                await sleep(500)
                let r = run(sbx, 'toolg/cleanFolder.mjs')
                assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
            }
            finally {
                await lk.release()
            }
        })

    })


    describe('第11列 gExtractHtml(R-B2)', function() {

        let mkExtractSbx = (name) => {
            let sbx = mkSbx(name)
            put(sbx, 'src/AppZoneWBadge.vue', fs.readFileSync(path.join(root, 'src/AppZoneWBadge.vue')))
            return sbx
        }

        it('可清空時離開碼為0, 舊頁不殘留且範例頁皆產出', function() {
            let sbx = mkExtractSbx('l11-ok')
            put(sbx, 'test-html/zz-stale.html', 'stale')
            let r = run(sbx, 'toolg/gExtractHtml.mjs')
            assert.strict.equal(r.code, 0, r.stdout + r.stderr)
            let hs = list(sbx, 'test-html')
            assert.ok(hs.indexOf('zz-stale.html') < 0, 'stale page remains')
            assert.ok(hs.length > 0 && hs.every((f) => f.startsWith('w-badge_')), JSON.stringify(hs))
        })

        it('test-html內子資料夾無法刪除而清空不了時離開碼非0', async function() {
            if (!canLock) {
                this.skip()
            }
            let sbx = mkExtractSbx('l11-html-locked')
            put(sbx, 'test-html/zz-stale.html', 'stale')
            let lk = lock(path.join(sbx, 'test-html'))
            try {
                await sleep(500)
                let r = run(sbx, 'toolg/gExtractHtml.mjs')
                //R-B2: 清空失敗即非0, 不以殘留之舊頁續行(第12列會把test-html全部複製進docs/examples)
                assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
            }
            finally {
                await lk.release()
            }
        })

        it('範例頁寫檔失敗時離開碼非0, 且stderr含失敗原因; 於NODE_OPTIONS=--unhandled-rejections=warn下亦非0(R-B1、R-EXIT)', function() {
            //casename含路徑分隔字元使範例頁之寫入路徑不存在; extractHtml為async, 其內寫檔失敗為rejected promise, 離開碼不得依賴unhandled-rejections模式
            let sbx = mkExtractSbx('l11-write-fail')
            patch(sbx, 'src/AppZoneWBadge.vue', (c) => c.replace(`:casename="'badgeAlign'"`, `:casename="'a/b'"`))
            for (let env of [{}, { NODE_OPTIONS: '--unhandled-rejections=warn' }]) {
                let r = run(sbx, 'toolg/gExtractHtml.mjs', { env })
                assert.notStrictEqual(r.code, 0, JSON.stringify(env) + r.stdout + r.stderr)
                assert.ok(r.stderr.indexOf('ENOENT') >= 0, JSON.stringify(env) + r.stderr)
            }
        })

        it('test-action內子資料夾無法刪除而清空不了時離開碼非0', async function() {
            if (!canLock) {
                this.skip()
            }
            let sbx = mkExtractSbx('l11-action-locked')
            put(sbx, 'test-action/zz-stale.action.json', '[]')
            let lk = lock(path.join(sbx, 'test-action'))
            try {
                await sleep(500)
                let r = run(sbx, 'toolg/gExtractHtml.mjs')
                assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
            }
            finally {
                await lk.release()
            }
        })

    })


    describe('兄弟列之回歸守門(R-B1)', function() {

        it('第2列 modifyReadme: README.md不存在時離開碼非0', function() {
            let sbx = mkSbx('s2')
            let r = run(sbx, 'toolg/modifyReadme.mjs')
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第9列 gDistApp: App.vue語法錯誤時離開碼非0', function() {
            let sbx = mkSbx('s9')
            put(sbx, 'src/App.vue', vueBad)
            let r = run(sbx, 'toolg/gDistApp.mjs')
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第9列 gDistApp: App.vue語法錯誤時於NODE_OPTIONS=--unhandled-rejections=warn下離開碼亦非0(R-EXIT)', function() {
            //rollupVueToHtml為async, 失敗為rejected promise, 離開碼不得依賴unhandled-rejections模式
            let sbx = mkSbx('s9-warn')
            put(sbx, 'src/App.vue', vueBad)
            let r = run(sbx, 'toolg/gDistApp.mjs', { env: { NODE_OPTIONS: '--unhandled-rejections=warn' } })
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第11列 gExtractHtml: AppZone檔無template時離開碼非0', function() {
            let sbx = mkSbx('s11')
            put(sbx, 'src/AppZoneWBroken.vue', '<script>\r\nexport default {}\r\n</script>\r\n')
            let r = run(sbx, 'toolg/gExtractHtml.mjs')
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第12列 gDocExams: test-html不存在時離開碼非0', function() {
            let sbx = mkSbx('s12')
            fs.mkdirSync(path.join(sbx, 'docs'), { recursive: true }) //前列已建立docs
            let r = run(sbx, 'toolg/gDocExams.mjs')
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第14列 gMergeComps: src/components不存在時離開碼非0', function() {
            let sbx = mkSbx('s14')
            fs.mkdirSync(path.join(sbx, 'src'), { recursive: true })
            let r = run(sbx, 'toolg/gMergeComps.mjs')
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第15列 gDistRollupComps: 元件語法錯誤時離開碼非0', function() {
            let sbx = mkSbx('s15')
            put(sbx, 'src/components/WComponentVue.vue', vueBad)
            let r = run(sbx, 'toolg/gDistRollupComps.mjs')
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第15列 gDistRollupComps: 元件語法錯誤時於NODE_OPTIONS=--unhandled-rejections=warn下離開碼亦非0(R-EXIT)', function() {
            //rollupFiles為async, 失敗為rejected promise, 離開碼不得依賴unhandled-rejections模式
            let sbx = mkSbx('s15-warn')
            put(sbx, 'src/components/WComponentVue.vue', vueBad)
            let r = run(sbx, 'toolg/gDistRollupComps.mjs', { env: { NODE_OPTIONS: '--unhandled-rejections=warn' } })
            assert.notStrictEqual(r.code, 0, r.stdout + r.stderr)
        })

        it('第15列 gDistRollupComps: 建置成功時離開碼為0, 輸出不含invalid runin', function() {
            let sbx = mkSbx('s15-ok')
            put(sbx, 'src/components/WComponentVue.vue', vueOk)
            let r = run(sbx, 'toolg/gDistRollupComps.mjs')
            assert.strict.equal(r.code, 0, r.stdout + r.stderr)
            assert.ok(fs.existsSync(path.join(sbx, 'dist/w-component-vue.umd.js')), 'dist not written')
            //成功路徑不印錯誤字樣(明給runin)
            assert.ok((r.stdout + r.stderr).indexOf('invalid runin') < 0, 'prints invalid runin')
        })

    })


    describe('暫存檔不入版控', function() {

        it('w-package-tools於cwd寫入之temp-*暫存檔被.gitignore排除', function() {
            //rollupCode於cwd寫入temp-<id>-<name>.js, 行程中止或刪除失敗時殘留, 不得被git add . -A提交
            let r = cp.spawnSync('git', ['check-ignore', '-q', 'temp-0123abcd-convertToTreeWk.js'], { cwd: root })
            assert.strict.equal(r.status, 0)
        })

    })

})
