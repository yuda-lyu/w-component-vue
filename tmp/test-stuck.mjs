let HOST = 'http://localhost:7000'

async function post(path, body) {
    let res = await fetch(HOST + path, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    })
    return res.json()
}

//共用: inline忠實複製wsemi domIsStable event核心(bLast初始false, 僅b變化才emit) + WDrawer的drawerStable/state/getStableDrawer/toggleValue
//moveAfterToggle=true代表toggleValue後drawer真的位移(正常); false代表不位移(邊角)
function makeScript(moveAfterToggle) {
    return `(async () => {
        let d = document.createElement('div')
        d.style.cssText = 'position:absolute; left:50px; top:0px; width:100px; height:50px; background:red; transition:transform 0.3s; transform:translateX(0px)'
        document.body.appendChild(d)

        let getRect = () => { let r = d.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height } }
        let same = (a, b) => Math.abs(a.x-b.x) <= 0 && Math.abs(a.y-b.y) <= 0 && Math.abs(a.w-b.w) <= 0 && Math.abs(a.h-b.h) <= 0
        let getAnims = () => { try { return d.getAnimations({ subtree: true }) } catch (e) { return [] } }

        //wsemi domIsStable event 的 core: 判當前是否穩定
        let core = async () => {
            let r1 = getRect()
            await new Promise((r) => setTimeout(r, 100))
            let r2 = getRect()
            let bRect = same(r1, r2)
            await Promise.allSettled(getAnims().map((a) => a.finished))
            let bAnim = getAnims().length === 0
            return bRect && bAnim
        }

        //WDrawer 狀態
        let state = 'hidden'
        let drawerStable = false
        let bLast = false   //directive(wsemi domIsStable)內部, 初始false
        let log = []

        //WDrawer.getStableDrawer
        let getStableDrawer = (b) => {
            drawerStable = b
            if (drawerStable) {
                if (state === 'opening') state = 'opened'
                else if (state === 'hiding') state = 'hidden'
            }
        }

        //directive 一次輪詢: 僅 bLast!==bNow 才 emit→getStableDrawer
        let tick = async () => {
            let bNow = await core()
            if (bLast !== bNow) {
                bLast = bNow
                getStableDrawer(bNow)
                log.push('emit stable=' + bNow + ' -> state=' + state + ', drawerStable=' + drawerStable)
            }
            else {
                log.push('no-emit (bNow=' + bNow + '===bLast) -> state=' + state + ', drawerStable=' + drawerStable)
            }
        }

        //1) directive create 後第一次偵測(靜止→b=true→emit true)
        await tick()

        //2) 模擬 toggleValue(true): state=opening, drawerStable=false(手動)
        state = 'opening'
        drawerStable = false
        log.push('toggleValue(true): state=opening, drawerStable=false(手動); directive bLast=' + bLast)
        ${moveAfterToggle ? "d.style.transform = 'translateX(150px)'  //真位移" : "//不位移: drawer維持原位"}

        //3) directive 後續輪詢
        for (let i = 0; i < 6; i++) {
            await tick()
        }

        return { finalState: state, finalDrawerStable: drawerStable, bLast, stuck: (state === 'opening'), log }
    })()`
}

await post('/chrome/open', { url: 'about:blank', mode: 'replace', opt: { deviceScaleFactor: 1 } })
let rA = await post('/chrome/evaluate', { script: makeScript(false) })
console.log('=== case A 不位移 ===')
console.log(JSON.stringify(rA.result || rA, null, 2))

await post('/chrome/open', { url: 'about:blank', mode: 'replace', opt: { deviceScaleFactor: 1 } })
let rB = await post('/chrome/evaluate', { script: makeScript(true) })
console.log('=== case B 位移 ===')
console.log(JSON.stringify(rB.result || rB, null, 2))
