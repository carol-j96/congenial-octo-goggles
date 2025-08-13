const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter an odd whole number: ", function(n){
    n=parseInt(n)
    if (n%2===0||n<=0){
        console.log("Please enter a positive odd number.")
        rl.close()
        return
    }
    for (let i=1;i<=n;i+=2){
        console.log('*'.repeat(i))
    }
    rl.close()
})
