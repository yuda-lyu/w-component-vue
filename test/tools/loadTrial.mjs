//loadTrial.mjs: 負載試驗, 於人為負載下重複執行同一批mocha測試並統計各案失敗率, 用以找出依真實時間而於高負載時不穩之測試
//  負載有兩種, 可併用:
//  1.--burners N: 起N個CPU壓力行程與測試行程爭用CPU(建議N為邏輯核數), 近於多套件同時測試之實況, 延遲之大小不可控
//  2.--lag L:P: 於各測試行程每P毫秒阻塞事件迴圈L毫秒(見loadPreload.mjs), 延遲可重現
//  各測試行程之事件迴圈延遲另以monitorEventLoopDelay量測, 列於摘要作為負載之證據
//用法: node test/tools/loadTrial.mjs --out <資料夾> [--runs K] [--burners N] [--lag L:P] [--burn-max 秒] [--cwd 資料夾] -- <mocha參數...>
//  --cwd: 於他處(如git archive解出之舊版副本)執行mocha, mocha取自本檔往上之node_modules
//  例: node test/tools/loadTrial.mjs --out test/_tmp/loadTrial --runs 5 --burners 8 -- --no-parallel test/domDetect.test.mjs --timeout 180000
//  各輪之json報告、輸出與延遲量測存於<資料夾>, 摘要存<資料夾>/summary.json; 離開碼: 各輪皆無失敗為0, 否則1
//  壓力行程於結束(含例外)時終止並以PID回驗, 另各自於父行程消失或逾--burn-max秒時自行結束, 不殘留
import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'
import { fileURLToPath, pathToFileURL } from 'url'


let fnSelf = fileURLToPath(import.meta.url)
let fnPreload = path.join(path.dirname(fnSelf), 'loadPreload.mjs')


//burn, 壓力行程: 每50ms讓出一次事件迴圈以檢查父行程是否仍在與是否逾時
function burn(ppid, msMax) {
    let tEnd = Date.now() + msMax
    let step = () => {
        let t = Date.now() + 50
        while (Date.now() < t) {
            //忙等, 占用CPU
        }
        if (Date.now() > tEnd) {
            process.exit(0)
        }
        try {
            process.kill(ppid, 0)
        }
        catch (err) {
            process.exit(0)
        }
        setImmediate(step)
    }
    step()
}


function isAlive(pid) {
    try {
        process.kill(pid, 0)
        return true
    }
    catch (err) {
        return err.code === 'EPERM'
    }
}


function parseArgs(argv) {
    let i = argv.indexOf('--')
    let own = i >= 0 ? argv.slice(0, i) : argv
    let mochaArgs = i >= 0 ? argv.slice(i + 1) : []
    let opt = { runs: 1, burners: 0, lag: '', burnMax: 3600, out: '', cwd: '' }
    for (let k = 0; k < own.length; k += 2) {
        let key = own[k]
        let v = own[k + 1]
        if (key === '--runs') {
            opt.runs = Number(v)
        }
        else if (key === '--burners') {
            opt.burners = Number(v)
        }
        else if (key === '--lag') {
            opt.lag = v
        }
        else if (key === '--burn-max') {
            opt.burnMax = Number(v)
        }
        else if (key === '--out') {
            opt.out = v
        }
        else if (key === '--cwd') {
            opt.cwd = v
        }
        else {
            throw new Error(`unknown option ${key}`)
        }
    }
    if (!opt.out) {
        throw new Error('--out is required')
    }
    if (opt.lag && !/^\d+:\d+$/.test(opt.lag)) {
        throw new Error(`invalid --lag ${opt.lag}, use L:P`)
    }
    if (mochaArgs.length === 0) {
        throw new Error('mocha arguments are required after --')
    }
    return { opt, mochaArgs }
}


//findMocha, 自本檔所在資料夾往上找node_modules內之mocha, 供--cwd為無node_modules之副本(如git archive解出之舊版)時使用
function findMocha() {
    let dir = path.dirname(fnSelf)
    for (;;) {
        let fn = path.join(dir, 'node_modules', 'mocha', 'bin', 'mocha.js')
        if (fs.existsSync(fn)) {
            return fn
        }
        let up = path.dirname(dir)
        if (up === dir) {
            throw new Error('mocha not found')
        }
        dir = up
    }
}


function runMocha(args, env, fnLog, cwd) {
    return new Promise((resolve) => {
        let fd = fs.openSync(fnLog, 'w')
        let cp = spawn(process.execPath, args, { cwd, env, windowsHide: true, stdio: ['ignore', fd, fd] })
        cp.on('error', (err) => {
            fs.closeSync(fd)
            resolve({ code: -1, error: err.message })
        })
        cp.on('close', (code, signal) => {
            fs.closeSync(fd)
            resolve({ code, signal })
        })
    })
}


function readProbes(dir) {
    if (!fs.existsSync(dir)) {
        return []
    }
    return fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => {
        try {
            return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))
        }
        catch (err) {
            return null
        }
    }).filter((p) => p && p.count > 0)
}


async function stopBurners(pids) {
    for (let pid of pids) {
        try {
            process.kill(pid)
        }
        catch (err) {
            //已自行結束
        }
    }
    let t0 = Date.now()
    while (pids.some(isAlive) && Date.now() - t0 < 5000) {
        await new Promise((resolve) => setTimeout(resolve, 100))
    }
    return pids.map((pid) => ({ pid, alive: isAlive(pid) }))
}


async function main() {
    let { opt, mochaArgs } = parseArgs(process.argv.slice(2))
    let out = path.resolve(opt.out)
    fs.mkdirSync(out, { recursive: true })
    console.log(`out: ${out}`)
    let cwd = path.resolve(opt.cwd || '.')
    if (opt.cwd) {
        console.log(`cwd: ${cwd}`)
    }
    let fnMocha = findMocha()

    //burners
    let pids = []
    for (let k = 0; k < opt.burners; k++) {
        let cp = spawn(process.execPath, [fnSelf, '--burn', String(process.pid), String(opt.burnMax * 1000)], { windowsHide: true, stdio: 'ignore' })
        pids.push(cp.pid)
    }
    if (pids.length > 0) {
        console.log(`burners: ${pids.join(',')}`)
    }

    let runs = []
    let byCase = new Map()
    let burnersAfter = []
    try {
        for (let k = 1; k <= opt.runs; k++) {
            let fnJson = path.join(out, `run${k}.json`)
            let dirProbe = path.join(out, `probe${k}`)
            let env = { ...process.env }
            env.NODE_OPTIONS = `${env.NODE_OPTIONS || ''} --import=${pathToFileURL(fnPreload).href}`.trim()
            env.WSEMI_LT_PROBE = dirProbe
            if (opt.lag) {
                env.WSEMI_LT_LAG = opt.lag
            }
            else {
                delete env.WSEMI_LT_LAG
            }
            if (fs.existsSync(fnJson)) {
                fs.unlinkSync(fnJson)
            }
            let t0 = Date.now()
            let rc = await runMocha([fnMocha, ...mochaArgs, '--reporter', 'json', '--reporter-option', `output=${fnJson}`], env, path.join(out, `run${k}.log`), cwd)
            let ms = Date.now() - t0
            let r = { run: k, code: rc.code, ms, passes: null, failures: null, pending: null, failed: [] }
            if (fs.existsSync(fnJson)) {
                let j = JSON.parse(fs.readFileSync(fnJson, 'utf8'))
                r.passes = j.stats.passes
                r.failures = j.stats.failures
                r.pending = j.stats.pending
                for (let f of j.failures) {
                    let key = `${path.basename(f.file || '')} :: ${f.fullTitle}`
                    r.failed.push({ key, msg: String((f.err && f.err.message) || '').split('\n')[0].slice(0, 200) })
                    byCase.set(key, (byCase.get(key) || 0) + 1)
                }
            }
            else {
                r.failed.push({ key: '(no json report)', msg: `mocha exited ${rc.code}` })
                byCase.set('(no json report)', (byCase.get('(no json report)') || 0) + 1)
            }
            let probes = readProbes(dirProbe)
            //量測值為取樣間隔(10ms)加延遲, 且Windows計時器之系統刻度約15.6ms, 無負載時p50約15.6ms
            r.lag = {
                procs: probes.length,
                p50Max: probes.reduce((m, p) => Math.max(m, p.p50), 0),
                p99Max: probes.reduce((m, p) => Math.max(m, p.p99), 0),
                max: probes.reduce((m, p) => Math.max(m, p.max), 0),
            }
            runs.push(r)
            console.log(`run${k}: code=${r.code} passes=${r.passes} failures=${r.failures} pending=${r.pending} ms=${ms} lag(p50Max=${r.lag.p50Max}ms, p99Max=${r.lag.p99Max}ms, max=${r.lag.max}ms, procs=${r.lag.procs})`)
            for (let f of r.failed) {
                console.log(`  FAIL ${f.key}: ${f.msg}`)
            }
        }
    }
    finally {
        burnersAfter = await stopBurners(pids)
    }

    let summary = {
        opt,
        mochaArgs,
        runs,
        failRate: Array.from(byCase.entries()).map(([key, n]) => ({ key, n, of: opt.runs })),
        burnersAfter,
    }
    fs.writeFileSync(path.join(out, 'summary.json'), JSON.stringify(summary, null, 2))
    console.log(`fail rate: ${summary.failRate.length === 0 ? 'none' : ''}`)
    for (let f of summary.failRate) {
        console.log(`  ${f.n}/${f.of} ${f.key}`)
    }
    if (pids.length > 0) {
        console.log(`burners after: ${burnersAfter.map((b) => `${b.pid}:${b.alive ? 'ALIVE' : 'gone'}`).join(',')}`)
    }
    let ok = runs.every((r) => r.failures === 0 && r.code === 0) && burnersAfter.every((b) => !b.alive)
    process.exitCode = ok ? 0 : 1
}


if (process.argv[2] === '--burn') {
    burn(Number(process.argv[3]), Number(process.argv[4]))
}
else {
    main().catch((err) => {
        console.log(err)
        process.exitCode = 1
    })
}
