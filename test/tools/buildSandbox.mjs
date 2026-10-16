import fs from 'fs'
import path from 'path'
import cp from 'child_process'


//buildSandbox: 建置腳本沙箱之共用層(unit-buildScripts、unit-exampleNames)
//  每案於test/_tmp/<測試檔>/<案>/建沙箱, 複製toolg全部檔(src/components/demolink.vue等亦引用toolg)與package.json(rollupFile讀取banner)
//  以沙箱為cwd用子行程執行腳本(同w-pksupdate以套件根目錄為cwd逐列執行), 腳本之裸import(w-package-tools、wsemi、lodash-es等)向上解析至repo之node_modules
//  分辨力驗證用: 環境變數W_TOOLG_DIR可改由他處複製toolg(預設為工作區之toolg), 不改動工作區


let root = path.resolve('.')
let fdToolg = path.resolve(process.env.W_TOOLG_DIR || 'toolg')
let pkgJson = fs.readFileSync(path.join(root, 'package.json'))


function put(sbx, rel, content) {
    let fp = path.join(sbx, rel)
    fs.mkdirSync(path.dirname(fp), { recursive: true })
    fs.writeFileSync(fp, content)
}


function patch(sbx, rel, fn) {
    let fp = path.join(sbx, rel)
    fs.writeFileSync(fp, fn(fs.readFileSync(fp, 'utf8')))
}


function list(sbx, rel) {
    let fp = path.join(sbx, rel)
    return fs.existsSync(fp) && fs.statSync(fp).isDirectory() ? fs.readdirSync(fp) : null
}


//mkSbx, 於fdBase下建立案例沙箱
function mkSbx(fdBase, name) {
    let sbx = path.join(fdBase, name)
    fs.rmSync(sbx, { recursive: true, force: true })
    fs.mkdirSync(path.join(sbx, 'toolg'), { recursive: true })
    for (let f of fs.readdirSync(fdToolg)) {
        fs.copyFileSync(path.join(fdToolg, f), path.join(sbx, 'toolg', f))
    }
    put(sbx, 'package.json', pkgJson)
    return sbx
}


//run, 以沙箱為cwd執行沙箱內之腳本, 回傳離開碼與兩串流
function run(sbx, rel, opt = {}) {
    let r = cp.spawnSync(process.execPath, [path.join(sbx, rel), ...(opt.args || [])], {
        cwd: sbx,
        encoding: 'utf8',
        env: { ...process.env, ...(opt.env || {}) },
        timeout: 170000,
    })
    return { code: r.status, stdout: r.stdout || '', stderr: r.stderr || '' }
}


//rmBase, 刪除測試檔之沙箱根; test/_tmp於平行執行之其他檔尚在使用時保留
function rmBase(fdBase) {
    fs.rmSync(fdBase, { recursive: true, force: true })
    try {
        fs.rmdirSync(path.resolve('test/_tmp'))
    }
    catch (err) {}
}


export { root, fdToolg, put, patch, list, mkSbx, run, rmBase }
