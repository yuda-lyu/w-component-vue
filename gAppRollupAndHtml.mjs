//import _ from 'lodash'
import fs from 'fs'
import genID from 'wsemi/src/genID'


let fd_src = 'src/'
let fd_tar = 'docs/examples/'
let fn_rollup_src = '.rollup.mjs'
let fn_rollup_tar = '.rollupApp'


let cc = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-tw">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <title>w-component-vue</title>

    <!-- fontawesome -->
    <link href="https://use.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">

    <!-- google font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet">

    <!-- mdi font -->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" rel="stylesheet">

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
    //讀取vue組件與rollup範本(.rollup.mjs), 再自動生成rollup設定檔, 打包app

    //r
    let r = fs.readFileSync(fn_rollup_src, 'utf8')

    //get name
    let ltfs = ['App']

    //cps
    let cps = JSON.stringify(ltfs)

    //c
    let c = r
    c = c.replace('{fd_src}', fd_src)
    c = c.replace('{fd_tar}', fd_tar)
    c = c.replace('{cps}', cps)

    //write
    //console.log(c)
    fs.writeFileSync(fn_rollup_tar, c, 'utf8')

    //app.html
    let happ = cc
    happ = happ.replace('{rnd}', genID())
    fs.writeFileSync(fd_tar + 'app.html', happ, 'utf8')

}
main()
