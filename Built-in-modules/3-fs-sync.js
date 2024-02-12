// File Stream
const file = require('fs')
const firstfile = file.readFileSync('.//content/first.txt','utf8')
console.log(firstfile)
file.writeFileSync('.//content/res.txt',`welcome buddy!!! ${firstfile}`,{flag: 'a'}) // flag a -> append
