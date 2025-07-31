let number=27
let power_of_two=1
while(power_of_two<=number){
    power_of_two*=2
}
console.log(power_of_two)

const readline=require('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
rl.question("Enter a number: ", function(input){
    let num=parseFloat(input)
    while (num>=3.5){
        num/=2
    }
    console.log(`The first number smaller than 3.5 is: ${num}`)
    rl.close()
})