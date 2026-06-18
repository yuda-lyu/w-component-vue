let HOST = 'http://localhost:7000'

async function post(path, body) {
    let res = await fetch(HOST + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    return res.json()
}

//真正跑transform transition: 觸發位移後, 用tolerance=0間隔100ms比對8輪, 看動畫中bRect=false、結束後bRect=true
let script = `(async () => {
    let d = document.createElement('div')
    d.style.cssText = 'position:absolute; left:0px; top:0px; width:100px; height:50px; background:blue; transition:transform 0.3s cubic-bezier(.25,.8,.5,1); transform:translateX(0px)'
    document.body.appendChild(d)
    let getRect = () => { let r = d.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height } }
    let same = (a, b) => Math.abs(a.x-b.x) <= 0 && Math.abs(a.y-b.y) <= 0 && Math.abs(a.w-b.w) <= 0 && Math.abs(a.h-b.h) <= 0
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    d.style.transform = 'translateX(133.33px)'
    let rounds = []
    for (let i = 0; i < 8; i++) {
        let r1 = getRect()
        await new Promise((r) => setTimeout(r, 100))
        let r2 = getRect()
        rounds.push({ ms: i*100, r1x: Math.round(r1.x*1000)/1000, r2x: Math.round(r2.x*1000)/1000, bRect: same(r1, r2) })
    }
    return { dpr: window.devicePixelRatio, rounds }
})()`

await post('/chrome/open', { url: 'about:blank', mode: 'replace', opt: { deviceScaleFactor: 1.25 } })
let r = await post('/chrome/evaluate', { script })
console.log(JSON.stringify(r.result || r, null, 2))
