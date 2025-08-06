const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter array: ", function(array){
    array = array.replace(/[\[\]\s]/g, '').split(',').map(Number)

    function processArray(array){
        array.pop()
        array.push(10)
        array.sort((a, b)=>a-b)
        let index=array.indexOf(5)
        if (index!==-1){
            array[index]=50
        }
        array.reverse()
        return array
    }
    console.log(processArray(array))
    rl.close()
})