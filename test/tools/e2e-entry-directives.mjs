import Vue from 'vue'
import domResize from '../../src/js/domResize.mjs'
import domMutation from '../../src/js/domMutation.mjs'
import domStable from '../../src/js/domStable.mjs'
import domVisible from '../../src/js/domVisible.mjs'
import domDragDrop from '../../src/js/domDragDrop.mjs'


//e2e-entry-directives: 偵測類指令與拖放指令之真瀏覽器測試頁
//  每個情境為一個Vue應用, 以頁面上之按鈕操作(改寬、隱藏、停用、改設定等), 事件與錯誤記錄於#log(非反應式, 避免記錄本身使宿主重繪)
//  window.mountCase(name)掛載情境(測試之setup), 之後之操作一律由測試以滑鼠點按鈕、滾輪或拖曳進行


Vue.config.productionTip = false
Vue.config.devtools = false


//log
let logs = []
function log(s) {
    logs.push(s)
    let el = document.getElementById('log')
    if (el) {
        el.textContent = logs.join('\n')
    }
}


//w, 事件內容摘要: 尺寸事件為'來源:舊寬>新寬', 異動事件為'異動類型', 布林為原值
function w(msg) {
    if (msg && msg.snew) {
        let sold = msg.sold ? msg.sold.offsetWidth : 0
        return `${msg.from || 'dom'}:${sold}>${msg.snew.offsetWidth}`
    }
    if (msg && msg.mutations) {
        return [...new Set(msg.mutations.map((m) => m.type))].join('+')
    }
    return String(msg)
}


let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


//Child, 元件標籤上掛指令用
let Child = {
    props: ['st'],
    template: '<div :style="st"><slot></slot></div>',
}


//mkC2, 根元素亦掛v-domresize之元件(與元件標籤上之指令為同一DOM元素)
let mkC2 = (directives) => ({
    props: ['st'],
    directives,
    template: '<div v-domresize @domresize="ch" :style="st"></div>',
    methods: {
        ch(msg) {
            log('ch:' + w(msg))
        },
    },
})


//sharedResize, 父元件與子元件共用之指令實例(同全域註冊Vue.directive('domresize', domResize()))
let sharedResize = domResize()


let st100 = 'width:100px; height:20px; background:#ccc;'
let st150 = 'width:150px; height:20px; background:#ccc;'


//cases
let cases = {

    //---- 發事件 ----

    'resize-basic': {
        template: `<div><button @click="st=st150">改寬</button><div v-domresize @domresize="h" :style="st"></div></div>`,
        methods: {
            h(msg) {
                log('h:' + w(msg))
            }
        },
    },

    'resize-throw': {
        template: `<div><button @click="st=st150">改寬</button><div v-domresize @domresize="h" :style="st"></div></div>`,
        data: () => ({ n: 0 }),
        methods: {
            h(msg) {
                log('h:' + w(msg))
                this.n++
                if (this.n === 1) {
                    throw new Error('boom')
                }
            },
        },
    },

    'resize-async': {
        template: `<div><div v-domresize @domresize="h" :style="st"></div></div>`,
        methods: {
            async h(msg) {
                log('h:' + w(msg))
                throw new Error('aboom')
            },
        },
    },

    'resize-array': {
        template: `<div><button @click="st=st150">改寬</button><div v-domresize @domresize="a" v-on="extra" :style="st"></div></div>`,
        computed: {
            extra() {
                return { domresize: this.b }
            }
        },
        methods: {
            a(msg) {
                log('a:' + w(msg))
            },
            b(msg) {
                log('b:' + w(msg))
            }
        },
    },

    'resize-component-other-native': {
        template: `<div><button @click="st=st150">改寬</button><child v-domresize @domresize="h" @click.native="n" :st="st"></child></div>`,
        methods: {
            h(msg) {
                log('h:' + w(msg))
            },
            n() {
                log('click')
            }
        },
    },

    'resize-component-same-native': {
        template: `<div><button @click="st=st150">改寬</button><child v-domresize @domresize="h" @domresize.native="n" :st="st"></child></div>`,
        methods: {
            h(msg) {
                log('h:' + w(msg))
            },
            n(msg) {
                log('n:' + w(msg))
            }
        },
    },

    'resize-component-native-only': {
        template: `<div><button @click="st=st150">改寬</button><child v-domresize @domresize.native="n" :st="st"></child></div>`,
        methods: {
            n(msg) {
                log('n:' + w(msg))
            }
        },
    },

    'resize-listener-later': {
        template: `<div><button @click="dyn={domresize:h}">加監聽</button><button @click="dyn={}">移除監聽</button><button @click="st=st150">改寬</button><button @click="st=st100">改回</button><div v-domresize v-on="dyn" :style="st"></div></div>`,
        data: () => ({ dyn: {} }),
        methods: {
            h(msg) {
                log('h:' + w(msg))
            }
        },
    },

    'resize-component-listener-later': {
        template: `<div><button @click="dyn={domresize:h}">加監聽</button><button @click="st=st150">改寬</button><child v-domresize v-on="dyn" :st="st"></child></div>`,
        data: () => ({ dyn: {} }),
        methods: {
            h(msg) {
                log('h:' + w(msg))
            }
        },
    },

    'resize-single-to-array': {
        template: `<div><button @click="dyn={domresize:[a,b]}">改為兩個</button><button @click="st=st150">改寬</button><div v-domresize v-on="dyn" :style="st"></div></div>`,
        data: function() {
            return { dyn: { domresize: this.a } }
        },
        methods: {
            a(msg) {
                log('a:' + w(msg))
            },
            b(msg) {
                log('b:' + w(msg))
            }
        },
    },

    'resize-warnings': {
        template: `<div>
            <div v-domresize domresize="h" :style="st"></div>
            <div v-domresize @domresize.once="h" :style="st"></div>
            <div v-domresize @domResize="h" :style="st"></div>
            <div v-domresize @domresize.native="h" :style="st"></div>
            <div v-domresize @domresize="h" :style="st"></div>
        </div>`,
        methods: { h() {} },
    },

    //---- 指令值 ----

    'resize-disabled': {
        template: `<div><button @click="on=true">啟用</button><button @click="on=false">停用</button><button @click="st=st150">改寬</button><button @click="st=st100">改回</button><div v-domresize="on" @domresize="h" :style="st"></div></div>`,
        data: () => ({ on: false }),
        methods: {
            h(msg) {
                log('h:' + w(msg))
            }
        },
    },

    'resize-event-option': {
        template: `<div><button @click="stB=st150">改寬B</button>
            <div v-domresize @domresize="a" style="width:100px; height:20px; background:#ccc;"></div>
            <div v-domresize="{event:'resize'}" @domresize="b" :style="stB"></div>
        </div>`,
        data: () => ({ stB: st100 }),
        methods: {
            a(msg) {
                log('A:' + w(msg))
            },
            b(msg) {
                log('B:' + w(msg))
            }
        },
    },

    'resize-getbase': {
        //getBase回傳使用端目前套用之寬度, 處理函式套用新寬度; 「只改基準」使套用寬度與元素不符(非尺寸原因)並重繪宿主, 不自動重新比較;
        //  「改基準並要求比較」另改refreshKey, 於本批更新後重新比較而觸發
        template: `<div><button @click="applied=0">只改基準</button><button @click="applied=0;rk++">改基準並要求比較</button><div>applied={{applied}}</div><div v-domresize="{event:'resize', getBase, refreshKey:rk}" @domresize="h" :style="st"></div></div>`,
        data: () => ({ applied: 100, rk: 0 }),
        methods: {
            getBase() {
                return { width: this.applied, height: null }
            },
            h(msg) {
                log('h:' + w(msg))
                this.applied = msg.snew.width
            },
        },
    },

    'resize-shared-base': {
        //兩個寬度不同之元素共用同一比較基準(誤用), 宿主模板亦顯示該基準: 若宿主重繪即重新比較, 兩者互相改寫基準而永不收斂
        template: `<div><button @click="n++">重繪</button><div>applied={{applied}} n={{n}}</div>
            <div v-domresize="{event:'resize', getBase}" @domresize="h('A',$event)" style="width:100px; height:20px; background:#ccc;"></div>
            <div v-domresize="{event:'resize', getBase}" @domresize="h('B',$event)" style="width:150px; height:20px; background:#ccc;"></div>
        </div>`,
        data: () => ({ applied: 100, n: 0 }),
        methods: {
            getBase() {
                return { width: this.applied, height: null }
            },
            h(tag, msg) {
                log(tag + ':' + w(msg))
                this.applied = msg.snew.width
            },
        },
    },

    'resize-literal-rerender': {
        //物件字面值每次重繪皆為新物件(含新函數、新物件值), 內容相同者不得重建: 重建之首次量測必觸發, 處理函式再寫入狀態即成無限迴圈
        template: `<div><button @click="rerender">重繪20次</button><div>n={{n}}</div>
            <div v-domresize="{event:'resize', tolerancePixel:1, getSize:(p)=>({width:p.offsetWidth,height:p.offsetHeight})}" @domresize="a" :style="st"></div>
            <div v-domresize="{event:'resize', extra:{k:n}}" @domresize="b" :style="st"></div>
        </div>`,
        data: () => ({ n: 0 }),
        methods: {
            async rerender() {
                for (let i = 0; i < 20; i++) {
                    this.n++
                    await sleep(20)
                }
                log('rerendered')
            },
            a(msg) {
                log('a:' + w(msg))
            },
            b(msg) {
                log('b:' + w(msg))
            },
        },
    },

    'resize-config-change': {
        template: `<div><button @click="tol=3">改容許誤差</button><div v-domresize="{tolerancePixel:tol}" @domresize="h" :style="st"></div></div>`,
        data: () => ({ tol: 1 }),
        methods: {
            h(msg) {
                log('h:' + w(msg))
            }
        },
    },

    'resize-unbind': {
        template: `<div><button @click="show=false">移除</button><div v-if="show" v-domresize @domresize="h" :style="st"></div></div>`,
        data: () => ({ show: true }),
        methods: {
            h(msg) {
                log('h:' + w(msg))
            }
        },
    },

    'resize-double-binding-shared': {
        //元件標籤與其根元素皆有v-domresize且共用同一指令實例
        template: `<div><button @click="st=st150">改寬</button><button @click="show=false">移除</button><c2 v-if="show" v-domresize @domresize="ph" :st="st"></c2></div>`,
        directives: { domresize: sharedResize },
        components: { c2: mkC2({ domresize: sharedResize }) },
        data: () => ({ show: true }),
        methods: {
            ph(msg) {
                log('ph:' + w(msg))
            }
        },
    },

    'resize-double-binding-separate': {
        //元件標籤與其根元素皆有v-domresize, 各自之指令實例
        template: `<div><button @click="st=st150">改寬</button><button @click="show=false">移除</button><c2 v-if="show" v-domresize @domresize="ph" :st="st"></c2></div>`,
        components: { c2: mkC2({ domresize: domResize() }) },
        data: () => ({ show: true }),
        methods: {
            ph(msg) {
                log('ph:' + w(msg))
            }
        },
    },

    'resize-invalid-value': {
        template: `<div><button @click="st=st150">改寬</button><div v-domresize="'yes'" @domresize="h" :style="st"></div><div v-domresize="{tolerance:2}" @domresize="h" :style="st"></div></div>`,
        methods: {
            h(msg) {
                log('h:' + w(msg))
            }
        },
    },

    //---- v-domvisible ----

    'visible-scroll': {
        template: `<div><div class="box" style="width:200px; height:100px; overflow-y:auto; border:1px solid #999;">
            <div v-domvisible @domvisible="h" style="width:100px; height:20px; background:#ccc;"></div>
            <div style="height:600px;"></div>
        </div></div>`,
        methods: {
            h(v) {
                log('v:' + v)
            }
        },
    },

    'visible-display': {
        template: `<div><button @click="hide=true">隱藏</button><button @click="hide=false">顯示</button><div :style="hide?'display:none;':''"><div v-domvisible @domvisible="h" :style="st"></div></div></div>`,
        data: () => ({ hide: false }),
        methods: {
            h(v) {
                log('v:' + v)
            }
        },
    },

    'visible-move': {
        //「移出」、「插回」以程式移動同一元素(如彈窗將內容移至body), 元素與綁定不變
        template: `<div><button @click="moveOut">移出</button><button @click="moveIn">插回</button><div ref="holder"><div ref="t" v-domvisible @domvisible="h" :style="st"></div></div></div>`,
        methods: {
            h(v) {
                log('v:' + v)
            },
            moveOut() {
                this.$refs.t.remove()
            },
            moveIn() {
                this.$refs.holder.appendChild(this.$refs.t)
            },
        },
    },

    'visible-remove-race': {
        template: `<div><button @click="add">加入</button><button @click="remove">移除</button><div v-if="show" v-domvisible @domvisible="h" :style="st"></div></div>`,
        data: () => ({ show: false }),
        methods: {
            h(v) {
                log('v:' + v)
            },
            add() {
                this.show = true
            },
            remove() {
                log('removed')
                this.show = false
            },
        },
    },

    'visible-no-io': {
        template: `<div><button @click="hide=true">隱藏</button><button @click="hide=false">顯示</button><div :style="hide?'display:none;':''"><div v-domvisible @domvisible="h" :style="st"></div></div></div>`,
        data: () => ({ hide: false }),
        methods: {
            h(v) {
                log('v:' + v)
            }
        },
    },

    'visible-disabled': {
        template: `<div><button @click="on=true">啟用</button><div v-domvisible="on" @domvisible="h" :style="st"></div></div>`,
        data: () => ({ on: false }),
        methods: {
            h(v) {
                log('v:' + v)
            }
        },
    },

    'visible-throw': {
        template: `<div><div v-domvisible @domvisible="h" :style="st"></div></div>`,
        methods: {
            h(v) {
                log('v:' + v)
                throw new Error('vboom')
            },
        },
    },

    //---- v-dommutation ----

    'mutation-default': {
        template: `<div><button @click="n++">加子節點</button><button @click="cls='b'">改屬性</button><div v-dommutation @dommutation="h" :class="cls"><span v-for="i in n" :key="i">{{i}}</span></div></div>`,
        data: () => ({ n: 1, cls: 'a' }),
        methods: {
            h(msg) {
                log('m:' + w(msg))
            }
        },
    },

    'mutation-config': {
        template: `<div><button @click="n++">加子節點</button><button @click="cls='b'">改屬性</button><div v-dommutation="{childList:true}" @dommutation="h" :class="cls"><span v-for="i in n" :key="i">{{i}}</span></div></div>`,
        data: () => ({ n: 1, cls: 'a' }),
        methods: {
            h(msg) {
                log('m:' + w(msg))
            }
        },
    },

    'mutation-invalid': {
        template: `<div><button @click="n++">加子節點</button><div v-dommutation="{subtree:true}" @dommutation="h"><span v-for="i in n" :key="i">{{i}}</span></div></div>`,
        data: () => ({ n: 1 }),
        methods: {
            h(msg) {
                log('m:' + w(msg))
            }
        },
    },

    'mutation-disabled': {
        template: `<div><button @click="on=true">啟用</button><button @click="n++">加子節點</button><div v-dommutation="on" @dommutation="h"><span v-for="i in n" :key="i">{{i}}</span></div></div>`,
        data: () => ({ n: 1, on: false }),
        methods: {
            h(msg) {
                log('m:' + w(msg))
            }
        },
    },

    //---- v-domstable ----

    'stable-default': {
        template: `<div><button @click="x=200">移動</button><div v-domstable @domstable="h" :style="'position:relative; transition:left 0.4s; left:'+x+'px; '+st"></div></div>`,
        data: () => ({ x: 0 }),
        methods: {
            h(b) {
                log('s:' + b)
            }
        },
    },

    'stable-throw': {
        template: `<div><div v-domstable @domstable="h" :style="st"></div></div>`,
        methods: {
            h(b) {
                log('s:' + b)
                throw new Error('sboom')
            },
        },
    },

    'stable-invalid-option': {
        //tolerance非數字: 其檢查與預設依wsemi domIsStable(用預設); tol非可用鍵: 指令警告並不採用
        template: `<div><div v-domstable="{tolerance:'x', tol:2}" @domstable="h" :style="st"></div></div>`,
        methods: {
            h(b) {
                log('s:' + b)
            }
        },
    },

    'stable-disabled': {
        template: `<div><button @click="on=true">啟用</button><div v-domstable="on" @domstable="h" :style="st"></div></div>`,
        data: () => ({ on: false }),
        methods: {
            h(b) {
                log('s:' + b)
            }
        },
    },

    //---- v-domdragdrop ----

    'drag': {
        //三個同群組項目; 處理函式於window.__throwOn指定之事件拋錯; 「停用第3項」使item3之指令值為null(停用之項目不得再收到拖放事件)
        template: `<div><button @click="off3=true">停用第3項</button>
            <div v-for="i in 3" :key="i" v-domdragdrop="(i===3 && off3)?null:{group:'g1'}" :dragindex="i-1" @domdragdrop="hd" style="width:200px; height:40px; margin:0 0 10px 0; background:#ddd;"><div style="width:100%; height:100%;">item{{i}}</div></div>
        </div>`,
        data: () => ({ off3: false, throwOn: window.__throwOn || '' }),
        methods: {
            hd(msg) {
                if (msg.evName !== 'move') {
                    log('d:' + msg.evName + (msg.tarInd !== undefined && msg.tarInd !== null ? msg.tarInd : ''))
                }
                if (msg.evName === this.throwOn) {
                    throw new Error('dboom')
                }
            },
        },
    },

    'drag-rerender': {
        //拖曳開始時處理函式改變宿主顯示之資料而重繪, v-domdragdrop於重繪時解除後重建; 拖曳須延續且放開時收到drop
        template: `<div><div>n={{n}}</div>
            <div v-for="i in 3" :key="i" v-domdragdrop="{group:'g2'}" :dragindex="i-1" @domdragdrop="hd" style="width:200px; height:40px; margin:0 0 10px 0; background:#ddd;"><div style="width:100%; height:100%;">item{{i}}</div></div>
        </div>`,
        data: () => ({ n: 0 }),
        methods: {
            hd(msg) {
                if (msg.evName !== 'move') {
                    log('d:' + msg.evName + (msg.tarInd !== undefined && msg.tarInd !== null ? msg.tarInd : ''))
                }
                if (msg.evName === 'start') {
                    this.n++
                }
            },
        },
    },

}


//mountCase
window.mountCase = (name) => {
    let def = cases[name]
    if (!def) {
        throw new Error(`invalid case: ${name}`)
    }

    //錯誤: Vue錯誤處理、未攔截錯誤、未處理之拒絕皆記錄
    Vue.config.errorHandler = (err, vm, info) => {
        log(`errH:${info}:${err && err.message}`)
    }
    window.addEventListener('error', (e) => {
        log(`winErr:${e.message}`)
    })
    window.addEventListener('unhandledrejection', (e) => {
        log(`unhandled:${e.reason && e.reason.message ? e.reason.message : String(e.reason)}`)
        e.preventDefault()
    })

    //#log
    let pre = document.createElement('pre')
    pre.id = 'log'
    pre.style.cssText = 'position:fixed; right:0; bottom:0; width:260px; margin:0; font-size:11px;'
    document.body.appendChild(pre)

    //mount
    let host = document.createElement('div')
    document.body.appendChild(host)
    let data = def.data
    let vm = new Vue({
        ...def,
        directives: {
            domresize: domResize(),
            dommutation: domMutation(),
            domstable: domStable(),
            domvisible: domVisible(),
            domdragdrop: domDragDrop(),
            ...(def.directives || {}),
        },
        components: {
            child: Child,
            ...(def.components || {}),
        },
        data: function() {
            return {
                st: st100,
                st100,
                st150,
                ...(data ? data.call(this) : {}),
            }
        },
    })
    vm.$mount(host)
    return true
}
