const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function doubleOdds(numbers){
    return numbers.map(num=>{
        if(num%2!==0){
            return num*2
        }
        return num
    })
}
 rl.question("Enter an array of numbers: ", function (input){
    let numbers=input.split(",").map(num=>parseInt(num.trim()))
    let result=doubleOdds(numbers)
    console.log(`Resulting array: ${result}`)
    rl.close()
 })
