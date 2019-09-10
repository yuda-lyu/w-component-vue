import Vue from 'vue'
import Vuetify from 'vuetify/lib'
//import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

let opt = {
    icons: {
        iconfont: 'mdiSvg',
    },
}
export default new Vuetify(opt)
