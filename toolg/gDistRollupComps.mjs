import _ from 'lodash-es'
import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'


let fdSrc = './src/components/'
let fdTar = './dist'


rollupFiles({
    fns: 'WComponentVue.vue',
    fdSrc,
    fdTar,
    nameDistType: 'kebabCase',
    runin: 'browser',
    globals: {
        'vue': 'Vue',
    },
    external: [
        'vue',
    ],
})

