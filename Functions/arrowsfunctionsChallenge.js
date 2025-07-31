const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter number: ", function(n){
    n=parseInt(n)

    let sumOfEvens=(n)=>{
        let sum=0
        for(let i=2;i<=n;i+=2){
            sum+=i
        }
        return sum
    }

    if(isNaN(n) || n<1){
        console.log("Please enter a valid positive integer.")
    }else{
        const result=sumOfEvens(n)
        console.log(`The sum of even numbers from 1 to ${n} is: ${result}`)
    }

    rl.close()
})