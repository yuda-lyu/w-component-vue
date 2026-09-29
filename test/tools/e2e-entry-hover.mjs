import Vue from 'vue'
import { mdiContentSave } from '@mdi/js'
import WButtonCircle from '../../src/components/WButtonCircle.vue'
import WDialog from '../../src/components/WDialog.vue'
import WTreeIconToggle from '../../src/components/WTreeIconToggle.vue'


//e2e-entry-hover: e2e-hover.test.mjs之測試頁, 以window.mountCase(cfg)掛載單一情境
//  cfg.cmp: 'cir'(WButtonCircle, 提示文字Save changes)、'dlg'(WDialog標題列儲存鈕, 提示文字Save)、'toggle'(WTreeIconToggle)
//  cfg.mode(cir、dlg): 'pu-first'(promiseUnlock, 點擊處理第一行resolve)、'pu-late'(promiseUnlock, 延後resolve)、
//                      'loading-prop'(無promiseUnlock, 父層切換loading)、'editable'(父層切換editable)
//  cfg.overlay: 是否顯示全頁遮罩(模擬載入遮罩或訊息框, 內有OK按鈕可關閉); pu-first、pu-late於點擊處理同一輪顯示, loading-prop、editable於延後結束時同一輪顯示
//  cfg.editable(toggle): 圓鈕是否可編輯; 點擊時切換圓鈕朝向(元件因而重繪)
//  點擊次數顯示於#clicks


function findVm(vm, pred) {
    if (!vm) {
        return null
    }
    if (pred(vm)) {
        return vm
    }
    for (let c of vm.$children) {
        let r = findVm(c, pred)
        if (r) {
            return r
        }
    }
    return null
}


window.mountCase = function(cfg) {
    let el = document.createElement('div')
    document.body.appendChild(el)
    window.vm = new Vue({
        components: {
            WButtonCircle,
            WDialog,
            WTreeIconToggle,
        },
        data: {
            cfg,
            icon: mdiContentSave,
            loading: false,
            editable: true,
            show: true,
            dir: 'right',
            overlay: false,
            clicks: 0,
        },
        computed: {
            pu: function() {
                return this.cfg.mode === 'pu-first' || this.cfg.mode === 'pu-late'
            },
        },
        template: `
            <div>
                <div style="padding:150px 0 0 200px;">
                    <WButtonCircle v-if="cfg.cmp==='cir'" :icon="icon" :tooltip="'Save changes'" :promiseUnlock="pu" :loading="loading" :editable="editable" @click="onClick"></WButtonCircle>
                    <WTreeIconToggle v-if="cfg.cmp==='toggle'" :dir="dir" :editable="cfg.editable" @click="onToggle"></WTreeIconToggle>
                </div>
                <WDialog v-if="cfg.cmp==='dlg'" :show.sync="show" :title="'Dialog'" @click-save="onClick">
                    <template v-slot:content>
                        <div style="height:120px;">content</div>
                    </template>
                </WDialog>
                <div id="clicks" style="position:fixed; left:10px; bottom:10px;">{{clicks}}</div>
                <div v-if="overlay" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:2500; background:rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;">
                    <button style="padding:10px 30px;" @click="overlay=false">OK</button>
                </div>
            </div>
        `,
        methods: {
            onClick: function(msg) {
                let vo = this
                let cfg = vo.cfg
                vo.clicks++
                if (cfg.mode === 'pu-first') {
                    msg.pm.resolve()
                    if (cfg.overlay) {
                        vo.overlay = true
                    }
                }
                else if (cfg.mode === 'pu-late') {
                    if (cfg.overlay) {
                        vo.overlay = true
                    }
                    setTimeout(() => {
                        msg.pm.resolve()
                    }, 400)
                }
                else if (cfg.mode === 'loading-prop') {
                    vo.loading = true
                    setTimeout(() => {
                        vo.loading = false
                        if (cfg.overlay) {
                            vo.overlay = true
                        }
                    }, 400)
                }
                else if (cfg.mode === 'editable') {
                    vo.editable = false
                    setTimeout(() => {
                        vo.editable = true
                        if (cfg.overlay) {
                            vo.overlay = true
                        }
                    }, 400)
                }
            },
            onToggle: function() {
                let vo = this
                vo.clicks++
                vo.dir = vo.dir === 'right' ? 'bottom' : 'right'
            },
        },
    }).$mount(el)
}


//getHoverLayer, 取按鈕層(WButtonCircle內帶tabindex之按鈕容器), dlg取WDialog標題列之儲存鈕
function getHoverLayer() {
    let vm = window.vm
    let btn = findVm(vm, (v) => v.$props && v.$props.promiseUnlock !== undefined && v.$props.icon !== undefined && (vm.cfg.cmp !== 'dlg' || v.$props.tooltip === 'Save'))
    return btn.$el.querySelector('[tabindex="0"] [tabindex="0"]')
}


//buttonState, 按鈕層之矩形、背景色、圖示中心之命中元素是否為按鈕層與其游標樣式、載入圖示是否顯示
window.buttonState = function() {
    let layer = getHoverLayer()
    let r = layer.getBoundingClientRect()
    let svg = layer.querySelector('svg')
    let rs = svg ? svg.getBoundingClientRect() : r
    let x = rs.left + rs.width / 2
    let y = rs.top + rs.height / 2
    let hit = document.elementFromPoint(x, y)
    let loading = layer.querySelector('[cmp="loading"]')
    return {
        x,
        y,
        w: Math.round(r.width),
        h: Math.round(r.height),
        bg: getComputedStyle(layer).backgroundColor,
        hitIsLayer: hit === layer,
        cursor: hit ? getComputedStyle(hit).cursor : '',
        loadingShown: !!loading && getComputedStyle(loading).display !== 'none',
    }
}


//toggleState, 圓鈕之背景色、圓鈕中心之命中元素是否在圓鈕內與其游標樣式、禁用符號之斜線數
window.toggleState = function() {
    let circle = document.querySelector('.circle')
    let r = circle.getBoundingClientRect()
    let x = r.left + r.width / 2
    let y = r.top + r.height / 2
    let hit = document.elementFromPoint(x, y)
    let root = circle.closest('[tabindex="0"]')
    let strikes = [...root.querySelectorAll('div')].filter((d) => (d.getAttribute('style') || '').includes('border-top:2px solid') || (d.style.borderTopWidth === '2px'))
    return {
        x,
        y,
        bg: getComputedStyle(circle).backgroundColor,
        hitInCircle: circle.contains(hit),
        cursor: hit ? getComputedStyle(hit).cursor : '',
        strikes: strikes.length,
    }
}
