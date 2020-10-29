let kpItems = {}
// setInterval(() => {
//     console.log('kpItems', kpItems)
// }, 1000)

function globalMemory() {

    function set(key, value) {
        kpItems[key] = value
        // console.log('globalMemory kpItems', key, kpItems)
    }

    function get(key) {
        return kpItems[key]
    }

    function remove(key) {
        delete kpItems[key]
    }

    return {
        set,
        get,
        remove,
    }
}


export default globalMemory
