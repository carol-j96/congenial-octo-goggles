const readline=require('readline')
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function sumRange(start, end){
    let sum=0
    const min=Math.min(start, end)
    const max=Math.max(start, end)

    for (let i=min;i<=max;i++){
        sum+=1
    }
    console.log(`The sum of integers from ${min} to ${max} is: ${sum}`)
}
rl.question("Enter the starting number: ", function(startInput){
    rl.question("Enter the ending number: ", function(endInput){
        const start=Number(startInput)
        const end=Number(endInput)

        if (isNaN(start)||isNaN(end)){
            console.log(`Please enter valid numbers.`)
        }else{
            sumRange(start,end)
        }

        rl.close()
    })
})