import _ from 'lodash'
import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
import getFiles from 'w-package-tools/src/getFiles.mjs'


let fdSrc = './src/components/'
let fdTar = './dist'
let fns = getFiles(fdSrc)
_.pull(fns, 'WAlert.mjs') //不打包成js組件, 將WAlert嵌入WComponentVue元件中呼叫使用
_.pull(fns, 'demolink.vue') //不打包github網頁輔助顯示組件


rollupFiles({
    fns: fns,
    fdSrc,
    fdTar,
    nameDistType: 'kebabCase',
    globals: {
        'vuetify': 'vuetify',
    },
    external: [
        'vuetify',
    ],
})

