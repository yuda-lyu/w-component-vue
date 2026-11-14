import Vue from 'vue'
import WExplorer from '@src/components/WExplorer.vue'


//e2e-entry-explorerError: e2e-explorerError.test.mjs之測試頁(@src為待測之src資料夾, 預設工作區之src), 以window.mountCase(cfg)掛載WExplorer
//  cfg.items: 輸入WExplorer之items
//  cfg.listen: 父層是否以@error監聽error事件(false時不綁任何error監聽)
//  window.setItems(items): 父層改變items(模擬資料更新)
//  window.errors: 父層收到之error事件記錄, 每筆為{ isError, message }
//  window.pageText(): 頁面可見文字(路徑區、樹狀資料夾與清單區之項目名稱)


window.errors = []


window.mountCase = function(cfg) {
    let el = document.createElement('div')
    document.body.appendChild(el)
    window.vm = new Vue({
        components: {
            WExplorer,
        },
        el,
        template: `
            <div style="padding:20px;">
                <w-explorer
                    id="exp"
                    style="width:700px; height:300px;"
                    :items="items"
                    v-on="listeners"
                ></w-explorer>
            </div>
        `,
        data: function() {
            return {
                items: cfg.items,
            }
        },
        computed: {
            listeners: function() {
                let vo = this
                if (cfg.listen) {
                    return { error: vo.onError }
                }
                return {}
            },
        },
        methods: {
            onError: function(err) {
                window.errors.push({ isError: err instanceof Error, message: String(err && err.message) })
            },
        },
    })
}


window.setItems = function(items) {
    window.vm.items = items
}


window.pageText = function() {
    return document.querySelector('#exp').innerText
}
