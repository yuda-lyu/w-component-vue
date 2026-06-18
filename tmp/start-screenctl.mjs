import pkg from 'w-screenctl'

const WScreenctl = pkg.default

await WScreenctl({ port: 7000 })
console.log('w-screenctl started at http://localhost:7000')
