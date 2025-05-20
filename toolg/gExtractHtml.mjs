import fs from 'fs'
import * as cheerio from 'cheerio'
import _ from 'lodash-es'
import w from 'wsemi'
import getFiles from 'w-package-tools/src/getFiles.mjs'
import cleanFolder from 'w-package-tools/src/cleanFolder.mjs'
import parseVueCode from 'w-package-tools/src/parseVueCode.mjs'
import kebabPropsVueTemp from 'w-package-tools/src/kebabPropsVueTemp.mjs'
import extractHtml from 'w-package-tools/src/extractHtml.mjs'
import cvCasename from './cvCasename.mjs'


let fdSrc = './src/'
let fdTestHtml = './test-html/'
let fdTestSrc = './test-action/'


let $setting = {
    //ignoreWhitespace: true,
    xmlMode: false, //不能設定true, 否則會導致vue組件名稱變成self-closing, 此於瀏覽器指定html5規範下無法解析
    decodeEntities: false,
    // recognizeSelfClosing: false, //若xmlMode為true則recognizeSelfClosing必定為true
}


function writeHtml(v) {

    function getAppTmp() {

        //h
        let h = v.tmp
        // console.log('h', w.strleft(h, 100) + '...')

        //$
        let $ = cheerio.load(h, $setting)

        //移除demolink
        $('demolink').remove()

        //於bk前插入, 添加組件kbname
        $('div.bk').before(`<div class="head1"><span style="cursor:pointer;" title="open for copy link to view component" onclick="window.open('//yuda-lyu.github.io/w-component-vue/examples/app.html?cmp='+this.innerText,'_blank')">${v.kbname}</span></div>`)

        //於bk內插入, 添加範例casename
        $('div.bk').prepend(`<div class="item">${v.casename}</div>`)

        //to html
        h = $('body').html()
        // console.log('getAppTmp', w.strleft(h, 100) + '...')

        return h
    }

    function procHtml(h) {

        //replace mdi-icon
        let r = `mdi[A-Za-z]+` //有些mdi是放在元素attr內, 有些是放在vue data內, 故不能包含雙引號(限定attr)查找
        let reg = new RegExp(r, 'g')
        let mdis = h.match(reg)
        if (mdis) {
            _.each(mdis, (mdi) => {
                let c = mdi
                c = _.kebabCase(c) //轉kebab
                c = `'${c}'` //添加單引號成為字串
                h = h.replace(mdi, c) //取代
            })
        }

        return h
    }

    //opt
    let opt = {
        title: `w-component-vue`,
        head: `
    
        <!-- extractHtml已自動添加@babel/polyfill與vue -->
    
        <!-- vuetify -->
        <link href="https://cdn.jsdelivr.net/npm/vuetify@2.6.14/dist/vuetify.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/vuetify@2.6.14/dist/vuetify.min.js"></script>
    
        <!-- fontawesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/all.min.css" rel="stylesheet">
    
        <!-- mdi, 各組件使用mdi/js會於轉單頁時改為mdi icon, 故需引用mdi/css -->
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css" rel="stylesheet">
    
        <!-- google, 各組件使用mdi/js故不需引用 -->
        <link _href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
        <link _href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    
        <!-- data -->
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataAAPL.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataUSD2EUR.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataTemperature.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataHousePriceArea.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataFlare.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataRain.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataRainClip.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/w-demores@1.0.27/res/data/dataCivilSoilCodeIcon.js"></script>
      
        <!-- w-component-vue -->
        <script src="../dist/w-component-vue.umd.js"></script>
    
        <style>
            .v-application--wrap {
                /* width與max-width fix for IE11, 其外不能使用padding或margin避免失效 */
                width: 100vw;
                max-width: 100vw;
                font-family: inherit;
                background: #fff;
            }
            /* 組件所須全域樣式 */
            .item { /* 因item位於demolink, 提取各範例html後會刪除demolink, 故得額外補上 */
                border-left: 3px solid #ffba75;
                margin: 5px 5px 8px 0px;
                padding: 3px 3px 5px 10px;
                font-size: 0.9rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .head1 {
                padding: 0px 0px 20px 0px;
                font-size: 2.5rem;
            }
            .bkh { /* 寬 */
                padding:20px;
            }
            @media screen and (max-width:800px){ /* 中 */
                .bkh {
                    padding:10px;
                }
            }
            @media screen and (max-width:400px){ /* 窄 */
                .bkh {
                    padding:5px;
                }
            }
            .bk { /* 寬 */
                display: inline-block;
                vertical-align: top;
                padding: 0px 80px 60px 0px;
            }
            @media screen and (max-width:1000px){ /* 中窄 */
                .bk {
                    display: block;
                    padding: 0px 0px 50px 0px;
                }
            }
            .cpitem {
                transition: all 0.3s;
                padding: 5px 15px;
                cursor: pointer;
            }
            .cpitem-white {
                background: #fff;
            }
            .cpitem-white:hover {
                background: #eee;
            }
            .cpitem-black {
                background: #333;
            }
            .cpitem-black:hover {
                background: #555;
            }
        </style>
    
        `,
        appTag: `v-app`,
        appClass: `bkh`,
        appStyle: `font-family:inherit;`,
        appTmp: getAppTmp(),
        installVue: `Vue.use(window['w-component-vue'])`,
        newVue: `vuetify: new Vuetify()`,
        data: v.data,
        mounted: v.mounted,
        computed: v.computed,
        methods: v.methods,
        action: v.action,
        procHtml,
        fpHtml: `${fdTestHtml}${v.fn}.html`,
        fpAction: `${fdTestSrc}${v.fn}.action.json`,
    }

    //extractHtml
    extractHtml(opt)

}


function extractAppZone(fn) {

    //read
    let hh = fs.readFileSync(fn, 'utf8')
    // console.log('hh', hh)

    //parseVueCode
    let { tmp, data, mounted, computed, methods, action } = parseVueCode(hh)

    //vue屬性轉kebab, 記得要在cheerio處理前, 否則attr都會被改成小寫
    tmp = kebabPropsVueTemp(tmp)
    tmp = w.replace(tmp, `=""`, '')
    // console.log('tmp', w.strleft(tmp, 100) + '...')

    //$
    let $ = cheerio.load(tmp, $setting)
    // console.log(`$('div.bk').html()`, w.strleft($('div.bk').html(), 100) + '...')

    //name
    let name = fn.split('AppZone')
    name = name[1]
    name = name.replace('.vue', '')

    //clear data
    let ss = data.split('\r\n')
    ss = _.filter(ss, (s) => {
        return s.indexOf('            mdi') < 0 //去除@mdi/js icon
    })
    ss = _.map(ss, (v, k) => {
        if (k === 0) {
            return v
        }
        return `        ${v}`
    })
    data = ss.join('\r\n')
    //console.log('data', data)

    function getAttr(h, name) {
        // console.log('getAttr', h, name)
        let $ = cheerio.load(h, $setting)
        let c = $('demolink').attr(':' + name)
        c = w.replace(c, `\'`, '')
        return c
    }

    //取各個bk, 先於各bk外層添加shell在取html, 才能取到bk含自己的html
    $('div.bk').wrap('<div class="shell"></div>')
    $('div.shell').map((i, v) => {
        // console.log('v', v)

        //me
        let me = $(v)
        // console.log(i, 'me', me)

        //tmp
        let tmp = me.html()
        // console.log(i, 'tmp', tmp)

        //ss
        let kbname = getAttr(tmp, 'kbname')
        let casename = getAttr(tmp, 'casename')
        // console.log(i, kbname, ',', casename)

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
    ltfs = _.filter(ltfs, (v) => {
        return v.indexOf('AppZone') >= 0
    })
    // ltfs = [
    //     'AppZoneWJsonView.vue',
    // ]
    // console.log(ltfs)

    //extractAppZone
    _.each(ltfs, (v) => {
        let fn = fdSrc + v
        console.log('extracting: ' + fn)
        extractAppZone(fn)
    })

}
main()
