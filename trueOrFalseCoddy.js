const readline=require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter the number: ", function (number){
    number=parseInt(number)
    if (number===1){
        console.log("T")
    }else {
        console.log("F")
    }
})