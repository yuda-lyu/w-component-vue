import fs from 'fs'
import w from 'wsemi'


let fdTar = './docs/examples/'


let h = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-tw">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <title>w-component-vue</title>

    <!-- fontawesome -->
    <link href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" rel="stylesheet">

    <!-- mdi font -->
    <link _href="https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" rel="stylesheet">

    <!-- google font -->
    <link _href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link _href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    <!-- @babel/polyfill -->
    <script nomodule src="https://cdn.jsdelivr.net/npm/@babel/polyfill/dist/polyfill.min.js"></script>

    <!-- vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>

    <!-- vuetify -->
    <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.js"></script>

    <!-- app -->
    <script src="app.umd.js?{rnd}"></script>

</head>
<body style="font-family:'Microsoft JhengHei','Avenir','Helvetica'; padding:0px;">

    <div id="app">
        <w-app></w-app>
    </div>

    <script>

        //install app
        Vue.component('w-app',app)

        //initialize
        new Vue({
            el: '#app',
            vuetify: new Vuetify(),
        })

    </script>

</body>
</html>
`


async function main() {
    //產生app.html

    //mkdirSync
    if (!fs.existsSync(fdTar)) {
        fs.mkdirSync(fdTar)
    }

    //app.html
    let happ = h.replace('{rnd}', w.genID())
    fs.writeFileSync(fdTar + 'app.html', happ, 'utf8')

}
main()


