const path = require('path')

console.log(path.sep)

const filepath = path.join('/modules','2-modules.js')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const url = path.resolve(__dirname,'modules','2-modules')
console.log(url)