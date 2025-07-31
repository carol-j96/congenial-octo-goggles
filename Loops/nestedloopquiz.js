const readline=require('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter number: ", function(n){
    let number=parseInt(n)
    for (i=1;i<number;i++){
        for (j=1;j<number;j++){
            if (i+j===number){
                console.log(i,j)
            }
        }
    }
})