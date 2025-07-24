const readline=require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter your age: ", function (age){
    age=parseInt(age)
    let years =120-age
    console.log(`${years} years till 120`)
    rl.close()
})
