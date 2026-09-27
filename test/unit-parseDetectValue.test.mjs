import assert from 'assert'
import parseDetectValue from '../src/js/parseDetectValue.mjs'


//parseDetectValue之契約測試: 偵測類指令值之啟停、設定、可用鍵、正規化與重建判斷用之快照


let spec = {
    keys: ['event', 'refreshKey', 'tolerancePixel', 'sync', 'attributeFilter', 'getBase'],
    refreshKey: 'refreshKey',
}


describe(`parseDetectValue`, function() {

    it(`should enable with default settings when no value or true is given`, function() {
        for (let v of [undefined, true]) {
            let p = parseDetectValue(v, spec)
            assert.strict.deepStrictEqual([p.enabled, p.cfg, p.funs, p.snap, p.rkey, p.warns], [true, {}, [], { vals: {}, funs: [] }, undefined, []])
        }
    })

    it(`should disable for false and null`, function() {
        for (let v of [false, null]) {
            let p = parseDetectValue(v, spec)
            assert.strict.deepStrictEqual([p.enabled, p.snap, p.warns], [false, null, []])
        }
    })

    it(`should treat other types as no value and warn`, function() {
        for (let [v, t] of [['yes', 'string'], [1, 'number'], [[1], 'array'], [() => {}, 'function']]) {
            let p = parseDetectValue(v, spec)
            assert.strict.deepStrictEqual([p.enabled, p.cfg], [true, {}])
            assert.strict.deepStrictEqual(p.warns, [`指令值須為true、false、null或物件, 目前為${t}, 視同未給(啟用並使用預設設定)`])
        }
    })

    it(`should keep only usable keys and warn about the others`, function() {
        let p = parseDetectValue({ sync: true, tolerance: 2, extra: {} }, spec)
        assert.strict.deepStrictEqual(p.cfg, { sync: true })
        assert.strict.deepStrictEqual(p.warns, ['設定鍵tolerance、extra不適用而不採用, 可用之鍵為event、refreshKey、tolerancePixel、sync、attributeFilter、getBase'])
    })

    it(`should give equal snapshots for new objects with equal contents, including arrays and NaN`, function() {
        let a = parseDetectValue({ tolerancePixel: NaN, attributeFilter: ['class'], getBase: () => 1 }, spec)
        let b = parseDetectValue({ tolerancePixel: NaN, attributeFilter: ['class'], getBase: () => 2 }, spec)
        assert.strict.deepStrictEqual(a.snap, b.snap)
        assert.strict.deepStrictEqual(a.funs, ['getBase'])
    })

    it(`should give different snapshots when a value or the presence of a function changes`, function() {
        let a = parseDetectValue({ attributeFilter: ['class'] }, spec)
        let b = parseDetectValue({ attributeFilter: ['class', 'style'] }, spec)
        let c = parseDetectValue({ attributeFilter: ['class'], getBase: () => 1 }, spec)
        assert.notDeepStrictEqual(a.snap, b.snap)
        assert.notDeepStrictEqual(a.snap, c.snap)
    })

    it(`should copy values into the snapshot, so an in-place change of the value is detected`, function() {
        let value = { attributeFilter: ['class'] }
        let a = parseDetectValue(value, spec)
        value.attributeFilter.push('style')
        let b = parseDetectValue(value, spec)
        assert.notDeepStrictEqual(a.snap, b.snap)
    })

    it(`should return the refresh key apart from settings and snapshot`, function() {
        let a = parseDetectValue({ sync: true, refreshKey: { k: 1 } }, spec)
        let b = parseDetectValue({ sync: true, refreshKey: { k: 2 } }, spec)
        assert.strict.deepStrictEqual([a.cfg, a.rkey], [{ sync: true }, { k: 1 }])
        assert.strict.deepStrictEqual(a.snap, b.snap)
        assert.notDeepStrictEqual(a.rkey, b.rkey)
    })

    it(`should not throw for circular values`, function() {
        let o = { k: 1 }
        o.self = o
        let p = parseDetectValue({ attributeFilter: o }, spec)
        assert.strict.deepStrictEqual(p.snap.vals.attributeFilter.self.k, 1)
    })

    it(`should apply normalize with whether an object was given, and collect its warnings`, function() {
        let calls = []
        let normalize = (cfg, { given }) => {
            calls.push(given)
            return { cfg: { ...cfg, event: 'resizeWithWindow' }, warns: given ? ['w'] : [] }
        }
        let p1 = parseDetectValue(undefined, { ...spec, normalize })
        let p2 = parseDetectValue({}, { ...spec, normalize })
        assert.strict.deepStrictEqual(calls, [false, true])
        assert.strict.deepStrictEqual([p1.cfg, p1.warns, p2.warns], [{ event: 'resizeWithWindow' }, [], ['w']])
    })

})
