const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter parameter: ", function(n){
    n=parseInt(n)

    function square(){
        return n*n
    }
    let result = square()
    console.log(result)

    rl.close()
})
