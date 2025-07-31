const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter a number: ", function(n){
    n=parseInt(n)

    function sigma(n){
        let sum=0
        for (let i=1; i<=n; i++){
            sum+=i
        }
        return sum
    }
    if (isNaN(n) || n<1){
        console.log(`Please enter a valid positive integer.`)
    }else{
        const result=sigma(n)
        console.log(`The sum from 1 to ${n} is: ${result}`)
    }
    rl.close()
})