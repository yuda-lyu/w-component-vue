import fs from 'fs'


function setPks(pks) {
    let c = JSON.stringify(pks, null, 2)
    fs.writeFileSync('./package.json', c, 'utf8')
}


export default setPks
