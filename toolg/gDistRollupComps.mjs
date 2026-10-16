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
    .catch((err) => {
        //產製失敗須以非0結束, 發布流程以離開碼判定成敗; 明設離開碼, 不依賴Node之unhandled-rejections模式
        console.error(err)
        process.exitCode = 1
    })

