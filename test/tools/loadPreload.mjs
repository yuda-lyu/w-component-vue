//loadPreload.mjs: 負載試驗之預載模組, 由loadTrial以NODE_OPTIONS之--import載入測試行程(含mocha平行之各worker與測試所起之node子行程)
//  WSEMI_LT_LAG='L:P': 每P毫秒阻塞事件迴圈L毫秒(可重現之事件迴圈延遲); 計時器為unref, 不撐住行程, 亦不計入process.getActiveResourcesInfo
//  WSEMI_LT_PROBE=<資料夾>: 量測本行程之事件迴圈延遲(monitorEventLoopDelay), 每秒與結束時寫入<資料夾>/probe-<pid>.json, 作為負載之證據
import fs from 'fs'
import path from 'path'
import { monitorEventLoopDelay, performance } from 'perf_hooks'


let lag = process.env.WSEMI_LT_LAG
if (lag) {
    let [l, p] = lag.split(':').map(Number)
    let t = setInterval(() => {
        let tEnd = performance.now() + l
        while (performance.now() < tEnd) {
            //忙等, 阻塞事件迴圈l毫秒
        }
    }, p)
    t.unref()
}


let dir = process.env.WSEMI_LT_PROBE
if (dir) {
    let h = monitorEventLoopDelay({ resolution: 10 })
    h.enable()
    let fn = path.join(dir, `probe-${process.pid}.json`)
    let ms = (v) => Math.round(v / 1e4) / 100
    let save = () => {
        try {
            fs.mkdirSync(dir, { recursive: true })
            fs.writeFileSync(fn, JSON.stringify({ pid: process.pid, argv: process.argv.slice(1, 3), count: h.count, mean: ms(h.mean), p50: ms(h.percentile(50)), p99: ms(h.percentile(99)), max: ms(h.max) }))
        }
        catch (err) {
            //量測為輔助證據, 寫入失敗不影響測試
        }
    }
    let t = setInterval(save, 1000)
    t.unref()
    process.on('exit', save)
}
