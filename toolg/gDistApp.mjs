import rollupFiles from '../tool/rollupFiles.mjs'
//import getFiles from '../tool/getFiles.mjs'


let fdSrc = './src'
let fdTar = './docs/examples/'


rollupFiles({
    fns: 'App.vue',
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

