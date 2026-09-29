import Vue from 'vue'
import WDynamicList from '../../src/components/WDynamicList.vue'
import WTree from '../../src/components/WTree.vue'
import WTextarea from '../../src/components/WTextarea.vue'
import WListExpand from '../../src/components/WListExpand.vue'


//e2e-entry-hiddenMeasure: 「隱藏期間之操作, 顯示後之結果須與可見時操作一致」之真瀏覽器測試頁
//  每個情境將元件置於可隱藏(display:none)之容器內, 以頁面上之按鈕操作(縮窄、改值、換資料、展開、隱藏、顯示)
//  window.mountCase(name, opt)掛載情境(opt.hidden為初始即隱藏), window.geom()回傳使用者所見之版面(元件外框、內容超出其框之元素之捲動總高、元件內各元素之相對位置與尺寸)供比對


Vue.config.productionTip = false
Vue.config.devtools = false


//genText, 長短不一之文字, 寬度改變時換行數不同而列高不同
function genText(i) {
    let words = []
    let n = 3 + ((i * 7) % 23)
    for (let k = 0; k < n; k++) {
        words.push(`w${i}-${k}`)
    }
    return words.join(' ')
}

let rows1 = []
let rows2 = []
for (let i = 0; i < 60; i++) {
    rows1.push(`${i + 1}: ${genText(i)}`)
    rows2.push(`${i + 1}: ${genText(i + 11)} ${genText(i + 5)}`)
}

let treeItems = []
for (let i = 0; i < 12; i++) {
    let children = []
    for (let j = 0; j < 4; j++) {
        children.push({ id: `${i}-${j}`, text: genText(i * 4 + j) })
    }
    treeItems.push({ id: `${i}`, text: genText(i + 30), children })
}

let expandItems = []
for (let i = 0; i < 6; i++) {
    expandItems.push({ text: `item${i + 1}`, dsp: genText(i + 40) + ' ' + genText(i + 50) })
}


//ctrl, 共用之控制列: 縮窄容器、隱藏(display:none)、顯示
let ctrl = `<div>
    <button @click="wid=260">縮窄</button>
    <button @click="hide=true">隱藏</button>
    <button @click="hide=false">顯示</button>
</div>`


let cases = {

    'dynamiclist': {
        template: `<div>${ctrl}
            <button @click="rows=rows2">換資料</button>
            <button @click="show=false">關閉顯示</button>
            <button @click="show=true">開啟顯示</button>
            <button @click="changeThenHide">換資料並隱藏</button>
            <div :style="(hide?'display:none;':'')+'width:'+wid+'px;'">
                <w-dynamic-list class="target" :rows="rows" :viewHeightMax="300" :show="show">
                    <template v-slot="props">
                        <div style="padding:4px 8px; font-size:13px; line-height:18px; word-break:break-word;">{{props.row}}</div>
                    </template>
                </w-dynamic-list>
            </div>
        </div>`,
        data: () => ({ rows: rows1, show: true }),
        methods: {
            changeThenHide() {
                //換資料後立即隱藏(如更新後隨即關閉面板), 隱藏落在列表刷新之量測等待期間
                this.rows = rows2
                setTimeout(() => {
                    this.hide = true
                }, 1)
            },
        },
    },

    'tree': {
        template: `<div>${ctrl}
            <button @click="items=items2">換資料</button>
            <div :style="(hide?'display:none;':'')+'width:'+wid+'px;'">
                <w-tree class="target" :data="items" :viewHeightMax="300" :defaultDisplayLevel="2"></w-tree>
            </div>
        </div>`,
        data: () => ({ items: treeItems, items2: treeItems.slice().reverse() }),
    },

    'textarea': {
        template: `<div>${ctrl}
            <button @click="text=text+' '+more">改值</button>
            <div :style="(hide?'display:none;':'')+'width:'+wid+'px;'">
                <w-textarea class="target" v-model="text"></w-textarea>
            </div>
        </div>`,
        data: () => ({ text: genText(3), more: genText(9) + ' ' + genText(15) }),
    },

    'listexpand': {
        template: `<div>${ctrl}
            <button @click="active=items[1]">展開第2項</button>
            <div :style="(hide?'display:none;':'')+'width:'+wid+'px;'">
                <w-list-expand class="target" style="height:500px;" :items="items" :itemActive.sync="active"></w-list-expand>
            </div>
        </div>`,
        data: () => ({ items: expandItems, active: null }),
    },

}


//geom, 使用者所見之版面: 元件外框, 內容超出其框之元素(捲動區或被裁切者)之捲動總高, 元件內可見元素相對元件之位置與尺寸
//  可見元素為未被元件內任何裁切祖先(overflow非visible)完全裁掉者: 虛擬列表於捲動區視窗外預先渲染之列數隨刷新時序而異(使用者看不到), 不列入比對; 其總高由捲動總高比對
window.geom = () => {
    let root = document.querySelector('.target')
    if (!root) {
        return null
    }
    let rb = root.getBoundingClientRect()
    let rd = (v) => Math.round(v * 10) / 10
    let isClipped = (el, r) => {
        let p = el.parentElement
        while (p && p !== root.parentElement) {
            let cs = window.getComputedStyle(p)
            if (cs.overflowX !== 'visible' || cs.overflowY !== 'visible') {
                let c = p.getBoundingClientRect()
                if (!(r.bottom > c.top && r.top < c.bottom && r.right > c.left && r.left < c.right)) {
                    return true
                }
            }
            p = p.parentElement
        }
        return false
    }
    let els = []
    let overflows = []
    let shells = []
    for (let el of root.querySelectorAll('*')) {
        let r = el.getBoundingClientRect()
        if (el.scrollHeight > el.clientHeight + 1 && el.clientHeight > 0) {
            overflows.push([el.tagName, el.className && typeof el.className === 'string' ? el.className : '', el.scrollHeight, el.clientHeight])
        }
        //shells, 捲動區殼層(overflow-y為scroll且高於60px, 排除原生捲軸寬度偵測區)之捲動總高與可視高, 不含容許1px之誤差
        if (window.getComputedStyle(el).overflowY === 'scroll' && el.offsetHeight > 60) {
            shells.push([el.scrollHeight, el.clientHeight])
        }
        if (r.width === 0 && r.height === 0) {
            continue
        }
        if (isClipped(el, r)) {
            continue
        }
        els.push([el.tagName, rd(r.left - rb.left), rd(r.top - rb.top), rd(r.width), rd(r.height)])
    }
    return {
        box: [rd(rb.width), rd(rb.height)],
        overflows,
        shells,
        els,
    }
}


//mountCase
window.mountCase = (name, opt = {}) => {
    let def = cases[name]
    if (!def) {
        throw new Error(`invalid case: ${name}`)
    }
    let host = document.createElement('div')
    document.body.appendChild(host)
    let data = def.data
    let vm = new Vue({
        ...def,
        components: {
            WDynamicList,
            WTree,
            WTextarea,
            WListExpand,
        },
        data: function() {
            return {
                wid: 360,
                hide: opt.hidden === true,
                rows2,
                ...(data ? data.call(this) : {}),
            }
        },
    })
    vm.$mount(host)
    return true
}
