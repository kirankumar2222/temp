const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    // res.write('Hello this kiran kumar')
    res.end('Hello this kiran kumar')
    }
    if(req.url === '/about'){
        res.end(`welcome to the about page`)
    }
})
server.listen(5000)