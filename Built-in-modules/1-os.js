const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

const CompInfo = {
    Os:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime(),
}
console.log(CompInfo)