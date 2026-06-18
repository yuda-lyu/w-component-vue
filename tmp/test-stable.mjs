let HOST = 'http://localhost:7000'

async function post(path, body) {
    let res = await fetch(HOST + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    return res.json()
}

//測試script: 建一個sub-pixel佈局的靜止元素, 用tolerance=0的sameRect間隔100ms連續比對6輪
let script = `(async () => {
    let d = document.createElement('div')
    d.style.cssText = 'position:absolute; left:33.33px; top:11.11px; width:101.7px; height:51.3px; background:red'
    document.body.appendChild(d)
    let getRect = () => { let r = d.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height } }
    let same = (a, b) => Math.abs(a.x-b.x) <= 0 && Math.abs(a.y-b.y) <= 0 && Math.abs(a.w-b.w) <= 0 && Math.abs(a.h-b.h) <= 0
    let rounds = []
    for (let i = 0; i < 6; i++) {
        let r1 = getRect()
        await new Promise((r) => setTimeout(r, 100))
        let r2 = getRect()
        rounds.push({ r1x: r1.x, r2x: r2.x, r1w: r1.w, r2w: r2.w, bRect: same(r1, r2) })
    }
    return {
        dpr: window.devicePixelRatio,
        everStable: rounds.some((r) => r.bRect),
        allStable: rounds.every((r) => r.bRect),
        first: rounds[0],
    }
})()`

for (let dpr of [1, 1.25, 1.5, 2]) {
    let o = await post('/chrome/open', { url: 'about:blank', mode: 'replace', opt: { deviceScaleFactor: dpr } })
    let r = await post('/chrome/evaluate', { script })
    console.log(`requested dpr=${dpr} | openOk=${o.ok} | result=`, JSON.stringify(r.result || r))
}
