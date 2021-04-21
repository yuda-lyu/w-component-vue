import rollupVueToHtml from 'w-package-tools/src/rollupVueToHtml.mjs'


let opt = {
    title: `w-component-vue`,
    head: `

    <!-- rollupVueToHtml已自動添加@babel/polyfill與vue -->

    <!-- vuetify -->
    <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.js"></script>

    <!-- fontawesome -->
    <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet">

    <!-- mdi, 各組件使用mdi/js故不需引用 -->
    <link _href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">

    <!-- google, 各組件使用mdi/js故不需引用 -->
    <link _href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link _href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    <!-- data -->
    <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/data/dataAAPL.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/data/dataUSD2EUR.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/data/dataTemperature.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/data/dataHousePriceArea.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/data/dataFlare.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/data/dataRain.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.13/res/data/dataRainClip.js"></script>
    <script>
        //save in window
        window.dataAAPL=dataAAPL
        window.dataUSD2EUR=dataUSD2EUR
        window.dataTemperature=dataTemperature
        window.dataHousePriceArea=dataHousePriceArea
        window.dataFlare=dataFlare
        window.dataRain=dataRain
        window.dataRainClip=dataRainClip
    </script>

    `,
    newVue: `vuetify: new Vuetify(),`,
    globals: {
        'vue': 'Vue', //因動態加載組件, 現統一使用window內Vue, 故此處不打包進來, 若vue-cli則自動將Vue關聯至window內的Vue
        'vuetify': 'vuetify',
    },
    external: [
        'vue',
        'vuetify',
    ],
}
rollupVueToHtml('./src/App.vue', './docs/examples/app.html', opt)

