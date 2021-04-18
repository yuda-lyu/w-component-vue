import fs from 'fs'
import cheerio from 'cheerio'
import prettyhtml from '@starptech/prettyhtml'
import _ from 'lodash'
import w from 'wsemi'
import getFiles from 'w-package-tools/src/getFiles.mjs'
import cleanFolder from 'w-package-tools/src/cleanFolder.mjs'
import parseVueCode from 'w-package-tools/src/parseVueCode.mjs'
import cvCasename from './cvCasename.mjs'


let fdSrc = './src/'
let fdTestHtml = './test-html/'
let fdTestSrc = './test-action/'


let $setting = {
    //ignoreWhitespace: true,
    xmlMode: true,
    decodeEntities: false,
}


let h = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-tw">
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>example for {{kbname}}: {{casename}}</title>

    <!-- fontawesome -->
    <link href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" rel="stylesheet">

    <!-- mdi, 各組件使用mdi/js會於轉單頁時改為mdi icon, 故需引用mdi/css -->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">

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

    <!-- @babel/polyfill -->
    <script nomodule src="https://cdn.jsdelivr.net/npm/@babel/polyfill/dist/polyfill.min.js"></script>

    <!-- vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js"></script>

    <!-- vuetify -->
    <link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.js"></script>

    <!-- w-component-vue -->
    <script src="../dist/w-component-vue.umd.js"></script>

    <style>
        .v-application--wrap {
            display: block; /* fix for IE11 */
            font-family: inherit;
            background-color: #fff;
        }
        .head1 {
            margin: 0px;
            padding: 0px 0px 20px 0px;
            font-size: 2.5rem;
        }
        .bk {
            vertical-align: top;
            margin: 10px 0px 0px 0px;
            padding: 0px 0px 60px 0px;
        }
        @media screen and (min-width:1000px){ /* 寬版 */
            .bk {
                display: inline-block;
                margin: 0px 80px 0px 0px;
            }
            .dz {
                width: 400px;
            }
        }
    </style>

</head>
<body style="font-family:'Microsoft JhengHei','Avenir','Helvetica'; padding:20px;">

    <v-app id="app" style="font-family:inherit;">

        {{tmp}}

    </v-app>

    <script>

        //install WComponentVue
        Vue.use(window['w-component-vue'])

        //initialize
        new Vue({
            el: '#app',
            vuetify: new Vuetify(),
            data: {{data}},
            mounted: {{mounted}},
            computed: {{computed}},
            methods: {{methods}},
        })

    </script>

</body>
</html>
`


function writeHtml(v) {
    //name, kbname, casename, tmp, data, action, fn

    //kebabProps
    function kebabProps(t) {
        let reg = new RegExp(/:[\w\W][^=:; ]*=/, 'g')
        return _.replace(t, reg, function(v) {
            let prop = v
            prop = _.replace(prop, ':', '')
            prop = _.replace(prop, '=', '')
            let s = _.split(prop, '.')
            prop = _.kebabCase(s[0])
            let c = ''
            if (s.length === 2) {
                c = '.' + s[1]
            }
            prop = `:${prop}${c}=`
            return prop
        })
    }

    //c
    let c = h

    //replace cmpname, casename
    c = c.replace('{{kbname}}', v.kbname)
    c = c.replace('{{casename}}', v.casename)

    //t_tmp
    let $ = cheerio.load(v.tmp, $setting)
    $('demolink').remove() //移除demolink
    $('div.bk').prepend(`<div class="item">${v.casename}</div>`) //添加基本casename
    v.tmp = $.html() //覆蓋回temp
    let t_tmp = `<div class="head1">${v.kbname}</div>\r\n` + v.tmp //添加組件kbname
    t_tmp = kebabProps(t_tmp)
    t_tmp = w.replace(t_tmp, `=""`, '')

    //replace tmp
    c = c.replace('{{tmp}}', t_tmp)

    //replace data
    let t_data = v.data
    c = c.replace('{{data}}', t_data)

    //replace mounted
    let t_mounted = v.mounted
    c = c.replace('{{mounted}}', t_mounted)

    //replace computed
    let t_computed = v.computed
    c = c.replace('{{computed}}', t_computed)

    //replace methods
    let t_methods = v.methods
    c = c.replace('{{methods}}', t_methods)

    //replace mdi-icon
    let r = `mdi[A-Za-z]+` //有些是元素的attr有些是vue的data, 故不能包含雙引號查找
    let reg = new RegExp(r, 'g')
    let mdis = c.match(reg)
    if (mdis) {
        _.each(mdis, function(mdi) {
            let t = mdi
            t = _.kebabCase(t) //轉kebab
            t = `'${t}'` //添加單引號成為字串
            c = c.replace(mdi, t) //取代
        })
    }

    //prettyhtml
    c = prettyhtml(c, {
        tabWidth: 4,
    })
    c = c.contents //取contents
    //console.log('prettyhtml', c)

    //write
    //console.log(c)
    fs.writeFileSync(fdTestHtml + `${v.fn}.html`, c, 'utf8')

    //write action
    fs.writeFileSync(fdTestSrc + `${v.fn}.action.json`, v.action, 'utf8')

}


function extractAppZone(fn) {

    //read
    let hh = fs.readFileSync(fn, 'utf8')

    //$
    let $ = cheerio.load(hh, $setting)
    //console.log($('.bk'))

    //name
    let name = fn.split('AppZone')
    name = name[1]
    name = name.replace('.vue', '')

    //parseVueCode
    let { tmp, data, mounted, computed, methods, action } = parseVueCode(hh)

    //clear data
    let ss = data.split('\r\n')
    ss = _.filter(ss, (s) => {
        return s.indexOf('            mdi') < 0 //去除@mdi/js icon
    })
    data = ss.join('\r\n')
    //console.log('data', data)

    function getAttr(me, name) {
        //let c = me('demolink').attr(':' + name)
        let c = me.children('demolink').attr(':' + name)
        c = w.replace(c, `\'`, '')
        return c
    }

    //取各個bk
    $('div.bk').map(function(i, v) {
        // console.log('v', v)
        // let t = $(this).text()
        // let me = cheerio.load(t, $setting)
        let me = $(this)
        // console.log(i, 'me', me)

        //ss
        let kbname = getAttr(me, 'kbname')
        let casename = getAttr(me, 'casename')
        // console.log(i, 'kbname & casename', kbname, casename)

        //tmp
        let tmp = me.html()
        // console.log(i, 'tmp', tmp)

        //fn
        let fnc = `${casename}`
        let fn = `${kbname}_${cvCasename(fnc)}`

        //writeHtml
        writeHtml({ name, kbname, casename, tmp, data, mounted, computed, methods, action, fn })

    })

}


function main() {
    //由jsdoc產製之wsemi.html, 自動添加將example轉換成codepen線上編輯功能

    //fdTestHtml
    cleanFolder(fdTestHtml)
    //fs.mkdirSync(fdTestHtml)
    //await fs.promises.mkdir(fdTestHtml)

    //fdTestSrc
    cleanFolder(fdTestSrc)
    //fs.mkdirSync(fdTestSrc)
    //await fs.promises.mkdir(fdTestSrc)

    //getFiles
    let ltfs = getFiles(fdSrc)

    //filter
    ltfs = _.filter(ltfs, function(v) {
        return v.indexOf('AppZone') >= 0
    })
    //console.log(ltfs)

    //extractAppZone
    _.each(ltfs, function(v) {
        let fn = fdSrc + v
        console.log('extracting: ' + fn)
        extractAppZone(fn)
    })

}
main()
