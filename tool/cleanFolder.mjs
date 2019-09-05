import fs from 'fs'


function core(path) {
    fs.readdirSync(path).forEach(function(file, index) {
        var curPath = path + '/' + file
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
            core(curPath)
        }
        else { // delete file
            fs.unlinkSync(curPath)
        }
    })
    fs.rmdirSync(path)
}


function cleanFolder(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index) {
            var curPath = path + '/' + file
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                core(curPath)
            }
            else {
                fs.unlinkSync(curPath)
            }
        })
    }
}


export default cleanFolder
