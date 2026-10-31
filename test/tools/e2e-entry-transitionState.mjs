import Vue from 'vue'
import WDialog from '@src/components/WDialog.vue'
import WPopup from '@src/components/WPopup.vue'
import WTooltip from '@src/components/WTooltip.vue'
import WTextSelect from '@src/components/WTextSelect.vue'
import WListExpandItem from '@src/components/WListExpandItem.vue'
import WGroupTags from '@src/components/WGroupTags.vue'
import WGroupDragdrop from '@src/components/WGroupDragdrop.vue'


//e2e-entry-transitionState: e2e-transitionState.test.mjs之測試頁(@src為待測之src資料夾, 預設工作區之src), 以window.mountCase(cfg)掛載單一情境
//  cfg.cmp: 'dlg'(WDialog)、'pop'(WPopup)、'tip'(WTooltip)、'sel'(WTextSelect)、'exp'(WListExpandItem)、'tags'(WGroupTags)、'dd'(WGroupDragdrop)
//  操作按鈕皆為頁面上或彈窗內之真按鈕, 由測試以真滑鼠點擊; 按鈕#btnPop、#btnTip、#btnShow等見各情境
//  記錄器window.startRec(stateSel, boxKey)/window.stopRec(): MutationObserver記錄stateSel元素之state屬性改變(含改變當下之箱體), rAF逐幀記錄state與箱體
//    箱體(boxKey)為[left, top, width, height, opacity]之陣列, 或多個元素箱體之串接, 供斷言「state為終態時位置已不再變動」


function findRef(vm, ref) {
    if (vm.$refs && vm.$refs[ref]) {
        return vm.$refs[ref]
    }
    for (let c of vm.$children) {
        let r = findRef(c, ref)
        if (r) {
            return r
        }
    }
    return null
}

function boxOf(e) {
    if (!e) {
        return [null]
    }
    let r = e.getBoundingClientRect()
    let cs = getComputedStyle(e)
    return [Math.round(r.left * 100) / 100, Math.round(r.top * 100) / 100, Math.round(r.width * 100) / 100, Math.round(r.height * 100) / 100, Number(cs.opacity)]
}

//boxFns, 各情境之箱體量測函數
let boxFns = {
    //彈窗面板
    dlgPanel: () => boxOf(findRef(window.vm, 'divPanel')),
    //浮層內層內容(.WPopperFix之第一個子元素)
    popInner: () => {
        let p = document.querySelector('.WPopperFix')
        return boxOf(p && p.firstElementChild)
    },
    //展開收合項目下方之元素
    expBelow: () => boxOf(document.querySelector('#below')).slice(0, 2),
    //各項目與其下方元素(標籤、拖曳項目)
    items: () => {
        let es = [...document.querySelectorAll('.WGroupTags-Trans, .WGroupDragdrop-Trans')]
        let r = []
        for (let e of es) {
            r.push(...boxOf(e).slice(0, 2))
        }
        r.push(...boxOf(document.querySelector('#below')).slice(0, 2))
        return r
    },
}

let rec = null
window.startRec = function(stateSel, boxKey) {
    let t0 = performance.now()
    let readState = () => {
        let e = document.querySelector(stateSel)
        return e ? e.getAttribute('state') : null
    }
    //r, 本次記錄專屬之物件(迴圈與觀察器只認自己的running, 前次記錄之殘留迴圈不會寫入本次)
    let r = { events: [], frames: [], running: true, mo: null }
    rec = r
    r.events.push({ t: 0, state: readState(), box: boxFns[boxKey]() })
    r.mo = new MutationObserver(() => {
        let s = readState()
        let last = r.events[r.events.length - 1]
        if (last && last.state === s) {
            return
        }
        r.events.push({ t: Math.round(performance.now() - t0), state: s, box: boxFns[boxKey]() })
    })
    r.mo.observe(document, { attributes: true, attributeFilter: ['state'], subtree: true, childList: true })
    let f = () => {
        if (!r.running) {
            return
        }
        r.frames.push({ t: Math.round(performance.now() - t0), state: readState(), box: boxFns[boxKey]() })
        requestAnimationFrame(f)
    }
    requestAnimationFrame(f)
}
window.stopRec = function() {
    rec.running = false
    rec.mo.disconnect()
    return { events: rec.events, frames: rec.frames }
}

//suppressTransitionEnd, 模擬高負載下過場事件未觸發: 於window捕獲階段攔下transitionend與transitioncancel, 組件收不到
window.suppressTransitionEnd = function() {
    for (let type of ['transitionend', 'transitioncancel']) {
        window.addEventListener(type, (ev) => {
            ev.stopImmediatePropagation()
        }, true)
    }
}

window.mountCase = function(cfg) {
    let el = document.createElement('div')
    document.body.appendChild(el)
    window.vm = new Vue({
        components: { WDialog, WPopup, WTooltip, WTextSelect, WListExpandItem, WGroupTags, WGroupDragdrop },
        data: {
            cfg,
            show: cfg.dlgInitShow === true,
            full: false,
            popShow: false,
            sel: 'b',
            selItems: ['a', 'b', 'c', 'd', 'e'],
            active: cfg.expInitActive === true,
            tags: cfg.nullValue ? null : ['t1', 't2', 't3'],
            dd: cfg.nullValue ? null : ['d1', 'd2', 'd3'],
            seq: 3,
        },
        template: `
            <div id="host" style="padding:20px;">
                <div v-if="cfg.cmp==='dlg'">
                    <button id="btnShow" style="position:fixed; left:10px; bottom:10px; z-index:1;" @click="show=true">show</button>
                    <WDialog :show.sync="show" :fullscreen="full" :title="'Dialog'" :autoFullscreenWhenNarrow="false" :maxWidth="600">
                        <template v-slot:content>
                            <div style="height:200px; padding:10px;">
                                <button id="btnFull" @click="full=!full">full</button>
                                <button id="btnClose" @click="show=false">close</button>
                                <span id="dlgText">Hello table text</span>
                            </div>
                        </template>
                    </WDialog>
                </div>
                <div v-if="cfg.cmp==='pop'">
                    <WPopup v-model="popShow" :isolated="false">
                        <template v-slot:trigger><button id="btnPop" @click="popShow=!popShow">pop</button></template>
                        <template v-slot:content><div id="popBody" style="width:160px; height:60px;">popup body text</div></template>
                    </WPopup>
                </div>
                <div v-if="cfg.cmp==='tip'">
                    <WTooltip :isolated="true" :transitionTime="cfg.transitionTime||200">
                        <template v-slot:trigger><button id="btnTip">tip</button></template>
                        <template v-slot:content><div id="tipBody">tooltip text</div></template>
                    </WTooltip>
                </div>
                <div v-if="cfg.cmp==='sel'" id="selBox" style="width:200px;">
                    <WTextSelect v-model="sel" :items="selItems"></WTextSelect>
                </div>
                <div v-if="cfg.cmp==='exp'" style="width:300px;">
                    <WListExpandItem :text="'Item A'" :active.sync="active">
                        <template v-slot:content><div id="expBody" style="height:120px;">expand body</div></template>
                    </WListExpandItem>
                    <div id="below" style="height:30px; background:#cde;">below</div>
                </div>
                <div v-if="cfg.cmp==='tags'" style="width:500px;">
                    <WGroupTags v-model="tags" :editable="false"></WGroupTags>
                    <div id="below" style="height:30px; background:#cde;">below</div>
                    <button id="btnAdd" @click="tags.push('t'+(++seq))">add</button>
                    <button id="btnRemove" @click="tags.splice(1,1)">remove</button>
                    <button id="btnReverse" @click="tags=tags.slice().reverse()">reverse</button>
                    <button id="btnMix" @click="tags=tags.slice(1).reverse()">mix</button>
                </div>
                <div v-if="cfg.cmp==='dd'" style="width:300px;">
                    <WGroupDragdrop v-model="dd">
                        <template v-slot="props"><span class="ddi" style="display:inline-block; width:60px; padding:4px; border:1px solid #888;">{{props.item}}</span></template>
                    </WGroupDragdrop>
                    <div id="below" style="height:30px; background:#cde;">below</div>
                    <button id="btnAdd" @click="dd.push('d'+(++seq))">add</button>
                    <button id="btnRemove" @click="dd.splice(1,1)">remove</button>
                    <button id="btnReverse" @click="dd=dd.slice().reverse()">reverse</button>
                    <button id="btnMix" @click="dd=dd.slice(1).reverse()">mix</button>
                </div>
            </div>
        `,
    }).$mount(el)
}
