//traceKit: 觀察回調(opt.onTrace)之測試紀錄器, 供計時器相關函數之測試以事件而非等待時間同步(規格: 計時器相關函數之觀察回調與測試)
//  mkTrace()回傳{ fn, events, of, until }: fn為交給被測物之onTrace; events為已收到之事件(依序); of(type)取該類型之事件; until(pred, label)等到pred(events)成立
//  until之防懸置上限用模組載入時保存之真實計時器(假時鐘下亦有效), 上限只防懸置, 不表達規格; 逾時時拋錯並附已收到之事件, 不重試
//  until之續行於onTrace回調返回後的microtask執行: 被測物於回調之後同步完成之動作(如trace('emit')之後的ev.emit)續行時已完成


let realSetTimeout = setTimeout
let realClearTimeout = clearTimeout


function mkTrace(opt = {}) {
    let limit = opt.limit || 30000
    let events = []
    let waiters = []

    let fn = (e) => {
        events.push(e)
        for (let w of waiters.slice()) {
            if (w.pred(events)) {
                waiters.splice(waiters.indexOf(w), 1)
                realClearTimeout(w.timer)
                w.resolve(e)
            }
        }
    }

    let of = (type) => {
        return events.filter((e) => e.type === type)
    }

    //until, 已成立則立即解決, 否則等到成立; 解決值為使其成立之事件(已成立者為null)
    let until = (pred, label = '') => {
        if (pred(events)) {
            return Promise.resolve(null)
        }
        return new Promise((resolve, reject) => {
            let w = { pred, resolve, timer: null }
            w.timer = realSetTimeout(() => {
                waiters.splice(waiters.indexOf(w), 1)
                reject(new Error(`trace wait timeout(${limit}ms): ${label}, events=${JSON.stringify(events.map((e) => ({ ...e })))}`.slice(0, 2000)))
            }, limit)
            waiters.push(w)
        })
    }

    return { fn, events, of, until }
}


//count, 事件中符合type之筆數(預設不限type)
function count(events, type = null) {
    return events.filter((e) => type === null || e.type === type).length
}


export { mkTrace, count }
