//workerFuncsCases: worker產物(src/js/*.wk.umd.js)與wsemi非worker版之比對案例(帳本R-B3), 瀏覽器與Node共用, 不import任何模組
//  fn: 'convertToTree'(WJsonView以convertToTreeWk(data, { bindRoot: vo.root })呼叫, root預設'___root___')
//      'flattenTree'(WTree以flattenTreeWk(data, { bindKey: vo.keyPrimary, bindChildren: vo.keyChildren })呼叫, 預設'id'、'children')
//  輸入皆可結構化複製(worker版必經postMessage); 含函數等不可複製之輸入不在R-B3範圍


function deepObj(depth) {
    let o = { leaf: 'end', n: depth }
    for (let i = depth - 1; i >= 0; i--) {
        o = { ['k' + i]: o, v: i, arr: [i, String(i)] }
    }
    return o
}


function chainTree(depth, keyId = 'id', keyCh = 'children') {
    let node = { [keyId]: 'n' + depth, text: 'leaf' }
    for (let i = depth - 1; i >= 0; i--) {
        node = { [keyId]: 'n' + i, text: 'node' + i, [keyCh]: [node] }
    }
    return [node]
}


function wideTree(n) {
    //n個節點之3層樹
    let r = []
    let id = 0
    let per = Math.ceil(Math.cbrt(n))
    for (let i = 0; i < per && id < n; i++) {
        let a = { id: 'a' + (id++), text: '第一層' + i, children: [] }
        for (let j = 0; j < per && id < n; j++) {
            let b = { id: 'b' + (id++), text: '第二層' + j, children: [] }
            for (let k = 0; k < per && id < n; k++) {
                b.children.push({ id: 'c' + (id++), text: '第三層' + k, value: k * 1.5 })
            }
            a.children.push(b)
        }
        r.push(a)
    }
    return r
}


//genCases, 每次呼叫皆產生新物件, 使worker版與非worker版之輸入互不共用實例
function genCases() {
    let mixed = {
        a: 1,
        b: 12.3,
        c: 'abc',
        d: '45-de',
        x: true,
        y: null,
        e: [],
        f: [91, 912.3, 'abc', '945-de', true, null, [5, 54.3, 'xyz']],
        g: {},
        h: {
            ga: 81,
            gb: 812.3,
            ge: [71, 712.3, 'abc', '745-de', true, null],
            gf: { gfa: 61, gfb: 612.3, gfc: 'abc', gfe: true, gff: null },
        },
    }
    let large = {}
    for (let i = 0; i < 3000; i++) {
        large['key' + i] = { i, s: 'v' + i, arr: [i, i + 0.5, 'x' + i] }
    }
    return [
        { name: 'ct-obj-mixed', fn: 'convertToTree', data: mixed, opt: { bindRoot: '___root___' } },
        { name: 'ct-obj-mixed-defroot', fn: 'convertToTree', data: mixed, opt: {} },
        { name: 'ct-arr-top', fn: 'convertToTree', data: [1, 'a', { b: [2, { c: 3 }] }, [null, true]], opt: { bindRoot: '___root___' } },
        { name: 'ct-empty-obj', fn: 'convertToTree', data: {}, opt: { bindRoot: '___root___' } },
        { name: 'ct-empty-arr', fn: 'convertToTree', data: [], opt: { bindRoot: '___root___' } },
        { name: 'ct-invalid-str', fn: 'convertToTree', data: 'abc', opt: { bindRoot: '___root___' } },
        { name: 'ct-deep-60', fn: 'convertToTree', data: deepObj(60), opt: { bindRoot: '___root___' } },
        { name: 'ct-large-3000', fn: 'convertToTree', data: large, opt: { bindRoot: '___root___' } },
        { name: 'ct-unicode', fn: 'convertToTree', data: { '中文鍵': '值\n換行"引號"\\反斜線', 'emoji': '😀👍', 'arr': ['日本語', 'Ελληνικά', '\u0000\u2028'] }, opt: { bindRoot: '___root___' } },
        { name: 'ct-special-num', fn: 'convertToTree', data: { nan: NaN, inf: Infinity, ninf: -Infinity, nz: -0, big: 1e300, small: 5e-324 }, opt: { bindRoot: '___root___' } },
        { name: 'ct-date-undef', fn: 'convertToTree', data: { d: new Date(Date.UTC(2026, 9, 14, 0, 0, 0)), u: undefined, arr: [undefined, 1] }, opt: { bindRoot: '___root___' } },
        { name: 'ct-custom-binds', fn: 'convertToTree', data: mixed, opt: { bindKey: 'k', bindParent: 'p', bindText: 't', bindChildren: 'c', bindType: 'ty', bindNumOfChilren: 'nc', bindRoot: 'R', saveExtProps: true } },
        { name: 'ft-arr-basic', fn: 'flattenTree', data: [{ id: 1, text: '1x' }, { id: 2, text: '2y', children: [{ id: 3, text: '3z' }] }, { id: 4, text: 'empty' }], opt: { bindKey: 'id', bindChildren: 'children' } },
        { name: 'ft-obj-basic', fn: 'flattenTree', data: { id: 1, data: '1-abc', children: [{ id: 2, data: '2-def' }, { id: 3, data: '3-ghi', children: [{ id: 4, data: '4-jkl' }] }, { id: 5, data: '5-mno' }] }, opt: { bindKey: 'id', bindChildren: 'children' } },
        { name: 'ft-custom-keys', fn: 'flattenTree', data: chainTree(5, 'key', 'items'), opt: { bindKey: 'key', bindChildren: 'items' } },
        { name: 'ft-empty', fn: 'flattenTree', data: [], opt: { bindKey: 'id', bindChildren: 'children' } },
        { name: 'ft-invalid-str', fn: 'flattenTree', data: 'abc', opt: { bindKey: 'id', bindChildren: 'children' } },
        { name: 'ft-no-key-nodes', fn: 'flattenTree', data: [{ text: 'no id' }, { id: 'x', text: 'has id', children: [{ text: 'child no id' }, { id: 'y' }] }], opt: { bindKey: 'id', bindChildren: 'children' } },
        { name: 'ft-deep-200', fn: 'flattenTree', data: chainTree(200), opt: { bindKey: 'id', bindChildren: 'children' } },
        { name: 'ft-large-20000', fn: 'flattenTree', data: wideTree(20000), opt: { bindKey: 'id', bindChildren: 'children' } },
        { name: 'ft-unicode', fn: 'flattenTree', data: [{ id: '節點一', text: '值\n"引號"😀', children: [{ id: '節點二', text: '\u2028' }] }], opt: { bindKey: 'id', bindChildren: 'children' } },
    ]
}


//deepEqual, 結構比對: 數值以Object.is(含NaN與-0); Date以時間值; 物件之鍵集合須相同且值逐一相等; 陣列長度、順序與空洞須相同
function deepEqual(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Object.is(a, b)
    }
    if (a === b) {
        return true
    }
    if (a instanceof Date && b instanceof Date) {
        return Object.is(a.getTime(), b.getTime())
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false
        }
        for (let i = 0; i < a.length; i++) {
            if ((i in a) !== (i in b)) {
                return false
            }
            if (!deepEqual(a[i], b[i])) {
                return false
            }
        }
        return true
    }
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (Array.isArray(a) !== Array.isArray(b)) {
            return false
        }
        let ka = Object.keys(a).sort()
        let kb = Object.keys(b).sort()
        if (ka.length !== kb.length) {
            return false
        }
        for (let i = 0; i < ka.length; i++) {
            if (ka[i] !== kb[i]) {
                return false
            }
            if (!deepEqual(a[ka[i]], b[ka[i]])) {
                return false
            }
        }
        return true
    }
    return false
}


//keyOrder, 物件鍵之順序簽章(深層); 元件依鍵順序顯示, 故另比對
function keyOrder(v) {
    if (Array.isArray(v)) {
        return '[' + v.map(keyOrder).join(',') + ']'
    }
    if (v && typeof v === 'object' && !(v instanceof Date)) {
        return '{' + Object.keys(v).map((k) => k + ':' + keyOrder(v[k])).join(',') + '}'
    }
    return '.'
}


export {
    genCases,
    deepEqual,
    keyOrder
}
