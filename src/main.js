import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.mjs'

Vue.config.productionTip = false

//因es6 Vue編譯後會封裝至獨立套件不會位於window內, 而動態載入的es5套件除會掛入window內，亦會直接使用window內的Vue, 而用rollup打包出的app也是直接使用window內的Vue
//故此處儲存真正所用Vue至window內
window['Vue'] = Vue

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
