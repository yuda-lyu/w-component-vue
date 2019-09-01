function pmSeries(pms, fn) {
    return new Promise((resolve, reject) => {
        pms.reduce(function(pmm, v) {
            return pmm.then(function(t) {
                return fn(v)
            })
        }, Promise.resolve())
            .then(function() {
                resolve()
            }).catch(function(err) {
                reject(err)
            })
    })
}

export default pmSeries
