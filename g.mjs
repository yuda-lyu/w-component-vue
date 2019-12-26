let c = `

export default {
    components: {
        demolink,
        WAggridVueDyn,
    },
    props: {
        modeBorder: {
            type: String,
        },
        modeShell: {
            type: String,
        },
    },
    data: function() {
        let keys = ['make', 'model', 'price']
        let rows = [
            { 'make': 'Toyota', 'model': 'Celica', 'price': 35000 },
            { 'make': 'Ford', 'model': 'Mondeo', 'price': 32000 },
            { 'make': 'Porsche', 'model': 'Boxter', 'price': 72000 },
            { 'make': 'BMW', 'model': 'Sedan', 'price': 66000 },
            { 'make': 'Nissan', 'model': 'March', 'price': 61000 },
            { 'make': 'Lexus', 'model': 'RX', 'price': 56000 },
            { 'make': 'Audi', 'model': 'A6 Allroad', 'price': 45000 },
            { 'make': 'Mazda', 'model': 'MX-5', 'price': 36000 },
            { 'make': 'Mercedes-Benz', 'model': 'Cabriolet', 'price': 86000 },
            { 'make': 'Volkswagen', 'model': 'Beetle', 'price': 68000 },
            { 'make': 'Honda', 'model': 'City', 'price': 69000 },
            { 'make': 'Volvo', 'model': 'S60', 'price': 71000 },
            { 'make': 'Subaru', 'model': 'BRZ', 'price': 48000 }
        ]
        return {
            'WAggridVueDyn': {
                'opt1': {
                    keys: keys,
                    rows: rows,
                },
                'opt2': {
                    keys: keys,
                    rows: rows,
                    defCellEditable: true,
                },
                'opt3': {
                    keys: keys,
                    rows: rows,
                    kpHeadTooltip: {
                        make: function(v) {
                            return (
                                '<div style="font-size:8pt; font-weight:bold; color:#6fe;">[' + v + ']</div><div>生產製造商</div>'
                            )
                        },
                        model: function(v) {
                            return (
                                '<div style="font-size:8pt; font-weight:bold; color:#6fe;">[' + v + ']</div><div>車款型號</div>'
                            )
                        },
                        price: function(v) {
                            return (
                                '<div style="font-size:8pt; font-weight:bold; color:#6fe;">[' + v + ']</div><div>虛擬販售價格</div>'
                            )
                        }
                    },
                    kpCellTooltip: {
                        make: function(v) {
                            return (
                                '<div style="font-size:9pt; color:#ecf;">[生產製造商]</div>' + v
                            )
                        },
                        model: function(v) {
                            return (
                                '<div style="font-size:9pt; color:#6f9;">[車款型號]</div>' + v
                            )
                        },
                        price: function(v) {
                            return (
                                '<div style="font-size:9pt; color:#fa6;">[虛擬販售價格]</div>' + v
                            )
                        }
                    },
                },
                'opt4': {
                    keys: keys,
                    rows: rows,
                    kpCellEditable: {
                        //default: false
                        price: true
                    },
                    kpRowStyle: {
                        price: function(v) {
                            if (v >= 70000) {
                                return { background: '#fac' }
                            }
                            return {}
                        }
                    },
                },
                'opt5': (function(a, b) {
                    let c = []; for (let d = 1; d <= a; d++)c.push('Col-' + d); let d = {}; for (let e = 1; e <= a; e++)d[c[e - 1]] = 'Cell-' + e; let e = []; for (let f, g = 1; g <= b; g++) {
                        f = JSON.parse(JSON.stringify(d)); for (let b = 1; b <= a; b++)f[c[b - 1]] += '-' + g; e.push(f)
                    } return { keys: c, rows: e }
                })(100, 10000),
            },
            'actions': [
                {q1:123},
                34,
                56.78
            ],
        }
    },
    computed: {
        aaa: function () {
            console.log('bbb')
            return 'b'
        },
    },
    method: {
        ccc: function () {
            console.log('ddd')
            return 'd'
        },
    },
}
`

let m1 = 'data:'
let m2 = '    },'
let ss = c.split('\n')
function getBlock(ss, m1, m2) {
    let rs = []
    for (let i = 0; i < ss.length; i++) {
        let s = ss[i]
        if (s.indexOf(m1) >= 0) { //indexOf for m1
            let t = s.substring(s.indexOf(m1) + m1.length, s.length)
            rs.push(t)
            continue
        }
        if (rs.length > 0) {
            rs.push(s)
            if (s === m2) { //equal for m2
                break
            }
        }
    }
    if (rs.length === 0) {
        return null
    }
    return rs.join('\n')
}
console.log(getBlock(ss, m1, m2))

m1 = `'actions':`
m2 = '            ],'
//console.log(getBlock(ss, m1, m2))

//node --experimental-modules --es-module-specifier-resolution=node g.mjs
