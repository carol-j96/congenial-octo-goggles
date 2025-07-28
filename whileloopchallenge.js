const readline=require('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.question("Enter a number:",function(input){
    let number=parseFloat(input)
    while(number<=100){
        number*=2
    }
    console.log(`The first number larger than 100: ${number}`)
    rl.close()
})
