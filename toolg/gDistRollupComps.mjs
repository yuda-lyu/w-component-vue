import _ from 'lodash-es'
import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'


let fdSrc = './src/components/'
let fdTar = './dist'


rollupFiles({
    fns: 'WComponentVue.vue',
    fdSrc,
    fdTar,
    nameDistType: 'kebabCase',
    globals: {
        'vue': 'Vue', //因動態加載組件, 現統一使用window內Vue, 故此處不打包進來, 若vue-cli則自動將Vue關聯至window內的Vue
        'vuetify': 'vuetify',
    },
    external: [
        'vue',
        'vuetify',
    ],
})

