import Vue from 'vue'
import getGlobal from 'wsemi/src/getGlobal.mjs'


function associateVue() {
    if (Vue && !window.Vue) {
        //console.log('associate vue')

        //因vue-cli Vue編譯後會封裝至包內, 不會位於window內, 而動態載入的Vue套件除會掛入window內，亦會直接使用window內的Vue, 用rollup打包出的app也是直接使用window內的Vue
        //本套件用rollup打包時已將Vue剔除, 故一律使用window內的Vue
        //若於vue-cli環境, Vue為import載入, 故還需將Vue另存/關聯至window內, 才能供ag-grid-vue使用window內Vue
        window.Vue = Vue

    }
}


function getVue() {

    //associateVue
    associateVue()

    //x
    let g = getGlobal()
    let x = Vue || g.Vue //優先使用vue-cli的Vue, 不是window的Vue
    //console.log('type Vue', Object.prototype.toString.call(Vue), 'type g.Vue', Object.prototype.toString.call(g.Vue))

    return x
}


export default getVue
