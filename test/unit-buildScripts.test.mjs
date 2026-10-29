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


//lock, 使dir無法被清空(其下子資料夾sub刪不掉), 回傳{ ready, release }; ready為占用已成立之Promise, release為釋放(可重複呼叫)
//  Windows: 子行程以sub為工作目錄(Windows不可刪除他程序之當前目錄), 模擬檔案總管、終端機、防毒之占用
//    子行程啟動後輸出標記, ready於收到標記時解決(工作目錄於JS執行前即已設定, 見到標記即已占用); 懸置上限用真實計時器, 只防子行程起不來
//  其他平台: sub內放檔案並將sub設為唯讀, 其內檔案不可刪除; 同步完成, ready已解決
//  暫時性占用案由呼叫端於清空腳本確實因占用而失敗之後才呼叫release(見driveWatch), 不以計時器與腳本之啟動時間賽跑
function lock(dir) {
    let sub = path.join(dir, 'sub')
    fs.mkdirSync(sub, { recursive: true })
    if (isWin) {
        let h = cp.spawn(process.execPath, ['-e', `process.stdout.write('locked'); setTimeout(() => {}, 60000)`], { cwd: sub, stdio: ['ignore', 'pipe', 'ignore'] })
        let ready = new Promise((resolve, reject) => {
            let timer = setTimeout(() => reject(new Error('lock child not ready in 60s')), 60000)
            h.stdout.once('data', () => {
                clearTimeout(timer)
                resolve()
            })
            h.once('error', (err) => {
                clearTimeout(timer)
                reject(err)
            })
            h.once('exit', () => {
                clearTimeout(timer)
                reject(new Error('lock child exited before ready'))
            })
        })
        ready.catch(() => {}) //release先於ready被等待時不致成為未處理之rejection
        return {
            ready,
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
    return {
        ready: Promise.resolve(),
        release: async () => {
            try {
                fs.chmodSync(sub, 0o755)
            }
            catch (err) {}
        },
    }
}


//writeDrive, 於沙箱內寫入驅動腳本drive.mjs: 以toolg/cleanFolderStrict.mjs清空argv[2], 以單行JSON輸出成敗、耗時與清空後之內容
//  watch為true時另寫watch-fs.mjs並先於受測腳本載入: 包覆fs之刪除類函數, 首次因占用或權限而失敗時同步輸出標記行FS-BUSY,
//  供父行程知悉「占用已使第一次清空失敗」(同步寫fd 1, 輸出先於其後之重試等待)
function writeDrive(sbx, watch) {
    if (watch) {
        put(sbx, 'watch-fs.mjs', [
            `import fs from 'fs'`,
            `let busy = ['EBUSY', 'EPERM', 'ENOTEMPTY', 'EACCES']`,
            `let noted = false`,
            `for (let k of ['rmSync', 'rmdirSync', 'unlinkSync', 'renameSync']) {`,
            `    let f = fs[k]`,
            `    fs[k] = function(...args) {`,
            `        try {`,
            `            return f.apply(this, args)`,
            `        }`,
            `        catch (err) {`,
            `            if (!noted && busy.indexOf(err.code) >= 0) {`,
            `                noted = true`,
            `                fs.writeSync(1, 'FS-BUSY\\n')`,
            `            }`,
            `            throw err`,
            `        }`,
            `    }`,
            `}`,
            ``,
        ].join('\n'))
    }
    put(sbx, 'drive.mjs', [
        ...(watch ? [`import './watch-fs.mjs'`] : []),
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
}


//parseDrive, 取驅動腳本輸出之最後一行JSON
function parseDrive(stdout, stderr) {
    let line = stdout.trim().split(/\r?\n/).pop()
    assert.ok(line && line.startsWith('{'), `driver failed: ${stdout}${stderr}`.slice(0, 600))
    return JSON.parse(line)
}


//driveWatch, 非同步執行驅動腳本(watch版), 於其首次因占用而失敗時呼叫onBusy一次(此時占用確實已存在於第一次清空嘗試), 回傳驅動腳本之輸出
//  父行程之事件迴圈不被阻塞, 才能在驅動腳本重試等待期間釋放占用; 懸置上限用真實計時器(同run之170秒)
function driveWatch(sbx, target, onBusy) {
    writeDrive(sbx, true)
    return new Promise((resolve, reject) => {
        let h = cp.spawn(process.execPath, [path.join(sbx, 'drive.mjs'), target], { cwd: sbx, env: process.env, stdio: ['ignore', 'pipe', 'pipe'] })
        let stdout = ''
        let stderr = ''
        let busy = false
        let timer = setTimeout(() => {
            h.kill()
            reject(new Error(`driver timeout(170s): ${stdout}${stderr}`.slice(0, 600)))
        }, 170000)
        h.stdout.on('data', (d) => {
            stdout += d
            if (!busy && stdout.indexOf('FS-BUSY') >= 0) {
                busy = true
                Promise.resolve(onBusy()).catch(reject)
            }
        })
        h.stderr.on('data', (d) => {
            stderr += d
        })
        h.once('error', reject)
        h.once('close', () => {
            clearTimeout(timer)
            try {
                let o = parseDrive(stdout.replace(/^FS-BUSY\r?\n/m, ''), stderr)
                resolve({ ...o, busy })
            }
            catch (err) {
                reject(err)
            }
        })
    })
}


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
            writeDrive(sbx, false)
            let r = run(sbx, 'drive.mjs', { args: [target] })
            return parseDrive(r.stdout, r.stderr)
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

        it('目標為檔案時首次即拋錯(非占用類失敗不重試)', function() {
            let sbx = mkSbx('c-file')
            put(sbx, 'out', 'iam-a-file')
            let o = drive(sbx, 'out')
            //R-B2: 非占用類失敗(目標為檔案)即拋錯, 訊息含目標之絕對路徑
            assert.strict.equal(o.ok, false)
            assert.ok(o.msg.indexOf(path.join('c-file', 'out')) >= 0, o.msg)
            //R-B2: 錯誤取自w-package-tools cleanFolder之首次失敗, 不是本層重試耗盡後之訊息(以'cleanFolderStrict:'起頭)
            assert.ok(o.msg.startsWith('can not clean folder['), o.msg)
            //R-B2: 目標檔案不被改動
            assert.strict.equal(fs.readFileSync(path.join(sbx, 'out'), 'utf8'), 'iam-a-file')
        })

        it('目標不存在且無法建立(上層為檔案)時首次即拋錯(非占用類失敗不重試)', function() {
            let sbx = mkSbx('c-nocreate')
            put(sbx, 'afile', 'x')
            let o = drive(sbx, 'afile/sub')
            //R-B2: 無法建立(上層為檔案)為非占用類失敗, 仍須判為失敗並拋錯, 訊息含目標之絕對路徑
            assert.strict.equal(o.ok, false)
            assert.ok(o.msg.indexOf(path.join('c-nocreate', 'afile', 'sub')) >= 0, o.msg)
            //R-B2: 同上, 為首次失敗之錯誤, 不是本層重試耗盡後之訊息
            assert.ok(o.msg.startsWith('can not clean folder['), o.msg)
            //R-B2: 上層之檔案不被改動
            assert.strict.equal(fs.readFileSync(path.join(sbx, 'afile'), 'utf8'), 'x')
        })

        it('子資料夾持續無法刪除時重試後拋錯', async function() {
            if (!canLock) {
                this.skip() //以root執行時無法以唯讀造出刪除失敗
            }
            let sbx = mkSbx('c-locked')
            put(sbx, 'out/a.txt', 'a')
            let lk = lock(path.join(sbx, 'out'))
            try {
                await lk.ready
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
            let lk = lock(path.join(sbx, 'out'))
            try {
                await lk.ready
                //占用於清空腳本第一次嘗試因占用而失敗之後才釋放(事件閘門: 見到FS-BUSY標記), 其後之重試須成功
                let o = await driveWatch(sbx, 'out', () => lk.release())
                //R-B2: 第一次嘗試確實遇到占用(閘門事件), 重試使暫時性占用不致誤中止
                assert.ok(o.busy, 'first attempt met no occupation')
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
                await lk.ready
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
                await lk.ready
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
                await lk.ready
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
