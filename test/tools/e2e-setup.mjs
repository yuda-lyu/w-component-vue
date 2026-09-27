import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import launchChromium from 'w-package-tools-e2e/src/launchChromium.mjs'


//e2e-setup: 真瀏覽器測試之共用層, 以專案根目錄為cwd執行(npm test)
//  測試頁由webpack打包: 入口為test/tools/e2e-entry-*.mjs, 直接import src之指令與元件(.vue以@vue/vue-loader-v15編譯), 產物落test/_tmp/<名稱>/, 測後刪除
//  webpack與loader為@vue/cli-service之相依, 自其所在位置解析, 不依賴安裝時是否提升至根目錄; 根目錄之vue-loader為Vue 3用之17, 不可使用
//  頁面以setContent載入空白頁再注入bundle, 不需啟動伺服器


let projRoot = path.resolve('.')
let reqRoot = createRequire(path.join(projRoot, 'package.json'))
let reqCli = createRequire(reqRoot.resolve('@vue/cli-service/package.json'))


//bundleEntry, 打包入口檔, 回傳bundle之絕對路徑
async function bundleEntry(name, entry) {
    let webpack = reqCli('webpack')
    let { VueLoaderPlugin } = reqCli('@vue/vue-loader-v15')
    let outDir = path.join(projRoot, 'test', '_tmp', name)
    fs.rmSync(outDir, { recursive: true, force: true })
    let compiler = webpack({
        mode: 'development',
        devtool: false,
        context: projRoot,
        entry: path.resolve(projRoot, entry),
        output: {
            path: outDir,
            filename: 'bundle.js',
        },
        resolve: {
            alias: {
                vue$: reqRoot.resolve('vue/dist/vue.esm.js'), //含模板編譯器, 測試頁以template撰寫; 元件(.vue)內之import 'vue'亦指向同一份
            },
            modules: [path.join(projRoot, 'node_modules')],
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    resolve: {
                        fullySpecified: false, //src內有省略副檔名之深層引用(如@popperjs/core/lib/modifiers/computeStyles), .mjs預設須完整指定
                    },
                },
                {
                    test: /\.vue$/,
                    loader: reqCli.resolve('@vue/vue-loader-v15'),
                },
                {
                    test: /\.css$/,
                    use: [reqCli.resolve('vue-style-loader'), reqCli.resolve('css-loader')],
                },
            ],
        },
        plugins: [new VueLoaderPlugin()],
        performance: {
            hints: false,
        },
    })
    let stats = await new Promise((resolve, reject) => {
        compiler.run((err, st) => {
            compiler.close(() => {})
            if (err) {
                reject(err)
                return
            }
            resolve(st)
        })
    })
    let info = stats.toJson({ all: false, errors: true })
    if (info.errors.length > 0) {
        throw new Error(`bundle ${name} failed: ${info.errors.map((e) => e.message).join('\n').slice(0, 2000)}`)
    }
    return path.join(outDir, 'bundle.js')
}


//removeBundle, 刪除打包產物; test/_tmp已空時一併刪除(平行執行之其他檔尚在使用時保留)
function removeBundle(name) {
    let dir = path.join(projRoot, 'test', '_tmp')
    fs.rmSync(path.join(dir, name), { recursive: true, force: true })
    try {
        fs.rmdirSync(dir)
    }
    catch (err) {}
}


//launchBrowser, 全專案唯一launchChromium出口
async function launchBrowser() {
    //launchChromium, 缺Playwright指定版本之瀏覽器時首次啟動自動下載(與本機同版), 由w-package-tools-e2e提供
    return await launchChromium({ headless: true })
}


//openPage, 開新頁面並載入bundle; 收集console.warn、console.error、pageerror供斷言
async function openPage(browser, bundle, opt = {}) {
    let ctx = await browser.newContext({ viewport: opt.viewport || { width: 800, height: 600 } })
    let page = await ctx.newPage()
    let logs = { warn: [], error: [], pageerror: [] }
    page.on('console', (m) => {
        if (m.type() === 'warning') {
            logs.warn.push(m.text())
        }
        else if (m.type() === 'error') {
            logs.error.push(m.text())
        }
    })
    page.on('pageerror', (e) => {
        logs.pageerror.push(String(e && e.message))
    })
    await page.setContent('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;"></body></html>')
    await page.addScriptTag({ path: bundle })
    return { ctx, page, logs }
}


export {
    bundleEntry,
    removeBundle,
    launchBrowser,
    openPage
}
