import fs from 'fs'


function getFiles(fd) {
    let ltfs = fs.readdirSync(fd)
    return ltfs
}


export default getFiles
