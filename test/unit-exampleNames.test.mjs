import fs from 'fs'
import path from 'path'
import assert from 'assert'
import _ from 'lodash-es'
import getExampleFn from '../toolg/getExampleFn.mjs'
import { root, fdToolg, put, list, mkSbx as mkSbxIn, run, rmBase } from './tools/buildSandbox.mjs'


//unit-exampleNames: 範例輸出檔名之契約(帳本「一、建置腳本」R-B4、R-B5)
//  來源案例: 純讀src/AppZone*.vue, 以獨立於產製之regex取每個<demolink>之(kbname, casename), 經toolg/getExampleFn.mjs(產製與demolink共用之唯一公式)算檔名
//  檔名比對不分大小寫: 建置於Windows執行, 檔案系統不分大小寫, 只差大小寫之兩檔名亦互相覆寫
//  第11列案例: 以AppZoneWBadge.vue為底造合成輸入, 於test/_tmp/unit-exampleNames/<案>/沙箱以子行程執行gExtractHtml(沙箱共用層見test/tools/buildSandbox.mjs)
//  分辨力驗證用: 環境變數W_TOOLG_DIR可改由他處複製toolg, 不改動工作區


let NAME = 'unit-exampleNames'
let fdBase = path.resolve('test/_tmp', NAME)
let fdSrc = path.join(root, 'src')
let badge = fs.readFileSync(path.join(fdSrc, 'AppZoneWBadge.vue'), 'utf8')


let mkSbx = (name) => mkSbxIn(fdBase, name)


//scanExamples, 取AppZone檔內容之全部demolink, 回傳[{ kbname, casename }], 缺屬性者為null
function scanExamples(c) {
    let tags = c.match(/<demolink[\s\S]*?>/g) || []
    return tags.map((t) => {
        let k = t.match(/:kbname="'([^']*)'"/)
        let m = t.match(/:casename="'([^']*)'"/)
        return { kbname: k ? k[1] : null, casename: m ? m[1] : null }
    })
}


//findDups, 依檔名(不分大小寫)分組, 回傳撞名之組, 每組列出來源
function findDups(items) {
    let g = _.groupBy(items, (it) => getExampleFn(it.kbname, it.casename).toLowerCase())
    return _.filter(_.map(g, (v) => {
        return v.length > 1 ? v.map((it) => `${it.file}[${it.kbname} | ${it.casename}] -> ${getExampleFn(it.kbname, it.casename)}.html`).join(' ++ ') : null
    }), (v) => v !== null)
}


describe(NAME, function() {
    this.timeout(180000)

    after(function() {
        rmBase(fdBase)
    })


    describe('來源 src/AppZone*.vue(R-B4、R-B5)', function() {

        //與第11列同一篩選: src下檔名含AppZone者
        let files = fs.readdirSync(fdSrc).filter((f) => f.indexOf('AppZone') >= 0)
        let items = _.flatten(files.map((f) => {
            return scanExamples(fs.readFileSync(path.join(fdSrc, f), 'utf8')).map((it) => ({ file: f, ...it }))
        }))

        it('每個demolink皆有kbname與casename', function() {
            assert.ok(files.length > 0 && items.length > 0, `files=${files.length} examples=${items.length}`)
            let miss = items.filter((it) => it.kbname === null || it.casename === null)
            assert.deepStrictEqual(miss, [])
        })

        it('全部範例以getExampleFn算出之輸出檔名無重複(R-B4)', function() {
            //R-B4: 撞名時後寫者靜默覆寫前者, app之連結指向錯置之內容
            assert.deepStrictEqual(findDups(items), [])
        })

        it('每個kbname等於所在AppZone檔之元件名(R-B5)', function() {
            let bad = items.filter((it) => it.kbname !== _.kebabCase(it.file.replace('AppZone', '').replace('.vue', '')))
            assert.deepStrictEqual(bad, [])
        })

        it('demolink與第11列皆經getExampleFn算檔名, 不另行手寫cvCasename(R-B4)', function() {
            //範例檔名公式之唯一擁有者為toolg/getExampleFn.mjs, 另行手寫會使app之連結與產出之檔名分歧而靜默404
            let srcs = {
                'src/components/demolink.vue': fs.readFileSync(path.join(fdSrc, 'components/demolink.vue'), 'utf8'),
                'toolg/gExtractHtml.mjs': fs.readFileSync(path.join(fdToolg, 'gExtractHtml.mjs'), 'utf8'),
            }
            let bad = _.filter(_.map(srcs, (c, k) => {
                let ok = /import getExampleFn from '[./]*toolg\/getExampleFn\.mjs'|import getExampleFn from '\.\/getExampleFn\.mjs'/.test(c) && c.indexOf('getExampleFn(') >= 0 && c.indexOf('cvCasename') < 0
                return ok ? null : k
            }), (v) => v !== null)
            assert.deepStrictEqual(bad, [])
        })

    })


    describe('第11列 gExtractHtml 撞名檢查(R-B4)', function() {

        let rep = (c, a, b) => {
            assert.ok(c.indexOf(a) >= 0, `not found: ${a}`)
            return c.replace(a, b)
        }
        let kb = (s) => `:kbname="'${s}'"`
        let cn = (s) => `:casename="'${s}'"`

        //mkCase, 建沙箱並放入AppZone檔與舊頁(用以確認撞名時未清空)
        let mkCase = (name, zones) => {
            let sbx = mkSbx(name)
            _.each(zones, (c, f) => put(sbx, `src/${f}`, c))
            put(sbx, 'test-html/zz-stale.html', 'stale')
            put(sbx, 'test-action/zz-stale.action.json', '[]')
            return sbx
        }

        //expectCollision, 撞名時: 非0, stderr列出撞名檔名與各來源, 未清空且未寫出任何範例頁
        let expectCollision = (r, sbx, fn, needles) => {
            let msg = r.stdout + r.stderr
            assert.notStrictEqual(r.code, 0, msg)
            for (let s of [`${fn}.html`, ...needles]) {
                assert.ok(r.stderr.indexOf(s) >= 0, `stderr lacks[${s}]: ${r.stderr}`)
            }
            assert.deepStrictEqual(list(sbx, 'test-html'), ['zz-stale.html'], msg)
            assert.deepStrictEqual(list(sbx, 'test-action'), ['zz-stale.action.json'], msg)
        }

        it('他檔之範例誤植同一kbname而撞名時離開碼非0, stderr列出撞名檔名與兩處來源, 不清空且不寫出範例頁', function() {
            //同D1之tooltip: AppZoneWTwin之第一個範例誤植為w-badge
            let twin = rep(badge.split(kb('w-badge')).join(kb('w-twin')), kb('w-twin'), kb('w-badge'))
            let sbx = mkCase('l11-cross-file', { 'AppZoneWBadge.vue': badge, 'AppZoneWTwin.vue': twin })
            let r = run(sbx, 'toolg/gExtractHtml.mjs')
            expectCollision(r, sbx, 'w-badge_default', ['AppZoneWBadge.vue', 'AppZoneWTwin.vue'])
            assert.ok(r.stderr.indexOf('w-badge_badgeAlign.html') < 0 && r.stderr.indexOf('w-twin_') < 0, `lists non-colliding names: ${r.stderr}`)
        })

        it('同檔兩範例casename相同時離開碼非0, stderr列出撞名檔名, 不清空且不寫出範例頁', function() {
            let c = rep(badge, cn('badgeAlign'), cn('default'))
            let sbx = mkCase('l11-same-file', { 'AppZoneWBadge.vue': c })
            let r = run(sbx, 'toolg/gExtractHtml.mjs')
            expectCollision(r, sbx, 'w-badge_default', ['AppZoneWBadge.vue'])
        })

        it('casename前4段相同而因截斷撞名時離開碼非0, stderr列出撞名檔名與兩個完整casename', function() {
            let c = rep(rep(badge, cn('default'), cn('a & b & c & d & e1')), cn('badgeAlign'), cn('a & b & c & d & e2'))
            let sbx = mkCase('l11-truncate', { 'AppZoneWBadge.vue': c })
            let r = run(sbx, 'toolg/gExtractHtml.mjs')
            expectCollision(r, sbx, 'w-badge_a_b_c_d', ['a & b & c & d & e1', 'a & b & c & d & e2'])
        })

        it('檔名只差大小寫時視為撞名, 離開碼非0', function() {
            //Windows之檔案系統不分大小寫, 後寫者覆寫前者
            let c = rep(badge, cn('badgeAlign'), cn('Default'))
            let sbx = mkCase('l11-case', { 'AppZoneWBadge.vue': c })
            let r = run(sbx, 'toolg/gExtractHtml.mjs')
            expectCollision(r, sbx, 'w-badge_Default', ['AppZoneWBadge.vue'])
        })

        it('無撞名時離開碼為0, 產出之範例頁與action檔名集合等於getExampleFn之結果(含超過4段之casename)', function() {
            let c = rep(rep(badge, cn('default'), cn('a & b & c & d & e1')), cn('badgeAlign'), cn('a & b & c & e & f'))
            let sbx = mkCase('l11-unique', { 'AppZoneWBadge.vue': c })
            let r = run(sbx, 'toolg/gExtractHtml.mjs')
            assert.strictEqual(r.code, 0, r.stdout + r.stderr)
            let fns = scanExamples(c).map((it) => getExampleFn(it.kbname, it.casename))
            assert.ok(fns.indexOf('w-badge_a_b_c_d') >= 0 && fns.indexOf('w-badge_a_b_c_e') >= 0, JSON.stringify(fns))
            assert.deepStrictEqual(list(sbx, 'test-html').sort(), fns.map((fn) => `${fn}.html`).sort())
            assert.deepStrictEqual(list(sbx, 'test-action').sort(), fns.map((fn) => `${fn}.action.json`).sort())
        })

    })

})
