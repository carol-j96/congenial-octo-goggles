let greet =()=>console.log("Hello!")
greet()

const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter weight: ", function(weight){
    weight=parseFloat(weight)

    rl.question("Enter height: ", function(height){
        height=parseFloat(height)

        let calculateBMI=(weight, height)=>weight/(height*height)
        console.log(calculateBMI(weight,height))

        rl.close()
    })
})
