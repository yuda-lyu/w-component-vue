import def from 'w-screenctl'
import * as ns from 'w-screenctl'
console.log('typeof default:', typeof def)
console.log('default keys:', def && typeof def === 'object' ? Object.keys(def) : 'n/a')
console.log('namespace keys:', Object.keys(ns))
