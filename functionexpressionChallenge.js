const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter length: ",function(length){
    length=parseInt(length)

    rl.question("Enter width: ", function(width){
        width=parseInt(width)

        rl.question("Enter height: ", function(height){
            height=parseInt(height)

            let calculateVolume=function(length, width, height){
                return length*width*height
            }
            console.log(calculateVolume(length,width,height))

            rl.close()
        })
    })
})
