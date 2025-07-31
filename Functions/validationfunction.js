const { truncate } = require('fs')
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter username: ", function(username){
    username=String(username)

    rl.question("Enter password: ", function(password){
        password=String(password)

        let isValid=(username, password)=>{
            if (username==="admin"){
                return true
            }else if (username==="user" && password==="qweasd"){
                return true
            }else{
                return false
            }
        }
        const result=isValid(username,password)
        console.log(`Login valid? ${result}`)

        rl.close()
    })
})
