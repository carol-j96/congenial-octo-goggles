const readline=require('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter a number: ", function(number){
    const times=parseInt(number,10)
    function calculateSum(){
        const n=10000
        const sum=n*(n+1)/2
        console.log(sum)
    }
    for (let i=0;i<times;i++){
        calculateSum()
    }
    rl.close()
})
    