const readline=require ('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter a number: ",function(number){
    let n=parseInt(number)
    for (i=1;i<=n;i++){
        for (j=1;j<=n;j++){
            if (i*j===n){
                console.log(i, j)
            }
        }
    }
})