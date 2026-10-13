import fs from 'fs'
import cleanFolder from 'w-package-tools/src/cleanFolder.mjs'


//cleanFolderStrict: 清空資料夾(不存在則建立), 失敗時重試, 仍失敗即拋錯, 供建置腳本清空dist、docs、test-html、test-action
//  w-package-tools之cleanFolder(內附wsemip之fsCleanFolder)失敗時不拋錯而回傳結果, 且形狀不一: 多為{ error }, 無法建立時為裸Error, 故以「非success」判定失敗
//  重試比照w-pksupdate之removeTarget(10次、間隔300ms), Windows之防毒、索引、檔案總管等暫時性占用不致誤中止
//  同步執行(以Atomics.wait等待), 呼叫端維持同步; 拋錯即未捕捉例外, 腳本以離開碼1結束, 不依賴unhandled-rejections模式


let retries = 10
let delay = 300


function sleepSync(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}


function isEmptyFolder(fd) {
    try {
        return fs.statSync(fd).isDirectory() && fs.readdirSync(fd).length === 0
    }
    catch (err) {
        return false
    }
}


function getMsg(r) {
    if (r instanceof Error) {
        return r.message
    }
    if (r && r.error !== undefined) {
        return (r.error && r.error.message) || String(r.error)
    }
    if (r && r.success) {
        return 'folder is not empty after cleaning'
    }
    return String(r)
}


function cleanFolderStrict(fd) {
    let r = null
    for (let i = 0; i <= retries; i++) {
        if (i > 0) {
            sleepSync(delay)
        }
        r = cleanFolder(fd)
        if (r && r.success && isEmptyFolder(fd)) {
            return r
        }
    }
    throw new Error(`cleanFolderStrict: can not clean folder[${fd}] after ${retries} retries: ${getMsg(r)}`)
}


export default cleanFolderStrict
