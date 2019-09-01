import fs from 'fs'


function deleteFolder(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index) {
            var curPath = path + '/' + file
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath)
            }
            else { // delete file
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path)
    }
}


export default deleteFolder
