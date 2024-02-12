const filestream = require('fs')
// using Call back Function
filestream.readFile('.//content/first.txt','utf8',(error, result)=>{
    if(error){
        console.log(error)
        return
    }else{
        console.log(result)
    }
    const first = result
    filestream.writeFile('.//content/res.txt',`from write file ${first}`,(error,res)=>
    {
        if(error){
            return
        }
        else{
            res 
        }
    })
})