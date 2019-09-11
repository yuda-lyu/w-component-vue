import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.mjs'

Vue.config.productionTip = false

Vue.prototype.alert = console.log

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
