const readline=require ('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter a number: ", function(number){
    let num=parseInt(number)
    let result=1
    for (i=1;i<=num;i++){
        result *= i
    }
    console.log(result)
    rl.close()
})

