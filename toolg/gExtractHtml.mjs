import fs from 'fs'
import _ from 'lodash'
import cheerio from 'cheerio'
//import pretty from 'pretty'
import prettyhtml from '@starptech/prettyhtml'
import w from 'wsemi'
import getFiles from 'w-package-tools/src/getFiles.mjs'
import cleanFolder from 'w-package-tools/src/cleanFolder.mjs'
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
    <title>example for {{kbname}}: {{casename}}</title>

    <!-- fontawesome -->
    <link href="https://use.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">

    <!-- mdi, 各組件使用mdi/js會於轉單頁時改為mdi icon, 故需引用mdi css -->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

    <!-- google, 各組件使用mdi/js故不需引用 -->
    <link _href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link _href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">

    <!-- data -->
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataAAPL.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataUSD2EUR.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/w-demores/res/data/dataTemperature.js"></script>
    <script>
        //save in window
        window.dataAAPL=dataAAPL
        window.dataUSD2EUR=dataUSD2EUR
        window.dataTemperature=dataTemperature
    </script>

    <!-- @babel/polyfill -->
    <script nomodule src="https://cdn.jsdelivr.net/npm/@babel/polyfill/dist/polyfill.min.js"></script>

    <!-- vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>

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
            margin-bottom: 20px;
            padding: 0px;
            font-size: 30pt;
        }
        .item {
            border-left: 3px solid #ffba75;
            margin: 5px 5px 8px 0px;
            padding: 3px 3px 5px 10px;
            font-size: 0.9rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .bk {
            vertical-align: top;
            margin-top: 20px;
        }
        .list {
            width: 100%;
        }
        @media screen and (min-width:1000px){
            .bk {
                display: inline-block;
                margin: 10px 90px 60px 0px;
            }
            .list {
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
            computed: {{computed}},
            methods: {{methods}},
        })

    </script>

</body>
</html>
`


function writeHtml(v) {
    //name, kbname, casename, temp, data, action, fn

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
    let $ = cheerio.load(v.temp, $setting)
    $('demolink').remove() //移除demolink
    $('div.bk').prepend(`<div class="item">${v.casename}</div>`) //添加基本casename
    v.temp = $.html() //覆蓋回temp
    let t_tmp = `<div class="head1">${v.kbname}</div>\r\n` + v.temp //添加組件kbname
    t_tmp = kebabProps(t_tmp)
    t_tmp = w.replace(t_tmp, `=""`, '')

    //replace tmp
    c = c.replace('{{tmp}}', t_tmp)

    //replace data
    // let data = {}
    // data[v.name] = v.data
    // let t_data = JSON.stringify(data)
    let t_data = `{ ${v.data} }`
    c = c.replace('{{data}}', t_data)

    //replace computed
    let t_computed = v.computed
    c = c.replace('{{computed}}', t_computed)

    //replace methods
    let t_methods = v.methods
    c = c.replace('{{methods}}', t_methods)

    //replace mdi-icon
    let r = `"mdi[A-Za-z]+"`
    let reg = new RegExp(r, 'g')
    let mdis = c.match(reg)
    if (mdis) {
        _.each(mdis, function(mdi) {
            let t = w.replace(mdi, '"', '') //取變數名稱
            t = _.kebabCase(t) //轉kebab
            t = `'${t}'` //添加單引號成為字串
            t = `"${t}"` //添加雙引號成為html屬性
            c = c.replace(mdi, t) //取代
        })
    }

    //prettyhtml
    c = prettyhtml(c, {
        tabWidth: 4,
    })

    //write
    //console.log(c)
    fs.writeFileSync(fdTestHtml + `${v.fn}.html`, c, 'utf8')

    //write action
    fs.writeFileSync(fdTestSrc + `${v.fn}.action.json`, v.action, 'utf8')

}


function extractAppZone(fn) {

    //read
    let h = fs.readFileSync(fn, 'utf8')

    //$
    let $ = cheerio.load(h, $setting)
    //console.log($('.bk'))

    //name
    let name = fn.split('AppZone')
    name = name[1]
    name = name.replace('.vue', '')

    //data
    let r = `'${name}':[\\s\\S]+'actions'`
    let reg = new RegExp(r, 'g')
    let data = h.match(reg)[0]
    data = data.replace(`'actions'`, ``)

    //action
    r = `'action[\\s\\S]+ {12}\\]`
    reg = new RegExp(r, 'g')
    let action = h.match(reg)[0]
    action = action.replace(`'actions':`, ``)

    //computed
    r = `(    computed:)[\\s\\S]+(    },)`
    reg = new RegExp(r, 'g')
    let computed = _.get(h.match(reg), 0)
    if (computed) {
        computed = computed.replace(`computed:`, ``)
        computed = w.strdelright(computed, 1)
    }
    else {
        computed = '{}'
    }

    //methods
    r = `(    methods:)[\\s\\S]+(    },)`
    reg = new RegExp(r, 'g')
    let methods = _.get(h.match(reg), 0)
    if (methods) {
        methods = methods.replace(`methods:`, ``)
        methods = w.strdelright(methods, 1)
    }
    else {
        methods = '{}'
    }

    function getAttr(me, name) {
        let c = me('demolink').attr(':' + name)
        c = w.replace(c, `\'`, '')
        return c
    }

    //取各個bk
    $('div.bk').map(function(i, v) {
        let me = cheerio.load(v, $setting)

        //ss
        let kbname = getAttr(me, 'kbname')
        let casename = getAttr(me, 'casename')
        let kind = getAttr(me, 'kind')
        let shell = getAttr(me, 'shell')
        //console.log(i, kbname, casename, kind, shell)

        //temp
        let temp = me.html()
        //console.log(i, temp)

        //fn
        let fnc = `${casename}_${kind}_${shell}`
        let fn = `${kbname}_${cvCasename(fnc)}`

        //writeHtml
        writeHtml({
            name, kbname, casename, temp, data, action, computed, methods, fn
        })

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
