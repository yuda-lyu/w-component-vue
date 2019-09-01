import fs from 'fs'


function getPks() {
    let c = fs.readFileSync('./package.json', 'utf8')
    return JSON.parse(c)
}


export default getPks
