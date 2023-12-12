<template>
    <div>


        <div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">w-aggrid-vue-dyn</span></div>


        <div style="font-size:0.9rem; margin-bottom:10px;">
            <span style="margin-right:10px;">Links:</span>
            <a href="//www.ag-grid.com/" target="_blank" rel="noreferrer noopener">ag-grid</a>
            <span style="margin:0px 10px">|</span>
            <a href="//www.ag-grid.com/example.php" target="_blank" rel="noreferrer noopener">ag-grid examples</a>
            <span style="margin:0px 10px">|</span>
            <a href="//www.ag-grid.com/vuejs-grid/" target="_blank" rel="noreferrer noopener">ag-grid-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//github.com/yuda-lyu/w-aggrid-vue" target="_blank" rel="noreferrer noopener">w-aggrid-vue</a>
            <span style="margin:0px 10px">|</span>
            <a href="//yuda-lyu.github.io/w-aggrid-vue/examples/app.html" target="_blank" rel="noreferrer noopener">w-aggrid-vue examples</a>
        </div>


        <div style="padding:0px;">


            <div class="bk">
                <demolink
                    :kbname="'w-aggrid-vue-dyn'"
                    :casename="'simple data'"
                ></demolink>

                <w-aggrid-vue-dyn
                    style="width:620px;"
                    ref="rftable"
                    :opt="WAggridVueDyn.opt1"
                ></w-aggrid-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-aggrid-vue-dyn'"
                    :casename="'defCellEditable'"
                ></demolink>

                <w-aggrid-vue-dyn
                    style="width:620px;"
                    ref="rftable"
                    :opt="WAggridVueDyn.opt2"
                ></w-aggrid-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-aggrid-vue-dyn'"
                    :casename="'kpHeadTooltip & kpCellTooltip'"
                ></demolink>

                <w-aggrid-vue-dyn
                    style="width:620px;"
                    ref="rftable"
                    :opt="WAggridVueDyn.opt3"
                ></w-aggrid-vue-dyn>

            </div>


            <div class="bk">
                <demolink
                    :kbname="'w-aggrid-vue-dyn'"
                    :casename="'kpCellEditable & kpRowStyle'"
                ></demolink>

                <w-aggrid-vue-dyn
                    style="width:620px;"
                    ref="rftable"
                    :opt="WAggridVueDyn.opt4"
                ></w-aggrid-vue-dyn>

            </div>


            <div class="bk" style="display:block;">
                <demolink
                    :kbname="'w-aggrid-vue-dyn'"
                    :casename="'large data (1,000,000 items)'"
                ></demolink>

                <w-aggrid-vue-dyn
                    ref="rftable"
                    :opt="WAggridVueDyn.opt5"
                ></w-aggrid-vue-dyn>

            </div>


        </div>


    </div>
</template>

<script>
import demolink from './components/demolink.vue'
import WAggridVueDyn from './components/WAggridVueDyn.vue'

// let data = (function(m, n) {
//     let keys = []
//     for (let j = 1; j <= m; j++) {
//         keys.push('Col-' + j)
//     }
//     let row = {}
//     for (let j = 1; j <= m; j++) {
//         row[keys[j - 1]] = 'Cell-' + j
//     }
//     let rows = []
//     for (let i = 1; i <= n; i++) {
//         let r = JSON.parse(JSON.stringify(row))
//         for (let j = 1; j <= m; j++) {
//             r[keys[j - 1]] += '-' + i
//         }
//         rows.push(r)
//     }
//     return {
//         keys,
//         rows: rows,
//     }
// })(100, 1000)
// console.log(JSON.stringify(data))


export default {
    components: {
        demolink,
        WAggridVueDyn,
    },
    props: {
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
                    keys,
                    rows,
                },
                'opt2': {
                    keys,
                    rows,
                    defCellEditable: true,
                },
                'opt3': {
                    keys,
                    rows,
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
                    keys,
                    rows,
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
            ],
        }
    },
}
</script>

<style scoped>
</style>
