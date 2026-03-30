import rollupVueToHtml from 'w-package-tools/src/rollupVueToHtml.mjs'


let opt = {
    title: `w-component-vue`,
    head: `

    <!-- rollupVueToHtml已自動添加@babel/polyfill與vue -->

    <!-- fontawesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/all.min.css" rel="stylesheet">

    <!-- mdi, 各組件使用mdi/js故不需引用 -->
    <link _href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" rel="stylesheet">

    <!-- google, 各組件使用mdi/js故不需引用 -->
    <link _href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link _href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    <!-- data -->
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataAAPL.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataUSD2EUR.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataTemperature.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataHousePriceArea.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataFlare.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataRain.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataRainClip.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataCivilSoilCodeIcon.js"></script>
   
    `,
    globals: {
        'vue': 'Vue', //因動態加載組件, 現統一使用window內Vue, 故此處不打包進來, 若vue-cli則自動將Vue關聯至window內的Vue
    },
    external: [
        'vue',
    ],
}
rollupVueToHtml('./src/App.vue', './docs/examples/app.html', opt)

