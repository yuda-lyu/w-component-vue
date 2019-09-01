import path from 'path'
import _ from 'lodash'
import rollup from 'rollup'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import minify from 'rollup-plugin-babel-minify'
import getPks from './getPks.mjs'


/**
 * 使用rollup編譯檔案
 *
 * @param {Object} opt 輸入設定物件
 * @param {String} opt.fn 輸入原始碼檔案名稱字串，檔案需含副檔名，不含所在資料夾
 * @param {String} opt.fdSrc 輸入原始碼檔案所在資料夾字串
 * @param {String} opt.fdTar 輸入編譯檔案至儲存資料夾字串
 * @param {Function} [opt.hookNameDist=null]  輸入強制指定編譯檔案名稱函數，預設為null
 * @param {String} [opt.nameDistType=''] 輸入編譯檔案名稱格式字串，預設為''，可選'kebabCase'
 * @param {String} [opt.format='umd'] 輸入編譯格式字串，預設為'umd'，可選'umd','iife'
 * @param {Boolean} [opt.bSourcemap=true] 輸入編譯檔案是否提供sourcemap布林值，預設為true
 * @param {Boolean} [opt.bBanner=true] 輸入編譯檔案是否帶有開頭banner布林值，預設為true
 * @param {Boolean} [opt.bMinify=true] 輸入編譯檔案是否進行壓縮布林值，預設為true
 * @param {Object} opt.globals 輸入指定內外模組的關聯性物件
 * @param {Array} opt.external 輸入指定內部模組需引用外部模組陣列
 */
async function rollupFile(opt = {}) {

    //console
    console.log('compiling: ' + opt.fn)

    //pkg
    let pkg = getPks()

    //env
    let env = process.env.NODE_ENV

    //fn
    let fn = opt.fn

    //fdSrc
    let fdSrc = opt.fdSrc
    if (fdSrc.substr(fdSrc.length - 1, 1) !== path.sep) {
        fdSrc = fdSrc += path.sep
    }

    //fdTar
    let fdTar = opt.fdTar
    if (fdTar.substr(fdTar.length - 1, 1) !== path.sep) {
        fdTar = fdTar += path.sep
    }

    //nameTrue
    let ssfn = _.split(fn, '.')
    let nameTrue = fn
    if (ssfn.length >= 2) {
        nameTrue = _.join(_.dropRight(ssfn), '.')
    }

    //nameExt
    let nameExt = _.last(ssfn)

    //nameDistType
    let nameDistType = opt.nameDistType

    //nameDist
    let nameDist = nameTrue
    if (nameDistType === 'kebabCase') {
        nameDist = _.kebabCase(nameTrue)
    }

    //hookNameDist
    let hookNameDist = opt.hookNameDist
    if (_.isFunction(hookNameDist)) {
        nameDist = hookNameDist(nameDist, nameTrue, fn)
    }

    //format
    let format = opt.format
    if (!format) {
        format = 'umd'
    }

    //license
    let license = opt.license
    if (!license) {
        license = 'MIT'
    }

    //bSourcemap
    let bSourcemap = opt.bSourcemap
    bSourcemap = bSourcemap !== false

    //banner
    let bBanner = opt.bBanner
    let cbanner = null
    if (bBanner !== false) {
        cbanner = `/*!\n * ${nameDist} v${pkg.version}\n * (c) 2018-2019 ${pkg.author}\n * Released under the ${license} License.\n */`
    }
    let banner = cbanner

    //minify
    let bMinify = opt.bMinify
    bMinify = bMinify !== false

    //globals, 提供字串需解析成物件, 指定內外模組的關聯性，左邊key為內部使用之模組名稱，右邊value為外部提供之模組名稱
    let globals = opt.globals

    //external, 提供字串需解析成陣列, 指定哪些內部模組需引用外部模組
    let external = opt.external

    //plugins
    let plugins = []

    if (nameExt === 'vue') {
        plugins.push(vue())
    }

    plugins.push(replace({
        'process.env.NODE_ENV': JSON.stringify(env)
    }))

    plugins.push(commonjs())

    plugins.push(resolve({
        preferBuiltins: false,
        browser: true,
    }))

    plugins.push(babel({
        runtimeHelpers: true,
        //exclude: 'node_modules/**', //can not exclude node_modules, need compile packages in node_modules
        presets: [
            [
                '@babel/preset-env',
                {
                    useBuiltIns: 'entry', //entry usage, usage is not stable
                    corejs: 3,
                }
            ]
        ],
    }))

    plugins.push(postcss({
        extensions: ['.css']
    }))

    if (bMinify) {
        plugins.push(minify({ comments: false, }))
    }

    //input, 欲編譯的檔案
    let input = `${fdSrc}${fn}`

    //file, 編譯後檔案
    let file = `${fdTar}${nameDist}.${format}.js`

    //inputOptions
    let inputOptions = {
        external,
        input,
        plugins,
    }

    //outputOptions
    let outputOptions = {
        banner,
        globals,
        format,
        name: nameDist,
        file,
        sourcemap: bSourcemap,
    }

    //bundle
    let bundle = await rollup.rollup(inputOptions)

    //output
    // const { output } = await bundle.generate(outputOptions)
    // console.log('output', output)

    //write
    let r = await bundle.write(outputOptions)

    //console
    console.log('\x1b[32m%s\x1b[0m', 'output: ' + `${nameDist}.${format}.js`)

    return r
}


export default rollupFile
