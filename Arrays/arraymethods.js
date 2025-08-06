const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter an array: ", function(array){
    array = array.replace(/[\[\]\s]/g, '').split(',').map(Number)

    function swapEnds(array){
        if (array.length>=2){
            let temp=array[0]
            array[0]=array[array.length-1]
            array[array.length-1]=temp
        }
        return array
    }

    let result = swapEnds(array)
    console.log(`Modified array: ${result}`)

    rl.close()
})